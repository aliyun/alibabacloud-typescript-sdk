// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * whether to enable the priority feature.
   * 
   * @example
   * true/false
   */
  enablePriority?: boolean;
  /**
   * @remarks
   * Whether it is exclusive.
   * 
   * @example
   * true/false
   */
  forceReservedMin?: boolean;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * 
   * @example
   * 50
   */
  minCU?: number;
  /**
   * @remarks
   * Scheduling policy.
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
   * 50
   */
  singleJobCULimit?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
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
      elasticReservedCU: 'number',
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

