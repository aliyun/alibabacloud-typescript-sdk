// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBrowserInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The plan identifier.
   * 
   * Do not specify this parameter.
   * 
   * @example
   * -
   */
  appPackageType?: string;
  /**
   * @remarks
   * Specifies whether to send authorization and deauthorization notification emails.
   * 
   * - `true`: Sends the notification.
   * - `false`: Does not send the notification.
   * 
   * @example
   * true
   */
  authNotificationEnabled?: boolean;
  /**
   * @remarks
   * The automatic payment parameter.
   * 
   * Do not specify this parameter.
   * 
   * @example
   * -
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The auto-renewal parameter.
   * 
   * Do not specify this parameter.
   * 
   * @example
   * -
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The business region ID. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The browser configuration.
   */
  browserConfigShrink?: string;
  /**
   * @remarks
   * The resource billing mode.
   * 
   * **For MAU scenarios:** Set this parameter to `AppInstance` to bill by instance resource.
   * 
   * @example
   * AppInstance
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * **For MAU scenarios:** Set this parameter to `PostPaid`, which indicates pay-as-you-go billing.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The name of the cloud browser group. This parameter cannot be empty. The name is used to distinguish different browser groups in business management scenarios.
   * 
   * This parameter is required.
   * 
   * @example
   * BusinessOfficeBrowser
   */
  cloudBrowserName?: string;
  /**
   * @remarks
   * The image identifier used by the cloud browser. The image must be compatible with the operating system.
   * 
   * If this parameter is omitted, the default image available for the account is used. If no default image is available, the creation may fail.
   * 
   * **Usage condition:** When `CookiesSync` is enabled, explicitly specify an image that supports cookie synchronization.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type identifier. Select an instance type that matches the target region, operating system, and inventory conditions.
   * 
   * If this parameter is omitted, the default instance type is used.
   * 
   * @example
   * appstreaming.general.basic
   */
  instanceType?: string;
  /**
   * @remarks
   * The capacity configuration for the MAU billing scenario.
   * 
   * @example
   * 5
   */
  maxAmount?: number;
  /**
   * @remarks
   * The office network and website access restriction configurations. The selected office network must belong to the current account and be located in the region specified by `BizRegionId`.
   */
  networkShrink?: string;
  /**
   * @remarks
   * The node pool configuration.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  nodePoolShrink?: string;
  /**
   * @remarks
   * The operating system type. This parameter is required.
   * 
   * Only `Windows` is supported. Other operating systems are not supported.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The number of subscription periods.
   * 
   * Do not specify this parameter.
   * 
   * @example
   * -
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period.
   * 
   * Do not specify this parameter.
   * 
   * @example
   * -
   */
  periodUnit?: string;
  /**
   * @remarks
   * The clipboard, video, watermark, session, and client access policy configurations.
   */
  policyShrink?: string;
  /**
   * @remarks
   * The promotion ID. Specifies the promotional campaign to apply to the order.
   * 
   * Whether the promotion is applicable depends on the campaign rules. Do not specify this parameter if no promotional campaign is used.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The connection security policy for the browser group.
   */
  securityPolicyShrink?: string;
  /**
   * @remarks
   * The user data storage configuration for the browser group.
   */
  storagePolicyShrink?: string;
  /**
   * @remarks
   * The billing subtype.
   * 
   * **Set this parameter to `mau` explicitly, which indicates billing by monthly active users.** Omitting this field does not enable MAU billing.
   * 
   * @example
   * mau
   */
  subPayType?: string;
  /**
   * @remarks
   * Not supported. You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  tagShrink?: string;
  /**
   * @remarks
   * Not supported. You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  timersShrink?: string;
  /**
   * @remarks
   * The list of authorized user group identifiers. A maximum of 10 items are supported. The user groups must belong to the current account and match the workspace network account type.
   * 
   * **Limit:** Cannot be specified together with a non-empty `Users`.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The authorized user account information. The value must match the user and workspace network type.
   */
  userInfoShrink?: string;
  /**
   * @remarks
   * The list of authorized users. A maximum of 200 users can be specified. Users must be created in advance and must match the account type.
   * 
   * **Restriction:** This parameter cannot be specified together with a non-empty `UserGroupIds`.
   */
  usersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appPackageType: 'AppPackageType',
      authNotificationEnabled: 'AuthNotificationEnabled',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      browserConfigShrink: 'BrowserConfig',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      cloudBrowserName: 'CloudBrowserName',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      maxAmount: 'MaxAmount',
      networkShrink: 'Network',
      nodePoolShrink: 'NodePool',
      osType: 'OsType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyShrink: 'Policy',
      promotionId: 'PromotionId',
      securityPolicyShrink: 'SecurityPolicy',
      storagePolicyShrink: 'StoragePolicy',
      subPayType: 'SubPayType',
      tagShrink: 'Tag',
      timersShrink: 'Timers',
      userGroupIds: 'UserGroupIds',
      userInfoShrink: 'UserInfo',
      usersShrink: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPackageType: 'string',
      authNotificationEnabled: 'boolean',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      browserConfigShrink: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      cloudBrowserName: 'string',
      imageId: 'string',
      instanceType: 'string',
      maxAmount: 'number',
      networkShrink: 'string',
      nodePoolShrink: 'string',
      osType: 'string',
      period: 'number',
      periodUnit: 'string',
      policyShrink: 'string',
      promotionId: 'string',
      securityPolicyShrink: 'string',
      storagePolicyShrink: 'string',
      subPayType: 'string',
      tagShrink: 'string',
      timersShrink: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userInfoShrink: 'string',
      usersShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

