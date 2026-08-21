// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the image access URL. Unit: seconds.
   * 
   * - If OutputType is set to cdn:
   *     - The image URL expires only if URL signing is enabled. Otherwise, the URL is permanently valid.
   *     - Minimum value: 1.
   *     - Maximum value: unlimited.
   *     - Default value: If this parameter is not specified, the default validity period specified in URL signing is used.
   * - If OutputType is set to oss:
   *     - The playback URL expires only if the storage permission is set to private. Otherwise, the URL is permanently valid.
   *     - Minimum value: 1.
   *     - Maximum value: To reduce security risks to the origin server, the maximum value is **2592000** (30 days) if the image is stored in a VOD system bucket, and **129600** (36 hours) if the image is stored in your own OSS bucket.
   *     - Default value: If this parameter is not specified, the value is 3600.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The image ID. You can obtain the image ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com/) and choose **Media Files > Images** to view the ID.
   * - Obtain the ID from the response of the [CreateUploadImage](~~CreateUploadImage~~) operation when you retrieve the upload URL and credential.
   * - Obtain the ID from the response of the [SearchMedia](~~SearchMedia~~) operation when you query images.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e34733b40b9a96ccf5c1ff6f69****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image access URL to return. Valid values:
   * 
   * - oss: the origin URL.
   * - cdn (default): the accelerated URL.
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

