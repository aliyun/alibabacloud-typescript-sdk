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

export class SendMessageRequest extends $tea.Model {
  feedback?: boolean;
  sessionId?: string;
  tenantId?: number;
  textRequest?: SendMessageRequestTextRequest;
  VAMLRequest?: SendMessageRequestVAMLRequest;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      textRequest: 'TextRequest',
      VAMLRequest: 'VAMLRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'boolean',
      sessionId: 'string',
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
  tenantId?: number;
  textRequestShrink?: string;
  VAMLRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      textRequestShrink: 'TextRequest',
      VAMLRequestShrink: 'VAMLRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'boolean',
      sessionId: 'string',
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

export class SubmitTextTo2DAvatarVideoTaskRequest extends $tea.Model {
  app?: SubmitTextTo2DAvatarVideoTaskRequestApp;
  audioInfo?: SubmitTextTo2DAvatarVideoTaskRequestAudioInfo;
  avatarInfo?: SubmitTextTo2DAvatarVideoTaskRequestAvatarInfo;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfo?: SubmitTextTo2DAvatarVideoTaskRequestVideoInfo;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      audioInfo: 'AudioInfo',
      avatarInfo: 'AvatarInfo',
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
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      audioInfoShrink: 'AudioInfo',
      avatarInfoShrink: 'AvatarInfo',
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
  avatarInfo?: SubmitTextTo3DAvatarVideoTaskRequestAvatarInfo;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfo?: SubmitTextTo3DAvatarVideoTaskRequestVideoInfo;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      avatarInfo: 'AvatarInfo',
      tenantId: 'TenantId',
      text: 'Text',
      title: 'Title',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: SubmitTextTo3DAvatarVideoTaskRequestApp,
      avatarInfo: SubmitTextTo3DAvatarVideoTaskRequestAvatarInfo,
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
  avatarInfoShrink?: string;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      avatarInfoShrink: 'AvatarInfo',
      tenantId: 'TenantId',
      text: 'Text',
      title: 'Title',
      videoInfoShrink: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
      avatarInfoShrink: 'string',
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

export class SubmitTextToSignVideoTaskRequest extends $tea.Model {
  app?: SubmitTextToSignVideoTaskRequestApp;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfo?: SubmitTextToSignVideoTaskRequestVideoInfo;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      tenantId: 'TenantId',
      text: 'Text',
      title: 'Title',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: SubmitTextToSignVideoTaskRequestApp,
      tenantId: 'number',
      text: 'string',
      title: 'string',
      videoInfo: SubmitTextToSignVideoTaskRequestVideoInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextToSignVideoTaskShrinkRequest extends $tea.Model {
  appShrink?: string;
  tenantId?: number;
  text?: string;
  title?: string;
  videoInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appShrink: 'App',
      tenantId: 'TenantId',
      text: 'Text',
      title: 'Title',
      videoInfoShrink: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appShrink: 'string',
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

export class SubmitTextToSignVideoTaskResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitTextToSignVideoTaskResponseBodyData;
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
      data: SubmitTextToSignVideoTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextToSignVideoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTextToSignVideoTaskResponseBody;
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
      body: SubmitTextToSignVideoTaskResponseBody,
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
  videoUrl?: string;
  wordSubtitlesUrl?: string;
  static names(): { [key: string]: string } {
    return {
      failCode: 'FailCode',
      failReason: 'FailReason',
      subtitlesUrl: 'SubtitlesUrl',
      videoUrl: 'VideoUrl',
      wordSubtitlesUrl: 'WordSubtitlesUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCode: 'string',
      failReason: 'string',
      subtitlesUrl: 'string',
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
  backgroundImageUrl?: string;
  isAlpha?: boolean;
  isSubtitles?: boolean;
  static names(): { [key: string]: string } {
    return {
      backgroundImageUrl: 'BackgroundImageUrl',
      isAlpha: 'IsAlpha',
      isSubtitles: 'IsSubtitles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundImageUrl: 'string',
      isAlpha: 'boolean',
      isSubtitles: 'boolean',
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

export class SubmitTextTo3DAvatarVideoTaskRequestAvatarInfo extends $tea.Model {
  angle?: number;
  code?: string;
  locate?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      code: 'Code',
      locate: 'Locate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      code: 'string',
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

export class SubmitTextToSignVideoTaskRequestApp extends $tea.Model {
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

export class SubmitTextToSignVideoTaskRequestVideoInfo extends $tea.Model {
  isAlpha?: boolean;
  isSubtitles?: boolean;
  resolution?: number;
  static names(): { [key: string]: string } {
    return {
      isAlpha: 'IsAlpha',
      isSubtitles: 'IsSubtitles',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAlpha: 'boolean',
      isSubtitles: 'boolean',
      resolution: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTextToSignVideoTaskResponseBodyData extends $tea.Model {
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

  async sendMessageWithOptions(tmpReq: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new SendMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
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

  async submitTextToSignVideoTaskWithOptions(tmpReq: SubmitTextToSignVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTextToSignVideoTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitTextToSignVideoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.app)) {
      request.appShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.app, "App", "json");
    }

    if (!Util.isUnset(tmpReq.videoInfo)) {
      request.videoInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoInfo, "VideoInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appShrink)) {
      query["App"] = request.appShrink;
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
      action: "SubmitTextToSignVideoTask",
      version: "2022-01-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTextToSignVideoTaskResponse>(await this.callApi(params, req, runtime), new SubmitTextToSignVideoTaskResponse({}));
  }

  async submitTextToSignVideoTask(request: SubmitTextToSignVideoTaskRequest): Promise<SubmitTextToSignVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTextToSignVideoTaskWithOptions(request, runtime);
  }

}
