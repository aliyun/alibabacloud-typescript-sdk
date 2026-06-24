// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application image ID. You can obtain the ID from the **O&M** > **Custom Images** or **System Images** page in the [WUYING Cloud Application console](https://appstreaming.console.aliyun.com/).
   * 
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The name of the delivery group.
   * 
   * @example
   * 办公应用
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The package type.
   * 
   * @example
   * browser.package.5.250.appstreaming.general.basic
   */
  appPackageType?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-0clfzcy0adpcf****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * The authorization mode of the delivery group.
   * 
   * @example
   * App
   * 
   * **if can be null:**
   * true
   */
  authMode?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The region ID of the delivery group. For information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * This parameter is required.
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cls-d39iq73l5c0a8****
   */
  clusterId?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * > To use this parameter, submit a ticket.
   */
  networkShrink?: string;
  /**
   * @remarks
   * The node pool object.
   */
  nodePoolShrink?: string;
  /**
   * @remarks
   * The subscription duration of the resource when `ChargeType` is set to `PrePaid`. This parameter is required. The unit is specified by `PeriodUnit`.
   * 
   * - If `PeriodUnit` is set to `Week`, valid values:
   * 
   *    - 1
   * 
   * - If `PeriodUnit` is set to `Month`, valid values:
   * 
   *    - 1
   *    - 2
   *    - 3
   *    - 6
   * 
   * - If `PeriodUnit` is set to `Year`, valid values:
   * 
   *    - 1
   *    - 2
   *    - 3
   * 
   * > If `ChargeType` is set to `PostPaid`, set this parameter to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration when `ChargeType` is set to `PrePaid`.
   * 
   * > This parameter is case-sensitive. For example, `Week` is valid, but `week` is invalid.
   * If the request parameters do not match the valid combinations, such as `2 Week`, the API call succeeds but an error occurs during the order placement.
   * 
   * > If `ChargeType` is set to `PostPaid`, set this parameter to `Month`.
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The pre-opened application ID.
   * 
   * @example
   * cag-b2ronxxd****
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The promotion ID. You can call the [GetResourcePrice](https://help.aliyun.com/document_detail/428503.html) operation to obtain the ID.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The runtime policy.
   */
  runtimePolicyShrink?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityPolicyShrink?: string;
  /**
   * @remarks
   * The application recycling timeout period, in minutes. After an end user disconnects from a cloud application for a period of time, the cloud application process exits. This period is the application recycling timeout. Set this parameter to `-1` if you do not want the application to be recycled. Valid values: -1 and 3 to 300 (integer). Default value: `15`.
   * 
   * This parameter is required.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * The storage policy.
   */
  storagePolicyShrink?: string;
  /**
   * @remarks
   * The billing method subtype.
   * 
   * @example
   * postPaid
   */
  subPayType?: string;
  /**
   * @remarks
   * The user-defined policy.
   */
  userDefinePolicyShrink?: string;
  /**
   * @remarks
   * The list of authorized user group IDs.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The user information of the users to be added to the delivery group. This field is required if the `Users` parameter is specified.
   */
  userInfoShrink?: string;
  /**
   * @remarks
   * The list of usernames to be added to the delivery group as assigned users.
   */
  users?: string[];
  /**
   * @remarks
   * The display policy.
   */
  videoPolicyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appPackageType: 'AppPackageType',
      appPolicyId: 'AppPolicyId',
      authMode: 'AuthMode',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      networkShrink: 'Network',
      nodePoolShrink: 'NodePool',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      preOpenAppId: 'PreOpenAppId',
      productType: 'ProductType',
      promotionId: 'PromotionId',
      runtimePolicyShrink: 'RuntimePolicy',
      securityPolicyShrink: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicyShrink: 'StoragePolicy',
      subPayType: 'SubPayType',
      userDefinePolicyShrink: 'UserDefinePolicy',
      userGroupIds: 'UserGroupIds',
      userInfoShrink: 'UserInfo',
      users: 'Users',
      videoPolicyShrink: 'VideoPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupName: 'string',
      appPackageType: 'string',
      appPolicyId: 'string',
      authMode: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      clusterId: 'string',
      networkShrink: 'string',
      nodePoolShrink: 'string',
      period: 'number',
      periodUnit: 'string',
      preOpenAppId: 'string',
      productType: 'string',
      promotionId: 'string',
      runtimePolicyShrink: 'string',
      securityPolicyShrink: 'string',
      sessionTimeout: 'number',
      storagePolicyShrink: 'string',
      subPayType: 'string',
      userDefinePolicyShrink: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userInfoShrink: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
      videoPolicyShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

