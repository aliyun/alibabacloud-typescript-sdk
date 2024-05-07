// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AsrRealtimeRequest extends $tea.Model {
  appId?: string;
  customizationId?: string;
  disfluency?: boolean;
  enableIgnoreSentenceTimeout?: boolean;
  enableIntermediateResult?: boolean;
  enableInverseTextNormalization?: boolean;
  enablePunctuationPrediction?: boolean;
  enableSemanticSentenceDetection?: boolean;
  enableWords?: boolean;
  fileUrl?: string;
  format?: string;
  maxSentenceSilence?: number;
  sampleRate?: number;
  speechNoiseThreshold?: number;
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      customizationId: 'CustomizationId',
      disfluency: 'Disfluency',
      enableIgnoreSentenceTimeout: 'EnableIgnoreSentenceTimeout',
      enableIntermediateResult: 'EnableIntermediateResult',
      enableInverseTextNormalization: 'EnableInverseTextNormalization',
      enablePunctuationPrediction: 'EnablePunctuationPrediction',
      enableSemanticSentenceDetection: 'EnableSemanticSentenceDetection',
      enableWords: 'EnableWords',
      fileUrl: 'FileUrl',
      format: 'Format',
      maxSentenceSilence: 'MaxSentenceSilence',
      sampleRate: 'SampleRate',
      speechNoiseThreshold: 'SpeechNoiseThreshold',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customizationId: 'string',
      disfluency: 'boolean',
      enableIgnoreSentenceTimeout: 'boolean',
      enableIntermediateResult: 'boolean',
      enableInverseTextNormalization: 'boolean',
      enablePunctuationPrediction: 'boolean',
      enableSemanticSentenceDetection: 'boolean',
      enableWords: 'boolean',
      fileUrl: 'string',
      format: 'string',
      maxSentenceSilence: 'number',
      sampleRate: 'number',
      speechNoiseThreshold: 'number',
      vocabularyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrRealtimeResponseBody extends $tea.Model {
  code?: number;
  data?: AsrRealtimeResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AsrRealtimeResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrRealtimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsrRealtimeResponseBody;
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
      body: AsrRealtimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrSentenceRequest extends $tea.Model {
  asrRequest?: AsrSentenceRequestAsrRequest;
  static names(): { [key: string]: string } {
    return {
      asrRequest: 'AsrRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrRequest: AsrSentenceRequestAsrRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrSentenceShrinkRequest extends $tea.Model {
  asrRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      asrRequestShrink: 'AsrRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrRequestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrSentenceResponseBody extends $tea.Model {
  code?: number;
  data?: AsrSentenceResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AsrSentenceResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrSentenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsrSentenceResponseBody;
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
      body: AsrSentenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrTaskRequest extends $tea.Model {
  request?: AsrTaskRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: AsrTaskRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrTaskShrinkRequest extends $tea.Model {
  requestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      requestShrink: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrTaskResponseBody extends $tea.Model {
  code?: number;
  data?: AsrTaskResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AsrTaskResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsrTaskResponseBody;
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
      body: AsrTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRoomRequest extends $tea.Model {
  appId?: string;
  clientBaseParam?: string;
  clientVersion?: string;
  departmentId?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientBaseParam: 'ClientBaseParam',
      clientVersion: 'ClientVersion',
      departmentId: 'DepartmentId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientBaseParam: 'string',
      clientVersion: 'string',
      departmentId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRoomResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errors?: AssociateRoomResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errors: { 'type': 'array', 'itemType': AssociateRoomResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateRoomResponseBody;
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
      body: AssociateRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  clientToken?: string;
  departmentId?: string;
  name?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
      name: 'Name',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      departmentId: 'string',
      name: 'string',
      packageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  code?: string;
  data?: CreateAppResponseBodyData;
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
      data: CreateAppResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
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
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  label?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      label: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponseBody extends $tea.Model {
  code?: string;
  data?: CreateDepartmentResponseBodyData;
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
      data: CreateDepartmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDepartmentResponseBody;
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

export class CreateDetectProcessRequest extends $tea.Model {
  content?: string;
  draft?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      draft: 'Draft',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      draft: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDetectProcessResponseBody extends $tea.Model {
  code?: string;
  data?: CreateDetectProcessResponseBodyData;
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
      data: CreateDetectProcessResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDetectProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDetectProcessResponseBody;
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
      body: CreateDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  clientToken?: string;
  content?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  code?: string;
  data?: CreateRuleResponseBodyData;
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
      data: CreateRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRuleResponseBody;
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
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureRequest extends $tea.Model {
  appId?: string;
  clientBaseParam?: string;
  clientVersion?: string;
  expireTime?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientBaseParam: 'ClientBaseParam',
      clientVersion: 'ClientVersion',
      expireTime: 'ExpireTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientBaseParam: 'string',
      clientVersion: 'string',
      expireTime: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponseBody extends $tea.Model {
  code?: string;
  data?: CreateSignatureResponseBodyData;
  errors?: CreateSignatureResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSignatureResponseBodyData,
      errors: { 'type': 'array', 'itemType': CreateSignatureResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSignatureResponseBody;
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
      body: CreateSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupRequest extends $tea.Model {
  appId?: string;
  clientToken?: string;
  day?: number[];
  expireAt?: string;
  groupName?: string;
  ruleId?: string;
  runnableTimeFrom?: string;
  runnableTimeTo?: string;
  triggerPeriod?: string;
  videoInfo?: CreateTaskGroupRequestVideoInfo[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      day: 'Day',
      expireAt: 'ExpireAt',
      groupName: 'GroupName',
      ruleId: 'RuleId',
      runnableTimeFrom: 'RunnableTimeFrom',
      runnableTimeTo: 'RunnableTimeTo',
      triggerPeriod: 'TriggerPeriod',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      day: { 'type': 'array', 'itemType': 'number' },
      expireAt: 'string',
      groupName: 'string',
      ruleId: 'string',
      runnableTimeFrom: 'string',
      runnableTimeTo: 'string',
      triggerPeriod: 'string',
      videoInfo: { 'type': 'array', 'itemType': CreateTaskGroupRequestVideoInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupResponseBody extends $tea.Model {
  code?: string;
  data?: CreateTaskGroupResponseBodyData;
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
      data: CreateTaskGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskGroupResponseBody;
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
      body: CreateTaskGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionRequest extends $tea.Model {
  request?: CreateTtsQuestionRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: CreateTtsQuestionRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionShrinkRequest extends $tea.Model {
  requestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      requestShrink: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionResponseBody extends $tea.Model {
  code?: number;
  data?: CreateTtsQuestionResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateTtsQuestionResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTtsQuestionResponseBody;
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
      body: CreateTtsQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionGroupRequest extends $tea.Model {
  request?: CreateTtsQuestionGroupRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: CreateTtsQuestionGroupRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionGroupShrinkRequest extends $tea.Model {
  requestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      requestShrink: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionGroupResponseBody extends $tea.Model {
  code?: number;
  data?: CreateTtsQuestionGroupResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateTtsQuestionGroupResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTtsQuestionGroupResponseBody;
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
      body: CreateTtsQuestionGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDepartmentsRequest extends $tea.Model {
  clientToken?: string;
  departmentId?: string[];
  userId?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      departmentId: { 'type': 'array', 'itemType': 'string' },
      userId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDepartmentsResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDepartmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserDepartmentsResponseBody;
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
      body: CreateUserDepartmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskRequest extends $tea.Model {
  videoMergeRequest?: CreateVideoMergeTaskRequestVideoMergeRequest;
  static names(): { [key: string]: string } {
    return {
      videoMergeRequest: 'VideoMergeRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoMergeRequest: CreateVideoMergeTaskRequestVideoMergeRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskShrinkRequest extends $tea.Model {
  videoMergeRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      videoMergeRequestShrink: 'VideoMergeRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoMergeRequestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVideoMergeTaskResponseBody;
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
      body: CreateVideoMergeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWatermarkRequest extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWatermarkResponseBody extends $tea.Model {
  code?: string;
  data?: CreateWatermarkResponseBodyData;
  errors?: CreateWatermarkResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateWatermarkResponseBodyData,
      errors: { 'type': 'array', 'itemType': CreateWatermarkResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWatermarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWatermarkResponseBody;
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
      body: CreateWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppResponseBody;
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
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDepartmentResponseBody;
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

export class DeleteDetectProcessRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDetectProcessResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDetectProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDetectProcessResponseBody;
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
      body: DeleteDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteRuleResponseBodyData;
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
      data: DeleteRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRuleResponseBody;
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
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  errors?: DeleteUserResponseBodyErrors[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errors: { 'type': 'array', 'itemType': DeleteUserResponseBodyErrors },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
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
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDepartmentsRequest extends $tea.Model {
  departmentId?: string[];
  userId?: string[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: { 'type': 'array', 'itemType': 'string' },
      userId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDepartmentsResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDepartmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserDepartmentsResponseBody;
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
      body: DeleteUserDepartmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWatermarkRequest extends $tea.Model {
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWatermarkResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteWatermarkResponseBodyData;
  errors?: DeleteWatermarkResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteWatermarkResponseBodyData,
      errors: { 'type': 'array', 'itemType': DeleteWatermarkResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWatermarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWatermarkResponseBody;
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
      body: DeleteWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareRequest extends $tea.Model {
  faceRequest?: FaceCompareRequestFaceRequest;
  static names(): { [key: string]: string } {
    return {
      faceRequest: 'FaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRequest: FaceCompareRequestFaceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareShrinkRequest extends $tea.Model {
  faceRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      faceRequestShrink: 'FaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRequestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareResponseBody extends $tea.Model {
  code?: number;
  data?: FaceCompareResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: FaceCompareResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceCompareResponseBody;
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
      body: FaceCompareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessRequest extends $tea.Model {
  faceRequest?: FaceLivenessRequestFaceRequest;
  static names(): { [key: string]: string } {
    return {
      faceRequest: 'FaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRequest: FaceLivenessRequestFaceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessShrinkRequest extends $tea.Model {
  faceRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      faceRequestShrink: 'FaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRequestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBody extends $tea.Model {
  code?: number;
  data?: FaceLivenessResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: FaceLivenessResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceLivenessResponseBody;
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
      body: FaceLivenessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRecognizeRequest extends $tea.Model {
  faceRequest?: FaceRecognizeRequestFaceRequest;
  static names(): { [key: string]: string } {
    return {
      faceRequest: 'FaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRequest: FaceRecognizeRequestFaceRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRecognizeShrinkRequest extends $tea.Model {
  faceRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      faceRequestShrink: 'FaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRequestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRecognizeResponseBody extends $tea.Model {
  code?: number;
  data?: FaceRecognizeResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: FaceRecognizeResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRecognizeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceRecognizeResponseBody;
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
      body: FaceRecognizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
  clientBaseParam?: string;
  clientVersion?: string;
  deviceId?: string;
  id?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      clientVersion: 'ClientVersion',
      deviceId: 'DeviceId',
      id: 'Id',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      clientVersion: 'string',
      deviceId: 'string',
      id: 'string',
      packageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppResponseBodyData;
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
      data: GetAppResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppResponseBody;
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
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrResultRequest extends $tea.Model {
  asrTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      asrTaskId: 'AsrTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrResultResponseBody extends $tea.Model {
  code?: number;
  data?: GetAsrResultResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAsrResultResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsrResultResponseBody;
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
      body: GetAsrResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentRequest extends $tea.Model {
  clientBaseParam?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetDepartmentResponseBodyData;
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
      data: GetDepartmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDepartmentResponseBody;
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
      body: GetDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessRequest extends $tea.Model {
  clientBaseParam?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessResponseBody extends $tea.Model {
  code?: string;
  data?: GetDetectProcessResponseBodyData;
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
      data: GetDetectProcessResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDetectProcessResponseBody;
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
      body: GetDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessJsonFileRequest extends $tea.Model {
  clientBaseParam?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessJsonFileResponseBody extends $tea.Model {
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

export class GetDetectProcessJsonFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDetectProcessJsonFileResponseBody;
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
      body: GetDetectProcessJsonFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionRequest extends $tea.Model {
  clientBaseParam?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionResponseBody extends $tea.Model {
  code?: string;
  data?: GetDetectionResponseBodyData;
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
      data: GetDetectionResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDetectionResponseBody;
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
      body: GetDetectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreSignedUrlRequest extends $tea.Model {
  clientBaseParam?: string;
  clientVersion?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      clientVersion: 'ClientVersion',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      clientVersion: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreSignedUrlResponseBody extends $tea.Model {
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

export class GetPreSignedUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPreSignedUrlResponseBody;
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
      body: GetPreSignedUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResultRequest extends $tea.Model {
  clientBaseParam?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetRecordResultResponseBodyData;
  errors?: GetRecordResultResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRecordResultResponseBodyData,
      errors: { 'type': 'array', 'itemType': GetRecordResultResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordResultResponseBody;
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
      body: GetRecordResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByFeeIdRequest extends $tea.Model {
  feeId?: string;
  static names(): { [key: string]: string } {
    return {
      feeId: 'FeeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByFeeIdResponseBody extends $tea.Model {
  code?: string;
  data?: GetRecordsByFeeIdResponseBodyData[];
  errors?: GetRecordsByFeeIdResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetRecordsByFeeIdResponseBodyData },
      errors: { 'type': 'array', 'itemType': GetRecordsByFeeIdResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByFeeIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordsByFeeIdResponseBody;
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
      body: GetRecordsByFeeIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByOuterBusinessIdRequest extends $tea.Model {
  outerBusinessId?: string;
  static names(): { [key: string]: string } {
    return {
      outerBusinessId: 'OuterBusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerBusinessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByOuterBusinessIdResponseBody extends $tea.Model {
  code?: string;
  data?: GetRecordsByOuterBusinessIdResponseBodyData[];
  errors?: GetRecordsByOuterBusinessIdResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetRecordsByOuterBusinessIdResponseBodyData },
      errors: { 'type': 'array', 'itemType': GetRecordsByOuterBusinessIdResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByOuterBusinessIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordsByOuterBusinessIdResponseBody;
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
      body: GetRecordsByOuterBusinessIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $tea.Model {
  clientBaseParam?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $tea.Model {
  code?: string;
  data?: GetRuleResponseBodyData;
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
      data: GetRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleResponseBody;
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
      body: GetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsRecordsByFeeIdRequest extends $tea.Model {
  feeId?: string;
  static names(): { [key: string]: string } {
    return {
      feeId: 'FeeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsRecordsByFeeIdResponseBody extends $tea.Model {
  code?: string;
  data?: GetStatisticsRecordsByFeeIdResponseBodyData[];
  errors?: GetStatisticsRecordsByFeeIdResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetStatisticsRecordsByFeeIdResponseBodyData },
      errors: { 'type': 'array', 'itemType': GetStatisticsRecordsByFeeIdResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsRecordsByFeeIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStatisticsRecordsByFeeIdResponseBody;
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
      body: GetStatisticsRecordsByFeeIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRequest extends $tea.Model {
  clientBaseParam?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  code?: string;
  data?: GetTaskResponseBodyData;
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
      data: GetTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResponseBody;
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
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskGroupRequest extends $tea.Model {
  clientBaseParam?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskGroupResponseBody extends $tea.Model {
  code?: string;
  data?: GetTaskGroupResponseBodyData;
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
      data: GetTaskGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskGroupResponseBody;
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
      body: GetTaskGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTtsQuestionByGroupIdRequest extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTtsQuestionByGroupIdResponseBody extends $tea.Model {
  code?: number;
  data?: GetTtsQuestionByGroupIdResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTtsQuestionByGroupIdResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTtsQuestionByGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTtsQuestionByGroupIdResponseBody;
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
      body: GetTtsQuestionByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  clientBaseParam?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  code?: string;
  data?: GetUserResponseBodyData;
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
      data: GetUserResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
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
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoMergeTaskRequest extends $tea.Model {
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

export class GetVideoMergeTaskResponseBody extends $tea.Model {
  code?: string;
  data?: GetVideoMergeTaskResponseBodyData;
  errors?: GetVideoMergeTaskResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVideoMergeTaskResponseBodyData,
      errors: { 'type': 'array', 'itemType': GetVideoMergeTaskResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoMergeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVideoMergeTaskResponseBody;
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
      body: GetVideoMergeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkRequest extends $tea.Model {
  clientBaseParam?: string;
  clientVersion?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      clientBaseParam: 'ClientBaseParam',
      clientVersion: 'ClientVersion',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientBaseParam: 'string',
      clientVersion: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkResponseBody extends $tea.Model {
  code?: string;
  data?: GetWatermarkResponseBodyData;
  errors?: GetWatermarkResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWatermarkResponseBodyData,
      errors: { 'type': 'array', 'itemType': GetWatermarkResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWatermarkResponseBody;
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
      body: GetWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinRoomRequest extends $tea.Model {
  appId?: string;
  roomId?: string;
  roomToken?: string;
  streamId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      roomToken: 'RoomToken',
      streamId: 'StreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
      roomToken: 'string',
      streamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinRoomResponseBody extends $tea.Model {
  code?: number;
  data?: JoinRoomResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: JoinRoomResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: JoinRoomResponseBody;
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
      body: JoinRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveRoomRequest extends $tea.Model {
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveRoomResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LeaveRoomResponseBody;
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
      body: LeaveRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppsResponseBodyData;
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
      data: ListAppsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppsResponseBody;
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
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsRequest extends $tea.Model {
  name?: string;
  pageIndex?: number;
  pageSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponseBody extends $tea.Model {
  code?: string;
  data?: ListDepartmentsResponseBodyData;
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
      data: ListDepartmentsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDepartmentsResponseBody;
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
      body: ListDepartmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesRequest extends $tea.Model {
  name?: string;
  pageIndex?: number;
  pageSize?: number;
  publishStatus?: boolean;
  sort?: string;
  sortKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      publishStatus: 'PublishStatus',
      sort: 'Sort',
      sortKey: 'SortKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      publishStatus: 'boolean',
      sort: 'string',
      sortKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesResponseBody extends $tea.Model {
  code?: string;
  data?: ListDetectProcessesResponseBodyData;
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
      data: ListDetectProcessesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDetectProcessesResponseBody;
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
      body: ListDetectProcessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsRequest extends $tea.Model {
  createDateFrom?: string;
  createDateTo?: string;
  departmentId?: string;
  pageIndex?: number;
  pageSize?: number;
  recordingType?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      createDateFrom: 'CreateDateFrom',
      createDateTo: 'CreateDateTo',
      departmentId: 'DepartmentId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      recordingType: 'RecordingType',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDateFrom: 'string',
      createDateTo: 'string',
      departmentId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      recordingType: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListDetectionsResponseBodyData;
  errors?: ListDetectionsResponseBodyErrors[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDetectionsResponseBodyData,
      errors: { 'type': 'array', 'itemType': ListDetectionsResponseBodyErrors },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDetectionsResponseBody;
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
      body: ListDetectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesRequest extends $tea.Model {
  limit?: number;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBody extends $tea.Model {
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

export class ListFilesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFilesResponseBody;
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
      body: ListFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordResultsRequest extends $tea.Model {
  createDateFrom?: string;
  createDateTo?: string;
  departmentId?: string;
  outerBusinessId?: string;
  pageIndex?: number;
  pageSize?: number;
  recordId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createDateFrom: 'CreateDateFrom',
      createDateTo: 'CreateDateTo',
      departmentId: 'DepartmentId',
      outerBusinessId: 'OuterBusinessId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      recordId: 'RecordId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDateFrom: 'string',
      createDateTo: 'string',
      departmentId: 'string',
      outerBusinessId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      recordId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordResultsResponseBody extends $tea.Model {
  code?: string;
  data?: ListRecordResultsResponseBodyData;
  errors?: ListRecordResultsResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListRecordResultsResponseBodyData,
      errors: { 'type': 'array', 'itemType': ListRecordResultsResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecordResultsResponseBody;
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
      body: ListRecordResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  code?: string;
  data?: ListRulesResponseBodyData;
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
      data: ListRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRulesResponseBody;
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
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: ListTaskGroupsResponseBodyData;
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
      data: ListTaskGroupsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskGroupsResponseBody;
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
      body: ListTaskGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskItemsRequest extends $tea.Model {
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

export class ListTaskItemsResponseBody extends $tea.Model {
  code?: string;
  data?: ListTaskItemsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListTaskItemsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskItemsResponseBody;
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
      body: ListTaskItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  taskGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      taskGroupId: 'TaskGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      taskGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  code?: string;
  data?: ListTasksResponseBodyData;
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
      data: ListTasksResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTasksResponseBody;
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
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  departmentId?: string;
  pageIndex?: number;
  pageSize?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  code?: string;
  data?: ListUsersResponseBodyData;
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
      data: ListUsersResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
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
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarksRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarksResponseBody extends $tea.Model {
  code?: string;
  data?: ListWatermarksResponseBodyData;
  errors?: ListWatermarksResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListWatermarksResponseBodyData,
      errors: { 'type': 'array', 'itemType': ListWatermarksResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWatermarksResponseBody;
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
      body: ListWatermarksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDetectProcessRequest extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDetectProcessResponseBody extends $tea.Model {
  code?: string;
  data?: RenameDetectProcessResponseBodyData;
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
      data: RenameDetectProcessResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDetectProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameDetectProcessResponseBody;
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
      body: RenameDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsCommonRequest extends $tea.Model {
  ttsRequest?: TtsCommonRequestTtsRequest;
  static names(): { [key: string]: string } {
    return {
      ttsRequest: 'TtsRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ttsRequest: TtsCommonRequestTtsRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsCommonShrinkRequest extends $tea.Model {
  ttsRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ttsRequestShrink: 'TtsRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ttsRequestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsCommonResponseBody extends $tea.Model {
  code?: number;
  data?: TtsCommonResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TtsCommonResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsCommonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TtsCommonResponseBody;
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
      body: TtsCommonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsTaskRequest extends $tea.Model {
  request?: TtsTaskRequestRequest;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: TtsTaskRequestRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsTaskShrinkRequest extends $tea.Model {
  requestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      requestShrink: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsTaskResponseBody extends $tea.Model {
  code?: number;
  data?: TtsTaskResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TtsTaskResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TtsTaskResponseBody;
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
      body: TtsTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  departmentId?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      disabled: 'Disabled',
      id: 'Id',
      name: 'Name',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      disabled: 'boolean',
      id: 'string',
      name: 'string',
      packageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppResponseBody;
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
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentRequest extends $tea.Model {
  description?: string;
  id?: string;
  label?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      label: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDepartmentResponseBody;
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

export class UpdateDetectProcessRequest extends $tea.Model {
  content?: string;
  draft?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      draft: 'Draft',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      draft: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDetectProcessResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateDetectProcessResponseBodyData;
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
      data: UpdateDetectProcessResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDetectProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDetectProcessResponseBody;
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
      body: UpdateDetectProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleRequest extends $tea.Model {
  content?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateRuleResponseBodyData;
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
      data: UpdateRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleResponseBody;
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
      body: UpdateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  email?: string;
  id?: string;
  name?: string;
  phoneNumber?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      id: 'Id',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'string',
      name: 'string',
      phoneNumber: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
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
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkRequest extends $tea.Model {
  name?: string;
  value?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      watermarkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateWatermarkResponseBodyData;
  errors?: UpdateWatermarkResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateWatermarkResponseBodyData,
      errors: { 'type': 'array', 'itemType': UpdateWatermarkResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWatermarkResponseBody;
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
      body: UpdateWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadReportRequest extends $tea.Model {
  appId?: string;
  clientBaseParam?: string;
  clientVersion?: string;
  departmentId?: string;
  detectProcessId?: string;
  duration?: number;
  feeId?: string;
  metaUrl?: string;
  outerBusinessId?: string;
  recordAt?: string;
  resultUrl?: string;
  role?: string;
  roomId?: string;
  rtcRecordId?: string;
  type?: string;
  userId?: string;
  videoType?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientBaseParam: 'ClientBaseParam',
      clientVersion: 'ClientVersion',
      departmentId: 'DepartmentId',
      detectProcessId: 'DetectProcessId',
      duration: 'Duration',
      feeId: 'FeeId',
      metaUrl: 'MetaUrl',
      outerBusinessId: 'OuterBusinessId',
      recordAt: 'RecordAt',
      resultUrl: 'ResultUrl',
      role: 'Role',
      roomId: 'RoomId',
      rtcRecordId: 'RtcRecordId',
      type: 'Type',
      userId: 'UserId',
      videoType: 'VideoType',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientBaseParam: 'string',
      clientVersion: 'string',
      departmentId: 'string',
      detectProcessId: 'string',
      duration: 'number',
      feeId: 'string',
      metaUrl: 'string',
      outerBusinessId: 'string',
      recordAt: 'string',
      resultUrl: 'string',
      role: 'string',
      roomId: 'string',
      rtcRecordId: 'string',
      type: 'string',
      userId: 'string',
      videoType: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadReportResponseBody extends $tea.Model {
  code?: string;
  data?: UploadReportResponseBodyData;
  errors?: UploadReportResponseBodyErrors[];
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errors: 'Errors',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadReportResponseBodyData,
      errors: { 'type': 'array', 'itemType': UploadReportResponseBodyErrors },
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadReportResponseBody;
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
      body: UploadReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrRealtimeResponseBodyData extends $tea.Model {
  beginTime?: number;
  code?: number;
  confidence?: number;
  id?: string;
  message?: string;
  name?: string;
  result?: string;
  status?: string;
  taskId?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      code: 'Code',
      confidence: 'Confidence',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      code: 'number',
      confidence: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      result: 'string',
      status: 'string',
      taskId: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrSentenceRequestAsrRequest extends $tea.Model {
  appId?: string;
  enableInverseTextNormalization?: boolean;
  enablePunctuationPrediction?: boolean;
  enableVoiceDetection?: boolean;
  fileUrl?: string;
  format?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableInverseTextNormalization: 'EnableInverseTextNormalization',
      enablePunctuationPrediction: 'EnablePunctuationPrediction',
      enableVoiceDetection: 'EnableVoiceDetection',
      fileUrl: 'FileUrl',
      format: 'Format',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableInverseTextNormalization: 'boolean',
      enablePunctuationPrediction: 'boolean',
      enableVoiceDetection: 'boolean',
      fileUrl: 'string',
      format: 'string',
      sampleRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrSentenceResponseBodyData extends $tea.Model {
  code?: number;
  id?: string;
  message?: string;
  name?: string;
  result?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      result: 'Result',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      result: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrTaskRequestRequest extends $tea.Model {
  appId?: string;
  asrTaskId?: string;
  event?: string;
  roomId?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      asrTaskId: 'AsrTaskId',
      event: 'Event',
      roomId: 'RoomId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      asrTaskId: 'string',
      event: 'string',
      roomId: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsrTaskResponseBodyData extends $tea.Model {
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRoomResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyData extends $tea.Model {
  createdAt?: string;
  creatorName?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      creatorName: 'CreatorName',
      disabled: 'Disabled',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creatorName: 'string',
      disabled: 'boolean',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponseBodyData extends $tea.Model {
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDetectProcessResponseBodyData extends $tea.Model {
  content?: string;
  createdAt?: string;
  disabled?: boolean;
  draft?: string;
  id?: string;
  md5?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      disabled: 'Disabled',
      draft: 'Draft',
      id: 'Id',
      md5: 'Md5',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdAt: 'string',
      disabled: 'boolean',
      draft: 'string',
      id: 'string',
      md5: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBodyData extends $tea.Model {
  content?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponseBodyData extends $tea.Model {
  expireTime?: string;
  rtcAppId?: string;
  rtcBizName?: string;
  rtcSign?: string;
  rtcWorkspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      rtcAppId: 'RtcAppId',
      rtcBizName: 'RtcBizName',
      rtcSign: 'RtcSign',
      rtcWorkspaceId: 'RtcWorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      rtcAppId: 'string',
      rtcBizName: 'string',
      rtcSign: 'string',
      rtcWorkspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupRequestVideoInfo extends $tea.Model {
  ruleId?: string;
  videoMetaUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      videoMetaUrl: 'VideoMetaUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      videoMetaUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupResponseBodyData extends $tea.Model {
  completedTasks?: number;
  createdAt?: string;
  id?: string;
  name?: string;
  ruleId?: string;
  ruleName?: string;
  status?: string;
  taskIds?: string[];
  totalTasks?: number;
  static names(): { [key: string]: string } {
    return {
      completedTasks: 'CompletedTasks',
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      taskIds: 'TaskIds',
      totalTasks: 'TotalTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTasks: 'number',
      createdAt: 'string',
      id: 'string',
      name: 'string',
      ruleId: 'string',
      ruleName: 'string',
      status: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      totalTasks: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionRequestRequest extends $tea.Model {
  answer?: string;
  question?: string;
  questionGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      question: 'Question',
      questionGroupId: 'QuestionGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
      questionGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionGroupRequestRequest extends $tea.Model {
  format?: string;
  pitchRate?: number;
  sampleRate?: number;
  speechRate?: number;
  voice?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      pitchRate: 'PitchRate',
      sampleRate: 'SampleRate',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      pitchRate: 'number',
      sampleRate: 'number',
      speechRate: 'number',
      voice: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTtsQuestionGroupResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskRequestVideoMergeRequestLayoutStylesVideoStyles extends $tea.Model {
  fileName?: string;
  height?: number;
  positionX?: number;
  positionY?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      height: 'Height',
      positionX: 'PositionX',
      positionY: 'PositionY',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      height: 'number',
      positionX: 'number',
      positionY: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskRequestVideoMergeRequestLayoutStyles extends $tea.Model {
  height?: number;
  inputNum?: number;
  videoStyles?: CreateVideoMergeTaskRequestVideoMergeRequestLayoutStylesVideoStyles[];
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      inputNum: 'InputNum',
      videoStyles: 'VideoStyles',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      inputNum: 'number',
      videoStyles: { 'type': 'array', 'itemType': CreateVideoMergeTaskRequestVideoMergeRequestLayoutStylesVideoStyles },
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskRequestVideoMergeRequestVideoList extends $tea.Model {
  endTime?: number;
  fileName?: string;
  fileUrl?: string;
  mergeBeginTime?: number;
  mergeEndTime?: number;
  primeVideo?: boolean;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      mergeBeginTime: 'MergeBeginTime',
      mergeEndTime: 'MergeEndTime',
      primeVideo: 'PrimeVideo',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      fileName: 'string',
      fileUrl: 'string',
      mergeBeginTime: 'number',
      mergeEndTime: 'number',
      primeVideo: 'boolean',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskRequestVideoMergeRequestWatermark extends $tea.Model {
  fontColor?: string;
  fontSize?: number;
  positionX?: number;
  positionY?: number;
  text?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      positionX: 'PositionX',
      positionY: 'PositionY',
      text: 'Text',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontColor: 'string',
      fontSize: 'number',
      positionX: 'number',
      positionY: 'number',
      text: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoMergeTaskRequestVideoMergeRequest extends $tea.Model {
  callbackUrl?: string;
  layoutStyles?: CreateVideoMergeTaskRequestVideoMergeRequestLayoutStyles[];
  videoList?: CreateVideoMergeTaskRequestVideoMergeRequestVideoList[];
  watermark?: CreateVideoMergeTaskRequestVideoMergeRequestWatermark;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      layoutStyles: 'LayoutStyles',
      videoList: 'VideoList',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      layoutStyles: { 'type': 'array', 'itemType': CreateVideoMergeTaskRequestVideoMergeRequestLayoutStyles },
      videoList: { 'type': 'array', 'itemType': CreateVideoMergeTaskRequestVideoMergeRequestVideoList },
      watermark: CreateVideoMergeTaskRequestVideoMergeRequestWatermark,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWatermarkResponseBodyData extends $tea.Model {
  createdAt?: string;
  id?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWatermarkResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBodyData extends $tea.Model {
  content?: string;
  createdAt?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWatermarkResponseBodyData extends $tea.Model {
  createdAt?: string;
  id?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWatermarkResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareRequestFaceRequest extends $tea.Model {
  appId?: string;
  sourceImage?: string;
  targetImage?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sourceImage: 'SourceImage',
      targetImage: 'TargetImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      sourceImage: 'string',
      targetImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceCompareResponseBodyData extends $tea.Model {
  code?: string;
  id?: string;
  message?: string;
  passed?: string;
  requestId?: string;
  status?: string;
  verifyScore?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      passed: 'Passed',
      requestId: 'RequestId',
      status: 'Status',
      verifyScore: 'VerifyScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      message: 'string',
      passed: 'string',
      requestId: 'string',
      status: 'string',
      verifyScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessRequestFaceRequest extends $tea.Model {
  appId?: string;
  sourceImage?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sourceImage: 'SourceImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      sourceImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBodyData extends $tea.Model {
  code?: string;
  message?: string;
  passed?: string;
  publicId?: string;
  score?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      passed: 'Passed',
      publicId: 'PublicId',
      score: 'Score',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      passed: 'string',
      publicId: 'string',
      score: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRecognizeRequestFaceRequest extends $tea.Model {
  appId?: string;
  liveness?: boolean;
  sourceImage?: string;
  targetImage?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      liveness: 'Liveness',
      sourceImage: 'SourceImage',
      targetImage: 'TargetImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      liveness: 'boolean',
      sourceImage: 'string',
      targetImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRecognizeResponseBodyData extends $tea.Model {
  comparePassed?: string;
  compareScore?: number;
  livenessPassed?: string;
  livenessScore?: number;
  static names(): { [key: string]: string } {
    return {
      comparePassed: 'ComparePassed',
      compareScore: 'CompareScore',
      livenessPassed: 'LivenessPassed',
      livenessScore: 'LivenessScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparePassed: 'string',
      compareScore: 'number',
      livenessPassed: 'string',
      livenessScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyData extends $tea.Model {
  config?: string;
  createdAt?: string;
  disabled?: string;
  feeId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      createdAt: 'CreatedAt',
      disabled: 'Disabled',
      feeId: 'FeeId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      createdAt: 'string',
      disabled: 'string',
      feeId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrResultResponseBodyData extends $tea.Model {
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentResponseBodyData extends $tea.Model {
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectProcessResponseBodyData extends $tea.Model {
  content?: string;
  createdAt?: string;
  draft?: string;
  id?: string;
  md5?: string;
  name?: string;
  newVersion?: boolean;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      draft: 'Draft',
      id: 'Id',
      md5: 'Md5',
      name: 'Name',
      newVersion: 'NewVersion',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdAt: 'string',
      draft: 'string',
      id: 'string',
      md5: 'string',
      name: 'string',
      newVersion: 'boolean',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionResponseBodyDataTasks extends $tea.Model {
  createdAt?: string;
  id?: string;
  status?: string;
  videoMetaUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      status: 'Status',
      videoMetaUrl: 'VideoMetaUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      status: 'string',
      videoMetaUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectionResponseBodyData extends $tea.Model {
  createdAt?: string;
  departmentId?: string;
  departmentName?: string;
  id?: string;
  recordingType?: string;
  ruleId?: string;
  ruleName?: string;
  status?: string;
  tasks?: GetDetectionResponseBodyDataTasks[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      id: 'Id',
      recordingType: 'RecordingType',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      departmentId: 'string',
      departmentName: 'string',
      id: 'string',
      recordingType: 'string',
      ruleId: 'string',
      ruleName: 'string',
      status: 'string',
      tasks: { 'type': 'array', 'itemType': GetDetectionResponseBodyDataTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResultResponseBodyDataRecordRoomList extends $tea.Model {
  outerBusinessId?: string;
  recordType?: string;
  role?: string;
  roomMetaUrl?: string;
  roomRecordAt?: string;
  roomResultUrl?: string;
  roomStatus?: string;
  roomVideoUrl?: string;
  rtcRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      outerBusinessId: 'OuterBusinessId',
      recordType: 'RecordType',
      role: 'Role',
      roomMetaUrl: 'RoomMetaUrl',
      roomRecordAt: 'RoomRecordAt',
      roomResultUrl: 'RoomResultUrl',
      roomStatus: 'RoomStatus',
      roomVideoUrl: 'RoomVideoUrl',
      rtcRecordId: 'RtcRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerBusinessId: 'string',
      recordType: 'string',
      role: 'string',
      roomMetaUrl: 'string',
      roomRecordAt: 'string',
      roomResultUrl: 'string',
      roomStatus: 'string',
      roomVideoUrl: 'string',
      rtcRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResultResponseBodyData extends $tea.Model {
  appName?: string;
  createdAt?: string;
  departmentName?: string;
  detectProcessName?: string;
  duration?: number;
  id?: string;
  metaUrl?: string;
  outerBusinessId?: string;
  recordAt?: string;
  recordRoomList?: GetRecordResultResponseBodyDataRecordRoomList[];
  resultUrl?: string;
  roomId?: string;
  status?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createdAt: 'CreatedAt',
      departmentName: 'DepartmentName',
      detectProcessName: 'DetectProcessName',
      duration: 'Duration',
      id: 'Id',
      metaUrl: 'MetaUrl',
      outerBusinessId: 'OuterBusinessId',
      recordAt: 'RecordAt',
      recordRoomList: 'RecordRoomList',
      resultUrl: 'ResultUrl',
      roomId: 'RoomId',
      status: 'Status',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createdAt: 'string',
      departmentName: 'string',
      detectProcessName: 'string',
      duration: 'number',
      id: 'string',
      metaUrl: 'string',
      outerBusinessId: 'string',
      recordAt: 'string',
      recordRoomList: { 'type': 'array', 'itemType': GetRecordResultResponseBodyDataRecordRoomList },
      resultUrl: 'string',
      roomId: 'string',
      status: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResultResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByFeeIdResponseBodyDataRecordRoomList extends $tea.Model {
  outerBusinessId?: string;
  recordType?: string;
  role?: string;
  roomMetaUrl?: string;
  roomRecordAt?: string;
  roomResultUrl?: string;
  roomStatus?: string;
  roomVideoUrl?: string;
  rtcRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      outerBusinessId: 'OuterBusinessId',
      recordType: 'RecordType',
      role: 'Role',
      roomMetaUrl: 'RoomMetaUrl',
      roomRecordAt: 'RoomRecordAt',
      roomResultUrl: 'RoomResultUrl',
      roomStatus: 'RoomStatus',
      roomVideoUrl: 'RoomVideoUrl',
      rtcRecordId: 'RtcRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerBusinessId: 'string',
      recordType: 'string',
      role: 'string',
      roomMetaUrl: 'string',
      roomRecordAt: 'string',
      roomResultUrl: 'string',
      roomStatus: 'string',
      roomVideoUrl: 'string',
      rtcRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByFeeIdResponseBodyData extends $tea.Model {
  appName?: string;
  createdAt?: string;
  departmentName?: string;
  detectProcessName?: string;
  duration?: number;
  id?: string;
  metaUrl?: string;
  outerBusinessId?: string;
  recordAt?: string;
  recordRoomList?: GetRecordsByFeeIdResponseBodyDataRecordRoomList[];
  resultUrl?: string;
  roomId?: string;
  status?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createdAt: 'CreatedAt',
      departmentName: 'DepartmentName',
      detectProcessName: 'DetectProcessName',
      duration: 'Duration',
      id: 'Id',
      metaUrl: 'MetaUrl',
      outerBusinessId: 'OuterBusinessId',
      recordAt: 'RecordAt',
      recordRoomList: 'RecordRoomList',
      resultUrl: 'ResultUrl',
      roomId: 'RoomId',
      status: 'Status',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createdAt: 'string',
      departmentName: 'string',
      detectProcessName: 'string',
      duration: 'number',
      id: 'string',
      metaUrl: 'string',
      outerBusinessId: 'string',
      recordAt: 'string',
      recordRoomList: { 'type': 'array', 'itemType': GetRecordsByFeeIdResponseBodyDataRecordRoomList },
      resultUrl: 'string',
      roomId: 'string',
      status: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByFeeIdResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByOuterBusinessIdResponseBodyDataRecordRoomList extends $tea.Model {
  outerBusinessId?: string;
  recordType?: string;
  role?: string;
  roomMetaUrl?: string;
  roomRecordAt?: string;
  roomResultUrl?: string;
  roomStatus?: string;
  roomVideoUrl?: string;
  rtcRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      outerBusinessId: 'OuterBusinessId',
      recordType: 'RecordType',
      role: 'Role',
      roomMetaUrl: 'RoomMetaUrl',
      roomRecordAt: 'RoomRecordAt',
      roomResultUrl: 'RoomResultUrl',
      roomStatus: 'RoomStatus',
      roomVideoUrl: 'RoomVideoUrl',
      rtcRecordId: 'RtcRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerBusinessId: 'string',
      recordType: 'string',
      role: 'string',
      roomMetaUrl: 'string',
      roomRecordAt: 'string',
      roomResultUrl: 'string',
      roomStatus: 'string',
      roomVideoUrl: 'string',
      rtcRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByOuterBusinessIdResponseBodyData extends $tea.Model {
  appName?: string;
  createdAt?: string;
  departmentName?: string;
  detectProcessName?: string;
  duration?: number;
  id?: string;
  metaUrl?: string;
  outerBusinessId?: string;
  recordAt?: string;
  recordRoomList?: GetRecordsByOuterBusinessIdResponseBodyDataRecordRoomList[];
  resultUrl?: string;
  roomId?: string;
  status?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createdAt: 'CreatedAt',
      departmentName: 'DepartmentName',
      detectProcessName: 'DetectProcessName',
      duration: 'Duration',
      id: 'Id',
      metaUrl: 'MetaUrl',
      outerBusinessId: 'OuterBusinessId',
      recordAt: 'RecordAt',
      recordRoomList: 'RecordRoomList',
      resultUrl: 'ResultUrl',
      roomId: 'RoomId',
      status: 'Status',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createdAt: 'string',
      departmentName: 'string',
      detectProcessName: 'string',
      duration: 'number',
      id: 'string',
      metaUrl: 'string',
      outerBusinessId: 'string',
      recordAt: 'string',
      recordRoomList: { 'type': 'array', 'itemType': GetRecordsByOuterBusinessIdResponseBodyDataRecordRoomList },
      resultUrl: 'string',
      roomId: 'string',
      status: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsByOuterBusinessIdResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyData extends $tea.Model {
  content?: string;
  createdAt?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsRecordsByFeeIdResponseBodyData extends $tea.Model {
  appId?: number;
  beginAt?: string;
  chargeDuration?: number;
  createdAt?: string;
  departmentId?: number;
  detectionDuration?: number;
  deviceId?: string;
  deviceType?: number;
  endAt?: string;
  feeId?: string;
  hour?: number;
  tenantId?: number;
  type?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      beginAt: 'BeginAt',
      chargeDuration: 'ChargeDuration',
      createdAt: 'CreatedAt',
      departmentId: 'DepartmentId',
      detectionDuration: 'DetectionDuration',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      endAt: 'EndAt',
      feeId: 'FeeId',
      hour: 'Hour',
      tenantId: 'TenantId',
      type: 'Type',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      beginAt: 'string',
      chargeDuration: 'number',
      createdAt: 'string',
      departmentId: 'number',
      detectionDuration: 'number',
      deviceId: 'string',
      deviceType: 'number',
      endAt: 'string',
      feeId: 'string',
      hour: 'number',
      tenantId: 'number',
      type: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsRecordsByFeeIdResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyData extends $tea.Model {
  createdAt?: string;
  id?: string;
  status?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      status: 'Status',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      status: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskGroupResponseBodyData extends $tea.Model {
  completedTasks?: number;
  createdAt?: string;
  id?: string;
  name?: string;
  ruleId?: string;
  ruleName?: string;
  status?: string;
  taskIds?: string[];
  totalTasks?: number;
  static names(): { [key: string]: string } {
    return {
      completedTasks: 'CompletedTasks',
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      taskIds: 'TaskIds',
      totalTasks: 'TotalTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTasks: 'number',
      createdAt: 'string',
      id: 'string',
      name: 'string',
      ruleId: 'string',
      ruleName: 'string',
      status: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      totalTasks: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTtsQuestionByGroupIdResponseBodyDataQuestions extends $tea.Model {
  answer?: string;
  duration?: number;
  id?: number;
  ossUrl?: string;
  question?: string;
  questionGroupId?: number;
  questionKey?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      duration: 'Duration',
      id: 'Id',
      ossUrl: 'OssUrl',
      question: 'Question',
      questionGroupId: 'QuestionGroupId',
      questionKey: 'QuestionKey',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      duration: 'number',
      id: 'number',
      ossUrl: 'string',
      question: 'string',
      questionGroupId: 'number',
      questionKey: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTtsQuestionByGroupIdResponseBodyData extends $tea.Model {
  groupId?: string;
  questions?: GetTtsQuestionByGroupIdResponseBodyDataQuestions[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      questions: 'Questions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      questions: { 'type': 'array', 'itemType': GetTtsQuestionByGroupIdResponseBodyDataQuestions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyDataDepartments extends $tea.Model {
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyData extends $tea.Model {
  createdAt?: string;
  departments?: GetUserResponseBodyDataDepartments[];
  email?: string;
  id?: string;
  name?: string;
  phoneNumber?: string;
  role?: string;
  source?: string;
  updatedAt?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      departments: 'Departments',
      email: 'Email',
      id: 'Id',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      role: 'Role',
      source: 'Source',
      updatedAt: 'UpdatedAt',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      departments: { 'type': 'array', 'itemType': GetUserResponseBodyDataDepartments },
      email: 'string',
      id: 'string',
      name: 'string',
      phoneNumber: 'string',
      role: 'string',
      source: 'string',
      updatedAt: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoMergeTaskResponseBodyData extends $tea.Model {
  clientTraceId?: string;
  duration?: number;
  height?: number;
  mergeFileId?: string;
  taskId?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      clientTraceId: 'ClientTraceId',
      duration: 'Duration',
      height: 'Height',
      mergeFileId: 'MergeFileId',
      taskId: 'TaskId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientTraceId: 'string',
      duration: 'number',
      height: 'number',
      mergeFileId: 'string',
      taskId: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoMergeTaskResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkResponseBodyData extends $tea.Model {
  createdAt?: string;
  id?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarkResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinRoomResponseBodyData extends $tea.Model {
  roomId?: string;
  streamId?: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      streamId: 'StreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      streamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyDataItems extends $tea.Model {
  createdAt?: string;
  departmentId?: string;
  departmentName?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      disabled: 'Disabled',
      id: 'Id',
      name: 'Name',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      departmentId: 'string',
      departmentName: 'string',
      disabled: 'boolean',
      id: 'string',
      name: 'string',
      packageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyData extends $tea.Model {
  items?: ListAppsResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAppsResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponseBodyDataItemsAdministrators extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponseBodyDataItems extends $tea.Model {
  administrators?: ListDepartmentsResponseBodyDataItemsAdministrators[];
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      administrators: 'Administrators',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrators: { 'type': 'array', 'itemType': ListDepartmentsResponseBodyDataItemsAdministrators },
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDepartmentsResponseBodyData extends $tea.Model {
  items?: ListDepartmentsResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDepartmentsResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesResponseBodyDataItems extends $tea.Model {
  content?: string;
  contentAt?: string;
  createdAt?: string;
  draft?: string;
  draftAt?: string;
  fileUrl?: string;
  id?: string;
  md5?: string;
  name?: string;
  newVersion?: boolean;
  published?: boolean;
  type?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentAt: 'ContentAt',
      createdAt: 'CreatedAt',
      draft: 'Draft',
      draftAt: 'DraftAt',
      fileUrl: 'FileUrl',
      id: 'Id',
      md5: 'Md5',
      name: 'Name',
      newVersion: 'NewVersion',
      published: 'Published',
      type: 'Type',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentAt: 'string',
      createdAt: 'string',
      draft: 'string',
      draftAt: 'string',
      fileUrl: 'string',
      id: 'string',
      md5: 'string',
      name: 'string',
      newVersion: 'boolean',
      published: 'boolean',
      type: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectProcessesResponseBodyData extends $tea.Model {
  items?: ListDetectProcessesResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDetectProcessesResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBodyDataItemsTasks extends $tea.Model {
  createdAt?: string;
  id?: string;
  status?: string;
  videoMetaUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      status: 'Status',
      videoMetaUrl: 'VideoMetaUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      status: 'string',
      videoMetaUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBodyDataItems extends $tea.Model {
  createdAt?: string;
  departmentId?: string;
  departmentName?: string;
  id?: string;
  recordingType?: string;
  ruleId?: string;
  ruleName?: string;
  status?: string;
  tasks?: ListDetectionsResponseBodyDataItemsTasks[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      id: 'Id',
      recordingType: 'RecordingType',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      departmentId: 'string',
      departmentName: 'string',
      id: 'string',
      recordingType: 'string',
      ruleId: 'string',
      ruleName: 'string',
      status: 'string',
      tasks: { 'type': 'array', 'itemType': ListDetectionsResponseBodyDataItemsTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBodyData extends $tea.Model {
  items?: ListDetectionsResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDetectionsResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectionsResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordResultsResponseBodyDataItems extends $tea.Model {
  appName?: string;
  createdAt?: string;
  departmentName?: string;
  detectProcessName?: string;
  duration?: number;
  id?: string;
  metaUrl?: string;
  outerBusinessId?: string;
  recordAt?: string;
  resultUrl?: string;
  roomId?: string;
  rtcRecordId?: string;
  status?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createdAt: 'CreatedAt',
      departmentName: 'DepartmentName',
      detectProcessName: 'DetectProcessName',
      duration: 'Duration',
      id: 'Id',
      metaUrl: 'MetaUrl',
      outerBusinessId: 'OuterBusinessId',
      recordAt: 'RecordAt',
      resultUrl: 'ResultUrl',
      roomId: 'RoomId',
      rtcRecordId: 'RtcRecordId',
      status: 'Status',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createdAt: 'string',
      departmentName: 'string',
      detectProcessName: 'string',
      duration: 'number',
      id: 'string',
      metaUrl: 'string',
      outerBusinessId: 'string',
      recordAt: 'string',
      resultUrl: 'string',
      roomId: 'string',
      rtcRecordId: 'string',
      status: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordResultsResponseBodyData extends $tea.Model {
  items?: ListRecordResultsResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListRecordResultsResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordResultsResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyDataItems extends $tea.Model {
  content?: string;
  createdAt?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyData extends $tea.Model {
  items?: ListRulesResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListRulesResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsResponseBodyDataItems extends $tea.Model {
  completedTasks?: number;
  createdAt?: string;
  id?: string;
  name?: string;
  ruleId?: string;
  ruleName?: string;
  status?: string;
  taskIds?: string[];
  totalTasks?: number;
  static names(): { [key: string]: string } {
    return {
      completedTasks: 'CompletedTasks',
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      taskIds: 'TaskIds',
      totalTasks: 'TotalTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTasks: 'number',
      createdAt: 'string',
      id: 'string',
      name: 'string',
      ruleId: 'string',
      ruleName: 'string',
      status: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      totalTasks: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupsResponseBodyData extends $tea.Model {
  items?: ListTaskGroupsResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListTaskGroupsResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskItemsResponseBodyData extends $tea.Model {
  createdAt?: string;
  message?: string;
  name?: string;
  output?: string;
  segmentSeq?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      message: 'Message',
      name: 'Name',
      output: 'Output',
      segmentSeq: 'SegmentSeq',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      message: 'string',
      name: 'string',
      output: 'string',
      segmentSeq: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyDataItems extends $tea.Model {
  createdAt?: string;
  id?: string;
  status?: string;
  videoMetaUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      status: 'Status',
      videoMetaUrl: 'VideoMetaUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      status: 'string',
      videoMetaUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyData extends $tea.Model {
  items?: ListTasksResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListTasksResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataItemsDepartments extends $tea.Model {
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataItems extends $tea.Model {
  createdAt?: string;
  departments?: ListUsersResponseBodyDataItemsDepartments[];
  email?: string;
  id?: string;
  name?: string;
  phoneNumber?: string;
  ramUsername?: string;
  role?: string;
  source?: string;
  updatedAt?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      departments: 'Departments',
      email: 'Email',
      id: 'Id',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      ramUsername: 'RamUsername',
      role: 'Role',
      source: 'Source',
      updatedAt: 'UpdatedAt',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      departments: { 'type': 'array', 'itemType': ListUsersResponseBodyDataItemsDepartments },
      email: 'string',
      id: 'string',
      name: 'string',
      phoneNumber: 'string',
      ramUsername: 'string',
      role: 'string',
      source: 'string',
      updatedAt: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  items?: ListUsersResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListUsersResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarksResponseBodyDataItems extends $tea.Model {
  createdAt?: string;
  id?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarksResponseBodyData extends $tea.Model {
  items?: ListWatermarksResponseBodyDataItems[];
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListWatermarksResponseBodyDataItems },
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWatermarksResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDetectProcessResponseBodyData extends $tea.Model {
  content?: string;
  createdAt?: string;
  draft?: string;
  id?: string;
  md5?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      draft: 'Draft',
      id: 'Id',
      md5: 'Md5',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdAt: 'string',
      draft: 'string',
      id: 'string',
      md5: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsCommonRequestTtsRequest extends $tea.Model {
  appId?: string;
  format?: string;
  pitchRate?: number;
  sampleRate?: number;
  speechRate?: number;
  text?: string;
  voice?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      format: 'Format',
      pitchRate: 'PitchRate',
      sampleRate: 'SampleRate',
      speechRate: 'SpeechRate',
      text: 'Text',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      format: 'string',
      pitchRate: 'number',
      sampleRate: 'number',
      speechRate: 'number',
      text: 'string',
      voice: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsCommonResponseBodyData extends $tea.Model {
  code?: number;
  id?: string;
  message?: string;
  name?: string;
  publicUrl?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      publicUrl: 'PublicUrl',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      publicUrl: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsTaskRequestRequest extends $tea.Model {
  key?: string;
  roomId?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      roomId: 'RoomId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      roomId: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TtsTaskResponseBodyData extends $tea.Model {
  answer?: string;
  duration?: number;
  question?: string;
  speechRate?: number;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      duration: 'Duration',
      question: 'Question',
      speechRate: 'SpeechRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      duration: 'number',
      question: 'string',
      speechRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDetectProcessResponseBodyData extends $tea.Model {
  content?: string;
  createdAt?: string;
  draft?: string;
  id?: string;
  md5?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      draft: 'Draft',
      id: 'Id',
      md5: 'Md5',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdAt: 'string',
      draft: 'string',
      id: 'string',
      md5: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBodyData extends $tea.Model {
  content?: string;
  createdAt?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkResponseBodyData extends $tea.Model {
  createdAt?: string;
  id?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadReportResponseBodyData extends $tea.Model {
  createdAt?: string;
  duration?: number;
  id?: string;
  metaUrl?: string;
  outerBusinessId?: string;
  recordAt?: string;
  resultUrl?: string;
  rtcRecordId?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      duration: 'Duration',
      id: 'Id',
      metaUrl: 'MetaUrl',
      outerBusinessId: 'OuterBusinessId',
      recordAt: 'RecordAt',
      resultUrl: 'ResultUrl',
      rtcRecordId: 'RtcRecordId',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      duration: 'number',
      id: 'string',
      metaUrl: 'string',
      outerBusinessId: 'string',
      recordAt: 'string',
      resultUrl: 'string',
      rtcRecordId: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadReportResponseBodyErrors extends $tea.Model {
  field?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
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
      'ap-northeast-1': "idrsservice.aliyuncs.com",
      'ap-northeast-2-pop': "idrsservice.aliyuncs.com",
      'ap-south-1': "idrsservice.aliyuncs.com",
      'ap-southeast-1': "idrsservice.aliyuncs.com",
      'ap-southeast-2': "idrsservice.aliyuncs.com",
      'ap-southeast-3': "idrsservice.aliyuncs.com",
      'ap-southeast-5': "idrsservice.aliyuncs.com",
      'cn-beijing': "idrsservice.aliyuncs.com",
      'cn-beijing-finance-1': "idrsservice.aliyuncs.com",
      'cn-beijing-finance-pop': "idrsservice.aliyuncs.com",
      'cn-beijing-gov-1': "idrsservice.aliyuncs.com",
      'cn-beijing-nu16-b01': "idrsservice.aliyuncs.com",
      'cn-chengdu': "idrsservice.aliyuncs.com",
      'cn-edge-1': "idrsservice.aliyuncs.com",
      'cn-fujian': "idrsservice.aliyuncs.com",
      'cn-haidian-cm12-c01': "idrsservice.aliyuncs.com",
      'cn-hangzhou-bj-b01': "idrsservice.aliyuncs.com",
      'cn-hangzhou-finance': "idrsservice.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "idrsservice.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "idrsservice.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "idrsservice.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "idrsservice.aliyuncs.com",
      'cn-hangzhou-test-306': "idrsservice.aliyuncs.com",
      'cn-hongkong': "idrsservice.aliyuncs.com",
      'cn-hongkong-finance-pop': "idrsservice.aliyuncs.com",
      'cn-huhehaote': "idrsservice.aliyuncs.com",
      'cn-huhehaote-nebula-1': "idrsservice.aliyuncs.com",
      'cn-north-2-gov-1': "idrsservice.aliyuncs.com",
      'cn-qingdao': "idrsservice.aliyuncs.com",
      'cn-qingdao-nebula': "idrsservice.aliyuncs.com",
      'cn-shanghai': "idrsservice.aliyuncs.com",
      'cn-shanghai-et15-b01': "idrsservice.aliyuncs.com",
      'cn-shanghai-et2-b01': "idrsservice.aliyuncs.com",
      'cn-shanghai-inner': "idrsservice.aliyuncs.com",
      'cn-shanghai-internal-test-1': "idrsservice.aliyuncs.com",
      'cn-shenzhen': "idrsservice.aliyuncs.com",
      'cn-shenzhen-finance-1': "idrsservice.aliyuncs.com",
      'cn-shenzhen-inner': "idrsservice.aliyuncs.com",
      'cn-shenzhen-st4-d01': "idrsservice.aliyuncs.com",
      'cn-shenzhen-su18-b01': "idrsservice.aliyuncs.com",
      'cn-wuhan': "idrsservice.aliyuncs.com",
      'cn-wulanchabu': "idrsservice.aliyuncs.com",
      'cn-yushanfang': "idrsservice.aliyuncs.com",
      'cn-zhangbei-na61-b01': "idrsservice.aliyuncs.com",
      'cn-zhangjiakou': "idrsservice.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "idrsservice.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "idrsservice.aliyuncs.com",
      'eu-central-1': "idrsservice.aliyuncs.com",
      'eu-west-1': "idrsservice.aliyuncs.com",
      'eu-west-1-oxs': "idrsservice.aliyuncs.com",
      'me-east-1': "idrsservice.aliyuncs.com",
      'rus-west-1-pop': "idrsservice.aliyuncs.com",
      'us-east-1': "idrsservice.aliyuncs.com",
      'us-west-1': "idrsservice.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("idrsservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async asrRealtimeWithOptions(request: AsrRealtimeRequest, runtime: $Util.RuntimeOptions): Promise<AsrRealtimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.customizationId)) {
      query["CustomizationId"] = request.customizationId;
    }

    if (!Util.isUnset(request.disfluency)) {
      query["Disfluency"] = request.disfluency;
    }

    if (!Util.isUnset(request.enableIgnoreSentenceTimeout)) {
      query["EnableIgnoreSentenceTimeout"] = request.enableIgnoreSentenceTimeout;
    }

    if (!Util.isUnset(request.enableIntermediateResult)) {
      query["EnableIntermediateResult"] = request.enableIntermediateResult;
    }

    if (!Util.isUnset(request.enableInverseTextNormalization)) {
      query["EnableInverseTextNormalization"] = request.enableInverseTextNormalization;
    }

    if (!Util.isUnset(request.enablePunctuationPrediction)) {
      query["EnablePunctuationPrediction"] = request.enablePunctuationPrediction;
    }

    if (!Util.isUnset(request.enableSemanticSentenceDetection)) {
      query["EnableSemanticSentenceDetection"] = request.enableSemanticSentenceDetection;
    }

    if (!Util.isUnset(request.enableWords)) {
      query["EnableWords"] = request.enableWords;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.format)) {
      query["Format"] = request.format;
    }

    if (!Util.isUnset(request.maxSentenceSilence)) {
      query["MaxSentenceSilence"] = request.maxSentenceSilence;
    }

    if (!Util.isUnset(request.sampleRate)) {
      query["SampleRate"] = request.sampleRate;
    }

    if (!Util.isUnset(request.speechNoiseThreshold)) {
      query["SpeechNoiseThreshold"] = request.speechNoiseThreshold;
    }

    if (!Util.isUnset(request.vocabularyId)) {
      query["VocabularyId"] = request.vocabularyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsrRealtime",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AsrRealtimeResponse>(await this.callApi(params, req, runtime), new AsrRealtimeResponse({}));
  }

  async asrRealtime(request: AsrRealtimeRequest): Promise<AsrRealtimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asrRealtimeWithOptions(request, runtime);
  }

  async asrSentenceWithOptions(tmpReq: AsrSentenceRequest, runtime: $Util.RuntimeOptions): Promise<AsrSentenceResponse> {
    Util.validateModel(tmpReq);
    let request = new AsrSentenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.asrRequest)) {
      request.asrRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.asrRequest, "AsrRequest", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.asrRequestShrink)) {
      body["AsrRequest"] = request.asrRequestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AsrSentence",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AsrSentenceResponse>(await this.callApi(params, req, runtime), new AsrSentenceResponse({}));
  }

  async asrSentence(request: AsrSentenceRequest): Promise<AsrSentenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asrSentenceWithOptions(request, runtime);
  }

  async asrTaskWithOptions(tmpReq: AsrTaskRequest, runtime: $Util.RuntimeOptions): Promise<AsrTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new AsrTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AsrTask",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AsrTaskResponse>(await this.callApi(params, req, runtime), new AsrTaskResponse({}));
  }

  async asrTask(request: AsrTaskRequest): Promise<AsrTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asrTaskWithOptions(request, runtime);
  }

  async associateRoomWithOptions(request: AssociateRoomRequest, runtime: $Util.RuntimeOptions): Promise<AssociateRoomResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.roomId)) {
      query["RoomId"] = request.roomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateRoom",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateRoomResponse>(await this.callApi(params, req, runtime), new AssociateRoomResponse({}));
  }

  async associateRoom(request: AssociateRoomRequest): Promise<AssociateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateRoomWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createDepartmentWithOptions(request: CreateDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDepartment",
      version: "2020-06-30",
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

  async createDetectProcessWithOptions(request: CreateDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateDetectProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.draft)) {
      query["Draft"] = request.draft;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDetectProcess",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDetectProcessResponse>(await this.callApi(params, req, runtime), new CreateDetectProcessResponse({}));
  }

  async createDetectProcess(request: CreateDetectProcessRequest): Promise<CreateDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDetectProcessWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRule",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRuleResponse>(await this.callApi(params, req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async createSignatureWithOptions(request: CreateSignatureRequest, runtime: $Util.RuntimeOptions): Promise<CreateSignatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSignature",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSignatureResponse>(await this.callApi(params, req, runtime), new CreateSignatureResponse({}));
  }

  async createSignature(request: CreateSignatureRequest): Promise<CreateSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSignatureWithOptions(request, runtime);
  }

  async createTaskGroupWithOptions(request: CreateTaskGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.day)) {
      query["Day"] = request.day;
    }

    if (!Util.isUnset(request.expireAt)) {
      query["ExpireAt"] = request.expireAt;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.runnableTimeFrom)) {
      query["RunnableTimeFrom"] = request.runnableTimeFrom;
    }

    if (!Util.isUnset(request.runnableTimeTo)) {
      query["RunnableTimeTo"] = request.runnableTimeTo;
    }

    if (!Util.isUnset(request.triggerPeriod)) {
      query["TriggerPeriod"] = request.triggerPeriod;
    }

    if (!Util.isUnset(request.videoInfo)) {
      query["VideoInfo"] = request.videoInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskGroup",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskGroupResponse>(await this.callApi(params, req, runtime), new CreateTaskGroupResponse({}));
  }

  async createTaskGroup(request: CreateTaskGroupRequest): Promise<CreateTaskGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskGroupWithOptions(request, runtime);
  }

  async createTtsQuestionWithOptions(tmpReq: CreateTtsQuestionRequest, runtime: $Util.RuntimeOptions): Promise<CreateTtsQuestionResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTtsQuestionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTtsQuestion",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTtsQuestionResponse>(await this.callApi(params, req, runtime), new CreateTtsQuestionResponse({}));
  }

  async createTtsQuestion(request: CreateTtsQuestionRequest): Promise<CreateTtsQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTtsQuestionWithOptions(request, runtime);
  }

  async createTtsQuestionGroupWithOptions(tmpReq: CreateTtsQuestionGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateTtsQuestionGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTtsQuestionGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTtsQuestionGroup",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTtsQuestionGroupResponse>(await this.callApi(params, req, runtime), new CreateTtsQuestionGroupResponse({}));
  }

  async createTtsQuestionGroup(request: CreateTtsQuestionGroupRequest): Promise<CreateTtsQuestionGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTtsQuestionGroupWithOptions(request, runtime);
  }

  async createUserDepartmentsWithOptions(request: CreateUserDepartmentsRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserDepartmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserDepartments",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserDepartmentsResponse>(await this.callApi(params, req, runtime), new CreateUserDepartmentsResponse({}));
  }

  async createUserDepartments(request: CreateUserDepartmentsRequest): Promise<CreateUserDepartmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserDepartmentsWithOptions(request, runtime);
  }

  async createVideoMergeTaskWithOptions(tmpReq: CreateVideoMergeTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoMergeTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateVideoMergeTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.videoMergeRequest)) {
      request.videoMergeRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoMergeRequest, "VideoMergeRequest", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.videoMergeRequestShrink)) {
      body["VideoMergeRequest"] = request.videoMergeRequestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVideoMergeTask",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVideoMergeTaskResponse>(await this.callApi(params, req, runtime), new CreateVideoMergeTaskResponse({}));
  }

  async createVideoMergeTask(request: CreateVideoMergeTaskRequest): Promise<CreateVideoMergeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoMergeTaskWithOptions(request, runtime);
  }

  async createWatermarkWithOptions(request: CreateWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<CreateWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWatermark",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWatermarkResponse>(await this.callApi(params, req, runtime), new CreateWatermarkResponse({}));
  }

  async createWatermark(request: CreateWatermarkRequest): Promise<CreateWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWatermarkWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteDepartmentWithOptions(request: DeleteDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDepartment",
      version: "2020-06-30",
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

  async deleteDetectProcessWithOptions(request: DeleteDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDetectProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDetectProcess",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDetectProcessResponse>(await this.callApi(params, req, runtime), new DeleteDetectProcessResponse({}));
  }

  async deleteDetectProcess(request: DeleteDetectProcessRequest): Promise<DeleteDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDetectProcessWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRule",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2020-06-30",
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

  async deleteUserDepartmentsWithOptions(request: DeleteUserDepartmentsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserDepartmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserDepartments",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserDepartmentsResponse>(await this.callApi(params, req, runtime), new DeleteUserDepartmentsResponse({}));
  }

  async deleteUserDepartments(request: DeleteUserDepartmentsRequest): Promise<DeleteUserDepartmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserDepartmentsWithOptions(request, runtime);
  }

  async deleteWatermarkWithOptions(request: DeleteWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWatermark",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWatermarkResponse>(await this.callApi(params, req, runtime), new DeleteWatermarkResponse({}));
  }

  async deleteWatermark(request: DeleteWatermarkRequest): Promise<DeleteWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWatermarkWithOptions(request, runtime);
  }

  async faceCompareWithOptions(tmpReq: FaceCompareRequest, runtime: $Util.RuntimeOptions): Promise<FaceCompareResponse> {
    Util.validateModel(tmpReq);
    let request = new FaceCompareShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.faceRequest)) {
      request.faceRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.faceRequest, "FaceRequest", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.faceRequestShrink)) {
      body["FaceRequest"] = request.faceRequestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FaceCompare",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FaceCompareResponse>(await this.callApi(params, req, runtime), new FaceCompareResponse({}));
  }

  async faceCompare(request: FaceCompareRequest): Promise<FaceCompareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceCompareWithOptions(request, runtime);
  }

  async faceLivenessWithOptions(tmpReq: FaceLivenessRequest, runtime: $Util.RuntimeOptions): Promise<FaceLivenessResponse> {
    Util.validateModel(tmpReq);
    let request = new FaceLivenessShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.faceRequest)) {
      request.faceRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.faceRequest, "FaceRequest", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.faceRequestShrink)) {
      body["FaceRequest"] = request.faceRequestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FaceLiveness",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FaceLivenessResponse>(await this.callApi(params, req, runtime), new FaceLivenessResponse({}));
  }

  async faceLiveness(request: FaceLivenessRequest): Promise<FaceLivenessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceLivenessWithOptions(request, runtime);
  }

  async faceRecognizeWithOptions(tmpReq: FaceRecognizeRequest, runtime: $Util.RuntimeOptions): Promise<FaceRecognizeResponse> {
    Util.validateModel(tmpReq);
    let request = new FaceRecognizeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.faceRequest)) {
      request.faceRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.faceRequest, "FaceRequest", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.faceRequestShrink)) {
      body["FaceRequest"] = request.faceRequestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FaceRecognize",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FaceRecognizeResponse>(await this.callApi(params, req, runtime), new FaceRecognizeResponse({}));
  }

  async faceRecognize(request: FaceRecognizeRequest): Promise<FaceRecognizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceRecognizeWithOptions(request, runtime);
  }

  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApp",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
  }

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  async getAsrResultWithOptions(request: GetAsrResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsrResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asrTaskId)) {
      query["AsrTaskId"] = request.asrTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsrResult",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsrResultResponse>(await this.callApi(params, req, runtime), new GetAsrResultResponse({}));
  }

  async getAsrResult(request: GetAsrResultRequest): Promise<GetAsrResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsrResultWithOptions(request, runtime);
  }

  async getDepartmentWithOptions(request: GetDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<GetDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDepartment",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDepartmentResponse>(await this.callApi(params, req, runtime), new GetDepartmentResponse({}));
  }

  async getDepartment(request: GetDepartmentRequest): Promise<GetDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDepartmentWithOptions(request, runtime);
  }

  async getDetectProcessWithOptions(request: GetDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDetectProcess",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDetectProcessResponse>(await this.callApi(params, req, runtime), new GetDetectProcessResponse({}));
  }

  async getDetectProcess(request: GetDetectProcessRequest): Promise<GetDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectProcessWithOptions(request, runtime);
  }

  async getDetectProcessJsonFileWithOptions(request: GetDetectProcessJsonFileRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectProcessJsonFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDetectProcessJsonFile",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDetectProcessJsonFileResponse>(await this.callApi(params, req, runtime), new GetDetectProcessJsonFileResponse({}));
  }

  async getDetectProcessJsonFile(request: GetDetectProcessJsonFileRequest): Promise<GetDetectProcessJsonFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectProcessJsonFileWithOptions(request, runtime);
  }

  async getDetectionWithOptions(request: GetDetectionRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDetection",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDetectionResponse>(await this.callApi(params, req, runtime), new GetDetectionResponse({}));
  }

  async getDetection(request: GetDetectionRequest): Promise<GetDetectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectionWithOptions(request, runtime);
  }

  async getPreSignedUrlWithOptions(request: GetPreSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetPreSignedUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.prefix)) {
      body["Prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPreSignedUrl",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPreSignedUrlResponse>(await this.callApi(params, req, runtime), new GetPreSignedUrlResponse({}));
  }

  async getPreSignedUrl(request: GetPreSignedUrlRequest): Promise<GetPreSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPreSignedUrlWithOptions(request, runtime);
  }

  async getRecordResultWithOptions(request: GetRecordResultRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRecordResult",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRecordResultResponse>(await this.callApi(params, req, runtime), new GetRecordResultResponse({}));
  }

  async getRecordResult(request: GetRecordResultRequest): Promise<GetRecordResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordResultWithOptions(request, runtime);
  }

  async getRecordsByFeeIdWithOptions(request: GetRecordsByFeeIdRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordsByFeeIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.feeId)) {
      body["FeeId"] = request.feeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRecordsByFeeId",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRecordsByFeeIdResponse>(await this.callApi(params, req, runtime), new GetRecordsByFeeIdResponse({}));
  }

  async getRecordsByFeeId(request: GetRecordsByFeeIdRequest): Promise<GetRecordsByFeeIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordsByFeeIdWithOptions(request, runtime);
  }

  async getRecordsByOuterBusinessIdWithOptions(request: GetRecordsByOuterBusinessIdRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordsByOuterBusinessIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outerBusinessId)) {
      query["OuterBusinessId"] = request.outerBusinessId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRecordsByOuterBusinessId",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRecordsByOuterBusinessIdResponse>(await this.callApi(params, req, runtime), new GetRecordsByOuterBusinessIdResponse({}));
  }

  async getRecordsByOuterBusinessId(request: GetRecordsByOuterBusinessIdRequest): Promise<GetRecordsByOuterBusinessIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordsByOuterBusinessIdWithOptions(request, runtime);
  }

  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRule",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleResponse>(await this.callApi(params, req, runtime), new GetRuleResponse({}));
  }

  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  async getStatisticsRecordsByFeeIdWithOptions(request: GetStatisticsRecordsByFeeIdRequest, runtime: $Util.RuntimeOptions): Promise<GetStatisticsRecordsByFeeIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.feeId)) {
      body["FeeId"] = request.feeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStatisticsRecordsByFeeId",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStatisticsRecordsByFeeIdResponse>(await this.callApi(params, req, runtime), new GetStatisticsRecordsByFeeIdResponse({}));
  }

  async getStatisticsRecordsByFeeId(request: GetStatisticsRecordsByFeeIdRequest): Promise<GetStatisticsRecordsByFeeIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStatisticsRecordsByFeeIdWithOptions(request, runtime);
  }

  async getTaskWithOptions(request: GetTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  async getTask(request: GetTaskRequest): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  /**
    * **1**
    *
    * @param request GetTaskGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetTaskGroupResponse
   */
  async getTaskGroupWithOptions(request: GetTaskGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskGroup",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskGroupResponse>(await this.callApi(params, req, runtime), new GetTaskGroupResponse({}));
  }

  /**
    * **1**
    *
    * @param request GetTaskGroupRequest
    * @return GetTaskGroupResponse
   */
  async getTaskGroup(request: GetTaskGroupRequest): Promise<GetTaskGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskGroupWithOptions(request, runtime);
  }

  async getTtsQuestionByGroupIdWithOptions(request: GetTtsQuestionByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<GetTtsQuestionByGroupIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTtsQuestionByGroupId",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTtsQuestionByGroupIdResponse>(await this.callApi(params, req, runtime), new GetTtsQuestionByGroupIdResponse({}));
  }

  async getTtsQuestionByGroupId(request: GetTtsQuestionByGroupIdRequest): Promise<GetTtsQuestionByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTtsQuestionByGroupIdWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2020-06-30",
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

  async getVideoMergeTaskWithOptions(request: GetVideoMergeTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoMergeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoMergeTask",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoMergeTaskResponse>(await this.callApi(params, req, runtime), new GetVideoMergeTaskResponse({}));
  }

  async getVideoMergeTask(request: GetVideoMergeTaskRequest): Promise<GetVideoMergeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoMergeTaskWithOptions(request, runtime);
  }

  async getWatermarkWithOptions(request: GetWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<GetWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWatermark",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWatermarkResponse>(await this.callApi(params, req, runtime), new GetWatermarkResponse({}));
  }

  async getWatermark(request: GetWatermarkRequest): Promise<GetWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWatermarkWithOptions(request, runtime);
  }

  async joinRoomWithOptions(request: JoinRoomRequest, runtime: $Util.RuntimeOptions): Promise<JoinRoomResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.roomId)) {
      query["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.roomToken)) {
      query["RoomToken"] = request.roomToken;
    }

    if (!Util.isUnset(request.streamId)) {
      query["StreamId"] = request.streamId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JoinRoom",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinRoomResponse>(await this.callApi(params, req, runtime), new JoinRoomResponse({}));
  }

  async joinRoom(request: JoinRoomRequest): Promise<JoinRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinRoomWithOptions(request, runtime);
  }

  async leaveRoomWithOptions(request: LeaveRoomRequest, runtime: $Util.RuntimeOptions): Promise<LeaveRoomResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roomId)) {
      query["RoomId"] = request.roomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LeaveRoom",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LeaveRoomResponse>(await this.callApi(params, req, runtime), new LeaveRoomResponse({}));
  }

  async leaveRoom(request: LeaveRoomRequest): Promise<LeaveRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.leaveRoomWithOptions(request, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApps",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async listDepartmentsWithOptions(request: ListDepartmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListDepartmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDepartments",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDepartmentsResponse>(await this.callApi(params, req, runtime), new ListDepartmentsResponse({}));
  }

  async listDepartments(request: ListDepartmentsRequest): Promise<ListDepartmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDepartmentsWithOptions(request, runtime);
  }

  async listDetectProcessesWithOptions(request: ListDetectProcessesRequest, runtime: $Util.RuntimeOptions): Promise<ListDetectProcessesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.publishStatus)) {
      query["PublishStatus"] = request.publishStatus;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.sortKey)) {
      query["SortKey"] = request.sortKey;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDetectProcesses",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDetectProcessesResponse>(await this.callApi(params, req, runtime), new ListDetectProcessesResponse({}));
  }

  async listDetectProcesses(request: ListDetectProcessesRequest): Promise<ListDetectProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDetectProcessesWithOptions(request, runtime);
  }

  async listDetectionsWithOptions(request: ListDetectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListDetectionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createDateFrom)) {
      query["CreateDateFrom"] = request.createDateFrom;
    }

    if (!Util.isUnset(request.createDateTo)) {
      query["CreateDateTo"] = request.createDateTo;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.recordingType)) {
      query["RecordingType"] = request.recordingType;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDetections",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDetectionsResponse>(await this.callApi(params, req, runtime), new ListDetectionsResponse({}));
  }

  async listDetections(request: ListDetectionsRequest): Promise<ListDetectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDetectionsWithOptions(request, runtime);
  }

  async listFilesWithOptions(request: ListFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFiles",
      version: "2020-06-30",
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

  async listRecordResultsWithOptions(request: ListRecordResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListRecordResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createDateFrom)) {
      query["CreateDateFrom"] = request.createDateFrom;
    }

    if (!Util.isUnset(request.createDateTo)) {
      query["CreateDateTo"] = request.createDateTo;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.outerBusinessId)) {
      query["OuterBusinessId"] = request.outerBusinessId;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRecordResults",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRecordResultsResponse>(await this.callApi(params, req, runtime), new ListRecordResultsResponse({}));
  }

  async listRecordResults(request: ListRecordResultsRequest): Promise<ListRecordResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecordResultsWithOptions(request, runtime);
  }

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRules",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRulesResponse>(await this.callApi(params, req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async listTaskGroupsWithOptions(request: ListTaskGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskGroups",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTaskGroupsResponse>(await this.callApi(params, req, runtime), new ListTaskGroupsResponse({}));
  }

  async listTaskGroups(request: ListTaskGroupsRequest): Promise<ListTaskGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskGroupsWithOptions(request, runtime);
  }

  async listTaskItemsWithOptions(request: ListTaskItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskItems",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTaskItemsResponse>(await this.callApi(params, req, runtime), new ListTaskItemsResponse({}));
  }

  async listTaskItems(request: ListTaskItemsRequest): Promise<ListTaskItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskItemsWithOptions(request, runtime);
  }

  async listTasksWithOptions(request: ListTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskGroupId)) {
      query["TaskGroupId"] = request.taskGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2020-06-30",
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

  async listWatermarksWithOptions(request: ListWatermarksRequest, runtime: $Util.RuntimeOptions): Promise<ListWatermarksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWatermarks",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWatermarksResponse>(await this.callApi(params, req, runtime), new ListWatermarksResponse({}));
  }

  async listWatermarks(request: ListWatermarksRequest): Promise<ListWatermarksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWatermarksWithOptions(request, runtime);
  }

  async renameDetectProcessWithOptions(request: RenameDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<RenameDetectProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenameDetectProcess",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameDetectProcessResponse>(await this.callApi(params, req, runtime), new RenameDetectProcessResponse({}));
  }

  async renameDetectProcess(request: RenameDetectProcessRequest): Promise<RenameDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameDetectProcessWithOptions(request, runtime);
  }

  async ttsCommonWithOptions(tmpReq: TtsCommonRequest, runtime: $Util.RuntimeOptions): Promise<TtsCommonResponse> {
    Util.validateModel(tmpReq);
    let request = new TtsCommonShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ttsRequest)) {
      request.ttsRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ttsRequest, "TtsRequest", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ttsRequestShrink)) {
      body["TtsRequest"] = request.ttsRequestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TtsCommon",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TtsCommonResponse>(await this.callApi(params, req, runtime), new TtsCommonResponse({}));
  }

  async ttsCommon(request: TtsCommonRequest): Promise<TtsCommonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ttsCommonWithOptions(request, runtime);
  }

  async ttsTaskWithOptions(tmpReq: TtsTaskRequest, runtime: $Util.RuntimeOptions): Promise<TtsTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new TtsTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TtsTask",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TtsTaskResponse>(await this.callApi(params, req, runtime), new TtsTaskResponse({}));
  }

  async ttsTask(request: TtsTaskRequest): Promise<TtsTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ttsTaskWithOptions(request, runtime);
  }

  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApp",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  async updateDepartmentWithOptions(request: UpdateDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDepartment",
      version: "2020-06-30",
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

  /**
    * ********
    *
    * @param request UpdateDetectProcessRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDetectProcessResponse
   */
  async updateDetectProcessWithOptions(request: UpdateDetectProcessRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDetectProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.draft)) {
      query["Draft"] = request.draft;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDetectProcess",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDetectProcessResponse>(await this.callApi(params, req, runtime), new UpdateDetectProcessResponse({}));
  }

  /**
    * ********
    *
    * @param request UpdateDetectProcessRequest
    * @return UpdateDetectProcessResponse
   */
  async updateDetectProcess(request: UpdateDetectProcessRequest): Promise<UpdateDetectProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDetectProcessWithOptions(request, runtime);
  }

  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRule",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRuleResponse>(await this.callApi(params, req, runtime), new UpdateRuleResponse({}));
  }

  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2020-06-30",
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

  async updateWatermarkWithOptions(request: UpdateWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    if (!Util.isUnset(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWatermark",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWatermarkResponse>(await this.callApi(params, req, runtime), new UpdateWatermarkResponse({}));
  }

  async updateWatermark(request: UpdateWatermarkRequest): Promise<UpdateWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWatermarkWithOptions(request, runtime);
  }

  async uploadReportWithOptions(request: UploadReportRequest, runtime: $Util.RuntimeOptions): Promise<UploadReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientBaseParam)) {
      query["ClientBaseParam"] = request.clientBaseParam;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.detectProcessId)) {
      query["DetectProcessId"] = request.detectProcessId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.feeId)) {
      query["FeeId"] = request.feeId;
    }

    if (!Util.isUnset(request.metaUrl)) {
      query["MetaUrl"] = request.metaUrl;
    }

    if (!Util.isUnset(request.outerBusinessId)) {
      query["OuterBusinessId"] = request.outerBusinessId;
    }

    if (!Util.isUnset(request.recordAt)) {
      query["RecordAt"] = request.recordAt;
    }

    if (!Util.isUnset(request.resultUrl)) {
      query["ResultUrl"] = request.resultUrl;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.roomId)) {
      query["RoomId"] = request.roomId;
    }

    if (!Util.isUnset(request.rtcRecordId)) {
      query["RtcRecordId"] = request.rtcRecordId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.videoType)) {
      query["VideoType"] = request.videoType;
    }

    if (!Util.isUnset(request.videoUrl)) {
      query["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadReport",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadReportResponse>(await this.callApi(params, req, runtime), new UploadReportResponse({}));
  }

  async uploadReport(request: UploadReportRequest): Promise<UploadReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadReportWithOptions(request, runtime);
  }

}
