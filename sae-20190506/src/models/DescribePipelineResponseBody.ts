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

export class DescribePipelineResponseBodyDataStageList extends $dara.Model {
  /**
   * @remarks
   * The execution type of the stage. Valid values:
   * 
   * *   **0**: in sequence.
   * *   **1**: in parallel.
   * 
   * @example
   * 0
   */
  executorType?: number;
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
   * The name of the stage.
   * 
   * @example
   * Deploy an application
   */
  stageName?: string;
  /**
   * @remarks
   * The status of the batch processing stage. Valid values:
   * 
   * *   **0**: The batch is prepared for this processing stage.
   * *   **1**: The task is being executed.
   * *   **2**: successful
   * *   **3**: The processing failed in this stage.
   * *   **6**: The processing stage was terminated.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The list of task statuses.
   */
  taskList?: DescribePipelineResponseBodyDataStageListTaskList[];
  static names(): { [key: string]: string } {
    return {
      executorType: 'ExecutorType',
      stageId: 'StageId',
      stageName: 'StageName',
      status: 'Status',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorType: 'number',
      stageId: 'string',
      stageName: 'string',
      status: 'number',
      taskList: { 'type': 'array', 'itemType': DescribePipelineResponseBodyDataStageListTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the change order for the batch.
   * 
   * @example
   * Successful
   */
  coStatus?: string;
  /**
   * @remarks
   * The ID of the batch processing stage.
   * 
   * @example
   * c3a55592-4c30-4d84-ac2d-e98c18ec****
   */
  currentStageId?: string;
  /**
   * @remarks
   * The ID of the next batch.
   * 
   * @example
   * b77b1c98-5772-4f05-95fc-c7bee5fa****
   */
  nextPipelineId?: string;
  /**
   * @remarks
   * The ID of the batch.
   * 
   * @example
   * 917660ba-5092-44ca-b8e0-80012c96****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The name of the batch.
   * 
   * @example
   * First batch
   */
  pipelineName?: string;
  /**
   * @remarks
   * The batch status. Valid values:
   * 
   * *   **0**: The batch is prepared for processing.
   * *   **1**: The task is being executed.
   * *   **2**: successful
   * *   **3**: The processing failed in this stage.
   * *   **6**: The batch processing was terminated.
   * *   **10**: The batch could not be processed due to a system exception.
   * 
   * @example
   * 2
   */
  pipelineStatus?: number;
  /**
   * @remarks
   * Indicates whether to start processing the next batch. Valid values:
   * 
   * *   **false**: indicates that the next batch cannot be processed yet.
   * *   **true**: indicates that the next batch can be processed now.
   * 
   * @example
   * false
   */
  showBatch?: boolean;
  /**
   * @remarks
   * The list of batch processing stages.
   */
  stageList?: DescribePipelineResponseBodyDataStageList[];
  static names(): { [key: string]: string } {
    return {
      coStatus: 'CoStatus',
      currentStageId: 'CurrentStageId',
      nextPipelineId: 'NextPipelineId',
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      pipelineStatus: 'PipelineStatus',
      showBatch: 'ShowBatch',
      stageList: 'StageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coStatus: 'string',
      currentStageId: 'string',
      nextPipelineId: 'string',
      pipelineId: 'string',
      pipelineName: 'string',
      pipelineStatus: 'number',
      showBatch: 'boolean',
      stageList: { 'type': 'array', 'itemType': DescribePipelineResponseBodyDataStageList },
    };
  }

  validate() {
    if(Array.isArray(this.stageList)) {
      $dara.Model.validateArray(this.stageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The batch information.
   */
  data?: DescribePipelineResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed. Take note of the following rules:
   * 
   * *   The **ErrorCode** parameter is not returned if the request succeeds.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned for the operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 559B4247-C41C-4D9E-B866-B55D360B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the batch information was obtained. Valid values:
   * 
   * *   **true**: The information was queried.
   * *   **false**: The image failed to be found.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
   * 
   * @example
   * 0be3e0c316390414649128666e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribePipelineResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

