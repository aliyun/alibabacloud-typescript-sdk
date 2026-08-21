// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMultipartUploadRequest extends $dara.Model {
  /**
   * @remarks
   * The media ID, which is the audio or video ID (VideoId). You can obtain the ID by using the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - When you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the audio or video ID is the value of the VideoId response parameter.
   * - After the audio or video file is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ccbdb06fa3012be4d8083f6****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media type. Set the value to **video** (audio/video).
   * 
   * This parameter is required.
   * 
   * @example
   * video
   */
  mediaType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaType: 'string',
      ownerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

