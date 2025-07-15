// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionsResponseBodyExecutionsCurrentTasks extends $dara.Model {
  /**
   * @remarks
   * The execution template of the task.
   * 
   * @example
   * acs::Template
   */
  taskAction?: string;
  /**
   * @remarks
   * The ID of the task execution.
   * 
   * @example
   * task-exec-44d32b45d2a49899#1
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * installSLSILogtail
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAction: 'string',
      taskExecutionId: 'string',
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

export class ListExecutionsResponseBodyExecutions extends $dara.Model {
  /**
   * @remarks
   * The type of the execution template. Valid values: Other, TimerTrigger, EventTrigger, and AlarmTrigger.
   * 
   * @example
   * Other
   */
  category?: string;
  /**
   * @remarks
   * The number of tasks that are counted by execution status.
   * 
   * @example
   * {"Failed": 0,"Success": 1,"Total": 2}
   */
  counters?: { [key: string]: any };
  /**
   * @remarks
   * The time when the execution was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the tasks that are running.
   */
  currentTasks?: ListExecutionsResponseBodyExecutionsCurrentTasks[];
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * test execution.
   */
  description?: string;
  /**
   * @remarks
   * The time when the execution stops running.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDate?: string;
  /**
   * @remarks
   * The account ID of the user who started the execution of the template.
   * 
   * @example
   * 1309252800
   */
  executedBy?: string;
  /**
   * @remarks
   * The unique ID of the execution.
   * 
   * @example
   * exec-44d32b45d2a449e
   */
  executionId?: string;
  /**
   * @remarks
   * Indicates whether the execution contains child executions.
   * 
   * @example
   * false
   */
  isParent?: boolean;
  /**
   * @remarks
   * The time when the template was last successfully triggered.
   * 
   * @example
   * 2019-05-27T09:29:18Z
   */
  lastSuccessfulTriggerTime?: string;
  /**
   * @remarks
   * The outputs of last trigger.
   * 
   * @example
   * {
   *       "InstanceId": "i-xxx"
   * }
   */
  lastTriggerOutputs?: string;
  /**
   * @remarks
   * The status of the execution after the template was last triggered.
   * 
   * @example
   * Success
   */
  lastTriggerStatus?: string;
  /**
   * @remarks
   * The status message of last trigger.
   * 
   * @example
   * ""
   */
  lastTriggerStatusMessage?: string;
  /**
   * @remarks
   * The time when the template was last successfully triggered.
   * 
   * @example
   * 2019-05-27T09:29:18Z
   */
  lastTriggerTime?: string;
  /**
   * @remarks
   * The execution mode.
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The next schedule time for timer trigger execution.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  nextScheduleTime?: string;
  /**
   * @remarks
   * The output of the execution.
   * 
   * @example
   * { "InstanceId":"i-xxx" }
   */
  outputs?: string;
  /**
   * @remarks
   * The input parameters of the execution.
   * 
   * @example
   * { "Status":"Running" }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The role that started the execution of the template.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * { 			"Success": 1 		}
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The security check mode. Valid values: Skip, and ConfirmEveryHighRiskAction.
   * 
   * @example
   * Skip
   */
  safetyCheck?: string;
  /**
   * @remarks
   * The time when the execution was started.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDate?: string;
  /**
   * @remarks
   * The status of the execution. Valid values: Started, Queued, Running, Waiting, Success, Failed, and Cancelled.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The status of the task execution.
   * 
   * @example
   * “”
   */
  statusMessage?: string;
  /**
   * @remarks
   * The reason for which the status occurs.
   * 
   * @example
   * ""
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the execution.
   * 
   * @example
   * {}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The target resource.
   * 
   * @example
   * "{"ResourceType": "ALIYUN::ECS::Instance", "Filters": [{"ResourceIds": ["i-bp14z07dg3464980x72o"], "RegionId": "cn-hangzhou", "Type": "ResourceIds"}]}"
   */
  targets?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 123
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the execution was updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The Waiting state.
   * 
   * @example
   * ""
   */
  waitingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      counters: 'Counters',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      description: 'Description',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      isParent: 'IsParent',
      lastSuccessfulTriggerTime: 'LastSuccessfulTriggerTime',
      lastTriggerOutputs: 'LastTriggerOutputs',
      lastTriggerStatus: 'LastTriggerStatus',
      lastTriggerStatusMessage: 'LastTriggerStatusMessage',
      lastTriggerTime: 'LastTriggerTime',
      mode: 'Mode',
      nextScheduleTime: 'NextScheduleTime',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      resourceGroupId: 'ResourceGroupId',
      resourceStatus: 'ResourceStatus',
      safetyCheck: 'SafetyCheck',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      statusReason: 'StatusReason',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
      waitingStatus: 'WaitingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      counters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutionsCurrentTasks },
      description: 'string',
      endDate: 'string',
      executedBy: 'string',
      executionId: 'string',
      isParent: 'boolean',
      lastSuccessfulTriggerTime: 'string',
      lastTriggerOutputs: 'string',
      lastTriggerStatus: 'string',
      lastTriggerStatusMessage: 'string',
      lastTriggerTime: 'string',
      mode: 'string',
      nextScheduleTime: 'string',
      outputs: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentExecutionId: 'string',
      ramRole: 'string',
      resourceGroupId: 'string',
      resourceStatus: 'string',
      safetyCheck: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      statusReason: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateDate: 'string',
      waitingStatus: 'string',
    };
  }

  validate() {
    if(this.counters) {
      $dara.Model.validateMap(this.counters);
    }
    if(Array.isArray(this.currentTasks)) {
      $dara.Model.validateArray(this.currentTasks);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task executions.
   */
  executions?: ListExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A074-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the executions.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

