// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelVideoTaskRequest extends $tea.Model {
  app?: CancelVideoTaskRequestApp;
  taskUuid?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      taskUuid: 'TaskUuid',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: CancelVideoTaskRequestApp,
      taskUuid: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelVideoTaskShrinkRequest extends $tea.Model {
  appShrink?: string;
  taskUuid?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      taskUuid: 'TaskUuid',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      taskUuid: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelVideoTaskResponseBody extends $tea.Model {
  code?: string;
  data?: CancelVideoTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CancelVideoTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelVideoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelVideoTaskResponseBody;
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
      body: CancelVideoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTimedResetOperateRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTimedResetOperateResponseBody extends $tea.Model {
  code?: string;
  data?: CloseTimedResetOperateResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CloseTimedResetOperateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTimedResetOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloseTimedResetOperateResponseBody;
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
      body: CloseTimedResetOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Create2dAvatarRequest extends $tea.Model {
  callback?: boolean;
  description?: string;
  image?: string;
  name?: string;
  orientation?: number;
  portrait?: string;
  tenantId?: number;
  transparent?: boolean;
  video?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      description: 'Description',
      image: 'Image',
      name: 'Name',
      orientation: 'Orientation',
      portrait: 'Portrait',
      tenantId: 'TenantId',
      transparent: 'Transparent',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'boolean',
      description: 'string',
      image: 'string',
      name: 'string',
      orientation: 'number',
      portrait: 'string',
      tenantId: 'number',
      transparent: 'boolean',
      video: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Create2dAvatarResponseBody extends $tea.Model {
  code?: string;
  data?: Create2dAvatarResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: Create2dAvatarResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Create2dAvatarResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Create2dAvatarResponseBody;
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
      body: Create2dAvatarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAvatarRequest extends $tea.Model {
  code?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAvatarResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAvatarResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAvatarResponseBody;
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
      body: DeleteAvatarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplexDecisionRequest extends $tea.Model {
  appId?: string;
  bizRequestId?: string;
  callTime?: number;
  customKeywords?: string[];
  dialogContext?: DuplexDecisionRequestDialogContext;
  dialogStatus?: string;
  interruptType?: number;
  sessionId?: string;
  tenantId?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizRequestId: 'BizRequestId',
      callTime: 'CallTime',
      customKeywords: 'CustomKeywords',
      dialogContext: 'DialogContext',
      dialogStatus: 'DialogStatus',
      interruptType: 'InterruptType',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizRequestId: 'string',
      callTime: 'number',
      customKeywords: { 'type': 'array', 'itemType': 'string' },
      dialogContext: DuplexDecisionRequestDialogContext,
      dialogStatus: 'string',
      interruptType: 'number',
      sessionId: 'string',
      tenantId: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplexDecisionShrinkRequest extends $tea.Model {
  appId?: string;
  bizRequestId?: string;
  callTime?: number;
  customKeywordsShrink?: string;
  dialogContextShrink?: string;
  dialogStatus?: string;
  interruptType?: number;
  sessionId?: string;
  tenantId?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizRequestId: 'BizRequestId',
      callTime: 'CallTime',
      customKeywordsShrink: 'CustomKeywords',
      dialogContextShrink: 'DialogContext',
      dialogStatus: 'DialogStatus',
      interruptType: 'InterruptType',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizRequestId: 'string',
      callTime: 'number',
      customKeywordsShrink: 'string',
      dialogContextShrink: 'string',
      dialogStatus: 'string',
      interruptType: 'number',
      sessionId: 'string',
      tenantId: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplexDecisionResponseBody extends $tea.Model {
  code?: string;
  data?: DuplexDecisionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DuplexDecisionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplexDecisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DuplexDecisionResponseBody;
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
      body: DuplexDecisionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskInfoRequest extends $tea.Model {
  app?: GetVideoTaskInfoRequestApp;
  taskUuid?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      taskUuid: 'TaskUuid',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: GetVideoTaskInfoRequestApp,
      taskUuid: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskInfoShrinkRequest extends $tea.Model {
  appShrink?: string;
  taskUuid?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      taskUuid: 'TaskUuid',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      taskUuid: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetVideoTaskInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVideoTaskInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoTaskInfoResponseBody;
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
      body: GetVideoTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LicenseAuthRequest extends $tea.Model {
  appId?: string;
  license?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      license: 'License',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      license: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LicenseAuthResponseBody extends $tea.Model {
  code?: string;
  data?: LicenseAuthResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: LicenseAuthResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LicenseAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LicenseAuthResponseBody;
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
      body: LicenseAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarRequest extends $tea.Model {
  code?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResponseBody extends $tea.Model {
  code?: string;
  data?: QueryAvatarResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAvatarResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAvatarResponseBody;
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
      body: QueryAvatarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarListRequest extends $tea.Model {
  modelType?: string;
  pageNo?: number;
  pageSize?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      modelType: 'ModelType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryAvatarListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAvatarListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAvatarListResponseBody;
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
      body: QueryAvatarListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRunningInstanceRequest extends $tea.Model {
  app?: QueryRunningInstanceRequestApp;
  sessionId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: QueryRunningInstanceRequestApp,
      sessionId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRunningInstanceShrinkRequest extends $tea.Model {
  appShrink?: string;
  sessionId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      sessionId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRunningInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRunningInstanceResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryRunningInstanceResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRunningInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRunningInstanceResponseBody;
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
      body: QueryRunningInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimedResetOperateStatusRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimedResetOperateStatusResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTimedResetOperateStatusResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTimedResetOperateStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimedResetOperateStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTimedResetOperateStatusResponseBody;
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
      body: QueryTimedResetOperateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommandRequest extends $tea.Model {
  code?: string;
  content?: { [key: string]: any };
  feedback?: boolean;
  sessionId?: string;
  tenantId?: number;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      feedback: 'Feedback',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      feedback: 'boolean',
      sessionId: 'string',
      tenantId: 'number',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommandShrinkRequest extends $tea.Model {
  code?: string;
  contentShrink?: string;
  feedback?: boolean;
  sessionId?: string;
  tenantId?: number;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contentShrink: 'Content',
      feedback: 'Feedback',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contentShrink: 'string',
      feedback: 'boolean',
      sessionId: 'string',
      tenantId: 'number',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommandResponseBody extends $tea.Model {
  code?: string;
  data?: SendCommandResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendCommandResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendCommandResponseBody;
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
      body: SendCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  feedback?: boolean;
  sessionId?: string;
  streamExtension?: SendMessageRequestStreamExtension;
  tenantId?: number;
  textRequest?: SendMessageRequestTextRequest;
  VAMLRequest?: SendMessageRequestVAMLRequest;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      sessionId: 'SessionId',
      streamExtension: 'StreamExtension',
      tenantId: 'TenantId',
      textRequest: 'TextRequest',
      VAMLRequest: 'VAMLRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'boolean',
      sessionId: 'string',
      streamExtension: SendMessageRequestStreamExtension,
      tenantId: 'number',
      textRequest: SendMessageRequestTextRequest,
      VAMLRequest: SendMessageRequestVAMLRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageShrinkRequest extends $tea.Model {
  feedback?: boolean;
  sessionId?: string;
  streamExtensionShrink?: string;
  tenantId?: number;
  textRequestShrink?: string;
  VAMLRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      sessionId: 'SessionId',
      streamExtensionShrink: 'StreamExtension',
      tenantId: 'TenantId',
      textRequestShrink: 'TextRequest',
      VAMLRequestShrink: 'VAMLRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'boolean',
      sessionId: 'string',
      streamExtensionShrink: 'string',
      tenantId: 'number',
      textRequestShrink: 'string',
      VAMLRequestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  code?: string;
  data?: SendMessageResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendMessageResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendMessageResponseBody;
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
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextRequest extends $tea.Model {
  feedback?: boolean;
  interrupt?: boolean;
  sessionId?: string;
  streamExtension?: SendTextRequestStreamExtension;
  tenantId?: number;
  text?: string;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      interrupt: 'Interrupt',
      sessionId: 'SessionId',
      streamExtension: 'StreamExtension',
      tenantId: 'TenantId',
      text: 'Text',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'boolean',
      interrupt: 'boolean',
      sessionId: 'string',
      streamExtension: SendTextRequestStreamExtension,
      tenantId: 'number',
      text: 'string',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextShrinkRequest extends $tea.Model {
  feedback?: boolean;
  interrupt?: boolean;
  sessionId?: string;
  streamExtensionShrink?: string;
  tenantId?: number;
  text?: string;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      interrupt: 'Interrupt',
      sessionId: 'SessionId',
      streamExtensionShrink: 'StreamExtension',
      tenantId: 'TenantId',
      text: 'Text',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'boolean',
      interrupt: 'boolean',
      sessionId: 'string',
      streamExtensionShrink: 'string',
      tenantId: 'number',
      text: 'string',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextResponseBody extends $tea.Model {
  code?: string;
  data?: SendTextResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendTextResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendTextResponseBody;
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
      body: SendTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVamlRequest extends $tea.Model {
  sessionId?: string;
  tenantId?: number;
  vaml?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      vaml: 'Vaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      tenantId: 'number',
      vaml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVamlResponseBody extends $tea.Model {
  code?: string;
  data?: SendVamlResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendVamlResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVamlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendVamlResponseBody;
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
      body: SendVamlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  app?: StartInstanceRequestApp;
  channel?: StartInstanceRequestChannel;
  commandRequest?: StartInstanceRequestCommandRequest;
  tenantId?: number;
  user?: StartInstanceRequestUser;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      channel: 'Channel',
      commandRequest: 'CommandRequest',
      tenantId: 'TenantId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: StartInstanceRequestApp,
      channel: StartInstanceRequestChannel,
      commandRequest: StartInstanceRequestCommandRequest,
      tenantId: 'number',
      user: StartInstanceRequestUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceShrinkRequest extends $tea.Model {
  appShrink?: string;
  channelShrink?: string;
  commandRequestShrink?: string;
  tenantId?: number;
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      channelShrink: 'Channel',
      commandRequestShrink: 'CommandRequest',
      tenantId: 'TenantId',
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      channelShrink: 'string',
      commandRequestShrink: 'string',
      tenantId: 'number',
      userShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: StartInstanceResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StartInstanceResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartInstanceResponseBody;
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
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTimedResetOperateRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTimedResetOperateResponseBody extends $tea.Model {
  code?: string;
  data?: StartTimedResetOperateResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StartTimedResetOperateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTimedResetOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartTimedResetOperateResponseBody;
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
      body: StartTimedResetOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  sessionId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: StopInstanceResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StopInstanceResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopInstanceResponseBody;
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
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo2DAvatarVideoTaskRequest extends $tea.Model {
  app?: SubmitAudioTo2DAvatarVideoTaskRequestApp;
  avatarInfo?: SubmitAudioTo2DAvatarVideoTaskRequestAvatarInfo;
  callback?: boolean;
  callbackParams?: string;
  extParams?: string;
  tenantId?: number;
  title?: string;
  url?: string;
  videoInfo?: SubmitAudioTo2DAvatarVideoTaskRequestVideoInfo;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      avatarInfo: 'AvatarInfo',
      callback: 'Callback',
      callbackParams: 'CallbackParams',
      extParams: 'ExtParams',
      tenantId: 'TenantId',
      title: 'Title',
      url: 'Url',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: SubmitAudioTo2DAvatarVideoTaskRequestApp,
      avatarInfo: SubmitAudioTo2DAvatarVideoTaskRequestAvatarInfo,
      callback: 'boolean',
      callbackParams: 'string',
      extParams: 'string',
      tenantId: 'number',
      title: 'string',
      url: 'string',
      videoInfo: SubmitAudioTo2DAvatarVideoTaskRequestVideoInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo2DAvatarVideoTaskShrinkRequest extends $tea.Model {
  appShrink?: string;
  avatarInfoShrink?: string;
  callback?: boolean;
  callbackParams?: string;
  extParams?: string;
  tenantId?: number;
  title?: string;
  url?: string;
  videoInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      avatarInfoShrink: 'AvatarInfo',
      callback: 'Callback',
      callbackParams: 'CallbackParams',
      extParams: 'ExtParams',
      tenantId: 'TenantId',
      title: 'Title',
      url: 'Url',
      videoInfoShrink: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      avatarInfoShrink: 'string',
      callback: 'boolean',
      callbackParams: 'string',
      extParams: 'string',
      tenantId: 'number',
      title: 'string',
      url: 'string',
      videoInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo2DAvatarVideoTaskResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitAudioTo2DAvatarVideoTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitAudioTo2DAvatarVideoTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo2DAvatarVideoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAudioTo2DAvatarVideoTaskResponseBody;
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
      body: SubmitAudioTo2DAvatarVideoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo3DAvatarVideoTaskRequest extends $tea.Model {
  app?: SubmitAudioTo3DAvatarVideoTaskRequestApp;
  avatarInfo?: SubmitAudioTo3DAvatarVideoTaskRequestAvatarInfo;
  callback?: boolean;
  callbackParams?: string;
  extParams?: string;
  tenantId?: number;
  title?: string;
  url?: string;
  videoInfo?: SubmitAudioTo3DAvatarVideoTaskRequestVideoInfo;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      avatarInfo: 'AvatarInfo',
      callback: 'Callback',
      callbackParams: 'CallbackParams',
      extParams: 'ExtParams',
      tenantId: 'TenantId',
      title: 'Title',
      url: 'Url',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: SubmitAudioTo3DAvatarVideoTaskRequestApp,
      avatarInfo: SubmitAudioTo3DAvatarVideoTaskRequestAvatarInfo,
      callback: 'boolean',
      callbackParams: 'string',
      extParams: 'string',
      tenantId: 'number',
      title: 'string',
      url: 'string',
      videoInfo: SubmitAudioTo3DAvatarVideoTaskRequestVideoInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo3DAvatarVideoTaskShrinkRequest extends $tea.Model {
  appShrink?: string;
  avatarInfoShrink?: string;
  callback?: boolean;
  callbackParams?: string;
  extParams?: string;
  tenantId?: number;
  title?: string;
  url?: string;
  videoInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      avatarInfoShrink: 'AvatarInfo',
      callback: 'Callback',
      callbackParams: 'CallbackParams',
      extParams: 'ExtParams',
      tenantId: 'TenantId',
      title: 'Title',
      url: 'Url',
      videoInfoShrink: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      avatarInfoShrink: 'string',
      callback: 'boolean',
      callbackParams: 'string',
      extParams: 'string',
      tenantId: 'number',
      title: 'string',
      url: 'string',
      videoInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo3DAvatarVideoTaskResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitAudioTo3DAvatarVideoTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitAudioTo3DAvatarVideoTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo3DAvatarVideoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAudioTo3DAvatarVideoTaskResponseBody;
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
      body: SubmitAudioTo3DAvatarVideoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskRequest extends $tea.Model {
  app?: SubmitTextTo2DAvatarVideoTaskRequestApp;
  audioInfo?: SubmitTextTo2DAvatarVideoTaskRequestAudioInfo;
  avatarInfo?: SubmitTextTo2DAvatarVideoTaskRequestAvatarInfo;
  callback?: boolean;
  callbackParams?: string;
  extParams?: string;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfo?: SubmitTextTo2DAvatarVideoTaskRequestVideoInfo;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      audioInfo: 'AudioInfo',
      avatarInfo: 'AvatarInfo',
      callback: 'Callback',
      callbackParams: 'CallbackParams',
      extParams: 'ExtParams',
      tenantId: 'TenantId',
      text: 'Text',
      title: 'Title',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: SubmitTextTo2DAvatarVideoTaskRequestApp,
      audioInfo: SubmitTextTo2DAvatarVideoTaskRequestAudioInfo,
      avatarInfo: SubmitTextTo2DAvatarVideoTaskRequestAvatarInfo,
      callback: 'boolean',
      callbackParams: 'string',
      extParams: 'string',
      tenantId: 'number',
      text: 'string',
      title: 'string',
      videoInfo: SubmitTextTo2DAvatarVideoTaskRequestVideoInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskShrinkRequest extends $tea.Model {
  appShrink?: string;
  audioInfoShrink?: string;
  avatarInfoShrink?: string;
  callback?: boolean;
  callbackParams?: string;
  extParams?: string;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      audioInfoShrink: 'AudioInfo',
      avatarInfoShrink: 'AvatarInfo',
      callback: 'Callback',
      callbackParams: 'CallbackParams',
      extParams: 'ExtParams',
      tenantId: 'TenantId',
      text: 'Text',
      title: 'Title',
      videoInfoShrink: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      audioInfoShrink: 'string',
      avatarInfoShrink: 'string',
      callback: 'boolean',
      callbackParams: 'string',
      extParams: 'string',
      tenantId: 'number',
      text: 'string',
      title: 'string',
      videoInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitTextTo2DAvatarVideoTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitTextTo2DAvatarVideoTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTextTo2DAvatarVideoTaskResponseBody;
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
      body: SubmitTextTo2DAvatarVideoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskRequest extends $tea.Model {
  app?: SubmitTextTo3DAvatarVideoTaskRequestApp;
  audioInfo?: SubmitTextTo3DAvatarVideoTaskRequestAudioInfo;
  avatarInfo?: SubmitTextTo3DAvatarVideoTaskRequestAvatarInfo;
  callback?: boolean;
  callbackParams?: string;
  extParams?: string;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfo?: SubmitTextTo3DAvatarVideoTaskRequestVideoInfo;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      audioInfo: 'AudioInfo',
      avatarInfo: 'AvatarInfo',
      callback: 'Callback',
      callbackParams: 'CallbackParams',
      extParams: 'ExtParams',
      tenantId: 'TenantId',
      text: 'Text',
      title: 'Title',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: SubmitTextTo3DAvatarVideoTaskRequestApp,
      audioInfo: SubmitTextTo3DAvatarVideoTaskRequestAudioInfo,
      avatarInfo: SubmitTextTo3DAvatarVideoTaskRequestAvatarInfo,
      callback: 'boolean',
      callbackParams: 'string',
      extParams: 'string',
      tenantId: 'number',
      text: 'string',
      title: 'string',
      videoInfo: SubmitTextTo3DAvatarVideoTaskRequestVideoInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskShrinkRequest extends $tea.Model {
  appShrink?: string;
  audioInfoShrink?: string;
  avatarInfoShrink?: string;
  callback?: boolean;
  callbackParams?: string;
  extParams?: string;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      audioInfoShrink: 'AudioInfo',
      avatarInfoShrink: 'AvatarInfo',
      callback: 'Callback',
      callbackParams: 'CallbackParams',
      extParams: 'ExtParams',
      tenantId: 'TenantId',
      text: 'Text',
      title: 'Title',
      videoInfoShrink: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      audioInfoShrink: 'string',
      avatarInfoShrink: 'string',
      callback: 'boolean',
      callbackParams: 'string',
      extParams: 'string',
      tenantId: 'number',
      text: 'string',
      title: 'string',
      videoInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitTextTo3DAvatarVideoTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitTextTo3DAvatarVideoTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTextTo3DAvatarVideoTaskResponseBody;
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
      body: SubmitTextTo3DAvatarVideoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Update2dAvatarRequest extends $tea.Model {
  callback?: boolean;
  code?: string;
  description?: string;
  image?: string;
  name?: string;
  orientation?: number;
  portrait?: string;
  tenantId?: number;
  transparent?: boolean;
  video?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      code: 'Code',
      description: 'Description',
      image: 'Image',
      name: 'Name',
      orientation: 'Orientation',
      portrait: 'Portrait',
      tenantId: 'TenantId',
      transparent: 'Transparent',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'boolean',
      code: 'string',
      description: 'string',
      image: 'string',
      name: 'string',
      orientation: 'number',
      portrait: 'string',
      tenantId: 'number',
      transparent: 'boolean',
      video: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Update2dAvatarResponseBody extends $tea.Model {
  code?: string;
  data?: Update2dAvatarResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: Update2dAvatarResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Update2dAvatarResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Update2dAvatarResponseBody;
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
      body: Update2dAvatarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelVideoTaskRequestApp extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelVideoTaskResponseBodyData extends $tea.Model {
  failReason?: string;
  isCancel?: boolean;
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      failReason: 'FailReason',
      isCancel: 'IsCancel',
      taskUuid: 'TaskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      isCancel: 'boolean',
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTimedResetOperateResponseBodyData extends $tea.Model {
  instanceId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Create2dAvatarResponseBodyData extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplexDecisionRequestDialogContextHistories extends $tea.Model {
  robot?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      robot: 'Robot',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      robot: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplexDecisionRequestDialogContext extends $tea.Model {
  curUtteranceIdx?: number;
  histories?: DuplexDecisionRequestDialogContextHistories[];
  static names(): { [key: string]: string } {
    return {
      curUtteranceIdx: 'CurUtteranceIdx',
      histories: 'Histories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curUtteranceIdx: 'number',
      histories: { 'type': 'array', 'itemType': DuplexDecisionRequestDialogContextHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplexDecisionResponseBodyData extends $tea.Model {
  actionType?: string;
  grabType?: string;
  outputText?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      grabType: 'GrabType',
      outputText: 'OutputText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      grabType: 'string',
      outputText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskInfoRequestApp extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskInfoResponseBodyDataTaskResult extends $tea.Model {
  failCode?: string;
  failReason?: string;
  subtitlesUrl?: string;
  videoDuration?: number;
  videoUrl?: string;
  wordSubtitlesUrl?: string;
  static names(): { [key: string]: string } {
    return {
      failCode: 'FailCode',
      failReason: 'FailReason',
      subtitlesUrl: 'SubtitlesUrl',
      videoDuration: 'VideoDuration',
      videoUrl: 'VideoUrl',
      wordSubtitlesUrl: 'WordSubtitlesUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCode: 'string',
      failReason: 'string',
      subtitlesUrl: 'string',
      videoDuration: 'number',
      videoUrl: 'string',
      wordSubtitlesUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskInfoResponseBodyData extends $tea.Model {
  process?: string;
  status?: string;
  taskResult?: GetVideoTaskInfoResponseBodyDataTaskResult;
  taskUuid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
      status: 'Status',
      taskResult: 'TaskResult',
      taskUuid: 'TaskUuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: 'string',
      status: 'string',
      taskResult: GetVideoTaskInfoResponseBodyDataTaskResult,
      taskUuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LicenseAuthResponseBodyData extends $tea.Model {
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResponseBodyDataSupportedResolutionsOffline extends $tea.Model {
  desc?: string;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResponseBodyDataSupportedResolutionsOnline extends $tea.Model {
  desc?: string;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResponseBodyDataSupportedResolutions extends $tea.Model {
  offline?: QueryAvatarResponseBodyDataSupportedResolutionsOffline[];
  online?: QueryAvatarResponseBodyDataSupportedResolutionsOnline[];
  static names(): { [key: string]: string } {
    return {
      offline: 'Offline',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offline: { 'type': 'array', 'itemType': QueryAvatarResponseBodyDataSupportedResolutionsOffline },
      online: { 'type': 'array', 'itemType': QueryAvatarResponseBodyDataSupportedResolutionsOnline },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResponseBodyData extends $tea.Model {
  avatarType?: string;
  description?: string;
  image?: string;
  makeFailReason?: string;
  makeStatus?: string;
  modelType?: string;
  name?: string;
  portrait?: string;
  supportedResolutions?: QueryAvatarResponseBodyDataSupportedResolutions;
  static names(): { [key: string]: string } {
    return {
      avatarType: 'AvatarType',
      description: 'Description',
      image: 'Image',
      makeFailReason: 'MakeFailReason',
      makeStatus: 'MakeStatus',
      modelType: 'ModelType',
      name: 'Name',
      portrait: 'Portrait',
      supportedResolutions: 'SupportedResolutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarType: 'string',
      description: 'string',
      image: 'string',
      makeFailReason: 'string',
      makeStatus: 'string',
      modelType: 'string',
      name: 'string',
      portrait: 'string',
      supportedResolutions: QueryAvatarResponseBodyDataSupportedResolutions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarListResponseBodyDataListSupportedResolutionsOffline extends $tea.Model {
  desc?: string;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarListResponseBodyDataListSupportedResolutionsOnline extends $tea.Model {
  desc?: string;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarListResponseBodyDataListSupportedResolutions extends $tea.Model {
  offline?: QueryAvatarListResponseBodyDataListSupportedResolutionsOffline[];
  online?: QueryAvatarListResponseBodyDataListSupportedResolutionsOnline[];
  static names(): { [key: string]: string } {
    return {
      offline: 'Offline',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offline: { 'type': 'array', 'itemType': QueryAvatarListResponseBodyDataListSupportedResolutionsOffline },
      online: { 'type': 'array', 'itemType': QueryAvatarListResponseBodyDataListSupportedResolutionsOnline },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarListResponseBodyDataList extends $tea.Model {
  avatarType?: string;
  code?: string;
  description?: string;
  image?: string;
  makeFailReason?: string;
  makeStatus?: string;
  modelType?: string;
  name?: string;
  portrait?: string;
  supportedResolutions?: QueryAvatarListResponseBodyDataListSupportedResolutions;
  static names(): { [key: string]: string } {
    return {
      avatarType: 'AvatarType',
      code: 'Code',
      description: 'Description',
      image: 'Image',
      makeFailReason: 'MakeFailReason',
      makeStatus: 'MakeStatus',
      modelType: 'ModelType',
      name: 'Name',
      portrait: 'Portrait',
      supportedResolutions: 'SupportedResolutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarType: 'string',
      code: 'string',
      description: 'string',
      image: 'string',
      makeFailReason: 'string',
      makeStatus: 'string',
      modelType: 'string',
      name: 'string',
      portrait: 'string',
      supportedResolutions: QueryAvatarListResponseBodyDataListSupportedResolutions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarListResponseBodyData extends $tea.Model {
  list?: QueryAvatarListResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryAvatarListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRunningInstanceRequestApp extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRunningInstanceResponseBodyDataChannel extends $tea.Model {
  appId?: string;
  channelId?: string;
  expiredTime?: string;
  gslb?: string[];
  nonce?: string;
  token?: string;
  type?: string;
  userId?: string;
  userInfoInChannel?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      expiredTime: 'ExpiredTime',
      gslb: 'Gslb',
      nonce: 'Nonce',
      token: 'Token',
      type: 'Type',
      userId: 'UserId',
      userInfoInChannel: 'UserInfoInChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      expiredTime: 'string',
      gslb: { 'type': 'array', 'itemType': 'string' },
      nonce: 'string',
      token: 'string',
      type: 'string',
      userId: 'string',
      userInfoInChannel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRunningInstanceResponseBodyDataUser extends $tea.Model {
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

export class QueryRunningInstanceResponseBodyData extends $tea.Model {
  channel?: QueryRunningInstanceResponseBodyDataChannel;
  sessionId?: string;
  user?: QueryRunningInstanceResponseBodyDataUser;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      sessionId: 'SessionId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: QueryRunningInstanceResponseBodyDataChannel,
      sessionId: 'string',
      user: QueryRunningInstanceResponseBodyDataUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimedResetOperateStatusResponseBodyData extends $tea.Model {
  instanceId?: string;
  status?: number;
  statusStr?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      statusStr: 'StatusStr',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'number',
      statusStr: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCommandResponseBodyData extends $tea.Model {
  sessionId?: string;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestStreamExtension extends $tea.Model {
  index?: number;
  isStream?: boolean;
  position?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      isStream: 'IsStream',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      isStream: 'boolean',
      position: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestTextRequest extends $tea.Model {
  commandType?: string;
  id?: string;
  speechText?: string;
  interrupt?: boolean;
  static names(): { [key: string]: string } {
    return {
      commandType: 'CommandType',
      id: 'Id',
      speechText: 'SpeechText',
      interrupt: 'interrupt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandType: 'string',
      id: 'string',
      speechText: 'string',
      interrupt: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestVAMLRequest extends $tea.Model {
  code?: string;
  vaml?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      vaml: 'Vaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      vaml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBodyData extends $tea.Model {
  requestId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextRequestStreamExtension extends $tea.Model {
  index?: number;
  isStream?: boolean;
  position?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      isStream: 'IsStream',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      isStream: 'boolean',
      position: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextResponseBodyData extends $tea.Model {
  sessionId?: string;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVamlResponseBodyData extends $tea.Model {
  sessionId?: string;
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      uniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequestApp extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequestChannel extends $tea.Model {
  reqConfig?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      reqConfig: 'ReqConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequestCommandRequest extends $tea.Model {
  alphaSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      alphaSwitch: 'AlphaSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alphaSwitch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequestUser extends $tea.Model {
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

export class StartInstanceResponseBodyDataChannel extends $tea.Model {
  appId?: string;
  channelId?: string;
  expiredTime?: string;
  gslb?: string[];
  nonce?: string;
  token?: string;
  type?: string;
  userId?: string;
  userInfoInChannel?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      expiredTime: 'ExpiredTime',
      gslb: 'Gslb',
      nonce: 'Nonce',
      token: 'Token',
      type: 'Type',
      userId: 'UserId',
      userInfoInChannel: 'UserInfoInChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      expiredTime: 'string',
      gslb: { 'type': 'array', 'itemType': 'string' },
      nonce: 'string',
      token: 'string',
      type: 'string',
      userId: 'string',
      userInfoInChannel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBodyData extends $tea.Model {
  channel?: StartInstanceResponseBodyDataChannel;
  requestId?: string;
  sessionId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: StartInstanceResponseBodyDataChannel,
      requestId: 'string',
      sessionId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTimedResetOperateResponseBodyData extends $tea.Model {
  instanceId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBodyData extends $tea.Model {
  requestId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo2DAvatarVideoTaskRequestApp extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo2DAvatarVideoTaskRequestAvatarInfo extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo2DAvatarVideoTaskRequestVideoInfo extends $tea.Model {
  alphaFormat?: number;
  backgroundImageUrl?: string;
  isAlpha?: boolean;
  resolution?: number;
  static names(): { [key: string]: string } {
    return {
      alphaFormat: 'AlphaFormat',
      backgroundImageUrl: 'BackgroundImageUrl',
      isAlpha: 'IsAlpha',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alphaFormat: 'number',
      backgroundImageUrl: 'string',
      isAlpha: 'boolean',
      resolution: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo2DAvatarVideoTaskResponseBodyData extends $tea.Model {
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'TaskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo3DAvatarVideoTaskRequestApp extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo3DAvatarVideoTaskRequestAvatarInfo extends $tea.Model {
  angle?: number;
  code?: string;
  industryCode?: string;
  locate?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      code: 'Code',
      industryCode: 'IndustryCode',
      locate: 'Locate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      code: 'string',
      industryCode: 'string',
      locate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo3DAvatarVideoTaskRequestVideoInfo extends $tea.Model {
  alphaFormat?: number;
  backgroundImageUrl?: string;
  isAlpha?: boolean;
  resolution?: number;
  static names(): { [key: string]: string } {
    return {
      alphaFormat: 'AlphaFormat',
      backgroundImageUrl: 'BackgroundImageUrl',
      isAlpha: 'IsAlpha',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alphaFormat: 'number',
      backgroundImageUrl: 'string',
      isAlpha: 'boolean',
      resolution: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAudioTo3DAvatarVideoTaskResponseBodyData extends $tea.Model {
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'TaskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskRequestApp extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskRequestAudioInfo extends $tea.Model {
  pitchRate?: number;
  speechRate?: number;
  voice?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      pitchRate: 'PitchRate',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitchRate: 'number',
      speechRate: 'number',
      voice: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskRequestAvatarInfo extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskRequestVideoInfo extends $tea.Model {
  alphaFormat?: number;
  backgroundImageUrl?: string;
  isAlpha?: boolean;
  isSubtitles?: boolean;
  resolution?: number;
  static names(): { [key: string]: string } {
    return {
      alphaFormat: 'AlphaFormat',
      backgroundImageUrl: 'BackgroundImageUrl',
      isAlpha: 'IsAlpha',
      isSubtitles: 'IsSubtitles',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alphaFormat: 'number',
      backgroundImageUrl: 'string',
      isAlpha: 'boolean',
      isSubtitles: 'boolean',
      resolution: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo2DAvatarVideoTaskResponseBodyData extends $tea.Model {
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'TaskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskRequestApp extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskRequestAudioInfo extends $tea.Model {
  pitchRate?: number;
  speechRate?: number;
  voice?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      pitchRate: 'PitchRate',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitchRate: 'number',
      speechRate: 'number',
      voice: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskRequestAvatarInfo extends $tea.Model {
  angle?: number;
  code?: string;
  industryCode?: string;
  locate?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      code: 'Code',
      industryCode: 'IndustryCode',
      locate: 'Locate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      code: 'string',
      industryCode: 'string',
      locate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskRequestVideoInfo extends $tea.Model {
  alphaFormat?: number;
  backgroundImageUrl?: string;
  isAlpha?: boolean;
  isSubtitles?: boolean;
  resolution?: number;
  static names(): { [key: string]: string } {
    return {
      alphaFormat: 'AlphaFormat',
      backgroundImageUrl: 'BackgroundImageUrl',
      isAlpha: 'IsAlpha',
      isSubtitles: 'IsSubtitles',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alphaFormat: 'number',
      backgroundImageUrl: 'string',
      isAlpha: 'boolean',
      isSubtitles: 'boolean',
      resolution: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextTo3DAvatarVideoTaskResponseBodyData extends $tea.Model {
  taskUuid?: string;
  static names(): { [key: string]: string } {
    return {
      taskUuid: 'TaskUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Update2dAvatarResponseBodyData extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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
    this._endpoint = this.getEndpoint("avatar", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelVideoTaskWithOptions(tmpReq: CancelVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelVideoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CancelVideoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appShrink)) {
      query["App"] = request.appShrink;
    }

    if (!Util.isUnset(request.taskUuid)) {
      query["TaskUuid"] = request.taskUuid;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelVideoTask",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelVideoTaskResponse>(await this.callApi(params, req, runtime), new CancelVideoTaskResponse({}));
  }

  async cancelVideoTask(request: CancelVideoTaskRequest): Promise<CancelVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelVideoTaskWithOptions(request, runtime);
  }

  async closeTimedResetOperateWithOptions(request: CloseTimedResetOperateRequest, runtime: $Util.RuntimeOptions): Promise<CloseTimedResetOperateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseTimedResetOperate",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseTimedResetOperateResponse>(await this.callApi(params, req, runtime), new CloseTimedResetOperateResponse({}));
  }

  async closeTimedResetOperate(request: CloseTimedResetOperateRequest): Promise<CloseTimedResetOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeTimedResetOperateWithOptions(request, runtime);
  }

  async create2dAvatarWithOptions(request: Create2dAvatarRequest, runtime: $Util.RuntimeOptions): Promise<Create2dAvatarResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.orientation)) {
      query["Orientation"] = request.orientation;
    }

    if (!Util.isUnset(request.portrait)) {
      query["Portrait"] = request.portrait;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.transparent)) {
      query["Transparent"] = request.transparent;
    }

    if (!Util.isUnset(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Create2dAvatar",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<Create2dAvatarResponse>(await this.callApi(params, req, runtime), new Create2dAvatarResponse({}));
  }

  async create2dAvatar(request: Create2dAvatarRequest): Promise<Create2dAvatarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.create2dAvatarWithOptions(request, runtime);
  }

  async deleteAvatarWithOptions(request: DeleteAvatarRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAvatarResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAvatar",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAvatarResponse>(await this.callApi(params, req, runtime), new DeleteAvatarResponse({}));
  }

  async deleteAvatar(request: DeleteAvatarRequest): Promise<DeleteAvatarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAvatarWithOptions(request, runtime);
  }

  async duplexDecisionWithOptions(tmpReq: DuplexDecisionRequest, runtime: $Util.RuntimeOptions): Promise<DuplexDecisionResponse> {
    Util.validateModel(tmpReq);
    let request = new DuplexDecisionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customKeywords)) {
      request.customKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customKeywords, "CustomKeywords", "json");
    }

    if (!Util.isUnset(tmpReq.dialogContext)) {
      request.dialogContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dialogContext, "DialogContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bizRequestId)) {
      query["BizRequestId"] = request.bizRequestId;
    }

    if (!Util.isUnset(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!Util.isUnset(request.customKeywordsShrink)) {
      query["CustomKeywords"] = request.customKeywordsShrink;
    }

    if (!Util.isUnset(request.dialogContextShrink)) {
      query["DialogContext"] = request.dialogContextShrink;
    }

    if (!Util.isUnset(request.dialogStatus)) {
      query["DialogStatus"] = request.dialogStatus;
    }

    if (!Util.isUnset(request.interruptType)) {
      query["InterruptType"] = request.interruptType;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.text)) {
      query["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DuplexDecision",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DuplexDecisionResponse>(await this.callApi(params, req, runtime), new DuplexDecisionResponse({}));
  }

  async duplexDecision(request: DuplexDecisionRequest): Promise<DuplexDecisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.duplexDecisionWithOptions(request, runtime);
  }

  async getVideoTaskInfoWithOptions(tmpReq: GetVideoTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoTaskInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new GetVideoTaskInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoTaskInfo",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoTaskInfoResponse>(await this.callApi(params, req, runtime), new GetVideoTaskInfoResponse({}));
  }

  async getVideoTaskInfo(request: GetVideoTaskInfoRequest): Promise<GetVideoTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoTaskInfoWithOptions(request, runtime);
  }

  async licenseAuthWithOptions(request: LicenseAuthRequest, runtime: $Util.RuntimeOptions): Promise<LicenseAuthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.license)) {
      query["License"] = request.license;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LicenseAuth",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LicenseAuthResponse>(await this.callApi(params, req, runtime), new LicenseAuthResponse({}));
  }

  async licenseAuth(request: LicenseAuthRequest): Promise<LicenseAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.licenseAuthWithOptions(request, runtime);
  }

  async queryAvatarWithOptions(request: QueryAvatarRequest, runtime: $Util.RuntimeOptions): Promise<QueryAvatarResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAvatar",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAvatarResponse>(await this.callApi(params, req, runtime), new QueryAvatarResponse({}));
  }

  async queryAvatar(request: QueryAvatarRequest): Promise<QueryAvatarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAvatarWithOptions(request, runtime);
  }

  async queryAvatarListWithOptions(request: QueryAvatarListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAvatarListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAvatarList",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAvatarListResponse>(await this.callApi(params, req, runtime), new QueryAvatarListResponse({}));
  }

  async queryAvatarList(request: QueryAvatarListRequest): Promise<QueryAvatarListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAvatarListWithOptions(request, runtime);
  }

  async queryRunningInstanceWithOptions(tmpReq: QueryRunningInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryRunningInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryRunningInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appShrink)) {
      query["App"] = request.appShrink;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRunningInstance",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRunningInstanceResponse>(await this.callApi(params, req, runtime), new QueryRunningInstanceResponse({}));
  }

  async queryRunningInstance(request: QueryRunningInstanceRequest): Promise<QueryRunningInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRunningInstanceWithOptions(request, runtime);
  }

  async queryTimedResetOperateStatusWithOptions(request: QueryTimedResetOperateStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryTimedResetOperateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTimedResetOperateStatus",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTimedResetOperateStatusResponse>(await this.callApi(params, req, runtime), new QueryTimedResetOperateStatusResponse({}));
  }

  async queryTimedResetOperateStatus(request: QueryTimedResetOperateStatusRequest): Promise<QueryTimedResetOperateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTimedResetOperateStatusWithOptions(request, runtime);
  }

  async sendCommandWithOptions(tmpReq: SendCommandRequest, runtime: $Util.RuntimeOptions): Promise<SendCommandResponse> {
    Util.validateModel(tmpReq);
    let request = new SendCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!Util.isUnset(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.uniqueCode)) {
      query["UniqueCode"] = request.uniqueCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendCommand",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCommandResponse>(await this.callApi(params, req, runtime), new SendCommandResponse({}));
  }

  async sendCommand(request: SendCommandRequest): Promise<SendCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCommandWithOptions(request, runtime);
  }

  async sendMessageWithOptions(tmpReq: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new SendMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.streamExtension)) {
      request.streamExtensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamExtension, "StreamExtension", "json");
    }

    if (!Util.isUnset(tmpReq.textRequest)) {
      request.textRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textRequest, "TextRequest", "json");
    }

    if (!Util.isUnset(tmpReq.VAMLRequest)) {
      request.VAMLRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.VAMLRequest, "VAMLRequest", "json");
    }

    let query = { };
    if (!Util.isUnset(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.streamExtensionShrink)) {
      query["StreamExtension"] = request.streamExtensionShrink;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.textRequestShrink)) {
      query["TextRequest"] = request.textRequestShrink;
    }

    if (!Util.isUnset(request.VAMLRequestShrink)) {
      query["VAMLRequest"] = request.VAMLRequestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  async sendTextWithOptions(tmpReq: SendTextRequest, runtime: $Util.RuntimeOptions): Promise<SendTextResponse> {
    Util.validateModel(tmpReq);
    let request = new SendTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.streamExtension)) {
      request.streamExtensionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamExtension, "StreamExtension", "json");
    }

    let query = { };
    if (!Util.isUnset(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!Util.isUnset(request.interrupt)) {
      query["Interrupt"] = request.interrupt;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.streamExtensionShrink)) {
      query["StreamExtension"] = request.streamExtensionShrink;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.text)) {
      query["Text"] = request.text;
    }

    if (!Util.isUnset(request.uniqueCode)) {
      query["UniqueCode"] = request.uniqueCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendText",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendTextResponse>(await this.callApi(params, req, runtime), new SendTextResponse({}));
  }

  async sendText(request: SendTextRequest): Promise<SendTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendTextWithOptions(request, runtime);
  }

  async sendVamlWithOptions(request: SendVamlRequest, runtime: $Util.RuntimeOptions): Promise<SendVamlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.vaml)) {
      query["Vaml"] = request.vaml;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendVaml",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendVamlResponse>(await this.callApi(params, req, runtime), new SendVamlResponse({}));
  }

  async sendVaml(request: SendVamlRequest): Promise<SendVamlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVamlWithOptions(request, runtime);
  }

  async startInstanceWithOptions(tmpReq: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new StartInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    if (!Util.isUnset(tmpReq.channel)) {
      request.channelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channel, "Channel", "json");
    }

    if (!Util.isUnset(tmpReq.commandRequest)) {
      request.commandRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commandRequest, "CommandRequest", "json");
    }

    if (!Util.isUnset(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appShrink)) {
      query["App"] = request.appShrink;
    }

    if (!Util.isUnset(request.channelShrink)) {
      query["Channel"] = request.channelShrink;
    }

    if (!Util.isUnset(request.commandRequestShrink)) {
      query["CommandRequest"] = request.commandRequestShrink;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userShrink)) {
      query["User"] = request.userShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartInstance",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async startTimedResetOperateWithOptions(request: StartTimedResetOperateRequest, runtime: $Util.RuntimeOptions): Promise<StartTimedResetOperateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartTimedResetOperate",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartTimedResetOperateResponse>(await this.callApi(params, req, runtime), new StartTimedResetOperateResponse({}));
  }

  async startTimedResetOperate(request: StartTimedResetOperateRequest): Promise<StartTimedResetOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTimedResetOperateWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2022-01-30",
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

  async submitAudioTo2DAvatarVideoTaskWithOptions(tmpReq: SubmitAudioTo2DAvatarVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAudioTo2DAvatarVideoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitAudioTo2DAvatarVideoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    if (!Util.isUnset(tmpReq.avatarInfo)) {
      request.avatarInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.avatarInfo, "AvatarInfo", "json");
    }

    if (!Util.isUnset(tmpReq.videoInfo)) {
      request.videoInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoInfo, "VideoInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appShrink)) {
      query["App"] = request.appShrink;
    }

    if (!Util.isUnset(request.avatarInfoShrink)) {
      query["AvatarInfo"] = request.avatarInfoShrink;
    }

    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.callbackParams)) {
      query["CallbackParams"] = request.callbackParams;
    }

    if (!Util.isUnset(request.extParams)) {
      query["ExtParams"] = request.extParams;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.videoInfoShrink)) {
      query["VideoInfo"] = request.videoInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAudioTo2DAvatarVideoTask",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAudioTo2DAvatarVideoTaskResponse>(await this.callApi(params, req, runtime), new SubmitAudioTo2DAvatarVideoTaskResponse({}));
  }

  async submitAudioTo2DAvatarVideoTask(request: SubmitAudioTo2DAvatarVideoTaskRequest): Promise<SubmitAudioTo2DAvatarVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAudioTo2DAvatarVideoTaskWithOptions(request, runtime);
  }

  async submitAudioTo3DAvatarVideoTaskWithOptions(tmpReq: SubmitAudioTo3DAvatarVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAudioTo3DAvatarVideoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitAudioTo3DAvatarVideoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    if (!Util.isUnset(tmpReq.avatarInfo)) {
      request.avatarInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.avatarInfo, "AvatarInfo", "json");
    }

    if (!Util.isUnset(tmpReq.videoInfo)) {
      request.videoInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoInfo, "VideoInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appShrink)) {
      query["App"] = request.appShrink;
    }

    if (!Util.isUnset(request.avatarInfoShrink)) {
      query["AvatarInfo"] = request.avatarInfoShrink;
    }

    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.callbackParams)) {
      query["CallbackParams"] = request.callbackParams;
    }

    if (!Util.isUnset(request.extParams)) {
      query["ExtParams"] = request.extParams;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.videoInfoShrink)) {
      query["VideoInfo"] = request.videoInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAudioTo3DAvatarVideoTask",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAudioTo3DAvatarVideoTaskResponse>(await this.callApi(params, req, runtime), new SubmitAudioTo3DAvatarVideoTaskResponse({}));
  }

  async submitAudioTo3DAvatarVideoTask(request: SubmitAudioTo3DAvatarVideoTaskRequest): Promise<SubmitAudioTo3DAvatarVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAudioTo3DAvatarVideoTaskWithOptions(request, runtime);
  }

  async submitTextTo2DAvatarVideoTaskWithOptions(tmpReq: SubmitTextTo2DAvatarVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTextTo2DAvatarVideoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitTextTo2DAvatarVideoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    if (!Util.isUnset(tmpReq.audioInfo)) {
      request.audioInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.audioInfo, "AudioInfo", "json");
    }

    if (!Util.isUnset(tmpReq.avatarInfo)) {
      request.avatarInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.avatarInfo, "AvatarInfo", "json");
    }

    if (!Util.isUnset(tmpReq.videoInfo)) {
      request.videoInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoInfo, "VideoInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appShrink)) {
      query["App"] = request.appShrink;
    }

    if (!Util.isUnset(request.audioInfoShrink)) {
      query["AudioInfo"] = request.audioInfoShrink;
    }

    if (!Util.isUnset(request.avatarInfoShrink)) {
      query["AvatarInfo"] = request.avatarInfoShrink;
    }

    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.callbackParams)) {
      query["CallbackParams"] = request.callbackParams;
    }

    if (!Util.isUnset(request.extParams)) {
      query["ExtParams"] = request.extParams;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.text)) {
      query["Text"] = request.text;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.videoInfoShrink)) {
      query["VideoInfo"] = request.videoInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTextTo2DAvatarVideoTask",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTextTo2DAvatarVideoTaskResponse>(await this.callApi(params, req, runtime), new SubmitTextTo2DAvatarVideoTaskResponse({}));
  }

  async submitTextTo2DAvatarVideoTask(request: SubmitTextTo2DAvatarVideoTaskRequest): Promise<SubmitTextTo2DAvatarVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTextTo2DAvatarVideoTaskWithOptions(request, runtime);
  }

  async submitTextTo3DAvatarVideoTaskWithOptions(tmpReq: SubmitTextTo3DAvatarVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTextTo3DAvatarVideoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitTextTo3DAvatarVideoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    if (!Util.isUnset(tmpReq.audioInfo)) {
      request.audioInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.audioInfo, "AudioInfo", "json");
    }

    if (!Util.isUnset(tmpReq.avatarInfo)) {
      request.avatarInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.avatarInfo, "AvatarInfo", "json");
    }

    if (!Util.isUnset(tmpReq.videoInfo)) {
      request.videoInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoInfo, "VideoInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appShrink)) {
      query["App"] = request.appShrink;
    }

    if (!Util.isUnset(request.audioInfoShrink)) {
      query["AudioInfo"] = request.audioInfoShrink;
    }

    if (!Util.isUnset(request.avatarInfoShrink)) {
      query["AvatarInfo"] = request.avatarInfoShrink;
    }

    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.callbackParams)) {
      query["CallbackParams"] = request.callbackParams;
    }

    if (!Util.isUnset(request.extParams)) {
      query["ExtParams"] = request.extParams;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.text)) {
      query["Text"] = request.text;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.videoInfoShrink)) {
      query["VideoInfo"] = request.videoInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTextTo3DAvatarVideoTask",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTextTo3DAvatarVideoTaskResponse>(await this.callApi(params, req, runtime), new SubmitTextTo3DAvatarVideoTaskResponse({}));
  }

  async submitTextTo3DAvatarVideoTask(request: SubmitTextTo3DAvatarVideoTaskRequest): Promise<SubmitTextTo3DAvatarVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTextTo3DAvatarVideoTaskWithOptions(request, runtime);
  }

  async update2dAvatarWithOptions(request: Update2dAvatarRequest, runtime: $Util.RuntimeOptions): Promise<Update2dAvatarResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.orientation)) {
      query["Orientation"] = request.orientation;
    }

    if (!Util.isUnset(request.portrait)) {
      query["Portrait"] = request.portrait;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.transparent)) {
      query["Transparent"] = request.transparent;
    }

    if (!Util.isUnset(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Update2dAvatar",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<Update2dAvatarResponse>(await this.callApi(params, req, runtime), new Update2dAvatarResponse({}));
  }

  async update2dAvatar(request: Update2dAvatarRequest): Promise<Update2dAvatarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.update2dAvatarWithOptions(request, runtime);
  }

}
