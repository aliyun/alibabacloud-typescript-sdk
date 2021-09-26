// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  name?: string;
  description?: string;
  startSchedule?: number;
  endSchedule?: number;
  cronExpression?: string;
  createCluster?: boolean;
  clusterId?: string;
  hostName?: string;
  namespace?: string;
  application?: string;
  alertConf?: string;
  alertUserGroupBizId?: string;
  alertDingDingGroupBizId?: string;
  parentFlowList?: string;
  parentCategory?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      cronExpression: 'CronExpression',
      createCluster: 'CreateCluster',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      namespace: 'Namespace',
      application: 'Application',
      alertConf: 'AlertConf',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      parentFlowList: 'ParentFlowList',
      parentCategory: 'ParentCategory',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      description: 'string',
      startSchedule: 'number',
      endSchedule: 'number',
      cronExpression: 'string',
      createCluster: 'boolean',
      clusterId: 'string',
      hostName: 'string',
      namespace: 'string',
      application: 'string',
      alertConf: 'string',
      alertUserGroupBizId: 'string',
      alertDingDingGroupBizId: 'string',
      parentFlowList: 'string',
      parentCategory: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  requestId?: string;
  userList?: ListUsersResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userList: ListUsersResponseBodyUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnoxUserPasswordRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  userId?: string;
  ownerId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      userId: 'UserId',
      ownerId: 'OwnerId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      userId: 'string',
      ownerId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnoxUserPasswordResponseBody extends $tea.Model {
  requestId?: string;
  userInfoList?: QueryKnoxUserPasswordResponseBodyUserInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfoList: 'UserInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfoList: QueryKnoxUserPasswordResponseBodyUserInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnoxUserPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryKnoxUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryKnoxUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogRequest extends $tea.Model {
  start?: number;
  lines?: number;
  offset?: number;
  length?: number;
  reverse?: boolean;
  startTime?: number;
  endTime?: number;
  nodeInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      lines: 'Lines',
      offset: 'Offset',
      length: 'Length',
      reverse: 'Reverse',
      startTime: 'StartTime',
      endTime: 'EndTime',
      nodeInstanceId: 'NodeInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      lines: 'number',
      offset: 'number',
      length: 'number',
      reverse: 'boolean',
      startTime: 'number',
      endTime: 'number',
      nodeInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBody extends $tea.Model {
  logEnd?: boolean;
  requestId?: string;
  logEntrys?: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys;
  static names(): { [key: string]: string } {
    return {
      logEnd: 'LogEnd',
      requestId: 'RequestId',
      logEntrys: 'LogEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnd: 'boolean',
      requestId: 'string',
      logEntrys: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceLauncherLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceLauncherLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  jobId?: string;
  name?: string;
  id?: string;
  clusterId?: string;
  status?: string;
  periodic?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      jobId: 'JobId',
      name: 'Name',
      id: 'Id',
      clusterId: 'ClusterId',
      status: 'Status',
      periodic: 'Periodic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      jobId: 'string',
      name: 'string',
      id: 'string',
      clusterId: 'string',
      status: 'string',
      periodic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  flow?: ListFlowResponseBodyFlow;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      flow: ListFlowResponseBodyFlow,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  resourceIds?: string[];
  tagKeys?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      tagKeys: 'TagKeys',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBody extends $tea.Model {
  requestId?: string;
  hostList?: ListFlowClusterHostResponseBodyHostList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostList: ListFlowClusterHostResponseBodyHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  clusterOperationList?: ListClusterOperationResponseBodyClusterOperationList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      clusterOperationList: 'ClusterOperationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      clusterOperationList: ListClusterOperationResponseBodyClusterOperationList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  committerId?: string;
  entityType?: string;
  entityGroupId?: string;
  entityId?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      committerId: 'CommitterId',
      entityType: 'EntityType',
      entityGroupId: 'EntityGroupId',
      entityId: 'EntityId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      committerId: 'string',
      entityType: 'string',
      entityGroupId: 'string',
      entityId: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  items?: ListFlowEntitySnapshotResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      items: ListFlowEntitySnapshotResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  bizId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bizId: 'BizId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      bizId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowJobRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowJobResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowInstanceId: 'FlowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  name?: string;
  description?: string;
  type?: string;
  failAct?: string;
  retryPolicy?: string;
  params?: string;
  paramConf?: string;
  customVariables?: string;
  envConf?: string;
  runConf?: string;
  monitorConf?: string;
  mode?: string;
  parentCategory?: string;
  adhoc?: boolean;
  clusterId?: string;
  alertConf?: string;
  clientToken?: string;
  resourceList?: CreateFlowJobRequestResourceList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      failAct: 'FailAct',
      retryPolicy: 'RetryPolicy',
      params: 'Params',
      paramConf: 'ParamConf',
      customVariables: 'CustomVariables',
      envConf: 'EnvConf',
      runConf: 'RunConf',
      monitorConf: 'MonitorConf',
      mode: 'Mode',
      parentCategory: 'ParentCategory',
      adhoc: 'Adhoc',
      clusterId: 'ClusterId',
      alertConf: 'AlertConf',
      clientToken: 'ClientToken',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      failAct: 'string',
      retryPolicy: 'string',
      params: 'string',
      paramConf: 'string',
      customVariables: 'string',
      envConf: 'string',
      runConf: 'string',
      monitorConf: 'string',
      mode: 'string',
      parentCategory: 'string',
      adhoc: 'boolean',
      clusterId: 'string',
      alertConf: 'string',
      clientToken: 'string',
      resourceList: { 'type': 'array', 'itemType': CreateFlowJobRequestResourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryRequest extends $tea.Model {
  id?: string;
  regionId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      regionId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowEditLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowEditLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  autoPayOrder?: boolean;
  vswitchId?: string;
  isOpenPublicIp?: boolean;
  hostComponentInfo?: ResizeClusterRequestHostComponentInfo[];
  hostGroup?: ResizeClusterRequestHostGroup[];
  promotionInfo?: ResizeClusterRequestPromotionInfo[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      autoPayOrder: 'AutoPayOrder',
      vswitchId: 'VswitchId',
      isOpenPublicIp: 'IsOpenPublicIp',
      hostComponentInfo: 'HostComponentInfo',
      hostGroup: 'HostGroup',
      promotionInfo: 'PromotionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      autoPayOrder: 'boolean',
      vswitchId: 'string',
      isOpenPublicIp: 'boolean',
      hostComponentInfo: { 'type': 'array', 'itemType': ResizeClusterRequestHostComponentInfo },
      hostGroup: { 'type': 'array', 'itemType': ResizeClusterRequestHostGroup },
      promotionInfo: { 'type': 'array', 'itemType': ResizeClusterRequestPromotionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResizeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResizeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  taskId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      taskId: 'TaskId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      taskId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBody extends $tea.Model {
  endTime?: number;
  startTime?: number;
  requestId?: string;
  taskStatus?: string;
  taskProcess?: number;
  executeTime?: number;
  taskId?: string;
  data?: DescribeMetaTablePreviewTaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
      taskProcess: 'TaskProcess',
      executeTime: 'ExecuteTime',
      taskId: 'TaskId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      requestId: 'string',
      taskStatus: 'string',
      taskProcess: 'number',
      executeTime: 'number',
      taskId: 'string',
      data: DescribeMetaTablePreviewTaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetaTablePreviewTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetaTablePreviewTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  configVersion?: string;
  hostGroupId?: string;
  hostInstanceId?: string;
  configFileName?: string;
  configItemKey?: string;
  author?: string;
  comment?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      configVersion: 'ConfigVersion',
      hostGroupId: 'HostGroupId',
      hostInstanceId: 'HostInstanceId',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      author: 'Author',
      comment: 'Comment',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      configVersion: 'string',
      hostGroupId: 'string',
      hostInstanceId: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      author: 'string',
      comment: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  configHistoryList?: ListClusterServiceConfigHistoryResponseBodyConfigHistoryList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      configHistoryList: 'ConfigHistoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      configHistoryList: ListClusterServiceConfigHistoryResponseBodyConfigHistoryList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterServiceConfigHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterServiceConfigHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigItemRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  configItemInformation?: string;
  configItemType?: string;
  configItemBizId?: string;
  scalingGroupBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'resourceGroupId',
      configItemInformation: 'ConfigItemInformation',
      configItemType: 'ConfigItemType',
      configItemBizId: 'ConfigItemBizId',
      scalingGroupBizId: 'ScalingGroupBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      configItemInformation: 'string',
      configItemType: 'string',
      configItemBizId: 'string',
      scalingGroupBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigItemResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScalingConfigItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingConfigItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllRequest extends $tea.Model {
  productType?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  clusters?: ListFlowClusterAllResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      clusters: ListFlowClusterAllResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  scalingGroupBizId?: string;
  hostGroupBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      scalingGroupBizId: 'ScalingGroupBizId',
      hostGroupBizId: 'HostGroupBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      scalingGroupBizId: 'string',
      hostGroupBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupResponseBody extends $tea.Model {
  requestId?: string;
  scalingGroupId?: string;
  name?: string;
  description?: string;
  activeStatus?: string;
  hostGroupBizId?: string;
  scalingInMode?: string;
  scalingMinSize?: number;
  scalingMaxSize?: number;
  configState?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingGroupId: 'ScalingGroupId',
      name: 'Name',
      description: 'Description',
      activeStatus: 'ActiveStatus',
      hostGroupBizId: 'HostGroupBizId',
      scalingInMode: 'ScalingInMode',
      scalingMinSize: 'ScalingMinSize',
      scalingMaxSize: 'ScalingMaxSize',
      configState: 'ConfigState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingGroupId: 'string',
      name: 'string',
      description: 'string',
      activeStatus: 'string',
      hostGroupBizId: 'string',
      scalingInMode: 'string',
      scalingMinSize: 'number',
      scalingMaxSize: 'number',
      configState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      limit: 'limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  nextToken?: string;
  items?: ListScalingGroupResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nextToken: 'string',
      items: ListScalingGroupResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  id?: string;
  name?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterServiceConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  comment?: string;
  configParams?: string;
  customConfigParams?: string;
  groupId?: string;
  hostInstanceId?: string;
  configType?: string;
  refreshHostConfig?: boolean;
  gatewayClusterIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      comment: 'Comment',
      configParams: 'ConfigParams',
      customConfigParams: 'CustomConfigParams',
      groupId: 'GroupId',
      hostInstanceId: 'HostInstanceId',
      configType: 'ConfigType',
      refreshHostConfig: 'RefreshHostConfig',
      gatewayClusterIdList: 'GatewayClusterIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      comment: 'string',
      configParams: 'string',
      customConfigParams: 'string',
      groupId: 'string',
      hostInstanceId: 'string',
      configType: 'string',
      refreshHostConfig: 'boolean',
      gatewayClusterIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterServiceConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterServiceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  templateName?: string;
  regionId?: string;
  zoneId?: string;
  logPath?: string;
  securityGroupId?: string;
  isOpenPublicIp?: boolean;
  securityGroupName?: string;
  period?: number;
  renewAuto?: boolean;
  vpcId?: string;
  vSwitchId?: string;
  netType?: string;
  userDefinedEmrEcsRole?: string;
  emrVer?: string;
  clusterType?: string;
  enableHighAvailability?: boolean;
  useLocalMetaDb?: boolean;
  ioOptimizedOption?: boolean;
  enableSsh?: boolean;
  instanceGeneration?: string;
  masterPwd?: string;
  keyPairName?: string;
  metaStoreType?: string;
  metaStoreConf?: string;
  configurations?: string;
  enableEas?: boolean;
  depositType?: string;
  machineType?: string;
  useCustomHiveMetaDb?: boolean;
  initCustomHiveMetaDb?: boolean;
  resourceGroupId?: string;
  clientToken?: string;
  optionSoftWareList?: string[];
  hostGroup?: CreateClusterTemplateRequestHostGroup[];
  bootstrapAction?: CreateClusterTemplateRequestBootstrapAction[];
  config?: CreateClusterTemplateRequestConfig[];
  tag?: CreateClusterTemplateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      templateName: 'TemplateName',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      logPath: 'LogPath',
      securityGroupId: 'SecurityGroupId',
      isOpenPublicIp: 'IsOpenPublicIp',
      securityGroupName: 'SecurityGroupName',
      period: 'Period',
      renewAuto: 'RenewAuto',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      enableHighAvailability: 'EnableHighAvailability',
      useLocalMetaDb: 'UseLocalMetaDb',
      ioOptimizedOption: 'IoOptimizedOption',
      enableSsh: 'EnableSsh',
      instanceGeneration: 'InstanceGeneration',
      masterPwd: 'MasterPwd',
      keyPairName: 'KeyPairName',
      metaStoreType: 'MetaStoreType',
      metaStoreConf: 'MetaStoreConf',
      configurations: 'Configurations',
      enableEas: 'EnableEas',
      depositType: 'DepositType',
      machineType: 'MachineType',
      useCustomHiveMetaDb: 'UseCustomHiveMetaDb',
      initCustomHiveMetaDb: 'InitCustomHiveMetaDb',
      resourceGroupId: 'ResourceGroupId',
      clientToken: 'ClientToken',
      optionSoftWareList: 'OptionSoftWareList',
      hostGroup: 'HostGroup',
      bootstrapAction: 'BootstrapAction',
      config: 'Config',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      templateName: 'string',
      regionId: 'string',
      zoneId: 'string',
      logPath: 'string',
      securityGroupId: 'string',
      isOpenPublicIp: 'boolean',
      securityGroupName: 'string',
      period: 'number',
      renewAuto: 'boolean',
      vpcId: 'string',
      vSwitchId: 'string',
      netType: 'string',
      userDefinedEmrEcsRole: 'string',
      emrVer: 'string',
      clusterType: 'string',
      enableHighAvailability: 'boolean',
      useLocalMetaDb: 'boolean',
      ioOptimizedOption: 'boolean',
      enableSsh: 'boolean',
      instanceGeneration: 'string',
      masterPwd: 'string',
      keyPairName: 'string',
      metaStoreType: 'string',
      metaStoreConf: 'string',
      configurations: 'string',
      enableEas: 'boolean',
      depositType: 'string',
      machineType: 'string',
      useCustomHiveMetaDb: 'boolean',
      initCustomHiveMetaDb: 'boolean',
      resourceGroupId: 'string',
      clientToken: 'string',
      optionSoftWareList: { 'type': 'array', 'itemType': 'string' },
      hostGroup: { 'type': 'array', 'itemType': CreateClusterTemplateRequestHostGroup },
      bootstrapAction: { 'type': 'array', 'itemType': CreateClusterTemplateRequestBootstrapAction },
      config: { 'type': 'array', 'itemType': CreateClusterTemplateRequestConfig },
      tag: { 'type': 'array', 'itemType': CreateClusterTemplateRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateResponseBody extends $tea.Model {
  clusterTemplateId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTemplateId: 'ClusterTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTemplateId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryInstallTaskStatusRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  taskBizId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      taskBizId: 'TaskBizId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      taskBizId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryInstallTaskStatusResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryInstallTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLibraryInstallTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLibraryInstallTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  scalingGroupBizId?: string;
  configItemType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemType: 'ConfigItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      scalingGroupBizId: 'string',
      configItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  nextToken?: string;
  items?: ListScalingConfigItemResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nextToken: 'string',
      items: ListScalingConfigItemResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScalingConfigItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScalingConfigItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceRequest extends $tea.Model {
  id?: string;
  flowId?: string;
  flowName?: string;
  owner?: string;
  instanceId?: string;
  timeRange?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  projectId?: string;
  pageNumber?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      flowId: 'FlowId',
      flowName: 'FlowName',
      owner: 'Owner',
      instanceId: 'InstanceId',
      timeRange: 'TimeRange',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      flowId: 'string',
      flowName: 'string',
      owner: 'string',
      instanceId: 'string',
      timeRange: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      projectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  flowInstances?: ListFlowInstanceResponseBodyFlowInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      flowInstances: 'FlowInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      flowInstances: ListFlowInstanceResponseBodyFlowInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingMetricsRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingMetricsResponseBody extends $tea.Model {
  requestId?: string;
  metricList?: DescribeScalingMetricsResponseBodyMetricList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      metricList: 'MetricList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      metricList: { 'type': 'array', 'itemType': DescribeScalingMetricsResponseBodyMetricList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesSystemTagsRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  tagOwnerUid?: number;
  resourceIds?: string[];
  tagKeys?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      tagOwnerUid: 'TagOwnerUid',
      resourceIds: 'ResourceIds',
      tagKeys: 'TagKeys',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      tagOwnerUid: 'number',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesSystemTagsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesSystemTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesSystemTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesSystemTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectResponseBody extends $tea.Model {
  requestId?: string;
  description?: string;
  userId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      description: 'Description',
      userId: 'UserId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      description: 'string',
      userId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityWhiteListRequest extends $tea.Model {
  clusterId?: string;
  portRange?: string;
  whiteIp?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      portRange: 'PortRange',
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      portRange: 'string',
      whiteIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSecurityWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSecurityWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  clusterBizId?: string;
  hostGroupId?: string;
  scalingGroupBizId?: string;
  scalingRuleName?: string;
  hostGroupName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      clusterBizId: 'ClusterBizId',
      hostGroupId: 'HostGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      scalingRuleName: 'ScalingRuleName',
      hostGroupName: 'HostGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      clusterBizId: 'string',
      hostGroupId: 'string',
      scalingGroupBizId: 'string',
      scalingRuleName: 'string',
      hostGroupName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  nextToken?: number;
  items?: ListScalingActivityResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nextToken: 'number',
      items: ListScalingActivityResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScalingActivityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScalingActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  scope?: string;
  nextToken?: string;
  pageSize?: number;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      scope: 'string',
      nextToken: 'string',
      pageSize: 'number',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  paging?: boolean;
  data?: ListTagValuesResponseBodyData[];
  code?: string;
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      paging: 'Paging',
      data: 'Data',
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      paging: 'boolean',
      data: { 'type': 'array', 'itemType': ListTagValuesResponseBodyData },
      code: 'string',
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBody extends $tea.Model {
  requestId?: string;
  clusterInstalledServiceList?: ListClusterInstalledServiceResponseBodyClusterInstalledServiceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterInstalledServiceList: 'ClusterInstalledServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterInstalledServiceList: ListClusterInstalledServiceResponseBodyClusterInstalledServiceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterInstalledServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterInstalledServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterServiceActionRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostIdList?: string;
  serviceName?: string;
  serviceActionName?: string;
  customCommand?: string;
  componentNameList?: string;
  comment?: string;
  isRolling?: boolean;
  executeStrategy?: string;
  customParams?: string;
  interval?: number;
  nodeCountPerBatch?: number;
  tolerateFailCount?: number;
  onlyRestartStaleConfigNodes?: boolean;
  turnOnMaintenanceMode?: boolean;
  hostGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostIdList: 'HostIdList',
      serviceName: 'ServiceName',
      serviceActionName: 'ServiceActionName',
      customCommand: 'CustomCommand',
      componentNameList: 'ComponentNameList',
      comment: 'Comment',
      isRolling: 'IsRolling',
      executeStrategy: 'ExecuteStrategy',
      customParams: 'CustomParams',
      interval: 'Interval',
      nodeCountPerBatch: 'NodeCountPerBatch',
      tolerateFailCount: 'TolerateFailCount',
      onlyRestartStaleConfigNodes: 'OnlyRestartStaleConfigNodes',
      turnOnMaintenanceMode: 'TurnOnMaintenanceMode',
      hostGroupIdList: 'HostGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostIdList: 'string',
      serviceName: 'string',
      serviceActionName: 'string',
      customCommand: 'string',
      componentNameList: 'string',
      comment: 'string',
      isRolling: 'boolean',
      executeStrategy: 'string',
      customParams: 'string',
      interval: 'number',
      nodeCountPerBatch: 'number',
      tolerateFailCount: 'number',
      onlyRestartStaleConfigNodes: 'boolean',
      turnOnMaintenanceMode: 'boolean',
      hostGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterServiceActionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterServiceActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunClusterServiceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunClusterServiceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowInstanceId: 'FlowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectRequest extends $tea.Model {
  productType?: string;
  regionId?: string;
  name?: string;
  description?: string;
  resourceGroupId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
      name: 'string',
      description: 'string',
      resourceGroupId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  nodeInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      nodeInstanceId: 'NodeInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      nodeInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  containerStatusList?: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      containerStatusList: 'ContainerStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      containerStatusList: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowNodeInstanceContainerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowNodeInstanceContainerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  bizId?: string;
  templateName?: string;
  regionId?: string;
  zoneId?: string;
  logPath?: string;
  securityGroupId?: string;
  isOpenPublicIp?: boolean;
  securityGroupName?: string;
  chargeType?: string;
  period?: number;
  renewAuto?: boolean;
  vpcId?: string;
  vSwitchId?: string;
  netType?: string;
  userDefinedEmrEcsRole?: string;
  emrVer?: string;
  clusterType?: string;
  enableHighAvailability?: boolean;
  useLocalMetaDb?: boolean;
  ioOptimizedOption?: boolean;
  enableSsh?: boolean;
  instanceGeneration?: string;
  masterPwd?: string;
  keyPairName?: string;
  metaStoreType?: string;
  metaStoreConf?: string;
  configurations?: string;
  enableEas?: boolean;
  depositType?: string;
  machineType?: string;
  useCustomHiveMetaDb?: boolean;
  initCustomHiveMetaDb?: boolean;
  resourceGroupId?: string;
  optionSoftWareList?: string[];
  hostGroup?: ModifyClusterTemplateRequestHostGroup[];
  bootstrapAction?: ModifyClusterTemplateRequestBootstrapAction[];
  config?: ModifyClusterTemplateRequestConfig[];
  tag?: ModifyClusterTemplateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      bizId: 'BizId',
      templateName: 'TemplateName',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      logPath: 'LogPath',
      securityGroupId: 'SecurityGroupId',
      isOpenPublicIp: 'IsOpenPublicIp',
      securityGroupName: 'SecurityGroupName',
      chargeType: 'ChargeType',
      period: 'Period',
      renewAuto: 'RenewAuto',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      enableHighAvailability: 'EnableHighAvailability',
      useLocalMetaDb: 'UseLocalMetaDb',
      ioOptimizedOption: 'IoOptimizedOption',
      enableSsh: 'EnableSsh',
      instanceGeneration: 'InstanceGeneration',
      masterPwd: 'MasterPwd',
      keyPairName: 'KeyPairName',
      metaStoreType: 'MetaStoreType',
      metaStoreConf: 'MetaStoreConf',
      configurations: 'Configurations',
      enableEas: 'EnableEas',
      depositType: 'DepositType',
      machineType: 'MachineType',
      useCustomHiveMetaDb: 'UseCustomHiveMetaDb',
      initCustomHiveMetaDb: 'InitCustomHiveMetaDb',
      resourceGroupId: 'ResourceGroupId',
      optionSoftWareList: 'OptionSoftWareList',
      hostGroup: 'HostGroup',
      bootstrapAction: 'BootstrapAction',
      config: 'Config',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      bizId: 'string',
      templateName: 'string',
      regionId: 'string',
      zoneId: 'string',
      logPath: 'string',
      securityGroupId: 'string',
      isOpenPublicIp: 'boolean',
      securityGroupName: 'string',
      chargeType: 'string',
      period: 'number',
      renewAuto: 'boolean',
      vpcId: 'string',
      vSwitchId: 'string',
      netType: 'string',
      userDefinedEmrEcsRole: 'string',
      emrVer: 'string',
      clusterType: 'string',
      enableHighAvailability: 'boolean',
      useLocalMetaDb: 'boolean',
      ioOptimizedOption: 'boolean',
      enableSsh: 'boolean',
      instanceGeneration: 'string',
      masterPwd: 'string',
      keyPairName: 'string',
      metaStoreType: 'string',
      metaStoreConf: 'string',
      configurations: 'string',
      enableEas: 'boolean',
      depositType: 'string',
      machineType: 'string',
      useCustomHiveMetaDb: 'boolean',
      initCustomHiveMetaDb: 'boolean',
      resourceGroupId: 'string',
      optionSoftWareList: { 'type': 'array', 'itemType': 'string' },
      hostGroup: { 'type': 'array', 'itemType': ModifyClusterTemplateRequestHostGroup },
      bootstrapAction: { 'type': 'array', 'itemType': ModifyClusterTemplateRequestBootstrapAction },
      config: { 'type': 'array', 'itemType': ModifyClusterTemplateRequestConfig },
      tag: { 'type': 'array', 'itemType': ModifyClusterTemplateRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateResponseBody extends $tea.Model {
  clusterTemplateId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTemplateId: 'ClusterTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTemplateId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityWhiteListRequest extends $tea.Model {
  clusterId?: string;
  portRange?: string;
  whiteIpList?: string[];
  description?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      portRange: 'PortRange',
      whiteIpList: 'WhiteIpList',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      portRange: 'string',
      whiteIpList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSecurityWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSecurityWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  items?: ListMetaClusterResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      items: ListMetaClusterResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMetaClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMetaClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  operationId?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      operationId: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  clusterOperationHostList?: ListClusterOperationHostResponseBodyClusterOperationHostList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      clusterOperationHostList: 'ClusterOperationHostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      clusterOperationHostList: ListClusterOperationHostResponseBodyClusterOperationHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterOperationHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterOperationHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  productType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  templateInfoList?: ListClusterTemplatesResponseBodyTemplateInfoList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      templateInfoList: 'TemplateInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      templateInfoList: ListClusterTemplatesResponseBodyTemplateInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  createType?: string;
  machineType?: string;
  isDesc?: boolean;
  depositType?: string;
  pageNumber?: number;
  pageSize?: number;
  defaultStatus?: boolean;
  name?: string;
  resourceGroupId?: string;
  clusterTypeList?: string[];
  statusList?: string[];
  tag?: ListClustersRequestTag[];
  expiredTagList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      createType: 'CreateType',
      machineType: 'MachineType',
      isDesc: 'IsDesc',
      depositType: 'DepositType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      defaultStatus: 'DefaultStatus',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      clusterTypeList: 'ClusterTypeList',
      statusList: 'StatusList',
      tag: 'Tag',
      expiredTagList: 'ExpiredTagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      createType: 'string',
      machineType: 'string',
      isDesc: 'boolean',
      depositType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      defaultStatus: 'boolean',
      name: 'string',
      resourceGroupId: 'string',
      clusterTypeList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListClustersRequestTag },
      expiredTagList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  clusters?: ListClustersResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      clusters: ListClustersResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  tagOwnerUid?: number;
  scope?: string;
  tags?: TagResourcesSystemTagsRequestTags[];
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      tagOwnerUid: 'TagOwnerUid',
      scope: 'Scope',
      tags: 'Tags',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      tagOwnerUid: 'number',
      scope: 'string',
      tags: { 'type': 'array', 'itemType': TagResourcesSystemTagsRequestTags },
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesSystemTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesSystemTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  name?: string;
  description?: string;
  failAct?: string;
  retryPolicy?: string;
  params?: string;
  paramConf?: string;
  customVariables?: string;
  envConf?: string;
  runConf?: string;
  monitorConf?: string;
  mode?: string;
  clusterId?: string;
  alertConf?: string;
  resourceList?: ModifyFlowJobRequestResourceList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      description: 'Description',
      failAct: 'FailAct',
      retryPolicy: 'RetryPolicy',
      params: 'Params',
      paramConf: 'ParamConf',
      customVariables: 'CustomVariables',
      envConf: 'EnvConf',
      runConf: 'RunConf',
      monitorConf: 'MonitorConf',
      mode: 'Mode',
      clusterId: 'ClusterId',
      alertConf: 'AlertConf',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
      failAct: 'string',
      retryPolicy: 'string',
      params: 'string',
      paramConf: 'string',
      customVariables: 'string',
      envConf: 'string',
      runConf: 'string',
      monitorConf: 'string',
      mode: 'string',
      clusterId: 'string',
      alertConf: 'string',
      resourceList: { 'type': 'array', 'itemType': ModifyFlowJobRequestResourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityId: 'EntityId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityId: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  entityId?: string;
  userId?: string;
  bizId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      entityId: 'EntityId',
      userId: 'UserId',
      bizId: 'BizId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      entityId: 'string',
      userId: 'string',
      bizId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowEditLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowEditLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceResponseBody extends $tea.Model {
  status?: string;
  type?: string;
  envConf?: string;
  projectId?: string;
  retryInterval?: string;
  jobType?: string;
  mode?: string;
  externalInfo?: string;
  gmtModified?: number;
  externalChildIds?: string;
  monitorConf?: string;
  externalStatus?: string;
  requestId?: string;
  jobName?: string;
  retryPolicy?: string;
  adhoc?: boolean;
  externalId?: string;
  pending?: boolean;
  clusterId?: string;
  maxRetry?: string;
  failAct?: string;
  jobParams?: string;
  flowInstanceId?: string;
  paramConf?: string;
  hostName?: string;
  flowId?: string;
  retries?: number;
  endTime?: number;
  startTime?: number;
  runConf?: string;
  externalSubId?: string;
  nodeName?: string;
  jobId?: string;
  clusterName?: string;
  gmtCreate?: number;
  duration?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      envConf: 'EnvConf',
      projectId: 'ProjectId',
      retryInterval: 'RetryInterval',
      jobType: 'JobType',
      mode: 'Mode',
      externalInfo: 'ExternalInfo',
      gmtModified: 'GmtModified',
      externalChildIds: 'ExternalChildIds',
      monitorConf: 'MonitorConf',
      externalStatus: 'ExternalStatus',
      requestId: 'RequestId',
      jobName: 'JobName',
      retryPolicy: 'RetryPolicy',
      adhoc: 'Adhoc',
      externalId: 'ExternalId',
      pending: 'Pending',
      clusterId: 'ClusterId',
      maxRetry: 'MaxRetry',
      failAct: 'FailAct',
      jobParams: 'JobParams',
      flowInstanceId: 'FlowInstanceId',
      paramConf: 'ParamConf',
      hostName: 'HostName',
      flowId: 'FlowId',
      retries: 'Retries',
      endTime: 'EndTime',
      startTime: 'StartTime',
      runConf: 'RunConf',
      externalSubId: 'ExternalSubId',
      nodeName: 'NodeName',
      jobId: 'JobId',
      clusterName: 'ClusterName',
      gmtCreate: 'GmtCreate',
      duration: 'Duration',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      envConf: 'string',
      projectId: 'string',
      retryInterval: 'string',
      jobType: 'string',
      mode: 'string',
      externalInfo: 'string',
      gmtModified: 'number',
      externalChildIds: 'string',
      monitorConf: 'string',
      externalStatus: 'string',
      requestId: 'string',
      jobName: 'string',
      retryPolicy: 'string',
      adhoc: 'boolean',
      externalId: 'string',
      pending: 'boolean',
      clusterId: 'string',
      maxRetry: 'string',
      failAct: 'string',
      jobParams: 'string',
      flowInstanceId: 'string',
      paramConf: 'string',
      hostName: 'string',
      flowId: 'string',
      retries: 'number',
      endTime: 'number',
      startTime: 'number',
      runConf: 'string',
      externalSubId: 'string',
      nodeName: 'string',
      jobId: 'string',
      clusterName: 'string',
      gmtCreate: 'number',
      duration: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAndReleaseClusterEniRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  targetClusterId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      targetClusterId: 'TargetClusterId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      targetClusterId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAndReleaseClusterEniResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAndReleaseClusterEniResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachAndReleaseClusterEniResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachAndReleaseClusterEniResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  hostGroupBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      hostGroupBizId: 'HostGroupBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      hostGroupBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBody extends $tea.Model {
  requestId?: string;
  hostGroupId?: string;
  scalingGroupId?: string;
  minSize?: number;
  maxSize?: number;
  defaultCooldown?: number;
  activeRuleCategory?: string;
  withGrace?: boolean;
  timeoutWithGrace?: number;
  multiAvailablePolicy?: string;
  multiAvailablePolicyParam?: string;
  scalingConfig?: DescribeScalingGroupInstanceResponseBodyScalingConfig;
  scalingRuleList?: DescribeScalingGroupInstanceResponseBodyScalingRuleList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostGroupId: 'HostGroupId',
      scalingGroupId: 'ScalingGroupId',
      minSize: 'MinSize',
      maxSize: 'MaxSize',
      defaultCooldown: 'DefaultCooldown',
      activeRuleCategory: 'ActiveRuleCategory',
      withGrace: 'WithGrace',
      timeoutWithGrace: 'TimeoutWithGrace',
      multiAvailablePolicy: 'MultiAvailablePolicy',
      multiAvailablePolicyParam: 'MultiAvailablePolicyParam',
      scalingConfig: 'ScalingConfig',
      scalingRuleList: 'ScalingRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostGroupId: 'string',
      scalingGroupId: 'string',
      minSize: 'number',
      maxSize: 'number',
      defaultCooldown: 'number',
      activeRuleCategory: 'string',
      withGrace: 'boolean',
      timeoutWithGrace: 'number',
      multiAvailablePolicy: 'string',
      multiAvailablePolicyParam: 'string',
      scalingConfig: DescribeScalingGroupInstanceResponseBodyScalingConfig,
      scalingRuleList: DescribeScalingGroupInstanceResponseBodyScalingRuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingGroupInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingGroupInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterHostGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupName?: string;
  hostGroupType?: string;
  comment?: string;
  payType?: string;
  vswitchId?: string;
  securityGroupId?: string;
  hostGroupParams?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupName: 'HostGroupName',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      payType: 'PayType',
      vswitchId: 'VswitchId',
      securityGroupId: 'SecurityGroupId',
      hostGroupParams: 'HostGroupParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupName: 'string',
      hostGroupType: 'string',
      comment: 'string',
      payType: 'string',
      vswitchId: 'string',
      securityGroupId: 'string',
      hostGroupParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  bizId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      bizId: 'BizId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      bizId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateInfo?: DescribeClusterTemplateResponseBodyTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateInfo: DescribeClusterTemplateResponseBodyTemplateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  resourceIds?: string[];
  tags?: TagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': TagResourcesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityType?: string;
  entityId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityType: 'EntityType',
      entityId: 'EntityId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityType: 'string',
      entityId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CommitFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CommitFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  jobId?: string;
  clusterId?: string;
  hostName?: string;
  conf?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      jobId: 'JobId',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      conf: 'Conf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      jobId: 'string',
      clusterId: 'string',
      hostName: 'string',
      conf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowJobResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  jobType?: string;
  instanceId?: string;
  timeRange?: string;
  pageNumber?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      jobType: 'JobType',
      instanceId: 'InstanceId',
      timeRange: 'TimeRange',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      jobType: 'string',
      instanceId: 'string',
      timeRange: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  nodeInstances?: ListFlowJobHistoryResponseBodyNodeInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      nodeInstances: 'NodeInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      nodeInstances: ListFlowJobHistoryResponseBodyNodeInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowJobHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowJobHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  resourceIds?: string[];
  tags?: ListTagResourcesRequestTags[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      tags: 'Tags',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListTagResourcesRequestTags },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorCode?: string;
  message?: string;
  data?: ListTagResourcesResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorCode: 'string',
      message: 'string',
      data: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostInstanceId?: string;
  hostName?: string;
  serviceName?: string;
  componentName?: string;
  componentStatus?: string;
  hostRole?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostInstanceId: 'HostInstanceId',
      hostName: 'HostName',
      serviceName: 'ServiceName',
      componentName: 'ComponentName',
      componentStatus: 'ComponentStatus',
      hostRole: 'HostRole',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostInstanceId: 'string',
      hostName: 'string',
      serviceName: 'string',
      componentName: 'string',
      componentStatus: 'string',
      hostRole: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  componentList?: ListClusterHostComponentResponseBodyComponentList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      componentList: ListClusterHostComponentResponseBodyComponentList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterHostComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterHostComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  name?: string;
  description?: string;
  scalingGroupBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      name: 'Name',
      description: 'Description',
      scalingGroupBizId: 'ScalingGroupBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      name: 'string',
      description: 'string',
      scalingGroupBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBody extends $tea.Model {
  requestId?: string;
  k8sClusterId?: string;
  defaultQueue?: string;
  projectId?: string;
  gmtCreate?: number;
  defaultUser?: string;
  gmtModified?: number;
  clusterId?: string;
  queueList?: DescribeFlowProjectClusterSettingResponseBodyQueueList;
  userList?: DescribeFlowProjectClusterSettingResponseBodyUserList;
  hostList?: DescribeFlowProjectClusterSettingResponseBodyHostList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      k8sClusterId: 'K8sClusterId',
      defaultQueue: 'DefaultQueue',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      defaultUser: 'DefaultUser',
      gmtModified: 'GmtModified',
      clusterId: 'ClusterId',
      queueList: 'QueueList',
      userList: 'UserList',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      k8sClusterId: 'string',
      defaultQueue: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      defaultUser: 'string',
      gmtModified: 'number',
      clusterId: 'string',
      queueList: DescribeFlowProjectClusterSettingResponseBodyQueueList,
      userList: DescribeFlowProjectClusterSettingResponseBodyUserList,
      hostList: DescribeFlowProjectClusterSettingResponseBodyHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  clusterSettings?: ListFlowProjectClusterSettingResponseBodyClusterSettings;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      clusterSettings: 'ClusterSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      clusterSettings: ListFlowProjectClusterSettingResponseBodyClusterSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowId?: string;
  conf?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowId: 'FlowId',
      conf: 'Conf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowId: 'string',
      conf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  instanceId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      instanceId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingCommonConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingCommonConfigResponseBody extends $tea.Model {
  requestId?: string;
  autoScalingHookHeartbeatDefaultTime?: number;
  autoScalingCoolDownTime?: number;
  autoScalingMNSScalingThreadSleepTime?: number;
  autoScalingGroupMinSizeLimit?: number;
  autoScalingGroupMaxSizeLimit?: number;
  autoScalingRuleMinDelayLimit?: number;
  autoScalingRuleAlarmDelayLimit?: number;
  autoScalingRuleAlarmSilentTime?: number;
  autoScalingConfigSystemDiskSize?: number;
  autoScalingConfigDecommissionQueryInterval?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      autoScalingHookHeartbeatDefaultTime: 'AutoScalingHookHeartbeatDefaultTime',
      autoScalingCoolDownTime: 'AutoScalingCoolDownTime',
      autoScalingMNSScalingThreadSleepTime: 'AutoScalingMNSScalingThreadSleepTime',
      autoScalingGroupMinSizeLimit: 'AutoScalingGroupMinSizeLimit',
      autoScalingGroupMaxSizeLimit: 'AutoScalingGroupMaxSizeLimit',
      autoScalingRuleMinDelayLimit: 'AutoScalingRuleMinDelayLimit',
      autoScalingRuleAlarmDelayLimit: 'AutoScalingRuleAlarmDelayLimit',
      autoScalingRuleAlarmSilentTime: 'AutoScalingRuleAlarmSilentTime',
      autoScalingConfigSystemDiskSize: 'AutoScalingConfigSystemDiskSize',
      autoScalingConfigDecommissionQueryInterval: 'AutoScalingConfigDecommissionQueryInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      autoScalingHookHeartbeatDefaultTime: 'number',
      autoScalingCoolDownTime: 'number',
      autoScalingMNSScalingThreadSleepTime: 'number',
      autoScalingGroupMinSizeLimit: 'number',
      autoScalingGroupMaxSizeLimit: 'number',
      autoScalingRuleMinDelayLimit: 'number',
      autoScalingRuleAlarmDelayLimit: 'number',
      autoScalingRuleAlarmSilentTime: 'number',
      autoScalingConfigSystemDiskSize: 'number',
      autoScalingConfigDecommissionQueryInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingCommonConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingCommonConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingCommonConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowInstanceId: 'FlowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  operatorId?: string;
  entityType?: string;
  entityId?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      operatorId: 'OperatorId',
      entityType: 'EntityType',
      entityId: 'EntityId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      operatorId: 'string',
      entityType: 'string',
      entityId: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestoreFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  type?: string;
  name?: string;
  libraryVersion?: string;
  sourceType?: string;
  sourceLocation?: string;
  scope?: string;
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      type: 'Type',
      name: 'Name',
      libraryVersion: 'LibraryVersion',
      sourceType: 'SourceType',
      sourceLocation: 'SourceLocation',
      scope: 'Scope',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      type: 'string',
      name: 'string',
      libraryVersion: 'string',
      sourceType: 'string',
      sourceLocation: 'string',
      scope: 'string',
      properties: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLibraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchRequest extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  zoneId?: string;
  depositType?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      depositType: 'DepositType',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      depositType: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchResponseBody extends $tea.Model {
  requestId?: string;
  vswitchList?: ListVswitchResponseBodyVswitchList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vswitchList: 'VswitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vswitchList: ListVswitchResponseBodyVswitchList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVswitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVswitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  forceRelease?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      forceRelease: 'ForceRelease',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
      forceRelease: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScalingConfigItemRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  configItemType?: string;
  configItemInformation?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemType: 'ConfigItemType',
      configItemInformation: 'ConfigItemInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      configItemType: 'string',
      configItemInformation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScalingConfigItemResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScalingConfigItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddScalingConfigItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddScalingConfigItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  type?: string;
  oldPassword?: string;
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      type: 'Type',
      oldPassword: 'OldPassword',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      type: 'string',
      oldPassword: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBody extends $tea.Model {
  requestId?: string;
  hostList?: ListFlowClusterAllHostsResponseBodyHostList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostList: ListFlowClusterAllHostsResponseBodyHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterAllHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterAllHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibrariesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  libraryBizIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      libraryBizIdList: 'LibraryBizIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      libraryBizIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibrariesResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  type?: string;
  mode?: string;
  keyword?: string;
  categoryId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      type: 'Type',
      mode: 'Mode',
      keyword: 'Keyword',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      type: 'string',
      mode: 'string',
      keyword: 'string',
      categoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowCategoryTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowCategoryTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceInstancesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  targetClusterId?: string;
  datasourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      targetClusterId: 'TargetClusterId',
      datasourceType: 'DatasourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      targetClusterId: 'string',
      datasourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceInstancesResponseBody extends $tea.Model {
  ddiDatasourceInfoList?: ListDatasourceInstancesResponseBodyDdiDatasourceInfoList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddiDatasourceInfoList: 'DdiDatasourceInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddiDatasourceInfoList: ListDatasourceInstancesResponseBodyDdiDatasourceInfoList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDatasourceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDatasourceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultRequest extends $tea.Model {
  nodeInstanceId?: string;
  sqlIndex?: number;
  offset?: number;
  length?: number;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeInstanceId: 'NodeInstanceId',
      sqlIndex: 'SqlIndex',
      offset: 'Offset',
      length: 'Length',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstanceId: 'string',
      sqlIndex: 'number',
      offset: 'number',
      length: 'number',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBody extends $tea.Model {
  end?: boolean;
  requestId?: string;
  headerList?: ListFlowNodeSqlResultResponseBodyHeaderList;
  rowList?: ListFlowNodeSqlResultResponseBodyRowList;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      requestId: 'RequestId',
      headerList: 'HeaderList',
      rowList: 'RowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      requestId: 'string',
      headerList: ListFlowNodeSqlResultResponseBodyHeaderList,
      rowList: ListFlowNodeSqlResultResponseBodyRowList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowNodeSqlResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowNodeSqlResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponseBody extends $tea.Model {
  type?: string;
  lastInstanceId?: string;
  envConf?: string;
  retryInterval?: number;
  mode?: string;
  gmtModified?: number;
  monitorConf?: string;
  params?: string;
  requestId?: string;
  description?: string;
  retryPolicy?: string;
  adhoc?: string;
  name?: string;
  maxRetry?: number;
  maxRunningTimeSec?: number;
  failAct?: string;
  customVariables?: string;
  editLockDetail?: string;
  paramConf?: string;
  runConf?: string;
  gmtCreate?: number;
  categoryId?: string;
  id?: string;
  alertConf?: string;
  resourceList?: DescribeFlowJobResponseBodyResourceList;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      lastInstanceId: 'LastInstanceId',
      envConf: 'EnvConf',
      retryInterval: 'RetryInterval',
      mode: 'Mode',
      gmtModified: 'GmtModified',
      monitorConf: 'MonitorConf',
      params: 'Params',
      requestId: 'RequestId',
      description: 'Description',
      retryPolicy: 'RetryPolicy',
      adhoc: 'Adhoc',
      name: 'Name',
      maxRetry: 'MaxRetry',
      maxRunningTimeSec: 'MaxRunningTimeSec',
      failAct: 'FailAct',
      customVariables: 'CustomVariables',
      editLockDetail: 'EditLockDetail',
      paramConf: 'ParamConf',
      runConf: 'RunConf',
      gmtCreate: 'GmtCreate',
      categoryId: 'CategoryId',
      id: 'Id',
      alertConf: 'AlertConf',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      lastInstanceId: 'string',
      envConf: 'string',
      retryInterval: 'number',
      mode: 'string',
      gmtModified: 'number',
      monitorConf: 'string',
      params: 'string',
      requestId: 'string',
      description: 'string',
      retryPolicy: 'string',
      adhoc: 'string',
      name: 'string',
      maxRetry: 'number',
      maxRunningTimeSec: 'number',
      failAct: 'string',
      customVariables: 'string',
      editLockDetail: 'string',
      paramConf: 'string',
      runConf: 'string',
      gmtCreate: 'number',
      categoryId: 'string',
      id: 'string',
      alertConf: 'string',
      resourceList: DescribeFlowJobResponseBodyResourceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryInstallTaskDetailRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  taskBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      taskBizId: 'TaskBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      taskBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryInstallTaskDetailResponseBody extends $tea.Model {
  libraryBizId?: string;
  hostname?: string;
  endTime?: number;
  startTime?: number;
  taskType?: string;
  requestId?: string;
  taskGroupId?: string;
  taskStatus?: string;
  taskProcess?: number;
  executeTime?: number;
  clusterBizId?: string;
  taskId?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      libraryBizId: 'LibraryBizId',
      hostname: 'Hostname',
      endTime: 'EndTime',
      startTime: 'StartTime',
      taskType: 'TaskType',
      requestId: 'RequestId',
      taskGroupId: 'TaskGroupId',
      taskStatus: 'TaskStatus',
      taskProcess: 'TaskProcess',
      executeTime: 'ExecuteTime',
      clusterBizId: 'ClusterBizId',
      taskId: 'TaskId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryBizId: 'string',
      hostname: 'string',
      endTime: 'number',
      startTime: 'number',
      taskType: 'string',
      requestId: 'string',
      taskGroupId: 'string',
      taskStatus: 'string',
      taskProcess: 'number',
      executeTime: 'number',
      clusterBizId: 'string',
      taskId: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryInstallTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLibraryInstallTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLibraryInstallTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  name?: string;
  status?: string;
  description?: string;
  periodic?: boolean;
  startSchedule?: number;
  endSchedule?: number;
  cronExpr?: string;
  createCluster?: boolean;
  clusterId?: string;
  hostName?: string;
  namespace?: string;
  graph?: string;
  alertConf?: string;
  alertUserGroupBizId?: string;
  alertDingDingGroupBizId?: string;
  parentFlowList?: string;
  parentCategory?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      description: 'Description',
      periodic: 'Periodic',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      cronExpr: 'CronExpr',
      createCluster: 'CreateCluster',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      namespace: 'Namespace',
      graph: 'Graph',
      alertConf: 'AlertConf',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      parentFlowList: 'ParentFlowList',
      parentCategory: 'ParentCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
      description: 'string',
      periodic: 'boolean',
      startSchedule: 'number',
      endSchedule: 'number',
      cronExpr: 'string',
      createCluster: 'boolean',
      clusterId: 'string',
      hostName: 'string',
      namespace: 'string',
      graph: 'string',
      alertConf: 'string',
      alertUserGroupBizId: 'string',
      alertDingDingGroupBizId: 'string',
      parentFlowList: 'string',
      parentCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowForWebResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowForWebResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScalingConfigItemRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  configItemType?: string;
  configItemBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemType: 'ConfigItemType',
      configItemBizId: 'ConfigItemBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      configItemType: 'string',
      configItemBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScalingConfigItemResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScalingConfigItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveScalingConfigItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveScalingConfigItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityWhiteListRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityWhiteListResponseBody extends $tea.Model {
  describeSecurityWhiteList?: DescribeSecurityWhiteListResponseBodyDescribeSecurityWhiteList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      describeSecurityWhiteList: 'DescribeSecurityWhiteList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeSecurityWhiteList: { 'type': 'array', 'itemType': DescribeSecurityWhiteListResponseBodyDescribeSecurityWhiteList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogRequest extends $tea.Model {
  offset?: number;
  length?: number;
  nodeInstanceId?: string;
  appId?: string;
  containerId?: string;
  logName?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      length: 'Length',
      nodeInstanceId: 'NodeInstanceId',
      appId: 'AppId',
      containerId: 'ContainerId',
      logName: 'LogName',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      length: 'number',
      nodeInstanceId: 'string',
      appId: 'string',
      containerId: 'string',
      logName: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBody extends $tea.Model {
  logEnd?: boolean;
  requestId?: string;
  logEntrys?: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys;
  static names(): { [key: string]: string } {
    return {
      logEnd: 'LogEnd',
      requestId: 'RequestId',
      logEntrys: 'LogEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnd: 'boolean',
      requestId: 'string',
      logEntrys: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceContainerLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceContainerLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowInstanceId?: string;
  reRunFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowInstanceId: 'FlowInstanceId',
      reRunFail: 'ReRunFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowInstanceId: 'string',
      reRunFail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RerunFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RerunFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  category?: string;
  scope?: string;
  nextToken?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      category: 'Category',
      scope: 'Scope',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      category: 'string',
      scope: 'string',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  paging?: boolean;
  data?: ListTagKeysResponseBodyData[];
  code?: string;
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      paging: 'Paging',
      data: 'Data',
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      paging: 'boolean',
      data: { 'type': 'array', 'itemType': ListTagKeysResponseBodyData },
      code: 'string',
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperationHostTaskLogRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  operationId?: string;
  hostId?: string;
  taskId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      hostId: 'HostId',
      taskId: 'TaskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      operationId: 'string',
      hostId: 'string',
      taskId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperationHostTaskLogResponseBody extends $tea.Model {
  requestId?: string;
  stdout?: string;
  stderr?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stdout: 'Stdout',
      stderr: 'Stderr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stdout: 'string',
      stderr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperationHostTaskLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterOperationHostTaskLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterOperationHostTaskLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  jobInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      jobInstanceId: 'JobInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      jobInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLibrariesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterBizIdList?: string[];
  libraryBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterBizIdList: 'ClusterBizIdList',
      libraryBizId: 'LibraryBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterBizIdList: { 'type': 'array', 'itemType': 'string' },
      libraryBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLibrariesResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBody extends $tea.Model {
  requestId?: string;
  clusterInfo?: DescribeClusterV2ResponseBodyClusterInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterInfo: DescribeClusterV2ResponseBodyClusterInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBody extends $tea.Model {
  status?: string;
  type?: string;
  alertUserGroupBizId?: string;
  periodic?: boolean;
  editLockDetail?: string;
  namespace?: string;
  hostName?: string;
  application?: string;
  gmtModified?: number;
  requestId?: string;
  description?: string;
  createCluster?: boolean;
  startSchedule?: number;
  endSchedule?: number;
  graph?: string;
  alertDingDingGroupBizId?: string;
  gmtCreate?: number;
  categoryId?: string;
  cronExpr?: string;
  name?: string;
  id?: string;
  alertConf?: string;
  clusterId?: string;
  parentFlowList?: DescribeFlowResponseBodyParentFlowList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      periodic: 'Periodic',
      editLockDetail: 'EditLockDetail',
      namespace: 'Namespace',
      hostName: 'HostName',
      application: 'Application',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      description: 'Description',
      createCluster: 'CreateCluster',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      graph: 'Graph',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      gmtCreate: 'GmtCreate',
      categoryId: 'CategoryId',
      cronExpr: 'CronExpr',
      name: 'Name',
      id: 'Id',
      alertConf: 'AlertConf',
      clusterId: 'ClusterId',
      parentFlowList: 'ParentFlowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      alertUserGroupBizId: 'string',
      periodic: 'boolean',
      editLockDetail: 'string',
      namespace: 'string',
      hostName: 'string',
      application: 'string',
      gmtModified: 'number',
      requestId: 'string',
      description: 'string',
      createCluster: 'boolean',
      startSchedule: 'number',
      endSchedule: 'number',
      graph: 'string',
      alertDingDingGroupBizId: 'string',
      gmtCreate: 'number',
      categoryId: 'string',
      cronExpr: 'string',
      name: 'string',
      id: 'string',
      alertConf: 'string',
      clusterId: 'string',
      parentFlowList: DescribeFlowResponseBodyParentFlowList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  clusters?: ListFlowClusterResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      clusters: ListFlowClusterResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLdapUsersRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  userNameSearch?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      userNameSearch: 'UserNameSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      userNameSearch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLdapUsersResponseBody extends $tea.Model {
  isAdmin?: boolean;
  requestId?: string;
  userList?: ListLdapUsersResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      isAdmin: 'IsAdmin',
      requestId: 'RequestId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAdmin: 'boolean',
      requestId: 'string',
      userList: ListLdapUsersResponseBodyUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLdapUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLdapUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLdapUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  userId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      userId: 'UserId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      userId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectClusterSettingRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  defaultUser?: string;
  defaultQueue?: string;
  clientToken?: string;
  userList?: string[];
  queueList?: string[];
  hostList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
      defaultUser: 'DefaultUser',
      defaultQueue: 'DefaultQueue',
      clientToken: 'ClientToken',
      userList: 'UserList',
      queueList: 'QueueList',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
      defaultUser: 'string',
      defaultQueue: 'string',
      clientToken: 'string',
      userList: { 'type': 'array', 'itemType': 'string' },
      queueList: { 'type': 'array', 'itemType': 'string' },
      hostList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectClusterSettingResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBody extends $tea.Model {
  status?: string;
  projectId?: string;
  namespace?: string;
  flowName?: string;
  gmtModified?: number;
  flowId?: string;
  cronExpression?: string;
  endTime?: number;
  startTime?: number;
  hasNodeFailed?: boolean;
  requestId?: string;
  graph?: string;
  gmtCreate?: number;
  scheduleTime?: number;
  duration?: number;
  id?: string;
  clusterId?: string;
  dependencyFlowList?: DescribeFlowInstanceResponseBodyDependencyFlowList;
  nodeInstance?: DescribeFlowInstanceResponseBodyNodeInstance;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      namespace: 'Namespace',
      flowName: 'FlowName',
      gmtModified: 'GmtModified',
      flowId: 'FlowId',
      cronExpression: 'CronExpression',
      endTime: 'EndTime',
      startTime: 'StartTime',
      hasNodeFailed: 'HasNodeFailed',
      requestId: 'RequestId',
      graph: 'Graph',
      gmtCreate: 'GmtCreate',
      scheduleTime: 'ScheduleTime',
      duration: 'Duration',
      id: 'Id',
      clusterId: 'ClusterId',
      dependencyFlowList: 'DependencyFlowList',
      nodeInstance: 'NodeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      projectId: 'string',
      namespace: 'string',
      flowName: 'string',
      gmtModified: 'number',
      flowId: 'string',
      cronExpression: 'string',
      endTime: 'number',
      startTime: 'number',
      hasNodeFailed: 'boolean',
      requestId: 'string',
      graph: 'string',
      gmtCreate: 'number',
      scheduleTime: 'number',
      duration: 'number',
      id: 'string',
      clusterId: 'string',
      dependencyFlowList: DescribeFlowInstanceResponseBodyDependencyFlowList,
      nodeInstance: DescribeFlowInstanceResponseBodyNodeInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clientToken?: string;
  user?: CreateFlowProjectUserRequestUser[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clientToken: 'ClientToken',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clientToken: 'string',
      user: { 'type': 'array', 'itemType': CreateFlowProjectUserRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowCategoryRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  name?: string;
  type?: string;
  parentId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      type: 'Type',
      parentId: 'ParentId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      type: 'string',
      parentId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowCategoryResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesResponseBody extends $tea.Model {
  nextToken?: string;
  pageSize?: number;
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  items?: ListLibrariesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      items: ListLibrariesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScalingActionRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  scalingActionType?: string;
  scalingGroupBizId?: string;
  actionParam?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      scalingActionType: 'ScalingActionType',
      scalingGroupBizId: 'ScalingGroupBizId',
      actionParam: 'ActionParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      scalingActionType: 'string',
      scalingGroupBizId: 'string',
      actionParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScalingActionResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScalingActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunScalingActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunScalingActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLibrariesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterBizIdList?: string[];
  libraryBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterBizIdList: 'ClusterBizIdList',
      libraryBizId: 'LibraryBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterBizIdList: { 'type': 'array', 'itemType': 'string' },
      libraryBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLibrariesResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  name?: string;
  type?: string;
  adhoc?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      adhoc: 'Adhoc',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      name: 'string',
      type: 'string',
      adhoc: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  jobList?: ListFlowJobsResponseBodyJobList;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      jobList: 'JobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      jobList: ListFlowJobsResponseBodyJobList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  name?: string;
  status?: string;
  description?: string;
  periodic?: boolean;
  startSchedule?: number;
  endSchedule?: number;
  cronExpr?: string;
  createCluster?: boolean;
  clusterId?: string;
  hostName?: string;
  application?: string;
  alertConf?: string;
  alertUserGroupBizId?: string;
  alertDingDingGroupBizId?: string;
  parentFlowList?: string;
  parentCategory?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      description: 'Description',
      periodic: 'Periodic',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      cronExpr: 'CronExpr',
      createCluster: 'CreateCluster',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      application: 'Application',
      alertConf: 'AlertConf',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      parentFlowList: 'ParentFlowList',
      parentCategory: 'ParentCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
      description: 'string',
      periodic: 'boolean',
      startSchedule: 'number',
      endSchedule: 'number',
      cronExpr: 'string',
      createCluster: 'boolean',
      clusterId: 'string',
      hostName: 'string',
      application: 'string',
      alertConf: 'string',
      alertUserGroupBizId: 'string',
      alertDingDingGroupBizId: 'string',
      parentFlowList: 'string',
      parentCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  businessLocations?: DescribeRegionsResponseBodyBusinessLocations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      businessLocations: 'BusinessLocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      businessLocations: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyBusinessLocations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  libraryBizId?: string;
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      libraryBizId: 'LibraryBizId',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      libraryBizId: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusResponseBody extends $tea.Model {
  nextToken?: string;
  pageSize?: number;
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  items?: ListLibraryStatusResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      items: ListLibraryStatusResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLibraryStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLibraryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  configVersion?: string;
  groupId?: string;
  hostInstanceId?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      configVersion: 'ConfigVersion',
      groupId: 'GroupId',
      hostInstanceId: 'HostInstanceId',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      configVersion: 'string',
      groupId: 'string',
      hostInstanceId: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBody extends $tea.Model {
  requestId?: string;
  config?: DescribeClusterServiceConfigResponseBodyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      config: DescribeClusterServiceConfigResponseBodyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  defaultUser?: string;
  defaultQueue?: string;
  userList?: string[];
  queueList?: string[];
  hostList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
      defaultUser: 'DefaultUser',
      defaultQueue: 'DefaultQueue',
      userList: 'UserList',
      queueList: 'QueueList',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
      defaultUser: 'string',
      defaultQueue: 'string',
      userList: { 'type': 'array', 'itemType': 'string' },
      queueList: { 'type': 'array', 'itemType': 'string' },
      hostList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2Request extends $tea.Model {
  resourceOwnerId?: number;
  name?: string;
  regionId?: string;
  zoneId?: string;
  logPath?: string;
  securityGroupId?: string;
  isOpenPublicIp?: boolean;
  securityGroupName?: string;
  chargeType?: string;
  period?: number;
  auto?: boolean;
  autoPayOrder?: boolean;
  vpcId?: string;
  vSwitchId?: string;
  netType?: string;
  userDefinedEmrEcsRole?: string;
  emrVer?: string;
  clusterType?: string;
  enableHighAvailability?: boolean;
  useLocalMetaDb?: boolean;
  enableSsh?: boolean;
  instanceGeneration?: string;
  masterPwd?: string;
  keyPairName?: string;
  metaStoreType?: string;
  metaStoreConf?: string;
  clickHouseConf?: string;
  extraAttributes?: string;
  depositType?: string;
  machineType?: string;
  useCustomHiveMetaDB?: boolean;
  initCustomHiveMetaDB?: boolean;
  configurations?: string;
  enableEas?: boolean;
  relatedClusterId?: string;
  whiteListType?: string;
  authorizeContent?: string;
  resourceGroupId?: string;
  clientToken?: string;
  userInfo?: CreateClusterV2RequestUserInfo[];
  hostComponentInfo?: CreateClusterV2RequestHostComponentInfo[];
  serviceInfo?: CreateClusterV2RequestServiceInfo[];
  promotionInfo?: CreateClusterV2RequestPromotionInfo[];
  hostGroup?: CreateClusterV2RequestHostGroup[];
  bootstrapAction?: CreateClusterV2RequestBootstrapAction[];
  config?: CreateClusterV2RequestConfig[];
  tag?: CreateClusterV2RequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      logPath: 'LogPath',
      securityGroupId: 'SecurityGroupId',
      isOpenPublicIp: 'IsOpenPublicIp',
      securityGroupName: 'SecurityGroupName',
      chargeType: 'ChargeType',
      period: 'Period',
      auto: 'Auto',
      autoPayOrder: 'AutoPayOrder',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      enableHighAvailability: 'EnableHighAvailability',
      useLocalMetaDb: 'UseLocalMetaDb',
      enableSsh: 'EnableSsh',
      instanceGeneration: 'InstanceGeneration',
      masterPwd: 'MasterPwd',
      keyPairName: 'KeyPairName',
      metaStoreType: 'MetaStoreType',
      metaStoreConf: 'MetaStoreConf',
      clickHouseConf: 'ClickHouseConf',
      extraAttributes: 'ExtraAttributes',
      depositType: 'DepositType',
      machineType: 'MachineType',
      useCustomHiveMetaDB: 'UseCustomHiveMetaDB',
      initCustomHiveMetaDB: 'InitCustomHiveMetaDB',
      configurations: 'Configurations',
      enableEas: 'EnableEas',
      relatedClusterId: 'RelatedClusterId',
      whiteListType: 'WhiteListType',
      authorizeContent: 'AuthorizeContent',
      resourceGroupId: 'ResourceGroupId',
      clientToken: 'ClientToken',
      userInfo: 'UserInfo',
      hostComponentInfo: 'HostComponentInfo',
      serviceInfo: 'ServiceInfo',
      promotionInfo: 'PromotionInfo',
      hostGroup: 'HostGroup',
      bootstrapAction: 'BootstrapAction',
      config: 'Config',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      name: 'string',
      regionId: 'string',
      zoneId: 'string',
      logPath: 'string',
      securityGroupId: 'string',
      isOpenPublicIp: 'boolean',
      securityGroupName: 'string',
      chargeType: 'string',
      period: 'number',
      auto: 'boolean',
      autoPayOrder: 'boolean',
      vpcId: 'string',
      vSwitchId: 'string',
      netType: 'string',
      userDefinedEmrEcsRole: 'string',
      emrVer: 'string',
      clusterType: 'string',
      enableHighAvailability: 'boolean',
      useLocalMetaDb: 'boolean',
      enableSsh: 'boolean',
      instanceGeneration: 'string',
      masterPwd: 'string',
      keyPairName: 'string',
      metaStoreType: 'string',
      metaStoreConf: 'string',
      clickHouseConf: 'string',
      extraAttributes: 'string',
      depositType: 'string',
      machineType: 'string',
      useCustomHiveMetaDB: 'boolean',
      initCustomHiveMetaDB: 'boolean',
      configurations: 'string',
      enableEas: 'boolean',
      relatedClusterId: 'string',
      whiteListType: 'string',
      authorizeContent: 'string',
      resourceGroupId: 'string',
      clientToken: 'string',
      userInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestUserInfo },
      hostComponentInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestHostComponentInfo },
      serviceInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestServiceInfo },
      promotionInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestPromotionInfo },
      hostGroup: { 'type': 'array', 'itemType': CreateClusterV2RequestHostGroup },
      bootstrapAction: { 'type': 'array', 'itemType': CreateClusterV2RequestBootstrapAction },
      config: { 'type': 'array', 'itemType': CreateClusterV2RequestConfig },
      tag: { 'type': 'array', 'itemType': CreateClusterV2RequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2ResponseBody extends $tea.Model {
  clusterId?: string;
  coreOrderId?: string;
  emrOrderId?: string;
  masterOrderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreOrderId: 'CoreOrderId',
      emrOrderId: 'EmrOrderId',
      masterOrderId: 'MasterOrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreOrderId: 'string',
      emrOrderId: 'string',
      masterOrderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNameRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  operationId?: string;
  hostId?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      hostId: 'HostId',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      operationId: 'string',
      hostId: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  clusterOperationHostTaskList?: ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      clusterOperationHostTaskList: 'ClusterOperationHostTaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      clusterOperationHostTaskList: ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterOperationHostTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterOperationHostTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigItemRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  scalingConfigItemId?: string;
  scalingGroupBizId?: string;
  configItemType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      scalingConfigItemId: 'ScalingConfigItemId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemType: 'ConfigItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      scalingConfigItemId: 'string',
      scalingGroupBizId: 'string',
      configItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigItemResponseBody extends $tea.Model {
  requestId?: string;
  configItemType?: string;
  scalingGroupBizId?: string;
  scalingConfigItemBizId?: string;
  configItemInformation?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configItemType: 'ConfigItemType',
      scalingGroupBizId: 'ScalingGroupBizId',
      scalingConfigItemBizId: 'ScalingConfigItemBizId',
      configItemInformation: 'ConfigItemInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configItemType: 'string',
      scalingGroupBizId: 'string',
      scalingConfigItemBizId: 'string',
      configItemInformation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingConfigItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingConfigItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostInstanceId?: string;
  hostGroupId?: string;
  hostName?: string;
  privateIp?: string;
  publicIp?: string;
  groupType?: string;
  componentName?: string;
  pageNumber?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostInstanceId: 'HostInstanceId',
      hostGroupId: 'HostGroupId',
      hostName: 'HostName',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      groupType: 'GroupType',
      componentName: 'ComponentName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostInstanceId: 'string',
      hostGroupId: 'string',
      hostName: 'string',
      privateIp: 'string',
      publicIp: 'string',
      groupType: 'string',
      componentName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  hostList?: ListClusterHostResponseBodyHostList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      hostList: ListClusterHostResponseBodyHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  description?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      description: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBody extends $tea.Model {
  requestId?: string;
  serviceInfo?: DescribeClusterServiceResponseBodyServiceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInfo: 'ServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInfo: DescribeClusterServiceResponseBodyServiceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsRequest extends $tea.Model {
  productType?: string;
  regionId?: string;
  projectId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  projects?: ListFlowProjectsResponseBodyProjects;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      projects: 'Projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      projects: ListFlowProjectsResponseBodyProjects,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaTablePreviewTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  databaseId?: string;
  tableId?: string;
  user?: string;
  password?: string;
  resourceGroupId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      databaseId: 'DatabaseId',
      tableId: 'TableId',
      user: 'User',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      databaseId: 'string',
      tableId: 'string',
      user: 'string',
      password: 'string',
      resourceGroupId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaTablePreviewTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaTablePreviewTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMetaTablePreviewTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMetaTablePreviewTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  users?: ListFlowProjectUserResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      users: ListFlowProjectUserResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterHostGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryDetailRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  libraryBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      libraryBizId: 'LibraryBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      libraryBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryDetailResponseBody extends $tea.Model {
  type?: string;
  requestId?: string;
  createTime?: number;
  userId?: string;
  sourceType?: string;
  bizId?: string;
  scope?: string;
  libraryVersion?: string;
  name?: string;
  properties?: string;
  sourceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      userId: 'UserId',
      sourceType: 'SourceType',
      bizId: 'BizId',
      scope: 'Scope',
      libraryVersion: 'LibraryVersion',
      name: 'Name',
      properties: 'Properties',
      sourceLocation: 'SourceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      requestId: 'string',
      createTime: 'number',
      userId: 'string',
      sourceType: 'string',
      bizId: 'string',
      scope: 'string',
      libraryVersion: 'string',
      name: 'string',
      properties: 'string',
      sourceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLibraryDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLibraryDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  jobId?: string;
  name?: string;
  id?: string;
  clusterId?: string;
  status?: string;
  periodic?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      jobId: 'JobId',
      name: 'Name',
      id: 'Id',
      clusterId: 'ClusterId',
      status: 'Status',
      periodic: 'Periodic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      jobId: 'string',
      name: 'string',
      id: 'string',
      clusterId: 'string',
      status: 'string',
      periodic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  flow?: ListFlowsResponseBodyFlow;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      flow: ListFlowsResponseBodyFlow,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserListUser extends $tea.Model {
  linuxStatus?: string;
  k8sStatus?: string;
  knoxStatus?: string;
  groupName?: string;
  userId?: string;
  kerberosStatus?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      linuxStatus: 'LinuxStatus',
      k8sStatus: 'K8sStatus',
      knoxStatus: 'KnoxStatus',
      groupName: 'GroupName',
      userId: 'UserId',
      kerberosStatus: 'KerberosStatus',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linuxStatus: 'string',
      k8sStatus: 'string',
      knoxStatus: 'string',
      groupName: 'string',
      userId: 'string',
      kerberosStatus: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserList extends $tea.Model {
  user?: ListUsersResponseBodyUserListUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyUserListUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnoxUserPasswordResponseBodyUserInfoListUserInfo extends $tea.Model {
  password?: string;
  userName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnoxUserPasswordResponseBodyUserInfoList extends $tea.Model {
  userInfo?: QueryKnoxUserPasswordResponseBodyUserInfoListUserInfo[];
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: { 'type': 'array', 'itemType': QueryKnoxUserPasswordResponseBodyUserInfoListUserInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys extends $tea.Model {
  logEntry?: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry[];
  static names(): { [key: string]: string } {
    return {
      logEntry: 'LogEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEntry: { 'type': 'array', 'itemType': DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBodyFlowFlow extends $tea.Model {
  status?: string;
  type?: string;
  alertUserGroupBizId?: string;
  periodic?: boolean;
  projectId?: string;
  hostName?: string;
  gmtModified?: number;
  description?: string;
  createCluster?: boolean;
  startSchedule?: number;
  endSchedule?: number;
  graph?: string;
  alertDingDingGroupBizId?: string;
  gmtCreate?: number;
  categoryId?: string;
  cronExpr?: string;
  name?: string;
  id?: string;
  alertConf?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      periodic: 'Periodic',
      projectId: 'ProjectId',
      hostName: 'HostName',
      gmtModified: 'GmtModified',
      description: 'Description',
      createCluster: 'CreateCluster',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      graph: 'Graph',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      gmtCreate: 'GmtCreate',
      categoryId: 'CategoryId',
      cronExpr: 'CronExpr',
      name: 'Name',
      id: 'Id',
      alertConf: 'AlertConf',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      alertUserGroupBizId: 'string',
      periodic: 'boolean',
      projectId: 'string',
      hostName: 'string',
      gmtModified: 'number',
      description: 'string',
      createCluster: 'boolean',
      startSchedule: 'number',
      endSchedule: 'number',
      graph: 'string',
      alertDingDingGroupBizId: 'string',
      gmtCreate: 'number',
      categoryId: 'string',
      cronExpr: 'string',
      name: 'string',
      id: 'string',
      alertConf: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBodyFlow extends $tea.Model {
  flow?: ListFlowResponseBodyFlowFlow[];
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: { 'type': 'array', 'itemType': ListFlowResponseBodyFlowFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBodyHostListHost extends $tea.Model {
  status?: string;
  type?: string;
  serialNumber?: string;
  privateIp?: string;
  hostName?: string;
  instanceType?: string;
  hostId?: string;
  hostInstanceId?: string;
  cpu?: number;
  publicIp?: string;
  memory?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      serialNumber: 'SerialNumber',
      privateIp: 'PrivateIp',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      hostId: 'HostId',
      hostInstanceId: 'HostInstanceId',
      cpu: 'Cpu',
      publicIp: 'PublicIp',
      memory: 'Memory',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      serialNumber: 'string',
      privateIp: 'string',
      hostName: 'string',
      instanceType: 'string',
      hostId: 'string',
      hostInstanceId: 'string',
      cpu: 'number',
      publicIp: 'string',
      memory: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBodyHostList extends $tea.Model {
  host?: ListFlowClusterHostResponseBodyHostListHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': ListFlowClusterHostResponseBodyHostListHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationResponseBodyClusterOperationListClusterOperation extends $tea.Model {
  status?: string;
  startTime?: string;
  comment?: string;
  operationName?: string;
  operationId?: string;
  duration?: string;
  percentage?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      startTime: 'StartTime',
      comment: 'Comment',
      operationName: 'OperationName',
      operationId: 'OperationId',
      duration: 'Duration',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      startTime: 'string',
      comment: 'string',
      operationName: 'string',
      operationId: 'string',
      duration: 'string',
      percentage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationResponseBodyClusterOperationList extends $tea.Model {
  clusterOperation?: ListClusterOperationResponseBodyClusterOperationListClusterOperation[];
  static names(): { [key: string]: string } {
    return {
      clusterOperation: 'ClusterOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterOperation: { 'type': 'array', 'itemType': ListClusterOperationResponseBodyClusterOperationListClusterOperation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBodyItemsItem extends $tea.Model {
  active?: boolean;
  data?: string;
  entityId?: string;
  entityType?: string;
  userId?: string;
  gmtCreate?: number;
  message?: string;
  entityGroupId?: string;
  committerId?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      data: 'Data',
      entityId: 'EntityId',
      entityType: 'EntityType',
      userId: 'UserId',
      gmtCreate: 'GmtCreate',
      message: 'Message',
      entityGroupId: 'EntityGroupId',
      committerId: 'CommitterId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      data: 'string',
      entityId: 'string',
      entityType: 'string',
      userId: 'string',
      gmtCreate: 'number',
      message: 'string',
      entityGroupId: 'string',
      committerId: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBodyItems extends $tea.Model {
  item?: ListFlowEntitySnapshotResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListFlowEntitySnapshotResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobRequestResourceList extends $tea.Model {
  path?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterRequestHostComponentInfo extends $tea.Model {
  componentNameList?: string[];
  hostName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      componentNameList: 'ComponentNameList',
      hostName: 'HostName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentNameList: { 'type': 'array', 'itemType': 'string' },
      hostName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterRequestHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  comment?: string;
  vswitchId?: number;
  sysDiskType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  hostKeyPairName?: string;
  diskCount?: number;
  createType?: string;
  period?: number;
  hostPassword?: string;
  diskCapacity?: number;
  nodeCount?: number;
  hostGroupName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      vswitchId: 'VswitchId',
      sysDiskType: 'SysDiskType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      hostKeyPairName: 'HostKeyPairName',
      diskCount: 'DiskCount',
      createType: 'CreateType',
      period: 'Period',
      hostPassword: 'HostPassword',
      diskCapacity: 'DiskCapacity',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      comment: 'string',
      vswitchId: 'number',
      sysDiskType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      hostKeyPairName: 'string',
      diskCount: 'number',
      createType: 'string',
      period: 'number',
      hostPassword: 'string',
      diskCapacity: 'number',
      nodeCount: 'number',
      hostGroupName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterRequestPromotionInfo extends $tea.Model {
  promotionOptionNo?: string;
  promotionOptionCode?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      promotionOptionNo: 'PromotionOptionNo',
      promotionOptionCode: 'PromotionOptionCode',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionOptionNo: 'string',
      promotionOptionCode: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyDataRowsRowColumns extends $tea.Model {
  column?: string[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyDataRowsRow extends $tea.Model {
  columns?: DescribeMetaTablePreviewTaskResponseBodyDataRowsRowColumns;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: DescribeMetaTablePreviewTaskResponseBodyDataRowsRowColumns,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyDataRows extends $tea.Model {
  row?: DescribeMetaTablePreviewTaskResponseBodyDataRowsRow[];
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: { 'type': 'array', 'itemType': DescribeMetaTablePreviewTaskResponseBodyDataRowsRow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyDataHeaders extends $tea.Model {
  header?: string[];
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyData extends $tea.Model {
  rows?: DescribeMetaTablePreviewTaskResponseBodyDataRows;
  headers?: DescribeMetaTablePreviewTaskResponseBodyDataHeaders;
  static names(): { [key: string]: string } {
    return {
      rows: 'Rows',
      headers: 'Headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: DescribeMetaTablePreviewTaskResponseBodyDataRows,
      headers: DescribeMetaTablePreviewTaskResponseBodyDataHeaders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory extends $tea.Model {
  oldValue?: string;
  comment?: string;
  createTime?: number;
  hostName?: string;
  author?: string;
  configItemName?: string;
  hostGroupId?: string;
  newValue?: string;
  hostInstanceId?: string;
  configFileName?: string;
  applied?: boolean;
  configVersion?: string;
  serviceName?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      oldValue: 'OldValue',
      comment: 'Comment',
      createTime: 'CreateTime',
      hostName: 'HostName',
      author: 'Author',
      configItemName: 'ConfigItemName',
      hostGroupId: 'HostGroupId',
      newValue: 'NewValue',
      hostInstanceId: 'HostInstanceId',
      configFileName: 'ConfigFileName',
      applied: 'Applied',
      configVersion: 'ConfigVersion',
      serviceName: 'ServiceName',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldValue: 'string',
      comment: 'string',
      createTime: 'number',
      hostName: 'string',
      author: 'string',
      configItemName: 'string',
      hostGroupId: 'string',
      newValue: 'string',
      hostInstanceId: 'string',
      configFileName: 'string',
      applied: 'boolean',
      configVersion: 'string',
      serviceName: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponseBodyConfigHistoryList extends $tea.Model {
  configHistory?: ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory[];
  static names(): { [key: string]: string } {
    return {
      configHistory: 'ConfigHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistory: { 'type': 'array', 'itemType': ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
  targetCount?: number;
  currentCount?: number;
  orderIdList?: string;
  static names(): { [key: string]: string } {
    return {
      targetCount: 'TargetCount',
      currentCount: 'CurrentCount',
      orderIdList: 'OrderIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetCount: 'number',
      currentCount: 'number',
      orderIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClustersClusterInfoFailReason extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClustersClusterInfo extends $tea.Model {
  type?: string;
  status?: string;
  runningTime?: number;
  orderList?: string;
  createTime?: number;
  chargeType?: string;
  period?: number;
  k8sClusterId?: string;
  expiredTime?: number;
  hasUncompletedOrder?: boolean;
  name?: string;
  id?: string;
  createResource?: string;
  orderTaskInfo?: ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo;
  failReason?: ListFlowClusterAllResponseBodyClustersClusterInfoFailReason;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      runningTime: 'RunningTime',
      orderList: 'OrderList',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      period: 'Period',
      k8sClusterId: 'K8sClusterId',
      expiredTime: 'ExpiredTime',
      hasUncompletedOrder: 'HasUncompletedOrder',
      name: 'Name',
      id: 'Id',
      createResource: 'CreateResource',
      orderTaskInfo: 'OrderTaskInfo',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      runningTime: 'number',
      orderList: 'string',
      createTime: 'number',
      chargeType: 'string',
      period: 'number',
      k8sClusterId: 'string',
      expiredTime: 'number',
      hasUncompletedOrder: 'boolean',
      name: 'string',
      id: 'string',
      createResource: 'string',
      orderTaskInfo: ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo,
      failReason: ListFlowClusterAllResponseBodyClustersClusterInfoFailReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListFlowClusterAllResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListFlowClusterAllResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupResponseBodyItemsItem extends $tea.Model {
  scalingGroupId?: string;
  name?: string;
  description?: string;
  activeStatus?: string;
  hostGroupBizId?: string;
  scalingInMode?: string;
  scalingMinSize?: string;
  scalingMaxSize?: string;
  static names(): { [key: string]: string } {
    return {
      scalingGroupId: 'ScalingGroupId',
      name: 'Name',
      description: 'Description',
      activeStatus: 'ActiveStatus',
      hostGroupBizId: 'HostGroupBizId',
      scalingInMode: 'ScalingInMode',
      scalingMinSize: 'ScalingMinSize',
      scalingMaxSize: 'ScalingMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingGroupId: 'string',
      name: 'string',
      description: 'string',
      activeStatus: 'string',
      hostGroupBizId: 'string',
      scalingInMode: 'string',
      scalingMinSize: 'string',
      scalingMaxSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupResponseBodyItems extends $tea.Model {
  item?: ListScalingGroupResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListScalingGroupResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequestHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  comment?: string;
  multiInstanceTypes?: string;
  sysDiskType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  createType?: string;
  period?: number;
  diskCapacity?: number;
  vSwitchId?: string;
  nodeCount?: number;
  hostGroupName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      multiInstanceTypes: 'MultiInstanceTypes',
      sysDiskType: 'SysDiskType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      createType: 'CreateType',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      vSwitchId: 'VSwitchId',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      comment: 'string',
      multiInstanceTypes: 'string',
      sysDiskType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      createType: 'string',
      period: 'number',
      diskCapacity: 'number',
      vSwitchId: 'string',
      nodeCount: 'number',
      hostGroupName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequestBootstrapAction extends $tea.Model {
  arg?: string;
  path?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      path: 'Path',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      path: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequestConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemResponseBodyItemsItems extends $tea.Model {
  configItemType?: string;
  scalingGroupBizId?: string;
  scalingConfigItemBizId?: string;
  configItemInformation?: string;
  static names(): { [key: string]: string } {
    return {
      configItemType: 'ConfigItemType',
      scalingGroupBizId: 'ScalingGroupBizId',
      scalingConfigItemBizId: 'ScalingConfigItemBizId',
      configItemInformation: 'ConfigItemInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemType: 'string',
      scalingGroupBizId: 'string',
      scalingConfigItemBizId: 'string',
      configItemInformation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemResponseBodyItems extends $tea.Model {
  items?: ListScalingConfigItemResponseBodyItemsItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListScalingConfigItemResponseBodyItemsItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBodyFlowInstancesFlowInstance extends $tea.Model {
  status?: string;
  owner?: string;
  projectId?: string;
  flowName?: string;
  gmtModified?: number;
  flowId?: string;
  endTime?: number;
  startTime?: number;
  hasNodeFailed?: boolean;
  gmtCreate?: number;
  scheduleTime?: number;
  duration?: number;
  id?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      projectId: 'ProjectId',
      flowName: 'FlowName',
      gmtModified: 'GmtModified',
      flowId: 'FlowId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      hasNodeFailed: 'HasNodeFailed',
      gmtCreate: 'GmtCreate',
      scheduleTime: 'ScheduleTime',
      duration: 'Duration',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      projectId: 'string',
      flowName: 'string',
      gmtModified: 'number',
      flowId: 'string',
      endTime: 'number',
      startTime: 'number',
      hasNodeFailed: 'boolean',
      gmtCreate: 'number',
      scheduleTime: 'number',
      duration: 'number',
      id: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBodyFlowInstances extends $tea.Model {
  flowInstance?: ListFlowInstanceResponseBodyFlowInstancesFlowInstance[];
  static names(): { [key: string]: string } {
    return {
      flowInstance: 'FlowInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstance: { 'type': 'array', 'itemType': ListFlowInstanceResponseBodyFlowInstancesFlowInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingMetricsResponseBodyMetricList extends $tea.Model {
  metricName?: string;
  unit?: string;
  displayName?: string;
  minValue?: number;
  maxValue?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      unit: 'Unit',
      displayName: 'DisplayName',
      minValue: 'MinValue',
      maxValue: 'MaxValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      unit: 'string',
      displayName: 'string',
      minValue: 'number',
      maxValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityResponseBodyItemsItem extends $tea.Model {
  bizId?: string;
  startTime?: number;
  endTime?: number;
  expectNum?: number;
  instanceIds?: string;
  totalCapacity?: number;
  cause?: string;
  description?: string;
  transition?: string;
  status?: string;
  scalingRuleId?: string;
  scalingRuleName?: string;
  hostGroupBizId?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      expectNum: 'ExpectNum',
      instanceIds: 'InstanceIds',
      totalCapacity: 'TotalCapacity',
      cause: 'Cause',
      description: 'Description',
      transition: 'Transition',
      status: 'Status',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      hostGroupBizId: 'HostGroupBizId',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      startTime: 'number',
      endTime: 'number',
      expectNum: 'number',
      instanceIds: 'string',
      totalCapacity: 'number',
      cause: 'string',
      description: 'string',
      transition: 'string',
      status: 'string',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
      hostGroupBizId: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityResponseBodyItems extends $tea.Model {
  item?: ListScalingActivityResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListScalingActivityResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  nextToken?: string;
  items?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nextToken: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionListServiceAction extends $tea.Model {
  displayName?: string;
  actionName?: string;
  componentName?: string;
  serviceName?: string;
  command?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      actionName: 'ActionName',
      componentName: 'ComponentName',
      serviceName: 'ServiceName',
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      actionName: 'string',
      componentName: 'string',
      serviceName: 'string',
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionList extends $tea.Model {
  serviceAction?: ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionListServiceAction[];
  static names(): { [key: string]: string } {
    return {
      serviceAction: 'ServiceAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAction: { 'type': 'array', 'itemType': ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionListServiceAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledService extends $tea.Model {
  serviceEcmVersion?: string;
  serviceDisplayName?: string;
  onlyClient?: boolean;
  comment?: string;
  notStartedNum?: number;
  needRestartNum?: number;
  serviceVersion?: string;
  serviceStatus?: string;
  serviceName?: string;
  abnormalNum?: number;
  serviceActionList?: ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionList;
  static names(): { [key: string]: string } {
    return {
      serviceEcmVersion: 'ServiceEcmVersion',
      serviceDisplayName: 'ServiceDisplayName',
      onlyClient: 'OnlyClient',
      comment: 'Comment',
      notStartedNum: 'NotStartedNum',
      needRestartNum: 'NeedRestartNum',
      serviceVersion: 'ServiceVersion',
      serviceStatus: 'ServiceStatus',
      serviceName: 'ServiceName',
      abnormalNum: 'AbnormalNum',
      serviceActionList: 'ServiceActionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceEcmVersion: 'string',
      serviceDisplayName: 'string',
      onlyClient: 'boolean',
      comment: 'string',
      notStartedNum: 'number',
      needRestartNum: 'number',
      serviceVersion: 'string',
      serviceStatus: 'string',
      serviceName: 'string',
      abnormalNum: 'number',
      serviceActionList: ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBodyClusterInstalledServiceList extends $tea.Model {
  clusterInstalledService?: ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledService[];
  static names(): { [key: string]: string } {
    return {
      clusterInstalledService: 'ClusterInstalledService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstalledService: { 'type': 'array', 'itemType': ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledService },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus extends $tea.Model {
  status?: string;
  hostName?: string;
  containerId?: string;
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hostName: 'HostName',
      containerId: 'ContainerId',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      hostName: 'string',
      containerId: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList extends $tea.Model {
  containerStatus?: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus[];
  static names(): { [key: string]: string } {
    return {
      containerStatus: 'ContainerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerStatus: { 'type': 'array', 'itemType': ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequestHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  comment?: string;
  multiInstanceTypes?: string;
  sysDiskType?: string;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  createType?: string;
  period?: number;
  diskCapacity?: number;
  vSwitchId?: string;
  nodeCount?: number;
  hostGroupName?: string;
  renewAuto?: boolean;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      multiInstanceTypes: 'MultiInstanceTypes',
      sysDiskType: 'SysDiskType',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      createType: 'CreateType',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      vSwitchId: 'VSwitchId',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
      renewAuto: 'RenewAuto',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      comment: 'string',
      multiInstanceTypes: 'string',
      sysDiskType: 'string',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      createType: 'string',
      period: 'number',
      diskCapacity: 'number',
      vSwitchId: 'string',
      nodeCount: 'number',
      hostGroupName: 'string',
      renewAuto: 'boolean',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequestBootstrapAction extends $tea.Model {
  arg?: string;
  path?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      path: 'Path',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      path: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequestConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponseBodyItemsItemSoftwareInfo extends $tea.Model {
  clusterType?: string;
  emrVer?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      emrVer: 'EmrVer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      emrVer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponseBodyItemsItem extends $tea.Model {
  name?: string;
  id?: string;
  softwareInfo?: ListMetaClusterResponseBodyItemsItemSoftwareInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'string',
      softwareInfo: ListMetaClusterResponseBodyItemsItemSoftwareInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponseBodyItems extends $tea.Model {
  item?: ListMetaClusterResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListMetaClusterResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostResponseBodyClusterOperationHostListClusterOperationHost extends $tea.Model {
  status?: string;
  hostName?: string;
  percentage?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hostName: 'HostName',
      percentage: 'Percentage',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      hostName: 'string',
      percentage: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostResponseBodyClusterOperationHostList extends $tea.Model {
  clusterOperationHost?: ListClusterOperationHostResponseBodyClusterOperationHostListClusterOperationHost[];
  static names(): { [key: string]: string } {
    return {
      clusterOperationHost: 'ClusterOperationHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterOperationHost: { 'type': 'array', 'itemType': ListClusterOperationHostResponseBodyClusterOperationHostListClusterOperationHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionListBootstrapAction extends $tea.Model {
  path?: string;
  name?: string;
  arg?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      name: 'Name',
      arg: 'Arg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      name: 'string',
      arg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupListHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  multiInstanceTypes?: string;
  sysDiskType?: string;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  period?: string;
  diskCapacity?: number;
  nodeCount?: number;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      multiInstanceTypes: 'MultiInstanceTypes',
      sysDiskType: 'SysDiskType',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      multiInstanceTypes: 'string',
      sysDiskType: 'string',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      period: 'string',
      diskCapacity: 'number',
      nodeCount: 'number',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupList extends $tea.Model {
  hostGroup?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupListHostGroup[];
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: { 'type': 'array', 'itemType': ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupListHostGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigListConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigList extends $tea.Model {
  config?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoSoftwareInfoList extends $tea.Model {
  softwareInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfo extends $tea.Model {
  vpcId?: string;
  keyPairName?: string;
  logEnable?: boolean;
  sshEnable?: boolean;
  highAvailabilityEnable?: boolean;
  securityGroupId?: string;
  userId?: string;
  isOpenPublicIp?: boolean;
  allowNotebook?: boolean;
  gmtModified?: number;
  templateName?: string;
  depositType?: string;
  securityGroupName?: string;
  createSource?: string;
  instanceGeneration?: string;
  useCustomHiveMetaDb?: boolean;
  easEnable?: boolean;
  userDefinedEmrEcsRole?: string;
  metaStoreType?: string;
  machineType?: string;
  useLocalMetaDb?: boolean;
  masterNodeTotal?: number;
  initCustomHiveMetaDb?: boolean;
  ioOptimized?: boolean;
  metaStoreConf?: string;
  vSwitchId?: string;
  configurations?: string;
  logPath?: string;
  clusterType?: string;
  netType?: string;
  zoneId?: string;
  gmtCreate?: number;
  id?: string;
  bootstrapActionList?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionList;
  hostGroupList?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupList;
  configList?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigList;
  softwareInfoList?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoSoftwareInfoList;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      keyPairName: 'KeyPairName',
      logEnable: 'LogEnable',
      sshEnable: 'SshEnable',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      securityGroupId: 'SecurityGroupId',
      userId: 'UserId',
      isOpenPublicIp: 'IsOpenPublicIp',
      allowNotebook: 'AllowNotebook',
      gmtModified: 'GmtModified',
      templateName: 'TemplateName',
      depositType: 'DepositType',
      securityGroupName: 'SecurityGroupName',
      createSource: 'CreateSource',
      instanceGeneration: 'InstanceGeneration',
      useCustomHiveMetaDb: 'UseCustomHiveMetaDb',
      easEnable: 'EasEnable',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      metaStoreType: 'MetaStoreType',
      machineType: 'MachineType',
      useLocalMetaDb: 'UseLocalMetaDb',
      masterNodeTotal: 'MasterNodeTotal',
      initCustomHiveMetaDb: 'InitCustomHiveMetaDb',
      ioOptimized: 'IoOptimized',
      metaStoreConf: 'MetaStoreConf',
      vSwitchId: 'VSwitchId',
      configurations: 'Configurations',
      logPath: 'LogPath',
      clusterType: 'ClusterType',
      netType: 'NetType',
      zoneId: 'ZoneId',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      bootstrapActionList: 'BootstrapActionList',
      hostGroupList: 'HostGroupList',
      configList: 'ConfigList',
      softwareInfoList: 'SoftwareInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      keyPairName: 'string',
      logEnable: 'boolean',
      sshEnable: 'boolean',
      highAvailabilityEnable: 'boolean',
      securityGroupId: 'string',
      userId: 'string',
      isOpenPublicIp: 'boolean',
      allowNotebook: 'boolean',
      gmtModified: 'number',
      templateName: 'string',
      depositType: 'string',
      securityGroupName: 'string',
      createSource: 'string',
      instanceGeneration: 'string',
      useCustomHiveMetaDb: 'boolean',
      easEnable: 'boolean',
      userDefinedEmrEcsRole: 'string',
      metaStoreType: 'string',
      machineType: 'string',
      useLocalMetaDb: 'boolean',
      masterNodeTotal: 'number',
      initCustomHiveMetaDb: 'boolean',
      ioOptimized: 'boolean',
      metaStoreConf: 'string',
      vSwitchId: 'string',
      configurations: 'string',
      logPath: 'string',
      clusterType: 'string',
      netType: 'string',
      zoneId: 'string',
      gmtCreate: 'number',
      id: 'string',
      bootstrapActionList: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionList,
      hostGroupList: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupList,
      configList: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigList,
      softwareInfoList: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoSoftwareInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoList extends $tea.Model {
  templateInfo?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfo[];
  static names(): { [key: string]: string } {
    return {
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateInfo: { 'type': 'array', 'itemType': ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoTagsTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoTags extends $tea.Model {
  tag?: ListClustersResponseBodyClustersClusterInfoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
  targetCount?: number;
  currentCount?: number;
  orderIdList?: string;
  static names(): { [key: string]: string } {
    return {
      targetCount: 'TargetCount',
      currentCount: 'CurrentCount',
      orderIdList: 'OrderIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetCount: 'number',
      currentCount: 'number',
      orderIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoFailReason extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfo extends $tea.Model {
  type?: string;
  status?: string;
  runningTime?: number;
  metaStoreType?: string;
  machineType?: string;
  orderList?: string;
  createTime?: number;
  chargeType?: string;
  depositType?: string;
  period?: number;
  k8sClusterId?: string;
  expiredTime?: number;
  hasUncompletedOrder?: boolean;
  name?: string;
  createResource?: string;
  id?: string;
  tags?: ListClustersResponseBodyClustersClusterInfoTags;
  orderTaskInfo?: ListClustersResponseBodyClustersClusterInfoOrderTaskInfo;
  failReason?: ListClustersResponseBodyClustersClusterInfoFailReason;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      runningTime: 'RunningTime',
      metaStoreType: 'MetaStoreType',
      machineType: 'MachineType',
      orderList: 'OrderList',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      depositType: 'DepositType',
      period: 'Period',
      k8sClusterId: 'K8sClusterId',
      expiredTime: 'ExpiredTime',
      hasUncompletedOrder: 'HasUncompletedOrder',
      name: 'Name',
      createResource: 'CreateResource',
      id: 'Id',
      tags: 'Tags',
      orderTaskInfo: 'OrderTaskInfo',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      runningTime: 'number',
      metaStoreType: 'string',
      machineType: 'string',
      orderList: 'string',
      createTime: 'number',
      chargeType: 'string',
      depositType: 'string',
      period: 'number',
      k8sClusterId: 'string',
      expiredTime: 'number',
      hasUncompletedOrder: 'boolean',
      name: 'string',
      createResource: 'string',
      id: 'string',
      tags: ListClustersResponseBodyClustersClusterInfoTags,
      orderTaskInfo: ListClustersResponseBodyClustersClusterInfoOrderTaskInfo,
      failReason: ListClustersResponseBodyClustersClusterInfoFailReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListClustersResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobRequestResourceList extends $tea.Model {
  path?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBodyScalingConfigInstanceTypeList extends $tea.Model {
  instanceTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeList: 'instanceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBodyScalingConfigSpotPriceLimitsSpotPriceLimits extends $tea.Model {
  instanceType?: string;
  priceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priceLimit: 'PriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBodyScalingConfigSpotPriceLimits extends $tea.Model {
  spotPriceLimits?: DescribeScalingGroupInstanceResponseBodyScalingConfigSpotPriceLimitsSpotPriceLimits[];
  static names(): { [key: string]: string } {
    return {
      spotPriceLimits: 'spotPriceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPriceLimits: { 'type': 'array', 'itemType': DescribeScalingGroupInstanceResponseBodyScalingConfigSpotPriceLimitsSpotPriceLimits },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBodyScalingConfig extends $tea.Model {
  spotStrategy?: string;
  payType?: string;
  dataDiskCategory?: string;
  dataDiskSize?: number;
  dataDiskCount?: number;
  sysDiskCategory?: string;
  sysDiskSize?: number;
  instanceTypeList?: DescribeScalingGroupInstanceResponseBodyScalingConfigInstanceTypeList;
  spotPriceLimits?: DescribeScalingGroupInstanceResponseBodyScalingConfigSpotPriceLimits;
  static names(): { [key: string]: string } {
    return {
      spotStrategy: 'SpotStrategy',
      payType: 'PayType',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      dataDiskCount: 'DataDiskCount',
      sysDiskCategory: 'SysDiskCategory',
      sysDiskSize: 'SysDiskSize',
      instanceTypeList: 'InstanceTypeList',
      spotPriceLimits: 'SpotPriceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotStrategy: 'string',
      payType: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'number',
      dataDiskCount: 'number',
      sysDiskCategory: 'string',
      sysDiskSize: 'number',
      instanceTypeList: DescribeScalingGroupInstanceResponseBodyScalingConfigInstanceTypeList,
      spotPriceLimits: DescribeScalingGroupInstanceResponseBodyScalingConfigSpotPriceLimits,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRuleSchedulerTrigger extends $tea.Model {
  launchTime?: number;
  launchExpirationTime?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
  recurrenceEndTime?: number;
  static names(): { [key: string]: string } {
    return {
      launchTime: 'LaunchTime',
      launchExpirationTime: 'LaunchExpirationTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      recurrenceEndTime: 'RecurrenceEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTime: 'number',
      launchExpirationTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      recurrenceEndTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRuleCloudWatchTrigger extends $tea.Model {
  metricName?: string;
  period?: number;
  statistics?: string;
  comparisonOperator?: string;
  threshold?: string;
  evaluationCount?: string;
  unit?: string;
  metricDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      threshold: 'Threshold',
      evaluationCount: 'EvaluationCount',
      unit: 'Unit',
      metricDisplayName: 'MetricDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      comparisonOperator: 'string',
      threshold: 'string',
      evaluationCount: 'string',
      unit: 'string',
      metricDisplayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRule extends $tea.Model {
  ruleCategory?: string;
  essScalingRuleId?: string;
  scalingGroupId?: number;
  ruleName?: string;
  adjustmentType?: string;
  adjustmentValue?: number;
  cooldown?: number;
  status?: string;
  launchTime?: string;
  launchExpirationTime?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
  recurrenceEndTime?: string;
  withGrace?: boolean;
  timeoutWithGrace?: number;
  schedulerTrigger?: DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRuleSchedulerTrigger;
  cloudWatchTrigger?: DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRuleCloudWatchTrigger;
  static names(): { [key: string]: string } {
    return {
      ruleCategory: 'RuleCategory',
      essScalingRuleId: 'EssScalingRuleId',
      scalingGroupId: 'ScalingGroupId',
      ruleName: 'RuleName',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      cooldown: 'Cooldown',
      status: 'Status',
      launchTime: 'LaunchTime',
      launchExpirationTime: 'LaunchExpirationTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      recurrenceEndTime: 'RecurrenceEndTime',
      withGrace: 'WithGrace',
      timeoutWithGrace: 'TimeoutWithGrace',
      schedulerTrigger: 'SchedulerTrigger',
      cloudWatchTrigger: 'CloudWatchTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCategory: 'string',
      essScalingRuleId: 'string',
      scalingGroupId: 'number',
      ruleName: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      cooldown: 'number',
      status: 'string',
      launchTime: 'string',
      launchExpirationTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      recurrenceEndTime: 'string',
      withGrace: 'boolean',
      timeoutWithGrace: 'number',
      schedulerTrigger: DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRuleSchedulerTrigger,
      cloudWatchTrigger: DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRuleCloudWatchTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceResponseBodyScalingRuleList extends $tea.Model {
  scalingRule?: DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRule[];
  static names(): { [key: string]: string } {
    return {
      scalingRule: 'ScalingRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingRule: { 'type': 'array', 'itemType': DescribeScalingGroupInstanceResponseBodyScalingRuleListScalingRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionListBootstrapAction extends $tea.Model {
  path?: string;
  name?: string;
  arg?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      name: 'Name',
      arg: 'Arg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      name: 'string',
      arg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoHostGroupListHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  multiInstanceTypes?: string;
  sysDiskType?: string;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  period?: string;
  diskCapacity?: number;
  nodeCount?: number;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      multiInstanceTypes: 'MultiInstanceTypes',
      sysDiskType: 'SysDiskType',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      multiInstanceTypes: 'string',
      sysDiskType: 'string',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      period: 'string',
      diskCapacity: 'number',
      nodeCount: 'number',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoHostGroupList extends $tea.Model {
  hostGroup?: DescribeClusterTemplateResponseBodyTemplateInfoHostGroupListHostGroup[];
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: { 'type': 'array', 'itemType': DescribeClusterTemplateResponseBodyTemplateInfoHostGroupListHostGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoConfigListConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoConfigList extends $tea.Model {
  config?: DescribeClusterTemplateResponseBodyTemplateInfoConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': DescribeClusterTemplateResponseBodyTemplateInfoConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoTagsTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoTags extends $tea.Model {
  tag?: DescribeClusterTemplateResponseBodyTemplateInfoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeClusterTemplateResponseBodyTemplateInfoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoSoftwareInfoList extends $tea.Model {
  softwareInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfo extends $tea.Model {
  vpcId?: string;
  keyPairName?: string;
  logEnable?: boolean;
  sshEnable?: boolean;
  highAvailabilityEnable?: boolean;
  securityGroupId?: string;
  masterPwd?: string;
  userId?: string;
  isOpenPublicIp?: boolean;
  allowNotebook?: boolean;
  gmtModified?: number;
  templateName?: string;
  depositType?: string;
  securityGroupName?: string;
  createSource?: string;
  instanceGeneration?: string;
  useCustomHiveMetaDb?: boolean;
  easEnable?: boolean;
  userDefinedEmrEcsRole?: string;
  metaStoreType?: string;
  machineType?: string;
  useLocalMetaDb?: boolean;
  masterNodeTotal?: number;
  initCustomHiveMetaDb?: boolean;
  ioOptimized?: boolean;
  metaStoreConf?: string;
  vSwitchId?: string;
  configurations?: string;
  emrVer?: string;
  logPath?: string;
  clusterType?: string;
  netType?: string;
  zoneId?: string;
  gmtCreate?: number;
  id?: string;
  bootstrapActionList?: DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionList;
  hostGroupList?: DescribeClusterTemplateResponseBodyTemplateInfoHostGroupList;
  configList?: DescribeClusterTemplateResponseBodyTemplateInfoConfigList;
  tags?: DescribeClusterTemplateResponseBodyTemplateInfoTags;
  softwareInfoList?: DescribeClusterTemplateResponseBodyTemplateInfoSoftwareInfoList;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      keyPairName: 'KeyPairName',
      logEnable: 'LogEnable',
      sshEnable: 'SshEnable',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      securityGroupId: 'SecurityGroupId',
      masterPwd: 'MasterPwd',
      userId: 'UserId',
      isOpenPublicIp: 'IsOpenPublicIp',
      allowNotebook: 'AllowNotebook',
      gmtModified: 'GmtModified',
      templateName: 'TemplateName',
      depositType: 'DepositType',
      securityGroupName: 'SecurityGroupName',
      createSource: 'CreateSource',
      instanceGeneration: 'InstanceGeneration',
      useCustomHiveMetaDb: 'UseCustomHiveMetaDb',
      easEnable: 'EasEnable',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      metaStoreType: 'MetaStoreType',
      machineType: 'MachineType',
      useLocalMetaDb: 'UseLocalMetaDb',
      masterNodeTotal: 'MasterNodeTotal',
      initCustomHiveMetaDb: 'InitCustomHiveMetaDb',
      ioOptimized: 'IoOptimized',
      metaStoreConf: 'MetaStoreConf',
      vSwitchId: 'VSwitchId',
      configurations: 'Configurations',
      emrVer: 'EmrVer',
      logPath: 'LogPath',
      clusterType: 'ClusterType',
      netType: 'NetType',
      zoneId: 'ZoneId',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      bootstrapActionList: 'BootstrapActionList',
      hostGroupList: 'HostGroupList',
      configList: 'ConfigList',
      tags: 'Tags',
      softwareInfoList: 'SoftwareInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      keyPairName: 'string',
      logEnable: 'boolean',
      sshEnable: 'boolean',
      highAvailabilityEnable: 'boolean',
      securityGroupId: 'string',
      masterPwd: 'string',
      userId: 'string',
      isOpenPublicIp: 'boolean',
      allowNotebook: 'boolean',
      gmtModified: 'number',
      templateName: 'string',
      depositType: 'string',
      securityGroupName: 'string',
      createSource: 'string',
      instanceGeneration: 'string',
      useCustomHiveMetaDb: 'boolean',
      easEnable: 'boolean',
      userDefinedEmrEcsRole: 'string',
      metaStoreType: 'string',
      machineType: 'string',
      useLocalMetaDb: 'boolean',
      masterNodeTotal: 'number',
      initCustomHiveMetaDb: 'boolean',
      ioOptimized: 'boolean',
      metaStoreConf: 'string',
      vSwitchId: 'string',
      configurations: 'string',
      emrVer: 'string',
      logPath: 'string',
      clusterType: 'string',
      netType: 'string',
      zoneId: 'string',
      gmtCreate: 'number',
      id: 'string',
      bootstrapActionList: DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionList,
      hostGroupList: DescribeClusterTemplateResponseBodyTemplateInfoHostGroupList,
      configList: DescribeClusterTemplateResponseBodyTemplateInfoConfigList,
      tags: DescribeClusterTemplateResponseBodyTemplateInfoTags,
      softwareInfoList: DescribeClusterTemplateResponseBodyTemplateInfoSoftwareInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance extends $tea.Model {
  type?: string;
  status?: string;
  pending?: boolean;
  envConf?: string;
  retryInterval?: number;
  projectId?: string;
  jobType?: string;
  gmtModified?: number;
  externalInfo?: string;
  externalStatus?: string;
  jobName?: string;
  externalId?: string;
  maxRetry?: number;
  clusterId?: string;
  failAct?: string;
  jobParams?: string;
  paramConf?: string;
  hostName?: string;
  retries?: number;
  endTime?: number;
  startTime?: number;
  runConf?: string;
  nodeName?: string;
  jobId?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      pending: 'pending',
      envConf: 'EnvConf',
      retryInterval: 'RetryInterval',
      projectId: 'ProjectId',
      jobType: 'JobType',
      gmtModified: 'GmtModified',
      externalInfo: 'ExternalInfo',
      externalStatus: 'ExternalStatus',
      jobName: 'JobName',
      externalId: 'ExternalId',
      maxRetry: 'MaxRetry',
      clusterId: 'ClusterId',
      failAct: 'FailAct',
      jobParams: 'JobParams',
      paramConf: 'ParamConf',
      hostName: 'HostName',
      retries: 'Retries',
      endTime: 'EndTime',
      startTime: 'StartTime',
      runConf: 'RunConf',
      nodeName: 'NodeName',
      jobId: 'JobId',
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      pending: 'boolean',
      envConf: 'string',
      retryInterval: 'number',
      projectId: 'string',
      jobType: 'string',
      gmtModified: 'number',
      externalInfo: 'string',
      externalStatus: 'string',
      jobName: 'string',
      externalId: 'string',
      maxRetry: 'number',
      clusterId: 'string',
      failAct: 'string',
      jobParams: 'string',
      paramConf: 'string',
      hostName: 'string',
      retries: 'number',
      endTime: 'number',
      startTime: 'number',
      runConf: 'string',
      nodeName: 'string',
      jobId: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBodyNodeInstances extends $tea.Model {
  nodeInstance?: ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeInstance: 'NodeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstance: { 'type': 'array', 'itemType': ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyData extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentResponseBodyComponentListComponent extends $tea.Model {
  serialNumber?: string;
  status?: string;
  serviceDisplayName?: string;
  privateIp?: string;
  serverStatus?: string;
  componentName?: string;
  commissionStatus?: string;
  hostName?: string;
  instanceType?: string;
  needRestart?: boolean;
  hostId?: string;
  hostInstanceId?: string;
  cpu?: number;
  componentDisplayName?: string;
  publicIp?: string;
  memory?: number;
  role?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      status: 'Status',
      serviceDisplayName: 'ServiceDisplayName',
      privateIp: 'PrivateIp',
      serverStatus: 'ServerStatus',
      componentName: 'ComponentName',
      commissionStatus: 'CommissionStatus',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      needRestart: 'NeedRestart',
      hostId: 'HostId',
      hostInstanceId: 'HostInstanceId',
      cpu: 'Cpu',
      componentDisplayName: 'ComponentDisplayName',
      publicIp: 'PublicIp',
      memory: 'Memory',
      role: 'Role',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      status: 'string',
      serviceDisplayName: 'string',
      privateIp: 'string',
      serverStatus: 'string',
      componentName: 'string',
      commissionStatus: 'string',
      hostName: 'string',
      instanceType: 'string',
      needRestart: 'boolean',
      hostId: 'string',
      hostInstanceId: 'string',
      cpu: 'number',
      componentDisplayName: 'string',
      publicIp: 'string',
      memory: 'number',
      role: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentResponseBodyComponentList extends $tea.Model {
  component?: ListClusterHostComponentResponseBodyComponentListComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': ListClusterHostComponentResponseBodyComponentListComponent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyQueueList extends $tea.Model {
  queue?: string[];
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyUserList extends $tea.Model {
  user?: string[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyHostList extends $tea.Model {
  host?: string[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList extends $tea.Model {
  queue?: string[];
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList extends $tea.Model {
  user?: string[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList extends $tea.Model {
  host?: string[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting extends $tea.Model {
  k8sClusterId?: string;
  defaultQueue?: string;
  projectId?: string;
  gmtCreate?: number;
  clusterName?: string;
  defaultUser?: string;
  gmtModified?: number;
  clusterId?: string;
  queueList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList;
  userList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList;
  hostList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      defaultQueue: 'DefaultQueue',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      clusterName: 'ClusterName',
      defaultUser: 'DefaultUser',
      gmtModified: 'GmtModified',
      clusterId: 'ClusterId',
      queueList: 'QueueList',
      userList: 'UserList',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      defaultQueue: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      clusterName: 'string',
      defaultUser: 'string',
      gmtModified: 'number',
      clusterId: 'string',
      queueList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList,
      userList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList,
      hostList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettings extends $tea.Model {
  clusterSetting?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting[];
  static names(): { [key: string]: string } {
    return {
      clusterSetting: 'ClusterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSetting: { 'type': 'array', 'itemType': ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchResponseBodyVswitchListVswitch extends $tea.Model {
  creationTime?: string;
  status?: string;
  vpcId?: string;
  isDefault?: boolean;
  vSwitchId?: string;
  cidrBlock?: string;
  description?: string;
  availableIpAddressCount?: string;
  resourceGroupId?: string;
  zoneId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      vpcId: 'VpcId',
      isDefault: 'IsDefault',
      vSwitchId: 'VSwitchId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      availableIpAddressCount: 'AvailableIpAddressCount',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      vpcId: 'string',
      isDefault: 'boolean',
      vSwitchId: 'string',
      cidrBlock: 'string',
      description: 'string',
      availableIpAddressCount: 'string',
      resourceGroupId: 'string',
      zoneId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchResponseBodyVswitchList extends $tea.Model {
  vswitch?: ListVswitchResponseBodyVswitchListVswitch[];
  static names(): { [key: string]: string } {
    return {
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitch: { 'type': 'array', 'itemType': ListVswitchResponseBodyVswitchListVswitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBodyHostListHost extends $tea.Model {
  status?: string;
  type?: string;
  serialNumber?: string;
  privateIp?: string;
  hostName?: string;
  instanceType?: string;
  hostId?: string;
  hostInstanceId?: string;
  cpu?: number;
  publicIp?: string;
  memory?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      serialNumber: 'SerialNumber',
      privateIp: 'PrivateIp',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      hostId: 'HostId',
      hostInstanceId: 'HostInstanceId',
      cpu: 'Cpu',
      publicIp: 'PublicIp',
      memory: 'Memory',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      serialNumber: 'string',
      privateIp: 'string',
      hostName: 'string',
      instanceType: 'string',
      hostId: 'string',
      hostInstanceId: 'string',
      cpu: 'number',
      publicIp: 'string',
      memory: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBodyHostList extends $tea.Model {
  host?: ListFlowClusterAllHostsResponseBodyHostListHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': ListFlowClusterAllHostsResponseBodyHostListHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceInstancesResponseBodyDdiDatasourceInfoListDdiDatasourceInfoPrivateAddressList extends $tea.Model {
  privateAddressList?: string[];
  static names(): { [key: string]: string } {
    return {
      privateAddressList: 'privateAddressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateAddressList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceInstancesResponseBodyDdiDatasourceInfoListDdiDatasourceInfo extends $tea.Model {
  clusterId?: string;
  createTime?: number;
  datasourceId?: string;
  descreption?: string;
  modifyTime?: number;
  name?: string;
  status?: string;
  type?: string;
  vswitchId?: string;
  privateAddressList?: ListDatasourceInstancesResponseBodyDdiDatasourceInfoListDdiDatasourceInfoPrivateAddressList;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      datasourceId: 'DatasourceId',
      descreption: 'Descreption',
      modifyTime: 'ModifyTime',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      vswitchId: 'VswitchId',
      privateAddressList: 'PrivateAddressList',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTime: 'number',
      datasourceId: 'string',
      descreption: 'string',
      modifyTime: 'number',
      name: 'string',
      status: 'string',
      type: 'string',
      vswitchId: 'string',
      privateAddressList: ListDatasourceInstancesResponseBodyDdiDatasourceInfoListDdiDatasourceInfoPrivateAddressList,
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceInstancesResponseBodyDdiDatasourceInfoList extends $tea.Model {
  ddiDatasourceInfo?: ListDatasourceInstancesResponseBodyDdiDatasourceInfoListDdiDatasourceInfo[];
  static names(): { [key: string]: string } {
    return {
      ddiDatasourceInfo: 'DdiDatasourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddiDatasourceInfo: { 'type': 'array', 'itemType': ListDatasourceInstancesResponseBodyDdiDatasourceInfoListDdiDatasourceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyHeaderList extends $tea.Model {
  header?: string[];
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowListRowRowItemList extends $tea.Model {
  rowItem?: string[];
  static names(): { [key: string]: string } {
    return {
      rowItem: 'RowItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowItem: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowListRow extends $tea.Model {
  rowIndex?: number;
  rowItemList?: ListFlowNodeSqlResultResponseBodyRowListRowRowItemList;
  static names(): { [key: string]: string } {
    return {
      rowIndex: 'RowIndex',
      rowItemList: 'RowItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowIndex: 'number',
      rowItemList: ListFlowNodeSqlResultResponseBodyRowListRowRowItemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowList extends $tea.Model {
  row?: ListFlowNodeSqlResultResponseBodyRowListRow[];
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: { 'type': 'array', 'itemType': ListFlowNodeSqlResultResponseBodyRowListRow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponseBodyResourceListResource extends $tea.Model {
  path?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponseBodyResourceList extends $tea.Model {
  resource?: DescribeFlowJobResponseBodyResourceListResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeFlowJobResponseBodyResourceListResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityWhiteListResponseBodyDescribeSecurityWhiteList extends $tea.Model {
  portRange?: string;
  whiteIp?: string;
  description?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      portRange: 'PortRange',
      whiteIp: 'WhiteIp',
      description: 'Description',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portRange: 'string',
      whiteIp: 'string',
      description: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys extends $tea.Model {
  logEntry?: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry[];
  static names(): { [key: string]: string } {
    return {
      logEntry: 'LogEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEntry: { 'type': 'array', 'itemType': DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  nextToken?: string;
  items?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nextToken: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo extends $tea.Model {
  clusterName?: string;
  status?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      status: 'Status',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      status: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList extends $tea.Model {
  gatewayClusterInfo?: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      gatewayClusterInfo: 'GatewayClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayClusterInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos extends $tea.Model {
  daemonInfo?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo[];
  static names(): { [key: string]: string } {
    return {
      daemonInfo: 'DaemonInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daemonInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo extends $tea.Model {
  type?: string;
  diskId?: string;
  size?: number;
  device?: string;
  diskName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      diskId: 'DiskId',
      size: 'Size',
      device: 'Device',
      diskName: 'DiskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      diskId: 'string',
      size: 'number',
      device: 'string',
      diskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos extends $tea.Model {
  diskInfo?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo[];
  static names(): { [key: string]: string } {
    return {
      diskInfo: 'DiskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode extends $tea.Model {
  status?: string;
  supportIpV6?: boolean;
  innerIp?: string;
  expiredTime?: string;
  createTime?: string;
  zoneId?: string;
  instanceId?: string;
  emrExpiredTime?: string;
  pubIp?: string;
  daemonInfos?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos;
  diskInfos?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      supportIpV6: 'SupportIpV6',
      innerIp: 'InnerIp',
      expiredTime: 'ExpiredTime',
      createTime: 'CreateTime',
      zoneId: 'ZoneId',
      instanceId: 'InstanceId',
      emrExpiredTime: 'EmrExpiredTime',
      pubIp: 'PubIp',
      daemonInfos: 'DaemonInfos',
      diskInfos: 'DiskInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      supportIpV6: 'boolean',
      innerIp: 'string',
      expiredTime: 'string',
      createTime: 'string',
      zoneId: 'string',
      instanceId: 'string',
      emrExpiredTime: 'string',
      pubIp: 'string',
      daemonInfos: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos,
      diskInfos: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes extends $tea.Model {
  node?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup extends $tea.Model {
  lockType?: string;
  hostGroupSubType?: string;
  hostGroupType?: string;
  hostGroupChangeStatus?: string;
  chargeType?: string;
  lockReason?: string;
  diskType?: string;
  hostGroupId?: string;
  bandWidth?: string;
  instanceType?: string;
  diskCount?: number;
  period?: string;
  diskCapacity?: number;
  cpuCore?: number;
  memoryCapacity?: number;
  nodeCount?: number;
  hostGroupChangeType?: string;
  hostGroupName?: string;
  nodes?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes;
  static names(): { [key: string]: string } {
    return {
      lockType: 'LockType',
      hostGroupSubType: 'HostGroupSubType',
      hostGroupType: 'HostGroupType',
      hostGroupChangeStatus: 'HostGroupChangeStatus',
      chargeType: 'ChargeType',
      lockReason: 'LockReason',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      bandWidth: 'BandWidth',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      cpuCore: 'CpuCore',
      memoryCapacity: 'MemoryCapacity',
      nodeCount: 'NodeCount',
      hostGroupChangeType: 'HostGroupChangeType',
      hostGroupName: 'HostGroupName',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockType: 'string',
      hostGroupSubType: 'string',
      hostGroupType: 'string',
      hostGroupChangeStatus: 'string',
      chargeType: 'string',
      lockReason: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      bandWidth: 'string',
      instanceType: 'string',
      diskCount: 'number',
      period: 'string',
      diskCapacity: 'number',
      cpuCore: 'number',
      memoryCapacity: 'number',
      nodeCount: 'number',
      hostGroupChangeType: 'string',
      hostGroupName: 'string',
      nodes: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupList extends $tea.Model {
  hostGroup?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup[];
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction extends $tea.Model {
  path?: string;
  name?: string;
  arg?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      name: 'Name',
      arg: 'Arg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      name: 'string',
      arg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo extends $tea.Model {
  clusterName?: string;
  status?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      status: 'Status',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      status: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo extends $tea.Model {
  hpName?: string;
  hpBizId?: string;
  static names(): { [key: string]: string } {
    return {
      hpName: 'HpName',
      hpBizId: 'HpBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpName: 'string',
      hpBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoFailReason extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware extends $tea.Model {
  displayName?: string;
  onlyDisplay?: boolean;
  startTpe?: number;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      onlyDisplay: 'OnlyDisplay',
      startTpe: 'StartTpe',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      onlyDisplay: 'boolean',
      startTpe: 'number',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares extends $tea.Model {
  software?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware[];
  static names(): { [key: string]: string } {
    return {
      software: 'Software',
    };
  }

  static types(): { [key: string]: any } {
    return {
      software: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo extends $tea.Model {
  clusterType?: string;
  emrVer?: string;
  softwares?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      emrVer: 'EmrVer',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      emrVer: 'string',
      softwares: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink extends $tea.Model {
  port?: string;
  link?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      link: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks extends $tea.Model {
  ZKLink?: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink[];
  static names(): { [key: string]: string } {
    return {
      ZKLink: 'ZKLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ZKLink: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfo extends $tea.Model {
  ZKLinks?: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks;
  static names(): { [key: string]: string } {
    return {
      ZKLinks: 'ZKLinks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ZKLinks: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfo extends $tea.Model {
  vpcId?: string;
  logEnable?: boolean;
  taskNodeInService?: number;
  autoScalingSpotWithLimitAllowed?: boolean;
  userId?: string;
  chargeType?: string;
  stopTime?: number;
  depositType?: string;
  createType?: string;
  relateClusterId?: string;
  securityGroupName?: string;
  resizeDiskEnable?: boolean;
  imageId?: string;
  userDefinedEmrEcsRole?: string;
  metaStoreType?: string;
  startTime?: number;
  configurations?: string;
  logPath?: string;
  autoScalingVersion?: string;
  netType?: string;
  zoneId?: string;
  createResource?: string;
  status?: string;
  runningTime?: number;
  highAvailabilityEnable?: boolean;
  securityGroupId?: string;
  autoScalingAllowed?: boolean;
  masterNodeInService?: number;
  autoScalingEnable?: boolean;
  autoScalingWithGraceAllowed?: boolean;
  coreNodeInService?: number;
  showSoftwareInterface?: boolean;
  k8sClusterId?: string;
  autoScalingByLoadAllowed?: boolean;
  localMetaDb?: boolean;
  instanceGeneration?: string;
  name?: string;
  easEnable?: boolean;
  machineType?: string;
  masterNodeTotal?: number;
  regionId?: string;
  period?: number;
  extraInfo?: string;
  ioOptimized?: boolean;
  vSwitchId?: string;
  expiredTime?: number;
  coreNodeTotal?: number;
  gatewayClusterIds?: string;
  bootstrapFailed?: boolean;
  id?: string;
  taskNodeTotal?: number;
  gatewayClusterInfoList?: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList;
  hostGroupList?: DescribeClusterV2ResponseBodyClusterInfoHostGroupList;
  bootstrapActionList?: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList;
  relateClusterInfo?: DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo;
  hostPoolInfo?: DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo;
  failReason?: DescribeClusterV2ResponseBodyClusterInfoFailReason;
  softwareInfo?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo;
  accessInfo?: DescribeClusterV2ResponseBodyClusterInfoAccessInfo;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      logEnable: 'LogEnable',
      taskNodeInService: 'TaskNodeInService',
      autoScalingSpotWithLimitAllowed: 'AutoScalingSpotWithLimitAllowed',
      userId: 'UserId',
      chargeType: 'ChargeType',
      stopTime: 'StopTime',
      depositType: 'DepositType',
      createType: 'CreateType',
      relateClusterId: 'RelateClusterId',
      securityGroupName: 'SecurityGroupName',
      resizeDiskEnable: 'ResizeDiskEnable',
      imageId: 'ImageId',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      metaStoreType: 'MetaStoreType',
      startTime: 'StartTime',
      configurations: 'Configurations',
      logPath: 'LogPath',
      autoScalingVersion: 'AutoScalingVersion',
      netType: 'NetType',
      zoneId: 'ZoneId',
      createResource: 'CreateResource',
      status: 'Status',
      runningTime: 'RunningTime',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      securityGroupId: 'SecurityGroupId',
      autoScalingAllowed: 'AutoScalingAllowed',
      masterNodeInService: 'MasterNodeInService',
      autoScalingEnable: 'AutoScalingEnable',
      autoScalingWithGraceAllowed: 'AutoScalingWithGraceAllowed',
      coreNodeInService: 'CoreNodeInService',
      showSoftwareInterface: 'ShowSoftwareInterface',
      k8sClusterId: 'K8sClusterId',
      autoScalingByLoadAllowed: 'AutoScalingByLoadAllowed',
      localMetaDb: 'LocalMetaDb',
      instanceGeneration: 'InstanceGeneration',
      name: 'Name',
      easEnable: 'EasEnable',
      machineType: 'MachineType',
      masterNodeTotal: 'MasterNodeTotal',
      regionId: 'RegionId',
      period: 'Period',
      extraInfo: 'ExtraInfo',
      ioOptimized: 'IoOptimized',
      vSwitchId: 'VSwitchId',
      expiredTime: 'ExpiredTime',
      coreNodeTotal: 'CoreNodeTotal',
      gatewayClusterIds: 'GatewayClusterIds',
      bootstrapFailed: 'BootstrapFailed',
      id: 'Id',
      taskNodeTotal: 'TaskNodeTotal',
      gatewayClusterInfoList: 'GatewayClusterInfoList',
      hostGroupList: 'HostGroupList',
      bootstrapActionList: 'BootstrapActionList',
      relateClusterInfo: 'RelateClusterInfo',
      hostPoolInfo: 'HostPoolInfo',
      failReason: 'FailReason',
      softwareInfo: 'SoftwareInfo',
      accessInfo: 'AccessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      logEnable: 'boolean',
      taskNodeInService: 'number',
      autoScalingSpotWithLimitAllowed: 'boolean',
      userId: 'string',
      chargeType: 'string',
      stopTime: 'number',
      depositType: 'string',
      createType: 'string',
      relateClusterId: 'string',
      securityGroupName: 'string',
      resizeDiskEnable: 'boolean',
      imageId: 'string',
      userDefinedEmrEcsRole: 'string',
      metaStoreType: 'string',
      startTime: 'number',
      configurations: 'string',
      logPath: 'string',
      autoScalingVersion: 'string',
      netType: 'string',
      zoneId: 'string',
      createResource: 'string',
      status: 'string',
      runningTime: 'number',
      highAvailabilityEnable: 'boolean',
      securityGroupId: 'string',
      autoScalingAllowed: 'boolean',
      masterNodeInService: 'number',
      autoScalingEnable: 'boolean',
      autoScalingWithGraceAllowed: 'boolean',
      coreNodeInService: 'number',
      showSoftwareInterface: 'boolean',
      k8sClusterId: 'string',
      autoScalingByLoadAllowed: 'boolean',
      localMetaDb: 'boolean',
      instanceGeneration: 'string',
      name: 'string',
      easEnable: 'boolean',
      machineType: 'string',
      masterNodeTotal: 'number',
      regionId: 'string',
      period: 'number',
      extraInfo: 'string',
      ioOptimized: 'boolean',
      vSwitchId: 'string',
      expiredTime: 'number',
      coreNodeTotal: 'number',
      gatewayClusterIds: 'string',
      bootstrapFailed: 'boolean',
      id: 'string',
      taskNodeTotal: 'number',
      gatewayClusterInfoList: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList,
      hostGroupList: DescribeClusterV2ResponseBodyClusterInfoHostGroupList,
      bootstrapActionList: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList,
      relateClusterInfo: DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo,
      hostPoolInfo: DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo,
      failReason: DescribeClusterV2ResponseBodyClusterInfoFailReason,
      softwareInfo: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo,
      accessInfo: DescribeClusterV2ResponseBodyClusterInfoAccessInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBodyParentFlowListParentFlow extends $tea.Model {
  parentFlowName?: string;
  parentFlowId?: string;
  projectName?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      parentFlowName: 'ParentFlowName',
      parentFlowId: 'ParentFlowId',
      projectName: 'ProjectName',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFlowName: 'string',
      parentFlowId: 'string',
      projectName: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBodyParentFlowList extends $tea.Model {
  parentFlow?: DescribeFlowResponseBodyParentFlowListParentFlow[];
  static names(): { [key: string]: string } {
    return {
      parentFlow: 'ParentFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFlow: { 'type': 'array', 'itemType': DescribeFlowResponseBodyParentFlowListParentFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
  targetCount?: number;
  currentCount?: number;
  orderIdList?: string;
  static names(): { [key: string]: string } {
    return {
      targetCount: 'TargetCount',
      currentCount: 'CurrentCount',
      orderIdList: 'OrderIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetCount: 'number',
      currentCount: 'number',
      orderIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClustersClusterInfoFailReason extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClustersClusterInfo extends $tea.Model {
  type?: string;
  status?: string;
  runningTime?: number;
  orderList?: string;
  createTime?: number;
  chargeType?: string;
  period?: number;
  k8sClusterId?: string;
  expiredTime?: number;
  hasUncompletedOrder?: boolean;
  name?: string;
  id?: string;
  createResource?: string;
  orderTaskInfo?: ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo;
  failReason?: ListFlowClusterResponseBodyClustersClusterInfoFailReason;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      runningTime: 'RunningTime',
      orderList: 'OrderList',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      period: 'Period',
      k8sClusterId: 'K8sClusterId',
      expiredTime: 'ExpiredTime',
      hasUncompletedOrder: 'HasUncompletedOrder',
      name: 'Name',
      id: 'Id',
      createResource: 'CreateResource',
      orderTaskInfo: 'OrderTaskInfo',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      runningTime: 'number',
      orderList: 'string',
      createTime: 'number',
      chargeType: 'string',
      period: 'number',
      k8sClusterId: 'string',
      expiredTime: 'number',
      hasUncompletedOrder: 'boolean',
      name: 'string',
      id: 'string',
      createResource: 'string',
      orderTaskInfo: ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo,
      failReason: ListFlowClusterResponseBodyClustersClusterInfoFailReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListFlowClusterResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListFlowClusterResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLdapUsersResponseBodyUserListUser extends $tea.Model {
  userCreateTime?: number;
  groupName?: string;
  userId?: string;
  note?: string;
  keytabHex?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userCreateTime: 'UserCreateTime',
      groupName: 'GroupName',
      userId: 'UserId',
      note: 'Note',
      keytabHex: 'KeytabHex',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCreateTime: 'number',
      groupName: 'string',
      userId: 'string',
      note: 'string',
      keytabHex: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLdapUsersResponseBodyUserList extends $tea.Model {
  user?: ListLdapUsersResponseBodyUserListUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListLdapUsersResponseBodyUserListUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow extends $tea.Model {
  scheduleKey?: string;
  bizDate?: number;
  dependencyInstanceId?: string;
  dependencyFlowId?: string;
  meet?: boolean;
  flowInstanceId?: string;
  projectId?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleKey: 'ScheduleKey',
      bizDate: 'BizDate',
      dependencyInstanceId: 'DependencyInstanceId',
      dependencyFlowId: 'DependencyFlowId',
      meet: 'Meet',
      flowInstanceId: 'FlowInstanceId',
      projectId: 'ProjectId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleKey: 'string',
      bizDate: 'number',
      dependencyInstanceId: 'string',
      dependencyFlowId: 'string',
      meet: 'boolean',
      flowInstanceId: 'string',
      projectId: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyDependencyFlowList extends $tea.Model {
  parentFlow?: DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow[];
  static names(): { [key: string]: string } {
    return {
      parentFlow: 'ParentFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFlow: { 'type': 'array', 'itemType': DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance extends $tea.Model {
  status?: string;
  type?: string;
  failAct?: string;
  projectId?: string;
  retryInterval?: string;
  jobType?: string;
  hostName?: string;
  externalInfo?: string;
  gmtModified?: number;
  retries?: number;
  endTime?: number;
  startTime?: number;
  externalStatus?: string;
  jobName?: string;
  nodeName?: string;
  jobId?: string;
  gmtCreate?: number;
  externalId?: string;
  duration?: number;
  id?: string;
  pending?: boolean;
  clusterId?: string;
  maxRetry?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      failAct: 'FailAct',
      projectId: 'ProjectId',
      retryInterval: 'RetryInterval',
      jobType: 'JobType',
      hostName: 'HostName',
      externalInfo: 'ExternalInfo',
      gmtModified: 'GmtModified',
      retries: 'Retries',
      endTime: 'EndTime',
      startTime: 'StartTime',
      externalStatus: 'ExternalStatus',
      jobName: 'JobName',
      nodeName: 'NodeName',
      jobId: 'JobId',
      gmtCreate: 'GmtCreate',
      externalId: 'ExternalId',
      duration: 'Duration',
      id: 'Id',
      pending: 'Pending',
      clusterId: 'ClusterId',
      maxRetry: 'MaxRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      failAct: 'string',
      projectId: 'string',
      retryInterval: 'string',
      jobType: 'string',
      hostName: 'string',
      externalInfo: 'string',
      gmtModified: 'number',
      retries: 'number',
      endTime: 'number',
      startTime: 'number',
      externalStatus: 'string',
      jobName: 'string',
      nodeName: 'string',
      jobId: 'string',
      gmtCreate: 'number',
      externalId: 'string',
      duration: 'number',
      id: 'string',
      pending: 'boolean',
      clusterId: 'string',
      maxRetry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyNodeInstance extends $tea.Model {
  nodeInstance?: DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeInstance: 'NodeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstance: { 'type': 'array', 'itemType': DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserRequestUser extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesResponseBodyItemsItem extends $tea.Model {
  type?: string;
  createTime?: number;
  userId?: string;
  sourceType?: string;
  bizId?: string;
  scope?: string;
  libraryVersion?: string;
  name?: string;
  properties?: string;
  sourceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      createTime: 'CreateTime',
      userId: 'UserId',
      sourceType: 'SourceType',
      bizId: 'BizId',
      scope: 'Scope',
      libraryVersion: 'LibraryVersion',
      name: 'Name',
      properties: 'Properties',
      sourceLocation: 'SourceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      createTime: 'number',
      userId: 'string',
      sourceType: 'string',
      bizId: 'string',
      scope: 'string',
      libraryVersion: 'string',
      name: 'string',
      properties: 'string',
      sourceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesResponseBodyItems extends $tea.Model {
  item?: ListLibrariesResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListLibrariesResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBodyJobListJobResourceListResource extends $tea.Model {
  path?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBodyJobListJobResourceList extends $tea.Model {
  resource?: ListFlowJobsResponseBodyJobListJobResourceListResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': ListFlowJobsResponseBodyJobListJobResourceListResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBodyJobListJob extends $tea.Model {
  type?: string;
  failAct?: string;
  customVariables?: string;
  retryInterval?: number;
  envConf?: string;
  paramConf?: string;
  mode?: string;
  gmtModified?: number;
  monitorConf?: string;
  lastInstanceDetail?: string;
  runConf?: string;
  params?: string;
  description?: string;
  gmtCreate?: number;
  categoryId?: string;
  adhoc?: string;
  name?: string;
  id?: string;
  maxRetry?: number;
  alertConf?: string;
  resourceList?: ListFlowJobsResponseBodyJobListJobResourceList;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      failAct: 'FailAct',
      customVariables: 'CustomVariables',
      retryInterval: 'RetryInterval',
      envConf: 'EnvConf',
      paramConf: 'ParamConf',
      mode: 'Mode',
      gmtModified: 'GmtModified',
      monitorConf: 'MonitorConf',
      lastInstanceDetail: 'LastInstanceDetail',
      runConf: 'RunConf',
      params: 'Params',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      categoryId: 'CategoryId',
      adhoc: 'Adhoc',
      name: 'Name',
      id: 'Id',
      maxRetry: 'MaxRetry',
      alertConf: 'AlertConf',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      failAct: 'string',
      customVariables: 'string',
      retryInterval: 'number',
      envConf: 'string',
      paramConf: 'string',
      mode: 'string',
      gmtModified: 'number',
      monitorConf: 'string',
      lastInstanceDetail: 'string',
      runConf: 'string',
      params: 'string',
      description: 'string',
      gmtCreate: 'number',
      categoryId: 'string',
      adhoc: 'string',
      name: 'string',
      id: 'string',
      maxRetry: 'number',
      alertConf: 'string',
      resourceList: ListFlowJobsResponseBodyJobListJobResourceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBodyJobList extends $tea.Model {
  job?: ListFlowJobsResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': ListFlowJobsResponseBodyJobListJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyBusinessLocationsDistrict extends $tea.Model {
  ordering?: string;
  cnName?: string;
  showName?: string;
  districtId?: string;
  enName?: string;
  static names(): { [key: string]: string } {
    return {
      ordering: 'Ordering',
      cnName: 'CnName',
      showName: 'ShowName',
      districtId: 'DistrictId',
      enName: 'EnName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ordering: 'string',
      cnName: 'string',
      showName: 'string',
      districtId: 'string',
      enName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyBusinessLocations extends $tea.Model {
  ordering?: string;
  type?: string;
  showName?: string;
  description?: string;
  enDescription?: string;
  enName?: string;
  cnName?: string;
  name?: string;
  district?: DescribeRegionsResponseBodyBusinessLocationsDistrict;
  static names(): { [key: string]: string } {
    return {
      ordering: 'Ordering',
      type: 'Type',
      showName: 'ShowName',
      description: 'Description',
      enDescription: 'EnDescription',
      enName: 'EnName',
      cnName: 'CnName',
      name: 'Name',
      district: 'District',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ordering: 'string',
      type: 'string',
      showName: 'string',
      description: 'string',
      enDescription: 'string',
      enName: 'string',
      cnName: 'string',
      name: 'string',
      district: DescribeRegionsResponseBodyBusinessLocationsDistrict,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusResponseBodyItemsItem extends $tea.Model {
  status?: string;
  clusterName?: string;
  clusterBizId?: string;
  libraryBizId?: string;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      clusterName: 'ClusterName',
      clusterBizId: 'ClusterBizId',
      libraryBizId: 'LibraryBizId',
      libraryName: 'LibraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      clusterName: 'string',
      clusterBizId: 'string',
      libraryBizId: 'string',
      libraryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusResponseBodyItems extends $tea.Model {
  item?: ListLibraryStatusResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListLibraryStatusResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue extends $tea.Model {
  value?: string;
  description?: string;
  itemName?: string;
  isCustom?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      description: 'Description',
      itemName: 'ItemName',
      isCustom: 'IsCustom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      description: 'string',
      itemName: 'string',
      isCustom: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueList extends $tea.Model {
  configItemValue?: DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue[];
  static names(): { [key: string]: string } {
    return {
      configItemValue: 'ConfigItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemValue: { 'type': 'array', 'itemType': DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValue extends $tea.Model {
  configName?: string;
  scopeId?: number;
  scope?: string;
  allowCustom?: boolean;
  configItemValueList?: DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueList;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      scopeId: 'ScopeId',
      scope: 'Scope',
      allowCustom: 'AllowCustom',
      configItemValueList: 'ConfigItemValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      scopeId: 'number',
      scope: 'string',
      allowCustom: 'boolean',
      configItemValueList: DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigConfigValueList extends $tea.Model {
  configValue?: DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValue[];
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: { 'type': 'array', 'itemType': DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyTypes extends $tea.Model {
  propertyType?: string[];
  static names(): { [key: string]: string } {
    return {
      propertyType: 'PropertyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntriesValueEntryInfo extends $tea.Model {
  value?: string;
  label?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      label: 'Label',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      label: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntries extends $tea.Model {
  valueEntryInfo?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntriesValueEntryInfo[];
  static names(): { [key: string]: string } {
    return {
      valueEntryInfo: 'ValueEntryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueEntryInfo: { 'type': 'array', 'itemType': DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntriesValueEntryInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributes extends $tea.Model {
  type?: string;
  maximum?: string;
  unit?: string;
  hidden?: boolean;
  incrememtStep?: string;
  readOnly?: boolean;
  mimimum?: string;
  entries?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntries;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      maximum: 'Maximum',
      unit: 'Unit',
      hidden: 'Hidden',
      incrememtStep: 'IncrememtStep',
      readOnly: 'ReadOnly',
      mimimum: 'Mimimum',
      entries: 'Entries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      maximum: 'string',
      unit: 'string',
      hidden: 'boolean',
      incrememtStep: 'string',
      readOnly: 'boolean',
      mimimum: 'string',
      entries: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoEffectWay extends $tea.Model {
  effectType?: string;
  invokeServiceName?: string;
  static names(): { [key: string]: string } {
    return {
      effectType: 'EffectType',
      invokeServiceName: 'InvokeServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectType: 'string',
      invokeServiceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfo extends $tea.Model {
  displayName?: string;
  value?: string;
  description?: string;
  component?: string;
  fileName?: string;
  name?: string;
  serviceName?: string;
  propertyTypes?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyTypes;
  propertyValueAttributes?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributes;
  effectWay?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoEffectWay;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      value: 'Value',
      description: 'Description',
      component: 'Component',
      fileName: 'FileName',
      name: 'Name',
      serviceName: 'ServiceName',
      propertyTypes: 'PropertyTypes',
      propertyValueAttributes: 'PropertyValueAttributes',
      effectWay: 'EffectWay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      value: 'string',
      description: 'string',
      component: 'string',
      fileName: 'string',
      name: 'string',
      serviceName: 'string',
      propertyTypes: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyTypes,
      propertyValueAttributes: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributes,
      effectWay: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoEffectWay,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoList extends $tea.Model {
  propertyInfo?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyInfo: 'PropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyInfo: { 'type': 'array', 'itemType': DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfig extends $tea.Model {
  applied?: string;
  comment?: string;
  createTime?: string;
  configVersion?: string;
  author?: string;
  serviceName?: string;
  configValueList?: DescribeClusterServiceConfigResponseBodyConfigConfigValueList;
  propertyInfoList?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoList;
  static names(): { [key: string]: string } {
    return {
      applied: 'Applied',
      comment: 'Comment',
      createTime: 'CreateTime',
      configVersion: 'ConfigVersion',
      author: 'Author',
      serviceName: 'ServiceName',
      configValueList: 'ConfigValueList',
      propertyInfoList: 'PropertyInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applied: 'string',
      comment: 'string',
      createTime: 'string',
      configVersion: 'string',
      author: 'string',
      serviceName: 'string',
      configValueList: DescribeClusterServiceConfigResponseBodyConfigConfigValueList,
      propertyInfoList: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestUserInfo extends $tea.Model {
  password?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestHostComponentInfo extends $tea.Model {
  componentNameList?: string[];
  hostName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      componentNameList: 'ComponentNameList',
      hostName: 'HostName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentNameList: { 'type': 'array', 'itemType': 'string' },
      hostName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestServiceInfo extends $tea.Model {
  serviceName?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestPromotionInfo extends $tea.Model {
  productCode?: string;
  promotionOptionCode?: string;
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      promotionOptionCode: 'string',
      promotionOptionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestHostGroup extends $tea.Model {
  autoRenew?: boolean;
  chargeType?: string;
  clusterId?: string;
  comment?: string;
  createType?: string;
  diskCapacity?: number;
  diskCount?: number;
  diskType?: string;
  gpuDriver?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  hostGroupType?: string;
  instanceType?: string;
  nodeCount?: number;
  period?: number;
  sysDiskCapacity?: number;
  sysDiskType?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      comment: 'Comment',
      createType: 'CreateType',
      diskCapacity: 'DiskCapacity',
      diskCount: 'DiskCount',
      diskType: 'DiskType',
      gpuDriver: 'GpuDriver',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      hostGroupType: 'HostGroupType',
      instanceType: 'InstanceType',
      nodeCount: 'NodeCount',
      period: 'Period',
      sysDiskCapacity: 'SysDiskCapacity',
      sysDiskType: 'SysDiskType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      chargeType: 'string',
      clusterId: 'string',
      comment: 'string',
      createType: 'string',
      diskCapacity: 'number',
      diskCount: 'number',
      diskType: 'string',
      gpuDriver: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      hostGroupType: 'string',
      instanceType: 'string',
      nodeCount: 'number',
      period: 'number',
      sysDiskCapacity: 'number',
      sysDiskType: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestBootstrapAction extends $tea.Model {
  arg?: string;
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      name: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestConfig extends $tea.Model {
  configKey?: string;
  configValue?: string;
  encrypt?: string;
  fileName?: string;
  replace?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      encrypt: 'Encrypt',
      fileName: 'FileName',
      replace: 'Replace',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
      encrypt: 'string',
      fileName: 'string',
      replace: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskListClusterOperationHostTask extends $tea.Model {
  status?: string;
  percentage?: string;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percentage: 'Percentage',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percentage: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskList extends $tea.Model {
  clusterOperationHostTask?: ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskListClusterOperationHostTask[];
  static names(): { [key: string]: string } {
    return {
      clusterOperationHostTask: 'ClusterOperationHostTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterOperationHostTask: { 'type': 'array', 'itemType': ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskListClusterOperationHostTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBodyHostListHostDiskListDisk extends $tea.Model {
  type?: string;
  diskType?: string;
  diskId?: string;
  device?: string;
  diskSize?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      diskType: 'DiskType',
      diskId: 'DiskId',
      device: 'Device',
      diskSize: 'DiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      diskType: 'string',
      diskId: 'string',
      device: 'string',
      diskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBodyHostListHostDiskList extends $tea.Model {
  disk?: ListClusterHostResponseBodyHostListHostDiskListDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': ListClusterHostResponseBodyHostListHostDiskListDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBodyHostListHost extends $tea.Model {
  serialNumber?: string;
  type?: string;
  status?: string;
  privateIp?: string;
  createTime?: string;
  chargeType?: string;
  hostName?: string;
  hostGroupId?: string;
  instanceType?: string;
  hostInstanceId?: string;
  supportIpV6?: boolean;
  cpu?: number;
  expiredTime?: number;
  zoneId?: string;
  publicIp?: string;
  instanceStatus?: string;
  memory?: number;
  emrExpiredTime?: string;
  role?: string;
  diskList?: ListClusterHostResponseBodyHostListHostDiskList;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      type: 'Type',
      status: 'Status',
      privateIp: 'PrivateIp',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      hostName: 'HostName',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      hostInstanceId: 'HostInstanceId',
      supportIpV6: 'SupportIpV6',
      cpu: 'Cpu',
      expiredTime: 'ExpiredTime',
      zoneId: 'ZoneId',
      publicIp: 'PublicIp',
      instanceStatus: 'InstanceStatus',
      memory: 'Memory',
      emrExpiredTime: 'EmrExpiredTime',
      role: 'Role',
      diskList: 'DiskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      type: 'string',
      status: 'string',
      privateIp: 'string',
      createTime: 'string',
      chargeType: 'string',
      hostName: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      hostInstanceId: 'string',
      supportIpV6: 'boolean',
      cpu: 'number',
      expiredTime: 'number',
      zoneId: 'string',
      publicIp: 'string',
      instanceStatus: 'string',
      memory: 'number',
      emrExpiredTime: 'string',
      role: 'string',
      diskList: ListClusterHostResponseBodyHostListHostDiskList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBodyHostList extends $tea.Model {
  host?: ListClusterHostResponseBodyHostListHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': ListClusterHostResponseBodyHostListHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoServiceActionListServiceAction extends $tea.Model {
  displayName?: string;
  actionName?: string;
  componentName?: string;
  serviceName?: string;
  command?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      actionName: 'ActionName',
      componentName: 'ComponentName',
      serviceName: 'ServiceName',
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      actionName: 'string',
      componentName: 'string',
      serviceName: 'string',
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoServiceActionList extends $tea.Model {
  serviceAction?: DescribeClusterServiceResponseBodyServiceInfoServiceActionListServiceAction[];
  static names(): { [key: string]: string } {
    return {
      serviceAction: 'ServiceAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAction: { 'type': 'array', 'itemType': DescribeClusterServiceResponseBodyServiceInfoServiceActionListServiceAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryListClusterServiceSummary extends $tea.Model {
  key?: string;
  displayName?: string;
  status?: string;
  type?: string;
  value?: string;
  desiredStoppedValue?: number;
  alertInfo?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      displayName: 'DisplayName',
      status: 'Status',
      type: 'Type',
      value: 'Value',
      desiredStoppedValue: 'DesiredStoppedValue',
      alertInfo: 'AlertInfo',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      displayName: 'string',
      status: 'string',
      type: 'string',
      value: 'string',
      desiredStoppedValue: 'number',
      alertInfo: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryList extends $tea.Model {
  clusterServiceSummary?: DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryListClusterServiceSummary[];
  static names(): { [key: string]: string } {
    return {
      clusterServiceSummary: 'ClusterServiceSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterServiceSummary: { 'type': 'array', 'itemType': DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryListClusterServiceSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoNeedRestartHostIdList extends $tea.Model {
  service?: string[];
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoNeedRestartComponentNameList extends $tea.Model {
  service?: string[];
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfo extends $tea.Model {
  needRestartInfo?: string;
  serviceVersion?: string;
  serviceStatus?: string;
  serviceName?: string;
  needRestartNum?: number;
  serviceActionList?: DescribeClusterServiceResponseBodyServiceInfoServiceActionList;
  clusterServiceSummaryList?: DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryList;
  needRestartHostIdList?: DescribeClusterServiceResponseBodyServiceInfoNeedRestartHostIdList;
  needRestartComponentNameList?: DescribeClusterServiceResponseBodyServiceInfoNeedRestartComponentNameList;
  static names(): { [key: string]: string } {
    return {
      needRestartInfo: 'NeedRestartInfo',
      serviceVersion: 'ServiceVersion',
      serviceStatus: 'ServiceStatus',
      serviceName: 'ServiceName',
      needRestartNum: 'NeedRestartNum',
      serviceActionList: 'ServiceActionList',
      clusterServiceSummaryList: 'ClusterServiceSummaryList',
      needRestartHostIdList: 'NeedRestartHostIdList',
      needRestartComponentNameList: 'NeedRestartComponentNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRestartInfo: 'string',
      serviceVersion: 'string',
      serviceStatus: 'string',
      serviceName: 'string',
      needRestartNum: 'number',
      serviceActionList: DescribeClusterServiceResponseBodyServiceInfoServiceActionList,
      clusterServiceSummaryList: DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryList,
      needRestartHostIdList: DescribeClusterServiceResponseBodyServiceInfoNeedRestartHostIdList,
      needRestartComponentNameList: DescribeClusterServiceResponseBodyServiceInfoNeedRestartComponentNameList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsResponseBodyProjectsProject extends $tea.Model {
  description?: string;
  userId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      userId: 'UserId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      userId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsResponseBodyProjects extends $tea.Model {
  project?: ListFlowProjectsResponseBodyProjectsProject[];
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: { 'type': 'array', 'itemType': ListFlowProjectsResponseBodyProjectsProject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBodyUsersUser extends $tea.Model {
  projectId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  userName?: string;
  accountUserId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      userName: 'UserName',
      accountUserId: 'AccountUserId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      userName: 'string',
      accountUserId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBodyUsers extends $tea.Model {
  user?: ListFlowProjectUserResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListFlowProjectUserResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBodyFlowFlow extends $tea.Model {
  type?: string;
  status?: string;
  alertUserGroupBizId?: string;
  periodic?: boolean;
  projectId?: string;
  hostName?: string;
  gmtModified?: number;
  description?: string;
  startSchedule?: number;
  createCluster?: boolean;
  endSchedule?: number;
  graph?: string;
  gmtCreate?: number;
  alertDingDingGroupBizId?: string;
  cronExpr?: string;
  categoryId?: string;
  name?: string;
  id?: string;
  clusterId?: string;
  alertConf?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      periodic: 'Periodic',
      projectId: 'ProjectId',
      hostName: 'HostName',
      gmtModified: 'GmtModified',
      description: 'Description',
      startSchedule: 'StartSchedule',
      createCluster: 'CreateCluster',
      endSchedule: 'EndSchedule',
      graph: 'Graph',
      gmtCreate: 'GmtCreate',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      cronExpr: 'CronExpr',
      categoryId: 'CategoryId',
      name: 'Name',
      id: 'Id',
      clusterId: 'ClusterId',
      alertConf: 'AlertConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      alertUserGroupBizId: 'string',
      periodic: 'boolean',
      projectId: 'string',
      hostName: 'string',
      gmtModified: 'number',
      description: 'string',
      startSchedule: 'number',
      createCluster: 'boolean',
      endSchedule: 'number',
      graph: 'string',
      gmtCreate: 'number',
      alertDingDingGroupBizId: 'string',
      cronExpr: 'string',
      categoryId: 'string',
      name: 'string',
      id: 'string',
      clusterId: 'string',
      alertConf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBodyFlow extends $tea.Model {
  flow?: ListFlowsResponseBodyFlowFlow[];
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: { 'type': 'array', 'itemType': ListFlowsResponseBodyFlowFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-qingdao': "ddi.cn-qingdao.aliyuncs.com",
      'cn-chengdu': "ddi.cn-chengdu.aliyuncs.com",
      'cn-zhangjiakou': "ddi.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "ddi.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "ddi.cn-hongkong.aliyuncs.com",
      'ap-southeast-2': "ddi.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "ddi.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "ddi.ap-southeast-5.aliyuncs.com",
      'ap-northeast-1': "ddi.ap-northeast-1.aliyuncs.com",
      'eu-west-1': "ddi.eu-west-1.aliyuncs.com",
      'us-east-1': "ddi.us-east-1.aliyuncs.com",
      'eu-central-1': "ddi.eu-central-1.aliyuncs.com",
      'me-east-1': "ddi.me-east-1.aliyuncs.com",
      'ap-south-1': "ddi.ap-south-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createFlowWithOptions(request: CreateFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowResponse>(await this.doRPCRequest("CreateFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowResponse({}));
  }

  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async modifyFlowProjectWithOptions(request: ModifyFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowProjectResponse>(await this.doRPCRequest("ModifyFlowProject", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowProjectResponse({}));
  }

  async modifyFlowProject(request: ModifyFlowProjectRequest): Promise<ModifyFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowProjectWithOptions(request, runtime);
  }

  async queryKnoxUserPasswordWithOptions(request: QueryKnoxUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<QueryKnoxUserPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryKnoxUserPasswordResponse>(await this.doRPCRequest("QueryKnoxUserPassword", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new QueryKnoxUserPasswordResponse({}));
  }

  async queryKnoxUserPassword(request: QueryKnoxUserPasswordRequest): Promise<QueryKnoxUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryKnoxUserPasswordWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceLauncherLogWithOptions(request: DescribeFlowNodeInstanceLauncherLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceLauncherLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowNodeInstanceLauncherLogResponse>(await this.doRPCRequest("DescribeFlowNodeInstanceLauncherLog", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowNodeInstanceLauncherLogResponse({}));
  }

  async describeFlowNodeInstanceLauncherLog(request: DescribeFlowNodeInstanceLauncherLogRequest): Promise<DescribeFlowNodeInstanceLauncherLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceLauncherLogWithOptions(request, runtime);
  }

  async listFlowWithOptions(request: ListFlowRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowResponse>(await this.doRPCRequest("ListFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowResponse({}));
  }

  async listFlow(request: ListFlowRequest): Promise<ListFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async listFlowClusterHostWithOptions(request: ListFlowClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowClusterHostResponse>(await this.doRPCRequest("ListFlowClusterHost", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowClusterHostResponse({}));
  }

  async listFlowClusterHost(request: ListFlowClusterHostRequest): Promise<ListFlowClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterHostWithOptions(request, runtime);
  }

  async listClusterOperationWithOptions(request: ListClusterOperationRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterOperationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterOperationResponse>(await this.doRPCRequest("ListClusterOperation", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterOperationResponse({}));
  }

  async listClusterOperation(request: ListClusterOperationRequest): Promise<ListClusterOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterOperationWithOptions(request, runtime);
  }

  async listFlowEntitySnapshotWithOptions(request: ListFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowEntitySnapshotResponse>(await this.doRPCRequest("ListFlowEntitySnapshot", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowEntitySnapshotResponse({}));
  }

  async listFlowEntitySnapshot(request: ListFlowEntitySnapshotRequest): Promise<ListFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowEntitySnapshotWithOptions(request, runtime);
  }

  async deleteClusterTemplateWithOptions(request: DeleteClusterTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClusterTemplateResponse>(await this.doRPCRequest("DeleteClusterTemplate", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClusterTemplateResponse({}));
  }

  async deleteClusterTemplate(request: DeleteClusterTemplateRequest): Promise<DeleteClusterTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterTemplateWithOptions(request, runtime);
  }

  async cancelOrderWithOptions(request: CancelOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOrderResponse>(await this.doRPCRequest("CancelOrder", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOrderResponse({}));
  }

  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  async cloneFlowJobWithOptions(request: CloneFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<CloneFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloneFlowJobResponse>(await this.doRPCRequest("CloneFlowJob", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CloneFlowJobResponse({}));
  }

  async cloneFlowJob(request: CloneFlowJobRequest): Promise<CloneFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneFlowJobWithOptions(request, runtime);
  }

  async startFlowWithOptions(request: StartFlowRequest, runtime: $Util.RuntimeOptions): Promise<StartFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartFlowResponse>(await this.doRPCRequest("StartFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new StartFlowResponse({}));
  }

  async startFlow(request: StartFlowRequest): Promise<StartFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startFlowWithOptions(request, runtime);
  }

  async createFlowJobWithOptions(request: CreateFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowJobResponse>(await this.doRPCRequest("CreateFlowJob", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowJobResponse({}));
  }

  async createFlowJob(request: CreateFlowJobRequest): Promise<CreateFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowJobWithOptions(request, runtime);
  }

  async deleteFlowCategoryWithOptions(request: DeleteFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowCategoryResponse>(await this.doRPCRequest("DeleteFlowCategory", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowCategoryResponse({}));
  }

  async deleteFlowCategory(request: DeleteFlowCategoryRequest): Promise<DeleteFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowCategoryWithOptions(request, runtime);
  }

  async deleteFlowEditLockWithOptions(request: DeleteFlowEditLockRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowEditLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowEditLockResponse>(await this.doRPCRequest("DeleteFlowEditLock", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowEditLockResponse({}));
  }

  async deleteFlowEditLock(request: DeleteFlowEditLockRequest): Promise<DeleteFlowEditLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowEditLockWithOptions(request, runtime);
  }

  async resizeClusterWithOptions(request: ResizeClusterRequest, runtime: $Util.RuntimeOptions): Promise<ResizeClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResizeClusterResponse>(await this.doRPCRequest("ResizeCluster", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ResizeClusterResponse({}));
  }

  async resizeCluster(request: ResizeClusterRequest): Promise<ResizeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeClusterWithOptions(request, runtime);
  }

  async describeMetaTablePreviewTaskWithOptions(request: DescribeMetaTablePreviewTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetaTablePreviewTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetaTablePreviewTaskResponse>(await this.doRPCRequest("DescribeMetaTablePreviewTask", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetaTablePreviewTaskResponse({}));
  }

  async describeMetaTablePreviewTask(request: DescribeMetaTablePreviewTaskRequest): Promise<DescribeMetaTablePreviewTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetaTablePreviewTaskWithOptions(request, runtime);
  }

  async listClusterServiceConfigHistoryWithOptions(request: ListClusterServiceConfigHistoryRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterServiceConfigHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterServiceConfigHistoryResponse>(await this.doRPCRequest("ListClusterServiceConfigHistory", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterServiceConfigHistoryResponse({}));
  }

  async listClusterServiceConfigHistory(request: ListClusterServiceConfigHistoryRequest): Promise<ListClusterServiceConfigHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterServiceConfigHistoryWithOptions(request, runtime);
  }

  async modifyScalingConfigItemWithOptions(request: ModifyScalingConfigItemRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingConfigItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingConfigItemResponse>(await this.doRPCRequest("ModifyScalingConfigItem", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingConfigItemResponse({}));
  }

  async modifyScalingConfigItem(request: ModifyScalingConfigItemRequest): Promise<ModifyScalingConfigItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingConfigItemWithOptions(request, runtime);
  }

  async listFlowClusterAllWithOptions(request: ListFlowClusterAllRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterAllResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowClusterAllResponse>(await this.doRPCRequest("ListFlowClusterAll", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowClusterAllResponse({}));
  }

  async listFlowClusterAll(request: ListFlowClusterAllRequest): Promise<ListFlowClusterAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterAllWithOptions(request, runtime);
  }

  async describeScalingGroupWithOptions(request: DescribeScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingGroupResponse>(await this.doRPCRequest("DescribeScalingGroup", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingGroupResponse({}));
  }

  async describeScalingGroup(request: DescribeScalingGroupRequest): Promise<DescribeScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingGroupWithOptions(request, runtime);
  }

  async listScalingGroupWithOptions(request: ListScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScalingGroupResponse>(await this.doRPCRequest("ListScalingGroup", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListScalingGroupResponse({}));
  }

  async listScalingGroup(request: ListScalingGroupRequest): Promise<ListScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScalingGroupWithOptions(request, runtime);
  }

  async modifyFlowCategoryWithOptions(request: ModifyFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowCategoryResponse>(await this.doRPCRequest("ModifyFlowCategory", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowCategoryResponse({}));
  }

  async modifyFlowCategory(request: ModifyFlowCategoryRequest): Promise<ModifyFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowCategoryWithOptions(request, runtime);
  }

  async modifyClusterServiceConfigWithOptions(request: ModifyClusterServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterServiceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterServiceConfigResponse>(await this.doRPCRequest("ModifyClusterServiceConfig", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterServiceConfigResponse({}));
  }

  async modifyClusterServiceConfig(request: ModifyClusterServiceConfigRequest): Promise<ModifyClusterServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterServiceConfigWithOptions(request, runtime);
  }

  async cloneFlowWithOptions(request: CloneFlowRequest, runtime: $Util.RuntimeOptions): Promise<CloneFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloneFlowResponse>(await this.doRPCRequest("CloneFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CloneFlowResponse({}));
  }

  async cloneFlow(request: CloneFlowRequest): Promise<CloneFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneFlowWithOptions(request, runtime);
  }

  async createClusterTemplateWithOptions(request: CreateClusterTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterTemplateResponse>(await this.doRPCRequest("CreateClusterTemplate", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterTemplateResponse({}));
  }

  async createClusterTemplate(request: CreateClusterTemplateRequest): Promise<CreateClusterTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterTemplateWithOptions(request, runtime);
  }

  async updateLibraryInstallTaskStatusWithOptions(request: UpdateLibraryInstallTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLibraryInstallTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLibraryInstallTaskStatusResponse>(await this.doRPCRequest("UpdateLibraryInstallTaskStatus", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLibraryInstallTaskStatusResponse({}));
  }

  async updateLibraryInstallTaskStatus(request: UpdateLibraryInstallTaskStatusRequest): Promise<UpdateLibraryInstallTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLibraryInstallTaskStatusWithOptions(request, runtime);
  }

  async listScalingConfigItemWithOptions(request: ListScalingConfigItemRequest, runtime: $Util.RuntimeOptions): Promise<ListScalingConfigItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScalingConfigItemResponse>(await this.doRPCRequest("ListScalingConfigItem", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListScalingConfigItemResponse({}));
  }

  async listScalingConfigItem(request: ListScalingConfigItemRequest): Promise<ListScalingConfigItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScalingConfigItemWithOptions(request, runtime);
  }

  async listFlowInstanceWithOptions(request: ListFlowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowInstanceResponse>(await this.doRPCRequest("ListFlowInstance", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowInstanceResponse({}));
  }

  async listFlowInstance(request: ListFlowInstanceRequest): Promise<ListFlowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowInstanceWithOptions(request, runtime);
  }

  async describeScalingMetricsWithOptions(request: DescribeScalingMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingMetricsResponse>(await this.doRPCRequest("DescribeScalingMetrics", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingMetricsResponse({}));
  }

  async describeScalingMetrics(request: DescribeScalingMetricsRequest): Promise<DescribeScalingMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingMetricsWithOptions(request, runtime);
  }

  async untagResourcesSystemTagsWithOptions(request: UntagResourcesSystemTagsRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesSystemTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesSystemTagsResponse>(await this.doRPCRequest("UntagResourcesSystemTags", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesSystemTagsResponse({}));
  }

  async untagResourcesSystemTags(request: UntagResourcesSystemTagsRequest): Promise<UntagResourcesSystemTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesSystemTagsWithOptions(request, runtime);
  }

  async describeFlowProjectWithOptions(request: DescribeFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowProjectResponse>(await this.doRPCRequest("DescribeFlowProject", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowProjectResponse({}));
  }

  async describeFlowProject(request: DescribeFlowProjectRequest): Promise<DescribeFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowProjectWithOptions(request, runtime);
  }

  async deleteSecurityWhiteListWithOptions(request: DeleteSecurityWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSecurityWhiteListResponse>(await this.doRPCRequest("DeleteSecurityWhiteList", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSecurityWhiteListResponse({}));
  }

  async deleteSecurityWhiteList(request: DeleteSecurityWhiteListRequest): Promise<DeleteSecurityWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityWhiteListWithOptions(request, runtime);
  }

  async listScalingActivityWithOptions(request: ListScalingActivityRequest, runtime: $Util.RuntimeOptions): Promise<ListScalingActivityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScalingActivityResponse>(await this.doRPCRequest("ListScalingActivity", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListScalingActivityResponse({}));
  }

  async listScalingActivity(request: ListScalingActivityRequest): Promise<ListScalingActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScalingActivityWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListTagValuesResponse>(await this.doRPCRequest("ListTagValues", "2020-06-17", "HTTPS", "GET", "AK", "json", req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async listClusterInstalledServiceWithOptions(request: ListClusterInstalledServiceRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterInstalledServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterInstalledServiceResponse>(await this.doRPCRequest("ListClusterInstalledService", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterInstalledServiceResponse({}));
  }

  async listClusterInstalledService(request: ListClusterInstalledServiceRequest): Promise<ListClusterInstalledServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterInstalledServiceWithOptions(request, runtime);
  }

  async runClusterServiceActionWithOptions(request: RunClusterServiceActionRequest, runtime: $Util.RuntimeOptions): Promise<RunClusterServiceActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunClusterServiceActionResponse>(await this.doRPCRequest("RunClusterServiceAction", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new RunClusterServiceActionResponse({}));
  }

  async runClusterServiceAction(request: RunClusterServiceActionRequest): Promise<RunClusterServiceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runClusterServiceActionWithOptions(request, runtime);
  }

  async suspendFlowWithOptions(request: SuspendFlowRequest, runtime: $Util.RuntimeOptions): Promise<SuspendFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendFlowResponse>(await this.doRPCRequest("SuspendFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendFlowResponse({}));
  }

  async suspendFlow(request: SuspendFlowRequest): Promise<SuspendFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendFlowWithOptions(request, runtime);
  }

  async createFlowProjectWithOptions(request: CreateFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowProjectResponse>(await this.doRPCRequest("CreateFlowProject", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowProjectResponse({}));
  }

  async createFlowProject(request: CreateFlowProjectRequest): Promise<CreateFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectWithOptions(request, runtime);
  }

  async listFlowNodeInstanceContainerStatusWithOptions(request: ListFlowNodeInstanceContainerStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowNodeInstanceContainerStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowNodeInstanceContainerStatusResponse>(await this.doRPCRequest("ListFlowNodeInstanceContainerStatus", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowNodeInstanceContainerStatusResponse({}));
  }

  async listFlowNodeInstanceContainerStatus(request: ListFlowNodeInstanceContainerStatusRequest): Promise<ListFlowNodeInstanceContainerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowNodeInstanceContainerStatusWithOptions(request, runtime);
  }

  async modifyClusterTemplateWithOptions(request: ModifyClusterTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterTemplateResponse>(await this.doRPCRequest("ModifyClusterTemplate", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterTemplateResponse({}));
  }

  async modifyClusterTemplate(request: ModifyClusterTemplateRequest): Promise<ModifyClusterTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterTemplateWithOptions(request, runtime);
  }

  async addSecurityWhiteListWithOptions(request: AddSecurityWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<AddSecurityWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSecurityWhiteListResponse>(await this.doRPCRequest("AddSecurityWhiteList", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new AddSecurityWhiteListResponse({}));
  }

  async addSecurityWhiteList(request: AddSecurityWhiteListRequest): Promise<AddSecurityWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSecurityWhiteListWithOptions(request, runtime);
  }

  async listMetaClusterWithOptions(request: ListMetaClusterRequest, runtime: $Util.RuntimeOptions): Promise<ListMetaClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMetaClusterResponse>(await this.doRPCRequest("ListMetaCluster", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListMetaClusterResponse({}));
  }

  async listMetaCluster(request: ListMetaClusterRequest): Promise<ListMetaClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMetaClusterWithOptions(request, runtime);
  }

  async listClusterOperationHostWithOptions(request: ListClusterOperationHostRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterOperationHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterOperationHostResponse>(await this.doRPCRequest("ListClusterOperationHost", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterOperationHostResponse({}));
  }

  async listClusterOperationHost(request: ListClusterOperationHostRequest): Promise<ListClusterOperationHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterOperationHostWithOptions(request, runtime);
  }

  async listClusterTemplatesWithOptions(request: ListClusterTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterTemplatesResponse>(await this.doRPCRequest("ListClusterTemplates", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterTemplatesResponse({}));
  }

  async listClusterTemplates(request: ListClusterTemplatesRequest): Promise<ListClusterTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterTemplatesWithOptions(request, runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClustersResponse>(await this.doRPCRequest("ListClusters", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  async tagResourcesSystemTagsWithOptions(request: TagResourcesSystemTagsRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesSystemTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesSystemTagsResponse>(await this.doRPCRequest("TagResourcesSystemTags", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesSystemTagsResponse({}));
  }

  async tagResourcesSystemTags(request: TagResourcesSystemTagsRequest): Promise<TagResourcesSystemTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesSystemTagsWithOptions(request, runtime);
  }

  async modifyFlowJobWithOptions(request: ModifyFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowJobResponse>(await this.doRPCRequest("ModifyFlowJob", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowJobResponse({}));
  }

  async modifyFlowJob(request: ModifyFlowJobRequest): Promise<ModifyFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowJobWithOptions(request, runtime);
  }

  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowResponse>(await this.doRPCRequest("DeleteFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowResponse({}));
  }

  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  async createFlowEditLockWithOptions(request: CreateFlowEditLockRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowEditLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowEditLockResponse>(await this.doRPCRequest("CreateFlowEditLock", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowEditLockResponse({}));
  }

  async createFlowEditLock(request: CreateFlowEditLockRequest): Promise<CreateFlowEditLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowEditLockWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceWithOptions(request: DescribeFlowNodeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowNodeInstanceResponse>(await this.doRPCRequest("DescribeFlowNodeInstance", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowNodeInstanceResponse({}));
  }

  async describeFlowNodeInstance(request: DescribeFlowNodeInstanceRequest): Promise<DescribeFlowNodeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceWithOptions(request, runtime);
  }

  async detachAndReleaseClusterEniWithOptions(request: DetachAndReleaseClusterEniRequest, runtime: $Util.RuntimeOptions): Promise<DetachAndReleaseClusterEniResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachAndReleaseClusterEniResponse>(await this.doRPCRequest("DetachAndReleaseClusterEni", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DetachAndReleaseClusterEniResponse({}));
  }

  async detachAndReleaseClusterEni(request: DetachAndReleaseClusterEniRequest): Promise<DetachAndReleaseClusterEniResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachAndReleaseClusterEniWithOptions(request, runtime);
  }

  async describeScalingGroupInstanceWithOptions(request: DescribeScalingGroupInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingGroupInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingGroupInstanceResponse>(await this.doRPCRequest("DescribeScalingGroupInstance", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingGroupInstanceResponse({}));
  }

  async describeScalingGroupInstance(request: DescribeScalingGroupInstanceRequest): Promise<DescribeScalingGroupInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingGroupInstanceWithOptions(request, runtime);
  }

  async createClusterHostGroupWithOptions(request: CreateClusterHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterHostGroupResponse>(await this.doRPCRequest("CreateClusterHostGroup", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterHostGroupResponse({}));
  }

  async createClusterHostGroup(request: CreateClusterHostGroupRequest): Promise<CreateClusterHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterHostGroupWithOptions(request, runtime);
  }

  async describeClusterTemplateWithOptions(request: DescribeClusterTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterTemplateResponse>(await this.doRPCRequest("DescribeClusterTemplate", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterTemplateResponse({}));
  }

  async describeClusterTemplate(request: DescribeClusterTemplateRequest): Promise<DescribeClusterTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterTemplateWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async commitFlowEntitySnapshotWithOptions(request: CommitFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CommitFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CommitFlowEntitySnapshotResponse>(await this.doRPCRequest("CommitFlowEntitySnapshot", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CommitFlowEntitySnapshotResponse({}));
  }

  async commitFlowEntitySnapshot(request: CommitFlowEntitySnapshotRequest): Promise<CommitFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitFlowEntitySnapshotWithOptions(request, runtime);
  }

  async submitFlowJobWithOptions(request: SubmitFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitFlowJobResponse>(await this.doRPCRequest("SubmitFlowJob", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitFlowJobResponse({}));
  }

  async submitFlowJob(request: SubmitFlowJobRequest): Promise<SubmitFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFlowJobWithOptions(request, runtime);
  }

  async listFlowJobHistoryWithOptions(request: ListFlowJobHistoryRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowJobHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowJobHistoryResponse>(await this.doRPCRequest("ListFlowJobHistory", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowJobHistoryResponse({}));
  }

  async listFlowJobHistory(request: ListFlowJobHistoryRequest): Promise<ListFlowJobHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowJobHistoryWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2020-06-17", "HTTPS", "GET", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listClusterHostComponentWithOptions(request: ListClusterHostComponentRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterHostComponentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterHostComponentResponse>(await this.doRPCRequest("ListClusterHostComponent", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterHostComponentResponse({}));
  }

  async listClusterHostComponent(request: ListClusterHostComponentRequest): Promise<ListClusterHostComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterHostComponentWithOptions(request, runtime);
  }

  async modifyScalingGroupWithOptions(request: ModifyScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingGroupResponse>(await this.doRPCRequest("ModifyScalingGroup", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingGroupResponse({}));
  }

  async modifyScalingGroup(request: ModifyScalingGroupRequest): Promise<ModifyScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingGroupWithOptions(request, runtime);
  }

  async describeFlowProjectClusterSettingWithOptions(request: DescribeFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowProjectClusterSettingResponse>(await this.doRPCRequest("DescribeFlowProjectClusterSetting", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowProjectClusterSettingResponse({}));
  }

  async describeFlowProjectClusterSetting(request: DescribeFlowProjectClusterSettingRequest): Promise<DescribeFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async listFlowProjectClusterSettingWithOptions(request: ListFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowProjectClusterSettingResponse>(await this.doRPCRequest("ListFlowProjectClusterSetting", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowProjectClusterSettingResponse({}));
  }

  async listFlowProjectClusterSetting(request: ListFlowProjectClusterSettingRequest): Promise<ListFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async submitFlowWithOptions(request: SubmitFlowRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitFlowResponse>(await this.doRPCRequest("SubmitFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitFlowResponse({}));
  }

  async submitFlow(request: SubmitFlowRequest): Promise<SubmitFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFlowWithOptions(request, runtime);
  }

  async describeScalingCommonConfigWithOptions(request: DescribeScalingCommonConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingCommonConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingCommonConfigResponse>(await this.doRPCRequest("DescribeScalingCommonConfig", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingCommonConfigResponse({}));
  }

  async describeScalingCommonConfig(request: DescribeScalingCommonConfigRequest): Promise<DescribeScalingCommonConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingCommonConfigWithOptions(request, runtime);
  }

  async resumeFlowWithOptions(request: ResumeFlowRequest, runtime: $Util.RuntimeOptions): Promise<ResumeFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeFlowResponse>(await this.doRPCRequest("ResumeFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeFlowResponse({}));
  }

  async resumeFlow(request: ResumeFlowRequest): Promise<ResumeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeFlowWithOptions(request, runtime);
  }

  async restoreFlowEntitySnapshotWithOptions(request: RestoreFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<RestoreFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreFlowEntitySnapshotResponse>(await this.doRPCRequest("RestoreFlowEntitySnapshot", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreFlowEntitySnapshotResponse({}));
  }

  async restoreFlowEntitySnapshot(request: RestoreFlowEntitySnapshotRequest): Promise<RestoreFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreFlowEntitySnapshotWithOptions(request, runtime);
  }

  async createLibraryWithOptions(request: CreateLibraryRequest, runtime: $Util.RuntimeOptions): Promise<CreateLibraryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLibraryResponse>(await this.doRPCRequest("CreateLibrary", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLibraryResponse({}));
  }

  async createLibrary(request: CreateLibraryRequest): Promise<CreateLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLibraryWithOptions(request, runtime);
  }

  async listVswitchWithOptions(request: ListVswitchRequest, runtime: $Util.RuntimeOptions): Promise<ListVswitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVswitchResponse>(await this.doRPCRequest("ListVswitch", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListVswitchResponse({}));
  }

  async listVswitch(request: ListVswitchRequest): Promise<ListVswitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVswitchWithOptions(request, runtime);
  }

  async deleteFlowProjectWithOptions(request: DeleteFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowProjectResponse>(await this.doRPCRequest("DeleteFlowProject", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowProjectResponse({}));
  }

  async deleteFlowProject(request: DeleteFlowProjectRequest): Promise<DeleteFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectWithOptions(request, runtime);
  }

  async releaseClusterWithOptions(request: ReleaseClusterRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseClusterResponse>(await this.doRPCRequest("ReleaseCluster", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseClusterResponse({}));
  }

  async releaseCluster(request: ReleaseClusterRequest): Promise<ReleaseClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterWithOptions(request, runtime);
  }

  async addScalingConfigItemWithOptions(request: AddScalingConfigItemRequest, runtime: $Util.RuntimeOptions): Promise<AddScalingConfigItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddScalingConfigItemResponse>(await this.doRPCRequest("AddScalingConfigItem", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new AddScalingConfigItemResponse({}));
  }

  async addScalingConfigItem(request: AddScalingConfigItemRequest): Promise<AddScalingConfigItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addScalingConfigItemWithOptions(request, runtime);
  }

  async resetUserPasswordWithOptions(request: ResetUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetUserPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetUserPasswordResponse>(await this.doRPCRequest("ResetUserPassword", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ResetUserPasswordResponse({}));
  }

  async resetUserPassword(request: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  async listFlowClusterAllHostsWithOptions(request: ListFlowClusterAllHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterAllHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowClusterAllHostsResponse>(await this.doRPCRequest("ListFlowClusterAllHosts", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowClusterAllHostsResponse({}));
  }

  async listFlowClusterAllHosts(request: ListFlowClusterAllHostsRequest): Promise<ListFlowClusterAllHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterAllHostsWithOptions(request, runtime);
  }

  async deleteLibrariesWithOptions(request: DeleteLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLibrariesResponse>(await this.doRPCRequest("DeleteLibraries", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLibrariesResponse({}));
  }

  async deleteLibraries(request: DeleteLibrariesRequest): Promise<DeleteLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLibrariesWithOptions(request, runtime);
  }

  async describeFlowCategoryTreeWithOptions(request: DescribeFlowCategoryTreeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowCategoryTreeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowCategoryTreeResponse>(await this.doRPCRequest("DescribeFlowCategoryTree", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowCategoryTreeResponse({}));
  }

  async describeFlowCategoryTree(request: DescribeFlowCategoryTreeRequest): Promise<DescribeFlowCategoryTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowCategoryTreeWithOptions(request, runtime);
  }

  async listDatasourceInstancesWithOptions(request: ListDatasourceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasourceInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDatasourceInstancesResponse>(await this.doRPCRequest("ListDatasourceInstances", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListDatasourceInstancesResponse({}));
  }

  async listDatasourceInstances(request: ListDatasourceInstancesRequest): Promise<ListDatasourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasourceInstancesWithOptions(request, runtime);
  }

  async listFlowNodeSqlResultWithOptions(request: ListFlowNodeSqlResultRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowNodeSqlResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowNodeSqlResultResponse>(await this.doRPCRequest("ListFlowNodeSqlResult", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowNodeSqlResultResponse({}));
  }

  async listFlowNodeSqlResult(request: ListFlowNodeSqlResultRequest): Promise<ListFlowNodeSqlResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowNodeSqlResultWithOptions(request, runtime);
  }

  async describeFlowJobWithOptions(request: DescribeFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowJobResponse>(await this.doRPCRequest("DescribeFlowJob", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowJobResponse({}));
  }

  async describeFlowJob(request: DescribeFlowJobRequest): Promise<DescribeFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowJobWithOptions(request, runtime);
  }

  async describeLibraryInstallTaskDetailWithOptions(request: DescribeLibraryInstallTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLibraryInstallTaskDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLibraryInstallTaskDetailResponse>(await this.doRPCRequest("DescribeLibraryInstallTaskDetail", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLibraryInstallTaskDetailResponse({}));
  }

  async describeLibraryInstallTaskDetail(request: DescribeLibraryInstallTaskDetailRequest): Promise<DescribeLibraryInstallTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLibraryInstallTaskDetailWithOptions(request, runtime);
  }

  async modifyFlowForWebWithOptions(request: ModifyFlowForWebRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowForWebResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowForWebResponse>(await this.doRPCRequest("ModifyFlowForWeb", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowForWebResponse({}));
  }

  async modifyFlowForWeb(request: ModifyFlowForWebRequest): Promise<ModifyFlowForWebResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowForWebWithOptions(request, runtime);
  }

  async removeScalingConfigItemWithOptions(request: RemoveScalingConfigItemRequest, runtime: $Util.RuntimeOptions): Promise<RemoveScalingConfigItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveScalingConfigItemResponse>(await this.doRPCRequest("RemoveScalingConfigItem", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveScalingConfigItemResponse({}));
  }

  async removeScalingConfigItem(request: RemoveScalingConfigItemRequest): Promise<RemoveScalingConfigItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeScalingConfigItemWithOptions(request, runtime);
  }

  async describeSecurityWhiteListWithOptions(request: DescribeSecurityWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityWhiteListResponse>(await this.doRPCRequest("DescribeSecurityWhiteList", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityWhiteListResponse({}));
  }

  async describeSecurityWhiteList(request: DescribeSecurityWhiteListRequest): Promise<DescribeSecurityWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityWhiteListWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceContainerLogWithOptions(request: DescribeFlowNodeInstanceContainerLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceContainerLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowNodeInstanceContainerLogResponse>(await this.doRPCRequest("DescribeFlowNodeInstanceContainerLog", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowNodeInstanceContainerLogResponse({}));
  }

  async describeFlowNodeInstanceContainerLog(request: DescribeFlowNodeInstanceContainerLogRequest): Promise<DescribeFlowNodeInstanceContainerLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceContainerLogWithOptions(request, runtime);
  }

  async rerunFlowWithOptions(request: RerunFlowRequest, runtime: $Util.RuntimeOptions): Promise<RerunFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RerunFlowResponse>(await this.doRPCRequest("RerunFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new RerunFlowResponse({}));
  }

  async rerunFlow(request: RerunFlowRequest): Promise<RerunFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rerunFlowWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async describeClusterOperationHostTaskLogWithOptions(request: DescribeClusterOperationHostTaskLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterOperationHostTaskLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterOperationHostTaskLogResponse>(await this.doRPCRequest("DescribeClusterOperationHostTaskLog", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterOperationHostTaskLogResponse({}));
  }

  async describeClusterOperationHostTaskLog(request: DescribeClusterOperationHostTaskLogRequest): Promise<DescribeClusterOperationHostTaskLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterOperationHostTaskLogWithOptions(request, runtime);
  }

  async killFlowJobWithOptions(request: KillFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<KillFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<KillFlowJobResponse>(await this.doRPCRequest("KillFlowJob", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new KillFlowJobResponse({}));
  }

  async killFlowJob(request: KillFlowJobRequest): Promise<KillFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killFlowJobWithOptions(request, runtime);
  }

  async uninstallLibrariesWithOptions(request: UninstallLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<UninstallLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UninstallLibrariesResponse>(await this.doRPCRequest("UninstallLibraries", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new UninstallLibrariesResponse({}));
  }

  async uninstallLibraries(request: UninstallLibrariesRequest): Promise<UninstallLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallLibrariesWithOptions(request, runtime);
  }

  async describeClusterV2WithOptions(request: DescribeClusterV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeClusterV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterV2Response>(await this.doRPCRequest("DescribeClusterV2", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterV2Response({}));
  }

  async describeClusterV2(request: DescribeClusterV2Request): Promise<DescribeClusterV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterV2WithOptions(request, runtime);
  }

  async describeFlowWithOptions(request: DescribeFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowResponse>(await this.doRPCRequest("DescribeFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowResponse({}));
  }

  async describeFlow(request: DescribeFlowRequest): Promise<DescribeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

  async listFlowClusterWithOptions(request: ListFlowClusterRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowClusterResponse>(await this.doRPCRequest("ListFlowCluster", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowClusterResponse({}));
  }

  async listFlowCluster(request: ListFlowClusterRequest): Promise<ListFlowClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterWithOptions(request, runtime);
  }

  async listLdapUsersWithOptions(request: ListLdapUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListLdapUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLdapUsersResponse>(await this.doRPCRequest("ListLdapUsers", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListLdapUsersResponse({}));
  }

  async listLdapUsers(request: ListLdapUsersRequest): Promise<ListLdapUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLdapUsersWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async createFlowProjectClusterSettingWithOptions(request: CreateFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowProjectClusterSettingResponse>(await this.doRPCRequest("CreateFlowProjectClusterSetting", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowProjectClusterSettingResponse({}));
  }

  async createFlowProjectClusterSetting(request: CreateFlowProjectClusterSettingRequest): Promise<CreateFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async describeFlowInstanceWithOptions(request: DescribeFlowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowInstanceResponse>(await this.doRPCRequest("DescribeFlowInstance", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowInstanceResponse({}));
  }

  async describeFlowInstance(request: DescribeFlowInstanceRequest): Promise<DescribeFlowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowInstanceWithOptions(request, runtime);
  }

  async createFlowProjectUserWithOptions(request: CreateFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowProjectUserResponse>(await this.doRPCRequest("CreateFlowProjectUser", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowProjectUserResponse({}));
  }

  async createFlowProjectUser(request: CreateFlowProjectUserRequest): Promise<CreateFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectUserWithOptions(request, runtime);
  }

  async createFlowCategoryWithOptions(request: CreateFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowCategoryResponse>(await this.doRPCRequest("CreateFlowCategory", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowCategoryResponse({}));
  }

  async createFlowCategory(request: CreateFlowCategoryRequest): Promise<CreateFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowCategoryWithOptions(request, runtime);
  }

  async deleteFlowProjectClusterSettingWithOptions(request: DeleteFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowProjectClusterSettingResponse>(await this.doRPCRequest("DeleteFlowProjectClusterSetting", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowProjectClusterSettingResponse({}));
  }

  async deleteFlowProjectClusterSetting(request: DeleteFlowProjectClusterSettingRequest): Promise<DeleteFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async listLibrariesWithOptions(request: ListLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<ListLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLibrariesResponse>(await this.doRPCRequest("ListLibraries", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListLibrariesResponse({}));
  }

  async listLibraries(request: ListLibrariesRequest): Promise<ListLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLibrariesWithOptions(request, runtime);
  }

  async runScalingActionWithOptions(request: RunScalingActionRequest, runtime: $Util.RuntimeOptions): Promise<RunScalingActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunScalingActionResponse>(await this.doRPCRequest("RunScalingAction", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new RunScalingActionResponse({}));
  }

  async runScalingAction(request: RunScalingActionRequest): Promise<RunScalingActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runScalingActionWithOptions(request, runtime);
  }

  async installLibrariesWithOptions(request: InstallLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<InstallLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InstallLibrariesResponse>(await this.doRPCRequest("InstallLibraries", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new InstallLibrariesResponse({}));
  }

  async installLibraries(request: InstallLibrariesRequest): Promise<InstallLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installLibrariesWithOptions(request, runtime);
  }

  async listFlowJobsWithOptions(request: ListFlowJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowJobsResponse>(await this.doRPCRequest("ListFlowJobs", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowJobsResponse({}));
  }

  async listFlowJobs(request: ListFlowJobsRequest): Promise<ListFlowJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowJobsWithOptions(request, runtime);
  }

  async modifyFlowWithOptions(request: ModifyFlowRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowResponse>(await this.doRPCRequest("ModifyFlow", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowResponse({}));
  }

  async modifyFlow(request: ModifyFlowRequest): Promise<ModifyFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async listLibraryStatusWithOptions(request: ListLibraryStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListLibraryStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLibraryStatusResponse>(await this.doRPCRequest("ListLibraryStatus", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListLibraryStatusResponse({}));
  }

  async listLibraryStatus(request: ListLibraryStatusRequest): Promise<ListLibraryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLibraryStatusWithOptions(request, runtime);
  }

  async describeClusterServiceConfigWithOptions(request: DescribeClusterServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterServiceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterServiceConfigResponse>(await this.doRPCRequest("DescribeClusterServiceConfig", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterServiceConfigResponse({}));
  }

  async describeClusterServiceConfig(request: DescribeClusterServiceConfigRequest): Promise<DescribeClusterServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterServiceConfigWithOptions(request, runtime);
  }

  async modifyFlowProjectClusterSettingWithOptions(request: ModifyFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowProjectClusterSettingResponse>(await this.doRPCRequest("ModifyFlowProjectClusterSetting", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowProjectClusterSettingResponse({}));
  }

  async modifyFlowProjectClusterSetting(request: ModifyFlowProjectClusterSettingRequest): Promise<ModifyFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async deleteFlowProjectUserWithOptions(request: DeleteFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowProjectUserResponse>(await this.doRPCRequest("DeleteFlowProjectUser", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowProjectUserResponse({}));
  }

  async deleteFlowProjectUser(request: DeleteFlowProjectUserRequest): Promise<DeleteFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectUserWithOptions(request, runtime);
  }

  async createClusterV2WithOptions(request: CreateClusterV2Request, runtime: $Util.RuntimeOptions): Promise<CreateClusterV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterV2Response>(await this.doRPCRequest("CreateClusterV2", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterV2Response({}));
  }

  async createClusterV2(request: CreateClusterV2Request): Promise<CreateClusterV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterV2WithOptions(request, runtime);
  }

  async modifyClusterNameWithOptions(request: ModifyClusterNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterNameResponse>(await this.doRPCRequest("ModifyClusterName", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterNameResponse({}));
  }

  async modifyClusterName(request: ModifyClusterNameRequest): Promise<ModifyClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterNameWithOptions(request, runtime);
  }

  async listClusterOperationHostTaskWithOptions(request: ListClusterOperationHostTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterOperationHostTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterOperationHostTaskResponse>(await this.doRPCRequest("ListClusterOperationHostTask", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterOperationHostTaskResponse({}));
  }

  async listClusterOperationHostTask(request: ListClusterOperationHostTaskRequest): Promise<ListClusterOperationHostTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterOperationHostTaskWithOptions(request, runtime);
  }

  async describeScalingConfigItemWithOptions(request: DescribeScalingConfigItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingConfigItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingConfigItemResponse>(await this.doRPCRequest("DescribeScalingConfigItem", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingConfigItemResponse({}));
  }

  async describeScalingConfigItem(request: DescribeScalingConfigItemRequest): Promise<DescribeScalingConfigItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingConfigItemWithOptions(request, runtime);
  }

  async listClusterHostWithOptions(request: ListClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterHostResponse>(await this.doRPCRequest("ListClusterHost", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterHostResponse({}));
  }

  async listClusterHost(request: ListClusterHostRequest): Promise<ListClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterHostWithOptions(request, runtime);
  }

  async createScalingGroupWithOptions(request: CreateScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScalingGroupResponse>(await this.doRPCRequest("CreateScalingGroup", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScalingGroupResponse({}));
  }

  async createScalingGroup(request: CreateScalingGroupRequest): Promise<CreateScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingGroupWithOptions(request, runtime);
  }

  async describeClusterServiceWithOptions(request: DescribeClusterServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterServiceResponse>(await this.doRPCRequest("DescribeClusterService", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterServiceResponse({}));
  }

  async describeClusterService(request: DescribeClusterServiceRequest): Promise<DescribeClusterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterServiceWithOptions(request, runtime);
  }

  async listFlowProjectsWithOptions(request: ListFlowProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowProjectsResponse>(await this.doRPCRequest("ListFlowProjects", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowProjectsResponse({}));
  }

  async listFlowProjects(request: ListFlowProjectsRequest): Promise<ListFlowProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectsWithOptions(request, runtime);
  }

  async createMetaTablePreviewTaskWithOptions(request: CreateMetaTablePreviewTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetaTablePreviewTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMetaTablePreviewTaskResponse>(await this.doRPCRequest("CreateMetaTablePreviewTask", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMetaTablePreviewTaskResponse({}));
  }

  async createMetaTablePreviewTask(request: CreateMetaTablePreviewTaskRequest): Promise<CreateMetaTablePreviewTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetaTablePreviewTaskWithOptions(request, runtime);
  }

  async listFlowProjectUserWithOptions(request: ListFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowProjectUserResponse>(await this.doRPCRequest("ListFlowProjectUser", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowProjectUserResponse({}));
  }

  async listFlowProjectUser(request: ListFlowProjectUserRequest): Promise<ListFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectUserWithOptions(request, runtime);
  }

  async deleteClusterHostGroupWithOptions(request: DeleteClusterHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClusterHostGroupResponse>(await this.doRPCRequest("DeleteClusterHostGroup", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClusterHostGroupResponse({}));
  }

  async deleteClusterHostGroup(request: DeleteClusterHostGroupRequest): Promise<DeleteClusterHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterHostGroupWithOptions(request, runtime);
  }

  async describeLibraryDetailWithOptions(request: DescribeLibraryDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLibraryDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLibraryDetailResponse>(await this.doRPCRequest("DescribeLibraryDetail", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLibraryDetailResponse({}));
  }

  async describeLibraryDetail(request: DescribeLibraryDetailRequest): Promise<DescribeLibraryDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLibraryDetailWithOptions(request, runtime);
  }

  async listFlowsWithOptions(request: ListFlowsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowsResponse>(await this.doRPCRequest("ListFlows", "2020-06-17", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowsResponse({}));
  }

  async listFlows(request: ListFlowsRequest): Promise<ListFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowsWithOptions(request, runtime);
  }

}
