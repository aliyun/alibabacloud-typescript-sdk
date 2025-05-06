// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestHaResourceSpec } from "./CreateInstanceRequestHaResourceSpec";
import { CreateInstanceRequestResourceSpec } from "./CreateInstanceRequestResourceSpec";
import { CreateInstanceRequestStorage } from "./CreateInstanceRequestStorage";
import { CreateInstanceRequestTag } from "./CreateInstanceRequestTag";


export class CreateInstanceRequest extends $dara.Model {
  architectureType?: string;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PRE
   */
  chargeType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  extra?: string;
  /**
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * **if can be null:**
   * true
   */
  haResourceSpec?: CreateInstanceRequestHaResourceSpec;
  /**
   * **if can be null:**
   * true
   */
  haVSwitchIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc-e2e-test-pre
   */
  instanceName?: string;
  monitorType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * 500043499350689
   */
  promotionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  resourceGroupId?: string;
  resourceSpec?: CreateInstanceRequestResourceSpec;
  /**
   * @remarks
   * This parameter is required.
   */
  storage?: CreateInstanceRequestStorage;
  tag?: CreateInstanceRequestTag[];
  usePromotionCode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-2ze9xoh8qyt1rnxfmfcdi
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      extra: 'Extra',
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      instanceName: 'InstanceName',
      monitorType: 'MonitorType',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      tag: 'Tag',
      usePromotionCode: 'UsePromotionCode',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      extra: 'string',
      ha: 'boolean',
      haResourceSpec: CreateInstanceRequestHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      instanceName: 'string',
      monitorType: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceSpec: CreateInstanceRequestResourceSpec,
      storage: CreateInstanceRequestStorage,
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      usePromotionCode: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.haResourceSpec && typeof (this.haResourceSpec as any).validate === 'function') {
      (this.haResourceSpec as any).validate();
    }
    if(Array.isArray(this.haVSwitchIds)) {
      $dara.Model.validateArray(this.haVSwitchIds);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

