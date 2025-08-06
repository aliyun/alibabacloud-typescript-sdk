// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWatermarkResponseBodyWatermarkInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the watermark template was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-06T08:03:17Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the watermark file. The URL is an Object Storage Service (OSS) URL or an Alibaba Cloud CDN URL.
   * 
   * >  This parameter is returned only for image watermark templates.
   * 
   * @example
   * https://outin-32*****f4b3e7.oss-cn-shanghai.aliyuncs.com/image/cover/F85529C8B715E6F8A72EC6B-6-2.png?Expires=1541600583&OSSAccessKeyId=****&Signature=gmf1eYMoDVg%2BHQCb4UGozBW****
   */
  fileUrl?: string;
  /**
   * @remarks
   * Indicates whether the watermark template is the default one. Valid values:
   * 
   * *   **Default**
   * *   **NotDefault**
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
   * image watermark test
   */
  name?: string;
  /**
   * @remarks
   * The type of the watermark template. Valid values:
   * 
   * *   **Image**: image watermark template
   * *   **Text**: text watermark template
   * 
   * @example
   * Text
   */
  type?: string;
  /**
   * @remarks
   * The configuration information of the watermark such as the display position and special effects. The value is a JSON string. The configuration parameters for image and text watermarks are different. For more information about the parameter structure, see [WatermarkConfig](~~98618#section-h01-44s-2lr~~).
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
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the watermark template.
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

