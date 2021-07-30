// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddRtcAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      deviceId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  corpNameList?: string;
  numberList?: string;
  routeType?: number;
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      corpNameList: 'CorpNameList',
      numberList: 'NumberList',
      routeType: 'RouteType',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      corpNameList: 'string',
      numberList: 'string',
      routeType: 'number',
      phoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVirtualNumberRelationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  calledShowNumber?: string;
  corpName?: string;
  calledNumber?: string;
  dialogId?: string;
  earlyMediaAsr?: boolean;
  taskName?: string;
  scheduleTime?: number;
  scheduleCall?: boolean;
  ttsParam?: string;
  ttsParamHead?: string;
  isSelfLine?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      calledShowNumber: 'CalledShowNumber',
      corpName: 'CorpName',
      calledNumber: 'CalledNumber',
      dialogId: 'DialogId',
      earlyMediaAsr: 'EarlyMediaAsr',
      taskName: 'TaskName',
      scheduleTime: 'ScheduleTime',
      scheduleCall: 'ScheduleCall',
      ttsParam: 'TtsParam',
      ttsParamHead: 'TtsParamHead',
      isSelfLine: 'IsSelfLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      calledShowNumber: 'string',
      corpName: 'string',
      calledNumber: 'string',
      dialogId: 'string',
      earlyMediaAsr: 'boolean',
      taskName: 'string',
      scheduleTime: 'number',
      scheduleCall: 'boolean',
      ttsParam: 'string',
      ttsParamHead: 'string',
      isSelfLine: 'boolean',
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

export class BindNumberAndVoipIdRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  voipId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
      voipId: 'VoipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
      voipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindNumberAndVoipIdResponseBody extends $tea.Model {
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

export class BindNumberAndVoipIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindNumberAndVoipIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindNumberAndVoipIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCallRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      callId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCallResponseBody extends $tea.Model {
  status?: boolean;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  callerShowNumber?: string;
  callerNumber?: string;
  calledShowNumber?: string;
  calledNumber?: string;
  recordFlag?: boolean;
  asrFlag?: boolean;
  sessionTimeout?: number;
  asrModelId?: string;
  outId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      callerShowNumber: 'CallerShowNumber',
      callerNumber: 'CallerNumber',
      calledShowNumber: 'CalledShowNumber',
      calledNumber: 'CalledNumber',
      recordFlag: 'RecordFlag',
      asrFlag: 'AsrFlag',
      sessionTimeout: 'SessionTimeout',
      asrModelId: 'AsrModelId',
      outId: 'OutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      callerShowNumber: 'string',
      callerNumber: 'string',
      calledShowNumber: 'string',
      calledNumber: 'string',
      recordFlag: 'boolean',
      asrFlag: 'boolean',
      sessionTimeout: 'number',
      asrModelId: 'string',
      outId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClickToDialResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      callId: 'string',
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

export class CloseSipAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  partnerId?: number;
  sipAccountID?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      partnerId: 'PartnerId',
      sipAccountID: 'SipAccountID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      partnerId: 'number',
      sipAccountID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseSipAccountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseSipAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseSipAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseSipAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskName?: string;
  bizType?: string;
  templateCode?: string;
  templateName?: string;
  resourceType?: string;
  resource?: string;
  dataType?: string;
  data?: string;
  fireTime?: string;
  stopTime?: string;
  scheduleType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskName: 'TaskName',
      bizType: 'BizType',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      resourceType: 'ResourceType',
      resource: 'Resource',
      dataType: 'DataType',
      data: 'Data',
      fireTime: 'FireTime',
      stopTime: 'StopTime',
      scheduleType: 'ScheduleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskName: 'string',
      bizType: 'string',
      templateCode: 'string',
      templateName: 'string',
      resourceType: 'string',
      resource: 'string',
      dataType: 'string',
      data: 'string',
      fireTime: 'string',
      stopTime: 'string',
      scheduleType: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskName?: string;
  dialogId?: number;
  corpName?: string;
  caller?: string;
  numberStatusIdent?: boolean;
  retryType?: number;
  recallStateCodes?: string;
  recallTimes?: number;
  recallInterval?: number;
  isSelfLine?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskName: 'TaskName',
      dialogId: 'DialogId',
      corpName: 'CorpName',
      caller: 'Caller',
      numberStatusIdent: 'NumberStatusIdent',
      retryType: 'RetryType',
      recallStateCodes: 'RecallStateCodes',
      recallTimes: 'RecallTimes',
      recallInterval: 'RecallInterval',
      isSelfLine: 'IsSelfLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskName: 'string',
      dialogId: 'number',
      corpName: 'string',
      caller: 'string',
      numberStatusIdent: 'boolean',
      retryType: 'number',
      recallStateCodes: 'string',
      recallTimes: 'number',
      recallInterval: 'number',
      isSelfLine: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRobotTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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

export class CreateSipAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  partnerId?: number;
  businessKey?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      partnerId: 'PartnerId',
      businessKey: 'BusinessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      partnerId: 'number',
      businessKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSipAccountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  data?: CreateSipAccountResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: CreateSipAccountResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSipAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSipAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSipAccountResponseBody,
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
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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

export class DescribeRecordDataRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  accountType?: string;
  accountId?: string;
  acid?: string;
  secLevel?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      accountType: 'AccountType',
      accountId: 'AccountId',
      acid: 'Acid',
      secLevel: 'SecLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      accountType: 'string',
      accountId: 'string',
      acid: 'string',
      secLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataResponseBody extends $tea.Model {
  ossLink?: string;
  requestId?: string;
  agentId?: string;
  acid?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      ossLink: 'OssLink',
      requestId: 'RequestId',
      agentId: 'AgentId',
      acid: 'Acid',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossLink: 'string',
      requestId: 'string',
      agentId: 'string',
      acid: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoRtcNumberAuthRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoRtcNumberAuthResponseBody extends $tea.Model {
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

export class DoRtcNumberAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoRtcNumberAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoRtcNumberAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoubleCallSeatRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  callerShowNumber?: string;
  callerNumber?: string;
  calledShowNumber?: string;
  calledNumber?: string;
  recordFlag?: boolean;
  asrFlag?: boolean;
  sessionTimeout?: number;
  asrModelId?: string;
  outId?: string;
  callType?: string;
  recordPoint?: number;
  voiceCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      callerShowNumber: 'CallerShowNumber',
      callerNumber: 'CallerNumber',
      calledShowNumber: 'CalledShowNumber',
      calledNumber: 'CalledNumber',
      recordFlag: 'RecordFlag',
      asrFlag: 'AsrFlag',
      sessionTimeout: 'SessionTimeout',
      asrModelId: 'AsrModelId',
      outId: 'OutId',
      callType: 'CallType',
      recordPoint: 'RecordPoint',
      voiceCode: 'VoiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      callerShowNumber: 'string',
      callerNumber: 'string',
      calledShowNumber: 'string',
      calledNumber: 'string',
      recordFlag: 'boolean',
      asrFlag: 'boolean',
      sessionTimeout: 'number',
      asrModelId: 'string',
      outId: 'string',
      callType: 'string',
      recordPoint: 'number',
      voiceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoubleCallSeatResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      callId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoubleCallSeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoubleCallSeatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoubleCallSeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCallTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  status?: string;
  fireTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      status: 'Status',
      fireTime: 'FireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
      status: 'string',
      fireTime: 'string',
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

export class GetHotlineQualificationByOrderRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  data?: GetHotlineQualificationByOrderResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetHotlineQualificationByOrderResponseBodyData,
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

export class GetRtcTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userId?: string;
  deviceId?: string;
  isCustomAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      isCustomAccount: 'IsCustomAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userId: 'string',
      deviceId: 'string',
      isCustomAccount: 'boolean',
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
  token?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      token: 'Token',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      token: 'string',
      requestId: 'string',
      success: 'boolean',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  calledShowNumber?: string;
  calledNumber?: string;
  startCode?: string;
  startTtsParams?: string;
  playTimes?: number;
  byeCode?: string;
  byeTtsParams?: string;
  timeout?: number;
  outId?: string;
  menuKeyMap?: IvrCallRequestMenuKeyMap[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      calledShowNumber: 'CalledShowNumber',
      calledNumber: 'CalledNumber',
      startCode: 'StartCode',
      startTtsParams: 'StartTtsParams',
      playTimes: 'PlayTimes',
      byeCode: 'ByeCode',
      byeTtsParams: 'ByeTtsParams',
      timeout: 'Timeout',
      outId: 'OutId',
      menuKeyMap: 'MenuKeyMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      calledShowNumber: 'string',
      calledNumber: 'string',
      startCode: 'string',
      startTtsParams: 'string',
      playTimes: 'number',
      byeCode: 'string',
      byeTtsParams: 'string',
      timeout: 'number',
      outId: 'string',
      menuKeyMap: { 'type': 'array', 'itemType': IvrCallRequestMenuKeyMap },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      callId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNumber?: number;
  pageSize?: number;
  templateName?: string;
  status?: string;
  taskName?: string;
  taskId?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateName: 'TemplateName',
      status: 'Status',
      taskName: 'TaskName',
      taskId: 'TaskId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      templateName: 'string',
      status: 'string',
      taskName: 'string',
      taskId: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponseBody extends $tea.Model {
  code?: string;
  pageSize?: number;
  pageNumber?: number;
  requestId?: string;
  total?: number;
  data?: ListCallTaskResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      total: 'number',
      data: { 'type': 'array', 'itemType': ListCallTaskResponseBodyData },
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  calledNum?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      calledNum: 'CalledNum',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
      calledNum: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  totalPage?: number;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  data?: ListCallTaskDetailResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      totalPage: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      data: { 'type': 'array', 'itemType': ListCallTaskDetailResponseBodyData },
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  qualificationId?: string;
  pageNo?: number;
  pageSize?: number;
  hotlineNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      qualificationId: 'QualificationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      hotlineNumber: 'HotlineNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      qualificationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      hotlineNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  data?: ListHotlineTransferNumberResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListHotlineTransferNumberResponseBodyData,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  qualificationId?: string;
  pageNo?: number;
  pageSize?: number;
  hotlineNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      qualificationId: 'QualificationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      hotlineNumber: 'HotlineNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      qualificationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      hotlineNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  data?: ListHotlineTransferRegisterFileResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListHotlineTransferRegisterFileResponseBodyData,
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

export class ListOrderedNumbersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderedNumbersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  numbers?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      numbers: 'Numbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderedNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrderedNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrderedNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundStrategiesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  buId?: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      buId: 'BuId',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      buId: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundStrategiesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  outboundStrategies?: ListOutboundStrategiesResponseBodyOutboundStrategies[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      outboundStrategies: 'OutboundStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      outboundStrategies: { 'type': 'array', 'itemType': ListOutboundStrategiesResponseBodyOutboundStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundStrategiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOutboundStrategiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOutboundStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotTaskCallsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNo?: number;
  pageSize?: number;
  taskId?: string;
  durationFrom?: string;
  durationTo?: string;
  dialogCountFrom?: string;
  dialogCountTo?: string;
  hangupDirection?: string;
  callResult?: string;
  called?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      durationFrom: 'DurationFrom',
      durationTo: 'DurationTo',
      dialogCountFrom: 'DialogCountFrom',
      dialogCountTo: 'DialogCountTo',
      hangupDirection: 'HangupDirection',
      callResult: 'CallResult',
      called: 'Called',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      taskId: 'string',
      durationFrom: 'string',
      durationTo: 'string',
      dialogCountFrom: 'string',
      dialogCountTo: 'string',
      hangupDirection: 'string',
      callResult: 'string',
      called: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotTaskCallsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  pageNo?: string;
  code?: string;
  message?: string;
  pageSize?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      pageNo: 'PageNo',
      code: 'Code',
      message: 'Message',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      pageNo: 'string',
      code: 'string',
      message: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotTaskCallsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRobotTaskCallsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRobotTaskCallsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByCallIdRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  callId?: string;
  prodId?: number;
  queryDate?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      callId: 'CallId',
      prodId: 'ProdId',
      queryDate: 'QueryDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      callId: 'string',
      prodId: 'number',
      queryDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByCallIdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  queryDate?: number;
  callee?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      queryDate: 'QueryDate',
      callee: 'Callee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
      queryDate: 'number',
      callee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByTaskIdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  data?: QueryCallInPoolTransferConfigResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: QueryCallInPoolTransferConfigResponseBodyData,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  callInCaller?: string;
  queryDate?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
      callInCaller: 'CallInCaller',
      queryDate: 'QueryDate',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
      callInCaller: 'string',
      queryDate: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  data?: QueryCallInTransferRecordResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: QueryCallInTransferRecordResponseBodyData,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  auditStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      auditStatus: 'AuditStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      auditStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotInfoListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  callee?: string;
  queryDate?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      callee: 'Callee',
      queryDate: 'QueryDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
      callee: 'string',
      queryDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNo?: number;
  pageSize?: number;
  taskId?: string;
  durationFrom?: string;
  durationTo?: string;
  dialogCountFrom?: string;
  dialogCountTo?: string;
  hangupDirection?: string;
  callResult?: string;
  called?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      durationFrom: 'DurationFrom',
      durationTo: 'DurationTo',
      dialogCountFrom: 'DialogCountFrom',
      dialogCountTo: 'DialogCountTo',
      hangupDirection: 'HangupDirection',
      callResult: 'CallResult',
      called: 'Called',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      taskId: 'string',
      durationFrom: 'string',
      durationTo: 'string',
      dialogCountFrom: 'string',
      dialogCountTo: 'string',
      hangupDirection: 'string',
      callResult: 'string',
      called: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskName?: string;
  status?: string;
  time?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskName: 'TaskName',
      status: 'Status',
      time: 'Time',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskName: 'string',
      status: 'string',
      time: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskListResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  pageNo?: string;
  code?: string;
  message?: string;
  pageSize?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      pageNo: 'PageNo',
      code: 'Code',
      message: 'Message',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      pageNo: 'string',
      code: 'string',
      message: 'string',
      pageSize: 'string',
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
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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

export class QueryRtcNumberAuthStatusRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRtcNumberAuthStatusResponseBody extends $tea.Model {
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

export class QueryRtcNumberAuthStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRtcNumberAuthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRtcNumberAuthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  pageNo?: number;
  pageSize?: number;
  routeType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      pageNo: 'number',
      pageSize: 'number',
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  pageNo?: number;
  pageSize?: number;
  routeType?: number;
  qualificationId?: number;
  regionNameCity?: string;
  specId?: number;
  relatedNum?: string;
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      routeType: 'RouteType',
      qualificationId: 'QualificationId',
      regionNameCity: 'RegionNameCity',
      specId: 'SpecId',
      relatedNum: 'RelatedNum',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      pageNo: 'number',
      pageSize: 'number',
      routeType: 'number',
      qualificationId: 'number',
      regionNameCity: 'string',
      specId: 'number',
      relatedNum: 'string',
      phoneNum: 'string',
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

export class QueryVoipNumberBindInfosRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  voipId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
      voipId: 'VoipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
      voipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoipNumberBindInfosResponseBody extends $tea.Model {
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

export class QueryVoipNumberBindInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryVoipNumberBindInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryVoipNumberBindInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportVoipProblemsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  channelId?: string;
  voipId?: string;
  title?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      channelId: 'ChannelId',
      voipId: 'VoipId',
      title: 'Title',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      channelId: 'string',
      voipId: 'string',
      title: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportVoipProblemsResponseBody extends $tea.Model {
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

export class ReportVoipProblemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReportVoipProblemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReportVoipProblemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  verifyType?: string;
  bizType?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      verifyType: 'VerifyType',
      bizType: 'BizType',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      verifyType: 'string',
      bizType: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  qualificationId?: string;
  calledRouteMode?: string;
  details?: SetTransferCalleePoolConfigRequestDetails[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
      qualificationId: 'QualificationId',
      calledRouteMode: 'CalledRouteMode',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
      qualificationId: 'string',
      calledRouteMode: 'string',
      details: { 'type': 'array', 'itemType': SetTransferCalleePoolConfigRequestDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  calledShowNumber?: string;
  calledNumber?: string;
  ttsCode?: string;
  ttsParam?: string;
  playTimes?: number;
  volume?: number;
  speed?: number;
  outId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      calledShowNumber: 'CalledShowNumber',
      calledNumber: 'CalledNumber',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      playTimes: 'PlayTimes',
      volume: 'Volume',
      speed: 'Speed',
      outId: 'OutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      calledShowNumber: 'string',
      calledNumber: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      playTimes: 'number',
      volume: 'number',
      speed: 'number',
      outId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByTtsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      callId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  calledShowNumber?: string;
  calledNumber?: string;
  voiceCode?: string;
  playTimes?: number;
  volume?: number;
  speed?: number;
  outId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      calledShowNumber: 'CalledShowNumber',
      calledNumber: 'CalledNumber',
      voiceCode: 'VoiceCode',
      playTimes: 'PlayTimes',
      volume: 'Volume',
      speed: 'Speed',
      outId: 'OutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      calledShowNumber: 'string',
      calledNumber: 'string',
      voiceCode: 'string',
      playTimes: 'number',
      volume: 'number',
      speed: 'number',
      outId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVoiceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      callId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  calledShowNumber?: string;
  calledNumber?: string;
  voiceCode?: string;
  recordFlag?: boolean;
  volume?: number;
  speed?: number;
  asrModelId?: string;
  pauseTime?: number;
  muteTime?: number;
  actionCodeBreak?: boolean;
  outId?: string;
  dynamicId?: string;
  earlyMediaAsr?: boolean;
  voiceCodeParam?: string;
  sessionTimeout?: number;
  actionCodeTimeBreak?: number;
  ttsStyle?: string;
  ttsVolume?: number;
  ttsSpeed?: number;
  ttsConf?: boolean;
  asrBaseId?: string;
  streamAsr?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      calledShowNumber: 'CalledShowNumber',
      calledNumber: 'CalledNumber',
      voiceCode: 'VoiceCode',
      recordFlag: 'RecordFlag',
      volume: 'Volume',
      speed: 'Speed',
      asrModelId: 'AsrModelId',
      pauseTime: 'PauseTime',
      muteTime: 'MuteTime',
      actionCodeBreak: 'ActionCodeBreak',
      outId: 'OutId',
      dynamicId: 'DynamicId',
      earlyMediaAsr: 'EarlyMediaAsr',
      voiceCodeParam: 'VoiceCodeParam',
      sessionTimeout: 'SessionTimeout',
      actionCodeTimeBreak: 'ActionCodeTimeBreak',
      ttsStyle: 'TtsStyle',
      ttsVolume: 'TtsVolume',
      ttsSpeed: 'TtsSpeed',
      ttsConf: 'TtsConf',
      asrBaseId: 'AsrBaseId',
      streamAsr: 'StreamAsr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      calledShowNumber: 'string',
      calledNumber: 'string',
      voiceCode: 'string',
      recordFlag: 'boolean',
      volume: 'number',
      speed: 'number',
      asrModelId: 'string',
      pauseTime: 'number',
      muteTime: 'number',
      actionCodeBreak: 'boolean',
      outId: 'string',
      dynamicId: 'string',
      earlyMediaAsr: 'boolean',
      voiceCodeParam: 'string',
      sessionTimeout: 'number',
      actionCodeTimeBreak: 'number',
      ttsStyle: 'string',
      ttsVolume: 'number',
      ttsSpeed: 'number',
      ttsConf: 'boolean',
      asrBaseId: 'string',
      streamAsr: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      callId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  callId?: string;
  command?: string;
  param?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      callId: 'CallId',
      command: 'Command',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      callId: 'string',
      command: 'string',
      param: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallOperateResponseBody extends $tea.Model {
  status?: boolean;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class StartMicroOutboundRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  accountType?: string;
  accountId?: string;
  commandCode?: string;
  callingNumber?: string;
  calledNumber?: string;
  extInfo?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      accountType: 'AccountType',
      accountId: 'AccountId',
      commandCode: 'CommandCode',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      extInfo: 'ExtInfo',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      accountType: 'string',
      accountId: 'string',
      commandCode: 'string',
      callingNumber: 'string',
      calledNumber: 'string',
      extInfo: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundResponseBody extends $tea.Model {
  customerInfo?: string;
  requestId?: string;
  invokeCmdId?: string;
  code?: string;
  invokeCreateTime?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      customerInfo: 'CustomerInfo',
      requestId: 'RequestId',
      invokeCmdId: 'InvokeCmdId',
      code: 'Code',
      invokeCreateTime: 'InvokeCreateTime',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInfo: 'string',
      requestId: 'string',
      invokeCmdId: 'string',
      code: 'string',
      invokeCreateTime: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartMicroOutboundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartMicroOutboundResponseBody,
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
  taskId?: number;
  scheduleTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
      scheduleTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRobotTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  qualificationId?: string;
  operatorName?: string;
  operatorMail?: string;
  operatorMailVerifyCode?: string;
  operatorMobile?: string;
  operatorMobileVerifyCode?: string;
  operatorIdentityCard?: string;
  agreement?: string;
  hotlineNumber?: string;
  transferPhoneNumberInfos?: SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      qualificationId: 'QualificationId',
      operatorName: 'OperatorName',
      operatorMail: 'OperatorMail',
      operatorMailVerifyCode: 'OperatorMailVerifyCode',
      operatorMobile: 'OperatorMobile',
      operatorMobileVerifyCode: 'OperatorMobileVerifyCode',
      operatorIdentityCard: 'OperatorIdentityCard',
      agreement: 'Agreement',
      hotlineNumber: 'HotlineNumber',
      transferPhoneNumberInfos: 'TransferPhoneNumberInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      qualificationId: 'string',
      operatorName: 'string',
      operatorMail: 'string',
      operatorMailVerifyCode: 'string',
      operatorMobile: 'string',
      operatorMobileVerifyCode: 'string',
      operatorIdentityCard: 'string',
      agreement: 'string',
      hotlineNumber: 'string',
      transferPhoneNumberInfos: { 'type': 'array', 'itemType': SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'number',
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

export class UnbindNumberAndVoipIdRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  voipId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
      voipId: 'VoipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
      voipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindNumberAndVoipIdResponseBody extends $tea.Model {
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

export class UnbindNumberAndVoipIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindNumberAndVoipIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindNumberAndVoipIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UndoRtcNumberAuthRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UndoRtcNumberAuthResponseBody extends $tea.Model {
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

export class UndoRtcNumberAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UndoRtcNumberAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UndoRtcNumberAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRobotTaskCalledFileRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  id?: number;
  calledNumber?: string;
  ttsParam?: string;
  ttsParamHead?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      calledNumber: 'CalledNumber',
      ttsParam: 'TtsParam',
      ttsParamHead: 'TtsParamHead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      id: 'number',
      calledNumber: 'string',
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
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
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

export class VoipAddAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoipAddAccountResponseBody extends $tea.Model {
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

export class VoipAddAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VoipAddAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VoipAddAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoipGetTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  voipId?: string;
  deviceId?: string;
  isCustomAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      voipId: 'VoipId',
      deviceId: 'DeviceId',
      isCustomAccount: 'IsCustomAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      voipId: 'string',
      deviceId: 'string',
      isCustomAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoipGetTokenResponseBody extends $tea.Model {
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

export class VoipGetTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VoipGetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VoipGetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSipAccountResponseBodyData extends $tea.Model {
  sipAccountID?: string;
  voipName?: string;
  voipPassword?: string;
  static names(): { [key: string]: string } {
    return {
      sipAccountID: 'SipAccountID',
      voipName: 'VoipName',
      voipPassword: 'VoipPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sipAccountID: 'string',
      voipName: 'string',
      voipPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponseBodyData extends $tea.Model {
  status?: string;
  qualificationId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      qualificationId: 'QualificationId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      qualificationId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallRequestMenuKeyMap extends $tea.Model {
  key?: string;
  ttsParams?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      ttsParams: 'TtsParams',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      ttsParams: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponseBodyData extends $tea.Model {
  status?: string;
  data?: string;
  dataType?: string;
  taskName?: string;
  completedCount?: number;
  totalCount?: number;
  templateName?: string;
  stopTime?: string;
  bizType?: string;
  resource?: string;
  templateCode?: string;
  fireTime?: string;
  completeTime?: string;
  completedRate?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      data: 'Data',
      dataType: 'DataType',
      taskName: 'TaskName',
      completedCount: 'CompletedCount',
      totalCount: 'TotalCount',
      templateName: 'TemplateName',
      stopTime: 'StopTime',
      bizType: 'BizType',
      resource: 'Resource',
      templateCode: 'TemplateCode',
      fireTime: 'FireTime',
      completeTime: 'CompleteTime',
      completedRate: 'CompletedRate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      data: 'string',
      dataType: 'string',
      taskName: 'string',
      completedCount: 'number',
      totalCount: 'number',
      templateName: 'string',
      stopTime: 'string',
      bizType: 'string',
      resource: 'string',
      templateCode: 'string',
      fireTime: 'string',
      completeTime: 'string',
      completedRate: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponseBodyData extends $tea.Model {
  status?: string;
  duration?: number;
  calledNum?: string;
  caller?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      duration: 'Duration',
      calledNum: 'CalledNum',
      caller: 'Caller',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      duration: 'number',
      calledNum: 'string',
      caller: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponseBodyDataValues extends $tea.Model {
  phoneNumber?: string;
  numberOwnerName?: string;
  qualificationId?: string;
  hotlineNumber?: string;
  identityCard?: string;
  resUniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      numberOwnerName: 'NumberOwnerName',
      qualificationId: 'QualificationId',
      hotlineNumber: 'HotlineNumber',
      identityCard: 'IdentityCard',
      resUniqueCode: 'ResUniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      numberOwnerName: 'string',
      qualificationId: 'string',
      hotlineNumber: 'string',
      identityCard: 'string',
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
  mngOpMail?: string;
  mngOpName?: string;
  corpName?: string;
  agree?: string;
  mngOpMobile?: string;
  mngOpIdentityCard?: string;
  hotlineNumber?: string;
  qualificationId?: string;
  resUniqueCode?: number;
  static names(): { [key: string]: string } {
    return {
      mngOpMail: 'MngOpMail',
      mngOpName: 'MngOpName',
      corpName: 'CorpName',
      agree: 'Agree',
      mngOpMobile: 'MngOpMobile',
      mngOpIdentityCard: 'MngOpIdentityCard',
      hotlineNumber: 'HotlineNumber',
      qualificationId: 'QualificationId',
      resUniqueCode: 'ResUniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mngOpMail: 'string',
      mngOpName: 'string',
      corpName: 'string',
      agree: 'string',
      mngOpMobile: 'string',
      mngOpIdentityCard: 'string',
      hotlineNumber: 'string',
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

export class ListOutboundStrategiesResponseBodyOutboundStrategies extends $tea.Model {
  status?: number;
  successRate?: number;
  process?: number;
  gmtModifiedStr?: string;
  outboundNum?: string;
  modifierId?: number;
  sceneName?: string;
  creatorId?: number;
  robotName?: string;
  modifierName?: string;
  resourceAllocation?: number;
  extAttr?: string;
  numType?: number;
  buId?: number;
  robotId?: string;
  creatorName?: string;
  departmentId?: number;
  robotType?: number;
  ruleCode?: number;
  name?: string;
  gmtCreateStr?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      successRate: 'SuccessRate',
      process: 'Process',
      gmtModifiedStr: 'GmtModifiedStr',
      outboundNum: 'OutboundNum',
      modifierId: 'ModifierId',
      sceneName: 'SceneName',
      creatorId: 'CreatorId',
      robotName: 'RobotName',
      modifierName: 'ModifierName',
      resourceAllocation: 'ResourceAllocation',
      extAttr: 'ExtAttr',
      numType: 'NumType',
      buId: 'BuId',
      robotId: 'RobotId',
      creatorName: 'CreatorName',
      departmentId: 'DepartmentId',
      robotType: 'RobotType',
      ruleCode: 'RuleCode',
      name: 'name',
      gmtCreateStr: 'GmtCreateStr',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      successRate: 'number',
      process: 'number',
      gmtModifiedStr: 'string',
      outboundNum: 'string',
      modifierId: 'number',
      sceneName: 'string',
      creatorId: 'number',
      robotName: 'string',
      modifierName: 'string',
      resourceAllocation: 'number',
      extAttr: 'string',
      numType: 'number',
      buId: 'number',
      robotId: 'string',
      creatorName: 'string',
      departmentId: 'number',
      robotType: 'number',
      ruleCode: 'number',
      name: 'string',
      gmtCreateStr: 'string',
      id: 'number',
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
  gmtCreate?: number;
  calledRouteMode?: string;
  transferTimeout?: string;
  details?: QueryCallInPoolTransferConfigResponseBodyDataDetails[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      calledRouteMode: 'CalledRouteMode',
      transferTimeout: 'TransferTimeout',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      calledRouteMode: 'string',
      transferTimeout: 'string',
      details: { 'type': 'array', 'itemType': QueryCallInPoolTransferConfigResponseBodyDataDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBodyDataValues extends $tea.Model {
  callInCalled?: string;
  transferCalled?: string;
  recordUrl?: string;
  transferCaller?: string;
  gmtCreate?: number;
  callInCaller?: string;
  static names(): { [key: string]: string } {
    return {
      callInCalled: 'CallInCalled',
      transferCalled: 'TransferCalled',
      recordUrl: 'RecordUrl',
      transferCaller: 'TransferCaller',
      gmtCreate: 'GmtCreate',
      callInCaller: 'CallInCaller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInCalled: 'string',
      transferCalled: 'string',
      recordUrl: 'string',
      transferCaller: 'string',
      gmtCreate: 'number',
      callInCaller: 'string',
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

export class SetTransferCalleePoolConfigRequestDetails extends $tea.Model {
  caller?: string;
  called?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      called: 'Called',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      called: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos extends $tea.Model {
  phoneNumber?: string;
  phoneNumberOwnerName?: string;
  identityCard?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      phoneNumberOwnerName: 'PhoneNumberOwnerName',
      identityCard: 'IdentityCard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      phoneNumberOwnerName: 'string',
      identityCard: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddRtcAccountResponse>(await this.doRPCRequest("AddRtcAccount", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new AddRtcAccountResponse({}));
  }

  async addRtcAccount(request: AddRtcAccountRequest): Promise<AddRtcAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRtcAccountWithOptions(request, runtime);
  }

  async addVirtualNumberRelationWithOptions(request: AddVirtualNumberRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddVirtualNumberRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVirtualNumberRelationResponse>(await this.doRPCRequest("AddVirtualNumberRelation", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new AddVirtualNumberRelationResponse({}));
  }

  async addVirtualNumberRelation(request: AddVirtualNumberRelationRequest): Promise<AddVirtualNumberRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVirtualNumberRelationWithOptions(request, runtime);
  }

  async batchRobotSmartCallWithOptions(request: BatchRobotSmartCallRequest, runtime: $Util.RuntimeOptions): Promise<BatchRobotSmartCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchRobotSmartCallResponse>(await this.doRPCRequest("BatchRobotSmartCall", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new BatchRobotSmartCallResponse({}));
  }

  async batchRobotSmartCall(request: BatchRobotSmartCallRequest): Promise<BatchRobotSmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRobotSmartCallWithOptions(request, runtime);
  }

  async bindNumberAndVoipIdWithOptions(request: BindNumberAndVoipIdRequest, runtime: $Util.RuntimeOptions): Promise<BindNumberAndVoipIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindNumberAndVoipIdResponse>(await this.doRPCRequest("BindNumberAndVoipId", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new BindNumberAndVoipIdResponse({}));
  }

  async bindNumberAndVoipId(request: BindNumberAndVoipIdRequest): Promise<BindNumberAndVoipIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindNumberAndVoipIdWithOptions(request, runtime);
  }

  async cancelCallWithOptions(request: CancelCallRequest, runtime: $Util.RuntimeOptions): Promise<CancelCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelCallResponse>(await this.doRPCRequest("CancelCall", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CancelCallResponse({}));
  }

  async cancelCall(request: CancelCallRequest): Promise<CancelCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCallWithOptions(request, runtime);
  }

  async cancelOrderRobotTaskWithOptions(request: CancelOrderRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderRobotTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOrderRobotTaskResponse>(await this.doRPCRequest("CancelOrderRobotTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOrderRobotTaskResponse({}));
  }

  async cancelOrderRobotTask(request: CancelOrderRobotTaskRequest): Promise<CancelOrderRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderRobotTaskWithOptions(request, runtime);
  }

  async cancelRobotTaskWithOptions(request: CancelRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelRobotTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelRobotTaskResponse>(await this.doRPCRequest("CancelRobotTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CancelRobotTaskResponse({}));
  }

  async cancelRobotTask(request: CancelRobotTaskRequest): Promise<CancelRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRobotTaskWithOptions(request, runtime);
  }

  async clickToDialWithOptions(request: ClickToDialRequest, runtime: $Util.RuntimeOptions): Promise<ClickToDialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClickToDialResponse>(await this.doRPCRequest("ClickToDial", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ClickToDialResponse({}));
  }

  async clickToDial(request: ClickToDialRequest): Promise<ClickToDialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clickToDialWithOptions(request, runtime);
  }

  async closeSipAccountWithOptions(request: CloseSipAccountRequest, runtime: $Util.RuntimeOptions): Promise<CloseSipAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloseSipAccountResponse>(await this.doRPCRequest("CloseSipAccount", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CloseSipAccountResponse({}));
  }

  async closeSipAccount(request: CloseSipAccountRequest): Promise<CloseSipAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeSipAccountWithOptions(request, runtime);
  }

  async createCallTaskWithOptions(request: CreateCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCallTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCallTaskResponse>(await this.doRPCRequest("CreateCallTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCallTaskResponse({}));
  }

  async createCallTask(request: CreateCallTaskRequest): Promise<CreateCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCallTaskWithOptions(request, runtime);
  }

  async createRobotTaskWithOptions(request: CreateRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRobotTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRobotTaskResponse>(await this.doRPCRequest("CreateRobotTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRobotTaskResponse({}));
  }

  async createRobotTask(request: CreateRobotTaskRequest): Promise<CreateRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRobotTaskWithOptions(request, runtime);
  }

  async createSipAccountWithOptions(request: CreateSipAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateSipAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSipAccountResponse>(await this.doRPCRequest("CreateSipAccount", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSipAccountResponse({}));
  }

  async createSipAccount(request: CreateSipAccountRequest): Promise<CreateSipAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSipAccountWithOptions(request, runtime);
  }

  async deleteRobotTaskWithOptions(request: DeleteRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRobotTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRobotTaskResponse>(await this.doRPCRequest("DeleteRobotTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRobotTaskResponse({}));
  }

  async deleteRobotTask(request: DeleteRobotTaskRequest): Promise<DeleteRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRobotTaskWithOptions(request, runtime);
  }

  async describeRecordDataWithOptions(request: DescribeRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordDataResponse>(await this.doRPCRequest("DescribeRecordData", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordDataResponse({}));
  }

  async describeRecordData(request: DescribeRecordDataRequest): Promise<DescribeRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordDataWithOptions(request, runtime);
  }

  async doRtcNumberAuthWithOptions(request: DoRtcNumberAuthRequest, runtime: $Util.RuntimeOptions): Promise<DoRtcNumberAuthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoRtcNumberAuthResponse>(await this.doRPCRequest("DoRtcNumberAuth", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DoRtcNumberAuthResponse({}));
  }

  async doRtcNumberAuth(request: DoRtcNumberAuthRequest): Promise<DoRtcNumberAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doRtcNumberAuthWithOptions(request, runtime);
  }

  async doubleCallSeatWithOptions(request: DoubleCallSeatRequest, runtime: $Util.RuntimeOptions): Promise<DoubleCallSeatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoubleCallSeatResponse>(await this.doRPCRequest("DoubleCallSeat", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DoubleCallSeatResponse({}));
  }

  async doubleCallSeat(request: DoubleCallSeatRequest): Promise<DoubleCallSeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doubleCallSeatWithOptions(request, runtime);
  }

  async executeCallTaskWithOptions(request: ExecuteCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteCallTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteCallTaskResponse>(await this.doRPCRequest("ExecuteCallTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteCallTaskResponse({}));
  }

  async executeCallTask(request: ExecuteCallTaskRequest): Promise<ExecuteCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeCallTaskWithOptions(request, runtime);
  }

  async getHotlineQualificationByOrderWithOptions(request: GetHotlineQualificationByOrderRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineQualificationByOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotlineQualificationByOrderResponse>(await this.doRPCRequest("GetHotlineQualificationByOrder", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotlineQualificationByOrderResponse({}));
  }

  async getHotlineQualificationByOrder(request: GetHotlineQualificationByOrderRequest): Promise<GetHotlineQualificationByOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineQualificationByOrderWithOptions(request, runtime);
  }

  async getRtcTokenWithOptions(request: GetRtcTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetRtcTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRtcTokenResponse>(await this.doRPCRequest("GetRtcToken", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetRtcTokenResponse({}));
  }

  async getRtcToken(request: GetRtcTokenRequest): Promise<GetRtcTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRtcTokenWithOptions(request, runtime);
  }

  async getTokenWithOptions(request: GetTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTokenResponse>(await this.doRPCRequest("GetToken", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetTokenResponse({}));
  }

  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTokenWithOptions(request, runtime);
  }

  async ivrCallWithOptions(request: IvrCallRequest, runtime: $Util.RuntimeOptions): Promise<IvrCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IvrCallResponse>(await this.doRPCRequest("IvrCall", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new IvrCallResponse({}));
  }

  async ivrCall(request: IvrCallRequest): Promise<IvrCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ivrCallWithOptions(request, runtime);
  }

  async listCallTaskWithOptions(request: ListCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListCallTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCallTaskResponse>(await this.doRPCRequest("ListCallTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListCallTaskResponse({}));
  }

  async listCallTask(request: ListCallTaskRequest): Promise<ListCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallTaskWithOptions(request, runtime);
  }

  async listCallTaskDetailWithOptions(request: ListCallTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListCallTaskDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCallTaskDetailResponse>(await this.doRPCRequest("ListCallTaskDetail", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListCallTaskDetailResponse({}));
  }

  async listCallTaskDetail(request: ListCallTaskDetailRequest): Promise<ListCallTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallTaskDetailWithOptions(request, runtime);
  }

  async listHotlineTransferNumberWithOptions(request: ListHotlineTransferNumberRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineTransferNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHotlineTransferNumberResponse>(await this.doRPCRequest("ListHotlineTransferNumber", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListHotlineTransferNumberResponse({}));
  }

  async listHotlineTransferNumber(request: ListHotlineTransferNumberRequest): Promise<ListHotlineTransferNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineTransferNumberWithOptions(request, runtime);
  }

  async listHotlineTransferRegisterFileWithOptions(request: ListHotlineTransferRegisterFileRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineTransferRegisterFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHotlineTransferRegisterFileResponse>(await this.doRPCRequest("ListHotlineTransferRegisterFile", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListHotlineTransferRegisterFileResponse({}));
  }

  async listHotlineTransferRegisterFile(request: ListHotlineTransferRegisterFileRequest): Promise<ListHotlineTransferRegisterFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineTransferRegisterFileWithOptions(request, runtime);
  }

  async listOrderedNumbersWithOptions(request: ListOrderedNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListOrderedNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrderedNumbersResponse>(await this.doRPCRequest("ListOrderedNumbers", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrderedNumbersResponse({}));
  }

  async listOrderedNumbers(request: ListOrderedNumbersRequest): Promise<ListOrderedNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrderedNumbersWithOptions(request, runtime);
  }

  async listOutboundStrategiesWithOptions(request: ListOutboundStrategiesRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundStrategiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOutboundStrategiesResponse>(await this.doRPCRequest("ListOutboundStrategies", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListOutboundStrategiesResponse({}));
  }

  async listOutboundStrategies(request: ListOutboundStrategiesRequest): Promise<ListOutboundStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundStrategiesWithOptions(request, runtime);
  }

  async listRobotTaskCallsWithOptions(request: ListRobotTaskCallsRequest, runtime: $Util.RuntimeOptions): Promise<ListRobotTaskCallsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRobotTaskCallsResponse>(await this.doRPCRequest("ListRobotTaskCalls", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListRobotTaskCallsResponse({}));
  }

  async listRobotTaskCalls(request: ListRobotTaskCallsRequest): Promise<ListRobotTaskCallsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRobotTaskCallsWithOptions(request, runtime);
  }

  async queryCallDetailByCallIdWithOptions(request: QueryCallDetailByCallIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallDetailByCallIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCallDetailByCallIdResponse>(await this.doRPCRequest("QueryCallDetailByCallId", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCallDetailByCallIdResponse({}));
  }

  async queryCallDetailByCallId(request: QueryCallDetailByCallIdRequest): Promise<QueryCallDetailByCallIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallDetailByCallIdWithOptions(request, runtime);
  }

  async queryCallDetailByTaskIdWithOptions(request: QueryCallDetailByTaskIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallDetailByTaskIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCallDetailByTaskIdResponse>(await this.doRPCRequest("QueryCallDetailByTaskId", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCallDetailByTaskIdResponse({}));
  }

  async queryCallDetailByTaskId(request: QueryCallDetailByTaskIdRequest): Promise<QueryCallDetailByTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallDetailByTaskIdWithOptions(request, runtime);
  }

  async queryCallInPoolTransferConfigWithOptions(request: QueryCallInPoolTransferConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallInPoolTransferConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCallInPoolTransferConfigResponse>(await this.doRPCRequest("QueryCallInPoolTransferConfig", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCallInPoolTransferConfigResponse({}));
  }

  async queryCallInPoolTransferConfig(request: QueryCallInPoolTransferConfigRequest): Promise<QueryCallInPoolTransferConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallInPoolTransferConfigWithOptions(request, runtime);
  }

  async queryCallInTransferRecordWithOptions(request: QueryCallInTransferRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallInTransferRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCallInTransferRecordResponse>(await this.doRPCRequest("QueryCallInTransferRecord", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCallInTransferRecordResponse({}));
  }

  async queryCallInTransferRecord(request: QueryCallInTransferRecordRequest): Promise<QueryCallInTransferRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallInTransferRecordWithOptions(request, runtime);
  }

  async queryRobotInfoListWithOptions(request: QueryRobotInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotInfoListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRobotInfoListResponse>(await this.doRPCRequest("QueryRobotInfoList", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRobotInfoListResponse({}));
  }

  async queryRobotInfoList(request: QueryRobotInfoListRequest): Promise<QueryRobotInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotInfoListWithOptions(request, runtime);
  }

  async queryRobotTaskCallDetailWithOptions(request: QueryRobotTaskCallDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskCallDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRobotTaskCallDetailResponse>(await this.doRPCRequest("QueryRobotTaskCallDetail", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRobotTaskCallDetailResponse({}));
  }

  async queryRobotTaskCallDetail(request: QueryRobotTaskCallDetailRequest): Promise<QueryRobotTaskCallDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskCallDetailWithOptions(request, runtime);
  }

  async queryRobotTaskCallListWithOptions(request: QueryRobotTaskCallListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskCallListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRobotTaskCallListResponse>(await this.doRPCRequest("QueryRobotTaskCallList", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRobotTaskCallListResponse({}));
  }

  async queryRobotTaskCallList(request: QueryRobotTaskCallListRequest): Promise<QueryRobotTaskCallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskCallListWithOptions(request, runtime);
  }

  async queryRobotTaskDetailWithOptions(request: QueryRobotTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRobotTaskDetailResponse>(await this.doRPCRequest("QueryRobotTaskDetail", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRobotTaskDetailResponse({}));
  }

  async queryRobotTaskDetail(request: QueryRobotTaskDetailRequest): Promise<QueryRobotTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskDetailWithOptions(request, runtime);
  }

  async queryRobotTaskListWithOptions(request: QueryRobotTaskListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRobotTaskListResponse>(await this.doRPCRequest("QueryRobotTaskList", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRobotTaskListResponse({}));
  }

  async queryRobotTaskList(request: QueryRobotTaskListRequest): Promise<QueryRobotTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskListWithOptions(request, runtime);
  }

  async queryRobotv2AllListWithOptions(request: QueryRobotv2AllListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotv2AllListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRobotv2AllListResponse>(await this.doRPCRequest("QueryRobotv2AllList", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRobotv2AllListResponse({}));
  }

  async queryRobotv2AllList(request: QueryRobotv2AllListRequest): Promise<QueryRobotv2AllListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotv2AllListWithOptions(request, runtime);
  }

  async queryRtcNumberAuthStatusWithOptions(request: QueryRtcNumberAuthStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryRtcNumberAuthStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRtcNumberAuthStatusResponse>(await this.doRPCRequest("QueryRtcNumberAuthStatus", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRtcNumberAuthStatusResponse({}));
  }

  async queryRtcNumberAuthStatus(request: QueryRtcNumberAuthStatusRequest): Promise<QueryRtcNumberAuthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRtcNumberAuthStatusWithOptions(request, runtime);
  }

  async queryVirtualNumberWithOptions(request: QueryVirtualNumberRequest, runtime: $Util.RuntimeOptions): Promise<QueryVirtualNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryVirtualNumberResponse>(await this.doRPCRequest("QueryVirtualNumber", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryVirtualNumberResponse({}));
  }

  async queryVirtualNumber(request: QueryVirtualNumberRequest): Promise<QueryVirtualNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVirtualNumberWithOptions(request, runtime);
  }

  async queryVirtualNumberRelationWithOptions(request: QueryVirtualNumberRelationRequest, runtime: $Util.RuntimeOptions): Promise<QueryVirtualNumberRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryVirtualNumberRelationResponse>(await this.doRPCRequest("QueryVirtualNumberRelation", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryVirtualNumberRelationResponse({}));
  }

  async queryVirtualNumberRelation(request: QueryVirtualNumberRelationRequest): Promise<QueryVirtualNumberRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVirtualNumberRelationWithOptions(request, runtime);
  }

  async queryVoipNumberBindInfosWithOptions(request: QueryVoipNumberBindInfosRequest, runtime: $Util.RuntimeOptions): Promise<QueryVoipNumberBindInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryVoipNumberBindInfosResponse>(await this.doRPCRequest("QueryVoipNumberBindInfos", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryVoipNumberBindInfosResponse({}));
  }

  async queryVoipNumberBindInfos(request: QueryVoipNumberBindInfosRequest): Promise<QueryVoipNumberBindInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVoipNumberBindInfosWithOptions(request, runtime);
  }

  async reportVoipProblemsWithOptions(request: ReportVoipProblemsRequest, runtime: $Util.RuntimeOptions): Promise<ReportVoipProblemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReportVoipProblemsResponse>(await this.doRPCRequest("ReportVoipProblems", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ReportVoipProblemsResponse({}));
  }

  async reportVoipProblems(request: ReportVoipProblemsRequest): Promise<ReportVoipProblemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportVoipProblemsWithOptions(request, runtime);
  }

  async sendVerificationWithOptions(request: SendVerificationRequest, runtime: $Util.RuntimeOptions): Promise<SendVerificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendVerificationResponse>(await this.doRPCRequest("SendVerification", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SendVerificationResponse({}));
  }

  async sendVerification(request: SendVerificationRequest): Promise<SendVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerificationWithOptions(request, runtime);
  }

  async setTransferCalleePoolConfigWithOptions(request: SetTransferCalleePoolConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetTransferCalleePoolConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetTransferCalleePoolConfigResponse>(await this.doRPCRequest("SetTransferCalleePoolConfig", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SetTransferCalleePoolConfigResponse({}));
  }

  async setTransferCalleePoolConfig(request: SetTransferCalleePoolConfigRequest): Promise<SetTransferCalleePoolConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTransferCalleePoolConfigWithOptions(request, runtime);
  }

  async singleCallByTtsWithOptions(request: SingleCallByTtsRequest, runtime: $Util.RuntimeOptions): Promise<SingleCallByTtsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SingleCallByTtsResponse>(await this.doRPCRequest("SingleCallByTts", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SingleCallByTtsResponse({}));
  }

  async singleCallByTts(request: SingleCallByTtsRequest): Promise<SingleCallByTtsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleCallByTtsWithOptions(request, runtime);
  }

  async singleCallByVoiceWithOptions(request: SingleCallByVoiceRequest, runtime: $Util.RuntimeOptions): Promise<SingleCallByVoiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SingleCallByVoiceResponse>(await this.doRPCRequest("SingleCallByVoice", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SingleCallByVoiceResponse({}));
  }

  async singleCallByVoice(request: SingleCallByVoiceRequest): Promise<SingleCallByVoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleCallByVoiceWithOptions(request, runtime);
  }

  async smartCallWithOptions(request: SmartCallRequest, runtime: $Util.RuntimeOptions): Promise<SmartCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SmartCallResponse>(await this.doRPCRequest("SmartCall", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SmartCallResponse({}));
  }

  async smartCall(request: SmartCallRequest): Promise<SmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smartCallWithOptions(request, runtime);
  }

  async smartCallOperateWithOptions(request: SmartCallOperateRequest, runtime: $Util.RuntimeOptions): Promise<SmartCallOperateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SmartCallOperateResponse>(await this.doRPCRequest("SmartCallOperate", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SmartCallOperateResponse({}));
  }

  async smartCallOperate(request: SmartCallOperateRequest): Promise<SmartCallOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smartCallOperateWithOptions(request, runtime);
  }

  async startMicroOutboundWithOptions(request: StartMicroOutboundRequest, runtime: $Util.RuntimeOptions): Promise<StartMicroOutboundResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartMicroOutboundResponse>(await this.doRPCRequest("StartMicroOutbound", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new StartMicroOutboundResponse({}));
  }

  async startMicroOutbound(request: StartMicroOutboundRequest): Promise<StartMicroOutboundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMicroOutboundWithOptions(request, runtime);
  }

  async startRobotTaskWithOptions(request: StartRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartRobotTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartRobotTaskResponse>(await this.doRPCRequest("StartRobotTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new StartRobotTaskResponse({}));
  }

  async startRobotTask(request: StartRobotTaskRequest): Promise<StartRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRobotTaskWithOptions(request, runtime);
  }

  async stopRobotTaskWithOptions(request: StopRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopRobotTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopRobotTaskResponse>(await this.doRPCRequest("StopRobotTask", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new StopRobotTaskResponse({}));
  }

  async stopRobotTask(request: StopRobotTaskRequest): Promise<StopRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRobotTaskWithOptions(request, runtime);
  }

  async submitHotlineTransferRegisterWithOptions(request: SubmitHotlineTransferRegisterRequest, runtime: $Util.RuntimeOptions): Promise<SubmitHotlineTransferRegisterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitHotlineTransferRegisterResponse>(await this.doRPCRequest("SubmitHotlineTransferRegister", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitHotlineTransferRegisterResponse({}));
  }

  async submitHotlineTransferRegister(request: SubmitHotlineTransferRegisterRequest): Promise<SubmitHotlineTransferRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitHotlineTransferRegisterWithOptions(request, runtime);
  }

  async unbindNumberAndVoipIdWithOptions(request: UnbindNumberAndVoipIdRequest, runtime: $Util.RuntimeOptions): Promise<UnbindNumberAndVoipIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindNumberAndVoipIdResponse>(await this.doRPCRequest("UnbindNumberAndVoipId", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindNumberAndVoipIdResponse({}));
  }

  async unbindNumberAndVoipId(request: UnbindNumberAndVoipIdRequest): Promise<UnbindNumberAndVoipIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindNumberAndVoipIdWithOptions(request, runtime);
  }

  async undoRtcNumberAuthWithOptions(request: UndoRtcNumberAuthRequest, runtime: $Util.RuntimeOptions): Promise<UndoRtcNumberAuthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UndoRtcNumberAuthResponse>(await this.doRPCRequest("UndoRtcNumberAuth", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UndoRtcNumberAuthResponse({}));
  }

  async undoRtcNumberAuth(request: UndoRtcNumberAuthRequest): Promise<UndoRtcNumberAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.undoRtcNumberAuthWithOptions(request, runtime);
  }

  async uploadRobotTaskCalledFileWithOptions(request: UploadRobotTaskCalledFileRequest, runtime: $Util.RuntimeOptions): Promise<UploadRobotTaskCalledFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadRobotTaskCalledFileResponse>(await this.doRPCRequest("UploadRobotTaskCalledFile", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new UploadRobotTaskCalledFileResponse({}));
  }

  async uploadRobotTaskCalledFile(request: UploadRobotTaskCalledFileRequest): Promise<UploadRobotTaskCalledFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadRobotTaskCalledFileWithOptions(request, runtime);
  }

  async voipAddAccountWithOptions(request: VoipAddAccountRequest, runtime: $Util.RuntimeOptions): Promise<VoipAddAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VoipAddAccountResponse>(await this.doRPCRequest("VoipAddAccount", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new VoipAddAccountResponse({}));
  }

  async voipAddAccount(request: VoipAddAccountRequest): Promise<VoipAddAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voipAddAccountWithOptions(request, runtime);
  }

  async voipGetTokenWithOptions(request: VoipGetTokenRequest, runtime: $Util.RuntimeOptions): Promise<VoipGetTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VoipGetTokenResponse>(await this.doRPCRequest("VoipGetToken", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new VoipGetTokenResponse({}));
  }

  async voipGetToken(request: VoipGetTokenRequest): Promise<VoipGetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voipGetTokenWithOptions(request, runtime);
  }

}
