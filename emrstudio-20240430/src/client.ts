// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateWorkflowRequest extends $tea.Model {
  /**
   * @example
   * ag-v7n2gp3vv3j****
   */
  alertGroupId?: string;
  /**
   * @example
   * NONE
   */
  alertStrategy?: string;
  taskDefinitionJsonValue?: string;
  taskRelationJsonValue?: string;
  /**
   * @example
   * 0 0 * * * ? *
   */
  cronExpr?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * PARALLEL
   */
  executionType?: string;
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
   * test
   */
  name?: string;
  /**
   * @example
   * wd-v7n2gp3vv3j****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * wg-acfmv4opbs****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleEndTime?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleStartTime?: string;
  /**
   * @example
   * OFFLINE
   */
  scheduleState?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"taskId":"t1","name":"t1","taskParams":{"rawScript":"echo 1"},"taskType":"SHELL"}]
   */
  taskDefinitionJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"preTaskId":"0", "postTaskId":"t1"}]
   */
  taskRelationJson?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * 10
   */
  timeout?: number;
  /**
   * @example
   * MEDIUM
   */
  workflowInstancePriority?: string;
  /**
   * @example
   * [{"prop":"key1","value":"value1"}]
   */
  workflowParams?: string;
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
      taskDefinitionJsonValue: 'taskDefinitionJsonValue',
      taskRelationJsonValue: 'taskRelationJsonValue',
      cronExpr: 'cronExpr',
      description: 'description',
      executionType: 'executionType',
      failureStrategy: 'failureStrategy',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      resourceGroupId: 'resourceGroupId',
      scheduleEndTime: 'scheduleEndTime',
      scheduleStartTime: 'scheduleStartTime',
      scheduleState: 'scheduleState',
      taskDefinitionJson: 'taskDefinitionJson',
      taskRelationJson: 'taskRelationJson',
      timeZone: 'timeZone',
      timeout: 'timeout',
      workflowInstancePriority: 'workflowInstancePriority',
      workflowParams: 'workflowParams',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertStrategy: 'string',
      taskDefinitionJsonValue: 'string',
      taskRelationJsonValue: 'string',
      cronExpr: 'string',
      description: 'string',
      executionType: 'string',
      failureStrategy: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      resourceGroupId: 'string',
      scheduleEndTime: 'string',
      scheduleStartTime: 'string',
      scheduleState: 'string',
      taskDefinitionJson: 'string',
      taskRelationJson: 'string',
      timeZone: 'string',
      timeout: 'number',
      workflowInstancePriority: 'string',
      workflowParams: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponseBody extends $tea.Model {
  data?: CreateWorkflowResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9E3A7161-EB7B-172B-8D18-FFB06BA38***
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWorkflowResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowRequest extends $tea.Model {
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
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManualTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManualTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * mt-3q9jo749ne5****
   */
  manualTaskId?: string;
  /**
   * @example
   * test
   */
  manualTaskName?: string;
  /**
   * @example
   * mtd-oy98v7n43el****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  /**
   * @example
   * r-oy98v7n43el****
   */
  resourceIds?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      manualTaskId: 'ManualTaskId',
      manualTaskName: 'ManualTaskName',
      parentDirectoryId: 'ParentDirectoryId',
      projectId: 'ProjectId',
      resourceIds: 'ResourceIds',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      manualTaskId: 'string',
      manualTaskName: 'string',
      parentDirectoryId: 'string',
      projectId: 'string',
      resourceIds: 'string',
      taskParams: 'string',
      taskType: 'string',
      updateTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManualTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeManualTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeManualTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManualTaskInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManualTaskInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * c-b933c5aac7f7***
   */
  emrClusterId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * application_123_***
   */
  externalAppId?: string;
  /**
   * @example
   * mti-0k5vype05xm****
   */
  manualTaskInstanceId?: string;
  /**
   * @example
   * test
   */
  manualTaskInstanceName?: string;
  /**
   * @example
   * wg-123abc***
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  submitTime?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      emrClusterId: 'EmrClusterId',
      endTime: 'EndTime',
      externalAppId: 'ExternalAppId',
      manualTaskInstanceId: 'ManualTaskInstanceId',
      manualTaskInstanceName: 'ManualTaskInstanceName',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      status: 'Status',
      submitTime: 'SubmitTime',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrClusterId: 'string',
      endTime: 'string',
      externalAppId: 'string',
      manualTaskInstanceId: 'string',
      manualTaskInstanceName: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
      status: 'string',
      submitTime: 'string',
      taskParams: 'string',
      taskType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManualTaskInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeManualTaskInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeManualTaskInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is a project description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project_name
   */
  name?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  /**
   * @example
   * B897B94B-6754-5D09-AB8C-2E8186CCADC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      projectId: 'projectId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      projectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  delayTime?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1
   */
  failRetryInterval?: number;
  /**
   * @example
   * 0
   */
  failRetryTimes?: number;
  /**
   * @example
   * YES
   */
  flag?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  /**
   * @example
   * r-oy98v7n43el****
   */
  resourceIds?: string;
  /**
   * @example
   * t-3q9jo749ne5****
   */
  taskId?: string;
  /**
   * @example
   * test
   */
  taskName?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * MEDIUM
   */
  taskPriority?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * 10
   */
  timeout?: number;
  /**
   * @example
   * CLOSE
   */
  timeoutFlag?: string;
  /**
   * @example
   * WARN
   */
  timeoutNotifyStrategy?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      delayTime: 'DelayTime',
      description: 'Description',
      failRetryInterval: 'FailRetryInterval',
      failRetryTimes: 'FailRetryTimes',
      flag: 'Flag',
      projectId: 'ProjectId',
      resourceIds: 'ResourceIds',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskParams: 'TaskParams',
      taskPriority: 'TaskPriority',
      taskType: 'TaskType',
      timeout: 'Timeout',
      timeoutFlag: 'TimeoutFlag',
      timeoutNotifyStrategy: 'TimeoutNotifyStrategy',
      updateTime: 'UpdateTime',
      version: 'Version',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      delayTime: 'number',
      description: 'string',
      failRetryInterval: 'number',
      failRetryTimes: 'number',
      flag: 'string',
      projectId: 'string',
      resourceIds: 'string',
      taskId: 'string',
      taskName: 'string',
      taskParams: 'string',
      taskPriority: 'string',
      taskType: 'string',
      timeout: 'number',
      timeoutFlag: 'string',
      timeoutNotifyStrategy: 'string',
      updateTime: 'string',
      version: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  dryRun?: string;
  /**
   * @example
   * c-b933c5aac7f7***
   */
  emrClusterId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * application_123_***
   */
  externalAppId?: string;
  /**
   * @example
   * wg-123abc***
   */
  resourceGroupId?: string;
  /**
   * @example
   * 0
   */
  retryTimes?: number;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  submitTime?: string;
  /**
   * @example
   * t-3q9jo749ne5****
   */
  taskId?: string;
  /**
   * @example
   * ti-3q9jo749ne5****
   */
  taskInstanceId?: string;
  /**
   * @example
   * test
   */
  taskInstanceName?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * 1
   */
  taskVersion?: string;
  /**
   * @example
   * wi-3q9jo749ne5****
   */
  workflowInstanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      emrClusterId: 'EmrClusterId',
      endTime: 'EndTime',
      externalAppId: 'ExternalAppId',
      resourceGroupId: 'ResourceGroupId',
      retryTimes: 'RetryTimes',
      startTime: 'StartTime',
      status: 'Status',
      submitTime: 'SubmitTime',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      taskInstanceName: 'TaskInstanceName',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      workflowInstanceId: 'WorkflowInstanceId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      emrClusterId: 'string',
      endTime: 'string',
      externalAppId: 'string',
      resourceGroupId: 'string',
      retryTimes: 'number',
      startTime: 'string',
      status: 'string',
      submitTime: 'string',
      taskId: 'string',
      taskInstanceId: 'string',
      taskInstanceName: 'string',
      taskParams: 'string',
      taskType: 'string',
      taskVersion: 'string',
      workflowInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTaskInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowRequest extends $tea.Model {
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
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBody extends $tea.Model {
  /**
   * @example
   * 611AD6E6-BFE3-5897-AA12-569F79DBAF9B
   */
  requestId?: string;
  schedule?: DescribeWorkflowResponseBodySchedule;
  taskRelations?: DescribeWorkflowResponseBodyTaskRelations[];
  tasks?: DescribeWorkflowResponseBodyTasks[];
  workflow?: DescribeWorkflowResponseBodyWorkflow;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      schedule: 'schedule',
      taskRelations: 'taskRelations',
      tasks: 'tasks',
      workflow: 'workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedule: DescribeWorkflowResponseBodySchedule,
      taskRelations: { 'type': 'array', 'itemType': DescribeWorkflowResponseBodyTaskRelations },
      tasks: { 'type': 'array', 'itemType': DescribeWorkflowResponseBodyTasks },
      workflow: DescribeWorkflowResponseBodyWorkflow,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowInstanceRequest extends $tea.Model {
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
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowInstanceResponseBody extends $tea.Model {
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
   * c-047fa6bbe732****
   */
  emrClusterId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * END
   */
  failureStrategy?: string;
  /**
   * @example
   * false
   */
  isComplementData?: boolean;
  /**
   * @example
   * workflow_instance_name
   */
  name?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * wg-susqimrr649x****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  restartTime?: string;
  /**
   * @example
   * 1
   */
  runTimes?: number;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  scheduleTime?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 0
   */
  timeout?: number;
  /**
   * @example
   * w-3q9jo749ne5****
   */
  workflowId?: string;
  /**
   * @example
   * wi-3q9jo749ne5****
   */
  workflowInstanceId?: string;
  /**
   * @example
   * MEDIUM
   */
  workflowInstancePriority?: string;
  /**
   * @example
   * 1
   */
  workflowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      alertGroupId: 'alertGroupId',
      alertStrategy: 'alertStrategy',
      emrClusterId: 'emrClusterId',
      endTime: 'endTime',
      failureStrategy: 'failureStrategy',
      isComplementData: 'isComplementData',
      name: 'name',
      requestId: 'requestId',
      resourceGroupId: 'resourceGroupId',
      restartTime: 'restartTime',
      runTimes: 'runTimes',
      scheduleTime: 'scheduleTime',
      startTime: 'startTime',
      status: 'status',
      timeout: 'timeout',
      workflowId: 'workflowId',
      workflowInstanceId: 'workflowInstanceId',
      workflowInstancePriority: 'workflowInstancePriority',
      workflowVersion: 'workflowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertStrategy: 'string',
      emrClusterId: 'string',
      endTime: 'string',
      failureStrategy: 'string',
      isComplementData: 'boolean',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      restartTime: 'string',
      runTimes: 'number',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      timeout: 'number',
      workflowId: 'string',
      workflowInstanceId: 'string',
      workflowInstancePriority: 'string',
      workflowVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWorkflowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeWorkflowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTaskInstancesRequest extends $tea.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  searchVal?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      startTime: 'startTime',
      status: 'status',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      startTime: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTaskInstancesResponseBody extends $tea.Model {
  data?: ListManualTaskInstancesResponseBodyData[];
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListManualTaskInstancesResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTaskInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListManualTaskInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListManualTaskInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTasksRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  searchVal?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      taskType: 'taskType',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      taskType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTasksResponseBody extends $tea.Model {
  data?: ListManualTasksResponseBodyData[];
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListManualTasksResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListManualTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListManualTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  searchVal?: string;
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
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  data?: ListProjectsResponseBodyData[];
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListProjectsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskInstancesRequest extends $tea.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  searchVal?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * wi-3q9jo749ne5****
   */
  workflowInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      startTime: 'startTime',
      status: 'status',
      workflowInstanceId: 'workflowInstanceId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      startTime: 'string',
      status: 'string',
      workflowInstanceId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskInstancesResponseBody extends $tea.Model {
  data?: ListTaskInstancesResponseBodyData[];
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9E3A7161-EB7B-172B-8D18-FFB06BA38***
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTaskInstancesResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTaskInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  searchVal?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * w-n72kong0832****
   */
  workflowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      taskType: 'taskType',
      workflowId: 'workflowId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      searchVal: 'string',
      taskType: 'string',
      workflowId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  data?: ListTasksResponseBodyData[];
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTasksResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesRequest extends $tea.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * w-3q9jo749ne5****
   */
  workflowId?: string;
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
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      startTime: 'startTime',
      status: 'status',
      workflowId: 'workflowId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'string',
      status: 'string',
      workflowId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBody extends $tea.Model {
  data?: ListWorkflowInstancesResponseBodyData[];
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkflowInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkflowInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsRequest extends $tea.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  searchVal?: string;
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
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBody extends $tea.Model {
  data?: ListWorkflowsResponseBodyData[];
  /**
   * @example
   * 123abc****
   */
  nextToken?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWorkflowsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkflowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkflowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWorkflowRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWorkflowResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequest extends $tea.Model {
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
  taskDefinitionJsonValue?: string;
  taskRelationJsonValue?: string;
  /**
   * @example
   * 0 0 * * * ? *
   */
  cronExpr?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * PARALLEL
   */
  executionType?: string;
  /**
   * @example
   * END
   */
  failureStrategy?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * wd-n72kong0832****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * wg-acfmv4opbs****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleEndTime?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleStartTime?: string;
  /**
   * @example
   * OFFLINE
   */
  scheduleState?: string;
  /**
   * @example
   * [{"taskId":"t1","name":"t1","taskParams":{"rawScript":"echo 1"},"taskType":"SHELL"}]
   */
  taskDefinitionJson?: string;
  /**
   * @example
   * [{"preTaskId":"0", "postTaskId":"t1"}]
   */
  taskRelationJson?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * 10
   */
  timeout?: number;
  /**
   * @example
   * MEDIUM
   */
  workflowInstancePriority?: string;
  /**
   * @example
   * [{"prop":"key1","value":"value1"}]
   */
  workflowParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      alertGroupId: 'alertGroupId',
      alertStrategy: 'alertStrategy',
      taskDefinitionJsonValue: 'taskDefinitionJsonValue',
      taskRelationJsonValue: 'taskRelationJsonValue',
      cronExpr: 'cronExpr',
      description: 'description',
      executionType: 'executionType',
      failureStrategy: 'failureStrategy',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      resourceGroupId: 'resourceGroupId',
      scheduleEndTime: 'scheduleEndTime',
      scheduleStartTime: 'scheduleStartTime',
      scheduleState: 'scheduleState',
      taskDefinitionJson: 'taskDefinitionJson',
      taskRelationJson: 'taskRelationJson',
      timeZone: 'timeZone',
      timeout: 'timeout',
      workflowInstancePriority: 'workflowInstancePriority',
      workflowParams: 'workflowParams',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertStrategy: 'string',
      taskDefinitionJsonValue: 'string',
      taskRelationJsonValue: 'string',
      cronExpr: 'string',
      description: 'string',
      executionType: 'string',
      failureStrategy: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      resourceGroupId: 'string',
      scheduleEndTime: 'string',
      scheduleStartTime: 'string',
      scheduleState: 'string',
      taskDefinitionJson: 'string',
      taskRelationJson: 'string',
      timeZone: 'string',
      timeout: 'number',
      workflowInstancePriority: 'string',
      workflowParams: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponseBodyData extends $tea.Model {
  /**
   * @example
   * w-acfmv4opbs****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      workflowId: 'workflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBodySchedule extends $tea.Model {
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
   * 0 0 * * * ? *
   */
  cronExpr?: string;
  /**
   * @example
   * C-15F7AB9B53F1****
   */
  emrClusterId?: string;
  /**
   * @example
   * END
   */
  failureStrategy?: string;
  /**
   * @example
   * wg-susqimrr649x****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleEndTime?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleStartTime?: string;
  /**
   * @example
   * OFFLINE
   */
  scheduleState?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * MEDIUM
   */
  workflowInstancePriority?: string;
  static names(): { [key: string]: string } {
    return {
      alertGroupId: 'alertGroupId',
      alertStrategy: 'alertStrategy',
      cronExpr: 'cronExpr',
      emrClusterId: 'emrClusterId',
      failureStrategy: 'failureStrategy',
      resourceGroupId: 'resourceGroupId',
      scheduleEndTime: 'scheduleEndTime',
      scheduleStartTime: 'scheduleStartTime',
      scheduleState: 'scheduleState',
      timeZone: 'timeZone',
      workflowInstancePriority: 'workflowInstancePriority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertStrategy: 'string',
      cronExpr: 'string',
      emrClusterId: 'string',
      failureStrategy: 'string',
      resourceGroupId: 'string',
      scheduleEndTime: 'string',
      scheduleStartTime: 'string',
      scheduleState: 'string',
      timeZone: 'string',
      workflowInstancePriority: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBodyTaskRelations extends $tea.Model {
  /**
   * @example
   * t-n72kong0832****
   */
  postTaskId?: string;
  /**
   * @example
   * t-n72kong0832****
   */
  preTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      postTaskId: 'postTaskId',
      preTaskId: 'preTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postTaskId: 'string',
      preTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBodyTasks extends $tea.Model {
  /**
   * @example
   * task description
   */
  description?: string;
  /**
   * @example
   * task_name
   */
  name?: string;
  /**
   * @example
   * t-n72kong0832****
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      taskId: 'taskId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      taskId: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBodyWorkflow extends $tea.Model {
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * PARALLEL
   */
  executionType?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * wd-n72kong0832****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * 0
   */
  timeout?: number;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  updateTime?: string;
  /**
   * @example
   * w-n72kong0832****
   */
  workflowId?: string;
  /**
   * @example
   * [{"prop":"key1","value":"value1"}]
   */
  workflowParams?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      executionType: 'executionType',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      timeout: 'timeout',
      updateTime: 'updateTime',
      workflowId: 'workflowId',
      workflowParams: 'workflowParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      executionType: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      timeout: 'number',
      updateTime: 'string',
      workflowId: 'string',
      workflowParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTaskInstancesResponseBodyData extends $tea.Model {
  /**
   * @example
   * c-b933c5aac7f7***
   */
  emrClusterId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * application_123_***
   */
  externalAppId?: string;
  /**
   * @example
   * mti-3q9jo749ne5****
   */
  manualTaskInstanceId?: string;
  /**
   * @example
   * test
   */
  manualTaskInstanceName?: string;
  /**
   * @example
   * wg-3q9jo749ne5****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  submitTime?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      emrClusterId: 'EmrClusterId',
      endTime: 'EndTime',
      externalAppId: 'ExternalAppId',
      manualTaskInstanceId: 'ManualTaskInstanceId',
      manualTaskInstanceName: 'ManualTaskInstanceName',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      status: 'Status',
      submitTime: 'SubmitTime',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrClusterId: 'string',
      endTime: 'string',
      externalAppId: 'string',
      manualTaskInstanceId: 'string',
      manualTaskInstanceName: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
      status: 'string',
      submitTime: 'string',
      taskParams: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTasksResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * mt-3q9jo749ne5****
   */
  manualTaskId?: string;
  /**
   * @example
   * test
   */
  manualTaskName?: string;
  /**
   * @example
   * mtd-oy98v7n43el****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  /**
   * @example
   * r-oy98v7n43el****
   */
  resourceIds?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      manualTaskId: 'ManualTaskId',
      manualTaskName: 'ManualTaskName',
      parentDirectoryId: 'ParentDirectoryId',
      projectId: 'ProjectId',
      resourceIds: 'ResourceIds',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      manualTaskId: 'string',
      manualTaskName: 'string',
      parentDirectoryId: 'string',
      projectId: 'string',
      resourceIds: 'string',
      taskParams: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyData extends $tea.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * project_name
   */
  name?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskInstancesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 0
   */
  dryRun?: string;
  /**
   * @example
   * c-b933c5aac7f7***
   */
  emrClusterId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * application_123_***
   */
  externalAppId?: string;
  /**
   * @example
   * wg-3q9jo749ne5****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 0
   */
  retryTimes?: number;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  submitTime?: string;
  /**
   * @example
   * t-3q9jo749ne5****
   */
  taskId?: string;
  /**
   * @example
   * ti-3q9jo749ne5****
   */
  taskInstanceId?: string;
  /**
   * @example
   * test
   */
  taskInstanceName?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * 1
   */
  taskVersion?: string;
  /**
   * @example
   * wi-3q9jo749ne5****
   */
  workflowInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      emrClusterId: 'EmrClusterId',
      endTime: 'EndTime',
      externalAppId: 'ExternalAppId',
      resourceGroupId: 'ResourceGroupId',
      retryTimes: 'RetryTimes',
      startTime: 'StartTime',
      status: 'Status',
      submitTime: 'SubmitTime',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      taskInstanceName: 'TaskInstanceName',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      emrClusterId: 'string',
      endTime: 'string',
      externalAppId: 'string',
      resourceGroupId: 'string',
      retryTimes: 'number',
      startTime: 'string',
      status: 'string',
      submitTime: 'string',
      taskId: 'string',
      taskInstanceId: 'string',
      taskInstanceName: 'string',
      taskParams: 'string',
      taskType: 'string',
      taskVersion: 'string',
      workflowInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  delayTime?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1
   */
  failRetryInterval?: number;
  /**
   * @example
   * 0
   */
  failRetryTimes?: number;
  /**
   * @example
   * YES
   */
  flag?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  /**
   * @example
   * r-3q9jo749ne5****
   */
  resourceIds?: string;
  /**
   * @example
   * t-3q9jo749ne5****
   */
  taskId?: string;
  /**
   * @example
   * test
   */
  taskName?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * MEDIUM
   */
  taskPriority?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * 0
   */
  timeout?: number;
  /**
   * @example
   * CLOSE
   */
  timeoutFlag?: string;
  /**
   * @example
   * WARN
   */
  timeoutNotifyStrategy?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      delayTime: 'DelayTime',
      description: 'Description',
      failRetryInterval: 'FailRetryInterval',
      failRetryTimes: 'FailRetryTimes',
      flag: 'Flag',
      projectId: 'ProjectId',
      resourceIds: 'ResourceIds',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskParams: 'TaskParams',
      taskPriority: 'TaskPriority',
      taskType: 'TaskType',
      timeout: 'Timeout',
      timeoutFlag: 'TimeoutFlag',
      timeoutNotifyStrategy: 'TimeoutNotifyStrategy',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      delayTime: 'number',
      description: 'string',
      failRetryInterval: 'number',
      failRetryTimes: 'number',
      flag: 'string',
      projectId: 'string',
      resourceIds: 'string',
      taskId: 'string',
      taskName: 'string',
      taskParams: 'string',
      taskPriority: 'string',
      taskType: 'string',
      timeout: 'number',
      timeoutFlag: 'string',
      timeoutNotifyStrategy: 'string',
      updateTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * workflow_instance_name
   */
  name?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleTime?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * w-3q9jo749ne5****
   */
  workflowId?: string;
  /**
   * @example
   * wi-3q9jo749ne5****
   */
  workflowInstanceId?: string;
  /**
   * @example
   * 1
   */
  workflowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      name: 'name',
      scheduleTime: 'scheduleTime',
      startTime: 'startTime',
      status: 'status',
      workflowId: 'workflowId',
      workflowInstanceId: 'workflowInstanceId',
      workflowVersion: 'workflowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      workflowId: 'string',
      workflowInstanceId: 'string',
      workflowVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * workflow description
   */
  description?: string;
  /**
   * @example
   * workflow_name
   */
  name?: string;
  /**
   * @example
   * wd-3q9jo749ne5****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  updateTime?: string;
  /**
   * @example
   * w-3q9jo749ne5****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      updateTime: 'updateTime',
      workflowId: 'workflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      updateTime: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._productId = "EmrStudio";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("emrstudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 创建工作流
   * 
   * @param request - CreateWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowResponse
   */
  async createWorkflowWithOptions(projectId: string, request: CreateWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateWorkflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertGroupId)) {
      query["alertGroupId"] = request.alertGroupId;
    }

    if (!Util.isUnset(request.alertStrategy)) {
      query["alertStrategy"] = request.alertStrategy;
    }

    if (!Util.isUnset(request.cronExpr)) {
      query["cronExpr"] = request.cronExpr;
    }

    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!Util.isUnset(request.failureStrategy)) {
      query["failureStrategy"] = request.failureStrategy;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.parentDirectoryId)) {
      query["parentDirectoryId"] = request.parentDirectoryId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scheduleEndTime)) {
      query["scheduleEndTime"] = request.scheduleEndTime;
    }

    if (!Util.isUnset(request.scheduleStartTime)) {
      query["scheduleStartTime"] = request.scheduleStartTime;
    }

    if (!Util.isUnset(request.scheduleState)) {
      query["scheduleState"] = request.scheduleState;
    }

    if (!Util.isUnset(request.taskDefinitionJson)) {
      query["taskDefinitionJson"] = request.taskDefinitionJson;
    }

    if (!Util.isUnset(request.taskRelationJson)) {
      query["taskRelationJson"] = request.taskRelationJson;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["timeZone"] = request.timeZone;
    }

    if (!Util.isUnset(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.workflowInstancePriority)) {
      query["workflowInstancePriority"] = request.workflowInstancePriority;
    }

    if (!Util.isUnset(request.workflowParams)) {
      query["workflowParams"] = request.workflowParams;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskDefinitionJsonValue)) {
      body["taskDefinitionJsonValue"] = request.taskDefinitionJsonValue;
    }

    if (!Util.isUnset(request.taskRelationJsonValue)) {
      body["taskRelationJsonValue"] = request.taskRelationJsonValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateWorkflowResponse>(await this.callApi(params, req, runtime), new CreateWorkflowResponse({}));
    } else {
      return $tea.cast<CreateWorkflowResponse>(await this.execute(params, req, runtime), new CreateWorkflowResponse({}));
    }

  }

  /**
   * 创建工作流
   * 
   * @param request - CreateWorkflowRequest
   * @returns CreateWorkflowResponse
   */
  async createWorkflow(projectId: string, request: CreateWorkflowRequest): Promise<CreateWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkflowWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflowWithOptions(projectId: string, workflowId: string, request: DeleteWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteWorkflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows/${OpenApiUtil.getEncodeParam(workflowId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteWorkflowResponse>(await this.callApi(params, req, runtime), new DeleteWorkflowResponse({}));
    } else {
      return $tea.cast<DeleteWorkflowResponse>(await this.execute(params, req, runtime), new DeleteWorkflowResponse({}));
    }

  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowRequest
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflow(projectId: string, workflowId: string, request: DeleteWorkflowRequest): Promise<DeleteWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkflowWithOptions(projectId, workflowId, request, headers, runtime);
  }

  /**
   * 获取手动任务定义
   * 
   * @param request - DescribeManualTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeManualTaskResponse
   */
  async describeManualTaskWithOptions(projectId: string, manualTaskId: string, request: DescribeManualTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeManualTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeManualTask",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/manualTasks/${OpenApiUtil.getEncodeParam(manualTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeManualTaskResponse>(await this.callApi(params, req, runtime), new DescribeManualTaskResponse({}));
    } else {
      return $tea.cast<DescribeManualTaskResponse>(await this.execute(params, req, runtime), new DescribeManualTaskResponse({}));
    }

  }

  /**
   * 获取手动任务定义
   * 
   * @param request - DescribeManualTaskRequest
   * @returns DescribeManualTaskResponse
   */
  async describeManualTask(projectId: string, manualTaskId: string, request: DescribeManualTaskRequest): Promise<DescribeManualTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeManualTaskWithOptions(projectId, manualTaskId, request, headers, runtime);
  }

  /**
   * 获取手动任务实例
   * 
   * @param request - DescribeManualTaskInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeManualTaskInstanceResponse
   */
  async describeManualTaskInstanceWithOptions(manualTaskInstanceId: string, projectId: string, request: DescribeManualTaskInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeManualTaskInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeManualTaskInstance",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/manualTaskInstances/${OpenApiUtil.getEncodeParam(manualTaskInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeManualTaskInstanceResponse>(await this.callApi(params, req, runtime), new DescribeManualTaskInstanceResponse({}));
    } else {
      return $tea.cast<DescribeManualTaskInstanceResponse>(await this.execute(params, req, runtime), new DescribeManualTaskInstanceResponse({}));
    }

  }

  /**
   * 获取手动任务实例
   * 
   * @param request - DescribeManualTaskInstanceRequest
   * @returns DescribeManualTaskInstanceResponse
   */
  async describeManualTaskInstance(manualTaskInstanceId: string, projectId: string, request: DescribeManualTaskInstanceRequest): Promise<DescribeManualTaskInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeManualTaskInstanceWithOptions(manualTaskInstanceId, projectId, request, headers, runtime);
  }

  /**
   * 获取项目详情
   * 
   * @param request - DescribeProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectResponse
   */
  async describeProjectWithOptions(projectId: string, request: DescribeProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProject",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeProjectResponse>(await this.callApi(params, req, runtime), new DescribeProjectResponse({}));
    } else {
      return $tea.cast<DescribeProjectResponse>(await this.execute(params, req, runtime), new DescribeProjectResponse({}));
    }

  }

  /**
   * 获取项目详情
   * 
   * @param request - DescribeProjectRequest
   * @returns DescribeProjectResponse
   */
  async describeProject(projectId: string, request: DescribeProjectRequest): Promise<DescribeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeProjectWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 查询任务定义
   * 
   * @param request - DescribeTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(workflowId: string, projectId: string, taskId: string, request: DescribeTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTask",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows/${OpenApiUtil.getEncodeParam(workflowId)}/tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeTaskResponse>(await this.callApi(params, req, runtime), new DescribeTaskResponse({}));
    } else {
      return $tea.cast<DescribeTaskResponse>(await this.execute(params, req, runtime), new DescribeTaskResponse({}));
    }

  }

  /**
   * 查询任务定义
   * 
   * @param request - DescribeTaskRequest
   * @returns DescribeTaskResponse
   */
  async describeTask(workflowId: string, projectId: string, taskId: string, request: DescribeTaskRequest): Promise<DescribeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskWithOptions(workflowId, projectId, taskId, request, headers, runtime);
  }

  /**
   * 获取任务实例
   * 
   * @param request - DescribeTaskInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskInstanceResponse
   */
  async describeTaskInstanceWithOptions(projectId: string, workflowInstanceId: string, taskInstanceId: string, request: DescribeTaskInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTaskInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTaskInstance",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows/${OpenApiUtil.getEncodeParam(workflowInstanceId)}/taskInstances/${OpenApiUtil.getEncodeParam(taskInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeTaskInstanceResponse>(await this.callApi(params, req, runtime), new DescribeTaskInstanceResponse({}));
    } else {
      return $tea.cast<DescribeTaskInstanceResponse>(await this.execute(params, req, runtime), new DescribeTaskInstanceResponse({}));
    }

  }

  /**
   * 获取任务实例
   * 
   * @param request - DescribeTaskInstanceRequest
   * @returns DescribeTaskInstanceResponse
   */
  async describeTaskInstance(projectId: string, workflowInstanceId: string, taskInstanceId: string, request: DescribeTaskInstanceRequest): Promise<DescribeTaskInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskInstanceWithOptions(projectId, workflowInstanceId, taskInstanceId, request, headers, runtime);
  }

  /**
   * 获取工作流详情
   * 
   * @param request - DescribeWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkflowResponse
   */
  async describeWorkflowWithOptions(projectId: string, workflowId: string, request: DescribeWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWorkflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows/${OpenApiUtil.getEncodeParam(workflowId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeWorkflowResponse>(await this.callApi(params, req, runtime), new DescribeWorkflowResponse({}));
    } else {
      return $tea.cast<DescribeWorkflowResponse>(await this.execute(params, req, runtime), new DescribeWorkflowResponse({}));
    }

  }

  /**
   * 获取工作流详情
   * 
   * @param request - DescribeWorkflowRequest
   * @returns DescribeWorkflowResponse
   */
  async describeWorkflow(projectId: string, workflowId: string, request: DescribeWorkflowRequest): Promise<DescribeWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowWithOptions(projectId, workflowId, request, headers, runtime);
  }

  /**
   * 获取工作流实例详情
   * 
   * @param request - DescribeWorkflowInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkflowInstanceResponse
   */
  async describeWorkflowInstanceWithOptions(projectId: string, workflowInstanceId: string, request: DescribeWorkflowInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWorkflowInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWorkflowInstance",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflowInstances/${OpenApiUtil.getEncodeParam(workflowInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new DescribeWorkflowInstanceResponse({}));
    } else {
      return $tea.cast<DescribeWorkflowInstanceResponse>(await this.execute(params, req, runtime), new DescribeWorkflowInstanceResponse({}));
    }

  }

  /**
   * 获取工作流实例详情
   * 
   * @param request - DescribeWorkflowInstanceRequest
   * @returns DescribeWorkflowInstanceResponse
   */
  async describeWorkflowInstance(projectId: string, workflowInstanceId: string, request: DescribeWorkflowInstanceRequest): Promise<DescribeWorkflowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowInstanceWithOptions(projectId, workflowInstanceId, request, headers, runtime);
  }

  /**
   * 获取手动任务实例列表
   * 
   * @param request - ListManualTaskInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManualTaskInstancesResponse
   */
  async listManualTaskInstancesWithOptions(projectId: string, request: ListManualTaskInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListManualTaskInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListManualTaskInstances",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/manualTaskInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListManualTaskInstancesResponse>(await this.callApi(params, req, runtime), new ListManualTaskInstancesResponse({}));
    } else {
      return $tea.cast<ListManualTaskInstancesResponse>(await this.execute(params, req, runtime), new ListManualTaskInstancesResponse({}));
    }

  }

  /**
   * 获取手动任务实例列表
   * 
   * @param request - ListManualTaskInstancesRequest
   * @returns ListManualTaskInstancesResponse
   */
  async listManualTaskInstances(projectId: string, request: ListManualTaskInstancesRequest): Promise<ListManualTaskInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listManualTaskInstancesWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 查询手动任务定义列表
   * 
   * @param request - ListManualTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManualTasksResponse
   */
  async listManualTasksWithOptions(projectId: string, request: ListManualTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListManualTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!Util.isUnset(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListManualTasks",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/manualTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListManualTasksResponse>(await this.callApi(params, req, runtime), new ListManualTasksResponse({}));
    } else {
      return $tea.cast<ListManualTasksResponse>(await this.execute(params, req, runtime), new ListManualTasksResponse({}));
    }

  }

  /**
   * 查询手动任务定义列表
   * 
   * @param request - ListManualTasksRequest
   * @returns ListManualTasksResponse
   */
  async listManualTasks(projectId: string, request: ListManualTasksRequest): Promise<ListManualTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listManualTasksWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 获取项目详情
   * 
   * @param request - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(request: ListProjectsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
    } else {
      return $tea.cast<ListProjectsResponse>(await this.execute(params, req, runtime), new ListProjectsResponse({}));
    }

  }

  /**
   * 获取项目详情
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  /**
   * 获取任务实例列表
   * 
   * @param request - ListTaskInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskInstancesResponse
   */
  async listTaskInstancesWithOptions(projectId: string, request: ListTaskInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTaskInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.workflowInstanceId)) {
      query["workflowInstanceId"] = request.workflowInstanceId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskInstances",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/taskInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListTaskInstancesResponse>(await this.callApi(params, req, runtime), new ListTaskInstancesResponse({}));
    } else {
      return $tea.cast<ListTaskInstancesResponse>(await this.execute(params, req, runtime), new ListTaskInstancesResponse({}));
    }

  }

  /**
   * 获取任务实例列表
   * 
   * @param request - ListTaskInstancesRequest
   * @returns ListTaskInstancesResponse
   */
  async listTaskInstances(projectId: string, request: ListTaskInstancesRequest): Promise<ListTaskInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskInstancesWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 查询任务定义列表
   * 
   * @param request - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(projectId: string, request: ListTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!Util.isUnset(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["workflowId"] = request.workflowId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
    } else {
      return $tea.cast<ListTasksResponse>(await this.execute(params, req, runtime), new ListTasksResponse({}));
    }

  }

  /**
   * 查询任务定义列表
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(projectId: string, request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 获取工作流实例列表
   * 
   * @param request - ListWorkflowInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowInstancesResponse
   */
  async listWorkflowInstancesWithOptions(projectId: string, request: ListWorkflowInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkflowInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["workflowId"] = request.workflowId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkflowInstances",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflowInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListWorkflowInstancesResponse>(await this.callApi(params, req, runtime), new ListWorkflowInstancesResponse({}));
    } else {
      return $tea.cast<ListWorkflowInstancesResponse>(await this.execute(params, req, runtime), new ListWorkflowInstancesResponse({}));
    }

  }

  /**
   * 获取工作流实例列表
   * 
   * @param request - ListWorkflowInstancesRequest
   * @returns ListWorkflowInstancesResponse
   */
  async listWorkflowInstances(projectId: string, request: ListWorkflowInstancesRequest): Promise<ListWorkflowInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkflowInstancesWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 获取工作流列表
   * 
   * @param request - ListWorkflowsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowsResponse
   */
  async listWorkflowsWithOptions(projectId: string, request: ListWorkflowsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkflowsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkflows",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListWorkflowsResponse>(await this.callApi(params, req, runtime), new ListWorkflowsResponse({}));
    } else {
      return $tea.cast<ListWorkflowsResponse>(await this.execute(params, req, runtime), new ListWorkflowsResponse({}));
    }

  }

  /**
   * 获取工作流列表
   * 
   * @param request - ListWorkflowsRequest
   * @returns ListWorkflowsResponse
   */
  async listWorkflows(projectId: string, request: ListWorkflowsRequest): Promise<ListWorkflowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkflowsWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 运行工作流
   * 
   * @param request - RunWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunWorkflowResponse
   */
  async runWorkflowWithOptions(projectId: string, request: RunWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunWorkflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertGroupId)) {
      query["alertGroupId"] = request.alertGroupId;
    }

    if (!Util.isUnset(request.alertStrategy)) {
      query["alertStrategy"] = request.alertStrategy;
    }

    if (!Util.isUnset(request.complementDependentMode)) {
      query["complementDependentMode"] = request.complementDependentMode;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.execType)) {
      query["execType"] = request.execType;
    }

    if (!Util.isUnset(request.expectedParallelismNumber)) {
      query["expectedParallelismNumber"] = request.expectedParallelismNumber;
    }

    if (!Util.isUnset(request.failureStrategy)) {
      query["failureStrategy"] = request.failureStrategy;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.runMode)) {
      query["runMode"] = request.runMode;
    }

    if (!Util.isUnset(request.scheduleTime)) {
      query["scheduleTime"] = request.scheduleTime;
    }

    if (!Util.isUnset(request.startParams)) {
      query["startParams"] = request.startParams;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["workflowId"] = request.workflowId;
    }

    if (!Util.isUnset(request.workflowInstancePriority)) {
      query["workflowInstancePriority"] = request.workflowInstancePriority;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/executors/run-workflow`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<RunWorkflowResponse>(await this.callApi(params, req, runtime), new RunWorkflowResponse({}));
    } else {
      return $tea.cast<RunWorkflowResponse>(await this.execute(params, req, runtime), new RunWorkflowResponse({}));
    }

  }

  /**
   * 运行工作流
   * 
   * @param request - RunWorkflowRequest
   * @returns RunWorkflowResponse
   */
  async runWorkflow(projectId: string, request: RunWorkflowRequest): Promise<RunWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runWorkflowWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflowWithOptions(projectId: string, workflowId: string, request: UpdateWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateWorkflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertGroupId)) {
      query["alertGroupId"] = request.alertGroupId;
    }

    if (!Util.isUnset(request.alertStrategy)) {
      query["alertStrategy"] = request.alertStrategy;
    }

    if (!Util.isUnset(request.cronExpr)) {
      query["cronExpr"] = request.cronExpr;
    }

    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!Util.isUnset(request.failureStrategy)) {
      query["failureStrategy"] = request.failureStrategy;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.parentDirectoryId)) {
      query["parentDirectoryId"] = request.parentDirectoryId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scheduleEndTime)) {
      query["scheduleEndTime"] = request.scheduleEndTime;
    }

    if (!Util.isUnset(request.scheduleStartTime)) {
      query["scheduleStartTime"] = request.scheduleStartTime;
    }

    if (!Util.isUnset(request.scheduleState)) {
      query["scheduleState"] = request.scheduleState;
    }

    if (!Util.isUnset(request.taskDefinitionJson)) {
      query["taskDefinitionJson"] = request.taskDefinitionJson;
    }

    if (!Util.isUnset(request.taskRelationJson)) {
      query["taskRelationJson"] = request.taskRelationJson;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["timeZone"] = request.timeZone;
    }

    if (!Util.isUnset(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.workflowInstancePriority)) {
      query["workflowInstancePriority"] = request.workflowInstancePriority;
    }

    if (!Util.isUnset(request.workflowParams)) {
      query["workflowParams"] = request.workflowParams;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskDefinitionJsonValue)) {
      body["taskDefinitionJsonValue"] = request.taskDefinitionJsonValue;
    }

    if (!Util.isUnset(request.taskRelationJsonValue)) {
      body["taskRelationJsonValue"] = request.taskRelationJsonValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows/${OpenApiUtil.getEncodeParam(workflowId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateWorkflowResponse>(await this.callApi(params, req, runtime), new UpdateWorkflowResponse({}));
    } else {
      return $tea.cast<UpdateWorkflowResponse>(await this.execute(params, req, runtime), new UpdateWorkflowResponse({}));
    }

  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowRequest
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflow(projectId: string, workflowId: string, request: UpdateWorkflowRequest): Promise<UpdateWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkflowWithOptions(projectId, workflowId, request, headers, runtime);
  }

}
