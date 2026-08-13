// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyDiskTypePriceRequest extends $dara.Model {
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
   * ng-d332aa8bca48****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * Coupon ID.
   * 
   * @example
   * youhuiquan_12378dfj6
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Target disk type.
   * 
   * This parameter is required.
   * 
   * @example
   * essd
   */
  targetDiskType?: string;
  /**
   * @remarks
   * Target disk performance.
   * 
   * This parameter is required.
   * 
   * @example
   * pl2
   */
  targetPerformanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      promotionOptionNo: 'PromotionOptionNo',
      targetDiskType: 'TargetDiskType',
      targetPerformanceLevel: 'TargetPerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

