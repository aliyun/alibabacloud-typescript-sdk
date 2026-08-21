// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWatermarkResponseBodyWatermarkInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the watermark template was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-11-07T09:05:52Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the watermark file (OSS URL or CDN URL).
   * > This parameter is returned only for image watermark templates.
   * 
   * @example
   * https://outin-3262*****9f4b3e7.oss-cn-shanghai.aliyuncs.com/image/cover/E6C3448CC8B715E6F8A72EC6B-6-2.png?Expires=1541600583&OSSAccessKeyId=****&Signature=gmf1eYMoDVg%2BHQCb4UGozBW****
   */
  fileUrl?: string;
  /**
   * @remarks
   * Indicates whether the watermark template is the default template. Valid values:
   * - **Default**: the default watermark template.
   * - **NotDefault**: not the default watermark template.
   * 
   * @example
   * NotDefault
   */
  isDefault?: string;
  /**
   * @remarks
   * The name of the watermark template.
   * 
   * @example
   * Image watermark template
   */
  name?: string;
  /**
   * @remarks
   * The type of the watermark template. Valid values:
   * - **Image**: image watermark template.
   * - **Text**: text watermark template.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The configuration information of the watermark (JSON string), including the display position and effect of the watermark. The configuration parameters differ between image watermarks and text watermarks. For more information about the parameter structure, see [WatermarkConfig](~~98618#section-h01-44s-2lr~~).
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
  /**
   * @remarks
   * The ID of the watermark template. You can use this watermark template ID to associate the template with a transcoding template group, or to query, modify, delete, or set the template as the default watermark template.
   * 
   * @example
   * 9bcc8bfadb84*****109a2671d0df97
   */
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      fileUrl: 'FileUrl',
      isDefault: 'IsDefault',
      name: 'Name',
      type: 'Type',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      fileUrl: 'string',
      isDefault: 'string',
      name: 'string',
      type: 'string',
      watermarkConfig: 'string',
      watermarkId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWatermarkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The watermark template information.
   */
  watermarkInfo?: AddWatermarkResponseBodyWatermarkInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermarkInfo: 'WatermarkInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermarkInfo: AddWatermarkResponseBodyWatermarkInfo,
    };
  }

  validate() {
    if(this.watermarkInfo && typeof (this.watermarkInfo as any).validate === 'function') {
      (this.watermarkInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

