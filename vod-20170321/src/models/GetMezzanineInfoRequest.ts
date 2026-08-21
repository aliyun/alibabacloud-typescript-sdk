// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMezzanineInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The type of additional information. Separate multiple values with commas (,). By default, only basic information is returned. Valid values:
   * 
   * - **video**: video stream information.
   * - **audio**: audio stream information.
   * 
   * @example
   * video
   */
  additionType?: string;
  /**
   * @remarks
   * The validity period of the signature for FileURL (source file URL). Unit: seconds. Default value: **3600**. The minimum value is **1**.
   *  - If OutputType is set to **cdn**:
   *     - FileURL expires periodically only if URL signing is enabled. Otherwise, FileURL is permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: unlimited.
   *     - Default value: **3600** if this parameter is not specified.
   * - If OutputType is set to **oss**:
   *     - FileURL expires periodically only if the storage permission is set to private. Otherwise, FileURL is permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: To reduce security risks to the origin server, the maximum value is **2592000** (30 days) when the audio or video file is stored in a bucket managed by ApsaraVideo VOD, and **129600** (36 hours) when the file is stored in your own OSS bucket.
   *     - Default value: **3600** if this parameter is not specified.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The type of the output URL. Valid values:
   * 
   * - **oss**: back-to-origin URL.
   * - **cdn** (default): CDN URL.
   * 
   * > If the bucket type of the source file is in, only the OSS URL is returned.
   * 
   * @example
   * oss
   */
  outputType?: string;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens (-), and underscores (_) are supported. The value must be 6 to 64 characters in length and is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The audio or video ID. You can obtain the ID by using one of the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - Obtain the video ID from the VideoId parameter returned by the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation when you request an upload URL and credential.
   * - After the video is uploaded, call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of VideoId in the response.
   * 
   * @example
   * 1f1a6fc03ca04814031b8a6559e****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      additionType: 'AdditionType',
      authTimeout: 'AuthTimeout',
      outputType: 'OutputType',
      referenceId: 'ReferenceId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionType: 'string',
      authTimeout: 'number',
      outputType: 'string',
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

