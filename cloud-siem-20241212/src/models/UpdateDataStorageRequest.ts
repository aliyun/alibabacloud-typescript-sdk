// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the delivery settings on which this modification is based. Call GetDataStorage first and pass the original value of Data.DeliverySettings.ConfigurationVersion. Example 1 only demonstrates the format and cannot be used as a fixed version. This parameter is required when modifying the global switch, account selection, automatic inclusion settings, or specified member delivery. If the version is missing or has changed, the OperationDenied.CentralizedDeliveryConfigChanged error is returned. In this case, re-query the data and then submit the request.
   * 
   * @example
   * 1
   */
  configurationVersion?: number;
  /**
   * @remarks
   * The region where logs are stored.
   * 
   * @example
   * cn-shanghai
   */
  dataStorageRegionId?: string;
  /**
   * @remarks
   * The global delivery switch for log management. This switch is not available for configuration. Valid values:
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
   * Note: This parameter is actually required. If it is not specified, the API returns a 400 error: \\"The specified Lang can not be empty.\\" Specify zh or en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The global switch for multi-account centralized delivery. A value of true indicates that centralized delivery from members to the current account is enabled. A value of false indicates that centralized delivery from members to the current account is disabled. When disabled, the account selection and automatic inclusion settings are retained, and the original log type switches for the current account are independently retained. When this parameter is specified, you must also specify ConfigurationVersion and TargetProject, and omit DataStorageRegionId and DeliveryStatus. If this parameter is omitted, the storage region modification process is used. Enabling this switch for the first time initializes the account scope for log types and the automatic inclusion settings.
   * 
   * @example
   * true
   */
  multiAccountDeliveryEnabled?: boolean;
  /**
   * @remarks
   * The region of the data management center for threat analysis. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The name of the current Simple Log Service project for log delivery. First invoke GetDataStorage and pass the original value of Data.DeliverySettings.TargetProject. This parameter is used to verify the target of this modification, not to specify a new project. This parameter is required when modifying the global switch, account selection, automatic inclusion settings, or specified member delivery. If this parameter is missing or differs from the current target, the OperationDenied.CentralizedDeliveryConfigChanged error is returned. Replace the account UID and region in the example with the query results.
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

