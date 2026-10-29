// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICloudPhoneRequest extends $dara.Model {
  /**
   * @remarks
   * The quantity.
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
   * The ID of the bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * np-791ncq8qcuoopxxxx
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The ID of the region for the purchase.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-0aae4rxwoktvr851h
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The specification of the instance group. Valid values:
   * - STANDARD: Standard.
   * - MEDIUM: Advanced.
   * 
   * This parameter is required.
   * 
   * @example
   * MEDIUM
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy group.
   * 
   * @example
   * pg-0bjrh3oxk2q0xxxxx
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The ID of the coupon.
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

