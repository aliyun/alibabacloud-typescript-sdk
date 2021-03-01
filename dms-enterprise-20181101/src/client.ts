// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SubmitStructSyncOrderApprovalRequest extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitStructSyncOrderApprovalResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      workflowInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitStructSyncOrderApprovalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitStructSyncOrderApprovalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitStructSyncOrderApprovalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsRequest extends $tea.Model {
  tid?: number;
  permType?: string;
  dbId?: string;
  logic?: boolean;
  userName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      permType: 'PermType',
      dbId: 'DbId',
      logic: 'Logic',
      userName: 'UserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      permType: 'string',
      dbId: 'string',
      logic: 'boolean',
      userName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  userPermissions?: ListDatabaseUserPermssionsResponseBodyUserPermissions;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      userPermissions: 'UserPermissions',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      userPermissions: ListDatabaseUserPermssionsResponseBodyUserPermissions,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDatabaseUserPermssionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDatabaseUserPermssionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsRequest extends $tea.Model {
  tid?: number;
  schemaName?: string;
  tableName?: string;
  columnName?: string;
  securityLevel?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      columnName: 'ColumnName',
      securityLevel: 'SecurityLevel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      schemaName: 'string',
      tableName: 'string',
      columnName: 'string',
      securityLevel: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  sensitiveColumnList?: ListSensitiveColumnsResponseBodySensitiveColumnList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      sensitiveColumnList: 'SensitiveColumnList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      sensitiveColumnList: ListSensitiveColumnsResponseBodySensitiveColumnList,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSensitiveColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSensitiveColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  tid?: number;
  role?: string;
  userState?: string;
  searchKey?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      role: 'Role',
      userState: 'UserState',
      searchKey: 'SearchKey',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      role: 'string',
      userState: 'string',
      searchKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  userList?: ListUsersResponseBodyUserList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      userList: 'UserList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      userList: ListUsersResponseBodyUserList,
      success: 'boolean',
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

export class SubmitOrderApprovalRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOrderApprovalResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOrderApprovalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitOrderApprovalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitOrderApprovalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionRequest extends $tea.Model {
  tid?: number;
  userId?: string;
  dsType?: string;
  dbId?: string;
  logic?: boolean;
  tableId?: string;
  tableName?: string;
  permTypes?: string;
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      userId: 'UserId',
      dsType: 'DsType',
      dbId: 'DbId',
      logic: 'Logic',
      tableId: 'TableId',
      tableName: 'TableName',
      permTypes: 'PermTypes',
      expireDate: 'ExpireDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      userId: 'string',
      dsType: 'string',
      dbId: 'string',
      logic: 'boolean',
      tableId: 'string',
      tableName: 'string',
      permTypes: 'string',
      expireDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantUserPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantUserPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoRequest extends $tea.Model {
  tid?: number;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBody extends $tea.Model {
  requestId?: string;
  detailInfo?: GetMetaTableDetailInfoResponseBodyDetailInfo;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      detailInfo: 'DetailInfo',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      detailInfo: GetMetaTableDetailInfoResponseBodyDetailInfo,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetaTableDetailInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetaTableDetailInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectSQLFileRequest extends $tea.Model {
  orderId?: number;
  orderActionName?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      orderActionName: 'OrderActionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      orderActionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectSQLFileResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectSQLFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataCorrectSQLFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataCorrectSQLFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  tid?: number;
  comment?: string;
  pluginParam?: { [key: string]: any };
  relatedUserList?: string;
  pluginType?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      comment: 'Comment',
      pluginParam: 'PluginParam',
      relatedUserList: 'RelatedUserList',
      pluginType: 'PluginType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      comment: 'string',
      pluginParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      relatedUserList: 'string',
      pluginType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderShrinkRequest extends $tea.Model {
  tid?: number;
  comment?: string;
  pluginParamShrink?: string;
  relatedUserList?: string;
  pluginType?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      comment: 'Comment',
      pluginParamShrink: 'PluginParam',
      relatedUserList: 'RelatedUserList',
      pluginType: 'PluginType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      comment: 'string',
      pluginParamShrink: 'string',
      relatedUserList: 'string',
      pluginType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  createOrderResult?: CreateOrderResponseBodyCreateOrderResult;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: CreateOrderResponseBodyCreateOrderResult,
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesRequest extends $tea.Model {
  tid?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  databaseList?: ListDatabasesResponseBodyDatabaseList;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      databaseList: 'DatabaseList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      databaseList: ListDatabasesResponseBodyDatabaseList,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsRequest extends $tea.Model {
  tid?: number;
  permType?: string;
  userId?: string;
  databaseName?: string;
  logic?: boolean;
  envType?: string;
  dbType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      permType: 'PermType',
      userId: 'UserId',
      databaseName: 'DatabaseName',
      logic: 'Logic',
      envType: 'EnvType',
      dbType: 'DbType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      permType: 'string',
      userId: 'string',
      databaseName: 'string',
      logic: 'boolean',
      envType: 'string',
      dbType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  userPermissions?: ListUserPermissionsResponseBodyUserPermissions;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      userPermissions: 'UserPermissions',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      userPermissions: ListUserPermissionsResponseBodyUserPermissions,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesRequest extends $tea.Model {
  tid?: number;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  workFlowTemplates?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      workFlowTemplates: 'WorkFlowTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      workFlowTemplates: ListWorkFlowTemplatesResponseBodyWorkFlowTemplates,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWorkFlowTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWorkFlowTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBody extends $tea.Model {
  requestId?: string;
  dataExportOrderDetail?: GetDataExportOrderDetailResponseBodyDataExportOrderDetail;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataExportOrderDetail: 'DataExportOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataExportOrderDetail: GetDataExportOrderDetailResponseBodyDataExportOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataExportOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataExportOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  tid?: number;
  searchKey?: string;
  dbType?: string;
  envType?: string;
  instanceSource?: string;
  netType?: string;
  instanceState?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      searchKey: 'SearchKey',
      dbType: 'DbType',
      envType: 'EnvType',
      instanceSource: 'InstanceSource',
      netType: 'NetType',
      instanceState: 'InstanceState',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      searchKey: 'string',
      dbType: 'string',
      envType: 'string',
      instanceSource: 'string',
      netType: 'string',
      instanceState: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  instanceList?: ListInstancesResponseBodyInstanceList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceList: 'InstanceList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      instanceList: ListInstancesResponseBodyInstanceList,
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

export class GetUserUploadFileJobRequest extends $tea.Model {
  jobKey?: string;
  static names(): { [key: string]: string } {
    return {
      jobKey: 'JobKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  uploadFileJobDetail?: GetUserUploadFileJobResponseBodyUploadFileJobDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      uploadFileJobDetail: 'UploadFileJobDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      uploadFileJobDetail: GetUserUploadFileJobResponseBodyUploadFileJobDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserUploadFileJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserUploadFileJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobDetailRequest extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  structSyncJobDetail?: GetStructSyncJobDetailResponseBodyStructSyncJobDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      structSyncJobDetail: 'StructSyncJobDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      structSyncJobDetail: GetStructSyncJobDetailResponseBodyStructSyncJobDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStructSyncJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStructSyncJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadOSSFileJobRequest extends $tea.Model {
  fileSource?: string;
  fileName?: string;
  uploadType?: string;
  uploadTarget?: CreateUploadOSSFileJobRequestUploadTarget;
  static names(): { [key: string]: string } {
    return {
      fileSource: 'FileSource',
      fileName: 'FileName',
      uploadType: 'UploadType',
      uploadTarget: 'UploadTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSource: 'string',
      fileName: 'string',
      uploadType: 'string',
      uploadTarget: CreateUploadOSSFileJobRequestUploadTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadOSSFileJobShrinkRequest extends $tea.Model {
  fileSource?: string;
  fileName?: string;
  uploadType?: string;
  uploadTargetShrink?: string;
  static names(): { [key: string]: string } {
    return {
      fileSource: 'FileSource',
      fileName: 'FileName',
      uploadType: 'UploadType',
      uploadTargetShrink: 'UploadTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSource: 'string',
      fileName: 'string',
      uploadType: 'string',
      uploadTargetShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadOSSFileJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  jobKey?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      jobKey: 'JobKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      jobKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadOSSFileJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUploadOSSFileJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUploadOSSFileJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseRequest extends $tea.Model {
  tid?: number;
  searchKey?: string;
  pageNumber?: number;
  pageSize?: number;
  envType?: string;
  searchRange?: string;
  searchTarget?: string;
  dbType?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      searchKey: 'SearchKey',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      envType: 'EnvType',
      searchRange: 'SearchRange',
      searchTarget: 'SearchTarget',
      dbType: 'DbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      searchKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      envType: 'string',
      searchRange: 'string',
      searchTarget: 'string',
      dbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  searchDatabaseList?: SearchDatabaseResponseBodySearchDatabaseList;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      searchDatabaseList: 'SearchDatabaseList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      searchDatabaseList: SearchDatabaseResponseBodySearchDatabaseList,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDatabaseMetaRequest extends $tea.Model {
  tid?: number;
  dbId?: string;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      dbId: 'string',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDatabaseMetaResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDatabaseMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncDatabaseMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncDatabaseMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  tid?: number;
  uid?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  user?: GetUserResponseBodyUser;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: GetUserResponseBodyUser,
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStructSyncRequest extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStructSyncResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStructSyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteStructSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteStructSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBody extends $tea.Model {
  requestId?: string;
  dataCorrectOrderDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataCorrectOrderDetail: 'DataCorrectOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataCorrectOrderDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataCorrectOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataCorrectOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsRequest extends $tea.Model {
  tid?: number;
  tableId?: string;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      tableId: 'TableId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      tableId: 'string',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  columnList?: ListColumnsResponseBodyColumnList;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      columnList: 'ColumnList',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      columnList: ListColumnsResponseBodyColumnList,
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserPermissionRequest extends $tea.Model {
  tid?: number;
  userId?: string;
  dsType?: string;
  dbId?: string;
  logic?: boolean;
  tableId?: string;
  tableName?: string;
  permTypes?: string;
  userAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      userId: 'UserId',
      dsType: 'DsType',
      dbId: 'DbId',
      logic: 'Logic',
      tableId: 'TableId',
      tableName: 'TableName',
      permTypes: 'PermTypes',
      userAccessId: 'UserAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      userId: 'string',
      dsType: 'string',
      dbId: 'string',
      logic: 'boolean',
      tableId: 'string',
      tableName: 'string',
      permTypes: 'string',
      userAccessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserPermissionResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeUserPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeUserPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnRequest extends $tea.Model {
  tid?: number;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  columnList?: GetMetaTableColumnResponseBodyColumnList[];
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      columnList: 'ColumnList',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      columnList: { 'type': 'array', 'itemType': GetMetaTableColumnResponseBodyColumnList },
      errorMessage: 'string',
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

export class EnableUserRequest extends $tea.Model {
  tid?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  tid?: number;
  instanceType?: string;
  instanceSource?: string;
  envType?: string;
  ecsInstanceId?: string;
  vpcId?: string;
  ecsRegion?: string;
  host?: string;
  port?: number;
  sid?: string;
  databaseUser?: string;
  databasePassword?: string;
  instanceAlias?: string;
  dbaId?: string;
  safeRuleId?: string;
  queryTimeout?: number;
  exportTimeout?: number;
  dataLinkName?: string;
  ddlOnline?: number;
  useDsql?: number;
  instanceId?: string;
  skipTest?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      instanceType: 'InstanceType',
      instanceSource: 'InstanceSource',
      envType: 'EnvType',
      ecsInstanceId: 'EcsInstanceId',
      vpcId: 'VpcId',
      ecsRegion: 'EcsRegion',
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
      databaseUser: 'DatabaseUser',
      databasePassword: 'DatabasePassword',
      instanceAlias: 'InstanceAlias',
      dbaId: 'DbaId',
      safeRuleId: 'SafeRuleId',
      queryTimeout: 'QueryTimeout',
      exportTimeout: 'ExportTimeout',
      dataLinkName: 'DataLinkName',
      ddlOnline: 'DdlOnline',
      useDsql: 'UseDsql',
      instanceId: 'InstanceId',
      skipTest: 'SkipTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      instanceType: 'string',
      instanceSource: 'string',
      envType: 'string',
      ecsInstanceId: 'string',
      vpcId: 'string',
      ecsRegion: 'string',
      host: 'string',
      port: 'number',
      sid: 'string',
      databaseUser: 'string',
      databasePassword: 'string',
      instanceAlias: 'string',
      dbaId: 'string',
      safeRuleId: 'string',
      queryTimeout: 'number',
      exportTimeout: 'number',
      dataLinkName: 'string',
      ddlOnline: 'number',
      useDsql: 'number',
      instanceId: 'string',
      skipTest: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScriptRequest extends $tea.Model {
  dbId?: number;
  script?: string;
  logic?: boolean;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      script: 'Script',
      logic: 'Logic',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      script: 'string',
      logic: 'boolean',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScriptResponseBody extends $tea.Model {
  requestId?: string;
  results?: ExecuteScriptResponseBodyResults[];
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ExecuteScriptResponseBodyResults },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobDetailRequest extends $tea.Model {
  jobId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  DBTaskSQLJobDetailList?: ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      DBTaskSQLJobDetailList: 'DBTaskSQLJobDetailList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      DBTaskSQLJobDetailList: { 'type': 'array', 'itemType': ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDBTaskSQLJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDBTaskSQLJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserRequest extends $tea.Model {
  tid?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailRequest extends $tea.Model {
  tid?: number;
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      workflowInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  approvalDetail?: GetApprovalDetailResponseBodyApprovalDetail;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      approvalDetail: 'ApprovalDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      approvalDetail: GetApprovalDetailResponseBodyApprovalDetail,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetApprovalDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetApprovalDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserActiveTenantResponseBody extends $tea.Model {
  tenant?: GetUserActiveTenantResponseBodyTenant;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      tenant: 'Tenant',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenant: GetUserActiveTenantResponseBodyTenant,
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserActiveTenantResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserActiveTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserActiveTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUserRequest extends $tea.Model {
  tid?: number;
  uid?: string;
  userNick?: string;
  roleNames?: string;
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
      userNick: 'UserNick',
      roleNames: 'RoleNames',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'string',
      userNick: 'string',
      roleNames: 'string',
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUserResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
  tid?: number;
  host?: string;
  port?: number;
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      host: 'string',
      port: 'number',
      sid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instance?: GetInstanceResponseBodyInstance;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instance: 'Instance',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instance: GetInstanceResponseBodyInstance,
      errorCode: 'string',
      errorMessage: 'string',
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

export class GetPermApplyOrderDetailRequest extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  permApplyOrderDetail?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      permApplyOrderDetail: 'PermApplyOrderDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      permApplyOrderDetail: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPermApplyOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPermApplyOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesRequest extends $tea.Model {
  tid?: number;
  tableId?: string;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      tableId: 'TableId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      tableId: 'string',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  indexList?: ListIndexesResponseBodyIndexList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      indexList: 'IndexList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      indexList: ListIndexesResponseBodyIndexList,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIndexesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIndexesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesRequest extends $tea.Model {
  tid?: number;
  databaseId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchName?: string;
  returnGuid?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      databaseId: 'DatabaseId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchName: 'SearchName',
      returnGuid: 'ReturnGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      databaseId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchName: 'string',
      returnGuid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesResponseBody extends $tea.Model {
  totalCount?: number;
  logicTableList?: ListLogicTablesResponseBodyLogicTableList;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      logicTableList: 'LogicTableList',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      logicTableList: ListLogicTablesResponseBodyLogicTableList,
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogicTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogicTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportDownloadURLRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  actionName?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      actionName: 'ActionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
      actionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportDownloadURLResponseBody extends $tea.Model {
  downloadURLResult?: GetDataExportDownloadURLResponseBodyDownloadURLResult;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      downloadURLResult: 'DownloadURLResult',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadURLResult: GetDataExportDownloadURLResponseBodyDownloadURLResult,
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportDownloadURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataExportDownloadURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataExportDownloadURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishGroupTaskRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  dbId?: number;
  logic?: boolean;
  publishStrategy?: string;
  planTime?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      dbId: 'DbId',
      logic: 'Logic',
      publishStrategy: 'PublishStrategy',
      planTime: 'PlanTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
      dbId: 'number',
      logic: 'boolean',
      publishStrategy: 'string',
      planTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishGroupTaskResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishGroupTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePublishGroupTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePublishGroupTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseRequest extends $tea.Model {
  tid?: number;
  host?: string;
  port?: number;
  sid?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      host: 'string',
      port: 'number',
      sid: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBody extends $tea.Model {
  requestId?: string;
  database?: GetDatabaseResponseBodyDatabase;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      database: 'Database',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      database: GetDatabaseResponseBodyDatabase,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailRequest extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  ownerApplyOrderDetail?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      ownerApplyOrderDetail: 'OwnerApplyOrderDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      ownerApplyOrderDetail: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOwnerApplyOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOwnerApplyOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogRequest extends $tea.Model {
  tid?: number;
  module?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      module: 'Module',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      module: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  opLogDetails?: GetOpLogResponseBodyOpLogDetails;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      opLogDetails: 'OpLogDetails',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      opLogDetails: GetOpLogResponseBodyOpLogDetails,
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOpLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOpLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableRequest extends $tea.Model {
  tid?: number;
  searchKey?: string;
  pageNumber?: number;
  pageSize?: number;
  envType?: string;
  searchRange?: string;
  searchTarget?: string;
  dbType?: string;
  returnGuid?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      searchKey: 'SearchKey',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      envType: 'EnvType',
      searchRange: 'SearchRange',
      searchTarget: 'SearchTarget',
      dbType: 'DbType',
      returnGuid: 'ReturnGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      searchKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      envType: 'string',
      searchRange: 'string',
      searchTarget: 'string',
      dbType: 'string',
      returnGuid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableResponseBody extends $tea.Model {
  searchTableList?: SearchTableResponseBodySearchTableList;
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      searchTableList: 'SearchTableList',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchTableList: SearchTableResponseBodySearchTableList,
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobRequest extends $tea.Model {
  DBTaskGroupId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskGroupId: 'DBTaskGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskGroupId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  DBTaskSQLJobList?: ListDBTaskSQLJobResponseBodyDBTaskSQLJobList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      DBTaskSQLJobList: 'DBTaskSQLJobList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      DBTaskSQLJobList: { 'type': 'array', 'itemType': ListDBTaskSQLJobResponseBodyDBTaskSQLJobList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDBTaskSQLJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDBTaskSQLJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  tid?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
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

export class GetStructSyncJobAnalyzeResultRequest extends $tea.Model {
  orderId?: number;
  compareType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      compareType: 'CompareType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      compareType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  structSyncJobAnalyzeResult?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      structSyncJobAnalyzeResult: 'StructSyncJobAnalyzeResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      structSyncJobAnalyzeResult: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStructSyncJobAnalyzeResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStructSyncJobAnalyzeResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOrderRequest extends $tea.Model {
  tid?: number;
  workflowInstanceId?: number;
  approvalType?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      workflowInstanceId: 'WorkflowInstanceId',
      approvalType: 'ApprovalType',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      workflowInstanceId: 'number',
      approvalType: 'string',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOrderResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApproveOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApproveOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadFileJobRequest extends $tea.Model {
  fileSource?: string;
  fileName?: string;
  uploadType?: string;
  uploadURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileSource: 'FileSource',
      fileName: 'FileName',
      uploadType: 'UploadType',
      uploadURL: 'UploadURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSource: 'string',
      fileName: 'string',
      uploadType: 'string',
      uploadURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadFileJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  jobKey?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      jobKey: 'JobKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      jobKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadFileJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUploadFileJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUploadFileJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesRequest extends $tea.Model {
  tid?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBody extends $tea.Model {
  totalCount?: number;
  logicDatabaseList?: ListLogicDatabasesResponseBodyLogicDatabaseList;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      logicDatabaseList: 'LogicDatabaseList',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      logicDatabaseList: ListLogicDatabasesResponseBodyLogicDatabaseList,
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogicDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogicDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseOrderRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  closeReason?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      closeReason: 'CloseReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
      closeReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseOrderResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncInstanceMetaRequest extends $tea.Model {
  tid?: number;
  instanceId?: string;
  ignoreTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      instanceId: 'InstanceId',
      ignoreTable: 'IgnoreTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      instanceId: 'string',
      ignoreTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncInstanceMetaResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncInstanceMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncInstanceMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncInstanceMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersRequest extends $tea.Model {
  tid?: number;
  pluginType?: string;
  orderResultType?: string;
  searchDateType?: string;
  startTime?: string;
  endTime?: string;
  searchContent?: string;
  orderStatus?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      pluginType: 'PluginType',
      orderResultType: 'OrderResultType',
      searchDateType: 'SearchDateType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      searchContent: 'SearchContent',
      orderStatus: 'OrderStatus',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      pluginType: 'string',
      orderResultType: 'string',
      searchDateType: 'string',
      startTime: 'string',
      endTime: 'string',
      searchContent: 'string',
      orderStatus: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponseBody extends $tea.Model {
  orders?: ListOrdersResponseBodyOrders;
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orders: 'Orders',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orders: ListOrdersResponseBodyOrders,
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponseBody extends $tea.Model {
  orderBaseInfo?: GetOrderBaseInfoResponseBodyOrderBaseInfo;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderBaseInfo: 'OrderBaseInfo',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderBaseInfo: GetOrderBaseInfoResponseBodyOrderBaseInfo,
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOrderBaseInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOrderBaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTenantsResponseBody extends $tea.Model {
  requestId?: string;
  tenantList?: ListUserTenantsResponseBodyTenantList[];
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantList: 'TenantList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantList: { 'type': 'array', 'itemType': ListUserTenantsResponseBodyTenantList },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTenantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserTenantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserTenantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOwnersRequest extends $tea.Model {
  tid?: number;
  resourceId?: string;
  ownerType?: string;
  ownerIds?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      resourceId: 'ResourceId',
      ownerType: 'OwnerType',
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      resourceId: 'string',
      ownerType: 'string',
      ownerIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOwnersResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOwnersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetOwnersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetOwnersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicDatabaseRequest extends $tea.Model {
  tid?: number;
  dbId?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      dbId: 'DbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      dbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicDatabaseResponseBody extends $tea.Model {
  logicDatabase?: GetLogicDatabaseResponseBodyLogicDatabase;
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      logicDatabase: 'LogicDatabase',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicDatabase: GetLogicDatabaseResponseBodyLogicDatabase,
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogicDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogicDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectBackupFilesRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  actionName?: string;
  actionDetail?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      actionName: 'ActionName',
      actionDetail: 'ActionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
      actionName: 'string',
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectBackupFilesShrinkRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  actionName?: string;
  actionDetailShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      actionName: 'ActionName',
      actionDetailShrink: 'ActionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
      actionName: 'string',
      actionDetailShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectBackupFilesResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  dataCorrectBackupFiles?: GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      dataCorrectBackupFiles: 'DataCorrectBackupFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      dataCorrectBackupFiles: GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectBackupFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataCorrectBackupFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataCorrectBackupFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceRequest extends $tea.Model {
  tid?: number;
  instanceType?: string;
  instanceSource?: string;
  networkType?: string;
  envType?: string;
  ecsInstanceId?: string;
  vpcId?: string;
  ecsRegion?: string;
  host?: string;
  port?: number;
  sid?: string;
  databaseUser?: string;
  databasePassword?: string;
  instanceAlias?: string;
  dbaUid?: number;
  safeRule?: string;
  queryTimeout?: number;
  exportTimeout?: number;
  dataLinkName?: string;
  ddlOnline?: number;
  useDsql?: number;
  skipTest?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      instanceType: 'InstanceType',
      instanceSource: 'InstanceSource',
      networkType: 'NetworkType',
      envType: 'EnvType',
      ecsInstanceId: 'EcsInstanceId',
      vpcId: 'VpcId',
      ecsRegion: 'EcsRegion',
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
      databaseUser: 'DatabaseUser',
      databasePassword: 'DatabasePassword',
      instanceAlias: 'InstanceAlias',
      dbaUid: 'DbaUid',
      safeRule: 'SafeRule',
      queryTimeout: 'QueryTimeout',
      exportTimeout: 'ExportTimeout',
      dataLinkName: 'DataLinkName',
      ddlOnline: 'DdlOnline',
      useDsql: 'UseDsql',
      skipTest: 'SkipTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      instanceType: 'string',
      instanceSource: 'string',
      networkType: 'string',
      envType: 'string',
      ecsInstanceId: 'string',
      vpcId: 'string',
      ecsRegion: 'string',
      host: 'string',
      port: 'number',
      sid: 'string',
      databaseUser: 'string',
      databasePassword: 'string',
      instanceAlias: 'string',
      dbaUid: 'number',
      safeRule: 'string',
      queryTimeout: 'number',
      exportTimeout: 'number',
      dataLinkName: 'string',
      ddlOnline: 'number',
      useDsql: 'number',
      skipTest: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequest extends $tea.Model {
  comment?: string;
  relatedUserList?: number[];
  param?: CreateStructSyncOrderRequestParam;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      relatedUserList: 'RelatedUserList',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      param: CreateStructSyncOrderRequestParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderShrinkRequest extends $tea.Model {
  comment?: string;
  relatedUserListShrink?: string;
  paramShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      relatedUserListShrink: 'RelatedUserList',
      paramShrink: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      relatedUserListShrink: 'string',
      paramShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  createOrderResult?: number[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      createOrderResult: 'CreateOrderResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateStructSyncOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStructSyncOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataExportRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  actionName?: string;
  actionDetail?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      actionName: 'ActionName',
      actionDetail: 'ActionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
      actionName: 'string',
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataExportShrinkRequest extends $tea.Model {
  tid?: number;
  orderId?: number;
  actionName?: string;
  actionDetailShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      actionName: 'ActionName',
      actionDetailShrink: 'ActionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      orderId: 'number',
      actionName: 'string',
      actionDetailShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataExportResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataExportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteDataExportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteDataExportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataCorrectRequest extends $tea.Model {
  tid?: string;
  orderId?: number;
  actionName?: string;
  actionDetail?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      actionName: 'ActionName',
      actionDetail: 'ActionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'string',
      orderId: 'number',
      actionName: 'string',
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataCorrectShrinkRequest extends $tea.Model {
  tid?: string;
  orderId?: number;
  actionName?: string;
  actionDetailShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      orderId: 'OrderId',
      actionName: 'ActionName',
      actionDetailShrink: 'ActionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'string',
      orderId: 'number',
      actionName: 'string',
      actionDetailShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataCorrectResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataCorrectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteDataCorrectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteDataCorrectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesRequest extends $tea.Model {
  tid?: number;
  databaseId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchName?: string;
  returnGuid?: boolean;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      databaseId: 'DatabaseId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchName: 'SearchName',
      returnGuid: 'ReturnGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      databaseId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchName: 'string',
      returnGuid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  errorCode?: string;
  tableList?: ListTablesResponseBodyTableList;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      tableList: 'TableList',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      errorCode: 'string',
      tableList: ListTablesResponseBodyTableList,
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesRequest extends $tea.Model {
  tid?: number;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  workflowNodes?: ListWorkFlowNodesResponseBodyWorkflowNodes;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      workflowNodes: 'WorkflowNodes',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      workflowNodes: ListWorkFlowNodesResponseBodyWorkflowNodes,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWorkFlowNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWorkFlowNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailRequest extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  structSyncOrderDetail?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      structSyncOrderDetail: 'StructSyncOrderDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      structSyncOrderDetail: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStructSyncOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStructSyncOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsDetailRequest extends $tea.Model {
  tid?: number;
  schemaName?: string;
  tableName?: string;
  columnName?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      columnName: 'ColumnName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      schemaName: 'string',
      tableName: 'string',
      columnName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsDetailResponseBody extends $tea.Model {
  requestId?: string;
  sensitiveColumnsDetailList?: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sensitiveColumnsDetailList: 'SensitiveColumnsDetailList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sensitiveColumnsDetailList: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSensitiveColumnsDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSensitiveColumnsDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  tid?: number;
  uid?: number;
  userNick?: string;
  roleNames?: string;
  mobile?: string;
  maxExecuteCount?: number;
  maxResultCount?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
      userNick: 'UserNick',
      roleNames: 'RoleNames',
      mobile: 'Mobile',
      maxExecuteCount: 'MaxExecuteCount',
      maxResultCount: 'MaxResultCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'number',
      userNick: 'string',
      roleNames: 'string',
      mobile: 'string',
      maxExecuteCount: 'number',
      maxResultCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncExecSqlDetailRequest extends $tea.Model {
  orderId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncExecSqlDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  structSyncExecSqlDetail?: GetStructSyncExecSqlDetailResponseBodyStructSyncExecSqlDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      structSyncExecSqlDetail: 'StructSyncExecSqlDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      errorCode: 'string',
      structSyncExecSqlDetail: GetStructSyncExecSqlDetailResponseBodyStructSyncExecSqlDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncExecSqlDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStructSyncExecSqlDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStructSyncExecSqlDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  tid?: number;
  host?: string;
  port?: number;
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      host: 'string',
      port: 'number',
      sid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyRequest extends $tea.Model {
  tid?: number;
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBody extends $tea.Model {
  requestId?: string;
  DBTopology?: GetTableDBTopologyResponseBodyDBTopology;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBTopology: 'DBTopology',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBTopology: GetTableDBTopologyResponseBodyDBTopology,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTableDBTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTableDBTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $tea.Model {
  originFrom?: string;
  permType?: string;
  expireDate?: string;
  createDate?: string;
  userAccessId?: string;
  extraData?: string;
  static names(): { [key: string]: string } {
    return {
      originFrom: 'OriginFrom',
      permType: 'PermType',
      expireDate: 'ExpireDate',
      createDate: 'CreateDate',
      userAccessId: 'UserAccessId',
      extraData: 'ExtraData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originFrom: 'string',
      permType: 'string',
      expireDate: 'string',
      createDate: 'string',
      userAccessId: 'string',
      extraData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails extends $tea.Model {
  permDetail?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission extends $tea.Model {
  dbId?: string;
  tableName?: string;
  userId?: string;
  schemaName?: string;
  logic?: boolean;
  userNickName?: string;
  instanceId?: string;
  permDetails?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails;
  envType?: string;
  columnName?: string;
  dbType?: string;
  dsType?: string;
  tableId?: string;
  searchName?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      tableName: 'TableName',
      userId: 'UserId',
      schemaName: 'SchemaName',
      logic: 'Logic',
      userNickName: 'UserNickName',
      instanceId: 'InstanceId',
      permDetails: 'PermDetails',
      envType: 'EnvType',
      columnName: 'ColumnName',
      dbType: 'DbType',
      dsType: 'DsType',
      tableId: 'TableId',
      searchName: 'SearchName',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      tableName: 'string',
      userId: 'string',
      schemaName: 'string',
      logic: 'boolean',
      userNickName: 'string',
      instanceId: 'string',
      permDetails: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails,
      envType: 'string',
      columnName: 'string',
      dbType: 'string',
      dsType: 'string',
      tableId: 'string',
      searchName: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsResponseBodyUserPermissions extends $tea.Model {
  userPermission?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsResponseBodySensitiveColumnListSensitiveColumn extends $tea.Model {
  columnName?: string;
  tableName?: string;
  securityLevel?: string;
  columnCount?: number;
  schemaName?: string;
  functionType?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      tableName: 'TableName',
      securityLevel: 'SecurityLevel',
      columnCount: 'ColumnCount',
      schemaName: 'SchemaName',
      functionType: 'FunctionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      tableName: 'string',
      securityLevel: 'string',
      columnCount: 'number',
      schemaName: 'string',
      functionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsResponseBodySensitiveColumnList extends $tea.Model {
  sensitiveColumn?: ListSensitiveColumnsResponseBodySensitiveColumnListSensitiveColumn[];
  static names(): { [key: string]: string } {
    return {
      sensitiveColumn: 'SensitiveColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveColumn: { 'type': 'array', 'itemType': ListSensitiveColumnsResponseBodySensitiveColumnListSensitiveColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserListUserRoleIdList extends $tea.Model {
  roleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      roleIds: 'RoleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserListUserRoleNameList extends $tea.Model {
  roleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      roleNames: 'RoleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserListUser extends $tea.Model {
  state?: string;
  curResultCount?: number;
  userId?: string;
  lastLoginTime?: string;
  maxResultCount?: number;
  parentUid?: string;
  roleIdList?: ListUsersResponseBodyUserListUserRoleIdList;
  roleNameList?: ListUsersResponseBodyUserListUserRoleNameList;
  nickName?: string;
  maxExecuteCount?: number;
  curExecuteCount?: number;
  mobile?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      curResultCount: 'CurResultCount',
      userId: 'UserId',
      lastLoginTime: 'LastLoginTime',
      maxResultCount: 'MaxResultCount',
      parentUid: 'ParentUid',
      roleIdList: 'RoleIdList',
      roleNameList: 'RoleNameList',
      nickName: 'NickName',
      maxExecuteCount: 'MaxExecuteCount',
      curExecuteCount: 'CurExecuteCount',
      mobile: 'Mobile',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      curResultCount: 'number',
      userId: 'string',
      lastLoginTime: 'string',
      maxResultCount: 'number',
      parentUid: 'string',
      roleIdList: ListUsersResponseBodyUserListUserRoleIdList,
      roleNameList: ListUsersResponseBodyUserListUserRoleNameList,
      nickName: 'string',
      maxExecuteCount: 'number',
      curExecuteCount: 'number',
      mobile: 'string',
      uid: 'string',
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

export class GetMetaTableDetailInfoResponseBodyDetailInfoIndexList extends $tea.Model {
  indexColumns?: string[];
  indexName?: string;
  unique?: boolean;
  indexType?: string;
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      indexColumns: 'IndexColumns',
      indexName: 'IndexName',
      unique: 'Unique',
      indexType: 'IndexType',
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexColumns: { 'type': 'array', 'itemType': 'string' },
      indexName: 'string',
      unique: 'boolean',
      indexType: 'string',
      indexId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBodyDetailInfoColumnList extends $tea.Model {
  columnName?: string;
  description?: string;
  dataScale?: number;
  dataPrecision?: number;
  columnType?: string;
  autoIncrement?: boolean;
  position?: string;
  nullable?: boolean;
  columnId?: string;
  dataLength?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      description: 'Description',
      dataScale: 'DataScale',
      dataPrecision: 'DataPrecision',
      columnType: 'ColumnType',
      autoIncrement: 'AutoIncrement',
      position: 'Position',
      nullable: 'Nullable',
      columnId: 'ColumnId',
      dataLength: 'DataLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      description: 'string',
      dataScale: 'number',
      dataPrecision: 'number',
      columnType: 'string',
      autoIncrement: 'boolean',
      position: 'string',
      nullable: 'boolean',
      columnId: 'string',
      dataLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBodyDetailInfo extends $tea.Model {
  indexList?: GetMetaTableDetailInfoResponseBodyDetailInfoIndexList[];
  columnList?: GetMetaTableDetailInfoResponseBodyDetailInfoColumnList[];
  static names(): { [key: string]: string } {
    return {
      indexList: 'IndexList',
      columnList: 'ColumnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexList: { 'type': 'array', 'itemType': GetMetaTableDetailInfoResponseBodyDetailInfoIndexList },
      columnList: { 'type': 'array', 'itemType': GetMetaTableDetailInfoResponseBodyDetailInfoColumnList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyCreateOrderResult extends $tea.Model {
  orderIds?: number[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyDatabaseListDatabase extends $tea.Model {
  databaseId?: string;
  host?: string;
  catalogName?: string;
  dbaName?: string;
  state?: string;
  dbaId?: string;
  schemaName?: string;
  instanceId?: string;
  port?: number;
  envType?: string;
  sid?: string;
  ownerIdList?: ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList;
  encoding?: string;
  dbType?: string;
  ownerNameList?: ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      host: 'Host',
      catalogName: 'CatalogName',
      dbaName: 'DbaName',
      state: 'State',
      dbaId: 'DbaId',
      schemaName: 'SchemaName',
      instanceId: 'InstanceId',
      port: 'Port',
      envType: 'EnvType',
      sid: 'Sid',
      ownerIdList: 'OwnerIdList',
      encoding: 'Encoding',
      dbType: 'DbType',
      ownerNameList: 'OwnerNameList',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      host: 'string',
      catalogName: 'string',
      dbaName: 'string',
      state: 'string',
      dbaId: 'string',
      schemaName: 'string',
      instanceId: 'string',
      port: 'number',
      envType: 'string',
      sid: 'string',
      ownerIdList: ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList,
      encoding: 'string',
      dbType: 'string',
      ownerNameList: ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList,
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyDatabaseList extends $tea.Model {
  database?: ListDatabasesResponseBodyDatabaseListDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': ListDatabasesResponseBodyDatabaseListDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $tea.Model {
  originFrom?: string;
  permType?: string;
  expireDate?: string;
  createDate?: string;
  userAccessId?: string;
  extraData?: string;
  static names(): { [key: string]: string } {
    return {
      originFrom: 'OriginFrom',
      permType: 'PermType',
      expireDate: 'ExpireDate',
      createDate: 'CreateDate',
      userAccessId: 'UserAccessId',
      extraData: 'ExtraData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originFrom: 'string',
      permType: 'string',
      expireDate: 'string',
      createDate: 'string',
      userAccessId: 'string',
      extraData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails extends $tea.Model {
  permDetail?: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBodyUserPermissionsUserPermission extends $tea.Model {
  dbId?: string;
  tableName?: string;
  userId?: string;
  schemaName?: string;
  logic?: boolean;
  userNickName?: string;
  instanceId?: string;
  permDetails?: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
  envType?: string;
  columnName?: string;
  dbType?: string;
  dsType?: string;
  tableId?: string;
  searchName?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      tableName: 'TableName',
      userId: 'UserId',
      schemaName: 'SchemaName',
      logic: 'Logic',
      userNickName: 'UserNickName',
      instanceId: 'InstanceId',
      permDetails: 'PermDetails',
      envType: 'EnvType',
      columnName: 'ColumnName',
      dbType: 'DbType',
      dsType: 'DsType',
      tableId: 'TableId',
      searchName: 'SearchName',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      tableName: 'string',
      userId: 'string',
      schemaName: 'string',
      logic: 'boolean',
      userNickName: 'string',
      instanceId: 'string',
      permDetails: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails,
      envType: 'string',
      columnName: 'string',
      dbType: 'string',
      dsType: 'string',
      tableId: 'string',
      searchName: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBodyUserPermissions extends $tea.Model {
  userPermission?: ListUserPermissionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListUserPermissionsResponseBodyUserPermissionsUserPermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode extends $tea.Model {
  comment?: string;
  nodeType?: string;
  nodeName?: string;
  position?: number;
  createUserId?: number;
  templateId?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      nodeType: 'NodeType',
      nodeName: 'NodeName',
      position: 'Position',
      createUserId: 'CreateUserId',
      templateId: 'TemplateId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      nodeType: 'string',
      nodeName: 'string',
      position: 'number',
      createUserId: 'number',
      templateId: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes extends $tea.Model {
  workflowNode?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode[];
  static names(): { [key: string]: string } {
    return {
      workflowNode: 'WorkflowNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNode: { 'type': 'array', 'itemType': ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate extends $tea.Model {
  isSystem?: number;
  workflowNodes?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes;
  comment?: string;
  enabled?: string;
  templateName?: string;
  templateId?: number;
  createUserId?: number;
  static names(): { [key: string]: string } {
    return {
      isSystem: 'IsSystem',
      workflowNodes: 'WorkflowNodes',
      comment: 'Comment',
      enabled: 'Enabled',
      templateName: 'TemplateName',
      templateId: 'TemplateId',
      createUserId: 'CreateUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSystem: 'number',
      workflowNodes: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes,
      comment: 'string',
      enabled: 'string',
      templateName: 'string',
      templateId: 'number',
      createUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplates extends $tea.Model {
  workFlowTemplate?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate[];
  static names(): { [key: string]: string } {
    return {
      workFlowTemplate: 'WorkFlowTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workFlowTemplate: { 'type': 'array', 'itemType': ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo extends $tea.Model {
  preCheckId?: number;
  jobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      preCheckId: 'PreCheckId',
      jobStatus: 'JobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckId: 'number',
      jobStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail extends $tea.Model {
  dbId?: number;
  database?: string;
  classify?: string;
  exeSQL?: string;
  logic?: boolean;
  actualAffectRows?: number;
  ignoreAffectRows?: boolean;
  ignoreAffectRowsReason?: string;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      database: 'Database',
      classify: 'Classify',
      exeSQL: 'ExeSQL',
      logic: 'Logic',
      actualAffectRows: 'ActualAffectRows',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      database: 'string',
      classify: 'string',
      exeSQL: 'string',
      logic: 'boolean',
      actualAffectRows: 'number',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBodyDataExportOrderDetail extends $tea.Model {
  keyInfo?: GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo;
  orderDetail?: GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail;
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
      orderDetail: 'OrderDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo,
      orderDetail: GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListInstanceOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListInstanceOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListInstance extends $tea.Model {
  vpcId?: string;
  databaseUser?: string;
  dbaId?: string;
  useDsql?: number;
  port?: number;
  ecsInstanceId?: string;
  envType?: string;
  sid?: string;
  ownerIdList?: ListInstancesResponseBodyInstanceListInstanceOwnerIdList;
  safeRuleId?: string;
  ownerNameList?: ListInstancesResponseBodyInstanceListInstanceOwnerNameList;
  dbaNickName?: string;
  queryTimeout?: number;
  instanceSource?: string;
  host?: string;
  state?: string;
  dataLinkName?: string;
  exportTimeout?: number;
  instanceId?: string;
  instanceType?: string;
  databasePassword?: string;
  instanceAlias?: string;
  ddlOnline?: number;
  ecsRegion?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      databaseUser: 'DatabaseUser',
      dbaId: 'DbaId',
      useDsql: 'UseDsql',
      port: 'Port',
      ecsInstanceId: 'EcsInstanceId',
      envType: 'EnvType',
      sid: 'Sid',
      ownerIdList: 'OwnerIdList',
      safeRuleId: 'SafeRuleId',
      ownerNameList: 'OwnerNameList',
      dbaNickName: 'DbaNickName',
      queryTimeout: 'QueryTimeout',
      instanceSource: 'InstanceSource',
      host: 'Host',
      state: 'State',
      dataLinkName: 'DataLinkName',
      exportTimeout: 'ExportTimeout',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      databasePassword: 'DatabasePassword',
      instanceAlias: 'InstanceAlias',
      ddlOnline: 'DdlOnline',
      ecsRegion: 'EcsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      databaseUser: 'string',
      dbaId: 'string',
      useDsql: 'number',
      port: 'number',
      ecsInstanceId: 'string',
      envType: 'string',
      sid: 'string',
      ownerIdList: ListInstancesResponseBodyInstanceListInstanceOwnerIdList,
      safeRuleId: 'string',
      ownerNameList: ListInstancesResponseBodyInstanceListInstanceOwnerNameList,
      dbaNickName: 'string',
      queryTimeout: 'number',
      instanceSource: 'string',
      host: 'string',
      state: 'string',
      dataLinkName: 'string',
      exportTimeout: 'number',
      instanceId: 'string',
      instanceType: 'string',
      databasePassword: 'string',
      instanceAlias: 'string',
      ddlOnline: 'number',
      ecsRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceList extends $tea.Model {
  instance?: ListInstancesResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceListInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam extends $tea.Model {
  endpoint?: string;
  bucketName?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      bucketName: 'BucketName',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      bucketName: 'string',
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponseBodyUploadFileJobDetail extends $tea.Model {
  jobKey?: string;
  fileName?: string;
  fileSize?: number;
  fileSource?: string;
  uploadType?: string;
  uploadURL?: string;
  uploadOSSParam?: GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam;
  uploadedSize?: number;
  jobStatus?: string;
  jobStatusDesc?: string;
  attachmentKey?: string;
  static names(): { [key: string]: string } {
    return {
      jobKey: 'JobKey',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileSource: 'FileSource',
      uploadType: 'UploadType',
      uploadURL: 'UploadURL',
      uploadOSSParam: 'UploadOSSParam',
      uploadedSize: 'UploadedSize',
      jobStatus: 'JobStatus',
      jobStatusDesc: 'JobStatusDesc',
      attachmentKey: 'AttachmentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobKey: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileSource: 'string',
      uploadType: 'string',
      uploadURL: 'string',
      uploadOSSParam: GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam,
      uploadedSize: 'number',
      jobStatus: 'string',
      jobStatusDesc: 'string',
      attachmentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobDetailResponseBodyStructSyncJobDetail extends $tea.Model {
  jobStatus?: string;
  message?: string;
  tableAnalyzed?: number;
  tableCount?: number;
  sqlCount?: number;
  executeCount?: number;
  securityRule?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      message: 'Message',
      tableAnalyzed: 'TableAnalyzed',
      tableCount: 'TableCount',
      sqlCount: 'SqlCount',
      executeCount: 'ExecuteCount',
      securityRule: 'SecurityRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      message: 'string',
      tableAnalyzed: 'number',
      tableCount: 'number',
      sqlCount: 'number',
      executeCount: 'number',
      securityRule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadOSSFileJobRequestUploadTarget extends $tea.Model {
  endpoint?: string;
  bucketName?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      bucketName: 'BucketName',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      bucketName: 'string',
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseResponseBodySearchDatabaseListSearchDatabase extends $tea.Model {
  databaseId?: string;
  host?: string;
  dbaId?: string;
  schemaName?: string;
  logic?: boolean;
  datalinkName?: string;
  port?: number;
  envType?: string;
  sid?: string;
  ownerIdList?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList;
  encoding?: string;
  dbType?: string;
  ownerNameList?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList;
  searchName?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      host: 'Host',
      dbaId: 'DbaId',
      schemaName: 'SchemaName',
      logic: 'Logic',
      datalinkName: 'DatalinkName',
      port: 'Port',
      envType: 'EnvType',
      sid: 'Sid',
      ownerIdList: 'OwnerIdList',
      encoding: 'Encoding',
      dbType: 'DbType',
      ownerNameList: 'OwnerNameList',
      searchName: 'SearchName',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      host: 'string',
      dbaId: 'string',
      schemaName: 'string',
      logic: 'boolean',
      datalinkName: 'string',
      port: 'number',
      envType: 'string',
      sid: 'string',
      ownerIdList: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList,
      encoding: 'string',
      dbType: 'string',
      ownerNameList: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList,
      searchName: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseResponseBodySearchDatabaseList extends $tea.Model {
  searchDatabase?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabase[];
  static names(): { [key: string]: string } {
    return {
      searchDatabase: 'SearchDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchDatabase: { 'type': 'array', 'itemType': SearchDatabaseResponseBodySearchDatabaseListSearchDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserRoleIdList extends $tea.Model {
  roleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      roleIds: 'RoleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserRoleNameList extends $tea.Model {
  roleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      roleNames: 'RoleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  state?: string;
  curResultCount?: number;
  userId?: string;
  lastLoginTime?: string;
  maxResultCount?: number;
  parentUid?: number;
  roleIdList?: GetUserResponseBodyUserRoleIdList;
  roleNameList?: GetUserResponseBodyUserRoleNameList;
  nickName?: string;
  maxExecuteCount?: number;
  curExecuteCount?: number;
  mobile?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      curResultCount: 'CurResultCount',
      userId: 'UserId',
      lastLoginTime: 'LastLoginTime',
      maxResultCount: 'MaxResultCount',
      parentUid: 'ParentUid',
      roleIdList: 'RoleIdList',
      roleNameList: 'RoleNameList',
      nickName: 'NickName',
      maxExecuteCount: 'MaxExecuteCount',
      curExecuteCount: 'CurExecuteCount',
      mobile: 'Mobile',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      curResultCount: 'number',
      userId: 'string',
      lastLoginTime: 'string',
      maxResultCount: 'number',
      parentUid: 'number',
      roleIdList: GetUserResponseBodyUserRoleIdList,
      roleNameList: GetUserResponseBodyUserRoleNameList,
      nickName: 'string',
      maxExecuteCount: 'number',
      curExecuteCount: 'number',
      mobile: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO extends $tea.Model {
  userTip?: string;
  checkStatus?: string;
  checkStep?: string;
  static names(): { [key: string]: string } {
    return {
      userTip: 'UserTip',
      checkStatus: 'CheckStatus',
      checkStep: 'CheckStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userTip: 'string',
      checkStatus: 'string',
      checkStep: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail extends $tea.Model {
  taskCheckDO?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO[];
  static names(): { [key: string]: string } {
    return {
      taskCheckDO: 'TaskCheckDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskCheckDO: { 'type': 'array', 'itemType': GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail extends $tea.Model {
  rbSQL?: string;
  rbAttachmentName?: string;
  classify?: string;
  exeSQL?: string;
  estimateAffectRows?: number;
  rbSQLType?: string;
  actualAffectRows?: number;
  ignoreAffectRows?: boolean;
  attachmentName?: string;
  sqlType?: string;
  ignoreAffectRowsReason?: string;
  static names(): { [key: string]: string } {
    return {
      rbSQL: 'RbSQL',
      rbAttachmentName: 'RbAttachmentName',
      classify: 'Classify',
      exeSQL: 'ExeSQL',
      estimateAffectRows: 'EstimateAffectRows',
      rbSQLType: 'RbSQLType',
      actualAffectRows: 'ActualAffectRows',
      ignoreAffectRows: 'IgnoreAffectRows',
      attachmentName: 'AttachmentName',
      sqlType: 'SqlType',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rbSQL: 'string',
      rbAttachmentName: 'string',
      classify: 'string',
      exeSQL: 'string',
      estimateAffectRows: 'number',
      rbSQLType: 'string',
      actualAffectRows: 'number',
      ignoreAffectRows: 'boolean',
      attachmentName: 'string',
      sqlType: 'string',
      ignoreAffectRowsReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase extends $tea.Model {
  dbId?: number;
  dbType?: string;
  logic?: boolean;
  searchName?: string;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      logic: 'Logic',
      searchName: 'SearchName',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      logic: 'boolean',
      searchName: 'string',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList extends $tea.Model {
  database?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail extends $tea.Model {
  preCheckDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail;
  orderDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail;
  databaseList?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList;
  static names(): { [key: string]: string } {
    return {
      preCheckDetail: 'PreCheckDetail',
      orderDetail: 'OrderDetail',
      databaseList: 'DatabaseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail,
      orderDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail,
      databaseList: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsResponseBodyColumnListColumn extends $tea.Model {
  columnType?: string;
  autoIncrement?: boolean;
  columnId?: string;
  defaultValue?: string;
  sensitive?: boolean;
  columnName?: string;
  securityLevel?: string;
  description?: string;
  dataPrecision?: number;
  dataScale?: number;
  functionType?: string;
  nullable?: boolean;
  dataLength?: number;
  static names(): { [key: string]: string } {
    return {
      columnType: 'ColumnType',
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      defaultValue: 'DefaultValue',
      sensitive: 'Sensitive',
      columnName: 'ColumnName',
      securityLevel: 'SecurityLevel',
      description: 'Description',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      functionType: 'FunctionType',
      nullable: 'Nullable',
      dataLength: 'DataLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnType: 'string',
      autoIncrement: 'boolean',
      columnId: 'string',
      defaultValue: 'string',
      sensitive: 'boolean',
      columnName: 'string',
      securityLevel: 'string',
      description: 'string',
      dataPrecision: 'number',
      dataScale: 'number',
      functionType: 'string',
      nullable: 'boolean',
      dataLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsResponseBodyColumnList extends $tea.Model {
  column?: ListColumnsResponseBodyColumnListColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': ListColumnsResponseBodyColumnListColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBodyColumnList extends $tea.Model {
  columnType?: string;
  autoIncrement?: boolean;
  columnId?: string;
  columnName?: string;
  securityLevel?: string;
  primaryKey?: string;
  description?: string;
  dataPrecision?: number;
  dataScale?: number;
  position?: number;
  nullable?: boolean;
  dataLength?: number;
  static names(): { [key: string]: string } {
    return {
      columnType: 'ColumnType',
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      columnName: 'ColumnName',
      securityLevel: 'SecurityLevel',
      primaryKey: 'PrimaryKey',
      description: 'Description',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      position: 'Position',
      nullable: 'Nullable',
      dataLength: 'DataLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnType: 'string',
      autoIncrement: 'boolean',
      columnId: 'string',
      columnName: 'string',
      securityLevel: 'string',
      primaryKey: 'string',
      description: 'string',
      dataPrecision: 'number',
      dataScale: 'number',
      position: 'number',
      nullable: 'boolean',
      dataLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScriptResponseBodyResults extends $tea.Model {
  columnNames?: string[];
  rows?: { [key: string]: any }[];
  success?: boolean;
  message?: string;
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      columnNames: 'ColumnNames',
      rows: 'Rows',
      success: 'Success',
      message: 'Message',
      rowCount: 'RowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      success: 'boolean',
      message: 'string',
      rowCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList extends $tea.Model {
  jobDetailId?: number;
  currentSql?: string;
  executeCount?: number;
  jobId?: number;
  dbId?: number;
  logic?: boolean;
  skip?: boolean;
  sqlType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobDetailId: 'JobDetailId',
      currentSql: 'CurrentSql',
      executeCount: 'ExecuteCount',
      jobId: 'JobId',
      dbId: 'DbId',
      logic: 'Logic',
      skip: 'Skip',
      sqlType: 'SqlType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDetailId: 'number',
      currentSql: 'string',
      executeCount: 'number',
      jobId: 'number',
      dbId: 'number',
      logic: 'boolean',
      skip: 'boolean',
      sqlType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList extends $tea.Model {
  auditUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      auditUserIds: 'AuditUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNode extends $tea.Model {
  operateTime?: string;
  operatorId?: number;
  nodeName?: string;
  auditUserIdList?: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList;
  operateComment?: string;
  workflowInsCode?: string;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'OperateTime',
      operatorId: 'OperatorId',
      nodeName: 'NodeName',
      auditUserIdList: 'AuditUserIdList',
      operateComment: 'OperateComment',
      workflowInsCode: 'WorkflowInsCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'string',
      operatorId: 'number',
      nodeName: 'string',
      auditUserIdList: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList,
      operateComment: 'string',
      workflowInsCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes extends $tea.Model {
  workflowNode?: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNode[];
  static names(): { [key: string]: string } {
    return {
      workflowNode: 'WorkflowNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNode: { 'type': 'array', 'itemType': GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler extends $tea.Model {
  nickName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers extends $tea.Model {
  currentHandler?: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler[];
  static names(): { [key: string]: string } {
    return {
      currentHandler: 'CurrentHandler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentHandler: { 'type': 'array', 'itemType': GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailReasonList extends $tea.Model {
  reasons?: string[];
  static names(): { [key: string]: string } {
    return {
      reasons: 'Reasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasons: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetail extends $tea.Model {
  workflowNodes?: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes;
  description?: string;
  currentHandlers?: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers;
  orderType?: string;
  title?: string;
  auditId?: number;
  orderId?: number;
  workflowInsCode?: string;
  reasonList?: GetApprovalDetailResponseBodyApprovalDetailReasonList;
  static names(): { [key: string]: string } {
    return {
      workflowNodes: 'WorkflowNodes',
      description: 'Description',
      currentHandlers: 'CurrentHandlers',
      orderType: 'OrderType',
      title: 'Title',
      auditId: 'AuditId',
      orderId: 'OrderId',
      workflowInsCode: 'WorkflowInsCode',
      reasonList: 'ReasonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNodes: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes,
      description: 'string',
      currentHandlers: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers,
      orderType: 'string',
      title: 'string',
      auditId: 'number',
      orderId: 'number',
      workflowInsCode: 'string',
      reasonList: GetApprovalDetailResponseBodyApprovalDetailReasonList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserActiveTenantResponseBodyTenant extends $tea.Model {
  status?: string;
  tid?: number;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tid: 'Tid',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tid: 'number',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstance extends $tea.Model {
  vpcId?: string;
  databaseUser?: string;
  dbaId?: string;
  useDsql?: number;
  port?: number;
  ecsInstanceId?: string;
  envType?: string;
  sid?: string;
  ownerIdList?: GetInstanceResponseBodyInstanceOwnerIdList;
  safeRuleId?: string;
  ownerNameList?: GetInstanceResponseBodyInstanceOwnerNameList;
  dbaNickName?: string;
  queryTimeout?: number;
  instanceSource?: string;
  host?: string;
  state?: string;
  dataLinkName?: string;
  exportTimeout?: number;
  instanceId?: string;
  instanceType?: string;
  databasePassword?: string;
  instanceAlias?: string;
  ddlOnline?: number;
  ecsRegion?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      databaseUser: 'DatabaseUser',
      dbaId: 'DbaId',
      useDsql: 'UseDsql',
      port: 'Port',
      ecsInstanceId: 'EcsInstanceId',
      envType: 'EnvType',
      sid: 'Sid',
      ownerIdList: 'OwnerIdList',
      safeRuleId: 'SafeRuleId',
      ownerNameList: 'OwnerNameList',
      dbaNickName: 'DbaNickName',
      queryTimeout: 'QueryTimeout',
      instanceSource: 'InstanceSource',
      host: 'Host',
      state: 'State',
      dataLinkName: 'DataLinkName',
      exportTimeout: 'ExportTimeout',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      databasePassword: 'DatabasePassword',
      instanceAlias: 'InstanceAlias',
      ddlOnline: 'DdlOnline',
      ecsRegion: 'EcsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      databaseUser: 'string',
      dbaId: 'string',
      useDsql: 'number',
      port: 'number',
      ecsInstanceId: 'string',
      envType: 'string',
      sid: 'string',
      ownerIdList: GetInstanceResponseBodyInstanceOwnerIdList,
      safeRuleId: 'string',
      ownerNameList: GetInstanceResponseBodyInstanceOwnerNameList,
      dbaNickName: 'string',
      queryTimeout: 'number',
      instanceSource: 'string',
      host: 'string',
      state: 'string',
      dataLinkName: 'string',
      exportTimeout: 'number',
      instanceId: 'string',
      instanceType: 'string',
      databasePassword: 'string',
      instanceAlias: 'string',
      ddlOnline: 'number',
      ecsRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo extends $tea.Model {
  dbId?: number;
  logic?: boolean;
  dbType?: string;
  searchName?: string;
  ownerIds?: number[];
  ownerNickNames?: string[];
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      dbType: 'DbType',
      searchName: 'SearchName',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      dbType: 'string',
      searchName: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo extends $tea.Model {
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo extends $tea.Model {
  tableName?: string;
  columnName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      columnName: 'ColumnName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      columnName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo extends $tea.Model {
  instanceId?: string;
  searchName?: string;
  dbType?: string;
  envType?: string;
  host?: string;
  port?: number;
  ownerIds?: number[];
  ownerNickName?: string[];
  dbaId?: number;
  dbaNickName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      searchName: 'SearchName',
      dbType: 'DbType',
      envType: 'EnvType',
      host: 'Host',
      port: 'Port',
      ownerIds: 'OwnerIds',
      ownerNickName: 'OwnerNickName',
      dbaId: 'DbaId',
      dbaNickName: 'DbaNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      searchName: 'string',
      dbType: 'string',
      envType: 'string',
      host: 'string',
      port: 'number',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickName: { 'type': 'array', 'itemType': 'string' },
      dbaId: 'number',
      dbaNickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources extends $tea.Model {
  databaseInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo;
  tableInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo;
  columnInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo;
  instanceInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo;
  static names(): { [key: string]: string } {
    return {
      databaseInfo: 'DatabaseInfo',
      tableInfo: 'TableInfo',
      columnInfo: 'ColumnInfo',
      instanceInfo: 'InstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo,
      tableInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo,
      columnInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo,
      instanceInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail extends $tea.Model {
  resources?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources[];
  permType?: number;
  seconds?: number;
  applyType?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      permType: 'PermType',
      seconds: 'Seconds',
      applyType: 'ApplyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources },
      permType: 'number',
      seconds: 'number',
      applyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyIndexListIndex extends $tea.Model {
  indexName?: string;
  indexType?: string;
  tableId?: string;
  indexId?: string;
  indexComment?: string;
  static names(): { [key: string]: string } {
    return {
      indexName: 'IndexName',
      indexType: 'IndexType',
      tableId: 'TableId',
      indexId: 'IndexId',
      indexComment: 'IndexComment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexName: 'string',
      indexType: 'string',
      tableId: 'string',
      indexId: 'string',
      indexComment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyIndexList extends $tea.Model {
  index?: ListIndexesResponseBodyIndexListIndex[];
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: { 'type': 'array', 'itemType': ListIndexesResponseBodyIndexListIndex },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesResponseBodyLogicTableListLogicTable extends $tea.Model {
  databaseId?: string;
  tableName?: string;
  tableCount?: string;
  ownerIdList?: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList;
  ownerNameList?: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList;
  schemaName?: string;
  logic?: boolean;
  tableExpr?: string;
  tableGuid?: string;
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      tableName: 'TableName',
      tableCount: 'TableCount',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      schemaName: 'SchemaName',
      logic: 'Logic',
      tableExpr: 'TableExpr',
      tableGuid: 'TableGuid',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      tableName: 'string',
      tableCount: 'string',
      ownerIdList: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList,
      ownerNameList: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList,
      schemaName: 'string',
      logic: 'boolean',
      tableExpr: 'string',
      tableGuid: 'string',
      tableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesResponseBodyLogicTableList extends $tea.Model {
  logicTable?: ListLogicTablesResponseBodyLogicTableListLogicTable[];
  static names(): { [key: string]: string } {
    return {
      logicTable: 'LogicTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicTable: { 'type': 'array', 'itemType': ListLogicTablesResponseBodyLogicTableListLogicTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportDownloadURLResponseBodyDownloadURLResult extends $tea.Model {
  hasResult?: boolean;
  tipMessage?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      hasResult: 'HasResult',
      tipMessage: 'TipMessage',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasResult: 'boolean',
      tipMessage: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBodyDatabaseOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBodyDatabaseOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBodyDatabase extends $tea.Model {
  databaseId?: string;
  host?: string;
  catalogName?: string;
  dbaName?: string;
  state?: string;
  dbaId?: string;
  schemaName?: string;
  instanceId?: string;
  port?: number;
  envType?: string;
  sid?: string;
  ownerIdList?: GetDatabaseResponseBodyDatabaseOwnerIdList;
  encoding?: string;
  dbType?: string;
  ownerNameList?: GetDatabaseResponseBodyDatabaseOwnerNameList;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      host: 'Host',
      catalogName: 'CatalogName',
      dbaName: 'DbaName',
      state: 'State',
      dbaId: 'DbaId',
      schemaName: 'SchemaName',
      instanceId: 'InstanceId',
      port: 'Port',
      envType: 'EnvType',
      sid: 'Sid',
      ownerIdList: 'OwnerIdList',
      encoding: 'Encoding',
      dbType: 'DbType',
      ownerNameList: 'OwnerNameList',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      host: 'string',
      catalogName: 'string',
      dbaName: 'string',
      state: 'string',
      dbaId: 'string',
      schemaName: 'string',
      instanceId: 'string',
      port: 'number',
      envType: 'string',
      sid: 'string',
      ownerIdList: GetDatabaseResponseBodyDatabaseOwnerIdList,
      encoding: 'string',
      dbType: 'string',
      ownerNameList: GetDatabaseResponseBodyDatabaseOwnerNameList,
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail extends $tea.Model {
  searchName?: string;
  dbType?: string;
  envType?: string;
  tableName?: string;
  ownerIds?: number[];
  ownerNickNames?: string[];
  static names(): { [key: string]: string } {
    return {
      searchName: 'SearchName',
      dbType: 'DbType',
      envType: 'EnvType',
      tableName: 'TableName',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchName: 'string',
      dbType: 'string',
      envType: 'string',
      tableName: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources extends $tea.Model {
  logic?: boolean;
  targetId?: string;
  resourceDetail?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail;
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      targetId: 'TargetId',
      resourceDetail: 'ResourceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      targetId: 'string',
      resourceDetail: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail extends $tea.Model {
  applyType?: string;
  resources?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources[];
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      resources: { 'type': 'array', 'itemType': GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogResponseBodyOpLogDetailsOpLogDetail extends $tea.Model {
  module?: string;
  database?: string;
  userId?: number;
  opContent?: string;
  userNick?: string;
  orderId?: number;
  opTime?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      database: 'Database',
      userId: 'UserId',
      opContent: 'OpContent',
      userNick: 'UserNick',
      orderId: 'OrderId',
      opTime: 'OpTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
      database: 'string',
      userId: 'number',
      opContent: 'string',
      userNick: 'string',
      orderId: 'number',
      opTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogResponseBodyOpLogDetails extends $tea.Model {
  opLogDetail?: GetOpLogResponseBodyOpLogDetailsOpLogDetail[];
  static names(): { [key: string]: string } {
    return {
      opLogDetail: 'OpLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opLogDetail: { 'type': 'array', 'itemType': GetOpLogResponseBodyOpLogDetailsOpLogDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableResponseBodySearchTableListSearchTableOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableResponseBodySearchTableListSearchTableOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableResponseBodySearchTableListSearchTable extends $tea.Model {
  databaseId?: string;
  tableName?: string;
  DBSearchName?: string;
  logic?: boolean;
  envType?: string;
  dbName?: string;
  ownerIdList?: SearchTableResponseBodySearchTableListSearchTableOwnerIdList;
  description?: string;
  encoding?: string;
  dbType?: string;
  ownerNameList?: SearchTableResponseBodySearchTableListSearchTableOwnerNameList;
  tableSchemaName?: string;
  tableGuid?: string;
  engine?: string;
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      tableName: 'TableName',
      DBSearchName: 'DBSearchName',
      logic: 'Logic',
      envType: 'EnvType',
      dbName: 'DbName',
      ownerIdList: 'OwnerIdList',
      description: 'Description',
      encoding: 'Encoding',
      dbType: 'DbType',
      ownerNameList: 'OwnerNameList',
      tableSchemaName: 'TableSchemaName',
      tableGuid: 'TableGuid',
      engine: 'Engine',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      tableName: 'string',
      DBSearchName: 'string',
      logic: 'boolean',
      envType: 'string',
      dbName: 'string',
      ownerIdList: SearchTableResponseBodySearchTableListSearchTableOwnerIdList,
      description: 'string',
      encoding: 'string',
      dbType: 'string',
      ownerNameList: SearchTableResponseBodySearchTableListSearchTableOwnerNameList,
      tableSchemaName: 'string',
      tableGuid: 'string',
      engine: 'string',
      tableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableResponseBodySearchTableList extends $tea.Model {
  searchTable?: SearchTableResponseBodySearchTableListSearchTable[];
  static names(): { [key: string]: string } {
    return {
      searchTable: 'SearchTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchTable: { 'type': 'array', 'itemType': SearchTableResponseBodySearchTableListSearchTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobResponseBodyDBTaskSQLJobList extends $tea.Model {
  jobId?: number;
  jobType?: string;
  comment?: string;
  dbSearchName?: string;
  dbId?: number;
  logic?: boolean;
  createTime?: string;
  lastExecTime?: string;
  dbTaskGroupId?: number;
  status?: string;
  transactional?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobType: 'JobType',
      comment: 'Comment',
      dbSearchName: 'DbSearchName',
      dbId: 'DbId',
      logic: 'Logic',
      createTime: 'CreateTime',
      lastExecTime: 'LastExecTime',
      dbTaskGroupId: 'DbTaskGroupId',
      status: 'Status',
      transactional: 'Transactional',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      jobType: 'string',
      comment: 'string',
      dbSearchName: 'string',
      dbId: 'number',
      logic: 'boolean',
      createTime: 'string',
      lastExecTime: 'string',
      dbTaskGroupId: 'number',
      status: 'string',
      transactional: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList extends $tea.Model {
  compareType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      compareType: 'CompareType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList extends $tea.Model {
  sourceTableName?: string;
  targetTableName?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceTableName: 'string',
      targetTableName: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult extends $tea.Model {
  summaryList?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList[];
  resultList?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList[];
  static names(): { [key: string]: string } {
    return {
      summaryList: 'SummaryList',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryList: { 'type': 'array', 'itemType': GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList },
      resultList: { 'type': 'array', 'itemType': GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase extends $tea.Model {
  databaseId?: string;
  ownerIdList?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList;
  dbType?: string;
  ownerNameList?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList;
  logic?: boolean;
  schemaName?: string;
  searchName?: string;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      ownerIdList: 'OwnerIdList',
      dbType: 'DbType',
      ownerNameList: 'OwnerNameList',
      logic: 'Logic',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      ownerIdList: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList,
      dbType: 'string',
      ownerNameList: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList,
      logic: 'boolean',
      schemaName: 'string',
      searchName: 'string',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBodyLogicDatabaseList extends $tea.Model {
  logicDatabase?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase[];
  static names(): { [key: string]: string } {
    return {
      logicDatabase: 'LogicDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicDatabase: { 'type': 'array', 'itemType': ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponseBodyOrdersOrder extends $tea.Model {
  comment?: string;
  lastModifyTime?: string;
  statusCode?: string;
  createTime?: string;
  committer?: string;
  committerId?: number;
  statusDesc?: string;
  pluginType?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      lastModifyTime: 'LastModifyTime',
      statusCode: 'StatusCode',
      createTime: 'CreateTime',
      committer: 'Committer',
      committerId: 'CommitterId',
      statusDesc: 'StatusDesc',
      pluginType: 'PluginType',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      lastModifyTime: 'string',
      statusCode: 'string',
      createTime: 'string',
      committer: 'string',
      committerId: 'number',
      statusDesc: 'string',
      pluginType: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponseBodyOrders extends $tea.Model {
  order?: ListOrdersResponseBodyOrdersOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': ListOrdersResponseBodyOrdersOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList extends $tea.Model {
  userNicks?: string[];
  static names(): { [key: string]: string } {
    return {
      userNicks: 'UserNicks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userNicks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList extends $tea.Model {
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponseBodyOrderBaseInfo extends $tea.Model {
  relatedUserNickList?: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList;
  comment?: string;
  createTime?: string;
  committer?: string;
  workflowInstanceId?: number;
  committerId?: number;
  lastModifyTime?: string;
  statusCode?: string;
  relatedUserList?: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList;
  workflowStatusDesc?: string;
  statusDesc?: string;
  pluginType?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      relatedUserNickList: 'RelatedUserNickList',
      comment: 'Comment',
      createTime: 'CreateTime',
      committer: 'Committer',
      workflowInstanceId: 'WorkflowInstanceId',
      committerId: 'CommitterId',
      lastModifyTime: 'LastModifyTime',
      statusCode: 'StatusCode',
      relatedUserList: 'RelatedUserList',
      workflowStatusDesc: 'WorkflowStatusDesc',
      statusDesc: 'StatusDesc',
      pluginType: 'PluginType',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedUserNickList: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList,
      comment: 'string',
      createTime: 'string',
      committer: 'string',
      workflowInstanceId: 'number',
      committerId: 'number',
      lastModifyTime: 'string',
      statusCode: 'string',
      relatedUserList: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList,
      workflowStatusDesc: 'string',
      statusDesc: 'string',
      pluginType: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTenantsResponseBodyTenantList extends $tea.Model {
  status?: string;
  tid?: number;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tid: 'Tid',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tid: 'number',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicDatabaseResponseBodyLogicDatabase extends $tea.Model {
  databaseId?: string;
  ownerIdList?: GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList;
  dbType?: string;
  ownerNameList?: GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList;
  logic?: boolean;
  schemaName?: string;
  searchName?: string;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      ownerIdList: 'OwnerIdList',
      dbType: 'DbType',
      ownerNameList: 'OwnerNameList',
      logic: 'Logic',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      ownerIdList: GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList,
      dbType: 'string',
      ownerNameList: GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList,
      logic: 'boolean',
      schemaName: 'string',
      searchName: 'string',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles extends $tea.Model {
  fileUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequestParamSource extends $tea.Model {
  dbId?: number;
  dbSearchName?: string;
  logic?: boolean;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbSearchName: 'DbSearchName',
      logic: 'Logic',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbSearchName: 'string',
      logic: 'boolean',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequestParamTarget extends $tea.Model {
  dbId?: number;
  dbSearchName?: string;
  logic?: boolean;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbSearchName: 'DbSearchName',
      logic: 'Logic',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbSearchName: 'string',
      logic: 'boolean',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequestParamTableInfoList extends $tea.Model {
  sourceTableName?: string;
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequestParam extends $tea.Model {
  source?: CreateStructSyncOrderRequestParamSource;
  target?: CreateStructSyncOrderRequestParamTarget;
  ignoreError?: boolean;
  tableInfoList?: CreateStructSyncOrderRequestParamTableInfoList[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      ignoreError: 'IgnoreError',
      tableInfoList: 'TableInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: CreateStructSyncOrderRequestParamSource,
      target: CreateStructSyncOrderRequestParamTarget,
      ignoreError: 'boolean',
      tableInfoList: { 'type': 'array', 'itemType': CreateStructSyncOrderRequestParamTableInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyTableListTableOwnerIdList extends $tea.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyTableListTableOwnerNameList extends $tea.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyTableListTable extends $tea.Model {
  databaseId?: string;
  tableName?: string;
  storeCapacity?: number;
  ownerIdList?: ListTablesResponseBodyTableListTableOwnerIdList;
  description?: string;
  encoding?: string;
  ownerNameList?: ListTablesResponseBodyTableListTableOwnerNameList;
  tableSchemaName?: string;
  tableType?: string;
  tableGuid?: string;
  engine?: string;
  numRows?: number;
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      tableName: 'TableName',
      storeCapacity: 'StoreCapacity',
      ownerIdList: 'OwnerIdList',
      description: 'Description',
      encoding: 'Encoding',
      ownerNameList: 'OwnerNameList',
      tableSchemaName: 'TableSchemaName',
      tableType: 'TableType',
      tableGuid: 'TableGuid',
      engine: 'Engine',
      numRows: 'NumRows',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      tableName: 'string',
      storeCapacity: 'number',
      ownerIdList: ListTablesResponseBodyTableListTableOwnerIdList,
      description: 'string',
      encoding: 'string',
      ownerNameList: ListTablesResponseBodyTableListTableOwnerNameList,
      tableSchemaName: 'string',
      tableType: 'string',
      tableGuid: 'string',
      engine: 'string',
      numRows: 'number',
      tableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyTableList extends $tea.Model {
  table?: ListTablesResponseBodyTableListTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': ListTablesResponseBodyTableListTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsersAuditUser extends $tea.Model {
  realName?: string;
  userId?: number;
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      realName: 'RealName',
      userId: 'UserId',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realName: 'string',
      userId: 'number',
      nickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers extends $tea.Model {
  auditUser?: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsersAuditUser[];
  static names(): { [key: string]: string } {
    return {
      auditUser: 'AuditUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUser: { 'type': 'array', 'itemType': ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsersAuditUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode extends $tea.Model {
  comment?: string;
  createUserNickName?: string;
  nodeType?: string;
  nodeName?: string;
  auditUsers?: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers;
  createUserId?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createUserNickName: 'CreateUserNickName',
      nodeType: 'NodeType',
      nodeName: 'NodeName',
      auditUsers: 'AuditUsers',
      createUserId: 'CreateUserId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createUserNickName: 'string',
      nodeType: 'string',
      nodeName: 'string',
      auditUsers: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers,
      createUserId: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesResponseBodyWorkflowNodes extends $tea.Model {
  workflowNode?: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode[];
  static names(): { [key: string]: string } {
    return {
      workflowNode: 'WorkflowNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNode: { 'type': 'array', 'itemType': ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo extends $tea.Model {
  dbId?: number;
  searchName?: string;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      searchName: 'SearchName',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      searchName: 'string',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo extends $tea.Model {
  dbId?: number;
  searchName?: string;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      searchName: 'SearchName',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      searchName: 'string',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList extends $tea.Model {
  sourceTableName?: string;
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail extends $tea.Model {
  sourceDatabaseInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo;
  targetDatabaseInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo;
  sourceType?: string;
  sourceVersionInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo;
  targetType?: string;
  targetVersionInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo;
  tableInfoList?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList[];
  ignoreError?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceDatabaseInfo: 'SourceDatabaseInfo',
      targetDatabaseInfo: 'TargetDatabaseInfo',
      sourceType: 'SourceType',
      sourceVersionInfo: 'SourceVersionInfo',
      targetType: 'TargetType',
      targetVersionInfo: 'TargetVersionInfo',
      tableInfoList: 'TableInfoList',
      ignoreError: 'IgnoreError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDatabaseInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo,
      targetDatabaseInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo,
      sourceType: 'string',
      sourceVersionInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo,
      targetType: 'string',
      targetVersionInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo,
      tableInfoList: { 'type': 'array', 'itemType': GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList },
      ignoreError: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail extends $tea.Model {
  dbId?: number;
  columnName?: string;
  columnDescription?: string;
  tableName?: string;
  dbType?: string;
  columnType?: string;
  logic?: boolean;
  schemaName?: string;
  searchName?: string;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      columnName: 'ColumnName',
      columnDescription: 'ColumnDescription',
      tableName: 'TableName',
      dbType: 'DbType',
      columnType: 'ColumnType',
      logic: 'Logic',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      columnName: 'string',
      columnDescription: 'string',
      tableName: 'string',
      dbType: 'string',
      columnType: 'string',
      logic: 'boolean',
      schemaName: 'string',
      searchName: 'string',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList extends $tea.Model {
  sensitiveColumnsDetail?: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail[];
  static names(): { [key: string]: string } {
    return {
      sensitiveColumnsDetail: 'SensitiveColumnsDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveColumnsDetail: { 'type': 'array', 'itemType': ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncExecSqlDetailResponseBodyStructSyncExecSqlDetail extends $tea.Model {
  totalSqlCount?: number;
  execSql?: string;
  static names(): { [key: string]: string } {
    return {
      totalSqlCount: 'TotalSqlCount',
      execSql: 'ExecSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalSqlCount: 'number',
      execSql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList extends $tea.Model {
  tableName?: string;
  tableType?: string;
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableType: 'TableType',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableType: 'string',
      tableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList extends $tea.Model {
  dbId?: string;
  dbName?: string;
  dbType?: string;
  tableList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList[];
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbName: 'DbName',
      dbType: 'DbType',
      tableList: 'TableList',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dbName: 'string',
      dbType: 'string',
      tableList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList },
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBodyDBTopologyDataSourceList extends $tea.Model {
  sid?: string;
  host?: string;
  dbType?: string;
  databaseList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList[];
  port?: number;
  static names(): { [key: string]: string } {
    return {
      sid: 'Sid',
      host: 'Host',
      dbType: 'DbType',
      databaseList: 'DatabaseList',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sid: 'string',
      host: 'string',
      dbType: 'string',
      databaseList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList },
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBodyDBTopology extends $tea.Model {
  tableName?: string;
  dataSourceList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceList[];
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      dataSourceList: 'DataSourceList',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      dataSourceList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceList },
      tableGuid: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dms-enterprise", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async submitStructSyncOrderApprovalWithOptions(request: SubmitStructSyncOrderApprovalRequest, runtime: $Util.RuntimeOptions): Promise<SubmitStructSyncOrderApprovalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitStructSyncOrderApprovalResponse>(await this.doRPCRequest("SubmitStructSyncOrderApproval", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitStructSyncOrderApprovalResponse({}));
  }

  async submitStructSyncOrderApproval(request: SubmitStructSyncOrderApprovalRequest): Promise<SubmitStructSyncOrderApprovalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitStructSyncOrderApprovalWithOptions(request, runtime);
  }

  async listDatabaseUserPermssionsWithOptions(request: ListDatabaseUserPermssionsRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabaseUserPermssionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDatabaseUserPermssionsResponse>(await this.doRPCRequest("ListDatabaseUserPermssions", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDatabaseUserPermssionsResponse({}));
  }

  async listDatabaseUserPermssions(request: ListDatabaseUserPermssionsRequest): Promise<ListDatabaseUserPermssionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabaseUserPermssionsWithOptions(request, runtime);
  }

  async listSensitiveColumnsWithOptions(request: ListSensitiveColumnsRequest, runtime: $Util.RuntimeOptions): Promise<ListSensitiveColumnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSensitiveColumnsResponse>(await this.doRPCRequest("ListSensitiveColumns", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSensitiveColumnsResponse({}));
  }

  async listSensitiveColumns(request: ListSensitiveColumnsRequest): Promise<ListSensitiveColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSensitiveColumnsWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async submitOrderApprovalWithOptions(request: SubmitOrderApprovalRequest, runtime: $Util.RuntimeOptions): Promise<SubmitOrderApprovalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitOrderApprovalResponse>(await this.doRPCRequest("SubmitOrderApproval", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitOrderApprovalResponse({}));
  }

  async submitOrderApproval(request: SubmitOrderApprovalRequest): Promise<SubmitOrderApprovalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOrderApprovalWithOptions(request, runtime);
  }

  async grantUserPermissionWithOptions(request: GrantUserPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantUserPermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantUserPermissionResponse>(await this.doRPCRequest("GrantUserPermission", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GrantUserPermissionResponse({}));
  }

  async grantUserPermission(request: GrantUserPermissionRequest): Promise<GrantUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantUserPermissionWithOptions(request, runtime);
  }

  async getMetaTableDetailInfoWithOptions(request: GetMetaTableDetailInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableDetailInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaTableDetailInfoResponse>(await this.doRPCRequest("GetMetaTableDetailInfo", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaTableDetailInfoResponse({}));
  }

  async getMetaTableDetailInfo(request: GetMetaTableDetailInfoRequest): Promise<GetMetaTableDetailInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableDetailInfoWithOptions(request, runtime);
  }

  async getDataCorrectSQLFileWithOptions(request: GetDataCorrectSQLFileRequest, runtime: $Util.RuntimeOptions): Promise<GetDataCorrectSQLFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataCorrectSQLFileResponse>(await this.doRPCRequest("GetDataCorrectSQLFile", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataCorrectSQLFileResponse({}));
  }

  async getDataCorrectSQLFile(request: GetDataCorrectSQLFileRequest): Promise<GetDataCorrectSQLFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataCorrectSQLFileWithOptions(request, runtime);
  }

  async createOrderWithOptions(tmpReq: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.pluginParam)) {
      request.pluginParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pluginParam, "PluginParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOrderResponse>(await this.doRPCRequest("CreateOrder", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOrderResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  async listDatabasesWithOptions(request: ListDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabasesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDatabasesResponse>(await this.doRPCRequest("ListDatabases", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDatabasesResponse({}));
  }

  async listDatabases(request: ListDatabasesRequest): Promise<ListDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabasesWithOptions(request, runtime);
  }

  async listUserPermissionsWithOptions(request: ListUserPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserPermissionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserPermissionsResponse>(await this.doRPCRequest("ListUserPermissions", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserPermissionsResponse({}));
  }

  async listUserPermissions(request: ListUserPermissionsRequest): Promise<ListUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserPermissionsWithOptions(request, runtime);
  }

  async listWorkFlowTemplatesWithOptions(request: ListWorkFlowTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkFlowTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListWorkFlowTemplatesResponse>(await this.doRPCRequest("ListWorkFlowTemplates", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListWorkFlowTemplatesResponse({}));
  }

  async listWorkFlowTemplates(request: ListWorkFlowTemplatesRequest): Promise<ListWorkFlowTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkFlowTemplatesWithOptions(request, runtime);
  }

  async getDataExportOrderDetailWithOptions(request: GetDataExportOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDataExportOrderDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataExportOrderDetailResponse>(await this.doRPCRequest("GetDataExportOrderDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataExportOrderDetailResponse({}));
  }

  async getDataExportOrderDetail(request: GetDataExportOrderDetailRequest): Promise<GetDataExportOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataExportOrderDetailWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstancesResponse>(await this.doRPCRequest("ListInstances", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async getUserUploadFileJobWithOptions(request: GetUserUploadFileJobRequest, runtime: $Util.RuntimeOptions): Promise<GetUserUploadFileJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserUploadFileJobResponse>(await this.doRPCRequest("GetUserUploadFileJob", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserUploadFileJobResponse({}));
  }

  async getUserUploadFileJob(request: GetUserUploadFileJobRequest): Promise<GetUserUploadFileJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserUploadFileJobWithOptions(request, runtime);
  }

  async getStructSyncJobDetailWithOptions(request: GetStructSyncJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetStructSyncJobDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStructSyncJobDetailResponse>(await this.doRPCRequest("GetStructSyncJobDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetStructSyncJobDetailResponse({}));
  }

  async getStructSyncJobDetail(request: GetStructSyncJobDetailRequest): Promise<GetStructSyncJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStructSyncJobDetailWithOptions(request, runtime);
  }

  async createUploadOSSFileJobWithOptions(tmpReq: CreateUploadOSSFileJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadOSSFileJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateUploadOSSFileJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.uploadTarget))) {
      request.uploadTargetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.uploadTarget), "UploadTarget", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUploadOSSFileJobResponse>(await this.doRPCRequest("CreateUploadOSSFileJob", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUploadOSSFileJobResponse({}));
  }

  async createUploadOSSFileJob(request: CreateUploadOSSFileJobRequest): Promise<CreateUploadOSSFileJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadOSSFileJobWithOptions(request, runtime);
  }

  async searchDatabaseWithOptions(request: SearchDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<SearchDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchDatabaseResponse>(await this.doRPCRequest("SearchDatabase", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchDatabaseResponse({}));
  }

  async searchDatabase(request: SearchDatabaseRequest): Promise<SearchDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchDatabaseWithOptions(request, runtime);
  }

  async syncDatabaseMetaWithOptions(request: SyncDatabaseMetaRequest, runtime: $Util.RuntimeOptions): Promise<SyncDatabaseMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncDatabaseMetaResponse>(await this.doRPCRequest("SyncDatabaseMeta", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SyncDatabaseMetaResponse({}));
  }

  async syncDatabaseMeta(request: SyncDatabaseMetaRequest): Promise<SyncDatabaseMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncDatabaseMetaWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserResponse>(await this.doRPCRequest("GetUser", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async executeStructSyncWithOptions(request: ExecuteStructSyncRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteStructSyncResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteStructSyncResponse>(await this.doRPCRequest("ExecuteStructSync", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteStructSyncResponse({}));
  }

  async executeStructSync(request: ExecuteStructSyncRequest): Promise<ExecuteStructSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeStructSyncWithOptions(request, runtime);
  }

  async getDataCorrectOrderDetailWithOptions(request: GetDataCorrectOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDataCorrectOrderDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataCorrectOrderDetailResponse>(await this.doRPCRequest("GetDataCorrectOrderDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataCorrectOrderDetailResponse({}));
  }

  async getDataCorrectOrderDetail(request: GetDataCorrectOrderDetailRequest): Promise<GetDataCorrectOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataCorrectOrderDetailWithOptions(request, runtime);
  }

  async listColumnsWithOptions(request: ListColumnsRequest, runtime: $Util.RuntimeOptions): Promise<ListColumnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListColumnsResponse>(await this.doRPCRequest("ListColumns", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListColumnsResponse({}));
  }

  async listColumns(request: ListColumnsRequest): Promise<ListColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listColumnsWithOptions(request, runtime);
  }

  async revokeUserPermissionWithOptions(request: RevokeUserPermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeUserPermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeUserPermissionResponse>(await this.doRPCRequest("RevokeUserPermission", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeUserPermissionResponse({}));
  }

  async revokeUserPermission(request: RevokeUserPermissionRequest): Promise<RevokeUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeUserPermissionWithOptions(request, runtime);
  }

  async getMetaTableColumnWithOptions(request: GetMetaTableColumnRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableColumnResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetaTableColumnResponse>(await this.doRPCRequest("GetMetaTableColumn", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetaTableColumnResponse({}));
  }

  async getMetaTableColumn(request: GetMetaTableColumnRequest): Promise<GetMetaTableColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableColumnWithOptions(request, runtime);
  }

  async enableUserWithOptions(request: EnableUserRequest, runtime: $Util.RuntimeOptions): Promise<EnableUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableUserResponse>(await this.doRPCRequest("EnableUser", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableUserResponse({}));
  }

  async enableUser(request: EnableUserRequest): Promise<EnableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableUserWithOptions(request, runtime);
  }

  async updateInstanceWithOptions(request: UpdateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateInstanceResponse>(await this.doRPCRequest("UpdateInstance", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateInstanceResponse({}));
  }

  async updateInstance(request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  async executeScriptWithOptions(request: ExecuteScriptRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteScriptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteScriptResponse>(await this.doRPCRequest("ExecuteScript", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteScriptResponse({}));
  }

  async executeScript(request: ExecuteScriptRequest): Promise<ExecuteScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeScriptWithOptions(request, runtime);
  }

  async listDBTaskSQLJobDetailWithOptions(request: ListDBTaskSQLJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListDBTaskSQLJobDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDBTaskSQLJobDetailResponse>(await this.doRPCRequest("ListDBTaskSQLJobDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDBTaskSQLJobDetailResponse({}));
  }

  async listDBTaskSQLJobDetail(request: ListDBTaskSQLJobDetailRequest): Promise<ListDBTaskSQLJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDBTaskSQLJobDetailWithOptions(request, runtime);
  }

  async disableUserWithOptions(request: DisableUserRequest, runtime: $Util.RuntimeOptions): Promise<DisableUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableUserResponse>(await this.doRPCRequest("DisableUser", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableUserResponse({}));
  }

  async disableUser(request: DisableUserRequest): Promise<DisableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableUserWithOptions(request, runtime);
  }

  async getApprovalDetailWithOptions(request: GetApprovalDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetApprovalDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetApprovalDetailResponse>(await this.doRPCRequest("GetApprovalDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetApprovalDetailResponse({}));
  }

  async getApprovalDetail(request: GetApprovalDetailRequest): Promise<GetApprovalDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApprovalDetailWithOptions(request, runtime);
  }

  async getUserActiveTenantWithOptions(runtime: $Util.RuntimeOptions): Promise<GetUserActiveTenantResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetUserActiveTenantResponse>(await this.doRPCRequest("GetUserActiveTenant", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserActiveTenantResponse({}));
  }

  async getUserActiveTenant(): Promise<GetUserActiveTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserActiveTenantWithOptions(runtime);
  }

  async registerUserWithOptions(request: RegisterUserRequest, runtime: $Util.RuntimeOptions): Promise<RegisterUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterUserResponse>(await this.doRPCRequest("RegisterUser", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterUserResponse({}));
  }

  async registerUser(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerUserWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceResponse>(await this.doRPCRequest("GetInstance", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getPermApplyOrderDetailWithOptions(request: GetPermApplyOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetPermApplyOrderDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPermApplyOrderDetailResponse>(await this.doRPCRequest("GetPermApplyOrderDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetPermApplyOrderDetailResponse({}));
  }

  async getPermApplyOrderDetail(request: GetPermApplyOrderDetailRequest): Promise<GetPermApplyOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermApplyOrderDetailWithOptions(request, runtime);
  }

  async listIndexesWithOptions(request: ListIndexesRequest, runtime: $Util.RuntimeOptions): Promise<ListIndexesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIndexesResponse>(await this.doRPCRequest("ListIndexes", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListIndexesResponse({}));
  }

  async listIndexes(request: ListIndexesRequest): Promise<ListIndexesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIndexesWithOptions(request, runtime);
  }

  async listLogicTablesWithOptions(request: ListLogicTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListLogicTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLogicTablesResponse>(await this.doRPCRequest("ListLogicTables", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListLogicTablesResponse({}));
  }

  async listLogicTables(request: ListLogicTablesRequest): Promise<ListLogicTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLogicTablesWithOptions(request, runtime);
  }

  async getDataExportDownloadURLWithOptions(request: GetDataExportDownloadURLRequest, runtime: $Util.RuntimeOptions): Promise<GetDataExportDownloadURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataExportDownloadURLResponse>(await this.doRPCRequest("GetDataExportDownloadURL", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataExportDownloadURLResponse({}));
  }

  async getDataExportDownloadURL(request: GetDataExportDownloadURLRequest): Promise<GetDataExportDownloadURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataExportDownloadURLWithOptions(request, runtime);
  }

  async createPublishGroupTaskWithOptions(request: CreatePublishGroupTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreatePublishGroupTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePublishGroupTaskResponse>(await this.doRPCRequest("CreatePublishGroupTask", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePublishGroupTaskResponse({}));
  }

  async createPublishGroupTask(request: CreatePublishGroupTaskRequest): Promise<CreatePublishGroupTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPublishGroupTaskWithOptions(request, runtime);
  }

  async getDatabaseWithOptions(request: GetDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<GetDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDatabaseResponse>(await this.doRPCRequest("GetDatabase", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDatabaseResponse({}));
  }

  async getDatabase(request: GetDatabaseRequest): Promise<GetDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatabaseWithOptions(request, runtime);
  }

  async getOwnerApplyOrderDetailWithOptions(request: GetOwnerApplyOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetOwnerApplyOrderDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOwnerApplyOrderDetailResponse>(await this.doRPCRequest("GetOwnerApplyOrderDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetOwnerApplyOrderDetailResponse({}));
  }

  async getOwnerApplyOrderDetail(request: GetOwnerApplyOrderDetailRequest): Promise<GetOwnerApplyOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOwnerApplyOrderDetailWithOptions(request, runtime);
  }

  async getOpLogWithOptions(request: GetOpLogRequest, runtime: $Util.RuntimeOptions): Promise<GetOpLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOpLogResponse>(await this.doRPCRequest("GetOpLog", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetOpLogResponse({}));
  }

  async getOpLog(request: GetOpLogRequest): Promise<GetOpLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpLogWithOptions(request, runtime);
  }

  async searchTableWithOptions(request: SearchTableRequest, runtime: $Util.RuntimeOptions): Promise<SearchTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchTableResponse>(await this.doRPCRequest("SearchTable", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchTableResponse({}));
  }

  async searchTable(request: SearchTableRequest): Promise<SearchTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTableWithOptions(request, runtime);
  }

  async listDBTaskSQLJobWithOptions(request: ListDBTaskSQLJobRequest, runtime: $Util.RuntimeOptions): Promise<ListDBTaskSQLJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDBTaskSQLJobResponse>(await this.doRPCRequest("ListDBTaskSQLJob", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDBTaskSQLJobResponse({}));
  }

  async listDBTaskSQLJob(request: ListDBTaskSQLJobRequest): Promise<ListDBTaskSQLJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDBTaskSQLJobWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async getStructSyncJobAnalyzeResultWithOptions(request: GetStructSyncJobAnalyzeResultRequest, runtime: $Util.RuntimeOptions): Promise<GetStructSyncJobAnalyzeResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStructSyncJobAnalyzeResultResponse>(await this.doRPCRequest("GetStructSyncJobAnalyzeResult", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetStructSyncJobAnalyzeResultResponse({}));
  }

  async getStructSyncJobAnalyzeResult(request: GetStructSyncJobAnalyzeResultRequest): Promise<GetStructSyncJobAnalyzeResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStructSyncJobAnalyzeResultWithOptions(request, runtime);
  }

  async approveOrderWithOptions(request: ApproveOrderRequest, runtime: $Util.RuntimeOptions): Promise<ApproveOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApproveOrderResponse>(await this.doRPCRequest("ApproveOrder", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ApproveOrderResponse({}));
  }

  async approveOrder(request: ApproveOrderRequest): Promise<ApproveOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveOrderWithOptions(request, runtime);
  }

  async createUploadFileJobWithOptions(request: CreateUploadFileJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadFileJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUploadFileJobResponse>(await this.doRPCRequest("CreateUploadFileJob", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUploadFileJobResponse({}));
  }

  async createUploadFileJob(request: CreateUploadFileJobRequest): Promise<CreateUploadFileJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadFileJobWithOptions(request, runtime);
  }

  async listLogicDatabasesWithOptions(request: ListLogicDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<ListLogicDatabasesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLogicDatabasesResponse>(await this.doRPCRequest("ListLogicDatabases", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListLogicDatabasesResponse({}));
  }

  async listLogicDatabases(request: ListLogicDatabasesRequest): Promise<ListLogicDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLogicDatabasesWithOptions(request, runtime);
  }

  async closeOrderWithOptions(request: CloseOrderRequest, runtime: $Util.RuntimeOptions): Promise<CloseOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloseOrderResponse>(await this.doRPCRequest("CloseOrder", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CloseOrderResponse({}));
  }

  async closeOrder(request: CloseOrderRequest): Promise<CloseOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeOrderWithOptions(request, runtime);
  }

  async syncInstanceMetaWithOptions(request: SyncInstanceMetaRequest, runtime: $Util.RuntimeOptions): Promise<SyncInstanceMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncInstanceMetaResponse>(await this.doRPCRequest("SyncInstanceMeta", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SyncInstanceMetaResponse({}));
  }

  async syncInstanceMeta(request: SyncInstanceMetaRequest): Promise<SyncInstanceMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncInstanceMetaWithOptions(request, runtime);
  }

  async listOrdersWithOptions(request: ListOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListOrdersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrdersResponse>(await this.doRPCRequest("ListOrders", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrdersResponse({}));
  }

  async listOrders(request: ListOrdersRequest): Promise<ListOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrdersWithOptions(request, runtime);
  }

  async getOrderBaseInfoWithOptions(request: GetOrderBaseInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetOrderBaseInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOrderBaseInfoResponse>(await this.doRPCRequest("GetOrderBaseInfo", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetOrderBaseInfoResponse({}));
  }

  async getOrderBaseInfo(request: GetOrderBaseInfoRequest): Promise<GetOrderBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrderBaseInfoWithOptions(request, runtime);
  }

  async listUserTenantsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListUserTenantsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListUserTenantsResponse>(await this.doRPCRequest("ListUserTenants", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserTenantsResponse({}));
  }

  async listUserTenants(): Promise<ListUserTenantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserTenantsWithOptions(runtime);
  }

  async setOwnersWithOptions(request: SetOwnersRequest, runtime: $Util.RuntimeOptions): Promise<SetOwnersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetOwnersResponse>(await this.doRPCRequest("SetOwners", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetOwnersResponse({}));
  }

  async setOwners(request: SetOwnersRequest): Promise<SetOwnersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setOwnersWithOptions(request, runtime);
  }

  async getLogicDatabaseWithOptions(request: GetLogicDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<GetLogicDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogicDatabaseResponse>(await this.doRPCRequest("GetLogicDatabase", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogicDatabaseResponse({}));
  }

  async getLogicDatabase(request: GetLogicDatabaseRequest): Promise<GetLogicDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogicDatabaseWithOptions(request, runtime);
  }

  async getDataCorrectBackupFilesWithOptions(tmpReq: GetDataCorrectBackupFilesRequest, runtime: $Util.RuntimeOptions): Promise<GetDataCorrectBackupFilesResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDataCorrectBackupFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataCorrectBackupFilesResponse>(await this.doRPCRequest("GetDataCorrectBackupFiles", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataCorrectBackupFilesResponse({}));
  }

  async getDataCorrectBackupFiles(request: GetDataCorrectBackupFilesRequest): Promise<GetDataCorrectBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataCorrectBackupFilesWithOptions(request, runtime);
  }

  async registerInstanceWithOptions(request: RegisterInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterInstanceResponse>(await this.doRPCRequest("RegisterInstance", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterInstanceResponse({}));
  }

  async registerInstance(request: RegisterInstanceRequest): Promise<RegisterInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerInstanceWithOptions(request, runtime);
  }

  async createStructSyncOrderWithOptions(tmpReq: CreateStructSyncOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateStructSyncOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStructSyncOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.param))) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.param), "Param", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStructSyncOrderResponse>(await this.doRPCRequest("CreateStructSyncOrder", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStructSyncOrderResponse({}));
  }

  async createStructSyncOrder(request: CreateStructSyncOrderRequest): Promise<CreateStructSyncOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStructSyncOrderWithOptions(request, runtime);
  }

  async executeDataExportWithOptions(tmpReq: ExecuteDataExportRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteDataExportResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteDataExportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteDataExportResponse>(await this.doRPCRequest("ExecuteDataExport", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteDataExportResponse({}));
  }

  async executeDataExport(request: ExecuteDataExportRequest): Promise<ExecuteDataExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeDataExportWithOptions(request, runtime);
  }

  async executeDataCorrectWithOptions(tmpReq: ExecuteDataCorrectRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteDataCorrectResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteDataCorrectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteDataCorrectResponse>(await this.doRPCRequest("ExecuteDataCorrect", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteDataCorrectResponse({}));
  }

  async executeDataCorrect(request: ExecuteDataCorrectRequest): Promise<ExecuteDataCorrectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeDataCorrectWithOptions(request, runtime);
  }

  async listTablesWithOptions(request: ListTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTablesResponse>(await this.doRPCRequest("ListTables", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTablesResponse({}));
  }

  async listTables(request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  async listWorkFlowNodesWithOptions(request: ListWorkFlowNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkFlowNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListWorkFlowNodesResponse>(await this.doRPCRequest("ListWorkFlowNodes", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListWorkFlowNodesResponse({}));
  }

  async listWorkFlowNodes(request: ListWorkFlowNodesRequest): Promise<ListWorkFlowNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkFlowNodesWithOptions(request, runtime);
  }

  async getStructSyncOrderDetailWithOptions(request: GetStructSyncOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetStructSyncOrderDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStructSyncOrderDetailResponse>(await this.doRPCRequest("GetStructSyncOrderDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetStructSyncOrderDetailResponse({}));
  }

  async getStructSyncOrderDetail(request: GetStructSyncOrderDetailRequest): Promise<GetStructSyncOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStructSyncOrderDetailWithOptions(request, runtime);
  }

  async listSensitiveColumnsDetailWithOptions(request: ListSensitiveColumnsDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListSensitiveColumnsDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSensitiveColumnsDetailResponse>(await this.doRPCRequest("ListSensitiveColumnsDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSensitiveColumnsDetailResponse({}));
  }

  async listSensitiveColumnsDetail(request: ListSensitiveColumnsDetailRequest): Promise<ListSensitiveColumnsDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSensitiveColumnsDetailWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserResponse>(await this.doRPCRequest("UpdateUser", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  async getStructSyncExecSqlDetailWithOptions(request: GetStructSyncExecSqlDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetStructSyncExecSqlDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStructSyncExecSqlDetailResponse>(await this.doRPCRequest("GetStructSyncExecSqlDetail", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetStructSyncExecSqlDetailResponse({}));
  }

  async getStructSyncExecSqlDetail(request: GetStructSyncExecSqlDetailRequest): Promise<GetStructSyncExecSqlDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStructSyncExecSqlDetailWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async getTableDBTopologyWithOptions(request: GetTableDBTopologyRequest, runtime: $Util.RuntimeOptions): Promise<GetTableDBTopologyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTableDBTopologyResponse>(await this.doRPCRequest("GetTableDBTopology", "2018-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetTableDBTopologyResponse({}));
  }

  async getTableDBTopology(request: GetTableDBTopologyRequest): Promise<GetTableDBTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableDBTopologyWithOptions(request, runtime);
  }

}
