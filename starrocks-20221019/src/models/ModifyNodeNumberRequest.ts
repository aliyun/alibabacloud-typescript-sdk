// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeNumberRequest extends $dara.Model {
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
   * The decommission concurrency for BE scale-in scenarios in compute-storage decoupled architecture. Default value: 1.
   * 
   * @example
   * 1
   */
  parallelism?: number;
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
   * The target number of nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  target?: number;
  /**
   * @remarks
   * The duration to wait for running tasks to complete before dropping nodes during CN scale-in scenarios in storage-compute disaggregation architecture.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      parallelism: 'Parallelism',
      promotionOptionNo: 'PromotionOptionNo',
      target: 'Target',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeGroupId: 'string',
      parallelism: 'number',
      promotionOptionNo: 'string',
      target: 'number',
      terminationGracePeriodSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

