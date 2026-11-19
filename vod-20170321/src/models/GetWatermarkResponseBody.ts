// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWatermarkResponseBodyWatermarkInfo extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The creation time of the watermark template. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format and is in UTC.
   * 
   * @example
   * 2018-11-06T08:03:17Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the watermark file, which is an OSS URL or a CDN URL.
   * > This parameter is returned only for image watermark templates.
   * 
   * @example
   * https://outin-32*****f4b3e7.oss-cn-shanghai.aliyuncs.com/image/cover/F85529C8B715E6F8A72EC6B-6-2.png?Expires=1541600583&OSSAccessKeyId=****&Signature=gmf1eYMoDVg%2BHQCb4UGozBW****
   */
  fileUrl?: string;
  /**
   * @remarks
   * Specifies whether the watermark template is the default image or text watermark template. Valid values:
   * 
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
   * Image watermark test
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
   * The configuration information of the image or text watermark in JSON string format, including the display position and effect of the watermark. The configuration parameters for image watermarks and text watermarks are different. For more information about the parameter structure, see [WatermarkConfig](~~98618#section-h01-44s-2lr~~).
   * 
   * @example
   * {"ReferPos": "BottomRight","Height": "55","Width": "55","Dx": "8","Dy": "8" }
   */
  watermarkConfig?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * @example
   * 505e2e287ea*****ecfddd386d384
   */
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      appId: 'string',
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

export class GetWatermarkResponseBody extends $dara.Model {
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
   * The image or text watermark template information.
   */
  watermarkInfo?: GetWatermarkResponseBodyWatermarkInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermarkInfo: 'WatermarkInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermarkInfo: GetWatermarkResponseBodyWatermarkInfo,
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

