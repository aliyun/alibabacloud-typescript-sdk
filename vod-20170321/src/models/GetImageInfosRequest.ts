// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageInfosRequest extends $dara.Model {
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
   *     - The image URL expires only if the storage permission is set to private. Otherwise, the URL is permanently valid.
   *     - Minimum value: 1.
   *     - Maximum value: To reduce security risks to the origin server, the maximum value is **2592000** (30 days) if the image is stored in a bucket managed by ApsaraVideo VOD, and **129600** (36 hours) if the image is stored in your own OSS bucket.
   *     - Default value: If this parameter is not specified, the value is 3600.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The list of image IDs. Separate multiple IDs with commas (,). A maximum of 20 IDs are supported. You can obtain image IDs by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com/) and choose **Media Files > Images** to view the IDs.
   * - Obtain the IDs from the response when you call [CreateUploadImage](~~CreateUploadImage~~) to obtain the upload URL and credential.
   * - Obtain the IDs from the response when you call [SearchMedia](~~SearchMedia~~) to query images.
   * 
   * This parameter is required.
   * 
   * @example
   * bbc65bba53fed90de118a7849****,594228cdd14b4d069fc17a8c4a****
   */
  imageIds?: string;
  /**
   * @remarks
   * The type of the image access URL to return. Valid values:
   * 
   * - oss: the storage address.
   * - cdn (default): the CDN-accelerated URL.
   * 
   * @example
   * cdn
   */
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      imageIds: 'ImageIds',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      imageIds: 'string',
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

