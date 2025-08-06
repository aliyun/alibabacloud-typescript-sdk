// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the image URL expires. Unit: seconds.
   * 
   * *   If you set OutputType to cdn:
   * 
   *     *   This parameter takes effect only if URL authentication is enabled. Otherwise, the image URL does not expire.
   *     *   Minimum value: 1.
   *     *   Maximum value: unlimited.
   *     *   Default value: If you leave this parameter empty, the default validity period that is specified in URL signing is used.
   * 
   * *   If you set OutputType to oss:
   * 
   *     *   This parameter takes effect only when the ACL of the Object Storage Service (OSS) bucket is private. Otherwise, the image URL does not expire.
   *     *   Minimum value: 1.
   *     *   If you store the image in the VOD bucket, the maximum value of this parameter is **2592000** (30 days). If you store the image in an OSS bucket, the maximum value of this parameter is **129600** (36 hours). The maximum value is limited to reduce security risks of the origin.
   *     *   Default value: 3600.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The ID of the image. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com/). In the left-side navigation pane, choose Media Files > Image. On the Image page, view the image ID.
   * *   Obtain the image ID from the response to the [CreateUploadImage](~~CreateUploadImage~~) operation that you call to obtain the upload URL and credential.
   * *   Obtain the image ID from the response to the [SearchMedia](~~SearchMedia~~) operation that you call to query the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e34733b40b9a96ccf5c1ff6f69****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the output image URL. Valid values:
   * 
   * *   oss: OSS URL
   * *   cdn: CDN URL
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

