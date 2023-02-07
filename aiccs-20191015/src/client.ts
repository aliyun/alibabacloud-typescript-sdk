// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddHotlineNumberRequest extends $tea.Model {
  description?: string;
  enableInbound?: boolean;
  enableInboundEvaluation?: boolean;
  enableOutbound?: boolean;
  enableOutboundEvaluation?: boolean;
  evaluationLevel?: number;
  hotlineNumber?: string;
  inboundFlowId?: number;
  instanceId?: string;
  outboundAllDepart?: boolean;
  outboundRangeList?: AddHotlineNumberRequestOutboundRangeList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeList: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeList: { 'type': 'array', 'itemType': AddHotlineNumberRequestOutboundRangeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHotlineNumberShrinkRequest extends $tea.Model {
  description?: string;
  enableInbound?: boolean;
  enableInboundEvaluation?: boolean;
  enableOutbound?: boolean;
  enableOutboundEvaluation?: boolean;
  evaluationLevel?: number;
  hotlineNumber?: string;
  inboundFlowId?: number;
  instanceId?: string;
  outboundAllDepart?: boolean;
  outboundRangeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeListShrink: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHotlineNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHotlineNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddHotlineNumberResponseBody;
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
      body: AddHotlineNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountRequest extends $tea.Model {
  avatar?: string;
  ext?: string;
  outerAccountId?: string;
  outerAccountName?: string;
  outerAccountType?: string;
  outerDepartmentId?: string;
  outerDepartmentType?: string;
  outerGroupIds?: string;
  outerGroupType?: string;
  realName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      ext: 'Ext',
      outerAccountId: 'OuterAccountId',
      outerAccountName: 'OuterAccountName',
      outerAccountType: 'OuterAccountType',
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupIds: 'OuterGroupIds',
      outerGroupType: 'OuterGroupType',
      realName: 'RealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      ext: 'string',
      outerAccountId: 'string',
      outerAccountName: 'string',
      outerAccountType: 'string',
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
      outerGroupIds: 'string',
      outerGroupType: 'string',
      realName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddOuterAccountResponseBody;
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
      body: AddOuterAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupRequest extends $tea.Model {
  outerDepartmentId?: string;
  outerDepartmentType?: string;
  outerGroupId?: string;
  outerGroupName?: string;
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupId: 'OuterGroupId',
      outerGroupName: 'OuterGroupName',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
      outerGroupId: 'string',
      outerGroupName: 'string',
      outerGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddSkillGroupResponseBody;
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
      body: AddSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallRequest extends $tea.Model {
  actionCodeBreak?: boolean;
  actionCodeTimeBreak?: number;
  asrAlsAmId?: string;
  asrBaseId?: string;
  asrModelId?: string;
  asrVocabularyId?: string;
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
  playTimes?: number;
  prodCode?: string;
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sessionTimeout?: number;
  speed?: number;
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
      asrAlsAmId: 'AsrAlsAmId',
      asrBaseId: 'AsrBaseId',
      asrModelId: 'AsrModelId',
      asrVocabularyId: 'AsrVocabularyId',
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
      playTimes: 'PlayTimes',
      prodCode: 'ProdCode',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      speed: 'Speed',
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
      asrAlsAmId: 'string',
      asrBaseId: 'string',
      asrModelId: 'string',
      asrVocabularyId: 'string',
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
      playTimes: 'number',
      prodCode: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      speed: 'number',
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

export class AiccsSmartCallResponseBody extends $tea.Model {
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

export class AiccsSmartCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AiccsSmartCallResponseBody;
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
      body: AiccsSmartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallOperateRequest extends $tea.Model {
  callId?: string;
  command?: string;
  ownerId?: number;
  param?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
      prodCode: 'ProdCode',
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
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallOperateResponseBody extends $tea.Model {
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

export class AiccsSmartCallOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AiccsSmartCallOperateResponseBody;
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
      body: AiccsSmartCallOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallRequest extends $tea.Model {
  accountName?: string;
  callId?: string;
  clientToken?: string;
  connectionId?: string;
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBody extends $tea.Model {
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

export class AnswerCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AnswerCallResponseBody;
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
      body: AnswerCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachTaskRequest extends $tea.Model {
  callString?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      callString: 'CallString',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callString: 'string',
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

export class AttachTaskResponseBody extends $tea.Model {
  code?: string;
  data?: number;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachTaskResponseBody;
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
      body: AttachTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsRequest extends $tea.Model {
  analysisIds?: number[];
  channelTouchType?: number[];
  checkFreqType?: number;
  instanceList?: string[];
  projectName?: string;
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      analysisIds: 'AnalysisIds',
      channelTouchType: 'ChannelTouchType',
      checkFreqType: 'CheckFreqType',
      instanceList: 'InstanceList',
      projectName: 'ProjectName',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      checkFreqType: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      projectName: 'string',
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponseBody extends $tea.Model {
  code?: string;
  data?: BatchCreateQualityProjectsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': BatchCreateQualityProjectsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchCreateQualityProjectsResponseBody;
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
      body: BatchCreateQualityProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskRequest extends $tea.Model {
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

export class CancelTaskResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelTaskResponseBody;
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
      body: CancelTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeChatAgentStatusResponseBody;
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
      body: ChangeChatAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeQualityProjectStatusResponseBody;
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
      body: ChangeQualityProjectStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  displayName?: string;
  instanceId?: string;
  skillGroupId?: number[];
  skillGroupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'number' },
      skillGroupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAgentResponseBody;
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
      body: CreateAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskRequest extends $tea.Model {
  concurrentRate?: number;
  description?: string;
  executionTime?: string;
  forecastCallRate?: number;
  handlerId?: number;
  instanceId?: string;
  name?: string;
  numRepeated?: number;
  outboundNums?: string[];
  recallRule?: CreateAiOutboundTaskRequestRecallRule;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: CreateAiOutboundTaskRequestRecallRule,
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskShrinkRequest extends $tea.Model {
  concurrentRate?: number;
  description?: string;
  executionTime?: string;
  forecastCallRate?: number;
  handlerId?: number;
  instanceId?: string;
  name?: string;
  numRepeated?: number;
  outboundNumsShrink?: string;
  recallRuleShrink?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNumsShrink: 'OutboundNums',
      recallRuleShrink: 'RecallRule',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNumsShrink: 'string',
      recallRuleShrink: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskResponseBody extends $tea.Model {
  code?: string;
  data?: number;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAiOutboundTaskResponseBody;
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
      body: CreateAiOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskBatchRequest extends $tea.Model {
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskBatchResponseBody extends $tea.Model {
  code?: string;
  data?: number;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAiOutboundTaskBatchResponseBody;
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
      body: CreateAiOutboundTaskBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentRequest extends $tea.Model {
  departmentName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDepartmentResponseBody;
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
      body: CreateDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskRequest extends $tea.Model {
  ani?: string;
  callInfos?: string;
  departmentId?: number;
  description?: string;
  endDate?: string;
  endTime?: string;
  extAttrs?: string;
  groupName?: string;
  instanceId?: string;
  model?: number;
  retryInterval?: number;
  retryTime?: number;
  skillGroup?: number;
  startDate?: string;
  startTime?: string;
  taskName?: string;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      callInfos: 'CallInfos',
      departmentId: 'DepartmentId',
      description: 'Description',
      endDate: 'EndDate',
      endTime: 'EndTime',
      extAttrs: 'ExtAttrs',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      model: 'Model',
      retryInterval: 'RetryInterval',
      retryTime: 'RetryTime',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      callInfos: 'string',
      departmentId: 'number',
      description: 'string',
      endDate: 'string',
      endTime: 'string',
      extAttrs: 'string',
      groupName: 'string',
      instanceId: 'string',
      model: 'number',
      retryInterval: 'number',
      retryTime: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      taskName: 'string',
      taskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOutboundTaskResponseBody;
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
      body: CreateOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectRequest extends $tea.Model {
  analysisIds?: number[];
  channelTouchType?: number[];
  checkFreqType?: number;
  depList?: number[];
  groupList?: number[];
  instanceId?: string;
  projectName?: string;
  scopeType?: number;
  servicerList?: string[];
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      analysisIds: 'AnalysisIds',
      channelTouchType: 'ChannelTouchType',
      checkFreqType: 'CheckFreqType',
      depList: 'DepList',
      groupList: 'GroupList',
      instanceId: 'InstanceId',
      projectName: 'ProjectName',
      scopeType: 'ScopeType',
      servicerList: 'ServicerList',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      checkFreqType: 'number',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      projectName: 'string',
      scopeType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'string' },
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectResponseBody extends $tea.Model {
  code?: string;
  data?: CreateQualityProjectResponseBodyData;
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
      data: CreateQualityProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQualityProjectResponseBody;
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
      body: CreateQualityProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleRequest extends $tea.Model {
  instanceId?: string;
  keyWords?: string[];
  matchType?: number;
  name?: string;
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleTag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponseBody extends $tea.Model {
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

export class CreateQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQualityRuleResponseBody;
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
      body: CreateQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupRequest extends $tea.Model {
  channelType?: number;
  clientToken?: string;
  departmentId?: number;
  description?: string;
  displayName?: string;
  instanceId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      clientToken: 'string',
      departmentId: 'number',
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: number;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSkillGroupResponseBody;
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
      body: CreateSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $tea.Model {
  callString?: string;
  callStringType?: string;
  caller?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retryCount?: number;
  retryFlag?: number;
  retryInterval?: number;
  retryStatusCode?: string;
  robotId?: string;
  seatCount?: string;
  startNow?: boolean;
  taskName?: string;
  workDay?: string;
  workTimeList?: string;
  static names(): { [key: string]: string } {
    return {
      callString: 'CallString',
      callStringType: 'CallStringType',
      caller: 'Caller',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retryCount: 'RetryCount',
      retryFlag: 'RetryFlag',
      retryInterval: 'RetryInterval',
      retryStatusCode: 'RetryStatusCode',
      robotId: 'RobotId',
      seatCount: 'SeatCount',
      startNow: 'StartNow',
      taskName: 'TaskName',
      workDay: 'WorkDay',
      workTimeList: 'WorkTimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callString: 'string',
      callStringType: 'string',
      caller: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retryCount: 'number',
      retryFlag: 'number',
      retryInterval: 'number',
      retryStatusCode: 'string',
      robotId: 'string',
      seatCount: 'string',
      startNow: 'boolean',
      taskName: 'string',
      workDay: 'string',
      workTimeList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $tea.Model {
  code?: string;
  data?: number;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTaskResponseBody;
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
      body: CreateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentRequest extends $tea.Model {
  accountId?: string;
  accountName?: string;
  clientId?: string;
  clientToken?: string;
  displayName?: string;
  instanceId?: string;
  roleIds?: number[];
  skillGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      roleIds: 'RoleIds',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      clientId: 'string',
      clientToken: 'string',
      displayName: 'string',
      instanceId: 'string',
      roleIds: { 'type': 'array', 'itemType': 'number' },
      skillGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateThirdSsoAgentResponseBody;
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
      body: CreateThirdSsoAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAgentResponseBody;
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
      body: DeleteAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiOutboundTaskRequest extends $tea.Model {
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiOutboundTaskResponseBody extends $tea.Model {
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

export class DeleteAiOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAiOutboundTaskResponseBody;
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
      body: DeleteAiOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentRequest extends $tea.Model {
  departmentId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDepartmentResponseBody;
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
      body: DeleteDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotlineNumberRequest extends $tea.Model {
  hotlineNumber?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotlineNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotlineNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteHotlineNumberResponseBody;
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
      body: DeleteHotlineNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskRequest extends $tea.Model {
  instanceId?: string;
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteOutboundTaskResponseBody;
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
      body: DeleteOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountRequest extends $tea.Model {
  outerAccountId?: string;
  outerAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerAccountId: 'string',
      outerAccountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteOuterAccountResponseBody;
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
      body: DeleteOuterAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityProjectRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityProjectResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteQualityProjectResponseBody;
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
      body: DeleteQualityProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleRequest extends $tea.Model {
  id?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
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
  statusCode: number;
  body: DeleteQualityRuleResponseBody;
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
      body: DeleteQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupRequest extends $tea.Model {
  outerGroupId?: string;
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupId: 'OuterGroupId',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupId: 'string',
      outerGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSkillGroupResponseBody;
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
      body: DeleteSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataRequest extends $tea.Model {
  accountId?: string;
  accountType?: string;
  acid?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountType: 'AccountType',
      acid: 'Acid',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secLevel: 'SecLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountType: 'string',
      acid: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataResponseBody extends $tea.Model {
  acid?: string;
  agentId?: string;
  code?: string;
  message?: string;
  ossLink?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      agentId: 'AgentId',
      code: 'Code',
      message: 'Message',
      ossLink: 'OssLink',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      agentId: 'string',
      code: 'string',
      message: 'string',
      ossLink: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecordDataResponseBody;
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
      body: DescribeRecordDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectRequest extends $tea.Model {
  analysisIds?: number[];
  channelTouchType?: number[];
  checkFreqType?: number;
  depList?: number[];
  groupList?: number[];
  instanceId?: string;
  projectId?: number;
  projectName?: string;
  projectVersion?: number;
  scopeType?: number;
  servicerList?: string[];
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      analysisIds: 'AnalysisIds',
      channelTouchType: 'ChannelTouchType',
      checkFreqType: 'CheckFreqType',
      depList: 'DepList',
      groupList: 'GroupList',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      scopeType: 'ScopeType',
      servicerList: 'ServicerList',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      checkFreqType: 'number',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      projectId: 'number',
      projectName: 'string',
      projectVersion: 'number',
      scopeType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'string' },
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponseBody extends $tea.Model {
  code?: string;
  data?: EditQualityProjectResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': EditQualityProjectResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EditQualityProjectResponseBody;
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
      body: EditQualityProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleRequest extends $tea.Model {
  instanceId?: string;
  keyWords?: string[];
  matchType?: number;
  name?: string;
  qualityRuleId?: number;
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      qualityRuleId: 'QualityRuleId',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      qualityRuleId: 'number',
      ruleTag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleResponseBody extends $tea.Model {
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

export class EditQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EditQualityRuleResponseBody;
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
      body: EditQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagRequest extends $tea.Model {
  analysisTypes?: EditQualityRuleTagRequestAnalysisTypes[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisTypes: 'AnalysisTypes',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTypes: { 'type': 'array', 'itemType': EditQualityRuleTagRequestAnalysisTypes },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EditQualityRuleTagResponseBody;
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
      body: EditQualityRuleTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumRequest extends $tea.Model {
  instanceId?: string;
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EncryptPhoneNumResponseBody;
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
      body: EncryptPhoneNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchCallRequest extends $tea.Model {
  accountName?: string;
  callId?: string;
  clientToken?: string;
  connectionId?: string;
  holdConnectionId?: string;
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchCallResponseBody extends $tea.Model {
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

export class FetchCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FetchCallResponseBody;
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
      body: FetchCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FinishHotlineServiceResponseBody;
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
      body: FinishHotlineServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateWebSocketSignResponseBody;
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
      body: GenerateWebSocketSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBody extends $tea.Model {
  code?: string;
  data?: GetAgentResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgentResponseBody;
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
      body: GetAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetAgentBasisStatusResponseBodyData;
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
      data: GetAgentBasisStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgentBasisStatusResponseBody;
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
      body: GetAgentBasisStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdRequest extends $tea.Model {
  agentId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponseBody extends $tea.Model {
  code?: string;
  data?: GetAgentByIdResponseBodyData;
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
      data: GetAgentByIdResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgentByIdResponseBody;
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
      body: GetAgentByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportResponseBody extends $tea.Model {
  code?: string;
  data?: GetAgentDetailReportResponseBodyData;
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
      data: GetAgentDetailReportResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgentDetailReportResponseBody;
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
      body: GetAgentDetailReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBody extends $tea.Model {
  code?: string;
  data?: GetAgentIndexRealTimeResponseBodyData;
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
      data: GetAgentIndexRealTimeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgentIndexRealTimeResponseBody;
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
      body: GetAgentIndexRealTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetAgentServiceStatusResponseBodyData;
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
      data: GetAgentServiceStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgentServiceStatusResponseBody;
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
      body: GetAgentServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: GetAgentStatisticsResponseBodyData;
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
      data: GetAgentStatisticsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgentStatisticsResponseBody;
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
      body: GetAgentStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskBizDataRequest extends $tea.Model {
  channelId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskBizDataResponseBody extends $tea.Model {
  code?: string;
  data?: GetAiOutboundTaskBizDataResponseBodyData;
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
      data: GetAiOutboundTaskBizDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskBizDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAiOutboundTaskBizDataResponseBody;
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
      body: GetAiOutboundTaskBizDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailRequest extends $tea.Model {
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetAiOutboundTaskDetailResponseBodyData;
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
      data: GetAiOutboundTaskDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAiOutboundTaskDetailResponseBody;
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
      body: GetAiOutboundTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailRequest extends $tea.Model {
  batchVersion?: number;
  caseId?: number;
  caseStatus?: number;
  createTimeEnd?: number;
  createTimeStart?: number;
  currentPage?: number;
  instanceId?: string;
  pageSize?: number;
  phoneNum?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      phoneNum: 'PhoneNum',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      caseId: 'number',
      caseStatus: 'number',
      createTimeEnd: 'number',
      createTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      phoneNum: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetAiOutboundTaskExecDetailResponseBodyData;
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
      data: GetAiOutboundTaskExecDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAiOutboundTaskExecDetailResponseBody;
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
      body: GetAiOutboundTaskExecDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListRequest extends $tea.Model {
  createTimeEnd?: number;
  createTimeStart?: number;
  currentPage?: number;
  instanceId?: string;
  pageSize?: number;
  searchKey?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      searchKey: 'string',
      status: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListResponseBody extends $tea.Model {
  code?: string;
  data?: GetAiOutboundTaskListResponseBodyData;
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
      data: GetAiOutboundTaskListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAiOutboundTaskListResponseBody;
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
      body: GetAiOutboundTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressRequest extends $tea.Model {
  batchVersion?: number;
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressResponseBody extends $tea.Model {
  code?: string;
  data?: GetAiOutboundTaskProgressResponseBodyData;
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
      data: GetAiOutboundTaskProgressResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAiOutboundTaskProgressResponseBody;
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
      body: GetAiOutboundTaskProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllDepartmentRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllDepartmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetAllDepartmentResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAllDepartmentResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllDepartmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAllDepartmentResponseBody;
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
      body: GetAllDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallSoundRecordRequest extends $tea.Model {
  callId?: string;
  createTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      createTime: 'CreateTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      createTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallSoundRecordResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallSoundRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCallSoundRecordResponseBody;
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
      body: GetCallSoundRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigNumListRequest extends $tea.Model {
  accountName?: string;
  departmentId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      departmentId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigNumListResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
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
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigNumListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConfigNumListResponseBody;
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
      body: GetConfigNumListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoRequest extends $tea.Model {
  instanceId?: string;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetCustomerInfoResponseBodyData;
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
      data: GetCustomerInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCustomerInfoResponseBody;
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
      body: GetCustomerInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataRequest extends $tea.Model {
  agentId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBody extends $tea.Model {
  code?: string;
  data?: GetDepGroupTreeDataResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDepGroupTreeDataResponseBody;
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
      body: GetDepGroupTreeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existDepartmentGrouping?: boolean;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusShrinkRequest extends $tea.Model {
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existDepartmentGrouping?: boolean;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetDepartmentalLatitudeAgentStatusResponseBodyData;
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
      data: GetDepartmentalLatitudeAgentStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDepartmentalLatitudeAgentStatusResponseBody;
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
      body: GetDepartmentalLatitudeAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetHotlineAgentDetailResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineAgentDetailResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineAgentDetailResponseBody;
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
      body: GetHotlineAgentDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBody extends $tea.Model {
  code?: string;
  data?: GetHotlineAgentDetailReportResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineAgentDetailReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineAgentDetailReportResponseBody;
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
      body: GetHotlineAgentDetailReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusRequest extends $tea.Model {
  accountName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineAgentStatusResponseBody;
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
      body: GetHotlineAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionRequest extends $tea.Model {
  acc?: string;
  accountName?: string;
  act?: number;
  biz?: string;
  clientToken?: string;
  fromSource?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      accountName: 'AccountName',
      act: 'Act',
      biz: 'Biz',
      clientToken: 'ClientToken',
      fromSource: 'FromSource',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'string',
      accountName: 'string',
      act: 'number',
      biz: 'string',
      clientToken: 'string',
      fromSource: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponseBody extends $tea.Model {
  code?: string;
  data?: GetHotlineCallActionResponseBodyData;
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
      data: GetHotlineCallActionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineCallActionResponseBody;
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
      body: GetHotlineCallActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBody extends $tea.Model {
  code?: string;
  data?: GetHotlineGroupDetailReportResponseBodyData;
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
      data: GetHotlineGroupDetailReportResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineGroupDetailReportResponseBody;
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
      body: GetHotlineGroupDetailReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogRequest extends $tea.Model {
  acid?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponseBody extends $tea.Model {
  code?: string;
  data?: GetHotlineMessageLogResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetHotlineMessageLogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineMessageLogResponseBody;
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
      body: GetHotlineMessageLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoRequest extends $tea.Model {
  accountName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineRuntimeInfoResponseBody;
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
      body: GetHotlineRuntimeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: GetHotlineServiceStatisticsResponseBodyData;
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
      data: GetHotlineServiceStatisticsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineServiceStatisticsResponseBody;
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
      body: GetHotlineServiceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberResponseBody extends $tea.Model {
  code?: string;
  data?: number;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHotlineWaitingNumberResponseBody;
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
      body: GetHotlineWaitingNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueRequest extends $tea.Model {
  depIds?: string;
  groupIds?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depIds: 'string',
      groupIds: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
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
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIndexCurrentValueResponseBody;
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
      body: GetIndexCurrentValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBody extends $tea.Model {
  code?: string;
  commodityInstances?: GetInstanceListResponseBodyCommodityInstances[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      commodityInstances: 'CommodityInstances',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      commodityInstances: { 'type': 'array', 'itemType': GetInstanceListResponseBodyCommodityInstances },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceListResponseBody;
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
      body: GetInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcuLvsIpRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcuLvsIpResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcuLvsIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMcuLvsIpResponseBody;
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
      body: GetMcuLvsIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      phoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNumLocationResponseBody;
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
      body: GetNumLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationResponseBody extends $tea.Model {
  code?: string;
  data?: GetOnlineSeatInformationResponseBodyData;
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
      data: GetOnlineSeatInformationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOnlineSeatInformationResponseBody;
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
      body: GetOnlineSeatInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeResponseBody extends $tea.Model {
  code?: string;
  data?: GetOnlineServiceVolumeResponseBodyData;
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
      data: GetOnlineServiceVolumeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOnlineServiceVolumeResponseBody;
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
      body: GetOnlineServiceVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBody extends $tea.Model {
  code?: string;
  data?: GetOutbounNumListResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOutbounNumListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOutbounNumListResponseBody;
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
      body: GetOutbounNumListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetQualityProjectDetailResponseBodyData;
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
      data: GetQualityProjectDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQualityProjectDetailResponseBody;
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
      body: GetQualityProjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  projectId?: number;
  projectName?: string;
  status?: number;
  checkFreqType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      checkFreqType: 'checkFreqType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectName: 'string',
      status: 'number',
      checkFreqType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBody extends $tea.Model {
  code?: string;
  data?: GetQualityProjectListResponseBodyData;
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
      data: GetQualityProjectListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQualityProjectListResponseBody;
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
      body: GetQualityProjectListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponseBody extends $tea.Model {
  code?: string;
  data?: GetQualityProjectLogResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetQualityProjectLogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQualityProjectLogResponseBody;
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
      body: GetQualityProjectLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultRequest extends $tea.Model {
  channelType?: string;
  groupIds?: number[];
  hitStatus?: number;
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  projectIds?: number[];
  qualityRuleIds?: number[];
  touchEndTime?: string;
  touchStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      groupIds: 'GroupIds',
      hitStatus: 'HitStatus',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectIds: 'ProjectIds',
      qualityRuleIds: 'QualityRuleIds',
      touchEndTime: 'TouchEndTime',
      touchStartTime: 'TouchStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      hitStatus: 'number',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectIds: { 'type': 'array', 'itemType': 'number' },
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      touchEndTime: 'string',
      touchStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBody extends $tea.Model {
  channelTypeName?: string;
  code?: string;
  data?: GetQualityResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      channelTypeName: 'ChannelTypeName',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelTypeName: 'string',
      code: 'string',
      data: GetQualityResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQualityResultResponseBody;
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
      body: GetQualityResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailRequest extends $tea.Model {
  instanceId?: string;
  qualityRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      qualityRuleId: 'QualityRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      qualityRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetQualityRuleDetailResponseBodyData;
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
      data: GetQualityRuleDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQualityRuleDetailResponseBody;
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
      body: GetQualityRuleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBody extends $tea.Model {
  code?: string;
  data?: GetQualityRuleListResponseBodyData;
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
      data: GetQualityRuleListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQualityRuleListResponseBody;
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
      body: GetQualityRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponseBody extends $tea.Model {
  code?: string;
  data?: GetQualityRuleTagListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetQualityRuleTagListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQualityRuleTagListResponseBody;
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
      body: GetQualityRuleTagListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationShrinkRequest extends $tea.Model {
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueueInformationResponseBodyData;
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
      data: GetQueueInformationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueueInformationResponseBody;
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
      body: GetQueueInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataRequest extends $tea.Model {
  acid?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataResponseBody extends $tea.Model {
  code?: string;
  data?: GetRecordDataResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRecordDataResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRecordDataResponseBody;
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
      body: GetRecordDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordUrlRequest extends $tea.Model {
  acid?: string;
  instanceId?: string;
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
      recordType: 'RecordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
      recordType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordUrlResponseBody extends $tea.Model {
  data?: GetRecordUrlResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRecordUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRecordUrlResponseBody;
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
      body: GetRecordUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenRequest extends $tea.Model {
  accountName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponseBody extends $tea.Model {
  code?: string;
  data?: GetRtcTokenResponseBodyData;
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
      data: GetRtcTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRtcTokenResponseBody;
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
      body: GetRtcTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationRequest extends $tea.Model {
  instanceId?: string;
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existDepartmentGrouping?: boolean;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      currentPage: 'currentPage',
      depIds: 'depIds',
      endDate: 'endDate',
      existDepartmentGrouping: 'existDepartmentGrouping',
      pageSize: 'pageSize',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationShrinkRequest extends $tea.Model {
  instanceId?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existDepartmentGrouping?: boolean;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      currentPage: 'currentPage',
      depIdsShrink: 'depIds',
      endDate: 'endDate',
      existDepartmentGrouping: 'existDepartmentGrouping',
      pageSize: 'pageSize',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationResponseBody extends $tea.Model {
  code?: string;
  data?: GetSeatInformationResponseBodyData;
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
      data: GetSeatInformationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSeatInformationResponseBody;
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
      body: GetSeatInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsShrinkRequest extends $tea.Model {
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupAgentStatusDetailsResponseBodyData;
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
      data: GetSkillGroupAgentStatusDetailsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSkillGroupAgentStatusDetailsResponseBody;
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
      body: GetSkillGroupAgentStatusDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryShrinkRequest extends $tea.Model {
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupAndAgentStatusSummaryResponseBodyData;
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
      data: GetSkillGroupAndAgentStatusSummaryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSkillGroupAndAgentStatusSummaryResponseBody;
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
      body: GetSkillGroupAndAgentStatusSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateShrinkRequest extends $tea.Model {
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupLatitudeStateResponseBodyData;
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
      data: GetSkillGroupLatitudeStateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSkillGroupLatitudeStateResponseBody;
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
      body: GetSkillGroupLatitudeStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityRequest extends $tea.Model {
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityShrinkRequest extends $tea.Model {
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupServiceCapabilityResponseBodyData;
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
      data: GetSkillGroupServiceCapabilityResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSkillGroupServiceCapabilityResponseBody;
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
      body: GetSkillGroupServiceCapabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existAgentGrouping?: boolean;
  existChannelInstanceGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existRobotInstanceGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existChannelInstanceGrouping: 'ExistChannelInstanceGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existRobotInstanceGrouping: 'ExistRobotInstanceGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existChannelInstanceGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existRobotInstanceGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existAgentGrouping?: boolean;
  existChannelInstanceGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existRobotInstanceGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existChannelInstanceGrouping: 'ExistChannelInstanceGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existRobotInstanceGrouping: 'ExistRobotInstanceGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existChannelInstanceGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existRobotInstanceGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupServiceStatusResponseBodyData;
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
      data: GetSkillGroupServiceStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSkillGroupServiceStatusResponseBody;
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
      body: GetSkillGroupServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalRequest extends $tea.Model {
  agentIds?: number[];
  currentPage?: number;
  depIds?: number[];
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  currentPage?: number;
  depIdsShrink?: string;
  endDate?: number;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  instanceId?: string;
  pageSize?: number;
  startDate?: number;
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupStatusTotalResponseBodyData;
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
      data: GetSkillGroupStatusTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSkillGroupStatusTotalResponseBody;
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
      body: GetSkillGroupStatusTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangUpDoubleCallRequest extends $tea.Model {
  acid?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangUpDoubleCallResponseBody extends $tea.Model {
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

export class HangUpDoubleCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HangUpDoubleCallResponseBody;
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
      body: HangUpDoubleCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupCallRequest extends $tea.Model {
  accountName?: string;
  callId?: string;
  clientToken?: string;
  connectionId?: string;
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupCallResponseBody extends $tea.Model {
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

export class HangupCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HangupCallResponseBody;
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
      body: HangupCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupThirdCallRequest extends $tea.Model {
  accountName?: string;
  callId?: string;
  clientToken?: string;
  connectionId?: string;
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupThirdCallResponseBody extends $tea.Model {
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

export class HangupThirdCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HangupThirdCallResponseBody;
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
      body: HangupThirdCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallRequest extends $tea.Model {
  accountName?: string;
  callId?: string;
  clientToken?: string;
  connectionId?: string;
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBody extends $tea.Model {
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

export class HoldCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HoldCallResponseBody;
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
      body: HoldCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryRequest extends $tea.Model {
  acid?: string;
  acidList?: string[];
  callResult?: string;
  callResultList?: string[];
  callType?: number;
  callTypeList?: number[];
  calledNumber?: string;
  calledNumberList?: string[];
  callingNumber?: string;
  callingNumberList?: string[];
  groupId?: number;
  groupIdList?: number[];
  groupName?: string;
  id?: string;
  instanceId?: string;
  memberId?: string;
  memberIdList?: string[];
  memberName?: string;
  pageNo?: number;
  pageSize?: number;
  params?: string;
  queryEndTime?: number;
  queryStartTime?: number;
  requestId?: string;
  servicerId?: string;
  servicerIdList?: string[];
  servicerName?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      acidList: 'AcidList',
      callResult: 'CallResult',
      callResultList: 'CallResultList',
      callType: 'CallType',
      callTypeList: 'CallTypeList',
      calledNumber: 'CalledNumber',
      calledNumberList: 'CalledNumberList',
      callingNumber: 'CallingNumber',
      callingNumberList: 'CallingNumberList',
      groupId: 'GroupId',
      groupIdList: 'GroupIdList',
      groupName: 'GroupName',
      id: 'Id',
      instanceId: 'InstanceId',
      memberId: 'MemberId',
      memberIdList: 'MemberIdList',
      memberName: 'MemberName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      params: 'Params',
      queryEndTime: 'QueryEndTime',
      queryStartTime: 'QueryStartTime',
      requestId: 'RequestId',
      servicerId: 'ServicerId',
      servicerIdList: 'ServicerIdList',
      servicerName: 'ServicerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      acidList: { 'type': 'array', 'itemType': 'string' },
      callResult: 'string',
      callResultList: { 'type': 'array', 'itemType': 'string' },
      callType: 'number',
      callTypeList: { 'type': 'array', 'itemType': 'number' },
      calledNumber: 'string',
      calledNumberList: { 'type': 'array', 'itemType': 'string' },
      callingNumber: 'string',
      callingNumberList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
      groupName: 'string',
      id: 'string',
      instanceId: 'string',
      memberId: 'string',
      memberIdList: { 'type': 'array', 'itemType': 'string' },
      memberName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      params: 'string',
      queryEndTime: 'number',
      queryStartTime: 'number',
      requestId: 'string',
      servicerId: 'string',
      servicerIdList: { 'type': 'array', 'itemType': 'string' },
      servicerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBody extends $tea.Model {
  code?: string;
  data?: HotlineSessionQueryResponseBodyData;
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
      data: HotlineSessionQueryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HotlineSessionQueryResponseBody;
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
      body: HotlineSessionQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsRequest extends $tea.Model {
  batchVersion?: number;
  details?: InsertAiOutboundPhoneNumsRequestDetails[];
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      details: 'Details',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      details: { 'type': 'array', 'itemType': InsertAiOutboundPhoneNumsRequestDetails },
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsShrinkRequest extends $tea.Model {
  batchVersion?: number;
  detailsShrink?: string;
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      detailsShrink: 'Details',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      detailsShrink: 'string',
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponseBody extends $tea.Model {
  code?: string;
  data?: InsertAiOutboundPhoneNumsResponseBodyData;
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
      data: InsertAiOutboundPhoneNumsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertAiOutboundPhoneNumsResponseBody;
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
      body: InsertAiOutboundPhoneNumsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailRequest extends $tea.Model {
  callInfos?: string;
  instanceId?: string;
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      callInfos: 'CallInfos',
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfos: 'string',
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertTaskDetailResponseBody;
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
      body: InsertTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinThirdCallRequest extends $tea.Model {
  accountName?: string;
  callId?: string;
  clientToken?: string;
  connectionId?: string;
  holdConnectionId?: string;
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinThirdCallResponseBody extends $tea.Model {
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

export class JoinThirdCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: JoinThirdCallResponseBody;
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
      body: JoinThirdCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponseBody extends $tea.Model {
  code?: string;
  data?: ListAgentBySkillGroupIdResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListAgentBySkillGroupIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAgentBySkillGroupIdResponseBody;
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
      body: ListAgentBySkillGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  robotName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotName: 'RobotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotResponseBody extends $tea.Model {
  code?: string;
  data?: ListAiccsRobotResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListAiccsRobotResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAiccsRobotResponseBody;
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
      body: ListAiccsRobotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailRequest extends $tea.Model {
  clientToken?: string;
  closeTimeEnd?: number;
  closeTimeStart?: number;
  currentPage?: number;
  instanceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  resultData?: ListChatRecordDetailResponseBodyResultData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultData: ListChatRecordDetailResponseBodyResultData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListChatRecordDetailResponseBody;
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
      body: ListChatRecordDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogRequest extends $tea.Model {
  called?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
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

export class ListDialogResponseBody extends $tea.Model {
  code?: string;
  data?: ListDialogResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDialogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDialogResponseBody;
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
      body: ListDialogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordRequest extends $tea.Model {
  callId?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponseBody extends $tea.Model {
  code?: string;
  data?: ListHotlineRecordResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListHotlineRecordResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHotlineRecordResponseBody;
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
      body: ListHotlineRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailRequest extends $tea.Model {
  clientToken?: string;
  closeTimeEnd?: number;
  closeTimeStart?: number;
  currentPage?: number;
  instanceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  resultData?: ListHotlineRecordDetailResponseBodyResultData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultData: ListHotlineRecordDetailResponseBodyResultData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHotlineRecordDetailResponseBody;
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
      body: ListHotlineRecordDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOutboundPhoneNumberResponseBody;
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
      body: ListOutboundPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOuterOrderedNumbersRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOuterOrderedNumbersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  numbers?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      numbers: 'Numbers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOuterOrderedNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOuterOrderedNumbersResponseBody;
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
      body: ListOuterOrderedNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogRequest extends $tea.Model {
  callId?: string;
  createTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      createTime: 'CreateTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      createTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogResponseBody extends $tea.Model {
  code?: string;
  data?: ListRobotCallDialogResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListRobotCallDialogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRobotCallDialogResponseBody;
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
      body: ListRobotCallDialogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeResponseBody extends $tea.Model {
  code?: string;
  data?: ListRobotNodeResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListRobotNodeResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRobotNodeResponseBody;
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
      body: ListRobotNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsResponseBody extends $tea.Model {
  code?: string;
  data?: ListRobotParamsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListRobotParamsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRobotParamsResponseBody;
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
      body: ListRobotParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  data?: ListRolesResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRolesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRolesResponseBody;
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
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupRequest extends $tea.Model {
  channelType?: number;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: ListSkillGroupResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListSkillGroupResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSkillGroupResponseBody;
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
      body: ListSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  robotName?: string;
  status?: string;
  taskId?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotName: 'RobotName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotName: 'string',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBody extends $tea.Model {
  code?: string;
  data?: ListTaskResponseBodyData;
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
      data: ListTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTaskResponseBody;
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
      body: ListTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailRequest extends $tea.Model {
  called?: string;
  id?: number;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  statusCode?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      id: 'Id',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      id: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      statusCode: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponseBody extends $tea.Model {
  code?: string;
  data?: ListTaskDetailResponseBodyData;
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
      data: ListTaskDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTaskDetailResponseBody;
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
      body: ListTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallRequest extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  commandCode?: string;
  extInfo?: string;
  outerAccountId?: string;
  outerAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      commandCode: 'CommandCode',
      extInfo: 'ExtInfo',
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      commandCode: 'string',
      extInfo: 'string',
      outerAccountId: 'string',
      outerAccountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MakeCallResponseBody;
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
      body: MakeCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallRequest extends $tea.Model {
  accountName?: string;
  bizData?: string;
  instanceId?: string;
  memberPhone?: string;
  outboundCallNumber?: string;
  servicerPhone?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      bizData: 'BizData',
      instanceId: 'InstanceId',
      memberPhone: 'MemberPhone',
      outboundCallNumber: 'OutboundCallNumber',
      servicerPhone: 'ServicerPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      bizData: 'string',
      instanceId: 'string',
      memberPhone: 'string',
      outboundCallNumber: 'string',
      servicerPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallResponseBody extends $tea.Model {
  code?: string;
  data?: MakeDoubleCallResponseBodyData;
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
      data: MakeDoubleCallResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MakeDoubleCallResponseBody;
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
      body: MakeDoubleCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueRequest extends $tea.Model {
  outerGroupId?: string;
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupId: 'OuterGroupId',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupId: 'string',
      outerGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryHotlineInQueueResponseBody;
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
      body: QueryHotlineInQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberRequest extends $tea.Model {
  currentPage?: number;
  departmentId?: number;
  groupIds?: number[];
  hotlineNumber?: string;
  instanceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      groupIds: 'GroupIds',
      hotlineNumber: 'HotlineNumber',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      departmentId: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      hotlineNumber: 'string',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberShrinkRequest extends $tea.Model {
  currentPage?: number;
  departmentId?: number;
  groupIdsShrink?: string;
  hotlineNumber?: string;
  instanceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      groupIdsShrink: 'GroupIds',
      hotlineNumber: 'HotlineNumber',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      departmentId: 'number',
      groupIdsShrink: 'string',
      hotlineNumber: 'string',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBody extends $tea.Model {
  code?: string;
  data?: QueryHotlineNumberResponseBodyData;
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
      data: QueryHotlineNumberResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryHotlineNumberResponseBody;
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
      body: QueryHotlineNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskRequest extends $tea.Model {
  ani?: string;
  currentPage?: number;
  departmentId?: string;
  endDate?: string;
  endTime?: string;
  groupName?: string;
  instanceId?: string;
  pageSize?: number;
  skillGroup?: number;
  startDate?: string;
  startTime?: string;
  status?: string;
  taskId?: number;
  taskName?: string;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      endDate: 'EndDate',
      endTime: 'EndTime',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      currentPage: 'number',
      departmentId: 'string',
      endDate: 'string',
      endTime: 'string',
      groupName: 'string',
      instanceId: 'string',
      pageSize: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
      taskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBody extends $tea.Model {
  code?: string;
  data?: QueryOutboundTaskResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryOutboundTaskResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOutboundTaskResponseBody;
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
      body: QueryOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsRequest extends $tea.Model {
  channelType?: number;
  clientToken?: string;
  departmentId?: number;
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      clientToken: 'string',
      departmentId: 'number',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponseBody extends $tea.Model {
  currentPage?: number;
  data?: QuerySkillGroupsResponseBodyData[];
  onePageSize?: number;
  requestId?: string;
  totalPage?: number;
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QuerySkillGroupsResponseBodyData },
      onePageSize: 'number',
      requestId: 'string',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySkillGroupsResponseBody;
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
      body: QuerySkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailRequest extends $tea.Model {
  ani?: string;
  currentPage?: number;
  departmentIdList?: string;
  dnis?: string;
  endReasonList?: string;
  instanceId?: string;
  outboundTaskId?: string;
  pageSize?: number;
  priorityList?: string;
  servicerId?: string;
  servicerName?: string;
  sid?: string;
  skillGroup?: string;
  statusList?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      currentPage: 'CurrentPage',
      departmentIdList: 'DepartmentIdList',
      dnis: 'Dnis',
      endReasonList: 'EndReasonList',
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      sid: 'Sid',
      skillGroup: 'SkillGroup',
      statusList: 'StatusList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      currentPage: 'number',
      departmentIdList: 'string',
      dnis: 'string',
      endReasonList: 'string',
      instanceId: 'string',
      outboundTaskId: 'string',
      pageSize: 'number',
      priorityList: 'string',
      servicerId: 'string',
      servicerName: 'string',
      sid: 'string',
      skillGroup: 'string',
      statusList: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTaskDetailResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTaskDetailResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTaskDetailResponseBody;
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
      body: QueryTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsRequest extends $tea.Model {
  caseId?: number;
  caseStatus?: number;
  caseType?: number;
  channelId?: string;
  channelType?: number;
  currentPage?: number;
  dealId?: number;
  extra?: { [key: string]: any };
  instanceId?: string;
  pageSize?: number;
  srType?: number;
  taskStatus?: number;
  touchId?: number;
  static names(): { [key: string]: string } {
    return {
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      caseType: 'CaseType',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      currentPage: 'CurrentPage',
      dealId: 'DealId',
      extra: 'Extra',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      srType: 'SrType',
      taskStatus: 'TaskStatus',
      touchId: 'TouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseId: 'number',
      caseStatus: 'number',
      caseType: 'number',
      channelId: 'string',
      channelType: 'number',
      currentPage: 'number',
      dealId: 'number',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      pageSize: 'number',
      srType: 'number',
      taskStatus: 'number',
      touchId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsShrinkRequest extends $tea.Model {
  caseId?: number;
  caseStatus?: number;
  caseType?: number;
  channelId?: string;
  channelType?: number;
  currentPage?: number;
  dealId?: number;
  extraShrink?: string;
  instanceId?: string;
  pageSize?: number;
  srType?: number;
  taskStatus?: number;
  touchId?: number;
  static names(): { [key: string]: string } {
    return {
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      caseType: 'CaseType',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      currentPage: 'CurrentPage',
      dealId: 'DealId',
      extraShrink: 'Extra',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      srType: 'SrType',
      taskStatus: 'TaskStatus',
      touchId: 'TouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseId: 'number',
      caseStatus: 'number',
      caseType: 'number',
      channelId: 'string',
      channelType: 'number',
      currentPage: 'number',
      dealId: 'number',
      extraShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      srType: 'number',
      taskStatus: 'number',
      touchId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTicketsResponseBody;
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
      body: QueryTicketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListRequest extends $tea.Model {
  channelId?: string[];
  channelType?: number[];
  closeTimeEnd?: number;
  closeTimeStart?: number;
  currentPage?: number;
  evaluationLevel?: number[];
  evaluationScore?: number[];
  evaluationStatus?: number[];
  firstTimeEnd?: number;
  firstTimeStart?: number;
  instanceId?: string;
  memberId?: number[];
  memberName?: string[];
  pageSize?: number;
  queueId?: number[];
  servicerId?: number[];
  servicerName?: string[];
  touchId?: number[];
  touchType?: number[];
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      evaluationStatus: 'EvaluationStatus',
      firstTimeEnd: 'FirstTimeEnd',
      firstTimeStart: 'FirstTimeStart',
      instanceId: 'InstanceId',
      memberId: 'MemberId',
      memberName: 'MemberName',
      pageSize: 'PageSize',
      queueId: 'QueueId',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      touchId: 'TouchId',
      touchType: 'TouchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: { 'type': 'array', 'itemType': 'string' },
      channelType: { 'type': 'array', 'itemType': 'number' },
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      evaluationLevel: { 'type': 'array', 'itemType': 'number' },
      evaluationScore: { 'type': 'array', 'itemType': 'number' },
      evaluationStatus: { 'type': 'array', 'itemType': 'number' },
      firstTimeEnd: 'number',
      firstTimeStart: 'number',
      instanceId: 'string',
      memberId: { 'type': 'array', 'itemType': 'number' },
      memberName: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      queueId: { 'type': 'array', 'itemType': 'number' },
      servicerId: { 'type': 'array', 'itemType': 'number' },
      servicerName: { 'type': 'array', 'itemType': 'string' },
      touchId: { 'type': 'array', 'itemType': 'number' },
      touchType: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultData?: QueryTouchListResponseBodyResultData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultData: QueryTouchListResponseBodyResultData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTouchListResponseBody;
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
      body: QueryTouchListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupRequest extends $tea.Model {
  agentIds?: number[];
  instanceId?: string;
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupShrinkRequest extends $tea.Model {
  agentIdsShrink?: string;
  instanceId?: string;
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: RemoveAgentFromSkillGroupResponseBodyData;
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
      data: RemoveAgentFromSkillGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAgentFromSkillGroupResponseBody;
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
      body: RemoveAgentFromSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupResponseBody extends $tea.Model {
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

export class RemoveSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveSkillGroupResponseBody;
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
      body: RemoveSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberRequest extends $tea.Model {
  description?: string;
  enableInbound?: boolean;
  enableInboundEvaluation?: boolean;
  enableOutbound?: boolean;
  enableOutboundEvaluation?: boolean;
  evaluationLevel?: number;
  hotlineNumber?: string;
  inboundFlowId?: number;
  instanceId?: string;
  outboundAllDepart?: boolean;
  outboundRangeList?: ResetHotlineNumberRequestOutboundRangeList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeList: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeList: { 'type': 'array', 'itemType': ResetHotlineNumberRequestOutboundRangeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberShrinkRequest extends $tea.Model {
  description?: string;
  enableInbound?: boolean;
  enableInboundEvaluation?: boolean;
  enableOutbound?: boolean;
  enableOutboundEvaluation?: boolean;
  evaluationLevel?: number;
  hotlineNumber?: string;
  inboundFlowId?: number;
  instanceId?: string;
  outboundAllDepart?: boolean;
  outboundRangeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeListShrink: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetHotlineNumberResponseBody;
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
      body: ResetHotlineNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskRequest extends $tea.Model {
  instanceId?: string;
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RestartOutboundTaskResponseBody;
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
      body: RestartOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RobotCallRequest extends $tea.Model {
  calledNumber?: string;
  calledShowNumber?: string;
  earlyMediaAsr?: boolean;
  outId?: string;
  ownerId?: number;
  params?: string;
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      earlyMediaAsr: 'EarlyMediaAsr',
      outId: 'OutId',
      ownerId: 'OwnerId',
      params: 'Params',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      earlyMediaAsr: 'boolean',
      outId: 'string',
      ownerId: 'number',
      params: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RobotCallResponseBody extends $tea.Model {
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

export class RobotCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RobotCallResponseBody;
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
      body: RobotCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallRequest extends $tea.Model {
  actionCodeBreak?: boolean;
  actionCodeTimeBreak?: number;
  asrAlsAmId?: string;
  asrBaseId?: string;
  asrModelId?: string;
  asrVocabularyId?: string;
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
  playTimes?: number;
  prodCode?: string;
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sessionTimeout?: number;
  speed?: number;
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
      asrAlsAmId: 'AsrAlsAmId',
      asrBaseId: 'AsrBaseId',
      asrModelId: 'AsrModelId',
      asrVocabularyId: 'AsrVocabularyId',
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
      playTimes: 'PlayTimes',
      prodCode: 'ProdCode',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      speed: 'Speed',
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
      asrAlsAmId: 'string',
      asrBaseId: 'string',
      asrModelId: 'string',
      asrVocabularyId: 'string',
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
      playTimes: 'number',
      prodCode: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      speed: 'number',
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

export class SendCcoSmartCallResponseBody extends $tea.Model {
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

export class SendCcoSmartCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendCcoSmartCallResponseBody;
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
      body: SendCcoSmartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallOperateRequest extends $tea.Model {
  callId?: string;
  command?: string;
  ownerId?: number;
  param?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
      prodCode: 'ProdCode',
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
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallOperateResponseBody extends $tea.Model {
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

export class SendCcoSmartCallOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendCcoSmartCallOperateResponseBody;
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
      body: SendCcoSmartCallOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendHotlineHeartBeatRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendHotlineHeartBeatResponseBody extends $tea.Model {
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

export class SendHotlineHeartBeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendHotlineHeartBeatResponseBody;
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
      body: SendHotlineHeartBeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAiOutboundTaskRequest extends $tea.Model {
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAiOutboundTaskResponseBody extends $tea.Model {
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

export class StartAiOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartAiOutboundTaskResponseBody;
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
      body: StartAiOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallRequest extends $tea.Model {
  accountName?: string;
  callee?: string;
  caller?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callee: 'Callee',
      caller: 'Caller',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callee: 'string',
      caller: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallResponseBody extends $tea.Model {
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

export class StartCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartCallResponseBody;
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
      body: StartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallV2Request extends $tea.Model {
  accountName?: string;
  callee?: string;
  caller?: string;
  callerType?: number;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callee: 'Callee',
      caller: 'Caller',
      callerType: 'CallerType',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callee: 'string',
      caller: 'string',
      callerType: 'number',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallV2ResponseBody extends $tea.Model {
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

export class StartCallV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartCallV2ResponseBody;
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
      body: StartCallV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkRequest extends $tea.Model {
  accountName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartChatWorkResponseBody;
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
      body: StartChatWorkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartHotlineServiceResponseBody;
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
      body: StartHotlineServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundRequest extends $tea.Model {
  accountId?: string;
  accountType?: string;
  appName?: string;
  calledNumber?: string;
  callingNumber?: string;
  commandCode?: string;
  extInfo?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountType: 'AccountType',
      appName: 'AppName',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      commandCode: 'CommandCode',
      extInfo: 'ExtInfo',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountType: 'string',
      appName: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      commandCode: 'string',
      extInfo: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundResponseBody extends $tea.Model {
  code?: string;
  customerInfo?: string;
  invokeCmdId?: string;
  invokeCreateTime?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customerInfo: 'CustomerInfo',
      invokeCmdId: 'InvokeCmdId',
      invokeCreateTime: 'InvokeCreateTime',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customerInfo: 'string',
      invokeCmdId: 'string',
      invokeCreateTime: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartMicroOutboundResponseBody;
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
      body: StartMicroOutboundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startNow?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startNow: 'StartNow',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startNow: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartTaskResponseBody;
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
      body: StartTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAiOutboundTaskRequest extends $tea.Model {
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAiOutboundTaskResponseBody extends $tea.Model {
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

export class StopAiOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopAiOutboundTaskResponseBody;
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
      body: StopAiOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskRequest extends $tea.Model {
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

export class StopTaskResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopTaskResponseBody;
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
      body: StopTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendHotlineServiceRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  instanceId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendHotlineServiceResponseBody extends $tea.Model {
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

export class SuspendHotlineServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendHotlineServiceResponseBody;
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
      body: SuspendHotlineServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskRequest extends $tea.Model {
  instanceId?: string;
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendOutboundTaskResponseBody;
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
      body: SuspendOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAiOutboundTaskRequest extends $tea.Model {
  instanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAiOutboundTaskResponseBody extends $tea.Model {
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

export class TerminateAiOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TerminateAiOutboundTaskResponseBody;
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
      body: TerminateAiOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToSkillGroupRequest extends $tea.Model {
  accountName?: string;
  callId?: string;
  clientToken?: string;
  connectionId?: string;
  holdConnectionId?: string;
  instanceId?: string;
  isSingleTransfer?: boolean;
  jobId?: string;
  skillGroupId?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      instanceId: 'InstanceId',
      isSingleTransfer: 'IsSingleTransfer',
      jobId: 'JobId',
      skillGroupId: 'SkillGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      instanceId: 'string',
      isSingleTransfer: 'boolean',
      jobId: 'string',
      skillGroupId: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToSkillGroupResponseBody extends $tea.Model {
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

export class TransferCallToSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TransferCallToSkillGroupResponseBody;
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
      body: TransferCallToSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentRequest extends $tea.Model {
  accountName?: string;
  clientToken?: string;
  displayName?: string;
  instanceId?: string;
  skillGroupId?: number[];
  skillGroupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'number' },
      skillGroupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAgentResponseBody;
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
      body: UpdateAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskRequest extends $tea.Model {
  concurrentRate?: number;
  description?: string;
  executionTime?: string;
  forecastCallRate?: number;
  handlerId?: number;
  instanceId?: string;
  name?: string;
  numRepeated?: number;
  outboundNums?: string[];
  recallRule?: UpdateAiOutboundTaskRequestRecallRule;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: UpdateAiOutboundTaskRequestRecallRule,
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskShrinkRequest extends $tea.Model {
  concurrentRate?: number;
  description?: string;
  executionTime?: string;
  forecastCallRate?: number;
  handlerId?: number;
  instanceId?: string;
  name?: string;
  numRepeated?: number;
  outboundNumsShrink?: string;
  recallRuleShrink?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNumsShrink: 'OutboundNums',
      recallRuleShrink: 'RecallRule',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNumsShrink: 'string',
      recallRuleShrink: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskResponseBody extends $tea.Model {
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

export class UpdateAiOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAiOutboundTaskResponseBody;
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
      body: UpdateAiOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentRequest extends $tea.Model {
  departmentId?: number;
  departmentName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDepartmentResponseBody;
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
      body: UpdateDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountRequest extends $tea.Model {
  avatar?: string;
  ext?: string;
  outerAccountId?: string;
  outerAccountName?: string;
  outerAccountType?: string;
  outerDepartmentId?: string;
  outerDepartmentType?: string;
  outerGroupIds?: string;
  outerGroupType?: string;
  realName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      ext: 'Ext',
      outerAccountId: 'OuterAccountId',
      outerAccountName: 'OuterAccountName',
      outerAccountType: 'OuterAccountType',
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupIds: 'OuterGroupIds',
      outerGroupType: 'OuterGroupType',
      realName: 'RealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      ext: 'string',
      outerAccountId: 'string',
      outerAccountName: 'string',
      outerAccountType: 'string',
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
      outerGroupIds: 'string',
      outerGroupType: 'string',
      realName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateOuterAccountResponseBody;
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
      body: UpdateOuterAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  displayName?: string;
  instanceId?: string;
  skillGroupId?: number;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupResponseBody extends $tea.Model {
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

export class UpdateSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSkillGroupResponseBody;
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
      body: UpdateSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHotlineNumberRequestOutboundRangeList extends $tea.Model {
  departmentId?: number;
  groupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      groupIdList: 'GroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponseBodyData extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskRequestRecallRule extends $tea.Model {
  count?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectResponseBodyData extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponseBodyData extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagRequestAnalysisTypes extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyDataGroupList extends $tea.Model {
  channelType?: number;
  description?: string;
  displayName?: string;
  name?: string;
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      skillGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyData extends $tea.Model {
  accountName?: string;
  agentId?: number;
  displayName?: string;
  groupList?: GetAgentResponseBodyDataGroupList[];
  status?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      agentId: 'AgentId',
      displayName: 'DisplayName',
      groupList: 'GroupList',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      agentId: 'number',
      displayName: 'string',
      groupList: { 'type': 'array', 'itemType': GetAgentResponseBodyDataGroupList },
      status: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponseBodyData extends $tea.Model {
  agentId?: number;
  createUserName?: string;
  foreignKey?: string;
  foreignNick?: string;
  realName?: string;
  servicerType?: number;
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      createUserName: 'CreateUserName',
      foreignKey: 'ForeignKey',
      foreignNick: 'ForeignNick',
      realName: 'RealName',
      servicerType: 'ServicerType',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      createUserName: 'string',
      foreignKey: 'string',
      foreignNick: 'string',
      realName: 'string',
      servicerType: 'number',
      showName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBodyDataColumns extends $tea.Model {
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBodyData extends $tea.Model {
  columns?: GetAgentIndexRealTimeResponseBodyDataColumns[];
  page?: number;
  pageSize?: number;
  rows?: { [key: string]: any }[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetAgentIndexRealTimeResponseBodyDataColumns },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskBizDataResponseBodyData extends $tea.Model {
  bizData?: string;
  caseId?: number;
  phoneNum?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      caseId: 'CaseId',
      phoneNum: 'PhoneNum',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      caseId: 'number',
      phoneNum: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponseBodyDataRecallRule extends $tea.Model {
  count?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponseBodyData extends $tea.Model {
  concurrentRate?: number;
  description?: string;
  executionTime?: string;
  forecastCallRate?: number;
  handlerId?: number;
  handlerName?: string;
  name?: string;
  numRepeated?: number;
  outboundNums?: string[];
  recallRule?: GetAiOutboundTaskDetailResponseBodyDataRecallRule;
  status?: number;
  statusDesc?: string;
  taskId?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      handlerName: 'HandlerName',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      status: 'Status',
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      handlerName: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: GetAiOutboundTaskDetailResponseBodyDataRecallRule,
      status: 'number',
      statusDesc: 'string',
      taskId: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponseBodyDataList extends $tea.Model {
  batchVersion?: number;
  bizData?: string;
  callCount?: number;
  caseId?: number;
  createTime?: number;
  lastCallResult?: string;
  phoneNum?: string;
  status?: number;
  statusDesc?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      bizData: 'BizData',
      callCount: 'CallCount',
      caseId: 'CaseId',
      createTime: 'CreateTime',
      lastCallResult: 'LastCallResult',
      phoneNum: 'PhoneNum',
      status: 'Status',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      bizData: 'string',
      callCount: 'number',
      caseId: 'number',
      createTime: 'number',
      lastCallResult: 'string',
      phoneNum: 'string',
      status: 'number',
      statusDesc: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponseBodyData extends $tea.Model {
  currentPage?: number;
  hasNextPage?: boolean;
  list?: GetAiOutboundTaskExecDetailResponseBodyDataList[];
  pageSize?: number;
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasNextPage: 'HasNextPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasNextPage: 'boolean',
      list: { 'type': 'array', 'itemType': GetAiOutboundTaskExecDetailResponseBodyDataList },
      pageSize: 'number',
      totalResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListResponseBodyDataList extends $tea.Model {
  concurrentRate?: number;
  createTime?: number;
  description?: string;
  finishCount?: number;
  finishRate?: number;
  handlerId?: number;
  handlerName?: string;
  name?: string;
  status?: number;
  statusDesc?: string;
  taskId?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      createTime: 'CreateTime',
      description: 'Description',
      finishCount: 'FinishCount',
      finishRate: 'FinishRate',
      handlerId: 'HandlerId',
      handlerName: 'HandlerName',
      name: 'Name',
      status: 'Status',
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      createTime: 'number',
      description: 'string',
      finishCount: 'number',
      finishRate: 'number',
      handlerId: 'number',
      handlerName: 'string',
      name: 'string',
      status: 'number',
      statusDesc: 'string',
      taskId: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListResponseBodyData extends $tea.Model {
  currentPage?: number;
  hasNextPage?: boolean;
  list?: GetAiOutboundTaskListResponseBodyDataList[];
  pageSize?: number;
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasNextPage: 'HasNextPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasNextPage: 'boolean',
      list: { 'type': 'array', 'itemType': GetAiOutboundTaskListResponseBodyDataList },
      pageSize: 'number',
      totalResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressResponseBodyDataCalloutProgress extends $tea.Model {
  callLossCount?: number;
  callLossRate?: number;
  callOutConnectCount?: number;
  callOutConnectRate?: number;
  callOutCount?: number;
  callOutServicerPickupCount?: number;
  callOutServicerPickupRate?: number;
  callOutUserPickupCount?: number;
  callOutUserPickupRate?: number;
  static names(): { [key: string]: string } {
    return {
      callLossCount: 'CallLossCount',
      callLossRate: 'CallLossRate',
      callOutConnectCount: 'CallOutConnectCount',
      callOutConnectRate: 'CallOutConnectRate',
      callOutCount: 'CallOutCount',
      callOutServicerPickupCount: 'CallOutServicerPickupCount',
      callOutServicerPickupRate: 'CallOutServicerPickupRate',
      callOutUserPickupCount: 'CallOutUserPickupCount',
      callOutUserPickupRate: 'CallOutUserPickupRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLossCount: 'number',
      callLossRate: 'number',
      callOutConnectCount: 'number',
      callOutConnectRate: 'number',
      callOutCount: 'number',
      callOutServicerPickupCount: 'number',
      callOutServicerPickupRate: 'number',
      callOutUserPickupCount: 'number',
      callOutUserPickupRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressResponseBodyDataTaskProgress extends $tea.Model {
  callingCount?: number;
  connectCount?: number;
  connectRate?: number;
  finishCount?: number;
  finishRate?: number;
  servicerPickupCount?: number;
  servicerPickupRate?: number;
  terminateCount?: number;
  totalCount?: number;
  userPickupCount?: number;
  userPickupRate?: number;
  waitingCallCount?: number;
  waitingRecallCount?: number;
  static names(): { [key: string]: string } {
    return {
      callingCount: 'CallingCount',
      connectCount: 'ConnectCount',
      connectRate: 'ConnectRate',
      finishCount: 'FinishCount',
      finishRate: 'FinishRate',
      servicerPickupCount: 'ServicerPickupCount',
      servicerPickupRate: 'ServicerPickupRate',
      terminateCount: 'TerminateCount',
      totalCount: 'TotalCount',
      userPickupCount: 'UserPickupCount',
      userPickupRate: 'UserPickupRate',
      waitingCallCount: 'WaitingCallCount',
      waitingRecallCount: 'WaitingRecallCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingCount: 'number',
      connectCount: 'number',
      connectRate: 'number',
      finishCount: 'number',
      finishRate: 'number',
      servicerPickupCount: 'number',
      servicerPickupRate: 'number',
      terminateCount: 'number',
      totalCount: 'number',
      userPickupCount: 'number',
      userPickupRate: 'number',
      waitingCallCount: 'number',
      waitingRecallCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressResponseBodyData extends $tea.Model {
  calloutProgress?: GetAiOutboundTaskProgressResponseBodyDataCalloutProgress;
  taskId?: number;
  taskProgress?: GetAiOutboundTaskProgressResponseBodyDataTaskProgress;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      calloutProgress: 'CalloutProgress',
      taskId: 'TaskId',
      taskProgress: 'TaskProgress',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calloutProgress: GetAiOutboundTaskProgressResponseBodyDataCalloutProgress,
      taskId: 'number',
      taskProgress: GetAiOutboundTaskProgressResponseBodyDataTaskProgress,
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllDepartmentResponseBodyData extends $tea.Model {
  departmentId?: number;
  departmentName?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBodyData extends $tea.Model {
  customizeFields?: { [key: string]: any };
  nick?: string;
  outerId?: string;
  photo?: string;
  realName?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      customizeFields: 'CustomizeFields',
      nick: 'Nick',
      outerId: 'OuterId',
      photo: 'Photo',
      realName: 'RealName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizeFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nick: 'string',
      outerId: 'string',
      photo: 'string',
      realName: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBodyDataGroupDTOS extends $tea.Model {
  name?: string;
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      skillGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBodyData extends $tea.Model {
  depGroupId?: string;
  depGroupName?: string;
  groupDTOS?: GetDepGroupTreeDataResponseBodyDataGroupDTOS[];
  static names(): { [key: string]: string } {
    return {
      depGroupId: 'DepGroupId',
      depGroupName: 'DepGroupName',
      groupDTOS: 'GroupDTOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depGroupId: 'string',
      depGroupName: 'string',
      groupDTOS: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyDataGroupDTOS },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponseBodyData extends $tea.Model {
  agentId?: number;
  agentStatus?: number;
  agentStatusCode?: string;
  assigned?: boolean;
  restType?: number;
  tenantId?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      agentStatusCode: 'AgentStatusCode',
      assigned: 'Assigned',
      restType: 'RestType',
      tenantId: 'TenantId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentStatus: 'number',
      agentStatusCode: 'string',
      assigned: 'boolean',
      restType: 'number',
      tenantId: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBodyDataColumns extends $tea.Model {
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBodyData extends $tea.Model {
  columns?: GetHotlineAgentDetailReportResponseBodyDataColumns[];
  page?: number;
  pageSize?: number;
  rows?: { [key: string]: any }[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetHotlineAgentDetailReportResponseBodyDataColumns },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponseBodyData extends $tea.Model {
  actionId?: number;
  buId?: number;
  calloutId?: number;
  calloutName?: string;
  caseId?: number;
  channelId?: string;
  channelType?: number;
  depId?: number;
  isTransfer?: string;
  memberId?: number;
  memberList?: string;
  memberName?: string;
  servicerId?: number;
  servicerName?: string;
  subTouchId?: number;
  taskId?: number;
  touchId?: number;
  static names(): { [key: string]: string } {
    return {
      actionId: 'ActionId',
      buId: 'BuId',
      calloutId: 'CalloutId',
      calloutName: 'CalloutName',
      caseId: 'CaseId',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      depId: 'DepId',
      isTransfer: 'IsTransfer',
      memberId: 'MemberId',
      memberList: 'MemberList',
      memberName: 'MemberName',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      subTouchId: 'SubTouchId',
      taskId: 'TaskId',
      touchId: 'TouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'number',
      buId: 'number',
      calloutId: 'number',
      calloutName: 'string',
      caseId: 'number',
      channelId: 'string',
      channelType: 'number',
      depId: 'number',
      isTransfer: 'string',
      memberId: 'number',
      memberList: 'string',
      memberName: 'string',
      servicerId: 'number',
      servicerName: 'string',
      subTouchId: 'number',
      taskId: 'number',
      touchId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBodyDataColumns extends $tea.Model {
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBodyData extends $tea.Model {
  columns?: GetHotlineGroupDetailReportResponseBodyDataColumns[];
  page?: number;
  pageSize?: number;
  rows?: { [key: string]: any }[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetHotlineGroupDetailReportResponseBodyDataColumns },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponseBodyData extends $tea.Model {
  acid?: string;
  content?: string;
  endTime?: number;
  mid?: string;
  senderType?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      content: 'Content',
      endTime: 'EndTime',
      mid: 'Mid',
      senderType: 'SenderType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      content: 'string',
      endTime: 'number',
      mid: 'string',
      senderType: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyCommodityInstances extends $tea.Model {
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyDataNum extends $tea.Model {
  description?: string;
  type?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyDataNumGroup extends $tea.Model {
  description?: string;
  type?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyData extends $tea.Model {
  num?: GetOutbounNumListResponseBodyDataNum[];
  numGroup?: GetOutbounNumListResponseBodyDataNumGroup[];
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      numGroup: 'NumGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNum },
      numGroup: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNumGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailResponseBodyData extends $tea.Model {
  checkFreqType?: number;
  createTime?: string;
  depList?: number[];
  groupList?: number[];
  id?: number;
  modifyTime?: string;
  projectName?: string;
  qualityRuleIds?: number[];
  qualityType?: number;
  servicerList?: number[];
  status?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      checkFreqType: 'CheckFreqType',
      createTime: 'CreateTime',
      depList: 'DepList',
      groupList: 'GroupList',
      id: 'Id',
      modifyTime: 'ModifyTime',
      projectName: 'ProjectName',
      qualityRuleIds: 'QualityRuleIds',
      qualityType: 'QualityType',
      servicerList: 'ServicerList',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFreqType: 'number',
      createTime: 'string',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      modifyTime: 'string',
      projectName: 'string',
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      qualityType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBodyDataQualityProjectList extends $tea.Model {
  checkFreqType?: number;
  createTime?: string;
  depList?: number[];
  groupList?: number[];
  id?: number;
  modifyTime?: string;
  projectName?: string;
  qualityRuleIds?: number[];
  qualityType?: number;
  servicerList?: number[];
  status?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      checkFreqType: 'CheckFreqType',
      createTime: 'CreateTime',
      depList: 'DepList',
      groupList: 'GroupList',
      id: 'Id',
      modifyTime: 'ModifyTime',
      projectName: 'ProjectName',
      qualityRuleIds: 'QualityRuleIds',
      qualityType: 'QualityType',
      servicerList: 'ServicerList',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFreqType: 'number',
      createTime: 'string',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      modifyTime: 'string',
      projectName: 'string',
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      qualityType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  qualityProjectList?: GetQualityProjectListResponseBodyDataQualityProjectList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityProjectList: 'QualityProjectList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityProjectList: { 'type': 'array', 'itemType': GetQualityProjectListResponseBodyDataQualityProjectList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponseBodyData extends $tea.Model {
  actionData?: string;
  actionTime?: string;
  actionType?: string;
  projectCreateTime?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      actionData: 'ActionData',
      actionTime: 'ActionTime',
      actionType: 'ActionType',
      projectCreateTime: 'ProjectCreateTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionData: 'string',
      actionTime: 'string',
      actionType: 'string',
      projectCreateTime: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBodyDataQualityResultResponseList extends $tea.Model {
  channelType?: string;
  channelTypeName?: string;
  groupId?: string;
  groupName?: string;
  hitDetail?: string;
  hitStatus?: boolean;
  instanceName?: string;
  memberName?: string;
  projectId?: string;
  projectName?: string;
  ruleId?: string;
  ruleName?: string;
  servicerId?: string;
  servicerName?: string;
  touchId?: string;
  touchStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      channelTypeName: 'ChannelTypeName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      hitDetail: 'HitDetail',
      hitStatus: 'HitStatus',
      instanceName: 'InstanceName',
      memberName: 'MemberName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      touchId: 'TouchId',
      touchStartTime: 'TouchStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      channelTypeName: 'string',
      groupId: 'string',
      groupName: 'string',
      hitDetail: 'string',
      hitStatus: 'boolean',
      instanceName: 'string',
      memberName: 'string',
      projectId: 'string',
      projectName: 'string',
      ruleId: 'string',
      ruleName: 'string',
      servicerId: 'string',
      servicerName: 'string',
      touchId: 'string',
      touchStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  qualityResultResponseList?: GetQualityResultResponseBodyDataQualityResultResponseList[];
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityResultResponseList: 'QualityResultResponseList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityResultResponseList: { 'type': 'array', 'itemType': GetQualityResultResponseBodyDataQualityResultResponseList },
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponseBodyData extends $tea.Model {
  keyWords?: string[];
  matchType?: number;
  name?: string;
  ruleCreateTime?: string;
  ruleId?: number;
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleCreateTime: 'RuleCreateTime',
      ruleId: 'RuleId',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleCreateTime: 'string',
      ruleId: 'number',
      ruleTag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBodyDataQualityRuleList extends $tea.Model {
  keyWords?: string[];
  matchType?: number;
  name?: string;
  ruleCreateTime?: string;
  ruleId?: number;
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleCreateTime: 'RuleCreateTime',
      ruleId: 'RuleId',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleCreateTime: 'string',
      ruleId: 'number',
      ruleTag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  qualityRuleList?: GetQualityRuleListResponseBodyDataQualityRuleList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityRuleList: 'QualityRuleList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityRuleList: { 'type': 'array', 'itemType': GetQualityRuleListResponseBodyDataQualityRuleList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponseBodyData extends $tea.Model {
  ruleTagId?: number;
  ruleTagName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleTagId: 'RuleTagId',
      ruleTagName: 'RuleTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTagId: 'number',
      ruleTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataResponseBodyData extends $tea.Model {
  acid?: string;
  ossLink?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      ossLink: 'OssLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      ossLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordUrlResponseBodyData extends $tea.Model {
  acid?: string;
  ossLink?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      ossLink: 'OssLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      ossLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponseBodyData extends $tea.Model {
  accountName?: string;
  rtcId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      rtcId: 'RtcId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      rtcId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rowr?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rowr: 'Rowr',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rowr: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  rows?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBodyDataCallDetailRecord extends $tea.Model {
  acid?: string;
  activeTransferId?: string;
  callContinueTime?: number;
  callResult?: string;
  callType?: number;
  calledNumber?: string;
  callingNumber?: string;
  createTime?: string;
  evaluationLevel?: number;
  evaluationScore?: number;
  groupId?: number;
  groupName?: string;
  hangUpRole?: string;
  hangUpTime?: string;
  id?: string;
  inQueueTime?: string;
  memberId?: string;
  memberName?: string;
  outQueueTime?: string;
  passiveTransferId?: string;
  passiveTransferIdType?: string;
  pickUpTime?: string;
  queueUpContinueTime?: number;
  ringContinueTime?: number;
  ringEndTime?: string;
  ringStartTime?: string;
  servicerId?: string;
  servicerName?: string;
  trunkCall?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      activeTransferId: 'ActiveTransferId',
      callContinueTime: 'CallContinueTime',
      callResult: 'CallResult',
      callType: 'CallType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      createTime: 'CreateTime',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      groupId: 'GroupId',
      groupName: 'GroupName',
      hangUpRole: 'HangUpRole',
      hangUpTime: 'HangUpTime',
      id: 'Id',
      inQueueTime: 'InQueueTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      outQueueTime: 'OutQueueTime',
      passiveTransferId: 'PassiveTransferId',
      passiveTransferIdType: 'PassiveTransferIdType',
      pickUpTime: 'PickUpTime',
      queueUpContinueTime: 'QueueUpContinueTime',
      ringContinueTime: 'RingContinueTime',
      ringEndTime: 'RingEndTime',
      ringStartTime: 'RingStartTime',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      trunkCall: 'TrunkCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      activeTransferId: 'string',
      callContinueTime: 'number',
      callResult: 'string',
      callType: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      createTime: 'string',
      evaluationLevel: 'number',
      evaluationScore: 'number',
      groupId: 'number',
      groupName: 'string',
      hangUpRole: 'string',
      hangUpTime: 'string',
      id: 'string',
      inQueueTime: 'string',
      memberId: 'string',
      memberName: 'string',
      outQueueTime: 'string',
      passiveTransferId: 'string',
      passiveTransferIdType: 'string',
      pickUpTime: 'string',
      queueUpContinueTime: 'number',
      ringContinueTime: 'number',
      ringEndTime: 'string',
      ringStartTime: 'string',
      servicerId: 'string',
      servicerName: 'string',
      trunkCall: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBodyData extends $tea.Model {
  callDetailRecord?: HotlineSessionQueryResponseBodyDataCallDetailRecord[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callDetailRecord: 'CallDetailRecord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecord: { 'type': 'array', 'itemType': HotlineSessionQueryResponseBodyDataCallDetailRecord },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsRequestDetails extends $tea.Model {
  bizData?: string;
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      phoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponseBodyDataFailInfo extends $tea.Model {
  bizData?: string;
  msg?: string;
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      msg: 'Msg',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      msg: 'string',
      phoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponseBodyData extends $tea.Model {
  failInfo?: InsertAiOutboundPhoneNumsResponseBodyDataFailInfo[];
  successCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failInfo: 'FailInfo',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInfo: { 'type': 'array', 'itemType': InsertAiOutboundPhoneNumsResponseBodyDataFailInfo },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponseBodyData extends $tea.Model {
  accountName?: string;
  agentId?: number;
  displayName?: string;
  status?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      agentId: 'AgentId',
      displayName: 'DisplayName',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      agentId: 'number',
      displayName: 'string',
      status: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotResponseBodyData extends $tea.Model {
  atProfession?: string;
  atSence?: string;
  id?: number;
  robotName?: string;
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      atProfession: 'AtProfession',
      atSence: 'AtSence',
      id: 'Id',
      robotName: 'RobotName',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atProfession: 'string',
      atSence: 'string',
      id: 'number',
      robotName: 'string',
      robotType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultDataDataMessageList extends $tea.Model {
  content?: string;
  createTime?: number;
  msgType?: string;
  senderName?: string;
  senderType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      msgType: 'MsgType',
      senderName: 'SenderName',
      senderType: 'SenderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      msgType: 'string',
      senderName: 'string',
      senderType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultDataData extends $tea.Model {
  endTime?: number;
  messageList?: ListChatRecordDetailResponseBodyResultDataDataMessageList[];
  servicerName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      messageList: 'MessageList',
      servicerName: 'ServicerName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      messageList: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataDataMessageList },
      servicerName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultData extends $tea.Model {
  currentPage?: number;
  data?: ListChatRecordDetailResponseBodyResultDataData[];
  onePageSize?: number;
  totalPage?: number;
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataData },
      onePageSize: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogResponseBodyData extends $tea.Model {
  content?: string;
  nodeType?: string;
  role?: string;
  tag?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nodeType: 'NodeType',
      role: 'Role',
      tag: 'Tag',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nodeType: 'string',
      role: 'string',
      tag: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponseBodyData extends $tea.Model {
  callId?: string;
  connectionId?: string;
  endTime?: number;
  startTime?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      connectionId: 'ConnectionId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      connectionId: 'string',
      endTime: 'number',
      startTime: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBodyResultDataData extends $tea.Model {
  endTime?: number;
  ossUrl?: string;
  servicerName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ossUrl: 'OssUrl',
      servicerName: 'ServicerName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ossUrl: 'string',
      servicerName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBodyResultData extends $tea.Model {
  currentPage?: number;
  data?: ListHotlineRecordDetailResponseBodyResultDataData[];
  onePageSize?: number;
  totalPage?: number;
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListHotlineRecordDetailResponseBodyResultDataData },
      onePageSize: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogResponseBodyData extends $tea.Model {
  content?: string;
  nodeType?: string;
  role?: string;
  tag?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nodeType: 'NodeType',
      role: 'Role',
      tag: 'Tag',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nodeType: 'string',
      role: 'string',
      tag: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeResponseBodyData extends $tea.Model {
  isOutput?: number;
  modelName?: string;
  nodeIdentifier?: string;
  nodeName?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      isOutput: 'IsOutput',
      modelName: 'ModelName',
      nodeIdentifier: 'NodeIdentifier',
      nodeName: 'NodeName',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOutput: 'number',
      modelName: 'string',
      nodeIdentifier: 'string',
      nodeName: 'string',
      processName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsResponseBodyData extends $tea.Model {
  isEmpty?: number;
  paramCode?: string;
  paramName?: string;
  static names(): { [key: string]: string } {
    return {
      isEmpty: 'IsEmpty',
      paramCode: 'ParamCode',
      paramName: 'ParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEmpty: 'number',
      paramCode: 'string',
      paramName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $tea.Model {
  buId?: number;
  code?: string;
  createTime?: string;
  description?: string;
  roleGroupId?: number;
  roleGroupName?: string;
  roleId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      code: 'Code',
      createTime: 'CreateTime',
      description: 'Description',
      roleGroupId: 'RoleGroupId',
      roleGroupName: 'RoleGroupName',
      roleId: 'RoleId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      code: 'string',
      createTime: 'string',
      description: 'string',
      roleGroupId: 'number',
      roleGroupName: 'string',
      roleId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponseBodyData extends $tea.Model {
  channelType?: number;
  description?: string;
  displayName?: string;
  name?: string;
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      skillGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyDataRecord extends $tea.Model {
  completeCount?: number;
  fireTime?: string;
  gmtCreate?: string;
  id?: number;
  robotId?: number;
  robotName?: string;
  status?: string;
  taskName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      completeCount: 'CompleteCount',
      fireTime: 'FireTime',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      robotId: 'RobotId',
      robotName: 'RobotName',
      status: 'Status',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeCount: 'number',
      fireTime: 'string',
      gmtCreate: 'string',
      id: 'number',
      robotId: 'number',
      robotName: 'string',
      status: 'string',
      taskName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  record?: ListTaskResponseBodyDataRecord[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      record: 'Record',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      record: { 'type': 'array', 'itemType': ListTaskResponseBodyDataRecord },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponseBodyDataRecord extends $tea.Model {
  called?: string;
  caller?: string;
  direction?: string;
  duration?: number;
  endTime?: string;
  id?: number;
  retryCurTimes?: number;
  retryTimes?: number;
  startTime?: string;
  status?: string;
  statusCode?: string;
  statusCodeDesc?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      caller: 'Caller',
      direction: 'Direction',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      retryCurTimes: 'RetryCurTimes',
      retryTimes: 'RetryTimes',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      statusCodeDesc: 'StatusCodeDesc',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      caller: 'string',
      direction: 'string',
      duration: 'number',
      endTime: 'string',
      id: 'number',
      retryCurTimes: 'number',
      retryTimes: 'number',
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      statusCodeDesc: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  record?: ListTaskDetailResponseBodyDataRecord[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      record: 'Record',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      record: { 'type': 'array', 'itemType': ListTaskDetailResponseBodyDataRecord },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallResponseBodyData extends $tea.Model {
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList extends $tea.Model {
  groupId?: number;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList extends $tea.Model {
  departmentId?: number;
  departmentName?: string;
  groupDOList?: QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      groupDOList: 'GroupDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
      groupDOList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyDataHotlineNumList extends $tea.Model {
  calloutAllDepartment?: boolean;
  calloutRangeList?: QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList[];
  description?: string;
  evaluationStatus?: number;
  flowId?: number;
  flowName?: string;
  hotlineNumber?: string;
  inBoundEnabled?: boolean;
  location?: string;
  outboundEnabled?: boolean;
  sp?: string;
  static names(): { [key: string]: string } {
    return {
      calloutAllDepartment: 'CalloutAllDepartment',
      calloutRangeList: 'CalloutRangeList',
      description: 'Description',
      evaluationStatus: 'EvaluationStatus',
      flowId: 'FlowId',
      flowName: 'FlowName',
      hotlineNumber: 'HotlineNumber',
      inBoundEnabled: 'InBoundEnabled',
      location: 'Location',
      outboundEnabled: 'OutboundEnabled',
      sp: 'Sp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calloutAllDepartment: 'boolean',
      calloutRangeList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList },
      description: 'string',
      evaluationStatus: 'number',
      flowId: 'number',
      flowName: 'string',
      hotlineNumber: 'string',
      inBoundEnabled: 'boolean',
      location: 'string',
      outboundEnabled: 'boolean',
      sp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyData extends $tea.Model {
  currentPage?: number;
  hotlineNumList?: QueryHotlineNumberResponseBodyDataHotlineNumList[];
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hotlineNumList: 'HotlineNumList',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hotlineNumList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumList },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBodyDataList extends $tea.Model {
  buId?: number;
  callerNum?: string;
  creator?: string;
  departmentId?: number;
  description?: string;
  endDate?: string;
  endTime?: string;
  extAttrs?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupName?: string;
  id?: number;
  model?: number;
  modifier?: string;
  name?: string;
  retryInterval?: number;
  retryTime?: number;
  skillGroup?: number;
  startDate?: string;
  startTime?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      callerNum: 'CallerNum',
      creator: 'Creator',
      departmentId: 'DepartmentId',
      description: 'Description',
      endDate: 'EndDate',
      endTime: 'EndTime',
      extAttrs: 'ExtAttrs',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      id: 'Id',
      model: 'Model',
      modifier: 'Modifier',
      name: 'Name',
      retryInterval: 'RetryInterval',
      retryTime: 'RetryTime',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      callerNum: 'string',
      creator: 'string',
      departmentId: 'number',
      description: 'string',
      endDate: 'string',
      endTime: 'string',
      extAttrs: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      id: 'number',
      model: 'number',
      modifier: 'string',
      name: 'string',
      retryInterval: 'number',
      retryTime: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      status: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBodyData extends $tea.Model {
  currentPage?: string;
  list?: QueryOutboundTaskResponseBodyDataList[];
  pageSize?: string;
  totalResults?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      list: { 'type': 'array', 'itemType': QueryOutboundTaskResponseBodyDataList },
      pageSize: 'string',
      totalResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponseBodyData extends $tea.Model {
  channelType?: number;
  description?: string;
  displayName?: string;
  skillGroupId?: number;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      skillGroupId: 'number',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBodyDataList extends $tea.Model {
  ani?: string;
  buId?: number;
  departmentId?: number;
  dnis?: string;
  endReason?: number;
  extAttrs?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  memberId?: number;
  memberName?: string;
  outboundNum?: number;
  outboundTaskId?: number;
  priority?: number;
  retryTime?: string;
  servicerId?: number;
  servicerName?: string;
  skillGroup?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      buId: 'BuId',
      departmentId: 'DepartmentId',
      dnis: 'Dnis',
      endReason: 'EndReason',
      extAttrs: 'ExtAttrs',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      memberId: 'MemberId',
      memberName: 'MemberName',
      outboundNum: 'OutboundNum',
      outboundTaskId: 'OutboundTaskId',
      priority: 'Priority',
      retryTime: 'RetryTime',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      skillGroup: 'SkillGroup',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      buId: 'number',
      departmentId: 'number',
      dnis: 'string',
      endReason: 'number',
      extAttrs: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      memberId: 'number',
      memberName: 'string',
      outboundNum: 'number',
      outboundTaskId: 'number',
      priority: 'number',
      retryTime: 'string',
      servicerId: 'number',
      servicerName: 'string',
      skillGroup: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBodyData extends $tea.Model {
  currentPage?: string;
  list?: QueryTaskDetailResponseBodyDataList[];
  pageSize?: string;
  totalResults?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      list: { 'type': 'array', 'itemType': QueryTaskDetailResponseBodyDataList },
      pageSize: 'string',
      totalResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultDataDataExtAttrs extends $tea.Model {
  ani?: string;
  dnis?: string;
  evaluationLevel?: number;
  evaluationScore?: number;
  evaluationSolution?: number;
  evaluationStatus?: number;
  onlineJoinRespInterval?: number;
  onlineSessionSource?: number;
  outCallRouteNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      dnis: 'Dnis',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      evaluationSolution: 'EvaluationSolution',
      evaluationStatus: 'EvaluationStatus',
      onlineJoinRespInterval: 'OnlineJoinRespInterval',
      onlineSessionSource: 'OnlineSessionSource',
      outCallRouteNumber: 'OutCallRouteNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      dnis: 'string',
      evaluationLevel: 'number',
      evaluationScore: 'number',
      evaluationSolution: 'number',
      evaluationStatus: 'number',
      onlineJoinRespInterval: 'number',
      onlineSessionSource: 'number',
      outCallRouteNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultDataData extends $tea.Model {
  buId?: number;
  channelId?: string;
  channelType?: number;
  closeTime?: number;
  commonQueueName?: string;
  depId?: number;
  extAttrs?: QueryTouchListResponseBodyResultDataDataExtAttrs;
  extAttrsString?: { [key: string]: any };
  feedback?: string;
  firstTime?: number;
  fromId?: number;
  gmtCreate?: number;
  gmtModified?: number;
  memberId?: number;
  memberName?: string;
  parentTouchId?: number;
  queueId?: number;
  servicerId?: number;
  servicerName?: string;
  status?: number;
  switchUser?: string;
  toId?: number;
  touchContent?: string;
  touchEndReason?: number;
  touchId?: string;
  touchTime?: string;
  touchType?: number;
  userTouchId?: number;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      closeTime: 'CloseTime',
      commonQueueName: 'CommonQueueName',
      depId: 'DepId',
      extAttrs: 'ExtAttrs',
      extAttrsString: 'ExtAttrsString',
      feedback: 'Feedback',
      firstTime: 'FirstTime',
      fromId: 'FromId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      memberId: 'MemberId',
      memberName: 'MemberName',
      parentTouchId: 'ParentTouchId',
      queueId: 'QueueId',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      status: 'Status',
      switchUser: 'SwitchUser',
      toId: 'ToId',
      touchContent: 'TouchContent',
      touchEndReason: 'TouchEndReason',
      touchId: 'TouchId',
      touchTime: 'TouchTime',
      touchType: 'TouchType',
      userTouchId: 'UserTouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      channelId: 'string',
      channelType: 'number',
      closeTime: 'number',
      commonQueueName: 'string',
      depId: 'number',
      extAttrs: QueryTouchListResponseBodyResultDataDataExtAttrs,
      extAttrsString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      feedback: 'string',
      firstTime: 'number',
      fromId: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      memberId: 'number',
      memberName: 'string',
      parentTouchId: 'number',
      queueId: 'number',
      servicerId: 'number',
      servicerName: 'string',
      status: 'number',
      switchUser: 'string',
      toId: 'number',
      touchContent: 'string',
      touchEndReason: 'number',
      touchId: 'string',
      touchTime: 'string',
      touchType: 'number',
      userTouchId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultData extends $tea.Model {
  currentPage?: number;
  data?: QueryTouchListResponseBodyResultDataData[];
  empty?: boolean;
  nextPage?: number;
  onePageSize?: number;
  previousPage?: number;
  totalPage?: number;
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      empty: 'Empty',
      nextPage: 'NextPage',
      onePageSize: 'OnePageSize',
      previousPage: 'PreviousPage',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QueryTouchListResponseBodyResultDataData },
      empty: 'boolean',
      nextPage: 'number',
      onePageSize: 'number',
      previousPage: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupResponseBodyData extends $tea.Model {
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberRequestOutboundRangeList extends $tea.Model {
  departmentId?: number;
  groupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      groupIdList: 'GroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskRequestRecallRule extends $tea.Model {
  count?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
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
    this._endpoint = this.getEndpoint("aiccs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addHotlineNumberWithOptions(tmpReq: AddHotlineNumberRequest, runtime: $Util.RuntimeOptions): Promise<AddHotlineNumberResponse> {
    Util.validateModel(tmpReq);
    let request = new AddHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.outboundRangeList)) {
      request.outboundRangeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundRangeList, "OutboundRangeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableInbound)) {
      body["EnableInbound"] = request.enableInbound;
    }

    if (!Util.isUnset(request.enableInboundEvaluation)) {
      body["EnableInboundEvaluation"] = request.enableInboundEvaluation;
    }

    if (!Util.isUnset(request.enableOutbound)) {
      body["EnableOutbound"] = request.enableOutbound;
    }

    if (!Util.isUnset(request.enableOutboundEvaluation)) {
      body["EnableOutboundEvaluation"] = request.enableOutboundEvaluation;
    }

    if (!Util.isUnset(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!Util.isUnset(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!Util.isUnset(request.inboundFlowId)) {
      body["InboundFlowId"] = request.inboundFlowId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundAllDepart)) {
      body["OutboundAllDepart"] = request.outboundAllDepart;
    }

    if (!Util.isUnset(request.outboundRangeListShrink)) {
      body["OutboundRangeList"] = request.outboundRangeListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddHotlineNumberResponse>(await this.callApi(params, req, runtime), new AddHotlineNumberResponse({}));
  }

  async addHotlineNumber(request: AddHotlineNumberRequest): Promise<AddHotlineNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addHotlineNumberWithOptions(request, runtime);
  }

  async addOuterAccountWithOptions(request: AddOuterAccountRequest, runtime: $Util.RuntimeOptions): Promise<AddOuterAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddOuterAccountResponse>(await this.callApi(params, req, runtime), new AddOuterAccountResponse({}));
  }

  async addOuterAccount(request: AddOuterAccountRequest): Promise<AddOuterAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addOuterAccountWithOptions(request, runtime);
  }

  async addSkillGroupWithOptions(request: AddSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddSkillGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSkillGroupResponse>(await this.callApi(params, req, runtime), new AddSkillGroupResponse({}));
  }

  async addSkillGroup(request: AddSkillGroupRequest): Promise<AddSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSkillGroupWithOptions(request, runtime);
  }

  async aiccsSmartCallWithOptions(request: AiccsSmartCallRequest, runtime: $Util.RuntimeOptions): Promise<AiccsSmartCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionCodeBreak)) {
      query["ActionCodeBreak"] = request.actionCodeBreak;
    }

    if (!Util.isUnset(request.actionCodeTimeBreak)) {
      query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    }

    if (!Util.isUnset(request.asrAlsAmId)) {
      query["AsrAlsAmId"] = request.asrAlsAmId;
    }

    if (!Util.isUnset(request.asrBaseId)) {
      query["AsrBaseId"] = request.asrBaseId;
    }

    if (!Util.isUnset(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!Util.isUnset(request.asrVocabularyId)) {
      query["AsrVocabularyId"] = request.asrVocabularyId;
    }

    if (!Util.isUnset(request.backgroundFileCode)) {
      query["BackgroundFileCode"] = request.backgroundFileCode;
    }

    if (!Util.isUnset(request.backgroundSpeed)) {
      query["BackgroundSpeed"] = request.backgroundSpeed;
    }

    if (!Util.isUnset(request.backgroundVolume)) {
      query["BackgroundVolume"] = request.backgroundVolume;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.dynamicId)) {
      query["DynamicId"] = request.dynamicId;
    }

    if (!Util.isUnset(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!Util.isUnset(request.enableITN)) {
      query["EnableITN"] = request.enableITN;
    }

    if (!Util.isUnset(request.muteTime)) {
      query["MuteTime"] = request.muteTime;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pauseTime)) {
      query["PauseTime"] = request.pauseTime;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.ttsConf)) {
      query["TtsConf"] = request.ttsConf;
    }

    if (!Util.isUnset(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!Util.isUnset(request.ttsStyle)) {
      query["TtsStyle"] = request.ttsStyle;
    }

    if (!Util.isUnset(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.voiceCodeParam)) {
      query["VoiceCodeParam"] = request.voiceCodeParam;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AiccsSmartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AiccsSmartCallResponse>(await this.callApi(params, req, runtime), new AiccsSmartCallResponse({}));
  }

  async aiccsSmartCall(request: AiccsSmartCallRequest): Promise<AiccsSmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aiccsSmartCallWithOptions(request, runtime);
  }

  async aiccsSmartCallOperateWithOptions(request: AiccsSmartCallOperateRequest, runtime: $Util.RuntimeOptions): Promise<AiccsSmartCallOperateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.param)) {
      query["Param"] = request.param;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AiccsSmartCallOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AiccsSmartCallOperateResponse>(await this.callApi(params, req, runtime), new AiccsSmartCallOperateResponse({}));
  }

  async aiccsSmartCallOperate(request: AiccsSmartCallOperateRequest): Promise<AiccsSmartCallOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aiccsSmartCallOperateWithOptions(request, runtime);
  }

  async answerCallWithOptions(request: AnswerCallRequest, runtime: $Util.RuntimeOptions): Promise<AnswerCallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AnswerCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AnswerCallResponse>(await this.callApi(params, req, runtime), new AnswerCallResponse({}));
  }

  async answerCall(request: AnswerCallRequest): Promise<AnswerCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  async attachTaskWithOptions(request: AttachTaskRequest, runtime: $Util.RuntimeOptions): Promise<AttachTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callString)) {
      query["CallString"] = request.callString;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachTaskResponse>(await this.callApi(params, req, runtime), new AttachTaskResponse({}));
  }

  async attachTask(request: AttachTaskRequest): Promise<AttachTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachTaskWithOptions(request, runtime);
  }

  async batchCreateQualityProjectsWithOptions(request: BatchCreateQualityProjectsRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateQualityProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.analysisIds)) {
      query["AnalysisIds"] = request.analysisIds;
    }

    if (!Util.isUnset(request.channelTouchType)) {
      query["ChannelTouchType"] = request.channelTouchType;
    }

    if (!Util.isUnset(request.checkFreqType)) {
      query["CheckFreqType"] = request.checkFreqType;
    }

    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!Util.isUnset(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateQualityProjects",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateQualityProjectsResponse>(await this.callApi(params, req, runtime), new BatchCreateQualityProjectsResponse({}));
  }

  async batchCreateQualityProjects(request: BatchCreateQualityProjectsRequest): Promise<BatchCreateQualityProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateQualityProjectsWithOptions(request, runtime);
  }

  async cancelTaskWithOptions(request: CancelTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelTaskResponse>(await this.callApi(params, req, runtime), new CancelTaskResponse({}));
  }

  async cancelTask(request: CancelTaskRequest): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  async changeChatAgentStatusWithOptions(request: ChangeChatAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeChatAgentStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.method)) {
      body["Method"] = request.method;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeChatAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeChatAgentStatusResponse>(await this.callApi(params, req, runtime), new ChangeChatAgentStatusResponse({}));
  }

  async changeChatAgentStatus(request: ChangeChatAgentStatusRequest): Promise<ChangeChatAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeChatAgentStatusWithOptions(request, runtime);
  }

  async changeQualityProjectStatusWithOptions(request: ChangeQualityProjectStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeQualityProjectStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeQualityProjectStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeQualityProjectStatusResponse>(await this.callApi(params, req, runtime), new ChangeQualityProjectStatusResponse({}));
  }

  async changeQualityProjectStatus(request: ChangeQualityProjectStatusRequest): Promise<ChangeQualityProjectStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeQualityProjectStatusWithOptions(request, runtime);
  }

  async createAgentWithOptions(request: CreateAgentRequest, runtime: $Util.RuntimeOptions): Promise<CreateAgentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.skillGroupId)) {
      bodyFlat["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.skillGroupIdList)) {
      bodyFlat["SkillGroupIdList"] = request.skillGroupIdList;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAgentResponse>(await this.callApi(params, req, runtime), new CreateAgentResponse({}));
  }

  async createAgent(request: CreateAgentRequest): Promise<CreateAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  async createAiOutboundTaskWithOptions(tmpReq: CreateAiOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAiOutboundTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAiOutboundTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.outboundNums)) {
      request.outboundNumsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundNums, "OutboundNums", "json");
    }

    if (!Util.isUnset(tmpReq.recallRule)) {
      request.recallRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recallRule, "RecallRule", "json");
    }

    let query = { };
    if (!Util.isUnset(request.concurrentRate)) {
      query["ConcurrentRate"] = request.concurrentRate;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionTime)) {
      query["ExecutionTime"] = request.executionTime;
    }

    if (!Util.isUnset(request.forecastCallRate)) {
      query["ForecastCallRate"] = request.forecastCallRate;
    }

    if (!Util.isUnset(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.numRepeated)) {
      query["NumRepeated"] = request.numRepeated;
    }

    if (!Util.isUnset(request.outboundNumsShrink)) {
      query["OutboundNums"] = request.outboundNumsShrink;
    }

    if (!Util.isUnset(request.recallRuleShrink)) {
      query["RecallRule"] = request.recallRuleShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new CreateAiOutboundTaskResponse({}));
  }

  async createAiOutboundTask(request: CreateAiOutboundTaskRequest): Promise<CreateAiOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAiOutboundTaskWithOptions(request, runtime);
  }

  async createAiOutboundTaskBatchWithOptions(request: CreateAiOutboundTaskBatchRequest, runtime: $Util.RuntimeOptions): Promise<CreateAiOutboundTaskBatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAiOutboundTaskBatch",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAiOutboundTaskBatchResponse>(await this.callApi(params, req, runtime), new CreateAiOutboundTaskBatchResponse({}));
  }

  async createAiOutboundTaskBatch(request: CreateAiOutboundTaskBatchRequest): Promise<CreateAiOutboundTaskBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAiOutboundTaskBatchWithOptions(request, runtime);
  }

  async createDepartmentWithOptions(request: CreateDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDepartmentResponse>(await this.callApi(params, req, runtime), new CreateDepartmentResponse({}));
  }

  async createDepartment(request: CreateDepartmentRequest): Promise<CreateDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDepartmentWithOptions(request, runtime);
  }

  async createOutboundTaskWithOptions(request: CreateOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!Util.isUnset(request.callInfos)) {
      query["CallInfos"] = request.callInfos;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.extAttrs)) {
      query["ExtAttrs"] = request.extAttrs;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.model)) {
      query["Model"] = request.model;
    }

    if (!Util.isUnset(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!Util.isUnset(request.retryTime)) {
      query["RetryTime"] = request.retryTime;
    }

    if (!Util.isUnset(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOutboundTaskResponse>(await this.callApi(params, req, runtime), new CreateOutboundTaskResponse({}));
  }

  async createOutboundTask(request: CreateOutboundTaskRequest): Promise<CreateOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOutboundTaskWithOptions(request, runtime);
  }

  async createQualityProjectWithOptions(request: CreateQualityProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.analysisIds)) {
      body["AnalysisIds"] = request.analysisIds;
    }

    if (!Util.isUnset(request.channelTouchType)) {
      body["ChannelTouchType"] = request.channelTouchType;
    }

    if (!Util.isUnset(request.checkFreqType)) {
      body["CheckFreqType"] = request.checkFreqType;
    }

    if (!Util.isUnset(request.depList)) {
      body["DepList"] = request.depList;
    }

    if (!Util.isUnset(request.groupList)) {
      body["GroupList"] = request.groupList;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.scopeType)) {
      body["ScopeType"] = request.scopeType;
    }

    if (!Util.isUnset(request.servicerList)) {
      body["ServicerList"] = request.servicerList;
    }

    if (!Util.isUnset(request.timeRangeEnd)) {
      body["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!Util.isUnset(request.timeRangeStart)) {
      body["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQualityProjectResponse>(await this.callApi(params, req, runtime), new CreateQualityProjectResponse({}));
  }

  async createQualityProject(request: CreateQualityProjectRequest): Promise<CreateQualityProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityProjectWithOptions(request, runtime);
  }

  async createQualityRuleWithOptions(request: CreateQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyWords)) {
      body["KeyWords"] = request.keyWords;
    }

    if (!Util.isUnset(request.matchType)) {
      body["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ruleTag)) {
      body["RuleTag"] = request.ruleTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQualityRule",
      version: "2019-10-15",
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

  async createSkillGroupWithOptions(request: CreateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.departmentId)) {
      body["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupName)) {
      body["SkillGroupName"] = request.skillGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSkillGroupResponse>(await this.callApi(params, req, runtime), new CreateSkillGroupResponse({}));
  }

  async createSkillGroup(request: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  async createTaskWithOptions(request: CreateTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callString)) {
      query["CallString"] = request.callString;
    }

    if (!Util.isUnset(request.callStringType)) {
      query["CallStringType"] = request.callStringType;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.retryCount)) {
      query["RetryCount"] = request.retryCount;
    }

    if (!Util.isUnset(request.retryFlag)) {
      query["RetryFlag"] = request.retryFlag;
    }

    if (!Util.isUnset(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!Util.isUnset(request.retryStatusCode)) {
      query["RetryStatusCode"] = request.retryStatusCode;
    }

    if (!Util.isUnset(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    if (!Util.isUnset(request.seatCount)) {
      query["SeatCount"] = request.seatCount;
    }

    if (!Util.isUnset(request.startNow)) {
      query["StartNow"] = request.startNow;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.workDay)) {
      query["WorkDay"] = request.workDay;
    }

    if (!Util.isUnset(request.workTimeList)) {
      query["WorkTimeList"] = request.workTimeList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskWithOptions(request, runtime);
  }

  async createThirdSsoAgentWithOptions(request: CreateThirdSsoAgentRequest, runtime: $Util.RuntimeOptions): Promise<CreateThirdSsoAgentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleIds)) {
      bodyFlat["RoleIds"] = request.roleIds;
    }

    if (!Util.isUnset(request.skillGroupIds)) {
      bodyFlat["SkillGroupIds"] = request.skillGroupIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateThirdSsoAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateThirdSsoAgentResponse>(await this.callApi(params, req, runtime), new CreateThirdSsoAgentResponse({}));
  }

  async createThirdSsoAgent(request: CreateThirdSsoAgentRequest): Promise<CreateThirdSsoAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createThirdSsoAgentWithOptions(request, runtime);
  }

  async deleteAgentWithOptions(request: DeleteAgentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAgentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "DELETE",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAgentResponse>(await this.callApi(params, req, runtime), new DeleteAgentResponse({}));
  }

  async deleteAgent(request: DeleteAgentRequest): Promise<DeleteAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  async deleteAiOutboundTaskWithOptions(request: DeleteAiOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAiOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new DeleteAiOutboundTaskResponse({}));
  }

  async deleteAiOutboundTask(request: DeleteAiOutboundTaskRequest): Promise<DeleteAiOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAiOutboundTaskWithOptions(request, runtime);
  }

  async deleteDepartmentWithOptions(request: DeleteDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDepartmentResponse>(await this.callApi(params, req, runtime), new DeleteDepartmentResponse({}));
  }

  async deleteDepartment(request: DeleteDepartmentRequest): Promise<DeleteDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDepartmentWithOptions(request, runtime);
  }

  async deleteHotlineNumberWithOptions(request: DeleteHotlineNumberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHotlineNumberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHotlineNumberResponse>(await this.callApi(params, req, runtime), new DeleteHotlineNumberResponse({}));
  }

  async deleteHotlineNumber(request: DeleteHotlineNumberRequest): Promise<DeleteHotlineNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHotlineNumberWithOptions(request, runtime);
  }

  async deleteOutboundTaskWithOptions(request: DeleteOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteOutboundTaskResponse>(await this.callApi(params, req, runtime), new DeleteOutboundTaskResponse({}));
  }

  async deleteOutboundTask(request: DeleteOutboundTaskRequest): Promise<DeleteOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOutboundTaskWithOptions(request, runtime);
  }

  async deleteOuterAccountWithOptions(request: DeleteOuterAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOuterAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteOuterAccountResponse>(await this.callApi(params, req, runtime), new DeleteOuterAccountResponse({}));
  }

  async deleteOuterAccount(request: DeleteOuterAccountRequest): Promise<DeleteOuterAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOuterAccountWithOptions(request, runtime);
  }

  async deleteQualityProjectWithOptions(request: DeleteQualityProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQualityProjectResponse>(await this.callApi(params, req, runtime), new DeleteQualityProjectResponse({}));
  }

  async deleteQualityProject(request: DeleteQualityProjectRequest): Promise<DeleteQualityProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityProjectWithOptions(request, runtime);
  }

  async deleteQualityRuleWithOptions(request: DeleteQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQualityRule",
      version: "2019-10-15",
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

  async deleteSkillGroupWithOptions(request: DeleteSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSkillGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSkillGroupResponse>(await this.callApi(params, req, runtime), new DeleteSkillGroupResponse({}));
  }

  async deleteSkillGroup(request: DeleteSkillGroupRequest): Promise<DeleteSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  async describeRecordDataWithOptions(request: DescribeRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secLevel)) {
      query["SecLevel"] = request.secLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecordData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordDataResponse>(await this.callApi(params, req, runtime), new DescribeRecordDataResponse({}));
  }

  async describeRecordData(request: DescribeRecordDataRequest): Promise<DescribeRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordDataWithOptions(request, runtime);
  }

  async editQualityProjectWithOptions(request: EditQualityProjectRequest, runtime: $Util.RuntimeOptions): Promise<EditQualityProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.analysisIds)) {
      query["AnalysisIds"] = request.analysisIds;
    }

    if (!Util.isUnset(request.channelTouchType)) {
      query["ChannelTouchType"] = request.channelTouchType;
    }

    if (!Util.isUnset(request.checkFreqType)) {
      query["CheckFreqType"] = request.checkFreqType;
    }

    if (!Util.isUnset(request.depList)) {
      query["DepList"] = request.depList;
    }

    if (!Util.isUnset(request.groupList)) {
      query["GroupList"] = request.groupList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectVersion)) {
      query["ProjectVersion"] = request.projectVersion;
    }

    if (!Util.isUnset(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    if (!Util.isUnset(request.servicerList)) {
      query["ServicerList"] = request.servicerList;
    }

    if (!Util.isUnset(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!Util.isUnset(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EditQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditQualityProjectResponse>(await this.callApi(params, req, runtime), new EditQualityProjectResponse({}));
  }

  async editQualityProject(request: EditQualityProjectRequest): Promise<EditQualityProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editQualityProjectWithOptions(request, runtime);
  }

  async editQualityRuleWithOptions(request: EditQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<EditQualityRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyWords)) {
      body["KeyWords"] = request.keyWords;
    }

    if (!Util.isUnset(request.matchType)) {
      body["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.qualityRuleId)) {
      body["QualityRuleId"] = request.qualityRuleId;
    }

    if (!Util.isUnset(request.ruleTag)) {
      body["RuleTag"] = request.ruleTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EditQualityRule",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditQualityRuleResponse>(await this.callApi(params, req, runtime), new EditQualityRuleResponse({}));
  }

  async editQualityRule(request: EditQualityRuleRequest): Promise<EditQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editQualityRuleWithOptions(request, runtime);
  }

  async editQualityRuleTagWithOptions(request: EditQualityRuleTagRequest, runtime: $Util.RuntimeOptions): Promise<EditQualityRuleTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.analysisTypes)) {
      query["AnalysisTypes"] = request.analysisTypes;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditQualityRuleTag",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditQualityRuleTagResponse>(await this.callApi(params, req, runtime), new EditQualityRuleTagResponse({}));
  }

  async editQualityRuleTag(request: EditQualityRuleTagRequest): Promise<EditQualityRuleTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editQualityRuleTagWithOptions(request, runtime);
  }

  async encryptPhoneNumWithOptions(request: EncryptPhoneNumRequest, runtime: $Util.RuntimeOptions): Promise<EncryptPhoneNumResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EncryptPhoneNum",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EncryptPhoneNumResponse>(await this.callApi(params, req, runtime), new EncryptPhoneNumResponse({}));
  }

  async encryptPhoneNum(request: EncryptPhoneNumRequest): Promise<EncryptPhoneNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptPhoneNumWithOptions(request, runtime);
  }

  async fetchCallWithOptions(request: FetchCallRequest, runtime: $Util.RuntimeOptions): Promise<FetchCallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FetchCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FetchCallResponse>(await this.callApi(params, req, runtime), new FetchCallResponse({}));
  }

  async fetchCall(request: FetchCallRequest): Promise<FetchCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchCallWithOptions(request, runtime);
  }

  async finishHotlineServiceWithOptions(request: FinishHotlineServiceRequest, runtime: $Util.RuntimeOptions): Promise<FinishHotlineServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FinishHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FinishHotlineServiceResponse>(await this.callApi(params, req, runtime), new FinishHotlineServiceResponse({}));
  }

  async finishHotlineService(request: FinishHotlineServiceRequest): Promise<FinishHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.finishHotlineServiceWithOptions(request, runtime);
  }

  async generateWebSocketSignWithOptions(request: GenerateWebSocketSignRequest, runtime: $Util.RuntimeOptions): Promise<GenerateWebSocketSignResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateWebSocketSign",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateWebSocketSignResponse>(await this.callApi(params, req, runtime), new GenerateWebSocketSignResponse({}));
  }

  async generateWebSocketSign(request: GenerateWebSocketSignRequest): Promise<GenerateWebSocketSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateWebSocketSignWithOptions(request, runtime);
  }

  async getAgentWithOptions(request: GetAgentRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentResponse>(await this.callApi(params, req, runtime), new GetAgentResponse({}));
  }

  async getAgent(request: GetAgentRequest): Promise<GetAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  async getAgentBasisStatusWithOptions(tmpReq: GetAgentBasisStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentBasisStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAgentBasisStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentBasisStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentBasisStatusResponse>(await this.callApi(params, req, runtime), new GetAgentBasisStatusResponse({}));
  }

  async getAgentBasisStatus(request: GetAgentBasisStatusRequest): Promise<GetAgentBasisStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentBasisStatusWithOptions(request, runtime);
  }

  async getAgentByIdWithOptions(request: GetAgentByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentId)) {
      body["AgentId"] = request.agentId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentById",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentByIdResponse>(await this.callApi(params, req, runtime), new GetAgentByIdResponse({}));
  }

  async getAgentById(request: GetAgentByIdRequest): Promise<GetAgentByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentByIdWithOptions(request, runtime);
  }

  async getAgentDetailReportWithOptions(tmpReq: GetAgentDetailReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentDetailReportResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAgentDetailReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentDetailReportResponse>(await this.callApi(params, req, runtime), new GetAgentDetailReportResponse({}));
  }

  async getAgentDetailReport(request: GetAgentDetailReportRequest): Promise<GetAgentDetailReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentDetailReportWithOptions(request, runtime);
  }

  async getAgentIndexRealTimeWithOptions(request: GetAgentIndexRealTimeRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentIndexRealTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentIndexRealTime",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentIndexRealTimeResponse>(await this.callApi(params, req, runtime), new GetAgentIndexRealTimeResponse({}));
  }

  async getAgentIndexRealTime(request: GetAgentIndexRealTimeRequest): Promise<GetAgentIndexRealTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentIndexRealTimeWithOptions(request, runtime);
  }

  async getAgentServiceStatusWithOptions(tmpReq: GetAgentServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentServiceStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAgentServiceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentServiceStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentServiceStatusResponse>(await this.callApi(params, req, runtime), new GetAgentServiceStatusResponse({}));
  }

  async getAgentServiceStatus(request: GetAgentServiceStatusRequest): Promise<GetAgentServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentServiceStatusWithOptions(request, runtime);
  }

  async getAgentStatisticsWithOptions(tmpReq: GetAgentStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAgentStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentStatistics",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentStatisticsResponse>(await this.callApi(params, req, runtime), new GetAgentStatisticsResponse({}));
  }

  async getAgentStatistics(request: GetAgentStatisticsRequest): Promise<GetAgentStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentStatisticsWithOptions(request, runtime);
  }

  async getAiOutboundTaskBizDataWithOptions(request: GetAiOutboundTaskBizDataRequest, runtime: $Util.RuntimeOptions): Promise<GetAiOutboundTaskBizDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAiOutboundTaskBizData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiOutboundTaskBizDataResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskBizDataResponse({}));
  }

  async getAiOutboundTaskBizData(request: GetAiOutboundTaskBizDataRequest): Promise<GetAiOutboundTaskBizDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiOutboundTaskBizDataWithOptions(request, runtime);
  }

  async getAiOutboundTaskDetailWithOptions(request: GetAiOutboundTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetAiOutboundTaskDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAiOutboundTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiOutboundTaskDetailResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskDetailResponse({}));
  }

  async getAiOutboundTaskDetail(request: GetAiOutboundTaskDetailRequest): Promise<GetAiOutboundTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiOutboundTaskDetailWithOptions(request, runtime);
  }

  async getAiOutboundTaskExecDetailWithOptions(request: GetAiOutboundTaskExecDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetAiOutboundTaskExecDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAiOutboundTaskExecDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiOutboundTaskExecDetailResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskExecDetailResponse({}));
  }

  async getAiOutboundTaskExecDetail(request: GetAiOutboundTaskExecDetailRequest): Promise<GetAiOutboundTaskExecDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiOutboundTaskExecDetailWithOptions(request, runtime);
  }

  async getAiOutboundTaskListWithOptions(request: GetAiOutboundTaskListRequest, runtime: $Util.RuntimeOptions): Promise<GetAiOutboundTaskListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAiOutboundTaskList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiOutboundTaskListResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskListResponse({}));
  }

  async getAiOutboundTaskList(request: GetAiOutboundTaskListRequest): Promise<GetAiOutboundTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiOutboundTaskListWithOptions(request, runtime);
  }

  async getAiOutboundTaskProgressWithOptions(request: GetAiOutboundTaskProgressRequest, runtime: $Util.RuntimeOptions): Promise<GetAiOutboundTaskProgressResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAiOutboundTaskProgress",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiOutboundTaskProgressResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskProgressResponse({}));
  }

  async getAiOutboundTaskProgress(request: GetAiOutboundTaskProgressRequest): Promise<GetAiOutboundTaskProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiOutboundTaskProgressWithOptions(request, runtime);
  }

  async getAllDepartmentWithOptions(request: GetAllDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<GetAllDepartmentResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAllDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAllDepartmentResponse>(await this.callApi(params, req, runtime), new GetAllDepartmentResponse({}));
  }

  async getAllDepartment(request: GetAllDepartmentRequest): Promise<GetAllDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllDepartmentWithOptions(request, runtime);
  }

  async getCallSoundRecordWithOptions(request: GetCallSoundRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetCallSoundRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCallSoundRecord",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCallSoundRecordResponse>(await this.callApi(params, req, runtime), new GetCallSoundRecordResponse({}));
  }

  async getCallSoundRecord(request: GetCallSoundRecordRequest): Promise<GetCallSoundRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallSoundRecordWithOptions(request, runtime);
  }

  async getConfigNumListWithOptions(request: GetConfigNumListRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigNumListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConfigNumList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigNumListResponse>(await this.callApi(params, req, runtime), new GetConfigNumListResponse({}));
  }

  async getConfigNumList(request: GetConfigNumListRequest): Promise<GetConfigNumListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigNumListWithOptions(request, runtime);
  }

  async getCustomerInfoWithOptions(request: GetCustomerInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomerInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomerInfo",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomerInfoResponse>(await this.callApi(params, req, runtime), new GetCustomerInfoResponse({}));
  }

  async getCustomerInfo(request: GetCustomerInfoRequest): Promise<GetCustomerInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerInfoWithOptions(request, runtime);
  }

  async getDepGroupTreeDataWithOptions(request: GetDepGroupTreeDataRequest, runtime: $Util.RuntimeOptions): Promise<GetDepGroupTreeDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDepGroupTreeData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDepGroupTreeDataResponse>(await this.callApi(params, req, runtime), new GetDepGroupTreeDataResponse({}));
  }

  async getDepGroupTreeData(request: GetDepGroupTreeDataRequest): Promise<GetDepGroupTreeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDepGroupTreeDataWithOptions(request, runtime);
  }

  async getDepartmentalLatitudeAgentStatusWithOptions(tmpReq: GetDepartmentalLatitudeAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDepartmentalLatitudeAgentStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDepartmentalLatitudeAgentStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDepartmentalLatitudeAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDepartmentalLatitudeAgentStatusResponse>(await this.callApi(params, req, runtime), new GetDepartmentalLatitudeAgentStatusResponse({}));
  }

  async getDepartmentalLatitudeAgentStatus(request: GetDepartmentalLatitudeAgentStatusRequest): Promise<GetDepartmentalLatitudeAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDepartmentalLatitudeAgentStatusWithOptions(request, runtime);
  }

  async getHotlineAgentDetailWithOptions(request: GetHotlineAgentDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineAgentDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineAgentDetailResponse>(await this.callApi(params, req, runtime), new GetHotlineAgentDetailResponse({}));
  }

  async getHotlineAgentDetail(request: GetHotlineAgentDetailRequest): Promise<GetHotlineAgentDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentDetailWithOptions(request, runtime);
  }

  async getHotlineAgentDetailReportWithOptions(request: GetHotlineAgentDetailReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentDetailReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineAgentDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineAgentDetailReportResponse>(await this.callApi(params, req, runtime), new GetHotlineAgentDetailReportResponse({}));
  }

  async getHotlineAgentDetailReport(request: GetHotlineAgentDetailReportRequest): Promise<GetHotlineAgentDetailReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentDetailReportWithOptions(request, runtime);
  }

  async getHotlineAgentStatusWithOptions(request: GetHotlineAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineAgentStatusResponse>(await this.callApi(params, req, runtime), new GetHotlineAgentStatusResponse({}));
  }

  async getHotlineAgentStatus(request: GetHotlineAgentStatusRequest): Promise<GetHotlineAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentStatusWithOptions(request, runtime);
  }

  async getHotlineCallActionWithOptions(request: GetHotlineCallActionRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineCallActionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acc)) {
      body["Acc"] = request.acc;
    }

    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.act)) {
      body["Act"] = request.act;
    }

    if (!Util.isUnset(request.biz)) {
      body["Biz"] = request.biz;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.fromSource)) {
      body["FromSource"] = request.fromSource;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineCallAction",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineCallActionResponse>(await this.callApi(params, req, runtime), new GetHotlineCallActionResponse({}));
  }

  async getHotlineCallAction(request: GetHotlineCallActionRequest): Promise<GetHotlineCallActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineCallActionWithOptions(request, runtime);
  }

  async getHotlineGroupDetailReportWithOptions(request: GetHotlineGroupDetailReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineGroupDetailReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineGroupDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineGroupDetailReportResponse>(await this.callApi(params, req, runtime), new GetHotlineGroupDetailReportResponse({}));
  }

  async getHotlineGroupDetailReport(request: GetHotlineGroupDetailReportRequest): Promise<GetHotlineGroupDetailReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineGroupDetailReportWithOptions(request, runtime);
  }

  async getHotlineMessageLogWithOptions(request: GetHotlineMessageLogRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineMessageLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineMessageLog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineMessageLogResponse>(await this.callApi(params, req, runtime), new GetHotlineMessageLogResponse({}));
  }

  async getHotlineMessageLog(request: GetHotlineMessageLogRequest): Promise<GetHotlineMessageLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineMessageLogWithOptions(request, runtime);
  }

  async getHotlineRuntimeInfoWithOptions(request: GetHotlineRuntimeInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineRuntimeInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineRuntimeInfo",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineRuntimeInfoResponse>(await this.callApi(params, req, runtime), new GetHotlineRuntimeInfoResponse({}));
  }

  async getHotlineRuntimeInfo(request: GetHotlineRuntimeInfoRequest): Promise<GetHotlineRuntimeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineRuntimeInfoWithOptions(request, runtime);
  }

  async getHotlineServiceStatisticsWithOptions(tmpReq: GetHotlineServiceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineServiceStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotlineServiceStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineServiceStatistics",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineServiceStatisticsResponse>(await this.callApi(params, req, runtime), new GetHotlineServiceStatisticsResponse({}));
  }

  async getHotlineServiceStatistics(request: GetHotlineServiceStatisticsRequest): Promise<GetHotlineServiceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineServiceStatisticsWithOptions(request, runtime);
  }

  async getHotlineWaitingNumberWithOptions(request: GetHotlineWaitingNumberRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineWaitingNumberResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineWaitingNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineWaitingNumberResponse>(await this.callApi(params, req, runtime), new GetHotlineWaitingNumberResponse({}));
  }

  async getHotlineWaitingNumber(request: GetHotlineWaitingNumberRequest): Promise<GetHotlineWaitingNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineWaitingNumberWithOptions(request, runtime);
  }

  async getIndexCurrentValueWithOptions(request: GetIndexCurrentValueRequest, runtime: $Util.RuntimeOptions): Promise<GetIndexCurrentValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIndexCurrentValue",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIndexCurrentValueResponse>(await this.callApi(params, req, runtime), new GetIndexCurrentValueResponse({}));
  }

  async getIndexCurrentValue(request: GetIndexCurrentValueRequest): Promise<GetIndexCurrentValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIndexCurrentValueWithOptions(request, runtime);
  }

  async getInstanceListWithOptions(request: GetInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceListResponse>(await this.callApi(params, req, runtime), new GetInstanceListResponse({}));
  }

  async getInstanceList(request: GetInstanceListRequest): Promise<GetInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceListWithOptions(request, runtime);
  }

  async getMcuLvsIpWithOptions(request: GetMcuLvsIpRequest, runtime: $Util.RuntimeOptions): Promise<GetMcuLvsIpResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMcuLvsIp",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMcuLvsIpResponse>(await this.callApi(params, req, runtime), new GetMcuLvsIpResponse({}));
  }

  async getMcuLvsIp(request: GetMcuLvsIpRequest): Promise<GetMcuLvsIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMcuLvsIpWithOptions(request, runtime);
  }

  async getNumLocationWithOptions(request: GetNumLocationRequest, runtime: $Util.RuntimeOptions): Promise<GetNumLocationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNumLocation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNumLocationResponse>(await this.callApi(params, req, runtime), new GetNumLocationResponse({}));
  }

  async getNumLocation(request: GetNumLocationRequest): Promise<GetNumLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNumLocationWithOptions(request, runtime);
  }

  async getOnlineSeatInformationWithOptions(tmpReq: GetOnlineSeatInformationRequest, runtime: $Util.RuntimeOptions): Promise<GetOnlineSeatInformationResponse> {
    Util.validateModel(tmpReq);
    let request = new GetOnlineSeatInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOnlineSeatInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOnlineSeatInformationResponse>(await this.callApi(params, req, runtime), new GetOnlineSeatInformationResponse({}));
  }

  async getOnlineSeatInformation(request: GetOnlineSeatInformationRequest): Promise<GetOnlineSeatInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOnlineSeatInformationWithOptions(request, runtime);
  }

  async getOnlineServiceVolumeWithOptions(tmpReq: GetOnlineServiceVolumeRequest, runtime: $Util.RuntimeOptions): Promise<GetOnlineServiceVolumeResponse> {
    Util.validateModel(tmpReq);
    let request = new GetOnlineServiceVolumeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOnlineServiceVolume",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOnlineServiceVolumeResponse>(await this.callApi(params, req, runtime), new GetOnlineServiceVolumeResponse({}));
  }

  async getOnlineServiceVolume(request: GetOnlineServiceVolumeRequest): Promise<GetOnlineServiceVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOnlineServiceVolumeWithOptions(request, runtime);
  }

  async getOutbounNumListWithOptions(request: GetOutbounNumListRequest, runtime: $Util.RuntimeOptions): Promise<GetOutbounNumListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOutbounNumList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOutbounNumListResponse>(await this.callApi(params, req, runtime), new GetOutbounNumListResponse({}));
  }

  async getOutbounNumList(request: GetOutbounNumListRequest): Promise<GetOutbounNumListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOutbounNumListWithOptions(request, runtime);
  }

  async getQualityProjectDetailWithOptions(request: GetQualityProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityProjectDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityProjectDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityProjectDetailResponse>(await this.callApi(params, req, runtime), new GetQualityProjectDetailResponse({}));
  }

  async getQualityProjectDetail(request: GetQualityProjectDetailRequest): Promise<GetQualityProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityProjectDetailWithOptions(request, runtime);
  }

  async getQualityProjectListWithOptions(request: GetQualityProjectListRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityProjectListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.checkFreqType)) {
      query["checkFreqType"] = request.checkFreqType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityProjectList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityProjectListResponse>(await this.callApi(params, req, runtime), new GetQualityProjectListResponse({}));
  }

  async getQualityProjectList(request: GetQualityProjectListRequest): Promise<GetQualityProjectListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityProjectListWithOptions(request, runtime);
  }

  async getQualityProjectLogWithOptions(request: GetQualityProjectLogRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityProjectLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityProjectLog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityProjectLogResponse>(await this.callApi(params, req, runtime), new GetQualityProjectLogResponse({}));
  }

  async getQualityProjectLog(request: GetQualityProjectLogRequest): Promise<GetQualityProjectLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityProjectLogWithOptions(request, runtime);
  }

  async getQualityResultWithOptions(request: GetQualityResultRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.hitStatus)) {
      query["HitStatus"] = request.hitStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectIds)) {
      query["ProjectIds"] = request.projectIds;
    }

    if (!Util.isUnset(request.qualityRuleIds)) {
      query["QualityRuleIds"] = request.qualityRuleIds;
    }

    if (!Util.isUnset(request.touchEndTime)) {
      query["TouchEndTime"] = request.touchEndTime;
    }

    if (!Util.isUnset(request.touchStartTime)) {
      query["TouchStartTime"] = request.touchStartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityResult",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityResultResponse>(await this.callApi(params, req, runtime), new GetQualityResultResponse({}));
  }

  async getQualityResult(request: GetQualityResultRequest): Promise<GetQualityResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityResultWithOptions(request, runtime);
  }

  async getQualityRuleDetailWithOptions(request: GetQualityRuleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.qualityRuleId)) {
      query["QualityRuleId"] = request.qualityRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityRuleDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityRuleDetailResponse>(await this.callApi(params, req, runtime), new GetQualityRuleDetailResponse({}));
  }

  async getQualityRuleDetail(request: GetQualityRuleDetailRequest): Promise<GetQualityRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleDetailWithOptions(request, runtime);
  }

  async getQualityRuleListWithOptions(request: GetQualityRuleListRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityRuleList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityRuleListResponse>(await this.callApi(params, req, runtime), new GetQualityRuleListResponse({}));
  }

  async getQualityRuleList(request: GetQualityRuleListRequest): Promise<GetQualityRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleListWithOptions(request, runtime);
  }

  async getQualityRuleTagListWithOptions(request: GetQualityRuleTagListRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleTagListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQualityRuleTagList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQualityRuleTagListResponse>(await this.callApi(params, req, runtime), new GetQualityRuleTagListResponse({}));
  }

  async getQualityRuleTagList(request: GetQualityRuleTagListRequest): Promise<GetQualityRuleTagListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleTagListWithOptions(request, runtime);
  }

  async getQueueInformationWithOptions(tmpReq: GetQueueInformationRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueInformationResponse> {
    Util.validateModel(tmpReq);
    let request = new GetQueueInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueueInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueueInformationResponse>(await this.callApi(params, req, runtime), new GetQueueInformationResponse({}));
  }

  async getQueueInformation(request: GetQueueInformationRequest): Promise<GetQueueInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueInformationWithOptions(request, runtime);
  }

  async getRecordDataWithOptions(request: GetRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRecordData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRecordDataResponse>(await this.callApi(params, req, runtime), new GetRecordDataResponse({}));
  }

  async getRecordData(request: GetRecordDataRequest): Promise<GetRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordDataWithOptions(request, runtime);
  }

  async getRecordUrlWithOptions(request: GetRecordUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRecordUrl",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRecordUrlResponse>(await this.callApi(params, req, runtime), new GetRecordUrlResponse({}));
  }

  async getRecordUrl(request: GetRecordUrlRequest): Promise<GetRecordUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordUrlWithOptions(request, runtime);
  }

  async getRtcTokenWithOptions(request: GetRtcTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetRtcTokenResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRtcToken",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRtcTokenResponse>(await this.callApi(params, req, runtime), new GetRtcTokenResponse({}));
  }

  async getRtcToken(request: GetRtcTokenRequest): Promise<GetRtcTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRtcTokenWithOptions(request, runtime);
  }

  async getSeatInformationWithOptions(tmpReq: GetSeatInformationRequest, runtime: $Util.RuntimeOptions): Promise<GetSeatInformationResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSeatInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "depIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSeatInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSeatInformationResponse>(await this.callApi(params, req, runtime), new GetSeatInformationResponse({}));
  }

  async getSeatInformation(request: GetSeatInformationRequest): Promise<GetSeatInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSeatInformationWithOptions(request, runtime);
  }

  async getSkillGroupAgentStatusDetailsWithOptions(tmpReq: GetSkillGroupAgentStatusDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupAgentStatusDetailsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupAgentStatusDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroupAgentStatusDetails",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupAgentStatusDetailsResponse>(await this.callApi(params, req, runtime), new GetSkillGroupAgentStatusDetailsResponse({}));
  }

  async getSkillGroupAgentStatusDetails(request: GetSkillGroupAgentStatusDetailsRequest): Promise<GetSkillGroupAgentStatusDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupAgentStatusDetailsWithOptions(request, runtime);
  }

  async getSkillGroupAndAgentStatusSummaryWithOptions(tmpReq: GetSkillGroupAndAgentStatusSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupAndAgentStatusSummaryResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupAndAgentStatusSummaryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroupAndAgentStatusSummary",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupAndAgentStatusSummaryResponse>(await this.callApi(params, req, runtime), new GetSkillGroupAndAgentStatusSummaryResponse({}));
  }

  async getSkillGroupAndAgentStatusSummary(request: GetSkillGroupAndAgentStatusSummaryRequest): Promise<GetSkillGroupAndAgentStatusSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupAndAgentStatusSummaryWithOptions(request, runtime);
  }

  async getSkillGroupLatitudeStateWithOptions(tmpReq: GetSkillGroupLatitudeStateRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupLatitudeStateResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupLatitudeStateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroupLatitudeState",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupLatitudeStateResponse>(await this.callApi(params, req, runtime), new GetSkillGroupLatitudeStateResponse({}));
  }

  async getSkillGroupLatitudeState(request: GetSkillGroupLatitudeStateRequest): Promise<GetSkillGroupLatitudeStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupLatitudeStateWithOptions(request, runtime);
  }

  async getSkillGroupServiceCapabilityWithOptions(tmpReq: GetSkillGroupServiceCapabilityRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupServiceCapabilityResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupServiceCapabilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroupServiceCapability",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupServiceCapabilityResponse>(await this.callApi(params, req, runtime), new GetSkillGroupServiceCapabilityResponse({}));
  }

  async getSkillGroupServiceCapability(request: GetSkillGroupServiceCapabilityRequest): Promise<GetSkillGroupServiceCapabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupServiceCapabilityWithOptions(request, runtime);
  }

  async getSkillGroupServiceStatusWithOptions(tmpReq: GetSkillGroupServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupServiceStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupServiceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroupServiceStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupServiceStatusResponse>(await this.callApi(params, req, runtime), new GetSkillGroupServiceStatusResponse({}));
  }

  async getSkillGroupServiceStatus(request: GetSkillGroupServiceStatusRequest): Promise<GetSkillGroupServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupServiceStatusWithOptions(request, runtime);
  }

  async getSkillGroupStatusTotalWithOptions(tmpReq: GetSkillGroupStatusTotalRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupStatusTotalResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupStatusTotalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroupStatusTotal",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupStatusTotalResponse>(await this.callApi(params, req, runtime), new GetSkillGroupStatusTotalResponse({}));
  }

  async getSkillGroupStatusTotal(request: GetSkillGroupStatusTotalRequest): Promise<GetSkillGroupStatusTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupStatusTotalWithOptions(request, runtime);
  }

  async hangUpDoubleCallWithOptions(request: HangUpDoubleCallRequest, runtime: $Util.RuntimeOptions): Promise<HangUpDoubleCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HangUpDoubleCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HangUpDoubleCallResponse>(await this.callApi(params, req, runtime), new HangUpDoubleCallResponse({}));
  }

  async hangUpDoubleCall(request: HangUpDoubleCallRequest): Promise<HangUpDoubleCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hangUpDoubleCallWithOptions(request, runtime);
  }

  async hangupCallWithOptions(request: HangupCallRequest, runtime: $Util.RuntimeOptions): Promise<HangupCallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "HangupCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HangupCallResponse>(await this.callApi(params, req, runtime), new HangupCallResponse({}));
  }

  async hangupCall(request: HangupCallRequest): Promise<HangupCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hangupCallWithOptions(request, runtime);
  }

  async hangupThirdCallWithOptions(request: HangupThirdCallRequest, runtime: $Util.RuntimeOptions): Promise<HangupThirdCallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "HangupThirdCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HangupThirdCallResponse>(await this.callApi(params, req, runtime), new HangupThirdCallResponse({}));
  }

  async hangupThirdCall(request: HangupThirdCallRequest): Promise<HangupThirdCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hangupThirdCallWithOptions(request, runtime);
  }

  async holdCallWithOptions(request: HoldCallRequest, runtime: $Util.RuntimeOptions): Promise<HoldCallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "HoldCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HoldCallResponse>(await this.callApi(params, req, runtime), new HoldCallResponse({}));
  }

  async holdCall(request: HoldCallRequest): Promise<HoldCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
  }

  async hotlineSessionQueryWithOptions(request: HotlineSessionQueryRequest, runtime: $Util.RuntimeOptions): Promise<HotlineSessionQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!Util.isUnset(request.acidList)) {
      query["AcidList"] = request.acidList;
    }

    if (!Util.isUnset(request.callResult)) {
      query["CallResult"] = request.callResult;
    }

    if (!Util.isUnset(request.callResultList)) {
      query["CallResultList"] = request.callResultList;
    }

    if (!Util.isUnset(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!Util.isUnset(request.callTypeList)) {
      query["CallTypeList"] = request.callTypeList;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledNumberList)) {
      query["CalledNumberList"] = request.calledNumberList;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.callingNumberList)) {
      query["CallingNumberList"] = request.callingNumberList;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupIdList)) {
      query["GroupIdList"] = request.groupIdList;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!Util.isUnset(request.memberIdList)) {
      query["MemberIdList"] = request.memberIdList;
    }

    if (!Util.isUnset(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.queryEndTime)) {
      query["QueryEndTime"] = request.queryEndTime;
    }

    if (!Util.isUnset(request.queryStartTime)) {
      query["QueryStartTime"] = request.queryStartTime;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.servicerId)) {
      query["ServicerId"] = request.servicerId;
    }

    if (!Util.isUnset(request.servicerIdList)) {
      query["ServicerIdList"] = request.servicerIdList;
    }

    if (!Util.isUnset(request.servicerName)) {
      query["ServicerName"] = request.servicerName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HotlineSessionQuery",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HotlineSessionQueryResponse>(await this.callApi(params, req, runtime), new HotlineSessionQueryResponse({}));
  }

  async hotlineSessionQuery(request: HotlineSessionQueryRequest): Promise<HotlineSessionQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hotlineSessionQueryWithOptions(request, runtime);
  }

  async insertAiOutboundPhoneNumsWithOptions(tmpReq: InsertAiOutboundPhoneNumsRequest, runtime: $Util.RuntimeOptions): Promise<InsertAiOutboundPhoneNumsResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertAiOutboundPhoneNumsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.details)) {
      request.detailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.details, "Details", "json");
    }

    let query = { };
    if (!Util.isUnset(request.batchVersion)) {
      query["BatchVersion"] = request.batchVersion;
    }

    if (!Util.isUnset(request.detailsShrink)) {
      query["Details"] = request.detailsShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertAiOutboundPhoneNums",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertAiOutboundPhoneNumsResponse>(await this.callApi(params, req, runtime), new InsertAiOutboundPhoneNumsResponse({}));
  }

  async insertAiOutboundPhoneNums(request: InsertAiOutboundPhoneNumsRequest): Promise<InsertAiOutboundPhoneNumsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertAiOutboundPhoneNumsWithOptions(request, runtime);
  }

  async insertTaskDetailWithOptions(request: InsertTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<InsertTaskDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callInfos)) {
      query["CallInfos"] = request.callInfos;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertTaskDetailResponse>(await this.callApi(params, req, runtime), new InsertTaskDetailResponse({}));
  }

  async insertTaskDetail(request: InsertTaskDetailRequest): Promise<InsertTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertTaskDetailWithOptions(request, runtime);
  }

  async joinThirdCallWithOptions(request: JoinThirdCallRequest, runtime: $Util.RuntimeOptions): Promise<JoinThirdCallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "JoinThirdCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinThirdCallResponse>(await this.callApi(params, req, runtime), new JoinThirdCallResponse({}));
  }

  async joinThirdCall(request: JoinThirdCallRequest): Promise<JoinThirdCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinThirdCallWithOptions(request, runtime);
  }

  async listAgentBySkillGroupIdWithOptions(request: ListAgentBySkillGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentBySkillGroupIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAgentBySkillGroupId",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAgentBySkillGroupIdResponse>(await this.callApi(params, req, runtime), new ListAgentBySkillGroupIdResponse({}));
  }

  async listAgentBySkillGroupId(request: ListAgentBySkillGroupIdRequest): Promise<ListAgentBySkillGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentBySkillGroupIdWithOptions(request, runtime);
  }

  async listAiccsRobotWithOptions(request: ListAiccsRobotRequest, runtime: $Util.RuntimeOptions): Promise<ListAiccsRobotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.robotName)) {
      query["RobotName"] = request.robotName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAiccsRobot",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAiccsRobotResponse>(await this.callApi(params, req, runtime), new ListAiccsRobotResponse({}));
  }

  async listAiccsRobot(request: ListAiccsRobotRequest): Promise<ListAiccsRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAiccsRobotWithOptions(request, runtime);
  }

  async listChatRecordDetailWithOptions(request: ListChatRecordDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListChatRecordDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChatRecordDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChatRecordDetailResponse>(await this.callApi(params, req, runtime), new ListChatRecordDetailResponse({}));
  }

  async listChatRecordDetail(request: ListChatRecordDetailRequest): Promise<ListChatRecordDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChatRecordDetailWithOptions(request, runtime);
  }

  async listDialogWithOptions(request: ListDialogRequest, runtime: $Util.RuntimeOptions): Promise<ListDialogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.called)) {
      query["Called"] = request.called;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDialog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDialogResponse>(await this.callApi(params, req, runtime), new ListDialogResponse({}));
  }

  async listDialog(request: ListDialogRequest): Promise<ListDialogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDialogWithOptions(request, runtime);
  }

  async listHotlineRecordWithOptions(request: ListHotlineRecordRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotlineRecord",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotlineRecordResponse>(await this.callApi(params, req, runtime), new ListHotlineRecordResponse({}));
  }

  async listHotlineRecord(request: ListHotlineRecordRequest): Promise<ListHotlineRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineRecordWithOptions(request, runtime);
  }

  async listHotlineRecordDetailWithOptions(request: ListHotlineRecordDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineRecordDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotlineRecordDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotlineRecordDetailResponse>(await this.callApi(params, req, runtime), new ListHotlineRecordDetailResponse({}));
  }

  async listHotlineRecordDetail(request: ListHotlineRecordDetailRequest): Promise<ListHotlineRecordDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineRecordDetailWithOptions(request, runtime);
  }

  async listOutboundPhoneNumberWithOptions(request: ListOutboundPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundPhoneNumberResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOutboundPhoneNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOutboundPhoneNumberResponse>(await this.callApi(params, req, runtime), new ListOutboundPhoneNumberResponse({}));
  }

  async listOutboundPhoneNumber(request: ListOutboundPhoneNumberRequest): Promise<ListOutboundPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundPhoneNumberWithOptions(request, runtime);
  }

  async listOuterOrderedNumbersWithOptions(request: ListOuterOrderedNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListOuterOrderedNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOuterOrderedNumbers",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOuterOrderedNumbersResponse>(await this.callApi(params, req, runtime), new ListOuterOrderedNumbersResponse({}));
  }

  async listOuterOrderedNumbers(request: ListOuterOrderedNumbersRequest): Promise<ListOuterOrderedNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOuterOrderedNumbersWithOptions(request, runtime);
  }

  async listRobotCallDialogWithOptions(request: ListRobotCallDialogRequest, runtime: $Util.RuntimeOptions): Promise<ListRobotCallDialogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRobotCallDialog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRobotCallDialogResponse>(await this.callApi(params, req, runtime), new ListRobotCallDialogResponse({}));
  }

  async listRobotCallDialog(request: ListRobotCallDialogRequest): Promise<ListRobotCallDialogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRobotCallDialogWithOptions(request, runtime);
  }

  async listRobotNodeWithOptions(request: ListRobotNodeRequest, runtime: $Util.RuntimeOptions): Promise<ListRobotNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRobotNode",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRobotNodeResponse>(await this.callApi(params, req, runtime), new ListRobotNodeResponse({}));
  }

  async listRobotNode(request: ListRobotNodeRequest): Promise<ListRobotNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRobotNodeWithOptions(request, runtime);
  }

  async listRobotParamsWithOptions(request: ListRobotParamsRequest, runtime: $Util.RuntimeOptions): Promise<ListRobotParamsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRobotParams",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRobotParamsResponse>(await this.callApi(params, req, runtime), new ListRobotParamsResponse({}));
  }

  async listRobotParams(request: ListRobotParamsRequest): Promise<ListRobotParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRobotParamsWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoles",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listSkillGroupWithOptions(request: ListSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSkillGroupResponse>(await this.callApi(params, req, runtime), new ListSkillGroupResponse({}));
  }

  async listSkillGroup(request: ListSkillGroupRequest): Promise<ListSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupWithOptions(request, runtime);
  }

  async listTaskWithOptions(request: ListTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.robotName)) {
      query["RobotName"] = request.robotName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTaskResponse>(await this.callApi(params, req, runtime), new ListTaskResponse({}));
  }

  async listTask(request: ListTaskRequest): Promise<ListTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskWithOptions(request, runtime);
  }

  async listTaskDetailWithOptions(request: ListTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.called)) {
      query["Called"] = request.called;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTaskDetailResponse>(await this.callApi(params, req, runtime), new ListTaskDetailResponse({}));
  }

  async listTaskDetail(request: ListTaskDetailRequest): Promise<ListTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskDetailWithOptions(request, runtime);
  }

  async makeCallWithOptions(request: MakeCallRequest, runtime: $Util.RuntimeOptions): Promise<MakeCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.commandCode)) {
      query["CommandCode"] = request.commandCode;
    }

    if (!Util.isUnset(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.outerAccountId)) {
      query["OuterAccountId"] = request.outerAccountId;
    }

    if (!Util.isUnset(request.outerAccountType)) {
      query["OuterAccountType"] = request.outerAccountType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MakeCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MakeCallResponse>(await this.callApi(params, req, runtime), new MakeCallResponse({}));
  }

  async makeCall(request: MakeCallRequest): Promise<MakeCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeCallWithOptions(request, runtime);
  }

  async makeDoubleCallWithOptions(request: MakeDoubleCallRequest, runtime: $Util.RuntimeOptions): Promise<MakeDoubleCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.bizData)) {
      query["BizData"] = request.bizData;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberPhone)) {
      query["MemberPhone"] = request.memberPhone;
    }

    if (!Util.isUnset(request.outboundCallNumber)) {
      query["OutboundCallNumber"] = request.outboundCallNumber;
    }

    if (!Util.isUnset(request.servicerPhone)) {
      query["ServicerPhone"] = request.servicerPhone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MakeDoubleCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MakeDoubleCallResponse>(await this.callApi(params, req, runtime), new MakeDoubleCallResponse({}));
  }

  async makeDoubleCall(request: MakeDoubleCallRequest): Promise<MakeDoubleCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeDoubleCallWithOptions(request, runtime);
  }

  async queryHotlineInQueueWithOptions(request: QueryHotlineInQueueRequest, runtime: $Util.RuntimeOptions): Promise<QueryHotlineInQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryHotlineInQueue",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryHotlineInQueueResponse>(await this.callApi(params, req, runtime), new QueryHotlineInQueueResponse({}));
  }

  async queryHotlineInQueue(request: QueryHotlineInQueueRequest): Promise<QueryHotlineInQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHotlineInQueueWithOptions(request, runtime);
  }

  async queryHotlineNumberWithOptions(tmpReq: QueryHotlineNumberRequest, runtime: $Util.RuntimeOptions): Promise<QueryHotlineNumberResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryHotlineNumberResponse>(await this.callApi(params, req, runtime), new QueryHotlineNumberResponse({}));
  }

  async queryHotlineNumber(request: QueryHotlineNumberRequest): Promise<QueryHotlineNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHotlineNumberWithOptions(request, runtime);
  }

  async queryOutboundTaskWithOptions(request: QueryOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<QueryOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOutboundTaskResponse>(await this.callApi(params, req, runtime), new QueryOutboundTaskResponse({}));
  }

  async queryOutboundTask(request: QueryOutboundTaskRequest): Promise<QueryOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOutboundTaskWithOptions(request, runtime);
  }

  async querySkillGroupsWithOptions(request: QuerySkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySkillGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySkillGroups",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySkillGroupsResponse>(await this.callApi(params, req, runtime), new QuerySkillGroupsResponse({}));
  }

  async querySkillGroups(request: QuerySkillGroupsRequest): Promise<QuerySkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySkillGroupsWithOptions(request, runtime);
  }

  async queryTaskDetailWithOptions(request: QueryTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.departmentIdList)) {
      query["DepartmentIdList"] = request.departmentIdList;
    }

    if (!Util.isUnset(request.dnis)) {
      query["Dnis"] = request.dnis;
    }

    if (!Util.isUnset(request.endReasonList)) {
      query["EndReasonList"] = request.endReasonList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.priorityList)) {
      query["PriorityList"] = request.priorityList;
    }

    if (!Util.isUnset(request.servicerId)) {
      query["ServicerId"] = request.servicerId;
    }

    if (!Util.isUnset(request.servicerName)) {
      query["ServicerName"] = request.servicerName;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskDetailResponse>(await this.callApi(params, req, runtime), new QueryTaskDetailResponse({}));
  }

  async queryTaskDetail(request: QueryTaskDetailRequest): Promise<QueryTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailWithOptions(request, runtime);
  }

  async queryTicketsWithOptions(tmpReq: QueryTicketsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTicketsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.caseId)) {
      body["CaseId"] = request.caseId;
    }

    if (!Util.isUnset(request.caseStatus)) {
      body["CaseStatus"] = request.caseStatus;
    }

    if (!Util.isUnset(request.caseType)) {
      body["CaseType"] = request.caseType;
    }

    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealId)) {
      body["DealId"] = request.dealId;
    }

    if (!Util.isUnset(request.extraShrink)) {
      body["Extra"] = request.extraShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.srType)) {
      body["SrType"] = request.srType;
    }

    if (!Util.isUnset(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.touchId)) {
      body["TouchId"] = request.touchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryTickets",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTicketsResponse>(await this.callApi(params, req, runtime), new QueryTicketsResponse({}));
  }

  async queryTickets(request: QueryTicketsRequest): Promise<QueryTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTicketsWithOptions(request, runtime);
  }

  async queryTouchListWithOptions(request: QueryTouchListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTouchListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.closeTimeEnd)) {
      body["CloseTimeEnd"] = request.closeTimeEnd;
    }

    if (!Util.isUnset(request.closeTimeStart)) {
      body["CloseTimeStart"] = request.closeTimeStart;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!Util.isUnset(request.evaluationScore)) {
      body["EvaluationScore"] = request.evaluationScore;
    }

    if (!Util.isUnset(request.evaluationStatus)) {
      body["EvaluationStatus"] = request.evaluationStatus;
    }

    if (!Util.isUnset(request.firstTimeEnd)) {
      body["FirstTimeEnd"] = request.firstTimeEnd;
    }

    if (!Util.isUnset(request.firstTimeStart)) {
      body["FirstTimeStart"] = request.firstTimeStart;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberId)) {
      body["MemberId"] = request.memberId;
    }

    if (!Util.isUnset(request.memberName)) {
      body["MemberName"] = request.memberName;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queueId)) {
      body["QueueId"] = request.queueId;
    }

    if (!Util.isUnset(request.servicerId)) {
      body["ServicerId"] = request.servicerId;
    }

    if (!Util.isUnset(request.servicerName)) {
      body["ServicerName"] = request.servicerName;
    }

    if (!Util.isUnset(request.touchId)) {
      body["TouchId"] = request.touchId;
    }

    if (!Util.isUnset(request.touchType)) {
      body["TouchType"] = request.touchType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryTouchList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTouchListResponse>(await this.callApi(params, req, runtime), new QueryTouchListResponse({}));
  }

  async queryTouchList(request: QueryTouchListRequest): Promise<QueryTouchListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTouchListWithOptions(request, runtime);
  }

  async removeAgentFromSkillGroupWithOptions(tmpReq: RemoveAgentFromSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAgentFromSkillGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveAgentFromSkillGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentIdsShrink)) {
      query["AgentIds"] = request.agentIdsShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAgentFromSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAgentFromSkillGroupResponse>(await this.callApi(params, req, runtime), new RemoveAgentFromSkillGroupResponse({}));
  }

  async removeAgentFromSkillGroup(request: RemoveAgentFromSkillGroupRequest): Promise<RemoveAgentFromSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAgentFromSkillGroupWithOptions(request, runtime);
  }

  async removeSkillGroupWithOptions(request: RemoveSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSkillGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveSkillGroupResponse>(await this.callApi(params, req, runtime), new RemoveSkillGroupResponse({}));
  }

  async removeSkillGroup(request: RemoveSkillGroupRequest): Promise<RemoveSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSkillGroupWithOptions(request, runtime);
  }

  async resetHotlineNumberWithOptions(tmpReq: ResetHotlineNumberRequest, runtime: $Util.RuntimeOptions): Promise<ResetHotlineNumberResponse> {
    Util.validateModel(tmpReq);
    let request = new ResetHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.outboundRangeList)) {
      request.outboundRangeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundRangeList, "OutboundRangeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableInbound)) {
      body["EnableInbound"] = request.enableInbound;
    }

    if (!Util.isUnset(request.enableInboundEvaluation)) {
      body["EnableInboundEvaluation"] = request.enableInboundEvaluation;
    }

    if (!Util.isUnset(request.enableOutbound)) {
      body["EnableOutbound"] = request.enableOutbound;
    }

    if (!Util.isUnset(request.enableOutboundEvaluation)) {
      body["EnableOutboundEvaluation"] = request.enableOutboundEvaluation;
    }

    if (!Util.isUnset(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!Util.isUnset(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!Util.isUnset(request.inboundFlowId)) {
      body["InboundFlowId"] = request.inboundFlowId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundAllDepart)) {
      body["OutboundAllDepart"] = request.outboundAllDepart;
    }

    if (!Util.isUnset(request.outboundRangeListShrink)) {
      body["OutboundRangeList"] = request.outboundRangeListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetHotlineNumberResponse>(await this.callApi(params, req, runtime), new ResetHotlineNumberResponse({}));
  }

  async resetHotlineNumber(request: ResetHotlineNumberRequest): Promise<ResetHotlineNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetHotlineNumberWithOptions(request, runtime);
  }

  async restartOutboundTaskWithOptions(request: RestartOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<RestartOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartOutboundTaskResponse>(await this.callApi(params, req, runtime), new RestartOutboundTaskResponse({}));
  }

  async restartOutboundTask(request: RestartOutboundTaskRequest): Promise<RestartOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartOutboundTaskWithOptions(request, runtime);
  }

  async robotCallWithOptions(request: RobotCallRequest, runtime: $Util.RuntimeOptions): Promise<RobotCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RobotCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RobotCallResponse>(await this.callApi(params, req, runtime), new RobotCallResponse({}));
  }

  async robotCall(request: RobotCallRequest): Promise<RobotCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.robotCallWithOptions(request, runtime);
  }

  async sendCcoSmartCallWithOptions(request: SendCcoSmartCallRequest, runtime: $Util.RuntimeOptions): Promise<SendCcoSmartCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionCodeBreak)) {
      query["ActionCodeBreak"] = request.actionCodeBreak;
    }

    if (!Util.isUnset(request.actionCodeTimeBreak)) {
      query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    }

    if (!Util.isUnset(request.asrAlsAmId)) {
      query["AsrAlsAmId"] = request.asrAlsAmId;
    }

    if (!Util.isUnset(request.asrBaseId)) {
      query["AsrBaseId"] = request.asrBaseId;
    }

    if (!Util.isUnset(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!Util.isUnset(request.asrVocabularyId)) {
      query["AsrVocabularyId"] = request.asrVocabularyId;
    }

    if (!Util.isUnset(request.backgroundFileCode)) {
      query["BackgroundFileCode"] = request.backgroundFileCode;
    }

    if (!Util.isUnset(request.backgroundSpeed)) {
      query["BackgroundSpeed"] = request.backgroundSpeed;
    }

    if (!Util.isUnset(request.backgroundVolume)) {
      query["BackgroundVolume"] = request.backgroundVolume;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.dynamicId)) {
      query["DynamicId"] = request.dynamicId;
    }

    if (!Util.isUnset(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!Util.isUnset(request.enableITN)) {
      query["EnableITN"] = request.enableITN;
    }

    if (!Util.isUnset(request.muteTime)) {
      query["MuteTime"] = request.muteTime;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pauseTime)) {
      query["PauseTime"] = request.pauseTime;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.ttsConf)) {
      query["TtsConf"] = request.ttsConf;
    }

    if (!Util.isUnset(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!Util.isUnset(request.ttsStyle)) {
      query["TtsStyle"] = request.ttsStyle;
    }

    if (!Util.isUnset(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.voiceCodeParam)) {
      query["VoiceCodeParam"] = request.voiceCodeParam;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendCcoSmartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCcoSmartCallResponse>(await this.callApi(params, req, runtime), new SendCcoSmartCallResponse({}));
  }

  async sendCcoSmartCall(request: SendCcoSmartCallRequest): Promise<SendCcoSmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCcoSmartCallWithOptions(request, runtime);
  }

  async sendCcoSmartCallOperateWithOptions(request: SendCcoSmartCallOperateRequest, runtime: $Util.RuntimeOptions): Promise<SendCcoSmartCallOperateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.param)) {
      query["Param"] = request.param;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendCcoSmartCallOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCcoSmartCallOperateResponse>(await this.callApi(params, req, runtime), new SendCcoSmartCallOperateResponse({}));
  }

  async sendCcoSmartCallOperate(request: SendCcoSmartCallOperateRequest): Promise<SendCcoSmartCallOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCcoSmartCallOperateWithOptions(request, runtime);
  }

  async sendHotlineHeartBeatWithOptions(request: SendHotlineHeartBeatRequest, runtime: $Util.RuntimeOptions): Promise<SendHotlineHeartBeatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendHotlineHeartBeat",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendHotlineHeartBeatResponse>(await this.callApi(params, req, runtime), new SendHotlineHeartBeatResponse({}));
  }

  async sendHotlineHeartBeat(request: SendHotlineHeartBeatRequest): Promise<SendHotlineHeartBeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendHotlineHeartBeatWithOptions(request, runtime);
  }

  async startAiOutboundTaskWithOptions(request: StartAiOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartAiOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new StartAiOutboundTaskResponse({}));
  }

  async startAiOutboundTask(request: StartAiOutboundTaskRequest): Promise<StartAiOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAiOutboundTaskWithOptions(request, runtime);
  }

  async startCallWithOptions(request: StartCallRequest, runtime: $Util.RuntimeOptions): Promise<StartCallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callee)) {
      body["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartCallResponse>(await this.callApi(params, req, runtime), new StartCallResponse({}));
  }

  async startCall(request: StartCallRequest): Promise<StartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCallWithOptions(request, runtime);
  }

  async startCallV2WithOptions(request: StartCallV2Request, runtime: $Util.RuntimeOptions): Promise<StartCallV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callee)) {
      body["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.callerType)) {
      body["CallerType"] = request.callerType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartCallV2",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartCallV2Response>(await this.callApi(params, req, runtime), new StartCallV2Response({}));
  }

  async startCallV2(request: StartCallV2Request): Promise<StartCallV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCallV2WithOptions(request, runtime);
  }

  async startChatWorkWithOptions(request: StartChatWorkRequest, runtime: $Util.RuntimeOptions): Promise<StartChatWorkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartChatWork",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartChatWorkResponse>(await this.callApi(params, req, runtime), new StartChatWorkResponse({}));
  }

  async startChatWork(request: StartChatWorkRequest): Promise<StartChatWorkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startChatWorkWithOptions(request, runtime);
  }

  async startHotlineServiceWithOptions(request: StartHotlineServiceRequest, runtime: $Util.RuntimeOptions): Promise<StartHotlineServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartHotlineServiceResponse>(await this.callApi(params, req, runtime), new StartHotlineServiceResponse({}));
  }

  async startHotlineService(request: StartHotlineServiceRequest): Promise<StartHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startHotlineServiceWithOptions(request, runtime);
  }

  async startMicroOutboundWithOptions(request: StartMicroOutboundRequest, runtime: $Util.RuntimeOptions): Promise<StartMicroOutboundResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.commandCode)) {
      query["CommandCode"] = request.commandCode;
    }

    if (!Util.isUnset(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartMicroOutbound",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartMicroOutboundResponse>(await this.callApi(params, req, runtime), new StartMicroOutboundResponse({}));
  }

  async startMicroOutbound(request: StartMicroOutboundRequest): Promise<StartMicroOutboundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMicroOutboundWithOptions(request, runtime);
  }

  async startTaskWithOptions(request: StartTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startNow)) {
      query["StartNow"] = request.startNow;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartTaskResponse>(await this.callApi(params, req, runtime), new StartTaskResponse({}));
  }

  async startTask(request: StartTaskRequest): Promise<StartTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTaskWithOptions(request, runtime);
  }

  async stopAiOutboundTaskWithOptions(request: StopAiOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopAiOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new StopAiOutboundTaskResponse({}));
  }

  async stopAiOutboundTask(request: StopAiOutboundTaskRequest): Promise<StopAiOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAiOutboundTaskWithOptions(request, runtime);
  }

  async stopTaskWithOptions(request: StopTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopTaskResponse>(await this.callApi(params, req, runtime), new StopTaskResponse({}));
  }

  async stopTask(request: StopTaskRequest): Promise<StopTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTaskWithOptions(request, runtime);
  }

  async suspendHotlineServiceWithOptions(request: SuspendHotlineServiceRequest, runtime: $Util.RuntimeOptions): Promise<SuspendHotlineServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SuspendHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendHotlineServiceResponse>(await this.callApi(params, req, runtime), new SuspendHotlineServiceResponse({}));
  }

  async suspendHotlineService(request: SuspendHotlineServiceRequest): Promise<SuspendHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendHotlineServiceWithOptions(request, runtime);
  }

  async suspendOutboundTaskWithOptions(request: SuspendOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<SuspendOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendOutboundTaskResponse>(await this.callApi(params, req, runtime), new SuspendOutboundTaskResponse({}));
  }

  async suspendOutboundTask(request: SuspendOutboundTaskRequest): Promise<SuspendOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendOutboundTaskWithOptions(request, runtime);
  }

  async terminateAiOutboundTaskWithOptions(request: TerminateAiOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<TerminateAiOutboundTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TerminateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TerminateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new TerminateAiOutboundTaskResponse({}));
  }

  async terminateAiOutboundTask(request: TerminateAiOutboundTaskRequest): Promise<TerminateAiOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateAiOutboundTaskWithOptions(request, runtime);
  }

  async transferCallToSkillGroupWithOptions(request: TransferCallToSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<TransferCallToSkillGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!Util.isUnset(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isSingleTransfer)) {
      body["IsSingleTransfer"] = request.isSingleTransfer;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TransferCallToSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferCallToSkillGroupResponse>(await this.callApi(params, req, runtime), new TransferCallToSkillGroupResponse({}));
  }

  async transferCallToSkillGroup(request: TransferCallToSkillGroupRequest): Promise<TransferCallToSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferCallToSkillGroupWithOptions(request, runtime);
  }

  async updateAgentWithOptions(request: UpdateAgentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAgentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.skillGroupIdList)) {
      body["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "PUT",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAgentResponse>(await this.callApi(params, req, runtime), new UpdateAgentResponse({}));
  }

  async updateAgent(request: UpdateAgentRequest): Promise<UpdateAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  async updateAiOutboundTaskWithOptions(tmpReq: UpdateAiOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAiOutboundTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAiOutboundTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.outboundNums)) {
      request.outboundNumsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundNums, "OutboundNums", "json");
    }

    if (!Util.isUnset(tmpReq.recallRule)) {
      request.recallRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recallRule, "RecallRule", "json");
    }

    let query = { };
    if (!Util.isUnset(request.concurrentRate)) {
      query["ConcurrentRate"] = request.concurrentRate;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionTime)) {
      query["ExecutionTime"] = request.executionTime;
    }

    if (!Util.isUnset(request.forecastCallRate)) {
      query["ForecastCallRate"] = request.forecastCallRate;
    }

    if (!Util.isUnset(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.numRepeated)) {
      query["NumRepeated"] = request.numRepeated;
    }

    if (!Util.isUnset(request.outboundNumsShrink)) {
      query["OutboundNums"] = request.outboundNumsShrink;
    }

    if (!Util.isUnset(request.recallRuleShrink)) {
      query["RecallRule"] = request.recallRuleShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new UpdateAiOutboundTaskResponse({}));
  }

  async updateAiOutboundTask(request: UpdateAiOutboundTaskRequest): Promise<UpdateAiOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAiOutboundTaskWithOptions(request, runtime);
  }

  async updateDepartmentWithOptions(request: UpdateDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDepartmentResponse>(await this.callApi(params, req, runtime), new UpdateDepartmentResponse({}));
  }

  async updateDepartment(request: UpdateDepartmentRequest): Promise<UpdateDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDepartmentWithOptions(request, runtime);
  }

  async updateOuterAccountWithOptions(request: UpdateOuterAccountRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOuterAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOuterAccountResponse>(await this.callApi(params, req, runtime), new UpdateOuterAccountResponse({}));
  }

  async updateOuterAccount(request: UpdateOuterAccountRequest): Promise<UpdateOuterAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOuterAccountWithOptions(request, runtime);
  }

  async updateSkillGroupWithOptions(request: UpdateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.skillGroupName)) {
      query["SkillGroupName"] = request.skillGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSkillGroupResponse>(await this.callApi(params, req, runtime), new UpdateSkillGroupResponse({}));
  }

  async updateSkillGroup(request: UpdateSkillGroupRequest): Promise<UpdateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSkillGroupWithOptions(request, runtime);
  }

}
