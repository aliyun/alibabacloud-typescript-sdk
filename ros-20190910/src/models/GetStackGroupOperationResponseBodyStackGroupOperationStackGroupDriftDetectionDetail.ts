// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail extends $dara.Model {
  /**
   * @remarks
   * The number of stack instances for which drift detection was canceled.
   * 
   * @example
   * 0
   */
  cancelledStackInstancesCount?: number;
  /**
   * @remarks
   * The drift detection state.
   * 
   * Valid values:
   * 
   * *   COMPLETED: Drift detection is performed on the stack group and all stack instances passed the drift detection.
   * *   FAILED: Drift detection is performed on the stack group. The number of stack instances that failed the drift detection exceeds the specified threshold.
   * *   PARTIAL_SUCCESS: Drift detection is performed on the stack group. The number of stack instances that failed the drift detection does not exceed the specified threshold.
   * *   IN_PROGRESS: Drift detection is being performed on the stack group.
   * *   STOPPED: Drift detection is canceled for the stack group.
   * 
   * @example
   * COMPLETED
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The time when drift detection was performed.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The number of stack instances that have drifted.
   * 
   * @example
   * 1
   */
  driftedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that failed drift detection.
   * 
   * @example
   * 0
   */
  failedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances on which drift detection was being performed.
   * 
   * @example
   * 0
   */
  inProgressStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that were being synchronized.
   * 
   * @example
   * 1
   */
  inSyncStackInstancesCount?: number;
  /**
   * @remarks
   * The drift state of the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: At least one stack instance in the stack group has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed in the stack group.
   * *   IN_SYNC: All the stack instances in the stack group are being synchronized.
   * 
   * @example
   * DRIFTED
   */
  stackGroupDriftStatus?: string;
  /**
   * @remarks
   * The number of stack instances.
   * 
   * @example
   * 2
   */
  totalStackInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledStackInstancesCount: 'CancelledStackInstancesCount',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackInstancesCount: 'DriftedStackInstancesCount',
      failedStackInstancesCount: 'FailedStackInstancesCount',
      inProgressStackInstancesCount: 'InProgressStackInstancesCount',
      inSyncStackInstancesCount: 'InSyncStackInstancesCount',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      totalStackInstancesCount: 'TotalStackInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledStackInstancesCount: 'number',
      driftDetectionStatus: 'string',
      driftDetectionTime: 'string',
      driftedStackInstancesCount: 'number',
      failedStackInstancesCount: 'number',
      inProgressStackInstancesCount: 'number',
      inSyncStackInstancesCount: 'number',
      stackGroupDriftStatus: 'string',
      totalStackInstancesCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

