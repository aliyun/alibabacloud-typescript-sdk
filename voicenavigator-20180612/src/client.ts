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
  instanceId?: string;
  chatbotInstanceId?: string;
  chatbotName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      chatbotInstanceId: 'ChatbotInstanceId',
      chatbotName: 'ChatbotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      chatbotInstanceId: 'string',
      chatbotName: 'string',
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
  headers: { [key: string]: string };
  body: AssociateChatbotInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateChatbotInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditTTSVoiceRequest extends $tea.Model {
  instanceId?: string;
  voice?: string;
  text?: string;
  speechRate?: string;
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      voice: 'Voice',
      text: 'Text',
      speechRate: 'SpeechRate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      voice: 'string',
      text: 'string',
      speechRate: 'string',
      volume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditTTSVoiceResponseBody extends $tea.Model {
  requestId?: string;
  auditionUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      auditionUrl: 'AuditionUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      auditionUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditTTSVoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AuditTTSVoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class BeginDialogueResponseBody extends $tea.Model {
  action?: string;
  interruptible?: boolean;
  requestId?: string;
  actionParams?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      actionParams: 'ActionParams',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      actionParams: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginDialogueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BeginDialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BeginDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectedNumberRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectedNumberResponseBody extends $tea.Model {
  action?: string;
  interruptible?: boolean;
  requestId?: string;
  actionParams?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      actionParams: 'ActionParams',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      actionParams: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectedNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CollectedNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CollectedNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  name?: string;
  description?: string;
  concurrency?: number;
  chatbotInstanceId?: string;
  nluServiceType?: string;
  chatbotName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      concurrency: 'Concurrency',
      chatbotInstanceId: 'ChatbotInstanceId',
      nluServiceType: 'NluServiceType',
      chatbotName: 'ChatbotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      concurrency: 'number',
      chatbotInstanceId: 'string',
      nluServiceType: 'string',
      chatbotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  interruptible?: boolean;
  requestId?: string;
  actionParams?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      actionParams: 'ActionParams',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      actionParams: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugBeginDialogueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DebugBeginDialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DebugBeginDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugCollectedNumberRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugCollectedNumberResponseBody extends $tea.Model {
  action?: string;
  interruptible?: boolean;
  requestId?: string;
  actionParams?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      actionParams: 'ActionParams',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      actionParams: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugCollectedNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DebugCollectedNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DebugCollectedNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugDialogueRequest extends $tea.Model {
  conversationId?: string;
  additionalContext?: string;
  instanceId?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      additionalContext: 'AdditionalContext',
      instanceId: 'InstanceId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      additionalContext: 'string',
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
  interruptible?: boolean;
  requestId?: string;
  actionParams?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      actionParams: 'ActionParams',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      actionParams: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugDialogueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DebugDialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DescribeConversationRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationResponseBody extends $tea.Model {
  effectiveAnswerCount?: number;
  conversationId?: string;
  transferredToAgent?: boolean;
  endTime?: number;
  requestId?: string;
  beginTime?: number;
  skillGroupId?: string;
  callingNumber?: string;
  userUtteranceCount?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveAnswerCount: 'EffectiveAnswerCount',
      conversationId: 'ConversationId',
      transferredToAgent: 'TransferredToAgent',
      endTime: 'EndTime',
      requestId: 'RequestId',
      beginTime: 'BeginTime',
      skillGroupId: 'SkillGroupId',
      callingNumber: 'CallingNumber',
      userUtteranceCount: 'UserUtteranceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveAnswerCount: 'number',
      conversationId: 'string',
      transferredToAgent: 'boolean',
      endTime: 'number',
      requestId: 'string',
      beginTime: 'number',
      skillGroupId: 'string',
      callingNumber: 'string',
      userUtteranceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConversationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConversationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationContextRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationContextResponseBody extends $tea.Model {
  requestId?: string;
  conversationContext?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conversationContext: 'ConversationContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conversationContext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConversationContextResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConversationContextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConversationContextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportProgressRequest extends $tea.Model {
  instanceId?: string;
  exportTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      exportTaskId: 'ExportTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      exportTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportProgressResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  fileHttpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      fileHttpUrl: 'FileHttpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      fileHttpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExportProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  status?: string;
  modifyTime?: number;
  description?: string;
  requestId?: string;
  instanceId?: string;
  concurrency?: number;
  applicableOperations?: string[];
  modifyUserName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      description: 'Description',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      concurrency: 'Concurrency',
      applicableOperations: 'ApplicableOperations',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'number',
      description: 'string',
      requestId: 'string',
      instanceId: 'string',
      concurrency: 'number',
      applicableOperations: { 'type': 'array', 'itemType': 'string' },
      modifyUserName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  silenceTimeoutConfig?: DescribeNavigationConfigResponseBodySilenceTimeoutConfig;
  greetingConfig?: DescribeNavigationConfigResponseBodyGreetingConfig;
  unrecognizingConfig?: DescribeNavigationConfigResponseBodyUnrecognizingConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      silenceTimeoutConfig: 'SilenceTimeoutConfig',
      greetingConfig: 'GreetingConfig',
      unrecognizingConfig: 'UnrecognizingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      silenceTimeoutConfig: DescribeNavigationConfigResponseBodySilenceTimeoutConfig,
      greetingConfig: DescribeNavigationConfigResponseBodyGreetingConfig,
      unrecognizingConfig: DescribeNavigationConfigResponseBodyUnrecognizingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNavigationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNavigationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingResponseBody extends $tea.Model {
  filePath?: string;
  requestId?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      requestId: 'RequestId',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      requestId: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataRequest extends $tea.Model {
  instanceId?: string;
  timeUnit?: string;
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      timeUnit: 'TimeUnit',
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      timeUnit: 'string',
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataResponseBody extends $tea.Model {
  totalDialoguePassRate?: string;
  totalKnowledgeHitRate?: string;
  totalResolutionRate?: string;
  totalValidAnswerRate?: string;
  requestId?: string;
  resolvedQuestionTotalNum?: number;
  conversationTotalNum?: number;
  statisticalDataReports?: DescribeStatisticalDataResponseBodyStatisticalDataReports[];
  static names(): { [key: string]: string } {
    return {
      totalDialoguePassRate: 'TotalDialoguePassRate',
      totalKnowledgeHitRate: 'TotalKnowledgeHitRate',
      totalResolutionRate: 'TotalResolutionRate',
      totalValidAnswerRate: 'TotalValidAnswerRate',
      requestId: 'RequestId',
      resolvedQuestionTotalNum: 'ResolvedQuestionTotalNum',
      conversationTotalNum: 'ConversationTotalNum',
      statisticalDataReports: 'StatisticalDataReports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDialoguePassRate: 'string',
      totalKnowledgeHitRate: 'string',
      totalResolutionRate: 'string',
      totalValidAnswerRate: 'string',
      requestId: 'string',
      resolvedQuestionTotalNum: 'number',
      conversationTotalNum: 'number',
      statisticalDataReports: { 'type': 'array', 'itemType': DescribeStatisticalDataResponseBodyStatisticalDataReports },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStatisticalDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStatisticalDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigRequest extends $tea.Model {
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

export class DescribeTTSConfigResponseBody extends $tea.Model {
  requestId?: string;
  volume?: number;
  voice?: string;
  speechRate?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      volume: 'Volume',
      voice: 'Voice',
      speechRate: 'SpeechRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      volume: 'number',
      voice: 'string',
      speechRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTTSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTTSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  utterance?: string;
  calledNumber?: string;
  callingNumber?: string;
  additionalContext?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
      utterance: 'Utterance',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      additionalContext: 'AdditionalContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
      utterance: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      additionalContext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBody extends $tea.Model {
  action?: string;
  interruptible?: boolean;
  requestId?: string;
  actionParams?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      actionParams: 'ActionParams',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      actionParams: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  status?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  status?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndDialogueRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
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
  headers: { [key: string]: string };
  body: EndDialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EndDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConversationDetailsRequest extends $tea.Model {
  instanceId?: string;
  callingNumber?: string;
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callingNumber: 'CallingNumber',
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callingNumber: 'string',
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConversationDetailsResponseBody extends $tea.Model {
  requestId?: string;
  exportTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exportTaskId: 'ExportTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exportTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportConversationDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportConversationDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportConversationDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportStatisticalDataRequest extends $tea.Model {
  instanceId?: string;
  timeUnit?: string;
  exportType?: string;
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      timeUnit: 'TimeUnit',
      exportType: 'ExportType',
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      timeUnit: 'string',
      exportType: 'string',
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportStatisticalDataResponseBody extends $tea.Model {
  requestId?: string;
  exportTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exportTaskId: 'ExportTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exportTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportStatisticalDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportStatisticalDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportStatisticalDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  pageSize?: number;
  bots?: ListChatbotInstancesResponseBodyBots[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      bots: 'Bots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      pageSize: 'number',
      bots: { 'type': 'array', 'itemType': ListChatbotInstancesResponseBodyBots },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChatbotInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChatbotInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsResponseBody extends $tea.Model {
  requestId?: string;
  conversationDetails?: ListConversationDetailsResponseBodyConversationDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conversationDetails: 'ConversationDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conversationDetails: { 'type': 'array', 'itemType': ListConversationDetailsResponseBodyConversationDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConversationDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConversationDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  conversations?: ListConversationsResponseBodyConversations[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      conversations: 'Conversations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      conversations: { 'type': 'array', 'itemType': ListConversationsResponseBodyConversations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConversationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConversationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
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

export class ListInstancesResponseBody extends $tea.Model {
  instances?: ListInstancesResponseBodyInstances[];
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
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

export class ModifyGreetingConfigRequest extends $tea.Model {
  instanceId?: string;
  greetingWords?: string;
  sourceType?: string;
  intentTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      greetingWords: 'GreetingWords',
      sourceType: 'SourceType',
      intentTrigger: 'IntentTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      greetingWords: 'string',
      sourceType: 'string',
      intentTrigger: 'string',
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
  headers: { [key: string]: string };
  body: ModifyGreetingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyGreetingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  instanceId?: string;
  description?: string;
  concurrency?: number;
  chatbotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      description: 'Description',
      concurrency: 'Concurrency',
      chatbotInstanceId: 'ChatbotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      description: 'string',
      concurrency: 'number',
      chatbotInstanceId: 'string',
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
  headers: { [key: string]: string };
  body: ModifyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySilenceTimeoutConfigRequest extends $tea.Model {
  instanceId?: string;
  prompt?: string;
  timeout?: number;
  threshold?: number;
  finalPrompt?: string;
  finalAction?: string;
  finalActionParams?: string;
  sourceType?: string;
  intentTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      prompt: 'Prompt',
      timeout: 'Timeout',
      threshold: 'Threshold',
      finalPrompt: 'FinalPrompt',
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      sourceType: 'SourceType',
      intentTrigger: 'IntentTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      prompt: 'string',
      timeout: 'number',
      threshold: 'number',
      finalPrompt: 'string',
      finalAction: 'string',
      finalActionParams: 'string',
      sourceType: 'string',
      intentTrigger: 'string',
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
  headers: { [key: string]: string };
  body: ModifySilenceTimeoutConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySilenceTimeoutConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTTSConfigRequest extends $tea.Model {
  instanceId?: string;
  voice?: string;
  speechRate?: string;
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      voice: 'Voice',
      speechRate: 'SpeechRate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      voice: 'string',
      speechRate: 'string',
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
  headers: { [key: string]: string };
  body: ModifyTTSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTTSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUnrecognizingConfigRequest extends $tea.Model {
  instanceId?: string;
  prompt?: string;
  threshold?: number;
  finalPrompt?: string;
  finalAction?: string;
  finalActionParams?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      prompt: 'Prompt',
      threshold: 'Threshold',
      finalPrompt: 'FinalPrompt',
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      prompt: 'string',
      threshold: 'number',
      finalPrompt: 'string',
      finalAction: 'string',
      finalActionParams: 'string',
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
  headers: { [key: string]: string };
  body: ModifyUnrecognizingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUnrecognizingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsRequest extends $tea.Model {
  instanceId?: string;
  callingNumber?: string;
  beginTimeLeftRange?: number;
  beginTimeRightRange?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callingNumber: 'CallingNumber',
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callingNumber: 'string',
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  conversations?: QueryConversationsResponseBodyConversations[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      conversations: 'Conversations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      conversations: { 'type': 'array', 'itemType': QueryConversationsResponseBodyConversations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryConversationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryConversationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRecordingRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  startTime?: number;
  duration?: string;
  fileName?: string;
  filePath?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
      startTime: 'StartTime',
      duration: 'Duration',
      fileName: 'FileName',
      filePath: 'FilePath',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
      startTime: 'number',
      duration: 'string',
      fileName: 'string',
      filePath: 'string',
      type: 'string',
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
  headers: { [key: string]: string };
  body: SaveRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceTimeoutRequest extends $tea.Model {
  instanceId?: string;
  conversationId?: string;
  initialContext?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      conversationId: 'ConversationId',
      initialContext: 'InitialContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      conversationId: 'string',
      initialContext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceTimeoutResponseBody extends $tea.Model {
  action?: string;
  interruptible?: boolean;
  requestId?: string;
  actionParams?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      actionParams: 'ActionParams',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      actionParams: 'string',
      textResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SilenceTimeoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SilenceTimeoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SilenceTimeoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBodySilenceTimeoutConfig extends $tea.Model {
  timeout?: number;
  intentTrigger?: string;
  finalPrompt?: string;
  sourceType?: string;
  finalAction?: string;
  prompt?: string;
  threshold?: number;
  finalActionParams?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      intentTrigger: 'IntentTrigger',
      finalPrompt: 'FinalPrompt',
      sourceType: 'SourceType',
      finalAction: 'FinalAction',
      prompt: 'Prompt',
      threshold: 'Threshold',
      finalActionParams: 'FinalActionParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'number',
      intentTrigger: 'string',
      finalPrompt: 'string',
      sourceType: 'string',
      finalAction: 'string',
      prompt: 'string',
      threshold: 'number',
      finalActionParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBodyGreetingConfig extends $tea.Model {
  intentTrigger?: string;
  greetingWords?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      intentTrigger: 'IntentTrigger',
      greetingWords: 'GreetingWords',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentTrigger: 'string',
      greetingWords: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBodyUnrecognizingConfig extends $tea.Model {
  finalPrompt?: string;
  finalAction?: string;
  finalActionParams?: string;
  threshold?: number;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      finalPrompt: 'FinalPrompt',
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      threshold: 'Threshold',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalPrompt: 'string',
      finalAction: 'string',
      finalActionParams: 'string',
      threshold: 'number',
      prompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataResponseBodyStatisticalDataReports extends $tea.Model {
  knowledgeHitRate?: string;
  resolvedQuestionNum?: number;
  resolutionRate?: string;
  statisticalDate?: string;
  totalConversationNum?: number;
  validAnswerRate?: string;
  dialoguePassRate?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeHitRate: 'KnowledgeHitRate',
      resolvedQuestionNum: 'ResolvedQuestionNum',
      resolutionRate: 'ResolutionRate',
      statisticalDate: 'StatisticalDate',
      totalConversationNum: 'TotalConversationNum',
      validAnswerRate: 'ValidAnswerRate',
      dialoguePassRate: 'DialoguePassRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeHitRate: 'string',
      resolvedQuestionNum: 'number',
      resolutionRate: 'string',
      statisticalDate: 'string',
      totalConversationNum: 'number',
      validAnswerRate: 'string',
      dialoguePassRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponseBodyBots extends $tea.Model {
  instanceId?: string;
  timeZone?: string;
  avatar?: string;
  languageCode?: string;
  name?: string;
  introduction?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      timeZone: 'TimeZone',
      avatar: 'Avatar',
      languageCode: 'LanguageCode',
      name: 'Name',
      introduction: 'Introduction',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      timeZone: 'string',
      avatar: 'string',
      languageCode: 'string',
      name: 'string',
      introduction: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsResponseBodyConversationDetails extends $tea.Model {
  action?: string;
  speaker?: string;
  createTime?: number;
  conversationId?: string;
  actionParams?: string;
  sequenceId?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      speaker: 'Speaker',
      createTime: 'CreateTime',
      conversationId: 'ConversationId',
      actionParams: 'ActionParams',
      sequenceId: 'SequenceId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      speaker: 'string',
      createTime: 'number',
      conversationId: 'string',
      actionParams: 'string',
      sequenceId: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationsResponseBodyConversations extends $tea.Model {
  endTime?: number;
  effectiveAnswerCount?: number;
  transferredToAgent?: boolean;
  beginTime?: number;
  skillGroupId?: string;
  conversationId?: string;
  callingNumber?: string;
  userUtteranceCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      effectiveAnswerCount: 'EffectiveAnswerCount',
      transferredToAgent: 'TransferredToAgent',
      beginTime: 'BeginTime',
      skillGroupId: 'SkillGroupId',
      conversationId: 'ConversationId',
      callingNumber: 'CallingNumber',
      userUtteranceCount: 'UserUtteranceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      effectiveAnswerCount: 'number',
      transferredToAgent: 'boolean',
      beginTime: 'number',
      skillGroupId: 'string',
      conversationId: 'string',
      callingNumber: 'string',
      userUtteranceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  status?: string;
  modifyUserName?: string;
  description?: string;
  applicableOperations?: string[];
  instanceId?: string;
  name?: string;
  concurrency?: number;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyUserName: 'ModifyUserName',
      description: 'Description',
      applicableOperations: 'ApplicableOperations',
      instanceId: 'InstanceId',
      name: 'Name',
      concurrency: 'Concurrency',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyUserName: 'string',
      description: 'string',
      applicableOperations: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      name: 'string',
      concurrency: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationsResponseBodyConversations extends $tea.Model {
  endTime?: number;
  effectiveAnswerCount?: number;
  transferredToAgent?: boolean;
  beginTime?: number;
  skillGroupId?: string;
  conversationId?: string;
  callingNumber?: string;
  userUtteranceCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      effectiveAnswerCount: 'EffectiveAnswerCount',
      transferredToAgent: 'TransferredToAgent',
      beginTime: 'BeginTime',
      skillGroupId: 'SkillGroupId',
      conversationId: 'ConversationId',
      callingNumber: 'CallingNumber',
      userUtteranceCount: 'UserUtteranceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      effectiveAnswerCount: 'number',
      transferredToAgent: 'boolean',
      beginTime: 'number',
      skillGroupId: 'string',
      conversationId: 'string',
      callingNumber: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateChatbotInstanceResponse>(await this.doRPCRequest("AssociateChatbotInstance", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateChatbotInstanceResponse({}));
  }

  async associateChatbotInstance(request: AssociateChatbotInstanceRequest): Promise<AssociateChatbotInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateChatbotInstanceWithOptions(request, runtime);
  }

  async auditTTSVoiceWithOptions(request: AuditTTSVoiceRequest, runtime: $Util.RuntimeOptions): Promise<AuditTTSVoiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AuditTTSVoiceResponse>(await this.doRPCRequest("AuditTTSVoice", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new AuditTTSVoiceResponse({}));
  }

  async auditTTSVoice(request: AuditTTSVoiceRequest): Promise<AuditTTSVoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.auditTTSVoiceWithOptions(request, runtime);
  }

  async beginDialogueWithOptions(request: BeginDialogueRequest, runtime: $Util.RuntimeOptions): Promise<BeginDialogueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BeginDialogueResponse>(await this.doRPCRequest("BeginDialogue", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new BeginDialogueResponse({}));
  }

  async beginDialogue(request: BeginDialogueRequest): Promise<BeginDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beginDialogueWithOptions(request, runtime);
  }

  async collectedNumberWithOptions(request: CollectedNumberRequest, runtime: $Util.RuntimeOptions): Promise<CollectedNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CollectedNumberResponse>(await this.doRPCRequest("CollectedNumber", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new CollectedNumberResponse({}));
  }

  async collectedNumber(request: CollectedNumberRequest): Promise<CollectedNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.collectedNumberWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async debugBeginDialogueWithOptions(request: DebugBeginDialogueRequest, runtime: $Util.RuntimeOptions): Promise<DebugBeginDialogueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DebugBeginDialogueResponse>(await this.doRPCRequest("DebugBeginDialogue", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DebugBeginDialogueResponse({}));
  }

  async debugBeginDialogue(request: DebugBeginDialogueRequest): Promise<DebugBeginDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugBeginDialogueWithOptions(request, runtime);
  }

  async debugCollectedNumberWithOptions(request: DebugCollectedNumberRequest, runtime: $Util.RuntimeOptions): Promise<DebugCollectedNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DebugCollectedNumberResponse>(await this.doRPCRequest("DebugCollectedNumber", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DebugCollectedNumberResponse({}));
  }

  async debugCollectedNumber(request: DebugCollectedNumberRequest): Promise<DebugCollectedNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugCollectedNumberWithOptions(request, runtime);
  }

  async debugDialogueWithOptions(request: DebugDialogueRequest, runtime: $Util.RuntimeOptions): Promise<DebugDialogueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DebugDialogueResponse>(await this.doRPCRequest("DebugDialogue", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DebugDialogueResponse({}));
  }

  async debugDialogue(request: DebugDialogueRequest): Promise<DebugDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugDialogueWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async describeConversationWithOptions(request: DescribeConversationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConversationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeConversationResponse>(await this.doRPCRequest("DescribeConversation", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeConversationResponse({}));
  }

  async describeConversation(request: DescribeConversationRequest): Promise<DescribeConversationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConversationWithOptions(request, runtime);
  }

  async describeConversationContextWithOptions(request: DescribeConversationContextRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConversationContextResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeConversationContextResponse>(await this.doRPCRequest("DescribeConversationContext", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeConversationContextResponse({}));
  }

  async describeConversationContext(request: DescribeConversationContextRequest): Promise<DescribeConversationContextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConversationContextWithOptions(request, runtime);
  }

  async describeExportProgressWithOptions(request: DescribeExportProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportProgressResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeExportProgressResponse>(await this.doRPCRequest("DescribeExportProgress", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeExportProgressResponse({}));
  }

  async describeExportProgress(request: DescribeExportProgressRequest): Promise<DescribeExportProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportProgressWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeInstanceResponse>(await this.doRPCRequest("DescribeInstance", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async describeNavigationConfigWithOptions(request: DescribeNavigationConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNavigationConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeNavigationConfigResponse>(await this.doRPCRequest("DescribeNavigationConfig", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeNavigationConfigResponse({}));
  }

  async describeNavigationConfig(request: DescribeNavigationConfigRequest): Promise<DescribeNavigationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNavigationConfigWithOptions(request, runtime);
  }

  async describeRecordingWithOptions(request: DescribeRecordingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeRecordingResponse>(await this.doRPCRequest("DescribeRecording", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeRecordingResponse({}));
  }

  async describeRecording(request: DescribeRecordingRequest): Promise<DescribeRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordingWithOptions(request, runtime);
  }

  async describeStatisticalDataWithOptions(request: DescribeStatisticalDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStatisticalDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeStatisticalDataResponse>(await this.doRPCRequest("DescribeStatisticalData", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeStatisticalDataResponse({}));
  }

  async describeStatisticalData(request: DescribeStatisticalDataRequest): Promise<DescribeStatisticalDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStatisticalDataWithOptions(request, runtime);
  }

  async describeTTSConfigWithOptions(request: DescribeTTSConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTTSConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeTTSConfigResponse>(await this.doRPCRequest("DescribeTTSConfig", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeTTSConfigResponse({}));
  }

  async describeTTSConfig(request: DescribeTTSConfigRequest): Promise<DescribeTTSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTTSConfigWithOptions(request, runtime);
  }

  async dialogueWithOptions(request: DialogueRequest, runtime: $Util.RuntimeOptions): Promise<DialogueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DialogueResponse>(await this.doRPCRequest("Dialogue", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DialogueResponse({}));
  }

  async dialogue(request: DialogueRequest): Promise<DialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dialogueWithOptions(request, runtime);
  }

  async disableInstanceWithOptions(request: DisableInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DisableInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableInstanceResponse>(await this.doRPCRequest("DisableInstance", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new DisableInstanceResponse({}));
  }

  async disableInstance(request: DisableInstanceRequest): Promise<DisableInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInstanceWithOptions(request, runtime);
  }

  async enableInstanceWithOptions(request: EnableInstanceRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableInstanceResponse>(await this.doRPCRequest("EnableInstance", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new EnableInstanceResponse({}));
  }

  async enableInstance(request: EnableInstanceRequest): Promise<EnableInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstanceWithOptions(request, runtime);
  }

  async endDialogueWithOptions(request: EndDialogueRequest, runtime: $Util.RuntimeOptions): Promise<EndDialogueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EndDialogueResponse>(await this.doRPCRequest("EndDialogue", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new EndDialogueResponse({}));
  }

  async endDialogue(request: EndDialogueRequest): Promise<EndDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.endDialogueWithOptions(request, runtime);
  }

  async exportConversationDetailsWithOptions(request: ExportConversationDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ExportConversationDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportConversationDetailsResponse>(await this.doRPCRequest("ExportConversationDetails", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ExportConversationDetailsResponse({}));
  }

  async exportConversationDetails(request: ExportConversationDetailsRequest): Promise<ExportConversationDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportConversationDetailsWithOptions(request, runtime);
  }

  async exportStatisticalDataWithOptions(request: ExportStatisticalDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportStatisticalDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportStatisticalDataResponse>(await this.doRPCRequest("ExportStatisticalData", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ExportStatisticalDataResponse({}));
  }

  async exportStatisticalData(request: ExportStatisticalDataRequest): Promise<ExportStatisticalDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportStatisticalDataWithOptions(request, runtime);
  }

  async listChatbotInstancesWithOptions(request: ListChatbotInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListChatbotInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListChatbotInstancesResponse>(await this.doRPCRequest("ListChatbotInstances", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListChatbotInstancesResponse({}));
  }

  async listChatbotInstances(request: ListChatbotInstancesRequest): Promise<ListChatbotInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChatbotInstancesWithOptions(request, runtime);
  }

  async listConversationDetailsWithOptions(request: ListConversationDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListConversationDetailsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListConversationDetailsResponse>(await this.doRPCRequest("ListConversationDetails", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListConversationDetailsResponse({}));
  }

  async listConversationDetails(request: ListConversationDetailsRequest): Promise<ListConversationDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConversationDetailsWithOptions(request, runtime);
  }

  async listConversationsWithOptions(request: ListConversationsRequest, runtime: $Util.RuntimeOptions): Promise<ListConversationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListConversationsResponse>(await this.doRPCRequest("ListConversations", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListConversationsResponse({}));
  }

  async listConversations(request: ListConversationsRequest): Promise<ListConversationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConversationsWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListInstancesResponse>(await this.doRPCRequest("ListInstances", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async modifyGreetingConfigWithOptions(request: ModifyGreetingConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGreetingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyGreetingConfigResponse>(await this.doRPCRequest("ModifyGreetingConfig", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyGreetingConfigResponse({}));
  }

  async modifyGreetingConfig(request: ModifyGreetingConfigRequest): Promise<ModifyGreetingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGreetingConfigWithOptions(request, runtime);
  }

  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceResponse>(await this.doRPCRequest("ModifyInstance", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  async modifySilenceTimeoutConfigWithOptions(request: ModifySilenceTimeoutConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifySilenceTimeoutConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySilenceTimeoutConfigResponse>(await this.doRPCRequest("ModifySilenceTimeoutConfig", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySilenceTimeoutConfigResponse({}));
  }

  async modifySilenceTimeoutConfig(request: ModifySilenceTimeoutConfigRequest): Promise<ModifySilenceTimeoutConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySilenceTimeoutConfigWithOptions(request, runtime);
  }

  async modifyTTSConfigWithOptions(request: ModifyTTSConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTTSConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTTSConfigResponse>(await this.doRPCRequest("ModifyTTSConfig", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTTSConfigResponse({}));
  }

  async modifyTTSConfig(request: ModifyTTSConfigRequest): Promise<ModifyTTSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTTSConfigWithOptions(request, runtime);
  }

  async modifyUnrecognizingConfigWithOptions(request: ModifyUnrecognizingConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUnrecognizingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUnrecognizingConfigResponse>(await this.doRPCRequest("ModifyUnrecognizingConfig", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUnrecognizingConfigResponse({}));
  }

  async modifyUnrecognizingConfig(request: ModifyUnrecognizingConfigRequest): Promise<ModifyUnrecognizingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUnrecognizingConfigWithOptions(request, runtime);
  }

  async queryConversationsWithOptions(request: QueryConversationsRequest, runtime: $Util.RuntimeOptions): Promise<QueryConversationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryConversationsResponse>(await this.doRPCRequest("QueryConversations", "2018-06-12", "HTTPS", "GET", "AK", "json", req, runtime), new QueryConversationsResponse({}));
  }

  async queryConversations(request: QueryConversationsRequest): Promise<QueryConversationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConversationsWithOptions(request, runtime);
  }

  async saveRecordingWithOptions(request: SaveRecordingRequest, runtime: $Util.RuntimeOptions): Promise<SaveRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveRecordingResponse>(await this.doRPCRequest("SaveRecording", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new SaveRecordingResponse({}));
  }

  async saveRecording(request: SaveRecordingRequest): Promise<SaveRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRecordingWithOptions(request, runtime);
  }

  async silenceTimeoutWithOptions(request: SilenceTimeoutRequest, runtime: $Util.RuntimeOptions): Promise<SilenceTimeoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SilenceTimeoutResponse>(await this.doRPCRequest("SilenceTimeout", "2018-06-12", "HTTPS", "POST", "AK", "json", req, runtime), new SilenceTimeoutResponse({}));
  }

  async silenceTimeout(request: SilenceTimeoutRequest): Promise<SilenceTimeoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.silenceTimeoutWithOptions(request, runtime);
  }

}
