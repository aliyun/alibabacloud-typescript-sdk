// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserInformationRequestDeliverySettings extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to deliver ActionTrail events to OSS. Valid values:
   * 
   * - true: Delivery is enabled.
   * 
   * - false: Delivery is disabled.
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
   * "mybucket"
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Specifies whether to deliver data to Object Storage Service (OSS). Valid values:
   * 
   * - true: Delivery is enabled.
   * 
   * - false: Delivery is disabled.
   * 
   * @example
   * true
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The number of days to retain screen recordings.
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
   * "path1/path2/"
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

export class UpdateUserInformationRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations to modify.
   */
  deliverySettings?: UpdateUserInformationRequestDeliverySettings;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deliverySettings: 'DeliverySettings',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverySettings: UpdateUserInformationRequestDeliverySettings,
      regionId: 'string',
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

