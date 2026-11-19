// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. If the multi-application system is activated, you can specify an application ID to add the watermark template to a specific application. For more information, see [Multi-application system](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The OSS URL of the watermark image file without authentication.
   * >- Request parameter is required when you create an image watermark template by setting `Type` to `Image`.
   * >- You can call the [CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~) operation to upload the watermark image to ApsaraVideo VOD. The value of the `FileURL` parameter returned after the upload can be used as the value of request parameter.
   * 
   * @example
   * http://outin-326268*****63e1403e7.oss-cn-shanghai.aliyuncs.com/image/cover/C99345*****E7FDEC-6-2.png
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the watermark template.
   * - Only Chinese characters, English letters, and digits are supported.
   * - The name can be up to 128 bytes in length.
   * - The name must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * Image watermark template
   */
  name?: string;
  /**
   * @remarks
   * The watermark templatetype. Valid values:
   * - **Image** (default): image watermark template.
   * - **Text**: text watermark template.
   * 
   * This parameter is required.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The configuration information of the image or text watermark in JSON format, including the display position and effects of the watermark. The configuration parameters for image watermarks and text watermarks are different. For more information about the parameter structure, see [WatermarkConfig](~~98618#section-h01-44s-2lr~~).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *       "Width": "55",
   *       "Height": "55",
   *       "Dx": "9",
   *       "Dy": "9",
   *       "ReferPos": "BottomLeft"
   * }
   */
  watermarkConfig?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fileUrl: 'FileUrl',
      name: 'Name',
      type: 'Type',
      watermarkConfig: 'WatermarkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fileUrl: 'string',
      name: 'string',
      type: 'string',
      watermarkConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

