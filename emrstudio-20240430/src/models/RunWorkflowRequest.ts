// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWorkflowRequest extends $dara.Model {
  /**
   * @example
   * ag-n72kong0832****
   */
  alertGroupId?: string;
  /**
   * @example
   * NONE
   */
  alertStrategy?: string;
  /**
   * @example
   * OFF_MODE
   */
  complementDependentMode?: string;
  /**
   * @example
   * 0
   */
  dryRun?: string;
  /**
   * @example
   * START_PROCESS
   */
  execType?: string;
  /**
   * @example
   * 1
   */
  expectedParallelismNumber?: string;
  /**
   * @example
   * END
   */
  failureStrategy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wg-acfmv4opbs****
   */
  resourceGroupId?: string;
  /**
   * @example
   * RUN_MODE_PARALLEL
   */
  runMode?: string;
  /**
   * @example
   * 2024-01-01 00:00:00,2024-01-02 00:00:00
   */
  scheduleTime?: string;
  /**
   * @example
   * {"key1":"value1"}
   */
  startParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * w-3q9jo749ne5****
   */
  workflowId?: string;
  /**
   * @example
   * MEDIUM
   */
  workflowInstancePriority?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      alertGroupId: 'alertGroupId',
      alertStrategy: 'alertStrategy',
      complementDependentMode: 'complementDependentMode',
      dryRun: 'dryRun',
      execType: 'execType',
      expectedParallelismNumber: 'expectedParallelismNumber',
      failureStrategy: 'failureStrategy',
      resourceGroupId: 'resourceGroupId',
      runMode: 'runMode',
      scheduleTime: 'scheduleTime',
      startParams: 'startParams',
      workflowId: 'workflowId',
      workflowInstancePriority: 'workflowInstancePriority',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertStrategy: 'string',
      complementDependentMode: 'string',
      dryRun: 'string',
      execType: 'string',
      expectedParallelismNumber: 'string',
      failureStrategy: 'string',
      resourceGroupId: 'string',
      runMode: 'string',
      scheduleTime: 'string',
      startParams: 'string',
      workflowId: 'string',
      workflowInstancePriority: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

