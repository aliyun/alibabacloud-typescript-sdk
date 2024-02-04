// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AssociateChatbotInstanceRequest extends $tea.Model {
  chatbotInstanceId?: string;
  chatbotName?: string;
  instanceId?: string;
  nluServiceParamsJson?: string;
  nluServiceType?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      chatbotInstanceId: 'ChatbotInstanceId',
      chatbotName: 'ChatbotName',
      instanceId: 'InstanceId',
      nluServiceParamsJson: 'NluServiceParamsJson',
      nluServiceType: 'NluServiceType',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatbotInstanceId: 'string',
      chatbotName: 'string',
      instanceId: 'string',
      nluServiceParamsJson: 'string',
      nluServiceType: 'string',
      unionSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateChatbotInstanceResponseBody extends $tea.Model {
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

export class AssociateChatbotInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateChatbotInstanceResponseBody;
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
      body: AssociateChatbotInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditTTSVoiceRequest extends $tea.Model {
  accessKey?: string;
  appKey?: string;
  engine?: string;
  instanceId?: string;
  pitchRate?: string;
  secretKey?: string;
  speechRate?: string;
  text?: string;
  voice?: string;
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      appKey: 'AppKey',
      engine: 'Engine',
      instanceId: 'InstanceId',
      pitchRate: 'PitchRate',
      secretKey: 'SecretKey',
      speechRate: 'SpeechRate',
      text: 'Text',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      appKey: 'string',
      engine: 'string',
      instanceId: 'string',
      pitchRate: 'string',
      secretKey: 'string',
      speechRate: 'string',
      text: 'string',
      voice: 'string',
      volume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditTTSVoiceResponseBody extends $tea.Model {
  auditionUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      auditionUrl: 'AuditionUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditionUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditTTSVoiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuditTTSVoiceResponseBody;
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
      body: AuditTTSVoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginDialogueRequest extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  conversationId?: string;
  initialContext?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      initialContext: 'InitialContext',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      initialContext: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginDialogueResponseBody extends $tea.Model {
  action?: string;
  actionParams?: string;
  interruptible?: boolean;
  requestId?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginDialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BeginDialogueResponseBody;
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
      body: BeginDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectedNumberRequest extends $tea.Model {
  additionalContext?: string;
  conversationId?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      additionalContext: 'AdditionalContext',
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalContext: 'string',
      conversationId: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectedNumberResponseBody extends $tea.Model {
  action?: string;
  actionParams?: string;
  interruptible?: boolean;
  requestId?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectedNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CollectedNumberResponseBody;
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
      body: CollectedNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadUrlRequest extends $tea.Model {
  downloadTaskId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  fileHttpUrl?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileHttpUrl: 'FileHttpUrl',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileHttpUrl: 'string',
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

export class CreateDownloadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDownloadUrlResponseBody;
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
      body: CreateDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  concurrency?: number;
  description?: string;
  name?: string;
  nluServiceParamsJson?: string;
  unionInstanceId?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      name: 'Name',
      nluServiceParamsJson: 'NluServiceParamsJson',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
      name: 'string',
      nluServiceParamsJson: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugBeginDialogueRequest extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  conversationId?: string;
  initialContext?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      initialContext: 'InitialContext',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      initialContext: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugBeginDialogueResponseBody extends $tea.Model {
  action?: string;
  actionParams?: string;
  interruptible?: boolean;
  requestId?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugBeginDialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DebugBeginDialogueResponseBody;
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
      body: DebugBeginDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugCollectedNumberRequest extends $tea.Model {
  conversationId?: string;
  instanceId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugCollectedNumberResponseBody extends $tea.Model {
  action?: string;
  actionParams?: string;
  interruptible?: boolean;
  requestId?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugCollectedNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DebugCollectedNumberResponseBody;
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
      body: DebugCollectedNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugDialogueRequest extends $tea.Model {
  additionalContext?: string;
  conversationId?: string;
  instanceId?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      additionalContext: 'AdditionalContext',
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalContext: 'string',
      conversationId: 'string',
      instanceId: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugDialogueResponseBody extends $tea.Model {
  action?: string;
  actionParams?: string;
  interruptible?: boolean;
  requestId?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugDialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DebugDialogueResponseBody;
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
      body: DebugDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
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

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
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
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationRequest extends $tea.Model {
  conversationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationResponseBody extends $tea.Model {
  beginTime?: number;
  callingNumber?: string;
  conversationId?: string;
  effectiveAnswerCount?: number;
  endTime?: number;
  requestId?: string;
  skillGroupId?: string;
  transferredToAgent?: boolean;
  userUtteranceCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      effectiveAnswerCount: 'EffectiveAnswerCount',
      endTime: 'EndTime',
      requestId: 'RequestId',
      skillGroupId: 'SkillGroupId',
      transferredToAgent: 'TransferredToAgent',
      userUtteranceCount: 'UserUtteranceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      callingNumber: 'string',
      conversationId: 'string',
      effectiveAnswerCount: 'number',
      endTime: 'number',
      requestId: 'string',
      skillGroupId: 'string',
      transferredToAgent: 'boolean',
      userUtteranceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConversationResponseBody;
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
      body: DescribeConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationContextRequest extends $tea.Model {
  conversationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationContextResponseBody extends $tea.Model {
  conversationContext?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationContext: 'ConversationContext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationContext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationContextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConversationContextResponseBody;
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
      body: DescribeConversationContextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportProgressRequest extends $tea.Model {
  exportTaskId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportProgressResponseBody extends $tea.Model {
  fileHttpUrl?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExportProgressResponseBody;
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
      body: DescribeExportProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
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

export class DescribeInstanceResponseBody extends $tea.Model {
  abilityType?: string;
  applicableOperations?: string[];
  concurrency?: number;
  description?: string;
  instanceId?: string;
  modifyTime?: number;
  modifyUserName?: string;
  name?: string;
  nluServiceParamsJson?: string;
  requestId?: string;
  status?: string;
  unionInstanceId?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      abilityType: 'AbilityType',
      applicableOperations: 'ApplicableOperations',
      concurrency: 'Concurrency',
      description: 'Description',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
      nluServiceParamsJson: 'NluServiceParamsJson',
      requestId: 'RequestId',
      status: 'Status',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityType: 'string',
      applicableOperations: { 'type': 'array', 'itemType': 'string' },
      concurrency: 'number',
      description: 'string',
      instanceId: 'string',
      modifyTime: 'number',
      modifyUserName: 'string',
      name: 'string',
      nluServiceParamsJson: 'string',
      requestId: 'string',
      status: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceResponseBody;
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
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigRequest extends $tea.Model {
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

export class DescribeNavigationConfigResponseBody extends $tea.Model {
  greetingConfig?: DescribeNavigationConfigResponseBodyGreetingConfig;
  requestId?: string;
  silenceTimeoutConfig?: DescribeNavigationConfigResponseBodySilenceTimeoutConfig;
  unrecognizingConfig?: DescribeNavigationConfigResponseBodyUnrecognizingConfig;
  static names(): { [key: string]: string } {
    return {
      greetingConfig: 'GreetingConfig',
      requestId: 'RequestId',
      silenceTimeoutConfig: 'SilenceTimeoutConfig',
      unrecognizingConfig: 'UnrecognizingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greetingConfig: DescribeNavigationConfigResponseBodyGreetingConfig,
      requestId: 'string',
      silenceTimeoutConfig: DescribeNavigationConfigResponseBodySilenceTimeoutConfig,
      unrecognizingConfig: DescribeNavigationConfigResponseBodyUnrecognizingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNavigationConfigResponseBody;
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
      body: DescribeNavigationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingRequest extends $tea.Model {
  conversationId?: string;
  instanceId?: string;
  needVoiceSliceRecording?: boolean;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      needVoiceSliceRecording: 'NeedVoiceSliceRecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
      needVoiceSliceRecording: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingResponseBody extends $tea.Model {
  fileName?: string;
  filePath?: string;
  requestId?: string;
  voiceSliceRecordingListJson?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      filePath: 'FilePath',
      requestId: 'RequestId',
      voiceSliceRecordingListJson: 'VoiceSliceRecordingListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePath: 'string',
      requestId: 'string',
      voiceSliceRecordingListJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecordingResponseBody;
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
      body: DescribeRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataRequest extends $tea.Model {
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  instanceId?: string;
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      instanceId: 'InstanceId',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      instanceId: 'string',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataResponseBody extends $tea.Model {
  conversationTotalNum?: number;
  requestId?: string;
  resolvedQuestionTotalNum?: number;
  statisticalDataReports?: DescribeStatisticalDataResponseBodyStatisticalDataReports[];
  totalDialoguePassRate?: string;
  totalKnowledgeHitRate?: string;
  totalResolutionRate?: string;
  totalValidAnswerRate?: string;
  static names(): { [key: string]: string } {
    return {
      conversationTotalNum: 'ConversationTotalNum',
      requestId: 'RequestId',
      resolvedQuestionTotalNum: 'ResolvedQuestionTotalNum',
      statisticalDataReports: 'StatisticalDataReports',
      totalDialoguePassRate: 'TotalDialoguePassRate',
      totalKnowledgeHitRate: 'TotalKnowledgeHitRate',
      totalResolutionRate: 'TotalResolutionRate',
      totalValidAnswerRate: 'TotalValidAnswerRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationTotalNum: 'number',
      requestId: 'string',
      resolvedQuestionTotalNum: 'number',
      statisticalDataReports: { 'type': 'array', 'itemType': DescribeStatisticalDataResponseBodyStatisticalDataReports },
      totalDialoguePassRate: 'string',
      totalKnowledgeHitRate: 'string',
      totalResolutionRate: 'string',
      totalValidAnswerRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStatisticalDataResponseBody;
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
      body: DescribeStatisticalDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigRequest extends $tea.Model {
  instanceId?: string;
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigResponseBody extends $tea.Model {
  appKey?: string;
  engine?: string;
  engineXunfei?: string;
  nlsServiceType?: string;
  pitchRate?: number;
  requestId?: string;
  speechRate?: number;
  voice?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      engine: 'Engine',
      engineXunfei: 'EngineXunfei',
      nlsServiceType: 'NlsServiceType',
      pitchRate: 'PitchRate',
      requestId: 'RequestId',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      engine: 'string',
      engineXunfei: 'string',
      nlsServiceType: 'string',
      pitchRate: 'number',
      requestId: 'string',
      speechRate: 'number',
      voice: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTTSConfigResponseBody;
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
      body: DescribeTTSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueRequest extends $tea.Model {
  additionalContext?: string;
  calledNumber?: string;
  callingNumber?: string;
  conversationId?: string;
  emotion?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      additionalContext: 'AdditionalContext',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      emotion: 'Emotion',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalContext: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      emotion: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBody extends $tea.Model {
  action?: string;
  actionParams?: string;
  interruptible?: boolean;
  requestId?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DialogueResponseBody;
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
      body: DialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstanceRequest extends $tea.Model {
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

export class DisableInstanceResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableInstanceResponseBody;
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
      body: DisableInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceRequest extends $tea.Model {
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

export class EnableInstanceResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableInstanceResponseBody;
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
      body: EnableInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndDialogueRequest extends $tea.Model {
  conversationId?: string;
  hangUpParams?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      hangUpParams: 'HangUpParams',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      hangUpParams: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndDialogueResponseBody extends $tea.Model {
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

export class EndDialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EndDialogueResponseBody;
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
      body: EndDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConversationDetailsRequest extends $tea.Model {
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  callingNumber?: string;
  instanceId?: string;
  options?: string[];
  result?: number;
  roundsLeftRange?: number;
  roundsRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      options: 'Options',
      result: 'Result',
      roundsLeftRange: 'RoundsLeftRange',
      roundsRightRange: 'RoundsRightRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      callingNumber: 'string',
      instanceId: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
      result: 'number',
      roundsLeftRange: 'number',
      roundsRightRange: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConversationDetailsResponseBody extends $tea.Model {
  exportTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConversationDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportConversationDetailsResponseBody;
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
      body: ExportConversationDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportStatisticalDataRequest extends $tea.Model {
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  exportType?: string;
  instanceId?: string;
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      exportType: 'ExportType',
      instanceId: 'InstanceId',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      exportType: 'string',
      instanceId: 'string',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportStatisticalDataResponseBody extends $tea.Model {
  exportTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportStatisticalDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportStatisticalDataResponseBody;
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
      body: ExportStatisticalDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlRequest extends $tea.Model {
  callerBid?: string;
  callerIp?: string;
  callerParentId?: number;
  callerType?: string;
  callerUid?: number;
  clientIp?: string;
  environment?: number;
  fileName?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  key?: string;
  mfaPresent?: boolean;
  proxyOriginalSecurityTransport?: boolean;
  proxyOriginalSourceIp?: string;
  proxyTrustTransportInfo?: boolean;
  requestId?: string;
  securityToken?: string;
  securityTransport?: boolean;
  tenantId?: number;
  tenantName?: string;
  userId?: number;
  userName?: string;
  xspaceServicerId?: number;
  xspaceTenantBuId?: number;
  static names(): { [key: string]: string } {
    return {
      callerBid: 'CallerBid',
      callerIp: 'CallerIp',
      callerParentId: 'CallerParentId',
      callerType: 'CallerType',
      callerUid: 'CallerUid',
      clientIp: 'ClientIp',
      environment: 'Environment',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      key: 'Key',
      mfaPresent: 'MfaPresent',
      proxyOriginalSecurityTransport: 'ProxyOriginalSecurityTransport',
      proxyOriginalSourceIp: 'ProxyOriginalSourceIp',
      proxyTrustTransportInfo: 'ProxyTrustTransportInfo',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      securityTransport: 'SecurityTransport',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      userId: 'UserId',
      userName: 'UserName',
      xspaceServicerId: 'XspaceServicerId',
      xspaceTenantBuId: 'XspaceTenantBuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerBid: 'string',
      callerIp: 'string',
      callerParentId: 'number',
      callerType: 'string',
      callerUid: 'number',
      clientIp: 'string',
      environment: 'number',
      fileName: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      key: 'string',
      mfaPresent: 'boolean',
      proxyOriginalSecurityTransport: 'boolean',
      proxyOriginalSourceIp: 'string',
      proxyTrustTransportInfo: 'boolean',
      requestId: 'string',
      securityToken: 'string',
      securityTransport: 'boolean',
      tenantId: 'number',
      tenantName: 'string',
      userId: 'number',
      userName: 'string',
      xspaceServicerId: 'number',
      xspaceTenantBuId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateUploadUrlResponseBodyData;
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
      data: GenerateUploadUrlResponseBodyData,
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

export class GenerateUploadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateUploadUrlResponseBody;
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
      body: GenerateUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrConfigRequest extends $tea.Model {
  configLevel?: number;
  entryId?: string;
  static names(): { [key: string]: string } {
    return {
      configLevel: 'ConfigLevel',
      entryId: 'EntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configLevel: 'number',
      entryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetAsrConfigResponseBodyData;
  errorMsg?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAsrConfigResponseBodyData,
      errorMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsrConfigResponseBody;
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
      body: GetAsrConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealTimeConcurrencyRequest extends $tea.Model {
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

export class GetRealTimeConcurrencyResponseBody extends $tea.Model {
  maxConcurrency?: number;
  realTimeConcurrency?: number;
  requestId?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      maxConcurrency: 'MaxConcurrency',
      realTimeConcurrency: 'RealTimeConcurrency',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxConcurrency: 'number',
      realTimeConcurrency: 'number',
      requestId: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealTimeConcurrencyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRealTimeConcurrencyResponseBody;
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
      body: GetRealTimeConcurrencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesRequest extends $tea.Model {
  instanceId?: string;
  nluServiceParamsJson?: string;
  nluServiceType?: string;
  pageNumber?: number;
  pageSize?: number;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nluServiceParamsJson: 'NluServiceParamsJson',
      nluServiceType: 'NluServiceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nluServiceParamsJson: 'string',
      nluServiceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      unionSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponseBody extends $tea.Model {
  bots?: ListChatbotInstancesResponseBodyBots[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bots: 'Bots',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bots: { 'type': 'array', 'itemType': ListChatbotInstancesResponseBodyBots },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChatbotInstancesResponseBody;
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
      body: ListChatbotInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsRequest extends $tea.Model {
  conversationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsResponseBody extends $tea.Model {
  conversationDetails?: ListConversationDetailsResponseBodyConversationDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationDetails: 'ConversationDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationDetails: { 'type': 'array', 'itemType': ListConversationDetailsResponseBodyConversationDetails },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConversationDetailsResponseBody;
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
      body: ListConversationDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsRequest extends $tea.Model {
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  callingNumber?: string;
  instanceId?: string;
  isSandBox?: string;
  pageNumber?: number;
  pageSize?: number;
  query?: string;
  result?: number;
  roundsLeftRange?: number;
  roundsRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      isSandBox: 'IsSandBox',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      result: 'Result',
      roundsLeftRange: 'RoundsLeftRange',
      roundsRightRange: 'RoundsRightRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      callingNumber: 'string',
      instanceId: 'string',
      isSandBox: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      result: 'number',
      roundsLeftRange: 'number',
      roundsRightRange: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsResponseBody extends $tea.Model {
  conversations?: ListConversationsResponseBodyConversations[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      conversations: 'Conversations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversations: { 'type': 'array', 'itemType': ListConversationsResponseBodyConversations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConversationsResponseBody;
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
      body: ListConversationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksRequest extends $tea.Model {
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

export class ListDownloadTasksResponseBody extends $tea.Model {
  code?: string;
  downloadTasks?: ListDownloadTasksResponseBodyDownloadTasks;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadTasks: 'DownloadTasks',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadTasks: ListDownloadTasksResponseBodyDownloadTasks,
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

export class ListDownloadTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDownloadTasksResponseBody;
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
      body: ListDownloadTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  instanceIdListJsonString?: string;
  name?: string;
  nluServiceTypeListJsonString?: string;
  number?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  unionInstanceId?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdListJsonString: 'InstanceIdListJsonString',
      name: 'Name',
      nluServiceTypeListJsonString: 'NluServiceTypeListJsonString',
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdListJsonString: 'string',
      name: 'string',
      nluServiceTypeListJsonString: 'string',
      number: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  instances?: ListInstancesResponseBodyInstances[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
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
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAsrConfigRequest extends $tea.Model {
  asrAcousticModelId?: string;
  asrClassVocabularyId?: string;
  asrCustomizationId?: string;
  asrVocabularyId?: string;
  configLevel?: number;
  entryId?: string;
  static names(): { [key: string]: string } {
    return {
      asrAcousticModelId: 'AsrAcousticModelId',
      asrClassVocabularyId: 'AsrClassVocabularyId',
      asrCustomizationId: 'AsrCustomizationId',
      asrVocabularyId: 'AsrVocabularyId',
      configLevel: 'ConfigLevel',
      entryId: 'EntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrAcousticModelId: 'string',
      asrClassVocabularyId: 'string',
      asrCustomizationId: 'string',
      asrVocabularyId: 'string',
      configLevel: 'number',
      entryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAsrConfigResponseBody extends $tea.Model {
  code?: string;
  data?: ModifyAsrConfigResponseBodyData;
  errorMsg?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifyAsrConfigResponseBodyData,
      errorMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAsrConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAsrConfigResponseBody;
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
      body: ModifyAsrConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGreetingConfigRequest extends $tea.Model {
  greetingWords?: string;
  instanceId?: string;
  intentTrigger?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      greetingWords: 'GreetingWords',
      instanceId: 'InstanceId',
      intentTrigger: 'IntentTrigger',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greetingWords: 'string',
      instanceId: 'string',
      intentTrigger: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGreetingConfigResponseBody extends $tea.Model {
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

export class ModifyGreetingConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGreetingConfigResponseBody;
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
      body: ModifyGreetingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  concurrency?: number;
  description?: string;
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
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

export class ModifyInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceResponseBody;
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
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySilenceTimeoutConfigRequest extends $tea.Model {
  finalAction?: string;
  finalActionParams?: string;
  finalPrompt?: string;
  instanceId?: string;
  intentTrigger?: string;
  prompt?: string;
  sourceType?: string;
  threshold?: number;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      finalPrompt: 'FinalPrompt',
      instanceId: 'InstanceId',
      intentTrigger: 'IntentTrigger',
      prompt: 'Prompt',
      sourceType: 'SourceType',
      threshold: 'Threshold',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalAction: 'string',
      finalActionParams: 'string',
      finalPrompt: 'string',
      instanceId: 'string',
      intentTrigger: 'string',
      prompt: 'string',
      sourceType: 'string',
      threshold: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySilenceTimeoutConfigResponseBody extends $tea.Model {
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

export class ModifySilenceTimeoutConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySilenceTimeoutConfigResponseBody;
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
      body: ModifySilenceTimeoutConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTTSConfigRequest extends $tea.Model {
  appKey?: string;
  engine?: string;
  engineXunfei?: string;
  instanceId?: string;
  nlsServiceType?: string;
  speechRate?: string;
  voice?: string;
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      engine: 'Engine',
      engineXunfei: 'EngineXunfei',
      instanceId: 'InstanceId',
      nlsServiceType: 'NlsServiceType',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      engine: 'string',
      engineXunfei: 'string',
      instanceId: 'string',
      nlsServiceType: 'string',
      speechRate: 'string',
      voice: 'string',
      volume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTTSConfigResponseBody extends $tea.Model {
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

export class ModifyTTSConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTTSConfigResponseBody;
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
      body: ModifyTTSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUnrecognizingConfigRequest extends $tea.Model {
  finalAction?: string;
  finalActionParams?: string;
  finalPrompt?: string;
  instanceId?: string;
  prompt?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      finalPrompt: 'FinalPrompt',
      instanceId: 'InstanceId',
      prompt: 'Prompt',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalAction: 'string',
      finalActionParams: 'string',
      finalPrompt: 'string',
      instanceId: 'string',
      prompt: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUnrecognizingConfigResponseBody extends $tea.Model {
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

export class ModifyUnrecognizingConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUnrecognizingConfigResponseBody;
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
      body: ModifyUnrecognizingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsRequest extends $tea.Model {
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  callingNumber?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      callingNumber: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsResponseBody extends $tea.Model {
  conversations?: QueryConversationsResponseBodyConversations[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      conversations: 'Conversations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversations: { 'type': 'array', 'itemType': QueryConversationsResponseBodyConversations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryConversationsResponseBody;
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
      body: QueryConversationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRecordingRequest extends $tea.Model {
  conversationId?: string;
  duration?: string;
  fileName?: string;
  filePath?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  startTime?: number;
  type?: string;
  voiceSliceRecordingList?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      duration: 'Duration',
      fileName: 'FileName',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      startTime: 'StartTime',
      type: 'Type',
      voiceSliceRecordingList: 'VoiceSliceRecordingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      duration: 'string',
      fileName: 'string',
      filePath: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      startTime: 'number',
      type: 'string',
      voiceSliceRecordingList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRecordingResponseBody extends $tea.Model {
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

export class SaveRecordingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveRecordingResponseBody;
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
      body: SaveRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceTimeoutRequest extends $tea.Model {
  conversationId?: string;
  initialContext?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      initialContext: 'InitialContext',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      initialContext: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceTimeoutResponseBody extends $tea.Model {
  action?: string;
  actionParams?: string;
  interruptible?: boolean;
  requestId?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceTimeoutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SilenceTimeoutResponseBody;
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
      body: SilenceTimeoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBodyGreetingConfig extends $tea.Model {
  greetingWords?: string;
  intentTrigger?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      greetingWords: 'GreetingWords',
      intentTrigger: 'IntentTrigger',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greetingWords: 'string',
      intentTrigger: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBodySilenceTimeoutConfig extends $tea.Model {
  finalAction?: string;
  finalActionParams?: string;
  finalPrompt?: string;
  intentTrigger?: string;
  prompt?: string;
  sourceType?: string;
  threshold?: number;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      finalPrompt: 'FinalPrompt',
      intentTrigger: 'IntentTrigger',
      prompt: 'Prompt',
      sourceType: 'SourceType',
      threshold: 'Threshold',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalAction: 'string',
      finalActionParams: 'string',
      finalPrompt: 'string',
      intentTrigger: 'string',
      prompt: 'string',
      sourceType: 'string',
      threshold: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBodyUnrecognizingConfig extends $tea.Model {
  finalAction?: string;
  finalActionParams?: string;
  finalPrompt?: string;
  prompt?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      finalPrompt: 'FinalPrompt',
      prompt: 'Prompt',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalAction: 'string',
      finalActionParams: 'string',
      finalPrompt: 'string',
      prompt: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataResponseBodyStatisticalDataReports extends $tea.Model {
  dialoguePassRate?: string;
  knowledgeHitRate?: string;
  resolutionRate?: string;
  resolvedQuestionNum?: number;
  statisticalDate?: string;
  totalConversationNum?: number;
  validAnswerRate?: string;
  static names(): { [key: string]: string } {
    return {
      dialoguePassRate: 'DialoguePassRate',
      knowledgeHitRate: 'KnowledgeHitRate',
      resolutionRate: 'ResolutionRate',
      resolvedQuestionNum: 'ResolvedQuestionNum',
      statisticalDate: 'StatisticalDate',
      totalConversationNum: 'TotalConversationNum',
      validAnswerRate: 'ValidAnswerRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialoguePassRate: 'string',
      knowledgeHitRate: 'string',
      resolutionRate: 'string',
      resolvedQuestionNum: 'number',
      statisticalDate: 'string',
      totalConversationNum: 'number',
      validAnswerRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlResponseBodyData extends $tea.Model {
  accessId?: string;
  expire?: number;
  folder?: string;
  host?: string;
  message?: string;
  policy?: string;
  signature?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      message: 'Message',
      policy: 'Policy',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      expire: 'number',
      folder: 'string',
      host: 'string',
      message: 'string',
      policy: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrConfigResponseBodyData extends $tea.Model {
  asrAcousticModelId?: string;
  asrClassVocabularyId?: string;
  asrCustomizationId?: string;
  asrVocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      asrAcousticModelId: 'AsrAcousticModelId',
      asrClassVocabularyId: 'AsrClassVocabularyId',
      asrCustomizationId: 'AsrCustomizationId',
      asrVocabularyId: 'AsrVocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrAcousticModelId: 'string',
      asrClassVocabularyId: 'string',
      asrCustomizationId: 'string',
      asrVocabularyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponseBodyBots extends $tea.Model {
  avatar?: string;
  createTime?: string;
  instanceId?: string;
  introduction?: string;
  languageCode?: string;
  name?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createTime: 'string',
      instanceId: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsResponseBodyConversationDetails extends $tea.Model {
  action?: string;
  actionParams?: string;
  conversationId?: string;
  createTime?: number;
  sequenceId?: string;
  speaker?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      conversationId: 'ConversationId',
      createTime: 'CreateTime',
      sequenceId: 'SequenceId',
      speaker: 'Speaker',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      conversationId: 'string',
      createTime: 'number',
      sequenceId: 'string',
      speaker: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsResponseBodyConversations extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  conversationId?: string;
  endReason?: number;
  endTime?: number;
  hasLastPlaybackCompleted?: boolean;
  hasToAgent?: boolean;
  rounds?: number;
  sandBox?: boolean;
  skillGroup?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      endReason: 'EndReason',
      endTime: 'EndTime',
      hasLastPlaybackCompleted: 'HasLastPlaybackCompleted',
      hasToAgent: 'HasToAgent',
      rounds: 'Rounds',
      sandBox: 'SandBox',
      skillGroup: 'SkillGroup',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      endReason: 'number',
      endTime: 'number',
      hasLastPlaybackCompleted: 'boolean',
      hasToAgent: 'boolean',
      rounds: 'number',
      sandBox: 'boolean',
      skillGroup: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles extends $tea.Model {
  fileId?: string;
  progress?: number;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      progress: 'Progress',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      progress: 'number',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBodyDownloadTasksList extends $tea.Model {
  downloadTaskFiles?: ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles[];
  expireTime?: number;
  status?: string;
  taskId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskFiles: 'DownloadTaskFiles',
      expireTime: 'ExpireTime',
      status: 'Status',
      taskId: 'TaskId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskFiles: { 'type': 'array', 'itemType': ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles },
      expireTime: 'number',
      status: 'string',
      taskId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBodyDownloadTasks extends $tea.Model {
  list?: ListDownloadTasksResponseBodyDownloadTasksList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDownloadTasksResponseBodyDownloadTasksList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  applicableOperations?: string[];
  concurrency?: number;
  createTime?: number;
  description?: string;
  instanceId?: string;
  modifyTime?: number;
  modifyUserName?: string;
  name?: string;
  nluServiceParamsJson?: string;
  numbers?: string[];
  status?: string;
  unionInstanceId?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      applicableOperations: 'ApplicableOperations',
      concurrency: 'Concurrency',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
      nluServiceParamsJson: 'NluServiceParamsJson',
      numbers: 'Numbers',
      status: 'Status',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableOperations: { 'type': 'array', 'itemType': 'string' },
      concurrency: 'number',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      modifyTime: 'number',
      modifyUserName: 'string',
      name: 'string',
      nluServiceParamsJson: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAsrConfigResponseBodyData extends $tea.Model {
  affectedRows?: number;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsResponseBodyConversations extends $tea.Model {
  beginTime?: number;
  callingNumber?: string;
  conversationId?: string;
  effectiveAnswerCount?: number;
  endTime?: number;
  skillGroupId?: string;
  transferredToAgent?: boolean;
  userUtteranceCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      effectiveAnswerCount: 'EffectiveAnswerCount',
      endTime: 'EndTime',
      skillGroupId: 'SkillGroupId',
      transferredToAgent: 'TransferredToAgent',
      userUtteranceCount: 'UserUtteranceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      callingNumber: 'string',
      conversationId: 'string',
      effectiveAnswerCount: 'number',
      endTime: 'number',
      skillGroupId: 'string',
      transferredToAgent: 'boolean',
      userUtteranceCount: 'number',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("voicenavigator", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async associateChatbotInstanceWithOptions(request: AssociateChatbotInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AssociateChatbotInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chatbotInstanceId)) {
      query["ChatbotInstanceId"] = request.chatbotInstanceId;
    }

    if (!Util.isUnset(request.chatbotName)) {
      query["ChatbotName"] = request.chatbotName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nluServiceParamsJson)) {
      query["NluServiceParamsJson"] = request.nluServiceParamsJson;
    }

    if (!Util.isUnset(request.nluServiceType)) {
      query["NluServiceType"] = request.nluServiceType;
    }

    if (!Util.isUnset(request.unionSource)) {
      query["UnionSource"] = request.unionSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateChatbotInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateChatbotInstanceResponse>(await this.callApi(params, req, runtime), new AssociateChatbotInstanceResponse({}));
  }

  async associateChatbotInstance(request: AssociateChatbotInstanceRequest): Promise<AssociateChatbotInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateChatbotInstanceWithOptions(request, runtime);
  }

  async auditTTSVoiceWithOptions(request: AuditTTSVoiceRequest, runtime: $Util.RuntimeOptions): Promise<AuditTTSVoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pitchRate)) {
      query["PitchRate"] = request.pitchRate;
    }

    if (!Util.isUnset(request.secretKey)) {
      query["SecretKey"] = request.secretKey;
    }

    if (!Util.isUnset(request.speechRate)) {
      query["SpeechRate"] = request.speechRate;
    }

    if (!Util.isUnset(request.text)) {
      query["Text"] = request.text;
    }

    if (!Util.isUnset(request.voice)) {
      query["Voice"] = request.voice;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuditTTSVoice",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuditTTSVoiceResponse>(await this.callApi(params, req, runtime), new AuditTTSVoiceResponse({}));
  }

  async auditTTSVoice(request: AuditTTSVoiceRequest): Promise<AuditTTSVoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.auditTTSVoiceWithOptions(request, runtime);
  }

  async beginDialogueWithOptions(request: BeginDialogueRequest, runtime: $Util.RuntimeOptions): Promise<BeginDialogueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.initialContext)) {
      query["InitialContext"] = request.initialContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BeginDialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BeginDialogueResponse>(await this.callApi(params, req, runtime), new BeginDialogueResponse({}));
  }

  async beginDialogue(request: BeginDialogueRequest): Promise<BeginDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beginDialogueWithOptions(request, runtime);
  }

  async collectedNumberWithOptions(request: CollectedNumberRequest, runtime: $Util.RuntimeOptions): Promise<CollectedNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.additionalContext)) {
      query["AdditionalContext"] = request.additionalContext;
    }

    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CollectedNumber",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CollectedNumberResponse>(await this.callApi(params, req, runtime), new CollectedNumberResponse({}));
  }

  async collectedNumber(request: CollectedNumberRequest): Promise<CollectedNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.collectedNumberWithOptions(request, runtime);
  }

  async createDownloadUrlWithOptions(request: CreateDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<CreateDownloadUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDownloadUrl",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDownloadUrlResponse>(await this.callApi(params, req, runtime), new CreateDownloadUrlResponse({}));
  }

  async createDownloadUrl(request: CreateDownloadUrlRequest): Promise<CreateDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDownloadUrlWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.concurrency)) {
      query["Concurrency"] = request.concurrency;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nluServiceParamsJson)) {
      query["NluServiceParamsJson"] = request.nluServiceParamsJson;
    }

    if (!Util.isUnset(request.unionInstanceId)) {
      query["UnionInstanceId"] = request.unionInstanceId;
    }

    if (!Util.isUnset(request.unionSource)) {
      query["UnionSource"] = request.unionSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async debugBeginDialogueWithOptions(request: DebugBeginDialogueRequest, runtime: $Util.RuntimeOptions): Promise<DebugBeginDialogueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.initialContext)) {
      query["InitialContext"] = request.initialContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DebugBeginDialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DebugBeginDialogueResponse>(await this.callApi(params, req, runtime), new DebugBeginDialogueResponse({}));
  }

  async debugBeginDialogue(request: DebugBeginDialogueRequest): Promise<DebugBeginDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugBeginDialogueWithOptions(request, runtime);
  }

  async debugCollectedNumberWithOptions(request: DebugCollectedNumberRequest, runtime: $Util.RuntimeOptions): Promise<DebugCollectedNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DebugCollectedNumber",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DebugCollectedNumberResponse>(await this.callApi(params, req, runtime), new DebugCollectedNumberResponse({}));
  }

  async debugCollectedNumber(request: DebugCollectedNumberRequest): Promise<DebugCollectedNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugCollectedNumberWithOptions(request, runtime);
  }

  async debugDialogueWithOptions(request: DebugDialogueRequest, runtime: $Util.RuntimeOptions): Promise<DebugDialogueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.additionalContext)) {
      query["AdditionalContext"] = request.additionalContext;
    }

    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DebugDialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DebugDialogueResponse>(await this.callApi(params, req, runtime), new DebugDialogueResponse({}));
  }

  async debugDialogue(request: DebugDialogueRequest): Promise<DebugDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugDialogueWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2018-06-12",
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

  async describeConversationWithOptions(request: DescribeConversationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConversationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConversation",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConversationResponse>(await this.callApi(params, req, runtime), new DescribeConversationResponse({}));
  }

  async describeConversation(request: DescribeConversationRequest): Promise<DescribeConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConversationWithOptions(request, runtime);
  }

  async describeConversationContextWithOptions(request: DescribeConversationContextRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConversationContextResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConversationContext",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConversationContextResponse>(await this.callApi(params, req, runtime), new DescribeConversationContextResponse({}));
  }

  async describeConversationContext(request: DescribeConversationContextRequest): Promise<DescribeConversationContextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConversationContextWithOptions(request, runtime);
  }

  async describeExportProgressWithOptions(request: DescribeExportProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportProgressResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExportProgress",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExportProgressResponse>(await this.callApi(params, req, runtime), new DescribeExportProgressResponse({}));
  }

  async describeExportProgress(request: DescribeExportProgressRequest): Promise<DescribeExportProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportProgressWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async describeNavigationConfigWithOptions(request: DescribeNavigationConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNavigationConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNavigationConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNavigationConfigResponse>(await this.callApi(params, req, runtime), new DescribeNavigationConfigResponse({}));
  }

  async describeNavigationConfig(request: DescribeNavigationConfigRequest): Promise<DescribeNavigationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNavigationConfigWithOptions(request, runtime);
  }

  async describeRecordingWithOptions(request: DescribeRecordingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecording",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordingResponse>(await this.callApi(params, req, runtime), new DescribeRecordingResponse({}));
  }

  async describeRecording(request: DescribeRecordingRequest): Promise<DescribeRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordingWithOptions(request, runtime);
  }

  async describeStatisticalDataWithOptions(request: DescribeStatisticalDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStatisticalDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStatisticalData",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStatisticalDataResponse>(await this.callApi(params, req, runtime), new DescribeStatisticalDataResponse({}));
  }

  async describeStatisticalData(request: DescribeStatisticalDataRequest): Promise<DescribeStatisticalDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStatisticalDataWithOptions(request, runtime);
  }

  async describeTTSConfigWithOptions(request: DescribeTTSConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTTSConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTTSConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTTSConfigResponse>(await this.callApi(params, req, runtime), new DescribeTTSConfigResponse({}));
  }

  async describeTTSConfig(request: DescribeTTSConfigRequest): Promise<DescribeTTSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTTSConfigWithOptions(request, runtime);
  }

  async dialogueWithOptions(request: DialogueRequest, runtime: $Util.RuntimeOptions): Promise<DialogueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.additionalContext)) {
      query["AdditionalContext"] = request.additionalContext;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.emotion)) {
      query["Emotion"] = request.emotion;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!Util.isUnset(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Dialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DialogueResponse>(await this.callApi(params, req, runtime), new DialogueResponse({}));
  }

  async dialogue(request: DialogueRequest): Promise<DialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dialogueWithOptions(request, runtime);
  }

  async disableInstanceWithOptions(request: DisableInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DisableInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableInstanceResponse>(await this.callApi(params, req, runtime), new DisableInstanceResponse({}));
  }

  async disableInstance(request: DisableInstanceRequest): Promise<DisableInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInstanceWithOptions(request, runtime);
  }

  async enableInstanceWithOptions(request: EnableInstanceRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableInstanceResponse>(await this.callApi(params, req, runtime), new EnableInstanceResponse({}));
  }

  async enableInstance(request: EnableInstanceRequest): Promise<EnableInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstanceWithOptions(request, runtime);
  }

  async endDialogueWithOptions(request: EndDialogueRequest, runtime: $Util.RuntimeOptions): Promise<EndDialogueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.hangUpParams)) {
      query["HangUpParams"] = request.hangUpParams;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EndDialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EndDialogueResponse>(await this.callApi(params, req, runtime), new EndDialogueResponse({}));
  }

  async endDialogue(request: EndDialogueRequest): Promise<EndDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.endDialogueWithOptions(request, runtime);
  }

  async exportConversationDetailsWithOptions(request: ExportConversationDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ExportConversationDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTimeLeftRange)) {
      query["BeginTimeLeftRange"] = request.beginTimeLeftRange;
    }

    if (!Util.isUnset(request.beginTimeRightRange)) {
      query["BeginTimeRightRange"] = request.beginTimeRightRange;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.options)) {
      query["Options"] = request.options;
    }

    if (!Util.isUnset(request.result)) {
      query["Result"] = request.result;
    }

    if (!Util.isUnset(request.roundsLeftRange)) {
      query["RoundsLeftRange"] = request.roundsLeftRange;
    }

    if (!Util.isUnset(request.roundsRightRange)) {
      query["RoundsRightRange"] = request.roundsRightRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportConversationDetails",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportConversationDetailsResponse>(await this.callApi(params, req, runtime), new ExportConversationDetailsResponse({}));
  }

  async exportConversationDetails(request: ExportConversationDetailsRequest): Promise<ExportConversationDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportConversationDetailsWithOptions(request, runtime);
  }

  async exportStatisticalDataWithOptions(request: ExportStatisticalDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportStatisticalDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTimeLeftRange)) {
      query["BeginTimeLeftRange"] = request.beginTimeLeftRange;
    }

    if (!Util.isUnset(request.beginTimeRightRange)) {
      query["BeginTimeRightRange"] = request.beginTimeRightRange;
    }

    if (!Util.isUnset(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.timeUnit)) {
      query["TimeUnit"] = request.timeUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportStatisticalData",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportStatisticalDataResponse>(await this.callApi(params, req, runtime), new ExportStatisticalDataResponse({}));
  }

  async exportStatisticalData(request: ExportStatisticalDataRequest): Promise<ExportStatisticalDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportStatisticalDataWithOptions(request, runtime);
  }

  async generateUploadUrlWithOptions(request: GenerateUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callerBid)) {
      body["CallerBid"] = request.callerBid;
    }

    if (!Util.isUnset(request.callerIp)) {
      body["CallerIp"] = request.callerIp;
    }

    if (!Util.isUnset(request.callerParentId)) {
      body["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.callerType)) {
      body["CallerType"] = request.callerType;
    }

    if (!Util.isUnset(request.callerUid)) {
      body["CallerUid"] = request.callerUid;
    }

    if (!Util.isUnset(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      body["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    if (!Util.isUnset(request.mfaPresent)) {
      body["MfaPresent"] = request.mfaPresent;
    }

    if (!Util.isUnset(request.proxyOriginalSecurityTransport)) {
      body["ProxyOriginalSecurityTransport"] = request.proxyOriginalSecurityTransport;
    }

    if (!Util.isUnset(request.proxyOriginalSourceIp)) {
      body["ProxyOriginalSourceIp"] = request.proxyOriginalSourceIp;
    }

    if (!Util.isUnset(request.proxyTrustTransportInfo)) {
      body["ProxyTrustTransportInfo"] = request.proxyTrustTransportInfo;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.securityToken)) {
      body["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.securityTransport)) {
      body["SecurityTransport"] = request.securityTransport;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.xspaceServicerId)) {
      body["XspaceServicerId"] = request.xspaceServicerId;
    }

    if (!Util.isUnset(request.xspaceTenantBuId)) {
      body["XspaceTenantBuId"] = request.xspaceTenantBuId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUploadUrl",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateUploadUrlResponse>(await this.callApi(params, req, runtime), new GenerateUploadUrlResponse({}));
  }

  async generateUploadUrl(request: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUploadUrlWithOptions(request, runtime);
  }

  async getAsrConfigWithOptions(request: GetAsrConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAsrConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configLevel)) {
      query["ConfigLevel"] = request.configLevel;
    }

    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsrConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsrConfigResponse>(await this.callApi(params, req, runtime), new GetAsrConfigResponse({}));
  }

  async getAsrConfig(request: GetAsrConfigRequest): Promise<GetAsrConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsrConfigWithOptions(request, runtime);
  }

  async getRealTimeConcurrencyWithOptions(request: GetRealTimeConcurrencyRequest, runtime: $Util.RuntimeOptions): Promise<GetRealTimeConcurrencyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealTimeConcurrency",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealTimeConcurrencyResponse>(await this.callApi(params, req, runtime), new GetRealTimeConcurrencyResponse({}));
  }

  async getRealTimeConcurrency(request: GetRealTimeConcurrencyRequest): Promise<GetRealTimeConcurrencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealTimeConcurrencyWithOptions(request, runtime);
  }

  async listChatbotInstancesWithOptions(request: ListChatbotInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListChatbotInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChatbotInstances",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChatbotInstancesResponse>(await this.callApi(params, req, runtime), new ListChatbotInstancesResponse({}));
  }

  async listChatbotInstances(request: ListChatbotInstancesRequest): Promise<ListChatbotInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChatbotInstancesWithOptions(request, runtime);
  }

  async listConversationDetailsWithOptions(request: ListConversationDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListConversationDetailsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConversationDetails",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConversationDetailsResponse>(await this.callApi(params, req, runtime), new ListConversationDetailsResponse({}));
  }

  async listConversationDetails(request: ListConversationDetailsRequest): Promise<ListConversationDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConversationDetailsWithOptions(request, runtime);
  }

  async listConversationsWithOptions(request: ListConversationsRequest, runtime: $Util.RuntimeOptions): Promise<ListConversationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConversations",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConversationsResponse>(await this.callApi(params, req, runtime), new ListConversationsResponse({}));
  }

  async listConversations(request: ListConversationsRequest): Promise<ListConversationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConversationsWithOptions(request, runtime);
  }

  async listDownloadTasksWithOptions(request: ListDownloadTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListDownloadTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDownloadTasks",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDownloadTasksResponse>(await this.callApi(params, req, runtime), new ListDownloadTasksResponse({}));
  }

  async listDownloadTasks(request: ListDownloadTasksRequest): Promise<ListDownloadTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDownloadTasksWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
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

  async modifyAsrConfigWithOptions(request: ModifyAsrConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAsrConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asrAcousticModelId)) {
      query["AsrAcousticModelId"] = request.asrAcousticModelId;
    }

    if (!Util.isUnset(request.asrClassVocabularyId)) {
      query["AsrClassVocabularyId"] = request.asrClassVocabularyId;
    }

    if (!Util.isUnset(request.asrCustomizationId)) {
      query["AsrCustomizationId"] = request.asrCustomizationId;
    }

    if (!Util.isUnset(request.asrVocabularyId)) {
      query["AsrVocabularyId"] = request.asrVocabularyId;
    }

    if (!Util.isUnset(request.configLevel)) {
      query["ConfigLevel"] = request.configLevel;
    }

    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAsrConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAsrConfigResponse>(await this.callApi(params, req, runtime), new ModifyAsrConfigResponse({}));
  }

  async modifyAsrConfig(request: ModifyAsrConfigRequest): Promise<ModifyAsrConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAsrConfigWithOptions(request, runtime);
  }

  async modifyGreetingConfigWithOptions(request: ModifyGreetingConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGreetingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.greetingWords)) {
      query["GreetingWords"] = request.greetingWords;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentTrigger)) {
      query["IntentTrigger"] = request.intentTrigger;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGreetingConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGreetingConfigResponse>(await this.callApi(params, req, runtime), new ModifyGreetingConfigResponse({}));
  }

  async modifyGreetingConfig(request: ModifyGreetingConfigRequest): Promise<ModifyGreetingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGreetingConfigWithOptions(request, runtime);
  }

  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.concurrency)) {
      query["Concurrency"] = request.concurrency;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceResponse>(await this.callApi(params, req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  async modifySilenceTimeoutConfigWithOptions(request: ModifySilenceTimeoutConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifySilenceTimeoutConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.finalAction)) {
      query["FinalAction"] = request.finalAction;
    }

    if (!Util.isUnset(request.finalActionParams)) {
      query["FinalActionParams"] = request.finalActionParams;
    }

    if (!Util.isUnset(request.finalPrompt)) {
      query["FinalPrompt"] = request.finalPrompt;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentTrigger)) {
      query["IntentTrigger"] = request.intentTrigger;
    }

    if (!Util.isUnset(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySilenceTimeoutConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySilenceTimeoutConfigResponse>(await this.callApi(params, req, runtime), new ModifySilenceTimeoutConfigResponse({}));
  }

  async modifySilenceTimeoutConfig(request: ModifySilenceTimeoutConfigRequest): Promise<ModifySilenceTimeoutConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySilenceTimeoutConfigWithOptions(request, runtime);
  }

  async modifyTTSConfigWithOptions(request: ModifyTTSConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTTSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineXunfei)) {
      query["EngineXunfei"] = request.engineXunfei;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nlsServiceType)) {
      query["NlsServiceType"] = request.nlsServiceType;
    }

    if (!Util.isUnset(request.speechRate)) {
      query["SpeechRate"] = request.speechRate;
    }

    if (!Util.isUnset(request.voice)) {
      query["Voice"] = request.voice;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTTSConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTTSConfigResponse>(await this.callApi(params, req, runtime), new ModifyTTSConfigResponse({}));
  }

  async modifyTTSConfig(request: ModifyTTSConfigRequest): Promise<ModifyTTSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTTSConfigWithOptions(request, runtime);
  }

  async modifyUnrecognizingConfigWithOptions(request: ModifyUnrecognizingConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUnrecognizingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.finalAction)) {
      query["FinalAction"] = request.finalAction;
    }

    if (!Util.isUnset(request.finalActionParams)) {
      query["FinalActionParams"] = request.finalActionParams;
    }

    if (!Util.isUnset(request.finalPrompt)) {
      query["FinalPrompt"] = request.finalPrompt;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUnrecognizingConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUnrecognizingConfigResponse>(await this.callApi(params, req, runtime), new ModifyUnrecognizingConfigResponse({}));
  }

  async modifyUnrecognizingConfig(request: ModifyUnrecognizingConfigRequest): Promise<ModifyUnrecognizingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUnrecognizingConfigWithOptions(request, runtime);
  }

  async queryConversationsWithOptions(request: QueryConversationsRequest, runtime: $Util.RuntimeOptions): Promise<QueryConversationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryConversations",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryConversationsResponse>(await this.callApi(params, req, runtime), new QueryConversationsResponse({}));
  }

  async queryConversations(request: QueryConversationsRequest): Promise<QueryConversationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConversationsWithOptions(request, runtime);
  }

  async saveRecordingWithOptions(request: SaveRecordingRequest, runtime: $Util.RuntimeOptions): Promise<SaveRecordingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.voiceSliceRecordingList)) {
      query["VoiceSliceRecordingList"] = request.voiceSliceRecordingList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveRecording",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveRecordingResponse>(await this.callApi(params, req, runtime), new SaveRecordingResponse({}));
  }

  async saveRecording(request: SaveRecordingRequest): Promise<SaveRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRecordingWithOptions(request, runtime);
  }

  async silenceTimeoutWithOptions(request: SilenceTimeoutRequest, runtime: $Util.RuntimeOptions): Promise<SilenceTimeoutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!Util.isUnset(request.initialContext)) {
      query["InitialContext"] = request.initialContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SilenceTimeout",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SilenceTimeoutResponse>(await this.callApi(params, req, runtime), new SilenceTimeoutResponse({}));
  }

  async silenceTimeout(request: SilenceTimeoutRequest): Promise<SilenceTimeoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.silenceTimeoutWithOptions(request, runtime);
  }

}
