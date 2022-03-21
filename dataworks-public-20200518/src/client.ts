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
  apiId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDataServiceApiResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  clientToken?: string;
  projectId?: number;
  roleCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      roleCode: 'RoleCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      roleCode: 'string',
      userId: 'string',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  approveAction?: number;
  approveComment?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      approveAction: 'ApproveAction',
      approveComment: 'ApproveComment',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveAction: 'number',
      approveComment: 'string',
      flowId: 'string',
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

export class CheckFileDeploymentRequest extends $tea.Model {
  checkDetailUrl?: string;
  checkerInstanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkDetailUrl: 'CheckDetailUrl',
      checkerInstanceId: 'CheckerInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDetailUrl: 'string',
      checkerInstanceId: 'string',
      status: 'string',
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
  clusterId?: string;
  dataSourceType?: string;
  databaseName?: string;
  partition?: string;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      partition: 'Partition',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      partition: 'string',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaPartitionResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  clusterId?: string;
  dataSourceType?: string;
  databaseName?: string;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      tableGuid: 'string',
      tableName: 'string',
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

export class CreateBusinessRequest extends $tea.Model {
  businessName?: string;
  description?: string;
  owner?: string;
  projectId?: number;
  projectIdentifier?: string;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessName: 'string',
      description: 'string',
      owner: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBusinessResponseBody extends $tea.Model {
  businessId?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  connectionType?: string;
  content?: string;
  description?: string;
  envType?: number;
  name?: string;
  projectId?: number;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      content: 'Content',
      description: 'Description',
      envType: 'EnvType',
      name: 'Name',
      projectId: 'ProjectId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      content: 'string',
      description: 'string',
      envType: 'number',
      name: 'string',
      projectId: 'number',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionResponseBody extends $tea.Model {
  data?: number;
  httpStatusCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      httpStatusCode: 'string',
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

export class CreateDISyncTaskRequest extends $tea.Model {
  clientToken?: string;
  projectId?: number;
  taskContent?: string;
  taskName?: string;
  taskParam?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      taskContent: 'TaskContent',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      taskContent: 'string',
      taskName: 'string',
      taskParam: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDISyncTaskResponseBody extends $tea.Model {
  data?: CreateDISyncTaskResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDISyncTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

export class CreateDagComplementRequest extends $tea.Model {
  bizBeginTime?: string;
  bizEndTime?: string;
  endBizDate?: string;
  excludeNodeIds?: string;
  includeNodeIds?: string;
  name?: string;
  nodeParams?: string;
  parallelism?: boolean;
  projectEnv?: string;
  rootNodeId?: number;
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizBeginTime: 'BizBeginTime',
      bizEndTime: 'BizEndTime',
      endBizDate: 'EndBizDate',
      excludeNodeIds: 'ExcludeNodeIds',
      includeNodeIds: 'IncludeNodeIds',
      name: 'Name',
      nodeParams: 'NodeParams',
      parallelism: 'Parallelism',
      projectEnv: 'ProjectEnv',
      rootNodeId: 'RootNodeId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizBeginTime: 'string',
      bizEndTime: 'string',
      endBizDate: 'string',
      excludeNodeIds: 'string',
      includeNodeIds: 'string',
      name: 'string',
      nodeParams: 'string',
      parallelism: 'boolean',
      projectEnv: 'string',
      rootNodeId: 'number',
      startBizDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagComplementResponseBody extends $tea.Model {
  data?: number[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  bizdate?: string;
  name?: string;
  nodeId?: number;
  nodeParams?: string;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      name: 'Name',
      nodeId: 'NodeId',
      nodeParams: 'NodeParams',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'string',
      name: 'string',
      nodeId: 'number',
      nodeParams: 'string',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagTestResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  apiDescription?: string;
  apiMode?: number;
  apiName?: string;
  apiPath?: string;
  folderId?: number;
  groupId?: string;
  projectId?: number;
  protocols?: string;
  registrationDetails?: string;
  requestMethod?: number;
  responseContentType?: number;
  scriptDetails?: string;
  tenantId?: number;
  timeout?: number;
  visibleRange?: number;
  wizardDetails?: string;
  static names(): { [key: string]: string } {
    return {
      apiDescription: 'ApiDescription',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      folderId: 'FolderId',
      groupId: 'GroupId',
      projectId: 'ProjectId',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      scriptDetails: 'ScriptDetails',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDescription: 'string',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      folderId: 'number',
      groupId: 'string',
      projectId: 'number',
      protocols: 'string',
      registrationDetails: 'string',
      requestMethod: 'number',
      responseContentType: 'number',
      scriptDetails: 'string',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      wizardDetails: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  apiId?: number;
  authorizedProjectId?: number;
  endTime?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      authorizedProjectId: 'AuthorizedProjectId',
      endTime: 'EndTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      authorizedProjectId: 'number',
      endTime: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiAuthorityResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
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
  folderName?: string;
  groupId?: string;
  parentId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      folderName: 'FolderName',
      groupId: 'GroupId',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderName: 'string',
      groupId: 'string',
      parentId: 'number',
      projectId: 'number',
      tenantId: 'number',
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
  apiGatewayGroupId?: string;
  description?: string;
  groupName?: string;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiGatewayGroupId: 'ApiGatewayGroupId',
      description: 'Description',
      groupName: 'GroupName',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGatewayGroupId: 'string',
      description: 'string',
      groupName: 'string',
      projectId: 'number',
      tenantId: 'number',
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
  content?: string;
  dataSourceType?: string;
  description?: string;
  envType?: number;
  name?: string;
  projectId?: number;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      envType: 'EnvType',
      name: 'Name',
      projectId: 'ProjectId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSourceType: 'string',
      description: 'string',
      envType: 'number',
      name: 'string',
      projectId: 'number',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  data?: number;
  httpStatusCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      httpStatusCode: 'string',
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

export class CreateExportMigrationRequest extends $tea.Model {
  description?: string;
  exportMode?: string;
  exportObjectStatus?: string;
  incrementalSince?: number;
  name?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      exportMode: 'ExportMode',
      exportObjectStatus: 'ExportObjectStatus',
      incrementalSince: 'IncrementalSince',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      exportMode: 'string',
      exportObjectStatus: 'string',
      incrementalSince: 'number',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExportMigrationResponseBody extends $tea.Model {
  data?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExportMigrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateExportMigrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateExportMigrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequest extends $tea.Model {
  advancedSettings?: string;
  autoParsing?: boolean;
  autoRerunIntervalMillis?: number;
  autoRerunTimes?: number;
  connectionName?: string;
  content?: string;
  cronExpress?: string;
  cycleType?: string;
  dependentNodeIdList?: string;
  dependentType?: string;
  endEffectDate?: number;
  fileDescription?: string;
  fileFolderPath?: string;
  fileName?: string;
  fileType?: number;
  inputList?: string;
  owner?: string;
  paraValue?: string;
  projectId?: number;
  projectIdentifier?: string;
  rerunMode?: string;
  resourceGroupId?: number;
  resourceGroupIdentifier?: string;
  schedulerType?: string;
  startEffectDate?: number;
  startImmediately?: boolean;
  stop?: boolean;
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      autoParsing: 'AutoParsing',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      connectionName: 'ConnectionName',
      content: 'Content',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      endEffectDate: 'EndEffectDate',
      fileDescription: 'FileDescription',
      fileFolderPath: 'FileFolderPath',
      fileName: 'FileName',
      fileType: 'FileType',
      inputList: 'InputList',
      owner: 'Owner',
      paraValue: 'ParaValue',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
      schedulerType: 'SchedulerType',
      startEffectDate: 'StartEffectDate',
      startImmediately: 'StartImmediately',
      stop: 'Stop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: 'string',
      autoParsing: 'boolean',
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      connectionName: 'string',
      content: 'string',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      endEffectDate: 'number',
      fileDescription: 'string',
      fileFolderPath: 'string',
      fileName: 'string',
      fileType: 'number',
      inputList: 'string',
      owner: 'string',
      paraValue: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      resourceGroupIdentifier: 'string',
      schedulerType: 'string',
      startEffectDate: 'number',
      startImmediately: 'boolean',
      stop: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  folderPath?: string;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      folderPath: 'FolderPath',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderPath: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBody extends $tea.Model {
  data?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  calculateEngineMap?: string;
  commitRule?: string;
  description?: string;
  name?: string;
  packageFile?: string;
  packageType?: string;
  projectId?: number;
  resourceGroupMap?: string;
  workspaceMap?: string;
  static names(): { [key: string]: string } {
    return {
      calculateEngineMap: 'CalculateEngineMap',
      commitRule: 'CommitRule',
      description: 'Description',
      name: 'Name',
      packageFile: 'PackageFile',
      packageType: 'PackageType',
      projectId: 'ProjectId',
      resourceGroupMap: 'ResourceGroupMap',
      workspaceMap: 'WorkspaceMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calculateEngineMap: 'string',
      commitRule: 'string',
      description: 'string',
      name: 'string',
      packageFile: 'string',
      packageType: 'string',
      projectId: 'number',
      resourceGroupMap: 'string',
      workspaceMap: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImportMigrationAdvanceRequest extends $tea.Model {
  packageFileObject: Readable;
  calculateEngineMap?: string;
  commitRule?: string;
  description?: string;
  name?: string;
  packageType?: string;
  projectId?: number;
  resourceGroupMap?: string;
  workspaceMap?: string;
  static names(): { [key: string]: string } {
    return {
      packageFileObject: 'PackageFileObject',
      calculateEngineMap: 'CalculateEngineMap',
      commitRule: 'CommitRule',
      description: 'Description',
      name: 'Name',
      packageType: 'PackageType',
      projectId: 'ProjectId',
      resourceGroupMap: 'ResourceGroupMap',
      workspaceMap: 'WorkspaceMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageFileObject: 'Readable',
      calculateEngineMap: 'string',
      commitRule: 'string',
      description: 'string',
      name: 'string',
      packageType: 'string',
      projectId: 'number',
      resourceGroupMap: 'string',
      workspaceMap: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImportMigrationResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  bizDate?: string;
  dagParameters?: string;
  excludeNodeIds?: string;
  flowName?: string;
  includeNodeIds?: string;
  nodeParameters?: string;
  projectEnv?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dagParameters: 'DagParameters',
      excludeNodeIds: 'ExcludeNodeIds',
      flowName: 'FlowName',
      includeNodeIds: 'IncludeNodeIds',
      nodeParameters: 'NodeParameters',
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dagParameters: 'string',
      excludeNodeIds: 'string',
      flowName: 'string',
      includeNodeIds: 'string',
      nodeParameters: 'string',
      projectEnv: 'string',
      projectName: 'string',
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
  comment?: string;
  name?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaCategoryResponseBody extends $tea.Model {
  data?: CreateMetaCategoryResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMetaCategoryResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  applyObject?: CreatePermissionApplyOrderRequestApplyObject[];
  applyReason?: string;
  applyUserIds?: string;
  deadline?: number;
  engineType?: string;
  maxComputeProjectName?: string;
  orderType?: number;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      applyObject: 'ApplyObject',
      applyReason: 'ApplyReason',
      applyUserIds: 'ApplyUserIds',
      deadline: 'Deadline',
      engineType: 'EngineType',
      maxComputeProjectName: 'MaxComputeProjectName',
      orderType: 'OrderType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyObject: { 'type': 'array', 'itemType': CreatePermissionApplyOrderRequestApplyObject },
      applyReason: 'string',
      applyUserIds: 'string',
      deadline: 'number',
      engineType: 'string',
      maxComputeProjectName: 'string',
      orderType: 'number',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionApplyOrderResponseBody extends $tea.Model {
  flowId?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
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
  clientToken?: string;
  projectId?: number;
  roleCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      roleCode: 'RoleCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      roleCode: 'string',
      userId: 'string',
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
  entityLevel?: number;
  envType?: string;
  matchExpression?: string;
  projectName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      entityLevel: 'EntityLevel',
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      projectName: 'ProjectName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityLevel: 'number',
      envType: 'string',
      matchExpression: 'string',
      projectName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityEntityResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  alarmMode?: number;
  entityId?: number;
  follower?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMode: 'AlarmMode',
      entityId: 'EntityId',
      follower: 'Follower',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMode: 'number',
      entityId: 'number',
      follower: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityFollowerResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  projectName?: string;
  tableName?: string;
  targetNodeProjectId?: number;
  targetNodeProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      tableName: 'TableName',
      targetNodeProjectId: 'TargetNodeProjectId',
      targetNodeProjectName: 'TargetNodeProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      nodeId: 'number',
      projectId: 'number',
      projectName: 'string',
      tableName: 'string',
      targetNodeProjectId: 'number',
      targetNodeProjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRelativeNodeResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  checker?: number;
  comment?: string;
  criticalThreshold?: string;
  entityId?: number;
  expectValue?: string;
  methodName?: string;
  operator?: string;
  predictType?: number;
  projectName?: string;
  property?: string;
  propertyType?: string;
  ruleName?: string;
  ruleType?: number;
  templateId?: number;
  trend?: string;
  warningThreshold?: string;
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      checker: 'Checker',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      methodName: 'MethodName',
      operator: 'Operator',
      predictType: 'PredictType',
      projectName: 'ProjectName',
      property: 'Property',
      propertyType: 'PropertyType',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      templateId: 'TemplateId',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      checker: 'number',
      comment: 'string',
      criticalThreshold: 'string',
      entityId: 'number',
      expectValue: 'string',
      methodName: 'string',
      operator: 'string',
      predictType: 'number',
      projectName: 'string',
      property: 'string',
      propertyType: 'string',
      ruleName: 'string',
      ruleType: 'number',
      templateId: 'number',
      trend: 'string',
      warningThreshold: 'string',
      whereCondition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponseBody extends $tea.Model {
  data?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  alertInterval?: number;
  alertMethods?: string;
  alertTargets?: string;
  alertUnit?: string;
  baselineIds?: string;
  bizProcessIds?: string;
  detail?: string;
  dndEnd?: string;
  maxAlertTimes?: number;
  nodeIds?: string;
  projectId?: number;
  remindName?: string;
  remindType?: string;
  remindUnit?: string;
  robotUrls?: string;
  static names(): { [key: string]: string } {
    return {
      alertInterval: 'AlertInterval',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      alertUnit: 'AlertUnit',
      baselineIds: 'BaselineIds',
      bizProcessIds: 'BizProcessIds',
      detail: 'Detail',
      dndEnd: 'DndEnd',
      maxAlertTimes: 'MaxAlertTimes',
      nodeIds: 'NodeIds',
      projectId: 'ProjectId',
      remindName: 'RemindName',
      remindType: 'RemindType',
      remindUnit: 'RemindUnit',
      robotUrls: 'RobotUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInterval: 'number',
      alertMethods: 'string',
      alertTargets: 'string',
      alertUnit: 'string',
      baselineIds: 'string',
      bizProcessIds: 'string',
      detail: 'string',
      dndEnd: 'string',
      maxAlertTimes: 'number',
      nodeIds: 'string',
      projectId: 'number',
      remindName: 'string',
      remindType: 'string',
      remindUnit: 'string',
      robotUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemindResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  appGuid?: string;
  categoryId?: number;
  clientToken?: string;
  columns?: CreateTableRequestColumns[];
  comment?: string;
  endpoint?: string;
  envType?: number;
  externalTableType?: string;
  hasPart?: number;
  isView?: number;
  lifeCycle?: number;
  location?: string;
  logicalLevelId?: number;
  ownerId?: string;
  physicsLevelId?: number;
  projectId?: number;
  tableName?: string;
  themes?: CreateTableRequestThemes[];
  visibility?: number;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      categoryId: 'CategoryId',
      clientToken: 'ClientToken',
      columns: 'Columns',
      comment: 'Comment',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      externalTableType: 'ExternalTableType',
      hasPart: 'HasPart',
      isView: 'IsView',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      logicalLevelId: 'LogicalLevelId',
      ownerId: 'OwnerId',
      physicsLevelId: 'PhysicsLevelId',
      projectId: 'ProjectId',
      tableName: 'TableName',
      themes: 'Themes',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      categoryId: 'number',
      clientToken: 'string',
      columns: { 'type': 'array', 'itemType': CreateTableRequestColumns },
      comment: 'string',
      endpoint: 'string',
      envType: 'number',
      externalTableType: 'string',
      hasPart: 'number',
      isView: 'number',
      lifeCycle: 'number',
      location: 'string',
      logicalLevelId: 'number',
      ownerId: 'string',
      physicsLevelId: 'number',
      projectId: 'number',
      tableName: 'string',
      themes: { 'type': 'array', 'itemType': CreateTableRequestThemes },
      visibility: 'number',
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
  description?: string;
  levelType?: number;
  name?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      levelType: 'LevelType',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      levelType: 'number',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableLevelResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  levelId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      levelId: 'LevelId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      levelId: 'number',
      requestId: 'string',
      success: 'boolean',
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
  level?: number;
  name?: string;
  parentId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      name: 'string',
      parentId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableThemeResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  className?: string;
  cmdDescription?: string;
  example?: string;
  fileFolderPath?: string;
  fileName?: string;
  functionType?: string;
  parameterDescription?: string;
  projectId?: number;
  projectIdentifier?: string;
  resources?: string;
  returnValue?: string;
  udfDescription?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'ClassName',
      cmdDescription: 'CmdDescription',
      example: 'Example',
      fileFolderPath: 'FileFolderPath',
      fileName: 'FileName',
      functionType: 'FunctionType',
      parameterDescription: 'ParameterDescription',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      resources: 'Resources',
      returnValue: 'ReturnValue',
      udfDescription: 'UdfDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      cmdDescription: 'string',
      example: 'string',
      fileFolderPath: 'string',
      fileName: 'string',
      functionType: 'string',
      parameterDescription: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      resources: 'string',
      returnValue: 'string',
      udfDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfFileResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class DeleteBusinessRequest extends $tea.Model {
  businessId?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  data?: boolean;
  httpStatusCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      httpStatusCode: 'string',
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

export class DeleteDISyncTaskRequest extends $tea.Model {
  fileId?: number;
  projectId?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDISyncTaskResponseBody extends $tea.Model {
  data?: DeleteDISyncTaskResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteDISyncTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

export class DeleteDataServiceApiRequest extends $tea.Model {
  apiId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  apiId?: number;
  authorizedProjectId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      authorizedProjectId: 'AuthorizedProjectId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      authorizedProjectId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiAuthorityResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
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
  data?: boolean;
  httpStatusCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      httpStatusCode: 'string',
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

export class DeleteFileRequest extends $tea.Model {
  fileId?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  deploymentId?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  folderId?: string;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  envType?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      envType: 'EnvType',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      envType: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityEntityResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  followerId?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      followerId: 'FollowerId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      followerId: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityFollowerResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  projectName?: string;
  tableName?: string;
  targetNodeProjectId?: number;
  targetNodeProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      tableName: 'TableName',
      targetNodeProjectId: 'TargetNodeProjectId',
      targetNodeProjectName: 'TargetNodeProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      nodeId: 'number',
      projectId: 'number',
      projectName: 'string',
      tableName: 'string',
      targetNodeProjectId: 'number',
      targetNodeProjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRelativeNodeResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  appGuid?: string;
  envType?: number;
  projectId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      envType: 'EnvType',
      projectId: 'ProjectId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      envType: 'number',
      projectId: 'number',
      tableName: 'string',
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
  projectId?: number;
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      themeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableThemeResponseBody extends $tea.Model {
  deleteResult?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteResult: 'DeleteResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteResult: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class DeployDISyncTaskRequest extends $tea.Model {
  fileId?: number;
  projectId?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDISyncTaskResponseBody extends $tea.Model {
  data?: DeployDISyncTaskResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployDISyncTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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
  comment?: string;
  fileId?: number;
  nodeId?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
      nodeId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFileResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  businessId?: string;
  folderId?: string;
  projectId?: number;
  projectIdentifier?: string;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      folderId: 'FolderId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      folderId: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstablishRelationTableToBusinessResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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

export class ExportDataSourcesRequest extends $tea.Model {
  dataSourceType?: string;
  envType?: number;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      envType: 'EnvType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      envType: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataSourcesResponseBody extends $tea.Model {
  data?: ExportDataSourcesResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExportDataSourcesResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class GenerateDISyncTaskConfigForCreatingRequest extends $tea.Model {
  clientToken?: string;
  projectId?: number;
  taskParam?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      taskParam: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDISyncTaskConfigForCreatingResponseBody extends $tea.Model {
  data?: GenerateDISyncTaskConfigForCreatingResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateDISyncTaskConfigForCreatingResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDISyncTaskConfigForCreatingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateDISyncTaskConfigForCreatingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateDISyncTaskConfigForCreatingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDISyncTaskConfigForUpdatingRequest extends $tea.Model {
  clientToken?: string;
  projectId?: number;
  taskId?: number;
  taskParam?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      taskId: 'TaskId',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      taskId: 'number',
      taskParam: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDISyncTaskConfigForUpdatingResponseBody extends $tea.Model {
  data?: GenerateDISyncTaskConfigForUpdatingResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateDISyncTaskConfigForUpdatingResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDISyncTaskConfigForUpdatingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateDISyncTaskConfigForUpdatingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateDISyncTaskConfigForUpdatingResponseBody,
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
  data?: GetBaselineConfigResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBaselineConfigResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetBaselineKeyPathResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetBaselineStatusResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBaselineStatusResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  businessId?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessResponseBody extends $tea.Model {
  data?: GetBusinessResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBusinessResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetDDLJobStatusResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDDLJobStatusResponseBodyData,
      requestId: 'string',
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

export class GetDISyncInstanceInfoRequest extends $tea.Model {
  fileId?: number;
  projectId?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBody extends $tea.Model {
  data?: GetDISyncInstanceInfoResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDISyncInstanceInfoResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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
  fileId?: number;
  projectId?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBody extends $tea.Model {
  data?: GetDISyncTaskResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDISyncTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

export class GetDISyncTaskMetricInfoRequest extends $tea.Model {
  endDate?: number;
  fileId?: number;
  projectId?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      fileId: 'FileId',
      projectId: 'ProjectId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      fileId: 'number',
      projectId: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskMetricInfoResponseBody extends $tea.Model {
  metricInfo?: GetDISyncTaskMetricInfoResponseBodyMetricInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      metricInfo: 'MetricInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricInfo: GetDISyncTaskMetricInfoResponseBodyMetricInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskMetricInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDISyncTaskMetricInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDISyncTaskMetricInfoResponseBody,
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
  data?: GetDagResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDagResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  apiId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBody extends $tea.Model {
  data?: GetDataServiceApiResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataServiceApiResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  applicationId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationResponseBody extends $tea.Model {
  data?: GetDataServiceApplicationResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataServiceApplicationResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  folderId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderResponseBody extends $tea.Model {
  folder?: GetDataServiceFolderResponseBodyFolder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: GetDataServiceFolderResponseBodyFolder,
      requestId: 'string',
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
  groupId?: string;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupResponseBody extends $tea.Model {
  group?: GetDataServiceGroupResponseBodyGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetDataServiceGroupResponseBodyGroup,
      requestId: 'string',
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
  apiId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBody extends $tea.Model {
  data?: GetDataServicePublishedApiResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataServicePublishedApiResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  datasourceName?: string;
  envType?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      envType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceMetaResponseBody extends $tea.Model {
  data?: GetDataSourceMetaResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataSourceMetaResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

export class GetDeploymentRequest extends $tea.Model {
  deploymentId?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $tea.Model {
  data?: GetDeploymentResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDeploymentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class GetFileRequest extends $tea.Model {
  fileId?: number;
  nodeId?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      nodeId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBody extends $tea.Model {
  data?: GetFileResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  projectEnv?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTypeStatisticResponseBody extends $tea.Model {
  programTypeAndCounts?: GetFileTypeStatisticResponseBodyProgramTypeAndCounts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      programTypeAndCounts: 'ProgramTypeAndCounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programTypeAndCounts: { 'type': 'array', 'itemType': GetFileTypeStatisticResponseBodyProgramTypeAndCounts },
      requestId: 'string',
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
  fileVersion?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileVersion: 'FileVersion',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      fileVersion: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileVersionResponseBody extends $tea.Model {
  data?: GetFileVersionResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileVersionResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  folderId?: string;
  folderPath?: string;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBody extends $tea.Model {
  data?: GetFolderResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFolderResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class GetIDEEventDetailRequest extends $tea.Model {
  messageId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBody extends $tea.Model {
  eventDetail?: GetIDEEventDetailResponseBodyEventDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDetail: 'EventDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetail: GetIDEEventDetailResponseBodyEventDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIDEEventDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIDEEventDetailResponseBody,
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
  data?: GetInstanceResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  bizdate?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseBody extends $tea.Model {
  instanceConsumeTimeRank?: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConsumeTimeRank: 'InstanceConsumeTimeRank',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConsumeTimeRank: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank,
      requestId: 'string',
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
  beginDate?: string;
  endDate?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendResponseBody extends $tea.Model {
  instanceCounts?: GetInstanceCountTrendResponseBodyInstanceCounts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCounts: 'InstanceCounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCounts: { 'type': 'array', 'itemType': GetInstanceCountTrendResponseBodyInstanceCounts },
      requestId: 'string',
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
  instanceErrorRank?: GetInstanceErrorRankResponseBodyInstanceErrorRank;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceErrorRank: 'InstanceErrorRank',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceErrorRank: GetInstanceErrorRankResponseBodyInstanceErrorRank,
      requestId: 'string',
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
  data?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  bizDate?: string;
  projectEnv?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      projectEnv: 'string',
      projectId: 'number',
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
  bizDate?: string;
  dagType?: string;
  projectEnv?: string;
  projectId?: number;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dagType: 'DagType',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dagType: 'string',
      projectEnv: 'string',
      projectId: 'number',
      schedulerType: 'string',
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
  dagId?: string;
  projectEnv?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'string',
      projectEnv: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManualDagInstancesResponseBody extends $tea.Model {
  instances?: GetManualDagInstancesResponseBodyInstances[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': GetManualDagInstancesResponseBodyInstances },
      requestId: 'string',
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
  pageNum?: number;
  pageSize?: number;
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      parentCategoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseBody extends $tea.Model {
  data?: GetMetaCategoryResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaCategoryResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  clusterId?: string;
  columnGuid?: string;
  columnName?: string;
  dataSourceType?: string;
  databaseName?: string;
  direction?: string;
  pageNum?: number;
  pageSize?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      direction: 'Direction',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnGuid: 'string',
      columnName: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      direction: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseBody extends $tea.Model {
  data?: GetMetaColumnLineageResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaColumnLineageResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  dataSourceType?: string;
  databaseName?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoResponseBody extends $tea.Model {
  data?: GetMetaDBInfoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaDBInfoResponseBodyData,
      requestId: 'string',
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
  appGuid?: string;
  clusterId?: string;
  dataSourceType?: string;
  databaseName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponseBody extends $tea.Model {
  data?: GetMetaDBTableListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaDBTableListResponseBodyData,
      requestId: 'string',
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
  clusterId?: string;
  dataSourceType?: string;
  databaseName?: string;
  extension?: boolean;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      extension: 'Extension',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      extension: 'boolean',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoResponseBody extends $tea.Model {
  data?: GetMetaTableBasicInfoResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableBasicInfoResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  changeType?: string;
  endDate?: string;
  objectType?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      endDate: 'EndDate',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      endDate: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseBody extends $tea.Model {
  data?: GetMetaTableChangeLogResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableChangeLogResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  clusterId?: string;
  dataSourceType?: string;
  databaseName?: string;
  pageNum?: number;
  pageSize?: number;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBody extends $tea.Model {
  data?: GetMetaTableColumnResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableColumnResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  clusterId?: string;
  dataSourceType?: string;
  databaseName?: string;
  pageNum?: number;
  pageSize?: number;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseBody extends $tea.Model {
  data?: GetMetaTableFullInfoResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableFullInfoResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetMetaTableIntroWikiResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableIntroWikiResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  clusterId?: string;
  dataSourceType?: string;
  databaseName?: string;
  direction?: string;
  nextPrimaryKey?: string;
  pageSize?: number;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      direction: 'Direction',
      nextPrimaryKey: 'NextPrimaryKey',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      direction: 'string',
      nextPrimaryKey: 'string',
      pageSize: 'number',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponseBody extends $tea.Model {
  data?: GetMetaTableLineageResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableLineageResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  categoryId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryResponseBody extends $tea.Model {
  data?: GetMetaTableListByCategoryResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableListByCategoryResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  endDate?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseBody extends $tea.Model {
  data?: GetMetaTableOutputResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableOutputResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  clusterId?: string;
  dataSourceType?: string;
  databaseName?: string;
  pageNumber?: number;
  pageSize?: number;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseBody extends $tea.Model {
  data?: GetMetaTablePartitionResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTablePartitionResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  dataSourceType?: string;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBody extends $tea.Model {
  entity?: GetMetaTableThemeLevelResponseBodyEntity;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      entity: 'Entity',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entity: GetMetaTableThemeLevelResponseBodyEntity,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  migrationId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      migrationId: 'MigrationId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationProcessResponseBody extends $tea.Model {
  data?: GetMigrationProcessResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetMigrationProcessResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class GetMigrationSummaryRequest extends $tea.Model {
  migrationId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      migrationId: 'MigrationId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationSummaryResponseBody extends $tea.Model {
  data?: GetMigrationSummaryResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMigrationSummaryResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMigrationSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMigrationSummaryResponseBody,
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
  data?: GetNodeResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNodeResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class GetNodeChildrenResponseBody extends $tea.Model {
  data?: GetNodeChildrenResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNodeChildrenResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetNodeOnBaselineResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetNodeOnBaselineResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'string',
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

export class GetNodeParentsResponseBody extends $tea.Model {
  data?: GetNodeParentsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNodeParentsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  keyword?: string;
  locale?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      locale: 'Locale',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      locale: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseBody extends $tea.Model {
  nodeTypeInfoList?: GetNodeTypeListInfoResponseBodyNodeTypeInfoList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeTypeInfoList: 'NodeTypeInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypeInfoList: GetNodeTypeListInfoResponseBodyNodeTypeInfoList,
      requestId: 'string',
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
  date?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      riskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpRiskDataResponseBody extends $tea.Model {
  requestId?: string;
  riskData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskData: 'RiskData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskData: 'string',
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
  date?: string;
  name?: string;
  opType?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      name: 'Name',
      opType: 'OpType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      name: 'string',
      opType: 'string',
      pageNo: 'number',
      pageSize: 'number',
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
  applyOrderDetail?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyOrderDetail: 'ApplyOrderDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyOrderDetail: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail,
      requestId: 'string',
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
  data?: GetProjectResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProjectResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetProjectDetailResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProjectDetailResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  envType?: string;
  matchExpression?: string;
  projectName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      projectName: 'ProjectName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      projectName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityResponseBody extends $tea.Model {
  data?: GetQualityEntityResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetQualityEntityResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  entityId?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerResponseBody extends $tea.Model {
  data?: GetQualityFollowerResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetQualityFollowerResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class GetQualityRuleResponseBody extends $tea.Model {
  data?: GetQualityRuleResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetQualityRuleResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetRemindResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRemindResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  name?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveDataResponseBody extends $tea.Model {
  requestId?: string;
  sensitiveData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sensitiveData: 'SensitiveData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sensitiveData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
  instanceStatusTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrend;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusTrend: 'InstanceStatusTrend',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusTrend: GetSuccessInstanceTrendResponseBodyInstanceStatusTrend,
      requestId: 'string',
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
  data?: GetTopicResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTopicResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetTopicInfluenceResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTopicInfluenceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class ImportDataSourcesRequest extends $tea.Model {
  dataSources?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourcesResponseBody extends $tea.Model {
  data?: ImportDataSourcesResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ImportDataSourcesResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

export class ListAlertMessagesRequest extends $tea.Model {
  alertMethods?: string;
  alertRuleTypes?: string;
  alertUser?: string;
  beginTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  remindId?: number;
  static names(): { [key: string]: string } {
    return {
      alertMethods: 'AlertMethods',
      alertRuleTypes: 'AlertRuleTypes',
      alertUser: 'AlertUser',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remindId: 'RemindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertMethods: 'string',
      alertRuleTypes: 'string',
      alertUser: 'string',
      beginTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remindId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBody extends $tea.Model {
  data?: ListAlertMessagesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAlertMessagesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  baselineTypes?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  priority?: string;
  projectId?: number;
  searchText?: string;
  useflag?: boolean;
  static names(): { [key: string]: string } {
    return {
      baselineTypes: 'BaselineTypes',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      priority: 'Priority',
      projectId: 'ProjectId',
      searchText: 'SearchText',
      useflag: 'Useflag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineTypes: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      priority: 'string',
      projectId: 'number',
      searchText: 'string',
      useflag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseBody extends $tea.Model {
  data?: ListBaselineConfigsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListBaselineConfigsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  baselineTypes?: string;
  bizdate?: string;
  finishStatus?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  priority?: string;
  searchText?: string;
  status?: string;
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineTypes: 'BaselineTypes',
      bizdate: 'Bizdate',
      finishStatus: 'FinishStatus',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      priority: 'Priority',
      searchText: 'SearchText',
      status: 'Status',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineTypes: 'string',
      bizdate: 'string',
      finishStatus: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      priority: 'string',
      searchText: 'string',
      status: 'string',
      topicId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseBody extends $tea.Model {
  data?: ListBaselineStatusesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListBaselineStatusesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseBody extends $tea.Model {
  data?: ListBusinessResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListBusinessResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  calcEngineType?: string;
  envType?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      calcEngineType: 'CalcEngineType',
      envType: 'EnvType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcEngineType: 'string',
      envType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseBody extends $tea.Model {
  data?: ListCalcEnginesResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCalcEnginesResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  connectionType?: string;
  envType?: number;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  status?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      envType: 'EnvType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      envType: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      status: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBody extends $tea.Model {
  data?: ListConnectionsResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListConnectionsResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class ListDIProjectConfigRequest extends $tea.Model {
  destinationType?: string;
  projectId?: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationType: 'DestinationType',
      projectId: 'ProjectId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationType: 'string',
      projectId: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIProjectConfigResponseBody extends $tea.Model {
  data?: ListDIProjectConfigResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDIProjectConfigResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

export class ListDagsRequest extends $tea.Model {
  opSeq?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      opSeq: 'OpSeq',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opSeq: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDagsResponseBody extends $tea.Model {
  data?: ListDagsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDagsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesRequest extends $tea.Model {
  apiNameKeyword?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiNameKeyword: 'ApiNameKeyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNameKeyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBody extends $tea.Model {
  data?: ListDataServiceApiAuthoritiesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataServiceApiAuthoritiesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  apiNameKeyword?: string;
  apiPathKeyword?: string;
  creatorId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiNameKeyword: 'ApiNameKeyword',
      apiPathKeyword: 'ApiPathKeyword',
      creatorId: 'CreatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNameKeyword: 'string',
      apiPathKeyword: 'string',
      creatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBody extends $tea.Model {
  data?: ListDataServiceApisResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataServiceApisResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: ListDataServiceApplicationsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataServiceApplicationsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  apiNameKeyword?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiNameKeyword: 'ApiNameKeyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNameKeyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseBody extends $tea.Model {
  data?: ListDataServiceAuthorizedApisResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataServiceAuthorizedApisResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  folderNameKeyword?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      folderNameKeyword: 'FolderNameKeyword',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderNameKeyword: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseBody extends $tea.Model {
  folderPagingResult?: ListDataServiceFoldersResponseBodyFolderPagingResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folderPagingResult: 'FolderPagingResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderPagingResult: ListDataServiceFoldersResponseBodyFolderPagingResult,
      requestId: 'string',
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
  groupNameKeyword?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      groupNameKeyword: 'GroupNameKeyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNameKeyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseBody extends $tea.Model {
  groupPagingResult?: ListDataServiceGroupsResponseBodyGroupPagingResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupPagingResult: 'GroupPagingResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPagingResult: ListDataServiceGroupsResponseBodyGroupPagingResult,
      requestId: 'string',
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
  apiNameKeyword?: string;
  apiPathKeyword?: string;
  creatorId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiNameKeyword: 'ApiNameKeyword',
      apiPathKeyword: 'ApiPathKeyword',
      creatorId: 'CreatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNameKeyword: 'string',
      apiPathKeyword: 'string',
      creatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBody extends $tea.Model {
  data?: ListDataServicePublishedApisResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataServicePublishedApisResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  dataSourceType?: string;
  envType?: number;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  status?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      envType: 'EnvType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      envType: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      status: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $tea.Model {
  data?: ListDataSourcesResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataSourcesResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class ListDeploymentsRequest extends $tea.Model {
  creator?: string;
  endCreateTime?: number;
  endExecuteTime?: number;
  executor?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  projectIdentifier?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      endCreateTime: 'EndCreateTime',
      endExecuteTime: 'EndExecuteTime',
      executor: 'Executor',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      endCreateTime: 'number',
      endExecuteTime: 'number',
      executor: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBody extends $tea.Model {
  data?: ListDeploymentsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDeploymentsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeploymentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeploymentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeRequest extends $tea.Model {
  keyword?: string;
  locale?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      locale: 'Locale',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      locale: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeResponseBody extends $tea.Model {
  nodeTypeInfoList?: ListFileTypeResponseBodyNodeTypeInfoList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeTypeInfoList: 'NodeTypeInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypeInfoList: ListFileTypeResponseBodyNodeTypeInfoList,
      requestId: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseBody extends $tea.Model {
  data?: ListFileVersionsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFileVersionsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class ListFilesRequest extends $tea.Model {
  fileFolderPath?: string;
  fileTypes?: string;
  keyword?: string;
  nodeId?: number;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  projectIdentifier?: string;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      fileTypes: 'FileTypes',
      keyword: 'Keyword',
      nodeId: 'NodeId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      fileTypes: 'string',
      keyword: 'string',
      nodeId: 'number',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBody extends $tea.Model {
  data?: ListFilesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFilesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class ListFoldersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  parentFolderPath?: string;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderPath: 'ParentFolderPath',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderPath: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseBody extends $tea.Model {
  data?: ListFoldersResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFoldersResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  beginDate?: string;
  endDate?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAmountResponseBody extends $tea.Model {
  instanceCounts?: ListInstanceAmountResponseBodyInstanceCounts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCounts: 'InstanceCounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCounts: { 'type': 'array', 'itemType': ListInstanceAmountResponseBodyInstanceCounts },
      requestId: 'string',
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
  beginBizdate?: string;
  bizName?: string;
  bizdate?: string;
  dagId?: number;
  endBizdate?: string;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  programType?: string;
  projectEnv?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      beginBizdate: 'BeginBizdate',
      bizName: 'BizName',
      bizdate: 'Bizdate',
      dagId: 'DagId',
      endBizdate: 'EndBizdate',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      programType: 'ProgramType',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBizdate: 'string',
      bizName: 'string',
      bizdate: 'string',
      dagId: 'number',
      endBizdate: 'string',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      programType: 'string',
      projectEnv: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  data?: ListInstancesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListInstancesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  dagId?: string;
  projectEnv?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'string',
      projectEnv: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualDagInstancesResponseBody extends $tea.Model {
  instances?: ListManualDagInstancesResponseBodyInstances[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListManualDagInstancesResponseBodyInstances },
      requestId: 'string',
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
  clusterId?: string;
  dataSourceType?: string;
  pageNum?: number;
  pageSize?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseBody extends $tea.Model {
  databaseInfo?: ListMetaDBResponseBodyDatabaseInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInfo: 'DatabaseInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInfo: ListMetaDBResponseBodyDatabaseInfo,
      requestId: 'string',
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

export class ListNodeIORequest extends $tea.Model {
  ioType?: string;
  nodeId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      ioType: 'IoType',
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioType: 'string',
      nodeId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIOResponseBody extends $tea.Model {
  data?: ListNodeIOResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodeIOResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class ListNodeInputOrOutputRequest extends $tea.Model {
  ioType?: string;
  nodeId?: number;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      ioType: 'IoType',
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioType: 'string',
      nodeId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInputOrOutputResponseBody extends $tea.Model {
  data?: ListNodeInputOrOutputResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodeInputOrOutputResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class ListNodesRequest extends $tea.Model {
  bizName?: string;
  nodeName?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  programType?: string;
  projectEnv?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      nodeName: 'NodeName',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      programType: 'ProgramType',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      nodeName: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      programType: 'string',
      projectEnv: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  data?: ListNodesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListNodesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: ListNodesByBaselineResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodesByBaselineResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'string',
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
  outputs?: string;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputResponseBody extends $tea.Model {
  data?: ListNodesByOutputResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodesByOutputResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  endTime?: number;
  engineType?: string;
  flowStatus?: number;
  maxComputeProjectName?: string;
  orderType?: number;
  pageNum?: number;
  pageSize?: number;
  queryType?: number;
  startTime?: number;
  tableName?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      engineType: 'EngineType',
      flowStatus: 'FlowStatus',
      maxComputeProjectName: 'MaxComputeProjectName',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      startTime: 'StartTime',
      tableName: 'TableName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      engineType: 'string',
      flowStatus: 'number',
      maxComputeProjectName: 'string',
      orderType: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'number',
      startTime: 'number',
      tableName: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBody extends $tea.Model {
  applyOrders?: ListPermissionApplyOrdersResponseBodyApplyOrders;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyOrders: 'ApplyOrders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyOrders: ListPermissionApplyOrdersResponseBodyApplyOrders,
      requestId: 'string',
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
  projectEnv?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountResponseBody extends $tea.Model {
  programTypeAndCounts?: ListProgramTypeCountResponseBodyProgramTypeAndCounts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      programTypeAndCounts: 'ProgramTypeAndCounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programTypeAndCounts: { 'type': 'array', 'itemType': ListProgramTypeCountResponseBodyProgramTypeAndCounts },
      requestId: 'string',
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
  projectIds?: number[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBody extends $tea.Model {
  data?: ListProjectMembersResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectMembersResponseBodyData,
      requestId: 'string',
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
  projectRoleList?: ListProjectRolesResponseBodyProjectRoleList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleList: 'ProjectRoleList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleList: { 'type': 'array', 'itemType': ListProjectRolesResponseBodyProjectRoleList },
      requestId: 'string',
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
  pageResult?: ListProjectsResponseBodyPageResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageResult: 'PageResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageResult: ListProjectsResponseBodyPageResult,
      requestId: 'string',
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
  endDate?: string;
  entityId?: number;
  pageNumber?: number;
  pageSize?: number;
  projectName?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      entityId: 'EntityId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      entityId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBody extends $tea.Model {
  data?: ListQualityResultsByEntityResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQualityResultsByEntityResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  endDate?: string;
  pageNumber?: number;
  pageSize?: number;
  projectName?: string;
  ruleId?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      ruleId: 'RuleId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
      ruleId: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBody extends $tea.Model {
  data?: ListQualityResultsByRuleResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQualityResultsByRuleResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  entityId?: number;
  pageNumber?: number;
  pageSize?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBody extends $tea.Model {
  data?: ListQualityRulesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQualityRulesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  datasourceName?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  refType?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceName: 'DatasourceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      refType: 'RefType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      refType: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRefDISyncTasksResponseBody extends $tea.Model {
  data?: ListRefDISyncTasksResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListRefDISyncTasksResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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
  alertTarget?: string;
  founder?: string;
  nodeId?: number;
  pageNumber?: number;
  pageSize?: number;
  remindTypes?: string;
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      alertTarget: 'AlertTarget',
      founder: 'Founder',
      nodeId: 'NodeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remindTypes: 'RemindTypes',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTarget: 'string',
      founder: 'string',
      nodeId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      remindTypes: 'string',
      searchText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseBody extends $tea.Model {
  data?: ListRemindsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListRemindsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  bizExtKey?: string;
  keyword?: string;
  resourceGroupType?: number;
  static names(): { [key: string]: string } {
    return {
      bizExtKey: 'BizExtKey',
      keyword: 'Keyword',
      resourceGroupType: 'ResourceGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizExtKey: 'string',
      keyword: 'string',
      resourceGroupType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $tea.Model {
  data?: ListResourceGroupsResponseBodyData[];
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyData },
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  instanceStatusTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrend;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusTrend: 'InstanceStatusTrend',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusTrend: ListSuccessInstanceAmountResponseBodyInstanceStatusTrend,
      requestId: 'string',
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
  levelType?: number;
  pageNum?: number;
  pageSize?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      levelType: 'LevelType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelType: 'number',
      pageNum: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  tableLevelInfo?: ListTableLevelResponseBodyTableLevelInfo;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      tableLevelInfo: 'TableLevelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  pageNum?: number;
  pageSize?: number;
  parentId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      parentId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseBody extends $tea.Model {
  data?: ListTableThemeResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTableThemeResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  instanceId?: number;
  nodeId?: number;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  topicStatuses?: string;
  topicTypes?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      topicStatuses: 'TopicStatuses',
      topicTypes: 'TopicTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      instanceId: 'number',
      nodeId: 'number',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      topicStatuses: 'string',
      topicTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBody extends $tea.Model {
  data?: ListTopicsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTopicsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  apiId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDataServiceApiResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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

export class QueryDISyncTaskConfigProcessResultRequest extends $tea.Model {
  asyncProcessId?: number;
  projectId?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      asyncProcessId: 'AsyncProcessId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncProcessId: 'number',
      projectId: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDISyncTaskConfigProcessResultResponseBody extends $tea.Model {
  data?: QueryDISyncTaskConfigProcessResultResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryDISyncTaskConfigProcessResultResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDISyncTaskConfigProcessResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDISyncTaskConfigProcessResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDISyncTaskConfigProcessResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPublicModelEngineRequest extends $tea.Model {
  projectId?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      text: 'string',
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
  roleCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCode: 'RoleCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCode: 'string',
      userId: 'string',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  columns?: string;
  maxComputeProjectName?: string;
  revokeUserId?: string;
  revokeUserName?: string;
  tableName?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      maxComputeProjectName: 'MaxComputeProjectName',
      revokeUserId: 'RevokeUserId',
      revokeUserName: 'RevokeUserName',
      tableName: 'TableName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: 'string',
      maxComputeProjectName: 'string',
      revokeUserId: 'string',
      revokeUserName: 'string',
      tableName: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeColumnPermissionResponseBody extends $tea.Model {
  requestId?: string;
  revokeSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      revokeSuccess: 'RevokeSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      revokeSuccess: 'boolean',
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
  actions?: string;
  maxComputeProjectName?: string;
  revokeUserId?: string;
  revokeUserName?: string;
  tableName?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      maxComputeProjectName: 'MaxComputeProjectName',
      revokeUserId: 'RevokeUserId',
      revokeUserName: 'RevokeUserName',
      tableName: 'TableName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      maxComputeProjectName: 'string',
      revokeUserId: 'string',
      revokeUserName: 'string',
      tableName: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTablePermissionResponseBody extends $tea.Model {
  requestId?: string;
  revokeSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      revokeSuccess: 'RevokeSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      revokeSuccess: 'boolean',
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
  bizBeginTime?: string;
  bizEndTime?: string;
  endBizDate?: string;
  excludeNodeIds?: string;
  includeNodeIds?: string;
  name?: string;
  nodeParams?: string;
  parallelism?: boolean;
  projectEnv?: string;
  rootNodeId?: number;
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizBeginTime: 'BizBeginTime',
      bizEndTime: 'BizEndTime',
      endBizDate: 'EndBizDate',
      excludeNodeIds: 'ExcludeNodeIds',
      includeNodeIds: 'IncludeNodeIds',
      name: 'Name',
      nodeParams: 'NodeParams',
      parallelism: 'Parallelism',
      projectEnv: 'ProjectEnv',
      rootNodeId: 'RootNodeId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizBeginTime: 'string',
      bizEndTime: 'string',
      endBizDate: 'string',
      excludeNodeIds: 'string',
      includeNodeIds: 'string',
      name: 'string',
      nodeParams: 'string',
      parallelism: 'boolean',
      projectEnv: 'string',
      rootNodeId: 'number',
      startBizDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCycleDagNodesResponseBody extends $tea.Model {
  data?: number[];
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  bizDate?: string;
  dagParameters?: string;
  excludeNodeIds?: string;
  flowName?: string;
  includeNodeIds?: string;
  nodeParameters?: string;
  projectEnv?: string;
  projectId?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dagParameters: 'DagParameters',
      excludeNodeIds: 'ExcludeNodeIds',
      flowName: 'FlowName',
      includeNodeIds: 'IncludeNodeIds',
      nodeParameters: 'NodeParameters',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dagParameters: 'string',
      excludeNodeIds: 'string',
      flowName: 'string',
      includeNodeIds: 'string',
      nodeParameters: 'string',
      projectEnv: 'string',
      projectId: 'number',
      projectName: 'string',
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
  bizdate?: string;
  name?: string;
  nodeId?: number;
  nodeParams?: string;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      name: 'Name',
      nodeId: 'NodeId',
      nodeParams: 'NodeParams',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'string',
      name: 'string',
      nodeId: 'number',
      nodeParams: 'string',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSmokeTestResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  appId?: number;
  bizDate?: number;
  cycleTime?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizDate: 'BizDate',
      cycleTime: 'CycleTime',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bizDate: 'number',
      cycleTime: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTriggerNodeResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
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
  requestId?: string;
  sensitives?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sensitives: 'Sensitives',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sensitives: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
  appGuid?: string;
  clusterId?: string;
  dataSourceType?: string;
  entityType?: number;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      entityType: 'EntityType',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterId: 'string',
      dataSourceType: 'string',
      entityType: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseBody extends $tea.Model {
  data?: SearchMetaTablesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SearchMetaTablesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  outputs?: string;
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNodesByOutputResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

export class SetDataSourceShareRequest extends $tea.Model {
  datasourceName?: string;
  envType?: string;
  projectId?: number;
  projectPermissions?: string;
  userPermissions?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      projectId: 'ProjectId',
      projectPermissions: 'ProjectPermissions',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      envType: 'string',
      projectId: 'number',
      projectPermissions: 'string',
      userPermissions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataSourceShareResponseBody extends $tea.Model {
  data?: SetDataSourceShareResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SetDataSourceShareResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  fileId?: number;
  projectId?: number;
  startParam?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      startParam: 'StartParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      startParam: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDISyncInstanceResponseBody extends $tea.Model {
  data?: StartDISyncInstanceResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartDISyncInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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
  migrationId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      migrationId: 'MigrationId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMigrationResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  fileId?: number;
  projectId?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDISyncInstanceResponseBody extends $tea.Model {
  data?: StopDISyncInstanceResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StopDISyncInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  comment?: string;
  fileId?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFileResponseBody extends $tea.Model {
  data?: number;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  fileId?: number;
  projectId?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateDISyncInstanceResponseBody extends $tea.Model {
  data?: TerminateDISyncInstanceResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TerminateDISyncInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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
  datasourceName?: string;
  envType?: string;
  projectId?: number;
  resourceGroup?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      projectId: 'ProjectId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      envType: 'string',
      projectId: 'number',
      resourceGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestNetworkConnectionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskList?: TestNetworkConnectionResponseBodyTaskList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
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
  instanceConsumeTimeRank?: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConsumeTimeRank: 'InstanceConsumeTimeRank',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConsumeTimeRank: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank,
      requestId: 'string',
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
  instanceErrorRank?: TopTenErrorTimesInstanceResponseBodyInstanceErrorRank;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceErrorRank: 'InstanceErrorRank',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceErrorRank: TopTenErrorTimesInstanceResponseBodyInstanceErrorRank,
      requestId: 'string',
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
  businessId?: number;
  businessName?: string;
  description?: string;
  owner?: string;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  connectionId?: number;
  content?: string;
  description?: string;
  envType?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      content: 'Content',
      description: 'Description',
      envType: 'EnvType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      content: 'string',
      description: 'string',
      envType: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionResponseBody extends $tea.Model {
  data?: boolean;
  httpStatusCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      httpStatusCode: 'string',
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

export class UpdateDIProjectConfigRequest extends $tea.Model {
  destinationType?: string;
  projectConfig?: string;
  projectId?: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationType: 'DestinationType',
      projectConfig: 'ProjectConfig',
      projectId: 'ProjectId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationType: 'string',
      projectConfig: 'string',
      projectId: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIProjectConfigResponseBody extends $tea.Model {
  data?: UpdateDIProjectConfigResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateDIProjectConfigResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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
  fileId?: number;
  projectId?: number;
  taskContent?: string;
  taskParam?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskContent: 'TaskContent',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskContent: 'string',
      taskParam: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDISyncTaskResponseBody extends $tea.Model {
  data?: UpdateDISyncTaskResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateDISyncTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

export class UpdateDataServiceApiRequest extends $tea.Model {
  apiDescription?: string;
  apiId?: number;
  apiPath?: string;
  projectId?: number;
  protocols?: string;
  registrationDetails?: string;
  requestMethod?: number;
  responseContentType?: number;
  scriptDetails?: string;
  tenantId?: number;
  timeout?: number;
  visibleRange?: number;
  wizardDetails?: string;
  static names(): { [key: string]: string } {
    return {
      apiDescription: 'ApiDescription',
      apiId: 'ApiId',
      apiPath: 'ApiPath',
      projectId: 'ProjectId',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      scriptDetails: 'ScriptDetails',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDescription: 'string',
      apiId: 'number',
      apiPath: 'string',
      projectId: 'number',
      protocols: 'string',
      registrationDetails: 'string',
      requestMethod: 'number',
      responseContentType: 'number',
      scriptDetails: 'string',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      wizardDetails: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataServiceApiResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  content?: string;
  dataSourceId?: number;
  description?: string;
  envType?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataSourceId: 'DataSourceId',
      description: 'Description',
      envType: 'EnvType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSourceId: 'number',
      description: 'string',
      envType: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceResponseBody extends $tea.Model {
  data?: boolean;
  httpStatusCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      httpStatusCode: 'string',
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

export class UpdateFileRequest extends $tea.Model {
  advancedSettings?: string;
  autoParsing?: boolean;
  autoRerunIntervalMillis?: number;
  autoRerunTimes?: number;
  connectionName?: string;
  content?: string;
  cronExpress?: string;
  cycleType?: string;
  dependentNodeIdList?: string;
  dependentType?: string;
  endEffectDate?: number;
  fileDescription?: string;
  fileFolderPath?: string;
  fileId?: number;
  fileName?: string;
  inputList?: string;
  outputList?: string;
  owner?: string;
  paraValue?: string;
  projectId?: number;
  projectIdentifier?: string;
  rerunMode?: string;
  resourceGroupIdentifier?: string;
  schedulerType?: string;
  startEffectDate?: number;
  startImmediately?: boolean;
  stop?: boolean;
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      autoParsing: 'AutoParsing',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      connectionName: 'ConnectionName',
      content: 'Content',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      endEffectDate: 'EndEffectDate',
      fileDescription: 'FileDescription',
      fileFolderPath: 'FileFolderPath',
      fileId: 'FileId',
      fileName: 'FileName',
      inputList: 'InputList',
      outputList: 'OutputList',
      owner: 'Owner',
      paraValue: 'ParaValue',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      rerunMode: 'RerunMode',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
      schedulerType: 'SchedulerType',
      startEffectDate: 'StartEffectDate',
      startImmediately: 'StartImmediately',
      stop: 'Stop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: 'string',
      autoParsing: 'boolean',
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      connectionName: 'string',
      content: 'string',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      endEffectDate: 'number',
      fileDescription: 'string',
      fileFolderPath: 'string',
      fileId: 'number',
      fileName: 'string',
      inputList: 'string',
      outputList: 'string',
      owner: 'string',
      paraValue: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      rerunMode: 'string',
      resourceGroupIdentifier: 'string',
      schedulerType: 'string',
      startEffectDate: 'number',
      startImmediately: 'boolean',
      stop: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  folderId?: string;
  folderName?: string;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderName: 'FolderName',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderName: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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

export class UpdateIDEEventResultRequest extends $tea.Model {
  checkResult?: string;
  checkResultTip?: string;
  extensionCode?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      checkResultTip: 'CheckResultTip',
      extensionCode: 'ExtensionCode',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'string',
      checkResultTip: 'string',
      extensionCode: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIDEEventResultResponseBody extends $tea.Model {
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

export class UpdateIDEEventResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIDEEventResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIDEEventResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaCategoryRequest extends $tea.Model {
  categoryId?: number;
  comment?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      comment: 'Comment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      comment: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaCategoryResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  addedLabels?: string;
  caption?: string;
  categoryId?: number;
  envType?: number;
  newOwnerId?: string;
  projectId?: number;
  removedLabels?: string;
  tableGuid?: string;
  tableName?: string;
  visibility?: number;
  static names(): { [key: string]: string } {
    return {
      addedLabels: 'AddedLabels',
      caption: 'Caption',
      categoryId: 'CategoryId',
      envType: 'EnvType',
      newOwnerId: 'NewOwnerId',
      projectId: 'ProjectId',
      removedLabels: 'RemovedLabels',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedLabels: 'string',
      caption: 'string',
      categoryId: 'number',
      envType: 'number',
      newOwnerId: 'string',
      projectId: 'number',
      removedLabels: 'string',
      tableGuid: 'string',
      tableName: 'string',
      visibility: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableResponseBody extends $tea.Model {
  requestId?: string;
  updateResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: 'boolean',
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
  content?: string;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableIntroWikiResponseBody extends $tea.Model {
  requestId?: string;
  updateResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: 'boolean',
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
  nodeId?: number;
  projectEnv?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeOwnerResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
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
  nodeId?: number;
  projectEnv?: string;
  schedulerType?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
      schedulerType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeRunModeResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
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
  alarmMode?: number;
  follower?: string;
  followerId?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMode: 'AlarmMode',
      follower: 'Follower',
      followerId: 'FollowerId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMode: 'number',
      follower: 'string',
      followerId: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityFollowerResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  checker?: number;
  comment?: string;
  criticalThreshold?: string;
  entityId?: number;
  expectValue?: string;
  id?: number;
  methodName?: string;
  openSwitch?: boolean;
  operator?: string;
  predictType?: number;
  projectName?: string;
  property?: string;
  propertyType?: string;
  ruleName?: string;
  ruleType?: number;
  templateId?: number;
  trend?: string;
  warningThreshold?: string;
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      checker: 'Checker',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      id: 'Id',
      methodName: 'MethodName',
      openSwitch: 'OpenSwitch',
      operator: 'Operator',
      predictType: 'PredictType',
      projectName: 'ProjectName',
      property: 'Property',
      propertyType: 'PropertyType',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      templateId: 'TemplateId',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      checker: 'number',
      comment: 'string',
      criticalThreshold: 'string',
      entityId: 'number',
      expectValue: 'string',
      id: 'number',
      methodName: 'string',
      openSwitch: 'boolean',
      operator: 'string',
      predictType: 'number',
      projectName: 'string',
      property: 'string',
      propertyType: 'string',
      ruleName: 'string',
      ruleType: 'number',
      templateId: 'number',
      trend: 'string',
      warningThreshold: 'string',
      whereCondition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityRuleResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  alertInterval?: number;
  alertMethods?: string;
  alertTargets?: string;
  alertUnit?: string;
  baselineIds?: string;
  bizProcessIds?: string;
  detail?: string;
  dndEnd?: string;
  maxAlertTimes?: number;
  nodeIds?: string;
  projectId?: number;
  remindId?: number;
  remindName?: string;
  remindType?: string;
  remindUnit?: string;
  robotUrls?: string;
  useFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertInterval: 'AlertInterval',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      alertUnit: 'AlertUnit',
      baselineIds: 'BaselineIds',
      bizProcessIds: 'BizProcessIds',
      detail: 'Detail',
      dndEnd: 'DndEnd',
      maxAlertTimes: 'MaxAlertTimes',
      nodeIds: 'NodeIds',
      projectId: 'ProjectId',
      remindId: 'RemindId',
      remindName: 'RemindName',
      remindType: 'RemindType',
      remindUnit: 'RemindUnit',
      robotUrls: 'RobotUrls',
      useFlag: 'UseFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInterval: 'number',
      alertMethods: 'string',
      alertTargets: 'string',
      alertUnit: 'string',
      baselineIds: 'string',
      bizProcessIds: 'string',
      detail: 'string',
      dndEnd: 'string',
      maxAlertTimes: 'number',
      nodeIds: 'string',
      projectId: 'number',
      remindId: 'number',
      remindName: 'string',
      remindType: 'string',
      remindUnit: 'string',
      robotUrls: 'string',
      useFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemindResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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
  appGuid?: string;
  categoryId?: number;
  columns?: UpdateTableRequestColumns[];
  comment?: string;
  createIfNotExists?: boolean;
  endpoint?: string;
  envType?: number;
  externalTableType?: string;
  hasPart?: number;
  isView?: number;
  lifeCycle?: number;
  location?: string;
  logicalLevelId?: number;
  ownerId?: string;
  physicsLevelId?: number;
  projectId?: number;
  tableName?: string;
  themes?: UpdateTableRequestThemes[];
  visibility?: number;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      categoryId: 'CategoryId',
      columns: 'Columns',
      comment: 'Comment',
      createIfNotExists: 'CreateIfNotExists',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      externalTableType: 'ExternalTableType',
      hasPart: 'HasPart',
      isView: 'IsView',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      logicalLevelId: 'LogicalLevelId',
      ownerId: 'OwnerId',
      physicsLevelId: 'PhysicsLevelId',
      projectId: 'ProjectId',
      tableName: 'TableName',
      themes: 'Themes',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      categoryId: 'number',
      columns: { 'type': 'array', 'itemType': UpdateTableRequestColumns },
      comment: 'string',
      createIfNotExists: 'boolean',
      endpoint: 'string',
      envType: 'number',
      externalTableType: 'string',
      hasPart: 'number',
      isView: 'number',
      lifeCycle: 'number',
      location: 'string',
      logicalLevelId: 'number',
      ownerId: 'string',
      physicsLevelId: 'number',
      projectId: 'number',
      tableName: 'string',
      themes: { 'type': 'array', 'itemType': UpdateTableRequestThemes },
      visibility: 'number',
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
  column?: UpdateTableAddColumnRequestColumn[];
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': UpdateTableAddColumnRequestColumn },
      tableGuid: 'string',
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
  description?: string;
  levelId?: number;
  levelType?: number;
  name?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      levelId: 'LevelId',
      levelType: 'LevelType',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      levelId: 'number',
      levelType: 'number',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableLevelResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  updateResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      updateResult: 'boolean',
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
  levelId?: number;
  levelType?: number;
  secondLevelThemeId?: number;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      firstLevelThemeId: 'FirstLevelThemeId',
      levelId: 'LevelId',
      levelType: 'LevelType',
      secondLevelThemeId: 'SecondLevelThemeId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstLevelThemeId: 'number',
      levelId: 'number',
      levelType: 'number',
      secondLevelThemeId: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableModelInfoResponseBody extends $tea.Model {
  requestId?: string;
  updateResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: 'boolean',
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
  name?: string;
  projectId?: number;
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      projectId: 'ProjectId',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      projectId: 'number',
      themeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableThemeResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  updateResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      updateResult: 'boolean',
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
  className?: string;
  cmdDescription?: string;
  example?: string;
  fileFolderPath?: string;
  fileId?: string;
  functionType?: string;
  parameterDescription?: string;
  projectId?: number;
  projectIdentifier?: string;
  resources?: string;
  returnValue?: string;
  udfDescription?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'ClassName',
      cmdDescription: 'CmdDescription',
      example: 'Example',
      fileFolderPath: 'FileFolderPath',
      fileId: 'FileId',
      functionType: 'FunctionType',
      parameterDescription: 'ParameterDescription',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      resources: 'Resources',
      returnValue: 'ReturnValue',
      udfDescription: 'UdfDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      cmdDescription: 'string',
      example: 'string',
      fileFolderPath: 'string',
      fileId: 'string',
      functionType: 'string',
      parameterDescription: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      resources: 'string',
      returnValue: 'string',
      udfDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfFileResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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
  fileId?: number;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      message: 'string',
      status: 'string',
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
  columnName?: string;
  columnNameCn?: string;
  columnType?: string;
  comment?: string;
  isPartitionCol?: boolean;
  length?: number;
  seqNumber?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnNameCn: 'ColumnNameCn',
      columnType: 'ColumnType',
      comment: 'Comment',
      isPartitionCol: 'IsPartitionCol',
      length: 'Length',
      seqNumber: 'SeqNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNameCn: 'string',
      columnType: 'string',
      comment: 'string',
      isPartitionCol: 'boolean',
      length: 'number',
      seqNumber: 'number',
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
  content?: string;
  nextTaskId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nextTaskId: 'NextTaskId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nextTaskId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDISyncTaskResponseBodyData extends $tea.Model {
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponseBodyTaskInfo extends $tea.Model {
  content?: string;
  nextTaskId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nextTaskId: 'NextTaskId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nextTaskId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployDISyncTaskResponseBodyData extends $tea.Model {
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataSourcesResponseBodyDataDataSources extends $tea.Model {
  bindingCalcEngineId?: number;
  connectStatus?: number;
  content?: string;
  dataSourceType?: string;
  defaultEngine?: boolean;
  description?: string;
  envType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  operator?: string;
  projectId?: number;
  sequence?: number;
  shared?: boolean;
  status?: number;
  subType?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bindingCalcEngineId: 'BindingCalcEngineId',
      connectStatus: 'ConnectStatus',
      content: 'Content',
      dataSourceType: 'DataSourceType',
      defaultEngine: 'DefaultEngine',
      description: 'Description',
      envType: 'EnvType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      operator: 'Operator',
      projectId: 'ProjectId',
      sequence: 'Sequence',
      shared: 'Shared',
      status: 'Status',
      subType: 'SubType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingCalcEngineId: 'number',
      connectStatus: 'number',
      content: 'string',
      dataSourceType: 'string',
      defaultEngine: 'boolean',
      description: 'string',
      envType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      operator: 'string',
      projectId: 'number',
      sequence: 'number',
      shared: 'boolean',
      status: 'number',
      subType: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataSourcesResponseBodyData extends $tea.Model {
  dataSources?: ExportDataSourcesResponseBodyDataDataSources[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': ExportDataSourcesResponseBodyDataDataSources },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDISyncTaskConfigForCreatingResponseBodyData extends $tea.Model {
  message?: string;
  processId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      processId: 'ProcessId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      processId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDISyncTaskConfigForUpdatingResponseBodyData extends $tea.Model {
  message?: string;
  processId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      processId: 'ProcessId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      processId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineConfigResponseBodyData extends $tea.Model {
  baselineId?: number;
  baselineName?: string;
  baselineType?: string;
  expHour?: number;
  expMinu?: number;
  hourExpDetail?: string;
  hourSlaDetail?: string;
  isDefault?: boolean;
  owner?: string;
  priority?: number;
  projectId?: number;
  slaHour?: number;
  slaMinu?: number;
  useFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      expHour: 'ExpHour',
      expMinu: 'ExpMinu',
      hourExpDetail: 'HourExpDetail',
      hourSlaDetail: 'HourSlaDetail',
      isDefault: 'IsDefault',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      slaHour: 'SlaHour',
      slaMinu: 'SlaMinu',
      useFlag: 'UseFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      expHour: 'number',
      expMinu: 'number',
      hourExpDetail: 'string',
      hourSlaDetail: 'string',
      isDefault: 'boolean',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      slaHour: 'number',
      slaMinu: 'number',
      useFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBodyDataRuns extends $tea.Model {
  absTime?: number;
  beginCast?: number;
  beginRunningTime?: number;
  beginWaitResTime?: number;
  beginWaitTimeTime?: number;
  bizdate?: number;
  cycTime?: number;
  endCast?: number;
  finishTime?: number;
  inGroupId?: number;
  instanceId?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      absTime: 'AbsTime',
      beginCast: 'BeginCast',
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizdate: 'Bizdate',
      cycTime: 'CycTime',
      endCast: 'EndCast',
      finishTime: 'FinishTime',
      inGroupId: 'InGroupId',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absTime: 'number',
      beginCast: 'number',
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizdate: 'number',
      cycTime: 'number',
      endCast: 'number',
      finishTime: 'number',
      inGroupId: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBodyDataTopics extends $tea.Model {
  addTime?: number;
  instanceId?: number;
  topicId?: number;
  topicName?: number;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      instanceId: 'InstanceId',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'number',
      instanceId: 'number',
      topicId: 'number',
      topicName: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseBodyData extends $tea.Model {
  bizdate?: number;
  inGroupId?: number;
  instanceId?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  prgType?: number;
  projectId?: number;
  runs?: GetBaselineKeyPathResponseBodyDataRuns[];
  topics?: GetBaselineKeyPathResponseBodyDataTopics[];
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      prgType: 'PrgType',
      projectId: 'ProjectId',
      runs: 'Runs',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      inGroupId: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      prgType: 'number',
      projectId: 'number',
      runs: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyDataRuns },
      topics: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseBodyDataTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseBodyDataBlockInstance extends $tea.Model {
  endCast?: number;
  finishTime?: number;
  instanceId?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endCast: 'EndCast',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endCast: 'number',
      finishTime: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseBodyDataLastInstance extends $tea.Model {
  endCast?: number;
  finishTime?: number;
  instanceId?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endCast: 'EndCast',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endCast: 'number',
      finishTime: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseBodyData extends $tea.Model {
  baselineId?: number;
  baselineName?: string;
  bizdate?: number;
  blockInstance?: GetBaselineStatusResponseBodyDataBlockInstance;
  buffer?: number;
  endCast?: number;
  expTime?: number;
  finishStatus?: string;
  finishTime?: number;
  inGroupId?: number;
  lastInstance?: GetBaselineStatusResponseBodyDataLastInstance;
  owner?: string;
  priority?: number;
  projectId?: number;
  slaTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      bizdate: 'Bizdate',
      blockInstance: 'BlockInstance',
      buffer: 'Buffer',
      endCast: 'EndCast',
      expTime: 'ExpTime',
      finishStatus: 'FinishStatus',
      finishTime: 'FinishTime',
      inGroupId: 'InGroupId',
      lastInstance: 'LastInstance',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      slaTime: 'SlaTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      bizdate: 'number',
      blockInstance: GetBaselineStatusResponseBodyDataBlockInstance,
      buffer: 'number',
      endCast: 'number',
      expTime: 'number',
      finishStatus: 'string',
      finishTime: 'number',
      inGroupId: 'number',
      lastInstance: GetBaselineStatusResponseBodyDataLastInstance,
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      slaTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessResponseBodyData extends $tea.Model {
  businessId?: number;
  businessName?: string;
  description?: string;
  owner?: string;
  projectId?: string;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      projectId: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusResponseBodyData extends $tea.Model {
  content?: string;
  nextTaskId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nextTaskId: 'NextTaskId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nextTaskId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBodyDataSolutionInfoStepDetail extends $tea.Model {
  status?: string;
  stepId?: number;
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stepId: 'StepId',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stepId: 'number',
      stepName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBodyDataSolutionInfo extends $tea.Model {
  creatorName?: string;
  id?: number;
  status?: string;
  stepDetail?: GetDISyncInstanceInfoResponseBodyDataSolutionInfoStepDetail[];
  static names(): { [key: string]: string } {
    return {
      creatorName: 'CreatorName',
      id: 'Id',
      status: 'Status',
      stepDetail: 'StepDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      id: 'number',
      status: 'string',
      stepDetail: { 'type': 'array', 'itemType': GetDISyncInstanceInfoResponseBodyDataSolutionInfoStepDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBodyData extends $tea.Model {
  message?: string;
  name?: string;
  solutionInfo?: GetDISyncInstanceInfoResponseBodyDataSolutionInfo;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      solutionInfo: 'SolutionInfo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      solutionInfo: GetDISyncInstanceInfoResponseBodyDataSolutionInfo,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBodyDataSolutionDetail extends $tea.Model {
  creatorName?: string;
  id?: number;
  name?: string;
  processContent?: string;
  processExtra?: string;
  projectId?: number;
  sourceType?: string;
  startTime?: string;
  status?: string;
  submitTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'CreatorName',
      id: 'Id',
      name: 'Name',
      processContent: 'ProcessContent',
      processExtra: 'ProcessExtra',
      projectId: 'ProjectId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      submitTime: 'SubmitTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      id: 'number',
      name: 'string',
      processContent: 'string',
      processExtra: 'string',
      projectId: 'number',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      submitTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskResponseBodyData extends $tea.Model {
  code?: string;
  message?: string;
  solutionDetail?: GetDISyncTaskResponseBodyDataSolutionDetail;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      solutionDetail: 'SolutionDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      solutionDetail: GetDISyncTaskResponseBodyDataSolutionDetail,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncTaskMetricInfoResponseBodyMetricInfo extends $tea.Model {
  deleteReaderRecords?: number;
  deleteWriterRecords?: number;
  insertReaderRecords?: number;
  insertWriterRecords?: number;
  lastTaskDelay?: number;
  message?: string;
  sumReaderRecords?: number;
  sumWriterRecords?: number;
  updateReaderRecords?: number;
  updateWriterRecords?: number;
  static names(): { [key: string]: string } {
    return {
      deleteReaderRecords: 'DeleteReaderRecords',
      deleteWriterRecords: 'DeleteWriterRecords',
      insertReaderRecords: 'InsertReaderRecords',
      insertWriterRecords: 'InsertWriterRecords',
      lastTaskDelay: 'LastTaskDelay',
      message: 'Message',
      sumReaderRecords: 'SumReaderRecords',
      sumWriterRecords: 'SumWriterRecords',
      updateReaderRecords: 'UpdateReaderRecords',
      updateWriterRecords: 'UpdateWriterRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteReaderRecords: 'number',
      deleteWriterRecords: 'number',
      insertReaderRecords: 'number',
      insertWriterRecords: 'number',
      lastTaskDelay: 'number',
      message: 'string',
      sumReaderRecords: 'number',
      sumWriterRecords: 'number',
      updateReaderRecords: 'number',
      updateWriterRecords: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDagResponseBodyData extends $tea.Model {
  bizdate?: number;
  createTime?: number;
  createUser?: string;
  dagId?: number;
  finishTime?: number;
  gmtdate?: number;
  modifyTime?: number;
  name?: string;
  opSeq?: number;
  projectId?: number;
  startTime?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dagId: 'DagId',
      finishTime: 'FinishTime',
      gmtdate: 'Gmtdate',
      modifyTime: 'ModifyTime',
      name: 'Name',
      opSeq: 'OpSeq',
      projectId: 'ProjectId',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      createTime: 'number',
      createUser: 'string',
      dagId: 'number',
      finishTime: 'number',
      gmtdate: 'number',
      modifyTime: 'number',
      name: 'string',
      opSeq: 'number',
      projectId: 'number',
      startTime: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  columnName?: string;
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataRegistrationDetails extends $tea.Model {
  failedResultSample?: string;
  registrationErrorCodes?: GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters?: GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters[];
  serviceContentType?: number;
  serviceHost?: string;
  servicePath?: string;
  serviceRequestBodyDescription?: string;
  successfulResultSample?: string;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters },
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataScriptDetailsScriptConnection extends $tea.Model {
  connectionId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataScriptDetailsScriptRequestParameters extends $tea.Model {
  columnName?: string;
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataScriptDetailsScriptResponseParameters extends $tea.Model {
  columnName?: string;
  exampleValue?: string;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataScriptDetails extends $tea.Model {
  isPagedResponse?: boolean;
  script?: string;
  scriptConnection?: GetDataServiceApiResponseBodyDataScriptDetailsScriptConnection;
  scriptRequestParameters?: GetDataServiceApiResponseBodyDataScriptDetailsScriptRequestParameters[];
  scriptResponseParameters?: GetDataServiceApiResponseBodyDataScriptDetailsScriptResponseParameters[];
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      scriptConnection: 'ScriptConnection',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      script: 'string',
      scriptConnection: GetDataServiceApiResponseBodyDataScriptDetailsScriptConnection,
      scriptRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataScriptDetailsScriptResponseParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataWizardDetailsWizardConnection extends $tea.Model {
  connectionId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataWizardDetailsWizardRequestParameters extends $tea.Model {
  columnName?: string;
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataWizardDetailsWizardResponseParameters extends $tea.Model {
  columnName?: string;
  exampleValue?: string;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyDataWizardDetails extends $tea.Model {
  isPagedResponse?: boolean;
  wizardConnection?: GetDataServiceApiResponseBodyDataWizardDetailsWizardConnection;
  wizardRequestParameters?: GetDataServiceApiResponseBodyDataWizardDetailsWizardRequestParameters[];
  wizardResponseParameters?: GetDataServiceApiResponseBodyDataWizardDetailsWizardResponseParameters[];
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      wizardConnection: 'WizardConnection',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      wizardConnection: GetDataServiceApiResponseBodyDataWizardDetailsWizardConnection,
      wizardRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseBodyDataWizardDetailsWizardResponseParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseBodyData extends $tea.Model {
  apiId?: number;
  apiMode?: number;
  apiName?: string;
  apiPath?: string;
  createdTime?: string;
  creatorId?: string;
  description?: string;
  folderId?: number;
  groupId?: string;
  modifiedTime?: string;
  operatorId?: string;
  projectId?: number;
  protocols?: number[];
  registrationDetails?: GetDataServiceApiResponseBodyDataRegistrationDetails;
  requestMethod?: number;
  responseContentType?: number;
  scriptDetails?: GetDataServiceApiResponseBodyDataScriptDetails;
  status?: number;
  tenantId?: number;
  timeout?: number;
  visibleRange?: number;
  wizardDetails?: GetDataServiceApiResponseBodyDataWizardDetails;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      folderId: 'FolderId',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      scriptDetails: 'ScriptDetails',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      folderId: 'number',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: GetDataServiceApiResponseBodyDataRegistrationDetails,
      requestMethod: 'number',
      responseContentType: 'number',
      scriptDetails: GetDataServiceApiResponseBodyDataScriptDetails,
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      wizardDetails: GetDataServiceApiResponseBodyDataWizardDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationResponseBodyData extends $tea.Model {
  applicationCode?: string;
  applicationId?: number;
  applicationKey?: string;
  applicationName?: string;
  applicationSecret?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      applicationId: 'ApplicationId',
      applicationKey: 'ApplicationKey',
      applicationName: 'ApplicationName',
      applicationSecret: 'ApplicationSecret',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      applicationId: 'number',
      applicationKey: 'string',
      applicationName: 'string',
      applicationSecret: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderResponseBodyFolder extends $tea.Model {
  createdTime?: string;
  folderId?: number;
  folderName?: string;
  groupId?: string;
  modifiedTime?: string;
  parentId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      folderId: 'number',
      folderName: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      parentId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupResponseBodyGroup extends $tea.Model {
  apiGatewayGroupId?: string;
  createdTime?: string;
  creatorId?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiGatewayGroupId: 'ApiGatewayGroupId',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGatewayGroupId: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataRegistrationDetails extends $tea.Model {
  failedResultSample?: string;
  registrationErrorCodes?: GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters?: GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters[];
  serviceContentType?: number;
  serviceHost?: string;
  servicePath?: string;
  serviceRequestBodyDescription?: string;
  successfulResultSample?: string;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataRegistrationDetailsRegistrationRequestParameters },
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptConnection extends $tea.Model {
  connectionId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptErrorCodes extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptRequestParameters extends $tea.Model {
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptResponseParameters extends $tea.Model {
  exampleValue?: string;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataScriptDetails extends $tea.Model {
  failedResultSample?: string;
  isPagedResponse?: boolean;
  script?: string;
  scriptConnection?: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptConnection;
  scriptErrorCodes?: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptErrorCodes[];
  scriptRequestParameters?: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptRequestParameters[];
  scriptResponseParameters?: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptResponseParameters[];
  successfulResultSample?: string;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      scriptConnection: 'ScriptConnection',
      scriptErrorCodes: 'ScriptErrorCodes',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      successfulResultSample: 'SuccessfulResultSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      script: 'string',
      scriptConnection: GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptConnection,
      scriptErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptErrorCodes },
      scriptRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataScriptDetailsScriptResponseParameters },
      successfulResultSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardConnection extends $tea.Model {
  connectionId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardErrorCodes extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardRequestParameters extends $tea.Model {
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardResponseParameters extends $tea.Model {
  exampleValue?: string;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyDataWizardDetails extends $tea.Model {
  failedResultSample?: string;
  isPagedResponse?: boolean;
  successfulResultSample?: string;
  wizardConnection?: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardConnection;
  wizardErrorCodes?: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardErrorCodes[];
  wizardRequestParameters?: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardRequestParameters[];
  wizardResponseParameters?: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardResponseParameters[];
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      wizardConnection: 'WizardConnection',
      wizardErrorCodes: 'WizardErrorCodes',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      wizardConnection: GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardConnection,
      wizardErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardErrorCodes },
      wizardRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseBodyDataWizardDetailsWizardResponseParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseBodyData extends $tea.Model {
  apiId?: number;
  apiMode?: number;
  apiName?: string;
  apiPath?: string;
  createdTime?: string;
  creatorId?: string;
  description?: string;
  groupId?: string;
  modifiedTime?: string;
  operatorId?: string;
  projectId?: number;
  protocols?: number[];
  registrationDetails?: GetDataServicePublishedApiResponseBodyDataRegistrationDetails;
  requestMethod?: number;
  responseContentType?: number;
  scriptDetails?: GetDataServicePublishedApiResponseBodyDataScriptDetails;
  status?: number;
  tenantId?: number;
  timeout?: number;
  visibleRange?: number;
  wizardDetails?: GetDataServicePublishedApiResponseBodyDataWizardDetails;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      scriptDetails: 'ScriptDetails',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: GetDataServicePublishedApiResponseBodyDataRegistrationDetails,
      requestMethod: 'number',
      responseContentType: 'number',
      scriptDetails: GetDataServicePublishedApiResponseBodyDataScriptDetails,
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      wizardDetails: GetDataServicePublishedApiResponseBodyDataWizardDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceMetaResponseBodyData extends $tea.Model {
  message?: string;
  meta?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      meta: 'Meta',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      meta: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyDataDeployment extends $tea.Model {
  checkingStatus?: number;
  createTime?: number;
  creatorId?: string;
  errorMessage?: string;
  executeTime?: number;
  fromEnvironment?: number;
  handlerId?: string;
  name?: string;
  status?: number;
  toEnvironment?: number;
  static names(): { [key: string]: string } {
    return {
      checkingStatus: 'CheckingStatus',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      fromEnvironment: 'FromEnvironment',
      handlerId: 'HandlerId',
      name: 'Name',
      status: 'Status',
      toEnvironment: 'ToEnvironment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingStatus: 'number',
      createTime: 'number',
      creatorId: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      fromEnvironment: 'number',
      handlerId: 'string',
      name: 'string',
      status: 'number',
      toEnvironment: 'number',
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

export class GetFileResponseBodyDataFile extends $tea.Model {
  advancedSettings?: string;
  autoParsing?: boolean;
  bizId?: number;
  businessId?: number;
  commitStatus?: number;
  connectionName?: string;
  content?: string;
  createTime?: number;
  createUser?: string;
  currentVersion?: number;
  deletedStatus?: string;
  fileDescription?: string;
  fileFolderId?: string;
  fileName?: string;
  fileType?: number;
  isMaxCompute?: boolean;
  lastEditTime?: number;
  lastEditUser?: string;
  nodeId?: number;
  owner?: string;
  parentId?: number;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      autoParsing: 'AutoParsing',
      bizId: 'BizId',
      businessId: 'BusinessId',
      commitStatus: 'CommitStatus',
      connectionName: 'ConnectionName',
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      currentVersion: 'CurrentVersion',
      deletedStatus: 'DeletedStatus',
      fileDescription: 'FileDescription',
      fileFolderId: 'FileFolderId',
      fileName: 'FileName',
      fileType: 'FileType',
      isMaxCompute: 'IsMaxCompute',
      lastEditTime: 'LastEditTime',
      lastEditUser: 'LastEditUser',
      nodeId: 'NodeId',
      owner: 'Owner',
      parentId: 'ParentId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: 'string',
      autoParsing: 'boolean',
      bizId: 'number',
      businessId: 'number',
      commitStatus: 'number',
      connectionName: 'string',
      content: 'string',
      createTime: 'number',
      createUser: 'string',
      currentVersion: 'number',
      deletedStatus: 'string',
      fileDescription: 'string',
      fileFolderId: 'string',
      fileName: 'string',
      fileType: 'number',
      isMaxCompute: 'boolean',
      lastEditTime: 'number',
      lastEditUser: 'string',
      nodeId: 'number',
      owner: 'string',
      parentId: 'number',
      useType: 'string',
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
  output?: string;
  refTableName?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      refTableName: 'RefTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      refTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyDataNodeConfiguration extends $tea.Model {
  autoRerunIntervalMillis?: number;
  autoRerunTimes?: number;
  cronExpress?: string;
  cycleType?: string;
  dependentNodeIdList?: string;
  dependentType?: string;
  endEffectDate?: number;
  inputList?: GetFileResponseBodyDataNodeConfigurationInputList[];
  outputList?: GetFileResponseBodyDataNodeConfigurationOutputList[];
  paraValue?: string;
  rerunMode?: string;
  resourceGroupId?: number;
  schedulerType?: string;
  startEffectDate?: number;
  startImmediately?: boolean;
  stop?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      endEffectDate: 'EndEffectDate',
      inputList: 'InputList',
      outputList: 'OutputList',
      paraValue: 'ParaValue',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
      startEffectDate: 'StartEffectDate',
      startImmediately: 'StartImmediately',
      stop: 'Stop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      endEffectDate: 'number',
      inputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationInputList },
      outputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationOutputList },
      paraValue: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      schedulerType: 'string',
      startEffectDate: 'number',
      startImmediately: 'boolean',
      stop: 'boolean',
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
  changeType?: string;
  comment?: string;
  commitTime?: number;
  commitUser?: string;
  fileContent?: string;
  fileName?: string;
  filePropertyContent?: string;
  fileVersion?: number;
  isCurrentProd?: boolean;
  nodeContent?: string;
  nodeId?: number;
  status?: string;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      comment: 'Comment',
      commitTime: 'CommitTime',
      commitUser: 'CommitUser',
      fileContent: 'FileContent',
      fileName: 'FileName',
      filePropertyContent: 'FilePropertyContent',
      fileVersion: 'FileVersion',
      isCurrentProd: 'IsCurrentProd',
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
      status: 'Status',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      comment: 'string',
      commitTime: 'number',
      commitUser: 'string',
      fileContent: 'string',
      fileName: 'string',
      filePropertyContent: 'string',
      fileVersion: 'number',
      isCurrentProd: 'boolean',
      nodeContent: 'string',
      nodeId: 'number',
      status: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBodyData extends $tea.Model {
  folderId?: string;
  folderPath?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent extends $tea.Model {
  businessId?: number;
  currentVersion?: number;
  dataSourceName?: string;
  folderId?: string;
  owner?: string;
  parentFileId?: number;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      currentVersion: 'CurrentVersion',
      dataSourceName: 'DataSourceName',
      folderId: 'FolderId',
      owner: 'Owner',
      parentFileId: 'ParentFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      currentVersion: 'number',
      dataSourceName: 'string',
      folderId: 'string',
      owner: 'string',
      parentFileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList extends $tea.Model {
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

export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList extends $tea.Model {
  output?: string;
  refTableName?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      refTableName: 'RefTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      refTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration extends $tea.Model {
  autoRerunIntervalMillis?: number;
  autoRerunTimes?: number;
  cronExpress?: string;
  cycleType?: string;
  dependentNodeIdList?: string;
  dependentType?: string;
  inputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList[];
  outputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList[];
  paraValue?: string;
  rerunMode?: string;
  resourceGroupId?: number;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      inputList: 'InputList',
      outputList: 'OutputList',
      paraValue: 'ParaValue',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      inputList: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList },
      outputList: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList },
      paraValue: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailCommittedFile extends $tea.Model {
  changeType?: string;
  comment?: string;
  committor?: string;
  content?: string;
  fileId?: number;
  fileName?: string;
  filePropertyContent?: GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent;
  fileType?: number;
  nodeConfiguration?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration;
  nodeId?: number;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      comment: 'Comment',
      committor: 'Committor',
      content: 'Content',
      fileId: 'FileId',
      fileName: 'FileName',
      filePropertyContent: 'FilePropertyContent',
      fileType: 'FileType',
      nodeConfiguration: 'NodeConfiguration',
      nodeId: 'NodeId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      comment: 'string',
      committor: 'string',
      content: 'string',
      fileId: 'number',
      fileName: 'string',
      filePropertyContent: GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent,
      fileType: 'number',
      nodeConfiguration: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration,
      nodeId: 'number',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailDeletedFile extends $tea.Model {
  businessId?: number;
  content?: string;
  currentVersion?: number;
  dataSourceName?: string;
  fileId?: number;
  fileName?: string;
  fileType?: number;
  folderId?: string;
  nodeId?: number;
  owner?: string;
  parentFileId?: number;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      content: 'Content',
      currentVersion: 'CurrentVersion',
      dataSourceName: 'DataSourceName',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      folderId: 'FolderId',
      nodeId: 'NodeId',
      owner: 'Owner',
      parentFileId: 'ParentFileId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      content: 'string',
      currentVersion: 'number',
      dataSourceName: 'string',
      fileId: 'number',
      fileName: 'string',
      fileType: 'number',
      folderId: 'string',
      nodeId: 'number',
      owner: 'string',
      parentFileId: 'number',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand extends $tea.Model {
  content?: string;
  dataSourceName?: string;
  fileId?: number;
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataSourceName: 'DataSourceName',
      fileId: 'FileId',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSourceName: 'string',
      fileId: 'number',
      fileType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailTableModelColumns extends $tea.Model {
  columnName?: string;
  columnType?: string;
  comment?: string;
  isPartitionColumn?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      comment: 'Comment',
      isPartitionColumn: 'IsPartitionColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      comment: 'string',
      isPartitionColumn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetailTableModel extends $tea.Model {
  columns?: GetIDEEventDetailResponseBodyEventDetailTableModelColumns[];
  comment?: string;
  dataSourceName?: string;
  env?: string;
  lifeCycle?: number;
  location?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      comment: 'Comment',
      dataSourceName: 'DataSourceName',
      env: 'Env',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailTableModelColumns },
      comment: 'string',
      dataSourceName: 'string',
      env: 'string',
      lifeCycle: 'number',
      location: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIDEEventDetailResponseBodyEventDetail extends $tea.Model {
  committedFile?: GetIDEEventDetailResponseBodyEventDetailCommittedFile;
  deletedFile?: GetIDEEventDetailResponseBodyEventDetailDeletedFile;
  fileExecutionCommand?: GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand;
  tableModel?: GetIDEEventDetailResponseBodyEventDetailTableModel;
  static names(): { [key: string]: string } {
    return {
      committedFile: 'CommittedFile',
      deletedFile: 'DeletedFile',
      fileExecutionCommand: 'FileExecutionCommand',
      tableModel: 'TableModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      committedFile: GetIDEEventDetailResponseBodyEventDetailCommittedFile,
      deletedFile: GetIDEEventDetailResponseBodyEventDetailDeletedFile,
      fileExecutionCommand: GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand,
      tableModel: GetIDEEventDetailResponseBodyEventDetailTableModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyData extends $tea.Model {
  baselineId?: number;
  beginRunningTime?: number;
  beginWaitResTime?: number;
  beginWaitTimeTime?: number;
  bizdate?: number;
  businessId?: number;
  connection?: string;
  createTime?: number;
  createUser?: string;
  cycTime?: number;
  dagId?: number;
  dagType?: string;
  dqcDescription?: string;
  dqcType?: number;
  finishTime?: number;
  instanceId?: number;
  modifyTime?: number;
  nodeId?: number;
  nodeName?: string;
  paramValues?: string;
  priority?: number;
  relatedFlowId?: number;
  repeatInterval?: number;
  repeatability?: boolean;
  status?: string;
  taskRerunTime?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizdate: 'Bizdate',
      businessId: 'BusinessId',
      connection: 'Connection',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      cycTime: 'CycTime',
      dagId: 'DagId',
      dagType: 'DagType',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      paramValues: 'ParamValues',
      priority: 'Priority',
      relatedFlowId: 'RelatedFlowId',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      status: 'Status',
      taskRerunTime: 'TaskRerunTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizdate: 'number',
      businessId: 'number',
      connection: 'string',
      createTime: 'number',
      createUser: 'string',
      cycTime: 'number',
      dagId: 'number',
      dagType: 'string',
      dqcDescription: 'string',
      dqcType: 'number',
      finishTime: 'number',
      instanceId: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      paramValues: 'string',
      priority: 'number',
      relatedFlowId: 'number',
      repeatInterval: 'number',
      repeatability: 'boolean',
      status: 'string',
      taskRerunTime: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank extends $tea.Model {
  bizdate?: number;
  consumed?: number;
  instanceId?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  prgType?: number;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      consumed: 'Consumed',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      prgType: 'PrgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      consumed: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      prgType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank extends $tea.Model {
  consumeTimeRank?: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTimeRank: 'ConsumeTimeRank',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimeRank: { 'type': 'array', 'itemType': GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendResponseBodyInstanceCounts extends $tea.Model {
  count?: number;
  date?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      date: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank extends $tea.Model {
  count?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  prgType?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      prgType: 'PrgType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      prgType: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponseBodyInstanceErrorRank extends $tea.Model {
  errorRank?: GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      errorRank: 'ErrorRank',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorRank: { 'type': 'array', 'itemType': GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusCountResponseBodyStatusCount extends $tea.Model {
  failureCount?: number;
  notRunCount?: number;
  runningCount?: number;
  successCount?: number;
  totalCount?: number;
  waitResCount?: number;
  waitTimeCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      notRunCount: 'NotRunCount',
      runningCount: 'RunningCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
      waitResCount: 'WaitResCount',
      waitTimeCount: 'WaitTimeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      notRunCount: 'number',
      runningCount: 'number',
      successCount: 'number',
      totalCount: 'number',
      waitResCount: 'number',
      waitTimeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusStatisticResponseBodyStatusCount extends $tea.Model {
  failureCount?: number;
  notRunCount?: number;
  runningCount?: number;
  successCount?: number;
  totalCount?: number;
  waitResCount?: number;
  waitTimeCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      notRunCount: 'NotRunCount',
      runningCount: 'RunningCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
      waitResCount: 'WaitResCount',
      waitTimeCount: 'WaitTimeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      notRunCount: 'number',
      runningCount: 'number',
      successCount: 'number',
      totalCount: 'number',
      waitResCount: 'number',
      waitTimeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManualDagInstancesResponseBodyInstances extends $tea.Model {
  beginRunningTime?: number;
  beginWaitResTime?: number;
  beginWaitTimeTime?: number;
  bizDate?: number;
  createTime?: number;
  createUser?: string;
  cycTime?: number;
  dagId?: number;
  dagType?: string;
  finishTime?: number;
  instanceId?: number;
  modifyTime?: number;
  nodeId?: number;
  nodeName?: string;
  paramValues?: string;
  status?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizDate: 'BizDate',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      cycTime: 'CycTime',
      dagId: 'DagId',
      dagType: 'DagType',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      paramValues: 'ParamValues',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizDate: 'number',
      createTime: 'number',
      createUser: 'string',
      cycTime: 'number',
      dagId: 'number',
      dagType: 'string',
      finishTime: 'number',
      instanceId: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      paramValues: 'string',
      status: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseBodyDataDataEntityList extends $tea.Model {
  categoryId?: number;
  comment?: string;
  createTime?: number;
  depth?: number;
  lastOperatorId?: string;
  modifiedTime?: number;
  name?: string;
  ownerId?: string;
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      comment: 'Comment',
      createTime: 'CreateTime',
      depth: 'Depth',
      lastOperatorId: 'LastOperatorId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ownerId: 'OwnerId',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      comment: 'string',
      createTime: 'number',
      depth: 'number',
      lastOperatorId: 'string',
      modifiedTime: 'number',
      name: 'string',
      ownerId: 'string',
      parentCategoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseBodyData extends $tea.Model {
  dataEntityList?: GetMetaCategoryResponseBodyDataDataEntityList[];
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaCategoryResponseBodyDataDataEntityList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseBodyDataDataEntityList extends $tea.Model {
  clusterId?: string;
  columnGuid?: string;
  columnName?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnGuid: 'string',
      columnName: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseBodyData extends $tea.Model {
  dataEntityList?: GetMetaColumnLineageResponseBodyDataDataEntityList[];
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaColumnLineageResponseBodyDataDataEntityList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoResponseBodyData extends $tea.Model {
  appGuid?: string;
  clusterBizId?: string;
  comment?: string;
  createTime?: number;
  endpoint?: string;
  envType?: number;
  location?: string;
  modifyTime?: number;
  name?: string;
  ownerId?: string;
  ownerName?: string;
  projectId?: number;
  projectName?: string;
  projectNameCn?: string;
  tenantId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterBizId: 'ClusterBizId',
      comment: 'Comment',
      createTime: 'CreateTime',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      location: 'Location',
      modifyTime: 'ModifyTime',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectNameCn: 'ProjectNameCn',
      tenantId: 'TenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterBizId: 'string',
      comment: 'string',
      createTime: 'number',
      endpoint: 'string',
      envType: 'number',
      location: 'string',
      modifyTime: 'number',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      projectId: 'number',
      projectName: 'string',
      projectNameCn: 'string',
      tenantId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponseBodyDataTableEntityList extends $tea.Model {
  databaseName?: string;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableEntityList?: GetMetaDBTableListResponseBodyDataTableEntityList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableEntityList: 'TableEntityList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableEntityList: { 'type': 'array', 'itemType': GetMetaDBTableListResponseBodyDataTableEntityList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoResponseBodyData extends $tea.Model {
  caption?: string;
  clusterId?: string;
  columnCount?: number;
  comment?: string;
  createTime?: number;
  dataSize?: number;
  databaseName?: string;
  envType?: number;
  favoriteCount?: number;
  isPartitionTable?: boolean;
  isView?: boolean;
  isVisible?: number;
  lastAccessTime?: number;
  lastDdlTime?: number;
  lastModifyTime?: number;
  lifeCycle?: number;
  location?: string;
  ownerId?: string;
  partitionKeys?: string;
  projectId?: number;
  projectName?: string;
  readCount?: number;
  tableGuid?: string;
  tableName?: string;
  tenantId?: number;
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      clusterId: 'ClusterId',
      columnCount: 'ColumnCount',
      comment: 'Comment',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      databaseName: 'DatabaseName',
      envType: 'EnvType',
      favoriteCount: 'FavoriteCount',
      isPartitionTable: 'IsPartitionTable',
      isView: 'IsView',
      isVisible: 'IsVisible',
      lastAccessTime: 'LastAccessTime',
      lastDdlTime: 'LastDdlTime',
      lastModifyTime: 'LastModifyTime',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      ownerId: 'OwnerId',
      partitionKeys: 'PartitionKeys',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      readCount: 'ReadCount',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tenantId: 'TenantId',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      clusterId: 'string',
      columnCount: 'number',
      comment: 'string',
      createTime: 'number',
      dataSize: 'number',
      databaseName: 'string',
      envType: 'number',
      favoriteCount: 'number',
      isPartitionTable: 'boolean',
      isView: 'boolean',
      isVisible: 'number',
      lastAccessTime: 'number',
      lastDdlTime: 'number',
      lastModifyTime: 'number',
      lifeCycle: 'number',
      location: 'string',
      ownerId: 'string',
      partitionKeys: 'string',
      projectId: 'number',
      projectName: 'string',
      readCount: 'number',
      tableGuid: 'string',
      tableName: 'string',
      tenantId: 'number',
      viewCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseBodyDataDataEntityList extends $tea.Model {
  changeContent?: string;
  changeType?: string;
  createTime?: number;
  modifiedTime?: number;
  objectType?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      changeContent: 'ChangeContent',
      changeType: 'ChangeType',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      objectType: 'ObjectType',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeContent: 'string',
      changeType: 'string',
      createTime: 'number',
      modifiedTime: 'number',
      objectType: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseBodyData extends $tea.Model {
  dataEntityList?: GetMetaTableChangeLogResponseBodyDataDataEntityList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableChangeLogResponseBodyDataDataEntityList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBodyDataColumnList extends $tea.Model {
  caption?: string;
  columnGuid?: string;
  columnName?: string;
  columnType?: string;
  comment?: string;
  isForeignKey?: boolean;
  isPartitionColumn?: boolean;
  isPrimaryKey?: boolean;
  position?: number;
  relationCount?: number;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      comment: 'Comment',
      isForeignKey: 'IsForeignKey',
      isPartitionColumn: 'IsPartitionColumn',
      isPrimaryKey: 'IsPrimaryKey',
      position: 'Position',
      relationCount: 'RelationCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      columnGuid: 'string',
      columnName: 'string',
      columnType: 'string',
      comment: 'string',
      isForeignKey: 'boolean',
      isPartitionColumn: 'boolean',
      isPrimaryKey: 'boolean',
      position: 'number',
      relationCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBodyData extends $tea.Model {
  columnList?: GetMetaTableColumnResponseBodyDataColumnList[];
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': GetMetaTableColumnResponseBodyDataColumnList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseBodyDataColumnList extends $tea.Model {
  caption?: string;
  columnGuid?: string;
  columnName?: string;
  columnType?: string;
  comment?: string;
  isForeignKey?: boolean;
  isPartitionColumn?: boolean;
  isPrimaryKey?: boolean;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      comment: 'Comment',
      isForeignKey: 'IsForeignKey',
      isPartitionColumn: 'IsPartitionColumn',
      isPrimaryKey: 'IsPrimaryKey',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      columnGuid: 'string',
      columnName: 'string',
      columnType: 'string',
      comment: 'string',
      isForeignKey: 'boolean',
      isPartitionColumn: 'boolean',
      isPrimaryKey: 'boolean',
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseBodyData extends $tea.Model {
  clusterId?: string;
  columnList?: GetMetaTableFullInfoResponseBodyDataColumnList[];
  comment?: string;
  createTime?: number;
  dataSize?: number;
  databaseName?: string;
  envType?: number;
  isVisible?: number;
  lastAccessTime?: number;
  lastDdlTime?: number;
  lastModifyTime?: number;
  lifeCycle?: number;
  location?: string;
  ownerId?: string;
  partitionKeys?: string;
  projectId?: number;
  projectName?: string;
  tableGuid?: string;
  tableName?: string;
  tenantId?: number;
  totalColumnCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnList: 'ColumnList',
      comment: 'Comment',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      databaseName: 'DatabaseName',
      envType: 'EnvType',
      isVisible: 'IsVisible',
      lastAccessTime: 'LastAccessTime',
      lastDdlTime: 'LastDdlTime',
      lastModifyTime: 'LastModifyTime',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      ownerId: 'OwnerId',
      partitionKeys: 'PartitionKeys',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tenantId: 'TenantId',
      totalColumnCount: 'TotalColumnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnList: { 'type': 'array', 'itemType': GetMetaTableFullInfoResponseBodyDataColumnList },
      comment: 'string',
      createTime: 'number',
      dataSize: 'number',
      databaseName: 'string',
      envType: 'number',
      isVisible: 'number',
      lastAccessTime: 'number',
      lastDdlTime: 'number',
      lastModifyTime: 'number',
      lifeCycle: 'number',
      location: 'string',
      ownerId: 'string',
      partitionKeys: 'string',
      projectId: 'number',
      projectName: 'string',
      tableGuid: 'string',
      tableName: 'string',
      tenantId: 'number',
      totalColumnCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiResponseBodyData extends $tea.Model {
  content?: string;
  createTime?: number;
  creator?: string;
  creatorName?: string;
  modifiedTime?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      modifiedTime: 'ModifiedTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      modifiedTime: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponseBodyDataDataEntityList extends $tea.Model {
  createTimestamp?: number;
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponseBodyData extends $tea.Model {
  dataEntityList?: GetMetaTableLineageResponseBodyDataDataEntityList[];
  hasNext?: boolean;
  nextPrimaryKey?: string;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      hasNext: 'HasNext',
      nextPrimaryKey: 'NextPrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableLineageResponseBodyDataDataEntityList },
      hasNext: 'boolean',
      nextPrimaryKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableGuidList?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableGuidList: 'TableGuidList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableGuidList: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseBodyDataDataEntityList extends $tea.Model {
  endTime?: string;
  projectId?: number;
  startTime?: string;
  tableGuid?: string;
  taskId?: string;
  taskInstanceId?: number;
  waitTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      projectId: 'ProjectId',
      startTime: 'StartTime',
      tableGuid: 'TableGuid',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      projectId: 'number',
      startTime: 'string',
      tableGuid: 'string',
      taskId: 'string',
      taskInstanceId: 'number',
      waitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseBodyData extends $tea.Model {
  dataEntityList?: GetMetaTableOutputResponseBodyDataDataEntityList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableOutputResponseBodyDataDataEntityList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseBodyDataDataEntityList extends $tea.Model {
  comment?: string;
  createTime?: number;
  dataSize?: number;
  modifiedTime?: number;
  partitionGuid?: string;
  partitionLocation?: string;
  partitionName?: string;
  partitionPath?: string;
  partitionType?: string;
  recordCount?: number;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      modifiedTime: 'ModifiedTime',
      partitionGuid: 'PartitionGuid',
      partitionLocation: 'PartitionLocation',
      partitionName: 'PartitionName',
      partitionPath: 'PartitionPath',
      partitionType: 'PartitionType',
      recordCount: 'RecordCount',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      dataSize: 'number',
      modifiedTime: 'number',
      partitionGuid: 'string',
      partitionLocation: 'string',
      partitionName: 'string',
      partitionPath: 'string',
      partitionType: 'string',
      recordCount: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseBodyData extends $tea.Model {
  dataEntityList?: GetMetaTablePartitionResponseBodyDataDataEntityList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTablePartitionResponseBodyDataDataEntityList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBodyEntityLevel extends $tea.Model {
  description?: string;
  levelId?: number;
  name?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      levelId: 'LevelId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      levelId: 'number',
      name: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBodyEntityTheme extends $tea.Model {
  level?: number;
  name?: string;
  parentId?: number;
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      name: 'string',
      parentId: 'number',
      themeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBodyEntity extends $tea.Model {
  level?: GetMetaTableThemeLevelResponseBodyEntityLevel[];
  theme?: GetMetaTableThemeLevelResponseBodyEntityTheme[];
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: { 'type': 'array', 'itemType': GetMetaTableThemeLevelResponseBodyEntityLevel },
      theme: { 'type': 'array', 'itemType': GetMetaTableThemeLevelResponseBodyEntityTheme },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationProcessResponseBodyData extends $tea.Model {
  taskName?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationSummaryResponseBodyData extends $tea.Model {
  createUser?: string;
  downloadUrl?: string;
  gmtCreate?: number;
  gmtModified?: number;
  migrationId?: number;
  name?: string;
  opUser?: string;
  projectId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createUser: 'CreateUser',
      downloadUrl: 'DownloadUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      migrationId: 'MigrationId',
      name: 'Name',
      opUser: 'OpUser',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUser: 'string',
      downloadUrl: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      migrationId: 'number',
      name: 'string',
      opUser: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBodyData extends $tea.Model {
  baselineId?: number;
  businessId?: number;
  connection?: string;
  cronExpress?: string;
  description?: string;
  dqcDescription?: string;
  dqcType?: number;
  nodeId?: number;
  nodeName?: string;
  ownerId?: string;
  paramValues?: string;
  priority?: number;
  programType?: string;
  projectId?: number;
  relatedFlowId?: number;
  repeatInterval?: number;
  repeatability?: string;
  resGroupName?: string;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      businessId: 'BusinessId',
      connection: 'Connection',
      cronExpress: 'CronExpress',
      description: 'Description',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      paramValues: 'ParamValues',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      relatedFlowId: 'RelatedFlowId',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      resGroupName: 'ResGroupName',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      businessId: 'number',
      connection: 'string',
      cronExpress: 'string',
      description: 'string',
      dqcDescription: 'string',
      dqcType: 'number',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      paramValues: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      relatedFlowId: 'number',
      repeatInterval: 'number',
      repeatability: 'string',
      resGroupName: 'string',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeChildrenResponseBodyDataNodes extends $tea.Model {
  baselineId?: number;
  cronExpress?: string;
  nodeId?: number;
  nodeName?: string;
  ownerId?: string;
  priority?: number;
  programType?: string;
  projectId?: number;
  repeatability?: boolean;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      cronExpress: 'CronExpress',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      repeatability: 'Repeatability',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      cronExpress: 'string',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      repeatability: 'boolean',
      schedulerType: 'string',
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
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeParentsResponseBodyDataNodes extends $tea.Model {
  baselineId?: number;
  cronExpress?: string;
  nodeId?: number;
  nodeName?: string;
  ownerId?: string;
  priority?: number;
  programType?: string;
  projectId?: number;
  repeatability?: boolean;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      cronExpress: 'CronExpress',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      repeatability: 'Repeatability',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      cronExpress: 'string',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      repeatability: 'boolean',
      schedulerType: 'string',
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
  nodeType?: number;
  nodeTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      nodeTypeName: 'NodeTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'number',
      nodeTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseBodyNodeTypeInfoList extends $tea.Model {
  nodeTypeInfo?: GetNodeTypeListInfoResponseBodyNodeTypeInfoListNodeTypeInfo[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeTypeInfo: 'NodeTypeInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypeInfo: { 'type': 'array', 'itemType': GetNodeTypeListInfoResponseBodyNodeTypeInfoListNodeTypeInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList extends $tea.Model {
  columnComment?: string;
  columnName?: string;
  static names(): { [key: string]: string } {
    return {
      columnComment: 'ColumnComment',
      columnName: 'ColumnName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnComment: 'string',
      columnName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList extends $tea.Model {
  columnMetaList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList[];
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      columnMetaList: 'ColumnMetaList',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMetaList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaListColumnMetaList },
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMeta extends $tea.Model {
  maxComputeProjectName?: string;
  objectMetaList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList[];
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      maxComputeProjectName: 'MaxComputeProjectName',
      objectMetaList: 'ObjectMetaList',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxComputeProjectName: 'string',
      objectMetaList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContentProjectMetaObjectMetaList },
      workspaceId: 'number',
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

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList extends $tea.Model {
  granteeId?: string;
  granteeName?: string;
  granteeType?: number;
  granteeTypeSub?: number;
  static names(): { [key: string]: string } {
    return {
      granteeId: 'GranteeId',
      granteeName: 'GranteeName',
      granteeType: 'GranteeType',
      granteeTypeSub: 'GranteeTypeSub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeId: 'string',
      granteeName: 'string',
      granteeType: 'number',
      granteeTypeSub: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionApplyOrderDetailResponseBodyApplyOrderDetail extends $tea.Model {
  applyBaseId?: string;
  applyTimestamp?: number;
  approveAccountList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList[];
  approveContent?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent;
  flowId?: string;
  flowStatus?: number;
  granteeObjectList?: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList[];
  static names(): { [key: string]: string } {
    return {
      applyBaseId: 'ApplyBaseId',
      applyTimestamp: 'ApplyTimestamp',
      approveAccountList: 'ApproveAccountList',
      approveContent: 'ApproveContent',
      flowId: 'FlowId',
      flowStatus: 'FlowStatus',
      granteeObjectList: 'GranteeObjectList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBaseId: 'string',
      applyTimestamp: 'number',
      approveAccountList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveAccountList },
      approveContent: GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailApproveContent,
      flowId: 'string',
      flowStatus: 'number',
      granteeObjectList: { 'type': 'array', 'itemType': GetPermissionApplyOrderDetailResponseBodyApplyOrderDetailGranteeObjectList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyData extends $tea.Model {
  appkey?: string;
  baseProject?: boolean;
  defaultDiResourceGroupIdentifier?: string;
  destination?: number;
  devStorageQuota?: string;
  developmentType?: number;
  disableDevelopment?: boolean;
  envTypes?: string[];
  gmtCreate?: string;
  gmtModified?: string;
  isAllowDownload?: number;
  isDefault?: number;
  maxFlowNode?: number;
  prodStorageQuota?: string;
  projectDescription?: string;
  projectId?: number;
  projectIdentifier?: string;
  projectMode?: number;
  projectName?: string;
  projectOwnerBaseId?: string;
  protectedMode?: number;
  residentArea?: string;
  schedulerMaxRetryTimes?: number;
  schedulerRetryInterval?: number;
  status?: number;
  tablePrivacyMode?: number;
  tenantId?: number;
  useProxyOdpsAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      appkey: 'Appkey',
      baseProject: 'BaseProject',
      defaultDiResourceGroupIdentifier: 'DefaultDiResourceGroupIdentifier',
      destination: 'Destination',
      devStorageQuota: 'DevStorageQuota',
      developmentType: 'DevelopmentType',
      disableDevelopment: 'DisableDevelopment',
      envTypes: 'EnvTypes',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isAllowDownload: 'IsAllowDownload',
      isDefault: 'IsDefault',
      maxFlowNode: 'MaxFlowNode',
      prodStorageQuota: 'ProdStorageQuota',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      projectMode: 'ProjectMode',
      projectName: 'ProjectName',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      protectedMode: 'ProtectedMode',
      residentArea: 'ResidentArea',
      schedulerMaxRetryTimes: 'SchedulerMaxRetryTimes',
      schedulerRetryInterval: 'SchedulerRetryInterval',
      status: 'Status',
      tablePrivacyMode: 'TablePrivacyMode',
      tenantId: 'TenantId',
      useProxyOdpsAccount: 'UseProxyOdpsAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appkey: 'string',
      baseProject: 'boolean',
      defaultDiResourceGroupIdentifier: 'string',
      destination: 'number',
      devStorageQuota: 'string',
      developmentType: 'number',
      disableDevelopment: 'boolean',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
      gmtModified: 'string',
      isAllowDownload: 'number',
      isDefault: 'number',
      maxFlowNode: 'number',
      prodStorageQuota: 'string',
      projectDescription: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      projectMode: 'number',
      projectName: 'string',
      projectOwnerBaseId: 'string',
      protectedMode: 'number',
      residentArea: 'string',
      schedulerMaxRetryTimes: 'number',
      schedulerRetryInterval: 'number',
      status: 'number',
      tablePrivacyMode: 'number',
      tenantId: 'number',
      useProxyOdpsAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDetailResponseBodyData extends $tea.Model {
  defaultDiResourceGroupIdentifier?: string;
  developmentType?: number;
  envTypes?: string[];
  gmtCreate?: string;
  gmtModified?: string;
  isAllowDownload?: number;
  projectDescription?: string;
  projectId?: number;
  projectIdentifier?: string;
  projectMode?: number;
  projectName?: string;
  projectOwnerBaseId?: string;
  protectedMode?: number;
  residentArea?: string;
  schedulerMaxRetryTimes?: number;
  schedulerRetryInterval?: number;
  status?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      defaultDiResourceGroupIdentifier: 'DefaultDiResourceGroupIdentifier',
      developmentType: 'DevelopmentType',
      envTypes: 'EnvTypes',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isAllowDownload: 'IsAllowDownload',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      projectMode: 'ProjectMode',
      projectName: 'ProjectName',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      protectedMode: 'ProtectedMode',
      residentArea: 'ResidentArea',
      schedulerMaxRetryTimes: 'SchedulerMaxRetryTimes',
      schedulerRetryInterval: 'SchedulerRetryInterval',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDiResourceGroupIdentifier: 'string',
      developmentType: 'number',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
      gmtModified: 'string',
      isAllowDownload: 'number',
      projectDescription: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      projectMode: 'number',
      projectName: 'string',
      projectOwnerBaseId: 'string',
      protectedMode: 'number',
      residentArea: 'string',
      schedulerMaxRetryTimes: 'number',
      schedulerRetryInterval: 'number',
      status: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityResponseBodyData extends $tea.Model {
  createTime?: number;
  entityLevel?: number;
  envType?: string;
  followers?: string;
  hasRelativeNode?: boolean;
  id?: number;
  matchExpression?: string;
  modifyTime?: number;
  modifyUser?: string;
  onDuty?: string;
  onDutyAccountName?: string;
  projectName?: string;
  relativeNode?: string;
  sql?: number;
  tableName?: string;
  task?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      entityLevel: 'EntityLevel',
      envType: 'EnvType',
      followers: 'Followers',
      hasRelativeNode: 'HasRelativeNode',
      id: 'Id',
      matchExpression: 'MatchExpression',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      onDuty: 'OnDuty',
      onDutyAccountName: 'OnDutyAccountName',
      projectName: 'ProjectName',
      relativeNode: 'RelativeNode',
      sql: 'Sql',
      tableName: 'TableName',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      entityLevel: 'number',
      envType: 'string',
      followers: 'string',
      hasRelativeNode: 'boolean',
      id: 'number',
      matchExpression: 'string',
      modifyTime: 'number',
      modifyUser: 'string',
      onDuty: 'string',
      onDutyAccountName: 'string',
      projectName: 'string',
      relativeNode: 'string',
      sql: 'number',
      tableName: 'string',
      task: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerResponseBodyData extends $tea.Model {
  alarmMode?: number;
  entityId?: string;
  follower?: string;
  followerAccountName?: string;
  id?: number;
  projectName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMode: 'AlarmMode',
      entityId: 'EntityId',
      follower: 'Follower',
      followerAccountName: 'FollowerAccountName',
      id: 'Id',
      projectName: 'ProjectName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMode: 'number',
      entityId: 'string',
      follower: 'string',
      followerAccountName: 'string',
      id: 'number',
      projectName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleResponseBodyData extends $tea.Model {
  blockType?: number;
  checker?: number;
  checkerName?: string;
  comment?: string;
  criticalThreshold?: string;
  entityId?: number;
  expectValue?: string;
  fixCheck?: boolean;
  id?: number;
  methodId?: number;
  methodName?: string;
  onDuty?: string;
  onDutyAccountName?: string;
  operator?: string;
  predictType?: number;
  property?: string;
  ruleName?: string;
  ruleType?: number;
  templateId?: number;
  templateName?: string;
  trend?: string;
  warningThreshold?: string;
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      checker: 'Checker',
      checkerName: 'CheckerName',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      fixCheck: 'FixCheck',
      id: 'Id',
      methodId: 'MethodId',
      methodName: 'MethodName',
      onDuty: 'OnDuty',
      onDutyAccountName: 'OnDutyAccountName',
      operator: 'Operator',
      predictType: 'PredictType',
      property: 'Property',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      checker: 'number',
      checkerName: 'string',
      comment: 'string',
      criticalThreshold: 'string',
      entityId: 'number',
      expectValue: 'string',
      fixCheck: 'boolean',
      id: 'number',
      methodId: 'number',
      methodName: 'string',
      onDuty: 'string',
      onDutyAccountName: 'string',
      operator: 'string',
      predictType: 'number',
      property: 'string',
      ruleName: 'string',
      ruleType: 'number',
      templateId: 'number',
      templateName: 'string',
      trend: 'string',
      warningThreshold: 'string',
      whereCondition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataBaselines extends $tea.Model {
  baselineId?: number;
  baselineName?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataBizProcesses extends $tea.Model {
  bizId?: number;
  bizProcessName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizProcessName: 'BizProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      bizProcessName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataNodes extends $tea.Model {
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
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

export class GetRemindResponseBodyDataRobots extends $tea.Model {
  atAll?: boolean;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      atAll: 'AtAll',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atAll: 'boolean',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyData extends $tea.Model {
  alertInterval?: number;
  alertMethods?: string[];
  alertTargets?: string[];
  alertUnit?: string;
  baselines?: GetRemindResponseBodyDataBaselines[];
  bizProcesses?: GetRemindResponseBodyDataBizProcesses[];
  detail?: string;
  dndEnd?: string;
  dndStart?: string;
  founder?: string;
  maxAlertTimes?: number;
  nodes?: GetRemindResponseBodyDataNodes[];
  projects?: GetRemindResponseBodyDataProjects[];
  remindId?: number;
  remindName?: string;
  remindType?: string;
  remindUnit?: string;
  robots?: GetRemindResponseBodyDataRobots[];
  useflag?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertInterval: 'AlertInterval',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      alertUnit: 'AlertUnit',
      baselines: 'Baselines',
      bizProcesses: 'BizProcesses',
      detail: 'Detail',
      dndEnd: 'DndEnd',
      dndStart: 'DndStart',
      founder: 'Founder',
      maxAlertTimes: 'MaxAlertTimes',
      nodes: 'Nodes',
      projects: 'Projects',
      remindId: 'RemindId',
      remindName: 'RemindName',
      remindType: 'RemindType',
      remindUnit: 'RemindUnit',
      robots: 'Robots',
      useflag: 'Useflag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInterval: 'number',
      alertMethods: { 'type': 'array', 'itemType': 'string' },
      alertTargets: { 'type': 'array', 'itemType': 'string' },
      alertUnit: 'string',
      baselines: { 'type': 'array', 'itemType': GetRemindResponseBodyDataBaselines },
      bizProcesses: { 'type': 'array', 'itemType': GetRemindResponseBodyDataBizProcesses },
      detail: 'string',
      dndEnd: 'string',
      dndStart: 'string',
      founder: 'string',
      maxAlertTimes: 'number',
      nodes: { 'type': 'array', 'itemType': GetRemindResponseBodyDataNodes },
      projects: { 'type': 'array', 'itemType': GetRemindResponseBodyDataProjects },
      remindId: 'number',
      remindName: 'string',
      remindType: 'string',
      remindUnit: 'string',
      robots: { 'type': 'array', 'itemType': GetRemindResponseBodyDataRobots },
      useflag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend extends $tea.Model {
  count?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend extends $tea.Model {
  count?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend extends $tea.Model {
  count?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseBodyInstanceStatusTrend extends $tea.Model {
  avgTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend[];
  todayTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend[];
  yesterdayTrend?: GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend[];
  static names(): { [key: string]: string } {
    return {
      avgTrend: 'AvgTrend',
      todayTrend: 'TodayTrend',
      yesterdayTrend: 'YesterdayTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendAvgTrend },
      todayTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendTodayTrend },
      yesterdayTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseBodyInstanceStatusTrendYesterdayTrend },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBodyData extends $tea.Model {
  addTime?: number;
  alertTime?: number;
  assigner?: string;
  baselineBuffer?: number;
  baselineId?: number;
  baselineInGroupId?: number;
  baselineName?: string;
  baselineStatus?: string;
  buffer?: number;
  dealTime?: number;
  dealUser?: string;
  fixTime?: number;
  happenTime?: number;
  instanceId?: number;
  nextAlertTime?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  topicId?: number;
  topicName?: string;
  topicStatus?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      alertTime: 'AlertTime',
      assigner: 'Assigner',
      baselineBuffer: 'BaselineBuffer',
      baselineId: 'BaselineId',
      baselineInGroupId: 'BaselineInGroupId',
      baselineName: 'BaselineName',
      baselineStatus: 'BaselineStatus',
      buffer: 'Buffer',
      dealTime: 'DealTime',
      dealUser: 'DealUser',
      fixTime: 'FixTime',
      happenTime: 'HappenTime',
      instanceId: 'InstanceId',
      nextAlertTime: 'NextAlertTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      topicId: 'TopicId',
      topicName: 'TopicName',
      topicStatus: 'TopicStatus',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'number',
      alertTime: 'number',
      assigner: 'string',
      baselineBuffer: 'number',
      baselineId: 'number',
      baselineInGroupId: 'number',
      baselineName: 'string',
      baselineStatus: 'string',
      buffer: 'number',
      dealTime: 'number',
      dealUser: 'string',
      fixTime: 'number',
      happenTime: 'number',
      instanceId: 'number',
      nextAlertTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
      topicId: 'number',
      topicName: 'string',
      topicStatus: 'string',
      topicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseBodyDataInfluences extends $tea.Model {
  baselineId?: number;
  baselineName?: string;
  bizdate?: number;
  buffer?: number;
  inGroupId?: number;
  owner?: string;
  priority?: number;
  projectId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      bizdate: 'Bizdate',
      buffer: 'Buffer',
      inGroupId: 'InGroupId',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      bizdate: 'number',
      buffer: 'number',
      inGroupId: 'number',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseBodyData extends $tea.Model {
  influences?: GetTopicInfluenceResponseBodyDataInfluences[];
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      influences: 'Influences',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      influences: { 'type': 'array', 'itemType': GetTopicInfluenceResponseBodyDataInfluences },
      topicId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourcesResponseBodyData extends $tea.Model {
  message?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesInstances extends $tea.Model {
  instanceId?: number;
  nodeId?: number;
  nodeName?: string;
  projectId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesNodes extends $tea.Model {
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert extends $tea.Model {
  baselineId?: number;
  baselineName?: string;
  baselineOwner?: string;
  bizdate?: number;
  inGroupId?: number;
  projectId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineOwner: 'BaselineOwner',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      baselineOwner: 'string',
      bizdate: 'number',
      inGroupId: 'number',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesTopics extends $tea.Model {
  instanceId?: number;
  nodeId?: number;
  topicId?: number;
  topicName?: string;
  topicOwner?: string;
  topicStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      topicId: 'TopicId',
      topicName: 'TopicName',
      topicOwner: 'TopicOwner',
      topicStatus: 'TopicStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      nodeId: 'number',
      topicId: 'number',
      topicName: 'string',
      topicOwner: 'string',
      topicStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessages extends $tea.Model {
  alertId?: number;
  alertMessageStatus?: string;
  alertMethod?: string;
  alertTime?: number;
  alertUser?: string;
  content?: string;
  instances?: ListAlertMessagesResponseBodyDataAlertMessagesInstances[];
  nodes?: ListAlertMessagesResponseBodyDataAlertMessagesNodes[];
  remindId?: number;
  remindName?: string;
  slaAlert?: ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert;
  source?: string;
  topics?: ListAlertMessagesResponseBodyDataAlertMessagesTopics[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertMessageStatus: 'AlertMessageStatus',
      alertMethod: 'AlertMethod',
      alertTime: 'AlertTime',
      alertUser: 'AlertUser',
      content: 'Content',
      instances: 'Instances',
      nodes: 'Nodes',
      remindId: 'RemindId',
      remindName: 'RemindName',
      slaAlert: 'SlaAlert',
      source: 'Source',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertMessageStatus: 'string',
      alertMethod: 'string',
      alertTime: 'number',
      alertUser: 'string',
      content: 'string',
      instances: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesInstances },
      nodes: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesNodes },
      remindId: 'number',
      remindName: 'string',
      slaAlert: ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert,
      source: 'string',
      topics: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyData extends $tea.Model {
  alertMessages?: ListAlertMessagesResponseBodyDataAlertMessages[];
  pageNumber?: string;
  pageSize?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      alertMessages: 'AlertMessages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertMessages: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessages },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseBodyDataBaselines extends $tea.Model {
  baselineId?: number;
  baselineName?: string;
  baselineType?: string;
  expHour?: number;
  expMinu?: number;
  hourExpDetail?: string;
  hourSlaDetail?: string;
  isDefault?: boolean;
  owner?: string;
  priority?: number;
  projectId?: number;
  slaHour?: number;
  slaMinu?: number;
  useFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      expHour: 'ExpHour',
      expMinu: 'ExpMinu',
      hourExpDetail: 'HourExpDetail',
      hourSlaDetail: 'HourSlaDetail',
      isDefault: 'IsDefault',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      slaHour: 'SlaHour',
      slaMinu: 'SlaMinu',
      useFlag: 'UseFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      expHour: 'number',
      expMinu: 'number',
      hourExpDetail: 'string',
      hourSlaDetail: 'string',
      isDefault: 'boolean',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      slaHour: 'number',
      slaMinu: 'number',
      useFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseBodyData extends $tea.Model {
  baselines?: ListBaselineConfigsResponseBodyDataBaselines[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      baselines: 'Baselines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselines: { 'type': 'array', 'itemType': ListBaselineConfigsResponseBodyDataBaselines },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseBodyDataBaselineStatuses extends $tea.Model {
  baselineId?: number;
  baselineName?: string;
  bizdate?: number;
  buffer?: number;
  endCast?: number;
  expTime?: number;
  finishStatus?: string;
  finishTime?: number;
  inGroupId?: number;
  owner?: string;
  priority?: number;
  projectId?: number;
  slaTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      bizdate: 'Bizdate',
      buffer: 'Buffer',
      endCast: 'EndCast',
      expTime: 'ExpTime',
      finishStatus: 'FinishStatus',
      finishTime: 'FinishTime',
      inGroupId: 'InGroupId',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      slaTime: 'SlaTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      bizdate: 'number',
      buffer: 'number',
      endCast: 'number',
      expTime: 'number',
      finishStatus: 'string',
      finishTime: 'number',
      inGroupId: 'number',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      slaTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseBodyData extends $tea.Model {
  baselineStatuses?: ListBaselineStatusesResponseBodyDataBaselineStatuses[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      baselineStatuses: 'BaselineStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineStatuses: { 'type': 'array', 'itemType': ListBaselineStatusesResponseBodyDataBaselineStatuses },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseBodyDataBusiness extends $tea.Model {
  businessId?: number;
  businessName?: string;
  description?: string;
  owner?: string;
  projectId?: number;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      projectId: 'number',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseBodyData extends $tea.Model {
  business?: ListBusinessResponseBodyDataBusiness[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: { 'type': 'array', 'itemType': ListBusinessResponseBodyDataBusiness },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseBodyDataCalcEngines extends $tea.Model {
  bindingProjectId?: number;
  bindingProjectName?: string;
  calcEngineType?: string;
  dwRegion?: string;
  engineId?: number;
  engineInfo?: { [key: string]: any };
  envType?: string;
  gmtCreate?: string;
  isDefault?: boolean;
  name?: string;
  region?: string;
  taskAuthType?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bindingProjectId: 'BindingProjectId',
      bindingProjectName: 'BindingProjectName',
      calcEngineType: 'CalcEngineType',
      dwRegion: 'DwRegion',
      engineId: 'EngineId',
      engineInfo: 'EngineInfo',
      envType: 'EnvType',
      gmtCreate: 'GmtCreate',
      isDefault: 'IsDefault',
      name: 'Name',
      region: 'Region',
      taskAuthType: 'TaskAuthType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingProjectId: 'number',
      bindingProjectName: 'string',
      calcEngineType: 'string',
      dwRegion: 'string',
      engineId: 'number',
      engineInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envType: 'string',
      gmtCreate: 'string',
      isDefault: 'boolean',
      name: 'string',
      region: 'string',
      taskAuthType: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseBodyData extends $tea.Model {
  calcEngines?: ListCalcEnginesResponseBodyDataCalcEngines[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calcEngines: 'CalcEngines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcEngines: { 'type': 'array', 'itemType': ListCalcEnginesResponseBodyDataCalcEngines },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnections extends $tea.Model {
  bindingCalcEngineId?: number;
  connectStatus?: number;
  connectionType?: string;
  content?: string;
  defaultEngine?: boolean;
  description?: string;
  envType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  operator?: string;
  projectId?: number;
  sequence?: number;
  shared?: boolean;
  status?: number;
  subType?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bindingCalcEngineId: 'BindingCalcEngineId',
      connectStatus: 'ConnectStatus',
      connectionType: 'ConnectionType',
      content: 'Content',
      defaultEngine: 'DefaultEngine',
      description: 'Description',
      envType: 'EnvType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      operator: 'Operator',
      projectId: 'ProjectId',
      sequence: 'Sequence',
      shared: 'Shared',
      status: 'Status',
      subType: 'SubType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingCalcEngineId: 'number',
      connectStatus: 'number',
      connectionType: 'string',
      content: 'string',
      defaultEngine: 'boolean',
      description: 'string',
      envType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      operator: 'string',
      projectId: 'number',
      sequence: 'number',
      shared: 'boolean',
      status: 'number',
      subType: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyData extends $tea.Model {
  connections?: ListConnectionsResponseBodyDataConnections[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnections },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListDagsResponseBodyDataDags extends $tea.Model {
  bizdate?: number;
  createTime?: number;
  createUser?: string;
  dagId?: number;
  finishTime?: number;
  gmtdate?: number;
  modifyTime?: number;
  name?: string;
  opSeq?: number;
  projectId?: number;
  startTime?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dagId: 'DagId',
      finishTime: 'FinishTime',
      gmtdate: 'Gmtdate',
      modifyTime: 'ModifyTime',
      name: 'Name',
      opSeq: 'OpSeq',
      projectId: 'ProjectId',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      createTime: 'number',
      createUser: 'string',
      dagId: 'number',
      finishTime: 'number',
      gmtdate: 'number',
      modifyTime: 'number',
      name: 'string',
      opSeq: 'number',
      projectId: 'number',
      startTime: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDagsResponseBodyData extends $tea.Model {
  dags?: ListDagsResponseBodyDataDags[];
  static names(): { [key: string]: string } {
    return {
      dags: 'Dags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dags: { 'type': 'array', 'itemType': ListDagsResponseBodyDataDags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords extends $tea.Model {
  createdTime?: string;
  creatorId?: string;
  endTime?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      endTime: 'EndTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      creatorId: 'string',
      endTime: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList extends $tea.Model {
  apiId?: number;
  apiName?: string;
  apiPath?: string;
  apiStatus?: number;
  authorizationRecords?: ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords[];
  createdTime?: string;
  creatorId?: string;
  groupId?: string;
  modifiedTime?: string;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      apiStatus: 'ApiStatus',
      authorizationRecords: 'AuthorizationRecords',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      apiPath: 'string',
      apiStatus: 'number',
      authorizationRecords: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords },
      createdTime: 'string',
      creatorId: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyData extends $tea.Model {
  apiAuthorizationList?: ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiAuthorizationList: 'ApiAuthorizationList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAuthorizationList: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  columnName?: string;
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisRegistrationDetails extends $tea.Model {
  failedResultSample?: string;
  registrationErrorCodes?: ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters?: ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters[];
  serviceContentType?: number;
  serviceHost?: string;
  servicePath?: string;
  serviceRequestBodyDescription?: string;
  successfulResultSample?: string;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters },
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisScriptDetailsScriptConnection extends $tea.Model {
  connectionId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisScriptDetailsScriptRequestParameters extends $tea.Model {
  columnName?: string;
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisScriptDetailsScriptResponseParameters extends $tea.Model {
  columnName?: string;
  exampleValue?: string;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisScriptDetails extends $tea.Model {
  isPagedResponse?: boolean;
  script?: string;
  scriptConnection?: ListDataServiceApisResponseBodyDataApisScriptDetailsScriptConnection;
  scriptRequestParameters?: ListDataServiceApisResponseBodyDataApisScriptDetailsScriptRequestParameters[];
  scriptResponseParameters?: ListDataServiceApisResponseBodyDataApisScriptDetailsScriptResponseParameters[];
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      scriptConnection: 'ScriptConnection',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      script: 'string',
      scriptConnection: ListDataServiceApisResponseBodyDataApisScriptDetailsScriptConnection,
      scriptRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisScriptDetailsScriptResponseParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisWizardDetailsWizardConnection extends $tea.Model {
  connectionId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisWizardDetailsWizardRequestParameters extends $tea.Model {
  columnName?: string;
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisWizardDetailsWizardResponseParameters extends $tea.Model {
  columnName?: string;
  exampleValue?: string;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApisWizardDetails extends $tea.Model {
  isPagedResponse?: boolean;
  wizardConnection?: ListDataServiceApisResponseBodyDataApisWizardDetailsWizardConnection;
  wizardRequestParameters?: ListDataServiceApisResponseBodyDataApisWizardDetailsWizardRequestParameters[];
  wizardResponseParameters?: ListDataServiceApisResponseBodyDataApisWizardDetailsWizardResponseParameters[];
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      wizardConnection: 'WizardConnection',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      wizardConnection: ListDataServiceApisResponseBodyDataApisWizardDetailsWizardConnection,
      wizardRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApisWizardDetailsWizardResponseParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyDataApis extends $tea.Model {
  apiId?: number;
  apiMode?: number;
  apiName?: string;
  apiPath?: string;
  createdTime?: string;
  creatorId?: string;
  description?: string;
  folderId?: number;
  groupId?: string;
  modifiedTime?: string;
  operatorId?: string;
  projectId?: number;
  protocols?: number[];
  registrationDetails?: ListDataServiceApisResponseBodyDataApisRegistrationDetails;
  requestMethod?: number;
  responseContentType?: number;
  scriptDetails?: ListDataServiceApisResponseBodyDataApisScriptDetails;
  status?: number;
  tenantId?: number;
  timeout?: number;
  visibleRange?: number;
  wizardDetails?: ListDataServiceApisResponseBodyDataApisWizardDetails;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      folderId: 'FolderId',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      scriptDetails: 'ScriptDetails',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      folderId: 'number',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: ListDataServiceApisResponseBodyDataApisRegistrationDetails,
      requestMethod: 'number',
      responseContentType: 'number',
      scriptDetails: ListDataServiceApisResponseBodyDataApisScriptDetails,
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      wizardDetails: ListDataServiceApisResponseBodyDataApisWizardDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseBodyData extends $tea.Model {
  apis?: ListDataServiceApisResponseBodyDataApis[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: { 'type': 'array', 'itemType': ListDataServiceApisResponseBodyDataApis },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponseBodyDataApplications extends $tea.Model {
  applicationId?: number;
  applicationName?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      applicationName: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponseBodyData extends $tea.Model {
  applications?: ListDataServiceApplicationsResponseBodyDataApplications[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListDataServiceApplicationsResponseBodyDataApplications },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList extends $tea.Model {
  apiId?: number;
  apiName?: string;
  apiPath?: string;
  apiStatus?: number;
  createdTime?: string;
  creatorId?: string;
  grantCreatedTime?: string;
  grantEndTime?: string;
  grantOperatorId?: string;
  groupId?: string;
  modifiedTime?: string;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      apiStatus: 'ApiStatus',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      grantCreatedTime: 'GrantCreatedTime',
      grantEndTime: 'GrantEndTime',
      grantOperatorId: 'GrantOperatorId',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      apiPath: 'string',
      apiStatus: 'number',
      createdTime: 'string',
      creatorId: 'string',
      grantCreatedTime: 'string',
      grantEndTime: 'string',
      grantOperatorId: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseBodyData extends $tea.Model {
  apiAuthorizedList?: ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiAuthorizedList: 'ApiAuthorizedList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAuthorizedList: { 'type': 'array', 'itemType': ListDataServiceAuthorizedApisResponseBodyDataApiAuthorizedList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseBodyFolderPagingResultFolders extends $tea.Model {
  createdTime?: string;
  folderId?: number;
  folderName?: string;
  groupId?: string;
  modifiedTime?: string;
  parentId?: number;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      folderId: 'number',
      folderName: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      parentId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseBodyFolderPagingResult extends $tea.Model {
  folders?: ListDataServiceFoldersResponseBodyFolderPagingResultFolders[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: { 'type': 'array', 'itemType': ListDataServiceFoldersResponseBodyFolderPagingResultFolders },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseBodyGroupPagingResultGroups extends $tea.Model {
  apiGatewayGroupId?: string;
  createdTime?: string;
  creatorId?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  projectId?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiGatewayGroupId: 'ApiGatewayGroupId',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGatewayGroupId: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseBodyGroupPagingResult extends $tea.Model {
  groups?: ListDataServiceGroupsResponseBodyGroupPagingResultGroups[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListDataServiceGroupsResponseBodyGroupPagingResultGroups },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails extends $tea.Model {
  failedResultSample?: string;
  registrationErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters[];
  serviceContentType?: number;
  serviceHost?: string;
  servicePath?: string;
  serviceRequestBodyDescription?: string;
  successfulResultSample?: string;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters },
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection extends $tea.Model {
  connectionId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters extends $tea.Model {
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters extends $tea.Model {
  exampleValue?: string;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetails extends $tea.Model {
  failedResultSample?: string;
  isPagedResponse?: boolean;
  script?: string;
  scriptConnection?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection;
  scriptErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes[];
  scriptRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters[];
  scriptResponseParameters?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters[];
  successfulResultSample?: string;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      scriptConnection: 'ScriptConnection',
      scriptErrorCodes: 'ScriptErrorCodes',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      successfulResultSample: 'SuccessfulResultSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      script: 'string',
      scriptConnection: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection,
      scriptErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes },
      scriptRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters },
      successfulResultSample: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection extends $tea.Model {
  connectionId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters extends $tea.Model {
  defaultValue?: string;
  exampleValue?: string;
  isRequiredParameter?: boolean;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterOperator?: number;
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters extends $tea.Model {
  exampleValue?: string;
  parameterDataType?: number;
  parameterDescription?: string;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetails extends $tea.Model {
  failedResultSample?: string;
  isPagedResponse?: boolean;
  successfulResultSample?: string;
  wizardConnection?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection;
  wizardErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes[];
  wizardRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters[];
  wizardResponseParameters?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters[];
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      wizardConnection: 'WizardConnection',
      wizardErrorCodes: 'WizardErrorCodes',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      wizardConnection: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection,
      wizardErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes },
      wizardRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApis extends $tea.Model {
  apiId?: number;
  apiMode?: number;
  apiName?: string;
  apiPath?: string;
  createdTime?: string;
  creatorId?: string;
  description?: string;
  groupId?: string;
  modifiedTime?: string;
  operatorId?: string;
  projectId?: number;
  protocols?: number[];
  registrationDetails?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails;
  requestMethod?: number;
  responseContentType?: number;
  scriptDetails?: ListDataServicePublishedApisResponseBodyDataApisScriptDetails;
  status?: number;
  tenantId?: number;
  timeout?: number;
  visibleRange?: number;
  wizardDetails?: ListDataServicePublishedApisResponseBodyDataApisWizardDetails;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      scriptDetails: 'ScriptDetails',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails,
      requestMethod: 'number',
      responseContentType: 'number',
      scriptDetails: ListDataServicePublishedApisResponseBodyDataApisScriptDetails,
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      wizardDetails: ListDataServicePublishedApisResponseBodyDataApisWizardDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyData extends $tea.Model {
  apis?: ListDataServicePublishedApisResponseBodyDataApis[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApis },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyDataDataSources extends $tea.Model {
  bindingCalcEngineId?: number;
  connectStatus?: number;
  content?: string;
  dataSourceType?: string;
  defaultEngine?: boolean;
  description?: string;
  envType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  operator?: string;
  projectId?: number;
  sequence?: number;
  shared?: boolean;
  status?: number;
  subType?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bindingCalcEngineId: 'BindingCalcEngineId',
      connectStatus: 'ConnectStatus',
      content: 'Content',
      dataSourceType: 'DataSourceType',
      defaultEngine: 'DefaultEngine',
      description: 'Description',
      envType: 'EnvType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      operator: 'Operator',
      projectId: 'ProjectId',
      sequence: 'Sequence',
      shared: 'Shared',
      status: 'Status',
      subType: 'SubType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingCalcEngineId: 'number',
      connectStatus: 'number',
      content: 'string',
      dataSourceType: 'string',
      defaultEngine: 'boolean',
      description: 'string',
      envType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      operator: 'string',
      projectId: 'number',
      sequence: 'number',
      shared: 'boolean',
      status: 'number',
      subType: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyData extends $tea.Model {
  dataSources?: ListDataSourcesResponseBodyDataDataSources[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDataDataSources },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyDataDeployments extends $tea.Model {
  createTime?: number;
  creator?: string;
  errorMessage?: string;
  executeTime?: number;
  executor?: string;
  id?: number;
  name?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      executor: 'Executor',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      executor: 'string',
      id: 'number',
      name: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyData extends $tea.Model {
  deployments?: ListDeploymentsResponseBodyDataDeployments[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deployments: 'Deployments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployments: { 'type': 'array', 'itemType': ListDeploymentsResponseBodyDataDeployments },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo extends $tea.Model {
  nodeType?: number;
  nodeTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      nodeTypeName: 'NodeTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'number',
      nodeTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileTypeResponseBodyNodeTypeInfoList extends $tea.Model {
  nodeTypeInfo?: ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeTypeInfo: 'NodeTypeInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypeInfo: { 'type': 'array', 'itemType': ListFileTypeResponseBodyNodeTypeInfoListNodeTypeInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseBodyDataFileVersions extends $tea.Model {
  changeType?: string;
  comment?: string;
  commitTime?: number;
  commitUser?: string;
  fileContent?: string;
  fileName?: string;
  filePropertyContent?: string;
  fileVersion?: number;
  isCurrentProd?: boolean;
  nodeContent?: string;
  nodeId?: number;
  status?: string;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      comment: 'Comment',
      commitTime: 'CommitTime',
      commitUser: 'CommitUser',
      fileContent: 'FileContent',
      fileName: 'FileName',
      filePropertyContent: 'FilePropertyContent',
      fileVersion: 'FileVersion',
      isCurrentProd: 'IsCurrentProd',
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
      status: 'Status',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      comment: 'string',
      commitTime: 'number',
      commitUser: 'string',
      fileContent: 'string',
      fileName: 'string',
      filePropertyContent: 'string',
      fileVersion: 'number',
      isCurrentProd: 'boolean',
      nodeContent: 'string',
      nodeId: 'number',
      status: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseBodyData extends $tea.Model {
  fileVersions?: ListFileVersionsResponseBodyDataFileVersions[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileVersions: 'FileVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileVersions: { 'type': 'array', 'itemType': ListFileVersionsResponseBodyDataFileVersions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBodyDataFiles extends $tea.Model {
  autoParsing?: boolean;
  bizId?: number;
  businessId?: number;
  commitStatus?: number;
  connectionName?: string;
  content?: string;
  createTime?: number;
  createUser?: string;
  currentVersion?: number;
  fileDescription?: string;
  fileFolderId?: string;
  fileId?: number;
  fileName?: string;
  fileType?: number;
  isMaxCompute?: boolean;
  lastEditTime?: number;
  lastEditUser?: string;
  nodeId?: number;
  owner?: string;
  parentId?: number;
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      autoParsing: 'AutoParsing',
      bizId: 'BizId',
      businessId: 'BusinessId',
      commitStatus: 'CommitStatus',
      connectionName: 'ConnectionName',
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      currentVersion: 'CurrentVersion',
      fileDescription: 'FileDescription',
      fileFolderId: 'FileFolderId',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      isMaxCompute: 'IsMaxCompute',
      lastEditTime: 'LastEditTime',
      lastEditUser: 'LastEditUser',
      nodeId: 'NodeId',
      owner: 'Owner',
      parentId: 'ParentId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoParsing: 'boolean',
      bizId: 'number',
      businessId: 'number',
      commitStatus: 'number',
      connectionName: 'string',
      content: 'string',
      createTime: 'number',
      createUser: 'string',
      currentVersion: 'number',
      fileDescription: 'string',
      fileFolderId: 'string',
      fileId: 'number',
      fileName: 'string',
      fileType: 'number',
      isMaxCompute: 'boolean',
      lastEditTime: 'number',
      lastEditUser: 'string',
      nodeId: 'number',
      owner: 'string',
      parentId: 'number',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBodyData extends $tea.Model {
  files?: ListFilesResponseBodyDataFiles[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListFilesResponseBodyDataFiles },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseBodyDataFolders extends $tea.Model {
  folderId?: string;
  folderPath?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseBodyData extends $tea.Model {
  folders?: ListFoldersResponseBodyDataFolders[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: { 'type': 'array', 'itemType': ListFoldersResponseBodyDataFolders },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAmountResponseBodyInstanceCounts extends $tea.Model {
  count?: number;
  date?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      date: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataInstances extends $tea.Model {
  baselineId?: number;
  beginRunningTime?: number;
  beginWaitResTime?: number;
  beginWaitTimeTime?: number;
  bizdate?: number;
  businessId?: number;
  connection?: string;
  createTime?: number;
  createUser?: string;
  cycTime?: number;
  dagId?: number;
  dagType?: string;
  dqcDescription?: string;
  dqcType?: number;
  errorMessage?: string;
  finishTime?: number;
  instanceId?: number;
  modifyTime?: number;
  nodeId?: number;
  nodeName?: string;
  paramValues?: string;
  priority?: number;
  relatedFlowId?: number;
  repeatInterval?: number;
  repeatability?: boolean;
  status?: string;
  taskRerunTime?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizdate: 'Bizdate',
      businessId: 'BusinessId',
      connection: 'Connection',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      cycTime: 'CycTime',
      dagId: 'DagId',
      dagType: 'DagType',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      errorMessage: 'ErrorMessage',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      paramValues: 'ParamValues',
      priority: 'Priority',
      relatedFlowId: 'RelatedFlowId',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      status: 'Status',
      taskRerunTime: 'TaskRerunTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizdate: 'number',
      businessId: 'number',
      connection: 'string',
      createTime: 'number',
      createUser: 'string',
      cycTime: 'number',
      dagId: 'number',
      dagType: 'string',
      dqcDescription: 'string',
      dqcType: 'number',
      errorMessage: 'string',
      finishTime: 'number',
      instanceId: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      paramValues: 'string',
      priority: 'number',
      relatedFlowId: 'number',
      repeatInterval: 'number',
      repeatability: 'boolean',
      status: 'string',
      taskRerunTime: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $tea.Model {
  instances?: ListInstancesResponseBodyDataInstances[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstances },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualDagInstancesResponseBodyInstances extends $tea.Model {
  beginRunningTime?: number;
  beginWaitResTime?: number;
  beginWaitTimeTime?: number;
  bizDate?: number;
  createTime?: number;
  createUser?: string;
  cycTime?: number;
  dagId?: number;
  dagType?: string;
  finishTime?: number;
  instanceId?: number;
  modifyTime?: number;
  nodeId?: number;
  nodeName?: string;
  paramValues?: string;
  status?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizDate: 'BizDate',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      cycTime: 'CycTime',
      dagId: 'DagId',
      dagType: 'DagType',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      paramValues: 'ParamValues',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizDate: 'number',
      createTime: 'number',
      createUser: 'string',
      cycTime: 'number',
      dagId: 'number',
      dagType: 'string',
      finishTime: 'number',
      instanceId: 'number',
      modifyTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      paramValues: 'string',
      status: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseBodyDatabaseInfoDbList extends $tea.Model {
  createTimeStamp?: number;
  location?: string;
  modifiedTimeStamp?: number;
  name?: string;
  ownerId?: string;
  type?: string;
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      location: 'Location',
      modifiedTimeStamp: 'ModifiedTimeStamp',
      name: 'Name',
      ownerId: 'OwnerId',
      type: 'Type',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      location: 'string',
      modifiedTimeStamp: 'number',
      name: 'string',
      ownerId: 'string',
      type: 'string',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseBodyDatabaseInfo extends $tea.Model {
  dbList?: ListMetaDBResponseBodyDatabaseInfoDbList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: { 'type': 'array', 'itemType': ListMetaDBResponseBodyDatabaseInfoDbList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIOResponseBodyData extends $tea.Model {
  data?: string;
  nodeId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nodeId: 'NodeId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      nodeId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInputOrOutputResponseBodyData extends $tea.Model {
  data?: string;
  nodeId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nodeId: 'NodeId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      nodeId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyDataNodes extends $tea.Model {
  baselineId?: number;
  businessId?: number;
  connection?: string;
  cronExpress?: string;
  description?: string;
  dqcDescription?: string;
  dqcType?: number;
  nodeId?: number;
  nodeName?: string;
  ownerId?: string;
  paramValues?: string;
  priority?: number;
  programType?: string;
  projectId?: number;
  relatedFlowId?: number;
  repeatInterval?: number;
  repeatability?: boolean;
  resGroupName?: string;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      businessId: 'BusinessId',
      connection: 'Connection',
      cronExpress: 'CronExpress',
      description: 'Description',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      paramValues: 'ParamValues',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      relatedFlowId: 'RelatedFlowId',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      resGroupName: 'ResGroupName',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      businessId: 'number',
      connection: 'string',
      cronExpress: 'string',
      description: 'string',
      dqcDescription: 'string',
      dqcType: 'number',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      paramValues: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      relatedFlowId: 'number',
      repeatInterval: 'number',
      repeatability: 'boolean',
      resGroupName: 'string',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyData extends $tea.Model {
  nodes?: ListNodesResponseBodyDataNodes[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyDataNodes },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByBaselineResponseBodyData extends $tea.Model {
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputResponseBodyDataNodeList extends $tea.Model {
  baselineId?: number;
  connection?: string;
  cronExpress?: string;
  description?: string;
  dqcDescription?: string;
  dqcType?: number;
  fileType?: string;
  nodeId?: number;
  nodeName?: string;
  ownerId?: string;
  paramValues?: string;
  priority?: number;
  programType?: string;
  projectId?: number;
  relatedFlowId?: number;
  repeatInterval?: number;
  repeatability?: boolean;
  resGroupName?: string;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      connection: 'Connection',
      cronExpress: 'CronExpress',
      description: 'Description',
      dqcDescription: 'DqcDescription',
      dqcType: 'DqcType',
      fileType: 'FileType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      paramValues: 'ParamValues',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      relatedFlowId: 'RelatedFlowId',
      repeatInterval: 'RepeatInterval',
      repeatability: 'Repeatability',
      resGroupName: 'ResGroupName',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      connection: 'string',
      cronExpress: 'string',
      description: 'string',
      dqcDescription: 'string',
      dqcType: 'number',
      fileType: 'string',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      paramValues: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      relatedFlowId: 'number',
      repeatInterval: 'number',
      repeatability: 'boolean',
      resGroupName: 'string',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByOutputResponseBodyData extends $tea.Model {
  nodeList?: ListNodesByOutputResponseBodyDataNodeList[];
  output?: string;
  static names(): { [key: string]: string } {
    return {
      nodeList: 'NodeList',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeList: { 'type': 'array', 'itemType': ListNodesByOutputResponseBodyDataNodeList },
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList extends $tea.Model {
  actions?: string[];
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMeta extends $tea.Model {
  objectMetaList?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList[];
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      objectMetaList: 'ObjectMetaList',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectMetaList: { 'type': 'array', 'itemType': ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContentProjectMetaObjectMetaList },
      workspaceName: 'string',
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
  approveContent?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent;
  flowId?: string;
  flowStatus?: number;
  static names(): { [key: string]: string } {
    return {
      applyBaseId: 'ApplyBaseId',
      applyTimestamp: 'ApplyTimestamp',
      approveContent: 'ApproveContent',
      flowId: 'FlowId',
      flowStatus: 'FlowStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBaseId: 'string',
      applyTimestamp: 'number',
      approveContent: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrderApproveContent,
      flowId: 'string',
      flowStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionApplyOrdersResponseBodyApplyOrders extends $tea.Model {
  applyOrder?: ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrder[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applyOrder: 'ApplyOrder',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyOrder: { 'type': 'array', 'itemType': ListPermissionApplyOrdersResponseBodyApplyOrdersApplyOrder },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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
  projectRoleCode?: string;
  projectRoleId?: number;
  projectRoleName?: string;
  projectRoleType?: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleCode: 'ProjectRoleCode',
      projectRoleId: 'ProjectRoleId',
      projectRoleName: 'ProjectRoleName',
      projectRoleType: 'ProjectRoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleCode: 'string',
      projectRoleId: 'number',
      projectRoleName: 'string',
      projectRoleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyDataProjectMemberList extends $tea.Model {
  nick?: string;
  projectMemberId?: string;
  projectMemberName?: string;
  projectMemberType?: string;
  projectRoleList?: ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      nick: 'Nick',
      projectMemberId: 'ProjectMemberId',
      projectMemberName: 'ProjectMemberName',
      projectMemberType: 'ProjectMemberType',
      projectRoleList: 'ProjectRoleList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      projectMemberId: 'string',
      projectMemberName: 'string',
      projectMemberType: 'string',
      projectRoleList: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectMemberList?: ListProjectMembersResponseBodyDataProjectMemberList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectMemberList: 'ProjectMemberList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectMemberList: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyDataProjectMemberList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBodyProjectRoleList extends $tea.Model {
  projectRoleCode?: string;
  projectRoleId?: number;
  projectRoleName?: string;
  projectRoleType?: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleCode: 'ProjectRoleCode',
      projectRoleId: 'ProjectRoleId',
      projectRoleName: 'ProjectRoleName',
      projectRoleType: 'ProjectRoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleCode: 'string',
      projectRoleId: 'number',
      projectRoleName: 'string',
      projectRoleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPageResultProjectList extends $tea.Model {
  projectDescription?: string;
  projectId?: number;
  projectIdentifier?: string;
  projectName?: string;
  projectOwnerBaseId?: string;
  projectStatus?: number;
  projectStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      projectName: 'ProjectName',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      projectStatus: 'ProjectStatus',
      projectStatusCode: 'ProjectStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectDescription: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      projectName: 'string',
      projectOwnerBaseId: 'string',
      projectStatus: 'number',
      projectStatusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPageResult extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectList?: ListProjectsResponseBodyPageResultProjectList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectList: 'ProjectList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectList: { 'type': 'array', 'itemType': ListProjectsResponseBodyPageResultProjectList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue extends $tea.Model {
  bizDate?: string;
  discreteProperty?: string;
  singleCheckResult?: number;
  threshold?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      singleCheckResult: 'SingleCheckResult',
      threshold: 'Threshold',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      discreteProperty: 'string',
      singleCheckResult: 'number',
      threshold: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue extends $tea.Model {
  bizDate?: string;
  discreteProperty?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      discreteProperty: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBodyDataRuleChecks extends $tea.Model {
  actualExpression?: string;
  beginTime?: number;
  bizDate?: number;
  blockType?: number;
  checkResult?: number;
  checkResultStatus?: number;
  checkerId?: number;
  checkerName?: string;
  checkerType?: number;
  comment?: string;
  criticalThreshold?: number;
  dateType?: string;
  discreteCheck?: boolean;
  endTime?: number;
  entityId?: number;
  expectValue?: number;
  externalId?: string;
  externalType?: string;
  fixedCheck?: boolean;
  id?: number;
  isPrediction?: boolean;
  lowerValue?: number;
  matchExpression?: string;
  methodName?: string;
  op?: string;
  projectName?: string;
  property?: string;
  referenceValue?: ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue[];
  resultString?: string;
  ruleId?: number;
  ruleName?: string;
  sampleValue?: ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue[];
  tableName?: string;
  taskId?: string;
  templateId?: number;
  templateName?: string;
  timeCost?: string;
  trend?: string;
  upperValue?: number;
  warningThreshold?: number;
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      actualExpression: 'ActualExpression',
      beginTime: 'BeginTime',
      bizDate: 'BizDate',
      blockType: 'BlockType',
      checkResult: 'CheckResult',
      checkResultStatus: 'CheckResultStatus',
      checkerId: 'CheckerId',
      checkerName: 'CheckerName',
      checkerType: 'CheckerType',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      dateType: 'DateType',
      discreteCheck: 'DiscreteCheck',
      endTime: 'EndTime',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      externalId: 'ExternalId',
      externalType: 'ExternalType',
      fixedCheck: 'FixedCheck',
      id: 'Id',
      isPrediction: 'IsPrediction',
      lowerValue: 'LowerValue',
      matchExpression: 'MatchExpression',
      methodName: 'MethodName',
      op: 'Op',
      projectName: 'ProjectName',
      property: 'Property',
      referenceValue: 'ReferenceValue',
      resultString: 'ResultString',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sampleValue: 'SampleValue',
      tableName: 'TableName',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeCost: 'TimeCost',
      trend: 'Trend',
      upperValue: 'UpperValue',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualExpression: 'string',
      beginTime: 'number',
      bizDate: 'number',
      blockType: 'number',
      checkResult: 'number',
      checkResultStatus: 'number',
      checkerId: 'number',
      checkerName: 'string',
      checkerType: 'number',
      comment: 'string',
      criticalThreshold: 'number',
      dateType: 'string',
      discreteCheck: 'boolean',
      endTime: 'number',
      entityId: 'number',
      expectValue: 'number',
      externalId: 'string',
      externalType: 'string',
      fixedCheck: 'boolean',
      id: 'number',
      isPrediction: 'boolean',
      lowerValue: 'number',
      matchExpression: 'string',
      methodName: 'string',
      op: 'string',
      projectName: 'string',
      property: 'string',
      referenceValue: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecksReferenceValue },
      resultString: 'string',
      ruleId: 'number',
      ruleName: 'string',
      sampleValue: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecksSampleValue },
      tableName: 'string',
      taskId: 'string',
      templateId: 'number',
      templateName: 'string',
      timeCost: 'string',
      trend: 'string',
      upperValue: 'number',
      warningThreshold: 'number',
      whereCondition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  ruleChecks?: ListQualityResultsByEntityResponseBodyDataRuleChecks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleChecks: 'RuleChecks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      ruleChecks: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseBodyDataRuleChecks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue extends $tea.Model {
  bizDate?: string;
  discreteProperty?: string;
  singleCheckResult?: number;
  threshold?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      singleCheckResult: 'SingleCheckResult',
      threshold: 'Threshold',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      discreteProperty: 'string',
      singleCheckResult: 'number',
      threshold: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue extends $tea.Model {
  bizDate?: string;
  discreteProperty?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      discreteProperty: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyDataRuleChecks extends $tea.Model {
  actualExpression?: string;
  beginTime?: number;
  bizDate?: number;
  blockType?: number;
  checkResult?: number;
  checkResultStatus?: number;
  checkerId?: number;
  checkerName?: string;
  checkerType?: number;
  comment?: string;
  criticalThreshold?: number;
  dateType?: string;
  discreteCheck?: boolean;
  endTime?: number;
  entityId?: number;
  expectValue?: number;
  externalId?: string;
  externalType?: string;
  fixedCheck?: boolean;
  id?: number;
  isPrediction?: boolean;
  lowerValue?: number;
  matchExpression?: string;
  methodName?: string;
  op?: string;
  projectName?: string;
  property?: string;
  referenceValue?: ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue[];
  resultString?: string;
  ruleId?: number;
  ruleName?: string;
  sampleValue?: ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue[];
  tableName?: string;
  taskId?: string;
  templateId?: number;
  templateName?: string;
  timeCost?: string;
  trend?: string;
  upperValue?: number;
  warningThreshold?: number;
  whereCondition?: string;
  static names(): { [key: string]: string } {
    return {
      actualExpression: 'ActualExpression',
      beginTime: 'BeginTime',
      bizDate: 'BizDate',
      blockType: 'BlockType',
      checkResult: 'CheckResult',
      checkResultStatus: 'CheckResultStatus',
      checkerId: 'CheckerId',
      checkerName: 'CheckerName',
      checkerType: 'CheckerType',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      dateType: 'DateType',
      discreteCheck: 'DiscreteCheck',
      endTime: 'EndTime',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      externalId: 'ExternalId',
      externalType: 'ExternalType',
      fixedCheck: 'FixedCheck',
      id: 'Id',
      isPrediction: 'IsPrediction',
      lowerValue: 'LowerValue',
      matchExpression: 'MatchExpression',
      methodName: 'MethodName',
      op: 'Op',
      projectName: 'ProjectName',
      property: 'Property',
      referenceValue: 'ReferenceValue',
      resultString: 'ResultString',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sampleValue: 'SampleValue',
      tableName: 'TableName',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeCost: 'TimeCost',
      trend: 'Trend',
      upperValue: 'UpperValue',
      warningThreshold: 'WarningThreshold',
      whereCondition: 'WhereCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualExpression: 'string',
      beginTime: 'number',
      bizDate: 'number',
      blockType: 'number',
      checkResult: 'number',
      checkResultStatus: 'number',
      checkerId: 'number',
      checkerName: 'string',
      checkerType: 'number',
      comment: 'string',
      criticalThreshold: 'number',
      dateType: 'string',
      discreteCheck: 'boolean',
      endTime: 'number',
      entityId: 'number',
      expectValue: 'number',
      externalId: 'string',
      externalType: 'string',
      fixedCheck: 'boolean',
      id: 'number',
      isPrediction: 'boolean',
      lowerValue: 'number',
      matchExpression: 'string',
      methodName: 'string',
      op: 'string',
      projectName: 'string',
      property: 'string',
      referenceValue: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecksReferenceValue },
      resultString: 'string',
      ruleId: 'number',
      ruleName: 'string',
      sampleValue: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecksSampleValue },
      tableName: 'string',
      taskId: 'string',
      templateId: 'number',
      templateName: 'string',
      timeCost: 'string',
      trend: 'string',
      upperValue: 'number',
      warningThreshold: 'number',
      whereCondition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  ruleChecks?: ListQualityResultsByRuleResponseBodyDataRuleChecks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleChecks: 'RuleChecks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      ruleChecks: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseBodyDataRuleChecks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBodyDataRules extends $tea.Model {
  blockType?: number;
  checkerId?: number;
  comment?: string;
  criticalThreshold?: string;
  entityId?: number;
  expectValue?: string;
  fixCheck?: boolean;
  historyCriticalThreshold?: string;
  historyWarningThreshold?: string;
  id?: number;
  matchExpression?: string;
  methodId?: number;
  methodName?: string;
  onDuty?: string;
  onDutyAccountName?: string;
  projectName?: string;
  property?: string;
  propertyKey?: string;
  ruleCheckerRelationId?: number;
  ruleName?: string;
  ruleType?: number;
  tableName?: string;
  templateId?: number;
  templateName?: string;
  trend?: string;
  warningThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      checkerId: 'CheckerId',
      comment: 'Comment',
      criticalThreshold: 'CriticalThreshold',
      entityId: 'EntityId',
      expectValue: 'ExpectValue',
      fixCheck: 'FixCheck',
      historyCriticalThreshold: 'HistoryCriticalThreshold',
      historyWarningThreshold: 'HistoryWarningThreshold',
      id: 'Id',
      matchExpression: 'MatchExpression',
      methodId: 'MethodId',
      methodName: 'MethodName',
      onDuty: 'OnDuty',
      onDutyAccountName: 'OnDutyAccountName',
      projectName: 'ProjectName',
      property: 'Property',
      propertyKey: 'PropertyKey',
      ruleCheckerRelationId: 'RuleCheckerRelationId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      tableName: 'TableName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      checkerId: 'number',
      comment: 'string',
      criticalThreshold: 'string',
      entityId: 'number',
      expectValue: 'string',
      fixCheck: 'boolean',
      historyCriticalThreshold: 'string',
      historyWarningThreshold: 'string',
      id: 'number',
      matchExpression: 'string',
      methodId: 'number',
      methodName: 'string',
      onDuty: 'string',
      onDutyAccountName: 'string',
      projectName: 'string',
      property: 'string',
      propertyKey: 'string',
      ruleCheckerRelationId: 'number',
      ruleName: 'string',
      ruleType: 'number',
      tableName: 'string',
      templateId: 'number',
      templateName: 'string',
      trend: 'string',
      warningThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  rules?: ListQualityRulesResponseBodyDataRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      rules: { 'type': 'array', 'itemType': ListQualityRulesResponseBodyDataRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRefDISyncTasksResponseBodyDataDISyncTasks extends $tea.Model {
  diDestinationDatasource?: string;
  diSourceDatasource?: string;
  nodeId?: number;
  nodeName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      diDestinationDatasource: 'DiDestinationDatasource',
      diSourceDatasource: 'DiSourceDatasource',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diDestinationDatasource: 'string',
      diSourceDatasource: 'string',
      nodeId: 'number',
      nodeName: 'string',
      taskType: 'string',
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
  alertMethods?: string[];
  alertTargets?: string[];
  alertUnit?: string;
  baselineIds?: number[];
  bizProcessIds?: number[];
  dndEnd?: string;
  dndStart?: string;
  founder?: string;
  nodeIds?: number[];
  projectIds?: number[];
  remindId?: number;
  remindName?: string;
  remindType?: string;
  remindUnit?: string;
  useflag?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      alertUnit: 'AlertUnit',
      baselineIds: 'BaselineIds',
      bizProcessIds: 'BizProcessIds',
      dndEnd: 'DndEnd',
      dndStart: 'DndStart',
      founder: 'Founder',
      nodeIds: 'NodeIds',
      projectIds: 'ProjectIds',
      remindId: 'RemindId',
      remindName: 'RemindName',
      remindType: 'RemindType',
      remindUnit: 'RemindUnit',
      useflag: 'Useflag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertMethods: { 'type': 'array', 'itemType': 'string' },
      alertTargets: { 'type': 'array', 'itemType': 'string' },
      alertUnit: 'string',
      baselineIds: { 'type': 'array', 'itemType': 'number' },
      bizProcessIds: { 'type': 'array', 'itemType': 'number' },
      dndEnd: 'string',
      dndStart: 'string',
      founder: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'number' },
      projectIds: { 'type': 'array', 'itemType': 'number' },
      remindId: 'number',
      remindName: 'string',
      remindType: 'string',
      remindUnit: 'string',
      useflag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  reminds?: ListRemindsResponseBodyDataReminds[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reminds: 'Reminds',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      reminds: { 'type': 'array', 'itemType': ListRemindsResponseBodyDataReminds },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyData extends $tea.Model {
  bizExtKey?: string;
  cluster?: string;
  createTime?: string;
  enableKp?: boolean;
  id?: number;
  identifier?: string;
  isDefault?: boolean;
  mode?: string;
  name?: string;
  resourceGroupType?: string;
  sequence?: number;
  specs?: { [key: string]: any };
  status?: number;
  tenantId?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizExtKey: 'BizExtKey',
      cluster: 'Cluster',
      createTime: 'CreateTime',
      enableKp: 'EnableKp',
      id: 'Id',
      identifier: 'Identifier',
      isDefault: 'IsDefault',
      mode: 'Mode',
      name: 'Name',
      resourceGroupType: 'ResourceGroupType',
      sequence: 'Sequence',
      specs: 'Specs',
      status: 'Status',
      tenantId: 'TenantId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizExtKey: 'string',
      cluster: 'string',
      createTime: 'string',
      enableKp: 'boolean',
      id: 'number',
      identifier: 'string',
      isDefault: 'boolean',
      mode: 'string',
      name: 'string',
      resourceGroupType: 'string',
      sequence: 'number',
      specs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'number',
      tenantId: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend extends $tea.Model {
  count?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend extends $tea.Model {
  count?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend extends $tea.Model {
  count?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSuccessInstanceAmountResponseBodyInstanceStatusTrend extends $tea.Model {
  avgTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend[];
  todayTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend[];
  yesterdayTrend?: ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend[];
  static names(): { [key: string]: string } {
    return {
      avgTrend: 'AvgTrend',
      todayTrend: 'TodayTrend',
      yesterdayTrend: 'YesterdayTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendAvgTrend },
      todayTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendTodayTrend },
      yesterdayTrend: { 'type': 'array', 'itemType': ListSuccessInstanceAmountResponseBodyInstanceStatusTrendYesterdayTrend },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseBodyTableLevelInfoLevelList extends $tea.Model {
  description?: string;
  levelId?: number;
  levelType?: number;
  name?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      levelId: 'LevelId',
      levelType: 'LevelType',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      levelId: 'number',
      levelType: 'number',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseBodyTableLevelInfo extends $tea.Model {
  levelList?: ListTableLevelResponseBodyTableLevelInfoLevelList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      levelList: 'LevelList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelList: { 'type': 'array', 'itemType': ListTableLevelResponseBodyTableLevelInfoLevelList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseBodyDataThemeList extends $tea.Model {
  createTimeStamp?: number;
  creator?: string;
  level?: number;
  name?: string;
  parentId?: number;
  projectId?: number;
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      creator: 'Creator',
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      creator: 'string',
      level: 'number',
      name: 'string',
      parentId: 'number',
      projectId: 'number',
      themeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseBodyData extends $tea.Model {
  themeList?: ListTableThemeResponseBodyDataThemeList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      themeList: 'ThemeList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeList: { 'type': 'array', 'itemType': ListTableThemeResponseBodyDataThemeList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyDataTopics extends $tea.Model {
  addTime?: number;
  fixTime?: number;
  happenTime?: number;
  instanceId?: number;
  nodeId?: number;
  nodeName?: string;
  nodeOwner?: string;
  projectId?: number;
  topicId?: number;
  topicName?: string;
  topicStatus?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      fixTime: 'FixTime',
      happenTime: 'HappenTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOwner: 'NodeOwner',
      projectId: 'ProjectId',
      topicId: 'TopicId',
      topicName: 'TopicName',
      topicStatus: 'TopicStatus',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'number',
      fixTime: 'number',
      happenTime: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeOwner: 'string',
      projectId: 'number',
      topicId: 'number',
      topicName: 'string',
      topicStatus: 'string',
      topicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  topics?: ListTopicsResponseBodyDataTopics[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      topics: 'Topics',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      topics: { 'type': 'array', 'itemType': ListTopicsResponseBodyDataTopics },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDISyncTaskConfigProcessResultResponseBodyData extends $tea.Model {
  message?: string;
  status?: string;
  taskContent?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
      taskContent: 'TaskContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
      taskContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseBodyDataDataEntityList extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  entityType?: number;
  envType?: number;
  ownerId?: string;
  projectId?: number;
  projectName?: string;
  tableGuid?: string;
  tableName?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      entityType: 'EntityType',
      envType: 'EnvType',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      entityType: 'number',
      envType: 'number',
      ownerId: 'string',
      projectId: 'number',
      projectName: 'string',
      tableGuid: 'string',
      tableName: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseBodyData extends $tea.Model {
  dataEntityList?: SearchMetaTablesResponseBodyDataDataEntityList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': SearchMetaTablesResponseBodyDataDataEntityList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataSourceShareResponseBodyData extends $tea.Model {
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDISyncInstanceResponseBodyData extends $tea.Model {
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDISyncInstanceResponseBodyData extends $tea.Model {
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateDISyncInstanceResponseBodyData extends $tea.Model {
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
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
  businessDate?: number;
  consumed?: number;
  instanceId?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  programType?: number;
  static names(): { [key: string]: string } {
    return {
      businessDate: 'BusinessDate',
      consumed: 'Consumed',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      programType: 'ProgramType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDate: 'number',
      consumed: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      programType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank extends $tea.Model {
  consumeTimeRank?: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRankConsumeTimeRank[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTimeRank: 'ConsumeTimeRank',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimeRank: { 'type': 'array', 'itemType': TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRankConsumeTimeRank },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank extends $tea.Model {
  count?: number;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  programType?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      programType: 'ProgramType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      programType: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceResponseBodyInstanceErrorRank extends $tea.Model {
  errorRank?: TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      errorRank: 'ErrorRank',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorRank: { 'type': 'array', 'itemType': TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank },
      updateTime: 'number',
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
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestColumns extends $tea.Model {
  columnName?: string;
  columnNameCn?: string;
  columnType?: string;
  comment?: string;
  isPartitionCol?: boolean;
  length?: number;
  seqNumber?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnNameCn: 'ColumnNameCn',
      columnType: 'ColumnType',
      comment: 'Comment',
      isPartitionCol: 'IsPartitionCol',
      length: 'Length',
      seqNumber: 'SeqNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNameCn: 'string',
      columnType: 'string',
      comment: 'string',
      isPartitionCol: 'boolean',
      length: 'number',
      seqNumber: 'number',
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
  content?: string;
  nextTaskId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nextTaskId: 'NextTaskId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nextTaskId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableAddColumnRequestColumn extends $tea.Model {
  columnName?: string;
  columnNameCn?: string;
  columnType?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnNameCn: 'ColumnNameCn',
      columnType: 'ColumnType',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNameCn: 'string',
      columnType: 'string',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableAddColumnResponseBodyTaskInfo extends $tea.Model {
  content?: string;
  nextTaskId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nextTaskId: 'NextTaskId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nextTaskId: 'string',
      status: 'string',
      taskId: 'string',
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AbolishDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbolishDataServiceApiResponse>(await this.callApi(params, req, runtime), new AbolishDataServiceApiResponse({}));
  }

  async abolishDataServiceApi(request: AbolishDataServiceApiRequest): Promise<AbolishDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishDataServiceApiWithOptions(request, runtime);
  }

  async addProjectMemberToRoleWithOptions(request: AddProjectMemberToRoleRequest, runtime: $Util.RuntimeOptions): Promise<AddProjectMemberToRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.roleCode)) {
      query["RoleCode"] = request.roleCode;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddProjectMemberToRole",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddProjectMemberToRoleResponse>(await this.callApi(params, req, runtime), new AddProjectMemberToRoleResponse({}));
  }

  async addProjectMemberToRole(request: AddProjectMemberToRoleRequest): Promise<AddProjectMemberToRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProjectMemberToRoleWithOptions(request, runtime);
  }

  async addToMetaCategoryWithOptions(request: AddToMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddToMetaCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddToMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddToMetaCategoryResponse>(await this.callApi(params, req, runtime), new AddToMetaCategoryResponse({}));
  }

  async addToMetaCategory(request: AddToMetaCategoryRequest): Promise<AddToMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addToMetaCategoryWithOptions(request, runtime);
  }

  async approvePermissionApplyOrderWithOptions(request: ApprovePermissionApplyOrderRequest, runtime: $Util.RuntimeOptions): Promise<ApprovePermissionApplyOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.approveAction)) {
      query["ApproveAction"] = request.approveAction;
    }

    if (!Util.isUnset(request.approveComment)) {
      query["ApproveComment"] = request.approveComment;
    }

    if (!Util.isUnset(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApprovePermissionApplyOrder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApprovePermissionApplyOrderResponse>(await this.callApi(params, req, runtime), new ApprovePermissionApplyOrderResponse({}));
  }

  async approvePermissionApplyOrder(request: ApprovePermissionApplyOrderRequest): Promise<ApprovePermissionApplyOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approvePermissionApplyOrderWithOptions(request, runtime);
  }

  async checkFileDeploymentWithOptions(request: CheckFileDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CheckFileDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkDetailUrl)) {
      body["CheckDetailUrl"] = request.checkDetailUrl;
    }

    if (!Util.isUnset(request.checkerInstanceId)) {
      body["CheckerInstanceId"] = request.checkerInstanceId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckFileDeployment",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckFileDeploymentResponse>(await this.callApi(params, req, runtime), new CheckFileDeploymentResponse({}));
  }

  async checkFileDeployment(request: CheckFileDeploymentRequest): Promise<CheckFileDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFileDeploymentWithOptions(request, runtime);
  }

  async checkMetaPartitionWithOptions(request: CheckMetaPartitionRequest, runtime: $Util.RuntimeOptions): Promise<CheckMetaPartitionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.partition)) {
      query["Partition"] = request.partition;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckMetaPartition",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMetaPartitionResponse>(await this.callApi(params, req, runtime), new CheckMetaPartitionResponse({}));
  }

  async checkMetaPartition(request: CheckMetaPartitionRequest): Promise<CheckMetaPartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMetaPartitionWithOptions(request, runtime);
  }

  async checkMetaTableWithOptions(request: CheckMetaTableRequest, runtime: $Util.RuntimeOptions): Promise<CheckMetaTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckMetaTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMetaTableResponse>(await this.callApi(params, req, runtime), new CheckMetaTableResponse({}));
  }

  async checkMetaTable(request: CheckMetaTableRequest): Promise<CheckMetaTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMetaTableWithOptions(request, runtime);
  }

  async createBusinessWithOptions(request: CreateBusinessRequest, runtime: $Util.RuntimeOptions): Promise<CreateBusinessResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!Util.isUnset(request.useType)) {
      body["UseType"] = request.useType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBusinessResponse>(await this.callApi(params, req, runtime), new CreateBusinessResponse({}));
  }

  async createBusiness(request: CreateBusinessRequest): Promise<CreateBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBusinessWithOptions(request, runtime);
  }

  async createConnectionWithOptions(request: CreateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionType)) {
      query["ConnectionType"] = request.connectionType;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConnection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConnectionResponse>(await this.callApi(params, req, runtime), new CreateConnectionResponse({}));
  }

  async createConnection(request: CreateConnectionRequest): Promise<CreateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConnectionWithOptions(request, runtime);
  }

  async createDISyncTaskWithOptions(request: CreateDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDISyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskContent)) {
      query["TaskContent"] = request.taskContent;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDISyncTaskResponse>(await this.callApi(params, req, runtime), new CreateDISyncTaskResponse({}));
  }

  async createDISyncTask(request: CreateDISyncTaskRequest): Promise<CreateDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDISyncTaskWithOptions(request, runtime);
  }

  async createDagComplementWithOptions(request: CreateDagComplementRequest, runtime: $Util.RuntimeOptions): Promise<CreateDagComplementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizBeginTime)) {
      body["BizBeginTime"] = request.bizBeginTime;
    }

    if (!Util.isUnset(request.bizEndTime)) {
      body["BizEndTime"] = request.bizEndTime;
    }

    if (!Util.isUnset(request.endBizDate)) {
      body["EndBizDate"] = request.endBizDate;
    }

    if (!Util.isUnset(request.excludeNodeIds)) {
      body["ExcludeNodeIds"] = request.excludeNodeIds;
    }

    if (!Util.isUnset(request.includeNodeIds)) {
      body["IncludeNodeIds"] = request.includeNodeIds;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nodeParams)) {
      body["NodeParams"] = request.nodeParams;
    }

    if (!Util.isUnset(request.parallelism)) {
      body["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.rootNodeId)) {
      body["RootNodeId"] = request.rootNodeId;
    }

    if (!Util.isUnset(request.startBizDate)) {
      body["StartBizDate"] = request.startBizDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDagComplement",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDagComplementResponse>(await this.callApi(params, req, runtime), new CreateDagComplementResponse({}));
  }

  async createDagComplement(request: CreateDagComplementRequest): Promise<CreateDagComplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDagComplementWithOptions(request, runtime);
  }

  async createDagTestWithOptions(request: CreateDagTestRequest, runtime: $Util.RuntimeOptions): Promise<CreateDagTestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.nodeParams)) {
      body["NodeParams"] = request.nodeParams;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDagTest",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDagTestResponse>(await this.callApi(params, req, runtime), new CreateDagTestResponse({}));
  }

  async createDagTest(request: CreateDagTestRequest): Promise<CreateDagTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDagTestWithOptions(request, runtime);
  }

  async createDataServiceApiWithOptions(request: CreateDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiDescription)) {
      body["ApiDescription"] = request.apiDescription;
    }

    if (!Util.isUnset(request.apiMode)) {
      body["ApiMode"] = request.apiMode;
    }

    if (!Util.isUnset(request.apiName)) {
      body["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.apiPath)) {
      body["ApiPath"] = request.apiPath;
    }

    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.protocols)) {
      body["Protocols"] = request.protocols;
    }

    if (!Util.isUnset(request.registrationDetails)) {
      body["RegistrationDetails"] = request.registrationDetails;
    }

    if (!Util.isUnset(request.requestMethod)) {
      body["RequestMethod"] = request.requestMethod;
    }

    if (!Util.isUnset(request.responseContentType)) {
      body["ResponseContentType"] = request.responseContentType;
    }

    if (!Util.isUnset(request.scriptDetails)) {
      body["ScriptDetails"] = request.scriptDetails;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.visibleRange)) {
      body["VisibleRange"] = request.visibleRange;
    }

    if (!Util.isUnset(request.wizardDetails)) {
      body["WizardDetails"] = request.wizardDetails;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataServiceApiResponse>(await this.callApi(params, req, runtime), new CreateDataServiceApiResponse({}));
  }

  async createDataServiceApi(request: CreateDataServiceApiRequest): Promise<CreateDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceApiWithOptions(request, runtime);
  }

  async createDataServiceApiAuthorityWithOptions(request: CreateDataServiceApiAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceApiAuthorityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.authorizedProjectId)) {
      body["AuthorizedProjectId"] = request.authorizedProjectId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataServiceApiAuthority",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataServiceApiAuthorityResponse>(await this.callApi(params, req, runtime), new CreateDataServiceApiAuthorityResponse({}));
  }

  async createDataServiceApiAuthority(request: CreateDataServiceApiAuthorityRequest): Promise<CreateDataServiceApiAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceApiAuthorityWithOptions(request, runtime);
  }

  async createDataServiceFolderWithOptions(request: CreateDataServiceFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderName)) {
      body["FolderName"] = request.folderName;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataServiceFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataServiceFolderResponse>(await this.callApi(params, req, runtime), new CreateDataServiceFolderResponse({}));
  }

  async createDataServiceFolder(request: CreateDataServiceFolderRequest): Promise<CreateDataServiceFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceFolderWithOptions(request, runtime);
  }

  async createDataServiceGroupWithOptions(request: CreateDataServiceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiGatewayGroupId)) {
      body["ApiGatewayGroupId"] = request.apiGatewayGroupId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataServiceGroup",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataServiceGroupResponse>(await this.callApi(params, req, runtime), new CreateDataServiceGroupResponse({}));
  }

  async createDataServiceGroup(request: CreateDataServiceGroupRequest): Promise<CreateDataServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceGroupWithOptions(request, runtime);
  }

  async createDataSourceWithOptions(request: CreateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataSource",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataSourceResponse>(await this.callApi(params, req, runtime), new CreateDataSourceResponse({}));
  }

  async createDataSource(request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  async createExportMigrationWithOptions(request: CreateExportMigrationRequest, runtime: $Util.RuntimeOptions): Promise<CreateExportMigrationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.exportMode)) {
      body["ExportMode"] = request.exportMode;
    }

    if (!Util.isUnset(request.exportObjectStatus)) {
      body["ExportObjectStatus"] = request.exportObjectStatus;
    }

    if (!Util.isUnset(request.incrementalSince)) {
      body["IncrementalSince"] = request.incrementalSince;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateExportMigration",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateExportMigrationResponse>(await this.callApi(params, req, runtime), new CreateExportMigrationResponse({}));
  }

  async createExportMigration(request: CreateExportMigrationRequest): Promise<CreateExportMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExportMigrationWithOptions(request, runtime);
  }

  async createFileWithOptions(request: CreateFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.advancedSettings)) {
      body["AdvancedSettings"] = request.advancedSettings;
    }

    if (!Util.isUnset(request.autoParsing)) {
      body["AutoParsing"] = request.autoParsing;
    }

    if (!Util.isUnset(request.autoRerunIntervalMillis)) {
      body["AutoRerunIntervalMillis"] = request.autoRerunIntervalMillis;
    }

    if (!Util.isUnset(request.autoRerunTimes)) {
      body["AutoRerunTimes"] = request.autoRerunTimes;
    }

    if (!Util.isUnset(request.connectionName)) {
      body["ConnectionName"] = request.connectionName;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.cronExpress)) {
      body["CronExpress"] = request.cronExpress;
    }

    if (!Util.isUnset(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!Util.isUnset(request.dependentNodeIdList)) {
      body["DependentNodeIdList"] = request.dependentNodeIdList;
    }

    if (!Util.isUnset(request.dependentType)) {
      body["DependentType"] = request.dependentType;
    }

    if (!Util.isUnset(request.endEffectDate)) {
      body["EndEffectDate"] = request.endEffectDate;
    }

    if (!Util.isUnset(request.fileDescription)) {
      body["FileDescription"] = request.fileDescription;
    }

    if (!Util.isUnset(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.inputList)) {
      body["InputList"] = request.inputList;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.paraValue)) {
      body["ParaValue"] = request.paraValue;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!Util.isUnset(request.rerunMode)) {
      body["RerunMode"] = request.rerunMode;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceGroupIdentifier)) {
      body["ResourceGroupIdentifier"] = request.resourceGroupIdentifier;
    }

    if (!Util.isUnset(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    if (!Util.isUnset(request.startEffectDate)) {
      body["StartEffectDate"] = request.startEffectDate;
    }

    if (!Util.isUnset(request.startImmediately)) {
      body["StartImmediately"] = request.startImmediately;
    }

    if (!Util.isUnset(request.stop)) {
      body["Stop"] = request.stop;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFileResponse>(await this.callApi(params, req, runtime), new CreateFileResponse({}));
  }

  async createFile(request: CreateFileRequest): Promise<CreateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFileWithOptions(request, runtime);
  }

  async createFolderWithOptions(request: CreateFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderPath)) {
      body["FolderPath"] = request.folderPath;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
  }

  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  async createImportMigrationWithOptions(request: CreateImportMigrationRequest, runtime: $Util.RuntimeOptions): Promise<CreateImportMigrationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.calculateEngineMap)) {
      body["CalculateEngineMap"] = request.calculateEngineMap;
    }

    if (!Util.isUnset(request.commitRule)) {
      body["CommitRule"] = request.commitRule;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.packageFile)) {
      body["PackageFile"] = request.packageFile;
    }

    if (!Util.isUnset(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceGroupMap)) {
      body["ResourceGroupMap"] = request.resourceGroupMap;
    }

    if (!Util.isUnset(request.workspaceMap)) {
      body["WorkspaceMap"] = request.workspaceMap;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateImportMigration",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImportMigrationResponse>(await this.callApi(params, req, runtime), new CreateImportMigrationResponse({}));
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.dagParameters)) {
      body["DagParameters"] = request.dagParameters;
    }

    if (!Util.isUnset(request.excludeNodeIds)) {
      body["ExcludeNodeIds"] = request.excludeNodeIds;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.includeNodeIds)) {
      body["IncludeNodeIds"] = request.includeNodeIds;
    }

    if (!Util.isUnset(request.nodeParameters)) {
      body["NodeParameters"] = request.nodeParameters;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateManualDag",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateManualDagResponse>(await this.callApi(params, req, runtime), new CreateManualDagResponse({}));
  }

  async createManualDag(request: CreateManualDagRequest): Promise<CreateManualDagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createManualDagWithOptions(request, runtime);
  }

  async createMetaCategoryWithOptions(request: CreateMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetaCategoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMetaCategoryResponse>(await this.callApi(params, req, runtime), new CreateMetaCategoryResponse({}));
  }

  async createMetaCategory(request: CreateMetaCategoryRequest): Promise<CreateMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetaCategoryWithOptions(request, runtime);
  }

  async createPermissionApplyOrderWithOptions(request: CreatePermissionApplyOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePermissionApplyOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyObject)) {
      query["ApplyObject"] = request.applyObject;
    }

    if (!Util.isUnset(request.applyReason)) {
      query["ApplyReason"] = request.applyReason;
    }

    if (!Util.isUnset(request.applyUserIds)) {
      query["ApplyUserIds"] = request.applyUserIds;
    }

    if (!Util.isUnset(request.deadline)) {
      query["Deadline"] = request.deadline;
    }

    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.maxComputeProjectName)) {
      query["MaxComputeProjectName"] = request.maxComputeProjectName;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePermissionApplyOrder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePermissionApplyOrderResponse>(await this.callApi(params, req, runtime), new CreatePermissionApplyOrderResponse({}));
  }

  async createPermissionApplyOrder(request: CreatePermissionApplyOrderRequest): Promise<CreatePermissionApplyOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPermissionApplyOrderWithOptions(request, runtime);
  }

  async createProjectMemberWithOptions(request: CreateProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.roleCode)) {
      query["RoleCode"] = request.roleCode;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProjectMember",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectMemberResponse>(await this.callApi(params, req, runtime), new CreateProjectMemberResponse({}));
  }

  async createProjectMember(request: CreateProjectMemberRequest): Promise<CreateProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectMemberWithOptions(request, runtime);
  }

  async createQualityEntityWithOptions(request: CreateQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityLevel)) {
      body["EntityLevel"] = request.entityLevel;
    }

    if (!Util.isUnset(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.matchExpression)) {
      body["MatchExpression"] = request.matchExpression;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQualityEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQualityEntityResponse>(await this.callApi(params, req, runtime), new CreateQualityEntityResponse({}));
  }

  async createQualityEntity(request: CreateQualityEntityRequest): Promise<CreateQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityEntityWithOptions(request, runtime);
  }

  async createQualityFollowerWithOptions(request: CreateQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityFollowerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmMode)) {
      body["AlarmMode"] = request.alarmMode;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.follower)) {
      body["Follower"] = request.follower;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQualityFollower",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQualityFollowerResponse>(await this.callApi(params, req, runtime), new CreateQualityFollowerResponse({}));
  }

  async createQualityFollower(request: CreateQualityFollowerRequest): Promise<CreateQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityFollowerWithOptions(request, runtime);
  }

  async createQualityRelativeNodeWithOptions(request: CreateQualityRelativeNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityRelativeNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.matchExpression)) {
      body["MatchExpression"] = request.matchExpression;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.targetNodeProjectId)) {
      body["TargetNodeProjectId"] = request.targetNodeProjectId;
    }

    if (!Util.isUnset(request.targetNodeProjectName)) {
      body["TargetNodeProjectName"] = request.targetNodeProjectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQualityRelativeNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQualityRelativeNodeResponse>(await this.callApi(params, req, runtime), new CreateQualityRelativeNodeResponse({}));
  }

  async createQualityRelativeNode(request: CreateQualityRelativeNodeRequest): Promise<CreateQualityRelativeNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityRelativeNodeWithOptions(request, runtime);
  }

  async createQualityRuleWithOptions(request: CreateQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.blockType)) {
      body["BlockType"] = request.blockType;
    }

    if (!Util.isUnset(request.checker)) {
      body["Checker"] = request.checker;
    }

    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.criticalThreshold)) {
      body["CriticalThreshold"] = request.criticalThreshold;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.expectValue)) {
      body["ExpectValue"] = request.expectValue;
    }

    if (!Util.isUnset(request.methodName)) {
      body["MethodName"] = request.methodName;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.predictType)) {
      body["PredictType"] = request.predictType;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.property)) {
      body["Property"] = request.property;
    }

    if (!Util.isUnset(request.propertyType)) {
      body["PropertyType"] = request.propertyType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.trend)) {
      body["Trend"] = request.trend;
    }

    if (!Util.isUnset(request.warningThreshold)) {
      body["WarningThreshold"] = request.warningThreshold;
    }

    if (!Util.isUnset(request.whereCondition)) {
      body["WhereCondition"] = request.whereCondition;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQualityRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQualityRuleResponse>(await this.callApi(params, req, runtime), new CreateQualityRuleResponse({}));
  }

  async createQualityRule(request: CreateQualityRuleRequest): Promise<CreateQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityRuleWithOptions(request, runtime);
  }

  async createRemindWithOptions(request: CreateRemindRequest, runtime: $Util.RuntimeOptions): Promise<CreateRemindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertInterval)) {
      body["AlertInterval"] = request.alertInterval;
    }

    if (!Util.isUnset(request.alertMethods)) {
      body["AlertMethods"] = request.alertMethods;
    }

    if (!Util.isUnset(request.alertTargets)) {
      body["AlertTargets"] = request.alertTargets;
    }

    if (!Util.isUnset(request.alertUnit)) {
      body["AlertUnit"] = request.alertUnit;
    }

    if (!Util.isUnset(request.baselineIds)) {
      body["BaselineIds"] = request.baselineIds;
    }

    if (!Util.isUnset(request.bizProcessIds)) {
      body["BizProcessIds"] = request.bizProcessIds;
    }

    if (!Util.isUnset(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.dndEnd)) {
      body["DndEnd"] = request.dndEnd;
    }

    if (!Util.isUnset(request.maxAlertTimes)) {
      body["MaxAlertTimes"] = request.maxAlertTimes;
    }

    if (!Util.isUnset(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.remindName)) {
      body["RemindName"] = request.remindName;
    }

    if (!Util.isUnset(request.remindType)) {
      body["RemindType"] = request.remindType;
    }

    if (!Util.isUnset(request.remindUnit)) {
      body["RemindUnit"] = request.remindUnit;
    }

    if (!Util.isUnset(request.robotUrls)) {
      body["RobotUrls"] = request.robotUrls;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRemind",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRemindResponse>(await this.callApi(params, req, runtime), new CreateRemindResponse({}));
  }

  async createRemind(request: CreateRemindRequest): Promise<CreateRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRemindWithOptions(request, runtime);
  }

  async createTableWithOptions(request: CreateTableRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.externalTableType)) {
      query["ExternalTableType"] = request.externalTableType;
    }

    if (!Util.isUnset(request.hasPart)) {
      query["HasPart"] = request.hasPart;
    }

    if (!Util.isUnset(request.isView)) {
      query["IsView"] = request.isView;
    }

    if (!Util.isUnset(request.lifeCycle)) {
      query["LifeCycle"] = request.lifeCycle;
    }

    if (!Util.isUnset(request.location)) {
      query["Location"] = request.location;
    }

    if (!Util.isUnset(request.logicalLevelId)) {
      query["LogicalLevelId"] = request.logicalLevelId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.physicsLevelId)) {
      query["PhysicsLevelId"] = request.physicsLevelId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columns)) {
      body["Columns"] = request.columns;
    }

    if (!Util.isUnset(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.themes)) {
      body["Themes"] = request.themes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTableResponse>(await this.callApi(params, req, runtime), new CreateTableResponse({}));
  }

  async createTable(request: CreateTableRequest): Promise<CreateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableWithOptions(request, runtime);
  }

  async createTableLevelWithOptions(request: CreateTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableLevelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.levelType)) {
      query["LevelType"] = request.levelType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTableLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTableLevelResponse>(await this.callApi(params, req, runtime), new CreateTableLevelResponse({}));
  }

  async createTableLevel(request: CreateTableLevelRequest): Promise<CreateTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableLevelWithOptions(request, runtime);
  }

  async createTableThemeWithOptions(request: CreateTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableThemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTableTheme",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTableThemeResponse>(await this.callApi(params, req, runtime), new CreateTableThemeResponse({}));
  }

  async createTableTheme(request: CreateTableThemeRequest): Promise<CreateTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableThemeWithOptions(request, runtime);
  }

  async createUdfFileWithOptions(request: CreateUdfFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateUdfFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!Util.isUnset(request.cmdDescription)) {
      body["CmdDescription"] = request.cmdDescription;
    }

    if (!Util.isUnset(request.example)) {
      body["Example"] = request.example;
    }

    if (!Util.isUnset(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.functionType)) {
      body["FunctionType"] = request.functionType;
    }

    if (!Util.isUnset(request.parameterDescription)) {
      body["ParameterDescription"] = request.parameterDescription;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!Util.isUnset(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.returnValue)) {
      body["ReturnValue"] = request.returnValue;
    }

    if (!Util.isUnset(request.udfDescription)) {
      body["UdfDescription"] = request.udfDescription;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUdfFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUdfFileResponse>(await this.callApi(params, req, runtime), new CreateUdfFileResponse({}));
  }

  async createUdfFile(request: CreateUdfFileRequest): Promise<CreateUdfFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUdfFileWithOptions(request, runtime);
  }

  async deleteBusinessWithOptions(request: DeleteBusinessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBusinessResponse>(await this.callApi(params, req, runtime), new DeleteBusinessResponse({}));
  }

  async deleteBusiness(request: DeleteBusinessRequest): Promise<DeleteBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBusinessWithOptions(request, runtime);
  }

  async deleteConnectionWithOptions(request: DeleteConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConnection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConnectionResponse>(await this.callApi(params, req, runtime), new DeleteConnectionResponse({}));
  }

  async deleteConnection(request: DeleteConnectionRequest): Promise<DeleteConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConnectionWithOptions(request, runtime);
  }

  async deleteDISyncTaskWithOptions(request: DeleteDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDISyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDISyncTaskResponse>(await this.callApi(params, req, runtime), new DeleteDISyncTaskResponse({}));
  }

  async deleteDISyncTask(request: DeleteDISyncTaskRequest): Promise<DeleteDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDISyncTaskWithOptions(request, runtime);
  }

  async deleteDataServiceApiWithOptions(request: DeleteDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataServiceApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataServiceApiResponse>(await this.callApi(params, req, runtime), new DeleteDataServiceApiResponse({}));
  }

  async deleteDataServiceApi(request: DeleteDataServiceApiRequest): Promise<DeleteDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataServiceApiWithOptions(request, runtime);
  }

  async deleteDataServiceApiAuthorityWithOptions(request: DeleteDataServiceApiAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataServiceApiAuthorityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.authorizedProjectId)) {
      body["AuthorizedProjectId"] = request.authorizedProjectId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataServiceApiAuthority",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataServiceApiAuthorityResponse>(await this.callApi(params, req, runtime), new DeleteDataServiceApiAuthorityResponse({}));
  }

  async deleteDataServiceApiAuthority(request: DeleteDataServiceApiAuthorityRequest): Promise<DeleteDataServiceApiAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataServiceApiAuthorityWithOptions(request, runtime);
  }

  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSource",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceResponse({}));
  }

  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileResponse>(await this.callApi(params, req, runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  async deleteFolderWithOptions(request: DeleteFolderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
  }

  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  async deleteFromMetaCategoryWithOptions(request: DeleteFromMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFromMetaCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFromMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFromMetaCategoryResponse>(await this.callApi(params, req, runtime), new DeleteFromMetaCategoryResponse({}));
  }

  async deleteFromMetaCategory(request: DeleteFromMetaCategoryRequest): Promise<DeleteFromMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFromMetaCategoryWithOptions(request, runtime);
  }

  async deleteMetaCategoryWithOptions(request: DeleteMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetaCategoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetaCategoryResponse>(await this.callApi(params, req, runtime), new DeleteMetaCategoryResponse({}));
  }

  async deleteMetaCategory(request: DeleteMetaCategoryRequest): Promise<DeleteMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetaCategoryWithOptions(request, runtime);
  }

  async deleteProjectMemberWithOptions(request: DeleteProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProjectMember",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectMemberResponse>(await this.callApi(params, req, runtime), new DeleteProjectMemberResponse({}));
  }

  async deleteProjectMember(request: DeleteProjectMemberRequest): Promise<DeleteProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectMemberWithOptions(request, runtime);
  }

  async deleteQualityEntityWithOptions(request: DeleteQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQualityEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQualityEntityResponse>(await this.callApi(params, req, runtime), new DeleteQualityEntityResponse({}));
  }

  async deleteQualityEntity(request: DeleteQualityEntityRequest): Promise<DeleteQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityEntityWithOptions(request, runtime);
  }

  async deleteQualityFollowerWithOptions(request: DeleteQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityFollowerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.followerId)) {
      body["FollowerId"] = request.followerId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQualityFollower",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQualityFollowerResponse>(await this.callApi(params, req, runtime), new DeleteQualityFollowerResponse({}));
  }

  async deleteQualityFollower(request: DeleteQualityFollowerRequest): Promise<DeleteQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityFollowerWithOptions(request, runtime);
  }

  async deleteQualityRelativeNodeWithOptions(request: DeleteQualityRelativeNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityRelativeNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.matchExpression)) {
      body["MatchExpression"] = request.matchExpression;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.targetNodeProjectId)) {
      body["TargetNodeProjectId"] = request.targetNodeProjectId;
    }

    if (!Util.isUnset(request.targetNodeProjectName)) {
      body["TargetNodeProjectName"] = request.targetNodeProjectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQualityRelativeNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQualityRelativeNodeResponse>(await this.callApi(params, req, runtime), new DeleteQualityRelativeNodeResponse({}));
  }

  async deleteQualityRelativeNode(request: DeleteQualityRelativeNodeRequest): Promise<DeleteQualityRelativeNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityRelativeNodeWithOptions(request, runtime);
  }

  async deleteQualityRuleWithOptions(request: DeleteQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQualityRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQualityRuleResponse>(await this.callApi(params, req, runtime), new DeleteQualityRuleResponse({}));
  }

  async deleteQualityRule(request: DeleteQualityRuleRequest): Promise<DeleteQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityRuleWithOptions(request, runtime);
  }

  async deleteRemindWithOptions(request: DeleteRemindRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRemindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.remindId)) {
      body["RemindId"] = request.remindId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRemind",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRemindResponse>(await this.callApi(params, req, runtime), new DeleteRemindResponse({}));
  }

  async deleteRemind(request: DeleteRemindRequest): Promise<DeleteRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRemindWithOptions(request, runtime);
  }

  async deleteTableWithOptions(request: DeleteTableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTableResponse>(await this.callApi(params, req, runtime), new DeleteTableResponse({}));
  }

  async deleteTable(request: DeleteTableRequest): Promise<DeleteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableWithOptions(request, runtime);
  }

  async deleteTableLevelWithOptions(request: DeleteTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableLevelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.levelId)) {
      query["LevelId"] = request.levelId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTableLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTableLevelResponse>(await this.callApi(params, req, runtime), new DeleteTableLevelResponse({}));
  }

  async deleteTableLevel(request: DeleteTableLevelRequest): Promise<DeleteTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableLevelWithOptions(request, runtime);
  }

  async deleteTableThemeWithOptions(request: DeleteTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableThemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.themeId)) {
      query["ThemeId"] = request.themeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTableTheme",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTableThemeResponse>(await this.callApi(params, req, runtime), new DeleteTableThemeResponse({}));
  }

  async deleteTableTheme(request: DeleteTableThemeRequest): Promise<DeleteTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableThemeWithOptions(request, runtime);
  }

  async deployDISyncTaskWithOptions(request: DeployDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeployDISyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployDISyncTaskResponse>(await this.callApi(params, req, runtime), new DeployDISyncTaskResponse({}));
  }

  async deployDISyncTask(request: DeployDISyncTaskRequest): Promise<DeployDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployDISyncTaskWithOptions(request, runtime);
  }

  async deployFileWithOptions(request: DeployFileRequest, runtime: $Util.RuntimeOptions): Promise<DeployFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeployFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployFileResponse>(await this.callApi(params, req, runtime), new DeployFileResponse({}));
  }

  async deployFile(request: DeployFileRequest): Promise<DeployFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployFileWithOptions(request, runtime);
  }

  async desensitizeDataWithOptions(request: DesensitizeDataRequest, runtime: $Util.RuntimeOptions): Promise<DesensitizeDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DesensitizeData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DesensitizeDataResponse>(await this.callApi(params, req, runtime), new DesensitizeDataResponse({}));
  }

  async desensitizeData(request: DesensitizeDataRequest): Promise<DesensitizeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.desensitizeDataWithOptions(request, runtime);
  }

  async establishRelationTableToBusinessWithOptions(request: EstablishRelationTableToBusinessRequest, runtime: $Util.RuntimeOptions): Promise<EstablishRelationTableToBusinessResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!Util.isUnset(request.tableGuid)) {
      body["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EstablishRelationTableToBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EstablishRelationTableToBusinessResponse>(await this.callApi(params, req, runtime), new EstablishRelationTableToBusinessResponse({}));
  }

  async establishRelationTableToBusiness(request: EstablishRelationTableToBusinessRequest): Promise<EstablishRelationTableToBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.establishRelationTableToBusinessWithOptions(request, runtime);
  }

  async exportDataSourcesWithOptions(request: ExportDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ExportDataSourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportDataSources",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportDataSourcesResponse>(await this.callApi(params, req, runtime), new ExportDataSourcesResponse({}));
  }

  async exportDataSources(request: ExportDataSourcesRequest): Promise<ExportDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDataSourcesWithOptions(request, runtime);
  }

  async generateDISyncTaskConfigForCreatingWithOptions(request: GenerateDISyncTaskConfigForCreatingRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDISyncTaskConfigForCreatingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDISyncTaskConfigForCreating",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateDISyncTaskConfigForCreatingResponse>(await this.callApi(params, req, runtime), new GenerateDISyncTaskConfigForCreatingResponse({}));
  }

  async generateDISyncTaskConfigForCreating(request: GenerateDISyncTaskConfigForCreatingRequest): Promise<GenerateDISyncTaskConfigForCreatingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDISyncTaskConfigForCreatingWithOptions(request, runtime);
  }

  async generateDISyncTaskConfigForUpdatingWithOptions(request: GenerateDISyncTaskConfigForUpdatingRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDISyncTaskConfigForUpdatingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDISyncTaskConfigForUpdating",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateDISyncTaskConfigForUpdatingResponse>(await this.callApi(params, req, runtime), new GenerateDISyncTaskConfigForUpdatingResponse({}));
  }

  async generateDISyncTaskConfigForUpdating(request: GenerateDISyncTaskConfigForUpdatingRequest): Promise<GenerateDISyncTaskConfigForUpdatingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDISyncTaskConfigForUpdatingWithOptions(request, runtime);
  }

  async getBaselineConfigWithOptions(request: GetBaselineConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBaselineConfig",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBaselineConfigResponse>(await this.callApi(params, req, runtime), new GetBaselineConfigResponse({}));
  }

  async getBaselineConfig(request: GetBaselineConfigRequest): Promise<GetBaselineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineConfigWithOptions(request, runtime);
  }

  async getBaselineKeyPathWithOptions(request: GetBaselineKeyPathRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineKeyPathResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!Util.isUnset(request.inGroupId)) {
      body["InGroupId"] = request.inGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBaselineKeyPath",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBaselineKeyPathResponse>(await this.callApi(params, req, runtime), new GetBaselineKeyPathResponse({}));
  }

  async getBaselineKeyPath(request: GetBaselineKeyPathRequest): Promise<GetBaselineKeyPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineKeyPathWithOptions(request, runtime);
  }

  async getBaselineStatusWithOptions(request: GetBaselineStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!Util.isUnset(request.inGroupId)) {
      body["InGroupId"] = request.inGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBaselineStatus",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBaselineStatusResponse>(await this.callApi(params, req, runtime), new GetBaselineStatusResponse({}));
  }

  async getBaselineStatus(request: GetBaselineStatusRequest): Promise<GetBaselineStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineStatusWithOptions(request, runtime);
  }

  async getBusinessWithOptions(request: GetBusinessRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessResponse>(await this.callApi(params, req, runtime), new GetBusinessResponse({}));
  }

  async getBusiness(request: GetBusinessRequest): Promise<GetBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessWithOptions(request, runtime);
  }

  async getDDLJobStatusWithOptions(request: GetDDLJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDDLJobStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDDLJobStatus",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDDLJobStatusResponse>(await this.callApi(params, req, runtime), new GetDDLJobStatusResponse({}));
  }

  async getDDLJobStatus(request: GetDDLJobStatusRequest): Promise<GetDDLJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDDLJobStatusWithOptions(request, runtime);
  }

  async getDISyncInstanceInfoWithOptions(request: GetDISyncInstanceInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDISyncInstanceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDISyncInstanceInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDISyncInstanceInfoResponse>(await this.callApi(params, req, runtime), new GetDISyncInstanceInfoResponse({}));
  }

  async getDISyncInstanceInfo(request: GetDISyncInstanceInfoRequest): Promise<GetDISyncInstanceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDISyncInstanceInfoWithOptions(request, runtime);
  }

  async getDISyncTaskWithOptions(request: GetDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetDISyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDISyncTaskResponse>(await this.callApi(params, req, runtime), new GetDISyncTaskResponse({}));
  }

  async getDISyncTask(request: GetDISyncTaskRequest): Promise<GetDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDISyncTaskWithOptions(request, runtime);
  }

  async getDISyncTaskMetricInfoWithOptions(request: GetDISyncTaskMetricInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDISyncTaskMetricInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDISyncTaskMetricInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDISyncTaskMetricInfoResponse>(await this.callApi(params, req, runtime), new GetDISyncTaskMetricInfoResponse({}));
  }

  async getDISyncTaskMetricInfo(request: GetDISyncTaskMetricInfoRequest): Promise<GetDISyncTaskMetricInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDISyncTaskMetricInfoWithOptions(request, runtime);
  }

  async getDagWithOptions(request: GetDagRequest, runtime: $Util.RuntimeOptions): Promise<GetDagResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dagId)) {
      body["DagId"] = request.dagId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDag",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDagResponse>(await this.callApi(params, req, runtime), new GetDagResponse({}));
  }

  async getDag(request: GetDagRequest): Promise<GetDagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDagWithOptions(request, runtime);
  }

  async getDataServiceApiWithOptions(request: GetDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataServiceApiResponse>(await this.callApi(params, req, runtime), new GetDataServiceApiResponse({}));
  }

  async getDataServiceApi(request: GetDataServiceApiRequest): Promise<GetDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceApiWithOptions(request, runtime);
  }

  async getDataServiceApplicationWithOptions(request: GetDataServiceApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataServiceApplication",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataServiceApplicationResponse>(await this.callApi(params, req, runtime), new GetDataServiceApplicationResponse({}));
  }

  async getDataServiceApplication(request: GetDataServiceApplicationRequest): Promise<GetDataServiceApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceApplicationWithOptions(request, runtime);
  }

  async getDataServiceFolderWithOptions(request: GetDataServiceFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataServiceFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataServiceFolderResponse>(await this.callApi(params, req, runtime), new GetDataServiceFolderResponse({}));
  }

  async getDataServiceFolder(request: GetDataServiceFolderRequest): Promise<GetDataServiceFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceFolderWithOptions(request, runtime);
  }

  async getDataServiceGroupWithOptions(request: GetDataServiceGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataServiceGroup",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataServiceGroupResponse>(await this.callApi(params, req, runtime), new GetDataServiceGroupResponse({}));
  }

  async getDataServiceGroup(request: GetDataServiceGroupRequest): Promise<GetDataServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceGroupWithOptions(request, runtime);
  }

  async getDataServicePublishedApiWithOptions(request: GetDataServicePublishedApiRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServicePublishedApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataServicePublishedApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataServicePublishedApiResponse>(await this.callApi(params, req, runtime), new GetDataServicePublishedApiResponse({}));
  }

  async getDataServicePublishedApi(request: GetDataServicePublishedApiRequest): Promise<GetDataServicePublishedApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServicePublishedApiWithOptions(request, runtime);
  }

  async getDataSourceMetaWithOptions(request: GetDataSourceMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasourceName)) {
      query["DatasourceName"] = request.datasourceName;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSourceMeta",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceMetaResponse>(await this.callApi(params, req, runtime), new GetDataSourceMetaResponse({}));
  }

  async getDataSourceMeta(request: GetDataSourceMetaRequest): Promise<GetDataSourceMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceMetaWithOptions(request, runtime);
  }

  async getDeploymentWithOptions(request: GetDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<GetDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deploymentId)) {
      body["DeploymentId"] = request.deploymentId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeployment",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentResponse>(await this.callApi(params, req, runtime), new GetDeploymentResponse({}));
  }

  async getDeployment(request: GetDeploymentRequest): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeploymentWithOptions(request, runtime);
  }

  async getFileWithOptions(request: GetFileRequest, runtime: $Util.RuntimeOptions): Promise<GetFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFileResponse>(await this.callApi(params, req, runtime), new GetFileResponse({}));
  }

  async getFile(request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileWithOptions(request, runtime);
  }

  async getFileTypeStatisticWithOptions(request: GetFileTypeStatisticRequest, runtime: $Util.RuntimeOptions): Promise<GetFileTypeStatisticResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFileTypeStatistic",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFileTypeStatisticResponse>(await this.callApi(params, req, runtime), new GetFileTypeStatisticResponse({}));
  }

  async getFileTypeStatistic(request: GetFileTypeStatisticRequest): Promise<GetFileTypeStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileTypeStatisticWithOptions(request, runtime);
  }

  async getFileVersionWithOptions(request: GetFileVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetFileVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.fileVersion)) {
      body["FileVersion"] = request.fileVersion;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFileVersion",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFileVersionResponse>(await this.callApi(params, req, runtime), new GetFileVersionResponse({}));
  }

  async getFileVersion(request: GetFileVersionRequest): Promise<GetFileVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileVersionWithOptions(request, runtime);
  }

  async getFolderWithOptions(request: GetFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.folderPath)) {
      body["FolderPath"] = request.folderPath;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFolderResponse>(await this.callApi(params, req, runtime), new GetFolderResponse({}));
  }

  async getFolder(request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  async getIDEEventDetailWithOptions(request: GetIDEEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetIDEEventDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIDEEventDetail",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIDEEventDetailResponse>(await this.callApi(params, req, runtime), new GetIDEEventDetailResponse({}));
  }

  async getIDEEventDetail(request: GetIDEEventDetailRequest): Promise<GetIDEEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIDEEventDetailWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getInstanceConsumeTimeRankWithOptions(request: GetInstanceConsumeTimeRankRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceConsumeTimeRankResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceConsumeTimeRank",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceConsumeTimeRankResponse>(await this.callApi(params, req, runtime), new GetInstanceConsumeTimeRankResponse({}));
  }

  async getInstanceConsumeTimeRank(request: GetInstanceConsumeTimeRankRequest): Promise<GetInstanceConsumeTimeRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceConsumeTimeRankWithOptions(request, runtime);
  }

  async getInstanceCountTrendWithOptions(request: GetInstanceCountTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceCountTrendResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beginDate)) {
      body["BeginDate"] = request.beginDate;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceCountTrend",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceCountTrendResponse>(await this.callApi(params, req, runtime), new GetInstanceCountTrendResponse({}));
  }

  async getInstanceCountTrend(request: GetInstanceCountTrendRequest): Promise<GetInstanceCountTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceCountTrendWithOptions(request, runtime);
  }

  async getInstanceErrorRankWithOptions(request: GetInstanceErrorRankRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceErrorRankResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceErrorRank",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceErrorRankResponse>(await this.callApi(params, req, runtime), new GetInstanceErrorRankResponse({}));
  }

  async getInstanceErrorRank(request: GetInstanceErrorRankRequest): Promise<GetInstanceErrorRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceErrorRankWithOptions(request, runtime);
  }

  async getInstanceLogWithOptions(request: GetInstanceLogRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceLog",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceLogResponse>(await this.callApi(params, req, runtime), new GetInstanceLogResponse({}));
  }

  async getInstanceLog(request: GetInstanceLogRequest): Promise<GetInstanceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceLogWithOptions(request, runtime);
  }

  async getInstanceStatusCountWithOptions(request: GetInstanceStatusCountRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceStatusCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceStatusCount",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceStatusCountResponse>(await this.callApi(params, req, runtime), new GetInstanceStatusCountResponse({}));
  }

  async getInstanceStatusCount(request: GetInstanceStatusCountRequest): Promise<GetInstanceStatusCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceStatusCountWithOptions(request, runtime);
  }

  async getInstanceStatusStatisticWithOptions(request: GetInstanceStatusStatisticRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceStatusStatisticResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.dagType)) {
      body["DagType"] = request.dagType;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceStatusStatistic",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceStatusStatisticResponse>(await this.callApi(params, req, runtime), new GetInstanceStatusStatisticResponse({}));
  }

  async getInstanceStatusStatistic(request: GetInstanceStatusStatisticRequest): Promise<GetInstanceStatusStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceStatusStatisticWithOptions(request, runtime);
  }

  async getManualDagInstancesWithOptions(request: GetManualDagInstancesRequest, runtime: $Util.RuntimeOptions): Promise<GetManualDagInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dagId)) {
      body["DagId"] = request.dagId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetManualDagInstances",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetManualDagInstancesResponse>(await this.callApi(params, req, runtime), new GetManualDagInstancesResponse({}));
  }

  async getManualDagInstances(request: GetManualDagInstancesRequest): Promise<GetManualDagInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getManualDagInstancesWithOptions(request, runtime);
  }

  async getMetaCategoryWithOptions(request: GetMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentCategoryId)) {
      query["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaCategoryResponse>(await this.callApi(params, req, runtime), new GetMetaCategoryResponse({}));
  }

  async getMetaCategory(request: GetMetaCategoryRequest): Promise<GetMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaCategoryWithOptions(request, runtime);
  }

  async getMetaColumnLineageWithOptions(request: GetMetaColumnLineageRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaColumnLineageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.columnGuid)) {
      query["ColumnGuid"] = request.columnGuid;
    }

    if (!Util.isUnset(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaColumnLineage",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaColumnLineageResponse>(await this.callApi(params, req, runtime), new GetMetaColumnLineageResponse({}));
  }

  async getMetaColumnLineage(request: GetMetaColumnLineageRequest): Promise<GetMetaColumnLineageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaColumnLineageWithOptions(request, runtime);
  }

  async getMetaDBInfoWithOptions(request: GetMetaDBInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaDBInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaDBInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaDBInfoResponse>(await this.callApi(params, req, runtime), new GetMetaDBInfoResponse({}));
  }

  async getMetaDBInfo(request: GetMetaDBInfoRequest): Promise<GetMetaDBInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaDBInfoWithOptions(request, runtime);
  }

  async getMetaDBTableListWithOptions(request: GetMetaDBTableListRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaDBTableListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaDBTableList",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaDBTableListResponse>(await this.callApi(params, req, runtime), new GetMetaDBTableListResponse({}));
  }

  async getMetaDBTableList(request: GetMetaDBTableListRequest): Promise<GetMetaDBTableListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaDBTableListWithOptions(request, runtime);
  }

  async getMetaTableBasicInfoWithOptions(request: GetMetaTableBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableBasicInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableBasicInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableBasicInfoResponse>(await this.callApi(params, req, runtime), new GetMetaTableBasicInfoResponse({}));
  }

  async getMetaTableBasicInfo(request: GetMetaTableBasicInfoRequest): Promise<GetMetaTableBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableBasicInfoWithOptions(request, runtime);
  }

  async getMetaTableChangeLogWithOptions(request: GetMetaTableChangeLogRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableChangeLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeType)) {
      body["ChangeType"] = request.changeType;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.objectType)) {
      body["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.tableGuid)) {
      body["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableChangeLog",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableChangeLogResponse>(await this.callApi(params, req, runtime), new GetMetaTableChangeLogResponse({}));
  }

  async getMetaTableChangeLog(request: GetMetaTableChangeLogRequest): Promise<GetMetaTableChangeLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableChangeLogWithOptions(request, runtime);
  }

  async getMetaTableColumnWithOptions(request: GetMetaTableColumnRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableColumnResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableColumn",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableColumnResponse>(await this.callApi(params, req, runtime), new GetMetaTableColumnResponse({}));
  }

  async getMetaTableColumn(request: GetMetaTableColumnRequest): Promise<GetMetaTableColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableColumnWithOptions(request, runtime);
  }

  async getMetaTableFullInfoWithOptions(request: GetMetaTableFullInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableFullInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableFullInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableFullInfoResponse>(await this.callApi(params, req, runtime), new GetMetaTableFullInfoResponse({}));
  }

  async getMetaTableFullInfo(request: GetMetaTableFullInfoRequest): Promise<GetMetaTableFullInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableFullInfoWithOptions(request, runtime);
  }

  async getMetaTableIntroWikiWithOptions(request: GetMetaTableIntroWikiRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableIntroWikiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.wikiVersion)) {
      query["WikiVersion"] = request.wikiVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableIntroWiki",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableIntroWikiResponse>(await this.callApi(params, req, runtime), new GetMetaTableIntroWikiResponse({}));
  }

  async getMetaTableIntroWiki(request: GetMetaTableIntroWikiRequest): Promise<GetMetaTableIntroWikiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableIntroWikiWithOptions(request, runtime);
  }

  async getMetaTableLineageWithOptions(request: GetMetaTableLineageRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableLineageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.nextPrimaryKey)) {
      query["NextPrimaryKey"] = request.nextPrimaryKey;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableLineage",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableLineageResponse>(await this.callApi(params, req, runtime), new GetMetaTableLineageResponse({}));
  }

  async getMetaTableLineage(request: GetMetaTableLineageRequest): Promise<GetMetaTableLineageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableLineageWithOptions(request, runtime);
  }

  async getMetaTableListByCategoryWithOptions(request: GetMetaTableListByCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableListByCategoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableListByCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableListByCategoryResponse>(await this.callApi(params, req, runtime), new GetMetaTableListByCategoryResponse({}));
  }

  async getMetaTableListByCategory(request: GetMetaTableListByCategoryRequest): Promise<GetMetaTableListByCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableListByCategoryWithOptions(request, runtime);
  }

  async getMetaTableOutputWithOptions(request: GetMetaTableOutputRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableOutputResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableOutput",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableOutputResponse>(await this.callApi(params, req, runtime), new GetMetaTableOutputResponse({}));
  }

  async getMetaTableOutput(request: GetMetaTableOutputRequest): Promise<GetMetaTableOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableOutputWithOptions(request, runtime);
  }

  async getMetaTablePartitionWithOptions(request: GetMetaTablePartitionRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTablePartitionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTablePartition",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTablePartitionResponse>(await this.callApi(params, req, runtime), new GetMetaTablePartitionResponse({}));
  }

  async getMetaTablePartition(request: GetMetaTablePartitionRequest): Promise<GetMetaTablePartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTablePartitionWithOptions(request, runtime);
  }

  async getMetaTableThemeLevelWithOptions(request: GetMetaTableThemeLevelRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableThemeLevelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableThemeLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableThemeLevelResponse>(await this.callApi(params, req, runtime), new GetMetaTableThemeLevelResponse({}));
  }

  async getMetaTableThemeLevel(request: GetMetaTableThemeLevelRequest): Promise<GetMetaTableThemeLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableThemeLevelWithOptions(request, runtime);
  }

  async getMigrationProcessWithOptions(request: GetMigrationProcessRequest, runtime: $Util.RuntimeOptions): Promise<GetMigrationProcessResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.migrationId)) {
      body["MigrationId"] = request.migrationId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMigrationProcess",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMigrationProcessResponse>(await this.callApi(params, req, runtime), new GetMigrationProcessResponse({}));
  }

  async getMigrationProcess(request: GetMigrationProcessRequest): Promise<GetMigrationProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMigrationProcessWithOptions(request, runtime);
  }

  async getMigrationSummaryWithOptions(request: GetMigrationSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetMigrationSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.migrationId)) {
      body["MigrationId"] = request.migrationId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMigrationSummary",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMigrationSummaryResponse>(await this.callApi(params, req, runtime), new GetMigrationSummaryResponse({}));
  }

  async getMigrationSummary(request: GetMigrationSummaryRequest): Promise<GetMigrationSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMigrationSummaryWithOptions(request, runtime);
  }

  async getNodeWithOptions(request: GetNodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeResponse>(await this.callApi(params, req, runtime), new GetNodeResponse({}));
  }

  async getNode(request: GetNodeRequest): Promise<GetNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeWithOptions(request, runtime);
  }

  async getNodeChildrenWithOptions(request: GetNodeChildrenRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeChildrenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeChildren",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeChildrenResponse>(await this.callApi(params, req, runtime), new GetNodeChildrenResponse({}));
  }

  async getNodeChildren(request: GetNodeChildrenRequest): Promise<GetNodeChildrenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeChildrenWithOptions(request, runtime);
  }

  async getNodeCodeWithOptions(request: GetNodeCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeCode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeCodeResponse>(await this.callApi(params, req, runtime), new GetNodeCodeResponse({}));
  }

  async getNodeCode(request: GetNodeCodeRequest): Promise<GetNodeCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeCodeWithOptions(request, runtime);
  }

  async getNodeOnBaselineWithOptions(request: GetNodeOnBaselineRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeOnBaselineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeOnBaseline",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeOnBaselineResponse>(await this.callApi(params, req, runtime), new GetNodeOnBaselineResponse({}));
  }

  async getNodeOnBaseline(request: GetNodeOnBaselineRequest): Promise<GetNodeOnBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeOnBaselineWithOptions(request, runtime);
  }

  async getNodeParentsWithOptions(request: GetNodeParentsRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeParentsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeParents",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeParentsResponse>(await this.callApi(params, req, runtime), new GetNodeParentsResponse({}));
  }

  async getNodeParents(request: GetNodeParentsRequest): Promise<GetNodeParentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeParentsWithOptions(request, runtime);
  }

  async getNodeTypeListInfoWithOptions(request: GetNodeTypeListInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeTypeListInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.locale)) {
      body["Locale"] = request.locale;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeTypeListInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeTypeListInfoResponse>(await this.callApi(params, req, runtime), new GetNodeTypeListInfoResponse({}));
  }

  async getNodeTypeListInfo(request: GetNodeTypeListInfoRequest): Promise<GetNodeTypeListInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeTypeListInfoWithOptions(request, runtime);
  }

  async getOpRiskDataWithOptions(request: GetOpRiskDataRequest, runtime: $Util.RuntimeOptions): Promise<GetOpRiskDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOpRiskData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpRiskDataResponse>(await this.callApi(params, req, runtime), new GetOpRiskDataResponse({}));
  }

  async getOpRiskData(request: GetOpRiskDataRequest): Promise<GetOpRiskDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpRiskDataWithOptions(request, runtime);
  }

  async getOpSensitiveDataWithOptions(request: GetOpSensitiveDataRequest, runtime: $Util.RuntimeOptions): Promise<GetOpSensitiveDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOpSensitiveData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpSensitiveDataResponse>(await this.callApi(params, req, runtime), new GetOpSensitiveDataResponse({}));
  }

  async getOpSensitiveData(request: GetOpSensitiveDataRequest): Promise<GetOpSensitiveDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpSensitiveDataWithOptions(request, runtime);
  }

  async getPermissionApplyOrderDetailWithOptions(request: GetPermissionApplyOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetPermissionApplyOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPermissionApplyOrderDetail",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPermissionApplyOrderDetailResponse>(await this.callApi(params, req, runtime), new GetPermissionApplyOrderDetailResponse({}));
  }

  async getPermissionApplyOrderDetail(request: GetPermissionApplyOrderDetailRequest): Promise<GetPermissionApplyOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermissionApplyOrderDetailWithOptions(request, runtime);
  }

  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  async getProjectDetailWithOptions(request: GetProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectDetail",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectDetailResponse>(await this.callApi(params, req, runtime), new GetProjectDetailResponse({}));
  }

  async getProjectDetail(request: GetProjectDetailRequest): Promise<GetProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectDetailWithOptions(request, runtime);
  }

  async getQualityEntityWithOptions(request: GetQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.matchExpression)) {
      body["MatchExpression"] = request.matchExpression;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityEntityResponse>(await this.callApi(params, req, runtime), new GetQualityEntityResponse({}));
  }

  async getQualityEntity(request: GetQualityEntityRequest): Promise<GetQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityEntityWithOptions(request, runtime);
  }

  async getQualityFollowerWithOptions(request: GetQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityFollowerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityFollower",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityFollowerResponse>(await this.callApi(params, req, runtime), new GetQualityFollowerResponse({}));
  }

  async getQualityFollower(request: GetQualityFollowerRequest): Promise<GetQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityFollowerWithOptions(request, runtime);
  }

  async getQualityRuleWithOptions(request: GetQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityRuleResponse>(await this.callApi(params, req, runtime), new GetQualityRuleResponse({}));
  }

  async getQualityRule(request: GetQualityRuleRequest): Promise<GetQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleWithOptions(request, runtime);
  }

  async getRemindWithOptions(request: GetRemindRequest, runtime: $Util.RuntimeOptions): Promise<GetRemindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.remindId)) {
      body["RemindId"] = request.remindId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRemind",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRemindResponse>(await this.callApi(params, req, runtime), new GetRemindResponse({}));
  }

  async getRemind(request: GetRemindRequest): Promise<GetRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRemindWithOptions(request, runtime);
  }

  async getSensitiveDataWithOptions(request: GetSensitiveDataRequest, runtime: $Util.RuntimeOptions): Promise<GetSensitiveDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSensitiveData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSensitiveDataResponse>(await this.callApi(params, req, runtime), new GetSensitiveDataResponse({}));
  }

  async getSensitiveData(request: GetSensitiveDataRequest): Promise<GetSensitiveDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSensitiveDataWithOptions(request, runtime);
  }

  async getSuccessInstanceTrendWithOptions(request: GetSuccessInstanceTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetSuccessInstanceTrendResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSuccessInstanceTrend",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSuccessInstanceTrendResponse>(await this.callApi(params, req, runtime), new GetSuccessInstanceTrendResponse({}));
  }

  async getSuccessInstanceTrend(request: GetSuccessInstanceTrendRequest): Promise<GetSuccessInstanceTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuccessInstanceTrendWithOptions(request, runtime);
  }

  async getTopicWithOptions(request: GetTopicRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTopic",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTopicResponse>(await this.callApi(params, req, runtime), new GetTopicResponse({}));
  }

  async getTopic(request: GetTopicRequest): Promise<GetTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicWithOptions(request, runtime);
  }

  async getTopicInfluenceWithOptions(request: GetTopicInfluenceRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicInfluenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTopicInfluence",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTopicInfluenceResponse>(await this.callApi(params, req, runtime), new GetTopicInfluenceResponse({}));
  }

  async getTopicInfluence(request: GetTopicInfluenceRequest): Promise<GetTopicInfluenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicInfluenceWithOptions(request, runtime);
  }

  async importDataSourcesWithOptions(request: ImportDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ImportDataSourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSources)) {
      query["DataSources"] = request.dataSources;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportDataSources",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportDataSourcesResponse>(await this.callApi(params, req, runtime), new ImportDataSourcesResponse({}));
  }

  async importDataSources(request: ImportDataSourcesRequest): Promise<ImportDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importDataSourcesWithOptions(request, runtime);
  }

  async listAlertMessagesWithOptions(request: ListAlertMessagesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertMessagesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertMethods)) {
      body["AlertMethods"] = request.alertMethods;
    }

    if (!Util.isUnset(request.alertRuleTypes)) {
      body["AlertRuleTypes"] = request.alertRuleTypes;
    }

    if (!Util.isUnset(request.alertUser)) {
      body["AlertUser"] = request.alertUser;
    }

    if (!Util.isUnset(request.beginTime)) {
      body["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remindId)) {
      body["RemindId"] = request.remindId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAlertMessages",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlertMessagesResponse>(await this.callApi(params, req, runtime), new ListAlertMessagesResponse({}));
  }

  async listAlertMessages(request: ListAlertMessagesRequest): Promise<ListAlertMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertMessagesWithOptions(request, runtime);
  }

  async listBaselineConfigsWithOptions(request: ListBaselineConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListBaselineConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baselineTypes)) {
      body["BaselineTypes"] = request.baselineTypes;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    if (!Util.isUnset(request.useflag)) {
      body["Useflag"] = request.useflag;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListBaselineConfigs",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBaselineConfigsResponse>(await this.callApi(params, req, runtime), new ListBaselineConfigsResponse({}));
  }

  async listBaselineConfigs(request: ListBaselineConfigsRequest): Promise<ListBaselineConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBaselineConfigsWithOptions(request, runtime);
  }

  async listBaselineStatusesWithOptions(request: ListBaselineStatusesRequest, runtime: $Util.RuntimeOptions): Promise<ListBaselineStatusesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baselineTypes)) {
      body["BaselineTypes"] = request.baselineTypes;
    }

    if (!Util.isUnset(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!Util.isUnset(request.finishStatus)) {
      body["FinishStatus"] = request.finishStatus;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListBaselineStatuses",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBaselineStatusesResponse>(await this.callApi(params, req, runtime), new ListBaselineStatusesResponse({}));
  }

  async listBaselineStatuses(request: ListBaselineStatusesRequest): Promise<ListBaselineStatusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBaselineStatusesWithOptions(request, runtime);
  }

  async listBusinessWithOptions(request: ListBusinessRequest, runtime: $Util.RuntimeOptions): Promise<ListBusinessResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBusinessResponse>(await this.callApi(params, req, runtime), new ListBusinessResponse({}));
  }

  async listBusiness(request: ListBusinessRequest): Promise<ListBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBusinessWithOptions(request, runtime);
  }

  async listCalcEnginesWithOptions(request: ListCalcEnginesRequest, runtime: $Util.RuntimeOptions): Promise<ListCalcEnginesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calcEngineType)) {
      query["CalcEngineType"] = request.calcEngineType;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCalcEngines",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCalcEnginesResponse>(await this.callApi(params, req, runtime), new ListCalcEnginesResponse({}));
  }

  async listCalcEngines(request: ListCalcEnginesRequest): Promise<ListCalcEnginesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCalcEnginesWithOptions(request, runtime);
  }

  async listConnectionsWithOptions(request: ListConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConnections",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConnectionsResponse>(await this.callApi(params, req, runtime), new ListConnectionsResponse({}));
  }

  async listConnections(request: ListConnectionsRequest): Promise<ListConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionsWithOptions(request, runtime);
  }

  async listDIProjectConfigWithOptions(request: ListDIProjectConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListDIProjectConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIProjectConfig",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIProjectConfigResponse>(await this.callApi(params, req, runtime), new ListDIProjectConfigResponse({}));
  }

  async listDIProjectConfig(request: ListDIProjectConfigRequest): Promise<ListDIProjectConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIProjectConfigWithOptions(request, runtime);
  }

  async listDagsWithOptions(request: ListDagsRequest, runtime: $Util.RuntimeOptions): Promise<ListDagsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.opSeq)) {
      body["OpSeq"] = request.opSeq;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDags",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDagsResponse>(await this.callApi(params, req, runtime), new ListDagsResponse({}));
  }

  async listDags(request: ListDagsRequest): Promise<ListDagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDagsWithOptions(request, runtime);
  }

  async listDataServiceApiAuthoritiesWithOptions(request: ListDataServiceApiAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApiAuthoritiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiNameKeyword)) {
      body["ApiNameKeyword"] = request.apiNameKeyword;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataServiceApiAuthorities",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataServiceApiAuthoritiesResponse>(await this.callApi(params, req, runtime), new ListDataServiceApiAuthoritiesResponse({}));
  }

  async listDataServiceApiAuthorities(request: ListDataServiceApiAuthoritiesRequest): Promise<ListDataServiceApiAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApiAuthoritiesWithOptions(request, runtime);
  }

  async listDataServiceApisWithOptions(request: ListDataServiceApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiNameKeyword)) {
      body["ApiNameKeyword"] = request.apiNameKeyword;
    }

    if (!Util.isUnset(request.apiPathKeyword)) {
      body["ApiPathKeyword"] = request.apiPathKeyword;
    }

    if (!Util.isUnset(request.creatorId)) {
      body["CreatorId"] = request.creatorId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataServiceApis",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataServiceApisResponse>(await this.callApi(params, req, runtime), new ListDataServiceApisResponse({}));
  }

  async listDataServiceApis(request: ListDataServiceApisRequest): Promise<ListDataServiceApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApisWithOptions(request, runtime);
  }

  async listDataServiceApplicationsWithOptions(request: ListDataServiceApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApplicationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectIdList)) {
      body["ProjectIdList"] = request.projectIdList;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataServiceApplications",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataServiceApplicationsResponse>(await this.callApi(params, req, runtime), new ListDataServiceApplicationsResponse({}));
  }

  async listDataServiceApplications(request: ListDataServiceApplicationsRequest): Promise<ListDataServiceApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApplicationsWithOptions(request, runtime);
  }

  async listDataServiceAuthorizedApisWithOptions(request: ListDataServiceAuthorizedApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceAuthorizedApisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiNameKeyword)) {
      body["ApiNameKeyword"] = request.apiNameKeyword;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataServiceAuthorizedApis",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataServiceAuthorizedApisResponse>(await this.callApi(params, req, runtime), new ListDataServiceAuthorizedApisResponse({}));
  }

  async listDataServiceAuthorizedApis(request: ListDataServiceAuthorizedApisRequest): Promise<ListDataServiceAuthorizedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceAuthorizedApisWithOptions(request, runtime);
  }

  async listDataServiceFoldersWithOptions(request: ListDataServiceFoldersRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceFoldersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderNameKeyword)) {
      body["FolderNameKeyword"] = request.folderNameKeyword;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataServiceFolders",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataServiceFoldersResponse>(await this.callApi(params, req, runtime), new ListDataServiceFoldersResponse({}));
  }

  async listDataServiceFolders(request: ListDataServiceFoldersRequest): Promise<ListDataServiceFoldersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceFoldersWithOptions(request, runtime);
  }

  async listDataServiceGroupsWithOptions(request: ListDataServiceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupNameKeyword)) {
      body["GroupNameKeyword"] = request.groupNameKeyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataServiceGroups",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataServiceGroupsResponse>(await this.callApi(params, req, runtime), new ListDataServiceGroupsResponse({}));
  }

  async listDataServiceGroups(request: ListDataServiceGroupsRequest): Promise<ListDataServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceGroupsWithOptions(request, runtime);
  }

  async listDataServicePublishedApisWithOptions(request: ListDataServicePublishedApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServicePublishedApisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiNameKeyword)) {
      body["ApiNameKeyword"] = request.apiNameKeyword;
    }

    if (!Util.isUnset(request.apiPathKeyword)) {
      body["ApiPathKeyword"] = request.apiPathKeyword;
    }

    if (!Util.isUnset(request.creatorId)) {
      body["CreatorId"] = request.creatorId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataServicePublishedApis",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataServicePublishedApisResponse>(await this.callApi(params, req, runtime), new ListDataServicePublishedApisResponse({}));
  }

  async listDataServicePublishedApis(request: ListDataServicePublishedApisRequest): Promise<ListDataServicePublishedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServicePublishedApisWithOptions(request, runtime);
  }

  async listDataSourcesWithOptions(request: ListDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSources",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourcesResponse>(await this.callApi(params, req, runtime), new ListDataSourcesResponse({}));
  }

  async listDataSources(request: ListDataSourcesRequest): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  async listDeploymentsWithOptions(request: ListDeploymentsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeploymentsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creator)) {
      body["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.endCreateTime)) {
      body["EndCreateTime"] = request.endCreateTime;
    }

    if (!Util.isUnset(request.endExecuteTime)) {
      body["EndExecuteTime"] = request.endExecuteTime;
    }

    if (!Util.isUnset(request.executor)) {
      body["Executor"] = request.executor;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployments",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentsResponse>(await this.callApi(params, req, runtime), new ListDeploymentsResponse({}));
  }

  async listDeployments(request: ListDeploymentsRequest): Promise<ListDeploymentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeploymentsWithOptions(request, runtime);
  }

  async listFileTypeWithOptions(request: ListFileTypeRequest, runtime: $Util.RuntimeOptions): Promise<ListFileTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.locale)) {
      body["Locale"] = request.locale;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFileType",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFileTypeResponse>(await this.callApi(params, req, runtime), new ListFileTypeResponse({}));
  }

  async listFileType(request: ListFileTypeRequest): Promise<ListFileTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileTypeWithOptions(request, runtime);
  }

  async listFileVersionsWithOptions(request: ListFileVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListFileVersionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFileVersions",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFileVersionsResponse>(await this.callApi(params, req, runtime), new ListFileVersionsResponse({}));
  }

  async listFileVersions(request: ListFileVersionsRequest): Promise<ListFileVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileVersionsWithOptions(request, runtime);
  }

  async listFilesWithOptions(request: ListFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFilesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!Util.isUnset(request.fileTypes)) {
      body["FileTypes"] = request.fileTypes;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!Util.isUnset(request.useType)) {
      body["UseType"] = request.useType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFiles",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFilesResponse>(await this.callApi(params, req, runtime), new ListFilesResponse({}));
  }

  async listFiles(request: ListFilesRequest): Promise<ListFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  async listFoldersWithOptions(request: ListFoldersRequest, runtime: $Util.RuntimeOptions): Promise<ListFoldersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentFolderPath)) {
      body["ParentFolderPath"] = request.parentFolderPath;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFolders",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFoldersResponse>(await this.callApi(params, req, runtime), new ListFoldersResponse({}));
  }

  async listFolders(request: ListFoldersRequest): Promise<ListFoldersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFoldersWithOptions(request, runtime);
  }

  async listInstanceAmountWithOptions(request: ListInstanceAmountRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceAmountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beginDate)) {
      body["BeginDate"] = request.beginDate;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceAmount",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceAmountResponse>(await this.callApi(params, req, runtime), new ListInstanceAmountResponse({}));
  }

  async listInstanceAmount(request: ListInstanceAmountRequest): Promise<ListInstanceAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceAmountWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beginBizdate)) {
      body["BeginBizdate"] = request.beginBizdate;
    }

    if (!Util.isUnset(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!Util.isUnset(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!Util.isUnset(request.dagId)) {
      body["DagId"] = request.dagId;
    }

    if (!Util.isUnset(request.endBizdate)) {
      body["EndBizdate"] = request.endBizdate;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.programType)) {
      body["ProgramType"] = request.programType;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async listManualDagInstancesWithOptions(request: ListManualDagInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListManualDagInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dagId)) {
      body["DagId"] = request.dagId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListManualDagInstances",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListManualDagInstancesResponse>(await this.callApi(params, req, runtime), new ListManualDagInstancesResponse({}));
  }

  async listManualDagInstances(request: ListManualDagInstancesRequest): Promise<ListManualDagInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listManualDagInstancesWithOptions(request, runtime);
  }

  async listMetaDBWithOptions(request: ListMetaDBRequest, runtime: $Util.RuntimeOptions): Promise<ListMetaDBResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMetaDB",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMetaDBResponse>(await this.callApi(params, req, runtime), new ListMetaDBResponse({}));
  }

  async listMetaDB(request: ListMetaDBRequest): Promise<ListMetaDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMetaDBWithOptions(request, runtime);
  }

  async listNodeIOWithOptions(request: ListNodeIORequest, runtime: $Util.RuntimeOptions): Promise<ListNodeIOResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ioType)) {
      body["IoType"] = request.ioType;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeIO",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeIOResponse>(await this.callApi(params, req, runtime), new ListNodeIOResponse({}));
  }

  async listNodeIO(request: ListNodeIORequest): Promise<ListNodeIOResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeIOWithOptions(request, runtime);
  }

  async listNodeInputOrOutputWithOptions(request: ListNodeInputOrOutputRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeInputOrOutputResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ioType)) {
      body["IoType"] = request.ioType;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeInputOrOutput",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeInputOrOutputResponse>(await this.callApi(params, req, runtime), new ListNodeInputOrOutputResponse({}));
  }

  async listNodeInputOrOutput(request: ListNodeInputOrOutputRequest): Promise<ListNodeInputOrOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeInputOrOutputWithOptions(request, runtime);
  }

  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!Util.isUnset(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.programType)) {
      body["ProgramType"] = request.programType;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  async listNodesByBaselineWithOptions(request: ListNodesByBaselineRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesByBaselineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListNodesByBaseline",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesByBaselineResponse>(await this.callApi(params, req, runtime), new ListNodesByBaselineResponse({}));
  }

  async listNodesByBaseline(request: ListNodesByBaselineRequest): Promise<ListNodesByBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesByBaselineWithOptions(request, runtime);
  }

  async listNodesByOutputWithOptions(request: ListNodesByOutputRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesByOutputResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outputs)) {
      body["Outputs"] = request.outputs;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListNodesByOutput",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesByOutputResponse>(await this.callApi(params, req, runtime), new ListNodesByOutputResponse({}));
  }

  async listNodesByOutput(request: ListNodesByOutputRequest): Promise<ListNodesByOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesByOutputWithOptions(request, runtime);
  }

  async listPermissionApplyOrdersWithOptions(request: ListPermissionApplyOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListPermissionApplyOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.flowStatus)) {
      query["FlowStatus"] = request.flowStatus;
    }

    if (!Util.isUnset(request.maxComputeProjectName)) {
      query["MaxComputeProjectName"] = request.maxComputeProjectName;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPermissionApplyOrders",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPermissionApplyOrdersResponse>(await this.callApi(params, req, runtime), new ListPermissionApplyOrdersResponse({}));
  }

  async listPermissionApplyOrders(request: ListPermissionApplyOrdersRequest): Promise<ListPermissionApplyOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionApplyOrdersWithOptions(request, runtime);
  }

  async listProgramTypeCountWithOptions(request: ListProgramTypeCountRequest, runtime: $Util.RuntimeOptions): Promise<ListProgramTypeCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProgramTypeCount",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProgramTypeCountResponse>(await this.callApi(params, req, runtime), new ListProgramTypeCountResponse({}));
  }

  async listProgramTypeCount(request: ListProgramTypeCountRequest): Promise<ListProgramTypeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProgramTypeCountWithOptions(request, runtime);
  }

  async listProjectIdsWithOptions(request: ListProjectIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectIdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjectIds",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectIdsResponse>(await this.callApi(params, req, runtime), new ListProjectIdsResponse({}));
  }

  async listProjectIds(request: ListProjectIdsRequest): Promise<ListProjectIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectIdsWithOptions(request, runtime);
  }

  async listProjectMembersWithOptions(request: ListProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjectMembers",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectMembersResponse>(await this.callApi(params, req, runtime), new ListProjectMembersResponse({}));
  }

  async listProjectMembers(request: ListProjectMembersRequest): Promise<ListProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectMembersWithOptions(request, runtime);
  }

  async listProjectRolesWithOptions(request: ListProjectRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjectRoles",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectRolesResponse>(await this.callApi(params, req, runtime), new ListProjectRolesResponse({}));
  }

  async listProjectRoles(request: ListProjectRolesRequest): Promise<ListProjectRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectRolesWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async listQualityResultsByEntityWithOptions(request: ListQualityResultsByEntityRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityResultsByEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQualityResultsByEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQualityResultsByEntityResponse>(await this.callApi(params, req, runtime), new ListQualityResultsByEntityResponse({}));
  }

  async listQualityResultsByEntity(request: ListQualityResultsByEntityRequest): Promise<ListQualityResultsByEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityResultsByEntityWithOptions(request, runtime);
  }

  async listQualityResultsByRuleWithOptions(request: ListQualityResultsByRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityResultsByRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQualityResultsByRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQualityResultsByRuleResponse>(await this.callApi(params, req, runtime), new ListQualityResultsByRuleResponse({}));
  }

  async listQualityResultsByRule(request: ListQualityResultsByRuleRequest): Promise<ListQualityResultsByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityResultsByRuleWithOptions(request, runtime);
  }

  async listQualityRulesWithOptions(request: ListQualityRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQualityRules",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQualityRulesResponse>(await this.callApi(params, req, runtime), new ListQualityRulesResponse({}));
  }

  async listQualityRules(request: ListQualityRulesRequest): Promise<ListQualityRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityRulesWithOptions(request, runtime);
  }

  async listRefDISyncTasksWithOptions(request: ListRefDISyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListRefDISyncTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasourceName)) {
      query["DatasourceName"] = request.datasourceName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.refType)) {
      query["RefType"] = request.refType;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRefDISyncTasks",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRefDISyncTasksResponse>(await this.callApi(params, req, runtime), new ListRefDISyncTasksResponse({}));
  }

  async listRefDISyncTasks(request: ListRefDISyncTasksRequest): Promise<ListRefDISyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRefDISyncTasksWithOptions(request, runtime);
  }

  async listRemindsWithOptions(request: ListRemindsRequest, runtime: $Util.RuntimeOptions): Promise<ListRemindsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertTarget)) {
      body["AlertTarget"] = request.alertTarget;
    }

    if (!Util.isUnset(request.founder)) {
      body["Founder"] = request.founder;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remindTypes)) {
      body["RemindTypes"] = request.remindTypes;
    }

    if (!Util.isUnset(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListReminds",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRemindsResponse>(await this.callApi(params, req, runtime), new ListRemindsResponse({}));
  }

  async listReminds(request: ListRemindsRequest): Promise<ListRemindsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRemindsWithOptions(request, runtime);
  }

  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizExtKey)) {
      query["BizExtKey"] = request.bizExtKey;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.resourceGroupType)) {
      query["ResourceGroupType"] = request.resourceGroupType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceGroups",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new ListResourceGroupsResponse({}));
  }

  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  async listSuccessInstanceAmountWithOptions(request: ListSuccessInstanceAmountRequest, runtime: $Util.RuntimeOptions): Promise<ListSuccessInstanceAmountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSuccessInstanceAmount",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSuccessInstanceAmountResponse>(await this.callApi(params, req, runtime), new ListSuccessInstanceAmountResponse({}));
  }

  async listSuccessInstanceAmount(request: ListSuccessInstanceAmountRequest): Promise<ListSuccessInstanceAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSuccessInstanceAmountWithOptions(request, runtime);
  }

  async listTableLevelWithOptions(request: ListTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<ListTableLevelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTableLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTableLevelResponse>(await this.callApi(params, req, runtime), new ListTableLevelResponse({}));
  }

  async listTableLevel(request: ListTableLevelRequest): Promise<ListTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTableLevelWithOptions(request, runtime);
  }

  async listTableThemeWithOptions(request: ListTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<ListTableThemeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTableTheme",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTableThemeResponse>(await this.callApi(params, req, runtime), new ListTableThemeResponse({}));
  }

  async listTableTheme(request: ListTableThemeRequest): Promise<ListTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTableThemeWithOptions(request, runtime);
  }

  async listTopicsWithOptions(request: ListTopicsRequest, runtime: $Util.RuntimeOptions): Promise<ListTopicsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beginTime)) {
      body["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.topicStatuses)) {
      body["TopicStatuses"] = request.topicStatuses;
    }

    if (!Util.isUnset(request.topicTypes)) {
      body["TopicTypes"] = request.topicTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTopics",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTopicsResponse>(await this.callApi(params, req, runtime), new ListTopicsResponse({}));
  }

  async listTopics(request: ListTopicsRequest): Promise<ListTopicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTopicsWithOptions(request, runtime);
  }

  async publishDataServiceApiWithOptions(request: PublishDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<PublishDataServiceApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishDataServiceApiResponse>(await this.callApi(params, req, runtime), new PublishDataServiceApiResponse({}));
  }

  async publishDataServiceApi(request: PublishDataServiceApiRequest): Promise<PublishDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishDataServiceApiWithOptions(request, runtime);
  }

  async queryDISyncTaskConfigProcessResultWithOptions(request: QueryDISyncTaskConfigProcessResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryDISyncTaskConfigProcessResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asyncProcessId)) {
      query["AsyncProcessId"] = request.asyncProcessId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDISyncTaskConfigProcessResult",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDISyncTaskConfigProcessResultResponse>(await this.callApi(params, req, runtime), new QueryDISyncTaskConfigProcessResultResponse({}));
  }

  async queryDISyncTaskConfigProcessResult(request: QueryDISyncTaskConfigProcessResultRequest): Promise<QueryDISyncTaskConfigProcessResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDISyncTaskConfigProcessResultWithOptions(request, runtime);
  }

  async queryPublicModelEngineWithOptions(request: QueryPublicModelEngineRequest, runtime: $Util.RuntimeOptions): Promise<QueryPublicModelEngineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryPublicModelEngine",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPublicModelEngineResponse>(await this.callApi(params, req, runtime), new QueryPublicModelEngineResponse({}));
  }

  async queryPublicModelEngine(request: QueryPublicModelEngineRequest): Promise<QueryPublicModelEngineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPublicModelEngineWithOptions(request, runtime);
  }

  async removeProjectMemberFromRoleWithOptions(request: RemoveProjectMemberFromRoleRequest, runtime: $Util.RuntimeOptions): Promise<RemoveProjectMemberFromRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.roleCode)) {
      query["RoleCode"] = request.roleCode;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveProjectMemberFromRole",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveProjectMemberFromRoleResponse>(await this.callApi(params, req, runtime), new RemoveProjectMemberFromRoleResponse({}));
  }

  async removeProjectMemberFromRole(request: RemoveProjectMemberFromRoleRequest): Promise<RemoveProjectMemberFromRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeProjectMemberFromRoleWithOptions(request, runtime);
  }

  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RestartInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartInstanceResponse>(await this.callApi(params, req, runtime), new RestartInstanceResponse({}));
  }

  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  async resumeInstanceWithOptions(request: ResumeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ResumeInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResumeInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeInstanceResponse>(await this.callApi(params, req, runtime), new ResumeInstanceResponse({}));
  }

  async resumeInstance(request: ResumeInstanceRequest): Promise<ResumeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  async revokeColumnPermissionWithOptions(request: RevokeColumnPermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeColumnPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.columns)) {
      query["Columns"] = request.columns;
    }

    if (!Util.isUnset(request.maxComputeProjectName)) {
      query["MaxComputeProjectName"] = request.maxComputeProjectName;
    }

    if (!Util.isUnset(request.revokeUserId)) {
      query["RevokeUserId"] = request.revokeUserId;
    }

    if (!Util.isUnset(request.revokeUserName)) {
      query["RevokeUserName"] = request.revokeUserName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeColumnPermission",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeColumnPermissionResponse>(await this.callApi(params, req, runtime), new RevokeColumnPermissionResponse({}));
  }

  async revokeColumnPermission(request: RevokeColumnPermissionRequest): Promise<RevokeColumnPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeColumnPermissionWithOptions(request, runtime);
  }

  async revokeTablePermissionWithOptions(request: RevokeTablePermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeTablePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actions)) {
      query["Actions"] = request.actions;
    }

    if (!Util.isUnset(request.maxComputeProjectName)) {
      query["MaxComputeProjectName"] = request.maxComputeProjectName;
    }

    if (!Util.isUnset(request.revokeUserId)) {
      query["RevokeUserId"] = request.revokeUserId;
    }

    if (!Util.isUnset(request.revokeUserName)) {
      query["RevokeUserName"] = request.revokeUserName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeTablePermission",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeTablePermissionResponse>(await this.callApi(params, req, runtime), new RevokeTablePermissionResponse({}));
  }

  async revokeTablePermission(request: RevokeTablePermissionRequest): Promise<RevokeTablePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeTablePermissionWithOptions(request, runtime);
  }

  async runCycleDagNodesWithOptions(request: RunCycleDagNodesRequest, runtime: $Util.RuntimeOptions): Promise<RunCycleDagNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizBeginTime)) {
      body["BizBeginTime"] = request.bizBeginTime;
    }

    if (!Util.isUnset(request.bizEndTime)) {
      body["BizEndTime"] = request.bizEndTime;
    }

    if (!Util.isUnset(request.endBizDate)) {
      body["EndBizDate"] = request.endBizDate;
    }

    if (!Util.isUnset(request.excludeNodeIds)) {
      body["ExcludeNodeIds"] = request.excludeNodeIds;
    }

    if (!Util.isUnset(request.includeNodeIds)) {
      body["IncludeNodeIds"] = request.includeNodeIds;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nodeParams)) {
      body["NodeParams"] = request.nodeParams;
    }

    if (!Util.isUnset(request.parallelism)) {
      body["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.rootNodeId)) {
      body["RootNodeId"] = request.rootNodeId;
    }

    if (!Util.isUnset(request.startBizDate)) {
      body["StartBizDate"] = request.startBizDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunCycleDagNodes",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCycleDagNodesResponse>(await this.callApi(params, req, runtime), new RunCycleDagNodesResponse({}));
  }

  async runCycleDagNodes(request: RunCycleDagNodesRequest): Promise<RunCycleDagNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCycleDagNodesWithOptions(request, runtime);
  }

  async runManualDagNodesWithOptions(request: RunManualDagNodesRequest, runtime: $Util.RuntimeOptions): Promise<RunManualDagNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.dagParameters)) {
      body["DagParameters"] = request.dagParameters;
    }

    if (!Util.isUnset(request.excludeNodeIds)) {
      body["ExcludeNodeIds"] = request.excludeNodeIds;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.includeNodeIds)) {
      body["IncludeNodeIds"] = request.includeNodeIds;
    }

    if (!Util.isUnset(request.nodeParameters)) {
      body["NodeParameters"] = request.nodeParameters;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunManualDagNodes",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunManualDagNodesResponse>(await this.callApi(params, req, runtime), new RunManualDagNodesResponse({}));
  }

  async runManualDagNodes(request: RunManualDagNodesRequest): Promise<RunManualDagNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runManualDagNodesWithOptions(request, runtime);
  }

  async runSmokeTestWithOptions(request: RunSmokeTestRequest, runtime: $Util.RuntimeOptions): Promise<RunSmokeTestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.nodeParams)) {
      body["NodeParams"] = request.nodeParams;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunSmokeTest",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunSmokeTestResponse>(await this.callApi(params, req, runtime), new RunSmokeTestResponse({}));
  }

  async runSmokeTest(request: RunSmokeTestRequest): Promise<RunSmokeTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runSmokeTestWithOptions(request, runtime);
  }

  async runTriggerNodeWithOptions(request: RunTriggerNodeRequest, runtime: $Util.RuntimeOptions): Promise<RunTriggerNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.cycleTime)) {
      body["CycleTime"] = request.cycleTime;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunTriggerNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunTriggerNodeResponse>(await this.callApi(params, req, runtime), new RunTriggerNodeResponse({}));
  }

  async runTriggerNode(request: RunTriggerNodeRequest): Promise<RunTriggerNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runTriggerNodeWithOptions(request, runtime);
  }

  async scanSensitiveDataWithOptions(request: ScanSensitiveDataRequest, runtime: $Util.RuntimeOptions): Promise<ScanSensitiveDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScanSensitiveData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScanSensitiveDataResponse>(await this.callApi(params, req, runtime), new ScanSensitiveDataResponse({}));
  }

  async scanSensitiveData(request: ScanSensitiveDataRequest): Promise<ScanSensitiveDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scanSensitiveDataWithOptions(request, runtime);
  }

  async searchMetaTablesWithOptions(request: SearchMetaTablesRequest, runtime: $Util.RuntimeOptions): Promise<SearchMetaTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchMetaTables",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchMetaTablesResponse>(await this.callApi(params, req, runtime), new SearchMetaTablesResponse({}));
  }

  async searchMetaTables(request: SearchMetaTablesRequest): Promise<SearchMetaTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchMetaTablesWithOptions(request, runtime);
  }

  async searchNodesByOutputWithOptions(request: SearchNodesByOutputRequest, runtime: $Util.RuntimeOptions): Promise<SearchNodesByOutputResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outputs)) {
      body["Outputs"] = request.outputs;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchNodesByOutput",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchNodesByOutputResponse>(await this.callApi(params, req, runtime), new SearchNodesByOutputResponse({}));
  }

  async searchNodesByOutput(request: SearchNodesByOutputRequest): Promise<SearchNodesByOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchNodesByOutputWithOptions(request, runtime);
  }

  async setDataSourceShareWithOptions(request: SetDataSourceShareRequest, runtime: $Util.RuntimeOptions): Promise<SetDataSourceShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasourceName)) {
      query["DatasourceName"] = request.datasourceName;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectPermissions)) {
      query["ProjectPermissions"] = request.projectPermissions;
    }

    if (!Util.isUnset(request.userPermissions)) {
      query["UserPermissions"] = request.userPermissions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDataSourceShare",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDataSourceShareResponse>(await this.callApi(params, req, runtime), new SetDataSourceShareResponse({}));
  }

  async setDataSourceShare(request: SetDataSourceShareRequest): Promise<SetDataSourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataSourceShareWithOptions(request, runtime);
  }

  async setSuccessInstanceWithOptions(request: SetSuccessInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SetSuccessInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetSuccessInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSuccessInstanceResponse>(await this.callApi(params, req, runtime), new SetSuccessInstanceResponse({}));
  }

  async setSuccessInstance(request: SetSuccessInstanceRequest): Promise<SetSuccessInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSuccessInstanceWithOptions(request, runtime);
  }

  async startDISyncInstanceWithOptions(request: StartDISyncInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartDISyncInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.startParam)) {
      query["StartParam"] = request.startParam;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDISyncInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDISyncInstanceResponse>(await this.callApi(params, req, runtime), new StartDISyncInstanceResponse({}));
  }

  async startDISyncInstance(request: StartDISyncInstanceRequest): Promise<StartDISyncInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDISyncInstanceWithOptions(request, runtime);
  }

  async startMigrationWithOptions(request: StartMigrationRequest, runtime: $Util.RuntimeOptions): Promise<StartMigrationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.migrationId)) {
      body["MigrationId"] = request.migrationId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartMigration",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartMigrationResponse>(await this.callApi(params, req, runtime), new StartMigrationResponse({}));
  }

  async startMigration(request: StartMigrationRequest): Promise<StartMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMigrationWithOptions(request, runtime);
  }

  async stopDISyncInstanceWithOptions(request: StopDISyncInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopDISyncInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDISyncInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDISyncInstanceResponse>(await this.callApi(params, req, runtime), new StopDISyncInstanceResponse({}));
  }

  async stopDISyncInstance(request: StopDISyncInstanceRequest): Promise<StopDISyncInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDISyncInstanceWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async submitFileWithOptions(request: SubmitFileRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitFileResponse>(await this.callApi(params, req, runtime), new SubmitFileResponse({}));
  }

  async submitFile(request: SubmitFileRequest): Promise<SubmitFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFileWithOptions(request, runtime);
  }

  async suspendInstanceWithOptions(request: SuspendInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SuspendInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SuspendInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendInstanceResponse>(await this.callApi(params, req, runtime), new SuspendInstanceResponse({}));
  }

  async suspendInstance(request: SuspendInstanceRequest): Promise<SuspendInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendInstanceWithOptions(request, runtime);
  }

  async terminateDISyncInstanceWithOptions(request: TerminateDISyncInstanceRequest, runtime: $Util.RuntimeOptions): Promise<TerminateDISyncInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TerminateDISyncInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TerminateDISyncInstanceResponse>(await this.callApi(params, req, runtime), new TerminateDISyncInstanceResponse({}));
  }

  async terminateDISyncInstance(request: TerminateDISyncInstanceRequest): Promise<TerminateDISyncInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateDISyncInstanceWithOptions(request, runtime);
  }

  async testNetworkConnectionWithOptions(request: TestNetworkConnectionRequest, runtime: $Util.RuntimeOptions): Promise<TestNetworkConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasourceName)) {
      query["DatasourceName"] = request.datasourceName;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TestNetworkConnection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestNetworkConnectionResponse>(await this.callApi(params, req, runtime), new TestNetworkConnectionResponse({}));
  }

  async testNetworkConnection(request: TestNetworkConnectionRequest): Promise<TestNetworkConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testNetworkConnectionWithOptions(request, runtime);
  }

  async topTenElapsedTimeInstanceWithOptions(request: TopTenElapsedTimeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<TopTenElapsedTimeInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TopTenElapsedTimeInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TopTenElapsedTimeInstanceResponse>(await this.callApi(params, req, runtime), new TopTenElapsedTimeInstanceResponse({}));
  }

  async topTenElapsedTimeInstance(request: TopTenElapsedTimeInstanceRequest): Promise<TopTenElapsedTimeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.topTenElapsedTimeInstanceWithOptions(request, runtime);
  }

  async topTenErrorTimesInstanceWithOptions(request: TopTenErrorTimesInstanceRequest, runtime: $Util.RuntimeOptions): Promise<TopTenErrorTimesInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TopTenErrorTimesInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TopTenErrorTimesInstanceResponse>(await this.callApi(params, req, runtime), new TopTenErrorTimesInstanceResponse({}));
  }

  async topTenErrorTimesInstance(request: TopTenErrorTimesInstanceRequest): Promise<TopTenErrorTimesInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.topTenErrorTimesInstanceWithOptions(request, runtime);
  }

  async updateBusinessWithOptions(request: UpdateBusinessRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBusinessResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBusinessResponse>(await this.callApi(params, req, runtime), new UpdateBusinessResponse({}));
  }

  async updateBusiness(request: UpdateBusinessRequest): Promise<UpdateBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBusinessWithOptions(request, runtime);
  }

  async updateConnectionWithOptions(request: UpdateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConnection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "PUT",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConnectionResponse>(await this.callApi(params, req, runtime), new UpdateConnectionResponse({}));
  }

  async updateConnection(request: UpdateConnectionRequest): Promise<UpdateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnectionWithOptions(request, runtime);
  }

  async updateDIProjectConfigWithOptions(request: UpdateDIProjectConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDIProjectConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.projectConfig)) {
      query["ProjectConfig"] = request.projectConfig;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDIProjectConfig",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDIProjectConfigResponse>(await this.callApi(params, req, runtime), new UpdateDIProjectConfigResponse({}));
  }

  async updateDIProjectConfig(request: UpdateDIProjectConfigRequest): Promise<UpdateDIProjectConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDIProjectConfigWithOptions(request, runtime);
  }

  async updateDISyncTaskWithOptions(request: UpdateDISyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDISyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskContent)) {
      query["TaskContent"] = request.taskContent;
    }

    if (!Util.isUnset(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDISyncTaskResponse>(await this.callApi(params, req, runtime), new UpdateDISyncTaskResponse({}));
  }

  async updateDISyncTask(request: UpdateDISyncTaskRequest): Promise<UpdateDISyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDISyncTaskWithOptions(request, runtime);
  }

  async updateDataServiceApiWithOptions(request: UpdateDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataServiceApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiDescription)) {
      body["ApiDescription"] = request.apiDescription;
    }

    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.apiPath)) {
      body["ApiPath"] = request.apiPath;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.protocols)) {
      body["Protocols"] = request.protocols;
    }

    if (!Util.isUnset(request.registrationDetails)) {
      body["RegistrationDetails"] = request.registrationDetails;
    }

    if (!Util.isUnset(request.requestMethod)) {
      body["RequestMethod"] = request.requestMethod;
    }

    if (!Util.isUnset(request.responseContentType)) {
      body["ResponseContentType"] = request.responseContentType;
    }

    if (!Util.isUnset(request.scriptDetails)) {
      body["ScriptDetails"] = request.scriptDetails;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.visibleRange)) {
      body["VisibleRange"] = request.visibleRange;
    }

    if (!Util.isUnset(request.wizardDetails)) {
      body["WizardDetails"] = request.wizardDetails;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataServiceApiResponse>(await this.callApi(params, req, runtime), new UpdateDataServiceApiResponse({}));
  }

  async updateDataServiceApi(request: UpdateDataServiceApiRequest): Promise<UpdateDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataServiceApiWithOptions(request, runtime);
  }

  async updateDataSourceWithOptions(request: UpdateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataSource",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "PUT",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataSourceResponse>(await this.callApi(params, req, runtime), new UpdateDataSourceResponse({}));
  }

  async updateDataSource(request: UpdateDataSourceRequest): Promise<UpdateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  async updateFileWithOptions(request: UpdateFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.advancedSettings)) {
      body["AdvancedSettings"] = request.advancedSettings;
    }

    if (!Util.isUnset(request.autoParsing)) {
      body["AutoParsing"] = request.autoParsing;
    }

    if (!Util.isUnset(request.autoRerunIntervalMillis)) {
      body["AutoRerunIntervalMillis"] = request.autoRerunIntervalMillis;
    }

    if (!Util.isUnset(request.autoRerunTimes)) {
      body["AutoRerunTimes"] = request.autoRerunTimes;
    }

    if (!Util.isUnset(request.connectionName)) {
      body["ConnectionName"] = request.connectionName;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.cronExpress)) {
      body["CronExpress"] = request.cronExpress;
    }

    if (!Util.isUnset(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!Util.isUnset(request.dependentNodeIdList)) {
      body["DependentNodeIdList"] = request.dependentNodeIdList;
    }

    if (!Util.isUnset(request.dependentType)) {
      body["DependentType"] = request.dependentType;
    }

    if (!Util.isUnset(request.endEffectDate)) {
      body["EndEffectDate"] = request.endEffectDate;
    }

    if (!Util.isUnset(request.fileDescription)) {
      body["FileDescription"] = request.fileDescription;
    }

    if (!Util.isUnset(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.inputList)) {
      body["InputList"] = request.inputList;
    }

    if (!Util.isUnset(request.outputList)) {
      body["OutputList"] = request.outputList;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.paraValue)) {
      body["ParaValue"] = request.paraValue;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!Util.isUnset(request.rerunMode)) {
      body["RerunMode"] = request.rerunMode;
    }

    if (!Util.isUnset(request.resourceGroupIdentifier)) {
      body["ResourceGroupIdentifier"] = request.resourceGroupIdentifier;
    }

    if (!Util.isUnset(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    if (!Util.isUnset(request.startEffectDate)) {
      body["StartEffectDate"] = request.startEffectDate;
    }

    if (!Util.isUnset(request.startImmediately)) {
      body["StartImmediately"] = request.startImmediately;
    }

    if (!Util.isUnset(request.stop)) {
      body["Stop"] = request.stop;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFileResponse>(await this.callApi(params, req, runtime), new UpdateFileResponse({}));
  }

  async updateFile(request: UpdateFileRequest): Promise<UpdateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileWithOptions(request, runtime);
  }

  async updateFolderWithOptions(request: UpdateFolderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.folderName)) {
      body["FolderName"] = request.folderName;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFolderResponse>(await this.callApi(params, req, runtime), new UpdateFolderResponse({}));
  }

  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  async updateIDEEventResultWithOptions(request: UpdateIDEEventResultRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIDEEventResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkResult)) {
      body["CheckResult"] = request.checkResult;
    }

    if (!Util.isUnset(request.checkResultTip)) {
      body["CheckResultTip"] = request.checkResultTip;
    }

    if (!Util.isUnset(request.extensionCode)) {
      body["ExtensionCode"] = request.extensionCode;
    }

    if (!Util.isUnset(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIDEEventResult",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIDEEventResultResponse>(await this.callApi(params, req, runtime), new UpdateIDEEventResultResponse({}));
  }

  async updateIDEEventResult(request: UpdateIDEEventResultRequest): Promise<UpdateIDEEventResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIDEEventResultWithOptions(request, runtime);
  }

  async updateMetaCategoryWithOptions(request: UpdateMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaCategoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMetaCategoryResponse>(await this.callApi(params, req, runtime), new UpdateMetaCategoryResponse({}));
  }

  async updateMetaCategory(request: UpdateMetaCategoryRequest): Promise<UpdateMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaCategoryWithOptions(request, runtime);
  }

  async updateMetaTableWithOptions(request: UpdateMetaTableRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caption)) {
      query["Caption"] = request.caption;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.newOwnerId)) {
      query["NewOwnerId"] = request.newOwnerId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addedLabels)) {
      body["AddedLabels"] = request.addedLabels;
    }

    if (!Util.isUnset(request.removedLabels)) {
      body["RemovedLabels"] = request.removedLabels;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMetaTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMetaTableResponse>(await this.callApi(params, req, runtime), new UpdateMetaTableResponse({}));
  }

  async updateMetaTable(request: UpdateMetaTableRequest): Promise<UpdateMetaTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaTableWithOptions(request, runtime);
  }

  async updateMetaTableIntroWikiWithOptions(request: UpdateMetaTableIntroWikiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaTableIntroWikiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMetaTableIntroWiki",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMetaTableIntroWikiResponse>(await this.callApi(params, req, runtime), new UpdateMetaTableIntroWikiResponse({}));
  }

  async updateMetaTableIntroWiki(request: UpdateMetaTableIntroWikiRequest): Promise<UpdateMetaTableIntroWikiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaTableIntroWikiWithOptions(request, runtime);
  }

  async updateNodeOwnerWithOptions(request: UpdateNodeOwnerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNodeOwnerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNodeOwner",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNodeOwnerResponse>(await this.callApi(params, req, runtime), new UpdateNodeOwnerResponse({}));
  }

  async updateNodeOwner(request: UpdateNodeOwnerRequest): Promise<UpdateNodeOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNodeOwnerWithOptions(request, runtime);
  }

  async updateNodeRunModeWithOptions(request: UpdateNodeRunModeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNodeRunModeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!Util.isUnset(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNodeRunMode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNodeRunModeResponse>(await this.callApi(params, req, runtime), new UpdateNodeRunModeResponse({}));
  }

  async updateNodeRunMode(request: UpdateNodeRunModeRequest): Promise<UpdateNodeRunModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNodeRunModeWithOptions(request, runtime);
  }

  async updateQualityFollowerWithOptions(request: UpdateQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQualityFollowerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmMode)) {
      body["AlarmMode"] = request.alarmMode;
    }

    if (!Util.isUnset(request.follower)) {
      body["Follower"] = request.follower;
    }

    if (!Util.isUnset(request.followerId)) {
      body["FollowerId"] = request.followerId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateQualityFollower",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateQualityFollowerResponse>(await this.callApi(params, req, runtime), new UpdateQualityFollowerResponse({}));
  }

  async updateQualityFollower(request: UpdateQualityFollowerRequest): Promise<UpdateQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQualityFollowerWithOptions(request, runtime);
  }

  async updateQualityRuleWithOptions(request: UpdateQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQualityRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.blockType)) {
      body["BlockType"] = request.blockType;
    }

    if (!Util.isUnset(request.checker)) {
      body["Checker"] = request.checker;
    }

    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.criticalThreshold)) {
      body["CriticalThreshold"] = request.criticalThreshold;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.expectValue)) {
      body["ExpectValue"] = request.expectValue;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.methodName)) {
      body["MethodName"] = request.methodName;
    }

    if (!Util.isUnset(request.openSwitch)) {
      body["OpenSwitch"] = request.openSwitch;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.predictType)) {
      body["PredictType"] = request.predictType;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.property)) {
      body["Property"] = request.property;
    }

    if (!Util.isUnset(request.propertyType)) {
      body["PropertyType"] = request.propertyType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.trend)) {
      body["Trend"] = request.trend;
    }

    if (!Util.isUnset(request.warningThreshold)) {
      body["WarningThreshold"] = request.warningThreshold;
    }

    if (!Util.isUnset(request.whereCondition)) {
      body["WhereCondition"] = request.whereCondition;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateQualityRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateQualityRuleResponse>(await this.callApi(params, req, runtime), new UpdateQualityRuleResponse({}));
  }

  async updateQualityRule(request: UpdateQualityRuleRequest): Promise<UpdateQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQualityRuleWithOptions(request, runtime);
  }

  async updateRemindWithOptions(request: UpdateRemindRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRemindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertInterval)) {
      body["AlertInterval"] = request.alertInterval;
    }

    if (!Util.isUnset(request.alertMethods)) {
      body["AlertMethods"] = request.alertMethods;
    }

    if (!Util.isUnset(request.alertTargets)) {
      body["AlertTargets"] = request.alertTargets;
    }

    if (!Util.isUnset(request.alertUnit)) {
      body["AlertUnit"] = request.alertUnit;
    }

    if (!Util.isUnset(request.baselineIds)) {
      body["BaselineIds"] = request.baselineIds;
    }

    if (!Util.isUnset(request.bizProcessIds)) {
      body["BizProcessIds"] = request.bizProcessIds;
    }

    if (!Util.isUnset(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.dndEnd)) {
      body["DndEnd"] = request.dndEnd;
    }

    if (!Util.isUnset(request.maxAlertTimes)) {
      body["MaxAlertTimes"] = request.maxAlertTimes;
    }

    if (!Util.isUnset(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.remindId)) {
      body["RemindId"] = request.remindId;
    }

    if (!Util.isUnset(request.remindName)) {
      body["RemindName"] = request.remindName;
    }

    if (!Util.isUnset(request.remindType)) {
      body["RemindType"] = request.remindType;
    }

    if (!Util.isUnset(request.remindUnit)) {
      body["RemindUnit"] = request.remindUnit;
    }

    if (!Util.isUnset(request.robotUrls)) {
      body["RobotUrls"] = request.robotUrls;
    }

    if (!Util.isUnset(request.useFlag)) {
      body["UseFlag"] = request.useFlag;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRemind",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRemindResponse>(await this.callApi(params, req, runtime), new UpdateRemindResponse({}));
  }

  async updateRemind(request: UpdateRemindRequest): Promise<UpdateRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRemindWithOptions(request, runtime);
  }

  async updateTableWithOptions(request: UpdateTableRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.createIfNotExists)) {
      query["CreateIfNotExists"] = request.createIfNotExists;
    }

    if (!Util.isUnset(request.externalTableType)) {
      query["ExternalTableType"] = request.externalTableType;
    }

    if (!Util.isUnset(request.hasPart)) {
      query["HasPart"] = request.hasPart;
    }

    if (!Util.isUnset(request.isView)) {
      query["IsView"] = request.isView;
    }

    if (!Util.isUnset(request.lifeCycle)) {
      query["LifeCycle"] = request.lifeCycle;
    }

    if (!Util.isUnset(request.location)) {
      query["Location"] = request.location;
    }

    if (!Util.isUnset(request.logicalLevelId)) {
      query["LogicalLevelId"] = request.logicalLevelId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.physicsLevelId)) {
      query["PhysicsLevelId"] = request.physicsLevelId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columns)) {
      body["Columns"] = request.columns;
    }

    if (!Util.isUnset(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.themes)) {
      body["Themes"] = request.themes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableResponse>(await this.callApi(params, req, runtime), new UpdateTableResponse({}));
  }

  async updateTable(request: UpdateTableRequest): Promise<UpdateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableWithOptions(request, runtime);
  }

  async updateTableAddColumnWithOptions(request: UpdateTableAddColumnRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableAddColumnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.column)) {
      body["Column"] = request.column;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTableAddColumn",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableAddColumnResponse>(await this.callApi(params, req, runtime), new UpdateTableAddColumnResponse({}));
  }

  async updateTableAddColumn(request: UpdateTableAddColumnRequest): Promise<UpdateTableAddColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableAddColumnWithOptions(request, runtime);
  }

  async updateTableLevelWithOptions(request: UpdateTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableLevelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.levelId)) {
      query["LevelId"] = request.levelId;
    }

    if (!Util.isUnset(request.levelType)) {
      query["LevelType"] = request.levelType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTableLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableLevelResponse>(await this.callApi(params, req, runtime), new UpdateTableLevelResponse({}));
  }

  async updateTableLevel(request: UpdateTableLevelRequest): Promise<UpdateTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableLevelWithOptions(request, runtime);
  }

  async updateTableModelInfoWithOptions(request: UpdateTableModelInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableModelInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firstLevelThemeId)) {
      query["FirstLevelThemeId"] = request.firstLevelThemeId;
    }

    if (!Util.isUnset(request.levelId)) {
      query["LevelId"] = request.levelId;
    }

    if (!Util.isUnset(request.levelType)) {
      query["LevelType"] = request.levelType;
    }

    if (!Util.isUnset(request.secondLevelThemeId)) {
      query["SecondLevelThemeId"] = request.secondLevelThemeId;
    }

    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTableModelInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableModelInfoResponse>(await this.callApi(params, req, runtime), new UpdateTableModelInfoResponse({}));
  }

  async updateTableModelInfo(request: UpdateTableModelInfoRequest): Promise<UpdateTableModelInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableModelInfoWithOptions(request, runtime);
  }

  async updateTableThemeWithOptions(request: UpdateTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableThemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.themeId)) {
      query["ThemeId"] = request.themeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTableTheme",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableThemeResponse>(await this.callApi(params, req, runtime), new UpdateTableThemeResponse({}));
  }

  async updateTableTheme(request: UpdateTableThemeRequest): Promise<UpdateTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableThemeWithOptions(request, runtime);
  }

  async updateUdfFileWithOptions(request: UpdateUdfFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUdfFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!Util.isUnset(request.cmdDescription)) {
      body["CmdDescription"] = request.cmdDescription;
    }

    if (!Util.isUnset(request.example)) {
      body["Example"] = request.example;
    }

    if (!Util.isUnset(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.functionType)) {
      body["FunctionType"] = request.functionType;
    }

    if (!Util.isUnset(request.parameterDescription)) {
      body["ParameterDescription"] = request.parameterDescription;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!Util.isUnset(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.returnValue)) {
      body["ReturnValue"] = request.returnValue;
    }

    if (!Util.isUnset(request.udfDescription)) {
      body["UdfDescription"] = request.udfDescription;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUdfFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUdfFileResponse>(await this.callApi(params, req, runtime), new UpdateUdfFileResponse({}));
  }

  async updateUdfFile(request: UpdateUdfFileRequest): Promise<UpdateUdfFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUdfFileWithOptions(request, runtime);
  }

}
