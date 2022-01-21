// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddLogicTableRouteConfigRequest extends $tea.Model {
  routeExpr?: string;
  routeKey?: string;
  tableId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      routeExpr: 'RouteExpr',
      routeKey: 'RouteKey',
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeExpr: 'string',
      routeKey: 'string',
      tableId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLogicTableRouteConfigResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLogicTableRouteConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLogicTableRouteConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLogicTableRouteConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOrderRequest extends $tea.Model {
  approvalType?: string;
  comment?: string;
  tid?: number;
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      comment: 'Comment',
      tid: 'Tid',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'string',
      comment: 'string',
      tid: 'number',
      workflowInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOrderResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class ChangeColumnSecLevelRequest extends $tea.Model {
  columnName?: string;
  dbId?: number;
  isLogic?: boolean;
  newLevel?: string;
  schemaName?: string;
  tableName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      isLogic: 'IsLogic',
      newLevel: 'NewLevel',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      isLogic: 'boolean',
      newLevel: 'string',
      schemaName: 'string',
      tableName: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeColumnSecLevelResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeColumnSecLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeColumnSecLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeColumnSecLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseOrderRequest extends $tea.Model {
  closeReason?: string;
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      closeReason: 'CloseReason',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeReason: 'string',
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseOrderResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class CreateDataCorrectOrderRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  param?: CreateDataCorrectOrderRequestParam;
  relatedUserList?: number[];
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateDataCorrectOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCorrectOrderShrinkRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  paramShrink?: string;
  relatedUserListShrink?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCorrectOrderResponseBody extends $tea.Model {
  createOrderResult?: number[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCorrectOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataCorrectOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataCorrectOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  param?: CreateDataCronClearOrderRequestParam;
  relatedUserList?: number[];
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateDataCronClearOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderShrinkRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  paramShrink?: string;
  relatedUserListShrink?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderResponseBody extends $tea.Model {
  createOrderResult?: number[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataCronClearOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataCronClearOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataImportOrderRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  param?: CreateDataImportOrderRequestParam;
  relatedUserList?: number[];
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateDataImportOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataImportOrderShrinkRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  paramShrink?: string;
  relatedUserListShrink?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataImportOrderResponseBody extends $tea.Model {
  createOrderResult?: number[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataImportOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataImportOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataImportOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFreeLockCorrectOrderRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  param?: CreateFreeLockCorrectOrderRequestParam;
  relatedUserList?: number[];
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateFreeLockCorrectOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFreeLockCorrectOrderShrinkRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  paramShrink?: string;
  relatedUserListShrink?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFreeLockCorrectOrderResponseBody extends $tea.Model {
  createOrderResult?: number[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFreeLockCorrectOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFreeLockCorrectOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFreeLockCorrectOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogicDatabaseRequest extends $tea.Model {
  alias?: string;
  databaseIds?: number[];
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseIds: 'DatabaseIds',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseIds: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogicDatabaseShrinkRequest extends $tea.Model {
  alias?: string;
  databaseIdsShrink?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseIdsShrink: 'DatabaseIds',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseIdsShrink: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogicDatabaseResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  logicDbId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicDbId: 'LogicDbId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicDbId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogicDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLogicDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLogicDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  pluginParam?: { [key: string]: any };
  pluginType?: string;
  relatedUserList?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      pluginParam: 'PluginParam',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      pluginParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pluginType: 'string',
      relatedUserList: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderShrinkRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  pluginParamShrink?: string;
  pluginType?: string;
  relatedUserList?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      pluginParamShrink: 'PluginParam',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      pluginParamShrink: 'string',
      pluginType: 'string',
      relatedUserList: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  createOrderResult?: CreateOrderResponseBodyCreateOrderResult;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: CreateOrderResponseBodyCreateOrderResult,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class CreateProxyRequest extends $tea.Model {
  instanceId?: number;
  password?: string;
  tid?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      tid: 'Tid',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      password: 'string',
      tid: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProxyResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  proxyId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxyId: 'ProxyId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxyId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProxyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProxyAccessRequest extends $tea.Model {
  indepAccount?: string;
  indepPassword?: string;
  proxyId?: number;
  tid?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      indepAccount: 'IndepAccount',
      indepPassword: 'IndepPassword',
      proxyId: 'ProxyId',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indepAccount: 'string',
      indepPassword: 'string',
      proxyId: 'number',
      tid: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProxyAccessResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  proxyAccessId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxyAccessId: 'ProxyAccessId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxyAccessId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProxyAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProxyAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProxyAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishGroupTaskRequest extends $tea.Model {
  dbId?: number;
  logic?: boolean;
  orderId?: number;
  planTime?: string;
  publishStrategy?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      orderId: 'OrderId',
      planTime: 'PlanTime',
      publishStrategy: 'PublishStrategy',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      orderId: 'number',
      planTime: 'string',
      publishStrategy: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishGroupTaskResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
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

export class CreateSQLReviewOrderRequest extends $tea.Model {
  comment?: string;
  param?: CreateSQLReviewOrderRequestParam;
  relatedUserList?: number[];
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      param: CreateSQLReviewOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSQLReviewOrderShrinkRequest extends $tea.Model {
  comment?: string;
  paramShrink?: string;
  relatedUserListShrink?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSQLReviewOrderResponseBody extends $tea.Model {
  createOrderResult?: number[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSQLReviewOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSQLReviewOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSQLReviewOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  param?: CreateStructSyncOrderRequestParam;
  relatedUserList?: number[];
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateStructSyncOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderShrinkRequest extends $tea.Model {
  attachmentKey?: string;
  comment?: string;
  paramShrink?: string;
  relatedUserListShrink?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderResponseBody extends $tea.Model {
  createOrderResult?: number[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CreateUploadFileJobRequest extends $tea.Model {
  fileName?: string;
  fileSource?: string;
  tid?: number;
  uploadURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSource: 'FileSource',
      tid: 'Tid',
      uploadURL: 'UploadURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSource: 'string',
      tid: 'number',
      uploadURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadFileJobResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  jobKey?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobKey: 'JobKey',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobKey: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CreateUploadOSSFileJobRequest extends $tea.Model {
  fileName?: string;
  fileSource?: string;
  tid?: number;
  uploadTarget?: CreateUploadOSSFileJobRequestUploadTarget;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSource: 'FileSource',
      tid: 'Tid',
      uploadTarget: 'UploadTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSource: 'string',
      tid: 'number',
      uploadTarget: CreateUploadOSSFileJobRequestUploadTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadOSSFileJobShrinkRequest extends $tea.Model {
  fileName?: string;
  fileSource?: string;
  tid?: number;
  uploadTargetShrink?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSource: 'FileSource',
      tid: 'Tid',
      uploadTargetShrink: 'UploadTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSource: 'string',
      tid: 'number',
      uploadTargetShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadOSSFileJobResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  jobKey?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobKey: 'JobKey',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobKey: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class DeleteInstanceRequest extends $tea.Model {
  host?: string;
  port?: number;
  sid?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
      sid: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class DeleteLogicDatabaseRequest extends $tea.Model {
  logicDbId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      logicDbId: 'LogicDbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicDbId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogicDatabaseResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogicDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLogicDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLogicDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogicTableRouteConfigRequest extends $tea.Model {
  routeKey?: string;
  tableId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      routeKey: 'RouteKey',
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeKey: 'string',
      tableId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogicTableRouteConfigResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogicTableRouteConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLogicTableRouteConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLogicTableRouteConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProxyRequest extends $tea.Model {
  proxyId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      proxyId: 'ProxyId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProxyResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProxyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProxyAccessRequest extends $tea.Model {
  proxyAccessId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      proxyAccessId: 'ProxyAccessId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyAccessId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProxyAccessResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProxyAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProxyAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProxyAccessResponseBody,
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
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class EditLogicDatabaseRequest extends $tea.Model {
  alias?: string;
  databaseIds?: number[];
  logicDbId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseIds: 'DatabaseIds',
      logicDbId: 'LogicDbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseIds: { 'type': 'array', 'itemType': 'number' },
      logicDbId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditLogicDatabaseShrinkRequest extends $tea.Model {
  alias?: string;
  databaseIdsShrink?: string;
  logicDbId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseIdsShrink: 'DatabaseIds',
      logicDbId: 'LogicDbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseIdsShrink: 'string',
      logicDbId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditLogicDatabaseResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditLogicDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditLogicDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditLogicDatabaseResponseBody,
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
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class ExecuteDataCorrectRequest extends $tea.Model {
  actionDetail?: { [key: string]: any };
  orderId?: number;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      actionDetail: 'ActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderId: 'number',
      tid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataCorrectShrinkRequest extends $tea.Model {
  actionDetailShrink?: string;
  orderId?: number;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      actionDetailShrink: 'ActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetailShrink: 'string',
      orderId: 'number',
      tid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataCorrectResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class ExecuteDataExportRequest extends $tea.Model {
  actionDetail?: { [key: string]: any };
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      actionDetail: 'ActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataExportShrinkRequest extends $tea.Model {
  actionDetailShrink?: string;
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      actionDetailShrink: 'ActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetailShrink: 'string',
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDataExportResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class ExecuteScriptRequest extends $tea.Model {
  dbId?: number;
  logic?: boolean;
  script?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      script: 'Script',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      script: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScriptResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  results?: ExecuteScriptResponseBodyResults[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      results: 'Results',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ExecuteScriptResponseBodyResults },
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

export class ExecuteStructSyncRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStructSyncResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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
  approvalDetail?: GetApprovalDetailResponseBodyApprovalDetail;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: GetApprovalDetailResponseBodyApprovalDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class GetDBTaskSQLJobLogRequest extends $tea.Model {
  jobId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTaskSQLJobLogResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  log?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      log: 'Log',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      log: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTaskSQLJobLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDBTaskSQLJobLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDBTaskSQLJobLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTopologyRequest extends $tea.Model {
  logicDbId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      logicDbId: 'LogicDbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicDbId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTopologyResponseBody extends $tea.Model {
  DBTopology?: GetDBTopologyResponseBodyDBTopology;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBTopology: 'DBTopology',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTopology: GetDBTopologyResponseBodyDBTopology,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTopologyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDBTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDBTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectBackupFilesRequest extends $tea.Model {
  actionDetail?: { [key: string]: any };
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      actionDetail: 'ActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectBackupFilesShrinkRequest extends $tea.Model {
  actionDetailShrink?: string;
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      actionDetailShrink: 'ActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetailShrink: 'string',
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectBackupFilesResponseBody extends $tea.Model {
  dataCorrectBackupFiles?: GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataCorrectBackupFiles: 'DataCorrectBackupFiles',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCorrectBackupFiles: GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetDataCorrectOrderDetailRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBody extends $tea.Model {
  dataCorrectOrderDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataCorrectOrderDetail: 'DataCorrectOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCorrectOrderDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class GetDataCorrectSQLFileRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectSQLFileResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  fileUrl?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileUrl: 'FileUrl',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      fileUrl: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetDataCorrectTaskDetailRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectTaskDetailResponseBody extends $tea.Model {
  dataCorrectTaskDetail?: GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataCorrectTaskDetail: 'DataCorrectTaskDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCorrectTaskDetail: GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataCorrectTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataCorrectTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCronClearTaskDetailListRequest extends $tea.Model {
  orderId?: number;
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCronClearTaskDetailListResponseBody extends $tea.Model {
  dataCronClearTaskDetailList?: GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataCronClearTaskDetailList: 'DataCronClearTaskDetailList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCronClearTaskDetailList: { 'type': 'array', 'itemType': GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCronClearTaskDetailListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataCronClearTaskDetailListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataCronClearTaskDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportDownloadURLRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportDownloadURLResponseBody extends $tea.Model {
  downloadURLResult?: GetDataExportDownloadURLResponseBodyDownloadURLResult;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      downloadURLResult: 'DownloadURLResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadURLResult: GetDataExportDownloadURLResponseBodyDownloadURLResult,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class GetDataExportOrderDetailRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBody extends $tea.Model {
  dataExportOrderDetail?: GetDataExportOrderDetailResponseBodyDataExportOrderDetail;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExportOrderDetail: 'DataExportOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExportOrderDetail: GetDataExportOrderDetailResponseBodyDataExportOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class GetDatabaseRequest extends $tea.Model {
  host?: string;
  port?: number;
  schemaName?: string;
  sid?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      schemaName: 'SchemaName',
      sid: 'Sid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
      schemaName: 'string',
      sid: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBody extends $tea.Model {
  database?: GetDatabaseResponseBodyDatabase;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: GetDatabaseResponseBodyDatabase,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class GetInstanceRequest extends $tea.Model {
  host?: string;
  port?: number;
  sid?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
      sid: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  instance?: GetInstanceResponseBodyInstance;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instance: 'Instance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instance: GetInstanceResponseBodyInstance,
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

export class GetLogicDatabaseRequest extends $tea.Model {
  dbId?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicDatabaseResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  logicDatabase?: GetLogicDatabaseResponseBodyLogicDatabase;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicDatabase: 'LogicDatabase',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicDatabase: GetLogicDatabaseResponseBodyLogicDatabase,
      requestId: 'string',
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

export class GetMetaTableColumnRequest extends $tea.Model {
  tableGuid?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBody extends $tea.Model {
  columnList?: GetMetaTableColumnResponseBodyColumnList[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': GetMetaTableColumnResponseBodyColumnList },
      errorCode: 'string',
      errorMessage: 'string',
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

export class GetMetaTableDetailInfoRequest extends $tea.Model {
  tableGuid?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBody extends $tea.Model {
  detailInfo?: GetMetaTableDetailInfoResponseBodyDetailInfo;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: GetMetaTableDetailInfoResponseBodyDetailInfo,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class GetOpLogRequest extends $tea.Model {
  endTime?: string;
  module?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      module: 'Module',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      module: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  opLogDetails?: GetOpLogResponseBodyOpLogDetails;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      opLogDetails: 'OpLogDetails',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      opLogDetails: GetOpLogResponseBodyOpLogDetails,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class GetOrderBaseInfoRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  orderBaseInfo?: GetOrderBaseInfoResponseBodyOrderBaseInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      orderBaseInfo: 'OrderBaseInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      orderBaseInfo: GetOrderBaseInfoResponseBodyOrderBaseInfo,
      requestId: 'string',
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

export class GetOwnerApplyOrderDetailRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  ownerApplyOrderDetail?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      ownerApplyOrderDetail: 'OwnerApplyOrderDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      ownerApplyOrderDetail: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail,
      requestId: 'string',
      success: 'boolean',
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

export class GetPermApplyOrderDetailRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  permApplyOrderDetail?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      permApplyOrderDetail: 'PermApplyOrderDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      permApplyOrderDetail: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail,
      requestId: 'string',
      success: 'boolean',
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

export class GetPhysicalDatabaseRequest extends $tea.Model {
  dbId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalDatabaseResponseBody extends $tea.Model {
  database?: GetPhysicalDatabaseResponseBodyDatabase;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: GetPhysicalDatabaseResponseBodyDatabase,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPhysicalDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPhysicalDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProxyRequest extends $tea.Model {
  instanceId?: number;
  proxyId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      proxyId: 'ProxyId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      proxyId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProxyResponseBody extends $tea.Model {
  creatorId?: number;
  creatorName?: string;
  errorCode?: string;
  errorMessage?: string;
  httpsPort?: number;
  instanceId?: number;
  mysqlPort?: number;
  privateEnable?: boolean;
  privateHost?: string;
  proxyId?: number;
  publicEnable?: boolean;
  publicHost?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpsPort: 'HttpsPort',
      instanceId: 'InstanceId',
      mysqlPort: 'MysqlPort',
      privateEnable: 'PrivateEnable',
      privateHost: 'PrivateHost',
      proxyId: 'ProxyId',
      publicEnable: 'PublicEnable',
      publicHost: 'PublicHost',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'number',
      creatorName: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpsPort: 'number',
      instanceId: 'number',
      mysqlPort: 'number',
      privateEnable: 'boolean',
      privateHost: 'string',
      proxyId: 'number',
      publicEnable: 'boolean',
      publicHost: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProxyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusResponseBody extends $tea.Model {
  checkResultStatus?: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkResultStatus: 'CheckResultStatus',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResultStatus: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSQLReviewCheckResultStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSQLReviewCheckResultStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailRequest extends $tea.Model {
  SQLReviewQueryKey?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      SQLReviewQueryKey: 'SQLReviewQueryKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLReviewQueryKey: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  optimizeDetail?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      optimizeDetail: 'OptimizeDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      optimizeDetail: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSQLReviewOptimizeDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSQLReviewOptimizeDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobDetailRequest extends $tea.Model {
  jobId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  jobDetail?: GetSparkJobDetailResponseBodyJobDetail;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobDetail: 'JobDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobDetail: GetSparkJobDetailResponseBodyJobDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSparkJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSparkJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobDriverLogRequest extends $tea.Model {
  jobId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobDriverLogResponseBody extends $tea.Model {
  driverLog?: string;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      driverLog: 'DriverLog',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverLog: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobDriverLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSparkJobDriverLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSparkJobDriverLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobExecutorLogsRequest extends $tea.Model {
  jobId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobExecutorLogsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  executorLogs?: GetSparkJobExecutorLogsResponseBodyExecutorLogs;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      executorLogs: 'ExecutorLogs',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      executorLogs: GetSparkJobExecutorLogsResponseBodyExecutorLogs,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobExecutorLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSparkJobExecutorLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSparkJobExecutorLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobLogRequest extends $tea.Model {
  jobId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobLogResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  log?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      log: 'Log',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      log: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSparkJobLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSparkJobLogResponseBody,
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
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncExecSqlDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  structSyncExecSqlDetail?: GetStructSyncExecSqlDetailResponseBodyStructSyncExecSqlDetail;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncExecSqlDetail: 'StructSyncExecSqlDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncExecSqlDetail: GetStructSyncExecSqlDetailResponseBodyStructSyncExecSqlDetail,
      success: 'boolean',
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

export class GetStructSyncJobAnalyzeResultRequest extends $tea.Model {
  compareType?: string;
  orderId?: number;
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      compareType: 'CompareType',
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareType: 'string',
      orderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  structSyncJobAnalyzeResult?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncJobAnalyzeResult: 'StructSyncJobAnalyzeResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncJobAnalyzeResult: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult,
      success: 'boolean',
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

export class GetStructSyncJobDetailRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  structSyncJobDetail?: GetStructSyncJobDetailResponseBodyStructSyncJobDetail;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncJobDetail: 'StructSyncJobDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncJobDetail: GetStructSyncJobDetailResponseBodyStructSyncJobDetail,
      success: 'boolean',
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

export class GetStructSyncOrderDetailRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  structSyncOrderDetail?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncOrderDetail: 'StructSyncOrderDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncOrderDetail: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail,
      success: 'boolean',
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

export class GetTableDBTopologyRequest extends $tea.Model {
  tableGuid?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBody extends $tea.Model {
  DBTopology?: GetTableDBTopologyResponseBodyDBTopology;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBTopology: 'DBTopology',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTopology: GetTableDBTopologyResponseBodyDBTopology,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class GetTableTopologyRequest extends $tea.Model {
  tableGuid?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableTopologyResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  tableTopology?: GetTableTopologyResponseBodyTableTopology;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tableTopology: 'TableTopology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tableTopology: GetTableTopologyResponseBodyTableTopology,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableTopologyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTableTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTableTopologyResponseBody,
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
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      user: GetUserResponseBodyUser,
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

export class GetUserActiveTenantRequest extends $tea.Model {
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserActiveTenantResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  tenant?: GetUserActiveTenantResponseBodyTenant;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tenant: 'Tenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tenant: GetUserActiveTenantResponseBodyTenant,
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

export class GetUserUploadFileJobRequest extends $tea.Model {
  jobKey?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobKey: 'JobKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobKey: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  uploadFileJobDetail?: GetUserUploadFileJobResponseBodyUploadFileJobDetail;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      uploadFileJobDetail: 'UploadFileJobDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GrantUserPermissionRequest extends $tea.Model {
  dbId?: string;
  dsType?: string;
  expireDate?: string;
  instanceId?: number;
  logic?: boolean;
  permTypes?: string;
  tableId?: string;
  tableName?: string;
  tid?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dsType: 'DsType',
      expireDate: 'ExpireDate',
      instanceId: 'InstanceId',
      logic: 'Logic',
      permTypes: 'PermTypes',
      tableId: 'TableId',
      tableName: 'TableName',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dsType: 'string',
      expireDate: 'string',
      instanceId: 'number',
      logic: 'boolean',
      permTypes: 'string',
      tableId: 'string',
      tableName: 'string',
      tid: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class InspectProxyAccessSecretRequest extends $tea.Model {
  proxyAccessId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      proxyAccessId: 'ProxyAccessId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyAccessId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectProxyAccessSecretResponseBody extends $tea.Model {
  accessSecret?: string;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessSecret: 'AccessSecret',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessSecret: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectProxyAccessSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InspectProxyAccessSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InspectProxyAccessSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobRequest extends $tea.Model {
  jobId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillSparkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillSparkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsRequest extends $tea.Model {
  logic?: boolean;
  tableId?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      tableId: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsResponseBody extends $tea.Model {
  columnList?: ListColumnsResponseBodyColumnList;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: ListColumnsResponseBodyColumnList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class ListDBTaskSQLJobRequest extends $tea.Model {
  DBTaskGroupId?: number;
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskGroupId: 'DBTaskGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskGroupId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobResponseBody extends $tea.Model {
  DBTaskSQLJobList?: ListDBTaskSQLJobResponseBodyDBTaskSQLJobList[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskSQLJobList: 'DBTaskSQLJobList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskSQLJobList: { 'type': 'array', 'itemType': ListDBTaskSQLJobResponseBodyDBTaskSQLJobList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ListDBTaskSQLJobDetailRequest extends $tea.Model {
  jobId?: number;
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobDetailResponseBody extends $tea.Model {
  DBTaskSQLJobDetailList?: ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskSQLJobDetailList: 'DBTaskSQLJobDetailList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskSQLJobDetailList: { 'type': 'array', 'itemType': ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ListDDLPublishRecordsRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDLPublishRecordsResponseBody extends $tea.Model {
  DDLPublishRecordList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordList[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DDLPublishRecordList: 'DDLPublishRecordList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDLPublishRecordList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDLPublishRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDDLPublishRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDDLPublishRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckDBRequest extends $tea.Model {
  orderId?: number;
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckDBResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  preCheckDBList?: ListDataCorrectPreCheckDBResponseBodyPreCheckDBList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      preCheckDBList: 'PreCheckDBList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      preCheckDBList: { 'type': 'array', 'itemType': ListDataCorrectPreCheckDBResponseBodyPreCheckDBList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataCorrectPreCheckDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataCorrectPreCheckDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckSQLRequest extends $tea.Model {
  dbId?: number;
  orderId?: number;
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      orderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckSQLResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  preCheckSQLList?: ListDataCorrectPreCheckSQLResponseBodyPreCheckSQLList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      preCheckSQLList: 'PreCheckSQLList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      preCheckSQLList: { 'type': 'array', 'itemType': ListDataCorrectPreCheckSQLResponseBodyPreCheckSQLList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckSQLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataCorrectPreCheckSQLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataCorrectPreCheckSQLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsRequest extends $tea.Model {
  dbId?: string;
  logic?: boolean;
  pageNumber?: number;
  pageSize?: number;
  permType?: string;
  tid?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      permType: 'PermType',
      tid: 'Tid',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      logic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      permType: 'string',
      tid: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  userPermissions?: ListDatabaseUserPermssionsResponseBodyUserPermissions;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userPermissions: ListDatabaseUserPermssionsResponseBodyUserPermissions,
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

export class ListDatabasesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $tea.Model {
  databaseList?: ListDatabasesResponseBodyDatabaseList;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: ListDatabasesResponseBodyDatabaseList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class ListIndexesRequest extends $tea.Model {
  logic?: boolean;
  tableId?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      tableId: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  indexList?: ListIndexesResponseBodyIndexList;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      indexList: 'IndexList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      indexList: ListIndexesResponseBodyIndexList,
      requestId: 'string',
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

export class ListInstanceLoginAuditLogRequest extends $tea.Model {
  endTime?: string;
  opUserName?: string;
  pageNumber?: number;
  pageSize?: number;
  searchName?: string;
  startTime?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      opUserName: 'OpUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchName: 'SearchName',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      opUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchName: 'string',
      startTime: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceLoginAuditLogResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  instanceLoginAuditLogList?: ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogList;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceLoginAuditLogList: 'InstanceLoginAuditLogList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instanceLoginAuditLogList: ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceLoginAuditLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceLoginAuditLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceLoginAuditLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  userPermissions?: ListInstanceUserPermissionsResponseBodyUserPermissions;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userPermissions: ListInstanceUserPermissionsResponseBodyUserPermissions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceUserPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceUserPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  dbType?: string;
  envType?: string;
  instanceSource?: string;
  instanceState?: string;
  netType?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      instanceSource: 'InstanceSource',
      instanceState: 'InstanceState',
      netType: 'NetType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      instanceSource: 'string',
      instanceState: 'string',
      netType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  instanceList?: ListInstancesResponseBodyInstanceList;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instanceList: ListInstancesResponseBodyInstanceList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class ListLogicDatabasesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicDatabasesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  logicDatabaseList?: ListLogicDatabasesResponseBodyLogicDatabaseList;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicDatabaseList: 'LogicDatabaseList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicDatabaseList: ListLogicDatabasesResponseBodyLogicDatabaseList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class ListLogicTableRouteConfigRequest extends $tea.Model {
  tableId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTableRouteConfigResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  logicTableRouteConfigList?: ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicTableRouteConfigList: 'LogicTableRouteConfigList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicTableRouteConfigList: ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTableRouteConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogicTableRouteConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogicTableRouteConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesRequest extends $tea.Model {
  databaseId?: string;
  pageNumber?: number;
  pageSize?: number;
  returnGuid?: boolean;
  searchName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      returnGuid: 'ReturnGuid',
      searchName: 'SearchName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      returnGuid: 'boolean',
      searchName: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  logicTableList?: ListLogicTablesResponseBodyLogicTableList;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicTableList: 'LogicTableList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicTableList: ListLogicTablesResponseBodyLogicTableList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class ListOrdersRequest extends $tea.Model {
  endTime?: string;
  orderResultType?: string;
  orderStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  pluginType?: string;
  searchContent?: string;
  searchDateType?: string;
  startTime?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      orderResultType: 'OrderResultType',
      orderStatus: 'OrderStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pluginType: 'PluginType',
      searchContent: 'SearchContent',
      searchDateType: 'SearchDateType',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      orderResultType: 'string',
      orderStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pluginType: 'string',
      searchContent: 'string',
      searchDateType: 'string',
      startTime: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  orders?: ListOrdersResponseBodyOrders;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      orders: 'Orders',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      orders: ListOrdersResponseBodyOrders,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class ListProxiesRequest extends $tea.Model {
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxiesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  proxyList?: ListProxiesResponseBodyProxyList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxyList: 'ProxyList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxyList: { 'type': 'array', 'itemType': ListProxiesResponseBodyProxyList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProxiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProxiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxyAccessesRequest extends $tea.Model {
  proxyId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      proxyId: 'ProxyId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxyAccessesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  proxyAccessList?: ListProxyAccessesResponseBodyProxyAccessList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxyAccessList: 'ProxyAccessList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxyAccessList: { 'type': 'array', 'itemType': ListProxyAccessesResponseBodyProxyAccessList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxyAccessesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProxyAccessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProxyAccessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxySQLExecAuditLogRequest extends $tea.Model {
  endTime?: number;
  execState?: string;
  opUserName?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLType?: string;
  searchName?: string;
  startTime?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      execState: 'ExecState',
      opUserName: 'OpUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLType: 'SQLType',
      searchName: 'SearchName',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      execState: 'string',
      opUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLType: 'string',
      searchName: 'string',
      startTime: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxySQLExecAuditLogResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  proxySQLExecAuditLogList?: ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxySQLExecAuditLogList: 'ProxySQLExecAuditLogList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxySQLExecAuditLogList: ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxySQLExecAuditLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProxySQLExecAuditLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProxySQLExecAuditLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLExecAuditLogRequest extends $tea.Model {
  endTime?: string;
  execState?: string;
  opUserName?: string;
  pageNumber?: number;
  pageSize?: number;
  searchName?: string;
  sqlType?: string;
  startTime?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      execState: 'ExecState',
      opUserName: 'OpUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchName: 'SearchName',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      execState: 'string',
      opUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchName: 'string',
      sqlType: 'string',
      startTime: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLExecAuditLogResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  SQLExecAuditLogList?: ListSQLExecAuditLogResponseBodySQLExecAuditLogList;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      SQLExecAuditLogList: 'SQLExecAuditLogList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      SQLExecAuditLogList: ListSQLExecAuditLogResponseBodySQLExecAuditLogList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLExecAuditLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSQLExecAuditLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSQLExecAuditLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLReviewOriginSQLRequest extends $tea.Model {
  orderActionDetail?: ListSQLReviewOriginSQLRequestOrderActionDetail;
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderActionDetail: 'OrderActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderActionDetail: ListSQLReviewOriginSQLRequestOrderActionDetail,
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLReviewOriginSQLShrinkRequest extends $tea.Model {
  orderActionDetailShrink?: string;
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderActionDetailShrink: 'OrderActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderActionDetailShrink: 'string',
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLReviewOriginSQLResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  originSQLList?: ListSQLReviewOriginSQLResponseBodyOriginSQLList[];
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      originSQLList: 'OriginSQLList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      originSQLList: { 'type': 'array', 'itemType': ListSQLReviewOriginSQLResponseBodyOriginSQLList },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLReviewOriginSQLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSQLReviewOriginSQLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSQLReviewOriginSQLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsRequest extends $tea.Model {
  columnName?: string;
  dbId?: number;
  logic?: boolean;
  pageNumber?: number;
  pageSize?: number;
  schemaName?: string;
  securityLevel?: string;
  tableName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      logic: 'Logic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schemaName: 'SchemaName',
      securityLevel: 'SecurityLevel',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      logic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      schemaName: 'string',
      securityLevel: 'string',
      tableName: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  sensitiveColumnList?: ListSensitiveColumnsResponseBodySensitiveColumnList;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveColumnList: 'SensitiveColumnList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveColumnList: ListSensitiveColumnsResponseBodySensitiveColumnList,
      success: 'boolean',
      totalCount: 'number',
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

export class ListSensitiveColumnsDetailRequest extends $tea.Model {
  columnName?: string;
  dbId?: number;
  logic?: boolean;
  schemaName?: string;
  tableName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      logic: 'Logic',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      logic: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  sensitiveColumnsDetailList?: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveColumnsDetailList: 'SensitiveColumnsDetailList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveColumnsDetailList: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList,
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

export class ListTablesRequest extends $tea.Model {
  databaseId?: string;
  pageNumber?: number;
  pageSize?: number;
  returnGuid?: boolean;
  searchName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      returnGuid: 'ReturnGuid',
      searchName: 'SearchName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      returnGuid: 'boolean',
      searchName: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  tableList?: ListTablesResponseBodyTableList;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tableList: 'TableList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tableList: ListTablesResponseBodyTableList,
      totalCount: 'number',
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

export class ListUserPermissionsRequest extends $tea.Model {
  databaseName?: string;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  pageNumber?: number;
  pageSize?: number;
  permType?: string;
  searchKey?: string;
  tid?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      permType: 'PermType',
      searchKey: 'SearchKey',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      permType: 'string',
      searchKey: 'string',
      tid: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  userPermissions?: ListUserPermissionsResponseBodyUserPermissions;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userPermissions: ListUserPermissionsResponseBodyUserPermissions,
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

export class ListUserTenantsRequest extends $tea.Model {
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTenantsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  tenantList?: ListUserTenantsResponseBodyTenantList[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tenantList: 'TenantList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tenantList: { 'type': 'array', 'itemType': ListUserTenantsResponseBodyTenantList },
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

export class ListUsersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  role?: string;
  searchKey?: string;
  tid?: number;
  userState?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      role: 'Role',
      searchKey: 'SearchKey',
      tid: 'Tid',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      role: 'string',
      searchKey: 'string',
      tid: 'number',
      userState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  userList?: ListUsersResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

export class ListWorkFlowNodesRequest extends $tea.Model {
  searchName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      searchName: 'SearchName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchName: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  workflowNodes?: ListWorkFlowNodesResponseBodyWorkflowNodes;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      workflowNodes: 'WorkflowNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workflowNodes: ListWorkFlowNodesResponseBodyWorkflowNodes,
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

export class ListWorkFlowTemplatesRequest extends $tea.Model {
  searchName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      searchName: 'SearchName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchName: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  workFlowTemplates?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplates;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      workFlowTemplates: 'WorkFlowTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class ModifyDataCorrectExecSQLRequest extends $tea.Model {
  execSQL?: string;
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      execSQL: 'ExecSQL',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execSQL: 'string',
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataCorrectExecSQLResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataCorrectExecSQLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDataCorrectExecSQLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDataCorrectExecSQLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseDataCorrectSQLJobRequest extends $tea.Model {
  jobId?: number;
  orderId?: number;
  tid?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      orderId: 'OrderId',
      tid: 'Tid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      orderId: 'number',
      tid: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseDataCorrectSQLJobResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseDataCorrectSQLJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PauseDataCorrectSQLJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PauseDataCorrectSQLJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceRequest extends $tea.Model {
  dataLinkName?: string;
  databasePassword?: string;
  databaseUser?: string;
  dbaUid?: number;
  ddlOnline?: number;
  ecsInstanceId?: string;
  ecsRegion?: string;
  envType?: string;
  exportTimeout?: number;
  host?: string;
  instanceAlias?: string;
  instanceSource?: string;
  instanceType?: string;
  networkType?: string;
  port?: number;
  queryTimeout?: number;
  safeRule?: string;
  sid?: string;
  skipTest?: boolean;
  tid?: number;
  useDsql?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      dbaUid: 'DbaUid',
      ddlOnline: 'DdlOnline',
      ecsInstanceId: 'EcsInstanceId',
      ecsRegion: 'EcsRegion',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      safeRule: 'SafeRule',
      sid: 'Sid',
      skipTest: 'SkipTest',
      tid: 'Tid',
      useDsql: 'UseDsql',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      databasePassword: 'string',
      databaseUser: 'string',
      dbaUid: 'number',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      networkType: 'string',
      port: 'number',
      queryTimeout: 'number',
      safeRule: 'string',
      sid: 'string',
      skipTest: 'boolean',
      tid: 'number',
      useDsql: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterInstanceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class RegisterUserRequest extends $tea.Model {
  mobile?: string;
  roleNames?: string;
  tid?: number;
  uid?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      roleNames: 'RoleNames',
      tid: 'Tid',
      uid: 'Uid',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      roleNames: 'string',
      tid: 'number',
      uid: 'string',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUserResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class RestartDataCorrectSQLJobRequest extends $tea.Model {
  jobId?: number;
  orderId?: number;
  tid?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      orderId: 'OrderId',
      tid: 'Tid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      orderId: 'number',
      tid: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDataCorrectSQLJobResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDataCorrectSQLJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartDataCorrectSQLJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartDataCorrectSQLJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDataCorrectPreCheckRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDataCorrectPreCheckResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDataCorrectPreCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryDataCorrectPreCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryDataCorrectPreCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserPermissionRequest extends $tea.Model {
  dbId?: string;
  dsType?: string;
  instanceId?: number;
  logic?: boolean;
  permTypes?: string;
  tableId?: string;
  tableName?: string;
  tid?: number;
  userAccessId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dsType: 'DsType',
      instanceId: 'InstanceId',
      logic: 'Logic',
      permTypes: 'PermTypes',
      tableId: 'TableId',
      tableName: 'TableName',
      tid: 'Tid',
      userAccessId: 'UserAccessId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dsType: 'string',
      instanceId: 'number',
      logic: 'boolean',
      permTypes: 'string',
      tableId: 'string',
      tableName: 'string',
      tid: 'number',
      userAccessId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserPermissionResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class SearchDatabaseRequest extends $tea.Model {
  dbType?: string;
  envType?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  searchRange?: string;
  searchTarget?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      searchRange: 'SearchRange',
      searchTarget: 'SearchTarget',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      searchRange: 'string',
      searchTarget: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatabaseResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  searchDatabaseList?: SearchDatabaseResponseBodySearchDatabaseList;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      searchDatabaseList: 'SearchDatabaseList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      searchDatabaseList: SearchDatabaseResponseBodySearchDatabaseList,
      success: 'boolean',
      totalCount: 'number',
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

export class SearchTableRequest extends $tea.Model {
  dbType?: string;
  envType?: string;
  pageNumber?: number;
  pageSize?: number;
  returnGuid?: boolean;
  searchKey?: string;
  searchRange?: string;
  searchTarget?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      returnGuid: 'ReturnGuid',
      searchKey: 'SearchKey',
      searchRange: 'SearchRange',
      searchTarget: 'SearchTarget',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      returnGuid: 'boolean',
      searchKey: 'string',
      searchRange: 'string',
      searchTarget: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  searchTableList?: SearchTableResponseBodySearchTableList;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      searchTableList: 'SearchTableList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      searchTableList: SearchTableResponseBodySearchTableList,
      success: 'boolean',
      totalCount: 'number',
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

export class SetOwnersRequest extends $tea.Model {
  ownerIds?: string;
  ownerType?: string;
  resourceId?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
      ownerType: 'OwnerType',
      resourceId: 'ResourceId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: 'string',
      ownerType: 'string',
      resourceId: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOwnersResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class SubmitOrderApprovalRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOrderApprovalResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class SubmitSparkJobRequest extends $tea.Model {
  appCode?: string;
  arguments?: string[];
  configuration?: { [key: string]: any };
  files?: string[];
  mainClass?: string;
  mainFile?: string;
  name?: string;
  ossInfo?: SubmitSparkJobRequestOssInfo;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      arguments: 'Arguments',
      configuration: 'Configuration',
      files: 'Files',
      mainClass: 'MainClass',
      mainFile: 'MainFile',
      name: 'Name',
      ossInfo: 'OssInfo',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      arguments: { 'type': 'array', 'itemType': 'string' },
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      files: { 'type': 'array', 'itemType': 'string' },
      mainClass: 'string',
      mainFile: 'string',
      name: 'string',
      ossInfo: SubmitSparkJobRequestOssInfo,
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobShrinkRequest extends $tea.Model {
  appCode?: string;
  argumentsShrink?: string;
  configurationShrink?: string;
  filesShrink?: string;
  mainClass?: string;
  mainFile?: string;
  name?: string;
  ossInfoShrink?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      argumentsShrink: 'Arguments',
      configurationShrink: 'Configuration',
      filesShrink: 'Files',
      mainClass: 'MainClass',
      mainFile: 'MainFile',
      name: 'Name',
      ossInfoShrink: 'OssInfo',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      argumentsShrink: 'string',
      configurationShrink: 'string',
      filesShrink: 'string',
      mainClass: 'string',
      mainFile: 'string',
      name: 'string',
      ossInfoShrink: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  jobId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSparkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSparkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitStructSyncOrderApprovalRequest extends $tea.Model {
  orderId?: number;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitStructSyncOrderApprovalResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class SyncDatabaseMetaRequest extends $tea.Model {
  dbId?: string;
  logic?: boolean;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      logic: 'boolean',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDatabaseMetaResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class SyncInstanceMetaRequest extends $tea.Model {
  ignoreTable?: boolean;
  instanceId?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      ignoreTable: 'IgnoreTable',
      instanceId: 'InstanceId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreTable: 'boolean',
      instanceId: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncInstanceMetaResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class UpdateInstanceRequest extends $tea.Model {
  dataLinkName?: string;
  databasePassword?: string;
  databaseUser?: string;
  dbaId?: string;
  ddlOnline?: number;
  ecsInstanceId?: string;
  ecsRegion?: string;
  envType?: string;
  exportTimeout?: number;
  host?: string;
  instanceAlias?: string;
  instanceId?: string;
  instanceSource?: string;
  instanceType?: string;
  port?: number;
  queryTimeout?: number;
  safeRuleId?: string;
  sid?: string;
  skipTest?: boolean;
  tid?: number;
  useDsql?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      dbaId: 'DbaId',
      ddlOnline: 'DdlOnline',
      ecsInstanceId: 'EcsInstanceId',
      ecsRegion: 'EcsRegion',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      safeRuleId: 'SafeRuleId',
      sid: 'Sid',
      skipTest: 'SkipTest',
      tid: 'Tid',
      useDsql: 'UseDsql',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      databasePassword: 'string',
      databaseUser: 'string',
      dbaId: 'string',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      port: 'number',
      queryTimeout: 'number',
      safeRuleId: 'string',
      sid: 'string',
      skipTest: 'boolean',
      tid: 'number',
      useDsql: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class UpdateUserRequest extends $tea.Model {
  maxExecuteCount?: number;
  maxResultCount?: number;
  mobile?: string;
  roleNames?: string;
  tid?: number;
  uid?: number;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      maxExecuteCount: 'MaxExecuteCount',
      maxResultCount: 'MaxResultCount',
      mobile: 'Mobile',
      roleNames: 'RoleNames',
      tid: 'Tid',
      uid: 'Uid',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxExecuteCount: 'number',
      maxResultCount: 'number',
      mobile: 'string',
      roleNames: 'string',
      tid: 'number',
      uid: 'number',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class CreateDataCorrectOrderRequestParamDbItemList extends $tea.Model {
  dbId?: number;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCorrectOrderRequestParam extends $tea.Model {
  attachmentName?: string;
  classify?: string;
  dbItemList?: CreateDataCorrectOrderRequestParamDbItemList[];
  estimateAffectRows?: number;
  execSQL?: string;
  rollbackAttachmentName?: string;
  rollbackSQL?: string;
  rollbackSqlType?: string;
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      classify: 'Classify',
      dbItemList: 'DbItemList',
      estimateAffectRows: 'EstimateAffectRows',
      execSQL: 'ExecSQL',
      rollbackAttachmentName: 'RollbackAttachmentName',
      rollbackSQL: 'RollbackSQL',
      rollbackSqlType: 'RollbackSqlType',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      classify: 'string',
      dbItemList: { 'type': 'array', 'itemType': CreateDataCorrectOrderRequestParamDbItemList },
      estimateAffectRows: 'number',
      execSQL: 'string',
      rollbackAttachmentName: 'string',
      rollbackSQL: 'string',
      rollbackSqlType: 'string',
      sqlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderRequestParamCronClearItemList extends $tea.Model {
  columnName?: string;
  filterSQL?: string;
  remainDays?: number;
  tableName?: string;
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      filterSQL: 'FilterSQL',
      remainDays: 'RemainDays',
      tableName: 'TableName',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      filterSQL: 'string',
      remainDays: 'number',
      tableName: 'string',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderRequestParamDbItemList extends $tea.Model {
  dbId?: number;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderRequestParam extends $tea.Model {
  classify?: string;
  cronClearItemList?: CreateDataCronClearOrderRequestParamCronClearItemList[];
  cronFormat?: string;
  dbItemList?: CreateDataCronClearOrderRequestParamDbItemList[];
  durationHour?: number;
  specifyDuration?: boolean;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      cronClearItemList: 'CronClearItemList',
      cronFormat: 'CronFormat',
      dbItemList: 'DbItemList',
      durationHour: 'DurationHour',
      specifyDuration: 'specifyDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      cronClearItemList: { 'type': 'array', 'itemType': CreateDataCronClearOrderRequestParamCronClearItemList },
      cronFormat: 'string',
      dbItemList: { 'type': 'array', 'itemType': CreateDataCronClearOrderRequestParamDbItemList },
      durationHour: 'number',
      specifyDuration: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataImportOrderRequestParamDbItemList extends $tea.Model {
  dbId?: number;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataImportOrderRequestParam extends $tea.Model {
  attachmentName?: string;
  classify?: string;
  csvFirstRowIsColumnDef?: boolean;
  dbItemList?: CreateDataImportOrderRequestParamDbItemList[];
  fileEncoding?: string;
  fileType?: string;
  ignoreError?: boolean;
  importMode?: string;
  insertType?: string;
  rollbackAttachmentName?: string;
  rollbackSQL?: string;
  rollbackSqlType?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      classify: 'Classify',
      csvFirstRowIsColumnDef: 'CsvFirstRowIsColumnDef',
      dbItemList: 'DbItemList',
      fileEncoding: 'FileEncoding',
      fileType: 'FileType',
      ignoreError: 'IgnoreError',
      importMode: 'ImportMode',
      insertType: 'InsertType',
      rollbackAttachmentName: 'RollbackAttachmentName',
      rollbackSQL: 'RollbackSQL',
      rollbackSqlType: 'RollbackSqlType',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      classify: 'string',
      csvFirstRowIsColumnDef: 'boolean',
      dbItemList: { 'type': 'array', 'itemType': CreateDataImportOrderRequestParamDbItemList },
      fileEncoding: 'string',
      fileType: 'string',
      ignoreError: 'boolean',
      importMode: 'string',
      insertType: 'string',
      rollbackAttachmentName: 'string',
      rollbackSQL: 'string',
      rollbackSqlType: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFreeLockCorrectOrderRequestParamDbItemList extends $tea.Model {
  dbId?: number;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFreeLockCorrectOrderRequestParam extends $tea.Model {
  attachmentName?: string;
  classify?: string;
  dbItemList?: CreateFreeLockCorrectOrderRequestParamDbItemList[];
  execSQL?: string;
  rollbackAttachmentName?: string;
  rollbackSQL?: string;
  rollbackSqlType?: string;
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      classify: 'Classify',
      dbItemList: 'DbItemList',
      execSQL: 'ExecSQL',
      rollbackAttachmentName: 'RollbackAttachmentName',
      rollbackSQL: 'RollbackSQL',
      rollbackSqlType: 'RollbackSqlType',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      classify: 'string',
      dbItemList: { 'type': 'array', 'itemType': CreateFreeLockCorrectOrderRequestParamDbItemList },
      execSQL: 'string',
      rollbackAttachmentName: 'string',
      rollbackSQL: 'string',
      rollbackSqlType: 'string',
      sqlType: 'string',
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

export class CreateSQLReviewOrderRequestParam extends $tea.Model {
  attachmentKeyList?: string[];
  dbId?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentKeyList: 'AttachmentKeyList',
      dbId: 'DbId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKeyList: { 'type': 'array', 'itemType': 'string' },
      dbId: 'number',
      projectName: 'string',
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

export class CreateStructSyncOrderRequestParam extends $tea.Model {
  ignoreError?: boolean;
  source?: CreateStructSyncOrderRequestParamSource;
  tableInfoList?: CreateStructSyncOrderRequestParamTableInfoList[];
  target?: CreateStructSyncOrderRequestParamTarget;
  static names(): { [key: string]: string } {
    return {
      ignoreError: 'IgnoreError',
      source: 'Source',
      tableInfoList: 'TableInfoList',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreError: 'boolean',
      source: CreateStructSyncOrderRequestParamSource,
      tableInfoList: { 'type': 'array', 'itemType': CreateStructSyncOrderRequestParamTableInfoList },
      target: CreateStructSyncOrderRequestParamTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadOSSFileJobRequestUploadTarget extends $tea.Model {
  bucketName?: string;
  endpoint?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      endpoint: 'Endpoint',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScriptResponseBodyResults extends $tea.Model {
  columnNames?: string[];
  message?: string;
  rowCount?: number;
  rows?: { [key: string]: any }[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnNames: 'ColumnNames',
      message: 'Message',
      rowCount: 'RowCount',
      rows: 'Rows',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      rowCount: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler extends $tea.Model {
  id?: number;
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      nickName: 'string',
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
  auditUserIdList?: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList;
  nodeName?: string;
  operateComment?: string;
  operateTime?: string;
  operatorId?: number;
  workflowInsCode?: string;
  static names(): { [key: string]: string } {
    return {
      auditUserIdList: 'AuditUserIdList',
      nodeName: 'NodeName',
      operateComment: 'OperateComment',
      operateTime: 'OperateTime',
      operatorId: 'OperatorId',
      workflowInsCode: 'WorkflowInsCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUserIdList: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList,
      nodeName: 'string',
      operateComment: 'string',
      operateTime: 'string',
      operatorId: 'number',
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

export class GetApprovalDetailResponseBodyApprovalDetail extends $tea.Model {
  auditId?: number;
  createTime?: string;
  currentHandlers?: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers;
  description?: string;
  orderId?: number;
  orderType?: string;
  reasonList?: GetApprovalDetailResponseBodyApprovalDetailReasonList;
  title?: string;
  workflowInsCode?: string;
  workflowNodes?: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes;
  static names(): { [key: string]: string } {
    return {
      auditId: 'AuditId',
      createTime: 'CreateTime',
      currentHandlers: 'CurrentHandlers',
      description: 'Description',
      orderId: 'OrderId',
      orderType: 'OrderType',
      reasonList: 'ReasonList',
      title: 'Title',
      workflowInsCode: 'WorkflowInsCode',
      workflowNodes: 'WorkflowNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditId: 'number',
      createTime: 'string',
      currentHandlers: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers,
      description: 'string',
      orderId: 'number',
      orderType: 'string',
      reasonList: GetApprovalDetailResponseBodyApprovalDetailReasonList,
      title: 'string',
      workflowInsCode: 'string',
      workflowNodes: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList extends $tea.Model {
  catalogName?: string;
  dbId?: number;
  dbType?: string;
  envType?: string;
  instanceId?: number;
  instanceResourceId?: string;
  instanceSource?: string;
  regionId?: string;
  schemaName?: string;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      instanceId: 'InstanceId',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      instanceId: 'number',
      instanceResourceId: 'string',
      instanceSource: 'string',
      regionId: 'string',
      schemaName: 'string',
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTopologyResponseBodyDBTopology extends $tea.Model {
  alias?: string;
  DBTopologyInfoList?: GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList[];
  dbType?: string;
  envType?: string;
  logicDbId?: number;
  logicDbName?: string;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      DBTopologyInfoList: 'DBTopologyInfoList',
      dbType: 'DbType',
      envType: 'EnvType',
      logicDbId: 'LogicDbId',
      logicDbName: 'LogicDbName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      DBTopologyInfoList: { 'type': 'array', 'itemType': GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList },
      dbType: 'string',
      envType: 'string',
      logicDbId: 'number',
      logicDbName: 'string',
      searchName: 'string',
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

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase extends $tea.Model {
  dbId?: number;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      searchName: 'string',
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

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail extends $tea.Model {
  actualAffectRows?: number;
  attachmentName?: string;
  classify?: string;
  estimateAffectRows?: number;
  exeSQL?: string;
  ignoreAffectRows?: boolean;
  ignoreAffectRowsReason?: string;
  rbAttachmentName?: string;
  rbSQL?: string;
  rbSQLType?: string;
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      attachmentName: 'AttachmentName',
      classify: 'Classify',
      estimateAffectRows: 'EstimateAffectRows',
      exeSQL: 'ExeSQL',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      rbAttachmentName: 'RbAttachmentName',
      rbSQL: 'RbSQL',
      rbSQLType: 'RbSQLType',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      attachmentName: 'string',
      classify: 'string',
      estimateAffectRows: 'number',
      exeSQL: 'string',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      rbAttachmentName: 'string',
      rbSQL: 'string',
      rbSQLType: 'string',
      sqlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO extends $tea.Model {
  checkStatus?: string;
  checkStep?: string;
  userTip?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkStep: 'CheckStep',
      userTip: 'UserTip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkStep: 'string',
      userTip: 'string',
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

export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail extends $tea.Model {
  databaseList?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList;
  orderDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail;
  preCheckDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      orderDetail: 'OrderDetail',
      preCheckDetail: 'PreCheckDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList,
      orderDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail,
      preCheckDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail extends $tea.Model {
  actualAffectRows?: number;
  createTime?: string;
  DBTaskGroupId?: number;
  jobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      createTime: 'CreateTime',
      DBTaskGroupId: 'DBTaskGroupId',
      jobStatus: 'jobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      createTime: 'string',
      DBTaskGroupId: 'number',
      jobStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList extends $tea.Model {
  actualAffectRows?: number;
  createTime?: string;
  DBTaskGroupId?: number;
  jobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      createTime: 'CreateTime',
      DBTaskGroupId: 'DBTaskGroupId',
      jobStatus: 'jobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      createTime: 'string',
      DBTaskGroupId: 'number',
      jobStatus: 'string',
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

export class GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo extends $tea.Model {
  jobStatus?: string;
  preCheckId?: number;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      preCheckId: 'PreCheckId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      preCheckId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail extends $tea.Model {
  actualAffectRows?: number;
  classify?: string;
  database?: string;
  dbId?: number;
  envType?: string;
  exeSQL?: string;
  ignoreAffectRows?: boolean;
  ignoreAffectRowsReason?: string;
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      classify: 'Classify',
      database: 'Database',
      dbId: 'DbId',
      envType: 'EnvType',
      exeSQL: 'ExeSQL',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      classify: 'string',
      database: 'string',
      dbId: 'number',
      envType: 'string',
      exeSQL: 'string',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      logic: 'boolean',
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
  catalogName?: string;
  databaseId?: string;
  dbType?: string;
  dbaId?: string;
  dbaName?: string;
  encoding?: string;
  envType?: string;
  host?: string;
  instanceId?: string;
  ownerIdList?: GetDatabaseResponseBodyDatabaseOwnerIdList;
  ownerNameList?: GetDatabaseResponseBodyDatabaseOwnerNameList;
  port?: number;
  schemaName?: string;
  searchName?: string;
  sid?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      databaseId: 'DatabaseId',
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaName: 'DbaName',
      encoding: 'Encoding',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      sid: 'Sid',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      databaseId: 'string',
      dbType: 'string',
      dbaId: 'string',
      dbaName: 'string',
      encoding: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      ownerIdList: GetDatabaseResponseBodyDatabaseOwnerIdList,
      ownerNameList: GetDatabaseResponseBodyDatabaseOwnerNameList,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      sid: 'string',
      state: 'string',
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

export class GetInstanceResponseBodyInstanceStandardGroup extends $tea.Model {
  groupMode?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupMode: 'GroupMode',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMode: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstance extends $tea.Model {
  dataLinkName?: string;
  databasePassword?: string;
  databaseUser?: string;
  dbaId?: string;
  dbaNickName?: string;
  ddlOnline?: number;
  ecsInstanceId?: string;
  ecsRegion?: string;
  envType?: string;
  exportTimeout?: number;
  host?: string;
  instanceAlias?: string;
  instanceId?: string;
  instanceSource?: string;
  instanceType?: string;
  ownerIdList?: GetInstanceResponseBodyInstanceOwnerIdList;
  ownerNameList?: GetInstanceResponseBodyInstanceOwnerNameList;
  port?: number;
  queryTimeout?: number;
  safeRuleId?: string;
  sid?: string;
  standardGroup?: GetInstanceResponseBodyInstanceStandardGroup;
  state?: string;
  useDsql?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      dbaId: 'DbaId',
      dbaNickName: 'DbaNickName',
      ddlOnline: 'DdlOnline',
      ecsInstanceId: 'EcsInstanceId',
      ecsRegion: 'EcsRegion',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      safeRuleId: 'SafeRuleId',
      sid: 'Sid',
      standardGroup: 'StandardGroup',
      state: 'State',
      useDsql: 'UseDsql',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      databasePassword: 'string',
      databaseUser: 'string',
      dbaId: 'string',
      dbaNickName: 'string',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      ownerIdList: GetInstanceResponseBodyInstanceOwnerIdList,
      ownerNameList: GetInstanceResponseBodyInstanceOwnerNameList,
      port: 'number',
      queryTimeout: 'number',
      safeRuleId: 'string',
      sid: 'string',
      standardGroup: GetInstanceResponseBodyInstanceStandardGroup,
      state: 'string',
      useDsql: 'number',
      vpcId: 'string',
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
  alias?: string;
  databaseId?: string;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  ownerIdList?: GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList;
  ownerNameList?: GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList;
  schemaName?: string;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseId: 'DatabaseId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseId: 'string',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIdList: GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList,
      ownerNameList: GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList,
      schemaName: 'string',
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseBodyColumnList extends $tea.Model {
  autoIncrement?: boolean;
  columnId?: string;
  columnName?: string;
  columnType?: string;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  description?: string;
  nullable?: boolean;
  position?: number;
  primaryKey?: string;
  securityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      description: 'Description',
      nullable: 'Nullable',
      position: 'Position',
      primaryKey: 'PrimaryKey',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      columnId: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      description: 'string',
      nullable: 'boolean',
      position: 'number',
      primaryKey: 'string',
      securityLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBodyDetailInfoColumnList extends $tea.Model {
  autoIncrement?: boolean;
  columnId?: string;
  columnName?: string;
  columnType?: string;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  description?: string;
  nullable?: boolean;
  position?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      description: 'Description',
      nullable: 'Nullable',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      columnId: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      description: 'string',
      nullable: 'boolean',
      position: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBodyDetailInfoIndexList extends $tea.Model {
  indexColumns?: string[];
  indexId?: string;
  indexName?: string;
  indexType?: string;
  unique?: boolean;
  static names(): { [key: string]: string } {
    return {
      indexColumns: 'IndexColumns',
      indexId: 'IndexId',
      indexName: 'IndexName',
      indexType: 'IndexType',
      unique: 'Unique',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexColumns: { 'type': 'array', 'itemType': 'string' },
      indexId: 'string',
      indexName: 'string',
      indexType: 'string',
      unique: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableDetailInfoResponseBodyDetailInfo extends $tea.Model {
  columnList?: GetMetaTableDetailInfoResponseBodyDetailInfoColumnList[];
  indexList?: GetMetaTableDetailInfoResponseBodyDetailInfoIndexList[];
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      indexList: 'IndexList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': GetMetaTableDetailInfoResponseBodyDetailInfoColumnList },
      indexList: { 'type': 'array', 'itemType': GetMetaTableDetailInfoResponseBodyDetailInfoIndexList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogResponseBodyOpLogDetailsOpLogDetail extends $tea.Model {
  database?: string;
  module?: string;
  opContent?: string;
  opTime?: string;
  opUserId?: number;
  orderId?: number;
  userId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      module: 'Module',
      opContent: 'OpContent',
      opTime: 'OpTime',
      opUserId: 'OpUserId',
      orderId: 'OrderId',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      module: 'string',
      opContent: 'string',
      opTime: 'string',
      opUserId: 'number',
      orderId: 'number',
      userId: 'string',
      userNick: 'string',
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

export class GetOrderBaseInfoResponseBodyOrderBaseInfo extends $tea.Model {
  comment?: string;
  committer?: string;
  committerId?: number;
  createTime?: string;
  lastModifyTime?: string;
  orderId?: number;
  pluginType?: string;
  relatedUserList?: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList;
  relatedUserNickList?: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList;
  statusCode?: string;
  statusDesc?: string;
  workflowInstanceId?: number;
  workflowStatusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      committer: 'Committer',
      committerId: 'CommitterId',
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      orderId: 'OrderId',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      relatedUserNickList: 'RelatedUserNickList',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
      workflowInstanceId: 'WorkflowInstanceId',
      workflowStatusDesc: 'WorkflowStatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      committer: 'string',
      committerId: 'number',
      createTime: 'string',
      lastModifyTime: 'string',
      orderId: 'number',
      pluginType: 'string',
      relatedUserList: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList,
      relatedUserNickList: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList,
      statusCode: 'string',
      statusDesc: 'string',
      workflowInstanceId: 'number',
      workflowStatusDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail extends $tea.Model {
  dbType?: string;
  envType?: string;
  ownerIds?: number[];
  ownerNickNames?: string[];
  searchName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
      searchName: 'SearchName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
      searchName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources extends $tea.Model {
  logic?: boolean;
  resourceDetail?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      resourceDetail: 'ResourceDetail',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      resourceDetail: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail,
      targetId: 'string',
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

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo extends $tea.Model {
  columnName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo extends $tea.Model {
  dbId?: number;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  ownerIds?: number[];
  ownerNickNames?: string[];
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo extends $tea.Model {
  dbType?: string;
  dbaId?: number;
  dbaNickName?: string;
  envType?: string;
  host?: string;
  instanceId?: string;
  ownerIds?: number[];
  ownerNickName?: string[];
  port?: number;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaNickName: 'DbaNickName',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      ownerIds: 'OwnerIds',
      ownerNickName: 'OwnerNickName',
      port: 'Port',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      dbaId: 'number',
      dbaNickName: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickName: { 'type': 'array', 'itemType': 'string' },
      port: 'number',
      searchName: 'string',
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

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources extends $tea.Model {
  columnInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo;
  databaseInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo;
  instanceInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo;
  tableInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo;
  static names(): { [key: string]: string } {
    return {
      columnInfo: 'ColumnInfo',
      databaseInfo: 'DatabaseInfo',
      instanceInfo: 'InstanceInfo',
      tableInfo: 'TableInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo,
      databaseInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo,
      instanceInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo,
      tableInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail extends $tea.Model {
  applyType?: string;
  permType?: number;
  resources?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources[];
  seconds?: number;
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      permType: 'PermType',
      resources: 'Resources',
      seconds: 'Seconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      permType: 'number',
      resources: { 'type': 'array', 'itemType': GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources },
      seconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalDatabaseResponseBodyDatabaseOwnerIdList extends $tea.Model {
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

export class GetPhysicalDatabaseResponseBodyDatabaseOwnerNameList extends $tea.Model {
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

export class GetPhysicalDatabaseResponseBodyDatabase extends $tea.Model {
  catalogName?: string;
  databaseId?: string;
  dbType?: string;
  dbaId?: string;
  dbaName?: string;
  encoding?: string;
  envType?: string;
  host?: string;
  instanceId?: string;
  ownerIdList?: GetPhysicalDatabaseResponseBodyDatabaseOwnerIdList;
  ownerNameList?: GetPhysicalDatabaseResponseBodyDatabaseOwnerNameList;
  port?: number;
  schemaName?: string;
  searchName?: string;
  sid?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      databaseId: 'DatabaseId',
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaName: 'DbaName',
      encoding: 'Encoding',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      sid: 'Sid',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      databaseId: 'string',
      dbType: 'string',
      dbaId: 'string',
      dbaName: 'string',
      encoding: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      ownerIdList: GetPhysicalDatabaseResponseBodyDatabaseOwnerIdList,
      ownerNameList: GetPhysicalDatabaseResponseBodyDatabaseOwnerNameList,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      sid: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult extends $tea.Model {
  checkNotPass?: number;
  checkPass?: number;
  forceNotPass?: number;
  forcePass?: number;
  new?: number;
  unknown?: number;
  static names(): { [key: string]: string } {
    return {
      checkNotPass: 'CheckNotPass',
      checkPass: 'CheckPass',
      forceNotPass: 'ForceNotPass',
      forcePass: 'ForcePass',
      new: 'New',
      unknown: 'Unknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNotPass: 'number',
      checkPass: 'number',
      forceNotPass: 'number',
      forcePass: 'number',
      new: 'number',
      unknown: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusSQLReviewResult extends $tea.Model {
  mustImprove?: number;
  potentialIssue?: number;
  suggestImprove?: number;
  tableIndexSuggest?: number;
  useDmsDmlUnlock?: number;
  useDmsToolkit?: number;
  static names(): { [key: string]: string } {
    return {
      mustImprove: 'MustImprove',
      potentialIssue: 'PotentialIssue',
      suggestImprove: 'SuggestImprove',
      tableIndexSuggest: 'TableIndexSuggest',
      useDmsDmlUnlock: 'UseDmsDmlUnlock',
      useDmsToolkit: 'UseDmsToolkit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mustImprove: 'number',
      potentialIssue: 'number',
      suggestImprove: 'number',
      tableIndexSuggest: 'number',
      useDmsDmlUnlock: 'number',
      useDmsToolkit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus extends $tea.Model {
  checkStatusResult?: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult;
  checkedCount?: number;
  SQLReviewResult?: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusSQLReviewResult;
  totalSQLCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkStatusResult: 'CheckStatusResult',
      checkedCount: 'CheckedCount',
      SQLReviewResult: 'SQLReviewResult',
      totalSQLCount: 'TotalSQLCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatusResult: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult,
      checkedCount: 'number',
      SQLReviewResult: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusSQLReviewResult,
      totalSQLCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts extends $tea.Model {
  content?: string;
  opType?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      opType: 'OpType',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      opType: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults extends $tea.Model {
  comments?: string;
  feedback?: string;
  messages?: string[];
  ruleName?: string;
  ruleType?: string;
  scripts?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts[];
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      feedback: 'Feedback',
      messages: 'Messages',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      scripts: 'Scripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      feedback: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      ruleType: 'string',
      scripts: { 'type': 'array', 'itemType': GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult extends $tea.Model {
  errorMessage?: string;
  occurError?: boolean;
  results?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      occurError: 'OccurError',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      occurError: 'boolean',
      results: { 'type': 'array', 'itemType': GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail extends $tea.Model {
  dbId?: number;
  instanceId?: number;
  qualityResult?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult;
  queryKey?: string;
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      instanceId: 'InstanceId',
      qualityResult: 'QualityResult',
      queryKey: 'QueryKey',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      instanceId: 'number',
      qualityResult: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult,
      queryKey: 'string',
      sqlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobDetailResponseBodyJobDetail extends $tea.Model {
  arguments?: string;
  beginTime?: string;
  configuration?: string;
  endTime?: string;
  jobId?: string;
  mainClass?: string;
  mainFile?: string;
  name?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      beginTime: 'BeginTime',
      configuration: 'Configuration',
      endTime: 'EndTime',
      jobId: 'JobId',
      mainClass: 'MainClass',
      mainFile: 'MainFile',
      name: 'Name',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      beginTime: 'string',
      configuration: 'string',
      endTime: 'string',
      jobId: 'string',
      mainClass: 'string',
      mainFile: 'string',
      name: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkJobExecutorLogsResponseBodyExecutorLogs extends $tea.Model {
  executorLogs?: string[];
  static names(): { [key: string]: string } {
    return {
      executorLogs: 'executorLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorLogs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncExecSqlDetailResponseBodyStructSyncExecSqlDetail extends $tea.Model {
  execSql?: string;
  totalSqlCount?: number;
  static names(): { [key: string]: string } {
    return {
      execSql: 'ExecSql',
      totalSqlCount: 'TotalSqlCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execSql: 'string',
      totalSqlCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList extends $tea.Model {
  script?: string;
  sourceTableName?: string;
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
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

export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult extends $tea.Model {
  resultList?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList[];
  summaryList?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList[];
  static names(): { [key: string]: string } {
    return {
      resultList: 'ResultList',
      summaryList: 'SummaryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultList: { 'type': 'array', 'itemType': GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList },
      summaryList: { 'type': 'array', 'itemType': GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobDetailResponseBodyStructSyncJobDetail extends $tea.Model {
  DBTaskGroupId?: number;
  executeCount?: number;
  jobStatus?: string;
  message?: string;
  securityRule?: string;
  sqlCount?: number;
  tableAnalyzed?: number;
  tableCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskGroupId: 'DBTaskGroupId',
      executeCount: 'ExecuteCount',
      jobStatus: 'JobStatus',
      message: 'Message',
      securityRule: 'SecurityRule',
      sqlCount: 'SqlCount',
      tableAnalyzed: 'TableAnalyzed',
      tableCount: 'TableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskGroupId: 'number',
      executeCount: 'number',
      jobStatus: 'string',
      message: 'string',
      securityRule: 'string',
      sqlCount: 'number',
      tableAnalyzed: 'number',
      tableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo extends $tea.Model {
  dbId?: number;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      searchName: 'string',
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

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo extends $tea.Model {
  dbId?: number;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      searchName: 'string',
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

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail extends $tea.Model {
  ignoreError?: boolean;
  sourceDatabaseInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo;
  sourceType?: string;
  sourceVersionInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo;
  tableInfoList?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList[];
  targetDatabaseInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo;
  targetType?: string;
  targetVersionInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo;
  static names(): { [key: string]: string } {
    return {
      ignoreError: 'IgnoreError',
      sourceDatabaseInfo: 'SourceDatabaseInfo',
      sourceType: 'SourceType',
      sourceVersionInfo: 'SourceVersionInfo',
      tableInfoList: 'TableInfoList',
      targetDatabaseInfo: 'TargetDatabaseInfo',
      targetType: 'TargetType',
      targetVersionInfo: 'TargetVersionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreError: 'boolean',
      sourceDatabaseInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo,
      sourceType: 'string',
      sourceVersionInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo,
      tableInfoList: { 'type': 'array', 'itemType': GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList },
      targetDatabaseInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo,
      targetType: 'string',
      targetVersionInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList extends $tea.Model {
  tableId?: string;
  tableName?: string;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      tableId: 'TableId',
      tableName: 'TableName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableId: 'string',
      tableName: 'string',
      tableType: 'string',
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
  envType?: string;
  tableList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList[];
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbName: 'DbName',
      dbType: 'DbType',
      envType: 'EnvType',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dbName: 'string',
      dbType: 'string',
      envType: 'string',
      tableList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBodyDBTopologyDataSourceList extends $tea.Model {
  databaseList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList[];
  dbType?: string;
  host?: string;
  port?: number;
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      dbType: 'DbType',
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList },
      dbType: 'string',
      host: 'string',
      port: 'number',
      sid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDBTopologyResponseBodyDBTopology extends $tea.Model {
  dataSourceList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceList[];
  tableGuid?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceList: 'DataSourceList',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceList },
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList extends $tea.Model {
  dbId?: number;
  dbName?: string;
  dbSearchName?: string;
  dbType?: string;
  instanceId?: number;
  instanceResourceId?: string;
  instanceSource?: string;
  regionId?: string;
  tableCount?: number;
  tableNameExpr?: string;
  tableNameList?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbName: 'DbName',
      dbSearchName: 'DbSearchName',
      dbType: 'DbType',
      instanceId: 'InstanceId',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      regionId: 'RegionId',
      tableCount: 'TableCount',
      tableNameExpr: 'TableNameExpr',
      tableNameList: 'TableNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbName: 'string',
      dbSearchName: 'string',
      dbType: 'string',
      instanceId: 'number',
      instanceResourceId: 'string',
      instanceSource: 'string',
      regionId: 'string',
      tableCount: 'number',
      tableNameExpr: 'string',
      tableNameList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableTopologyResponseBodyTableTopology extends $tea.Model {
  logic?: boolean;
  tableGuid?: string;
  tableName?: string;
  tableTopologyInfoList?: GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList[];
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tableTopologyInfoList: 'TableTopologyInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      tableGuid: 'string',
      tableName: 'string',
      tableTopologyInfoList: { 'type': 'array', 'itemType': GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList },
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
  curExecuteCount?: number;
  curResultCount?: number;
  dingRobot?: string;
  email?: string;
  lastLoginTime?: string;
  maxExecuteCount?: number;
  maxResultCount?: number;
  mobile?: string;
  nickName?: string;
  notificationMode?: string;
  parentUid?: number;
  roleIdList?: GetUserResponseBodyUserRoleIdList;
  roleNameList?: GetUserResponseBodyUserRoleNameList;
  signatureMethod?: string;
  state?: string;
  uid?: string;
  userId?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      curExecuteCount: 'CurExecuteCount',
      curResultCount: 'CurResultCount',
      dingRobot: 'DingRobot',
      email: 'Email',
      lastLoginTime: 'LastLoginTime',
      maxExecuteCount: 'MaxExecuteCount',
      maxResultCount: 'MaxResultCount',
      mobile: 'Mobile',
      nickName: 'NickName',
      notificationMode: 'NotificationMode',
      parentUid: 'ParentUid',
      roleIdList: 'RoleIdList',
      roleNameList: 'RoleNameList',
      signatureMethod: 'SignatureMethod',
      state: 'State',
      uid: 'Uid',
      userId: 'UserId',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curExecuteCount: 'number',
      curResultCount: 'number',
      dingRobot: 'string',
      email: 'string',
      lastLoginTime: 'string',
      maxExecuteCount: 'number',
      maxResultCount: 'number',
      mobile: 'string',
      nickName: 'string',
      notificationMode: 'string',
      parentUid: 'number',
      roleIdList: GetUserResponseBodyUserRoleIdList,
      roleNameList: GetUserResponseBodyUserRoleNameList,
      signatureMethod: 'string',
      state: 'string',
      uid: 'string',
      userId: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserActiveTenantResponseBodyTenant extends $tea.Model {
  status?: string;
  tenantName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tenantName: 'TenantName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tenantName: 'string',
      tid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam extends $tea.Model {
  bucketName?: string;
  endpoint?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      endpoint: 'Endpoint',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      objectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponseBodyUploadFileJobDetail extends $tea.Model {
  attachmentKey?: string;
  fileName?: string;
  fileSize?: number;
  fileSource?: string;
  jobKey?: string;
  jobStatus?: string;
  jobStatusDesc?: string;
  uploadOSSParam?: GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam;
  uploadType?: string;
  uploadURL?: string;
  uploadedSize?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileSource: 'FileSource',
      jobKey: 'JobKey',
      jobStatus: 'JobStatus',
      jobStatusDesc: 'JobStatusDesc',
      uploadOSSParam: 'UploadOSSParam',
      uploadType: 'UploadType',
      uploadURL: 'UploadURL',
      uploadedSize: 'UploadedSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileSource: 'string',
      jobKey: 'string',
      jobStatus: 'string',
      jobStatusDesc: 'string',
      uploadOSSParam: GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam,
      uploadType: 'string',
      uploadURL: 'string',
      uploadedSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsResponseBodyColumnListColumn extends $tea.Model {
  autoIncrement?: boolean;
  columnId?: string;
  columnName?: string;
  columnType?: string;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  defaultValue?: string;
  description?: string;
  functionType?: string;
  nullable?: boolean;
  securityLevel?: string;
  sensitive?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      description: 'Description',
      functionType: 'FunctionType',
      nullable: 'Nullable',
      securityLevel: 'SecurityLevel',
      sensitive: 'Sensitive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      columnId: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      description: 'string',
      functionType: 'string',
      nullable: 'boolean',
      securityLevel: 'string',
      sensitive: 'boolean',
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

export class ListDBTaskSQLJobResponseBodyDBTaskSQLJobList extends $tea.Model {
  comment?: string;
  createTime?: string;
  dbId?: number;
  dbSearchName?: string;
  dbTaskGroupId?: number;
  jobId?: number;
  jobType?: string;
  lastExecTime?: string;
  logic?: boolean;
  status?: string;
  transactional?: boolean;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      dbId: 'DbId',
      dbSearchName: 'DbSearchName',
      dbTaskGroupId: 'DbTaskGroupId',
      jobId: 'JobId',
      jobType: 'JobType',
      lastExecTime: 'LastExecTime',
      logic: 'Logic',
      status: 'Status',
      transactional: 'Transactional',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'string',
      dbId: 'number',
      dbSearchName: 'string',
      dbTaskGroupId: 'number',
      jobId: 'number',
      jobType: 'string',
      lastExecTime: 'string',
      logic: 'boolean',
      status: 'string',
      transactional: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList extends $tea.Model {
  affectRows?: number;
  currentSql?: string;
  dbId?: number;
  endTime?: string;
  executeCount?: number;
  jobDetailId?: number;
  jobId?: number;
  log?: string;
  logic?: boolean;
  skip?: boolean;
  sqlType?: string;
  startTime?: string;
  status?: string;
  timeDelay?: number;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      currentSql: 'CurrentSql',
      dbId: 'DbId',
      endTime: 'EndTime',
      executeCount: 'ExecuteCount',
      jobDetailId: 'JobDetailId',
      jobId: 'JobId',
      log: 'Log',
      logic: 'Logic',
      skip: 'Skip',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      status: 'Status',
      timeDelay: 'TimeDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      currentSql: 'string',
      dbId: 'number',
      endTime: 'string',
      executeCount: 'number',
      jobDetailId: 'number',
      jobId: 'number',
      log: 'string',
      logic: 'boolean',
      skip: 'boolean',
      sqlType: 'string',
      startTime: 'string',
      status: 'string',
      timeDelay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList extends $tea.Model {
  DBTaskGroupId?: number;
  executeCount?: number;
  scripts?: string;
  statusDesc?: string;
  tableName?: string;
  taskJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBTaskGroupId: 'DBTaskGroupId',
      executeCount: 'ExecuteCount',
      scripts: 'Scripts',
      statusDesc: 'StatusDesc',
      tableName: 'TableName',
      taskJobStatus: 'TaskJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskGroupId: 'number',
      executeCount: 'number',
      scripts: 'string',
      statusDesc: 'string',
      tableName: 'string',
      taskJobStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList extends $tea.Model {
  dbId?: number;
  logic?: boolean;
  planTime?: string;
  publishJobList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList[];
  publishStrategy?: string;
  statusDesc?: string;
  taskJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      planTime: 'PlanTime',
      publishJobList: 'PublishJobList',
      publishStrategy: 'PublishStrategy',
      statusDesc: 'StatusDesc',
      taskJobStatus: 'TaskJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      planTime: 'string',
      publishJobList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList },
      publishStrategy: 'string',
      statusDesc: 'string',
      taskJobStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDDLPublishRecordsResponseBodyDDLPublishRecordList extends $tea.Model {
  auditExpireTime?: string;
  auditStatus?: string;
  creatorId?: number;
  finality?: boolean;
  finalityReason?: string;
  publishStatus?: string;
  publishTaskInfoList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList[];
  riskLevel?: string;
  statusDesc?: string;
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      auditExpireTime: 'AuditExpireTime',
      auditStatus: 'AuditStatus',
      creatorId: 'CreatorId',
      finality: 'Finality',
      finalityReason: 'FinalityReason',
      publishStatus: 'PublishStatus',
      publishTaskInfoList: 'PublishTaskInfoList',
      riskLevel: 'RiskLevel',
      statusDesc: 'StatusDesc',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditExpireTime: 'string',
      auditStatus: 'string',
      creatorId: 'number',
      finality: 'boolean',
      finalityReason: 'string',
      publishStatus: 'string',
      publishTaskInfoList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList },
      riskLevel: 'string',
      statusDesc: 'string',
      workflowInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckDBResponseBodyPreCheckDBList extends $tea.Model {
  dbId?: number;
  searchName?: string;
  sqlNum?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      searchName: 'SearchName',
      sqlNum: 'SqlNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      searchName: 'string',
      sqlNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCorrectPreCheckSQLResponseBodyPreCheckSQLList extends $tea.Model {
  affectRows?: number;
  checkSQL?: string;
  dbId?: number;
  SQLReviewQueryKey?: string;
  sqlReviewStatus?: string;
  sqlType?: string;
  tableNames?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      checkSQL: 'CheckSQL',
      dbId: 'DbId',
      SQLReviewQueryKey: 'SQLReviewQueryKey',
      sqlReviewStatus: 'SqlReviewStatus',
      sqlType: 'SqlType',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      checkSQL: 'string',
      dbId: 'number',
      SQLReviewQueryKey: 'string',
      sqlReviewStatus: 'string',
      sqlType: 'string',
      tableNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $tea.Model {
  createDate?: string;
  expireDate?: string;
  extraData?: string;
  originFrom?: string;
  permType?: string;
  userAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      expireDate: 'ExpireDate',
      extraData: 'ExtraData',
      originFrom: 'OriginFrom',
      permType: 'PermType',
      userAccessId: 'UserAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      expireDate: 'string',
      extraData: 'string',
      originFrom: 'string',
      permType: 'string',
      userAccessId: 'string',
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
  alias?: string;
  columnName?: string;
  dbId?: string;
  dbType?: string;
  dsType?: string;
  envType?: string;
  instanceId?: string;
  logic?: boolean;
  permDetails?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails;
  schemaName?: string;
  searchName?: string;
  tableId?: string;
  tableName?: string;
  userId?: string;
  userNickName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      columnName: 'ColumnName',
      dbId: 'DbId',
      dbType: 'DbType',
      dsType: 'DsType',
      envType: 'EnvType',
      instanceId: 'InstanceId',
      logic: 'Logic',
      permDetails: 'PermDetails',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      tableId: 'TableId',
      tableName: 'TableName',
      userId: 'UserId',
      userNickName: 'UserNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      columnName: 'string',
      dbId: 'string',
      dbType: 'string',
      dsType: 'string',
      envType: 'string',
      instanceId: 'string',
      logic: 'boolean',
      permDetails: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails,
      schemaName: 'string',
      searchName: 'string',
      tableId: 'string',
      tableName: 'string',
      userId: 'string',
      userNickName: 'string',
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
  catalogName?: string;
  databaseId?: string;
  dbType?: string;
  dbaId?: string;
  dbaName?: string;
  encoding?: string;
  envType?: string;
  host?: string;
  instanceId?: string;
  ownerIdList?: ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList;
  ownerNameList?: ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList;
  port?: number;
  schemaName?: string;
  searchName?: string;
  sid?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      databaseId: 'DatabaseId',
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaName: 'DbaName',
      encoding: 'Encoding',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      sid: 'Sid',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      databaseId: 'string',
      dbType: 'string',
      dbaId: 'string',
      dbaName: 'string',
      encoding: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      ownerIdList: ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList,
      ownerNameList: ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      sid: 'string',
      state: 'string',
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

export class ListIndexesResponseBodyIndexListIndex extends $tea.Model {
  indexComment?: string;
  indexId?: string;
  indexName?: string;
  indexType?: string;
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      indexComment: 'IndexComment',
      indexId: 'IndexId',
      indexName: 'IndexName',
      indexType: 'IndexType',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexComment: 'string',
      indexId: 'string',
      indexName: 'string',
      indexType: 'string',
      tableId: 'string',
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

export class ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog extends $tea.Model {
  dbUser?: string;
  instanceId?: number;
  instanceName?: string;
  opTime?: string;
  requestIp?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbUser: 'DbUser',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      opTime: 'OpTime',
      requestIp: 'RequestIp',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbUser: 'string',
      instanceId: 'number',
      instanceName: 'string',
      opTime: 'string',
      requestIp: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogList extends $tea.Model {
  instanceLoginAuditLog?: ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog[];
  static names(): { [key: string]: string } {
    return {
      instanceLoginAuditLog: 'InstanceLoginAuditLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceLoginAuditLog: { 'type': 'array', 'itemType': ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $tea.Model {
  createDate?: string;
  expireDate?: string;
  extraData?: string;
  originFrom?: string;
  permType?: string;
  userAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      expireDate: 'ExpireDate',
      extraData: 'ExtraData',
      originFrom: 'OriginFrom',
      permType: 'PermType',
      userAccessId: 'UserAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      expireDate: 'string',
      extraData: 'string',
      originFrom: 'string',
      permType: 'string',
      userAccessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails extends $tea.Model {
  permDetail?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission extends $tea.Model {
  instanceId?: string;
  permDetails?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
  userId?: string;
  userNickName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      permDetails: 'PermDetails',
      userId: 'UserId',
      userNickName: 'UserNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      permDetails: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails,
      userId: 'string',
      userNickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponseBodyUserPermissions extends $tea.Model {
  userPermission?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission },
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

export class ListInstancesResponseBodyInstanceListInstanceStandardGroup extends $tea.Model {
  groupMode?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupMode: 'GroupMode',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMode: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListInstance extends $tea.Model {
  dataLinkName?: string;
  databasePassword?: string;
  databaseUser?: string;
  dbaId?: string;
  dbaNickName?: string;
  ddlOnline?: number;
  ecsInstanceId?: string;
  ecsRegion?: string;
  envType?: string;
  exportTimeout?: number;
  host?: string;
  instanceAlias?: string;
  instanceId?: string;
  instanceSource?: string;
  instanceType?: string;
  ownerIdList?: ListInstancesResponseBodyInstanceListInstanceOwnerIdList;
  ownerNameList?: ListInstancesResponseBodyInstanceListInstanceOwnerNameList;
  port?: number;
  queryTimeout?: number;
  safeRuleId?: string;
  sid?: string;
  standardGroup?: ListInstancesResponseBodyInstanceListInstanceStandardGroup;
  state?: string;
  useDsql?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      dbaId: 'DbaId',
      dbaNickName: 'DbaNickName',
      ddlOnline: 'DdlOnline',
      ecsInstanceId: 'EcsInstanceId',
      ecsRegion: 'EcsRegion',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      safeRuleId: 'SafeRuleId',
      sid: 'Sid',
      standardGroup: 'StandardGroup',
      state: 'State',
      useDsql: 'UseDsql',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      databasePassword: 'string',
      databaseUser: 'string',
      dbaId: 'string',
      dbaNickName: 'string',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      ownerIdList: ListInstancesResponseBodyInstanceListInstanceOwnerIdList,
      ownerNameList: ListInstancesResponseBodyInstanceListInstanceOwnerNameList,
      port: 'number',
      queryTimeout: 'number',
      safeRuleId: 'string',
      sid: 'string',
      standardGroup: ListInstancesResponseBodyInstanceListInstanceStandardGroup,
      state: 'string',
      useDsql: 'number',
      vpcId: 'string',
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
  alias?: string;
  databaseId?: string;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  ownerIdList?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList;
  ownerNameList?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList;
  schemaName?: string;
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseId: 'DatabaseId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseId: 'string',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIdList: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList,
      ownerNameList: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList,
      schemaName: 'string',
      searchName: 'string',
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

export class ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig extends $tea.Model {
  routeExpr?: string;
  routeKey?: string;
  tableId?: number;
  static names(): { [key: string]: string } {
    return {
      routeExpr: 'RouteExpr',
      routeKey: 'RouteKey',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeExpr: 'string',
      routeKey: 'string',
      tableId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList extends $tea.Model {
  logicTableRouteConfig?: ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig[];
  static names(): { [key: string]: string } {
    return {
      logicTableRouteConfig: 'LogicTableRouteConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicTableRouteConfig: { 'type': 'array', 'itemType': ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig },
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
  logic?: boolean;
  ownerIdList?: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList;
  ownerNameList?: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList;
  schemaName?: string;
  tableCount?: string;
  tableExpr?: string;
  tableGuid?: string;
  tableId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      schemaName: 'SchemaName',
      tableCount: 'TableCount',
      tableExpr: 'TableExpr',
      tableGuid: 'TableGuid',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      logic: 'boolean',
      ownerIdList: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList,
      ownerNameList: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList,
      schemaName: 'string',
      tableCount: 'string',
      tableExpr: 'string',
      tableGuid: 'string',
      tableId: 'string',
      tableName: 'string',
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

export class ListOrdersResponseBodyOrdersOrder extends $tea.Model {
  comment?: string;
  committer?: string;
  committerId?: number;
  createTime?: string;
  lastModifyTime?: string;
  orderId?: number;
  pluginType?: string;
  statusCode?: string;
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      committer: 'Committer',
      committerId: 'CommitterId',
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      orderId: 'OrderId',
      pluginType: 'PluginType',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      committer: 'string',
      committerId: 'number',
      createTime: 'string',
      lastModifyTime: 'string',
      orderId: 'number',
      pluginType: 'string',
      statusCode: 'string',
      statusDesc: 'string',
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

export class ListProxiesResponseBodyProxyList extends $tea.Model {
  creatorId?: number;
  creatorName?: string;
  httpsPort?: number;
  instanceId?: number;
  mysqlPort?: number;
  privateEnable?: boolean;
  privateHost?: string;
  proxyId?: number;
  publicEnable?: boolean;
  publicHost?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      httpsPort: 'HttpsPort',
      instanceId: 'InstanceId',
      mysqlPort: 'MysqlPort',
      privateEnable: 'PrivateEnable',
      privateHost: 'PrivateHost',
      proxyId: 'ProxyId',
      publicEnable: 'PublicEnable',
      publicHost: 'PublicHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'number',
      creatorName: 'string',
      httpsPort: 'number',
      instanceId: 'number',
      mysqlPort: 'number',
      privateEnable: 'boolean',
      privateHost: 'string',
      proxyId: 'number',
      publicEnable: 'boolean',
      publicHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxyAccessesResponseBodyProxyAccessList extends $tea.Model {
  accessId?: string;
  gmtCreate?: string;
  indepAccount?: string;
  instanceId?: number;
  originInfo?: string;
  proxyAccessId?: number;
  proxyId?: number;
  userId?: number;
  userName?: string;
  userUid?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      gmtCreate: 'GmtCreate',
      indepAccount: 'IndepAccount',
      instanceId: 'InstanceId',
      originInfo: 'OriginInfo',
      proxyAccessId: 'ProxyAccessId',
      proxyId: 'ProxyId',
      userId: 'UserId',
      userName: 'UserName',
      userUid: 'UserUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      gmtCreate: 'string',
      indepAccount: 'string',
      instanceId: 'number',
      originInfo: 'string',
      proxyAccessId: 'number',
      proxyId: 'number',
      userId: 'number',
      userName: 'string',
      userUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogListProxySQLExecAuditLog extends $tea.Model {
  affectRows?: number;
  elapsedTime?: number;
  execState?: string;
  instanceId?: number;
  instanceName?: string;
  opTime?: string;
  remark?: string;
  SQL?: string;
  SQLType?: string;
  schemaName?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      elapsedTime: 'ElapsedTime',
      execState: 'ExecState',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      opTime: 'OpTime',
      remark: 'Remark',
      SQL: 'SQL',
      SQLType: 'SQLType',
      schemaName: 'SchemaName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      elapsedTime: 'number',
      execState: 'string',
      instanceId: 'number',
      instanceName: 'string',
      opTime: 'string',
      remark: 'string',
      SQL: 'string',
      SQLType: 'string',
      schemaName: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList extends $tea.Model {
  proxySQLExecAuditLog?: ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogListProxySQLExecAuditLog[];
  static names(): { [key: string]: string } {
    return {
      proxySQLExecAuditLog: 'ProxySQLExecAuditLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxySQLExecAuditLog: { 'type': 'array', 'itemType': ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogListProxySQLExecAuditLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLExecAuditLogResponseBodySQLExecAuditLogListSQLExecAuditLog extends $tea.Model {
  affectRows?: number;
  dbId?: number;
  elapsedTime?: number;
  execState?: string;
  instanceId?: number;
  instanceName?: string;
  logic?: boolean;
  opTime?: string;
  remark?: string;
  SQL?: string;
  SQLType?: string;
  schemaName?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      dbId: 'DbId',
      elapsedTime: 'ElapsedTime',
      execState: 'ExecState',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      logic: 'Logic',
      opTime: 'OpTime',
      remark: 'Remark',
      SQL: 'SQL',
      SQLType: 'SQLType',
      schemaName: 'SchemaName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      dbId: 'number',
      elapsedTime: 'number',
      execState: 'string',
      instanceId: 'number',
      instanceName: 'string',
      logic: 'boolean',
      opTime: 'string',
      remark: 'string',
      SQL: 'string',
      SQLType: 'string',
      schemaName: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLExecAuditLogResponseBodySQLExecAuditLogList extends $tea.Model {
  SQLExecAuditLog?: ListSQLExecAuditLogResponseBodySQLExecAuditLogListSQLExecAuditLog[];
  static names(): { [key: string]: string } {
    return {
      SQLExecAuditLog: 'SQLExecAuditLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLExecAuditLog: { 'type': 'array', 'itemType': ListSQLExecAuditLogResponseBodySQLExecAuditLogListSQLExecAuditLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLReviewOriginSQLRequestOrderActionDetailPage extends $tea.Model {
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

export class ListSQLReviewOriginSQLRequestOrderActionDetail extends $tea.Model {
  checkStatusResult?: string;
  fileId?: number;
  page?: ListSQLReviewOriginSQLRequestOrderActionDetailPage;
  SQLReviewResult?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatusResult: 'CheckStatusResult',
      fileId: 'FileId',
      page: 'Page',
      SQLReviewResult: 'SQLReviewResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatusResult: 'string',
      fileId: 'number',
      page: ListSQLReviewOriginSQLRequestOrderActionDetailPage,
      SQLReviewResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLReviewOriginSQLResponseBodyOriginSQLList extends $tea.Model {
  checkStatus?: string;
  checkedTime?: string;
  fileId?: number;
  fileName?: string;
  reviewSummary?: string;
  SQLContent?: string;
  SQLId?: number;
  SQLReviewQueryKey?: string;
  sqlHash?: string;
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkedTime: 'CheckedTime',
      fileId: 'FileId',
      fileName: 'FileName',
      reviewSummary: 'ReviewSummary',
      SQLContent: 'SQLContent',
      SQLId: 'SQLId',
      SQLReviewQueryKey: 'SQLReviewQueryKey',
      sqlHash: 'SqlHash',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkedTime: 'string',
      fileId: 'number',
      fileName: 'string',
      reviewSummary: 'string',
      SQLContent: 'string',
      SQLId: 'number',
      SQLReviewQueryKey: 'string',
      sqlHash: 'string',
      statusDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnsResponseBodySensitiveColumnListSensitiveColumn extends $tea.Model {
  columnCount?: number;
  columnName?: string;
  functionType?: string;
  schemaName?: string;
  securityLevel?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      columnName: 'ColumnName',
      functionType: 'FunctionType',
      schemaName: 'SchemaName',
      securityLevel: 'SecurityLevel',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      columnName: 'string',
      functionType: 'string',
      schemaName: 'string',
      securityLevel: 'string',
      tableName: 'string',
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

export class ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail extends $tea.Model {
  columnDescription?: string;
  columnName?: string;
  columnType?: string;
  dbId?: number;
  dbType?: string;
  envType?: string;
  logic?: boolean;
  schemaName?: string;
  searchName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnDescription: 'ColumnDescription',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDescription: 'string',
      columnName: 'string',
      columnType: 'string',
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      schemaName: 'string',
      searchName: 'string',
      tableName: 'string',
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
  description?: string;
  encoding?: string;
  engine?: string;
  numRows?: number;
  ownerIdList?: ListTablesResponseBodyTableListTableOwnerIdList;
  ownerNameList?: ListTablesResponseBodyTableListTableOwnerNameList;
  storeCapacity?: number;
  tableGuid?: string;
  tableId?: string;
  tableName?: string;
  tableSchemaName?: string;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      description: 'Description',
      encoding: 'Encoding',
      engine: 'Engine',
      numRows: 'NumRows',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      storeCapacity: 'StoreCapacity',
      tableGuid: 'TableGuid',
      tableId: 'TableId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      description: 'string',
      encoding: 'string',
      engine: 'string',
      numRows: 'number',
      ownerIdList: ListTablesResponseBodyTableListTableOwnerIdList,
      ownerNameList: ListTablesResponseBodyTableListTableOwnerNameList,
      storeCapacity: 'number',
      tableGuid: 'string',
      tableId: 'string',
      tableName: 'string',
      tableSchemaName: 'string',
      tableType: 'string',
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

export class ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $tea.Model {
  createDate?: string;
  expireDate?: string;
  extraData?: string;
  originFrom?: string;
  permType?: string;
  userAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      expireDate: 'ExpireDate',
      extraData: 'ExtraData',
      originFrom: 'OriginFrom',
      permType: 'PermType',
      userAccessId: 'UserAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      expireDate: 'string',
      extraData: 'string',
      originFrom: 'string',
      permType: 'string',
      userAccessId: 'string',
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
  alias?: string;
  columnName?: string;
  dbId?: string;
  dbType?: string;
  dsType?: string;
  envType?: string;
  host?: string;
  instanceId?: string;
  logic?: boolean;
  permDetails?: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
  port?: number;
  schemaName?: string;
  searchName?: string;
  tableId?: string;
  tableName?: string;
  userId?: string;
  userNickName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      columnName: 'ColumnName',
      dbId: 'DbId',
      dbType: 'DbType',
      dsType: 'DsType',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      logic: 'Logic',
      permDetails: 'PermDetails',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      tableId: 'TableId',
      tableName: 'TableName',
      userId: 'UserId',
      userNickName: 'UserNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      columnName: 'string',
      dbId: 'string',
      dbType: 'string',
      dsType: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      logic: 'boolean',
      permDetails: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      tableId: 'string',
      tableName: 'string',
      userId: 'string',
      userNickName: 'string',
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

export class ListUserTenantsResponseBodyTenantList extends $tea.Model {
  status?: string;
  tenantName?: string;
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tenantName: 'TenantName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tenantName: 'string',
      tid: 'number',
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
  curExecuteCount?: number;
  curResultCount?: number;
  dingRobot?: string;
  email?: string;
  lastLoginTime?: string;
  maxExecuteCount?: number;
  maxResultCount?: number;
  mobile?: string;
  nickName?: string;
  notificationMode?: string;
  parentUid?: string;
  roleIdList?: ListUsersResponseBodyUserListUserRoleIdList;
  roleNameList?: ListUsersResponseBodyUserListUserRoleNameList;
  signatureMethod?: string;
  state?: string;
  uid?: string;
  userId?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      curExecuteCount: 'CurExecuteCount',
      curResultCount: 'CurResultCount',
      dingRobot: 'DingRobot',
      email: 'Email',
      lastLoginTime: 'LastLoginTime',
      maxExecuteCount: 'MaxExecuteCount',
      maxResultCount: 'MaxResultCount',
      mobile: 'Mobile',
      nickName: 'NickName',
      notificationMode: 'NotificationMode',
      parentUid: 'ParentUid',
      roleIdList: 'RoleIdList',
      roleNameList: 'RoleNameList',
      signatureMethod: 'SignatureMethod',
      state: 'State',
      uid: 'Uid',
      userId: 'UserId',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curExecuteCount: 'number',
      curResultCount: 'number',
      dingRobot: 'string',
      email: 'string',
      lastLoginTime: 'string',
      maxExecuteCount: 'number',
      maxResultCount: 'number',
      mobile: 'string',
      nickName: 'string',
      notificationMode: 'string',
      parentUid: 'string',
      roleIdList: ListUsersResponseBodyUserListUserRoleIdList,
      roleNameList: ListUsersResponseBodyUserListUserRoleNameList,
      signatureMethod: 'string',
      state: 'string',
      uid: 'string',
      userId: 'string',
      webhook: 'string',
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

export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsersAuditUser extends $tea.Model {
  nickName?: string;
  realName?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      realName: 'RealName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      realName: 'string',
      userId: 'number',
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
  auditUsers?: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers;
  comment?: string;
  createUserId?: number;
  createUserNickName?: string;
  nodeId?: number;
  nodeName?: string;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      auditUsers: 'AuditUsers',
      comment: 'Comment',
      createUserId: 'CreateUserId',
      createUserNickName: 'CreateUserNickName',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUsers: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers,
      comment: 'string',
      createUserId: 'number',
      createUserNickName: 'string',
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'string',
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

export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode extends $tea.Model {
  comment?: string;
  createUserId?: number;
  nodeId?: number;
  nodeName?: string;
  nodeType?: string;
  position?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createUserId: 'CreateUserId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      position: 'Position',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createUserId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'string',
      position: 'number',
      templateId: 'number',
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
  comment?: string;
  createUserId?: number;
  enabled?: string;
  isSystem?: number;
  templateId?: number;
  templateName?: string;
  workflowNodes?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createUserId: 'CreateUserId',
      enabled: 'Enabled',
      isSystem: 'IsSystem',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      workflowNodes: 'WorkflowNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createUserId: 'number',
      enabled: 'string',
      isSystem: 'number',
      templateId: 'number',
      templateName: 'string',
      workflowNodes: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes,
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
  alias?: string;
  databaseId?: string;
  datalinkName?: string;
  dbType?: string;
  dbaId?: string;
  encoding?: string;
  envType?: string;
  host?: string;
  logic?: boolean;
  ownerIdList?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList;
  ownerNameList?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList;
  port?: number;
  schemaName?: string;
  searchName?: string;
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseId: 'DatabaseId',
      datalinkName: 'DatalinkName',
      dbType: 'DbType',
      dbaId: 'DbaId',
      encoding: 'Encoding',
      envType: 'EnvType',
      host: 'Host',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseId: 'string',
      datalinkName: 'string',
      dbType: 'string',
      dbaId: 'string',
      encoding: 'string',
      envType: 'string',
      host: 'string',
      logic: 'boolean',
      ownerIdList: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList,
      ownerNameList: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      sid: 'string',
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
  DBSearchName?: string;
  databaseId?: string;
  dbName?: string;
  dbType?: string;
  description?: string;
  encoding?: string;
  engine?: string;
  envType?: string;
  logic?: boolean;
  ownerIdList?: SearchTableResponseBodySearchTableListSearchTableOwnerIdList;
  ownerNameList?: SearchTableResponseBodySearchTableListSearchTableOwnerNameList;
  tableGuid?: string;
  tableId?: string;
  tableName?: string;
  tableSchemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBSearchName: 'DBSearchName',
      databaseId: 'DatabaseId',
      dbName: 'DbName',
      dbType: 'DbType',
      description: 'Description',
      encoding: 'Encoding',
      engine: 'Engine',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      tableGuid: 'TableGuid',
      tableId: 'TableId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBSearchName: 'string',
      databaseId: 'string',
      dbName: 'string',
      dbType: 'string',
      description: 'string',
      encoding: 'string',
      engine: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIdList: SearchTableResponseBodySearchTableListSearchTableOwnerIdList,
      ownerNameList: SearchTableResponseBodySearchTableListSearchTableOwnerNameList,
      tableGuid: 'string',
      tableId: 'string',
      tableName: 'string',
      tableSchemaName: 'string',
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

export class SubmitSparkJobRequestOssInfo extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      endpoint: 'string',
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

  async addLogicTableRouteConfigWithOptions(request: AddLogicTableRouteConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLogicTableRouteConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.routeExpr)) {
      query["RouteExpr"] = request.routeExpr;
    }

    if (!Util.isUnset(request.routeKey)) {
      query["RouteKey"] = request.routeKey;
    }

    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddLogicTableRouteConfig",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddLogicTableRouteConfigResponse>(await this.callApi(params, req, runtime), new AddLogicTableRouteConfigResponse({}));
  }

  async addLogicTableRouteConfig(request: AddLogicTableRouteConfigRequest): Promise<AddLogicTableRouteConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLogicTableRouteConfigWithOptions(request, runtime);
  }

  async approveOrderWithOptions(request: ApproveOrderRequest, runtime: $Util.RuntimeOptions): Promise<ApproveOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.workflowInstanceId)) {
      query["WorkflowInstanceId"] = request.workflowInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApproveOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApproveOrderResponse>(await this.callApi(params, req, runtime), new ApproveOrderResponse({}));
  }

  async approveOrder(request: ApproveOrderRequest): Promise<ApproveOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveOrderWithOptions(request, runtime);
  }

  async changeColumnSecLevelWithOptions(request: ChangeColumnSecLevelRequest, runtime: $Util.RuntimeOptions): Promise<ChangeColumnSecLevelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.isLogic)) {
      query["IsLogic"] = request.isLogic;
    }

    if (!Util.isUnset(request.newLevel)) {
      query["NewLevel"] = request.newLevel;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeColumnSecLevel",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeColumnSecLevelResponse>(await this.callApi(params, req, runtime), new ChangeColumnSecLevelResponse({}));
  }

  async changeColumnSecLevel(request: ChangeColumnSecLevelRequest): Promise<ChangeColumnSecLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeColumnSecLevelWithOptions(request, runtime);
  }

  async closeOrderWithOptions(request: CloseOrderRequest, runtime: $Util.RuntimeOptions): Promise<CloseOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.closeReason)) {
      query["CloseReason"] = request.closeReason;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseOrderResponse>(await this.callApi(params, req, runtime), new CloseOrderResponse({}));
  }

  async closeOrder(request: CloseOrderRequest): Promise<CloseOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeOrderWithOptions(request, runtime);
  }

  async createDataCorrectOrderWithOptions(tmpReq: CreateDataCorrectOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataCorrectOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDataCorrectOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.param))) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.param), "Param", "json");
    }

    if (!Util.isUnset(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!Util.isUnset(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataCorrectOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataCorrectOrderResponse>(await this.callApi(params, req, runtime), new CreateDataCorrectOrderResponse({}));
  }

  async createDataCorrectOrder(request: CreateDataCorrectOrderRequest): Promise<CreateDataCorrectOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataCorrectOrderWithOptions(request, runtime);
  }

  async createDataCronClearOrderWithOptions(tmpReq: CreateDataCronClearOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataCronClearOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDataCronClearOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.param))) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.param), "Param", "json");
    }

    if (!Util.isUnset(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!Util.isUnset(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataCronClearOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataCronClearOrderResponse>(await this.callApi(params, req, runtime), new CreateDataCronClearOrderResponse({}));
  }

  async createDataCronClearOrder(request: CreateDataCronClearOrderRequest): Promise<CreateDataCronClearOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataCronClearOrderWithOptions(request, runtime);
  }

  async createDataImportOrderWithOptions(tmpReq: CreateDataImportOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataImportOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDataImportOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.param))) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.param), "Param", "json");
    }

    if (!Util.isUnset(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!Util.isUnset(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataImportOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataImportOrderResponse>(await this.callApi(params, req, runtime), new CreateDataImportOrderResponse({}));
  }

  async createDataImportOrder(request: CreateDataImportOrderRequest): Promise<CreateDataImportOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataImportOrderWithOptions(request, runtime);
  }

  async createFreeLockCorrectOrderWithOptions(tmpReq: CreateFreeLockCorrectOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFreeLockCorrectOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFreeLockCorrectOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.param))) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.param), "Param", "json");
    }

    if (!Util.isUnset(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!Util.isUnset(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFreeLockCorrectOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFreeLockCorrectOrderResponse>(await this.callApi(params, req, runtime), new CreateFreeLockCorrectOrderResponse({}));
  }

  async createFreeLockCorrectOrder(request: CreateFreeLockCorrectOrderRequest): Promise<CreateFreeLockCorrectOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFreeLockCorrectOrderWithOptions(request, runtime);
  }

  async createLogicDatabaseWithOptions(tmpReq: CreateLogicDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<CreateLogicDatabaseResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateLogicDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.databaseIds)) {
      request.databaseIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.databaseIds, "DatabaseIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.databaseIdsShrink)) {
      query["DatabaseIds"] = request.databaseIdsShrink;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLogicDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLogicDatabaseResponse>(await this.callApi(params, req, runtime), new CreateLogicDatabaseResponse({}));
  }

  async createLogicDatabase(request: CreateLogicDatabaseRequest): Promise<CreateLogicDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLogicDatabaseWithOptions(request, runtime);
  }

  async createOrderWithOptions(tmpReq: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.pluginParam)) {
      request.pluginParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pluginParam, "PluginParam", "json");
    }

    let query = { };
    if (!Util.isUnset(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!Util.isUnset(request.relatedUserList)) {
      query["RelatedUserList"] = request.relatedUserList;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pluginParamShrink)) {
      body["PluginParam"] = request.pluginParamShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderResponse>(await this.callApi(params, req, runtime), new CreateOrderResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  async createProxyWithOptions(request: CreateProxyRequest, runtime: $Util.RuntimeOptions): Promise<CreateProxyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProxy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProxyResponse>(await this.callApi(params, req, runtime), new CreateProxyResponse({}));
  }

  async createProxy(request: CreateProxyRequest): Promise<CreateProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProxyWithOptions(request, runtime);
  }

  async createProxyAccessWithOptions(request: CreateProxyAccessRequest, runtime: $Util.RuntimeOptions): Promise<CreateProxyAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.indepAccount)) {
      query["IndepAccount"] = request.indepAccount;
    }

    if (!Util.isUnset(request.indepPassword)) {
      query["IndepPassword"] = request.indepPassword;
    }

    if (!Util.isUnset(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProxyAccess",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProxyAccessResponse>(await this.callApi(params, req, runtime), new CreateProxyAccessResponse({}));
  }

  async createProxyAccess(request: CreateProxyAccessRequest): Promise<CreateProxyAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProxyAccessWithOptions(request, runtime);
  }

  async createPublishGroupTaskWithOptions(request: CreatePublishGroupTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreatePublishGroupTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.planTime)) {
      query["PlanTime"] = request.planTime;
    }

    if (!Util.isUnset(request.publishStrategy)) {
      query["PublishStrategy"] = request.publishStrategy;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePublishGroupTask",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePublishGroupTaskResponse>(await this.callApi(params, req, runtime), new CreatePublishGroupTaskResponse({}));
  }

  async createPublishGroupTask(request: CreatePublishGroupTaskRequest): Promise<CreatePublishGroupTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPublishGroupTaskWithOptions(request, runtime);
  }

  async createSQLReviewOrderWithOptions(tmpReq: CreateSQLReviewOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateSQLReviewOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSQLReviewOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.param))) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.param), "Param", "json");
    }

    if (!Util.isUnset(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!Util.isUnset(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSQLReviewOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSQLReviewOrderResponse>(await this.callApi(params, req, runtime), new CreateSQLReviewOrderResponse({}));
  }

  async createSQLReviewOrder(request: CreateSQLReviewOrderRequest): Promise<CreateSQLReviewOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSQLReviewOrderWithOptions(request, runtime);
  }

  async createStructSyncOrderWithOptions(tmpReq: CreateStructSyncOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateStructSyncOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStructSyncOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.param))) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.param), "Param", "json");
    }

    if (!Util.isUnset(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!Util.isUnset(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStructSyncOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStructSyncOrderResponse>(await this.callApi(params, req, runtime), new CreateStructSyncOrderResponse({}));
  }

  async createStructSyncOrder(request: CreateStructSyncOrderRequest): Promise<CreateStructSyncOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStructSyncOrderWithOptions(request, runtime);
  }

  async createUploadFileJobWithOptions(request: CreateUploadFileJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadFileJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileSource)) {
      query["FileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.uploadURL)) {
      query["UploadURL"] = request.uploadURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadFileJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadFileJobResponse>(await this.callApi(params, req, runtime), new CreateUploadFileJobResponse({}));
  }

  async createUploadFileJob(request: CreateUploadFileJobRequest): Promise<CreateUploadFileJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadFileJobWithOptions(request, runtime);
  }

  async createUploadOSSFileJobWithOptions(tmpReq: CreateUploadOSSFileJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadOSSFileJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateUploadOSSFileJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.uploadTarget))) {
      request.uploadTargetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.uploadTarget), "UploadTarget", "json");
    }

    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileSource)) {
      query["FileSource"] = request.fileSource;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.uploadTargetShrink)) {
      query["UploadTarget"] = request.uploadTargetShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadOSSFileJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadOSSFileJobResponse>(await this.callApi(params, req, runtime), new CreateUploadOSSFileJobResponse({}));
  }

  async createUploadOSSFileJob(request: CreateUploadOSSFileJobRequest): Promise<CreateUploadOSSFileJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadOSSFileJobWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteLogicDatabaseWithOptions(request: DeleteLogicDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLogicDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logicDbId)) {
      query["LogicDbId"] = request.logicDbId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogicDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLogicDatabaseResponse>(await this.callApi(params, req, runtime), new DeleteLogicDatabaseResponse({}));
  }

  async deleteLogicDatabase(request: DeleteLogicDatabaseRequest): Promise<DeleteLogicDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLogicDatabaseWithOptions(request, runtime);
  }

  async deleteLogicTableRouteConfigWithOptions(request: DeleteLogicTableRouteConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLogicTableRouteConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.routeKey)) {
      query["RouteKey"] = request.routeKey;
    }

    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogicTableRouteConfig",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLogicTableRouteConfigResponse>(await this.callApi(params, req, runtime), new DeleteLogicTableRouteConfigResponse({}));
  }

  async deleteLogicTableRouteConfig(request: DeleteLogicTableRouteConfigRequest): Promise<DeleteLogicTableRouteConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLogicTableRouteConfigWithOptions(request, runtime);
  }

  async deleteProxyWithOptions(request: DeleteProxyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProxyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProxy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProxyResponse>(await this.callApi(params, req, runtime), new DeleteProxyResponse({}));
  }

  async deleteProxy(request: DeleteProxyRequest): Promise<DeleteProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProxyWithOptions(request, runtime);
  }

  async deleteProxyAccessWithOptions(request: DeleteProxyAccessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProxyAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.proxyAccessId)) {
      query["ProxyAccessId"] = request.proxyAccessId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProxyAccess",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProxyAccessResponse>(await this.callApi(params, req, runtime), new DeleteProxyAccessResponse({}));
  }

  async deleteProxyAccess(request: DeleteProxyAccessRequest): Promise<DeleteProxyAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProxyAccessWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async disableUserWithOptions(request: DisableUserRequest, runtime: $Util.RuntimeOptions): Promise<DisableUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableUserResponse>(await this.callApi(params, req, runtime), new DisableUserResponse({}));
  }

  async disableUser(request: DisableUserRequest): Promise<DisableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableUserWithOptions(request, runtime);
  }

  async editLogicDatabaseWithOptions(tmpReq: EditLogicDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<EditLogicDatabaseResponse> {
    Util.validateModel(tmpReq);
    let request = new EditLogicDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.databaseIds)) {
      request.databaseIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.databaseIds, "DatabaseIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.databaseIdsShrink)) {
      query["DatabaseIds"] = request.databaseIdsShrink;
    }

    if (!Util.isUnset(request.logicDbId)) {
      query["LogicDbId"] = request.logicDbId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditLogicDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditLogicDatabaseResponse>(await this.callApi(params, req, runtime), new EditLogicDatabaseResponse({}));
  }

  async editLogicDatabase(request: EditLogicDatabaseRequest): Promise<EditLogicDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editLogicDatabaseWithOptions(request, runtime);
  }

  async enableUserWithOptions(request: EnableUserRequest, runtime: $Util.RuntimeOptions): Promise<EnableUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableUserResponse>(await this.callApi(params, req, runtime), new EnableUserResponse({}));
  }

  async enableUser(request: EnableUserRequest): Promise<EnableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableUserWithOptions(request, runtime);
  }

  async executeDataCorrectWithOptions(tmpReq: ExecuteDataCorrectRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteDataCorrectResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteDataCorrectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.actionDetailShrink)) {
      query["ActionDetail"] = request.actionDetailShrink;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteDataCorrect",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteDataCorrectResponse>(await this.callApi(params, req, runtime), new ExecuteDataCorrectResponse({}));
  }

  async executeDataCorrect(request: ExecuteDataCorrectRequest): Promise<ExecuteDataCorrectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeDataCorrectWithOptions(request, runtime);
  }

  async executeDataExportWithOptions(tmpReq: ExecuteDataExportRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteDataExportResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteDataExportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.actionDetailShrink)) {
      query["ActionDetail"] = request.actionDetailShrink;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteDataExport",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteDataExportResponse>(await this.callApi(params, req, runtime), new ExecuteDataExportResponse({}));
  }

  async executeDataExport(request: ExecuteDataExportRequest): Promise<ExecuteDataExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeDataExportWithOptions(request, runtime);
  }

  async executeScriptWithOptions(request: ExecuteScriptRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.script)) {
      query["Script"] = request.script;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteScript",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteScriptResponse>(await this.callApi(params, req, runtime), new ExecuteScriptResponse({}));
  }

  async executeScript(request: ExecuteScriptRequest): Promise<ExecuteScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeScriptWithOptions(request, runtime);
  }

  async executeStructSyncWithOptions(request: ExecuteStructSyncRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteStructSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteStructSync",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteStructSyncResponse>(await this.callApi(params, req, runtime), new ExecuteStructSyncResponse({}));
  }

  async executeStructSync(request: ExecuteStructSyncRequest): Promise<ExecuteStructSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeStructSyncWithOptions(request, runtime);
  }

  async getApprovalDetailWithOptions(request: GetApprovalDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetApprovalDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.workflowInstanceId)) {
      query["WorkflowInstanceId"] = request.workflowInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApprovalDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApprovalDetailResponse>(await this.callApi(params, req, runtime), new GetApprovalDetailResponse({}));
  }

  async getApprovalDetail(request: GetApprovalDetailRequest): Promise<GetApprovalDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApprovalDetailWithOptions(request, runtime);
  }

  async getDBTaskSQLJobLogWithOptions(request: GetDBTaskSQLJobLogRequest, runtime: $Util.RuntimeOptions): Promise<GetDBTaskSQLJobLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDBTaskSQLJobLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDBTaskSQLJobLogResponse>(await this.callApi(params, req, runtime), new GetDBTaskSQLJobLogResponse({}));
  }

  async getDBTaskSQLJobLog(request: GetDBTaskSQLJobLogRequest): Promise<GetDBTaskSQLJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDBTaskSQLJobLogWithOptions(request, runtime);
  }

  async getDBTopologyWithOptions(request: GetDBTopologyRequest, runtime: $Util.RuntimeOptions): Promise<GetDBTopologyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logicDbId)) {
      query["LogicDbId"] = request.logicDbId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDBTopology",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDBTopologyResponse>(await this.callApi(params, req, runtime), new GetDBTopologyResponse({}));
  }

  async getDBTopology(request: GetDBTopologyRequest): Promise<GetDBTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDBTopologyWithOptions(request, runtime);
  }

  async getDataCorrectBackupFilesWithOptions(tmpReq: GetDataCorrectBackupFilesRequest, runtime: $Util.RuntimeOptions): Promise<GetDataCorrectBackupFilesResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDataCorrectBackupFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.actionDetailShrink)) {
      query["ActionDetail"] = request.actionDetailShrink;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataCorrectBackupFiles",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataCorrectBackupFilesResponse>(await this.callApi(params, req, runtime), new GetDataCorrectBackupFilesResponse({}));
  }

  async getDataCorrectBackupFiles(request: GetDataCorrectBackupFilesRequest): Promise<GetDataCorrectBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataCorrectBackupFilesWithOptions(request, runtime);
  }

  async getDataCorrectOrderDetailWithOptions(request: GetDataCorrectOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDataCorrectOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataCorrectOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataCorrectOrderDetailResponse>(await this.callApi(params, req, runtime), new GetDataCorrectOrderDetailResponse({}));
  }

  async getDataCorrectOrderDetail(request: GetDataCorrectOrderDetailRequest): Promise<GetDataCorrectOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataCorrectOrderDetailWithOptions(request, runtime);
  }

  async getDataCorrectSQLFileWithOptions(request: GetDataCorrectSQLFileRequest, runtime: $Util.RuntimeOptions): Promise<GetDataCorrectSQLFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataCorrectSQLFile",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataCorrectSQLFileResponse>(await this.callApi(params, req, runtime), new GetDataCorrectSQLFileResponse({}));
  }

  async getDataCorrectSQLFile(request: GetDataCorrectSQLFileRequest): Promise<GetDataCorrectSQLFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataCorrectSQLFileWithOptions(request, runtime);
  }

  async getDataCorrectTaskDetailWithOptions(request: GetDataCorrectTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDataCorrectTaskDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataCorrectTaskDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataCorrectTaskDetailResponse>(await this.callApi(params, req, runtime), new GetDataCorrectTaskDetailResponse({}));
  }

  async getDataCorrectTaskDetail(request: GetDataCorrectTaskDetailRequest): Promise<GetDataCorrectTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataCorrectTaskDetailWithOptions(request, runtime);
  }

  async getDataCronClearTaskDetailListWithOptions(request: GetDataCronClearTaskDetailListRequest, runtime: $Util.RuntimeOptions): Promise<GetDataCronClearTaskDetailListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataCronClearTaskDetailList",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataCronClearTaskDetailListResponse>(await this.callApi(params, req, runtime), new GetDataCronClearTaskDetailListResponse({}));
  }

  async getDataCronClearTaskDetailList(request: GetDataCronClearTaskDetailListRequest): Promise<GetDataCronClearTaskDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataCronClearTaskDetailListWithOptions(request, runtime);
  }

  async getDataExportDownloadURLWithOptions(request: GetDataExportDownloadURLRequest, runtime: $Util.RuntimeOptions): Promise<GetDataExportDownloadURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataExportDownloadURL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataExportDownloadURLResponse>(await this.callApi(params, req, runtime), new GetDataExportDownloadURLResponse({}));
  }

  async getDataExportDownloadURL(request: GetDataExportDownloadURLRequest): Promise<GetDataExportDownloadURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataExportDownloadURLWithOptions(request, runtime);
  }

  async getDataExportOrderDetailWithOptions(request: GetDataExportOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDataExportOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataExportOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataExportOrderDetailResponse>(await this.callApi(params, req, runtime), new GetDataExportOrderDetailResponse({}));
  }

  async getDataExportOrderDetail(request: GetDataExportOrderDetailRequest): Promise<GetDataExportOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataExportOrderDetailWithOptions(request, runtime);
  }

  async getDatabaseWithOptions(request: GetDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<GetDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDatabaseResponse>(await this.callApi(params, req, runtime), new GetDatabaseResponse({}));
  }

  async getDatabase(request: GetDatabaseRequest): Promise<GetDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatabaseWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2018-11-01",
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

  async getLogicDatabaseWithOptions(request: GetLogicDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<GetLogicDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLogicDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLogicDatabaseResponse>(await this.callApi(params, req, runtime), new GetLogicDatabaseResponse({}));
  }

  async getLogicDatabase(request: GetLogicDatabaseRequest): Promise<GetLogicDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogicDatabaseWithOptions(request, runtime);
  }

  async getMetaTableColumnWithOptions(request: GetMetaTableColumnRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableColumnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableColumn",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
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

  async getMetaTableDetailInfoWithOptions(request: GetMetaTableDetailInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableDetailInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetaTableDetailInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetaTableDetailInfoResponse>(await this.callApi(params, req, runtime), new GetMetaTableDetailInfoResponse({}));
  }

  async getMetaTableDetailInfo(request: GetMetaTableDetailInfoRequest): Promise<GetMetaTableDetailInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableDetailInfoWithOptions(request, runtime);
  }

  async getOpLogWithOptions(request: GetOpLogRequest, runtime: $Util.RuntimeOptions): Promise<GetOpLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.module)) {
      query["Module"] = request.module;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOpLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpLogResponse>(await this.callApi(params, req, runtime), new GetOpLogResponse({}));
  }

  async getOpLog(request: GetOpLogRequest): Promise<GetOpLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpLogWithOptions(request, runtime);
  }

  async getOrderBaseInfoWithOptions(request: GetOrderBaseInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetOrderBaseInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrderBaseInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOrderBaseInfoResponse>(await this.callApi(params, req, runtime), new GetOrderBaseInfoResponse({}));
  }

  async getOrderBaseInfo(request: GetOrderBaseInfoRequest): Promise<GetOrderBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrderBaseInfoWithOptions(request, runtime);
  }

  async getOwnerApplyOrderDetailWithOptions(request: GetOwnerApplyOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetOwnerApplyOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOwnerApplyOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOwnerApplyOrderDetailResponse>(await this.callApi(params, req, runtime), new GetOwnerApplyOrderDetailResponse({}));
  }

  async getOwnerApplyOrderDetail(request: GetOwnerApplyOrderDetailRequest): Promise<GetOwnerApplyOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOwnerApplyOrderDetailWithOptions(request, runtime);
  }

  async getPermApplyOrderDetailWithOptions(request: GetPermApplyOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetPermApplyOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPermApplyOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPermApplyOrderDetailResponse>(await this.callApi(params, req, runtime), new GetPermApplyOrderDetailResponse({}));
  }

  async getPermApplyOrderDetail(request: GetPermApplyOrderDetailRequest): Promise<GetPermApplyOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermApplyOrderDetailWithOptions(request, runtime);
  }

  async getPhysicalDatabaseWithOptions(request: GetPhysicalDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalDatabaseResponse>(await this.callApi(params, req, runtime), new GetPhysicalDatabaseResponse({}));
  }

  async getPhysicalDatabase(request: GetPhysicalDatabaseRequest): Promise<GetPhysicalDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalDatabaseWithOptions(request, runtime);
  }

  async getProxyWithOptions(request: GetProxyRequest, runtime: $Util.RuntimeOptions): Promise<GetProxyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProxy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProxyResponse>(await this.callApi(params, req, runtime), new GetProxyResponse({}));
  }

  async getProxy(request: GetProxyRequest): Promise<GetProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProxyWithOptions(request, runtime);
  }

  async getSQLReviewCheckResultStatusWithOptions(request: GetSQLReviewCheckResultStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSQLReviewCheckResultStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSQLReviewCheckResultStatus",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSQLReviewCheckResultStatusResponse>(await this.callApi(params, req, runtime), new GetSQLReviewCheckResultStatusResponse({}));
  }

  async getSQLReviewCheckResultStatus(request: GetSQLReviewCheckResultStatusRequest): Promise<GetSQLReviewCheckResultStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSQLReviewCheckResultStatusWithOptions(request, runtime);
  }

  async getSQLReviewOptimizeDetailWithOptions(request: GetSQLReviewOptimizeDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetSQLReviewOptimizeDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.SQLReviewQueryKey)) {
      query["SQLReviewQueryKey"] = request.SQLReviewQueryKey;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSQLReviewOptimizeDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSQLReviewOptimizeDetailResponse>(await this.callApi(params, req, runtime), new GetSQLReviewOptimizeDetailResponse({}));
  }

  async getSQLReviewOptimizeDetail(request: GetSQLReviewOptimizeDetailRequest): Promise<GetSQLReviewOptimizeDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSQLReviewOptimizeDetailWithOptions(request, runtime);
  }

  async getSparkJobDetailWithOptions(request: GetSparkJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkJobDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkJobDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkJobDetailResponse>(await this.callApi(params, req, runtime), new GetSparkJobDetailResponse({}));
  }

  async getSparkJobDetail(request: GetSparkJobDetailRequest): Promise<GetSparkJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkJobDetailWithOptions(request, runtime);
  }

  async getSparkJobDriverLogWithOptions(request: GetSparkJobDriverLogRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkJobDriverLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkJobDriverLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkJobDriverLogResponse>(await this.callApi(params, req, runtime), new GetSparkJobDriverLogResponse({}));
  }

  async getSparkJobDriverLog(request: GetSparkJobDriverLogRequest): Promise<GetSparkJobDriverLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkJobDriverLogWithOptions(request, runtime);
  }

  async getSparkJobExecutorLogsWithOptions(request: GetSparkJobExecutorLogsRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkJobExecutorLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkJobExecutorLogs",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkJobExecutorLogsResponse>(await this.callApi(params, req, runtime), new GetSparkJobExecutorLogsResponse({}));
  }

  async getSparkJobExecutorLogs(request: GetSparkJobExecutorLogsRequest): Promise<GetSparkJobExecutorLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkJobExecutorLogsWithOptions(request, runtime);
  }

  async getSparkJobLogWithOptions(request: GetSparkJobLogRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkJobLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkJobLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkJobLogResponse>(await this.callApi(params, req, runtime), new GetSparkJobLogResponse({}));
  }

  async getSparkJobLog(request: GetSparkJobLogRequest): Promise<GetSparkJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkJobLogWithOptions(request, runtime);
  }

  async getStructSyncExecSqlDetailWithOptions(request: GetStructSyncExecSqlDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetStructSyncExecSqlDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStructSyncExecSqlDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStructSyncExecSqlDetailResponse>(await this.callApi(params, req, runtime), new GetStructSyncExecSqlDetailResponse({}));
  }

  async getStructSyncExecSqlDetail(request: GetStructSyncExecSqlDetailRequest): Promise<GetStructSyncExecSqlDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStructSyncExecSqlDetailWithOptions(request, runtime);
  }

  async getStructSyncJobAnalyzeResultWithOptions(request: GetStructSyncJobAnalyzeResultRequest, runtime: $Util.RuntimeOptions): Promise<GetStructSyncJobAnalyzeResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.compareType)) {
      query["CompareType"] = request.compareType;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStructSyncJobAnalyzeResult",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStructSyncJobAnalyzeResultResponse>(await this.callApi(params, req, runtime), new GetStructSyncJobAnalyzeResultResponse({}));
  }

  async getStructSyncJobAnalyzeResult(request: GetStructSyncJobAnalyzeResultRequest): Promise<GetStructSyncJobAnalyzeResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStructSyncJobAnalyzeResultWithOptions(request, runtime);
  }

  async getStructSyncJobDetailWithOptions(request: GetStructSyncJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetStructSyncJobDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStructSyncJobDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStructSyncJobDetailResponse>(await this.callApi(params, req, runtime), new GetStructSyncJobDetailResponse({}));
  }

  async getStructSyncJobDetail(request: GetStructSyncJobDetailRequest): Promise<GetStructSyncJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStructSyncJobDetailWithOptions(request, runtime);
  }

  async getStructSyncOrderDetailWithOptions(request: GetStructSyncOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetStructSyncOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStructSyncOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStructSyncOrderDetailResponse>(await this.callApi(params, req, runtime), new GetStructSyncOrderDetailResponse({}));
  }

  async getStructSyncOrderDetail(request: GetStructSyncOrderDetailRequest): Promise<GetStructSyncOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStructSyncOrderDetailWithOptions(request, runtime);
  }

  async getTableDBTopologyWithOptions(request: GetTableDBTopologyRequest, runtime: $Util.RuntimeOptions): Promise<GetTableDBTopologyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableDBTopology",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTableDBTopologyResponse>(await this.callApi(params, req, runtime), new GetTableDBTopologyResponse({}));
  }

  async getTableDBTopology(request: GetTableDBTopologyRequest): Promise<GetTableDBTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableDBTopologyWithOptions(request, runtime);
  }

  async getTableTopologyWithOptions(request: GetTableTopologyRequest, runtime: $Util.RuntimeOptions): Promise<GetTableTopologyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableTopology",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTableTopologyResponse>(await this.callApi(params, req, runtime), new GetTableTopologyResponse({}));
  }

  async getTableTopology(request: GetTableTopologyRequest): Promise<GetTableTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableTopologyWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async getUserActiveTenantWithOptions(request: GetUserActiveTenantRequest, runtime: $Util.RuntimeOptions): Promise<GetUserActiveTenantResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserActiveTenant",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserActiveTenantResponse>(await this.callApi(params, req, runtime), new GetUserActiveTenantResponse({}));
  }

  async getUserActiveTenant(request: GetUserActiveTenantRequest): Promise<GetUserActiveTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserActiveTenantWithOptions(request, runtime);
  }

  async getUserUploadFileJobWithOptions(request: GetUserUploadFileJobRequest, runtime: $Util.RuntimeOptions): Promise<GetUserUploadFileJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserUploadFileJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserUploadFileJobResponse>(await this.callApi(params, req, runtime), new GetUserUploadFileJobResponse({}));
  }

  async getUserUploadFileJob(request: GetUserUploadFileJobRequest): Promise<GetUserUploadFileJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserUploadFileJobWithOptions(request, runtime);
  }

  async grantUserPermissionWithOptions(request: GrantUserPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantUserPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.dsType)) {
      query["DsType"] = request.dsType;
    }

    if (!Util.isUnset(request.expireDate)) {
      query["ExpireDate"] = request.expireDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.permTypes)) {
      query["PermTypes"] = request.permTypes;
    }

    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantUserPermission",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantUserPermissionResponse>(await this.callApi(params, req, runtime), new GrantUserPermissionResponse({}));
  }

  async grantUserPermission(request: GrantUserPermissionRequest): Promise<GrantUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantUserPermissionWithOptions(request, runtime);
  }

  async inspectProxyAccessSecretWithOptions(request: InspectProxyAccessSecretRequest, runtime: $Util.RuntimeOptions): Promise<InspectProxyAccessSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.proxyAccessId)) {
      query["ProxyAccessId"] = request.proxyAccessId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InspectProxyAccessSecret",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InspectProxyAccessSecretResponse>(await this.callApi(params, req, runtime), new InspectProxyAccessSecretResponse({}));
  }

  async inspectProxyAccessSecret(request: InspectProxyAccessSecretRequest): Promise<InspectProxyAccessSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inspectProxyAccessSecretWithOptions(request, runtime);
  }

  async killSparkJobWithOptions(request: KillSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<KillSparkJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "KillSparkJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillSparkJobResponse>(await this.callApi(params, req, runtime), new KillSparkJobResponse({}));
  }

  async killSparkJob(request: KillSparkJobRequest): Promise<KillSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkJobWithOptions(request, runtime);
  }

  async listColumnsWithOptions(request: ListColumnsRequest, runtime: $Util.RuntimeOptions): Promise<ListColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListColumns",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListColumnsResponse>(await this.callApi(params, req, runtime), new ListColumnsResponse({}));
  }

  async listColumns(request: ListColumnsRequest): Promise<ListColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listColumnsWithOptions(request, runtime);
  }

  async listDBTaskSQLJobWithOptions(request: ListDBTaskSQLJobRequest, runtime: $Util.RuntimeOptions): Promise<ListDBTaskSQLJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBTaskGroupId)) {
      query["DBTaskGroupId"] = request.DBTaskGroupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDBTaskSQLJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDBTaskSQLJobResponse>(await this.callApi(params, req, runtime), new ListDBTaskSQLJobResponse({}));
  }

  async listDBTaskSQLJob(request: ListDBTaskSQLJobRequest): Promise<ListDBTaskSQLJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDBTaskSQLJobWithOptions(request, runtime);
  }

  async listDBTaskSQLJobDetailWithOptions(request: ListDBTaskSQLJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListDBTaskSQLJobDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDBTaskSQLJobDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDBTaskSQLJobDetailResponse>(await this.callApi(params, req, runtime), new ListDBTaskSQLJobDetailResponse({}));
  }

  async listDBTaskSQLJobDetail(request: ListDBTaskSQLJobDetailRequest): Promise<ListDBTaskSQLJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDBTaskSQLJobDetailWithOptions(request, runtime);
  }

  async listDDLPublishRecordsWithOptions(request: ListDDLPublishRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListDDLPublishRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDDLPublishRecords",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDDLPublishRecordsResponse>(await this.callApi(params, req, runtime), new ListDDLPublishRecordsResponse({}));
  }

  async listDDLPublishRecords(request: ListDDLPublishRecordsRequest): Promise<ListDDLPublishRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDDLPublishRecordsWithOptions(request, runtime);
  }

  async listDataCorrectPreCheckDBWithOptions(request: ListDataCorrectPreCheckDBRequest, runtime: $Util.RuntimeOptions): Promise<ListDataCorrectPreCheckDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataCorrectPreCheckDB",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataCorrectPreCheckDBResponse>(await this.callApi(params, req, runtime), new ListDataCorrectPreCheckDBResponse({}));
  }

  async listDataCorrectPreCheckDB(request: ListDataCorrectPreCheckDBRequest): Promise<ListDataCorrectPreCheckDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataCorrectPreCheckDBWithOptions(request, runtime);
  }

  async listDataCorrectPreCheckSQLWithOptions(request: ListDataCorrectPreCheckSQLRequest, runtime: $Util.RuntimeOptions): Promise<ListDataCorrectPreCheckSQLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataCorrectPreCheckSQL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataCorrectPreCheckSQLResponse>(await this.callApi(params, req, runtime), new ListDataCorrectPreCheckSQLResponse({}));
  }

  async listDataCorrectPreCheckSQL(request: ListDataCorrectPreCheckSQLRequest): Promise<ListDataCorrectPreCheckSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataCorrectPreCheckSQLWithOptions(request, runtime);
  }

  async listDatabaseUserPermssionsWithOptions(request: ListDatabaseUserPermssionsRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabaseUserPermssionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.permType)) {
      query["PermType"] = request.permType;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDatabaseUserPermssions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatabaseUserPermssionsResponse>(await this.callApi(params, req, runtime), new ListDatabaseUserPermssionsResponse({}));
  }

  async listDatabaseUserPermssions(request: ListDatabaseUserPermssionsRequest): Promise<ListDatabaseUserPermssionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabaseUserPermssionsWithOptions(request, runtime);
  }

  async listDatabasesWithOptions(request: ListDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDatabases",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatabasesResponse>(await this.callApi(params, req, runtime), new ListDatabasesResponse({}));
  }

  async listDatabases(request: ListDatabasesRequest): Promise<ListDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabasesWithOptions(request, runtime);
  }

  async listIndexesWithOptions(request: ListIndexesRequest, runtime: $Util.RuntimeOptions): Promise<ListIndexesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIndexes",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIndexesResponse>(await this.callApi(params, req, runtime), new ListIndexesResponse({}));
  }

  async listIndexes(request: ListIndexesRequest): Promise<ListIndexesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIndexesWithOptions(request, runtime);
  }

  async listInstanceLoginAuditLogWithOptions(request: ListInstanceLoginAuditLogRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceLoginAuditLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.opUserName)) {
      query["OpUserName"] = request.opUserName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceLoginAuditLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceLoginAuditLogResponse>(await this.callApi(params, req, runtime), new ListInstanceLoginAuditLogResponse({}));
  }

  async listInstanceLoginAuditLog(request: ListInstanceLoginAuditLogRequest): Promise<ListInstanceLoginAuditLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceLoginAuditLogWithOptions(request, runtime);
  }

  async listInstanceUserPermissionsWithOptions(request: ListInstanceUserPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceUserPermissionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceUserPermissions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceUserPermissionsResponse>(await this.callApi(params, req, runtime), new ListInstanceUserPermissionsResponse({}));
  }

  async listInstanceUserPermissions(request: ListInstanceUserPermissionsRequest): Promise<ListInstanceUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceUserPermissionsWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.instanceSource)) {
      query["InstanceSource"] = request.instanceSource;
    }

    if (!Util.isUnset(request.instanceState)) {
      query["InstanceState"] = request.instanceState;
    }

    if (!Util.isUnset(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2018-11-01",
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

  async listLogicDatabasesWithOptions(request: ListLogicDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<ListLogicDatabasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogicDatabases",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLogicDatabasesResponse>(await this.callApi(params, req, runtime), new ListLogicDatabasesResponse({}));
  }

  async listLogicDatabases(request: ListLogicDatabasesRequest): Promise<ListLogicDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLogicDatabasesWithOptions(request, runtime);
  }

  async listLogicTableRouteConfigWithOptions(request: ListLogicTableRouteConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListLogicTableRouteConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogicTableRouteConfig",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLogicTableRouteConfigResponse>(await this.callApi(params, req, runtime), new ListLogicTableRouteConfigResponse({}));
  }

  async listLogicTableRouteConfig(request: ListLogicTableRouteConfigRequest): Promise<ListLogicTableRouteConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLogicTableRouteConfigWithOptions(request, runtime);
  }

  async listLogicTablesWithOptions(request: ListLogicTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListLogicTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.returnGuid)) {
      query["ReturnGuid"] = request.returnGuid;
    }

    if (!Util.isUnset(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogicTables",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLogicTablesResponse>(await this.callApi(params, req, runtime), new ListLogicTablesResponse({}));
  }

  async listLogicTables(request: ListLogicTablesRequest): Promise<ListLogicTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLogicTablesWithOptions(request, runtime);
  }

  async listOrdersWithOptions(request: ListOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.orderResultType)) {
      query["OrderResultType"] = request.orderResultType;
    }

    if (!Util.isUnset(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!Util.isUnset(request.searchContent)) {
      query["SearchContent"] = request.searchContent;
    }

    if (!Util.isUnset(request.searchDateType)) {
      query["SearchDateType"] = request.searchDateType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrders",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOrdersResponse>(await this.callApi(params, req, runtime), new ListOrdersResponse({}));
  }

  async listOrders(request: ListOrdersRequest): Promise<ListOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrdersWithOptions(request, runtime);
  }

  async listProxiesWithOptions(request: ListProxiesRequest, runtime: $Util.RuntimeOptions): Promise<ListProxiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProxies",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProxiesResponse>(await this.callApi(params, req, runtime), new ListProxiesResponse({}));
  }

  async listProxies(request: ListProxiesRequest): Promise<ListProxiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProxiesWithOptions(request, runtime);
  }

  async listProxyAccessesWithOptions(request: ListProxyAccessesRequest, runtime: $Util.RuntimeOptions): Promise<ListProxyAccessesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProxyAccesses",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProxyAccessesResponse>(await this.callApi(params, req, runtime), new ListProxyAccessesResponse({}));
  }

  async listProxyAccesses(request: ListProxyAccessesRequest): Promise<ListProxyAccessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProxyAccessesWithOptions(request, runtime);
  }

  async listProxySQLExecAuditLogWithOptions(request: ListProxySQLExecAuditLogRequest, runtime: $Util.RuntimeOptions): Promise<ListProxySQLExecAuditLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.execState)) {
      query["ExecState"] = request.execState;
    }

    if (!Util.isUnset(request.opUserName)) {
      query["OpUserName"] = request.opUserName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.SQLType)) {
      query["SQLType"] = request.SQLType;
    }

    if (!Util.isUnset(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProxySQLExecAuditLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProxySQLExecAuditLogResponse>(await this.callApi(params, req, runtime), new ListProxySQLExecAuditLogResponse({}));
  }

  async listProxySQLExecAuditLog(request: ListProxySQLExecAuditLogRequest): Promise<ListProxySQLExecAuditLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProxySQLExecAuditLogWithOptions(request, runtime);
  }

  async listSQLExecAuditLogWithOptions(request: ListSQLExecAuditLogRequest, runtime: $Util.RuntimeOptions): Promise<ListSQLExecAuditLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.execState)) {
      query["ExecState"] = request.execState;
    }

    if (!Util.isUnset(request.opUserName)) {
      query["OpUserName"] = request.opUserName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!Util.isUnset(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSQLExecAuditLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSQLExecAuditLogResponse>(await this.callApi(params, req, runtime), new ListSQLExecAuditLogResponse({}));
  }

  async listSQLExecAuditLog(request: ListSQLExecAuditLogRequest): Promise<ListSQLExecAuditLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSQLExecAuditLogWithOptions(request, runtime);
  }

  async listSQLReviewOriginSQLWithOptions(tmpReq: ListSQLReviewOriginSQLRequest, runtime: $Util.RuntimeOptions): Promise<ListSQLReviewOriginSQLResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSQLReviewOriginSQLShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.orderActionDetail))) {
      request.orderActionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.orderActionDetail), "OrderActionDetail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.orderActionDetailShrink)) {
      query["OrderActionDetail"] = request.orderActionDetailShrink;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSQLReviewOriginSQL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSQLReviewOriginSQLResponse>(await this.callApi(params, req, runtime), new ListSQLReviewOriginSQLResponse({}));
  }

  async listSQLReviewOriginSQL(request: ListSQLReviewOriginSQLRequest): Promise<ListSQLReviewOriginSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSQLReviewOriginSQLWithOptions(request, runtime);
  }

  async listSensitiveColumnsWithOptions(request: ListSensitiveColumnsRequest, runtime: $Util.RuntimeOptions): Promise<ListSensitiveColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.securityLevel)) {
      query["SecurityLevel"] = request.securityLevel;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSensitiveColumns",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSensitiveColumnsResponse>(await this.callApi(params, req, runtime), new ListSensitiveColumnsResponse({}));
  }

  async listSensitiveColumns(request: ListSensitiveColumnsRequest): Promise<ListSensitiveColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSensitiveColumnsWithOptions(request, runtime);
  }

  async listSensitiveColumnsDetailWithOptions(request: ListSensitiveColumnsDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListSensitiveColumnsDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSensitiveColumnsDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSensitiveColumnsDetailResponse>(await this.callApi(params, req, runtime), new ListSensitiveColumnsDetailResponse({}));
  }

  async listSensitiveColumnsDetail(request: ListSensitiveColumnsDetailRequest): Promise<ListSensitiveColumnsDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSensitiveColumnsDetailWithOptions(request, runtime);
  }

  async listTablesWithOptions(request: ListTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.returnGuid)) {
      query["ReturnGuid"] = request.returnGuid;
    }

    if (!Util.isUnset(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTables",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTablesResponse>(await this.callApi(params, req, runtime), new ListTablesResponse({}));
  }

  async listTables(request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  async listUserPermissionsWithOptions(request: ListUserPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserPermissionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.permType)) {
      query["PermType"] = request.permType;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserPermissions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserPermissionsResponse>(await this.callApi(params, req, runtime), new ListUserPermissionsResponse({}));
  }

  async listUserPermissions(request: ListUserPermissionsRequest): Promise<ListUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserPermissionsWithOptions(request, runtime);
  }

  async listUserTenantsWithOptions(request: ListUserTenantsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserTenantsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserTenants",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserTenantsResponse>(await this.callApi(params, req, runtime), new ListUserTenantsResponse({}));
  }

  async listUserTenants(request: ListUserTenantsRequest): Promise<ListUserTenantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserTenantsWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.userState)) {
      query["UserState"] = request.userState;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listWorkFlowNodesWithOptions(request: ListWorkFlowNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkFlowNodesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkFlowNodes",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkFlowNodesResponse>(await this.callApi(params, req, runtime), new ListWorkFlowNodesResponse({}));
  }

  async listWorkFlowNodes(request: ListWorkFlowNodesRequest): Promise<ListWorkFlowNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkFlowNodesWithOptions(request, runtime);
  }

  async listWorkFlowTemplatesWithOptions(request: ListWorkFlowTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkFlowTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkFlowTemplates",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkFlowTemplatesResponse>(await this.callApi(params, req, runtime), new ListWorkFlowTemplatesResponse({}));
  }

  async listWorkFlowTemplates(request: ListWorkFlowTemplatesRequest): Promise<ListWorkFlowTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkFlowTemplatesWithOptions(request, runtime);
  }

  async modifyDataCorrectExecSQLWithOptions(request: ModifyDataCorrectExecSQLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataCorrectExecSQLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.execSQL)) {
      query["ExecSQL"] = request.execSQL;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDataCorrectExecSQL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDataCorrectExecSQLResponse>(await this.callApi(params, req, runtime), new ModifyDataCorrectExecSQLResponse({}));
  }

  async modifyDataCorrectExecSQL(request: ModifyDataCorrectExecSQLRequest): Promise<ModifyDataCorrectExecSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataCorrectExecSQLWithOptions(request, runtime);
  }

  async pauseDataCorrectSQLJobWithOptions(request: PauseDataCorrectSQLJobRequest, runtime: $Util.RuntimeOptions): Promise<PauseDataCorrectSQLJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PauseDataCorrectSQLJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PauseDataCorrectSQLJobResponse>(await this.callApi(params, req, runtime), new PauseDataCorrectSQLJobResponse({}));
  }

  async pauseDataCorrectSQLJob(request: PauseDataCorrectSQLJobRequest): Promise<PauseDataCorrectSQLJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseDataCorrectSQLJobWithOptions(request, runtime);
  }

  async registerInstanceWithOptions(request: RegisterInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataLinkName)) {
      query["DataLinkName"] = request.dataLinkName;
    }

    if (!Util.isUnset(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!Util.isUnset(request.databaseUser)) {
      query["DatabaseUser"] = request.databaseUser;
    }

    if (!Util.isUnset(request.dbaUid)) {
      query["DbaUid"] = request.dbaUid;
    }

    if (!Util.isUnset(request.ddlOnline)) {
      query["DdlOnline"] = request.ddlOnline;
    }

    if (!Util.isUnset(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!Util.isUnset(request.ecsRegion)) {
      query["EcsRegion"] = request.ecsRegion;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.exportTimeout)) {
      query["ExportTimeout"] = request.exportTimeout;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!Util.isUnset(request.instanceSource)) {
      query["InstanceSource"] = request.instanceSource;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.queryTimeout)) {
      query["QueryTimeout"] = request.queryTimeout;
    }

    if (!Util.isUnset(request.safeRule)) {
      query["SafeRule"] = request.safeRule;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.skipTest)) {
      query["SkipTest"] = request.skipTest;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.useDsql)) {
      query["UseDsql"] = request.useDsql;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterInstanceResponse>(await this.callApi(params, req, runtime), new RegisterInstanceResponse({}));
  }

  async registerInstance(request: RegisterInstanceRequest): Promise<RegisterInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerInstanceWithOptions(request, runtime);
  }

  async registerUserWithOptions(request: RegisterUserRequest, runtime: $Util.RuntimeOptions): Promise<RegisterUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.roleNames)) {
      query["RoleNames"] = request.roleNames;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userNick)) {
      query["UserNick"] = request.userNick;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterUserResponse>(await this.callApi(params, req, runtime), new RegisterUserResponse({}));
  }

  async registerUser(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerUserWithOptions(request, runtime);
  }

  async restartDataCorrectSQLJobWithOptions(request: RestartDataCorrectSQLJobRequest, runtime: $Util.RuntimeOptions): Promise<RestartDataCorrectSQLJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDataCorrectSQLJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDataCorrectSQLJobResponse>(await this.callApi(params, req, runtime), new RestartDataCorrectSQLJobResponse({}));
  }

  async restartDataCorrectSQLJob(request: RestartDataCorrectSQLJobRequest): Promise<RestartDataCorrectSQLJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDataCorrectSQLJobWithOptions(request, runtime);
  }

  async retryDataCorrectPreCheckWithOptions(request: RetryDataCorrectPreCheckRequest, runtime: $Util.RuntimeOptions): Promise<RetryDataCorrectPreCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryDataCorrectPreCheck",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryDataCorrectPreCheckResponse>(await this.callApi(params, req, runtime), new RetryDataCorrectPreCheckResponse({}));
  }

  async retryDataCorrectPreCheck(request: RetryDataCorrectPreCheckRequest): Promise<RetryDataCorrectPreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryDataCorrectPreCheckWithOptions(request, runtime);
  }

  async revokeUserPermissionWithOptions(request: RevokeUserPermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeUserPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.dsType)) {
      query["DsType"] = request.dsType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.permTypes)) {
      query["PermTypes"] = request.permTypes;
    }

    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.userAccessId)) {
      query["UserAccessId"] = request.userAccessId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeUserPermission",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeUserPermissionResponse>(await this.callApi(params, req, runtime), new RevokeUserPermissionResponse({}));
  }

  async revokeUserPermission(request: RevokeUserPermissionRequest): Promise<RevokeUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeUserPermissionWithOptions(request, runtime);
  }

  async searchDatabaseWithOptions(request: SearchDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<SearchDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
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

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.searchRange)) {
      query["SearchRange"] = request.searchRange;
    }

    if (!Util.isUnset(request.searchTarget)) {
      query["SearchTarget"] = request.searchTarget;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchDatabaseResponse>(await this.callApi(params, req, runtime), new SearchDatabaseResponse({}));
  }

  async searchDatabase(request: SearchDatabaseRequest): Promise<SearchDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchDatabaseWithOptions(request, runtime);
  }

  async searchTableWithOptions(request: SearchTableRequest, runtime: $Util.RuntimeOptions): Promise<SearchTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
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

    if (!Util.isUnset(request.returnGuid)) {
      query["ReturnGuid"] = request.returnGuid;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.searchRange)) {
      query["SearchRange"] = request.searchRange;
    }

    if (!Util.isUnset(request.searchTarget)) {
      query["SearchTarget"] = request.searchTarget;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTable",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTableResponse>(await this.callApi(params, req, runtime), new SearchTableResponse({}));
  }

  async searchTable(request: SearchTableRequest): Promise<SearchTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTableWithOptions(request, runtime);
  }

  async setOwnersWithOptions(request: SetOwnersRequest, runtime: $Util.RuntimeOptions): Promise<SetOwnersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerIds)) {
      query["OwnerIds"] = request.ownerIds;
    }

    if (!Util.isUnset(request.ownerType)) {
      query["OwnerType"] = request.ownerType;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetOwners",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetOwnersResponse>(await this.callApi(params, req, runtime), new SetOwnersResponse({}));
  }

  async setOwners(request: SetOwnersRequest): Promise<SetOwnersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setOwnersWithOptions(request, runtime);
  }

  async submitOrderApprovalWithOptions(request: SubmitOrderApprovalRequest, runtime: $Util.RuntimeOptions): Promise<SubmitOrderApprovalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitOrderApproval",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitOrderApprovalResponse>(await this.callApi(params, req, runtime), new SubmitOrderApprovalResponse({}));
  }

  async submitOrderApproval(request: SubmitOrderApprovalRequest): Promise<SubmitOrderApprovalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitOrderApprovalWithOptions(request, runtime);
  }

  async submitSparkJobWithOptions(tmpReq: SubmitSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSparkJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitSparkJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.arguments)) {
      request.argumentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arguments, "Arguments", "json");
    }

    if (!Util.isUnset(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    if (!Util.isUnset(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.ossInfo))) {
      request.ossInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.ossInfo), "OssInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCode)) {
      body["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.argumentsShrink)) {
      body["Arguments"] = request.argumentsShrink;
    }

    if (!Util.isUnset(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    if (!Util.isUnset(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!Util.isUnset(request.mainClass)) {
      body["MainClass"] = request.mainClass;
    }

    if (!Util.isUnset(request.mainFile)) {
      body["MainFile"] = request.mainFile;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossInfoShrink)) {
      body["OssInfo"] = request.ossInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSparkJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSparkJobResponse>(await this.callApi(params, req, runtime), new SubmitSparkJobResponse({}));
  }

  async submitSparkJob(request: SubmitSparkJobRequest): Promise<SubmitSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkJobWithOptions(request, runtime);
  }

  async submitStructSyncOrderApprovalWithOptions(request: SubmitStructSyncOrderApprovalRequest, runtime: $Util.RuntimeOptions): Promise<SubmitStructSyncOrderApprovalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitStructSyncOrderApproval",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitStructSyncOrderApprovalResponse>(await this.callApi(params, req, runtime), new SubmitStructSyncOrderApprovalResponse({}));
  }

  async submitStructSyncOrderApproval(request: SubmitStructSyncOrderApprovalRequest): Promise<SubmitStructSyncOrderApprovalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitStructSyncOrderApprovalWithOptions(request, runtime);
  }

  async syncDatabaseMetaWithOptions(request: SyncDatabaseMetaRequest, runtime: $Util.RuntimeOptions): Promise<SyncDatabaseMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!Util.isUnset(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncDatabaseMeta",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncDatabaseMetaResponse>(await this.callApi(params, req, runtime), new SyncDatabaseMetaResponse({}));
  }

  async syncDatabaseMeta(request: SyncDatabaseMetaRequest): Promise<SyncDatabaseMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncDatabaseMetaWithOptions(request, runtime);
  }

  async syncInstanceMetaWithOptions(request: SyncInstanceMetaRequest, runtime: $Util.RuntimeOptions): Promise<SyncInstanceMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ignoreTable)) {
      query["IgnoreTable"] = request.ignoreTable;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncInstanceMeta",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncInstanceMetaResponse>(await this.callApi(params, req, runtime), new SyncInstanceMetaResponse({}));
  }

  async syncInstanceMeta(request: SyncInstanceMetaRequest): Promise<SyncInstanceMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncInstanceMetaWithOptions(request, runtime);
  }

  async updateInstanceWithOptions(request: UpdateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataLinkName)) {
      query["DataLinkName"] = request.dataLinkName;
    }

    if (!Util.isUnset(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!Util.isUnset(request.databaseUser)) {
      query["DatabaseUser"] = request.databaseUser;
    }

    if (!Util.isUnset(request.dbaId)) {
      query["DbaId"] = request.dbaId;
    }

    if (!Util.isUnset(request.ddlOnline)) {
      query["DdlOnline"] = request.ddlOnline;
    }

    if (!Util.isUnset(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!Util.isUnset(request.ecsRegion)) {
      query["EcsRegion"] = request.ecsRegion;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.exportTimeout)) {
      query["ExportTimeout"] = request.exportTimeout;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceSource)) {
      query["InstanceSource"] = request.instanceSource;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.queryTimeout)) {
      query["QueryTimeout"] = request.queryTimeout;
    }

    if (!Util.isUnset(request.safeRuleId)) {
      query["SafeRuleId"] = request.safeRuleId;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.skipTest)) {
      query["SkipTest"] = request.skipTest;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.useDsql)) {
      query["UseDsql"] = request.useDsql;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  async updateInstance(request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxExecuteCount)) {
      query["MaxExecuteCount"] = request.maxExecuteCount;
    }

    if (!Util.isUnset(request.maxResultCount)) {
      query["MaxResultCount"] = request.maxResultCount;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.roleNames)) {
      query["RoleNames"] = request.roleNames;
    }

    if (!Util.isUnset(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userNick)) {
      query["UserNick"] = request.userNick;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
