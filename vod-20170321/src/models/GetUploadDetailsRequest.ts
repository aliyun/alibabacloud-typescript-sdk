// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The media IDs, which are audio or video IDs (VideoId). Separate multiple IDs with commas (,). A maximum of 20 IDs are supported. You can obtain the IDs by using the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - When you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the video ID is the value of the VideoId response parameter.
   * - After the audio or video file is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID, which is the value of the VideoId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ccbdb06fa83012be4d8083f6****,7d2fbc380b0e08e55f****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The media type. Set the value to **video** (audio/video).
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

