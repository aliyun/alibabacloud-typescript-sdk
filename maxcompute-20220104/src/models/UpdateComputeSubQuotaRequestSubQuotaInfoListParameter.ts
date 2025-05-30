// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeSubQuotaRequestSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the priority feature.
   * 
   * @example
   * false
   */
  enablePriority?: boolean;
  /**
   * @remarks
   * Specifies whether the quota is strongly exclusive.
   * 
   * @example
   * false
   */
  forceReservedMin?: boolean;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * > The value of maxCU must be less than or equal to the value of maxCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * > 
   * >- The total value of minCU in all the level-2 quotas is equal to the value of minCU in the level-1 quota.
   * >- The value of minCU must be less than or equal to the value of maxCU in the level-2 quota and less than or equal to the value of minCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
  /**
   * @remarks
   * Scheduling policy of the quota.
   * 
   * @example
   * Fifo/Fair
   */
  schedulerType?: string;
  /**
   * @remarks
   * The upper limit for CUs that can be concurrently used by a job scheduled to the quota.
   * 
   * @example
   * 10
   */
  singleJobCULimit?: number;
  static names(): { [key: string]: string } {
    return {
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      minCU: 'minCU',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      minCU: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

