// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Default value: **app-1000000**. If you have activated the multi-application service, specify the ID of the application to add the watermark template in the specified application. For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The URL of the watermark file. The URL must be an Object Storage Service (OSS) URL and cannot contain the information used for URL signing.
   * 
   * > *   This parameter is required if you set `Type` to `Image`.
   * > *  You can obtain the URL from the `FileURL` parameter in the response to the [CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~) operation that you call to upload the watermark image to ApsaraVideo VOD.
   * 
   * @example
   * http://outin-326268*****63e1403e7.oss-cn-shanghai.aliyuncs.com/image/cover/C99345*****E7FDEC-6-2.png
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the watermark template.
   * 
   * *   Only letters and digits are supported.
   * *   The name cannot exceed 128 bytes.
   * *   The value must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * watermark
   */
  name?: string;
  /**
   * @remarks
   * The type of the watermark template. Valid values:
   * 
   * *   **Image** (default): image watermark template
   * *   **Text**: text watermark template
   * 
   * This parameter is required.
   * 
   * @example
   * Text
   */
  type?: string;
  /**
   * @remarks
   * The configuration information of the watermark such as the display position and special effects. The value must be a JSON string. The configuration parameters for image and text watermarks are different. For more information about the parameter structure, see [WatermarkConfig](~~98618#section-h01-44s-2lr~~).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Width":"55","Height":"55","Dx":"9","Dy":"9","ReferPos":"BottonLeft"}
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

