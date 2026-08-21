// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoPlayAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The API version number. Set the value to **1.0.0**.
   * 
   * @example
   * 1.0.0
   */
  apiVersion?: string;
  /**
   * @remarks
   * The expiration time of the playback credential. Unit: **seconds**. If the credential expires, the playback URL cannot be obtained. You must obtain a new credential.
   * 
   * - Default value: **100**.
   * - Valid values: `[100,3000]`.
   * 
   * @example
   * 100
   */
  authInfoTimeout?: number;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. Length: 6 to 64 characters. The ID is unique per user.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The audio or video ID. Only a single audio or video ID is supported. You can obtain the ID by using the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - When uploading audio or video files by calling the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation, the audio or video ID is the value of the VideoId response parameter.
   * - After the audio or video file is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId response parameter.
   * 
   * @example
   * dfde02284a5c46622a097adaf44a****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      authInfoTimeout: 'AuthInfoTimeout',
      referenceId: 'ReferenceId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      authInfoTimeout: 'number',
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

