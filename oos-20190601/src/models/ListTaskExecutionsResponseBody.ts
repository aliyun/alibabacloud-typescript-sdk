// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskExecutionsResponseBodyTaskExecutions extends $dara.Model {
  /**
   * @remarks
   * The output of the execution.
   * 
   * @example
   * exec-xxx
   */
  childExecutionId?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createDate?: string;
  /**
   * @remarks
   * The execution ID of the parent node.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDate?: string;
  /**
   * @remarks
   * The action of the task.
   * 
   * @example
   * exec-44d32b45d2a449e49899
   */
  executionId?: string;
  /**
   * @remarks
   * The Input parameters of the task execution.
   * 
   * @example
   * {                     "NotifyNote":""                 }
   */
  extraData?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * {}
   */
  loop?: { [key: string]: any };
  /**
   * @remarks
   * The status information of the task execution.
   * 
   * @example
   * 2
   */
  loopBatchNumber?: number;
  /**
   * @remarks
   * The time when the execution was created.
   * 
   * @example
   * i-1234566zxcvvb
   */
  loopItem?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * { "InstanceId":"i-xxx" }
   */
  outputs?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * task-exec-xxx
   */
  parentTaskExecutionId?: string;
  /**
   * @remarks
   * Queries task executions. Multiple methods are supported to filter task executions.
   * 
   * @example
   * { "Status":"Running" }
   */
  properties?: string;
  /**
   * @remarks
   * The elements in the loop task.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDate?: string;
  /**
   * @remarks
   * The time when the task execution stopped running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * ""
   */
  statusMessage?: string;
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * ACS::Sleep
   */
  taskAction?: string;
  /**
   * @remarks
   * The time when the execution was last updated.
   * 
   * @example
   * task-exec-xxx
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The time when the execution started.
   * 
   * @example
   * describeInstance
   */
  taskName?: string;
  /**
   * @remarks
   * The number of times for which the loop task is run.
   * 
   * @example
   * xxx
   */
  templateId?: string;
  /**
   * @remarks
   * The configuration and statistics information of the loop task. This parameter is returned only for the parent node of the loop task.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      childExecutionId: 'ChildExecutionId',
      createDate: 'CreateDate',
      endDate: 'EndDate',
      executionId: 'ExecutionId',
      extraData: 'ExtraData',
      loop: 'Loop',
      loopBatchNumber: 'LoopBatchNumber',
      loopItem: 'LoopItem',
      outputs: 'Outputs',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      properties: 'Properties',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childExecutionId: 'string',
      createDate: 'string',
      endDate: 'string',
      executionId: 'string',
      extraData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      loop: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      loopBatchNumber: 'number',
      loopItem: 'string',
      outputs: 'string',
      parentTaskExecutionId: 'string',
      properties: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
      templateId: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.extraData) {
      $dara.Model.validateMap(this.extraData);
    }
    if(this.loop) {
      $dara.Model.validateMap(this.loop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task executions.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * CDABABABAB-FC28-4D9C-8FB5-68DC6F0486FC
   */
  requestId?: string;
  /**
   * @remarks
   * The execution ID of the child node.
   */
  taskExecutions?: ListTaskExecutionsResponseBodyTaskExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskExecutions: 'TaskExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      taskExecutions: { 'type': 'array', 'itemType': ListTaskExecutionsResponseBodyTaskExecutions },
    };
  }

  validate() {
    if(Array.isArray(this.taskExecutions)) {
      $dara.Model.validateArray(this.taskExecutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

