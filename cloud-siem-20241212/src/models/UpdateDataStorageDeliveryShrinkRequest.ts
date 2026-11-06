// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataStorageDeliveryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically add subsequent new and available managed members to the account selection for the log type. A value of true indicates that the feature is enabled. A value of false indicates that the feature is disabled. Disabling the feature does not remove selected members. If this parameter is omitted, the original value is retained. You must also specify LogCode, ConfigurationVersion, and TargetProject. You can update this parameter together with SelectedAccountIds. You cannot specify LogDeliveryStatus or the member SubUserId at the same time. The actual delivery is also controlled by the global switch for multi-account delivery and the delivery switch for the log type.
   * 
   * @example
   * true
   */
  autoIncludeNewAccounts?: boolean;
  /**
   * @remarks
   * The version of the delivery settings on which the current modification is based. Call GetDataStorage first and pass the original value of Data.DeliverySettings.ConfigurationVersion. Example 1 only shows the format and cannot be used as a fixed version. This parameter is required when you modify the global switch, account selection, auto-inclusion settings, or specified member delivery. If the version is missing or has changed, the OperationDenied.CentralizedDeliveryConfigChanged error is returned. In this case, query the version again before you submit the request.
   * 
   * @example
   * 1
   */
  configurationVersion?: number;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * This parameter is required. If this parameter is not specified, the API returns a 400 error.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The log code.
   * 
   * This parameter is required.
   * 
   * @example
   * aegis-log-login
   */
  logCode?: string;
  /**
   * @remarks
   * The log delivery status. Valid values:
   * - enable: Enables delivery.
   * - disable: Disables delivery.
   * 
   * @example
   * enable
   */
  logDeliveryStatus?: string;
  /**
   * @remarks
   * The region where the data management center for threat analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside the Chinese mainland.
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
   * The complete list of selected accounts for the log type. Each element is a decimal UID string. The list must include Data.DeliverySettings.DaAccountId (the current account) and can contain up to 10,000 items. A new member must be in the Accounts list returned by GetDataStorage and have Authorized set to true. If only the current account is retained, specify the UID of the current account. Do not use an empty string or an empty array. If this parameter is omitted, the original selection is retained. For HTTP requests, use the comma-separated format of array(simple): SelectedAccountIds=1234567890123456,1234567890123457. For a single account, specify only one UID. Do not use SelectedAccountIds.1/.2 or a JSON array string. You must also specify ConfigurationVersion and TargetProject, and omit LogDeliveryStatus and the member SubUserId.
   * 
   * @example
   * 1234567890123456,1234567890123457
   */
  selectedAccountIdsShrink?: string;
  /**
   * @remarks
   * The UID of the source Alibaba Cloud account, which is a decimal integer. If this parameter is omitted or set to the UID of the current account, the delivery settings of the current account are modified. If a member UID is specified, the expected delivery status in the current configuration is applied only to the member. In this case, you must also specify LogDeliveryStatus, ConfigurationVersion, and TargetProject. The member must be within the selection scope of the log type or have existing delivery records. You must omit this parameter when you save the account selection or auto-inclusion settings. You cannot specify the UID of another member.
   * 
   * @example
   * 1234567890123457
   */
  subUserId?: number;
  /**
   * @remarks
   * The name of the current Simple Log Service project for log delivery. Invoke GetDataStorage first and pass the original value of Data.DeliverySettings.TargetProject. This parameter is used to verify the target of the current modification, not to specify a new project. This parameter is required when you modify the global switch, account selection, auto-inclusion settings, or specified member log delivery. If this parameter is missing or different from the current target, the OperationDenied.CentralizedDeliveryConfigChanged error is returned. Replace the account UID and region in the example with the query results.
   * 
   * @example
   * aliyun-cloudsiem-data-1234567890123456-cn-shanghai
   */
  targetProject?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncludeNewAccounts: 'AutoIncludeNewAccounts',
      configurationVersion: 'ConfigurationVersion',
      lang: 'Lang',
      logCode: 'LogCode',
      logDeliveryStatus: 'LogDeliveryStatus',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      selectedAccountIdsShrink: 'SelectedAccountIds',
      subUserId: 'SubUserId',
      targetProject: 'TargetProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncludeNewAccounts: 'boolean',
      configurationVersion: 'number',
      lang: 'string',
      logCode: 'string',
      logDeliveryStatus: 'string',
      regionId: 'string',
      roleFor: 'number',
      selectedAccountIdsShrink: 'string',
      subUserId: 'number',
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

