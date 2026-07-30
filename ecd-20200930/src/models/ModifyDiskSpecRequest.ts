// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * - If you set this parameter to `true`, ensure that your account balance is sufficient. Otherwise, abnormal orders are generated.
   * - If you set this parameter to `false`, log on to the console and go to the **Expenses and Costs** page to complete the payment based on the returned order ID.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-2yjhqxo1monbf****
   */
  desktopId?: string;
  /**
   * @remarks
   * The promotion ID. You can call the pricing API to obtain the list of matched promotion IDs.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
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
   * The performance level of the system cloud disk. You can set the disk performance level when the cloud computer specification is Enterprise Graphics or High Frequency.
   * 
   * @example
   * PL1
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The performance level of the data cloud disk. You can set the disk performance level when the cloud computer specification is Enterprise Graphics or High Frequency.
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

