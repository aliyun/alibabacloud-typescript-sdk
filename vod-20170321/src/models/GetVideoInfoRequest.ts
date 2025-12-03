// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoInfoRequest extends $dara.Model {
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The ID of the audio or video file. You can specify only one ID in each call. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, view the ID of the audio or video file. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of VideoId from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you called to obtain the upload URL and credential.
   * *   Obtain the value of VideoId from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation that you called to query the media ID after the media file is uploaded.
   * 
   * @example
   * 9b73864d75f1d231e9001cd5f8****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      referenceId: 'ReferenceId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceId: 'string',
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

