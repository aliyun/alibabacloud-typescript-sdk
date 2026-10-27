// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * - If you set this parameter to `true`, make sure that your account balance is sufficient. Otherwise, an abnormal order is generated.
   * - If you set this parameter to `false`, you can log on to the console and pay for the order based on the returned order ID on the **Expenses and Costs** page.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-2yjhqxo1monbf****
   */
  desktopId?: string;
  /**
   * @remarks
   * The ID of the promotion. You can call the pricing API operation to obtain the list of matched promotion IDs.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions supported by cloud desktops.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the resource owner in the reseller model. This parameter is not required in the non-reseller model.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The performance level of the system cloud disk. You can set the disk performance level when the cloud desktop specification is Enterprise Graphics or High-frequency.
   * 
   * @example
   * PL1
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The performance level of the data cloud disk. You can set the disk performance level when the cloud desktop specification is Enterprise Graphics or High-frequency.
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

