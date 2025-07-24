// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserInformationResponseBodyDeliverySettings extends $dara.Model {
  /**
   * @remarks
   * Indicates whether screencast delivery to OSS is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  actiontrailDeliveryToOssEnabled?: boolean;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * 0101data
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Indicates whether screencast delivery to Object Storage Service (OSS) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The number of days for which the screencasts are saved.
   * 
   * @example
   * 7
   */
  ossExpirationDays?: number;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * /test
   */
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      actiontrailDeliveryToOssEnabled: 'ActiontrailDeliveryToOssEnabled',
      ossBucketName: 'OssBucketName',
      ossEnabled: 'OssEnabled',
      ossExpirationDays: 'OssExpirationDays',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actiontrailDeliveryToOssEnabled: 'boolean',
      ossBucketName: 'string',
      ossEnabled: 'boolean',
      ossExpirationDays: 'number',
      ossPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery settings.
   */
  deliverySettings?: GetUserInformationResponseBodyDeliverySettings;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52EBAF16-22F6-53DB-AE1E-44764FC62AF0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliverySettings: 'DeliverySettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverySettings: GetUserInformationResponseBodyDeliverySettings,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliverySettings && typeof (this.deliverySettings as any).validate === 'function') {
      (this.deliverySettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

