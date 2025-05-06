// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceShrinkRequest extends $dara.Model {
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
  haResourceSpecShrink?: string;
  /**
   * **if can be null:**
   * true
   */
  haVSwitchIdsShrink?: string;
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
  resourceSpecShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storageShrink?: string;
  tagShrink?: string;
  usePromotionCode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchIdsShrink?: string;
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
      haResourceSpecShrink: 'HaResourceSpec',
      haVSwitchIdsShrink: 'HaVSwitchIds',
      instanceName: 'InstanceName',
      monitorType: 'MonitorType',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceSpecShrink: 'ResourceSpec',
      storageShrink: 'Storage',
      tagShrink: 'Tag',
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
      haVSwitchIdsShrink: 'string',
      instanceName: 'string',
      monitorType: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceSpecShrink: 'string',
      storageShrink: 'string',
      tagShrink: 'string',
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

