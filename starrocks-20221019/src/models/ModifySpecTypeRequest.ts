// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySpecTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Restart in fast restart mode. Default is false.
   * 
   * - true: Restarts compute nodes in fast restart mode. Nodes restart in parallel within a batch, and batches execute sequentially.
   * 
   * - false: Restarts compute nodes in rolling restart mode.
   * 
   * @example
   * true
   */
  fastMode?: boolean;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Compute group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * Coupon ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Target specifications type.
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  targetSpecType?: string;
  static names(): { [key: string]: string } {
    return {
      fastMode: 'FastMode',
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      promotionOptionNo: 'PromotionOptionNo',
      targetSpecType: 'TargetSpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastMode: 'boolean',
      instanceId: 'string',
      nodeGroupId: 'string',
      promotionOptionNo: 'string',
      targetSpecType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

