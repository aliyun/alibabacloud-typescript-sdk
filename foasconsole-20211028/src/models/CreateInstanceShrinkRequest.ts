// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The processor architecture.
   * 
   * @example
   * X86
   */
  architectureType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled. This is the default value.
   * 
   * > This parameter does not take effect for pay-as-you-go instances.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * - POST: pay-as-you-go.
   * - PRE: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * PRE
   */
  chargeType?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * > This parameter is required when ChargeType is set to PRE.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * “”
   */
  extra?: string;
  /**
   * @remarks
   * Specifies whether to use zone-disaster recovery resources.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The zone-disaster recovery resource specifications.
   * 
   * **if can be null:**
   * true
   */
  haResourceSpecShrink?: string;
  /**
   * @remarks
   * The list of vSwitch IDs in the secondary zone for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haVSwitchIdsShrink?: string;
  /**
   * @remarks
   * The workspace name. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name cannot end with a hyphen.
   * 
   * This parameter is required.
   * 
   * @example
   * rtc-e2e-test-pre
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of monitoring and alerting service. You can select ARMS or CloudMonitor.
   * 
   * @example
   * TAIHAO
   */
  monitorType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - **year**: year.
   * - **month**: month.
   * 
   * > This parameter is required when ChargeType is set to PRE.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 500043499350689
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxbavps3rpiy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * > This parameter is required when ChargeType is set to PRE.
   */
  resourceSpecShrink?: string;
  /**
   * @remarks
   * The storage parameters.
   * 
   * This parameter is required.
   */
  storageShrink?: string;
  /**
   * @remarks
   * The list of tags. A maximum of 20 tags can be specified.
   */
  tagShrink?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - true: Use a coupon.
   * - false: Do not use a coupon.
   * 
   * @example
   * true
   */
  usePromotionCode?: boolean;
  /**
   * @remarks
   * The list of vSwitch IDs.
   * 
   * This parameter is required.
   */
  vSwitchIdsShrink?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
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

