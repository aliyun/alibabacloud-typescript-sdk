// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration version obtained from the query when modifying multi-account delivery.
   * 
   * @example
   * 1
   */
  configurationVersion?: number;
  /**
   * @remarks
   * The region for log storage.
   * 
   * @example
   * cn-shanghai
   */
  dataStorageRegionId?: string;
  /**
   * @remarks
   * The global delivery switch for log management. This parameter is not available for configuration. Valid values:
   * - enable: Enables all delivery.
   * - disable: Disables all delivery.
   * 
   * @example
   * enable
   */
  deliveryStatus?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * Note: This parameter is required. If you do not specify this parameter, the API returns a 400 error: "The specified Lang can not be empty." Specify zh or en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The global switch for multi-account centralized delivery. If this parameter is omitted, the original storage update behavior is maintained. Do not mix this parameter with the storage region or the original delivery status.
   * 
   * @example
   * true
   */
  multiAccountDeliveryEnabled?: boolean;
  /**
   * @remarks
   * The region where the data management center for threat analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The current target project obtained from the query when modifying multi-account delivery.
   * 
   * @example
   * aliyun-cloudsiem-data-1234567890123456-cn-shanghai
   */
  targetProject?: string;
  static names(): { [key: string]: string } {
    return {
      configurationVersion: 'ConfigurationVersion',
      dataStorageRegionId: 'DataStorageRegionId',
      deliveryStatus: 'DeliveryStatus',
      lang: 'Lang',
      multiAccountDeliveryEnabled: 'MultiAccountDeliveryEnabled',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      targetProject: 'TargetProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationVersion: 'number',
      dataStorageRegionId: 'string',
      deliveryStatus: 'string',
      lang: 'string',
      multiAccountDeliveryEnabled: 'boolean',
      regionId: 'string',
      roleFor: 'number',
      targetProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

