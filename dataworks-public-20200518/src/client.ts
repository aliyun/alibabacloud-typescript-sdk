// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class AbolishDataServiceApiRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDataServiceApiResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDataServiceApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbolishDataServiceApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbolishDataServiceApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectMemberToRoleRequest extends $tea.Model {
  projectId?: number;
  userId?: string;
  roleCode?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
      roleCode: 'RoleCode',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
      roleCode: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectMemberToRoleResponseBody extends $tea.Model {
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

export class AddProjectMemberToRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddProjectMemberToRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddProjectMemberToRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddToMetaCategoryRequest extends $tea.Model {
  categoryId?: number;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddToMetaCategoryResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddToMetaCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddToMetaCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddToMetaCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApprovePermissionApplyOrderRequest extends $tea.Model {
  flowId?: string;
  approveComment?: string;
  approveAction?: number;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      approveComment: 'ApproveComment',
      approveAction: 'ApproveAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      approveComment: 'string',
      approveAction: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApprovePermissionApplyOrderResponseBody extends $tea.Model {
  approveSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approveSuccess: 'ApproveSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApprovePermissionApplyOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApprovePermissionApplyOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApprovePermissionApplyOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckEngineMetaPartitionRequest extends $tea.Model {
  tableGuid?: string;
  partition?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      partition: 'Partition',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      partition: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckEngineMetaPartitionResponseBody extends $tea.Model {
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

export class CheckEngineMetaPartitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckEngineMetaPartitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckEngineMetaPartitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckEngineMetaTableRequest extends $tea.Model {
  tableGuid?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckEngineMetaTableResponseBody extends $tea.Model {
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

export class CheckEngineMetaTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckEngineMetaTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckEngineMetaTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFileDeploymentRequest extends $tea.Model {
  checkerInstanceId?: string;
  status?: string;
  checkDetailUrl?: string;
  static names(): { [key: string]: string } {
    return {
      checkerInstanceId: 'CheckerInstanceId',
      status: 'Status',
      checkDetailUrl: 'CheckDetailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkerInstanceId: 'string',
      status: 'string',
      checkDetailUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFileDeploymentResponseBody extends $tea.Model {
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

export class CheckFileDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckFileDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckFileDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaPartitionRequest extends $tea.Model {
  tableGuid?: string;
  partition?: string;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      partition: 'Partition',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      partition: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaPartitionResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaPartitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckMetaPartitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckMetaPartitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaTableRequest extends $tea.Model {
  tableGuid?: string;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaTableResponseBody extends $tea.Model {
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

export class CheckMetaTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckMetaTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckMetaTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaTableTaskResponseBody extends $tea.Model {
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

export class CheckMetaTableTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckMetaTableTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckMetaTableTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessName?: string;
  description?: string;
  owner?: string;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBusinessResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  businessId?: number;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      businessId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBusinessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBusinessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBusinessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  description?: string;
  connectionType?: string;
  subType?: string;
  envType?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      connectionType: 'ConnectionType',
      subType: 'SubType',
      envType: 'EnvType',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      description: 'string',
      connectionType: 'string',
      subType: 'string',
      envType: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionResponseBody extends $tea.Model {
  httpStatusCode?: string;
  data?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagComplementRequest extends $tea.Model {
  projectEnv?: string;
  startBizDate?: string;
  name?: string;
  rootNodeId?: number;
  includeNodeIds?: string;
  excludeNodeIds?: string;
  bizBeginTime?: string;
  bizEndTime?: string;
  parallelism?: boolean;
  endBizDate?: string;
  nodeParams?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      startBizDate: 'StartBizDate',
      name: 'Name',
      rootNodeId: 'RootNodeId',
      includeNodeIds: 'IncludeNodeIds',
      excludeNodeIds: 'ExcludeNodeIds',
      bizBeginTime: 'BizBeginTime',
      bizEndTime: 'BizEndTime',
      parallelism: 'Parallelism',
      endBizDate: 'EndBizDate',
      nodeParams: 'NodeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      startBizDate: 'string',
      name: 'string',
      rootNodeId: 'number',
      includeNodeIds: 'string',
      excludeNodeIds: 'string',
      bizBeginTime: 'string',
      bizEndTime: 'string',
      parallelism: 'boolean',
      endBizDate: 'string',
      nodeParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagComplementResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: number[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagComplementResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDagComplementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDagComplementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagTestRequest extends $tea.Model {
  projectEnv?: string;
  bizdate?: string;
  name?: string;
  nodeId?: number;
  nodeParams?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      bizdate: 'Bizdate',
      name: 'Name',
      nodeId: 'NodeId',
      nodeParams: 'NodeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      bizdate: 'string',
      name: 'string',
      nodeId: 'number',
      nodeParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagTestResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDagTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDagTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiName?: string;
  groupId?: string;
  apiMode?: number;
  requestMethod?: number;
  responseContentType?: number;
  timeout?: number;
  visibleRange?: number;
  protocols?: string;
  wizardDetails?: string;
  scriptDetails?: string;
  registrationDetails?: string;
  apiPath?: string;
  apiDescription?: string;
  folderId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      apiMode: 'ApiMode',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      protocols: 'Protocols',
      wizardDetails: 'WizardDetails',
      scriptDetails: 'ScriptDetails',
      registrationDetails: 'RegistrationDetails',
      apiPath: 'ApiPath',
      apiDescription: 'ApiDescription',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiName: 'string',
      groupId: 'string',
      apiMode: 'number',
      requestMethod: 'number',
      responseContentType: 'number',
      timeout: 'number',
      visibleRange: 'number',
      protocols: 'string',
      wizardDetails: 'string',
      scriptDetails: 'string',
      registrationDetails: 'string',
      apiPath: 'string',
      apiDescription: 'string',
      folderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataServiceApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataServiceApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiAuthorityRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiId?: number;
  authorizedProjectId?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
      authorizedProjectId: 'AuthorizedProjectId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
      authorizedProjectId: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiAuthorityResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiAuthorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataServiceApiAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataServiceApiAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceFolderRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  folderName?: string;
  parentId?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      folderName: 'FolderName',
      parentId: 'ParentId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      folderName: 'string',
      parentId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceFolderResponseBody extends $tea.Model {
  folderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataServiceFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataServiceFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceGroupRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiGatewayGroupId?: string;
  groupName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiGatewayGroupId: 'ApiGatewayGroupId',
      groupName: 'GroupName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiGatewayGroupId: 'string',
      groupName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceGroupResponseBody extends $tea.Model {
  groupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  description?: string;
  dataSourceType?: string;
  subType?: string;
  envType?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      dataSourceType: 'DataSourceType',
      subType: 'SubType',
      envType: 'EnvType',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      description: 'string',
      dataSourceType: 'string',
      subType: 'string',
      envType: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  httpStatusCode?: string;
  data?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDISyncTaskRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  taskContent?: string;
  taskParam?: string;
  taskName?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      taskContent: 'TaskContent',
      taskParam: 'TaskParam',
      taskName: 'TaskName',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      taskContent: 'string',
      taskParam: 'string',
      taskName: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDISyncTaskResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: CreateDISyncTaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: CreateDISyncTaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDISyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDISyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDISyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  fileName?: string;
  fileDescription?: string;
  fileType?: number;
  owner?: string;
  content?: string;
  autoRerunTimes?: number;
  autoRerunIntervalMillis?: number;
  rerunMode?: string;
  stop?: boolean;
  paraValue?: string;
  startEffectDate?: number;
  endEffectDate?: number;
  cronExpress?: string;
  cycleType?: string;
  dependentType?: string;
  dependentNodeIdList?: string;
  inputList?: string;
  projectIdentifier?: string;
  resourceGroupIdentifier?: string;
  resourceGroupId?: number;
  connectionName?: string;
  autoParsing?: boolean;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      fileName: 'FileName',
      fileDescription: 'FileDescription',
      fileType: 'FileType',
      owner: 'Owner',
      content: 'Content',
      autoRerunTimes: 'AutoRerunTimes',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      rerunMode: 'RerunMode',
      stop: 'Stop',
      paraValue: 'ParaValue',
      startEffectDate: 'StartEffectDate',
      endEffectDate: 'EndEffectDate',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentType: 'DependentType',
      dependentNodeIdList: 'DependentNodeIdList',
      inputList: 'InputList',
      projectIdentifier: 'ProjectIdentifier',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
      resourceGroupId: 'ResourceGroupId',
      connectionName: 'ConnectionName',
      autoParsing: 'AutoParsing',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      fileName: 'string',
      fileDescription: 'string',
      fileType: 'number',
      owner: 'string',
      content: 'string',
      autoRerunTimes: 'number',
      autoRerunIntervalMillis: 'number',
      rerunMode: 'string',
      stop: 'boolean',
      paraValue: 'string',
      startEffectDate: 'number',
      endEffectDate: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentType: 'string',
      dependentNodeIdList: 'string',
      inputList: 'string',
      projectIdentifier: 'string',
      resourceGroupIdentifier: 'string',
      resourceGroupId: 'number',
      connectionName: 'string',
      autoParsing: 'boolean',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  folderPath?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      folderPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: string;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'string',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImportMigrationRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  packageType?: string;
  packageFile?: string;
  resourceGroupMap?: string;
  workspaceMap?: string;
  calculateEngineMap?: string;
  commitRule?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      packageType: 'PackageType',
      packageFile: 'PackageFile',
      resourceGroupMap: 'ResourceGroupMap',
      workspaceMap: 'WorkspaceMap',
      calculateEngineMap: 'CalculateEngineMap',
      commitRule: 'CommitRule',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      packageType: 'string',
      packageFile: 'string',
      resourceGroupMap: 'string',
      workspaceMap: 'string',
      calculateEngineMap: 'string',
      commitRule: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImportMigrationAdvanceRequest extends $tea.Model {
  packageFileObject: Readable;
  projectId?: number;
  name?: string;
  packageType?: string;
  resourceGroupMap?: string;
  workspaceMap?: string;
  calculateEngineMap?: string;
  commitRule?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      packageFileObject: 'PackageFileObject',
      projectId: 'ProjectId',
      name: 'Name',
      packageType: 'PackageType',
      resourceGroupMap: 'ResourceGroupMap',
      workspaceMap: 'WorkspaceMap',
      calculateEngineMap: 'CalculateEngineMap',
      commitRule: 'CommitRule',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageFileObject: 'Readable',
      projectId: 'number',
      name: 'string',
      packageType: 'string',
      resourceGroupMap: 'string',
      workspaceMap: 'string',
      calculateEngineMap: 'string',
      commitRule: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImportMigrationResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImportMigrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImportMigrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImportMigrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManualDagRequest extends $tea.Model {
  projectEnv?: string;
  projectName?: string;
  flowName?: string;
  bizDate?: string;
  nodeParameters?: string;
  dagParameters?: string;
  includeNodeIds?: string;
  excludeNodeIds?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
      flowName: 'FlowName',
      bizDate: 'BizDate',
      nodeParameters: 'NodeParameters',
      dagParameters: 'DagParameters',
      includeNodeIds: 'IncludeNodeIds',
      excludeNodeIds: 'ExcludeNodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      projectName: 'string',
      flowName: 'string',
      bizDate: 'string',
      nodeParameters: 'string',
      dagParameters: 'string',
      includeNodeIds: 'string',
      excludeNodeIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManualDagResponseBody extends $tea.Model {
  dagId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManualDagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateManualDagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateManualDagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaCategoryRequest extends $tea.Model {
  name?: string;
  comment?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      comment: 'Comment',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      comment: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaCategoryResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: CreateMetaCategoryResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: CreateMetaCategoryResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMetaCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMetaCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionApplyOrderRequest extends $tea.Model {
  applyUserIds?: string;
  deadline?: number;
  applyReason?: string;
  maxComputeProjectName?: string;
  workspaceId?: number;
  orderType?: number;
  engineType?: string;
  applyObject?: CreatePermissionApplyOrderRequestApplyObject[];
  static names(): { [key: string]: string } {
    return {
      applyUserIds: 'ApplyUserIds',
      deadline: 'Deadline',
      applyReason: 'ApplyReason',
      maxComputeProjectName: 'MaxComputeProjectName',
      workspaceId: 'WorkspaceId',
      orderType: 'OrderType',
      engineType: 'EngineType',
      applyObject: 'ApplyObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUserIds: 'string',
      deadline: 'number',
      applyReason: 'string',
      maxComputeProjectName: 'string',
      workspaceId: 'number',
      orderType: 'number',
      engineType: 'string',
      applyObject: { 'type': 'array', 'itemType': CreatePermissionApplyOrderRequestApplyObject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionApplyOrderResponseBody extends $tea.Model {
  requestId?: string;
  flowId?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionApplyOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePermissionApplyOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePermissionApplyOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMemberRequest extends $tea.Model {
  projectId?: number;
  userId?: string;
  clientToken?: string;
  roleCode?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
      clientToken: 'ClientToken',
      roleCode: 'RoleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
      clientToken: 'string',
      roleCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMemberResponseBody extends $tea.Model {
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

export class CreateProjectMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityEntityRequest extends $tea.Model {
  projectName?: string;
  tableName?: string;
  envType?: string;
  matchExpression?: string;
  entityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      tableName: 'TableName',
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      entityLevel: 'EntityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      tableName: 'string',
      envType: 'string',
      matchExpression: 'string',
      entityLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityEntityResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQualityEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQualityEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityFollowerRequest extends $tea.Model {
  projectName?: string;
  follower?: string;
  alarmMode?: number;
  entityId?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      follower: 'Follower',
      alarmMode: 'AlarmMode',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      follower: 'string',
      alarmMode: 'number',
      entityId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityFollowerResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityFollowerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQualityFollowerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQualityFollowerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRelativeNodeRequest extends $tea.Model {
  envType?: string;
  matchExpression?: string;
  nodeId?: number;
  projectId?: number;
  targetNodeProjectName?: string;
  projectName?: string;
  tableName?: string;
  targetNodeProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      targetNodeProjectName: 'TargetNodeProjectName',
      projectName: 'ProjectName',
      tableName: 'TableName',
      targetNodeProjectId: 'TargetNodeProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      nodeId: 'number',
      projectId: 'number',
      targetNodeProjectName: 'string',
      projectName: 'string',
      tableName: 'string',
      targetNodeProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRelativeNodeResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRelativeNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQualityRelativeNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQualityRelativeNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleRequest extends $tea.Model {
  blockType?: number;
  entityId?: number;
  comment?: string;
  checker?: number;
  expectValue?: string;
  trend?: string;
  methodName?: string;
  operator?: string;
  projectName?: string;
  property?: string;
  propertyType?: string;
  ruleType?: number;
  whereCondition?: string;
  criticalThreshold?: string;
  warningThreshold?: string;
  templateId?: number;
  ruleName?: string;
  predictType?: number;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      entityId: 'EntityId',
      comment: 'Comment',
      checker: 'Checker',
      expectValue: 'ExpectValue',
      trend: 'Trend',
      methodName: 'MethodName',
      operator: 'Operator',
      projectName: 'ProjectName',
      property: 'Property',
      propertyType: 'PropertyType',
      ruleType: 'RuleType',
      whereCondition: 'WhereCondition',
      criticalThreshold: 'CriticalThreshold',
      warningThreshold: 'WarningThreshold',
      templateId: 'TemplateId',
      ruleName: 'RuleName',
      predictType: 'PredictType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      entityId: 'number',
      comment: 'string',
      checker: 'number',
      expectValue: 'string',
      trend: 'string',
      methodName: 'string',
      operator: 'string',
      projectName: 'string',
      property: 'string',
      propertyType: 'string',
      ruleType: 'number',
      whereCondition: 'string',
      criticalThreshold: 'string',
      warningThreshold: 'string',
      templateId: 'number',
      ruleName: 'string',
      predictType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemindRequest extends $tea.Model {
  remindName?: string;
  dndEnd?: string;
  remindUnit?: string;
  nodeIds?: string;
  baselineIds?: string;
  projectId?: number;
  bizProcessIds?: string;
  remindType?: string;
  maxAlertTimes?: number;
  alertInterval?: number;
  detail?: string;
  alertUnit?: string;
  alertMethods?: string;
  alertTargets?: string;
  robotUrls?: string;
  static names(): { [key: string]: string } {
    return {
      remindName: 'RemindName',
      dndEnd: 'DndEnd',
      remindUnit: 'RemindUnit',
      nodeIds: 'NodeIds',
      baselineIds: 'BaselineIds',
      projectId: 'ProjectId',
      bizProcessIds: 'BizProcessIds',
      remindType: 'RemindType',
      maxAlertTimes: 'MaxAlertTimes',
      alertInterval: 'AlertInterval',
      detail: 'Detail',
      alertUnit: 'AlertUnit',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      robotUrls: 'RobotUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindName: 'string',
      dndEnd: 'string',
      remindUnit: 'string',
      nodeIds: 'string',
      baselineIds: 'string',
      projectId: 'number',
      bizProcessIds: 'string',
      remindType: 'string',
      maxAlertTimes: 'number',
      alertInterval: 'number',
      detail: 'string',
      alertUnit: 'string',
      alertMethods: 'string',
      alertTargets: 'string',
      robotUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemindResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemindResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRemindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRemindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequest extends $tea.Model {
  isView?: number;
  visibility?: number;
  lifeCycle?: number;
  categoryId?: number;
  logicalLevelId?: number;
  physicsLevelId?: number;
  externalTableType?: string;
  location?: string;
  projectId?: number;
  tableName?: string;
  endpoint?: string;
  envType?: number;
  appGuid?: string;
  comment?: string;
  ownerId?: string;
  hasPart?: number;
  clientToken?: string;
  columns?: CreateTableRequestColumns[];
  themes?: CreateTableRequestThemes[];
  static names(): { [key: string]: string } {
    return {
      isView: 'IsView',
      visibility: 'Visibility',
      lifeCycle: 'LifeCycle',
      categoryId: 'CategoryId',
      logicalLevelId: 'LogicalLevelId',
      physicsLevelId: 'PhysicsLevelId',
      externalTableType: 'ExternalTableType',
      location: 'Location',
      projectId: 'ProjectId',
      tableName: 'TableName',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      appGuid: 'AppGuid',
      comment: 'Comment',
      ownerId: 'OwnerId',
      hasPart: 'HasPart',
      clientToken: 'ClientToken',
      columns: 'Columns',
      themes: 'Themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isView: 'number',
      visibility: 'number',
      lifeCycle: 'number',
      categoryId: 'number',
      logicalLevelId: 'number',
      physicsLevelId: 'number',
      externalTableType: 'string',
      location: 'string',
      projectId: 'number',
      tableName: 'string',
      endpoint: 'string',
      envType: 'number',
      appGuid: 'string',
      comment: 'string',
      ownerId: 'string',
      hasPart: 'number',
      clientToken: 'string',
      columns: { 'type': 'array', 'itemType': CreateTableRequestColumns },
      themes: { 'type': 'array', 'itemType': CreateTableRequestThemes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponseBody extends $tea.Model {
  requestId?: string;
  taskInfo?: CreateTableResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: CreateTableResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableLevelRequest extends $tea.Model {
  projectId?: number;
  levelType?: number;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      levelType: 'LevelType',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      levelType: 'number',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableLevelResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  levelId?: number;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      levelId: 'LevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      levelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTableLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTableLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableThemeRequest extends $tea.Model {
  projectId?: number;
  level?: number;
  name?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      level: 'number',
      name: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableThemeResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      themeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableThemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTableThemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTableThemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfFileRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  fileName?: string;
  functionType?: string;
  className?: string;
  resources?: string;
  udfDescription?: string;
  cmdDescription?: string;
  parameterDescription?: string;
  returnValue?: string;
  example?: string;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      fileName: 'FileName',
      functionType: 'FunctionType',
      className: 'ClassName',
      resources: 'Resources',
      udfDescription: 'UdfDescription',
      cmdDescription: 'CmdDescription',
      parameterDescription: 'ParameterDescription',
      returnValue: 'ReturnValue',
      example: 'Example',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      fileName: 'string',
      functionType: 'string',
      className: 'string',
      resources: 'string',
      udfDescription: 'string',
      cmdDescription: 'string',
      parameterDescription: 'string',
      returnValue: 'string',
      example: 'string',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfFileResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUdfFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUdfFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateViewRequest extends $tea.Model {
  viewName?: string;
  selectColumn?: string;
  selectTableName?: string;
  selectWhere?: string;
  selectSQL?: string;
  appGuid?: string;
  comment?: string;
  clientToken?: string;
  viewColumn?: CreateViewRequestViewColumn[];
  static names(): { [key: string]: string } {
    return {
      viewName: 'ViewName',
      selectColumn: 'SelectColumn',
      selectTableName: 'SelectTableName',
      selectWhere: 'SelectWhere',
      selectSQL: 'SelectSQL',
      appGuid: 'AppGuid',
      comment: 'Comment',
      clientToken: 'ClientToken',
      viewColumn: 'ViewColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      viewName: 'string',
      selectColumn: 'string',
      selectTableName: 'string',
      selectWhere: 'string',
      selectSQL: 'string',
      appGuid: 'string',
      comment: 'string',
      clientToken: 'string',
      viewColumn: { 'type': 'array', 'itemType': CreateViewRequestViewColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateViewResponseBody extends $tea.Model {
  requestId?: string;
  taskInfo?: CreateViewResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: CreateViewResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBusinessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBusinessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionRequest extends $tea.Model {
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionResponseBody extends $tea.Model {
  httpStatusCode?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataServiceApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataServiceApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiAuthorityRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiId?: number;
  authorizedProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
      authorizedProjectId: 'AuthorizedProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
      authorizedProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiAuthorityResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiAuthorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataServiceApiAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataServiceApiAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  dataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  httpStatusCode?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDISyncTaskRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDISyncTaskResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: DeleteDISyncTaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: DeleteDISyncTaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDISyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDISyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDISyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  httpStatusCode?: number;
  deploymentId?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      deploymentId: 'DeploymentId',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      deploymentId: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFromMetaCategoryRequest extends $tea.Model {
  categoryId?: number;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFromMetaCategoryResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFromMetaCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFromMetaCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFromMetaCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetaCategoryRequest extends $tea.Model {
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetaCategoryResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetaCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMetaCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMetaCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMemberRequest extends $tea.Model {
  projectId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMemberResponseBody extends $tea.Model {
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

export class DeleteProjectMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityEntityRequest extends $tea.Model {
  entityId?: number;
  projectName?: string;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      projectName: 'ProjectName',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      projectName: 'string',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityEntityResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQualityEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQualityEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityFollowerRequest extends $tea.Model {
  projectName?: string;
  followerId?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      followerId: 'FollowerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      followerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityFollowerResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityFollowerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQualityFollowerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQualityFollowerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRelativeNodeRequest extends $tea.Model {
  envType?: string;
  matchExpression?: string;
  nodeId?: number;
  projectId?: number;
  targetNodeProjectName?: string;
  projectName?: string;
  tableName?: string;
  targetNodeProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      targetNodeProjectName: 'TargetNodeProjectName',
      projectName: 'ProjectName',
      tableName: 'TableName',
      targetNodeProjectId: 'TargetNodeProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      nodeId: 'number',
      projectId: 'number',
      targetNodeProjectName: 'string',
      projectName: 'string',
      tableName: 'string',
      targetNodeProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRelativeNodeResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRelativeNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQualityRelativeNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQualityRelativeNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleRequest extends $tea.Model {
  projectName?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemindRequest extends $tea.Model {
  remindId?: number;
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemindResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemindResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRemindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRemindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableRequest extends $tea.Model {
  projectId?: number;
  tableName?: string;
  envType?: number;
  appGuid?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      tableName: 'TableName',
      envType: 'EnvType',
      appGuid: 'AppGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      tableName: 'string',
      envType: 'number',
      appGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponseBody extends $tea.Model {
  requestId?: string;
  taskInfo?: DeleteTableResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: DeleteTableResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableLevelRequest extends $tea.Model {
  levelId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      levelId: 'LevelId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableLevelResponseBody extends $tea.Model {
  deleteResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteResult: 'DeleteResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTableLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTableLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableThemeRequest extends $tea.Model {
  themeId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableThemeResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  deleteResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      deleteResult: 'DeleteResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      deleteResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableThemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTableThemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTableThemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteViewRequest extends $tea.Model {
  viewName?: string;
  appGuid?: string;
  static names(): { [key: string]: string } {
    return {
      viewName: 'ViewName',
      appGuid: 'AppGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      viewName: 'string',
      appGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteViewResponseBody extends $tea.Model {
  requestId?: string;
  taskInfo?: DeleteViewResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: DeleteViewResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDISyncTaskRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDISyncTaskResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: DeployDISyncTaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: DeployDISyncTaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDISyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployDISyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployDISyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFileRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  fileId?: number;
  comment?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
      comment: 'Comment',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      fileId: 'number',
      comment: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFileResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesensitizeDataRequest extends $tea.Model {
  data?: string;
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      sceneCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesensitizeDataResponseBody extends $tea.Model {
  desensitizeData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desensitizeData: 'DesensitizeData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensitizeData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesensitizeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DesensitizeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DesensitizeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstablishRelationTableToBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessId?: string;
  tableGuid?: string;
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessId: 'BusinessId',
      tableGuid: 'TableGuid',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessId: 'string',
      tableGuid: 'string',
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstablishRelationTableToBusinessResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstablishRelationTableToBusinessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EstablishRelationTableToBusinessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EstablishRelationTableToBusinessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConnectionsRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  dataSourceType?: string;
  subType?: string;
  envType?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      dataSourceType: 'DataSourceType',
      subType: 'SubType',
      envType: 'EnvType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      dataSourceType: 'string',
      subType: 'string',
      envType: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConnectionsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  data?: ExportConnectionsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ExportConnectionsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataSourcesRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  dataSourceType?: string;
  subType?: string;
  envType?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      dataSourceType: 'DataSourceType',
      subType: 'SubType',
      envType: 'EnvType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      dataSourceType: 'string',
      subType: 'string',
      envType: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataSourcesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  data?: ExportDataSourcesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ExportDataSourcesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDISyncTasksRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  taskParam?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      taskParam: 'TaskParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      taskParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDISyncTasksResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  taskDetail?: ExportDISyncTasksResponseBodyTaskDetail;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      taskDetail: ExportDISyncTasksResponseBodyTaskDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDISyncTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportDISyncTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportDISyncTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineConfigRequest extends $tea.Model {
  baselineId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineConfigResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetBaselineConfigResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetBaselineConfigResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBaselineConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBaselineConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathRequest extends $tea.Model {
  baselineId?: number;
  bizdate?: string;
  inGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      bizdate: 'string',
      inGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetBaselineKeyPathResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBaselineKeyPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBaselineKeyPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusRequest extends $tea.Model {
  baselineId?: number;
  bizdate?: string;
  inGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      bizdate: 'string',
      inGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetBaselineStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetBaselineStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBaselineStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBaselineStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetBusinessResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetBusinessResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBusinessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBusinessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionMetaRequest extends $tea.Model {
  projectId?: number;
  datasourceName?: string;
  pageNumber?: number;
  pageSize?: number;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      datasourceName: 'DatasourceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      datasourceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionMetaResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: GetConnectionMetaResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: GetConnectionMetaResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConnectionMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConnectionMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDagRequest extends $tea.Model {
  dagId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDagResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetDagResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetDagResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetDataServiceApiResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetDataServiceApiResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataServiceApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataServiceApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  applicationId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      applicationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetDataServiceApplicationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetDataServiceApplicationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataServiceApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataServiceApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  folderId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      folderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderResponseBody extends $tea.Model {
  requestId?: string;
  folder?: GetDataServiceFolderResponseBodyFolder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folder: GetDataServiceFolderResponseBodyFolder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataServiceFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataServiceFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupResponseBody extends $tea.Model {
  requestId?: string;
  group?: GetDataServiceGroupResponseBodyGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      group: GetDataServiceGroupResponseBodyGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiRequest extends $tea.Model {
  projectId?: number;
  tenantId?: number;
  apiId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      tenantId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetDataServicePublishedApiResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetDataServicePublishedApiResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataServicePublishedApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataServicePublishedApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceMetaRequest extends $tea.Model {
  projectId?: number;
  datasourceName?: string;
  pageNumber?: number;
  pageSize?: number;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      datasourceName: 'DatasourceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      datasourceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceMetaResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: GetDataSourceMetaResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: GetDataSourceMetaResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataSourceMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataSourceMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetDDLJobStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetDDLJobStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDDLJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDDLJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  deploymentId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      deploymentId: 'DeploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      deploymentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetDeploymentResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetDeploymentResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: GetDISyncInstanceInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: GetDISyncInstanceInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDISyncInstanceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDISyncInstanceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: GetDISyncTaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: GetDISyncTaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDISyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDISyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  fileId?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      fileId: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetFileResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetFileResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTypeStatisticRequest extends $tea.Model {
  projectId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTypeStatisticResponseBody extends $tea.Model {
  requestId?: string;
  programTypeAndCounts?: GetFileTypeStatisticResponseBodyProgramTypeAndCounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      programTypeAndCounts: 'ProgramTypeAndCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      programTypeAndCounts: { 'type': 'array', 'itemType': GetFileTypeStatisticResponseBodyProgramTypeAndCounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTypeStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFileTypeStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFileTypeStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileVersionRequest extends $tea.Model {
  fileId?: number;
  projectId?: number;
  projectIdentifier?: string;
  fileVersion?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileVersion: 'FileVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      fileVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileVersionResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetFileVersionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetFileVersionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFileVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFileVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  folderId?: string;
  folderPath?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      folderId: 'string',
      folderPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetFolderResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetFolderResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
  instanceId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankRequest extends $tea.Model {
  projectId?: number;
  bizdate?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      bizdate: 'Bizdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      bizdate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseBody extends $tea.Model {
  requestId?: string;
  instanceConsumeTimeRank?: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceConsumeTimeRank: 'InstanceConsumeTimeRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceConsumeTimeRank: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceConsumeTimeRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceConsumeTimeRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendRequest extends $tea.Model {
  projectId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendResponseBody extends $tea.Model {
  requestId?: string;
  instanceCounts?: GetInstanceCountTrendResponseBodyInstanceCounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceCounts: 'InstanceCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceCounts: { 'type': 'array', 'itemType': GetInstanceCountTrendResponseBodyInstanceCounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceCountTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceCountTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankRequest extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponseBody extends $tea.Model {
  requestId?: string;
  instanceErrorRank?: GetInstanceErrorRankResponseBodyInstanceErrorRank;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceErrorRank: 'InstanceErrorRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceErrorRank: GetInstanceErrorRankResponseBodyInstanceErrorRank,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceErrorRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceErrorRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLogRequest extends $tea.Model {
  instanceId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLogResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusCountRequest extends $tea.Model {
  projectId?: number;
  projectEnv?: string;
  bizDate?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectEnv: 'ProjectEnv',
      bizDate: 'BizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectEnv: 'string',
      bizDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusCountResponseBody extends $tea.Model {
  requestId?: string;
  statusCount?: GetInstanceStatusCountResponseBodyStatusCount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCount: 'StatusCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCount: GetInstanceStatusCountResponseBodyStatusCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceStatusCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceStatusCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusStatisticRequest extends $tea.Model {
  projectId?: number;
  projectEnv?: string;
  bizDate?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectEnv: 'ProjectEnv',
      bizDate: 'BizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectEnv: 'string',
      bizDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusStatisticResponseBody extends $tea.Model {
  requestId?: string;
  statusCount?: GetInstanceStatusStatisticResponseBodyStatusCount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCount: 'StatusCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCount: GetInstanceStatusStatisticResponseBodyStatusCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceStatusStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceStatusStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManualDagInstancesRequest extends $tea.Model {
  projectEnv?: string;
  projectName?: string;
  dagId?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
      dagId: 'DagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      projectName: 'string',
      dagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManualDagInstancesResponseBody extends $tea.Model {
  requestId?: string;
  instances?: GetManualDagInstancesResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instances: { 'type': 'array', 'itemType': GetManualDagInstancesResponseBodyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManualDagInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetManualDagInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetManualDagInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryRequest extends $tea.Model {
  parentCategoryId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      parentCategoryId: 'ParentCategoryId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCategoryId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaCategoryResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaCategoryResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageRequest extends $tea.Model {
  columnGuid?: string;
  direction?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  columnName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      columnGuid: 'ColumnGuid',
      direction: 'Direction',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      columnName: 'ColumnName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnGuid: 'string',
      direction: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      columnName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaColumnLineageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaColumnLineageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaColumnLineageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaColumnLineageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoRequest extends $tea.Model {
  appGuid?: string;
  clusterId?: string;
  databaseName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetMetaDBInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetMetaDBInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaDBInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaDBInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  appGuid?: string;
  clusterId?: string;
  databaseName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      appGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetMetaDBTableListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetMetaDBTableListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaDBTableListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaDBTableListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoRequest extends $tea.Model {
  tableGuid?: string;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  extension?: boolean;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
      extension: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTableBasicInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTableBasicInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableGuid?: string;
  changeType?: string;
  objectType?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      changeType: 'ChangeType',
      objectType: 'ObjectType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      changeType: 'string',
      objectType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTableChangeLogResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTableChangeLogResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableChangeLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableChangeLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnRequest extends $tea.Model {
  tableGuid?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTableColumnResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTableColumnResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableColumnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableColumnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoRequest extends $tea.Model {
  tableGuid?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTableFullInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTableFullInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableFullInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableFullInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiRequest extends $tea.Model {
  tableGuid?: string;
  wikiVersion?: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      wikiVersion: 'WikiVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      wikiVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTableIntroWikiResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTableIntroWikiResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableIntroWikiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableIntroWikiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageRequest extends $tea.Model {
  tableGuid?: string;
  direction?: string;
  nextPrimaryKey?: string;
  pageSize?: number;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      direction: 'Direction',
      nextPrimaryKey: 'NextPrimaryKey',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      direction: 'string',
      nextPrimaryKey: 'string',
      pageSize: 'number',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTableLineageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTableLineageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableLineageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableLineageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTableListByCategoryResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTableListByCategoryResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableListByCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableListByCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableGuid?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTableOutputResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTableOutputResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableGuid?: string;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMetaTablePartitionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: GetMetaTablePartitionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTablePartitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTablePartitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelRequest extends $tea.Model {
  tableGuid?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  entity?: GetMetaTableThemeLevelResponseBodyEntity;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      entity: 'Entity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      entity: GetMetaTableThemeLevelResponseBodyEntity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableThemeLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableThemeLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationProcessRequest extends $tea.Model {
  projectId?: number;
  migrationId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      migrationId: 'MigrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      migrationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationProcessResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetMigrationProcessResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: { 'type': 'array', 'itemType': GetMigrationProcessResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMigrationProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMigrationProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeRequest extends $tea.Model {
  nodeId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetNodeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetNodeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeChildrenRequest extends $tea.Model {
  projectEnv?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeChildrenResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetNodeChildrenResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetNodeChildrenResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeChildrenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeChildrenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeChildrenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeCodeRequest extends $tea.Model {
  nodeId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeCodeResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOnBaselineRequest extends $tea.Model {
  baselineId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOnBaselineResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: string;
  data?: GetNodeOnBaselineResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'string',
      data: { 'type': 'array', 'itemType': GetNodeOnBaselineResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOnBaselineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeOnBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeOnBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeParentsRequest extends $tea.Model {
  projectEnv?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeParentsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetNodeParentsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetNodeParentsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeParentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeParentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeParentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  locale?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
      locale: 'Locale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
      locale: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseBody extends $tea.Model {
  requestId?: string;
  nodeTypeInfoList?: GetNodeTypeListInfoResponseBodyNodeTypeInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nodeTypeInfoList: 'NodeTypeInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nodeTypeInfoList: GetNodeTypeListInfoResponseBodyNodeTypeInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeTypeListInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeTypeListInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpRiskDataRequest extends $tea.Model {
  pageSize?: number;
  pageNo?: number;
  name?: string;
  date?: string;
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      name: 'Name',
      date: 'Date',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNo: 'number',
      name: 'string',
      date: 'string',
      riskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpRiskDataResponseBody extends $tea.Model {
  riskData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      riskData: 'RiskData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpRiskDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOpRiskDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOpRiskDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpSensitiveDataRequest extends $tea.Model {
  name?: string;
  pageSize?: number;
  pageNo?: number;
  date?: string;
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      date: 'Date',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageSize: 'number',
      pageNo: 'number',
      date: 'string',
      opType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpSensitiveDataResponseBody extends $tea.Model {
  opSensitiveData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opSensitiveData: 'OpSensitiveData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opSensitiveData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpSensitiveDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOpSensitiveDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOpSensitiveDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBody extends $tea.Model {
  requestId?: string;
  applyOrderDetail?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      applyOrderDetail: 'ApplyOrderDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      applyOrderDetail: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPermissionApplyOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPermissionApplyOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRequest extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  data?: GetProjectResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: GetProjectResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDetailRequest extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDetailResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  data?: GetProjectDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: GetProjectDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityRequest extends $tea.Model {
  projectName?: string;
  tableName?: string;
  envType?: string;
  matchExpression?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      tableName: 'TableName',
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      tableName: 'string',
      envType: 'string',
      matchExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetQualityEntityResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': GetQualityEntityResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerRequest extends $tea.Model {
  projectName?: string;
  entityId?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      entityId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: GetQualityFollowerResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: { 'type': 'array', 'itemType': GetQualityFollowerResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityFollowerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityFollowerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleRequest extends $tea.Model {
  ruleId?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetQualityRuleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetQualityRuleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindRequest extends $tea.Model {
  remindId?: number;
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetRemindResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetRemindResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRemindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRemindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveDataRequest extends $tea.Model {
  pageSize?: number;
  pageNo?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNo: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveDataResponseBody extends $tea.Model {
  sensitiveData?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sensitiveData: 'SensitiveData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSensitiveDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSensitiveDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendRequest extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBody extends $tea.Model {
  requestId?: string;
  instanceStatusTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrend;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceStatusTrend: 'InstanceStatusTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceStatusTrend: GetSuccessInstanceTrendResponseBodyInstanceStatusTrend,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSuccessInstanceTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSuccessInstanceTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicRequest extends $tea.Model {
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetTopicResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetTopicResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceRequest extends $tea.Model {
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: GetTopicInfluenceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: GetTopicInfluenceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTopicInfluenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTopicInfluenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportConnectionsRequest extends $tea.Model {
  projectId?: number;
  connections?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      connections: 'Connections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      connections: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportConnectionsResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: ImportConnectionsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: ImportConnectionsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourcesRequest extends $tea.Model {
  projectId?: number;
  dataSources?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      dataSources: 'DataSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      dataSources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourcesResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: ImportDataSourcesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: ImportDataSourcesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDISyncTasksRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  taskContent?: string;
  taskParam?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      taskContent: 'TaskContent',
      taskParam: 'TaskParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      taskContent: 'string',
      taskParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDISyncTasksResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  taskInfo?: ImportDISyncTasksResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      taskInfo: ImportDISyncTasksResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDISyncTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportDISyncTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportDISyncTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  beginTime?: string;
  endTime?: string;
  remindId?: number;
  alertMethods?: string;
  alertUser?: string;
  alertRuleTypes?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      remindId: 'RemindId',
      alertMethods: 'AlertMethods',
      alertUser: 'AlertUser',
      alertRuleTypes: 'AlertRuleTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      beginTime: 'string',
      endTime: 'string',
      remindId: 'number',
      alertMethods: 'string',
      alertUser: 'string',
      alertRuleTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListAlertMessagesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListAlertMessagesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlertMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlertMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  owner?: string;
  projectId?: number;
  priority?: string;
  useflag?: boolean;
  baselineTypes?: string;
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      owner: 'Owner',
      projectId: 'ProjectId',
      priority: 'Priority',
      useflag: 'Useflag',
      baselineTypes: 'BaselineTypes',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      owner: 'string',
      projectId: 'number',
      priority: 'string',
      useflag: 'boolean',
      baselineTypes: 'string',
      searchText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListBaselineConfigsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListBaselineConfigsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBaselineConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBaselineConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  bizdate?: string;
  priority?: string;
  searchText?: string;
  owner?: string;
  topicId?: number;
  finishStatus?: string;
  status?: string;
  baselineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      bizdate: 'Bizdate',
      priority: 'Priority',
      searchText: 'SearchText',
      owner: 'Owner',
      topicId: 'TopicId',
      finishStatus: 'FinishStatus',
      status: 'Status',
      baselineTypes: 'BaselineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      bizdate: 'string',
      priority: 'string',
      searchText: 'string',
      owner: 'string',
      topicId: 'number',
      finishStatus: 'string',
      status: 'string',
      baselineTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListBaselineStatusesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListBaselineStatusesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBaselineStatusesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBaselineStatusesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListBusinessResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListBusinessResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBusinessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBusinessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  calcEngineType?: string;
  envType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      calcEngineType: 'CalcEngineType',
      envType: 'EnvType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      calcEngineType: 'string',
      envType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  data?: ListCalcEnginesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ListCalcEnginesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCalcEnginesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCalcEnginesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  connectionType?: string;
  subType?: string;
  status?: string;
  envType?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      connectionType: 'ConnectionType',
      subType: 'SubType',
      status: 'Status',
      envType: 'EnvType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      connectionType: 'string',
      subType: 'string',
      status: 'string',
      envType: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  data?: ListConnectionsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ListConnectionsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesRequest extends $tea.Model {
  projectId?: number;
  pageNumber?: number;
  pageSize?: number;
  tenantId?: number;
  apiNameKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      apiNameKeyword: 'ApiNameKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'number',
      apiNameKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: ListDataServiceApiAuthoritiesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: ListDataServiceApiAuthoritiesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataServiceApiAuthoritiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataServiceApiAuthoritiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  apiNameKeyword?: string;
  apiPathKeyword?: string;
  creatorId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      apiNameKeyword: 'ApiNameKeyword',
      apiPathKeyword: 'ApiPathKeyword',
      creatorId: 'CreatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
      apiNameKeyword: 'string',
      apiPathKeyword: 'string',
      creatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: ListDataServiceApisResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: ListDataServiceApisResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataServiceApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataServiceApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectIdList?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectIdList: 'ProjectIdList',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectIdList: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: ListDataServiceApplicationsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: ListDataServiceApplicationsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataServiceApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataServiceApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisRequest extends $tea.Model {
  projectId?: number;
  pageNumber?: number;
  pageSize?: number;
  tenantId?: number;
  apiNameKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      apiNameKeyword: 'ApiNameKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'number',
      apiNameKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: ListDataServiceAuthorizedApisResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: ListDataServiceAuthorizedApisResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataServiceAuthorizedApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataServiceAuthorizedApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  groupId?: string;
  folderNameKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      groupId: 'GroupId',
      folderNameKeyword: 'FolderNameKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
      groupId: 'string',
      folderNameKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseBody extends $tea.Model {
  requestId?: string;
  folderPagingResult?: ListDataServiceFoldersResponseBodyFolderPagingResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folderPagingResult: 'FolderPagingResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folderPagingResult: ListDataServiceFoldersResponseBodyFolderPagingResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataServiceFoldersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataServiceFoldersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  groupNameKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      groupNameKeyword: 'GroupNameKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
      groupNameKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  groupPagingResult?: ListDataServiceGroupsResponseBodyGroupPagingResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupPagingResult: 'GroupPagingResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupPagingResult: ListDataServiceGroupsResponseBodyGroupPagingResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataServiceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataServiceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  apiNameKeyword?: string;
  apiPathKeyword?: string;
  creatorId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      apiNameKeyword: 'ApiNameKeyword',
      apiPathKeyword: 'ApiPathKeyword',
      creatorId: 'CreatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
      apiNameKeyword: 'string',
      apiPathKeyword: 'string',
      creatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: ListDataServicePublishedApisResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: ListDataServicePublishedApisResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataServicePublishedApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataServicePublishedApisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  dataSourceType?: string;
  subType?: string;
  status?: string;
  envType?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      dataSourceType: 'DataSourceType',
      subType: 'SubType',
      status: 'Status',
      envType: 'EnvType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      dataSourceType: 'string',
      subType: 'string',
      status: 'string',
      envType: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  data?: ListDataSourcesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ListDataSourcesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIProjectConfigRequest extends $tea.Model {
  projectId?: number;
  destinationType?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      destinationType: 'DestinationType',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      destinationType: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIProjectConfigResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: ListDIProjectConfigResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: ListDIProjectConfigResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIProjectConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDIProjectConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDIProjectConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDISyncTasksRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDISyncTasksResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  taskList?: ListDISyncTasksResponseBodyTaskList;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      taskList: ListDISyncTasksResponseBodyTaskList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDISyncTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDISyncTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDISyncTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  keyword?: string;
  projectIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  useType?: string;
  fileTypes?: string;
  owner?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      keyword: 'Keyword',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      useType: 'UseType',
      fileTypes: 'FileTypes',
      owner: 'Owner',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      keyword: 'string',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      useType: 'string',
      fileTypes: 'string',
      owner: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListFilesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListFilesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  locale?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
      locale: 'Locale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
      locale: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeResponseBody extends $tea.Model {
  requestId?: string;
  nodeTypeInfoList?: ListFileTypeResponseBodyNodeTypeInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nodeTypeInfoList: 'NodeTypeInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nodeTypeInfoList: ListFileTypeResponseBodyNodeTypeInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFileTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFileTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsRequest extends $tea.Model {
  fileId?: number;
  projectId?: number;
  projectIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListFileVersionsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListFileVersionsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFileVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFileVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  parentFolderPath?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      parentFolderPath: 'ParentFolderPath',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      parentFolderPath: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListFoldersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListFoldersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFoldersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFoldersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAmountRequest extends $tea.Model {
  projectId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAmountResponseBody extends $tea.Model {
  requestId?: string;
  instanceCounts?: ListInstanceAmountResponseBodyInstanceCounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceCounts: 'InstanceCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceCounts: { 'type': 'array', 'itemType': ListInstanceAmountResponseBodyInstanceCounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAmountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceAmountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  projectEnv?: string;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  bizName?: string;
  programType?: string;
  pageNumber?: number;
  pageSize?: number;
  dagId?: number;
  bizdate?: string;
  beginBizdate?: string;
  endBizdate?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      bizName: 'BizName',
      programType: 'ProgramType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      dagId: 'DagId',
      bizdate: 'Bizdate',
      beginBizdate: 'BeginBizdate',
      endBizdate: 'EndBizdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
      bizName: 'string',
      programType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      dagId: 'number',
      bizdate: 'string',
      beginBizdate: 'string',
      endBizdate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListInstancesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListInstancesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualDagInstancesRequest extends $tea.Model {
  projectEnv?: string;
  projectName?: string;
  dagId?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
      dagId: 'DagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      projectName: 'string',
      dagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualDagInstancesResponseBody extends $tea.Model {
  requestId?: string;
  instances?: ListManualDagInstancesResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instances: { 'type': 'array', 'itemType': ListManualDagInstancesResponseBodyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualDagInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListManualDagInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListManualDagInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBRequest extends $tea.Model {
  projectId?: number;
  dataSourceType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      dataSourceType: 'DataSourceType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      dataSourceType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseBody extends $tea.Model {
  requestId?: string;
  databaseInfo?: ListMetaDBResponseBodyDatabaseInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      databaseInfo: 'DatabaseInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      databaseInfo: ListMetaDBResponseBodyDatabaseInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMetaDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMetaDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInputOrOutputRequest extends $tea.Model {
  nodeId?: number;
  projectEnv?: string;
  ioType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
      ioType: 'IoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
      ioType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInputOrOutputResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListNodeInputOrOutputResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': ListNodeInputOrOutputResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInputOrOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodeInputOrOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodeInputOrOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIORequest extends $tea.Model {
  nodeId?: number;
  projectEnv?: string;
  ioType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
      ioType: 'IoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
      ioType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIOResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListNodeIOResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': ListNodeIOResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIOResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodeIOResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodeIOResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  owner?: string;
  bizName?: string;
  programType?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  projectEnv?: string;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      bizName: 'BizName',
      programType: 'ProgramType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectEnv: 'ProjectEnv',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      bizName: 'string',
      programType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectEnv: 'string',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListNodesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListNodesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByBaselineRequest extends $tea.Model {
  baselineId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByBaselineResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: string;
  data?: ListNodesByBaselineResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'string',
      data: { 'type': 'array', 'itemType': ListNodesByBaselineResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByBaselineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesByBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesByBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputRequest extends $tea.Model {
  projectEnv?: string;
  outputs?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      outputs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListNodesByOutputResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': ListNodesByOutputResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesByOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesByOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersRequest extends $tea.Model {
  flowStatus?: number;
  workspaceId?: number;
  orderType?: number;
  maxComputeProjectName?: string;
  tableName?: string;
  startTime?: number;
  endTime?: number;
  engineType?: string;
  pageNum?: number;
  pageSize?: number;
  queryType?: number;
  static names(): { [key: string]: string } {
    return {
      flowStatus: 'FlowStatus',
      workspaceId: 'WorkspaceId',
      orderType: 'OrderType',
      maxComputeProjectName: 'MaxComputeProjectName',
      tableName: 'TableName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      engineType: 'EngineType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowStatus: 'number',
      workspaceId: 'number',
      orderType: 'number',
      maxComputeProjectName: 'string',
      tableName: 'string',
      startTime: 'number',
      endTime: 'number',
      engineType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBody extends $tea.Model {
  requestId?: string;
  applyOrders?: ListPermissionApplyOrdersResponseBodyApplyOrders;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      applyOrders: 'ApplyOrders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      applyOrders: ListPermissionApplyOrdersResponseBodyApplyOrders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPermissionApplyOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPermissionApplyOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountRequest extends $tea.Model {
  projectId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountResponseBody extends $tea.Model {
  requestId?: string;
  programTypeAndCounts?: ListProgramTypeCountResponseBodyProgramTypeAndCounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      programTypeAndCounts: 'ProgramTypeAndCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      programTypeAndCounts: { 'type': 'array', 'itemType': ListProgramTypeCountResponseBodyProgramTypeAndCounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProgramTypeCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProgramTypeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectIdsRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectIdsResponseBody extends $tea.Model {
  requestId?: string;
  projectIds?: number[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersRequest extends $tea.Model {
  projectId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListProjectMembersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListProjectMembersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesRequest extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBody extends $tea.Model {
  requestId?: string;
  projectRoleList?: ListProjectRolesResponseBodyProjectRoleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectRoleList: 'ProjectRoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectRoleList: { 'type': 'array', 'itemType': ListProjectRolesResponseBodyProjectRoleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  requestId?: string;
  pageResult?: ListProjectsResponseBodyPageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageResult: 'PageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageResult: ListProjectsResponseBodyPageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityRequest extends $tea.Model {
  entityId?: number;
  startDate?: string;
  endDate?: string;
  pageSize?: number;
  pageNumber?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      startDate: 'string',
      endDate: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: ListQualityResultsByEntityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: ListQualityResultsByEntityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQualityResultsByEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQualityResultsByEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleRequest extends $tea.Model {
  ruleId?: number;
  startDate?: string;
  endDate?: string;
  pageSize?: number;
  pageNumber?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      startDate: 'string',
      endDate: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListQualityResultsByRuleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListQualityResultsByRuleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQualityResultsByRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQualityResultsByRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesRequest extends $tea.Model {
  projectName?: string;
  entityId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      entityId: 'EntityId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      entityId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: ListQualityRulesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: ListQualityRulesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQualityRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQualityRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRefDISyncTasksRequest extends $tea.Model {
  projectId?: number;
  datasourceName?: string;
  taskType?: string;
  refType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      datasourceName: 'DatasourceName',
      taskType: 'TaskType',
      refType: 'RefType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      datasourceName: 'string',
      taskType: 'string',
      refType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRefDISyncTasksResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: ListRefDISyncTasksResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: ListRefDISyncTasksResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRefDISyncTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRefDISyncTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRefDISyncTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  founder?: string;
  nodeId?: number;
  remindTypes?: string;
  alertTarget?: string;
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      founder: 'Founder',
      nodeId: 'NodeId',
      remindTypes: 'RemindTypes',
      alertTarget: 'AlertTarget',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      founder: 'string',
      nodeId: 'number',
      remindTypes: 'string',
      alertTarget: 'string',
      searchText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListRemindsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListRemindsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRemindsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRemindsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequest extends $tea.Model {
  resourceGroupType?: number;
  keyword?: string;
  bizExtKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupType: 'ResourceGroupType',
      keyword: 'Keyword',
      bizExtKey: 'BizExtKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupType: 'number',
      keyword: 'string',
      bizExtKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  data?: ListResourceGroupsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountRequest extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBody extends $tea.Model {
  requestId?: string;
  instanceStatusTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrend;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceStatusTrend: 'InstanceStatusTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceStatusTrend: ListSuccessInstanceAmountResponseBodyInstanceStatusTrend,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSuccessInstanceAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSuccessInstanceAmountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelRequest extends $tea.Model {
  projectId?: number;
  levelType?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      levelType: 'LevelType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      levelType: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  tableLevelInfo?: ListTableLevelResponseBodyTableLevelInfo;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      tableLevelInfo: 'TableLevelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      tableLevelInfo: ListTableLevelResponseBodyTableLevelInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTableLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTableLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeRequest extends $tea.Model {
  projectId?: number;
  parentId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      parentId: 'ParentId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      parentId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: ListTableThemeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: ListTableThemeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTableThemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTableThemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsRequest extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  topicTypes?: string;
  topicStatuses?: string;
  nodeId?: number;
  instanceId?: number;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      topicTypes: 'TopicTypes',
      topicStatuses: 'TopicStatuses',
      nodeId: 'NodeId',
      instanceId: 'InstanceId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      topicTypes: 'string',
      topicStatuses: 'string',
      nodeId: 'number',
      instanceId: 'number',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  data?: ListTopicsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
      data: ListTopicsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTopicsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTopicsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDataServiceApiRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDataServiceApiResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDataServiceApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishDataServiceApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishDataServiceApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPublicModelEngineRequest extends $tea.Model {
  text?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPublicModelEngineResponseBody extends $tea.Model {
  requestId?: string;
  returnValue?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      returnValue: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPublicModelEngineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPublicModelEngineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPublicModelEngineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveProjectMemberFromRoleRequest extends $tea.Model {
  projectId?: number;
  userId?: string;
  roleCode?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
      roleCode: 'RoleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
      roleCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveProjectMemberFromRoleResponseBody extends $tea.Model {
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

export class RemoveProjectMemberFromRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveProjectMemberFromRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveProjectMemberFromRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceRequest extends $tea.Model {
  instanceId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceRequest extends $tea.Model {
  instanceId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeColumnPermissionRequest extends $tea.Model {
  workspaceId?: number;
  maxComputeProjectName?: string;
  tableName?: string;
  columns?: string;
  revokeUserName?: string;
  revokeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      maxComputeProjectName: 'MaxComputeProjectName',
      tableName: 'TableName',
      columns: 'Columns',
      revokeUserName: 'RevokeUserName',
      revokeUserId: 'RevokeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'number',
      maxComputeProjectName: 'string',
      tableName: 'string',
      columns: 'string',
      revokeUserName: 'string',
      revokeUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeColumnPermissionResponseBody extends $tea.Model {
  revokeSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      revokeSuccess: 'RevokeSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revokeSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeColumnPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeColumnPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeColumnPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTablePermissionRequest extends $tea.Model {
  workspaceId?: number;
  maxComputeProjectName?: string;
  tableName?: string;
  actions?: string;
  revokeUserName?: string;
  revokeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      maxComputeProjectName: 'MaxComputeProjectName',
      tableName: 'TableName',
      actions: 'Actions',
      revokeUserName: 'RevokeUserName',
      revokeUserId: 'RevokeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'number',
      maxComputeProjectName: 'string',
      tableName: 'string',
      actions: 'string',
      revokeUserName: 'string',
      revokeUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTablePermissionResponseBody extends $tea.Model {
  revokeSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      revokeSuccess: 'RevokeSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revokeSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTablePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeTablePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeTablePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCycleDagNodesRequest extends $tea.Model {
  projectEnv?: string;
  startBizDate?: string;
  name?: string;
  rootNodeId?: number;
  excludeNodeIds?: string;
  bizBeginTime?: string;
  bizEndTime?: string;
  parallelism?: boolean;
  endBizDate?: string;
  nodeParams?: string;
  includeNodeIds?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      startBizDate: 'StartBizDate',
      name: 'Name',
      rootNodeId: 'RootNodeId',
      excludeNodeIds: 'ExcludeNodeIds',
      bizBeginTime: 'BizBeginTime',
      bizEndTime: 'BizEndTime',
      parallelism: 'Parallelism',
      endBizDate: 'EndBizDate',
      nodeParams: 'NodeParams',
      includeNodeIds: 'IncludeNodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      startBizDate: 'string',
      name: 'string',
      rootNodeId: 'number',
      excludeNodeIds: 'string',
      bizBeginTime: 'string',
      bizEndTime: 'string',
      parallelism: 'boolean',
      endBizDate: 'string',
      nodeParams: 'string',
      includeNodeIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCycleDagNodesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  data?: number[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCycleDagNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunCycleDagNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunCycleDagNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunManualDagNodesRequest extends $tea.Model {
  projectEnv?: string;
  projectName?: string;
  flowName?: string;
  bizDate?: string;
  nodeParameters?: string;
  dagParameters?: string;
  includeNodeIds?: string;
  excludeNodeIds?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
      flowName: 'FlowName',
      bizDate: 'BizDate',
      nodeParameters: 'NodeParameters',
      dagParameters: 'DagParameters',
      includeNodeIds: 'IncludeNodeIds',
      excludeNodeIds: 'ExcludeNodeIds',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      projectName: 'string',
      flowName: 'string',
      bizDate: 'string',
      nodeParameters: 'string',
      dagParameters: 'string',
      includeNodeIds: 'string',
      excludeNodeIds: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunManualDagNodesResponseBody extends $tea.Model {
  dagId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunManualDagNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunManualDagNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunManualDagNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSmokeTestRequest extends $tea.Model {
  projectEnv?: string;
  bizdate?: string;
  name?: string;
  nodeId?: number;
  nodeParams?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      bizdate: 'Bizdate',
      name: 'Name',
      nodeId: 'NodeId',
      nodeParams: 'NodeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      bizdate: 'string',
      name: 'string',
      nodeId: 'number',
      nodeParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSmokeTestResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSmokeTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunSmokeTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunSmokeTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTriggerNodeRequest extends $tea.Model {
  nodeId?: number;
  cycleTime?: number;
  bizDate?: number;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      cycleTime: 'CycleTime',
      bizDate: 'BizDate',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      cycleTime: 'number',
      bizDate: 'number',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTriggerNodeResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTriggerNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunTriggerNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunTriggerNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanSensitiveDataRequest extends $tea.Model {
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanSensitiveDataResponseBody extends $tea.Model {
  sensitives?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sensitives: 'Sensitives',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitives: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanSensitiveDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScanSensitiveDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScanSensitiveDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  appGuid?: string;
  keyword?: string;
  entityType?: number;
  clusterId?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      appGuid: 'AppGuid',
      keyword: 'Keyword',
      entityType: 'EntityType',
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      appGuid: 'string',
      keyword: 'string',
      entityType: 'number',
      clusterId: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  data?: SearchMetaTablesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      data: SearchMetaTablesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchMetaTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchMetaTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNodesByOutputRequest extends $tea.Model {
  projectEnv?: string;
  outputs?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      outputs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNodesByOutputResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: { [key: string]: any };
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNodesByOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchNodesByOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchNodesByOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetConnectionShareRequest extends $tea.Model {
  projectId?: number;
  datasourceName?: string;
  envType?: string;
  projectPermissions?: string;
  userPermissions?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      projectPermissions: 'ProjectPermissions',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      datasourceName: 'string',
      envType: 'string',
      projectPermissions: 'string',
      userPermissions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetConnectionShareResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: SetConnectionShareResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: SetConnectionShareResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetConnectionShareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetConnectionShareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetConnectionShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataSourceShareRequest extends $tea.Model {
  projectId?: number;
  datasourceName?: string;
  envType?: string;
  projectPermissions?: string;
  userPermissions?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      projectPermissions: 'ProjectPermissions',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      datasourceName: 'string',
      envType: 'string',
      projectPermissions: 'string',
      userPermissions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataSourceShareResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: SetDataSourceShareResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: SetDataSourceShareResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataSourceShareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDataSourceShareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDataSourceShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSuccessInstanceRequest extends $tea.Model {
  instanceId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSuccessInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSuccessInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetSuccessInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetSuccessInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDISyncInstanceRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  fileId?: number;
  startParam?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      fileId: 'FileId',
      startParam: 'StartParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      fileId: 'number',
      startParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDISyncInstanceResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: StartDISyncInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: StartDISyncInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDISyncInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDISyncInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDISyncInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationRequest extends $tea.Model {
  projectId?: number;
  migrationId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      migrationId: 'MigrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      migrationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartMigrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartMigrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDISyncInstanceRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDISyncInstanceResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: StopDISyncInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: StopDISyncInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDISyncInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDISyncInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDISyncInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  instanceId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFileRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  fileId?: number;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      fileId: 'number',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFileResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: number;
  requestId?: string;
  errorMessage?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'number',
      requestId: 'string',
      errorMessage: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendInstanceRequest extends $tea.Model {
  instanceId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateDISyncInstanceRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateDISyncInstanceResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: TerminateDISyncInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: TerminateDISyncInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateDISyncInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TerminateDISyncInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TerminateDISyncInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestNetworkConnectionRequest extends $tea.Model {
  projectId?: number;
  datasourceName?: string;
  envType?: string;
  resourceGroup?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      datasourceName: 'string',
      envType: 'string',
      resourceGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestNetworkConnectionResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  taskList?: TestNetworkConnectionResponseBodyTaskList;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      taskList: TestNetworkConnectionResponseBodyTaskList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestNetworkConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TestNetworkConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TestNetworkConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenElapsedTimeInstanceRequest extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenElapsedTimeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceConsumeTimeRank?: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceConsumeTimeRank: 'InstanceConsumeTimeRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceConsumeTimeRank: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenElapsedTimeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TopTenElapsedTimeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TopTenElapsedTimeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceRequest extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceErrorRank?: TopTenErrorTimesInstanceResponseBodyInstanceErrorRank;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceErrorRank: 'InstanceErrorRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceErrorRank: TopTenErrorTimesInstanceResponseBodyInstanceErrorRank,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TopTenErrorTimesInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TopTenErrorTimesInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessName?: string;
  description?: string;
  owner?: string;
  businessId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      businessId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateBusinessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateBusinessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequest extends $tea.Model {
  description?: string;
  envType?: number;
  content?: string;
  status?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envType: 'EnvType',
      content: 'Content',
      status: 'Status',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envType: 'number',
      content: 'string',
      status: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionResponseBody extends $tea.Model {
  httpStatusCode?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataServiceApiRequest extends $tea.Model {
  tenantId?: number;
  projectId?: number;
  apiId?: number;
  requestMethod?: number;
  responseContentType?: number;
  timeout?: number;
  visibleRange?: number;
  protocols?: string;
  wizardDetails?: string;
  scriptDetails?: string;
  registrationDetails?: string;
  apiPath?: string;
  apiDescription?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      protocols: 'Protocols',
      wizardDetails: 'WizardDetails',
      scriptDetails: 'ScriptDetails',
      registrationDetails: 'RegistrationDetails',
      apiPath: 'ApiPath',
      apiDescription: 'ApiDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
      requestMethod: 'number',
      responseContentType: 'number',
      timeout: 'number',
      visibleRange: 'number',
      protocols: 'string',
      wizardDetails: 'string',
      scriptDetails: 'string',
      registrationDetails: 'string',
      apiPath: 'string',
      apiDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataServiceApiResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataServiceApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDataServiceApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDataServiceApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceRequest extends $tea.Model {
  description?: string;
  envType?: number;
  content?: string;
  status?: string;
  dataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envType: 'EnvType',
      content: 'Content',
      status: 'Status',
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envType: 'number',
      content: 'string',
      status: 'string',
      dataSourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceResponseBody extends $tea.Model {
  httpStatusCode?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIProjectConfigRequest extends $tea.Model {
  projectId?: number;
  destinationType?: string;
  sourceType?: string;
  projectConfig?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      destinationType: 'DestinationType',
      sourceType: 'SourceType',
      projectConfig: 'ProjectConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      destinationType: 'string',
      sourceType: 'string',
      projectConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIProjectConfigResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: UpdateDIProjectConfigResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: UpdateDIProjectConfigResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIProjectConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDIProjectConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDIProjectConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDISyncTaskRequest extends $tea.Model {
  projectId?: number;
  taskType?: string;
  taskContent?: string;
  taskParam?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      taskType: 'TaskType',
      taskContent: 'TaskContent',
      taskParam: 'TaskParam',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      taskType: 'string',
      taskContent: 'string',
      taskParam: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDISyncTaskResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: UpdateDISyncTaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: UpdateDISyncTaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDISyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDISyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDISyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  fileName?: string;
  fileDescription?: string;
  content?: string;
  autoRerunTimes?: number;
  autoRerunIntervalMillis?: number;
  rerunMode?: string;
  stop?: boolean;
  paraValue?: string;
  startEffectDate?: number;
  endEffectDate?: number;
  cronExpress?: string;
  cycleType?: string;
  dependentType?: string;
  dependentNodeIdList?: string;
  inputList?: string;
  projectIdentifier?: string;
  fileId?: number;
  outputList?: string;
  resourceGroupIdentifier?: string;
  connectionName?: string;
  owner?: string;
  autoParsing?: boolean;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      fileName: 'FileName',
      fileDescription: 'FileDescription',
      content: 'Content',
      autoRerunTimes: 'AutoRerunTimes',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      rerunMode: 'RerunMode',
      stop: 'Stop',
      paraValue: 'ParaValue',
      startEffectDate: 'StartEffectDate',
      endEffectDate: 'EndEffectDate',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentType: 'DependentType',
      dependentNodeIdList: 'DependentNodeIdList',
      inputList: 'InputList',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
      outputList: 'OutputList',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
      connectionName: 'ConnectionName',
      owner: 'Owner',
      autoParsing: 'AutoParsing',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      fileName: 'string',
      fileDescription: 'string',
      content: 'string',
      autoRerunTimes: 'number',
      autoRerunIntervalMillis: 'number',
      rerunMode: 'string',
      stop: 'boolean',
      paraValue: 'string',
      startEffectDate: 'number',
      endEffectDate: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentType: 'string',
      dependentNodeIdList: 'string',
      inputList: 'string',
      projectIdentifier: 'string',
      fileId: 'number',
      outputList: 'string',
      resourceGroupIdentifier: 'string',
      connectionName: 'string',
      owner: 'string',
      autoParsing: 'boolean',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  folderId?: string;
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      folderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaCategoryRequest extends $tea.Model {
  name?: string;
  comment?: string;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      comment: 'Comment',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      comment: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaCategoryResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  requestId?: string;
  errorMessage?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      requestId: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMetaCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMetaCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableRequest extends $tea.Model {
  projectId?: number;
  tableName?: string;
  envType?: number;
  tableGuid?: string;
  newOwnerId?: string;
  addedLabels?: string;
  removedLabels?: string;
  categoryId?: number;
  visibility?: number;
  caption?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      tableName: 'TableName',
      envType: 'EnvType',
      tableGuid: 'TableGuid',
      newOwnerId: 'NewOwnerId',
      addedLabels: 'AddedLabels',
      removedLabels: 'RemovedLabels',
      categoryId: 'CategoryId',
      visibility: 'Visibility',
      caption: 'Caption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      tableName: 'string',
      envType: 'number',
      tableGuid: 'string',
      newOwnerId: 'string',
      addedLabels: 'string',
      removedLabels: 'string',
      categoryId: 'number',
      visibility: 'number',
      caption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableResponseBody extends $tea.Model {
  updateResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      updateResult: 'UpdateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMetaTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMetaTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableIntroWikiRequest extends $tea.Model {
  tableGuid?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableIntroWikiResponseBody extends $tea.Model {
  updateResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      updateResult: 'UpdateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableIntroWikiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMetaTableIntroWikiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMetaTableIntroWikiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeOwnerRequest extends $tea.Model {
  projectEnv?: string;
  nodeId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      nodeId: 'NodeId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      nodeId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeOwnerResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNodeOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNodeOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeRunModeRequest extends $tea.Model {
  projectEnv?: string;
  nodeId?: number;
  schedulerType?: number;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      nodeId: 'NodeId',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      nodeId: 'number',
      schedulerType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeRunModeResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeRunModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNodeRunModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNodeRunModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityFollowerRequest extends $tea.Model {
  projectName?: string;
  followerId?: number;
  follower?: string;
  alarmMode?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      followerId: 'FollowerId',
      follower: 'Follower',
      alarmMode: 'AlarmMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      followerId: 'number',
      follower: 'string',
      alarmMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityFollowerResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityFollowerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateQualityFollowerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateQualityFollowerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityRuleRequest extends $tea.Model {
  blockType?: number;
  entityId?: number;
  comment?: string;
  checker?: number;
  expectValue?: string;
  id?: number;
  trend?: string;
  methodName?: string;
  operator?: string;
  projectName?: string;
  property?: string;
  propertyType?: string;
  ruleType?: number;
  whereCondition?: string;
  criticalThreshold?: string;
  warningThreshold?: string;
  templateId?: number;
  ruleName?: string;
  predictType?: number;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      entityId: 'EntityId',
      comment: 'Comment',
      checker: 'Checker',
      expectValue: 'ExpectValue',
      id: 'Id',
      trend: 'Trend',
      methodName: 'MethodName',
      operator: 'Operator',
      projectName: 'ProjectName',
      property: 'Property',
      propertyType: 'PropertyType',
      ruleType: 'RuleType',
      whereCondition: 'WhereCondition',
      criticalThreshold: 'CriticalThreshold',
      warningThreshold: 'WarningThreshold',
      templateId: 'TemplateId',
      ruleName: 'RuleName',
      predictType: 'PredictType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      entityId: 'number',
      comment: 'string',
      checker: 'number',
      expectValue: 'string',
      id: 'number',
      trend: 'string',
      methodName: 'string',
      operator: 'string',
      projectName: 'string',
      property: 'string',
      propertyType: 'string',
      ruleType: 'number',
      whereCondition: 'string',
      criticalThreshold: 'string',
      warningThreshold: 'string',
      templateId: 'number',
      ruleName: 'string',
      predictType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityRuleResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemindRequest extends $tea.Model {
  remindId?: number;
  remindName?: string;
  dndEnd?: string;
  remindUnit?: string;
  nodeIds?: string;
  baselineIds?: string;
  projectId?: number;
  bizProcessIds?: string;
  remindType?: string;
  maxAlertTimes?: number;
  alertInterval?: number;
  detail?: string;
  alertUnit?: string;
  alertMethods?: string;
  alertTargets?: string;
  useFlag?: boolean;
  robotUrls?: string;
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
      remindName: 'RemindName',
      dndEnd: 'DndEnd',
      remindUnit: 'RemindUnit',
      nodeIds: 'NodeIds',
      baselineIds: 'BaselineIds',
      projectId: 'ProjectId',
      bizProcessIds: 'BizProcessIds',
      remindType: 'RemindType',
      maxAlertTimes: 'MaxAlertTimes',
      alertInterval: 'AlertInterval',
      detail: 'Detail',
      alertUnit: 'AlertUnit',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      useFlag: 'UseFlag',
      robotUrls: 'RobotUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
      remindName: 'string',
      dndEnd: 'string',
      remindUnit: 'string',
      nodeIds: 'string',
      baselineIds: 'string',
      projectId: 'number',
      bizProcessIds: 'string',
      remindType: 'string',
      maxAlertTimes: 'number',
      alertInterval: 'number',
      detail: 'string',
      alertUnit: 'string',
      alertMethods: 'string',
      alertTargets: 'string',
      useFlag: 'boolean',
      robotUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemindResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: boolean;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'boolean',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemindResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRemindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRemindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequest extends $tea.Model {
  isView?: number;
  visibility?: number;
  lifeCycle?: number;
  categoryId?: number;
  logicalLevelId?: number;
  physicsLevelId?: number;
  externalTableType?: string;
  location?: string;
  projectId?: number;
  tableName?: string;
  endpoint?: string;
  envType?: number;
  appGuid?: string;
  createIfNotExists?: boolean;
  ownerId?: string;
  hasPart?: number;
  comment?: string;
  columns?: UpdateTableRequestColumns[];
  themes?: UpdateTableRequestThemes[];
  static names(): { [key: string]: string } {
    return {
      isView: 'IsView',
      visibility: 'Visibility',
      lifeCycle: 'LifeCycle',
      categoryId: 'CategoryId',
      logicalLevelId: 'LogicalLevelId',
      physicsLevelId: 'PhysicsLevelId',
      externalTableType: 'ExternalTableType',
      location: 'Location',
      projectId: 'ProjectId',
      tableName: 'TableName',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      appGuid: 'AppGuid',
      createIfNotExists: 'CreateIfNotExists',
      ownerId: 'OwnerId',
      hasPart: 'HasPart',
      comment: 'Comment',
      columns: 'Columns',
      themes: 'Themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isView: 'number',
      visibility: 'number',
      lifeCycle: 'number',
      categoryId: 'number',
      logicalLevelId: 'number',
      physicsLevelId: 'number',
      externalTableType: 'string',
      location: 'string',
      projectId: 'number',
      tableName: 'string',
      endpoint: 'string',
      envType: 'number',
      appGuid: 'string',
      createIfNotExists: 'boolean',
      ownerId: 'string',
      hasPart: 'number',
      comment: 'string',
      columns: { 'type': 'array', 'itemType': UpdateTableRequestColumns },
      themes: { 'type': 'array', 'itemType': UpdateTableRequestThemes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableResponseBody extends $tea.Model {
  requestId?: string;
  taskInfo?: UpdateTableResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: UpdateTableResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableAddColumnRequest extends $tea.Model {
  tableGuid?: string;
  column?: UpdateTableAddColumnRequestColumn[];
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      column: { 'type': 'array', 'itemType': UpdateTableAddColumnRequestColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableAddColumnResponseBody extends $tea.Model {
  requestId?: string;
  taskInfo?: UpdateTableAddColumnResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: UpdateTableAddColumnResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableAddColumnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTableAddColumnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTableAddColumnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableLevelRequest extends $tea.Model {
  projectId?: number;
  levelType?: number;
  name?: string;
  description?: string;
  levelId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      levelType: 'LevelType',
      name: 'Name',
      description: 'Description',
      levelId: 'LevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      levelType: 'number',
      name: 'string',
      description: 'string',
      levelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableLevelResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  updateResult?: boolean;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      updateResult: 'UpdateResult',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      updateResult: 'boolean',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTableLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTableLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableModelInfoRequest extends $tea.Model {
  firstLevelThemeId?: number;
  secondLevelThemeId?: number;
  levelId?: number;
  tableGuid?: string;
  levelType?: number;
  static names(): { [key: string]: string } {
    return {
      firstLevelThemeId: 'FirstLevelThemeId',
      secondLevelThemeId: 'SecondLevelThemeId',
      levelId: 'LevelId',
      tableGuid: 'TableGuid',
      levelType: 'LevelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstLevelThemeId: 'number',
      secondLevelThemeId: 'number',
      levelId: 'number',
      tableGuid: 'string',
      levelType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableModelInfoResponseBody extends $tea.Model {
  updateResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      updateResult: 'UpdateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableModelInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTableModelInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTableModelInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableThemeRequest extends $tea.Model {
  projectId?: number;
  name?: string;
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      themeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableThemeResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  errorMessage?: string;
  updateResult?: boolean;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      updateResult: 'UpdateResult',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      errorMessage: 'string',
      updateResult: 'boolean',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableThemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTableThemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTableThemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfFileRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  functionType?: string;
  className?: string;
  resources?: string;
  udfDescription?: string;
  cmdDescription?: string;
  parameterDescription?: string;
  returnValue?: string;
  example?: string;
  projectIdentifier?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      functionType: 'FunctionType',
      className: 'ClassName',
      resources: 'Resources',
      udfDescription: 'UdfDescription',
      cmdDescription: 'CmdDescription',
      parameterDescription: 'ParameterDescription',
      returnValue: 'ReturnValue',
      example: 'Example',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      functionType: 'string',
      className: 'string',
      resources: 'string',
      udfDescription: 'string',
      cmdDescription: 'string',
      parameterDescription: 'string',
      returnValue: 'string',
      example: 'string',
      projectIdentifier: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfFileResponseBody extends $tea.Model {
  httpStatusCode?: number;
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUdfFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUdfFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDISyncTaskResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaCategoryResponseBodyData extends $tea.Model {
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionApplyOrderRequestApplyObjectColumnMetaList extends $tea.Model {
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

export class CreatePermissionApplyOrderRequestApplyObject extends $tea.Model {
  actions?: string;
  columnMetaList?: CreatePermissionApplyOrderRequestApplyObjectColumnMetaList[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      columnMetaList: 'ColumnMetaList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      columnMetaList: { 'type': 'array', 'itemType': CreatePermissionApplyOrderRequestApplyObjectColumnMetaList },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestColumns extends $tea.Model {
  columnNameCn?: string;
  columnName?: string;
  comment?: string;
  columnType?: string;
  seqNumber?: number;
  length?: number;
  isPartitionCol?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnNameCn: 'ColumnNameCn',
      columnName: 'ColumnName',
      comment: 'Comment',
      columnType: 'ColumnType',
      seqNumber: 'SeqNumber',
      length: 'Length',
      isPartitionCol: 'IsPartitionCol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNameCn: 'string',
      columnName: 'string',
      comment: 'string',
      columnType: 'string',
      seqNumber: 'number',
      length: 'number',
      isPartitionCol: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestThemes extends $tea.Model {
  themeId?: number;
  themeLevel?: number;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
      themeLevel: 'ThemeLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'number',
      themeLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponseBodyTaskInfo extends $tea.Model {
  status?: string;
  nextTaskId?: string;
  taskId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nextTaskId: 'NextTaskId',
      taskId: 'TaskId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nextTaskId: 'string',
      taskId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateViewRequestViewColumn extends $tea.Model {
  columnName?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateViewResponseBodyTaskInfo extends $tea.Model {
  status?: string;
  nextTaskId?: string;
  taskId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nextTaskId: 'NextTaskId',
      taskId: 'TaskId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nextTaskId: 'string',
      taskId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDISyncTaskResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponseBodyTaskInfo extends $tea.Model {
  status?: string;
  nextTaskId?: string;
  taskId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nextTaskId: 'NextTaskId',
      taskId: 'TaskId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nextTaskId: 'string',
      taskId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteViewResponseBodyTaskInfo extends $tea.Model {
  status?: string;
  nextTaskId?: string;
  taskId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nextTaskId: 'NextTaskId',
      taskId: 'TaskId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nextTaskId: 'string',
      taskId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDISyncTaskResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConnectionsResponseBodyDataDataSources extends $tea.Model {
  status?: number;
  projectId?: number;
  subType?: string;
  gmtModified?: string;
  envType?: number;
  connectStatus?: number;
  sequence?: number;
  description?: string;
  dataSourceType?: string;
  gmtCreate?: string;
  defaultEngine?: boolean;
  shared?: boolean;
  operator?: string;
  name?: string;
  content?: string;
  id?: number;
  bindingCalcEngineId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      subType: 'SubType',
      gmtModified: 'GmtModified',
      envType: 'EnvType',
      connectStatus: 'ConnectStatus',
      sequence: 'Sequence',
      description: 'Description',
      dataSourceType: 'DataSourceType',
      gmtCreate: 'GmtCreate',
      defaultEngine: 'DefaultEngine',
      shared: 'Shared',
      operator: 'Operator',
      name: 'Name',
      content: 'Content',
      id: 'Id',
      bindingCalcEngineId: 'BindingCalcEngineId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      projectId: 'number',
      subType: 'string',
      gmtModified: 'string',
      envType: 'number',
      connectStatus: 'number',
      sequence: 'number',
      description: 'string',
      dataSourceType: 'string',
      gmtCreate: 'string',
      defaultEngine: 'boolean',
      shared: 'boolean',
      operator: 'string',
      name: 'string',
      content: 'string',
      id: 'number',
      bindingCalcEngineId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConnectionsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  dataSources?: ExportConnectionsResponseBodyDataDataSources[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataSources: 'DataSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataSources: { 'type': 'array', 'itemType': ExportConnectionsResponseBodyDataDataSources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataSourcesResponseBodyDataDataSources extends $tea.Model {
  status?: number;
  projectId?: number;
  subType?: string;
  gmtModified?: string;
  envType?: number;
  connectStatus?: number;
  sequence?: number;
  description?: string;
  dataSourceType?: string;
  gmtCreate?: string;
  defaultEngine?: boolean;
  shared?: boolean;
  operator?: string;
  name?: string;
  content?: string;
  id?: number;
  bindingCalcEngineId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      subType: 'SubType',
      gmtModified: 'GmtModified',
      envType: 'EnvType',
      connectStatus: 'ConnectStatus',
      sequence: 'Sequence',
      description: 'Description',
      dataSourceType: 'DataSourceType',
      gmtCreate: 'GmtCreate',
      defaultEngine: 'DefaultEngine',
      shared: 'Shared',
      operator: 'Operator',
      name: 'Name',
      content: 'Content',
      id: 'Id',
      bindingCalcEngineId: 'BindingCalcEngineId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      projectId: 'number',
      subType: 'string',
      gmtModified: 'string',
      envType: 'number',
      connectStatus: 'number',
      sequence: 'number',
      description: 'string',
      dataSourceType: 'string',
      gmtCreate: 'string',
      defaultEngine: 'boolean',
      shared: 'boolean',
      operator: 'string',
      name: 'string',
      content: 'string',
      id: 'number',
      bindingCalcEngineId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataSourcesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  dataSources?: ExportDataSourcesResponseBodyDataDataSources[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataSources: 'DataSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataSources: { 'type': 'array', 'itemType': ExportDataSourcesResponseBodyDataDataSources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDISyncTasksResponseBodyTaskDetail extends $tea.Model {
  realTimeSolution?: string;
  static names(): { [key: string]: string } {
    return {
      realTimeSolution: 'RealTimeSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineConfigResponseBodyData extends $tea.Model {
  hourSlaDetail?: string;
  isDefault?: boolean;
  owner?: string;
  projectId?: number;
  priority?: number;
  slaMinu?: number;
  slaHour?: number;
  baselineId?: number;
  baselineName?: string;
  hourExpDetail?: string;
  useFlag?: boolean;
  expHour?: number;
  baselineType?: string;
  expMinu?: number;
  static names(): { [key: string]: string } {
    return {
      hourSlaDetail: 'HourSlaDetail',
      isDefault: 'IsDefault',
      owner: 'Owner',
      projectId: 'ProjectId',
      priority: 'Priority',
      slaMinu: 'SlaMinu',
      slaHour: 'SlaHour',
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      hourExpDetail: 'HourExpDetail',
      useFlag: 'UseFlag',
      expHour: 'ExpHour',
      baselineType: 'BaselineType',
      expMinu: 'ExpMinu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hourSlaDetail: 'string',
      isDefault: 'boolean',
      owner: 'string',
      projectId: 'number',
      priority: 'number',
      slaMinu: 'number',
      slaHour: 'number',
      baselineId: 'number',
      baselineName: 'string',
      hourExpDetail: 'string',
      useFlag: 'boolean',
      expHour: 'number',
      baselineType: 'string',
      expMinu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBodyDataRuns extends $tea.Model {
  status?: string;
  absTime?: number;
  beginRunningTime?: number;
  cycTime?: number;
  owner?: string;
  finishTime?: number;
  projectId?: number;
  beginCast?: number;
  instanceId?: number;
  endCast?: number;
  beginWaitResTime?: number;
  inGroupId?: number;
  nodeName?: string;
  bizdate?: number;
  beginWaitTimeTime?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      absTime: 'AbsTime',
      beginRunningTime: 'BeginRunningTime',
      cycTime: 'CycTime',
      owner: 'Owner',
      finishTime: 'FinishTime',
      projectId: 'ProjectId',
      beginCast: 'BeginCast',
      instanceId: 'InstanceId',
      endCast: 'EndCast',
      beginWaitResTime: 'BeginWaitResTime',
      inGroupId: 'InGroupId',
      nodeName: 'NodeName',
      bizdate: 'Bizdate',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      absTime: 'number',
      beginRunningTime: 'number',
      cycTime: 'number',
      owner: 'string',
      finishTime: 'number',
      projectId: 'number',
      beginCast: 'number',
      instanceId: 'number',
      endCast: 'number',
      beginWaitResTime: 'number',
      inGroupId: 'number',
      nodeName: 'string',
      bizdate: 'number',
      beginWaitTimeTime: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBodyDataTopics extends $tea.Model {
  topicName?: number;
  instanceId?: number;
  topicId?: number;
  addTime?: number;
  static names(): { [key: string]: string } {
    return {
      topicName: 'TopicName',
      instanceId: 'InstanceId',
      topicId: 'TopicId',
      addTime: 'AddTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicName: 'number',
      instanceId: 'number',
      topicId: 'number',
      addTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBodyData extends $tea.Model {
  owner?: string;
  nodeName?: string;
  bizdate?: number;
  projectId?: number;
  instanceId?: number;
  prgType?: number;
  nodeId?: number;
  inGroupId?: number;
  runs?: GetBaselineKeyPathResponseBodyDataRuns[];
  topics?: GetBaselineKeyPathResponseBodyDataTopics[];
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      bizdate: 'Bizdate',
      projectId: 'ProjectId',
      instanceId: 'InstanceId',
      prgType: 'PrgType',
      nodeId: 'NodeId',
      inGroupId: 'InGroupId',
      runs: 'Runs',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      bizdate: 'number',
      projectId: 'number',
      instanceId: 'number',
      prgType: 'number',
      nodeId: 'number',
      inGroupId: 'number',
      runs: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyDataRuns },
      topics: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyDataTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseBodyDataLastInstance extends $tea.Model {
  status?: string;
  owner?: string;
  finishTime?: number;
  nodeName?: string;
  projectId?: number;
  instanceId?: number;
  endCast?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      finishTime: 'FinishTime',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      instanceId: 'InstanceId',
      endCast: 'EndCast',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      finishTime: 'number',
      nodeName: 'string',
      projectId: 'number',
      instanceId: 'number',
      endCast: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseBodyDataBlockInstance extends $tea.Model {
  status?: string;
  owner?: string;
  finishTime?: number;
  nodeName?: string;
  projectId?: number;
  instanceId?: number;
  endCast?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      finishTime: 'FinishTime',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      instanceId: 'InstanceId',
      endCast: 'EndCast',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      finishTime: 'number',
      nodeName: 'string',
      projectId: 'number',
      instanceId: 'number',
      endCast: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseBodyData extends $tea.Model {
  status?: string;
  owner?: string;
  finishTime?: number;
  projectId?: number;
  priority?: number;
  endCast?: number;
  inGroupId?: number;
  baselineName?: string;
  baselineId?: number;
  finishStatus?: string;
  bizdate?: number;
  buffer?: number;
  slaTime?: number;
  expTime?: number;
  lastInstance?: GetBaselineStatusResponseBodyDataLastInstance;
  blockInstance?: GetBaselineStatusResponseBodyDataBlockInstance;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      finishTime: 'FinishTime',
      projectId: 'ProjectId',
      priority: 'Priority',
      endCast: 'EndCast',
      inGroupId: 'InGroupId',
      baselineName: 'BaselineName',
      baselineId: 'BaselineId',
      finishStatus: 'FinishStatus',
      bizdate: 'Bizdate',
      buffer: 'Buffer',
      slaTime: 'SlaTime',
      expTime: 'ExpTime',
      lastInstance: 'LastInstance',
      blockInstance: 'BlockInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      finishTime: 'number',
      projectId: 'number',
      priority: 'number',
      endCast: 'number',
      inGroupId: 'number',
      baselineName: 'string',
      baselineId: 'number',
      finishStatus: 'string',
      bizdate: 'number',
      buffer: 'number',
      slaTime: 'number',
      expTime: 'number',
      lastInstance: GetBaselineStatusResponseBodyDataLastInstance,
      blockInstance: GetBaselineStatusResponseBodyDataBlockInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessResponseBodyData extends $tea.Model {
  owner?: string;
  description?: string;
  projectId?: string;
  businessId?: number;
  businessName?: string;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      description: 'Description',
      projectId: 'ProjectId',
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      description: 'string',
      projectId: 'string',
      businessId: 'number',
      businessName: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionMetaResponseBodyData extends $tea.Model {
  meta?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDagResponseBodyData extends $tea.Model {
  type?: string;
  status?: string;
  finishTime?: number;
  createTime?: number;
  projectId?: number;
  dagId?: number;
  gmtdate?: number;
  startTime?: number;
  createUser?: string;
  bizdate?: number;
  name?: string;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      finishTime: 'FinishTime',
      createTime: 'CreateTime',
      projectId: 'ProjectId',
      dagId: 'DagId',
      gmtdate: 'Gmtdate',
      startTime: 'StartTime',
      createUser: 'CreateUser',
      bizdate: 'Bizdate',
      name: 'Name',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      finishTime: 'number',
      createTime: 'number',
      projectId: 'number',
      dagId: 'number',
      gmtdate: 'number',
      startTime: 'number',
      createUser: 'string',
      bizdate: 'number',
      name: 'string',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorMessage?: string;
  errorCode?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorCode: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  columnName?: string;
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  parameterDataType?: number;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      parameterDataType: 'number',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataRegistrationDetails extends $tea.Model {
  serviceHost?: string;
  serviceContentType?: number;
  servicePath?: string;
  successfulResultSample?: string;
  failedResultSample?: string;
  serviceRequestBodyDescription?: string;
  registrationErrorCodes?: GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters?: GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      serviceHost: 'ServiceHost',
      serviceContentType: 'ServiceContentType',
      servicePath: 'ServicePath',
      successfulResultSample: 'SuccessfulResultSample',
      failedResultSample: 'FailedResultSample',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceHost: 'string',
      serviceContentType: 'number',
      servicePath: 'string',
      successfulResultSample: 'string',
      failedResultSample: 'string',
      serviceRequestBodyDescription: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataScriptDetailsScriptRequestParameters extends $tea.Model {
  columnName?: string;
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  parameterDataType?: number;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      parameterDataType: 'number',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataScriptDetailsScriptResponseParameters extends $tea.Model {
  parameterDescription?: string;
  columnName?: string;
  parameterName?: string;
  parameterDataType?: number;
  exampleValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      columnName: 'string',
      parameterName: 'string',
      parameterDataType: 'number',
      exampleValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataScriptDetailsScriptConnection extends $tea.Model {
  tableName?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataScriptDetails extends $tea.Model {
  script?: string;
  isPagedResponse?: boolean;
  scriptRequestParameters?: GetDataServiceApiResponseBodyDataScriptDetailsScriptRequestParameters[];
  scriptResponseParameters?: GetDataServiceApiResponseBodyDataScriptDetailsScriptResponseParameters[];
  scriptConnection?: GetDataServiceApiResponseBodyDataScriptDetailsScriptConnection;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      isPagedResponse: 'IsPagedResponse',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      scriptConnection: 'ScriptConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      isPagedResponse: 'boolean',
      scriptRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataScriptDetailsScriptResponseParameters },
      scriptConnection: GetDataServiceApiResponseBodyDataScriptDetailsScriptConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataWizardDetailsWizardRequestParameters extends $tea.Model {
  columnName?: string;
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  parameterDataType?: number;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      parameterDataType: 'number',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataWizardDetailsWizardResponseParameters extends $tea.Model {
  parameterDescription?: string;
  columnName?: string;
  parameterName?: string;
  parameterDataType?: number;
  exampleValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      columnName: 'string',
      parameterName: 'string',
      parameterDataType: 'number',
      exampleValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataWizardDetailsWizardConnection extends $tea.Model {
  tableName?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataWizardDetails extends $tea.Model {
  isPagedResponse?: boolean;
  wizardRequestParameters?: GetDataServiceApiResponseBodyDataWizardDetailsWizardRequestParameters[];
  wizardResponseParameters?: GetDataServiceApiResponseBodyDataWizardDetailsWizardResponseParameters[];
  wizardConnection?: GetDataServiceApiResponseBodyDataWizardDetailsWizardConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
      wizardConnection: 'WizardConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      wizardRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataWizardDetailsWizardResponseParameters },
      wizardConnection: GetDataServiceApiResponseBodyDataWizardDetailsWizardConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyData extends $tea.Model {
  timeout?: number;
  status?: number;
  apiId?: number;
  apiMode?: number;
  projectId?: number;
  responseContentType?: number;
  creatorId?: string;
  visibleRange?: number;
  modifiedTime?: string;
  operatorId?: string;
  groupId?: string;
  description?: string;
  folderId?: number;
  requestMethod?: number;
  createdTime?: string;
  apiName?: string;
  tenantId?: number;
  apiPath?: string;
  protocols?: number[];
  registrationDetails?: GetDataServiceApiResponseBodyDataRegistrationDetails;
  scriptDetails?: GetDataServiceApiResponseBodyDataScriptDetails;
  wizardDetails?: GetDataServiceApiResponseBodyDataWizardDetails;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      status: 'Status',
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      projectId: 'ProjectId',
      responseContentType: 'ResponseContentType',
      creatorId: 'CreatorId',
      visibleRange: 'VisibleRange',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      groupId: 'GroupId',
      description: 'Description',
      folderId: 'FolderId',
      requestMethod: 'RequestMethod',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      tenantId: 'TenantId',
      apiPath: 'ApiPath',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      scriptDetails: 'ScriptDetails',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'number',
      status: 'number',
      apiId: 'number',
      apiMode: 'number',
      projectId: 'number',
      responseContentType: 'number',
      creatorId: 'string',
      visibleRange: 'number',
      modifiedTime: 'string',
      operatorId: 'string',
      groupId: 'string',
      description: 'string',
      folderId: 'number',
      requestMethod: 'number',
      createdTime: 'string',
      apiName: 'string',
      tenantId: 'number',
      apiPath: 'string',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: GetDataServiceApiResponseBodyDataRegistrationDetails,
      scriptDetails: GetDataServiceApiResponseBodyDataScriptDetails,
      wizardDetails: GetDataServiceApiResponseBodyDataWizardDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationResponseBodyData extends $tea.Model {
  applicationCode?: string;
  applicationKey?: string;
  applicationSecret?: string;
  projectId?: number;
  applicationName?: string;
  applicationId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      applicationKey: 'ApplicationKey',
      applicationSecret: 'ApplicationSecret',
      projectId: 'ProjectId',
      applicationName: 'ApplicationName',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      applicationKey: 'string',
      applicationSecret: 'string',
      projectId: 'number',
      applicationName: 'string',
      applicationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderResponseBodyFolder extends $tea.Model {
  parentId?: number;
  modifiedTime?: string;
  groupId?: string;
  folderId?: number;
  projectId?: number;
  folderName?: string;
  createdTime?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      folderId: 'FolderId',
      projectId: 'ProjectId',
      folderName: 'FolderName',
      createdTime: 'CreatedTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'number',
      modifiedTime: 'string',
      groupId: 'string',
      folderId: 'number',
      projectId: 'number',
      folderName: 'string',
      createdTime: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupResponseBodyGroup extends $tea.Model {
  modifiedTime?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  projectId?: number;
  apiGatewayGroupId?: string;
  creatorId?: string;
  createdTime?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      projectId: 'ProjectId',
      apiGatewayGroupId: 'ApiGatewayGroupId',
      creatorId: 'CreatorId',
      createdTime: 'CreatedTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      projectId: 'number',
      apiGatewayGroupId: 'string',
      creatorId: 'string',
      createdTime: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorMessage?: string;
  errorCode?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorCode: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  exampleValue?: string;
  parameterDataType?: number;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      exampleValue: 'string',
      parameterDataType: 'number',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataRegistrationDetails extends $tea.Model {
  serviceHost?: string;
  serviceContentType?: number;
  servicePath?: string;
  successfulResultSample?: string;
  failedResultSample?: string;
  serviceRequestBodyDescription?: string;
  registrationErrorCodes?: GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters?: GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      serviceHost: 'ServiceHost',
      serviceContentType: 'ServiceContentType',
      servicePath: 'ServicePath',
      successfulResultSample: 'SuccessfulResultSample',
      failedResultSample: 'FailedResultSample',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceHost: 'string',
      serviceContentType: 'number',
      servicePath: 'string',
      successfulResultSample: 'string',
      failedResultSample: 'string',
      serviceRequestBodyDescription: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptErrorCodes extends $tea.Model {
  errorMessage?: string;
  errorCode?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorCode: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptRequestParameters extends $tea.Model {
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  exampleValue?: string;
  parameterDataType?: number;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      exampleValue: 'string',
      parameterDataType: 'number',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptResponseParameters extends $tea.Model {
  parameterDescription?: string;
  parameterName?: string;
  exampleValue?: string;
  parameterDataType?: number;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptConnection extends $tea.Model {
  tableName?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetails extends $tea.Model {
  isPagedResponse?: boolean;
  successfulResultSample?: string;
  failedResultSample?: string;
  script?: string;
  scriptErrorCodes?: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptErrorCodes[];
  scriptRequestParameters?: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptRequestParameters[];
  scriptResponseParameters?: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptResponseParameters[];
  scriptConnection?: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      failedResultSample: 'FailedResultSample',
      script: 'Script',
      scriptErrorCodes: 'ScriptErrorCodes',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      scriptConnection: 'ScriptConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      failedResultSample: 'string',
      script: 'string',
      scriptErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptErrorCodes },
      scriptRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptResponseParameters },
      scriptConnection: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardErrorCodes extends $tea.Model {
  errorMessage?: string;
  errorCode?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorCode: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardRequestParameters extends $tea.Model {
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  exampleValue?: string;
  parameterDataType?: number;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      exampleValue: 'string',
      parameterDataType: 'number',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardResponseParameters extends $tea.Model {
  parameterDescription?: string;
  parameterName?: string;
  exampleValue?: string;
  parameterDataType?: number;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardConnection extends $tea.Model {
  tableName?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetails extends $tea.Model {
  isPagedResponse?: boolean;
  successfulResultSample?: string;
  failedResultSample?: string;
  wizardErrorCodes?: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardErrorCodes[];
  wizardRequestParameters?: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardRequestParameters[];
  wizardResponseParameters?: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardResponseParameters[];
  wizardConnection?: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      failedResultSample: 'FailedResultSample',
      wizardErrorCodes: 'WizardErrorCodes',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
      wizardConnection: 'WizardConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      failedResultSample: 'string',
      wizardErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardErrorCodes },
      wizardRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardResponseParameters },
      wizardConnection: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyData extends $tea.Model {
  timeout?: number;
  status?: number;
  apiId?: number;
  apiMode?: number;
  projectId?: number;
  responseContentType?: number;
  creatorId?: string;
  visibleRange?: number;
  modifiedTime?: string;
  operatorId?: string;
  groupId?: string;
  description?: string;
  requestMethod?: number;
  createdTime?: string;
  apiName?: string;
  tenantId?: number;
  apiPath?: string;
  protocols?: number[];
  registrationDetails?: GetDataServicePublishedApiResponseBodyDataRegistrationDetails;
  scriptDetails?: GetDataServicePublishedApiResponseBodyDataScriptDetails;
  wizardDetails?: GetDataServicePublishedApiResponseBodyDataWizardDetails;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      status: 'Status',
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      projectId: 'ProjectId',
      responseContentType: 'ResponseContentType',
      creatorId: 'CreatorId',
      visibleRange: 'VisibleRange',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      groupId: 'GroupId',
      description: 'Description',
      requestMethod: 'RequestMethod',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      tenantId: 'TenantId',
      apiPath: 'ApiPath',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      scriptDetails: 'ScriptDetails',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'number',
      status: 'number',
      apiId: 'number',
      apiMode: 'number',
      projectId: 'number',
      responseContentType: 'number',
      creatorId: 'string',
      visibleRange: 'number',
      modifiedTime: 'string',
      operatorId: 'string',
      groupId: 'string',
      description: 'string',
      requestMethod: 'number',
      createdTime: 'string',
      apiName: 'string',
      tenantId: 'number',
      apiPath: 'string',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: GetDataServicePublishedApiResponseBodyDataRegistrationDetails,
      scriptDetails: GetDataServicePublishedApiResponseBodyDataScriptDetails,
      wizardDetails: GetDataServicePublishedApiResponseBodyDataWizardDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceMetaResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  meta?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
      meta: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusResponseBodyData extends $tea.Model {
  status?: string;
  nextTaskId?: string;
  taskId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nextTaskId: 'NextTaskId',
      taskId: 'TaskId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nextTaskId: 'string',
      taskId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyDataDeployment extends $tea.Model {
  status?: number;
  errorMessage?: string;
  fromEnvironment?: number;
  toEnvironment?: number;
  checkingStatus?: number;
  createTime?: number;
  handlerId?: string;
  creatorId?: string;
  executeTime?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      fromEnvironment: 'FromEnvironment',
      toEnvironment: 'ToEnvironment',
      checkingStatus: 'CheckingStatus',
      createTime: 'CreateTime',
      handlerId: 'HandlerId',
      creatorId: 'CreatorId',
      executeTime: 'ExecuteTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      errorMessage: 'string',
      fromEnvironment: 'number',
      toEnvironment: 'number',
      checkingStatus: 'number',
      createTime: 'number',
      handlerId: 'string',
      creatorId: 'string',
      executeTime: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyData extends $tea.Model {
  deployment?: GetDeploymentResponseBodyDataDeployment;
  static names(): { [key: string]: string } {
    return {
      deployment: 'Deployment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployment: GetDeploymentResponseBodyDataDeployment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBodyData extends $tea.Model {
  code?: string;
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyDataFile extends $tea.Model {
  commitStatus?: number;
  autoParsing?: boolean;
  owner?: string;
  createTime?: number;
  fileType?: number;
  currentVersion?: number;
  bizId?: number;
  lastEditUser?: string;
  fileName?: string;
  connectionName?: string;
  useType?: string;
  fileFolderId?: string;
  parentId?: number;
  createUser?: string;
  isMaxCompute?: boolean;
  businessId?: number;
  fileDescription?: string;
  deletedStatus?: string;
  lastEditTime?: number;
  content?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      commitStatus: 'CommitStatus',
      autoParsing: 'AutoParsing',
      owner: 'Owner',
      createTime: 'CreateTime',
      fileType: 'FileType',
      currentVersion: 'CurrentVersion',
      bizId: 'BizId',
      lastEditUser: 'LastEditUser',
      fileName: 'FileName',
      connectionName: 'ConnectionName',
      useType: 'UseType',
      fileFolderId: 'FileFolderId',
      parentId: 'ParentId',
      createUser: 'CreateUser',
      isMaxCompute: 'IsMaxCompute',
      businessId: 'BusinessId',
      fileDescription: 'FileDescription',
      deletedStatus: 'DeletedStatus',
      lastEditTime: 'LastEditTime',
      content: 'Content',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitStatus: 'number',
      autoParsing: 'boolean',
      owner: 'string',
      createTime: 'number',
      fileType: 'number',
      currentVersion: 'number',
      bizId: 'number',
      lastEditUser: 'string',
      fileName: 'string',
      connectionName: 'string',
      useType: 'string',
      fileFolderId: 'string',
      parentId: 'number',
      createUser: 'string',
      isMaxCompute: 'boolean',
      businessId: 'number',
      fileDescription: 'string',
      deletedStatus: 'string',
      lastEditTime: 'number',
      content: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyDataNodeConfigurationInputList extends $tea.Model {
  input?: string;
  parseType?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      parseType: 'ParseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      parseType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyDataNodeConfigurationOutputList extends $tea.Model {
  refTableName?: string;
  output?: string;
  static names(): { [key: string]: string } {
    return {
      refTableName: 'RefTableName',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refTableName: 'string',
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyDataNodeConfiguration extends $tea.Model {
  rerunMode?: string;
  schedulerType?: string;
  stop?: boolean;
  paraValue?: string;
  startEffectDate?: number;
  endEffectDate?: number;
  cycleType?: string;
  dependentNodeIdList?: string;
  resourceGroupId?: number;
  dependentType?: string;
  autoRerunTimes?: number;
  autoRerunIntervalMillis?: number;
  cronExpress?: string;
  inputList?: GetFileResponseBodyDataNodeConfigurationInputList[];
  outputList?: GetFileResponseBodyDataNodeConfigurationOutputList[];
  static names(): { [key: string]: string } {
    return {
      rerunMode: 'RerunMode',
      schedulerType: 'SchedulerType',
      stop: 'Stop',
      paraValue: 'ParaValue',
      startEffectDate: 'StartEffectDate',
      endEffectDate: 'EndEffectDate',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      resourceGroupId: 'ResourceGroupId',
      dependentType: 'DependentType',
      autoRerunTimes: 'AutoRerunTimes',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      cronExpress: 'CronExpress',
      inputList: 'InputList',
      outputList: 'OutputList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rerunMode: 'string',
      schedulerType: 'string',
      stop: 'boolean',
      paraValue: 'string',
      startEffectDate: 'number',
      endEffectDate: 'number',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      resourceGroupId: 'number',
      dependentType: 'string',
      autoRerunTimes: 'number',
      autoRerunIntervalMillis: 'number',
      cronExpress: 'string',
      inputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationInputList },
      outputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationOutputList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyData extends $tea.Model {
  file?: GetFileResponseBodyDataFile;
  nodeConfiguration?: GetFileResponseBodyDataNodeConfiguration;
  static names(): { [key: string]: string } {
    return {
      file: 'File',
      nodeConfiguration: 'NodeConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: GetFileResponseBodyDataFile,
      nodeConfiguration: GetFileResponseBodyDataNodeConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTypeStatisticResponseBodyProgramTypeAndCounts extends $tea.Model {
  count?: number;
  programType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      programType: 'ProgramType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      programType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileVersionResponseBodyData extends $tea.Model {
  fileContent?: string;
  isCurrentProd?: boolean;
  status?: string;
  nodeContent?: string;
  commitUser?: string;
  comment?: string;
  filePropertyContent?: string;
  fileName?: string;
  useType?: string;
  changeType?: string;
  fileVersion?: number;
  commitTime?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      fileContent: 'FileContent',
      isCurrentProd: 'IsCurrentProd',
      status: 'Status',
      nodeContent: 'NodeContent',
      commitUser: 'CommitUser',
      comment: 'Comment',
      filePropertyContent: 'FilePropertyContent',
      fileName: 'FileName',
      useType: 'UseType',
      changeType: 'ChangeType',
      fileVersion: 'FileVersion',
      commitTime: 'CommitTime',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      isCurrentProd: 'boolean',
      status: 'string',
      nodeContent: 'string',
      commitUser: 'string',
      comment: 'string',
      filePropertyContent: 'string',
      fileName: 'string',
      useType: 'string',
      changeType: 'string',
      fileVersion: 'number',
      commitTime: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBodyData extends $tea.Model {
  folderPath?: string;
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderPath: 'FolderPath',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderPath: 'string',
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyData extends $tea.Model {
  status?: string;
  cycTime?: number;
  beginRunningTime?: number;
  finishTime?: number;
  createTime?: number;
  dagId?: number;
  priority?: number;
  taskType?: string;
  paramValues?: string;
  connection?: string;
  baselineId?: number;
  dqcType?: number;
  dagType?: string;
  businessId?: number;
  taskRerunTime?: number;
  modifyTime?: number;
  repeatability?: boolean;
  repeatInterval?: number;
  instanceId?: number;
  beginWaitResTime?: number;
  relatedFlowId?: number;
  bizdate?: number;
  nodeName?: string;
  beginWaitTimeTime?: number;
  dqcDescription?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      cycTime: 'CycTime',
      beginRunningTime: 'BeginRunningTime',
      finishTime: 'FinishTime',
      createTime: 'CreateTime',
      dagId: 'DagId',
      priority: 'Priority',
      taskType: 'TaskType',
      paramValues: 'ParamValues',
      connection: 'Connection',
      baselineId: 'BaselineId',
      dqcType: 'DqcType',
      dagType: 'DagType',
      businessId: 'BusinessId',
      taskRerunTime: 'TaskRerunTime',
      modifyTime: 'ModifyTime',
      repeatability: 'Repeatability',
      repeatInterval: 'RepeatInterval',
      instanceId: 'InstanceId',
      beginWaitResTime: 'BeginWaitResTime',
      relatedFlowId: 'RelatedFlowId',
      bizdate: 'Bizdate',
      nodeName: 'NodeName',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      dqcDescription: 'DqcDescription',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      cycTime: 'number',
      beginRunningTime: 'number',
      finishTime: 'number',
      createTime: 'number',
      dagId: 'number',
      priority: 'number',
      taskType: 'string',
      paramValues: 'string',
      connection: 'string',
      baselineId: 'number',
      dqcType: 'number',
      dagType: 'string',
      businessId: 'number',
      taskRerunTime: 'number',
      modifyTime: 'number',
      repeatability: 'boolean',
      repeatInterval: 'number',
      instanceId: 'number',
      beginWaitResTime: 'number',
      relatedFlowId: 'number',
      bizdate: 'number',
      nodeName: 'string',
      beginWaitTimeTime: 'number',
      dqcDescription: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank extends $tea.Model {
  owner?: string;
  nodeName?: string;
  bizdate?: number;
  instanceId?: number;
  prgType?: number;
  nodeId?: number;
  consumed?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      bizdate: 'Bizdate',
      instanceId: 'InstanceId',
      prgType: 'PrgType',
      nodeId: 'NodeId',
      consumed: 'Consumed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      bizdate: 'number',
      instanceId: 'number',
      prgType: 'number',
      nodeId: 'number',
      consumed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank extends $tea.Model {
  updateTime?: number;
  consumeTimeRank?: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank[];
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      consumeTimeRank: 'ConsumeTimeRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      consumeTimeRank: { 'type': 'array', 'itemType': GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendResponseBodyInstanceCounts extends $tea.Model {
  date?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank extends $tea.Model {
  owner?: string;
  nodeName?: string;
  projectId?: number;
  nodeId?: number;
  count?: number;
  prgType?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      nodeId: 'NodeId',
      count: 'Count',
      prgType: 'PrgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      projectId: 'number',
      nodeId: 'number',
      count: 'number',
      prgType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponseBodyInstanceErrorRank extends $tea.Model {
  updateTime?: number;
  errorRank?: GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank[];
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      errorRank: 'ErrorRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      errorRank: { 'type': 'array', 'itemType': GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusCountResponseBodyStatusCount extends $tea.Model {
  failureCount?: number;
  waitTimeCount?: number;
  runningCount?: number;
  successCount?: number;
  totalCount?: number;
  notRunCount?: number;
  waitResCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      waitTimeCount: 'WaitTimeCount',
      runningCount: 'RunningCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
      notRunCount: 'NotRunCount',
      waitResCount: 'WaitResCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      waitTimeCount: 'number',
      runningCount: 'number',
      successCount: 'number',
      totalCount: 'number',
      notRunCount: 'number',
      waitResCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusStatisticResponseBodyStatusCount extends $tea.Model {
  failureCount?: number;
  waitTimeCount?: number;
  runningCount?: number;
  successCount?: number;
  totalCount?: number;
  notRunCount?: number;
  waitResCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      waitTimeCount: 'WaitTimeCount',
      runningCount: 'RunningCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
      notRunCount: 'NotRunCount',
      waitResCount: 'WaitResCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      waitTimeCount: 'number',
      runningCount: 'number',
      successCount: 'number',
      totalCount: 'number',
      notRunCount: 'number',
      waitResCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManualDagInstancesResponseBodyInstances extends $tea.Model {
  status?: string;
  beginRunningTime?: number;
  bizDate?: number;
  cycTime?: number;
  finishTime?: number;
  createTime?: number;
  dagId?: number;
  instanceId?: number;
  beginWaitResTime?: number;
  taskType?: string;
  paramValues?: string;
  dagType?: string;
  nodeName?: string;
  beginWaitTimeTime?: number;
  nodeId?: number;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      beginRunningTime: 'BeginRunningTime',
      bizDate: 'BizDate',
      cycTime: 'CycTime',
      finishTime: 'FinishTime',
      createTime: 'CreateTime',
      dagId: 'DagId',
      instanceId: 'InstanceId',
      beginWaitResTime: 'BeginWaitResTime',
      taskType: 'TaskType',
      paramValues: 'ParamValues',
      dagType: 'DagType',
      nodeName: 'NodeName',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      nodeId: 'NodeId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      beginRunningTime: 'number',
      bizDate: 'number',
      cycTime: 'number',
      finishTime: 'number',
      createTime: 'number',
      dagId: 'number',
      instanceId: 'number',
      beginWaitResTime: 'number',
      taskType: 'string',
      paramValues: 'string',
      dagType: 'string',
      nodeName: 'string',
      beginWaitTimeTime: 'number',
      nodeId: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseBodyDataDataEntityList extends $tea.Model {
  depth?: number;
  comment?: string;
  modifiedTime?: number;
  createTime?: number;
  categoryId?: number;
  lastOperatorId?: string;
  name?: string;
  parentCategoryId?: number;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      comment: 'Comment',
      modifiedTime: 'ModifiedTime',
      createTime: 'CreateTime',
      categoryId: 'CategoryId',
      lastOperatorId: 'LastOperatorId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      comment: 'string',
      modifiedTime: 'number',
      createTime: 'number',
      categoryId: 'number',
      lastOperatorId: 'string',
      name: 'string',
      parentCategoryId: 'number',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  dataEntityList?: GetMetaCategoryResponseBodyDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaCategoryResponseBodyDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseBodyDataDataEntityList extends $tea.Model {
  columnGuid?: string;
  columnName?: string;
  tableName?: string;
  databaseName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      tableName: 'TableName',
      databaseName: 'DatabaseName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnGuid: 'string',
      columnName: 'string',
      tableName: 'string',
      databaseName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  dataEntityList?: GetMetaColumnLineageResponseBodyDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaColumnLineageResponseBodyDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoResponseBodyData extends $tea.Model {
  type?: string;
  comment?: string;
  createTime?: number;
  projectId?: number;
  projectName?: string;
  appGuid?: string;
  ownerName?: string;
  ownerId?: string;
  envType?: number;
  projectNameCn?: string;
  endpoint?: string;
  clusterBizId?: string;
  name?: string;
  location?: string;
  tenantId?: number;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      comment: 'Comment',
      createTime: 'CreateTime',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      appGuid: 'AppGuid',
      ownerName: 'OwnerName',
      ownerId: 'OwnerId',
      envType: 'EnvType',
      projectNameCn: 'ProjectNameCn',
      endpoint: 'Endpoint',
      clusterBizId: 'ClusterBizId',
      name: 'Name',
      location: 'Location',
      tenantId: 'TenantId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      comment: 'string',
      createTime: 'number',
      projectId: 'number',
      projectName: 'string',
      appGuid: 'string',
      ownerName: 'string',
      ownerId: 'string',
      envType: 'number',
      projectNameCn: 'string',
      endpoint: 'string',
      clusterBizId: 'string',
      name: 'string',
      location: 'string',
      tenantId: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponseBodyDataTableEntityList extends $tea.Model {
  tableName?: string;
  tableGuid?: string;
  databaseName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableGuid: 'TableGuid',
      databaseName: 'DatabaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableGuid: 'string',
      databaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  tableEntityList?: GetMetaDBTableListResponseBodyDataTableEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      tableEntityList: 'TableEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      tableEntityList: { 'type': 'array', 'itemType': GetMetaDBTableListResponseBodyDataTableEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoResponseBodyData extends $tea.Model {
  tableName?: string;
  favoriteCount?: number;
  comment?: string;
  columnCount?: number;
  createTime?: number;
  projectId?: number;
  ownerId?: string;
  envType?: number;
  databaseName?: string;
  isVisible?: number;
  tableGuid?: string;
  readCount?: number;
  clusterId?: string;
  isPartitionTable?: boolean;
  isView?: boolean;
  lifeCycle?: number;
  projectName?: string;
  viewCount?: number;
  lastAccessTime?: number;
  dataSize?: number;
  lastModifyTime?: number;
  lastDdlTime?: number;
  partitionKeys?: string;
  location?: string;
  caption?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      favoriteCount: 'FavoriteCount',
      comment: 'Comment',
      columnCount: 'ColumnCount',
      createTime: 'CreateTime',
      projectId: 'ProjectId',
      ownerId: 'OwnerId',
      envType: 'EnvType',
      databaseName: 'DatabaseName',
      isVisible: 'IsVisible',
      tableGuid: 'TableGuid',
      readCount: 'ReadCount',
      clusterId: 'ClusterId',
      isPartitionTable: 'IsPartitionTable',
      isView: 'IsView',
      lifeCycle: 'LifeCycle',
      projectName: 'ProjectName',
      viewCount: 'ViewCount',
      lastAccessTime: 'LastAccessTime',
      dataSize: 'DataSize',
      lastModifyTime: 'LastModifyTime',
      lastDdlTime: 'LastDdlTime',
      partitionKeys: 'PartitionKeys',
      location: 'Location',
      caption: 'Caption',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      favoriteCount: 'number',
      comment: 'string',
      columnCount: 'number',
      createTime: 'number',
      projectId: 'number',
      ownerId: 'string',
      envType: 'number',
      databaseName: 'string',
      isVisible: 'number',
      tableGuid: 'string',
      readCount: 'number',
      clusterId: 'string',
      isPartitionTable: 'boolean',
      isView: 'boolean',
      lifeCycle: 'number',
      projectName: 'string',
      viewCount: 'number',
      lastAccessTime: 'number',
      dataSize: 'number',
      lastModifyTime: 'number',
      lastDdlTime: 'number',
      partitionKeys: 'string',
      location: 'string',
      caption: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseBodyDataDataEntityList extends $tea.Model {
  objectType?: string;
  modifiedTime?: number;
  createTime?: number;
  changeContent?: string;
  operator?: string;
  changeType?: string;
  static names(): { [key: string]: string } {
    return {
      objectType: 'ObjectType',
      modifiedTime: 'ModifiedTime',
      createTime: 'CreateTime',
      changeContent: 'ChangeContent',
      operator: 'Operator',
      changeType: 'ChangeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectType: 'string',
      modifiedTime: 'number',
      createTime: 'number',
      changeContent: 'string',
      operator: 'string',
      changeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  dataEntityList?: GetMetaTableChangeLogResponseBodyDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableChangeLogResponseBodyDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBodyDataColumnList extends $tea.Model {
  columnGuid?: string;
  columnName?: string;
  isPartitionColumn?: boolean;
  comment?: string;
  columnType?: string;
  isPrimaryKey?: boolean;
  position?: number;
  caption?: string;
  isForeignKey?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      isPartitionColumn: 'IsPartitionColumn',
      comment: 'Comment',
      columnType: 'ColumnType',
      isPrimaryKey: 'IsPrimaryKey',
      position: 'Position',
      caption: 'Caption',
      isForeignKey: 'IsForeignKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnGuid: 'string',
      columnName: 'string',
      isPartitionColumn: 'boolean',
      comment: 'string',
      columnType: 'string',
      isPrimaryKey: 'boolean',
      position: 'number',
      caption: 'string',
      isForeignKey: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  columnList?: GetMetaTableColumnResponseBodyDataColumnList[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      columnList: 'ColumnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      columnList: { 'type': 'array', 'itemType': GetMetaTableColumnResponseBodyDataColumnList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseBodyDataColumnList extends $tea.Model {
  columnName?: string;
  columnGuid?: string;
  isPartitionColumn?: boolean;
  comment?: string;
  columnType?: string;
  isPrimaryKey?: boolean;
  position?: number;
  caption?: string;
  isForeignKey?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnGuid: 'ColumnGuid',
      isPartitionColumn: 'IsPartitionColumn',
      comment: 'Comment',
      columnType: 'ColumnType',
      isPrimaryKey: 'IsPrimaryKey',
      position: 'Position',
      caption: 'Caption',
      isForeignKey: 'IsForeignKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnGuid: 'string',
      isPartitionColumn: 'boolean',
      comment: 'string',
      columnType: 'string',
      isPrimaryKey: 'boolean',
      position: 'number',
      caption: 'string',
      isForeignKey: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseBodyData extends $tea.Model {
  tableName?: string;
  comment?: string;
  lifeCycle?: number;
  createTime?: number;
  projectName?: string;
  projectId?: number;
  ownerId?: string;
  envType?: number;
  lastAccessTime?: number;
  dataSize?: number;
  lastModifyTime?: number;
  databaseName?: string;
  isVisible?: number;
  totalColumnCount?: number;
  tableGuid?: string;
  partitionKeys?: string;
  lastDdlTime?: number;
  location?: string;
  clusterId?: string;
  tenantId?: number;
  columnList?: GetMetaTableFullInfoResponseBodyDataColumnList[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      comment: 'Comment',
      lifeCycle: 'LifeCycle',
      createTime: 'CreateTime',
      projectName: 'ProjectName',
      projectId: 'ProjectId',
      ownerId: 'OwnerId',
      envType: 'EnvType',
      lastAccessTime: 'LastAccessTime',
      dataSize: 'DataSize',
      lastModifyTime: 'LastModifyTime',
      databaseName: 'DatabaseName',
      isVisible: 'IsVisible',
      totalColumnCount: 'TotalColumnCount',
      tableGuid: 'TableGuid',
      partitionKeys: 'PartitionKeys',
      lastDdlTime: 'LastDdlTime',
      location: 'Location',
      clusterId: 'ClusterId',
      tenantId: 'TenantId',
      columnList: 'ColumnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      comment: 'string',
      lifeCycle: 'number',
      createTime: 'number',
      projectName: 'string',
      projectId: 'number',
      ownerId: 'string',
      envType: 'number',
      lastAccessTime: 'number',
      dataSize: 'number',
      lastModifyTime: 'number',
      databaseName: 'string',
      isVisible: 'number',
      totalColumnCount: 'number',
      tableGuid: 'string',
      partitionKeys: 'string',
      lastDdlTime: 'number',
      location: 'string',
      clusterId: 'string',
      tenantId: 'number',
      columnList: { 'type': 'array', 'itemType': GetMetaTableFullInfoResponseBodyDataColumnList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiResponseBodyData extends $tea.Model {
  modifiedTime?: number;
  version?: number;
  createTime?: number;
  creatorName?: string;
  content?: string;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      version: 'Version',
      createTime: 'CreateTime',
      creatorName: 'CreatorName',
      content: 'Content',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'number',
      version: 'number',
      createTime: 'number',
      creatorName: 'string',
      content: 'string',
      creator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponseBodyDataDataEntityList extends $tea.Model {
  tableName?: string;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponseBodyData extends $tea.Model {
  nextPrimaryKey?: string;
  hasNext?: boolean;
  dataEntityList?: GetMetaTableLineageResponseBodyDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      nextPrimaryKey: 'NextPrimaryKey',
      hasNext: 'HasNext',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPrimaryKey: 'string',
      hasNext: 'boolean',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableLineageResponseBodyDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  tableGuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      tableGuidList: 'TableGuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      tableGuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseBodyDataDataEntityList extends $tea.Model {
  endTime?: string;
  taskInstanceId?: number;
  startTime?: string;
  projectId?: number;
  waitTime?: string;
  tableGuid?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      taskInstanceId: 'TaskInstanceId',
      startTime: 'StartTime',
      projectId: 'ProjectId',
      waitTime: 'WaitTime',
      tableGuid: 'TableGuid',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      taskInstanceId: 'number',
      startTime: 'string',
      projectId: 'number',
      waitTime: 'string',
      tableGuid: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  dataEntityList?: GetMetaTableOutputResponseBodyDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableOutputResponseBodyDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseBodyDataDataEntityList extends $tea.Model {
  partitionPath?: string;
  dataSize?: number;
  partitionName?: string;
  comment?: string;
  modifiedTime?: number;
  createTime?: number;
  recordCount?: number;
  partitionType?: string;
  partitionGuid?: string;
  partitionLocation?: string;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      partitionPath: 'PartitionPath',
      dataSize: 'DataSize',
      partitionName: 'PartitionName',
      comment: 'Comment',
      modifiedTime: 'ModifiedTime',
      createTime: 'CreateTime',
      recordCount: 'RecordCount',
      partitionType: 'PartitionType',
      partitionGuid: 'PartitionGuid',
      partitionLocation: 'PartitionLocation',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionPath: 'string',
      dataSize: 'number',
      partitionName: 'string',
      comment: 'string',
      modifiedTime: 'number',
      createTime: 'number',
      recordCount: 'number',
      partitionType: 'string',
      partitionGuid: 'string',
      partitionLocation: 'string',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  dataEntityList?: GetMetaTablePartitionResponseBodyDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTablePartitionResponseBodyDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBodyEntityTheme extends $tea.Model {
  parentId?: number;
  name?: string;
  themeId?: number;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      name: 'Name',
      themeId: 'ThemeId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'number',
      name: 'string',
      themeId: 'number',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBodyEntityLevel extends $tea.Model {
  type?: number;
  description?: string;
  name?: string;
  levelId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      name: 'Name',
      levelId: 'LevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      description: 'string',
      name: 'string',
      levelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBodyEntity extends $tea.Model {
  theme?: GetMetaTableThemeLevelResponseBodyEntityTheme[];
  level?: GetMetaTableThemeLevelResponseBodyEntityLevel[];
  static names(): { [key: string]: string } {
    return {
      theme: 'Theme',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      theme: { 'type': 'array', 'itemType': GetMetaTableThemeLevelResponseBodyEntityTheme },
      level: { 'type': 'array', 'itemType': GetMetaTableThemeLevelResponseBodyEntityLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationProcessResponseBodyData extends $tea.Model {
  taskStatus?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskStatus: 'TaskStatus',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskStatus: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBodyData extends $tea.Model {
  schedulerType?: string;
  repeatInterval?: number;
  repeatability?: string;
  projectId?: number;
  programType?: string;
  priority?: number;
  ownerId?: string;
  connection?: string;
  paramValues?: string;
  relatedFlowId?: number;
  dqcType?: number;
  baselineId?: number;
  description?: string;
  nodeName?: string;
  resGroupName?: string;
  businessId?: number;
  dqcDescription?: string;
  cronExpress?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      schedulerType: 'SchedulerType',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      projectId: 'ProjectId',
      programType: 'ProgramType',
      priority: 'Priority',
      ownerId: 'OwnerId',
      connection: 'Connection',
      paramValues: 'ParamValues',
      relatedFlowId: 'RelatedFlowId',
      dqcType: 'DqcType',
      baselineId: 'BaselineId',
      description: 'Description',
      nodeName: 'NodeName',
      resGroupName: 'ResGroupName',
      businessId: 'BusinessId',
      dqcDescription: 'DqcDescription',
      cronExpress: 'CronExpress',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerType: 'string',
      repeatInterval: 'number',
      repeatability: 'string',
      projectId: 'number',
      programType: 'string',
      priority: 'number',
      ownerId: 'string',
      connection: 'string',
      paramValues: 'string',
      relatedFlowId: 'number',
      dqcType: 'number',
      baselineId: 'number',
      description: 'string',
      nodeName: 'string',
      resGroupName: 'string',
      businessId: 'number',
      dqcDescription: 'string',
      cronExpress: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeChildrenResponseBodyDataNodes extends $tea.Model {
  schedulerType?: string;
  baselineId?: number;
  repeatability?: boolean;
  nodeName?: string;
  projectId?: number;
  programType?: string;
  priority?: number;
  ownerId?: string;
  cronExpress?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      schedulerType: 'SchedulerType',
      baselineId: 'BaselineId',
      repeatability: 'Repeatability',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      programType: 'ProgramType',
      priority: 'Priority',
      ownerId: 'OwnerId',
      cronExpress: 'CronExpress',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerType: 'string',
      baselineId: 'number',
      repeatability: 'boolean',
      nodeName: 'string',
      projectId: 'number',
      programType: 'string',
      priority: 'number',
      ownerId: 'string',
      cronExpress: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeChildrenResponseBodyData extends $tea.Model {
  nodes?: GetNodeChildrenResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetNodeChildrenResponseBodyDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOnBaselineResponseBodyData extends $tea.Model {
  owner?: string;
  nodeName?: string;
  nodeId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      nodeId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeParentsResponseBodyDataNodes extends $tea.Model {
  schedulerType?: string;
  baselineId?: number;
  repeatability?: boolean;
  nodeName?: string;
  projectId?: number;
  programType?: string;
  priority?: number;
  ownerId?: string;
  cronExpress?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      schedulerType: 'SchedulerType',
      baselineId: 'BaselineId',
      repeatability: 'Repeatability',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      programType: 'ProgramType',
      priority: 'Priority',
      ownerId: 'OwnerId',
      cronExpress: 'CronExpress',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerType: 'string',
      baselineId: 'number',
      repeatability: 'boolean',
      nodeName: 'string',
      projectId: 'number',
      programType: 'string',
      priority: 'number',
      ownerId: 'string',
      cronExpress: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeParentsResponseBodyData extends $tea.Model {
  nodes?: GetNodeParentsResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetNodeParentsResponseBodyDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseBodyNodeTypeInfoListNodeTypeInfo extends $tea.Model {
  nodeTypeName?: string;
  nodeType?: number;
  static names(): { [key: string]: string } {
    return {
      nodeTypeName: 'NodeTypeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypeName: 'string',
      nodeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseBodyNodeTypeInfoList extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  nodeTypeInfo?: GetNodeTypeListInfoResponseBodyNodeTypeInfoListNodeTypeInfo[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nodeTypeInfo: 'NodeTypeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nodeTypeInfo: { 'type': 'array', 'itemType': GetNodeTypeListInfoResponseBodyNodeTypeInfoListNodeTypeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList extends $tea.Model {
  baseId?: string;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList extends $tea.Model {
  granteeType?: number;
  granteeTypeSub?: number;
  granteeName?: string;
  granteeId?: string;
  static names(): { [key: string]: string } {
    return {
      granteeType: 'GranteeType',
      granteeTypeSub: 'GranteeTypeSub',
      granteeName: 'GranteeName',
      granteeId: 'GranteeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeType: 'number',
      granteeTypeSub: 'number',
      granteeName: 'string',
      granteeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList extends $tea.Model {
  columnName?: string;
  columnComment?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnComment: 'ColumnComment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnComment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList extends $tea.Model {
  objectName?: string;
  columnMetaList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList[];
  static names(): { [key: string]: string } {
    return {
      objectName: 'ObjectName',
      columnMetaList: 'ColumnMetaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
      columnMetaList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMeta extends $tea.Model {
  maxComputeProjectName?: string;
  workspaceId?: number;
  objectMetaList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList[];
  static names(): { [key: string]: string } {
    return {
      maxComputeProjectName: 'MaxComputeProjectName',
      workspaceId: 'WorkspaceId',
      objectMetaList: 'ObjectMetaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxComputeProjectName: 'string',
      workspaceId: 'number',
      objectMetaList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent extends $tea.Model {
  applyReason?: string;
  deadline?: number;
  orderType?: number;
  projectMeta?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMeta;
  static names(): { [key: string]: string } {
    return {
      applyReason: 'ApplyReason',
      deadline: 'Deadline',
      orderType: 'OrderType',
      projectMeta: 'ProjectMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      deadline: 'number',
      orderType: 'number',
      projectMeta: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail extends $tea.Model {
  applyBaseId?: string;
  applyTimestamp?: number;
  flowId?: string;
  flowStatus?: number;
  approveAccountList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList[];
  granteeObjectList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList[];
  approveContent?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent;
  static names(): { [key: string]: string } {
    return {
      applyBaseId: 'ApplyBaseId',
      applyTimestamp: 'ApplyTimestamp',
      flowId: 'FlowId',
      flowStatus: 'FlowStatus',
      approveAccountList: 'ApproveAccountList',
      granteeObjectList: 'GranteeObjectList',
      approveContent: 'ApproveContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBaseId: 'string',
      applyTimestamp: 'number',
      flowId: 'string',
      flowStatus: 'number',
      approveAccountList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList },
      granteeObjectList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList },
      approveContent: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyData extends $tea.Model {
  status?: number;
  maxFlowNode?: number;
  projectId?: number;
  isAllowDownload?: number;
  projectMode?: number;
  gmtModified?: string;
  prodStorageQuota?: string;
  projectDescription?: string;
  developmentType?: number;
  tablePrivacyMode?: number;
  defaultDiResourceGroupIdentifier?: string;
  schedulerMaxRetryTimes?: number;
  protectedMode?: number;
  schedulerRetryInterval?: number;
  appkey?: string;
  devStorageQuota?: string;
  residentArea?: string;
  isDefault?: number;
  destination?: number;
  projectName?: string;
  projectIdentifier?: string;
  disableDevelopment?: boolean;
  projectOwnerBaseId?: string;
  baseProject?: boolean;
  useProxyOdpsAccount?: boolean;
  gmtCreate?: string;
  tenantId?: number;
  envTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      maxFlowNode: 'MaxFlowNode',
      projectId: 'ProjectId',
      isAllowDownload: 'IsAllowDownload',
      projectMode: 'ProjectMode',
      gmtModified: 'GmtModified',
      prodStorageQuota: 'ProdStorageQuota',
      projectDescription: 'ProjectDescription',
      developmentType: 'DevelopmentType',
      tablePrivacyMode: 'TablePrivacyMode',
      defaultDiResourceGroupIdentifier: 'DefaultDiResourceGroupIdentifier',
      schedulerMaxRetryTimes: 'SchedulerMaxRetryTimes',
      protectedMode: 'ProtectedMode',
      schedulerRetryInterval: 'SchedulerRetryInterval',
      appkey: 'Appkey',
      devStorageQuota: 'DevStorageQuota',
      residentArea: 'ResidentArea',
      isDefault: 'IsDefault',
      destination: 'Destination',
      projectName: 'ProjectName',
      projectIdentifier: 'ProjectIdentifier',
      disableDevelopment: 'DisableDevelopment',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      baseProject: 'BaseProject',
      useProxyOdpsAccount: 'UseProxyOdpsAccount',
      gmtCreate: 'GmtCreate',
      tenantId: 'TenantId',
      envTypes: 'EnvTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      maxFlowNode: 'number',
      projectId: 'number',
      isAllowDownload: 'number',
      projectMode: 'number',
      gmtModified: 'string',
      prodStorageQuota: 'string',
      projectDescription: 'string',
      developmentType: 'number',
      tablePrivacyMode: 'number',
      defaultDiResourceGroupIdentifier: 'string',
      schedulerMaxRetryTimes: 'number',
      protectedMode: 'number',
      schedulerRetryInterval: 'number',
      appkey: 'string',
      devStorageQuota: 'string',
      residentArea: 'string',
      isDefault: 'number',
      destination: 'number',
      projectName: 'string',
      projectIdentifier: 'string',
      disableDevelopment: 'boolean',
      projectOwnerBaseId: 'string',
      baseProject: 'boolean',
      useProxyOdpsAccount: 'boolean',
      gmtCreate: 'string',
      tenantId: 'number',
      envTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDetailResponseBodyData extends $tea.Model {
  status?: number;
  residentArea?: string;
  projectId?: number;
  projectIdentifier?: string;
  projectName?: string;
  isAllowDownload?: number;
  projectMode?: number;
  projectDescription?: string;
  gmtModified?: string;
  projectOwnerBaseId?: string;
  developmentType?: number;
  defaultDiResourceGroupIdentifier?: string;
  gmtCreate?: string;
  schedulerMaxRetryTimes?: number;
  protectedMode?: number;
  tenantId?: number;
  schedulerRetryInterval?: number;
  envTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      residentArea: 'ResidentArea',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      projectName: 'ProjectName',
      isAllowDownload: 'IsAllowDownload',
      projectMode: 'ProjectMode',
      projectDescription: 'ProjectDescription',
      gmtModified: 'GmtModified',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      developmentType: 'DevelopmentType',
      defaultDiResourceGroupIdentifier: 'DefaultDiResourceGroupIdentifier',
      gmtCreate: 'GmtCreate',
      schedulerMaxRetryTimes: 'SchedulerMaxRetryTimes',
      protectedMode: 'ProtectedMode',
      tenantId: 'TenantId',
      schedulerRetryInterval: 'SchedulerRetryInterval',
      envTypes: 'EnvTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      residentArea: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      projectName: 'string',
      isAllowDownload: 'number',
      projectMode: 'number',
      projectDescription: 'string',
      gmtModified: 'string',
      projectOwnerBaseId: 'string',
      developmentType: 'number',
      defaultDiResourceGroupIdentifier: 'string',
      gmtCreate: 'string',
      schedulerMaxRetryTimes: 'number',
      protectedMode: 'number',
      tenantId: 'number',
      schedulerRetryInterval: 'number',
      envTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityResponseBodyData extends $tea.Model {
  relativeNode?: string;
  onDutyAccountName?: string;
  task?: number;
  tableName?: string;
  followers?: string;
  onDuty?: string;
  matchExpression?: string;
  createTime?: number;
  projectName?: string;
  hasRelativeNode?: boolean;
  envType?: string;
  entityLevel?: number;
  modifyUser?: string;
  sql?: number;
  id?: number;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      relativeNode: 'RelativeNode',
      onDutyAccountName: 'OnDutyAccountName',
      task: 'Task',
      tableName: 'TableName',
      followers: 'Followers',
      onDuty: 'OnDuty',
      matchExpression: 'MatchExpression',
      createTime: 'CreateTime',
      projectName: 'ProjectName',
      hasRelativeNode: 'HasRelativeNode',
      envType: 'EnvType',
      entityLevel: 'EntityLevel',
      modifyUser: 'ModifyUser',
      sql: 'Sql',
      id: 'Id',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relativeNode: 'string',
      onDutyAccountName: 'string',
      task: 'number',
      tableName: 'string',
      followers: 'string',
      onDuty: 'string',
      matchExpression: 'string',
      createTime: 'number',
      projectName: 'string',
      hasRelativeNode: 'boolean',
      envType: 'string',
      entityLevel: 'number',
      modifyUser: 'string',
      sql: 'number',
      id: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerResponseBodyData extends $tea.Model {
  followerAccountName?: string;
  tableName?: string;
  alarmMode?: number;
  entityId?: string;
  projectName?: string;
  id?: number;
  follower?: string;
  static names(): { [key: string]: string } {
    return {
      followerAccountName: 'FollowerAccountName',
      tableName: 'TableName',
      alarmMode: 'AlarmMode',
      entityId: 'EntityId',
      projectName: 'ProjectName',
      id: 'Id',
      follower: 'Follower',
    };
  }

  static types(): { [key: string]: any } {
    return {
      followerAccountName: 'string',
      tableName: 'string',
      alarmMode: 'number',
      entityId: 'string',
      projectName: 'string',
      id: 'number',
      follower: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleResponseBodyData extends $tea.Model {
  blockType?: number;
  onDutyAccountName?: string;
  warningThreshold?: string;
  property?: string;
  ruleType?: number;
  comment?: string;
  onDuty?: string;
  checker?: number;
  fixCheck?: boolean;
  methodId?: number;
  criticalThreshold?: string;
  predictType?: number;
  templateName?: string;
  checkerName?: string;
  ruleName?: string;
  methodName?: string;
  entityId?: number;
  whereCondition?: string;
  operator?: string;
  expectValue?: string;
  trend?: string;
  templateId?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      onDutyAccountName: 'OnDutyAccountName',
      warningThreshold: 'WarningThreshold',
      property: 'Property',
      ruleType: 'RuleType',
      comment: 'Comment',
      onDuty: 'OnDuty',
      checker: 'Checker',
      fixCheck: 'FixCheck',
      methodId: 'MethodId',
      criticalThreshold: 'CriticalThreshold',
      predictType: 'PredictType',
      templateName: 'TemplateName',
      checkerName: 'CheckerName',
      ruleName: 'RuleName',
      methodName: 'MethodName',
      entityId: 'EntityId',
      whereCondition: 'WhereCondition',
      operator: 'Operator',
      expectValue: 'ExpectValue',
      trend: 'Trend',
      templateId: 'TemplateId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      onDutyAccountName: 'string',
      warningThreshold: 'string',
      property: 'string',
      ruleType: 'number',
      comment: 'string',
      onDuty: 'string',
      checker: 'number',
      fixCheck: 'boolean',
      methodId: 'number',
      criticalThreshold: 'string',
      predictType: 'number',
      templateName: 'string',
      checkerName: 'string',
      ruleName: 'string',
      methodName: 'string',
      entityId: 'number',
      whereCondition: 'string',
      operator: 'string',
      expectValue: 'string',
      trend: 'string',
      templateId: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataRobots extends $tea.Model {
  webUrl?: string;
  atAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      webUrl: 'WebUrl',
      atAll: 'AtAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webUrl: 'string',
      atAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataNodes extends $tea.Model {
  owner?: string;
  nodeName?: string;
  nodeId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      nodeId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataBaselines extends $tea.Model {
  baselineName?: string;
  baselineId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineName: 'BaselineName',
      baselineId: 'BaselineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineName: 'string',
      baselineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataProjects extends $tea.Model {
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataBizProcesses extends $tea.Model {
  bizProcessName?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      bizProcessName: 'BizProcessName',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizProcessName: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyData extends $tea.Model {
  maxAlertTimes?: number;
  remindUnit?: string;
  alertInterval?: number;
  useflag?: boolean;
  founder?: string;
  remindId?: number;
  dndEnd?: string;
  remindType?: string;
  alertUnit?: string;
  dndStart?: string;
  remindName?: string;
  detail?: string;
  robots?: GetRemindResponseBodyDataRobots[];
  nodes?: GetRemindResponseBodyDataNodes[];
  baselines?: GetRemindResponseBodyDataBaselines[];
  projects?: GetRemindResponseBodyDataProjects[];
  bizProcesses?: GetRemindResponseBodyDataBizProcesses[];
  alertTargets?: string[];
  alertMethods?: string[];
  static names(): { [key: string]: string } {
    return {
      maxAlertTimes: 'MaxAlertTimes',
      remindUnit: 'RemindUnit',
      alertInterval: 'AlertInterval',
      useflag: 'Useflag',
      founder: 'Founder',
      remindId: 'RemindId',
      dndEnd: 'DndEnd',
      remindType: 'RemindType',
      alertUnit: 'AlertUnit',
      dndStart: 'DndStart',
      remindName: 'RemindName',
      detail: 'Detail',
      robots: 'Robots',
      nodes: 'Nodes',
      baselines: 'Baselines',
      projects: 'Projects',
      bizProcesses: 'BizProcesses',
      alertTargets: 'AlertTargets',
      alertMethods: 'AlertMethods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAlertTimes: 'number',
      remindUnit: 'string',
      alertInterval: 'number',
      useflag: 'boolean',
      founder: 'string',
      remindId: 'number',
      dndEnd: 'string',
      remindType: 'string',
      alertUnit: 'string',
      dndStart: 'string',
      remindName: 'string',
      detail: 'string',
      robots: { 'type': 'array', 'itemType': GetRemindResponseBodyDataRobots },
      nodes: { 'type': 'array', 'itemType': GetRemindResponseBodyDataNodes },
      baselines: { 'type': 'array', 'itemType': GetRemindResponseBodyDataBaselines },
      projects: { 'type': 'array', 'itemType': GetRemindResponseBodyDataProjects },
      bizProcesses: { 'type': 'array', 'itemType': GetRemindResponseBodyDataBizProcesses },
      alertTargets: { 'type': 'array', 'itemType': 'string' },
      alertMethods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend extends $tea.Model {
  timePoint?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timePoint: 'TimePoint',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePoint: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend extends $tea.Model {
  timePoint?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timePoint: 'TimePoint',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePoint: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend extends $tea.Model {
  timePoint?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timePoint: 'TimePoint',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePoint: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrend extends $tea.Model {
  todayTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend[];
  yesterdayTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend[];
  avgTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend[];
  static names(): { [key: string]: string } {
    return {
      todayTrend: 'TodayTrend',
      yesterdayTrend: 'YesterdayTrend',
      avgTrend: 'AvgTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      todayTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend },
      yesterdayTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend },
      avgTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBodyData extends $tea.Model {
  owner?: string;
  topicName?: string;
  baselineStatus?: string;
  projectId?: number;
  nextAlertTime?: number;
  instanceId?: number;
  fixTime?: number;
  baselineInGroupId?: number;
  baselineBuffer?: number;
  topicType?: string;
  topicStatus?: string;
  happenTime?: number;
  dealTime?: number;
  dealUser?: string;
  baselineName?: string;
  baselineId?: number;
  nodeName?: string;
  alertTime?: number;
  buffer?: number;
  assigner?: string;
  topicId?: number;
  addTime?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      topicName: 'TopicName',
      baselineStatus: 'BaselineStatus',
      projectId: 'ProjectId',
      nextAlertTime: 'NextAlertTime',
      instanceId: 'InstanceId',
      fixTime: 'FixTime',
      baselineInGroupId: 'BaselineInGroupId',
      baselineBuffer: 'BaselineBuffer',
      topicType: 'TopicType',
      topicStatus: 'TopicStatus',
      happenTime: 'HappenTime',
      dealTime: 'DealTime',
      dealUser: 'DealUser',
      baselineName: 'BaselineName',
      baselineId: 'BaselineId',
      nodeName: 'NodeName',
      alertTime: 'AlertTime',
      buffer: 'Buffer',
      assigner: 'Assigner',
      topicId: 'TopicId',
      addTime: 'AddTime',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      topicName: 'string',
      baselineStatus: 'string',
      projectId: 'number',
      nextAlertTime: 'number',
      instanceId: 'number',
      fixTime: 'number',
      baselineInGroupId: 'number',
      baselineBuffer: 'number',
      topicType: 'string',
      topicStatus: 'string',
      happenTime: 'number',
      dealTime: 'number',
      dealUser: 'string',
      baselineName: 'string',
      baselineId: 'number',
      nodeName: 'string',
      alertTime: 'number',
      buffer: 'number',
      assigner: 'string',
      topicId: 'number',
      addTime: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseBodyDataInfluences extends $tea.Model {
  status?: string;
  owner?: string;
  baselineName?: string;
  baselineId?: number;
  bizdate?: number;
  buffer?: number;
  projectId?: number;
  priority?: number;
  inGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      baselineName: 'BaselineName',
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      buffer: 'Buffer',
      projectId: 'ProjectId',
      priority: 'Priority',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      baselineName: 'string',
      baselineId: 'number',
      bizdate: 'number',
      buffer: 'number',
      projectId: 'number',
      priority: 'number',
      inGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseBodyData extends $tea.Model {
  topicId?: number;
  influences?: GetTopicInfluenceResponseBodyDataInfluences[];
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
      influences: 'Influences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
      influences: { 'type': 'array', 'itemType': GetTopicInfluenceResponseBodyDataInfluences },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportConnectionsResponseBodyData extends $tea.Model {
  status?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourcesResponseBodyData extends $tea.Model {
  status?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDISyncTasksResponseBodyTaskInfo extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesInstances extends $tea.Model {
  status?: string;
  instanceId?: number;
  nodeName?: string;
  nodeId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      instanceId: 'InstanceId',
      nodeName: 'NodeName',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      instanceId: 'number',
      nodeName: 'string',
      nodeId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesTopics extends $tea.Model {
  topicName?: string;
  instanceId?: number;
  topicId?: number;
  topicOwner?: string;
  nodeId?: number;
  topicStatus?: string;
  static names(): { [key: string]: string } {
    return {
      topicName: 'TopicName',
      instanceId: 'InstanceId',
      topicId: 'TopicId',
      topicOwner: 'TopicOwner',
      nodeId: 'NodeId',
      topicStatus: 'TopicStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicName: 'string',
      instanceId: 'number',
      topicId: 'number',
      topicOwner: 'string',
      nodeId: 'number',
      topicStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesNodes extends $tea.Model {
  owner?: string;
  nodeName?: string;
  nodeId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      nodeId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert extends $tea.Model {
  status?: string;
  baselineOwner?: string;
  baselineId?: number;
  baselineName?: string;
  bizdate?: number;
  projectId?: number;
  inGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      baselineOwner: 'BaselineOwner',
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      bizdate: 'Bizdate',
      projectId: 'ProjectId',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      baselineOwner: 'string',
      baselineId: 'number',
      baselineName: 'string',
      bizdate: 'number',
      projectId: 'number',
      inGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessages extends $tea.Model {
  remindId?: number;
  alertMessageStatus?: string;
  alertUser?: string;
  alertTime?: number;
  alertMethod?: string;
  source?: string;
  content?: string;
  remindName?: string;
  alertId?: number;
  instances?: ListAlertMessagesResponseBodyDataAlertMessagesInstances[];
  topics?: ListAlertMessagesResponseBodyDataAlertMessagesTopics[];
  nodes?: ListAlertMessagesResponseBodyDataAlertMessagesNodes[];
  slaAlert?: ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert;
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
      alertMessageStatus: 'AlertMessageStatus',
      alertUser: 'AlertUser',
      alertTime: 'AlertTime',
      alertMethod: 'AlertMethod',
      source: 'Source',
      content: 'Content',
      remindName: 'RemindName',
      alertId: 'AlertId',
      instances: 'Instances',
      topics: 'Topics',
      nodes: 'Nodes',
      slaAlert: 'SlaAlert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
      alertMessageStatus: 'string',
      alertUser: 'string',
      alertTime: 'number',
      alertMethod: 'string',
      source: 'string',
      content: 'string',
      remindName: 'string',
      alertId: 'number',
      instances: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesInstances },
      topics: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesTopics },
      nodes: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesNodes },
      slaAlert: ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyData extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  totalCount?: string;
  alertMessages?: ListAlertMessagesResponseBodyDataAlertMessages[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      alertMessages: 'AlertMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
      alertMessages: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseBodyDataBaselines extends $tea.Model {
  hourSlaDetail?: string;
  isDefault?: boolean;
  owner?: string;
  projectId?: number;
  priority?: number;
  slaMinu?: number;
  slaHour?: number;
  baselineId?: number;
  baselineName?: string;
  hourExpDetail?: string;
  useFlag?: boolean;
  expHour?: number;
  baselineType?: string;
  expMinu?: number;
  static names(): { [key: string]: string } {
    return {
      hourSlaDetail: 'HourSlaDetail',
      isDefault: 'IsDefault',
      owner: 'Owner',
      projectId: 'ProjectId',
      priority: 'Priority',
      slaMinu: 'SlaMinu',
      slaHour: 'SlaHour',
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      hourExpDetail: 'HourExpDetail',
      useFlag: 'UseFlag',
      expHour: 'ExpHour',
      baselineType: 'BaselineType',
      expMinu: 'ExpMinu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hourSlaDetail: 'string',
      isDefault: 'boolean',
      owner: 'string',
      projectId: 'number',
      priority: 'number',
      slaMinu: 'number',
      slaHour: 'number',
      baselineId: 'number',
      baselineName: 'string',
      hourExpDetail: 'string',
      useFlag: 'boolean',
      expHour: 'number',
      baselineType: 'string',
      expMinu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  baselines?: ListBaselineConfigsResponseBodyDataBaselines[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      baselines: 'Baselines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      baselines: { 'type': 'array', 'itemType': ListBaselineConfigsResponseBodyDataBaselines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseBodyDataBaselineStatuses extends $tea.Model {
  status?: string;
  owner?: string;
  finishTime?: number;
  projectId?: number;
  priority?: number;
  endCast?: number;
  inGroupId?: number;
  baselineName?: string;
  baselineId?: number;
  finishStatus?: string;
  bizdate?: number;
  buffer?: number;
  slaTime?: number;
  expTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      finishTime: 'FinishTime',
      projectId: 'ProjectId',
      priority: 'Priority',
      endCast: 'EndCast',
      inGroupId: 'InGroupId',
      baselineName: 'BaselineName',
      baselineId: 'BaselineId',
      finishStatus: 'FinishStatus',
      bizdate: 'Bizdate',
      buffer: 'Buffer',
      slaTime: 'SlaTime',
      expTime: 'ExpTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      finishTime: 'number',
      projectId: 'number',
      priority: 'number',
      endCast: 'number',
      inGroupId: 'number',
      baselineName: 'string',
      baselineId: 'number',
      finishStatus: 'string',
      bizdate: 'number',
      buffer: 'number',
      slaTime: 'number',
      expTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  baselineStatuses?: ListBaselineStatusesResponseBodyDataBaselineStatuses[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      baselineStatuses: 'BaselineStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      baselineStatuses: { 'type': 'array', 'itemType': ListBaselineStatusesResponseBodyDataBaselineStatuses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseBodyDataBusiness extends $tea.Model {
  owner?: string;
  description?: string;
  projectId?: number;
  businessId?: number;
  businessName?: string;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      description: 'Description',
      projectId: 'ProjectId',
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      description: 'string',
      projectId: 'number',
      businessId: 'number',
      businessName: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  business?: ListBusinessResponseBodyDataBusiness[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      business: 'Business',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      business: { 'type': 'array', 'itemType': ListBusinessResponseBodyDataBusiness },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseBodyDataCalcEngines extends $tea.Model {
  bindingProjectName?: string;
  isDefault?: boolean;
  engineId?: number;
  dwRegion?: string;
  taskAuthType?: string;
  calcEngineType?: string;
  engineInfo?: { [key: string]: any };
  envType?: string;
  region?: string;
  gmtCreate?: string;
  bindingProjectId?: number;
  name?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bindingProjectName: 'BindingProjectName',
      isDefault: 'IsDefault',
      engineId: 'EngineId',
      dwRegion: 'DwRegion',
      taskAuthType: 'TaskAuthType',
      calcEngineType: 'CalcEngineType',
      engineInfo: 'EngineInfo',
      envType: 'EnvType',
      region: 'Region',
      gmtCreate: 'GmtCreate',
      bindingProjectId: 'BindingProjectId',
      name: 'Name',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingProjectName: 'string',
      isDefault: 'boolean',
      engineId: 'number',
      dwRegion: 'string',
      taskAuthType: 'string',
      calcEngineType: 'string',
      engineInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envType: 'string',
      region: 'string',
      gmtCreate: 'string',
      bindingProjectId: 'number',
      name: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  calcEngines?: ListCalcEnginesResponseBodyDataCalcEngines[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      calcEngines: 'CalcEngines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      calcEngines: { 'type': 'array', 'itemType': ListCalcEnginesResponseBodyDataCalcEngines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnections extends $tea.Model {
  status?: number;
  connectionType?: string;
  projectId?: number;
  subType?: string;
  gmtModified?: string;
  envType?: number;
  connectStatus?: number;
  sequence?: number;
  description?: string;
  gmtCreate?: string;
  defaultEngine?: boolean;
  shared?: boolean;
  operator?: string;
  name?: string;
  content?: string;
  id?: number;
  bindingCalcEngineId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      connectionType: 'ConnectionType',
      projectId: 'ProjectId',
      subType: 'SubType',
      gmtModified: 'GmtModified',
      envType: 'EnvType',
      connectStatus: 'ConnectStatus',
      sequence: 'Sequence',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      defaultEngine: 'DefaultEngine',
      shared: 'Shared',
      operator: 'Operator',
      name: 'Name',
      content: 'Content',
      id: 'Id',
      bindingCalcEngineId: 'BindingCalcEngineId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      connectionType: 'string',
      projectId: 'number',
      subType: 'string',
      gmtModified: 'string',
      envType: 'number',
      connectStatus: 'number',
      sequence: 'number',
      description: 'string',
      gmtCreate: 'string',
      defaultEngine: 'boolean',
      shared: 'boolean',
      operator: 'string',
      name: 'string',
      content: 'string',
      id: 'number',
      bindingCalcEngineId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  connections?: ListConnectionsResponseBodyDataConnections[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      connections: 'Connections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      connections: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords extends $tea.Model {
  endTime?: string;
  creatorId?: string;
  createdTime?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      creatorId: 'CreatorId',
      createdTime: 'CreatedTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      creatorId: 'string',
      createdTime: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList extends $tea.Model {
  apiStatus?: number;
  apiId?: number;
  modifiedTime?: string;
  groupId?: string;
  projectId?: number;
  creatorId?: string;
  createdTime?: string;
  apiName?: string;
  tenantId?: number;
  apiPath?: string;
  authorizationRecords?: ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords[];
  static names(): { [key: string]: string } {
    return {
      apiStatus: 'ApiStatus',
      apiId: 'ApiId',
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      projectId: 'ProjectId',
      creatorId: 'CreatorId',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      tenantId: 'TenantId',
      apiPath: 'ApiPath',
      authorizationRecords: 'AuthorizationRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiStatus: 'number',
      apiId: 'number',
      modifiedTime: 'string',
      groupId: 'string',
      projectId: 'number',
      creatorId: 'string',
      createdTime: 'string',
      apiName: 'string',
      tenantId: 'number',
      apiPath: 'string',
      authorizationRecords: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  apiAuthorizationList?: ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiAuthorizationList: 'ApiAuthorizationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      apiAuthorizationList: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorMessage?: string;
  errorCode?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorCode: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  columnName?: string;
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  parameterDataType?: number;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      parameterDataType: 'number',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisRegistrationDetails extends $tea.Model {
  serviceHost?: string;
  serviceContentType?: number;
  servicePath?: string;
  successfulResultSample?: string;
  failedResultSample?: string;
  serviceRequestBodyDescription?: string;
  registrationErrorCodes?: ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters?: ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      serviceHost: 'ServiceHost',
      serviceContentType: 'ServiceContentType',
      servicePath: 'ServicePath',
      successfulResultSample: 'SuccessfulResultSample',
      failedResultSample: 'FailedResultSample',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceHost: 'string',
      serviceContentType: 'number',
      servicePath: 'string',
      successfulResultSample: 'string',
      failedResultSample: 'string',
      serviceRequestBodyDescription: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisScriptDetailsScriptRequestParameters extends $tea.Model {
  columnName?: string;
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  parameterDataType?: number;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      parameterDataType: 'number',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisScriptDetailsScriptResponseParameters extends $tea.Model {
  parameterDescription?: string;
  columnName?: string;
  parameterName?: string;
  parameterDataType?: number;
  exampleValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      columnName: 'string',
      parameterName: 'string',
      parameterDataType: 'number',
      exampleValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisScriptDetailsScriptConnection extends $tea.Model {
  tableName?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisScriptDetails extends $tea.Model {
  script?: string;
  isPagedResponse?: boolean;
  scriptRequestParameters?: ListDataServiceApisResponseBodyDataApisScriptDetailsScriptRequestParameters[];
  scriptResponseParameters?: ListDataServiceApisResponseBodyDataApisScriptDetailsScriptResponseParameters[];
  scriptConnection?: ListDataServiceApisResponseBodyDataApisScriptDetailsScriptConnection;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      isPagedResponse: 'IsPagedResponse',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      scriptConnection: 'ScriptConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      isPagedResponse: 'boolean',
      scriptRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisScriptDetailsScriptResponseParameters },
      scriptConnection: ListDataServiceApisResponseBodyDataApisScriptDetailsScriptConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisWizardDetailsWizardRequestParameters extends $tea.Model {
  columnName?: string;
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  parameterDataType?: number;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      parameterDataType: 'number',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisWizardDetailsWizardResponseParameters extends $tea.Model {
  parameterDescription?: string;
  columnName?: string;
  parameterName?: string;
  parameterDataType?: number;
  exampleValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      columnName: 'ColumnName',
      parameterName: 'ParameterName',
      parameterDataType: 'ParameterDataType',
      exampleValue: 'ExampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      columnName: 'string',
      parameterName: 'string',
      parameterDataType: 'number',
      exampleValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisWizardDetailsWizardConnection extends $tea.Model {
  tableName?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisWizardDetails extends $tea.Model {
  isPagedResponse?: boolean;
  wizardRequestParameters?: ListDataServiceApisResponseBodyDataApisWizardDetailsWizardRequestParameters[];
  wizardResponseParameters?: ListDataServiceApisResponseBodyDataApisWizardDetailsWizardResponseParameters[];
  wizardConnection?: ListDataServiceApisResponseBodyDataApisWizardDetailsWizardConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
      wizardConnection: 'WizardConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      wizardRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisWizardDetailsWizardResponseParameters },
      wizardConnection: ListDataServiceApisResponseBodyDataApisWizardDetailsWizardConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApis extends $tea.Model {
  timeout?: number;
  status?: number;
  apiId?: number;
  apiMode?: number;
  projectId?: number;
  responseContentType?: number;
  creatorId?: string;
  visibleRange?: number;
  modifiedTime?: string;
  operatorId?: string;
  groupId?: string;
  description?: string;
  folderId?: number;
  requestMethod?: number;
  createdTime?: string;
  apiName?: string;
  tenantId?: number;
  apiPath?: string;
  protocols?: number[];
  registrationDetails?: ListDataServiceApisResponseBodyDataApisRegistrationDetails;
  scriptDetails?: ListDataServiceApisResponseBodyDataApisScriptDetails;
  wizardDetails?: ListDataServiceApisResponseBodyDataApisWizardDetails;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      status: 'Status',
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      projectId: 'ProjectId',
      responseContentType: 'ResponseContentType',
      creatorId: 'CreatorId',
      visibleRange: 'VisibleRange',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      groupId: 'GroupId',
      description: 'Description',
      folderId: 'FolderId',
      requestMethod: 'RequestMethod',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      tenantId: 'TenantId',
      apiPath: 'ApiPath',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      scriptDetails: 'ScriptDetails',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'number',
      status: 'number',
      apiId: 'number',
      apiMode: 'number',
      projectId: 'number',
      responseContentType: 'number',
      creatorId: 'string',
      visibleRange: 'number',
      modifiedTime: 'string',
      operatorId: 'string',
      groupId: 'string',
      description: 'string',
      folderId: 'number',
      requestMethod: 'number',
      createdTime: 'string',
      apiName: 'string',
      tenantId: 'number',
      apiPath: 'string',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: ListDataServiceApisResponseBodyDataApisRegistrationDetails,
      scriptDetails: ListDataServiceApisResponseBodyDataApisScriptDetails,
      wizardDetails: ListDataServiceApisResponseBodyDataApisWizardDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  apis?: ListDataServiceApisResponseBodyDataApis[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      apis: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApis },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponseBodyDataApplications extends $tea.Model {
  applicationName?: string;
  applicationId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationId: 'ApplicationId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  applications?: ListDataServiceApplicationsResponseBodyDataApplications[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      applications: 'Applications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      applications: { 'type': 'array', 'itemType': ListDataServiceApplicationsResponseBodyDataApplications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList extends $tea.Model {
  apiId?: number;
  apiStatus?: number;
  grantOperatorId?: string;
  projectId?: number;
  creatorId?: string;
  grantEndTime?: string;
  modifiedTime?: string;
  groupId?: string;
  grantCreatedTime?: string;
  createdTime?: string;
  apiName?: string;
  tenantId?: number;
  apiPath?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiStatus: 'ApiStatus',
      grantOperatorId: 'GrantOperatorId',
      projectId: 'ProjectId',
      creatorId: 'CreatorId',
      grantEndTime: 'GrantEndTime',
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      grantCreatedTime: 'GrantCreatedTime',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      tenantId: 'TenantId',
      apiPath: 'ApiPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiStatus: 'number',
      grantOperatorId: 'string',
      projectId: 'number',
      creatorId: 'string',
      grantEndTime: 'string',
      modifiedTime: 'string',
      groupId: 'string',
      grantCreatedTime: 'string',
      createdTime: 'string',
      apiName: 'string',
      tenantId: 'number',
      apiPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  apiAuthorizedList?: ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiAuthorizedList: 'ApiAuthorizedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      apiAuthorizedList: { 'type': 'array', 'itemType': ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseBodyFolderPagingResultFolders extends $tea.Model {
  parentId?: number;
  modifiedTime?: string;
  groupId?: string;
  folderId?: number;
  folderName?: string;
  projectId?: number;
  createdTime?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      folderId: 'FolderId',
      folderName: 'FolderName',
      projectId: 'ProjectId',
      createdTime: 'CreatedTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'number',
      modifiedTime: 'string',
      groupId: 'string',
      folderId: 'number',
      folderName: 'string',
      projectId: 'number',
      createdTime: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseBodyFolderPagingResult extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  folders?: ListDataServiceFoldersResponseBodyFolderPagingResultFolders[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      folders: 'Folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      folders: { 'type': 'array', 'itemType': ListDataServiceFoldersResponseBodyFolderPagingResultFolders },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseBodyGroupPagingResultGroups extends $tea.Model {
  modifiedTime?: string;
  description?: string;
  groupName?: string;
  groupId?: string;
  projectId?: number;
  apiGatewayGroupId?: string;
  creatorId?: string;
  createdTime?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      groupName: 'GroupName',
      groupId: 'GroupId',
      projectId: 'ProjectId',
      apiGatewayGroupId: 'ApiGatewayGroupId',
      creatorId: 'CreatorId',
      createdTime: 'CreatedTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      description: 'string',
      groupName: 'string',
      groupId: 'string',
      projectId: 'number',
      apiGatewayGroupId: 'string',
      creatorId: 'string',
      createdTime: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseBodyGroupPagingResult extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  groups?: ListDataServiceGroupsResponseBodyGroupPagingResultGroups[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      groups: { 'type': 'array', 'itemType': ListDataServiceGroupsResponseBodyGroupPagingResultGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorMessage?: string;
  errorCode?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorCode: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  exampleValue?: string;
  parameterDataType?: number;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      exampleValue: 'string',
      parameterDataType: 'number',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails extends $tea.Model {
  serviceHost?: string;
  serviceContentType?: number;
  servicePath?: string;
  successfulResultSample?: string;
  failedResultSample?: string;
  serviceRequestBodyDescription?: string;
  registrationErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      serviceHost: 'ServiceHost',
      serviceContentType: 'ServiceContentType',
      servicePath: 'ServicePath',
      successfulResultSample: 'SuccessfulResultSample',
      failedResultSample: 'FailedResultSample',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceHost: 'string',
      serviceContentType: 'number',
      servicePath: 'string',
      successfulResultSample: 'string',
      failedResultSample: 'string',
      serviceRequestBodyDescription: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes extends $tea.Model {
  errorMessage?: string;
  errorCode?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorCode: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters extends $tea.Model {
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  exampleValue?: string;
  parameterDataType?: number;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      exampleValue: 'string',
      parameterDataType: 'number',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters extends $tea.Model {
  parameterDescription?: string;
  parameterName?: string;
  exampleValue?: string;
  parameterDataType?: number;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection extends $tea.Model {
  tableName?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetails extends $tea.Model {
  isPagedResponse?: boolean;
  successfulResultSample?: string;
  failedResultSample?: string;
  script?: string;
  scriptErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes[];
  scriptRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters[];
  scriptResponseParameters?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters[];
  scriptConnection?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      failedResultSample: 'FailedResultSample',
      script: 'Script',
      scriptErrorCodes: 'ScriptErrorCodes',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      scriptConnection: 'ScriptConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      failedResultSample: 'string',
      script: 'string',
      scriptErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes },
      scriptRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters },
      scriptConnection: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes extends $tea.Model {
  errorMessage?: string;
  errorCode?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorCode: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters extends $tea.Model {
  parameterName?: string;
  parameterPosition?: number;
  parameterDescription?: string;
  defaultValue?: string;
  parameterOperator?: number;
  exampleValue?: string;
  parameterDataType?: number;
  isRequiredParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterPosition: 'ParameterPosition',
      parameterDescription: 'ParameterDescription',
      defaultValue: 'DefaultValue',
      parameterOperator: 'ParameterOperator',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      isRequiredParameter: 'IsRequiredParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterPosition: 'number',
      parameterDescription: 'string',
      defaultValue: 'string',
      parameterOperator: 'number',
      exampleValue: 'string',
      parameterDataType: 'number',
      isRequiredParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters extends $tea.Model {
  parameterDescription?: string;
  parameterName?: string;
  exampleValue?: string;
  parameterDataType?: number;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection extends $tea.Model {
  tableName?: string;
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetails extends $tea.Model {
  isPagedResponse?: boolean;
  successfulResultSample?: string;
  failedResultSample?: string;
  wizardErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes[];
  wizardRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters[];
  wizardResponseParameters?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters[];
  wizardConnection?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      failedResultSample: 'FailedResultSample',
      wizardErrorCodes: 'WizardErrorCodes',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
      wizardConnection: 'WizardConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      failedResultSample: 'string',
      wizardErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes },
      wizardRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters },
      wizardConnection: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApis extends $tea.Model {
  timeout?: number;
  status?: number;
  apiId?: number;
  apiMode?: number;
  projectId?: number;
  responseContentType?: number;
  creatorId?: string;
  visibleRange?: number;
  modifiedTime?: string;
  operatorId?: string;
  groupId?: string;
  description?: string;
  requestMethod?: number;
  createdTime?: string;
  apiName?: string;
  tenantId?: number;
  apiPath?: string;
  protocols?: number[];
  registrationDetails?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails;
  scriptDetails?: ListDataServicePublishedApisResponseBodyDataApisScriptDetails;
  wizardDetails?: ListDataServicePublishedApisResponseBodyDataApisWizardDetails;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      status: 'Status',
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      projectId: 'ProjectId',
      responseContentType: 'ResponseContentType',
      creatorId: 'CreatorId',
      visibleRange: 'VisibleRange',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      groupId: 'GroupId',
      description: 'Description',
      requestMethod: 'RequestMethod',
      createdTime: 'CreatedTime',
      apiName: 'ApiName',
      tenantId: 'TenantId',
      apiPath: 'ApiPath',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      scriptDetails: 'ScriptDetails',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'number',
      status: 'number',
      apiId: 'number',
      apiMode: 'number',
      projectId: 'number',
      responseContentType: 'number',
      creatorId: 'string',
      visibleRange: 'number',
      modifiedTime: 'string',
      operatorId: 'string',
      groupId: 'string',
      description: 'string',
      requestMethod: 'number',
      createdTime: 'string',
      apiName: 'string',
      tenantId: 'number',
      apiPath: 'string',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails,
      scriptDetails: ListDataServicePublishedApisResponseBodyDataApisScriptDetails,
      wizardDetails: ListDataServicePublishedApisResponseBodyDataApisWizardDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  apis?: ListDataServicePublishedApisResponseBodyDataApis[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      apis: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApis },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyDataDataSources extends $tea.Model {
  status?: number;
  projectId?: number;
  subType?: string;
  gmtModified?: string;
  envType?: number;
  connectStatus?: number;
  sequence?: number;
  description?: string;
  dataSourceType?: string;
  gmtCreate?: string;
  defaultEngine?: boolean;
  shared?: boolean;
  operator?: string;
  name?: string;
  content?: string;
  id?: number;
  bindingCalcEngineId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      subType: 'SubType',
      gmtModified: 'GmtModified',
      envType: 'EnvType',
      connectStatus: 'ConnectStatus',
      sequence: 'Sequence',
      description: 'Description',
      dataSourceType: 'DataSourceType',
      gmtCreate: 'GmtCreate',
      defaultEngine: 'DefaultEngine',
      shared: 'Shared',
      operator: 'Operator',
      name: 'Name',
      content: 'Content',
      id: 'Id',
      bindingCalcEngineId: 'BindingCalcEngineId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      projectId: 'number',
      subType: 'string',
      gmtModified: 'string',
      envType: 'number',
      connectStatus: 'number',
      sequence: 'number',
      description: 'string',
      dataSourceType: 'string',
      gmtCreate: 'string',
      defaultEngine: 'boolean',
      shared: 'boolean',
      operator: 'string',
      name: 'string',
      content: 'string',
      id: 'number',
      bindingCalcEngineId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  dataSources?: ListDataSourcesResponseBodyDataDataSources[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataSources: 'DataSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDataDataSources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIProjectConfigResponseBodyData extends $tea.Model {
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDISyncTasksResponseBodyTaskListRealTimeSolutionList extends $tea.Model {
  processName?: string;
  taskType?: string;
  processId?: number;
  taskStatus?: string;
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      processName: 'ProcessName',
      taskType: 'TaskType',
      processId: 'ProcessId',
      taskStatus: 'TaskStatus',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processName: 'string',
      taskType: 'string',
      processId: 'number',
      taskStatus: 'string',
      createTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDISyncTasksResponseBodyTaskList extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  realTimeSolutionList?: ListDISyncTasksResponseBodyTaskListRealTimeSolutionList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      realTimeSolutionList: 'RealTimeSolutionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      realTimeSolutionList: { 'type': 'array', 'itemType': ListDISyncTasksResponseBodyTaskListRealTimeSolutionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBodyDataFiles extends $tea.Model {
  commitStatus?: number;
  autoParsing?: boolean;
  owner?: string;
  createTime?: number;
  fileType?: number;
  currentVersion?: number;
  bizId?: number;
  lastEditUser?: string;
  fileName?: string;
  connectionName?: string;
  useType?: string;
  fileFolderId?: string;
  fileId?: number;
  parentId?: number;
  createUser?: string;
  isMaxCompute?: boolean;
  businessId?: number;
  fileDescription?: string;
  lastEditTime?: number;
  content?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      commitStatus: 'CommitStatus',
      autoParsing: 'AutoParsing',
      owner: 'Owner',
      createTime: 'CreateTime',
      fileType: 'FileType',
      currentVersion: 'CurrentVersion',
      bizId: 'BizId',
      lastEditUser: 'LastEditUser',
      fileName: 'FileName',
      connectionName: 'ConnectionName',
      useType: 'UseType',
      fileFolderId: 'FileFolderId',
      fileId: 'FileId',
      parentId: 'ParentId',
      createUser: 'CreateUser',
      isMaxCompute: 'IsMaxCompute',
      businessId: 'BusinessId',
      fileDescription: 'FileDescription',
      lastEditTime: 'LastEditTime',
      content: 'Content',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitStatus: 'number',
      autoParsing: 'boolean',
      owner: 'string',
      createTime: 'number',
      fileType: 'number',
      currentVersion: 'number',
      bizId: 'number',
      lastEditUser: 'string',
      fileName: 'string',
      connectionName: 'string',
      useType: 'string',
      fileFolderId: 'string',
      fileId: 'number',
      parentId: 'number',
      createUser: 'string',
      isMaxCompute: 'boolean',
      businessId: 'number',
      fileDescription: 'string',
      lastEditTime: 'number',
      content: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  files?: ListFilesResponseBodyDataFiles[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      files: { 'type': 'array', 'itemType': ListFilesResponseBodyDataFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo extends $tea.Model {
  nodeTypeName?: string;
  nodeType?: number;
  static names(): { [key: string]: string } {
    return {
      nodeTypeName: 'NodeTypeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypeName: 'string',
      nodeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeResponseBodyNodeTypeInfoList extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  nodeTypeInfo?: ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nodeTypeInfo: 'NodeTypeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nodeTypeInfo: { 'type': 'array', 'itemType': ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseBodyDataFileVersions extends $tea.Model {
  fileContent?: string;
  status?: string;
  isCurrentProd?: boolean;
  commitUser?: string;
  nodeContent?: string;
  comment?: string;
  filePropertyContent?: string;
  fileName?: string;
  useType?: string;
  changeType?: string;
  fileVersion?: number;
  commitTime?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      fileContent: 'FileContent',
      status: 'Status',
      isCurrentProd: 'IsCurrentProd',
      commitUser: 'CommitUser',
      nodeContent: 'NodeContent',
      comment: 'Comment',
      filePropertyContent: 'FilePropertyContent',
      fileName: 'FileName',
      useType: 'UseType',
      changeType: 'ChangeType',
      fileVersion: 'FileVersion',
      commitTime: 'CommitTime',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      status: 'string',
      isCurrentProd: 'boolean',
      commitUser: 'string',
      nodeContent: 'string',
      comment: 'string',
      filePropertyContent: 'string',
      fileName: 'string',
      useType: 'string',
      changeType: 'string',
      fileVersion: 'number',
      commitTime: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  fileVersions?: ListFileVersionsResponseBodyDataFileVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      fileVersions: 'FileVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      fileVersions: { 'type': 'array', 'itemType': ListFileVersionsResponseBodyDataFileVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseBodyDataFolders extends $tea.Model {
  folderPath?: string;
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderPath: 'FolderPath',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderPath: 'string',
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  folders?: ListFoldersResponseBodyDataFolders[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      folders: 'Folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      folders: { 'type': 'array', 'itemType': ListFoldersResponseBodyDataFolders },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAmountResponseBodyInstanceCounts extends $tea.Model {
  date?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataInstances extends $tea.Model {
  status?: string;
  cycTime?: number;
  beginRunningTime?: number;
  finishTime?: number;
  errorMessage?: string;
  createTime?: number;
  dagId?: number;
  priority?: number;
  taskType?: string;
  paramValues?: string;
  connection?: string;
  baselineId?: number;
  dqcType?: number;
  dagType?: string;
  businessId?: number;
  taskRerunTime?: number;
  modifyTime?: number;
  repeatability?: boolean;
  repeatInterval?: number;
  instanceId?: number;
  beginWaitResTime?: number;
  relatedFlowId?: number;
  bizdate?: number;
  nodeName?: string;
  beginWaitTimeTime?: number;
  dqcDescription?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      cycTime: 'CycTime',
      beginRunningTime: 'BeginRunningTime',
      finishTime: 'FinishTime',
      errorMessage: 'ErrorMessage',
      createTime: 'CreateTime',
      dagId: 'DagId',
      priority: 'Priority',
      taskType: 'TaskType',
      paramValues: 'ParamValues',
      connection: 'Connection',
      baselineId: 'BaselineId',
      dqcType: 'DqcType',
      dagType: 'DagType',
      businessId: 'BusinessId',
      taskRerunTime: 'TaskRerunTime',
      modifyTime: 'ModifyTime',
      repeatability: 'Repeatability',
      repeatInterval: 'RepeatInterval',
      instanceId: 'InstanceId',
      beginWaitResTime: 'BeginWaitResTime',
      relatedFlowId: 'RelatedFlowId',
      bizdate: 'Bizdate',
      nodeName: 'NodeName',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      dqcDescription: 'DqcDescription',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      cycTime: 'number',
      beginRunningTime: 'number',
      finishTime: 'number',
      errorMessage: 'string',
      createTime: 'number',
      dagId: 'number',
      priority: 'number',
      taskType: 'string',
      paramValues: 'string',
      connection: 'string',
      baselineId: 'number',
      dqcType: 'number',
      dagType: 'string',
      businessId: 'number',
      taskRerunTime: 'number',
      modifyTime: 'number',
      repeatability: 'boolean',
      repeatInterval: 'number',
      instanceId: 'number',
      beginWaitResTime: 'number',
      relatedFlowId: 'number',
      bizdate: 'number',
      nodeName: 'string',
      beginWaitTimeTime: 'number',
      dqcDescription: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  instances?: ListInstancesResponseBodyDataInstances[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualDagInstancesResponseBodyInstances extends $tea.Model {
  status?: string;
  beginRunningTime?: number;
  bizDate?: number;
  cycTime?: number;
  finishTime?: number;
  createTime?: number;
  dagId?: number;
  instanceId?: number;
  beginWaitResTime?: number;
  taskType?: string;
  paramValues?: string;
  dagType?: string;
  nodeName?: string;
  beginWaitTimeTime?: number;
  nodeId?: number;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      beginRunningTime: 'BeginRunningTime',
      bizDate: 'BizDate',
      cycTime: 'CycTime',
      finishTime: 'FinishTime',
      createTime: 'CreateTime',
      dagId: 'DagId',
      instanceId: 'InstanceId',
      beginWaitResTime: 'BeginWaitResTime',
      taskType: 'TaskType',
      paramValues: 'ParamValues',
      dagType: 'DagType',
      nodeName: 'NodeName',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      nodeId: 'NodeId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      beginRunningTime: 'number',
      bizDate: 'number',
      cycTime: 'number',
      finishTime: 'number',
      createTime: 'number',
      dagId: 'number',
      instanceId: 'number',
      beginWaitResTime: 'number',
      taskType: 'string',
      paramValues: 'string',
      dagType: 'string',
      nodeName: 'string',
      beginWaitTimeTime: 'number',
      nodeId: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseBodyDatabaseInfoDbList extends $tea.Model {
  type?: string;
  createTimeStamp?: number;
  UUID?: string;
  modifiedTimeStamp?: number;
  name?: string;
  ownerId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      createTimeStamp: 'CreateTimeStamp',
      UUID: 'UUID',
      modifiedTimeStamp: 'ModifiedTimeStamp',
      name: 'Name',
      ownerId: 'OwnerId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      createTimeStamp: 'number',
      UUID: 'string',
      modifiedTimeStamp: 'number',
      name: 'string',
      ownerId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseBodyDatabaseInfo extends $tea.Model {
  totalCount?: number;
  dbList?: ListMetaDBResponseBodyDatabaseInfoDbList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      dbList: 'DbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      dbList: { 'type': 'array', 'itemType': ListMetaDBResponseBodyDatabaseInfoDbList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInputOrOutputResponseBodyData extends $tea.Model {
  tableName?: string;
  data?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      data: 'Data',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      data: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIOResponseBodyData extends $tea.Model {
  tableName?: string;
  data?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      data: 'Data',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      data: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyDataNodes extends $tea.Model {
  schedulerType?: string;
  repeatInterval?: number;
  repeatability?: boolean;
  projectId?: number;
  programType?: string;
  priority?: number;
  ownerId?: string;
  connection?: string;
  paramValues?: string;
  relatedFlowId?: number;
  dqcType?: number;
  baselineId?: number;
  description?: string;
  nodeName?: string;
  resGroupName?: string;
  businessId?: number;
  dqcDescription?: string;
  cronExpress?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      schedulerType: 'SchedulerType',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      projectId: 'ProjectId',
      programType: 'ProgramType',
      priority: 'Priority',
      ownerId: 'OwnerId',
      connection: 'Connection',
      paramValues: 'ParamValues',
      relatedFlowId: 'RelatedFlowId',
      dqcType: 'DqcType',
      baselineId: 'BaselineId',
      description: 'Description',
      nodeName: 'NodeName',
      resGroupName: 'ResGroupName',
      businessId: 'BusinessId',
      dqcDescription: 'DqcDescription',
      cronExpress: 'CronExpress',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerType: 'string',
      repeatInterval: 'number',
      repeatability: 'boolean',
      projectId: 'number',
      programType: 'string',
      priority: 'number',
      ownerId: 'string',
      connection: 'string',
      paramValues: 'string',
      relatedFlowId: 'number',
      dqcType: 'number',
      baselineId: 'number',
      description: 'string',
      nodeName: 'string',
      resGroupName: 'string',
      businessId: 'number',
      dqcDescription: 'string',
      cronExpress: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  nodes?: ListNodesResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByBaselineResponseBodyData extends $tea.Model {
  owner?: string;
  nodeName?: string;
  nodeId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      nodeId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputResponseBodyDataNodeList extends $tea.Model {
  schedulerType?: string;
  repeatInterval?: number;
  repeatability?: boolean;
  fileType?: string;
  projectId?: number;
  programType?: string;
  priority?: number;
  ownerId?: string;
  connection?: string;
  paramValues?: string;
  relatedFlowId?: number;
  dqcType?: number;
  baselineId?: number;
  description?: string;
  nodeName?: string;
  resGroupName?: string;
  dqcDescription?: string;
  cronExpress?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      schedulerType: 'SchedulerType',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      fileType: 'FileType',
      projectId: 'ProjectId',
      programType: 'ProgramType',
      priority: 'Priority',
      ownerId: 'OwnerId',
      connection: 'Connection',
      paramValues: 'ParamValues',
      relatedFlowId: 'RelatedFlowId',
      dqcType: 'DqcType',
      baselineId: 'BaselineId',
      description: 'Description',
      nodeName: 'NodeName',
      resGroupName: 'ResGroupName',
      dqcDescription: 'DqcDescription',
      cronExpress: 'CronExpress',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerType: 'string',
      repeatInterval: 'number',
      repeatability: 'boolean',
      fileType: 'string',
      projectId: 'number',
      programType: 'string',
      priority: 'number',
      ownerId: 'string',
      connection: 'string',
      paramValues: 'string',
      relatedFlowId: 'number',
      dqcType: 'number',
      baselineId: 'number',
      description: 'string',
      nodeName: 'string',
      resGroupName: 'string',
      dqcDescription: 'string',
      cronExpress: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputResponseBodyData extends $tea.Model {
  output?: string;
  nodeList?: ListNodesByOutputResponseBodyDataNodeList[];
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      nodeList: 'NodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      nodeList: { 'type': 'array', 'itemType': ListNodesByOutputResponseBodyDataNodeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList extends $tea.Model {
  objectName?: string;
  actions?: string[];
  static names(): { [key: string]: string } {
    return {
      objectName: 'ObjectName',
      actions: 'Actions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
      actions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMeta extends $tea.Model {
  workspaceName?: string;
  objectMetaList?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList[];
  static names(): { [key: string]: string } {
    return {
      workspaceName: 'WorkspaceName',
      objectMetaList: 'ObjectMetaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceName: 'string',
      objectMetaList: { 'type': 'array', 'itemType': ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent extends $tea.Model {
  applyReason?: string;
  orderType?: number;
  projectMeta?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMeta;
  static names(): { [key: string]: string } {
    return {
      applyReason: 'ApplyReason',
      orderType: 'OrderType',
      projectMeta: 'ProjectMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      orderType: 'number',
      projectMeta: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrder extends $tea.Model {
  applyBaseId?: string;
  applyTimestamp?: number;
  flowId?: string;
  flowStatus?: number;
  approveContent?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent;
  static names(): { [key: string]: string } {
    return {
      applyBaseId: 'ApplyBaseId',
      applyTimestamp: 'ApplyTimestamp',
      flowId: 'FlowId',
      flowStatus: 'FlowStatus',
      approveContent: 'ApproveContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBaseId: 'string',
      applyTimestamp: 'number',
      flowId: 'string',
      flowStatus: 'number',
      approveContent: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrders extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  applyOrder?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrder[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      applyOrder: 'ApplyOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      applyOrder: { 'type': 'array', 'itemType': ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountResponseBodyProgramTypeAndCounts extends $tea.Model {
  count?: number;
  programType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      programType: 'ProgramType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      programType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList extends $tea.Model {
  projectRoleId?: number;
  projectRoleType?: string;
  projectRoleName?: string;
  projectRoleCode?: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleId: 'ProjectRoleId',
      projectRoleType: 'ProjectRoleType',
      projectRoleName: 'ProjectRoleName',
      projectRoleCode: 'ProjectRoleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleId: 'number',
      projectRoleType: 'string',
      projectRoleName: 'string',
      projectRoleCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyDataProjectMemberList extends $tea.Model {
  status?: string;
  projectMemberId?: string;
  nick?: string;
  projectMemberName?: string;
  projectMemberType?: string;
  projectRoleList?: ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectMemberId: 'ProjectMemberId',
      nick: 'Nick',
      projectMemberName: 'ProjectMemberName',
      projectMemberType: 'ProjectMemberType',
      projectRoleList: 'ProjectRoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      projectMemberId: 'string',
      nick: 'string',
      projectMemberName: 'string',
      projectMemberType: 'string',
      projectRoleList: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  projectMemberList?: ListProjectMembersResponseBodyDataProjectMemberList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      projectMemberList: 'ProjectMemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      projectMemberList: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyDataProjectMemberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBodyProjectRoleList extends $tea.Model {
  projectRoleId?: number;
  projectRoleType?: string;
  projectRoleName?: string;
  projectRoleCode?: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleId: 'ProjectRoleId',
      projectRoleType: 'ProjectRoleType',
      projectRoleName: 'ProjectRoleName',
      projectRoleCode: 'ProjectRoleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleId: 'number',
      projectRoleType: 'string',
      projectRoleName: 'string',
      projectRoleCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPageResultProjectList extends $tea.Model {
  projectStatusCode?: string;
  projectStatus?: number;
  projectName?: string;
  projectIdentifier?: string;
  projectId?: number;
  projectDescription?: string;
  projectOwnerBaseId?: string;
  static names(): { [key: string]: string } {
    return {
      projectStatusCode: 'ProjectStatusCode',
      projectStatus: 'ProjectStatus',
      projectName: 'ProjectName',
      projectIdentifier: 'ProjectIdentifier',
      projectId: 'ProjectId',
      projectDescription: 'ProjectDescription',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectStatusCode: 'string',
      projectStatus: 'number',
      projectName: 'string',
      projectIdentifier: 'string',
      projectId: 'number',
      projectDescription: 'string',
      projectOwnerBaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPageResult extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  projectList?: ListProjectsResponseBodyPageResultProjectList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      projectList: 'ProjectList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      projectList: { 'type': 'array', 'itemType': ListProjectsResponseBodyPageResultProjectList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue extends $tea.Model {
  discreteProperty?: string;
  value?: number;
  bizDate?: string;
  singleCheckResult?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
      bizDate: 'BizDate',
      singleCheckResult: 'SingleCheckResult',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discreteProperty: 'string',
      value: 'number',
      bizDate: 'string',
      singleCheckResult: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue extends $tea.Model {
  discreteProperty?: string;
  bizDate?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      discreteProperty: 'DiscreteProperty',
      bizDate: 'BizDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discreteProperty: 'string',
      bizDate: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBodyDataRuleChecks extends $tea.Model {
  blockType?: number;
  warningThreshold?: number;
  property?: string;
  tableName?: string;
  comment?: string;
  checkResultStatus?: number;
  templateName?: string;
  checkerName?: string;
  ruleId?: number;
  fixedCheck?: boolean;
  op?: string;
  upperValue?: number;
  actualExpression?: string;
  externalId?: string;
  timeCost?: string;
  trend?: string;
  externalType?: string;
  bizDate?: number;
  checkResult?: number;
  resultString?: string;
  matchExpression?: string;
  checkerType?: number;
  projectName?: string;
  beginTime?: number;
  dateType?: string;
  criticalThreshold?: number;
  isPrediction?: boolean;
  ruleName?: string;
  checkerId?: number;
  discreteCheck?: boolean;
  endTime?: number;
  methodName?: string;
  lowerValue?: number;
  entityId?: number;
  whereCondition?: string;
  expectValue?: number;
  templateId?: number;
  taskId?: string;
  id?: number;
  referenceValue?: ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue[];
  sampleValue?: ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue[];
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      warningThreshold: 'WarningThreshold',
      property: 'Property',
      tableName: 'TableName',
      comment: 'Comment',
      checkResultStatus: 'CheckResultStatus',
      templateName: 'TemplateName',
      checkerName: 'CheckerName',
      ruleId: 'RuleId',
      fixedCheck: 'FixedCheck',
      op: 'Op',
      upperValue: 'UpperValue',
      actualExpression: 'ActualExpression',
      externalId: 'ExternalId',
      timeCost: 'TimeCost',
      trend: 'Trend',
      externalType: 'ExternalType',
      bizDate: 'BizDate',
      checkResult: 'CheckResult',
      resultString: 'ResultString',
      matchExpression: 'MatchExpression',
      checkerType: 'CheckerType',
      projectName: 'ProjectName',
      beginTime: 'BeginTime',
      dateType: 'DateType',
      criticalThreshold: 'CriticalThreshold',
      isPrediction: 'IsPrediction',
      ruleName: 'RuleName',
      checkerId: 'CheckerId',
      discreteCheck: 'DiscreteCheck',
      endTime: 'EndTime',
      methodName: 'MethodName',
      lowerValue: 'LowerValue',
      entityId: 'EntityId',
      whereCondition: 'WhereCondition',
      expectValue: 'ExpectValue',
      templateId: 'TemplateId',
      taskId: 'TaskId',
      id: 'Id',
      referenceValue: 'ReferenceValue',
      sampleValue: 'SampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      warningThreshold: 'number',
      property: 'string',
      tableName: 'string',
      comment: 'string',
      checkResultStatus: 'number',
      templateName: 'string',
      checkerName: 'string',
      ruleId: 'number',
      fixedCheck: 'boolean',
      op: 'string',
      upperValue: 'number',
      actualExpression: 'string',
      externalId: 'string',
      timeCost: 'string',
      trend: 'string',
      externalType: 'string',
      bizDate: 'number',
      checkResult: 'number',
      resultString: 'string',
      matchExpression: 'string',
      checkerType: 'number',
      projectName: 'string',
      beginTime: 'number',
      dateType: 'string',
      criticalThreshold: 'number',
      isPrediction: 'boolean',
      ruleName: 'string',
      checkerId: 'number',
      discreteCheck: 'boolean',
      endTime: 'number',
      methodName: 'string',
      lowerValue: 'number',
      entityId: 'number',
      whereCondition: 'string',
      expectValue: 'number',
      templateId: 'number',
      taskId: 'string',
      id: 'number',
      referenceValue: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue },
      sampleValue: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  ruleChecks?: ListQualityResultsByEntityResponseBodyDataRuleChecks[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      ruleChecks: 'RuleChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      ruleChecks: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue extends $tea.Model {
  discreteProperty?: string;
  value?: number;
  bizDate?: string;
  singleCheckResult?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
      bizDate: 'BizDate',
      singleCheckResult: 'SingleCheckResult',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discreteProperty: 'string',
      value: 'number',
      bizDate: 'string',
      singleCheckResult: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue extends $tea.Model {
  discreteProperty?: string;
  bizDate?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      discreteProperty: 'DiscreteProperty',
      bizDate: 'BizDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discreteProperty: 'string',
      bizDate: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyDataRuleChecks extends $tea.Model {
  blockType?: number;
  warningThreshold?: number;
  property?: string;
  tableName?: string;
  comment?: string;
  checkResultStatus?: number;
  templateName?: string;
  checkerName?: string;
  ruleId?: number;
  fixedCheck?: boolean;
  op?: string;
  upperValue?: number;
  actualExpression?: string;
  externalId?: string;
  timeCost?: string;
  trend?: string;
  externalType?: string;
  bizDate?: number;
  checkResult?: number;
  resultString?: string;
  matchExpression?: string;
  checkerType?: number;
  projectName?: string;
  beginTime?: number;
  dateType?: string;
  criticalThreshold?: number;
  isPrediction?: boolean;
  ruleName?: string;
  checkerId?: number;
  discreteCheck?: boolean;
  endTime?: number;
  methodName?: string;
  lowerValue?: number;
  entityId?: number;
  whereCondition?: string;
  expectValue?: number;
  templateId?: number;
  taskId?: string;
  id?: number;
  referenceValue?: ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue[];
  sampleValue?: ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue[];
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      warningThreshold: 'WarningThreshold',
      property: 'Property',
      tableName: 'TableName',
      comment: 'Comment',
      checkResultStatus: 'CheckResultStatus',
      templateName: 'TemplateName',
      checkerName: 'CheckerName',
      ruleId: 'RuleId',
      fixedCheck: 'FixedCheck',
      op: 'Op',
      upperValue: 'UpperValue',
      actualExpression: 'ActualExpression',
      externalId: 'ExternalId',
      timeCost: 'TimeCost',
      trend: 'Trend',
      externalType: 'ExternalType',
      bizDate: 'BizDate',
      checkResult: 'CheckResult',
      resultString: 'ResultString',
      matchExpression: 'MatchExpression',
      checkerType: 'CheckerType',
      projectName: 'ProjectName',
      beginTime: 'BeginTime',
      dateType: 'DateType',
      criticalThreshold: 'CriticalThreshold',
      isPrediction: 'IsPrediction',
      ruleName: 'RuleName',
      checkerId: 'CheckerId',
      discreteCheck: 'DiscreteCheck',
      endTime: 'EndTime',
      methodName: 'MethodName',
      lowerValue: 'LowerValue',
      entityId: 'EntityId',
      whereCondition: 'WhereCondition',
      expectValue: 'ExpectValue',
      templateId: 'TemplateId',
      taskId: 'TaskId',
      id: 'Id',
      referenceValue: 'ReferenceValue',
      sampleValue: 'SampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      warningThreshold: 'number',
      property: 'string',
      tableName: 'string',
      comment: 'string',
      checkResultStatus: 'number',
      templateName: 'string',
      checkerName: 'string',
      ruleId: 'number',
      fixedCheck: 'boolean',
      op: 'string',
      upperValue: 'number',
      actualExpression: 'string',
      externalId: 'string',
      timeCost: 'string',
      trend: 'string',
      externalType: 'string',
      bizDate: 'number',
      checkResult: 'number',
      resultString: 'string',
      matchExpression: 'string',
      checkerType: 'number',
      projectName: 'string',
      beginTime: 'number',
      dateType: 'string',
      criticalThreshold: 'number',
      isPrediction: 'boolean',
      ruleName: 'string',
      checkerId: 'number',
      discreteCheck: 'boolean',
      endTime: 'number',
      methodName: 'string',
      lowerValue: 'number',
      entityId: 'number',
      whereCondition: 'string',
      expectValue: 'number',
      templateId: 'number',
      taskId: 'string',
      id: 'number',
      referenceValue: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue },
      sampleValue: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  ruleChecks?: ListQualityResultsByRuleResponseBodyDataRuleChecks[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      ruleChecks: 'RuleChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      ruleChecks: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBodyDataRules extends $tea.Model {
  blockType?: number;
  onDutyAccountName?: string;
  property?: string;
  warningThreshold?: string;
  tableName?: string;
  onDuty?: string;
  comment?: string;
  ruleCheckerRelationId?: number;
  fixCheck?: boolean;
  methodId?: number;
  templateName?: string;
  trend?: string;
  historyWarningThreshold?: string;
  ruleType?: number;
  matchExpression?: string;
  projectName?: string;
  propertyKey?: string;
  criticalThreshold?: string;
  historyCriticalThreshold?: string;
  methodName?: string;
  checkerId?: number;
  entityId?: number;
  expectValue?: string;
  templateId?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      onDutyAccountName: 'OnDutyAccountName',
      property: 'Property',
      warningThreshold: 'WarningThreshold',
      tableName: 'TableName',
      onDuty: 'OnDuty',
      comment: 'Comment',
      ruleCheckerRelationId: 'RuleCheckerRelationId',
      fixCheck: 'FixCheck',
      methodId: 'MethodId',
      templateName: 'TemplateName',
      trend: 'Trend',
      historyWarningThreshold: 'HistoryWarningThreshold',
      ruleType: 'RuleType',
      matchExpression: 'MatchExpression',
      projectName: 'ProjectName',
      propertyKey: 'PropertyKey',
      criticalThreshold: 'CriticalThreshold',
      historyCriticalThreshold: 'HistoryCriticalThreshold',
      methodName: 'MethodName',
      checkerId: 'CheckerId',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      templateId: 'TemplateId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      onDutyAccountName: 'string',
      property: 'string',
      warningThreshold: 'string',
      tableName: 'string',
      onDuty: 'string',
      comment: 'string',
      ruleCheckerRelationId: 'number',
      fixCheck: 'boolean',
      methodId: 'number',
      templateName: 'string',
      trend: 'string',
      historyWarningThreshold: 'string',
      ruleType: 'number',
      matchExpression: 'string',
      projectName: 'string',
      propertyKey: 'string',
      criticalThreshold: 'string',
      historyCriticalThreshold: 'string',
      methodName: 'string',
      checkerId: 'number',
      entityId: 'number',
      expectValue: 'string',
      templateId: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  rules?: ListQualityRulesResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      rules: { 'type': 'array', 'itemType': ListQualityRulesResponseBodyDataRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRefDISyncTasksResponseBodyDataDISyncTasks extends $tea.Model {
  diSourceDatasource?: string;
  taskType?: string;
  diDestinationDatasource?: string;
  nodeName?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      diSourceDatasource: 'DiSourceDatasource',
      taskType: 'TaskType',
      diDestinationDatasource: 'DiDestinationDatasource',
      nodeName: 'NodeName',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diSourceDatasource: 'string',
      taskType: 'string',
      diDestinationDatasource: 'string',
      nodeName: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRefDISyncTasksResponseBodyData extends $tea.Model {
  DISyncTasks?: ListRefDISyncTasksResponseBodyDataDISyncTasks[];
  static names(): { [key: string]: string } {
    return {
      DISyncTasks: 'DISyncTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DISyncTasks: { 'type': 'array', 'itemType': ListRefDISyncTasksResponseBodyDataDISyncTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseBodyDataReminds extends $tea.Model {
  founder?: string;
  remindId?: number;
  alertUnit?: string;
  remindType?: string;
  dndEnd?: string;
  dndStart?: string;
  remindUnit?: string;
  useflag?: boolean;
  remindName?: string;
  alertTargets?: string[];
  nodeIds?: number[];
  bizProcessIds?: number[];
  projectIds?: number[];
  baselineIds?: number[];
  alertMethods?: string[];
  static names(): { [key: string]: string } {
    return {
      founder: 'Founder',
      remindId: 'RemindId',
      alertUnit: 'AlertUnit',
      remindType: 'RemindType',
      dndEnd: 'DndEnd',
      dndStart: 'DndStart',
      remindUnit: 'RemindUnit',
      useflag: 'Useflag',
      remindName: 'RemindName',
      alertTargets: 'AlertTargets',
      nodeIds: 'NodeIds',
      bizProcessIds: 'BizProcessIds',
      projectIds: 'ProjectIds',
      baselineIds: 'BaselineIds',
      alertMethods: 'AlertMethods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      founder: 'string',
      remindId: 'number',
      alertUnit: 'string',
      remindType: 'string',
      dndEnd: 'string',
      dndStart: 'string',
      remindUnit: 'string',
      useflag: 'boolean',
      remindName: 'string',
      alertTargets: { 'type': 'array', 'itemType': 'string' },
      nodeIds: { 'type': 'array', 'itemType': 'number' },
      bizProcessIds: { 'type': 'array', 'itemType': 'number' },
      projectIds: { 'type': 'array', 'itemType': 'number' },
      baselineIds: { 'type': 'array', 'itemType': 'number' },
      alertMethods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  reminds?: ListRemindsResponseBodyDataReminds[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      reminds: 'Reminds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      reminds: { 'type': 'array', 'itemType': ListRemindsResponseBodyDataReminds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyData extends $tea.Model {
  status?: number;
  updateTime?: string;
  isDefault?: boolean;
  cluster?: string;
  enableKp?: boolean;
  resourceGroupType?: string;
  createTime?: string;
  identifier?: string;
  mode?: string;
  bizExtKey?: string;
  sequence?: number;
  specs?: { [key: string]: any };
  name?: string;
  id?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      isDefault: 'IsDefault',
      cluster: 'Cluster',
      enableKp: 'EnableKp',
      resourceGroupType: 'ResourceGroupType',
      createTime: 'CreateTime',
      identifier: 'Identifier',
      mode: 'Mode',
      bizExtKey: 'BizExtKey',
      sequence: 'Sequence',
      specs: 'Specs',
      name: 'Name',
      id: 'Id',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      updateTime: 'string',
      isDefault: 'boolean',
      cluster: 'string',
      enableKp: 'boolean',
      resourceGroupType: 'string',
      createTime: 'string',
      identifier: 'string',
      mode: 'string',
      bizExtKey: 'string',
      sequence: 'number',
      specs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      id: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend extends $tea.Model {
  timePoint?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timePoint: 'TimePoint',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePoint: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend extends $tea.Model {
  timePoint?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timePoint: 'TimePoint',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePoint: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend extends $tea.Model {
  timePoint?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timePoint: 'TimePoint',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePoint: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrend extends $tea.Model {
  todayTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend[];
  yesterdayTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend[];
  avgTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend[];
  static names(): { [key: string]: string } {
    return {
      todayTrend: 'TodayTrend',
      yesterdayTrend: 'YesterdayTrend',
      avgTrend: 'AvgTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      todayTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend },
      yesterdayTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend },
      avgTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseBodyTableLevelInfoLevelList extends $tea.Model {
  levelType?: number;
  description?: string;
  name?: string;
  projectId?: number;
  levelId?: number;
  static names(): { [key: string]: string } {
    return {
      levelType: 'LevelType',
      description: 'Description',
      name: 'Name',
      projectId: 'ProjectId',
      levelId: 'LevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelType: 'number',
      description: 'string',
      name: 'string',
      projectId: 'number',
      levelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseBodyTableLevelInfo extends $tea.Model {
  totalCount?: number;
  levelList?: ListTableLevelResponseBodyTableLevelInfoLevelList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      levelList: 'LevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      levelList: { 'type': 'array', 'itemType': ListTableLevelResponseBodyTableLevelInfoLevelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseBodyDataThemeList extends $tea.Model {
  createTimeStamp?: number;
  parentId?: number;
  themeId?: number;
  projectId?: number;
  name?: string;
  level?: number;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      parentId: 'ParentId',
      themeId: 'ThemeId',
      projectId: 'ProjectId',
      name: 'Name',
      level: 'Level',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      parentId: 'number',
      themeId: 'number',
      projectId: 'number',
      name: 'string',
      level: 'number',
      creator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseBodyData extends $tea.Model {
  totalCount?: number;
  themeList?: ListTableThemeResponseBodyDataThemeList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      themeList: 'ThemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      themeList: { 'type': 'array', 'itemType': ListTableThemeResponseBodyDataThemeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyDataTopics extends $tea.Model {
  topicName?: string;
  projectId?: number;
  nodeOwner?: string;
  instanceId?: number;
  fixTime?: number;
  topicType?: string;
  topicStatus?: string;
  happenTime?: number;
  nodeName?: string;
  topicId?: number;
  addTime?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      topicName: 'TopicName',
      projectId: 'ProjectId',
      nodeOwner: 'NodeOwner',
      instanceId: 'InstanceId',
      fixTime: 'FixTime',
      topicType: 'TopicType',
      topicStatus: 'TopicStatus',
      happenTime: 'HappenTime',
      nodeName: 'NodeName',
      topicId: 'TopicId',
      addTime: 'AddTime',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicName: 'string',
      projectId: 'number',
      nodeOwner: 'string',
      instanceId: 'number',
      fixTime: 'number',
      topicType: 'string',
      topicStatus: 'string',
      happenTime: 'number',
      nodeName: 'string',
      topicId: 'number',
      addTime: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  topics?: ListTopicsResponseBodyDataTopics[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      topics: { 'type': 'array', 'itemType': ListTopicsResponseBodyDataTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseBodyDataDataEntityList extends $tea.Model {
  tableName?: string;
  databaseName?: string;
  entityType?: number;
  projectName?: string;
  projectId?: number;
  tableGuid?: string;
  ownerId?: string;
  clusterId?: string;
  envType?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      databaseName: 'DatabaseName',
      entityType: 'EntityType',
      projectName: 'ProjectName',
      projectId: 'ProjectId',
      tableGuid: 'TableGuid',
      ownerId: 'OwnerId',
      clusterId: 'ClusterId',
      envType: 'EnvType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      databaseName: 'string',
      entityType: 'number',
      projectName: 'string',
      projectId: 'number',
      tableGuid: 'string',
      ownerId: 'string',
      clusterId: 'string',
      envType: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  dataEntityList?: SearchMetaTablesResponseBodyDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': SearchMetaTablesResponseBodyDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetConnectionShareResponseBodyData extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataSourceShareResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDISyncInstanceResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDISyncInstanceResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateDISyncInstanceResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestNetworkConnectionResponseBodyTaskList extends $tea.Model {
  connectMessage?: string;
  connectStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectMessage: 'ConnectMessage',
      connectStatus: 'ConnectStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectMessage: 'string',
      connectStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRankConsumeTimeRank extends $tea.Model {
  owner?: string;
  nodeName?: string;
  businessDate?: number;
  programType?: number;
  instanceId?: number;
  nodeId?: number;
  consumed?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      businessDate: 'BusinessDate',
      programType: 'ProgramType',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      consumed: 'Consumed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      businessDate: 'number',
      programType: 'number',
      instanceId: 'number',
      nodeId: 'number',
      consumed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank extends $tea.Model {
  updateTime?: number;
  consumeTimeRank?: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRankConsumeTimeRank[];
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      consumeTimeRank: 'ConsumeTimeRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      consumeTimeRank: { 'type': 'array', 'itemType': TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRankConsumeTimeRank },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank extends $tea.Model {
  owner?: string;
  nodeName?: string;
  projectId?: number;
  programType?: number;
  nodeId?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      programType: 'ProgramType',
      nodeId: 'NodeId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      nodeName: 'string',
      projectId: 'number',
      programType: 'number',
      nodeId: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceResponseBodyInstanceErrorRank extends $tea.Model {
  updateTime?: number;
  errorRank?: TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank[];
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      errorRank: 'ErrorRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      errorRank: { 'type': 'array', 'itemType': TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIProjectConfigResponseBodyData extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDISyncTaskResponseBodyData extends $tea.Model {
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestColumns extends $tea.Model {
  columnNameCn?: string;
  columnName?: string;
  comment?: string;
  columnType?: string;
  seqNumber?: number;
  length?: number;
  isPartitionCol?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnNameCn: 'ColumnNameCn',
      columnName: 'ColumnName',
      comment: 'Comment',
      columnType: 'ColumnType',
      seqNumber: 'SeqNumber',
      length: 'Length',
      isPartitionCol: 'IsPartitionCol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNameCn: 'string',
      columnName: 'string',
      comment: 'string',
      columnType: 'string',
      seqNumber: 'number',
      length: 'number',
      isPartitionCol: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestThemes extends $tea.Model {
  themeId?: number;
  themeLevel?: number;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
      themeLevel: 'ThemeLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'number',
      themeLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableResponseBodyTaskInfo extends $tea.Model {
  status?: string;
  nextTaskId?: string;
  taskId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nextTaskId: 'NextTaskId',
      taskId: 'TaskId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nextTaskId: 'string',
      taskId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableAddColumnRequestColumn extends $tea.Model {
  columnNameCn?: string;
  columnName?: string;
  comment?: string;
  columnType?: string;
  static names(): { [key: string]: string } {
    return {
      columnNameCn: 'ColumnNameCn',
      columnName: 'ColumnName',
      comment: 'Comment',
      columnType: 'ColumnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNameCn: 'string',
      columnName: 'string',
      comment: 'string',
      columnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableAddColumnResponseBodyTaskInfo extends $tea.Model {
  status?: string;
  nextTaskId?: string;
  taskId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nextTaskId: 'NextTaskId',
      taskId: 'TaskId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nextTaskId: 'string',
      taskId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "dataworks.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "dataworks.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "dataworks.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dataworks.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dataworks.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dataworks.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dataworks.cn-beijing.aliyuncs.com",
      'cn-chengdu': "dataworks.cn-chengdu.aliyuncs.com",
      'cn-hangzhou': "dataworks.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dataworks.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "dataworks.aliyuncs.com",
      'cn-qingdao': "dataworks.aliyuncs.com",
      'cn-shanghai': "dataworks.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "dataworks.cn-shenzhen.aliyuncs.com",
      'cn-zhangjiakou': "dataworks.aliyuncs.com",
      'eu-central-1': "dataworks.eu-central-1.aliyuncs.com",
      'eu-west-1': "dataworks.eu-west-1.aliyuncs.com",
      'me-east-1': "dataworks.me-east-1.aliyuncs.com",
      'us-east-1': "dataworks.us-east-1.aliyuncs.com",
      'us-west-1': "dataworks.us-west-1.aliyuncs.com",
      'cn-hangzhou-finance': "dataworks.aliyuncs.com",
      'cn-shenzhen-finance-1': "dataworks.aliyuncs.com",
      'cn-shanghai-finance-1': "dataworks.aliyuncs.com",
      'cn-north-2-gov-1': "dataworks.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dataworks-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async abolishDataServiceApiWithOptions(request: AbolishDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<AbolishDataServiceApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbolishDataServiceApiResponse>(await this.doRPCRequest("AbolishDataServiceApi", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new AbolishDataServiceApiResponse({}));
  }

  async abolishDataServiceApi(request: AbolishDataServiceApiRequest): Promise<AbolishDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishDataServiceApiWithOptions(request, runtime);
  }

  async addProjectMemberToRoleWithOptions(request: AddProjectMemberToRoleRequest, runtime: $Util.RuntimeOptions): Promise<AddProjectMemberToRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddProjectMemberToRoleResponse>(await this.doRPCRequest("AddProjectMemberToRole", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new AddProjectMemberToRoleResponse({}));
  }

  async addProjectMemberToRole(request: AddProjectMemberToRoleRequest): Promise<AddProjectMemberToRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProjectMemberToRoleWithOptions(request, runtime);
  }

  async addToMetaCategoryWithOptions(request: AddToMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddToMetaCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddToMetaCategoryResponse>(await this.doRPCRequest("AddToMetaCategory", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new AddToMetaCategoryResponse({}));
  }

  async addToMetaCategory(request: AddToMetaCategoryRequest): Promise<AddToMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addToMetaCategoryWithOptions(request, runtime);
  }

  async approvePermissionApplyOrderWithOptions(request: ApprovePermissionApplyOrderRequest, runtime: $Util.RuntimeOptions): Promise<ApprovePermissionApplyOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApprovePermissionApplyOrderResponse>(await this.doRPCRequest("ApprovePermissionApplyOrder", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ApprovePermissionApplyOrderResponse({}));
  }

  async approvePermissionApplyOrder(request: ApprovePermissionApplyOrderRequest): Promise<ApprovePermissionApplyOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approvePermissionApplyOrderWithOptions(request, runtime);
  }

  async checkEngineMetaPartitionWithOptions(request: CheckEngineMetaPartitionRequest, runtime: $Util.RuntimeOptions): Promise<CheckEngineMetaPartitionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckEngineMetaPartitionResponse>(await this.doRPCRequest("CheckEngineMetaPartition", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CheckEngineMetaPartitionResponse({}));
  }

  async checkEngineMetaPartition(request: CheckEngineMetaPartitionRequest): Promise<CheckEngineMetaPartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkEngineMetaPartitionWithOptions(request, runtime);
  }

  async checkEngineMetaTableWithOptions(request: CheckEngineMetaTableRequest, runtime: $Util.RuntimeOptions): Promise<CheckEngineMetaTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckEngineMetaTableResponse>(await this.doRPCRequest("CheckEngineMetaTable", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CheckEngineMetaTableResponse({}));
  }

  async checkEngineMetaTable(request: CheckEngineMetaTableRequest): Promise<CheckEngineMetaTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkEngineMetaTableWithOptions(request, runtime);
  }

  async checkFileDeploymentWithOptions(request: CheckFileDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CheckFileDeploymentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckFileDeploymentResponse>(await this.doRPCRequest("CheckFileDeployment", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CheckFileDeploymentResponse({}));
  }

  async checkFileDeployment(request: CheckFileDeploymentRequest): Promise<CheckFileDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFileDeploymentWithOptions(request, runtime);
  }

  async checkMetaPartitionWithOptions(request: CheckMetaPartitionRequest, runtime: $Util.RuntimeOptions): Promise<CheckMetaPartitionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckMetaPartitionResponse>(await this.doRPCRequest("CheckMetaPartition", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CheckMetaPartitionResponse({}));
  }

  async checkMetaPartition(request: CheckMetaPartitionRequest): Promise<CheckMetaPartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMetaPartitionWithOptions(request, runtime);
  }

  async checkMetaTableWithOptions(request: CheckMetaTableRequest, runtime: $Util.RuntimeOptions): Promise<CheckMetaTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckMetaTableResponse>(await this.doRPCRequest("CheckMetaTable", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CheckMetaTableResponse({}));
  }

  async checkMetaTable(request: CheckMetaTableRequest): Promise<CheckMetaTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMetaTableWithOptions(request, runtime);
  }

  async checkMetaTableTaskWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckMetaTableTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CheckMetaTableTaskResponse>(await this.doRPCRequest("CheckMetaTableTask", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CheckMetaTableTaskResponse({}));
  }

  async checkMetaTableTask(): Promise<CheckMetaTableTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMetaTableTaskWithOptions(runtime);
  }

  async createBusinessWithOptions(request: CreateBusinessRequest, runtime: $Util.RuntimeOptions): Promise<CreateBusinessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBusinessResponse>(await this.doRPCRequest("CreateBusiness", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBusinessResponse({}));
  }

  async createBusiness(request: CreateBusinessRequest): Promise<CreateBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBusinessWithOptions(request, runtime);
  }

  async createConnectionWithOptions(request: CreateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConnectionResponse>(await this.doRPCRequest("CreateConnection", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConnectionResponse({}));
  }

  async createConnection(request: CreateConnectionRequest): Promise<CreateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConnectionWithOptions(request, runtime);
  }

  async createDagComplementWithOptions(request: CreateDagComplementRequest, runtime: $Util.RuntimeOptions): Promise<CreateDagComplementResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDagComplementResponse>(await this.doRPCRequest("CreateDagComplement", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDagComplementResponse({}));
  }

  async createDagComplement(request: CreateDagComplementRequest): Promise<CreateDagComplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDagComplementWithOptions(request, runtime);
  }

  async createDagTestWithOptions(request: CreateDagTestRequest, runtime: $Util.RuntimeOptions): Promise<CreateDagTestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDagTestResponse>(await this.doRPCRequest("CreateDagTest", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDagTestResponse({}));
  }

  async createDagTest(request: CreateDagTestRequest): Promise<CreateDagTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDagTestWithOptions(request, runtime);
  }

  async createDataServiceApiWithOptions(request: CreateDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataServiceApiResponse>(await this.doRPCRequest("CreateDataServiceApi", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataServiceApiResponse({}));
  }

  async createDataServiceApi(request: CreateDataServiceApiRequest): Promise<CreateDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceApiWithOptions(request, runtime);
  }

  async createDataServiceApiAuthorityWithOptions(request: CreateDataServiceApiAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceApiAuthorityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataServiceApiAuthorityResponse>(await this.doRPCRequest("CreateDataServiceApiAuthority", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataServiceApiAuthorityResponse({}));
  }

  async createDataServiceApiAuthority(request: CreateDataServiceApiAuthorityRequest): Promise<CreateDataServiceApiAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceApiAuthorityWithOptions(request, runtime);
  }

  async createDataServiceFolderWithOptions(request: CreateDataServiceFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataServiceFolderResponse>(await this.doRPCRequest("CreateDataServiceFolder", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataServiceFolderResponse({}));
  }

  async createDataServiceFolder(request: CreateDataServiceFolderRequest): Promise<CreateDataServiceFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceFolderWithOptions(request, runtime);
  }

  async createDataServiceGroupWithOptions(request: CreateDataServiceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataServiceGroupResponse>(await this.doRPCRequest("CreateDataServiceGroup", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataServiceGroupResponse({}));
  }

  async createDataServiceGroup(request: CreateDataServiceGroupRequest): Promise<CreateDataServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceGroupWithOptions(request, runtime);
  }

  async createDataSourceWithOptions(request: CreateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataSourceResponse>(await this.doRPCRequest("CreateDataSource", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataSourceResponse({}));
  }

  async createDataSource(request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  async createDISyncTaskWithOptions(request: CreateDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDISyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDISyncTaskResponse>(await this.doRPCRequest("CreateDISyncTask", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDISyncTaskResponse({}));
  }

  async createDISyncTask(request: CreateDISyncTaskRequest): Promise<CreateDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDISyncTaskWithOptions(request, runtime);
  }

  async createFileWithOptions(request: CreateFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFileResponse>(await this.doRPCRequest("CreateFile", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFileResponse({}));
  }

  async createFile(request: CreateFileRequest): Promise<CreateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFileWithOptions(request, runtime);
  }

  async createFolderWithOptions(request: CreateFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFolderResponse>(await this.doRPCRequest("CreateFolder", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFolderResponse({}));
  }

  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  async createImportMigrationWithOptions(request: CreateImportMigrationRequest, runtime: $Util.RuntimeOptions): Promise<CreateImportMigrationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateImportMigrationResponse>(await this.doRPCRequest("CreateImportMigration", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateImportMigrationResponse({}));
  }

  async createImportMigration(request: CreateImportMigrationRequest): Promise<CreateImportMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImportMigrationWithOptions(request, runtime);
  }

  async createImportMigrationAdvance(request: CreateImportMigrationAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateImportMigrationResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "dataworks-public",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let createImportMigrationReq = new CreateImportMigrationRequest({ });
    OpenApiUtil.convert(request, createImportMigrationReq);
    if (!Util.isUnset(request.packageFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.packageFileObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      createImportMigrationReq.packageFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let createImportMigrationResp = await this.createImportMigrationWithOptions(createImportMigrationReq, runtime);
    return createImportMigrationResp;
  }

  async createManualDagWithOptions(request: CreateManualDagRequest, runtime: $Util.RuntimeOptions): Promise<CreateManualDagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateManualDagResponse>(await this.doRPCRequest("CreateManualDag", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateManualDagResponse({}));
  }

  async createManualDag(request: CreateManualDagRequest): Promise<CreateManualDagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createManualDagWithOptions(request, runtime);
  }

  async createMetaCategoryWithOptions(request: CreateMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetaCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMetaCategoryResponse>(await this.doRPCRequest("CreateMetaCategory", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMetaCategoryResponse({}));
  }

  async createMetaCategory(request: CreateMetaCategoryRequest): Promise<CreateMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetaCategoryWithOptions(request, runtime);
  }

  async createPermissionApplyOrderWithOptions(request: CreatePermissionApplyOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePermissionApplyOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePermissionApplyOrderResponse>(await this.doRPCRequest("CreatePermissionApplyOrder", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePermissionApplyOrderResponse({}));
  }

  async createPermissionApplyOrder(request: CreatePermissionApplyOrderRequest): Promise<CreatePermissionApplyOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPermissionApplyOrderWithOptions(request, runtime);
  }

  async createProjectMemberWithOptions(request: CreateProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectMemberResponse>(await this.doRPCRequest("CreateProjectMember", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectMemberResponse({}));
  }

  async createProjectMember(request: CreateProjectMemberRequest): Promise<CreateProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectMemberWithOptions(request, runtime);
  }

  async createQualityEntityWithOptions(request: CreateQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQualityEntityResponse>(await this.doRPCRequest("CreateQualityEntity", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQualityEntityResponse({}));
  }

  async createQualityEntity(request: CreateQualityEntityRequest): Promise<CreateQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityEntityWithOptions(request, runtime);
  }

  async createQualityFollowerWithOptions(request: CreateQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityFollowerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQualityFollowerResponse>(await this.doRPCRequest("CreateQualityFollower", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQualityFollowerResponse({}));
  }

  async createQualityFollower(request: CreateQualityFollowerRequest): Promise<CreateQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityFollowerWithOptions(request, runtime);
  }

  async createQualityRelativeNodeWithOptions(request: CreateQualityRelativeNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityRelativeNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQualityRelativeNodeResponse>(await this.doRPCRequest("CreateQualityRelativeNode", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQualityRelativeNodeResponse({}));
  }

  async createQualityRelativeNode(request: CreateQualityRelativeNodeRequest): Promise<CreateQualityRelativeNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityRelativeNodeWithOptions(request, runtime);
  }

  async createQualityRuleWithOptions(request: CreateQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQualityRuleResponse>(await this.doRPCRequest("CreateQualityRule", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQualityRuleResponse({}));
  }

  async createQualityRule(request: CreateQualityRuleRequest): Promise<CreateQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityRuleWithOptions(request, runtime);
  }

  async createRemindWithOptions(request: CreateRemindRequest, runtime: $Util.RuntimeOptions): Promise<CreateRemindResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRemindResponse>(await this.doRPCRequest("CreateRemind", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRemindResponse({}));
  }

  async createRemind(request: CreateRemindRequest): Promise<CreateRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRemindWithOptions(request, runtime);
  }

  async createTableWithOptions(request: CreateTableRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTableResponse>(await this.doRPCRequest("CreateTable", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTableResponse({}));
  }

  async createTable(request: CreateTableRequest): Promise<CreateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableWithOptions(request, runtime);
  }

  async createTableLevelWithOptions(request: CreateTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableLevelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTableLevelResponse>(await this.doRPCRequest("CreateTableLevel", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTableLevelResponse({}));
  }

  async createTableLevel(request: CreateTableLevelRequest): Promise<CreateTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableLevelWithOptions(request, runtime);
  }

  async createTableThemeWithOptions(request: CreateTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableThemeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTableThemeResponse>(await this.doRPCRequest("CreateTableTheme", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTableThemeResponse({}));
  }

  async createTableTheme(request: CreateTableThemeRequest): Promise<CreateTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableThemeWithOptions(request, runtime);
  }

  async createUdfFileWithOptions(request: CreateUdfFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateUdfFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUdfFileResponse>(await this.doRPCRequest("CreateUdfFile", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUdfFileResponse({}));
  }

  async createUdfFile(request: CreateUdfFileRequest): Promise<CreateUdfFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUdfFileWithOptions(request, runtime);
  }

  async createViewWithOptions(request: CreateViewRequest, runtime: $Util.RuntimeOptions): Promise<CreateViewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateViewResponse>(await this.doRPCRequest("CreateView", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateViewResponse({}));
  }

  async createView(request: CreateViewRequest): Promise<CreateViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createViewWithOptions(request, runtime);
  }

  async deleteBusinessWithOptions(request: DeleteBusinessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBusinessResponse>(await this.doRPCRequest("DeleteBusiness", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBusinessResponse({}));
  }

  async deleteBusiness(request: DeleteBusinessRequest): Promise<DeleteBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBusinessWithOptions(request, runtime);
  }

  async deleteConnectionWithOptions(request: DeleteConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConnectionResponse>(await this.doRPCRequest("DeleteConnection", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConnectionResponse({}));
  }

  async deleteConnection(request: DeleteConnectionRequest): Promise<DeleteConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConnectionWithOptions(request, runtime);
  }

  async deleteDataServiceApiWithOptions(request: DeleteDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataServiceApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDataServiceApiResponse>(await this.doRPCRequest("DeleteDataServiceApi", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDataServiceApiResponse({}));
  }

  async deleteDataServiceApi(request: DeleteDataServiceApiRequest): Promise<DeleteDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataServiceApiWithOptions(request, runtime);
  }

  async deleteDataServiceApiAuthorityWithOptions(request: DeleteDataServiceApiAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataServiceApiAuthorityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDataServiceApiAuthorityResponse>(await this.doRPCRequest("DeleteDataServiceApiAuthority", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDataServiceApiAuthorityResponse({}));
  }

  async deleteDataServiceApiAuthority(request: DeleteDataServiceApiAuthorityRequest): Promise<DeleteDataServiceApiAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataServiceApiAuthorityWithOptions(request, runtime);
  }

  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.doRPCRequest("DeleteDataSource", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDataSourceResponse({}));
  }

  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  async deleteDISyncTaskWithOptions(request: DeleteDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDISyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDISyncTaskResponse>(await this.doRPCRequest("DeleteDISyncTask", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDISyncTaskResponse({}));
  }

  async deleteDISyncTask(request: DeleteDISyncTaskRequest): Promise<DeleteDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDISyncTaskWithOptions(request, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFileResponse>(await this.doRPCRequest("DeleteFile", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  async deleteFolderWithOptions(request: DeleteFolderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFolderResponse>(await this.doRPCRequest("DeleteFolder", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFolderResponse({}));
  }

  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  async deleteFromMetaCategoryWithOptions(request: DeleteFromMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFromMetaCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFromMetaCategoryResponse>(await this.doRPCRequest("DeleteFromMetaCategory", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFromMetaCategoryResponse({}));
  }

  async deleteFromMetaCategory(request: DeleteFromMetaCategoryRequest): Promise<DeleteFromMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFromMetaCategoryWithOptions(request, runtime);
  }

  async deleteMetaCategoryWithOptions(request: DeleteMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetaCategoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteMetaCategoryResponse>(await this.doRPCRequest("DeleteMetaCategory", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteMetaCategoryResponse({}));
  }

  async deleteMetaCategory(request: DeleteMetaCategoryRequest): Promise<DeleteMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetaCategoryWithOptions(request, runtime);
  }

  async deleteProjectMemberWithOptions(request: DeleteProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectMemberResponse>(await this.doRPCRequest("DeleteProjectMember", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectMemberResponse({}));
  }

  async deleteProjectMember(request: DeleteProjectMemberRequest): Promise<DeleteProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectMemberWithOptions(request, runtime);
  }

  async deleteQualityEntityWithOptions(request: DeleteQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQualityEntityResponse>(await this.doRPCRequest("DeleteQualityEntity", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQualityEntityResponse({}));
  }

  async deleteQualityEntity(request: DeleteQualityEntityRequest): Promise<DeleteQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityEntityWithOptions(request, runtime);
  }

  async deleteQualityFollowerWithOptions(request: DeleteQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityFollowerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQualityFollowerResponse>(await this.doRPCRequest("DeleteQualityFollower", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQualityFollowerResponse({}));
  }

  async deleteQualityFollower(request: DeleteQualityFollowerRequest): Promise<DeleteQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityFollowerWithOptions(request, runtime);
  }

  async deleteQualityRelativeNodeWithOptions(request: DeleteQualityRelativeNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityRelativeNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQualityRelativeNodeResponse>(await this.doRPCRequest("DeleteQualityRelativeNode", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQualityRelativeNodeResponse({}));
  }

  async deleteQualityRelativeNode(request: DeleteQualityRelativeNodeRequest): Promise<DeleteQualityRelativeNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityRelativeNodeWithOptions(request, runtime);
  }

  async deleteQualityRuleWithOptions(request: DeleteQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQualityRuleResponse>(await this.doRPCRequest("DeleteQualityRule", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQualityRuleResponse({}));
  }

  async deleteQualityRule(request: DeleteQualityRuleRequest): Promise<DeleteQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityRuleWithOptions(request, runtime);
  }

  async deleteRemindWithOptions(request: DeleteRemindRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRemindResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRemindResponse>(await this.doRPCRequest("DeleteRemind", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRemindResponse({}));
  }

  async deleteRemind(request: DeleteRemindRequest): Promise<DeleteRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRemindWithOptions(request, runtime);
  }

  async deleteTableWithOptions(request: DeleteTableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTableResponse>(await this.doRPCRequest("DeleteTable", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTableResponse({}));
  }

  async deleteTable(request: DeleteTableRequest): Promise<DeleteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableWithOptions(request, runtime);
  }

  async deleteTableLevelWithOptions(request: DeleteTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableLevelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTableLevelResponse>(await this.doRPCRequest("DeleteTableLevel", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTableLevelResponse({}));
  }

  async deleteTableLevel(request: DeleteTableLevelRequest): Promise<DeleteTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableLevelWithOptions(request, runtime);
  }

  async deleteTableThemeWithOptions(request: DeleteTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableThemeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTableThemeResponse>(await this.doRPCRequest("DeleteTableTheme", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTableThemeResponse({}));
  }

  async deleteTableTheme(request: DeleteTableThemeRequest): Promise<DeleteTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableThemeWithOptions(request, runtime);
  }

  async deleteViewWithOptions(request: DeleteViewRequest, runtime: $Util.RuntimeOptions): Promise<DeleteViewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteViewResponse>(await this.doRPCRequest("DeleteView", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteViewResponse({}));
  }

  async deleteView(request: DeleteViewRequest): Promise<DeleteViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteViewWithOptions(request, runtime);
  }

  async deployDISyncTaskWithOptions(request: DeployDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeployDISyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployDISyncTaskResponse>(await this.doRPCRequest("DeployDISyncTask", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeployDISyncTaskResponse({}));
  }

  async deployDISyncTask(request: DeployDISyncTaskRequest): Promise<DeployDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployDISyncTaskWithOptions(request, runtime);
  }

  async deployFileWithOptions(request: DeployFileRequest, runtime: $Util.RuntimeOptions): Promise<DeployFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployFileResponse>(await this.doRPCRequest("DeployFile", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeployFileResponse({}));
  }

  async deployFile(request: DeployFileRequest): Promise<DeployFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployFileWithOptions(request, runtime);
  }

  async desensitizeDataWithOptions(request: DesensitizeDataRequest, runtime: $Util.RuntimeOptions): Promise<DesensitizeDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DesensitizeDataResponse>(await this.doRPCRequest("DesensitizeData", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new DesensitizeDataResponse({}));
  }

  async desensitizeData(request: DesensitizeDataRequest): Promise<DesensitizeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.desensitizeDataWithOptions(request, runtime);
  }

  async establishRelationTableToBusinessWithOptions(request: EstablishRelationTableToBusinessRequest, runtime: $Util.RuntimeOptions): Promise<EstablishRelationTableToBusinessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EstablishRelationTableToBusinessResponse>(await this.doRPCRequest("EstablishRelationTableToBusiness", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new EstablishRelationTableToBusinessResponse({}));
  }

  async establishRelationTableToBusiness(request: EstablishRelationTableToBusinessRequest): Promise<EstablishRelationTableToBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.establishRelationTableToBusinessWithOptions(request, runtime);
  }

  async exportConnectionsWithOptions(request: ExportConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ExportConnectionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ExportConnectionsResponse>(await this.doRPCRequest("ExportConnections", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new ExportConnectionsResponse({}));
  }

  async exportConnections(request: ExportConnectionsRequest): Promise<ExportConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportConnectionsWithOptions(request, runtime);
  }

  async exportDataSourcesWithOptions(request: ExportDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ExportDataSourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ExportDataSourcesResponse>(await this.doRPCRequest("ExportDataSources", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new ExportDataSourcesResponse({}));
  }

  async exportDataSources(request: ExportDataSourcesRequest): Promise<ExportDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDataSourcesWithOptions(request, runtime);
  }

  async exportDISyncTasksWithOptions(request: ExportDISyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<ExportDISyncTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportDISyncTasksResponse>(await this.doRPCRequest("ExportDISyncTasks", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ExportDISyncTasksResponse({}));
  }

  async exportDISyncTasks(request: ExportDISyncTasksRequest): Promise<ExportDISyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDISyncTasksWithOptions(request, runtime);
  }

  async getBaselineConfigWithOptions(request: GetBaselineConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBaselineConfigResponse>(await this.doRPCRequest("GetBaselineConfig", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetBaselineConfigResponse({}));
  }

  async getBaselineConfig(request: GetBaselineConfigRequest): Promise<GetBaselineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineConfigWithOptions(request, runtime);
  }

  async getBaselineKeyPathWithOptions(request: GetBaselineKeyPathRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineKeyPathResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBaselineKeyPathResponse>(await this.doRPCRequest("GetBaselineKeyPath", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetBaselineKeyPathResponse({}));
  }

  async getBaselineKeyPath(request: GetBaselineKeyPathRequest): Promise<GetBaselineKeyPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineKeyPathWithOptions(request, runtime);
  }

  async getBaselineStatusWithOptions(request: GetBaselineStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBaselineStatusResponse>(await this.doRPCRequest("GetBaselineStatus", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetBaselineStatusResponse({}));
  }

  async getBaselineStatus(request: GetBaselineStatusRequest): Promise<GetBaselineStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineStatusWithOptions(request, runtime);
  }

  async getBusinessWithOptions(request: GetBusinessRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBusinessResponse>(await this.doRPCRequest("GetBusiness", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetBusinessResponse({}));
  }

  async getBusiness(request: GetBusinessRequest): Promise<GetBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessWithOptions(request, runtime);
  }

  async getConnectionMetaWithOptions(request: GetConnectionMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConnectionMetaResponse>(await this.doRPCRequest("GetConnectionMeta", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetConnectionMetaResponse({}));
  }

  async getConnectionMeta(request: GetConnectionMetaRequest): Promise<GetConnectionMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionMetaWithOptions(request, runtime);
  }

  async getDagWithOptions(request: GetDagRequest, runtime: $Util.RuntimeOptions): Promise<GetDagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDagResponse>(await this.doRPCRequest("GetDag", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDagResponse({}));
  }

  async getDag(request: GetDagRequest): Promise<GetDagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDagWithOptions(request, runtime);
  }

  async getDataServiceApiWithOptions(request: GetDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataServiceApiResponse>(await this.doRPCRequest("GetDataServiceApi", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataServiceApiResponse({}));
  }

  async getDataServiceApi(request: GetDataServiceApiRequest): Promise<GetDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceApiWithOptions(request, runtime);
  }

  async getDataServiceApplicationWithOptions(request: GetDataServiceApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataServiceApplicationResponse>(await this.doRPCRequest("GetDataServiceApplication", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataServiceApplicationResponse({}));
  }

  async getDataServiceApplication(request: GetDataServiceApplicationRequest): Promise<GetDataServiceApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceApplicationWithOptions(request, runtime);
  }

  async getDataServiceFolderWithOptions(request: GetDataServiceFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataServiceFolderResponse>(await this.doRPCRequest("GetDataServiceFolder", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataServiceFolderResponse({}));
  }

  async getDataServiceFolder(request: GetDataServiceFolderRequest): Promise<GetDataServiceFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceFolderWithOptions(request, runtime);
  }

  async getDataServiceGroupWithOptions(request: GetDataServiceGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataServiceGroupResponse>(await this.doRPCRequest("GetDataServiceGroup", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataServiceGroupResponse({}));
  }

  async getDataServiceGroup(request: GetDataServiceGroupRequest): Promise<GetDataServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceGroupWithOptions(request, runtime);
  }

  async getDataServicePublishedApiWithOptions(request: GetDataServicePublishedApiRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServicePublishedApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataServicePublishedApiResponse>(await this.doRPCRequest("GetDataServicePublishedApi", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataServicePublishedApiResponse({}));
  }

  async getDataServicePublishedApi(request: GetDataServicePublishedApiRequest): Promise<GetDataServicePublishedApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServicePublishedApiWithOptions(request, runtime);
  }

  async getDataSourceMetaWithOptions(request: GetDataSourceMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataSourceMetaResponse>(await this.doRPCRequest("GetDataSourceMeta", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataSourceMetaResponse({}));
  }

  async getDataSourceMeta(request: GetDataSourceMetaRequest): Promise<GetDataSourceMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceMetaWithOptions(request, runtime);
  }

  async getDDLJobStatusWithOptions(request: GetDDLJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDDLJobStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDDLJobStatusResponse>(await this.doRPCRequest("GetDDLJobStatus", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetDDLJobStatusResponse({}));
  }

  async getDDLJobStatus(request: GetDDLJobStatusRequest): Promise<GetDDLJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDDLJobStatusWithOptions(request, runtime);
  }

  async getDeploymentWithOptions(request: GetDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<GetDeploymentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeploymentResponse>(await this.doRPCRequest("GetDeployment", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeploymentResponse({}));
  }

  async getDeployment(request: GetDeploymentRequest): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeploymentWithOptions(request, runtime);
  }

  async getDISyncInstanceInfoWithOptions(request: GetDISyncInstanceInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDISyncInstanceInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDISyncInstanceInfoResponse>(await this.doRPCRequest("GetDISyncInstanceInfo", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDISyncInstanceInfoResponse({}));
  }

  async getDISyncInstanceInfo(request: GetDISyncInstanceInfoRequest): Promise<GetDISyncInstanceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDISyncInstanceInfoWithOptions(request, runtime);
  }

  async getDISyncTaskWithOptions(request: GetDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetDISyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDISyncTaskResponse>(await this.doRPCRequest("GetDISyncTask", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDISyncTaskResponse({}));
  }

  async getDISyncTask(request: GetDISyncTaskRequest): Promise<GetDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDISyncTaskWithOptions(request, runtime);
  }

  async getFileWithOptions(request: GetFileRequest, runtime: $Util.RuntimeOptions): Promise<GetFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFileResponse>(await this.doRPCRequest("GetFile", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetFileResponse({}));
  }

  async getFile(request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileWithOptions(request, runtime);
  }

  async getFileTypeStatisticWithOptions(request: GetFileTypeStatisticRequest, runtime: $Util.RuntimeOptions): Promise<GetFileTypeStatisticResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFileTypeStatisticResponse>(await this.doRPCRequest("GetFileTypeStatistic", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetFileTypeStatisticResponse({}));
  }

  async getFileTypeStatistic(request: GetFileTypeStatisticRequest): Promise<GetFileTypeStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileTypeStatisticWithOptions(request, runtime);
  }

  async getFileVersionWithOptions(request: GetFileVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetFileVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFileVersionResponse>(await this.doRPCRequest("GetFileVersion", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetFileVersionResponse({}));
  }

  async getFileVersion(request: GetFileVersionRequest): Promise<GetFileVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileVersionWithOptions(request, runtime);
  }

  async getFolderWithOptions(request: GetFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFolderResponse>(await this.doRPCRequest("GetFolder", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetFolderResponse({}));
  }

  async getFolder(request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceResponse>(await this.doRPCRequest("GetInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getInstanceConsumeTimeRankWithOptions(request: GetInstanceConsumeTimeRankRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceConsumeTimeRankResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceConsumeTimeRankResponse>(await this.doRPCRequest("GetInstanceConsumeTimeRank", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceConsumeTimeRankResponse({}));
  }

  async getInstanceConsumeTimeRank(request: GetInstanceConsumeTimeRankRequest): Promise<GetInstanceConsumeTimeRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceConsumeTimeRankWithOptions(request, runtime);
  }

  async getInstanceCountTrendWithOptions(request: GetInstanceCountTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceCountTrendResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceCountTrendResponse>(await this.doRPCRequest("GetInstanceCountTrend", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceCountTrendResponse({}));
  }

  async getInstanceCountTrend(request: GetInstanceCountTrendRequest): Promise<GetInstanceCountTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceCountTrendWithOptions(request, runtime);
  }

  async getInstanceErrorRankWithOptions(request: GetInstanceErrorRankRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceErrorRankResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceErrorRankResponse>(await this.doRPCRequest("GetInstanceErrorRank", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceErrorRankResponse({}));
  }

  async getInstanceErrorRank(request: GetInstanceErrorRankRequest): Promise<GetInstanceErrorRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceErrorRankWithOptions(request, runtime);
  }

  async getInstanceLogWithOptions(request: GetInstanceLogRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceLogResponse>(await this.doRPCRequest("GetInstanceLog", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceLogResponse({}));
  }

  async getInstanceLog(request: GetInstanceLogRequest): Promise<GetInstanceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceLogWithOptions(request, runtime);
  }

  async getInstanceStatusCountWithOptions(request: GetInstanceStatusCountRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceStatusCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceStatusCountResponse>(await this.doRPCRequest("GetInstanceStatusCount", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceStatusCountResponse({}));
  }

  async getInstanceStatusCount(request: GetInstanceStatusCountRequest): Promise<GetInstanceStatusCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceStatusCountWithOptions(request, runtime);
  }

  async getInstanceStatusStatisticWithOptions(request: GetInstanceStatusStatisticRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceStatusStatisticResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceStatusStatisticResponse>(await this.doRPCRequest("GetInstanceStatusStatistic", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceStatusStatisticResponse({}));
  }

  async getInstanceStatusStatistic(request: GetInstanceStatusStatisticRequest): Promise<GetInstanceStatusStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceStatusStatisticWithOptions(request, runtime);
  }

  async getManualDagInstancesWithOptions(request: GetManualDagInstancesRequest, runtime: $Util.RuntimeOptions): Promise<GetManualDagInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetManualDagInstancesResponse>(await this.doRPCRequest("GetManualDagInstances", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetManualDagInstancesResponse({}));
  }

  async getManualDagInstances(request: GetManualDagInstancesRequest): Promise<GetManualDagInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getManualDagInstancesWithOptions(request, runtime);
  }

  async getMetaCategoryWithOptions(request: GetMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaCategoryResponse>(await this.doRPCRequest("GetMetaCategory", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaCategoryResponse({}));
  }

  async getMetaCategory(request: GetMetaCategoryRequest): Promise<GetMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaCategoryWithOptions(request, runtime);
  }

  async getMetaColumnLineageWithOptions(request: GetMetaColumnLineageRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaColumnLineageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaColumnLineageResponse>(await this.doRPCRequest("GetMetaColumnLineage", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaColumnLineageResponse({}));
  }

  async getMetaColumnLineage(request: GetMetaColumnLineageRequest): Promise<GetMetaColumnLineageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaColumnLineageWithOptions(request, runtime);
  }

  async getMetaDBInfoWithOptions(request: GetMetaDBInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaDBInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMetaDBInfoResponse>(await this.doRPCRequest("GetMetaDBInfo", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetMetaDBInfoResponse({}));
  }

  async getMetaDBInfo(request: GetMetaDBInfoRequest): Promise<GetMetaDBInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaDBInfoWithOptions(request, runtime);
  }

  async getMetaDBTableListWithOptions(request: GetMetaDBTableListRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaDBTableListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaDBTableListResponse>(await this.doRPCRequest("GetMetaDBTableList", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaDBTableListResponse({}));
  }

  async getMetaDBTableList(request: GetMetaDBTableListRequest): Promise<GetMetaDBTableListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaDBTableListWithOptions(request, runtime);
  }

  async getMetaTableBasicInfoWithOptions(request: GetMetaTableBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableBasicInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMetaTableBasicInfoResponse>(await this.doRPCRequest("GetMetaTableBasicInfo", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetMetaTableBasicInfoResponse({}));
  }

  async getMetaTableBasicInfo(request: GetMetaTableBasicInfoRequest): Promise<GetMetaTableBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableBasicInfoWithOptions(request, runtime);
  }

  async getMetaTableChangeLogWithOptions(request: GetMetaTableChangeLogRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableChangeLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaTableChangeLogResponse>(await this.doRPCRequest("GetMetaTableChangeLog", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaTableChangeLogResponse({}));
  }

  async getMetaTableChangeLog(request: GetMetaTableChangeLogRequest): Promise<GetMetaTableChangeLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableChangeLogWithOptions(request, runtime);
  }

  async getMetaTableColumnWithOptions(request: GetMetaTableColumnRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableColumnResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMetaTableColumnResponse>(await this.doRPCRequest("GetMetaTableColumn", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetMetaTableColumnResponse({}));
  }

  async getMetaTableColumn(request: GetMetaTableColumnRequest): Promise<GetMetaTableColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableColumnWithOptions(request, runtime);
  }

  async getMetaTableFullInfoWithOptions(request: GetMetaTableFullInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableFullInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMetaTableFullInfoResponse>(await this.doRPCRequest("GetMetaTableFullInfo", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetMetaTableFullInfoResponse({}));
  }

  async getMetaTableFullInfo(request: GetMetaTableFullInfoRequest): Promise<GetMetaTableFullInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableFullInfoWithOptions(request, runtime);
  }

  async getMetaTableIntroWikiWithOptions(request: GetMetaTableIntroWikiRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableIntroWikiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaTableIntroWikiResponse>(await this.doRPCRequest("GetMetaTableIntroWiki", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaTableIntroWikiResponse({}));
  }

  async getMetaTableIntroWiki(request: GetMetaTableIntroWikiRequest): Promise<GetMetaTableIntroWikiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableIntroWikiWithOptions(request, runtime);
  }

  async getMetaTableLineageWithOptions(request: GetMetaTableLineageRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableLineageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaTableLineageResponse>(await this.doRPCRequest("GetMetaTableLineage", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaTableLineageResponse({}));
  }

  async getMetaTableLineage(request: GetMetaTableLineageRequest): Promise<GetMetaTableLineageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableLineageWithOptions(request, runtime);
  }

  async getMetaTableListByCategoryWithOptions(request: GetMetaTableListByCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableListByCategoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMetaTableListByCategoryResponse>(await this.doRPCRequest("GetMetaTableListByCategory", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetMetaTableListByCategoryResponse({}));
  }

  async getMetaTableListByCategory(request: GetMetaTableListByCategoryRequest): Promise<GetMetaTableListByCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableListByCategoryWithOptions(request, runtime);
  }

  async getMetaTableOutputWithOptions(request: GetMetaTableOutputRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableOutputResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaTableOutputResponse>(await this.doRPCRequest("GetMetaTableOutput", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaTableOutputResponse({}));
  }

  async getMetaTableOutput(request: GetMetaTableOutputRequest): Promise<GetMetaTableOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableOutputWithOptions(request, runtime);
  }

  async getMetaTablePartitionWithOptions(request: GetMetaTablePartitionRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTablePartitionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaTablePartitionResponse>(await this.doRPCRequest("GetMetaTablePartition", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaTablePartitionResponse({}));
  }

  async getMetaTablePartition(request: GetMetaTablePartitionRequest): Promise<GetMetaTablePartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTablePartitionWithOptions(request, runtime);
  }

  async getMetaTableThemeLevelWithOptions(request: GetMetaTableThemeLevelRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableThemeLevelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMetaTableThemeLevelResponse>(await this.doRPCRequest("GetMetaTableThemeLevel", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetMetaTableThemeLevelResponse({}));
  }

  async getMetaTableThemeLevel(request: GetMetaTableThemeLevelRequest): Promise<GetMetaTableThemeLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableThemeLevelWithOptions(request, runtime);
  }

  async getMigrationProcessWithOptions(request: GetMigrationProcessRequest, runtime: $Util.RuntimeOptions): Promise<GetMigrationProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMigrationProcessResponse>(await this.doRPCRequest("GetMigrationProcess", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetMigrationProcessResponse({}));
  }

  async getMigrationProcess(request: GetMigrationProcessRequest): Promise<GetMigrationProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMigrationProcessWithOptions(request, runtime);
  }

  async getNodeWithOptions(request: GetNodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNodeResponse>(await this.doRPCRequest("GetNode", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetNodeResponse({}));
  }

  async getNode(request: GetNodeRequest): Promise<GetNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeWithOptions(request, runtime);
  }

  async getNodeChildrenWithOptions(request: GetNodeChildrenRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeChildrenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNodeChildrenResponse>(await this.doRPCRequest("GetNodeChildren", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetNodeChildrenResponse({}));
  }

  async getNodeChildren(request: GetNodeChildrenRequest): Promise<GetNodeChildrenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeChildrenWithOptions(request, runtime);
  }

  async getNodeCodeWithOptions(request: GetNodeCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNodeCodeResponse>(await this.doRPCRequest("GetNodeCode", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetNodeCodeResponse({}));
  }

  async getNodeCode(request: GetNodeCodeRequest): Promise<GetNodeCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeCodeWithOptions(request, runtime);
  }

  async getNodeOnBaselineWithOptions(request: GetNodeOnBaselineRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeOnBaselineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNodeOnBaselineResponse>(await this.doRPCRequest("GetNodeOnBaseline", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetNodeOnBaselineResponse({}));
  }

  async getNodeOnBaseline(request: GetNodeOnBaselineRequest): Promise<GetNodeOnBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeOnBaselineWithOptions(request, runtime);
  }

  async getNodeParentsWithOptions(request: GetNodeParentsRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeParentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNodeParentsResponse>(await this.doRPCRequest("GetNodeParents", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetNodeParentsResponse({}));
  }

  async getNodeParents(request: GetNodeParentsRequest): Promise<GetNodeParentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeParentsWithOptions(request, runtime);
  }

  async getNodeTypeListInfoWithOptions(request: GetNodeTypeListInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeTypeListInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNodeTypeListInfoResponse>(await this.doRPCRequest("GetNodeTypeListInfo", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetNodeTypeListInfoResponse({}));
  }

  async getNodeTypeListInfo(request: GetNodeTypeListInfoRequest): Promise<GetNodeTypeListInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeTypeListInfoWithOptions(request, runtime);
  }

  async getOpRiskDataWithOptions(request: GetOpRiskDataRequest, runtime: $Util.RuntimeOptions): Promise<GetOpRiskDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetOpRiskDataResponse>(await this.doRPCRequest("GetOpRiskData", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetOpRiskDataResponse({}));
  }

  async getOpRiskData(request: GetOpRiskDataRequest): Promise<GetOpRiskDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpRiskDataWithOptions(request, runtime);
  }

  async getOpSensitiveDataWithOptions(request: GetOpSensitiveDataRequest, runtime: $Util.RuntimeOptions): Promise<GetOpSensitiveDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetOpSensitiveDataResponse>(await this.doRPCRequest("GetOpSensitiveData", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetOpSensitiveDataResponse({}));
  }

  async getOpSensitiveData(request: GetOpSensitiveDataRequest): Promise<GetOpSensitiveDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpSensitiveDataWithOptions(request, runtime);
  }

  async getPermissionApplyOrderDetailWithOptions(request: GetPermissionApplyOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetPermissionApplyOrderDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPermissionApplyOrderDetailResponse>(await this.doRPCRequest("GetPermissionApplyOrderDetail", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetPermissionApplyOrderDetailResponse({}));
  }

  async getPermissionApplyOrderDetail(request: GetPermissionApplyOrderDetailRequest): Promise<GetPermissionApplyOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermissionApplyOrderDetailWithOptions(request, runtime);
  }

  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectResponse>(await this.doRPCRequest("GetProject", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectResponse({}));
  }

  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  async getProjectDetailWithOptions(request: GetProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectDetailResponse>(await this.doRPCRequest("GetProjectDetail", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectDetailResponse({}));
  }

  async getProjectDetail(request: GetProjectDetailRequest): Promise<GetProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectDetailWithOptions(request, runtime);
  }

  async getQualityEntityWithOptions(request: GetQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityEntityResponse>(await this.doRPCRequest("GetQualityEntity", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityEntityResponse({}));
  }

  async getQualityEntity(request: GetQualityEntityRequest): Promise<GetQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityEntityWithOptions(request, runtime);
  }

  async getQualityFollowerWithOptions(request: GetQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityFollowerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityFollowerResponse>(await this.doRPCRequest("GetQualityFollower", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityFollowerResponse({}));
  }

  async getQualityFollower(request: GetQualityFollowerRequest): Promise<GetQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityFollowerWithOptions(request, runtime);
  }

  async getQualityRuleWithOptions(request: GetQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityRuleResponse>(await this.doRPCRequest("GetQualityRule", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityRuleResponse({}));
  }

  async getQualityRule(request: GetQualityRuleRequest): Promise<GetQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleWithOptions(request, runtime);
  }

  async getRemindWithOptions(request: GetRemindRequest, runtime: $Util.RuntimeOptions): Promise<GetRemindResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRemindResponse>(await this.doRPCRequest("GetRemind", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetRemindResponse({}));
  }

  async getRemind(request: GetRemindRequest): Promise<GetRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRemindWithOptions(request, runtime);
  }

  async getSensitiveDataWithOptions(request: GetSensitiveDataRequest, runtime: $Util.RuntimeOptions): Promise<GetSensitiveDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSensitiveDataResponse>(await this.doRPCRequest("GetSensitiveData", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new GetSensitiveDataResponse({}));
  }

  async getSensitiveData(request: GetSensitiveDataRequest): Promise<GetSensitiveDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSensitiveDataWithOptions(request, runtime);
  }

  async getSuccessInstanceTrendWithOptions(request: GetSuccessInstanceTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetSuccessInstanceTrendResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSuccessInstanceTrendResponse>(await this.doRPCRequest("GetSuccessInstanceTrend", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetSuccessInstanceTrendResponse({}));
  }

  async getSuccessInstanceTrend(request: GetSuccessInstanceTrendRequest): Promise<GetSuccessInstanceTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuccessInstanceTrendWithOptions(request, runtime);
  }

  async getTopicWithOptions(request: GetTopicRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTopicResponse>(await this.doRPCRequest("GetTopic", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetTopicResponse({}));
  }

  async getTopic(request: GetTopicRequest): Promise<GetTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicWithOptions(request, runtime);
  }

  async getTopicInfluenceWithOptions(request: GetTopicInfluenceRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicInfluenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTopicInfluenceResponse>(await this.doRPCRequest("GetTopicInfluence", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetTopicInfluenceResponse({}));
  }

  async getTopicInfluence(request: GetTopicInfluenceRequest): Promise<GetTopicInfluenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicInfluenceWithOptions(request, runtime);
  }

  async importConnectionsWithOptions(request: ImportConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ImportConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportConnectionsResponse>(await this.doRPCRequest("ImportConnections", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ImportConnectionsResponse({}));
  }

  async importConnections(request: ImportConnectionsRequest): Promise<ImportConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importConnectionsWithOptions(request, runtime);
  }

  async importDataSourcesWithOptions(request: ImportDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ImportDataSourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportDataSourcesResponse>(await this.doRPCRequest("ImportDataSources", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ImportDataSourcesResponse({}));
  }

  async importDataSources(request: ImportDataSourcesRequest): Promise<ImportDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importDataSourcesWithOptions(request, runtime);
  }

  async importDISyncTasksWithOptions(request: ImportDISyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<ImportDISyncTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportDISyncTasksResponse>(await this.doRPCRequest("ImportDISyncTasks", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ImportDISyncTasksResponse({}));
  }

  async importDISyncTasks(request: ImportDISyncTasksRequest): Promise<ImportDISyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importDISyncTasksWithOptions(request, runtime);
  }

  async listAlertMessagesWithOptions(request: ListAlertMessagesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertMessagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAlertMessagesResponse>(await this.doRPCRequest("ListAlertMessages", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListAlertMessagesResponse({}));
  }

  async listAlertMessages(request: ListAlertMessagesRequest): Promise<ListAlertMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertMessagesWithOptions(request, runtime);
  }

  async listBaselineConfigsWithOptions(request: ListBaselineConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListBaselineConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBaselineConfigsResponse>(await this.doRPCRequest("ListBaselineConfigs", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListBaselineConfigsResponse({}));
  }

  async listBaselineConfigs(request: ListBaselineConfigsRequest): Promise<ListBaselineConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBaselineConfigsWithOptions(request, runtime);
  }

  async listBaselineStatusesWithOptions(request: ListBaselineStatusesRequest, runtime: $Util.RuntimeOptions): Promise<ListBaselineStatusesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBaselineStatusesResponse>(await this.doRPCRequest("ListBaselineStatuses", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListBaselineStatusesResponse({}));
  }

  async listBaselineStatuses(request: ListBaselineStatusesRequest): Promise<ListBaselineStatusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBaselineStatusesWithOptions(request, runtime);
  }

  async listBusinessWithOptions(request: ListBusinessRequest, runtime: $Util.RuntimeOptions): Promise<ListBusinessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBusinessResponse>(await this.doRPCRequest("ListBusiness", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListBusinessResponse({}));
  }

  async listBusiness(request: ListBusinessRequest): Promise<ListBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBusinessWithOptions(request, runtime);
  }

  async listCalcEnginesWithOptions(request: ListCalcEnginesRequest, runtime: $Util.RuntimeOptions): Promise<ListCalcEnginesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCalcEnginesResponse>(await this.doRPCRequest("ListCalcEngines", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListCalcEnginesResponse({}));
  }

  async listCalcEngines(request: ListCalcEnginesRequest): Promise<ListCalcEnginesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCalcEnginesWithOptions(request, runtime);
  }

  async listConnectionsWithOptions(request: ListConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListConnectionsResponse>(await this.doRPCRequest("ListConnections", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new ListConnectionsResponse({}));
  }

  async listConnections(request: ListConnectionsRequest): Promise<ListConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionsWithOptions(request, runtime);
  }

  async listDataServiceApiAuthoritiesWithOptions(request: ListDataServiceApiAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApiAuthoritiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataServiceApiAuthoritiesResponse>(await this.doRPCRequest("ListDataServiceApiAuthorities", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataServiceApiAuthoritiesResponse({}));
  }

  async listDataServiceApiAuthorities(request: ListDataServiceApiAuthoritiesRequest): Promise<ListDataServiceApiAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApiAuthoritiesWithOptions(request, runtime);
  }

  async listDataServiceApisWithOptions(request: ListDataServiceApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataServiceApisResponse>(await this.doRPCRequest("ListDataServiceApis", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataServiceApisResponse({}));
  }

  async listDataServiceApis(request: ListDataServiceApisRequest): Promise<ListDataServiceApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApisWithOptions(request, runtime);
  }

  async listDataServiceApplicationsWithOptions(request: ListDataServiceApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApplicationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataServiceApplicationsResponse>(await this.doRPCRequest("ListDataServiceApplications", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataServiceApplicationsResponse({}));
  }

  async listDataServiceApplications(request: ListDataServiceApplicationsRequest): Promise<ListDataServiceApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApplicationsWithOptions(request, runtime);
  }

  async listDataServiceAuthorizedApisWithOptions(request: ListDataServiceAuthorizedApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceAuthorizedApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataServiceAuthorizedApisResponse>(await this.doRPCRequest("ListDataServiceAuthorizedApis", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataServiceAuthorizedApisResponse({}));
  }

  async listDataServiceAuthorizedApis(request: ListDataServiceAuthorizedApisRequest): Promise<ListDataServiceAuthorizedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceAuthorizedApisWithOptions(request, runtime);
  }

  async listDataServiceFoldersWithOptions(request: ListDataServiceFoldersRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceFoldersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataServiceFoldersResponse>(await this.doRPCRequest("ListDataServiceFolders", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataServiceFoldersResponse({}));
  }

  async listDataServiceFolders(request: ListDataServiceFoldersRequest): Promise<ListDataServiceFoldersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceFoldersWithOptions(request, runtime);
  }

  async listDataServiceGroupsWithOptions(request: ListDataServiceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataServiceGroupsResponse>(await this.doRPCRequest("ListDataServiceGroups", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataServiceGroupsResponse({}));
  }

  async listDataServiceGroups(request: ListDataServiceGroupsRequest): Promise<ListDataServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceGroupsWithOptions(request, runtime);
  }

  async listDataServicePublishedApisWithOptions(request: ListDataServicePublishedApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServicePublishedApisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataServicePublishedApisResponse>(await this.doRPCRequest("ListDataServicePublishedApis", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataServicePublishedApisResponse({}));
  }

  async listDataServicePublishedApis(request: ListDataServicePublishedApisRequest): Promise<ListDataServicePublishedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServicePublishedApisWithOptions(request, runtime);
  }

  async listDataSourcesWithOptions(request: ListDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDataSourcesResponse>(await this.doRPCRequest("ListDataSources", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new ListDataSourcesResponse({}));
  }

  async listDataSources(request: ListDataSourcesRequest): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  async listDIProjectConfigWithOptions(request: ListDIProjectConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListDIProjectConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDIProjectConfigResponse>(await this.doRPCRequest("ListDIProjectConfig", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDIProjectConfigResponse({}));
  }

  async listDIProjectConfig(request: ListDIProjectConfigRequest): Promise<ListDIProjectConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIProjectConfigWithOptions(request, runtime);
  }

  async listDISyncTasksWithOptions(request: ListDISyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListDISyncTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDISyncTasksResponse>(await this.doRPCRequest("ListDISyncTasks", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDISyncTasksResponse({}));
  }

  async listDISyncTasks(request: ListDISyncTasksRequest): Promise<ListDISyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDISyncTasksWithOptions(request, runtime);
  }

  async listFilesWithOptions(request: ListFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFilesResponse>(await this.doRPCRequest("ListFiles", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListFilesResponse({}));
  }

  async listFiles(request: ListFilesRequest): Promise<ListFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  async listFileTypeWithOptions(request: ListFileTypeRequest, runtime: $Util.RuntimeOptions): Promise<ListFileTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFileTypeResponse>(await this.doRPCRequest("ListFileType", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListFileTypeResponse({}));
  }

  async listFileType(request: ListFileTypeRequest): Promise<ListFileTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileTypeWithOptions(request, runtime);
  }

  async listFileVersionsWithOptions(request: ListFileVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListFileVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFileVersionsResponse>(await this.doRPCRequest("ListFileVersions", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListFileVersionsResponse({}));
  }

  async listFileVersions(request: ListFileVersionsRequest): Promise<ListFileVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileVersionsWithOptions(request, runtime);
  }

  async listFoldersWithOptions(request: ListFoldersRequest, runtime: $Util.RuntimeOptions): Promise<ListFoldersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFoldersResponse>(await this.doRPCRequest("ListFolders", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListFoldersResponse({}));
  }

  async listFolders(request: ListFoldersRequest): Promise<ListFoldersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFoldersWithOptions(request, runtime);
  }

  async listInstanceAmountWithOptions(request: ListInstanceAmountRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceAmountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstanceAmountResponse>(await this.doRPCRequest("ListInstanceAmount", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstanceAmountResponse({}));
  }

  async listInstanceAmount(request: ListInstanceAmountRequest): Promise<ListInstanceAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceAmountWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstancesResponse>(await this.doRPCRequest("ListInstances", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async listManualDagInstancesWithOptions(request: ListManualDagInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListManualDagInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListManualDagInstancesResponse>(await this.doRPCRequest("ListManualDagInstances", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListManualDagInstancesResponse({}));
  }

  async listManualDagInstances(request: ListManualDagInstancesRequest): Promise<ListManualDagInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listManualDagInstancesWithOptions(request, runtime);
  }

  async listMetaDBWithOptions(request: ListMetaDBRequest, runtime: $Util.RuntimeOptions): Promise<ListMetaDBResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListMetaDBResponse>(await this.doRPCRequest("ListMetaDB", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new ListMetaDBResponse({}));
  }

  async listMetaDB(request: ListMetaDBRequest): Promise<ListMetaDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMetaDBWithOptions(request, runtime);
  }

  async listNodeInputOrOutputWithOptions(request: ListNodeInputOrOutputRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeInputOrOutputResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNodeInputOrOutputResponse>(await this.doRPCRequest("ListNodeInputOrOutput", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListNodeInputOrOutputResponse({}));
  }

  async listNodeInputOrOutput(request: ListNodeInputOrOutputRequest): Promise<ListNodeInputOrOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeInputOrOutputWithOptions(request, runtime);
  }

  async listNodeIOWithOptions(request: ListNodeIORequest, runtime: $Util.RuntimeOptions): Promise<ListNodeIOResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNodeIOResponse>(await this.doRPCRequest("ListNodeIO", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListNodeIOResponse({}));
  }

  async listNodeIO(request: ListNodeIORequest): Promise<ListNodeIOResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeIOWithOptions(request, runtime);
  }

  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNodesResponse>(await this.doRPCRequest("ListNodes", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListNodesResponse({}));
  }

  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  async listNodesByBaselineWithOptions(request: ListNodesByBaselineRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesByBaselineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNodesByBaselineResponse>(await this.doRPCRequest("ListNodesByBaseline", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListNodesByBaselineResponse({}));
  }

  async listNodesByBaseline(request: ListNodesByBaselineRequest): Promise<ListNodesByBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesByBaselineWithOptions(request, runtime);
  }

  async listNodesByOutputWithOptions(request: ListNodesByOutputRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesByOutputResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNodesByOutputResponse>(await this.doRPCRequest("ListNodesByOutput", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListNodesByOutputResponse({}));
  }

  async listNodesByOutput(request: ListNodesByOutputRequest): Promise<ListNodesByOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesByOutputWithOptions(request, runtime);
  }

  async listPermissionApplyOrdersWithOptions(request: ListPermissionApplyOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListPermissionApplyOrdersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPermissionApplyOrdersResponse>(await this.doRPCRequest("ListPermissionApplyOrders", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListPermissionApplyOrdersResponse({}));
  }

  async listPermissionApplyOrders(request: ListPermissionApplyOrdersRequest): Promise<ListPermissionApplyOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionApplyOrdersWithOptions(request, runtime);
  }

  async listProgramTypeCountWithOptions(request: ListProgramTypeCountRequest, runtime: $Util.RuntimeOptions): Promise<ListProgramTypeCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProgramTypeCountResponse>(await this.doRPCRequest("ListProgramTypeCount", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListProgramTypeCountResponse({}));
  }

  async listProgramTypeCount(request: ListProgramTypeCountRequest): Promise<ListProgramTypeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProgramTypeCountWithOptions(request, runtime);
  }

  async listProjectIdsWithOptions(request: ListProjectIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectIdsResponse>(await this.doRPCRequest("ListProjectIds", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectIdsResponse({}));
  }

  async listProjectIds(request: ListProjectIdsRequest): Promise<ListProjectIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectIdsWithOptions(request, runtime);
  }

  async listProjectMembersWithOptions(request: ListProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectMembersResponse>(await this.doRPCRequest("ListProjectMembers", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectMembersResponse({}));
  }

  async listProjectMembers(request: ListProjectMembersRequest): Promise<ListProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectMembersWithOptions(request, runtime);
  }

  async listProjectRolesWithOptions(request: ListProjectRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectRolesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectRolesResponse>(await this.doRPCRequest("ListProjectRoles", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectRolesResponse({}));
  }

  async listProjectRoles(request: ListProjectRolesRequest): Promise<ListProjectRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectRolesWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectsResponse>(await this.doRPCRequest("ListProjects", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async listQualityResultsByEntityWithOptions(request: ListQualityResultsByEntityRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityResultsByEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListQualityResultsByEntityResponse>(await this.doRPCRequest("ListQualityResultsByEntity", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListQualityResultsByEntityResponse({}));
  }

  async listQualityResultsByEntity(request: ListQualityResultsByEntityRequest): Promise<ListQualityResultsByEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityResultsByEntityWithOptions(request, runtime);
  }

  async listQualityResultsByRuleWithOptions(request: ListQualityResultsByRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityResultsByRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListQualityResultsByRuleResponse>(await this.doRPCRequest("ListQualityResultsByRule", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListQualityResultsByRuleResponse({}));
  }

  async listQualityResultsByRule(request: ListQualityResultsByRuleRequest): Promise<ListQualityResultsByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityResultsByRuleWithOptions(request, runtime);
  }

  async listQualityRulesWithOptions(request: ListQualityRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListQualityRulesResponse>(await this.doRPCRequest("ListQualityRules", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListQualityRulesResponse({}));
  }

  async listQualityRules(request: ListQualityRulesRequest): Promise<ListQualityRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityRulesWithOptions(request, runtime);
  }

  async listRefDISyncTasksWithOptions(request: ListRefDISyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListRefDISyncTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRefDISyncTasksResponse>(await this.doRPCRequest("ListRefDISyncTasks", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListRefDISyncTasksResponse({}));
  }

  async listRefDISyncTasks(request: ListRefDISyncTasksRequest): Promise<ListRefDISyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRefDISyncTasksWithOptions(request, runtime);
  }

  async listRemindsWithOptions(request: ListRemindsRequest, runtime: $Util.RuntimeOptions): Promise<ListRemindsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRemindsResponse>(await this.doRPCRequest("ListReminds", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListRemindsResponse({}));
  }

  async listReminds(request: ListRemindsRequest): Promise<ListRemindsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRemindsWithOptions(request, runtime);
  }

  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListResourceGroupsResponse>(await this.doRPCRequest("ListResourceGroups", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListResourceGroupsResponse({}));
  }

  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  async listSuccessInstanceAmountWithOptions(request: ListSuccessInstanceAmountRequest, runtime: $Util.RuntimeOptions): Promise<ListSuccessInstanceAmountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSuccessInstanceAmountResponse>(await this.doRPCRequest("ListSuccessInstanceAmount", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListSuccessInstanceAmountResponse({}));
  }

  async listSuccessInstanceAmount(request: ListSuccessInstanceAmountRequest): Promise<ListSuccessInstanceAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSuccessInstanceAmountWithOptions(request, runtime);
  }

  async listTableLevelWithOptions(request: ListTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<ListTableLevelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListTableLevelResponse>(await this.doRPCRequest("ListTableLevel", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new ListTableLevelResponse({}));
  }

  async listTableLevel(request: ListTableLevelRequest): Promise<ListTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTableLevelWithOptions(request, runtime);
  }

  async listTableThemeWithOptions(request: ListTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<ListTableThemeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListTableThemeResponse>(await this.doRPCRequest("ListTableTheme", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new ListTableThemeResponse({}));
  }

  async listTableTheme(request: ListTableThemeRequest): Promise<ListTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTableThemeWithOptions(request, runtime);
  }

  async listTopicsWithOptions(request: ListTopicsRequest, runtime: $Util.RuntimeOptions): Promise<ListTopicsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTopicsResponse>(await this.doRPCRequest("ListTopics", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListTopicsResponse({}));
  }

  async listTopics(request: ListTopicsRequest): Promise<ListTopicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTopicsWithOptions(request, runtime);
  }

  async publishDataServiceApiWithOptions(request: PublishDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<PublishDataServiceApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishDataServiceApiResponse>(await this.doRPCRequest("PublishDataServiceApi", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new PublishDataServiceApiResponse({}));
  }

  async publishDataServiceApi(request: PublishDataServiceApiRequest): Promise<PublishDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishDataServiceApiWithOptions(request, runtime);
  }

  async queryPublicModelEngineWithOptions(request: QueryPublicModelEngineRequest, runtime: $Util.RuntimeOptions): Promise<QueryPublicModelEngineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPublicModelEngineResponse>(await this.doRPCRequest("QueryPublicModelEngine", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPublicModelEngineResponse({}));
  }

  async queryPublicModelEngine(request: QueryPublicModelEngineRequest): Promise<QueryPublicModelEngineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPublicModelEngineWithOptions(request, runtime);
  }

  async removeProjectMemberFromRoleWithOptions(request: RemoveProjectMemberFromRoleRequest, runtime: $Util.RuntimeOptions): Promise<RemoveProjectMemberFromRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveProjectMemberFromRoleResponse>(await this.doRPCRequest("RemoveProjectMemberFromRole", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveProjectMemberFromRoleResponse({}));
  }

  async removeProjectMemberFromRole(request: RemoveProjectMemberFromRoleRequest): Promise<RemoveProjectMemberFromRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeProjectMemberFromRoleWithOptions(request, runtime);
  }

  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartInstanceResponse>(await this.doRPCRequest("RestartInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new RestartInstanceResponse({}));
  }

  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  async resumeInstanceWithOptions(request: ResumeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ResumeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeInstanceResponse>(await this.doRPCRequest("ResumeInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeInstanceResponse({}));
  }

  async resumeInstance(request: ResumeInstanceRequest): Promise<ResumeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  async revokeColumnPermissionWithOptions(request: RevokeColumnPermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeColumnPermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeColumnPermissionResponse>(await this.doRPCRequest("RevokeColumnPermission", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeColumnPermissionResponse({}));
  }

  async revokeColumnPermission(request: RevokeColumnPermissionRequest): Promise<RevokeColumnPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeColumnPermissionWithOptions(request, runtime);
  }

  async revokeTablePermissionWithOptions(request: RevokeTablePermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeTablePermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeTablePermissionResponse>(await this.doRPCRequest("RevokeTablePermission", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeTablePermissionResponse({}));
  }

  async revokeTablePermission(request: RevokeTablePermissionRequest): Promise<RevokeTablePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeTablePermissionWithOptions(request, runtime);
  }

  async runCycleDagNodesWithOptions(request: RunCycleDagNodesRequest, runtime: $Util.RuntimeOptions): Promise<RunCycleDagNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunCycleDagNodesResponse>(await this.doRPCRequest("RunCycleDagNodes", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new RunCycleDagNodesResponse({}));
  }

  async runCycleDagNodes(request: RunCycleDagNodesRequest): Promise<RunCycleDagNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCycleDagNodesWithOptions(request, runtime);
  }

  async runManualDagNodesWithOptions(request: RunManualDagNodesRequest, runtime: $Util.RuntimeOptions): Promise<RunManualDagNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunManualDagNodesResponse>(await this.doRPCRequest("RunManualDagNodes", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new RunManualDagNodesResponse({}));
  }

  async runManualDagNodes(request: RunManualDagNodesRequest): Promise<RunManualDagNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runManualDagNodesWithOptions(request, runtime);
  }

  async runSmokeTestWithOptions(request: RunSmokeTestRequest, runtime: $Util.RuntimeOptions): Promise<RunSmokeTestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunSmokeTestResponse>(await this.doRPCRequest("RunSmokeTest", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new RunSmokeTestResponse({}));
  }

  async runSmokeTest(request: RunSmokeTestRequest): Promise<RunSmokeTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runSmokeTestWithOptions(request, runtime);
  }

  async runTriggerNodeWithOptions(request: RunTriggerNodeRequest, runtime: $Util.RuntimeOptions): Promise<RunTriggerNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunTriggerNodeResponse>(await this.doRPCRequest("RunTriggerNode", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new RunTriggerNodeResponse({}));
  }

  async runTriggerNode(request: RunTriggerNodeRequest): Promise<RunTriggerNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runTriggerNodeWithOptions(request, runtime);
  }

  async scanSensitiveDataWithOptions(request: ScanSensitiveDataRequest, runtime: $Util.RuntimeOptions): Promise<ScanSensitiveDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ScanSensitiveDataResponse>(await this.doRPCRequest("ScanSensitiveData", "2020-05-18", "HTTPS", "GET", "AK", "json", req, runtime), new ScanSensitiveDataResponse({}));
  }

  async scanSensitiveData(request: ScanSensitiveDataRequest): Promise<ScanSensitiveDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scanSensitiveDataWithOptions(request, runtime);
  }

  async searchMetaTablesWithOptions(request: SearchMetaTablesRequest, runtime: $Util.RuntimeOptions): Promise<SearchMetaTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchMetaTablesResponse>(await this.doRPCRequest("SearchMetaTables", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new SearchMetaTablesResponse({}));
  }

  async searchMetaTables(request: SearchMetaTablesRequest): Promise<SearchMetaTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchMetaTablesWithOptions(request, runtime);
  }

  async searchNodesByOutputWithOptions(request: SearchNodesByOutputRequest, runtime: $Util.RuntimeOptions): Promise<SearchNodesByOutputResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchNodesByOutputResponse>(await this.doRPCRequest("SearchNodesByOutput", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new SearchNodesByOutputResponse({}));
  }

  async searchNodesByOutput(request: SearchNodesByOutputRequest): Promise<SearchNodesByOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchNodesByOutputWithOptions(request, runtime);
  }

  async setConnectionShareWithOptions(request: SetConnectionShareRequest, runtime: $Util.RuntimeOptions): Promise<SetConnectionShareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetConnectionShareResponse>(await this.doRPCRequest("SetConnectionShare", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetConnectionShareResponse({}));
  }

  async setConnectionShare(request: SetConnectionShareRequest): Promise<SetConnectionShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setConnectionShareWithOptions(request, runtime);
  }

  async setDataSourceShareWithOptions(request: SetDataSourceShareRequest, runtime: $Util.RuntimeOptions): Promise<SetDataSourceShareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDataSourceShareResponse>(await this.doRPCRequest("SetDataSourceShare", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetDataSourceShareResponse({}));
  }

  async setDataSourceShare(request: SetDataSourceShareRequest): Promise<SetDataSourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataSourceShareWithOptions(request, runtime);
  }

  async setSuccessInstanceWithOptions(request: SetSuccessInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SetSuccessInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetSuccessInstanceResponse>(await this.doRPCRequest("SetSuccessInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetSuccessInstanceResponse({}));
  }

  async setSuccessInstance(request: SetSuccessInstanceRequest): Promise<SetSuccessInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSuccessInstanceWithOptions(request, runtime);
  }

  async startDISyncInstanceWithOptions(request: StartDISyncInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartDISyncInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDISyncInstanceResponse>(await this.doRPCRequest("StartDISyncInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new StartDISyncInstanceResponse({}));
  }

  async startDISyncInstance(request: StartDISyncInstanceRequest): Promise<StartDISyncInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDISyncInstanceWithOptions(request, runtime);
  }

  async startMigrationWithOptions(request: StartMigrationRequest, runtime: $Util.RuntimeOptions): Promise<StartMigrationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartMigrationResponse>(await this.doRPCRequest("StartMigration", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new StartMigrationResponse({}));
  }

  async startMigration(request: StartMigrationRequest): Promise<StartMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMigrationWithOptions(request, runtime);
  }

  async stopDISyncInstanceWithOptions(request: StopDISyncInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopDISyncInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDISyncInstanceResponse>(await this.doRPCRequest("StopDISyncInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new StopDISyncInstanceResponse({}));
  }

  async stopDISyncInstance(request: StopDISyncInstanceRequest): Promise<StopDISyncInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDISyncInstanceWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopInstanceResponse>(await this.doRPCRequest("StopInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async submitFileWithOptions(request: SubmitFileRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitFileResponse>(await this.doRPCRequest("SubmitFile", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitFileResponse({}));
  }

  async submitFile(request: SubmitFileRequest): Promise<SubmitFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFileWithOptions(request, runtime);
  }

  async suspendInstanceWithOptions(request: SuspendInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SuspendInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendInstanceResponse>(await this.doRPCRequest("SuspendInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendInstanceResponse({}));
  }

  async suspendInstance(request: SuspendInstanceRequest): Promise<SuspendInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendInstanceWithOptions(request, runtime);
  }

  async terminateDISyncInstanceWithOptions(request: TerminateDISyncInstanceRequest, runtime: $Util.RuntimeOptions): Promise<TerminateDISyncInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TerminateDISyncInstanceResponse>(await this.doRPCRequest("TerminateDISyncInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new TerminateDISyncInstanceResponse({}));
  }

  async terminateDISyncInstance(request: TerminateDISyncInstanceRequest): Promise<TerminateDISyncInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateDISyncInstanceWithOptions(request, runtime);
  }

  async testNetworkConnectionWithOptions(request: TestNetworkConnectionRequest, runtime: $Util.RuntimeOptions): Promise<TestNetworkConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TestNetworkConnectionResponse>(await this.doRPCRequest("TestNetworkConnection", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new TestNetworkConnectionResponse({}));
  }

  async testNetworkConnection(request: TestNetworkConnectionRequest): Promise<TestNetworkConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testNetworkConnectionWithOptions(request, runtime);
  }

  async topTenElapsedTimeInstanceWithOptions(request: TopTenElapsedTimeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<TopTenElapsedTimeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TopTenElapsedTimeInstanceResponse>(await this.doRPCRequest("TopTenElapsedTimeInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new TopTenElapsedTimeInstanceResponse({}));
  }

  async topTenElapsedTimeInstance(request: TopTenElapsedTimeInstanceRequest): Promise<TopTenElapsedTimeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.topTenElapsedTimeInstanceWithOptions(request, runtime);
  }

  async topTenErrorTimesInstanceWithOptions(request: TopTenErrorTimesInstanceRequest, runtime: $Util.RuntimeOptions): Promise<TopTenErrorTimesInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TopTenErrorTimesInstanceResponse>(await this.doRPCRequest("TopTenErrorTimesInstance", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new TopTenErrorTimesInstanceResponse({}));
  }

  async topTenErrorTimesInstance(request: TopTenErrorTimesInstanceRequest): Promise<TopTenErrorTimesInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.topTenErrorTimesInstanceWithOptions(request, runtime);
  }

  async updateBusinessWithOptions(request: UpdateBusinessRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBusinessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateBusinessResponse>(await this.doRPCRequest("UpdateBusiness", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateBusinessResponse({}));
  }

  async updateBusiness(request: UpdateBusinessRequest): Promise<UpdateBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBusinessWithOptions(request, runtime);
  }

  async updateConnectionWithOptions(request: UpdateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConnectionResponse>(await this.doRPCRequest("UpdateConnection", "2020-05-18", "HTTPS", "PUT", "AK", "json", req, runtime), new UpdateConnectionResponse({}));
  }

  async updateConnection(request: UpdateConnectionRequest): Promise<UpdateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnectionWithOptions(request, runtime);
  }

  async updateDataServiceApiWithOptions(request: UpdateDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataServiceApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDataServiceApiResponse>(await this.doRPCRequest("UpdateDataServiceApi", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDataServiceApiResponse({}));
  }

  async updateDataServiceApi(request: UpdateDataServiceApiRequest): Promise<UpdateDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataServiceApiWithOptions(request, runtime);
  }

  async updateDataSourceWithOptions(request: UpdateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDataSourceResponse>(await this.doRPCRequest("UpdateDataSource", "2020-05-18", "HTTPS", "PUT", "AK", "json", req, runtime), new UpdateDataSourceResponse({}));
  }

  async updateDataSource(request: UpdateDataSourceRequest): Promise<UpdateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  async updateDIProjectConfigWithOptions(request: UpdateDIProjectConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDIProjectConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDIProjectConfigResponse>(await this.doRPCRequest("UpdateDIProjectConfig", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDIProjectConfigResponse({}));
  }

  async updateDIProjectConfig(request: UpdateDIProjectConfigRequest): Promise<UpdateDIProjectConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDIProjectConfigWithOptions(request, runtime);
  }

  async updateDISyncTaskWithOptions(request: UpdateDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDISyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDISyncTaskResponse>(await this.doRPCRequest("UpdateDISyncTask", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDISyncTaskResponse({}));
  }

  async updateDISyncTask(request: UpdateDISyncTaskRequest): Promise<UpdateDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDISyncTaskWithOptions(request, runtime);
  }

  async updateFileWithOptions(request: UpdateFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFileResponse>(await this.doRPCRequest("UpdateFile", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFileResponse({}));
  }

  async updateFile(request: UpdateFileRequest): Promise<UpdateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileWithOptions(request, runtime);
  }

  async updateFolderWithOptions(request: UpdateFolderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFolderResponse>(await this.doRPCRequest("UpdateFolder", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFolderResponse({}));
  }

  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  async updateMetaCategoryWithOptions(request: UpdateMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMetaCategoryResponse>(await this.doRPCRequest("UpdateMetaCategory", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMetaCategoryResponse({}));
  }

  async updateMetaCategory(request: UpdateMetaCategoryRequest): Promise<UpdateMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaCategoryWithOptions(request, runtime);
  }

  async updateMetaTableWithOptions(request: UpdateMetaTableRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMetaTableResponse>(await this.doRPCRequest("UpdateMetaTable", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMetaTableResponse({}));
  }

  async updateMetaTable(request: UpdateMetaTableRequest): Promise<UpdateMetaTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaTableWithOptions(request, runtime);
  }

  async updateMetaTableIntroWikiWithOptions(request: UpdateMetaTableIntroWikiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaTableIntroWikiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMetaTableIntroWikiResponse>(await this.doRPCRequest("UpdateMetaTableIntroWiki", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMetaTableIntroWikiResponse({}));
  }

  async updateMetaTableIntroWiki(request: UpdateMetaTableIntroWikiRequest): Promise<UpdateMetaTableIntroWikiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaTableIntroWikiWithOptions(request, runtime);
  }

  async updateNodeOwnerWithOptions(request: UpdateNodeOwnerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNodeOwnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNodeOwnerResponse>(await this.doRPCRequest("UpdateNodeOwner", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNodeOwnerResponse({}));
  }

  async updateNodeOwner(request: UpdateNodeOwnerRequest): Promise<UpdateNodeOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNodeOwnerWithOptions(request, runtime);
  }

  async updateNodeRunModeWithOptions(request: UpdateNodeRunModeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNodeRunModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNodeRunModeResponse>(await this.doRPCRequest("UpdateNodeRunMode", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNodeRunModeResponse({}));
  }

  async updateNodeRunMode(request: UpdateNodeRunModeRequest): Promise<UpdateNodeRunModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNodeRunModeWithOptions(request, runtime);
  }

  async updateQualityFollowerWithOptions(request: UpdateQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQualityFollowerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateQualityFollowerResponse>(await this.doRPCRequest("UpdateQualityFollower", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateQualityFollowerResponse({}));
  }

  async updateQualityFollower(request: UpdateQualityFollowerRequest): Promise<UpdateQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQualityFollowerWithOptions(request, runtime);
  }

  async updateQualityRuleWithOptions(request: UpdateQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQualityRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateQualityRuleResponse>(await this.doRPCRequest("UpdateQualityRule", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateQualityRuleResponse({}));
  }

  async updateQualityRule(request: UpdateQualityRuleRequest): Promise<UpdateQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQualityRuleWithOptions(request, runtime);
  }

  async updateRemindWithOptions(request: UpdateRemindRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRemindResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRemindResponse>(await this.doRPCRequest("UpdateRemind", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRemindResponse({}));
  }

  async updateRemind(request: UpdateRemindRequest): Promise<UpdateRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRemindWithOptions(request, runtime);
  }

  async updateTableWithOptions(request: UpdateTableRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTableResponse>(await this.doRPCRequest("UpdateTable", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTableResponse({}));
  }

  async updateTable(request: UpdateTableRequest): Promise<UpdateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableWithOptions(request, runtime);
  }

  async updateTableAddColumnWithOptions(request: UpdateTableAddColumnRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableAddColumnResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTableAddColumnResponse>(await this.doRPCRequest("UpdateTableAddColumn", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTableAddColumnResponse({}));
  }

  async updateTableAddColumn(request: UpdateTableAddColumnRequest): Promise<UpdateTableAddColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableAddColumnWithOptions(request, runtime);
  }

  async updateTableLevelWithOptions(request: UpdateTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableLevelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTableLevelResponse>(await this.doRPCRequest("UpdateTableLevel", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTableLevelResponse({}));
  }

  async updateTableLevel(request: UpdateTableLevelRequest): Promise<UpdateTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableLevelWithOptions(request, runtime);
  }

  async updateTableModelInfoWithOptions(request: UpdateTableModelInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableModelInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTableModelInfoResponse>(await this.doRPCRequest("UpdateTableModelInfo", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTableModelInfoResponse({}));
  }

  async updateTableModelInfo(request: UpdateTableModelInfoRequest): Promise<UpdateTableModelInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableModelInfoWithOptions(request, runtime);
  }

  async updateTableThemeWithOptions(request: UpdateTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableThemeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTableThemeResponse>(await this.doRPCRequest("UpdateTableTheme", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTableThemeResponse({}));
  }

  async updateTableTheme(request: UpdateTableThemeRequest): Promise<UpdateTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableThemeWithOptions(request, runtime);
  }

  async updateUdfFileWithOptions(request: UpdateUdfFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUdfFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUdfFileResponse>(await this.doRPCRequest("UpdateUdfFile", "2020-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUdfFileResponse({}));
  }

  async updateUdfFile(request: UpdateUdfFileRequest): Promise<UpdateUdfFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUdfFileWithOptions(request, runtime);
  }

}
