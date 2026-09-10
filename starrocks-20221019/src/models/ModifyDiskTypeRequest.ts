// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically purchase (pay for) all products specified in the Products parameter. Valid values:
   * - true: Automatic payment is enabled.
   * - false: Automatic payment is disabled.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  autoPay?: boolean;
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
   * The target disk type.
   * 
   * This parameter is required.
   * 
   * @example
   * essd
   */
  targetDiskType?: string;
  /**
   * @remarks
   * The target disk performance level.
   * 
   * This parameter is required.
   * 
   * @example
   * pl2
   */
  targetPerformanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      promotionOptionNo: 'PromotionOptionNo',
      targetDiskType: 'TargetDiskType',
      targetPerformanceLevel: 'TargetPerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      instanceId: 'string',
      nodeGroupId: 'string',
      promotionOptionNo: 'string',
      targetDiskType: 'string',
      targetPerformanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

