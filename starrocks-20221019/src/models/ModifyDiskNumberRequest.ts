// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically purchase (pay for) all products specified in the Products parameter.
   * - true: Automatic payment.
   * - false: No automatic payment.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to use the fast restart mode. Default value: false.
   * 
   * - true: Restarts compute nodes in fast restart mode. Compute nodes are restarted in multiple batches. Nodes within a batch are restarted in parallel, and batches execute sequentially.
   * - false: Restarts compute nodes in rolling restart mode.
   * 
   * @example
   * true
   */
  fastMode?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The compute group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The target number of disks.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      fastMode: 'FastMode',
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      promotionOptionNo: 'PromotionOptionNo',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      fastMode: 'boolean',
      instanceId: 'string',
      nodeGroupId: 'string',
      promotionOptionNo: 'string',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

