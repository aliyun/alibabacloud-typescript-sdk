// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWatermarkResponseBodyWatermarkInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the watermark template was created. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-07T09:05:52Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the watermark file, which is an OSS URL or a CDN URL.
   * > This parameter is returned only for image watermark templates.
   * 
   * @example
   * https://outin-3262*****9f4b3e7.oss-cn-shanghai.aliyuncs.com/image/cover/E6C3448CC8B715E6F8A72EC6B-6-2.png?Expires=1541600583&OSSAccessKeyId=****&Signature=gmf1eYMoDVg%2BHQCb4UGozBW****
   */
  fileUrl?: string;
  /**
   * @remarks
   * Specifies whether the watermark template is the default image or text watermark template. Valid values:
   * - **Default**: default image or text watermark template.
   * - **NotDefault**: non-default image or text watermark template.
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
   * The configuration information of the image or text watermark in JSON format, including the display position and effects of the watermark. The configuration parameters for image watermarks and text watermarks are different. For more information about the parameter structure, see [WatermarkConfig](~~98618#section-h01-44s-2lr~~).
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
   * The watermark template ID. You can use this ID to associate the watermark template with a transcoding template group, or query, modify, or delete the watermark template, or set it as the default watermark template.
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

