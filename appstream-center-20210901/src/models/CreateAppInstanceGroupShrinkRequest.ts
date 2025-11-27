// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  appInstanceGroupName?: string;
  /**
   * @example
   * browser.package.5.250.appstreaming.general.basic
   */
  appPackageType?: string;
  /**
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
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * cls-d39iq73l5c0a8****
   */
  clusterId?: string;
  networkShrink?: string;
  nodePoolShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @example
   * cag-b2ron*******
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The runtime policy.
   */
  runtimePolicyShrink?: string;
  securityPolicyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  storagePolicyShrink?: string;
  /**
   * @example
   * postPaid
   */
  subPayType?: string;
  userDefinePolicyShrink?: string;
  /**
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  userInfoShrink?: string;
  users?: string[];
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

