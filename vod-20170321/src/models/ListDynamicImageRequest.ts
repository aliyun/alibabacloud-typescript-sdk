// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicImageRequest extends $dara.Model {
  /**
   * @remarks
   * The video ID. You can obtain the video ID by using one of the following methods:
   * - For videos uploaded by using the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - Obtain the video ID from the value of the VideoId response parameter when you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential.
   * - After the video is uploaded, call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID. The video ID is the value of the VideoId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e114f1100590c3193918fd449a****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

