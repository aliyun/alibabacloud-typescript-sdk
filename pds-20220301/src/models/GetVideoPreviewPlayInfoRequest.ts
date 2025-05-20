// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoPreviewPlayInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The category. It is the transcoding mode that you want to use. Valid values:
   * 
   * *   live_transcoding: plays a live stream while transcoding is in progress.
   * *   quick_video: plays a video while transcoding is in progress.
   * *   offline_audio: plays a piece of audio after the audio is transcoded offline.
   * *   offline_video: plays a video after the video is transcoded offline.
   * 
   * This parameter is required.
   * 
   * @example
   * live_transcoding
   */
  category?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * Specifies whether to obtain the URL of the master M3U8 playlist. This parameter is valid only if the category parameter is set to quick_video.
   * 
   * @example
   * false
   */
  getMasterUrl?: boolean;
  /**
   * @remarks
   * Specifies whether not to query the playback URL. If you set this parameter to true, only transcoding metadata is returned. The video is not transcoded in the TS format, and the playback URL is not returned. If you set this parameter to false, the playback URL is returned. If the video has not been transcoded by using the template specified by template_id, the transcoding process is triggered. You are charged value-added service fees generated for transcoding.
   * 
   * @example
   * true
   */
  getWithoutUrl?: boolean;
  /**
   * @remarks
   * Specifies whether to initiate re-transcoding. If you set this parameter to true, the file is re-transcoded, with a fixed 202 response for retries. Before you use this parameter, contact us to enable it for you.
   * 
   * @example
   * true
   */
  reTranscode?: boolean;
  /**
   * @remarks
   * The share ID. If you want to share a file, carry the `x-share-token` header for authentication in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify one of `share_id` and `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the definition template. If you leave this parameter empty, all definition templates are available.
   * 
   * @example
   * 264_480p
   */
  templateId?: string;
  /**
   * @remarks
   * The validity period of the URL. Unit: seconds. Default value: 900, which is 15 minutes. Maximum value: 14400, which is 4 hours.
   * 
   * @example
   * 3600
   */
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fileId: 'file_id',
      getMasterUrl: 'get_master_url',
      getWithoutUrl: 'get_without_url',
      reTranscode: 're_transcode',
      shareId: 'share_id',
      templateId: 'template_id',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fileId: 'string',
      getMasterUrl: 'boolean',
      getWithoutUrl: 'boolean',
      reTranscode: 'boolean',
      shareId: 'string',
      templateId: 'string',
      urlExpireSec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

