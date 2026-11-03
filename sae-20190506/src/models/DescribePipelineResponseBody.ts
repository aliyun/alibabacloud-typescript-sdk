// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePipelineResponseBodyDataStageListTaskList extends $dara.Model {
  /**
   * @remarks
   * The error code for the task execution failure. This code is not returned if the task succeeds.
   * 
   * @example
   * EDAS-10022
   */
  errorCode?: string;
  /**
   * @remarks
   * Specifies whether subsequent tasks can be executed after a failure. Valid values:
   * 
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 0
   */
  errorIgnore?: number;
  /**
   * @remarks
   * The error message for the task execution. This message is not returned if the task succeeds.
   * 
   * @example
   * EDAS-10022
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task execution information.
   * 
   * @example
   * init Namespace success
   */
  message?: string;
  /**
   * @remarks
   * Specifies whether a running task can be manually skipped. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * false
   */
  showManualIgnore?: boolean;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * c3a55592-4c30-4d84-ac2d-e98c18ec****
   */
  stageId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **0**: Ready.
   * - **1**: Running.
   * - **2**: Succeeded.
   * - **3**: Failed.
   * - **5**: Waiting for retry.
   * - **6**: Aborted.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bef0122f-de9a-4ab0-8223-b88bf8ad****
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
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
   * The stage type. Valid values:
   * 
   * - **0**: Serial.
   * - **1**: Parallel.
   * 
   * @example
   * 0
   */
  executorType?: number;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * c3a55592-4c30-4d84-ac2d-e98c18ec****
   */
  stageId?: string;
  /**
   * @remarks
   * The stage name.
   * 
   * @example
   * Application Deployment
   */
  stageName?: string;
  /**
   * @remarks
   * The stage status. Valid values:
   * 
   * - **0**: Ready.
   * - **1**: Running.
   * - **2**: Succeeded.
   * - **3**: Failed.
   * - **6**: Aborted.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The list of task status information.
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
   * The status of the change order associated with the batch.
   * 
   * @example
   * Executed successfully
   */
  coStatus?: string;
  /**
   * @remarks
   * The ID of the stage being executed in the batch.
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
   * The batch ID.
   * 
   * @example
   * 917660ba-5092-44ca-b8e0-80012c96****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The batch name.
   * 
   * @example
   * First batch
   */
  pipelineName?: string;
  /**
   * @remarks
   * The batch status. Valid values:
   * 
   * - **0**: Ready.
   * - **1**: Running.
   * - **2**: Succeeded.
   * - **3**: Failed.
   * - **6**: Aborted.
   * - **10**: Failed due to a system exception.
   * 
   * @example
   * 2
   */
  pipelineStatus?: number;
  /**
   * @remarks
   * Specifies whether the execution of the next batch can start. Valid values:
   * 
   * - **false**: The execution of the next batch cannot start.
   * - **true**: The execution of the next batch can start.
   * 
   * @example
   * false
   */
  showBatch?: boolean;
  /**
   * @remarks
   * The list of stages in the batch.
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
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirect.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
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
   * The error code. Valid values:
   * 
   * - Successful request: The **ErrorCode** field is not returned.
   * - Failed request: The **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.NotEmpty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the call result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 559B4247-C41C-4D9E-B866-B55D360B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the batch information was queried successfully. Valid values:
   * 
   * - **true**: The query was successful.
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to accurately query call information.
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

