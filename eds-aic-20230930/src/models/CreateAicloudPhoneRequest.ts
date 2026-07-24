// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICloudPhoneRequest extends $dara.Model {
  /**
   * @remarks
   * The quantity to purchase.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The bandwidth package ID.
   * 
   * This parameter is required.
   * 
   * @example
   * np-791ncq8qcuoopxxxx
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The region ID for the purchase.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-0aae4rxwoktvr851h
   */
  imageId?: string;
  /**
   * @remarks
   * The instance group name.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The instance group specification. Valid values:
   * 
   * - STANDARD: standard.
   * - MEDIUM: advanced.
   * 
   * This parameter is required.
   * 
   * @example
   * MEDIUM
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * The purchase duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the purchase duration.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The policy group ID.
   * 
   * @example
   * pg-0bjrh3oxk2q0xxxxx
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * youhuiquan_promotion_xxx
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      bandwidthPackageId: 'BandwidthPackageId',
      bizRegionId: 'BizRegionId',
      imageId: 'ImageId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      bandwidthPackageId: 'string',
      bizRegionId: 'string',
      imageId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

