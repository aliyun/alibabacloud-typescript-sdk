// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackDriftDetectionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the drift detection operation.
   * 
   * @example
   * a7044f0d-6f2e-4128-a307-4524ef88****
   */
  driftDetectionId?: string;
  /**
   * @remarks
   * The drift detection status. Valid values:
   * 
   * *   DETECTION_COMPLETE: The drift detection operation has been completed for all resources that support drift detection in the stack.
   * *   DETECTION_FAILED: The stack drift detection operation has failed for at least one resource in the stack.
   * *   DETECTION_IN_PROGRESS: The stack drift detection operation is in progress.
   * 
   * @example
   * DETECTION_COMPLETE
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The reason why the stack drift detection operation has its current status.
   * 
   * @example
   * Detect stack drift successfully
   */
  driftDetectionStatusReason?: string;
  /**
   * @remarks
   * The time when the stack drift detection operation was initiated.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The total number of stack resources that have drifted.
   * 
   * @example
   * 1
   */
  driftedStackResourceCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The drift status of the stack. Valid values:
   * 
   * *   DRIFTED: The actual configuration of the stack differs, or has drifted, from its expected template configuration. A stack is considered to have drifted if one or more of its resources have drifted.
   * *   NOT_CHECKED: Resource Orchestration Service (ROS) has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The current configuration of each supported resource matches its expected template configuration. A stack with no resources that support drift detection also has a status of IN_SYNC.
   * 
   * @example
   * DRIFTED
   */
  stackDriftStatus?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionStatusReason: 'DriftDetectionStatusReason',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackResourceCount: 'DriftedStackResourceCount',
      requestId: 'RequestId',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      driftDetectionStatus: 'string',
      driftDetectionStatusReason: 'string',
      driftDetectionTime: 'string',
      driftedStackResourceCount: 'number',
      requestId: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

