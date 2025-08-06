// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWatermarkResponseBodyWatermarkInfos extends $dara.Model {
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
   * 2018-11-07T09:05:52Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the watermark file. The URL is an Object Storage Service (OSS) URL or an Alibaba Cloud CDN URL.
   * 
   * >  This parameter is returned only for image watermark templates.
   * 
   * @example
   * https://outin-3262681cd*****89f4b3e7.oss-cn-shanghai.aliyuncs.com/image/cover/8CC8B715E6F8A72EC6B-6-2.png?Expires=1541600583&OSSAccessKeyId=****&Signature=gmf1eYMoDVg%2BHQCb4UGozB****
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
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The type of the watermark template.
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
   * {"FontColor": "Blue","FontSize": 80,"Content": "test watermark"}
   */
  watermarkConfig?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * @example
   * 9bcc8bfadb843*****109a2671d0df97
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

export class ListWatermarkResponseBody extends $dara.Model {
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
   * The information about the watermark template.
   */
  watermarkInfos?: ListWatermarkResponseBodyWatermarkInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermarkInfos: 'WatermarkInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermarkInfos: { 'type': 'array', 'itemType': ListWatermarkResponseBodyWatermarkInfos },
    };
  }

  validate() {
    if(Array.isArray(this.watermarkInfos)) {
      $dara.Model.validateArray(this.watermarkInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

