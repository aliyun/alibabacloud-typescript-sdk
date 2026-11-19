// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The media IDs, which are the audio or video IDs (VideoId). Separate multiple IDs with commas (,). You can specify up to 20 IDs. You can obtain the IDs by using one of the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Library** > **Audio and Video** to view the audio or video IDs.
   * - When you call the [Create upload URLs and credentials for audio and video files](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the value of the VideoId response parameter is the media ID.
   * - After an audio or video file is uploaded, you can call the [Search for media information](https://help.aliyun.com/document_detail/86044.html) operation to query the media ID. The value of the VideoId response parameter is the media ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ccbdb06fa83012be4d8083f6****,7d2fbc380b0e08e55f****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The media type. Set the value to **video**, which indicates audio and video files.
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

