// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * - If set to `true`, ensure your account has a sufficient balance. Otherwise, an abnormal order is generated.
   * 
   * - If set to `false`, log on to the console. Then, go to the **Expenses and Costs** page to pay for the order using the returned order ID.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-2yjhqxo1monbf****
   */
  desktopId?: string;
  /**
   * @remarks
   * The promotion ID. Call a pricing inquiry API to get a list of applicable promotion IDs.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to get a list of supported regions for WUYING Workspace.
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
   * The performance level of the system disk. You can set the performance level for Graphics or High-frequency workspaces.
   * 
   * @example
   * PL1
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The performance level of the data disk. You can set the performance level for Graphics or High-frequency workspaces.
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

