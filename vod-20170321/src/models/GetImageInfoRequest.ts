// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the image access URL. Unit: seconds.
   * 
   * - If OutputType is set to cdn:
   *     - The image URL expires only if URL authentication is enabled. Otherwise, the URL is permanently valid.
   *     - Minimum value: 1.
   *     - Maximum value: unlimited.
   *     - Default value: If this parameter is not specified, the default validity period configured for URL authentication is used.
   * - If OutputType is set to oss:
   *     - The playback URL expires only if the storage permission is set to private. Otherwise, the URL is permanently valid.
   *     - Minimum value: 1.
   *     - Maximum value: To reduce security risks of the origin server, the maximum value is **2592000** (30 days) if the image is stored in an ApsaraVideo VOD bucket, and **129600** (36 hours) if the image is stored in a custom OSS bucket.
   *     - Default value: If this parameter is not specified, the value is 3600.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The image ID. You can obtain the image ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com/) and choose **Media Assets** > **Images** to view the ID.
   * - Call the [CreateUploadImage](~~CreateUploadImage~~) operation to obtain the upload URL and credential. The image ID is returned in the response.
   * - Call the [SearchMedia](~~SearchMedia~~) operation to query images. The image ID is returned in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e34733b40b9a96ccf5c1ff6f69****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the output image access URL. Valid values:
   * 
   * - oss: the back-to-origin URL.
   * - cdn: the accelerated URL. This is the default value.
   * 
   * @example
   * cdn
   */
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      imageId: 'ImageId',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      imageId: 'string',
      outputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

