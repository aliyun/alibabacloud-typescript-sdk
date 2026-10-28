// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBrowserInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The package identifier.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  appPackageType?: string;
  /**
   * @remarks
   * Specifies whether to send notification emails for authorization and deauthorization.
   * - `true`: Sends notification emails.
   * - `false`: Does not send notification emails.
   * 
   * @example
   * true
   */
  authNotificationEnabled?: boolean;
  /**
   * @remarks
   * The automatic payment parameter.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The auto-renewal parameter.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The identifier of the business region. This parameter is required.
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
   * The resource billing method.
   * **For MAU scenarios:** Set this parameter to `AppInstance`, which indicates billing by instance resources.
   * 
   * @example
   * AppInstance
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * **For MAU scenarios:** Set this parameter to PostPaid, which indicates pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The name of the cloud browser group. This parameter cannot be empty. It is used to distinguish different browser groups in business management scenarios.
   * 
   * This parameter is required.
   * 
   * @example
   * Business office browser
   */
  cloudBrowserName?: string;
  /**
   * @remarks
   * The image ID used by the cloud browser. The image must be compatible with the operating system.
   * If this parameter is omitted, the default image available for the account is used. If no default image is available, the creation may fail.
   * **Usage conditions:** When CookiesSync is enabled, explicitly specify an image that supports cookie synchronization.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type identifier. Select an instance type that matches the target region, operating system, and inventory conditions.
   * If this parameter is omitted, the default instance type is used.
   * 
   * @example
   * appstreaming.general.basic
   */
  instanceType?: string;
  /**
   * @remarks
   * The capacity configuration in MAU billing scenarios.
   * 
   * @example
   * 5
   */
  maxAmount?: number;
  /**
   * @remarks
   * The configurations for the office network and website access restrictions. The selected office network must belong to the current account and reside in the region specified by BizRegionId.
   */
  networkShrink?: string;
  /**
   * @remarks
   * The node pool configuration.
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  nodePoolShrink?: string;
  /**
   * @remarks
   * The operating system type. This parameter is required.
   * Only `Windows` is supported. Other operating systems are not supported.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The number of billing cycles for the purchase.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  period?: number;
  /**
   * @remarks
   * The unit of the billing cycle for the purchase.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  periodUnit?: string;
  /**
   * @remarks
   * Configures policies for the clipboard, video, watermark, session, and client access.
   */
  policyShrink?: string;
  /**
   * @remarks
   * The promotion identifier, which is used to specify the promotional offer applied to the order.
   * 
   * Applicability and specific discounts are subject to the promotion rules. You do not need to specify this parameter if no promotional offer is applied.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The connection security policy of the browser group.
   */
  securityPolicyShrink?: string;
  /**
   * @remarks
   * The user data storage configuration of the browser group.
   */
  storagePolicyShrink?: string;
  /**
   * @remarks
   * The billing sub-type.
   * 
   * **You must explicitly set this parameter to mau, which indicates billing by monthly active users (MAUs).** Omitting this parameter does not enable MAU billing.
   * 
   * @example
   * mau
   */
  subPayType?: string;
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
   */
  tagShrink?: string;
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
   */
  timersShrink?: string;
  /**
   * @remarks
   * The list of authorized user group IDs. You can specify up to 10 IDs. The user groups must belong to the current account and match the account type of the office network.
   * **Limits:** This parameter cannot be specified together with a non-empty Users parameter.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The authorized user account information. The information must match the user and office network types.
   */
  userInfoShrink?: string;
  /**
   * @remarks
   * The list of authorized users. You can specify up to 200 users. The users must be created in advance and match the account type.
   * 
   * **Limit:** This parameter cannot be specified together with a non-empty UserGroupIds parameter.
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

