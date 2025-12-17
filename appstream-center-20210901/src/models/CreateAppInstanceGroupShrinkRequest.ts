// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID of the application. To obtain the image ID, log on to the [App Streaming console](https://appstreaming.console.aliyun.com/). In the left-side navigation pane, choose **Maintenance** > **Custom Images** or Maintenance > **System Images**.
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
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * Package type.
   * 
   * @example
   * browser.package.5.250.appstreaming.general.basic
   */
  appPackageType?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * pg-0clfzcy0adpcf****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * The authentication mode of the delivery group.
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
   * Valid values:
   * 
   * *   true
   * *   false: manual payment. This is the default value.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * Valid values:
   * 
   * *   true
   * *   false: manual payment. This is the default value.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * Valid values:
   * 
   * *   cn-shanghai: China (Shanghai)
   * *   cn-hangzhou: China (Hangzhou)
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
   * Valid value:
   * 
   * *   Node: by resource
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
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * cls-d39iq73l5c0a8****
   */
  clusterId?: string;
  /**
   * @remarks
   * The network settings.
   * 
   * >  If you want to use this parameter, submit a ticket.
   */
  networkShrink?: string;
  /**
   * @remarks
   * The node pool object.
   */
  nodePoolShrink?: string;
  /**
   * @remarks
   * The subscription duration of resources. This parameter is required if you set `ChargeType` to `PrePaid`. The unit of this parameter is specified by `PeriodUnit`.
   * 
   * *   Valid value if you set `PeriodUnit` to `Week`:
   * 
   *     *   1
   * 
   * *   Valid values if you set `PeriodUnit` to `Month`:
   * 
   *     *   1
   *     *   2
   *     *   3
   *     *   6
   * 
   * *   Valid values if you set `PeriodUnit` to `Year`:
   * 
   *     *   1
   *     *   2
   *     *   3
   * 
   * >  If you set `ChargeType` to `PostPaid`, set this parameter to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is available if you set `ChargeType` to `PrePaid`.
   * 
   * >  The value of this parameter is case-insensitive. For example, `Week` is valid and `week` is invalid. If you specify an invalid value combination for Period and PeriodUnit, such as `2 Week`, the operation can still be called. However, an error occurs when you place the order.
   * 
   * >  If you set `ChargeType` to `PostPaid`, set this parameter to `Month`.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * *   Week
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the pre-open application.
   * 
   * @example
   * cag-b2ron*******
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
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
   * The period of time during which the application can be recycled. The recycling period is the period of time between the time when the end user disconnects from the application and the time when processes exit the application. If you do not want to recycle the application, set this parameter to `-1`. Valid values:-1 and 3 to 300. The value must be an integer. Default value: `15`. Unit: minutes.
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
   * Payment method subtype.
   * 
   * @example
   * postPaid
   */
  subPayType?: string;
  /**
   * @remarks
   * The custom policy.
   */
  userDefinePolicyShrink?: string;
  /**
   * @remarks
   * List of authorized user group IDs.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The information about the user that you want to add to the assigned user list of the delivery group. This parameter is required if you configure `Users`.
   */
  userInfoShrink?: string;
  /**
   * @remarks
   * The users that you want to add to the assigned user list of the delivery group.
   */
  users?: string[];
  /**
   * @remarks
   * Display policy.
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

