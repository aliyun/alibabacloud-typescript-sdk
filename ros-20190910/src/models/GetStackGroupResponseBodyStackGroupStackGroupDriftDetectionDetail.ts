// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail extends $dara.Model {
  /**
   * @remarks
   * The number of stack instances that have drifted.
   * 
   * @example
   * 0
   */
  cancelledStackInstancesCount?: number;
  /**
   * @remarks
   * The drift status of the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: At least one stack instance in the stack group has drifted.
   * *   NOT_CHECKED: No drift detection is completed on the stack group.
   * *   IN_SYNC: All the stack instances in the stack group are being synchronized.
   * 
   * @example
   * COMPLETED
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The number of stack instances.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter is specified when you create the stack group.
   * 
   * @example
   * 1
   */
  driftedStackInstancesCount?: number;
  /**
   * @remarks
   * The status of drift detection on the stack group.
   * 
   * Valid values:
   * 
   * *   COMPLETED: Drift detection is performed and completed on all stack instances.
   * *   FAILED: Drift detection is performed. The number of stack instances that failed the drift detection exceeds the specified threshold.
   * *   PARTIAL_SUCCESS: Drift detection is performed. The number of stack instances that failed the drift detection does not exceed the specified threshold.
   * *   IN_PROGRESS: Drift detection is being performed on the stack group.
   * *   STOPPED: Drift detection is canceled for the stack group.
   * 
   * @example
   * 0
   */
  failedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that were being synchronized.
   * 
   * @example
   * 0
   */
  inProgressStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances for which drift detection was canceled.
   * 
   * @example
   * 1
   */
  inSyncStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances on which drift detection was being performed.
   * 
   * @example
   * DRIFTED
   */
  stackGroupDriftStatus?: string;
  /**
   * @remarks
   * The number of stack instances that failed drift detection.
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

