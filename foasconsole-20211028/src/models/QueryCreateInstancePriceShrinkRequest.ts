// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCreateInstancePriceShrinkRequest extends $dara.Model {
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
  ha?: boolean;
  /**
   * **if can be null:**
   * true
   */
  haResourceSpecShrink?: string;
  /**
   * @example
   * rtc-e2e-test-post
   */
  instanceName?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * 500041860100636
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
  resourceSpecShrink?: string;
  storageShrink?: string;
  usePromotionCode?: boolean;
  vSwitchIdsShrink?: string;
  /**
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
      haResourceSpecShrink: 'HaResourceSpec',
      instanceName: 'InstanceName',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
      storageShrink: 'Storage',
      usePromotionCode: 'UsePromotionCode',
      vSwitchIdsShrink: 'VSwitchIds',
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
      haResourceSpecShrink: 'string',
      instanceName: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
      storageShrink: 'string',
      usePromotionCode: 'boolean',
      vSwitchIdsShrink: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

