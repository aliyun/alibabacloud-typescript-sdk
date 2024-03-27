// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeManualTaskRequest extends $tea.Model {
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
  createTime?: string;
  description?: string;
  manualTaskId?: string;
  manualTaskName?: string;
  parentDirectoryId?: string;
  projectId?: string;
  resourceIds?: string;
  taskParams?: string;
  taskType?: string;
  updateTime?: string;
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
  emrClusterId?: string;
  endTime?: string;
  externalAppId?: string;
  manualTaskInstanceId?: string;
  manualTaskInstanceName?: string;
  resourceGroupId?: string;
  startTime?: string;
  status?: string;
  submitTime?: string;
  taskParams?: string;
  taskType?: string;
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
  code?: number;
  description?: string;
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      name: 'name',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      name: 'string',
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
  createTime?: string;
  delayTime?: number;
  description?: string;
  failRetryInterval?: number;
  failRetryTimes?: number;
  flag?: string;
  projectId?: string;
  resourceIds?: string;
  taskId?: string;
  taskName?: string;
  taskParams?: string;
  taskPriority?: string;
  taskType?: string;
  timeout?: number;
  timeoutFlag?: string;
  timeoutNotifyStrategy?: string;
  updateTime?: string;
  version?: string;
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
  dryRun?: string;
  emrClusterId?: string;
  endTime?: string;
  externalAppId?: string;
  resourceGroupId?: string;
  retryTimes?: number;
  startTime?: string;
  status?: string;
  submitTime?: string;
  taskId?: string;
  taskInstanceId?: string;
  taskInstanceName?: string;
  taskParams?: string;
  taskType?: string;
  taskVersion?: string;
  workflowInstanceId?: string;
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
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBody extends $tea.Model {
  requestId?: string;
  taskRelations?: DescribeWorkflowResponseBodyTaskRelations[];
  tasks?: DescribeWorkflowResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskRelations: 'taskRelations',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskRelations: { 'type': 'array', 'itemType': DescribeWorkflowResponseBodyTaskRelations },
      tasks: { 'type': 'array', 'itemType': DescribeWorkflowResponseBodyTasks },
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
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowInstanceResponseBody extends $tea.Model {
  emrClusterId?: string;
  endDate?: string;
  isComplementData?: boolean;
  name?: string;
  requestId?: string;
  resourceGroupId?: string;
  runTimes?: number;
  scheduleTime?: string;
  startDate?: string;
  state?: string;
  timeout?: number;
  workflowId?: number;
  workflowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      emrClusterId: 'emrClusterId',
      endDate: 'endDate',
      isComplementData: 'isComplementData',
      name: 'name',
      requestId: 'requestId',
      resourceGroupId: 'resourceGroupId',
      runTimes: 'runTimes',
      scheduleTime: 'scheduleTime',
      startDate: 'startDate',
      state: 'state',
      timeout: 'timeout',
      workflowId: 'workflowId',
      workflowVersion: 'workflowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrClusterId: 'string',
      endDate: 'string',
      isComplementData: 'boolean',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      runTimes: 'number',
      scheduleTime: 'string',
      startDate: 'string',
      state: 'string',
      timeout: 'number',
      workflowId: 'number',
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
  endTime?: string;
  executionStatus?: string;
  maxResults?: number;
  nextToken?: string;
  searchVal?: string;
  startTime?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      executionStatus: 'executionStatus',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      startTime: 'startTime',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      executionStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      startTime: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTaskInstancesResponseBody extends $tea.Model {
  data?: ListManualTaskInstancesResponseBodyData[];
  nextToken?: string;
  requestId?: string;
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
  maxResults?: number;
  nextToken?: string;
  searchVal?: string;
  taskType?: string;
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
  nextToken?: string;
  requestId?: string;
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
  maxResults?: number;
  nextToken?: string;
  searchVal?: string;
  workspaceId?: number;
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
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  data?: ListProjectsResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListProjectsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
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
  endTime?: string;
  executionStatus?: string;
  maxResults?: number;
  nextToken?: string;
  searchVal?: string;
  startTime?: string;
  workflowInstanceId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      executionStatus: 'executionStatus',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      startTime: 'startTime',
      workflowInstanceId: 'workflowInstanceId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      executionStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      startTime: 'string',
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
  nextToken?: string;
  requestId?: string;
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
  maxResults?: string;
  nextToken?: string;
  searchVal?: string;
  taskType?: string;
  workflowId?: string;
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
  nextToken?: string;
  requestId?: string;
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
  endDate?: string;
  maxResults?: number;
  nextToken?: string;
  startDate?: string;
  workflowId?: number;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      startDate: 'startDate',
      workflowId: 'workflowId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startDate: 'string',
      workflowId: 'number',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBody extends $tea.Model {
  data?: ListWorkflowInstancesResponseBodyData[];
  nextToken?: string;
  requestId?: string;
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
  maxResults?: number;
  nextToken?: string;
  searchVal?: string;
  workspaceId?: number;
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
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBody extends $tea.Model {
  data?: ListWorkflowsResponseBodyData[];
  nextToken?: string;
  requestId?: string;
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

export class DescribeWorkflowResponseBodyTaskRelations extends $tea.Model {
  name?: string;
  postTaskId?: number;
  postTaskVersion?: number;
  preTaskId?: number;
  preTaskVersion?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      postTaskId: 'postTaskId',
      postTaskVersion: 'postTaskVersion',
      preTaskId: 'preTaskId',
      preTaskVersion: 'preTaskVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      postTaskId: 'number',
      postTaskVersion: 'number',
      preTaskId: 'number',
      preTaskVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowResponseBodyTasks extends $tea.Model {
  description?: string;
  name?: string;
  taskId?: number;
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
      taskId: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTaskInstancesResponseBodyData extends $tea.Model {
  emrClusterId?: string;
  endTime?: string;
  externalAppId?: string;
  manualTaskInstanceId?: string;
  manualTaskInstanceName?: string;
  resourceGroupId?: string;
  startTime?: string;
  status?: string;
  submitTime?: string;
  taskParams?: string;
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
  createTime?: string;
  description?: string;
  manualTaskId?: string;
  manualTaskName?: string;
  parentDirectoryId?: string;
  projectId?: string;
  resourceIds?: string;
  taskParams?: string;
  taskType?: string;
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
  code?: number;
  description?: string;
  name?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      name: 'name',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskInstancesResponseBodyData extends $tea.Model {
  dryRun?: string;
  emrClusterId?: string;
  endTime?: string;
  externalAppId?: string;
  resourceGroupId?: string;
  retryTimes?: number;
  startTime?: string;
  status?: string;
  submitTime?: string;
  taskId?: string;
  taskInstanceId?: string;
  taskInstanceName?: string;
  taskParams?: string;
  taskType?: string;
  taskVersion?: string;
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
  createTime?: string;
  delayTime?: number;
  description?: string;
  failRetryInterval?: number;
  failRetryTimes?: number;
  flag?: string;
  projectId?: string;
  resourceIds?: string;
  taskId?: string;
  taskName?: string;
  taskParams?: string;
  taskPriority?: string;
  taskType?: string;
  timeout?: number;
  timeoutFlag?: string;
  timeoutNotifyStrategy?: string;
  updateTime?: string;
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
  endDate?: string;
  name?: string;
  runTimes?: string;
  scheduleTime?: string;
  startDate?: string;
  state?: string;
  workflowId?: number;
  workflowInstanceId?: number;
  workflowVersion?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      name: 'name',
      runTimes: 'runTimes',
      scheduleTime: 'scheduleTime',
      startDate: 'startDate',
      state: 'state',
      workflowId: 'workflowId',
      workflowInstanceId: 'workflowInstanceId',
      workflowVersion: 'workflowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      name: 'string',
      runTimes: 'string',
      scheduleTime: 'string',
      startDate: 'string',
      state: 'string',
      workflowId: 'number',
      workflowInstanceId: 'number',
      workflowVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBodyData extends $tea.Model {
  createTime?: string;
  description?: string;
  name?: string;
  releaseState?: string;
  updateTime?: string;
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      releaseState: 'releaseState',
      updateTime: 'updateTime',
      workflowId: 'workflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      releaseState: 'string',
      updateTime: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/manualTasks/${OpenApiUtil.getEncodeParam(manualTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeManualTaskResponse>(await this.callApi(params, req, runtime), new DescribeManualTaskResponse({}));
  }

  async describeManualTask(projectId: string, manualTaskId: string, request: DescribeManualTaskRequest): Promise<DescribeManualTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeManualTaskWithOptions(projectId, manualTaskId, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/manualTaskInstances/${OpenApiUtil.getEncodeParam(manualTaskInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeManualTaskInstanceResponse>(await this.callApi(params, req, runtime), new DescribeManualTaskInstanceResponse({}));
  }

  async describeManualTaskInstance(manualTaskInstanceId: string, projectId: string, request: DescribeManualTaskInstanceRequest): Promise<DescribeManualTaskInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeManualTaskInstanceWithOptions(manualTaskInstanceId, projectId, request, headers, runtime);
  }

  async describeProjectWithOptions(code: string, request: DescribeProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeProjectResponse> {
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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(code)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectResponse>(await this.callApi(params, req, runtime), new DescribeProjectResponse({}));
  }

  async describeProject(code: string, request: DescribeProjectRequest): Promise<DescribeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeProjectWithOptions(code, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows/${OpenApiUtil.getEncodeParam(workflowId)}/tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTaskResponse>(await this.callApi(params, req, runtime), new DescribeTaskResponse({}));
  }

  async describeTask(workflowId: string, projectId: string, taskId: string, request: DescribeTaskRequest): Promise<DescribeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskWithOptions(workflowId, projectId, taskId, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/workflows/${OpenApiUtil.getEncodeParam(workflowInstanceId)}/taskInstances/${OpenApiUtil.getEncodeParam(taskInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTaskInstanceResponse>(await this.callApi(params, req, runtime), new DescribeTaskInstanceResponse({}));
  }

  async describeTaskInstance(projectId: string, workflowInstanceId: string, taskInstanceId: string, request: DescribeTaskInstanceRequest): Promise<DescribeTaskInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskInstanceWithOptions(projectId, workflowInstanceId, taskInstanceId, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/processDefinitions/${OpenApiUtil.getEncodeParam(workflowId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWorkflowResponse>(await this.callApi(params, req, runtime), new DescribeWorkflowResponse({}));
  }

  async describeWorkflow(projectId: string, workflowId: string, request: DescribeWorkflowRequest): Promise<DescribeWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowWithOptions(projectId, workflowId, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/processInstances/${OpenApiUtil.getEncodeParam(workflowInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new DescribeWorkflowInstanceResponse({}));
  }

  async describeWorkflowInstance(projectId: string, workflowInstanceId: string, request: DescribeWorkflowInstanceRequest): Promise<DescribeWorkflowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowInstanceWithOptions(projectId, workflowInstanceId, request, headers, runtime);
  }

  async listManualTaskInstancesWithOptions(projectId: string, request: ListManualTaskInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListManualTaskInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executionStatus)) {
      query["executionStatus"] = request.executionStatus;
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

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListManualTaskInstances",
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/manualTaskInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListManualTaskInstancesResponse>(await this.callApi(params, req, runtime), new ListManualTaskInstancesResponse({}));
  }

  async listManualTaskInstances(projectId: string, request: ListManualTaskInstancesRequest): Promise<ListManualTaskInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listManualTaskInstancesWithOptions(projectId, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/manualTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListManualTasksResponse>(await this.callApi(params, req, runtime), new ListManualTasksResponse({}));
  }

  async listManualTasks(projectId: string, request: ListManualTasksRequest): Promise<ListManualTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listManualTasksWithOptions(projectId, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  async listTaskInstancesWithOptions(projectId: string, request: ListTaskInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTaskInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executionStatus)) {
      query["executionStatus"] = request.executionStatus;
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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/taskInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTaskInstancesResponse>(await this.callApi(params, req, runtime), new ListTaskInstancesResponse({}));
  }

  async listTaskInstances(projectId: string, request: ListTaskInstancesRequest): Promise<ListTaskInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskInstancesWithOptions(projectId, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async listTasks(projectId: string, request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(projectId, request, headers, runtime);
  }

  async listWorkflowInstancesWithOptions(projectId: string, request: ListWorkflowInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkflowInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startDate)) {
      query["startDate"] = request.startDate;
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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/processInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWorkflowInstancesResponse>(await this.callApi(params, req, runtime), new ListWorkflowInstancesResponse({}));
  }

  async listWorkflowInstances(projectId: string, request: ListWorkflowInstancesRequest): Promise<ListWorkflowInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkflowInstancesWithOptions(projectId, request, headers, runtime);
  }

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
      version: "2023-10-09",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${OpenApiUtil.getEncodeParam(projectId)}/processDefinitions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWorkflowsResponse>(await this.callApi(params, req, runtime), new ListWorkflowsResponse({}));
  }

  async listWorkflows(projectId: string, request: ListWorkflowsRequest): Promise<ListWorkflowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkflowsWithOptions(projectId, request, headers, runtime);
  }

}
