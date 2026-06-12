// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserInformationResponseBodyDeliverySettings extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the delivery feature. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
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
   * Specifies whether to deliver data to Object Storage Service (OSS). Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The number of days to save screen recordings.
   * 
   * @example
   * 7
   */
  ossExpirationDays?: number;
  /**
   * @remarks
   * The path in OSS.
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

