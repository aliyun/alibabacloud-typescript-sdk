// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddRtcAccountRequest extends $tea.Model {
  deviceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRtcAccountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRtcAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRtcAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRtcAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVirtualNumberRelationRequest extends $tea.Model {
  corpNameList?: string;
  numberList?: string;
  ownerId?: number;
  phoneNum?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeType?: number;
  static names(): { [key: string]: string } {
    return {
      corpNameList: 'CorpNameList',
      numberList: 'NumberList',
      ownerId: 'OwnerId',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpNameList: 'string',
      numberList: 'string',
      ownerId: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVirtualNumberRelationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVirtualNumberRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVirtualNumberRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVirtualNumberRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRobotSmartCallRequest extends $tea.Model {
  calledNumber?: string;
  calledShowNumber?: string;
  corpName?: string;
  dialogId?: string;
  earlyMediaAsr?: boolean;
  isSelfLine?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduleCall?: boolean;
  scheduleTime?: number;
  taskName?: string;
  ttsParam?: string;
  ttsParamHead?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      corpName: 'CorpName',
      dialogId: 'DialogId',
      earlyMediaAsr: 'EarlyMediaAsr',
      isSelfLine: 'IsSelfLine',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleCall: 'ScheduleCall',
      scheduleTime: 'ScheduleTime',
      taskName: 'TaskName',
      ttsParam: 'TtsParam',
      ttsParamHead: 'TtsParamHead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      corpName: 'string',
      dialogId: 'string',
      earlyMediaAsr: 'boolean',
      isSelfLine: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleCall: 'boolean',
      scheduleTime: 'number',
      taskName: 'string',
      ttsParam: 'string',
      ttsParamHead: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRobotSmartCallResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRobotSmartCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchRobotSmartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchRobotSmartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCallRequest extends $tea.Model {
  callId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCallResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRobotTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRobotTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOrderRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOrderRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRobotTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRobotTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClickToDialRequest extends $tea.Model {
  asrFlag?: boolean;
  asrModelId?: string;
  calledNumber?: string;
  calledShowNumber?: string;
  callerNumber?: string;
  callerShowNumber?: string;
  outId?: string;
  ownerId?: number;
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sessionTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      asrFlag: 'AsrFlag',
      asrModelId: 'AsrModelId',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      callerNumber: 'CallerNumber',
      callerShowNumber: 'CallerShowNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrFlag: 'boolean',
      asrModelId: 'string',
      calledNumber: 'string',
      calledShowNumber: 'string',
      callerNumber: 'string',
      callerShowNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClickToDialResponseBody extends $tea.Model {
  callId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClickToDialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClickToDialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClickToDialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTaskRequest extends $tea.Model {
  bizType?: string;
  data?: string;
  dataType?: string;
  fireTime?: string;
  ownerId?: number;
  resource?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  scheduleType?: string;
  stopTime?: string;
  taskName?: string;
  templateCode?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      data: 'Data',
      dataType: 'DataType',
      fireTime: 'FireTime',
      ownerId: 'OwnerId',
      resource: 'Resource',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      scheduleType: 'ScheduleType',
      stopTime: 'StopTime',
      taskName: 'TaskName',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      data: 'string',
      dataType: 'string',
      fireTime: 'string',
      ownerId: 'number',
      resource: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      scheduleType: 'string',
      stopTime: 'string',
      taskName: 'string',
      templateCode: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTaskResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCallTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCallTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRobotTaskRequest extends $tea.Model {
  caller?: string;
  corpName?: string;
  dialogId?: number;
  isSelfLine?: boolean;
  numberStatusIdent?: boolean;
  ownerId?: number;
  recallInterval?: number;
  recallStateCodes?: string;
  recallTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retryType?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      corpName: 'CorpName',
      dialogId: 'DialogId',
      isSelfLine: 'IsSelfLine',
      numberStatusIdent: 'NumberStatusIdent',
      ownerId: 'OwnerId',
      recallInterval: 'RecallInterval',
      recallStateCodes: 'RecallStateCodes',
      recallTimes: 'RecallTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retryType: 'RetryType',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      corpName: 'string',
      dialogId: 'number',
      isSelfLine: 'boolean',
      numberStatusIdent: 'boolean',
      ownerId: 'number',
      recallInterval: 'number',
      recallStateCodes: 'string',
      recallTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retryType: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRobotTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRobotTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRobotTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRobotTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCallTaskRequest extends $tea.Model {
  fireTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      fireTime: 'FireTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fireTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCallTaskResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCallTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteCallTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteCallTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  rtcId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rtcId: 'RtcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rtcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetCallInfoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCallInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCallInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCallInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderRequest extends $tea.Model {
  orderId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponseBody extends $tea.Model {
  code?: string;
  data?: GetHotlineQualificationByOrderResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineQualificationByOrderResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineQualificationByOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineQualificationByOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqttTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqttTokenResponseBody extends $tea.Model {
  code?: string;
  data?: GetMqttTokenResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMqttTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqttTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMqttTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMqttTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenRequest extends $tea.Model {
  deviceId?: string;
  isCustomAccount?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      isCustomAccount: 'IsCustomAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      isCustomAccount: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRtcTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRtcTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tokenType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallRequest extends $tea.Model {
  byeCode?: string;
  byeTtsParams?: string;
  calledNumber?: string;
  calledShowNumber?: string;
  menuKeyMap?: IvrCallRequestMenuKeyMap[];
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startCode?: string;
  startTtsParams?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      byeCode: 'ByeCode',
      byeTtsParams: 'ByeTtsParams',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      menuKeyMap: 'MenuKeyMap',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startCode: 'StartCode',
      startTtsParams: 'StartTtsParams',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byeCode: 'string',
      byeTtsParams: 'string',
      calledNumber: 'string',
      calledShowNumber: 'string',
      menuKeyMap: { 'type': 'array', 'itemType': IvrCallRequestMenuKeyMap },
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startCode: 'string',
      startTtsParams: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallResponseBody extends $tea.Model {
  callId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IvrCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IvrCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskRequest extends $tea.Model {
  bizType?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  taskId?: string;
  taskName?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponseBody extends $tea.Model {
  code?: string;
  data?: ListCallTaskResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCallTaskResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCallTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCallTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailRequest extends $tea.Model {
  calledNum?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNum: 'CalledNum',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNum: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponseBody extends $tea.Model {
  code?: string;
  data?: ListCallTaskDetailResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCallTaskDetailResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCallTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCallTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberRequest extends $tea.Model {
  hotlineNumber?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponseBody extends $tea.Model {
  code?: string;
  data?: ListHotlineTransferNumberResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHotlineTransferNumberResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHotlineTransferNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHotlineTransferNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileRequest extends $tea.Model {
  hotlineNumber?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBody extends $tea.Model {
  code?: string;
  data?: ListHotlineTransferRegisterFileResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHotlineTransferRegisterFileResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHotlineTransferRegisterFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHotlineTransferRegisterFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByCallIdRequest extends $tea.Model {
  callId?: string;
  ownerId?: number;
  prodId?: number;
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      ownerId: 'OwnerId',
      prodId: 'ProdId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      ownerId: 'number',
      prodId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByCallIdResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByCallIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCallDetailByCallIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCallDetailByCallIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByTaskIdRequest extends $tea.Model {
  callee?: string;
  ownerId?: number;
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      ownerId: 'OwnerId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      ownerId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByTaskIdResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByTaskIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCallDetailByTaskIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCallDetailByTaskIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigRequest extends $tea.Model {
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponseBody extends $tea.Model {
  code?: string;
  data?: QueryCallInPoolTransferConfigResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCallInPoolTransferConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCallInPoolTransferConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCallInPoolTransferConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordRequest extends $tea.Model {
  callInCaller?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  phoneNumber?: string;
  queryDate?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callInCaller: 'CallInCaller',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInCaller: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      queryDate: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBody extends $tea.Model {
  code?: string;
  data?: QueryCallInTransferRecordResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCallInTransferRecordResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCallInTransferRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCallInTransferRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotInfoListRequest extends $tea.Model {
  auditStatus?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotInfoListResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRobotInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRobotInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallDetailRequest extends $tea.Model {
  callee?: string;
  ownerId?: number;
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      ownerId: 'OwnerId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      ownerId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallDetailResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRobotTaskCallDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRobotTaskCallDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallListRequest extends $tea.Model {
  callResult?: string;
  called?: string;
  dialogCountFrom?: string;
  dialogCountTo?: string;
  durationFrom?: string;
  durationTo?: string;
  hangupDirection?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      callResult: 'CallResult',
      called: 'Called',
      dialogCountFrom: 'DialogCountFrom',
      dialogCountTo: 'DialogCountTo',
      durationFrom: 'DurationFrom',
      durationTo: 'DurationTo',
      hangupDirection: 'HangupDirection',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callResult: 'string',
      called: 'string',
      dialogCountFrom: 'string',
      dialogCountTo: 'string',
      durationFrom: 'string',
      durationTo: 'string',
      hangupDirection: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallListResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRobotTaskCallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRobotTaskCallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskDetailRequest extends $tea.Model {
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskDetailResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRobotTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRobotTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskListRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  taskName?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskName: 'TaskName',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskName: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskListResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  pageNo?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRobotTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRobotTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotv2AllListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotv2AllListResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotv2AllListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRobotv2AllListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRobotv2AllListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryVirtualNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryVirtualNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRelationRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  phoneNum?: string;
  prodCode?: string;
  qualificationId?: number;
  regionNameCity?: string;
  relatedNum?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeType?: number;
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      qualificationId: 'QualificationId',
      regionNameCity: 'RegionNameCity',
      relatedNum: 'RelatedNum',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeType: 'RouteType',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      qualificationId: 'number',
      regionNameCity: 'string',
      relatedNum: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeType: 'number',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRelationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryVirtualNumberRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryVirtualNumberRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMqttTokenRequest extends $tea.Model {
  clientId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMqttTokenResponseBody extends $tea.Model {
  code?: string;
  data?: RefreshMqttTokenResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RefreshMqttTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMqttTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshMqttTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshMqttTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationRequest extends $tea.Model {
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  target?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      target: 'Target',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      target: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigRequest extends $tea.Model {
  calledRouteMode?: string;
  details?: SetTransferCalleePoolConfigRequestDetails[];
  ownerId?: number;
  phoneNumber?: string;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      calledRouteMode: 'CalledRouteMode',
      details: 'Details',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledRouteMode: 'string',
      details: { 'type': 'array', 'itemType': SetTransferCalleePoolConfigRequestDetails },
      ownerId: 'number',
      phoneNumber: 'string',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetTransferCalleePoolConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetTransferCalleePoolConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByTtsRequest extends $tea.Model {
  calledNumber?: string;
  calledShowNumber?: string;
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  speed?: number;
  ttsCode?: string;
  ttsParam?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      ttsCode: 'string',
      ttsParam: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByTtsResponseBody extends $tea.Model {
  callId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByTtsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SingleCallByTtsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SingleCallByTtsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVoiceRequest extends $tea.Model {
  calledNumber?: string;
  calledShowNumber?: string;
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  speed?: number;
  voiceCode?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVoiceResponseBody extends $tea.Model {
  callId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SingleCallByVoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SingleCallByVoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallRequest extends $tea.Model {
  actionCodeBreak?: boolean;
  actionCodeTimeBreak?: number;
  asrBaseId?: string;
  asrModelId?: string;
  backgroundFileCode?: string;
  backgroundSpeed?: number;
  backgroundVolume?: number;
  calledNumber?: string;
  calledShowNumber?: string;
  dynamicId?: string;
  earlyMediaAsr?: boolean;
  enableITN?: boolean;
  muteTime?: number;
  outId?: string;
  ownerId?: number;
  pauseTime?: number;
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sessionTimeout?: number;
  speed?: number;
  streamAsr?: number;
  ttsConf?: boolean;
  ttsSpeed?: number;
  ttsStyle?: string;
  ttsVolume?: number;
  voiceCode?: string;
  voiceCodeParam?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      actionCodeBreak: 'ActionCodeBreak',
      actionCodeTimeBreak: 'ActionCodeTimeBreak',
      asrBaseId: 'AsrBaseId',
      asrModelId: 'AsrModelId',
      backgroundFileCode: 'BackgroundFileCode',
      backgroundSpeed: 'BackgroundSpeed',
      backgroundVolume: 'BackgroundVolume',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      dynamicId: 'DynamicId',
      earlyMediaAsr: 'EarlyMediaAsr',
      enableITN: 'EnableITN',
      muteTime: 'MuteTime',
      outId: 'OutId',
      ownerId: 'OwnerId',
      pauseTime: 'PauseTime',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      speed: 'Speed',
      streamAsr: 'StreamAsr',
      ttsConf: 'TtsConf',
      ttsSpeed: 'TtsSpeed',
      ttsStyle: 'TtsStyle',
      ttsVolume: 'TtsVolume',
      voiceCode: 'VoiceCode',
      voiceCodeParam: 'VoiceCodeParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodeBreak: 'boolean',
      actionCodeTimeBreak: 'number',
      asrBaseId: 'string',
      asrModelId: 'string',
      backgroundFileCode: 'string',
      backgroundSpeed: 'number',
      backgroundVolume: 'number',
      calledNumber: 'string',
      calledShowNumber: 'string',
      dynamicId: 'string',
      earlyMediaAsr: 'boolean',
      enableITN: 'boolean',
      muteTime: 'number',
      outId: 'string',
      ownerId: 'number',
      pauseTime: 'number',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      speed: 'number',
      streamAsr: 'number',
      ttsConf: 'boolean',
      ttsSpeed: 'number',
      ttsStyle: 'string',
      ttsVolume: 'number',
      voiceCode: 'string',
      voiceCodeParam: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallResponseBody extends $tea.Model {
  callId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SmartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SmartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallOperateRequest extends $tea.Model {
  callId?: string;
  command?: string;
  ownerId?: number;
  param?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      command: 'string',
      ownerId: 'number',
      param: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallOperateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SmartCallOperateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SmartCallOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduleTime?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleTime: 'ScheduleTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleTime: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRobotTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRobotTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRobotTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRobotTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterRequest extends $tea.Model {
  agreement?: string;
  hotlineNumber?: string;
  operatorIdentityCard?: string;
  operatorMail?: string;
  operatorMailVerifyCode?: string;
  operatorMobile?: string;
  operatorMobileVerifyCode?: string;
  operatorName?: string;
  ownerId?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  transferPhoneNumberInfos?: SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos[];
  static names(): { [key: string]: string } {
    return {
      agreement: 'Agreement',
      hotlineNumber: 'HotlineNumber',
      operatorIdentityCard: 'OperatorIdentityCard',
      operatorMail: 'OperatorMail',
      operatorMailVerifyCode: 'OperatorMailVerifyCode',
      operatorMobile: 'OperatorMobile',
      operatorMobileVerifyCode: 'OperatorMobileVerifyCode',
      operatorName: 'OperatorName',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transferPhoneNumberInfos: 'TransferPhoneNumberInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreement: 'string',
      hotlineNumber: 'string',
      operatorIdentityCard: 'string',
      operatorMail: 'string',
      operatorMailVerifyCode: 'string',
      operatorMobile: 'string',
      operatorMobileVerifyCode: 'string',
      operatorName: 'string',
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transferPhoneNumberInfos: { 'type': 'array', 'itemType': SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitHotlineTransferRegisterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitHotlineTransferRegisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRobotTaskCalledFileRequest extends $tea.Model {
  calledNumber?: string;
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ttsParam?: string;
  ttsParamHead?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ttsParam: 'TtsParam',
      ttsParamHead: 'TtsParamHead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      id: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ttsParam: 'string',
      ttsParamHead: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRobotTaskCalledFileResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRobotTaskCalledFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadRobotTaskCalledFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadRobotTaskCalledFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallInfoResponseBodyData extends $tea.Model {
  channelId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponseBodyData extends $tea.Model {
  orderId?: string;
  qualificationId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      qualificationId: 'QualificationId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      qualificationId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqttTokenResponseBodyData extends $tea.Model {
  clientId?: string;
  expireTime?: string;
  host?: string;
  instanceId?: string;
  p2pTopic?: string;
  serverId?: string;
  token?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      expireTime: 'ExpireTime',
      host: 'Host',
      instanceId: 'InstanceId',
      p2pTopic: 'P2pTopic',
      serverId: 'ServerId',
      token: 'Token',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      expireTime: 'string',
      host: 'string',
      instanceId: 'string',
      p2pTopic: 'string',
      serverId: 'string',
      token: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallRequestMenuKeyMap extends $tea.Model {
  code?: string;
  key?: string;
  ttsParams?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      key: 'Key',
      ttsParams: 'TtsParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      key: 'string',
      ttsParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponseBodyData extends $tea.Model {
  bizType?: string;
  completeTime?: string;
  completedCount?: number;
  completedRate?: number;
  data?: string;
  dataType?: string;
  fireTime?: string;
  id?: number;
  resource?: string;
  status?: string;
  stopTime?: string;
  taskName?: string;
  templateCode?: string;
  templateName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      completeTime: 'CompleteTime',
      completedCount: 'CompletedCount',
      completedRate: 'CompletedRate',
      data: 'Data',
      dataType: 'DataType',
      fireTime: 'FireTime',
      id: 'Id',
      resource: 'Resource',
      status: 'Status',
      stopTime: 'StopTime',
      taskName: 'TaskName',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      completeTime: 'string',
      completedCount: 'number',
      completedRate: 'number',
      data: 'string',
      dataType: 'string',
      fireTime: 'string',
      id: 'number',
      resource: 'string',
      status: 'string',
      stopTime: 'string',
      taskName: 'string',
      templateCode: 'string',
      templateName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponseBodyData extends $tea.Model {
  calledNum?: string;
  caller?: string;
  duration?: number;
  id?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      calledNum: 'CalledNum',
      caller: 'Caller',
      duration: 'Duration',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNum: 'string',
      caller: 'string',
      duration: 'number',
      id: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponseBodyDataValues extends $tea.Model {
  hotlineNumber?: string;
  identityCard?: string;
  numberOwnerName?: string;
  phoneNumber?: string;
  qualificationId?: string;
  resUniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      identityCard: 'IdentityCard',
      numberOwnerName: 'NumberOwnerName',
      phoneNumber: 'PhoneNumber',
      qualificationId: 'QualificationId',
      resUniqueCode: 'ResUniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      identityCard: 'string',
      numberOwnerName: 'string',
      phoneNumber: 'string',
      qualificationId: 'string',
      resUniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  total?: number;
  values?: ListHotlineTransferNumberResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      values: { 'type': 'array', 'itemType': ListHotlineTransferNumberResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBodyDataValues extends $tea.Model {
  agree?: string;
  corpName?: string;
  hotlineNumber?: string;
  mngOpIdentityCard?: string;
  mngOpMail?: string;
  mngOpMobile?: string;
  mngOpName?: string;
  qualificationId?: string;
  resUniqueCode?: number;
  static names(): { [key: string]: string } {
    return {
      agree: 'Agree',
      corpName: 'CorpName',
      hotlineNumber: 'HotlineNumber',
      mngOpIdentityCard: 'MngOpIdentityCard',
      mngOpMail: 'MngOpMail',
      mngOpMobile: 'MngOpMobile',
      mngOpName: 'MngOpName',
      qualificationId: 'QualificationId',
      resUniqueCode: 'ResUniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agree: 'string',
      corpName: 'string',
      hotlineNumber: 'string',
      mngOpIdentityCard: 'string',
      mngOpMail: 'string',
      mngOpMobile: 'string',
      mngOpName: 'string',
      qualificationId: 'string',
      resUniqueCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  total?: number;
  values?: ListHotlineTransferRegisterFileResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      values: { 'type': 'array', 'itemType': ListHotlineTransferRegisterFileResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponseBodyDataDetails extends $tea.Model {
  called?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponseBodyData extends $tea.Model {
  calledRouteMode?: string;
  details?: QueryCallInPoolTransferConfigResponseBodyDataDetails[];
  gmtCreate?: number;
  transferTimeout?: string;
  static names(): { [key: string]: string } {
    return {
      calledRouteMode: 'CalledRouteMode',
      details: 'Details',
      gmtCreate: 'GmtCreate',
      transferTimeout: 'TransferTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledRouteMode: 'string',
      details: { 'type': 'array', 'itemType': QueryCallInPoolTransferConfigResponseBodyDataDetails },
      gmtCreate: 'number',
      transferTimeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBodyDataValues extends $tea.Model {
  callInCalled?: string;
  callInCaller?: string;
  gmtCreate?: number;
  recordUrl?: string;
  transferCalled?: string;
  transferCaller?: string;
  static names(): { [key: string]: string } {
    return {
      callInCalled: 'CallInCalled',
      callInCaller: 'CallInCaller',
      gmtCreate: 'GmtCreate',
      recordUrl: 'RecordUrl',
      transferCalled: 'TransferCalled',
      transferCaller: 'TransferCaller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInCalled: 'string',
      callInCaller: 'string',
      gmtCreate: 'number',
      recordUrl: 'string',
      transferCalled: 'string',
      transferCaller: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  total?: number;
  values?: QueryCallInTransferRecordResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      values: { 'type': 'array', 'itemType': QueryCallInTransferRecordResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshMqttTokenResponseBodyData extends $tea.Model {
  clientId?: string;
  expireTime?: string;
  host?: string;
  instanceId?: string;
  p2pTopic?: string;
  serverId?: string;
  token?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      expireTime: 'ExpireTime',
      host: 'Host',
      instanceId: 'InstanceId',
      p2pTopic: 'P2pTopic',
      serverId: 'ServerId',
      token: 'Token',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      expireTime: 'string',
      host: 'string',
      instanceId: 'string',
      p2pTopic: 'string',
      serverId: 'string',
      token: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigRequestDetails extends $tea.Model {
  called?: string;
  caller?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      caller: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos extends $tea.Model {
  identityCard?: string;
  phoneNumber?: string;
  phoneNumberOwnerName?: string;
  static names(): { [key: string]: string } {
    return {
      identityCard: 'IdentityCard',
      phoneNumber: 'PhoneNumber',
      phoneNumberOwnerName: 'PhoneNumberOwnerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCard: 'string',
      phoneNumber: 'string',
      phoneNumberOwnerName: 'string',
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
    this._endpoint = this.getEndpoint("dyvmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addRtcAccountWithOptions(request: AddRtcAccountRequest, runtime: $Util.RuntimeOptions): Promise<AddRtcAccountResponse> {
    Util.validateModel(request);
    let query = { };
    query["DeviceId"] = request.deviceId;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddRtcAccount",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddRtcAccountResponse>(await this.callApi(params, req, runtime), new AddRtcAccountResponse({}));
  }

  async addRtcAccount(request: AddRtcAccountRequest): Promise<AddRtcAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRtcAccountWithOptions(request, runtime);
  }

  async addVirtualNumberRelationWithOptions(request: AddVirtualNumberRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddVirtualNumberRelationResponse> {
    Util.validateModel(request);
    let query = { };
    query["CorpNameList"] = request.corpNameList;
    query["NumberList"] = request.numberList;
    query["OwnerId"] = request.ownerId;
    query["PhoneNum"] = request.phoneNum;
    query["ProdCode"] = request.prodCode;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["RouteType"] = request.routeType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddVirtualNumberRelation",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddVirtualNumberRelationResponse>(await this.callApi(params, req, runtime), new AddVirtualNumberRelationResponse({}));
  }

  async addVirtualNumberRelation(request: AddVirtualNumberRelationRequest): Promise<AddVirtualNumberRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVirtualNumberRelationWithOptions(request, runtime);
  }

  async batchRobotSmartCallWithOptions(request: BatchRobotSmartCallRequest, runtime: $Util.RuntimeOptions): Promise<BatchRobotSmartCallResponse> {
    Util.validateModel(request);
    let query = { };
    query["CalledNumber"] = request.calledNumber;
    query["CalledShowNumber"] = request.calledShowNumber;
    query["CorpName"] = request.corpName;
    query["DialogId"] = request.dialogId;
    query["EarlyMediaAsr"] = request.earlyMediaAsr;
    query["IsSelfLine"] = request.isSelfLine;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["ScheduleCall"] = request.scheduleCall;
    query["ScheduleTime"] = request.scheduleTime;
    query["TaskName"] = request.taskName;
    query["TtsParam"] = request.ttsParam;
    query["TtsParamHead"] = request.ttsParamHead;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "BatchRobotSmartCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchRobotSmartCallResponse>(await this.callApi(params, req, runtime), new BatchRobotSmartCallResponse({}));
  }

  async batchRobotSmartCall(request: BatchRobotSmartCallRequest): Promise<BatchRobotSmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRobotSmartCallWithOptions(request, runtime);
  }

  async cancelCallWithOptions(request: CancelCallRequest, runtime: $Util.RuntimeOptions): Promise<CancelCallResponse> {
    Util.validateModel(request);
    let query = { };
    query["CallId"] = request.callId;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CancelCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelCallResponse>(await this.callApi(params, req, runtime), new CancelCallResponse({}));
  }

  async cancelCall(request: CancelCallRequest): Promise<CancelCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCallWithOptions(request, runtime);
  }

  async cancelOrderRobotTaskWithOptions(request: CancelOrderRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrderRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelOrderRobotTaskResponse>(await this.callApi(params, req, runtime), new CancelOrderRobotTaskResponse({}));
  }

  async cancelOrderRobotTask(request: CancelOrderRobotTaskRequest): Promise<CancelOrderRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderRobotTaskWithOptions(request, runtime);
  }

  async cancelRobotTaskWithOptions(request: CancelRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CancelRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelRobotTaskResponse>(await this.callApi(params, req, runtime), new CancelRobotTaskResponse({}));
  }

  async cancelRobotTask(request: CancelRobotTaskRequest): Promise<CancelRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRobotTaskWithOptions(request, runtime);
  }

  async clickToDialWithOptions(request: ClickToDialRequest, runtime: $Util.RuntimeOptions): Promise<ClickToDialResponse> {
    Util.validateModel(request);
    let query = { };
    query["AsrFlag"] = request.asrFlag;
    query["AsrModelId"] = request.asrModelId;
    query["CalledNumber"] = request.calledNumber;
    query["CalledShowNumber"] = request.calledShowNumber;
    query["CallerNumber"] = request.callerNumber;
    query["CallerShowNumber"] = request.callerShowNumber;
    query["OutId"] = request.outId;
    query["OwnerId"] = request.ownerId;
    query["RecordFlag"] = request.recordFlag;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SessionTimeout"] = request.sessionTimeout;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ClickToDial",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ClickToDialResponse>(await this.callApi(params, req, runtime), new ClickToDialResponse({}));
  }

  async clickToDial(request: ClickToDialRequest): Promise<ClickToDialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clickToDialWithOptions(request, runtime);
  }

  async createCallTaskWithOptions(request: CreateCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCallTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["BizType"] = request.bizType;
    query["Data"] = request.data;
    query["DataType"] = request.dataType;
    query["FireTime"] = request.fireTime;
    query["OwnerId"] = request.ownerId;
    query["Resource"] = request.resource;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["ResourceType"] = request.resourceType;
    query["ScheduleType"] = request.scheduleType;
    query["StopTime"] = request.stopTime;
    query["TaskName"] = request.taskName;
    query["TemplateCode"] = request.templateCode;
    query["TemplateName"] = request.templateName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCallTaskResponse>(await this.callApi(params, req, runtime), new CreateCallTaskResponse({}));
  }

  async createCallTask(request: CreateCallTaskRequest): Promise<CreateCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCallTaskWithOptions(request, runtime);
  }

  async createRobotTaskWithOptions(request: CreateRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["Caller"] = request.caller;
    query["CorpName"] = request.corpName;
    query["DialogId"] = request.dialogId;
    query["IsSelfLine"] = request.isSelfLine;
    query["NumberStatusIdent"] = request.numberStatusIdent;
    query["OwnerId"] = request.ownerId;
    query["RecallInterval"] = request.recallInterval;
    query["RecallStateCodes"] = request.recallStateCodes;
    query["RecallTimes"] = request.recallTimes;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["RetryType"] = request.retryType;
    query["TaskName"] = request.taskName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRobotTaskResponse>(await this.callApi(params, req, runtime), new CreateRobotTaskResponse({}));
  }

  async createRobotTask(request: CreateRobotTaskRequest): Promise<CreateRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRobotTaskWithOptions(request, runtime);
  }

  async deleteRobotTaskWithOptions(request: DeleteRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRobotTaskResponse>(await this.callApi(params, req, runtime), new DeleteRobotTaskResponse({}));
  }

  async deleteRobotTask(request: DeleteRobotTaskRequest): Promise<DeleteRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRobotTaskWithOptions(request, runtime);
  }

  async executeCallTaskWithOptions(request: ExecuteCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteCallTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["FireTime"] = request.fireTime;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["Status"] = request.status;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteCallTaskResponse>(await this.callApi(params, req, runtime), new ExecuteCallTaskResponse({}));
  }

  async executeCallTask(request: ExecuteCallTaskRequest): Promise<ExecuteCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeCallTaskWithOptions(request, runtime);
  }

  async getCallInfoWithOptions(request: GetCallInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCallInfoResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["RtcId"] = request.rtcId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetCallInfo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCallInfoResponse>(await this.callApi(params, req, runtime), new GetCallInfoResponse({}));
  }

  async getCallInfo(request: GetCallInfoRequest): Promise<GetCallInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallInfoWithOptions(request, runtime);
  }

  async getHotlineQualificationByOrderWithOptions(request: GetHotlineQualificationByOrderRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineQualificationByOrderResponse> {
    Util.validateModel(request);
    let query = { };
    query["OrderId"] = request.orderId;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineQualificationByOrder",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineQualificationByOrderResponse>(await this.callApi(params, req, runtime), new GetHotlineQualificationByOrderResponse({}));
  }

  async getHotlineQualificationByOrder(request: GetHotlineQualificationByOrderRequest): Promise<GetHotlineQualificationByOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineQualificationByOrderWithOptions(request, runtime);
  }

  async getMqttTokenWithOptions(request: GetMqttTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetMqttTokenResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetMqttToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMqttTokenResponse>(await this.callApi(params, req, runtime), new GetMqttTokenResponse({}));
  }

  async getMqttToken(request: GetMqttTokenRequest): Promise<GetMqttTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMqttTokenWithOptions(request, runtime);
  }

  async getRtcTokenWithOptions(request: GetRtcTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetRtcTokenResponse> {
    Util.validateModel(request);
    let query = { };
    query["DeviceId"] = request.deviceId;
    query["IsCustomAccount"] = request.isCustomAccount;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetRtcToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRtcTokenResponse>(await this.callApi(params, req, runtime), new GetRtcTokenResponse({}));
  }

  async getRtcToken(request: GetRtcTokenRequest): Promise<GetRtcTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRtcTokenWithOptions(request, runtime);
  }

  async getTokenWithOptions(request: GetTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TokenType"] = request.tokenType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTokenWithOptions(request, runtime);
  }

  async ivrCallWithOptions(request: IvrCallRequest, runtime: $Util.RuntimeOptions): Promise<IvrCallResponse> {
    Util.validateModel(request);
    let query = { };
    query["ByeCode"] = request.byeCode;
    query["ByeTtsParams"] = request.byeTtsParams;
    query["CalledNumber"] = request.calledNumber;
    query["CalledShowNumber"] = request.calledShowNumber;
    query["MenuKeyMap"] = request.menuKeyMap;
    query["OutId"] = request.outId;
    query["OwnerId"] = request.ownerId;
    query["PlayTimes"] = request.playTimes;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["StartCode"] = request.startCode;
    query["StartTtsParams"] = request.startTtsParams;
    query["Timeout"] = request.timeout;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "IvrCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<IvrCallResponse>(await this.callApi(params, req, runtime), new IvrCallResponse({}));
  }

  async ivrCall(request: IvrCallRequest): Promise<IvrCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ivrCallWithOptions(request, runtime);
  }

  async listCallTaskWithOptions(request: ListCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListCallTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["BizType"] = request.bizType;
    query["OwnerId"] = request.ownerId;
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["Status"] = request.status;
    query["TaskId"] = request.taskId;
    query["TaskName"] = request.taskName;
    query["TemplateName"] = request.templateName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCallTaskResponse>(await this.callApi(params, req, runtime), new ListCallTaskResponse({}));
  }

  async listCallTask(request: ListCallTaskRequest): Promise<ListCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallTaskWithOptions(request, runtime);
  }

  async listCallTaskDetailWithOptions(request: ListCallTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListCallTaskDetailResponse> {
    Util.validateModel(request);
    let query = { };
    query["CalledNum"] = request.calledNum;
    query["OwnerId"] = request.ownerId;
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["Status"] = request.status;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListCallTaskDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCallTaskDetailResponse>(await this.callApi(params, req, runtime), new ListCallTaskDetailResponse({}));
  }

  async listCallTaskDetail(request: ListCallTaskDetailRequest): Promise<ListCallTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallTaskDetailWithOptions(request, runtime);
  }

  async listHotlineTransferNumberWithOptions(request: ListHotlineTransferNumberRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineTransferNumberResponse> {
    Util.validateModel(request);
    let query = { };
    query["HotlineNumber"] = request.hotlineNumber;
    query["OwnerId"] = request.ownerId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["QualificationId"] = request.qualificationId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListHotlineTransferNumber",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotlineTransferNumberResponse>(await this.callApi(params, req, runtime), new ListHotlineTransferNumberResponse({}));
  }

  async listHotlineTransferNumber(request: ListHotlineTransferNumberRequest): Promise<ListHotlineTransferNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineTransferNumberWithOptions(request, runtime);
  }

  async listHotlineTransferRegisterFileWithOptions(request: ListHotlineTransferRegisterFileRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineTransferRegisterFileResponse> {
    Util.validateModel(request);
    let query = { };
    query["HotlineNumber"] = request.hotlineNumber;
    query["OwnerId"] = request.ownerId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["QualificationId"] = request.qualificationId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListHotlineTransferRegisterFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotlineTransferRegisterFileResponse>(await this.callApi(params, req, runtime), new ListHotlineTransferRegisterFileResponse({}));
  }

  async listHotlineTransferRegisterFile(request: ListHotlineTransferRegisterFileRequest): Promise<ListHotlineTransferRegisterFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineTransferRegisterFileWithOptions(request, runtime);
  }

  async queryCallDetailByCallIdWithOptions(request: QueryCallDetailByCallIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallDetailByCallIdResponse> {
    Util.validateModel(request);
    let query = { };
    query["CallId"] = request.callId;
    query["OwnerId"] = request.ownerId;
    query["ProdId"] = request.prodId;
    query["QueryDate"] = request.queryDate;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallDetailByCallId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryCallDetailByCallIdResponse>(await this.callApi(params, req, runtime), new QueryCallDetailByCallIdResponse({}));
  }

  async queryCallDetailByCallId(request: QueryCallDetailByCallIdRequest): Promise<QueryCallDetailByCallIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallDetailByCallIdWithOptions(request, runtime);
  }

  async queryCallDetailByTaskIdWithOptions(request: QueryCallDetailByTaskIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallDetailByTaskIdResponse> {
    Util.validateModel(request);
    let query = { };
    query["Callee"] = request.callee;
    query["OwnerId"] = request.ownerId;
    query["QueryDate"] = request.queryDate;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallDetailByTaskId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryCallDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new QueryCallDetailByTaskIdResponse({}));
  }

  async queryCallDetailByTaskId(request: QueryCallDetailByTaskIdRequest): Promise<QueryCallDetailByTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallDetailByTaskIdWithOptions(request, runtime);
  }

  async queryCallInPoolTransferConfigWithOptions(request: QueryCallInPoolTransferConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallInPoolTransferConfigResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["PhoneNumber"] = request.phoneNumber;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallInPoolTransferConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryCallInPoolTransferConfigResponse>(await this.callApi(params, req, runtime), new QueryCallInPoolTransferConfigResponse({}));
  }

  async queryCallInPoolTransferConfig(request: QueryCallInPoolTransferConfigRequest): Promise<QueryCallInPoolTransferConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallInPoolTransferConfigWithOptions(request, runtime);
  }

  async queryCallInTransferRecordWithOptions(request: QueryCallInTransferRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallInTransferRecordResponse> {
    Util.validateModel(request);
    let query = { };
    query["CallInCaller"] = request.callInCaller;
    query["OwnerId"] = request.ownerId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["PhoneNumber"] = request.phoneNumber;
    query["QueryDate"] = request.queryDate;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallInTransferRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryCallInTransferRecordResponse>(await this.callApi(params, req, runtime), new QueryCallInTransferRecordResponse({}));
  }

  async queryCallInTransferRecord(request: QueryCallInTransferRecordRequest): Promise<QueryCallInTransferRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallInTransferRecordWithOptions(request, runtime);
  }

  async queryRobotInfoListWithOptions(request: QueryRobotInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    query["AuditStatus"] = request.auditStatus;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotInfoList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotInfoListResponse>(await this.callApi(params, req, runtime), new QueryRobotInfoListResponse({}));
  }

  async queryRobotInfoList(request: QueryRobotInfoListRequest): Promise<QueryRobotInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotInfoListWithOptions(request, runtime);
  }

  async queryRobotTaskCallDetailWithOptions(request: QueryRobotTaskCallDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskCallDetailResponse> {
    Util.validateModel(request);
    let query = { };
    query["Callee"] = request.callee;
    query["OwnerId"] = request.ownerId;
    query["QueryDate"] = request.queryDate;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotTaskCallDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotTaskCallDetailResponse>(await this.callApi(params, req, runtime), new QueryRobotTaskCallDetailResponse({}));
  }

  async queryRobotTaskCallDetail(request: QueryRobotTaskCallDetailRequest): Promise<QueryRobotTaskCallDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskCallDetailWithOptions(request, runtime);
  }

  async queryRobotTaskCallListWithOptions(request: QueryRobotTaskCallListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskCallListResponse> {
    Util.validateModel(request);
    let query = { };
    query["CallResult"] = request.callResult;
    query["Called"] = request.called;
    query["DialogCountFrom"] = request.dialogCountFrom;
    query["DialogCountTo"] = request.dialogCountTo;
    query["DurationFrom"] = request.durationFrom;
    query["DurationTo"] = request.durationTo;
    query["HangupDirection"] = request.hangupDirection;
    query["OwnerId"] = request.ownerId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotTaskCallList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotTaskCallListResponse>(await this.callApi(params, req, runtime), new QueryRobotTaskCallListResponse({}));
  }

  async queryRobotTaskCallList(request: QueryRobotTaskCallListRequest): Promise<QueryRobotTaskCallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskCallListWithOptions(request, runtime);
  }

  async queryRobotTaskDetailWithOptions(request: QueryRobotTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskDetailResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotTaskDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotTaskDetailResponse>(await this.callApi(params, req, runtime), new QueryRobotTaskDetailResponse({}));
  }

  async queryRobotTaskDetail(request: QueryRobotTaskDetailRequest): Promise<QueryRobotTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskDetailWithOptions(request, runtime);
  }

  async queryRobotTaskListWithOptions(request: QueryRobotTaskListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskListResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["Status"] = request.status;
    query["TaskName"] = request.taskName;
    query["Time"] = request.time;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotTaskList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotTaskListResponse>(await this.callApi(params, req, runtime), new QueryRobotTaskListResponse({}));
  }

  async queryRobotTaskList(request: QueryRobotTaskListRequest): Promise<QueryRobotTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskListWithOptions(request, runtime);
  }

  async queryRobotv2AllListWithOptions(request: QueryRobotv2AllListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotv2AllListResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotv2AllList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotv2AllListResponse>(await this.callApi(params, req, runtime), new QueryRobotv2AllListResponse({}));
  }

  async queryRobotv2AllList(request: QueryRobotv2AllListRequest): Promise<QueryRobotv2AllListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotv2AllListWithOptions(request, runtime);
  }

  async queryVirtualNumberWithOptions(request: QueryVirtualNumberRequest, runtime: $Util.RuntimeOptions): Promise<QueryVirtualNumberResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["ProdCode"] = request.prodCode;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["RouteType"] = request.routeType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryVirtualNumber",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryVirtualNumberResponse>(await this.callApi(params, req, runtime), new QueryVirtualNumberResponse({}));
  }

  async queryVirtualNumber(request: QueryVirtualNumberRequest): Promise<QueryVirtualNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVirtualNumberWithOptions(request, runtime);
  }

  async queryVirtualNumberRelationWithOptions(request: QueryVirtualNumberRelationRequest, runtime: $Util.RuntimeOptions): Promise<QueryVirtualNumberRelationResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["PageNo"] = request.pageNo;
    query["PageSize"] = request.pageSize;
    query["PhoneNum"] = request.phoneNum;
    query["ProdCode"] = request.prodCode;
    query["QualificationId"] = request.qualificationId;
    query["RegionNameCity"] = request.regionNameCity;
    query["RelatedNum"] = request.relatedNum;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["RouteType"] = request.routeType;
    query["SpecId"] = request.specId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryVirtualNumberRelation",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryVirtualNumberRelationResponse>(await this.callApi(params, req, runtime), new QueryVirtualNumberRelationResponse({}));
  }

  async queryVirtualNumberRelation(request: QueryVirtualNumberRelationRequest): Promise<QueryVirtualNumberRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVirtualNumberRelationWithOptions(request, runtime);
  }

  async refreshMqttTokenWithOptions(request: RefreshMqttTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshMqttTokenResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClientId"] = request.clientId;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RefreshMqttToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefreshMqttTokenResponse>(await this.callApi(params, req, runtime), new RefreshMqttTokenResponse({}));
  }

  async refreshMqttToken(request: RefreshMqttTokenRequest): Promise<RefreshMqttTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshMqttTokenWithOptions(request, runtime);
  }

  async sendVerificationWithOptions(request: SendVerificationRequest, runtime: $Util.RuntimeOptions): Promise<SendVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    query["BizType"] = request.bizType;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["Target"] = request.target;
    query["VerifyType"] = request.verifyType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SendVerification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendVerificationResponse>(await this.callApi(params, req, runtime), new SendVerificationResponse({}));
  }

  async sendVerification(request: SendVerificationRequest): Promise<SendVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerificationWithOptions(request, runtime);
  }

  async setTransferCalleePoolConfigWithOptions(request: SetTransferCalleePoolConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetTransferCalleePoolConfigResponse> {
    Util.validateModel(request);
    let query = { };
    query["CalledRouteMode"] = request.calledRouteMode;
    query["Details"] = request.details;
    query["OwnerId"] = request.ownerId;
    query["PhoneNumber"] = request.phoneNumber;
    query["QualificationId"] = request.qualificationId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SetTransferCalleePoolConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SetTransferCalleePoolConfigResponse>(await this.callApi(params, req, runtime), new SetTransferCalleePoolConfigResponse({}));
  }

  async setTransferCalleePoolConfig(request: SetTransferCalleePoolConfigRequest): Promise<SetTransferCalleePoolConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTransferCalleePoolConfigWithOptions(request, runtime);
  }

  async singleCallByTtsWithOptions(request: SingleCallByTtsRequest, runtime: $Util.RuntimeOptions): Promise<SingleCallByTtsResponse> {
    Util.validateModel(request);
    let query = { };
    query["CalledNumber"] = request.calledNumber;
    query["CalledShowNumber"] = request.calledShowNumber;
    query["OutId"] = request.outId;
    query["OwnerId"] = request.ownerId;
    query["PlayTimes"] = request.playTimes;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["Speed"] = request.speed;
    query["TtsCode"] = request.ttsCode;
    query["TtsParam"] = request.ttsParam;
    query["Volume"] = request.volume;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SingleCallByTts",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SingleCallByTtsResponse>(await this.callApi(params, req, runtime), new SingleCallByTtsResponse({}));
  }

  async singleCallByTts(request: SingleCallByTtsRequest): Promise<SingleCallByTtsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleCallByTtsWithOptions(request, runtime);
  }

  async singleCallByVoiceWithOptions(request: SingleCallByVoiceRequest, runtime: $Util.RuntimeOptions): Promise<SingleCallByVoiceResponse> {
    Util.validateModel(request);
    let query = { };
    query["CalledNumber"] = request.calledNumber;
    query["CalledShowNumber"] = request.calledShowNumber;
    query["OutId"] = request.outId;
    query["OwnerId"] = request.ownerId;
    query["PlayTimes"] = request.playTimes;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["Speed"] = request.speed;
    query["VoiceCode"] = request.voiceCode;
    query["Volume"] = request.volume;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SingleCallByVoice",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SingleCallByVoiceResponse>(await this.callApi(params, req, runtime), new SingleCallByVoiceResponse({}));
  }

  async singleCallByVoice(request: SingleCallByVoiceRequest): Promise<SingleCallByVoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleCallByVoiceWithOptions(request, runtime);
  }

  async smartCallWithOptions(request: SmartCallRequest, runtime: $Util.RuntimeOptions): Promise<SmartCallResponse> {
    Util.validateModel(request);
    let query = { };
    query["ActionCodeBreak"] = request.actionCodeBreak;
    query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    query["AsrBaseId"] = request.asrBaseId;
    query["AsrModelId"] = request.asrModelId;
    query["BackgroundFileCode"] = request.backgroundFileCode;
    query["BackgroundSpeed"] = request.backgroundSpeed;
    query["BackgroundVolume"] = request.backgroundVolume;
    query["CalledNumber"] = request.calledNumber;
    query["CalledShowNumber"] = request.calledShowNumber;
    query["DynamicId"] = request.dynamicId;
    query["EarlyMediaAsr"] = request.earlyMediaAsr;
    query["EnableITN"] = request.enableITN;
    query["MuteTime"] = request.muteTime;
    query["OutId"] = request.outId;
    query["OwnerId"] = request.ownerId;
    query["PauseTime"] = request.pauseTime;
    query["RecordFlag"] = request.recordFlag;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SessionTimeout"] = request.sessionTimeout;
    query["Speed"] = request.speed;
    query["StreamAsr"] = request.streamAsr;
    query["TtsConf"] = request.ttsConf;
    query["TtsSpeed"] = request.ttsSpeed;
    query["TtsStyle"] = request.ttsStyle;
    query["TtsVolume"] = request.ttsVolume;
    query["VoiceCode"] = request.voiceCode;
    query["VoiceCodeParam"] = request.voiceCodeParam;
    query["Volume"] = request.volume;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SmartCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SmartCallResponse>(await this.callApi(params, req, runtime), new SmartCallResponse({}));
  }

  async smartCall(request: SmartCallRequest): Promise<SmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smartCallWithOptions(request, runtime);
  }

  async smartCallOperateWithOptions(request: SmartCallOperateRequest, runtime: $Util.RuntimeOptions): Promise<SmartCallOperateResponse> {
    Util.validateModel(request);
    let query = { };
    query["CallId"] = request.callId;
    query["Command"] = request.command;
    query["OwnerId"] = request.ownerId;
    query["Param"] = request.param;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SmartCallOperate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SmartCallOperateResponse>(await this.callApi(params, req, runtime), new SmartCallOperateResponse({}));
  }

  async smartCallOperate(request: SmartCallOperateRequest): Promise<SmartCallOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smartCallOperateWithOptions(request, runtime);
  }

  async startRobotTaskWithOptions(request: StartRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["ScheduleTime"] = request.scheduleTime;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "StartRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartRobotTaskResponse>(await this.callApi(params, req, runtime), new StartRobotTaskResponse({}));
  }

  async startRobotTask(request: StartRobotTaskRequest): Promise<StartRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRobotTaskWithOptions(request, runtime);
  }

  async stopRobotTaskWithOptions(request: StopRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "StopRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopRobotTaskResponse>(await this.callApi(params, req, runtime), new StopRobotTaskResponse({}));
  }

  async stopRobotTask(request: StopRobotTaskRequest): Promise<StopRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRobotTaskWithOptions(request, runtime);
  }

  async submitHotlineTransferRegisterWithOptions(request: SubmitHotlineTransferRegisterRequest, runtime: $Util.RuntimeOptions): Promise<SubmitHotlineTransferRegisterResponse> {
    Util.validateModel(request);
    let query = { };
    query["Agreement"] = request.agreement;
    query["HotlineNumber"] = request.hotlineNumber;
    query["OperatorIdentityCard"] = request.operatorIdentityCard;
    query["OperatorMail"] = request.operatorMail;
    query["OperatorMailVerifyCode"] = request.operatorMailVerifyCode;
    query["OperatorMobile"] = request.operatorMobile;
    query["OperatorMobileVerifyCode"] = request.operatorMobileVerifyCode;
    query["OperatorName"] = request.operatorName;
    query["OwnerId"] = request.ownerId;
    query["QualificationId"] = request.qualificationId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TransferPhoneNumberInfos"] = request.transferPhoneNumberInfos;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SubmitHotlineTransferRegister",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitHotlineTransferRegisterResponse>(await this.callApi(params, req, runtime), new SubmitHotlineTransferRegisterResponse({}));
  }

  async submitHotlineTransferRegister(request: SubmitHotlineTransferRegisterRequest): Promise<SubmitHotlineTransferRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitHotlineTransferRegisterWithOptions(request, runtime);
  }

  async uploadRobotTaskCalledFileWithOptions(request: UploadRobotTaskCalledFileRequest, runtime: $Util.RuntimeOptions): Promise<UploadRobotTaskCalledFileResponse> {
    Util.validateModel(request);
    let query = { };
    query["CalledNumber"] = request.calledNumber;
    query["Id"] = request.id;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TtsParam"] = request.ttsParam;
    query["TtsParamHead"] = request.ttsParamHead;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UploadRobotTaskCalledFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UploadRobotTaskCalledFileResponse>(await this.callApi(params, req, runtime), new UploadRobotTaskCalledFileResponse({}));
  }

  async uploadRobotTaskCalledFile(request: UploadRobotTaskCalledFileRequest): Promise<UploadRobotTaskCalledFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadRobotTaskCalledFileWithOptions(request, runtime);
  }

}
