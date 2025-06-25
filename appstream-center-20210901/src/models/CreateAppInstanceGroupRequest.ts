// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppInstanceGroupRequestNetwork } from "./CreateAppInstanceGroupRequestNetwork";
import { CreateAppInstanceGroupRequestNodePool } from "./CreateAppInstanceGroupRequestNodePool";
import { CreateAppInstanceGroupRequestRuntimePolicy } from "./CreateAppInstanceGroupRequestRuntimePolicy";
import { CreateAppInstanceGroupRequestSecurityPolicy } from "./CreateAppInstanceGroupRequestSecurityPolicy";
import { CreateAppInstanceGroupRequestStoragePolicy } from "./CreateAppInstanceGroupRequestStoragePolicy";
import { CreateAppInstanceGroupRequestUserDefinePolicy } from "./CreateAppInstanceGroupRequestUserDefinePolicy";
import { CreateAppInstanceGroupRequestUserInfo } from "./CreateAppInstanceGroupRequestUserInfo";
import { CreateAppInstanceGroupRequestVideoPolicy } from "./CreateAppInstanceGroupRequestVideoPolicy";


export class CreateAppInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  appInstanceGroupName?: string;
  appPackageType?: string;
  appPolicyId?: string;
  /**
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
  clusterId?: string;
  network?: CreateAppInstanceGroupRequestNetwork;
  nodePool?: CreateAppInstanceGroupRequestNodePool;
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
  runtimePolicy?: CreateAppInstanceGroupRequestRuntimePolicy;
  securityPolicy?: CreateAppInstanceGroupRequestSecurityPolicy;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  storagePolicy?: CreateAppInstanceGroupRequestStoragePolicy;
  subPayType?: string;
  userDefinePolicy?: CreateAppInstanceGroupRequestUserDefinePolicy;
  userInfo?: CreateAppInstanceGroupRequestUserInfo;
  users?: string[];
  videoPolicy?: CreateAppInstanceGroupRequestVideoPolicy;
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
      network: 'Network',
      nodePool: 'NodePool',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      preOpenAppId: 'PreOpenAppId',
      productType: 'ProductType',
      promotionId: 'PromotionId',
      runtimePolicy: 'RuntimePolicy',
      securityPolicy: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicy: 'StoragePolicy',
      subPayType: 'SubPayType',
      userDefinePolicy: 'UserDefinePolicy',
      userInfo: 'UserInfo',
      users: 'Users',
      videoPolicy: 'VideoPolicy',
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
      network: CreateAppInstanceGroupRequestNetwork,
      nodePool: CreateAppInstanceGroupRequestNodePool,
      period: 'number',
      periodUnit: 'string',
      preOpenAppId: 'string',
      productType: 'string',
      promotionId: 'string',
      runtimePolicy: CreateAppInstanceGroupRequestRuntimePolicy,
      securityPolicy: CreateAppInstanceGroupRequestSecurityPolicy,
      sessionTimeout: 'number',
      storagePolicy: CreateAppInstanceGroupRequestStoragePolicy,
      subPayType: 'string',
      userDefinePolicy: CreateAppInstanceGroupRequestUserDefinePolicy,
      userInfo: CreateAppInstanceGroupRequestUserInfo,
      users: { 'type': 'array', 'itemType': 'string' },
      videoPolicy: CreateAppInstanceGroupRequestVideoPolicy,
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.nodePool && typeof (this.nodePool as any).validate === 'function') {
      (this.nodePool as any).validate();
    }
    if(this.runtimePolicy && typeof (this.runtimePolicy as any).validate === 'function') {
      (this.runtimePolicy as any).validate();
    }
    if(this.securityPolicy && typeof (this.securityPolicy as any).validate === 'function') {
      (this.securityPolicy as any).validate();
    }
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    if(this.userDefinePolicy && typeof (this.userDefinePolicy as any).validate === 'function') {
      (this.userDefinePolicy as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    if(this.videoPolicy && typeof (this.videoPolicy as any).validate === 'function') {
      (this.videoPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

