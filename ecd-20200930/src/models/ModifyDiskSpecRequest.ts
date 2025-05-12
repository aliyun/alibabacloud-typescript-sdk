// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature.
   * 
   * *   If you set the value to `true`, ensure your account has sufficient balance to avoid generating abnormal orders.
   * *   If you set the value to `false`, go to the **Expenses and Costs** page to complete the payment based on the order number.
   * 
   * Valid values:
   * 
   * *   true (default): enables the automatic payment feature.
   * *   false: generates the order and manually complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-2yjhqxo1monxxxxxx
   */
  desktopId?: string;
  /**
   * @remarks
   * The ID of the sales promotion activity. You can call the DescribePrice operation to obtain the IDs of matching sales promotion activities.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The PL of the system disk. Only Enterprise Graphics or High Frequency cloud computers support disk PL adjustments.
   * 
   * Valid values:
   * 
   * *   PL1
   * *   PL0
   * *   PL3
   * *   PL2
   * 
   * @example
   * PL1
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The PL of the data disk. Only Enterprise Graphics or High Frequency cloud computers support disk PL adjustments.
   * 
   * Valid values:
   * 
   * *   PL1
   * *   PL0
   * *   PL3
   * *   PL2
   * 
   * @example
   * PL1
   */
  userDiskPerformanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      desktopId: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      rootDiskPerformanceLevel: 'string',
      userDiskPerformanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

