// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskStatistic extends $dara.Model {
  /**
   * @remarks
   * Data items that passed
   * 
   * @example
   * 0
   */
  acceptItemCount?: number;
  /**
   * @remarks
   * Quantity abandoned in the check flow
   * 
   * @example
   * 0
   */
  checkAbandon?: number;
  /**
   * @remarks
   * Inspection accuracy
   * 
   * @example
   * 0
   */
  checkAccuracy?: number;
  /**
   * @remarks
   * Inspection efficiency (items/hour)
   * 
   * @example
   * 0
   */
  checkEfficiency?: number;
  /**
   * @remarks
   * Check accuracy
   * 
   * @example
   * 0
   */
  checkedAccuracy?: number;
  /**
   * @remarks
   * Number of errors found in the inspection flow
   * 
   * @example
   * 0
   */
  checkedError?: number;
  /**
   * @remarks
   * Number of checks
   * 
   * @example
   * 0
   */
  checkedRejectCount?: number;
  /**
   * @remarks
   * Discarded data items
   * 
   * @example
   * 0
   */
  finalAbandonCount?: number;
  /**
   * @remarks
   * Completed data items
   * 
   * @example
   * 3
   */
  finishedItemCount?: number;
  /**
   * @remarks
   * Quantity of completed subtasks
   * 
   * @example
   * 3
   */
  finishedSubtaskCount?: number;
  /**
   * @remarks
   * Annotation efficiency (items/hour)
   * 
   * @example
   * 0
   */
  markEfficiency?: number;
  /**
   * @remarks
   * Quantity of corrections made during pre-annotation
   * 
   * @example
   * 0
   * 
   * **if can be null:**
   * true
   */
  preMarkFixedCount?: number;
  /**
   * @remarks
   * Sampling accuracy
   * 
   * @example
   * 0
   */
  sampledAccuracy?: number;
  /**
   * @remarks
   * Number of sampled fault samples
   * 
   * @example
   * 0
   */
  sampledErrorCount?: number;
  /**
   * @remarks
   * Number of samples denied
   * 
   * @example
   * 0
   */
  sampledRejectCount?: number;
  /**
   * @remarks
   * Sampling accuracy
   * 
   * @example
   * 0
   */
  samplingAccuracy?: number;
  /**
   * @remarks
   * Total number of check flow steps
   * 
   * @example
   * 0
   */
  totalCheckCount?: number;
  /**
   * @remarks
   * Total check time (hours)
   * 
   * @example
   * 0
   */
  totalCheckTime?: number;
  /**
   * @remarks
   * Total number of checks
   * 
   * @example
   * 0
   */
  totalCheckedCount?: number;
  /**
   * @remarks
   * Total number of data items
   * 
   * @example
   * 3
   */
  totalItemCount?: number;
  /**
   * @remarks
   * Total time spent in the annotation phase (hours)
   * 
   * @example
   * 0
   */
  totalMarkTime?: number;
  /**
   * @remarks
   * Total sampling quantity
   * 
   * @example
   * 0
   */
  totalSampledCount?: number;
  /**
   * @remarks
   * Total number of sampled validations
   * 
   * @example
   * 0
   */
  totalSamplingCount?: number;
  /**
   * @remarks
   * Total number of subtasks
   * 
   * @example
   * 3
   */
  totalSubtaskCount?: number;
  /**
   * @remarks
   * Total work time (hours)
   * 
   * @example
   * 0
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      acceptItemCount: 'AcceptItemCount',
      checkAbandon: 'CheckAbandon',
      checkAccuracy: 'CheckAccuracy',
      checkEfficiency: 'CheckEfficiency',
      checkedAccuracy: 'CheckedAccuracy',
      checkedError: 'CheckedError',
      checkedRejectCount: 'CheckedRejectCount',
      finalAbandonCount: 'FinalAbandonCount',
      finishedItemCount: 'FinishedItemCount',
      finishedSubtaskCount: 'FinishedSubtaskCount',
      markEfficiency: 'MarkEfficiency',
      preMarkFixedCount: 'PreMarkFixedCount',
      sampledAccuracy: 'SampledAccuracy',
      sampledErrorCount: 'SampledErrorCount',
      sampledRejectCount: 'SampledRejectCount',
      samplingAccuracy: 'SamplingAccuracy',
      totalCheckCount: 'TotalCheckCount',
      totalCheckTime: 'TotalCheckTime',
      totalCheckedCount: 'TotalCheckedCount',
      totalItemCount: 'TotalItemCount',
      totalMarkTime: 'TotalMarkTime',
      totalSampledCount: 'TotalSampledCount',
      totalSamplingCount: 'TotalSamplingCount',
      totalSubtaskCount: 'TotalSubtaskCount',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptItemCount: 'number',
      checkAbandon: 'number',
      checkAccuracy: 'number',
      checkEfficiency: 'number',
      checkedAccuracy: 'number',
      checkedError: 'number',
      checkedRejectCount: 'number',
      finalAbandonCount: 'number',
      finishedItemCount: 'number',
      finishedSubtaskCount: 'number',
      markEfficiency: 'number',
      preMarkFixedCount: 'number',
      sampledAccuracy: 'number',
      sampledErrorCount: 'number',
      sampledRejectCount: 'number',
      samplingAccuracy: 'number',
      totalCheckCount: 'number',
      totalCheckTime: 'number',
      totalCheckedCount: 'number',
      totalItemCount: 'number',
      totalMarkTime: 'number',
      totalSampledCount: 'number',
      totalSamplingCount: 'number',
      totalSubtaskCount: 'number',
      totalWorkTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

