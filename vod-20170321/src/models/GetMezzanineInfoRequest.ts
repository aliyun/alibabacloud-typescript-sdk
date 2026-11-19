// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMezzanineInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The type of additional information. Separate multiple values with commas (,). By default, only basic information is returned. Valid values:
   * 
   * - **video**: the video stream information.
   * - **audio**: the audio stream information.
   * 
   * @example
   * video
   */
  additionType?: string;
  /**
   * @remarks
   * The expiration time of the signature for the FileURL (source file URL). Unit: seconds. Default value: **3600**. Minimum value: **1**.
   *  - If OutputType is set to **cdn**:
   *     - The FileURL expires periodically only if URL authentication is enabled. Otherwise, the FileURL is permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: unlimited.
   *     - Default value: **3600** if not specified.
   * - If OutputType is set to **oss**:
   *     - The FileURL expires periodically only if the storage permission is set to private. Otherwise, the FileURL is permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: To reduce security risks of the origin server, the maximum value is **2592000** (30 days) when the audio or video file is stored in an ApsaraVideo VOD bucket, and **129600** (36 hours) when the audio or video file is stored in a user-owned OSS bucket.
   *     - Default value: **3600** if not specified.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The output URL type. Valid values:
   * 
   * - **oss**: the back-to-origin URL.
   * - **cdn** (default): the accelerated URL.
   * 
   * > If the bucket where the source file is stored is of the in type, only the OSS URL is returned.
   * 
   * @example
   * oss
   */
  outputType?: string;
  /**
   * @remarks
   * The custom ID. The ID must be 6 to 64 characters in length and can contain only lowercase letters, uppercase letters, digits, hyphens (-), and underscores (_). The ID must be unique per user.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The audio or video ID. You can obtain the ID by using one of the following methods:
   * - For an audio or video file uploaded in the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Assets** > **Audio/Video** to view the video ID.
   * - When you call the [Obtain the upload URL and credential for a video](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the audio or video ID is the value of the VideoId response parameter.
   * - After a video is uploaded, you can call the [Search media information](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId response parameter.
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

