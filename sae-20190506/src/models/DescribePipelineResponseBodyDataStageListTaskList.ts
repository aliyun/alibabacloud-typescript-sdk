// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePipelineResponseBodyDataStageListTaskList extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the task could not be executed. If the task is successfully executed, this parameter is not returned.
   * 
   * @example
   * EDAS-10022
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether to execute the subsequent tasks when the task failed. Valid values:
   * 
   * *   **0**: The subsequent tasks cannot be executed.
   * *   **1**: The subsequent tasks can be executed.
   * 
   * @example
   * 0
   */
  errorIgnore?: number;
  /**
   * @remarks
   * The error message returned when the task could not be executed. If the task is successfully executed, this parameter is not returned.
   * 
   * @example
   * EDAS-10022
   */
  errorMessage?: string;
  /**
   * @remarks
   * The returned message indicating the task execution result.
   * 
   * @example
   * init Namespace success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether a running task can be manually skipped. Valid values:
   * 
   * *   **true**: The running task can be skipped.
   * *   **false**: The zone does not allow you to change the network type of an ApsaraDB for Redis instance from classic network to VPC.
   * 
   * @example
   * false
   */
  showManualIgnore?: boolean;
  /**
   * @remarks
   * The ID of the stage.
   * 
   * @example
   * c3a55592-4c30-4d84-ac2d-e98c18ec****
   */
  stageId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   **0**: The task is prepared for execution.
   * *   **1**: The task is being executed.
   * *   **2**: successful
   * *   **3**: The task could not be executed.
   * *   **5**: The task is pending retry.
   * *   **6**: The task was terminated.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * bef0122f-de9a-4ab0-8223-b88bf8ad****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Environment initialization
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorIgnore: 'ErrorIgnore',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      showManualIgnore: 'ShowManualIgnore',
      stageId: 'StageId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorIgnore: 'number',
      errorMessage: 'string',
      message: 'string',
      showManualIgnore: 'boolean',
      stageId: 'string',
      status: 'number',
      taskId: 'string',
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

