// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * The state of the terminated execution. This parameter is valid if you set the NotifyType parameter to CompleteExecution.
   * 
   * @example
   * Success
   */
  executionStatus?: string;
  /**
   * @remarks
   * The items of the child node in the loop task.
   * 
   * @example
   * i-xxx
   */
  loopItem?: string;
  /**
   * @remarks
   * The description for the notification.
   * 
   * @example
   * Note
   */
  notifyNote?: string;
  /**
   * @remarks
   * The type of the notification. Valid values:
   * 
   * *   **ExecuteTask**: starts to run a specific task. This value is used if you perform debugging in the Debug mode. If you set this parameter to ExecuteTask, you also need to set the Parameters parameter.
   * *   **CancelTask**: cancels a current task. This value is used if you perform debugging in the Debug mode.
   * *   **CompleteExecution**: manually terminates an execution if you perform debugging in the Debug mode. You can specify the state of the terminated execution by using the **ExecutionStatus** parameter.
   * *   **Approve**: approves an execution. For example, you are aware of the risks of an operation task and agree to approve the execution.
   * *   **Reject**: rejects an execution. For example, you want to reject the execution of a high-risk operation task.
   * *   **RetryTask**: retries a failed task whose execution mode is Suspend upon Failure.
   * *   **SkipTask**: skips a failed task whose execution mode is Suspend upon Failure.
   * 
   * This parameter is required.
   * 
   * @example
   * Approve
   */
  notifyType?: string;
  /**
   * @remarks
   * The parameters of the subsequent task. This parameter is valid if you set the NotifyType parameter to ExecuteTask.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the region in which the execution resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * task-exec-xxx
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The execution IDs of the tasks.
   * 
   * @example
   * ["exec-79c321c11003a97c","exec-79c321c11003aqw97cz"]
   */
  taskExecutionIds?: string;
  /**
   * @remarks
   * The name of the subsequent task.
   * 
   * @example
   * describeInstance
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      executionStatus: 'ExecutionStatus',
      loopItem: 'LoopItem',
      notifyNote: 'NotifyNote',
      notifyType: 'NotifyType',
      parameters: 'Parameters',
      regionId: 'RegionId',
      taskExecutionId: 'TaskExecutionId',
      taskExecutionIds: 'TaskExecutionIds',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      executionStatus: 'string',
      loopItem: 'string',
      notifyNote: 'string',
      notifyType: 'string',
      parameters: 'string',
      regionId: 'string',
      taskExecutionId: 'string',
      taskExecutionIds: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

