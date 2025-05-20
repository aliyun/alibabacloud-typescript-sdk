// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoPreviewPlayMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The preview type. You must enable the corresponding video transcoding feature. Valid values:
   * 
   * *   live_transcoding: previews a live stream while transcoding is in progress.
   * *   quick_video: previews a video while transcoding is in progress.
   * *   offline_audio: previews a piece of audio after the audio is transcoded offline.
   * *   offline_video: previews a video after the video is transcoded offline.
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
   * The share ID. If you want to manage a file by using a sharing link, carry the `x-share-token` header in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify at least either `share_id` or `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

