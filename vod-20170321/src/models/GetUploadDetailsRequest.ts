// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media file, namely, the audio or video ID. You can specify a maximum of 20 IDs. Separate multiple IDs with commas (,). You can use one of the following methods to obtain the audio or video ID:
   * *   Log on to the [ApsaraVideo VOD](https://vod.console.aliyun.com) console. In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, you can view the audio or video ID. Use this method if the audio or video file is uploaded by using the ApsaraVideo VOD console.
   * *   View the value of the VideoId parameter returned by the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you called to obtain an upload URL and credential.
   * *   View the value of the VideoId parameter returned by the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation that you called to query media information after the audio or video file is uploaded.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ccbdb06fa83012be4d8083f6****,7d2fbc380b0e08e55f****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The type of the media file. Set the value to **video**, which indicates audio and video files.
   * 
   * @example
   * video
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

