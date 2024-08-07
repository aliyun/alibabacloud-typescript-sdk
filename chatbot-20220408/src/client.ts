// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyForStreamAccessTokenRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyForStreamAccessTokenResponseBody extends $tea.Model {
  /**
   * @example
   * 63ba97b4f18a4a04f715c81e8e643938
   */
  accessToken?: string;
  /**
   * @example
   * cc9e88c0-4f41-4f1d-a1a9-91a72d2aa27d
   */
  channelId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 736994BD-AA35-4742-88C9-E64BE4BAA14B
   */
  requestId?: string;
  /**
   * @example
   * cc9e88c0-4f41-4f1d-a1a9-91a72d2aa27d
   */
  streamSecret?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      channelId: 'ChannelId',
      requestId: 'RequestId',
      streamSecret: 'StreamSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      channelId: 'string',
      requestId: 'string',
      streamSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyForStreamAccessTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyForStreamAccessTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyForStreamAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * ["qyzzVfyFfa"]
   */
  perspective?: string[];
  /**
   * @example
   * 8
   */
  recommendNum?: number;
  /**
   * @example
   * 7c3cec23cc8940bc9db4a318c8f4f0aa
   */
  sessionId?: string;
  /**
   * @example
   * 公积金提取
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      perspective: 'Perspective',
      recommendNum: 'RecommendNum',
      sessionId: 'SessionId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      recommendNum: 'number',
      sessionId: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * ["qyzzVfyFfa"]
   */
  perspectiveShrink?: string;
  /**
   * @example
   * 8
   */
  recommendNum?: number;
  /**
   * @example
   * 7c3cec23cc8940bc9db4a318c8f4f0aa
   */
  sessionId?: string;
  /**
   * @example
   * 公积金提取
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      perspectiveShrink: 'Perspective',
      recommendNum: 'RecommendNum',
      sessionId: 'SessionId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      perspectiveShrink: 'string',
      recommendNum: 'number',
      sessionId: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResponseBody extends $tea.Model {
  associate?: AssociateResponseBodyAssociate[];
  /**
   * @example
   * 5ADF0EBD-7C50-1922-A28B-43215B47CC1A
   */
  messageId?: string;
  /**
   * @example
   * 5C20F0D4-9721-178A-8236-3BF990634962
   */
  requestId?: string;
  /**
   * @example
   * 1531ded6b3df4afca4be63943f708bb7
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      associate: 'Associate',
      messageId: 'MessageId',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associate: { 'type': 'array', 'itemType': AssociateResponseBodyAssociate },
      messageId: 'string',
      requestId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginSessionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginSessionResponseBody extends $tea.Model {
  asrMaxEndSilence?: number;
  interruptible?: boolean;
  /**
   * @example
   * 149C7528-C104-1B50-A4F9-0C5907A8AD9D
   */
  requestId?: string;
  /**
   * @remarks
   * 静默超时时间
   * 
   * @example
   * 5
   */
  silenceReplyTimeout?: number;
  /**
   * @example
   * 智能对话机器人为您服务，请问有什么可以帮您？
   */
  welcomeMessage?: string;
  static names(): { [key: string]: string } {
    return {
      asrMaxEndSilence: 'AsrMaxEndSilence',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      silenceReplyTimeout: 'SilenceReplyTimeout',
      welcomeMessage: 'WelcomeMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrMaxEndSilence: 'number',
      interruptible: 'boolean',
      requestId: 'string',
      silenceReplyTimeout: 'number',
      welcomeMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BeginSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BeginSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelInstancePublishTaskRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 8521
   */
  id?: number;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelInstancePublishTaskResponseBody extends $tea.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  /**
   * @example
   * 8522
   */
  id?: number;
  /**
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8522
   */
  response?: string;
  /**
   * @example
   * FE_ABORTED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelInstancePublishTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelInstancePublishTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelInstancePublishTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPublishTaskRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 8521
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPublishTaskResponseBody extends $tea.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  /**
   * @example
   * 8522
   */
  id?: number;
  /**
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8522
   */
  response?: string;
  /**
   * @example
   * FE_ABORTED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPublishTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelPublishTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelPublishTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  intentName?: string;
  /**
   * @example
   * 30002406051
   */
  knowledgeId?: string;
  perspective?: string[];
  /**
   * @example
   * true
   */
  sandBox?: boolean;
  /**
   * @example
   * custumer_123456
   */
  senderId?: string;
  senderNick?: string;
  /**
   * @example
   * 9c6ebdc6e66f46ecadab3434314f6959
   */
  sessionId?: string;
  utterance?: string;
  /**
   * @example
   * {"phone":123456789}
   */
  vendorParam?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentName: 'IntentName',
      knowledgeId: 'KnowledgeId',
      perspective: 'Perspective',
      sandBox: 'SandBox',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentName: 'string',
      knowledgeId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      sandBox: 'boolean',
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  intentName?: string;
  /**
   * @example
   * 30002406051
   */
  knowledgeId?: string;
  perspectiveShrink?: string;
  /**
   * @example
   * true
   */
  sandBox?: boolean;
  /**
   * @example
   * custumer_123456
   */
  senderId?: string;
  senderNick?: string;
  /**
   * @example
   * 9c6ebdc6e66f46ecadab3434314f6959
   */
  sessionId?: string;
  utterance?: string;
  /**
   * @example
   * {"phone":123456789}
   */
  vendorParam?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentName: 'IntentName',
      knowledgeId: 'KnowledgeId',
      perspectiveShrink: 'Perspective',
      sandBox: 'SandBox',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentName: 'string',
      knowledgeId: 'string',
      perspectiveShrink: 'string',
      sandBox: 'boolean',
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBody extends $tea.Model {
  /**
   * @example
   * A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
   */
  messageId?: string;
  messages?: ChatResponseBodyMessages[];
  querySegList?: string[];
  /**
   * @example
   * A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
   */
  requestId?: string;
  /**
   * @example
   * a6f216a0685c4c8baa0e8beb6d5ec6db
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      messages: 'Messages',
      querySegList: 'QuerySegList',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      messages: { 'type': 'array', 'itemType': ChatResponseBodyMessages },
      querySegList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueInstancePublishTaskRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 8521
   */
  id?: number;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueInstancePublishTaskResponseBody extends $tea.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  /**
   * @example
   * {}
   */
  errors?: { [key: string]: any };
  /**
   * @example
   * 8522
   */
  id?: number;
  /**
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8522
   */
  response?: string;
  /**
   * @example
   * FE_RUNNING
   */
  status?: string;
  /**
   * @example
   * {         "category_bind_faq": [             "以下类目没有发布到正式环境: 项目交付信息汇总"         ]     }
   */
  warnings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      errors: 'Errors',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      errors: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
      status: 'string',
      warnings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueInstancePublishTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinueInstancePublishTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ContinueInstancePublishTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCategoryRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  bizCode?: string;
  knowledgeType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      bizCode: 'BizCode',
      knowledgeType: 'KnowledgeType',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      bizCode: 'string',
      knowledgeType: 'number',
      name: 'string',
      parentCategoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCategoryResponseBody extends $tea.Model {
  category?: CreateCategoryResponseBodyCategory;
  /**
   * @example
   * A629A28F-F25E-5572-A679-FA46FB0151D6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: CreateCategoryResponseBodyCategory,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnQuestionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30002654628
   */
  connQuestionId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30002174773
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      connQuestionId: 'ConnQuestionId',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      connQuestionId: 'number',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnQuestionResponseBody extends $tea.Model {
  /**
   * @example
   * 1000002123
   */
  outlineId?: number;
  /**
   * @example
   * C191B48B-9268-4FB1-A3C2-5143B4A91D0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      outlineId: 'OutlineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlineId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConnQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateConnQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDSEntityRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 实体名称
   */
  entityName?: string;
  /**
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityName: 'EntityName',
      entityType: 'EntityType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityName: 'string',
      entityType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDSEntityResponseBody extends $tea.Model {
  /**
   * @example
   * 23436345
   */
  entityId?: number;
  /**
   * @example
   * adfad2343f1f2r
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDSEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDSEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDSEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDSEntityValueRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ada
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      entityId: 'EntityId',
      instanceId: 'InstanceId',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      entityId: 'number',
      instanceId: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDSEntityValueShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ada
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  synonymsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      entityId: 'EntityId',
      instanceId: 'InstanceId',
      synonymsShrink: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      entityId: 'number',
      instanceId: 'string',
      synonymsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDSEntityValueResponseBody extends $tea.Model {
  /**
   * @example
   * 2434543453
   */
  entityValueId?: number;
  /**
   * @example
   * g763hg48j3f3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityValueId: 'EntityValueId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityValueId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDSEntityValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDSEntityValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDSEntityValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  content?: string;
  /**
   * @example
   * 2032-05-25T16:28:36Z
   */
  endDate?: string;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  tagIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @example
   * https://example.com/example.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      config: 'Config',
      content: 'Content',
      endDate: 'EndDate',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIds: 'TagIds',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      endDate: 'string',
      meta: 'string',
      startDate: 'string',
      tagIds: { 'type': 'array', 'itemType': 'number' },
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  content?: string;
  /**
   * @example
   * 2032-05-25T16:28:36Z
   */
  endDate?: string;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  tagIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @example
   * https://example.com/example.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      config: 'Config',
      content: 'Content',
      endDate: 'EndDate',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIdsShrink: 'TagIds',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      endDate: 'string',
      meta: 'string',
      startDate: 'string',
      tagIdsShrink: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocResponseBody extends $tea.Model {
  /**
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @example
   * 07B270A4-61D8-57F6-A609-A3C216CFB872
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaqRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000053274
   */
  categoryId?: number;
  /**
   * @example
   * 2030-12-31T16:00:00Z
   */
  endDate?: string;
  solutionContent?: string;
  /**
   * @example
   * 0
   */
  solutionType?: number;
  /**
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      endDate: 'EndDate',
      solutionContent: 'SolutionContent',
      solutionType: 'SolutionType',
      startDate: 'StartDate',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      endDate: 'string',
      solutionContent: 'string',
      solutionType: 'number',
      startDate: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaqResponseBody extends $tea.Model {
  /**
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @example
   * 28805A7C-D695-548C-A31B-67E52C2C274F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaqResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFaqResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFaqResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 用于手机app的小蜜机器人
   */
  introduction?: string;
  /**
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @example
   * 小蜜机器人
   */
  name?: string;
  /**
   * @example
   * scenario_im
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      robotType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2E2C40D-AB09-45A1-B5C5-EB9F5C4E4E4A
   */
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

export class CreateInstancePublishTaskRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancePublishTaskResponseBody extends $tea.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  /**
   * @example
   * 8522
   */
  id?: number;
  /**
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8522
   */
  response?: string;
  /**
   * @example
   * FE_RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancePublishTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstancePublishTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstancePublishTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  intentDefinition?: CreateIntentRequestIntentDefinition;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentDefinition: 'IntentDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentDefinition: CreateIntentRequestIntentDefinition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  intentDefinitionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentDefinitionShrink: 'IntentDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentDefinitionShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentResponseBody extends $tea.Model {
  /**
   * @example
   * 43546474
   */
  intentId?: number;
  /**
   * @example
   * df56gjh5et34g3g3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLgfRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  lgfDefinition?: CreateLgfRequestLgfDefinition;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      lgfDefinition: 'LgfDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      lgfDefinition: CreateLgfRequestLgfDefinition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLgfShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  lgfDefinitionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      lgfDefinitionShrink: 'LgfDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      lgfDefinitionShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLgfResponseBody extends $tea.Model {
  /**
   * @remarks
   * LGF ID
   * 
   * @example
   * 123453433453
   */
  lgfId?: number;
  /**
   * @example
   * af5fg3sdf457j5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lgfId: 'LgfId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lgfId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLgfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLgfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLgfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerspectiveRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 用于购物APP的移动端视角
   */
  description?: string;
  /**
   * @example
   * 移动端视角
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerspectiveResponseBody extends $tea.Model {
  /**
   * @example
   * 3001
   */
  perspectiveId?: string;
  /**
   * @example
   * F285D735-D580-18A8-B97F-B2E72B00F101
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      perspectiveId: 'PerspectiveId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectiveId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerspectiveResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePerspectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePerspectiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishTaskRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * faq
   */
  bizType?: string;
  /**
   * @example
   * ["8521"]
   */
  dataIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      bizType: 'BizType',
      dataIdList: 'DataIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      bizType: 'string',
      dataIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishTaskShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * faq
   */
  bizType?: string;
  /**
   * @example
   * ["8521"]
   */
  dataIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      bizType: 'BizType',
      dataIdListShrink: 'DataIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      bizType: 'string',
      dataIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishTaskResponseBody extends $tea.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  /**
   * @example
   * 8522
   */
  id?: number;
  /**
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8522
   */
  response?: string;
  /**
   * @example
   * FE_RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublishTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublishTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePublishTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimQuestionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimQuestionResponseBody extends $tea.Model {
  /**
   * @example
   * 16AC1B3C-66E0-438B-BB7C-71B692407B67
   */
  requestId?: string;
  /**
   * @example
   * 1000002788
   */
  simQuestionId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      simQuestionId: 'SimQuestionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      simQuestionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSimQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSimQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSolutionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  perspectiveCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentType: 'ContentType',
      knowledgeId: 'KnowledgeId',
      perspectiveCodes: 'PerspectiveCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentType: 'number',
      knowledgeId: 'number',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSolutionResponseBody extends $tea.Model {
  /**
   * @example
   * F55D90C1-31BE-4B2A-AA3F-25EFC36F9419
   */
  requestId?: string;
  /**
   * @example
   * 100001089003
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      solutionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSolutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserSayRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  userSayDefinition?: CreateUserSayRequestUserSayDefinition;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      userSayDefinition: 'UserSayDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      userSayDefinition: CreateUserSayRequestUserSayDefinition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserSayShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  userSayDefinitionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      userSayDefinitionShrink: 'UserSayDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      userSayDefinitionShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserSayResponseBody extends $tea.Model {
  /**
   * @example
   * 8g4n8bnd236fg79
   */
  requestId?: string;
  /**
   * @example
   * 46456176856
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSayId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserSayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserSayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserSayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategoryRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategoryResponseBody extends $tea.Model {
  /**
   * @example
   * 4B3E0DE3-DC57-5BFE-88D4-ADD8ED024F55
   */
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

export class DeleteCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnQuestionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 877397683
   */
  outlineId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      outlineId: 'OutlineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      outlineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnQuestionResponseBody extends $tea.Model {
  /**
   * @example
   * FC323352-3AD7-59A1-9088-A64470BAFC9D
   */
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

export class DeleteConnQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConnQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConnQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDSEntityRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityId: 'EntityId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDSEntityResponseBody extends $tea.Model {
  /**
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @example
   * 4dfghf56235asdf452
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDSEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDSEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDSEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDSEntityValueRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 345346223452
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3453453452
   */
  entityValueId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityId: 'EntityId',
      entityValueId: 'EntityValueId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityId: 'number',
      entityValueId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDSEntityValueResponseBody extends $tea.Model {
  /**
   * @example
   * 3453453452
   */
  entityValueId?: number;
  /**
   * @example
   * dfdf2t3rfvb45y
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityValueId: 'EntityValueId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityValueId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDSEntityValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDSEntityValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDSEntityValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   * 
   * **if can be null:**
   * false
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocResponseBody extends $tea.Model {
  /**
   * @example
   * 30002406051
   */
  knowledgeId?: number;
  /**
   * @example
   * DFB71B34-4188-4EA2-9988-EF3014E75910
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaqRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaqResponseBody extends $tea.Model {
  /**
   * @example
   * F79E7305-5314-5069-A701-9591AD051902
   */
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

export class DeleteFaqResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFaqResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFaqResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2021-09-11T09:26:14Z
   */
  createTime?: string;
  /**
   * @example
   * 9052
   */
  createUserId?: number;
  /**
   * @example
   * xuqiang_test
   */
  createUserName?: string;
  error?: string;
  /**
   * @example
   * 8521
   */
  id?: number;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8521
   */
  response?: number;
  /**
   * @example
   * FE_RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      error: 'Error',
      id: 'Id',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      error: 'string',
      id: 'number',
      requestId: 'string',
      response: 'number',
      status: 'string',
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

export class DeleteIntentRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntentResponseBody extends $tea.Model {
  /**
   * @example
   * 12345
   */
  intentId?: number;
  /**
   * @example
   * 3464dfg3qwr34tf34
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLgfRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23242342
   */
  intentId?: number;
  /**
   * @remarks
   * lgf Id
   * 
   * This parameter is required.
   * 
   * @example
   * 2342424
   */
  lgfId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      lgfId: 'LgfId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentId: 'number',
      lgfId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLgfResponseBody extends $tea.Model {
  /**
   * @remarks
   * LGF ID
   * 
   * @example
   * 2342424
   */
  lgfId?: number;
  /**
   * @example
   * dgw2342424qw42
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lgfId: 'LgfId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lgfId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLgfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLgfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLgfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePerspectiveRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 3001
   */
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      perspectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePerspectiveResponseBody extends $tea.Model {
  /**
   * @example
   * FC384CE1-8D42-1900-84E1-F33F990F2B5E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePerspectiveResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePerspectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePerspectiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSimQuestionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000002788
   */
  simQuestionId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      simQuestionId: 'SimQuestionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      simQuestionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSimQuestionResponseBody extends $tea.Model {
  /**
   * @example
   * 6419BA93-D111-5225-8998-13E63E6D3940
   */
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

export class DeleteSimQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSimQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSimQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSolutionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100001321580
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      solutionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSolutionResponseBody extends $tea.Model {
  /**
   * @example
   * F79E7305-5314-5069-A701-9591AD051902
   */
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

export class DeleteSolutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserSayRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 343df2sdf23
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5564564546
   */
  intentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4562121234
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentId: 'number',
      userSayId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserSayResponseBody extends $tea.Model {
  /**
   * @example
   * dfgdg324gf34t34g34g3
   */
  requestId?: string;
  /**
   * @example
   * 4562121234
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSayId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserSayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserSayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserSayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryResponseBody extends $tea.Model {
  category?: DescribeCategoryResponseBodyCategory;
  /**
   * @example
   * 2B0304FD-3804-5C06-9A83-77F5523664AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: DescribeCategoryResponseBodyCategory,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDSEntityRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityId: 'EntityId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDSEntityResponseBody extends $tea.Model {
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @example
   * 123
   */
  entityId?: number;
  entityName?: string;
  /**
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @example
   * test
   */
  modifyUserName?: string;
  /**
   * @example
   * ad23234dsf234fga
   */
  requestId?: string;
  sysEntityCode?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      requestId: 'RequestId',
      sysEntityCode: 'SysEntityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      requestId: 'string',
      sysEntityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDSEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDSEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDSEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @example
   * false
   */
  showDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
      showDetail: 'ShowDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
      showDetail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponseBody extends $tea.Model {
  /**
   * @example
   * bizcode123
   */
  bizCode?: string;
  /**
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}
   */
  config?: string;
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  /**
   * @example
   * 1111111111
   */
  createUserId?: number;
  createUserName?: string;
  docInfo?: DescribeDocResponseBodyDocInfo;
  docName?: string;
  docTags?: DescribeDocResponseBodyDocTags[];
  /**
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @example
   * 2023-04-27T06:08:54Z
   */
  endDate?: string;
  /**
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2020-11-25T08:56:55Z
   */
  modifyTime?: string;
  /**
   * @example
   * 2222222222
   */
  modifyUserId?: number;
  modifyUserName?: string;
  /**
   * @example
   * true
   */
  processCanRetry?: boolean;
  processMessage?: string;
  /**
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7F132693-212A-40A9-8A81-11E7694E478B
   */
  requestId?: string;
  /**
   * @example
   * 1979-12-31T16:00:00Z
   */
  startDate?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      categoryId: 'CategoryId',
      config: 'Config',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      docInfo: 'DocInfo',
      docName: 'DocName',
      docTags: 'DocTags',
      effectStatus: 'EffectStatus',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      meta: 'Meta',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      processCanRetry: 'ProcessCanRetry',
      processMessage: 'ProcessMessage',
      processStatus: 'ProcessStatus',
      requestId: 'RequestId',
      startDate: 'StartDate',
      status: 'Status',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      categoryId: 'number',
      config: 'string',
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      docInfo: DescribeDocResponseBodyDocInfo,
      docName: 'string',
      docTags: { 'type': 'array', 'itemType': DescribeDocResponseBodyDocTags },
      effectStatus: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      meta: 'string',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
      processCanRetry: 'boolean',
      processMessage: 'string',
      processStatus: 'number',
      requestId: 'string',
      startDate: 'string',
      status: 'number',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponseBody extends $tea.Model {
  /**
   * @example
   * 30000055617
   */
  categoryId?: number;
  /**
   * @example
   * 2020-11-30T03:03:37Z
   */
  createTime?: string;
  /**
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @example
   * 2023-04-27T06:08:54Z
   */
  endDate?: string;
  /**
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @example
   * 2020-12-02T06:35:50Z
   */
  modifyTime?: string;
  /**
   * @example
   * test01
   */
  modifyUserName?: string;
  outlines?: DescribeFaqResponseBodyOutlines[];
  /**
   * @example
   * 8AD9FA10-7780-5E12-B701-13C928524F32
   */
  requestId?: string;
  simQuestions?: DescribeFaqResponseBodySimQuestions[];
  solutions?: DescribeFaqResponseBodySolutions[];
  /**
   * @example
   * 2022-04-27T07:04:39Z
   */
  startDate?: string;
  /**
   * @example
   * 3
   */
  status?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      effectStatus: 'EffectStatus',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      outlines: 'Outlines',
      requestId: 'RequestId',
      simQuestions: 'SimQuestions',
      solutions: 'Solutions',
      startDate: 'StartDate',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      createTime: 'string',
      createUserName: 'string',
      effectStatus: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      modifyTime: 'string',
      modifyUserName: 'string',
      outlines: { 'type': 'array', 'itemType': DescribeFaqResponseBodyOutlines },
      requestId: 'string',
      simQuestions: { 'type': 'array', 'itemType': DescribeFaqResponseBodySimQuestions },
      solutions: { 'type': 'array', 'itemType': DescribeFaqResponseBodySolutions },
      startDate: 'string',
      status: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaqResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaqResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * /alimefe/meebot/robot/0.0.5/img/xxx-90-97.png
   */
  avatar?: string;
  categories?: DescribeInstanceResponseBodyCategories[];
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * PUBLISHED
   */
  editStatus?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * 用于C端问答的机器人
   */
  introduction?: string;
  /**
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @example
   * 智能客服-小C
   */
  name?: string;
  /**
   * @example
   * 907AA5F2-0521-49AB-80AB-1ADEFAB2B901
   */
  requestId?: string;
  /**
   * @example
   * scenario_im
   */
  robotType?: string;
  /**
   * @example
   * Asia/Chongqing
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      categories: 'Categories',
      createTime: 'CreateTime',
      editStatus: 'EditStatus',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      requestId: 'RequestId',
      robotType: 'RobotType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      categories: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyCategories },
      createTime: 'string',
      editStatus: 'string',
      instanceId: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      requestId: 'string',
      robotType: 'string',
      timeZone: 'string',
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

export class DescribeIntentRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBody extends $tea.Model {
  aliasName?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @example
   * 84243341
   */
  intentId?: number;
  intentName?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @example
   * test
   */
  modifyUserName?: string;
  /**
   * @example
   * a22afaf2adfasf2gr345fga45ada
   */
  requestId?: string;
  slotInfos?: DescribeIntentResponseBodySlotInfos[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      intentId: 'IntentId',
      intentName: 'IntentName',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      requestId: 'RequestId',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      intentId: 'number',
      intentName: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      requestId: 'string',
      slotInfos: { 'type': 'array', 'itemType': DescribeIntentResponseBodySlotInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerspectiveRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 3001
   */
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      perspectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerspectiveResponseBody extends $tea.Model {
  /**
   * @example
   * 2021-07-27T07:05:37Z
   */
  createTime?: string;
  /**
   * @example
   * 2021-07-26T07:05:37Z
   */
  modifyTime?: string;
  /**
   * @example
   * 移动端视角
   */
  name?: string;
  /**
   * @example
   * FZJBY3raWr
   */
  perspectiveCode?: string;
  /**
   * @example
   * 3001
   */
  perspectiveId?: string;
  /**
   * @example
   * F285D735-D580-18A8-B97F-B2E72B00F101
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  selfDefine?: boolean;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      name: 'Name',
      perspectiveCode: 'PerspectiveCode',
      perspectiveId: 'PerspectiveId',
      requestId: 'RequestId',
      selfDefine: 'SelfDefine',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      name: 'string',
      perspectiveCode: 'string',
      perspectiveId: 'string',
      requestId: 'string',
      selfDefine: 'boolean',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerspectiveResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePerspectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePerspectiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * good
   */
  feedback?: string;
  /**
   * @example
   * 这个回答很棒
   */
  feedbackContent?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * 5ca40988-4f99-47ad-ac96-9060d0f81db9
   */
  messageId?: string;
  /**
   * @example
   * 7c3cec23cc8940bc9db4a318c8f4f0aa
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      feedback: 'Feedback',
      feedbackContent: 'FeedbackContent',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      feedback: 'string',
      feedbackContent: 'string',
      instanceId: 'string',
      messageId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackResponseBody extends $tea.Model {
  /**
   * @example
   * good
   */
  feedback?: string;
  /**
   * @example
   * 5ca40988-4f99-47ad-ac96-9060d0f81db9
   */
  messageId?: string;
  /**
   * @example
   * 4e5eea71-f326-450c-8849-49515473ef64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FeedbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUserAccessTokenRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * a***bcx@gmail.com
   */
  email?: string;
  /**
   * @example
   * 1000
   */
  expireTime?: number;
  extraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8882022040000000171
   */
  foreignId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nick?: string;
  /**
   * @example
   * 1381111****
   */
  telephone?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      email: 'Email',
      expireTime: 'ExpireTime',
      extraInfo: 'ExtraInfo',
      foreignId: 'ForeignId',
      nick: 'Nick',
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      email: 'string',
      expireTime: 'number',
      extraInfo: 'string',
      foreignId: 'string',
      nick: 'string',
      telephone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUserAccessTokenResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * DDEXEDAFWAGASDFWAEFFAWEFAWFWEAFWAFWAEF
   */
  data?: string;
  /**
   * @example
   * Parameter.Invalid
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E6988CE6-41CF-1103-9BEC-2B20D26C0B51
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class GenerateUserAccessTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateUserAccessTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateUserAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentInfoRequest extends $tea.Model {
  /**
   * @example
   * beebot_bot_public_cn-ca36x8v3n1x
   */
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

export class GetAgentInfoResponseBody extends $tea.Model {
  data?: GetAgentInfoResponseBodyData;
  /**
   * @example
   * Parameter.Invalid
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FC384CE1-8D42-1900-84E1-F33F990F2B5E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: GetAgentInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAgentInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncResultRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncResultResponseBody extends $tea.Model {
  data?: string;
  /**
   * @example
   * F79E7305-5314-5069-A701-9591AD051902
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsyncResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsyncResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotSessionDataRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20240605
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-7QuUfaqMQe
   */
  robotInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20240505
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotSessionDataResponseBody extends $tea.Model {
  /**
   * @example
   * 116
   */
  costTime?: string;
  datas?: { [key: string]: any }[];
  /**
   * @example
   * 15CD94CC-CBEB-4189-806C-A132D1F45D51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotSessionDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBotSessionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBotSessionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancePublishTaskStateRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 8521
   */
  id?: number;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancePublishTaskStateResponseBody extends $tea.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  errors?: { [key: string]: any };
  /**
   * @example
   * 8522
   */
  id?: number;
  /**
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8522
   */
  response?: string;
  /**
   * @example
   * FE_RUNNING
   */
  status?: string;
  warnings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      errors: 'Errors',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      errors: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
      status: 'string',
      warnings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancePublishTaskStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstancePublishTaskStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstancePublishTaskStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishTaskStateRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 8521
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishTaskStateResponseBody extends $tea.Model {
  bizTypeList?: string[];
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  error?: string;
  errors?: { [key: string]: any };
  /**
   * @example
   * 8522
   */
  id?: number;
  /**
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
  /**
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @example
   * 8522
   */
  response?: string;
  /**
   * @example
   * FE_RUNNING
   */
  status?: string;
  warnings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      errors: 'Errors',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      errors: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
      status: 'string',
      warnings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishTaskStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublishTaskStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPublishTaskStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitIMConnectRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8XNBzDucJv
   */
  from?: string;
  /**
   * @example
   * QUM4SndaY3VPMjhkQldDZUNOR0ZaTmZ5R3NBY0FKWHJ4OGc4dERZbEJzcjNIKzFiS1RyTjhXRUpBYmVpQlpsakprNDRFVkdxcy9HWVk2RXZvalU3bHhxRkJlc1NBUXZwdHFKOTE2UTNwamQ4b1U4N3dEbmhyRjc4R2hOQStvMnMrYkV2dlVpSHNvWC96SEVNZWRqMjBuMXdjNklpamJzaDNWYllnUldDZGhJPQ==
   */
  userAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      from: 'From',
      userAccessToken: 'UserAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      from: 'string',
      userAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitIMConnectResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {     "imDomain": "im.alimebot.com",     "appKey": "WDg2VfNv",     "token": "QUM4SndaY3VPMjhkQldDZUNOR0ZaTmZ5R3NBY0FKWHJ4OGc4dERZbEJzcjNIKzFiS1RyTjhXRUpBYmVpQlpsakprNDRFVkdxcy9HWVk2RXZvalU3bHhxRkJlc1NBUXZwdHFKOTE2UTNwamQ4b1U4N3dEbmhyRjc4R2hOQStvMnMrYkV2dlVpSHNvWC96SEVNZWRqMjBuMXdjNklpamJzaDNWYllnUldDZGhJPQ=="   }
   */
  data?: string;
  /**
   * @example
   * Parameter.Invalid
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E6988CE6-41CF-1103-9BEC-2B20D26C0B52
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class InitIMConnectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitIMConnectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitIMConnectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkInstanceCategoryRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * [\\"30000065789\\"]
   */
  categoryIds?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryIds: 'CategoryIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryIds: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkInstanceCategoryResponseBody extends $tea.Model {
  /**
   * @example
   * D8C96601-E645-1BD7-99F3-04EADAB84E29
   */
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

export class LinkInstanceCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LinkInstanceCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LinkInstanceCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentRequest extends $tea.Model {
  agentName?: string;
  goodsCodes?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      goodsCodes: 'GoodsCodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      goodsCodes: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentResponseBody extends $tea.Model {
  data?: ListAgentResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F55D90C1-31BE-4B2A-AA3F-25EFC36F9419
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAgentResponseBodyData },
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

export class ListAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  knowledgeType?: number;
  /**
   * @example
   * -1
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeType: 'KnowledgeType',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeType: 'number',
      parentCategoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryResponseBody extends $tea.Model {
  categories?: ListCategoryResponseBodyCategories[];
  /**
   * @example
   * 9C5F8186-2D22-433E-9545-606D344F30B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': ListCategoryResponseBodyCategories },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnQuestionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnQuestionResponseBody extends $tea.Model {
  outlines?: ListConnQuestionResponseBodyOutlines[];
  /**
   * @example
   * 92B81548-42B9-4B34-924B-4E778AEB412B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListConnQuestionResponseBodyOutlines },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConnQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConnQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDSEntityRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * system
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @example
   * 实体
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityType: 'EntityType',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityType: 'string',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDSEntityResponseBody extends $tea.Model {
  entities?: ListDSEntityResponseBodyEntities[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ga4h345defgwet2sdf223
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': ListDSEntityResponseBodyEntities },
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

export class ListDSEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDSEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDSEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDSEntityValueRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @example
   * 234
   */
  entityValueId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityId: 'EntityId',
      entityValueId: 'EntityValueId',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityId: 'number',
      entityValueId: 'number',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDSEntityValueResponseBody extends $tea.Model {
  entityValues?: ListDSEntityValueResponseBodyEntityValues[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * n3fg34gbfj8adf2gj923
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entityValues: 'EntityValues',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityValues: { 'type': 'array', 'itemType': ListDSEntityValueResponseBodyEntityValues },
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

export class ListDSEntityValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDSEntityValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDSEntityValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * scenario_im
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * scenario_im
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      robotType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  instances?: ListInstanceResponseBodyInstances[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @example
   * 92B81548-42B9-4B34-924B-4E778AEB412B
   */
  requestId?: string;
  /**
   * @example
   * 23
   */
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
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstances },
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

export class ListInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @example
   * 查天气
   */
  intentName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentName: 'IntentName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentResponseBody extends $tea.Model {
  intents?: ListIntentResponseBodyIntents[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 23dsfa34r2s2s2sd12
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      intents: 'Intents',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intents: { 'type': 'array', 'itemType': ListIntentResponseBodyIntents },
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

export class ListIntentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLgfRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  intentId?: number;
  /**
   * @example
   * .{0,5}北京天气
   */
  lgfText?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      lgfText: 'LgfText',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentId: 'number',
      lgfText: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLgfResponseBody extends $tea.Model {
  lgfs?: ListLgfResponseBodyLgfs[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 34fg57h2gh5783
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lgfs: 'Lgfs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lgfs: { 'type': 'array', 'itemType': ListLgfResponseBodyLgfs },
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

export class ListLgfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLgfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLgfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasInfoRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * DS,FAQ
   */
  saasGroupCodes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * userTest
   */
  saasName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      saasGroupCodes: 'SaasGroupCodes',
      saasName: 'SaasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      saasGroupCodes: 'string',
      saasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasInfoResponseBody extends $tea.Model {
  data?: ListSaasInfoResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A629A28F-F25E-5572-A679-FA46FB0151D6
   */
  requestId?: string;
  /**
   * @example
   * 06614fdb-c72f-436e-8003-dfe8a2854a15
   */
  saasToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      saasToken: 'SaasToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSaasInfoResponseBodyData },
      requestId: 'string',
      saasToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSaasInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSaasInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasPermissionGroupInfosRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasPermissionGroupInfosResponseBody extends $tea.Model {
  data?: ListSaasPermissionGroupInfosResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8AD9FA10-7780-5E12-B701-13C928524F32
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSaasPermissionGroupInfosResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasPermissionGroupInfosResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSaasPermissionGroupInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSaasPermissionGroupInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimQuestionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30002299537
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimQuestionResponseBody extends $tea.Model {
  /**
   * @example
   * 15CD94CC-CBEB-4189-806C-A132D1F45D51
   */
  requestId?: string;
  simQuestions?: ListSimQuestionResponseBodySimQuestions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      simQuestions: 'SimQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      simQuestions: { 'type': 'array', 'itemType': ListSimQuestionResponseBodySimQuestions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSimQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSimQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSolutionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSolutionResponseBody extends $tea.Model {
  /**
   * @example
   * 5B29DB5E-251D-5A73-84B5-A12DF795F231
   */
  requestId?: string;
  solutions?: ListSolutionResponseBodySolutions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      solutions: 'Solutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      solutions: { 'type': 'array', 'itemType': ListSolutionResponseBodySolutions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSolutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTongyiChatHistorysRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-04-01 08:00:00
   */
  endTime?: string;
  /**
   * @example
   * 30
   */
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-7QuUfaqMQe
   */
  robotInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-04-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      endTime: 'EndTime',
      limit: 'Limit',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      endTime: 'string',
      limit: 'number',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTongyiChatHistorysResponseBody extends $tea.Model {
  /**
   * @example
   * 116
   */
  costTime?: string;
  datas?: { [key: string]: any }[];
  /**
   * @example
   * D0DDFC4C-D66D-4787-9AE4-4D757481EDEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTongyiChatHistorysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTongyiChatHistorysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTongyiChatHistorysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSayRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 您做核酸了嘛
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 232
   */
  intentId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      instanceId: 'string',
      intentId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSayResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * fs1fg4512v43572v23
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  userSays?: ListUserSayResponseBodyUserSays[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userSays: 'UserSays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      userSays: { 'type': 'array', 'itemType': ListUserSayResponseBodyUserSays },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserSayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserSayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * 北京的天气怎么样
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBody extends $tea.Model {
  /**
   * @example
   * 2828708A-2C7A-1BAE-B810-87DB9DA9C661
   */
  messageId?: string;
  messages?: NluResponseBodyMessages[];
  /**
   * @example
   * A6357C1B-1D79-1382-B259-BD9E80751B42
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      messages: 'Messages',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      messages: { 'type': 'array', 'itemType': NluResponseBodyMessages },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: NluResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: NluResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesResponseBody extends $tea.Model {
  perspectives?: QueryPerspectivesResponseBodyPerspectives[];
  /**
   * @example
   * F285D735-D580-18A8-B97F-B2E72B00F101
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      perspectives: 'Perspectives',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectives: { 'type': 'array', 'itemType': QueryPerspectivesResponseBodyPerspectives },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPerspectivesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPerspectivesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDocRequest extends $tea.Model {
  /**
   * @example
   * e2a20f74cd9042558002c0f7dc873739_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDocResponseBody extends $tea.Model {
  /**
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6419BA93-D111-5225-8998-13E63E6D3940
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDocRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  categoryIds?: number[];
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTimeBegin?: string;
  /**
   * @example
   * 2022-05-02T03:09:30Z
   */
  createTimeEnd?: string;
  createUserName?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  endTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  endTimeEnd?: string;
  keyword?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  modifyTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  modifyTimeEnd?: string;
  modifyUserName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @example
   * 1
   */
  searchScope?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  startTimeBegin?: string;
  /**
   * @example
   * 2022-04-03T03:09:30Z
   */
  startTimeEnd?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  tagIds?: number[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryIds: 'CategoryIds',
      createTimeBegin: 'CreateTimeBegin',
      createTimeEnd: 'CreateTimeEnd',
      createUserName: 'CreateUserName',
      endTimeBegin: 'EndTimeBegin',
      endTimeEnd: 'EndTimeEnd',
      keyword: 'Keyword',
      modifyTimeBegin: 'ModifyTimeBegin',
      modifyTimeEnd: 'ModifyTimeEnd',
      modifyUserName: 'ModifyUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processStatus: 'ProcessStatus',
      searchScope: 'SearchScope',
      startTimeBegin: 'StartTimeBegin',
      startTimeEnd: 'StartTimeEnd',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      createTimeBegin: 'string',
      createTimeEnd: 'string',
      createUserName: 'string',
      endTimeBegin: 'string',
      endTimeEnd: 'string',
      keyword: 'string',
      modifyTimeBegin: 'string',
      modifyTimeEnd: 'string',
      modifyUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processStatus: 'number',
      searchScope: 'number',
      startTimeBegin: 'string',
      startTimeEnd: 'string',
      status: 'number',
      tagIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDocShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  categoryIdsShrink?: string;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTimeBegin?: string;
  /**
   * @example
   * 2022-05-02T03:09:30Z
   */
  createTimeEnd?: string;
  createUserName?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  endTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  endTimeEnd?: string;
  keyword?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  modifyTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  modifyTimeEnd?: string;
  modifyUserName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @example
   * 1
   */
  searchScope?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  startTimeBegin?: string;
  /**
   * @example
   * 2022-04-03T03:09:30Z
   */
  startTimeEnd?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  tagIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryIdsShrink: 'CategoryIds',
      createTimeBegin: 'CreateTimeBegin',
      createTimeEnd: 'CreateTimeEnd',
      createUserName: 'CreateUserName',
      endTimeBegin: 'EndTimeBegin',
      endTimeEnd: 'EndTimeEnd',
      keyword: 'Keyword',
      modifyTimeBegin: 'ModifyTimeBegin',
      modifyTimeEnd: 'ModifyTimeEnd',
      modifyUserName: 'ModifyUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processStatus: 'ProcessStatus',
      searchScope: 'SearchScope',
      startTimeBegin: 'StartTimeBegin',
      startTimeEnd: 'StartTimeEnd',
      status: 'Status',
      tagIdsShrink: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryIdsShrink: 'string',
      createTimeBegin: 'string',
      createTimeEnd: 'string',
      createUserName: 'string',
      endTimeBegin: 'string',
      endTimeEnd: 'string',
      keyword: 'string',
      modifyTimeBegin: 'string',
      modifyTimeEnd: 'string',
      modifyUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processStatus: 'number',
      searchScope: 'number',
      startTimeBegin: 'string',
      startTimeEnd: 'string',
      status: 'number',
      tagIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDocResponseBody extends $tea.Model {
  docHits?: SearchDocResponseBodyDocHits[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E3E5C779-A630-45AC-B0F2-A4506A4212F1
   */
  requestId?: string;
  /**
   * @example
   * 141
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      docHits: 'DocHits',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docHits: { 'type': 'array', 'itemType': SearchDocResponseBodyDocHits },
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

export class SearchDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaqRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  categoryIds?: number[];
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTimeBegin?: string;
  /**
   * @example
   * 2022-05-02T03:09:30Z
   */
  createTimeEnd?: string;
  /**
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  endTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  endTimeEnd?: string;
  keyword?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  modifyTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  modifyTimeEnd?: string;
  /**
   * @example
   * test01
   */
  modifyUserName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  searchScope?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  startTimeBegin?: string;
  /**
   * @example
   * 2022-04-03T03:09:30Z
   */
  startTimeEnd?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryIds: 'CategoryIds',
      createTimeBegin: 'CreateTimeBegin',
      createTimeEnd: 'CreateTimeEnd',
      createUserName: 'CreateUserName',
      endTimeBegin: 'EndTimeBegin',
      endTimeEnd: 'EndTimeEnd',
      keyword: 'Keyword',
      modifyTimeBegin: 'ModifyTimeBegin',
      modifyTimeEnd: 'ModifyTimeEnd',
      modifyUserName: 'ModifyUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchScope: 'SearchScope',
      startTimeBegin: 'StartTimeBegin',
      startTimeEnd: 'StartTimeEnd',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      createTimeBegin: 'string',
      createTimeEnd: 'string',
      createUserName: 'string',
      endTimeBegin: 'string',
      endTimeEnd: 'string',
      keyword: 'string',
      modifyTimeBegin: 'string',
      modifyTimeEnd: 'string',
      modifyUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchScope: 'number',
      startTimeBegin: 'string',
      startTimeEnd: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaqShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  categoryIdsShrink?: string;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTimeBegin?: string;
  /**
   * @example
   * 2022-05-02T03:09:30Z
   */
  createTimeEnd?: string;
  /**
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  endTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  endTimeEnd?: string;
  keyword?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  modifyTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  modifyTimeEnd?: string;
  /**
   * @example
   * test01
   */
  modifyUserName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  searchScope?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  startTimeBegin?: string;
  /**
   * @example
   * 2022-04-03T03:09:30Z
   */
  startTimeEnd?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryIdsShrink: 'CategoryIds',
      createTimeBegin: 'CreateTimeBegin',
      createTimeEnd: 'CreateTimeEnd',
      createUserName: 'CreateUserName',
      endTimeBegin: 'EndTimeBegin',
      endTimeEnd: 'EndTimeEnd',
      keyword: 'Keyword',
      modifyTimeBegin: 'ModifyTimeBegin',
      modifyTimeEnd: 'ModifyTimeEnd',
      modifyUserName: 'ModifyUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchScope: 'SearchScope',
      startTimeBegin: 'StartTimeBegin',
      startTimeEnd: 'StartTimeEnd',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryIdsShrink: 'string',
      createTimeBegin: 'string',
      createTimeEnd: 'string',
      createUserName: 'string',
      endTimeBegin: 'string',
      endTimeEnd: 'string',
      keyword: 'string',
      modifyTimeBegin: 'string',
      modifyTimeEnd: 'string',
      modifyUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchScope: 'number',
      startTimeBegin: 'string',
      startTimeEnd: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaqResponseBody extends $tea.Model {
  faqHits?: SearchFaqResponseBodyFaqHits[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * E45491D5-7E0A-42C6-9B21-91D1066B1475
   */
  requestId?: string;
  /**
   * @example
   * 1075
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      faqHits: 'FaqHits',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faqHits: { 'type': 'array', 'itemType': SearchFaqResponseBodyFaqHits },
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

export class SearchFaqResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchFaqResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchFaqResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategoryRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  bizCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 231001028593
   */
  categoryId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      bizCode: 'BizCode',
      categoryId: 'CategoryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      bizCode: 'string',
      categoryId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategoryResponseBody extends $tea.Model {
  /**
   * @example
   * F79E7305-5314-5069-A701-9591AD051902
   */
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

export class UpdateCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnQuestionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000000295
   */
  connQuestionId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 877397683
   */
  outlineId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      connQuestionId: 'ConnQuestionId',
      outlineId: 'OutlineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      connQuestionId: 'number',
      outlineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnQuestionResponseBody extends $tea.Model {
  /**
   * @example
   * 004EB5C0-9DEB-53BF-A57A-0407A6D6B3C9
   */
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

export class UpdateConnQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConnQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConnQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDSEntityRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 实体名称
   */
  entityName?: string;
  /**
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDSEntityResponseBody extends $tea.Model {
  /**
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @example
   * df23fgh4hyj67hn56
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDSEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDSEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDSEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDSEntityValueRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223423423
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2342377423
   */
  entityValueId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      entityId: 'EntityId',
      entityValueId: 'EntityValueId',
      instanceId: 'InstanceId',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      entityId: 'number',
      entityValueId: 'number',
      instanceId: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDSEntityValueShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223423423
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2342377423
   */
  entityValueId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  synonymsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      entityId: 'EntityId',
      entityValueId: 'EntityValueId',
      instanceId: 'InstanceId',
      synonymsShrink: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      entityId: 'number',
      entityValueId: 'number',
      instanceId: 'string',
      synonymsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDSEntityValueResponseBody extends $tea.Model {
  /**
   * @example
   * 2342377423
   */
  entityValueId?: number;
  /**
   * @example
   * sDag3g43wesf2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityValueId: 'EntityValueId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityValueId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDSEntityValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDSEntityValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDSEntityValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 231001028593
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  content?: string;
  docName?: string;
  /**
   * @example
   * 2023-03-11T23:59:59Z
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  tagIds?: number[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      config: 'Config',
      content: 'Content',
      docName: 'DocName',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIds: 'TagIds',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      docName: 'string',
      endDate: 'string',
      knowledgeId: 'number',
      meta: 'string',
      startDate: 'string',
      tagIds: { 'type': 'array', 'itemType': 'number' },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 231001028593
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  content?: string;
  docName?: string;
  /**
   * @example
   * 2023-03-11T23:59:59Z
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  tagIdsShrink?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      config: 'Config',
      content: 'Content',
      docName: 'DocName',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIdsShrink: 'TagIds',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      docName: 'string',
      endDate: 'string',
      knowledgeId: 'number',
      meta: 'string',
      startDate: 'string',
      tagIdsShrink: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocResponseBody extends $tea.Model {
  /**
   * @example
   * 30002406051
   */
  knowledgeId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0F9F136A-1BF6-5CC1-9D57-9717761F03B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaqRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @example
   * 2030-12-31T16:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @example
   * 2022-05-27T05:18:20Z
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      startDate: 'StartDate',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      startDate: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaqResponseBody extends $tea.Model {
  /**
   * @example
   * 736994BD-AA35-4742-88C9-E64BE4BAA14B
   */
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

export class UpdateFaqResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFaqResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFaqResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * 用于C端问答的机器人
   */
  introduction?: string;
  /**
   * @example
   * 智能客服-小C
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      introduction: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * C45BFEE4-F657-1332-8B47-2C757B94C972
   */
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

export class UpdateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  intentDefinition?: UpdateIntentRequestIntentDefinition;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234234234534
   */
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentDefinition: 'IntentDefinition',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentDefinition: UpdateIntentRequestIntentDefinition,
      intentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  intentDefinitionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234234234534
   */
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentDefinitionShrink: 'IntentDefinition',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentDefinitionShrink: 'string',
      intentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentResponseBody extends $tea.Model {
  /**
   * @example
   * 234234234534
   */
  intentId?: number;
  /**
   * @example
   * dfaf23dfas234234234534
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLgfRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  lgfDefinition?: UpdateLgfRequestLgfDefinition;
  /**
   * @remarks
   * LGF ID
   * 
   * This parameter is required.
   * 
   * @example
   * 12121
   */
  lgfId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      lgfDefinition: 'LgfDefinition',
      lgfId: 'LgfId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      lgfDefinition: UpdateLgfRequestLgfDefinition,
      lgfId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLgfShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  lgfDefinitionShrink?: string;
  /**
   * @remarks
   * LGF ID
   * 
   * This parameter is required.
   * 
   * @example
   * 12121
   */
  lgfId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      lgfDefinitionShrink: 'LgfDefinition',
      lgfId: 'LgfId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      lgfDefinitionShrink: 'string',
      lgfId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLgfResponseBody extends $tea.Model {
  /**
   * @example
   * 2342556223532
   */
  lgfId?: number;
  /**
   * @example
   * 289dfa131adf23wqe2r
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lgfId: 'LgfId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lgfId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLgfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLgfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLgfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePerspectiveRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 客户端视角
   */
  name?: string;
  /**
   * @example
   * 3001
   */
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      perspectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePerspectiveResponseBody extends $tea.Model {
  /**
   * @example
   * FC384CE1-8D42-1900-84E1-F33F990F2B5E
   */
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

export class UpdatePerspectiveResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePerspectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePerspectiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSimQuestionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000002788
   */
  simQuestionId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      simQuestionId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSimQuestionResponseBody extends $tea.Model {
  /**
   * @example
   * DFB71B34-4188-4EA2-9988-EF3014E75910
   */
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

export class UpdateSimQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSimQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSimQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSolutionRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  perspectiveCodes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100001333260
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentType: 'ContentType',
      perspectiveCodes: 'PerspectiveCodes',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentType: 'number',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
      solutionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSolutionResponseBody extends $tea.Model {
  /**
   * @example
   * 8B8F098D-A338-54DD-B19C-24BBBCBD8498
   */
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

export class UpdateSolutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSolutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSayRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  userSayDefinition?: UpdateUserSayRequestUserSayDefinition;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34512323
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      userSayDefinition: 'UserSayDefinition',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      userSayDefinition: UpdateUserSayRequestUserSayDefinition,
      userSayId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSayShrinkRequest extends $tea.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  userSayDefinitionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34512323
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      userSayDefinitionShrink: 'UserSayDefinition',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      userSayDefinitionShrink: 'string',
      userSayId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSayResponseBody extends $tea.Model {
  /**
   * @example
   * 2356fg3wf34634vdt23wef2
   */
  requestId?: string;
  /**
   * @example
   * 34512323
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSayId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserSayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserSayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResponseBodyAssociate extends $tea.Model {
  /**
   * @example
   * {}
   */
  meta?: string;
  /**
   * @example
   * 公积金提取的政策
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesKnowledgeRelatedKnowledges extends $tea.Model {
  /**
   * @example
   * 735899
   */
  knowledgeId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesKnowledge extends $tea.Model {
  /**
   * @example
   * KnowledgeBase
   */
  answerSource?: string;
  category?: string;
  content?: string;
  /**
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  hitStatement?: string;
  /**
   * @example
   * 735898
   */
  id?: string;
  relatedKnowledges?: ChatResponseBodyMessagesKnowledgeRelatedKnowledges[];
  /**
   * @example
   * 0.998
   */
  score?: number;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      category: 'Category',
      content: 'Content',
      contentType: 'ContentType',
      hitStatement: 'HitStatement',
      id: 'Id',
      relatedKnowledges: 'RelatedKnowledges',
      score: 'Score',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      category: 'string',
      content: 'string',
      contentType: 'string',
      hitStatement: 'string',
      id: 'string',
      relatedKnowledges: { 'type': 'array', 'itemType': ChatResponseBodyMessagesKnowledgeRelatedKnowledges },
      score: 'number',
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesRecommends extends $tea.Model {
  /**
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @example
   * 4548
   */
  knowledgeId?: string;
  /**
   * @example
   * 0.46
   */
  score?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      knowledgeId: 'KnowledgeId',
      score: 'Score',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      knowledgeId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesTextSlots extends $tea.Model {
  /**
   * @example
   * false
   */
  hit?: boolean;
  name?: string;
  origin?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      name: 'Name',
      origin: 'Origin',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: 'boolean',
      name: 'string',
      origin: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesText extends $tea.Model {
  /**
   * @example
   * BotFramework
   */
  answerSource?: string;
  articleTitle?: string;
  /**
   * @example
   * {
   * 	"sysToAgent": "{\\"skillGroup\\":\\"12\\"}"
   * }
   */
  commands?: { [key: string]: any };
  content?: string;
  /**
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  dialogName?: string;
  ext?: { [key: string]: any };
  externalFlags?: { [key: string]: any };
  hitStatement?: string;
  intentName?: string;
  metaData?: string;
  /**
   * @example
   * 1410-c7a72a78.__city
   */
  nodeId?: string;
  nodeName?: string;
  /**
   * @example
   * SSML
   */
  responseType?: string;
  /**
   * @example
   * 100.0
   */
  score?: number;
  slots?: ChatResponseBodyMessagesTextSlots[];
  userDefinedChatTitle?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      articleTitle: 'ArticleTitle',
      commands: 'Commands',
      content: 'Content',
      contentType: 'ContentType',
      dialogName: 'DialogName',
      ext: 'Ext',
      externalFlags: 'ExternalFlags',
      hitStatement: 'HitStatement',
      intentName: 'IntentName',
      metaData: 'MetaData',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      responseType: 'ResponseType',
      score: 'Score',
      slots: 'Slots',
      userDefinedChatTitle: 'UserDefinedChatTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      articleTitle: 'string',
      commands: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'string',
      contentType: 'string',
      dialogName: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      externalFlags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hitStatement: 'string',
      intentName: 'string',
      metaData: 'string',
      nodeId: 'string',
      nodeName: 'string',
      responseType: 'string',
      score: 'number',
      slots: { 'type': 'array', 'itemType': ChatResponseBodyMessagesTextSlots },
      userDefinedChatTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessages extends $tea.Model {
  /**
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @example
   * Text
   */
  answerType?: string;
  knowledge?: ChatResponseBodyMessagesKnowledge;
  recommends?: ChatResponseBodyMessagesRecommends[];
  text?: ChatResponseBodyMessagesText;
  title?: string;
  voiceTitle?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      answerType: 'AnswerType',
      knowledge: 'Knowledge',
      recommends: 'Recommends',
      text: 'Text',
      title: 'Title',
      voiceTitle: 'VoiceTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      answerType: 'string',
      knowledge: ChatResponseBodyMessagesKnowledge,
      recommends: { 'type': 'array', 'itemType': ChatResponseBodyMessagesRecommends },
      text: ChatResponseBodyMessagesText,
      title: 'string',
      voiceTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCategoryResponseBodyCategory extends $tea.Model {
  bizCode?: string;
  /**
   * @example
   * 30000049006
   */
  categoryId?: number;
  name?: string;
  /**
   * @example
   * -1
   */
  parentCategoryId?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      categoryId: 'CategoryId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      categoryId: 'number',
      name: 'string',
      parentCategoryId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentRequestIntentDefinitionSlotInfos extends $tea.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @example
   * false
   */
  interactive?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fg452dfg3df23
   */
  slotId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      encrypt: 'Encrypt',
      interactive: 'Interactive',
      name: 'Name',
      slotId: 'SlotId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      encrypt: 'boolean',
      interactive: 'boolean',
      name: 'string',
      slotId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentRequestIntentDefinition extends $tea.Model {
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  intentName?: string;
  slotInfos?: CreateIntentRequestIntentDefinitionSlotInfos[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      intentName: 'IntentName',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      intentName: 'string',
      slotInfos: { 'type': 'array', 'itemType': CreateIntentRequestIntentDefinitionSlotInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLgfRequestLgfDefinition extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4675678567
   */
  intentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleText?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      ruleText: 'RuleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      ruleText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserSayRequestUserSayDefinitionSlotInfos extends $tea.Model {
  /**
   * @example
   * 6
   */
  endIndex?: number;
  /**
   * @example
   * fb34adf2fv43f2
   */
  slotId?: string;
  /**
   * @example
   * 4
   */
  startIndex?: number;
  static names(): { [key: string]: string } {
    return {
      endIndex: 'EndIndex',
      slotId: 'SlotId',
      startIndex: 'StartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIndex: 'number',
      slotId: 'string',
      startIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserSayRequestUserSayDefinition extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123232
   */
  intentId?: number;
  slotInfos?: CreateUserSayRequestUserSayDefinitionSlotInfos[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      intentId: 'IntentId',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      intentId: 'number',
      slotInfos: { 'type': 'array', 'itemType': CreateUserSayRequestUserSayDefinitionSlotInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryResponseBodyCategory extends $tea.Model {
  bizCode?: string;
  /**
   * @example
   * 30000049006
   */
  categoryId?: number;
  name?: string;
  /**
   * @example
   * -1
   */
  parentCategoryId?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      categoryId: 'CategoryId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      categoryId: 'number',
      name: 'string',
      parentCategoryId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponseBodyDocInfoDocParas extends $tea.Model {
  /**
   * @example
   * 1
   */
  paraLevel?: number;
  /**
   * @example
   * 1
   */
  paraNo?: number;
  paraText?: string;
  /**
   * @example
   * text
   */
  paraType?: string;
  static names(): { [key: string]: string } {
    return {
      paraLevel: 'ParaLevel',
      paraNo: 'ParaNo',
      paraText: 'ParaText',
      paraType: 'ParaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paraLevel: 'number',
      paraNo: 'number',
      paraText: 'string',
      paraType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponseBodyDocInfo extends $tea.Model {
  docParas?: DescribeDocResponseBodyDocInfoDocParas[];
  static names(): { [key: string]: string } {
    return {
      docParas: 'DocParas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docParas: { 'type': 'array', 'itemType': DescribeDocResponseBodyDocInfoDocParas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponseBodyDocTags extends $tea.Model {
  defaultTag?: boolean;
  groupId?: number;
  groupName?: string;
  tagId?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultTag: 'DefaultTag',
      groupId: 'GroupId',
      groupName: 'GroupName',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultTag: 'boolean',
      groupId: 'number',
      groupName: 'string',
      tagId: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponseBodyOutlines extends $tea.Model {
  /**
   * @example
   * 1000098002
   */
  connQuestionId?: number;
  /**
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-26T18:12:02Z
   */
  modifyTime?: string;
  /**
   * @example
   * 797
   */
  outlineId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      connQuestionId: 'ConnQuestionId',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      outlineId: 'OutlineId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connQuestionId: 'number',
      createTime: 'string',
      modifyTime: 'string',
      outlineId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponseBodySimQuestions extends $tea.Model {
  /**
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-29T03:55:07Z
   */
  modifyTime?: string;
  /**
   * @example
   * 10000000581
   */
  simQuestionId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      simQuestionId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaqResponseBodySolutions extends $tea.Model {
  content?: string;
  /**
   * @example
   * 0
   */
  contentType?: number;
  /**
   * @example
   * 2022-05-26T10:24:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-29T07:07:13Z
   */
  modifyTime?: string;
  perspectiveCodes?: string[];
  plainText?: string;
  /**
   * @example
   * 10000003071
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      perspectiveCodes: 'PerspectiveCodes',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'number',
      createTime: 'string',
      modifyTime: 'string',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
      plainText: 'string',
      solutionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyCategories extends $tea.Model {
  /**
   * @example
   * 30000066832
   */
  categoryId?: number;
  /**
   * @example
   * 杭州市防疫政策
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      name: 'string',
      parentCategoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodySlotInfos extends $tea.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @example
   * false
   */
  interactive?: boolean;
  name?: string;
  /**
   * @example
   * aa4d2a343a3ad4afad
   */
  slotId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      encrypt: 'Encrypt',
      interactive: 'Interactive',
      name: 'Name',
      slotId: 'SlotId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      encrypt: 'boolean',
      interactive: 'boolean',
      name: 'string',
      slotId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * 4e7400028e6f4a7393ed3acf6a7b8927_p_beebot_public
   */
  agentKey?: string;
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      agentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentResponseBodyData extends $tea.Model {
  /**
   * @example
   * 881
   */
  agentId?: number;
  /**
   * @example
   * 4e7400028e6f4a7393ed3acf6a7b8927_p_beebot_public
   */
  agentKey?: string;
  agentName?: string;
  instanceInfos?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentKey: 'AgentKey',
      agentName: 'AgentName',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentKey: 'string',
      agentName: 'string',
      instanceInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryResponseBodyCategories extends $tea.Model {
  bizCode?: string;
  /**
   * @example
   * 231001028593
   */
  categoryId?: number;
  name?: string;
  /**
   * @example
   * -1
   */
  parentCategoryId?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      categoryId: 'CategoryId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      categoryId: 'number',
      name: 'string',
      parentCategoryId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnQuestionResponseBodyOutlines extends $tea.Model {
  /**
   * @example
   * 30001979424
   */
  connQuestionId?: number;
  /**
   * @example
   * 2022-02-25T02:47:18Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-26T10:18:15Z
   */
  modifyTime?: string;
  /**
   * @example
   * 797
   */
  outlineId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      connQuestionId: 'ConnQuestionId',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      outlineId: 'OutlineId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connQuestionId: 'number',
      createTime: 'string',
      modifyTime: 'string',
      outlineId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDSEntityResponseBodyEntities extends $tea.Model {
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @example
   * 234564567445
   */
  entityId?: number;
  entityName?: string;
  /**
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @example
   * test
   */
  modifyUserName?: string;
  sysEntityCode?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      sysEntityCode: 'SysEntityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      sysEntityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDSEntityValueResponseBodyEntityValues extends $tea.Model {
  content?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 34313785463
   */
  entityId?: number;
  /**
   * @example
   * 3467858234534534532
   */
  entityValueId?: number;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityValueId: 'EntityValueId',
      modifyTime: 'ModifyTime',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      entityId: 'number',
      entityValueId: 'number',
      modifyTime: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyInstances extends $tea.Model {
  /**
   * @example
   * /alimefe/meebot/robot/0.0.5/img/xxx-90-97.png
   */
  avatar?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * 用于C端问答的机器人
   */
  introduction?: string;
  /**
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @example
   * 智能客服-小C
   */
  name?: string;
  /**
   * @example
   * scenario_im
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      robotType: 'RobotType',
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
      robotType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentResponseBodyIntentsSlotInfos extends $tea.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @example
   * false
   */
  interactive?: boolean;
  name?: string;
  /**
   * @example
   * 12134223
   */
  slotId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      encrypt: 'Encrypt',
      interactive: 'Interactive',
      name: 'Name',
      slotId: 'SlotId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      encrypt: 'boolean',
      interactive: 'boolean',
      name: 'string',
      slotId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentResponseBodyIntents extends $tea.Model {
  aliasName?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @example
   * 234234234234
   */
  intentId?: number;
  intentName?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @example
   * test
   */
  modifyUserName?: string;
  slotInfos?: ListIntentResponseBodyIntentsSlotInfos[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      intentId: 'IntentId',
      intentName: 'IntentName',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      intentId: 'number',
      intentName: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      slotInfos: { 'type': 'array', 'itemType': ListIntentResponseBodyIntentsSlotInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLgfResponseBodyLgfs extends $tea.Model {
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 256756734345
   */
  intentId?: number;
  /**
   * @remarks
   * LGF ID
   * 
   * @example
   * 123
   */
  lgfId?: number;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  ruleText?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentId: 'IntentId',
      lgfId: 'LgfId',
      modifyTime: 'ModifyTime',
      ruleText: 'RuleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      intentId: 'number',
      lgfId: 'number',
      modifyTime: 'string',
      ruleText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * GLOBAL_SERVICE
   */
  code?: string;
  /**
   * @example
   * GLOBAL SERVICE
   */
  enName?: string;
  name?: string;
  /**
   * @example
   * https://pre-alime4service.console.aliyun.com/?productCode=p_beebot_public&switchAgent=1204001&saasCode=Robot&saasToken=06614fdb-c72f-436e-8003-dfe8a2854a15&saasName=123#/robot
   */
  serviceUrl?: string;
  /**
   * @example
   * https://alime.console.aliyun.com/?productCode=p_beebot_public&switchAgent=1204001&saasCode=Robot&saasToken=06614fdb-c72f-436e-8003-dfe8a2854a15&saasName=123#/robot
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      enName: 'EnName',
      name: 'Name',
      serviceUrl: 'ServiceUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enName: 'string',
      name: 'string',
      serviceUrl: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasPermissionGroupInfosResponseBodyDataPgInfos extends $tea.Model {
  /**
   * @example
   * FAQ
   */
  pgCode?: string;
  /**
   * @example
   * FAQ
   */
  pgEnName?: string;
  pgName?: string;
  static names(): { [key: string]: string } {
    return {
      pgCode: 'PgCode',
      pgEnName: 'PgEnName',
      pgName: 'PgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pgCode: 'string',
      pgEnName: 'string',
      pgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasPermissionGroupInfosResponseBodyData extends $tea.Model {
  /**
   * @example
   * Release Center
   */
  enName?: string;
  name?: string;
  pgInfos?: ListSaasPermissionGroupInfosResponseBodyDataPgInfos[];
  /**
   * @example
   * FAQ
   */
  saasCode?: string;
  static names(): { [key: string]: string } {
    return {
      enName: 'EnName',
      name: 'Name',
      pgInfos: 'PgInfos',
      saasCode: 'SaasCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enName: 'string',
      name: 'string',
      pgInfos: { 'type': 'array', 'itemType': ListSaasPermissionGroupInfosResponseBodyDataPgInfos },
      saasCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimQuestionResponseBodySimQuestions extends $tea.Model {
  /**
   * @example
   * 2022-05-30T02:08:33Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-13T03:49:28Z
   */
  modifyTime?: string;
  /**
   * @example
   * 30001979424
   */
  simQuestionId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      simQuestionId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSolutionResponseBodySolutions extends $tea.Model {
  content?: string;
  /**
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @example
   * 2022-03-29T03:55:04Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-03-29T06:23:53Z
   */
  modifyTime?: string;
  perspectiveCodes?: string[];
  plainText?: string;
  /**
   * @example
   * 496
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      perspectiveCodes: 'PerspectiveCodes',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'number',
      createTime: 'string',
      modifyTime: 'string',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
      plainText: 'string',
      solutionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSayResponseBodyUserSaysSlotInfos extends $tea.Model {
  /**
   * @example
   * 4
   */
  endIndex?: number;
  /**
   * @example
   * 3456sdfg3tu
   */
  slotId?: string;
  /**
   * @example
   * 2
   */
  startIndex?: number;
  static names(): { [key: string]: string } {
    return {
      endIndex: 'EndIndex',
      slotId: 'SlotId',
      startIndex: 'StartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIndex: 'number',
      slotId: 'string',
      startIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSayResponseBodyUserSays extends $tea.Model {
  content?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 235564564
   */
  intentId?: number;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  slotInfos?: ListUserSayResponseBodyUserSaysSlotInfos[];
  /**
   * @example
   * 3453452138
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      intentId: 'IntentId',
      modifyTime: 'ModifyTime',
      slotInfos: 'SlotInfos',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      intentId: 'number',
      modifyTime: 'string',
      slotInfos: { 'type': 'array', 'itemType': ListUserSayResponseBodyUserSaysSlotInfos },
      userSayId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDialogHubNluInfoGlobalDictList extends $tea.Model {
  /**
   * @example
   * 天气
   */
  standardWord?: string;
  /**
   * @example
   * 天气
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      standardWord: 'StandardWord',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardWord: 'string',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDialogHubNluInfoGlobalSensitiveWordList extends $tea.Model {
  /**
   * @example
   * 天气
   */
  standardWord?: string;
  /**
   * @example
   * 天气
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      standardWord: 'StandardWord',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardWord: 'string',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDialogHubNluInfo extends $tea.Model {
  globalDictList?: NluResponseBodyMessagesDialogHubNluInfoGlobalDictList[];
  globalSensitiveWordList?: NluResponseBodyMessagesDialogHubNluInfoGlobalSensitiveWordList[];
  static names(): { [key: string]: string } {
    return {
      globalDictList: 'GlobalDictList',
      globalSensitiveWordList: 'GlobalSensitiveWordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalDictList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDialogHubNluInfoGlobalDictList },
      globalSensitiveWordList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDialogHubNluInfoGlobalSensitiveWordList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDsNluInfoEntityList extends $tea.Model {
  /**
   * @example
   * @城市
   */
  name?: string;
  /**
   * @example
   * 北京
   */
  origin?: string;
  /**
   * @example
   * text
   */
  type?: string;
  /**
   * @example
   * 首都
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      origin: 'Origin',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      origin: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDsNluInfoIntentListSlotList extends $tea.Model {
  /**
   * @example
   * @城市
   */
  name?: string;
  /**
   * @example
   * 北京
   */
  origin?: string;
  /**
   * @example
   * text
   */
  type?: string;
  /**
   * @example
   * 首都
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      origin: 'Origin',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      origin: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDsNluInfoIntentList extends $tea.Model {
  /**
   * @example
   * 724387
   */
  intentId?: number;
  /**
   * @example
   * classifierType=Fewshot,from=Fewshot,content=[我要查北京的天气, 帮我查北京的天气, 北京天气怎么样, 北京今天下雨吗, 北京今天多少度]
   */
  matchDetail?: string;
  /**
   * @example
   * FewShotLearning
   */
  matchType?: string;
  /**
   * @example
   * 查天气意图
   */
  name?: string;
  /**
   * @example
   * 0.995
   */
  score?: number;
  slotList?: NluResponseBodyMessagesDsNluInfoIntentListSlotList[];
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      matchDetail: 'MatchDetail',
      matchType: 'MatchType',
      name: 'Name',
      score: 'Score',
      slotList: 'SlotList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      matchDetail: 'string',
      matchType: 'string',
      name: 'string',
      score: 'number',
      slotList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDsNluInfoIntentListSlotList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDsNluInfo extends $tea.Model {
  entityList?: NluResponseBodyMessagesDsNluInfoEntityList[];
  intentList?: NluResponseBodyMessagesDsNluInfoIntentList[];
  static names(): { [key: string]: string } {
    return {
      entityList: 'EntityList',
      intentList: 'IntentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDsNluInfoEntityList },
      intentList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDsNluInfoIntentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessages extends $tea.Model {
  dialogHubNluInfo?: NluResponseBodyMessagesDialogHubNluInfo;
  dsNluInfo?: NluResponseBodyMessagesDsNluInfo;
  static names(): { [key: string]: string } {
    return {
      dialogHubNluInfo: 'DialogHubNluInfo',
      dsNluInfo: 'DsNluInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogHubNluInfo: NluResponseBodyMessagesDialogHubNluInfo,
      dsNluInfo: NluResponseBodyMessagesDsNluInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesResponseBodyPerspectives extends $tea.Model {
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-04-29T03:38:54Z
   */
  modifyTime?: string;
  /**
   * @example
   * 移动端视角
   */
  name?: string;
  /**
   * @example
   * FZJBY3raWr
   */
  perspectiveCode?: string;
  /**
   * @example
   * 3001
   */
  perspectiveId?: string;
  /**
   * @example
   * true
   */
  selfDefine?: boolean;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      name: 'Name',
      perspectiveCode: 'PerspectiveCode',
      perspectiveId: 'PerspectiveId',
      selfDefine: 'SelfDefine',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      name: 'string',
      perspectiveCode: 'string',
      perspectiveId: 'string',
      selfDefine: 'boolean',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDocResponseBodyDocHitsDocTags extends $tea.Model {
  defaultTag?: boolean;
  groupId?: number;
  groupName?: string;
  tagId?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultTag: 'DefaultTag',
      groupId: 'GroupId',
      groupName: 'GroupName',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultTag: 'boolean',
      groupId: 'number',
      groupName: 'string',
      tagId: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDocResponseBodyDocHits extends $tea.Model {
  /**
   * @example
   * cn_dytns
   */
  bizCode?: string;
  /**
   * @example
   * 30000135654
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}
   */
  config?: string;
  /**
   * @example
   * 2023-06-22T03:53:41Z
   */
  createTime?: string;
  /**
   * @example
   * 111111111
   */
  createUserId?: number;
  createUserName?: string;
  docName?: string;
  docTags?: SearchDocResponseBodyDocHitsDocTags[];
  /**
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @example
   * 2099-12-31T16:00:00Z
   */
  endDate?: string;
  /**
   * @example
   * 30002692007
   */
  knowledgeId?: number;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2023-06-25T02:27:42Z
   */
  modifyTime?: string;
  /**
   * @example
   * 222222222
   */
  modifyUserId?: number;
  modifyUserName?: string;
  /**
   * @example
   * true
   */
  processCanRetry?: boolean;
  processMessage?: string;
  /**
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @example
   * 2023-02-28T11:40:18Z
   */
  startDate?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      categoryId: 'CategoryId',
      config: 'Config',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      docName: 'DocName',
      docTags: 'DocTags',
      effectStatus: 'EffectStatus',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      meta: 'Meta',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      processCanRetry: 'ProcessCanRetry',
      processMessage: 'ProcessMessage',
      processStatus: 'ProcessStatus',
      startDate: 'StartDate',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      categoryId: 'number',
      config: 'string',
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      docName: 'string',
      docTags: { 'type': 'array', 'itemType': SearchDocResponseBodyDocHitsDocTags },
      effectStatus: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      meta: 'string',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
      processCanRetry: 'boolean',
      processMessage: 'string',
      processStatus: 'number',
      startDate: 'string',
      status: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaqResponseBodyFaqHits extends $tea.Model {
  /**
   * @example
   * 30000055639
   */
  categoryId?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTime?: string;
  /**
   * @example
   * 18453
   */
  createUserId?: number;
  /**
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @example
   * 20
   */
  effectStatus?: number;
  hitSimilarTitles?: string[];
  hitSolutions?: string[];
  /**
   * @example
   * 30002145804
   */
  knowledgeId?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  modifyTime?: string;
  /**
   * @example
   * 18453
   */
  modifyUserId?: number;
  /**
   * @example
   * test01
   */
  modifyUserName?: string;
  /**
   * @example
   * 3
   */
  status?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      effectStatus: 'EffectStatus',
      hitSimilarTitles: 'HitSimilarTitles',
      hitSolutions: 'HitSolutions',
      knowledgeId: 'KnowledgeId',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      effectStatus: 'number',
      hitSimilarTitles: { 'type': 'array', 'itemType': 'string' },
      hitSolutions: { 'type': 'array', 'itemType': 'string' },
      knowledgeId: 'number',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
      status: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentRequestIntentDefinitionSlotInfos extends $tea.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @example
   * false
   */
  interactive?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dgadf23dfg2f
   */
  slotId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      encrypt: 'Encrypt',
      interactive: 'Interactive',
      name: 'Name',
      slotId: 'SlotId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      encrypt: 'boolean',
      interactive: 'boolean',
      name: 'string',
      slotId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentRequestIntentDefinition extends $tea.Model {
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  intentName?: string;
  slotInfos?: UpdateIntentRequestIntentDefinitionSlotInfos[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      intentName: 'IntentName',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      intentName: 'string',
      slotInfos: { 'type': 'array', 'itemType': UpdateIntentRequestIntentDefinitionSlotInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLgfRequestLgfDefinition extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23234523522
   */
  intentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleText?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      ruleText: 'RuleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      ruleText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSayRequestUserSayDefinitionSlotInfos extends $tea.Model {
  /**
   * @example
   * 3
   */
  endIndex?: number;
  /**
   * @example
   * 346ffg3q23dv
   */
  slotId?: string;
  /**
   * @example
   * 1
   */
  startIndex?: number;
  static names(): { [key: string]: string } {
    return {
      endIndex: 'EndIndex',
      slotId: 'SlotId',
      startIndex: 'StartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIndex: 'number',
      slotId: 'string',
      startIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSayRequestUserSayDefinition extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  intentId?: number;
  slotInfos?: UpdateUserSayRequestUserSayDefinitionSlotInfos[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      intentId: 'IntentId',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      intentId: 'number',
      slotInfos: { 'type': 'array', 'itemType': UpdateUserSayRequestUserSayDefinitionSlotInfos },
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
    this._endpoint = this.getEndpoint("chatbot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 申请流式网关AccessToken
   * 
   * @param request - ApplyForStreamAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyForStreamAccessTokenResponse
   */
  async applyForStreamAccessTokenWithOptions(request: ApplyForStreamAccessTokenRequest, runtime: $Util.RuntimeOptions): Promise<ApplyForStreamAccessTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyForStreamAccessToken",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyForStreamAccessTokenResponse>(await this.callApi(params, req, runtime), new ApplyForStreamAccessTokenResponse({}));
  }

  /**
   * 申请流式网关AccessToken
   * 
   * @param request - ApplyForStreamAccessTokenRequest
   * @returns ApplyForStreamAccessTokenResponse
   */
  async applyForStreamAccessToken(request: ApplyForStreamAccessTokenRequest): Promise<ApplyForStreamAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyForStreamAccessTokenWithOptions(request, runtime);
  }

  /**
   * 会话-联想API
   * 
   * @param tmpReq - AssociateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateResponse
   */
  async associateWithOptions(tmpReq: AssociateRequest, runtime: $Util.RuntimeOptions): Promise<AssociateResponse> {
    Util.validateModel(tmpReq);
    let request = new AssociateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.perspective)) {
      request.perspectiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspective, "Perspective", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.perspectiveShrink)) {
      query["Perspective"] = request.perspectiveShrink;
    }

    if (!Util.isUnset(request.recommendNum)) {
      query["RecommendNum"] = request.recommendNum;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Associate",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateResponse>(await this.callApi(params, req, runtime), new AssociateResponse({}));
  }

  /**
   * 会话-联想API
   * 
   * @param request - AssociateRequest
   * @returns AssociateResponse
   */
  async associate(request: AssociateRequest): Promise<AssociateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateWithOptions(request, runtime);
  }

  /**
   * 获取欢迎语
   * 
   * @param request - BeginSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeginSessionResponse
   */
  async beginSessionWithOptions(request: BeginSessionRequest, runtime: $Util.RuntimeOptions): Promise<BeginSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BeginSession",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BeginSessionResponse>(await this.callApi(params, req, runtime), new BeginSessionResponse({}));
  }

  /**
   * 获取欢迎语
   * 
   * @param request - BeginSessionRequest
   * @returns BeginSessionResponse
   */
  async beginSession(request: BeginSessionRequest): Promise<BeginSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beginSessionWithOptions(request, runtime);
  }

  /**
   * 取消机器人发布
   * 
   * @param request - CancelInstancePublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelInstancePublishTaskResponse
   */
  async cancelInstancePublishTaskWithOptions(request: CancelInstancePublishTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelInstancePublishTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

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
      action: "CancelInstancePublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelInstancePublishTaskResponse>(await this.callApi(params, req, runtime), new CancelInstancePublishTaskResponse({}));
  }

  /**
   * 取消机器人发布
   * 
   * @param request - CancelInstancePublishTaskRequest
   * @returns CancelInstancePublishTaskResponse
   */
  async cancelInstancePublishTask(request: CancelInstancePublishTaskRequest): Promise<CancelInstancePublishTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * 取消发布任务
   * 
   * @param request - CancelPublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPublishTaskResponse
   */
  async cancelPublishTaskWithOptions(request: CancelPublishTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelPublishTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelPublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelPublishTaskResponse>(await this.callApi(params, req, runtime), new CancelPublishTaskResponse({}));
  }

  /**
   * 取消发布任务
   * 
   * @param request - CancelPublishTaskRequest
   * @returns CancelPublishTaskResponse
   */
  async cancelPublishTask(request: CancelPublishTaskRequest): Promise<CancelPublishTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPublishTaskWithOptions(request, runtime);
  }

  /**
   * 会话API
   * 
   * @param tmpReq - ChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async chatWithOptions(tmpReq: ChatRequest, runtime: $Util.RuntimeOptions): Promise<ChatResponse> {
    Util.validateModel(tmpReq);
    let request = new ChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.perspective)) {
      request.perspectiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspective, "Perspective", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentName)) {
      query["IntentName"] = request.intentName;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    if (!Util.isUnset(request.perspectiveShrink)) {
      query["Perspective"] = request.perspectiveShrink;
    }

    if (!Util.isUnset(request.sandBox)) {
      query["SandBox"] = request.sandBox;
    }

    if (!Util.isUnset(request.senderId)) {
      query["SenderId"] = request.senderId;
    }

    if (!Util.isUnset(request.senderNick)) {
      query["SenderNick"] = request.senderNick;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    if (!Util.isUnset(request.vendorParam)) {
      query["VendorParam"] = request.vendorParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Chat",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChatResponse>(await this.callApi(params, req, runtime), new ChatResponse({}));
  }

  /**
   * 会话API
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: ChatRequest): Promise<ChatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatWithOptions(request, runtime);
  }

  /**
   * 继续机器人发布
   * 
   * @param request - ContinueInstancePublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueInstancePublishTaskResponse
   */
  async continueInstancePublishTaskWithOptions(request: ContinueInstancePublishTaskRequest, runtime: $Util.RuntimeOptions): Promise<ContinueInstancePublishTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

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
      action: "ContinueInstancePublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContinueInstancePublishTaskResponse>(await this.callApi(params, req, runtime), new ContinueInstancePublishTaskResponse({}));
  }

  /**
   * 继续机器人发布
   * 
   * @param request - ContinueInstancePublishTaskRequest
   * @returns ContinueInstancePublishTaskResponse
   */
  async continueInstancePublishTask(request: ContinueInstancePublishTaskRequest): Promise<ContinueInstancePublishTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * 新增类目
   * 
   * @param request - CreateCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCategoryResponse
   */
  async createCategoryWithOptions(request: CreateCategoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCode)) {
      body["BizCode"] = request.bizCode;
    }

    if (!Util.isUnset(request.knowledgeType)) {
      body["KnowledgeType"] = request.knowledgeType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCategoryResponse>(await this.callApi(params, req, runtime), new CreateCategoryResponse({}));
  }

  /**
   * 新增类目
   * 
   * @param request - CreateCategoryRequest
   * @returns CreateCategoryResponse
   */
  async createCategory(request: CreateCategoryRequest): Promise<CreateCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCategoryWithOptions(request, runtime);
  }

  /**
   * 新建FAQ关联问
   * 
   * @param request - CreateConnQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConnQuestionResponse
   */
  async createConnQuestionWithOptions(request: CreateConnQuestionRequest, runtime: $Util.RuntimeOptions): Promise<CreateConnQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.connQuestionId)) {
      body["ConnQuestionId"] = request.connQuestionId;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConnQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConnQuestionResponse>(await this.callApi(params, req, runtime), new CreateConnQuestionResponse({}));
  }

  /**
   * 新建FAQ关联问
   * 
   * @param request - CreateConnQuestionRequest
   * @returns CreateConnQuestionResponse
   */
  async createConnQuestion(request: CreateConnQuestionRequest): Promise<CreateConnQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConnQuestionWithOptions(request, runtime);
  }

  /**
   * 实体-创建
   * 
   * @param request - CreateDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDSEntityResponse
   */
  async createDSEntityWithOptions(request: CreateDSEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateDSEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.entityName)) {
      query["EntityName"] = request.entityName;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDSEntityResponse>(await this.callApi(params, req, runtime), new CreateDSEntityResponse({}));
  }

  /**
   * 实体-创建
   * 
   * @param request - CreateDSEntityRequest
   * @returns CreateDSEntityResponse
   */
  async createDSEntity(request: CreateDSEntityRequest): Promise<CreateDSEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDSEntityWithOptions(request, runtime);
  }

  /**
   * 实体成员-创建
   * 
   * @param tmpReq - CreateDSEntityValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDSEntityValueResponse
   */
  async createDSEntityValueWithOptions(tmpReq: CreateDSEntityValueRequest, runtime: $Util.RuntimeOptions): Promise<CreateDSEntityValueResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDSEntityValueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.synonyms)) {
      request.synonymsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.synonyms, "Synonyms", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.synonymsShrink)) {
      body["Synonyms"] = request.synonymsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDSEntityValue",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDSEntityValueResponse>(await this.callApi(params, req, runtime), new CreateDSEntityValueResponse({}));
  }

  /**
   * 实体成员-创建
   * 
   * @param request - CreateDSEntityValueRequest
   * @returns CreateDSEntityValueResponse
   */
  async createDSEntityValue(request: CreateDSEntityValueRequest): Promise<CreateDSEntityValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDSEntityValueWithOptions(request, runtime);
  }

  /**
   * 创建文档
   * 
   * @param tmpReq - CreateDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocResponse
   */
  async createDocWithOptions(tmpReq: CreateDocRequest, runtime: $Util.RuntimeOptions): Promise<CreateDocResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tagIds)) {
      request.tagIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIds, "TagIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.meta)) {
      query["Meta"] = request.meta;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.tagIdsShrink)) {
      query["TagIds"] = request.tagIdsShrink;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDocResponse>(await this.callApi(params, req, runtime), new CreateDocResponse({}));
  }

  /**
   * 创建文档
   * 
   * @param request - CreateDocRequest
   * @returns CreateDocResponse
   */
  async createDoc(request: CreateDocRequest): Promise<CreateDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDocWithOptions(request, runtime);
  }

  /**
   * 新建FAQ
   * 
   * @param request - CreateFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFaqResponse
   */
  async createFaqWithOptions(request: CreateFaqRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaqResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.solutionContent)) {
      body["SolutionContent"] = request.solutionContent;
    }

    if (!Util.isUnset(request.solutionType)) {
      body["SolutionType"] = request.solutionType;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFaqResponse>(await this.callApi(params, req, runtime), new CreateFaqResponse({}));
  }

  /**
   * 新建FAQ
   * 
   * @param request - CreateFaqRequest
   * @returns CreateFaqResponse
   */
  async createFaq(request: CreateFaqRequest): Promise<CreateFaqResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaqWithOptions(request, runtime);
  }

  /**
   * 机器人-创建
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.introduction)) {
      query["Introduction"] = request.introduction;
    }

    if (!Util.isUnset(request.languageCode)) {
      query["LanguageCode"] = request.languageCode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.robotType)) {
      query["RobotType"] = request.robotType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2022-04-08",
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

  /**
   * 机器人-创建
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建机器人发布任务
   * 
   * @param request - CreateInstancePublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstancePublishTaskResponse
   */
  async createInstancePublishTaskWithOptions(request: CreateInstancePublishTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstancePublishTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstancePublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstancePublishTaskResponse>(await this.callApi(params, req, runtime), new CreateInstancePublishTaskResponse({}));
  }

  /**
   * 创建机器人发布任务
   * 
   * @param request - CreateInstancePublishTaskRequest
   * @returns CreateInstancePublishTaskResponse
   */
  async createInstancePublishTask(request: CreateInstancePublishTaskRequest): Promise<CreateInstancePublishTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstancePublishTaskWithOptions(request, runtime);
  }

  /**
   * 意图-创建
   * 
   * @param tmpReq - CreateIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntentResponse
   */
  async createIntentWithOptions(tmpReq: CreateIntentRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntentResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateIntentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.intentDefinition)) {
      request.intentDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intentDefinition, "IntentDefinition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentDefinitionShrink)) {
      query["IntentDefinition"] = request.intentDefinitionShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIntentResponse>(await this.callApi(params, req, runtime), new CreateIntentResponse({}));
  }

  /**
   * 意图-创建
   * 
   * @param request - CreateIntentRequest
   * @returns CreateIntentResponse
   */
  async createIntent(request: CreateIntentRequest): Promise<CreateIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntentWithOptions(request, runtime);
  }

  /**
   * 意图-LGF-创建
   * 
   * @param tmpReq - CreateLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLgfResponse
   */
  async createLgfWithOptions(tmpReq: CreateLgfRequest, runtime: $Util.RuntimeOptions): Promise<CreateLgfResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateLgfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lgfDefinition)) {
      request.lgfDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lgfDefinition, "LgfDefinition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lgfDefinitionShrink)) {
      query["LgfDefinition"] = request.lgfDefinitionShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLgf",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLgfResponse>(await this.callApi(params, req, runtime), new CreateLgfResponse({}));
  }

  /**
   * 意图-LGF-创建
   * 
   * @param request - CreateLgfRequest
   * @returns CreateLgfResponse
   */
  async createLgf(request: CreateLgfRequest): Promise<CreateLgfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLgfWithOptions(request, runtime);
  }

  /**
   * 视角-创建
   * 
   * @param request - CreatePerspectiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePerspectiveResponse
   */
  async createPerspectiveWithOptions(request: CreatePerspectiveRequest, runtime: $Util.RuntimeOptions): Promise<CreatePerspectiveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePerspective",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePerspectiveResponse>(await this.callApi(params, req, runtime), new CreatePerspectiveResponse({}));
  }

  /**
   * 视角-创建
   * 
   * @param request - CreatePerspectiveRequest
   * @returns CreatePerspectiveResponse
   */
  async createPerspective(request: CreatePerspectiveRequest): Promise<CreatePerspectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPerspectiveWithOptions(request, runtime);
  }

  /**
   * 创建发布任务
   * 
   * @param tmpReq - CreatePublishTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublishTaskResponse
   */
  async createPublishTaskWithOptions(tmpReq: CreatePublishTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreatePublishTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePublishTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataIdList)) {
      request.dataIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIdList, "DataIdList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.dataIdListShrink)) {
      query["DataIdList"] = request.dataIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePublishTask",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePublishTaskResponse>(await this.callApi(params, req, runtime), new CreatePublishTaskResponse({}));
  }

  /**
   * 创建发布任务
   * 
   * @param request - CreatePublishTaskRequest
   * @returns CreatePublishTaskResponse
   */
  async createPublishTask(request: CreatePublishTaskRequest): Promise<CreatePublishTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPublishTaskWithOptions(request, runtime);
  }

  /**
   * 新建FAQ相似问
   * 
   * @param request - CreateSimQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSimQuestionResponse
   */
  async createSimQuestionWithOptions(request: CreateSimQuestionRequest, runtime: $Util.RuntimeOptions): Promise<CreateSimQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSimQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSimQuestionResponse>(await this.callApi(params, req, runtime), new CreateSimQuestionResponse({}));
  }

  /**
   * 新建FAQ相似问
   * 
   * @param request - CreateSimQuestionRequest
   * @returns CreateSimQuestionResponse
   */
  async createSimQuestion(request: CreateSimQuestionRequest): Promise<CreateSimQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSimQuestionWithOptions(request, runtime);
  }

  /**
   * 新建FAQ答案
   * 
   * @param request - CreateSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSolutionResponse
   */
  async createSolutionWithOptions(request: CreateSolutionRequest, runtime: $Util.RuntimeOptions): Promise<CreateSolutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    if (!Util.isUnset(request.perspectiveCodes)) {
      query["PerspectiveCodes"] = request.perspectiveCodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSolution",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSolutionResponse>(await this.callApi(params, req, runtime), new CreateSolutionResponse({}));
  }

  /**
   * 新建FAQ答案
   * 
   * @param request - CreateSolutionRequest
   * @returns CreateSolutionResponse
   */
  async createSolution(request: CreateSolutionRequest): Promise<CreateSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSolutionWithOptions(request, runtime);
  }

  /**
   * 意图-话术-创建
   * 
   * @param tmpReq - CreateUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserSayResponse
   */
  async createUserSayWithOptions(tmpReq: CreateUserSayRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserSayResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateUserSayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userSayDefinition)) {
      request.userSayDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userSayDefinition, "UserSayDefinition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userSayDefinitionShrink)) {
      query["UserSayDefinition"] = request.userSayDefinitionShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserSay",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserSayResponse>(await this.callApi(params, req, runtime), new CreateUserSayResponse({}));
  }

  /**
   * 意图-话术-创建
   * 
   * @param request - CreateUserSayRequest
   * @returns CreateUserSayResponse
   */
  async createUserSay(request: CreateUserSayRequest): Promise<CreateUserSayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserSayWithOptions(request, runtime);
  }

  /**
   * 删除类目
   * 
   * @param request - DeleteCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCategoryResponse
   */
  async deleteCategoryWithOptions(request: DeleteCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCategoryResponse>(await this.callApi(params, req, runtime), new DeleteCategoryResponse({}));
  }

  /**
   * 删除类目
   * 
   * @param request - DeleteCategoryRequest
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(request: DeleteCategoryRequest): Promise<DeleteCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  /**
   * 删除FAQ关联问
   * 
   * @param request - DeleteConnQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnQuestionResponse
   */
  async deleteConnQuestionWithOptions(request: DeleteConnQuestionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConnQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outlineId)) {
      body["OutlineId"] = request.outlineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConnQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConnQuestionResponse>(await this.callApi(params, req, runtime), new DeleteConnQuestionResponse({}));
  }

  /**
   * 删除FAQ关联问
   * 
   * @param request - DeleteConnQuestionRequest
   * @returns DeleteConnQuestionResponse
   */
  async deleteConnQuestion(request: DeleteConnQuestionRequest): Promise<DeleteConnQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConnQuestionWithOptions(request, runtime);
  }

  /**
   * 实体-删除
   * 
   * @param request - DeleteDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDSEntityResponse
   */
  async deleteDSEntityWithOptions(request: DeleteDSEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDSEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDSEntityResponse>(await this.callApi(params, req, runtime), new DeleteDSEntityResponse({}));
  }

  /**
   * 实体-删除
   * 
   * @param request - DeleteDSEntityRequest
   * @returns DeleteDSEntityResponse
   */
  async deleteDSEntity(request: DeleteDSEntityRequest): Promise<DeleteDSEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDSEntityWithOptions(request, runtime);
  }

  /**
   * 实体成员-删除
   * 
   * @param request - DeleteDSEntityValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDSEntityValueResponse
   */
  async deleteDSEntityValueWithOptions(request: DeleteDSEntityValueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDSEntityValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityValueId)) {
      query["EntityValueId"] = request.entityValueId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDSEntityValue",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDSEntityValueResponse>(await this.callApi(params, req, runtime), new DeleteDSEntityValueResponse({}));
  }

  /**
   * 实体成员-删除
   * 
   * @param request - DeleteDSEntityValueRequest
   * @returns DeleteDSEntityValueResponse
   */
  async deleteDSEntityValue(request: DeleteDSEntityValueRequest): Promise<DeleteDSEntityValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDSEntityValueWithOptions(request, runtime);
  }

  /**
   * 文档删除
   * 
   * @param request - DeleteDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocResponse
   */
  async deleteDocWithOptions(request: DeleteDocRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDocResponse>(await this.callApi(params, req, runtime), new DeleteDocResponse({}));
  }

  /**
   * 文档删除
   * 
   * @param request - DeleteDocRequest
   * @returns DeleteDocResponse
   */
  async deleteDoc(request: DeleteDocRequest): Promise<DeleteDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDocWithOptions(request, runtime);
  }

  /**
   * 删除FAQ，如果是已发布的知识，删除之后，变成已删除未发布，需要发布才能真正删除
   * 
   * @param request - DeleteFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaqResponse
   */
  async deleteFaqWithOptions(request: DeleteFaqRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaqResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaqResponse>(await this.callApi(params, req, runtime), new DeleteFaqResponse({}));
  }

  /**
   * 删除FAQ，如果是已发布的知识，删除之后，变成已删除未发布，需要发布才能真正删除
   * 
   * @param request - DeleteFaqRequest
   * @returns DeleteFaqResponse
   */
  async deleteFaq(request: DeleteFaqRequest): Promise<DeleteFaqResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaqWithOptions(request, runtime);
  }

  /**
   * 机器人-删除
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2022-04-08",
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

  /**
   * 机器人-删除
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * 意图-删除
   * 
   * @param request - DeleteIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntentResponse
   */
  async deleteIntentWithOptions(request: DeleteIntentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIntentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIntentResponse>(await this.callApi(params, req, runtime), new DeleteIntentResponse({}));
  }

  /**
   * 意图-删除
   * 
   * @param request - DeleteIntentRequest
   * @returns DeleteIntentResponse
   */
  async deleteIntent(request: DeleteIntentRequest): Promise<DeleteIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIntentWithOptions(request, runtime);
  }

  /**
   * 意图-LGF-删除
   * 
   * @param request - DeleteLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLgfResponse
   */
  async deleteLgfWithOptions(request: DeleteLgfRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLgfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!Util.isUnset(request.lgfId)) {
      query["LgfId"] = request.lgfId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLgf",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLgfResponse>(await this.callApi(params, req, runtime), new DeleteLgfResponse({}));
  }

  /**
   * 意图-LGF-删除
   * 
   * @param request - DeleteLgfRequest
   * @returns DeleteLgfResponse
   */
  async deleteLgf(request: DeleteLgfRequest): Promise<DeleteLgfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLgfWithOptions(request, runtime);
  }

  /**
   * 视角-删除
   * 
   * @param request - DeletePerspectiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePerspectiveResponse
   */
  async deletePerspectiveWithOptions(request: DeletePerspectiveRequest, runtime: $Util.RuntimeOptions): Promise<DeletePerspectiveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.perspectiveId)) {
      query["PerspectiveId"] = request.perspectiveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePerspective",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePerspectiveResponse>(await this.callApi(params, req, runtime), new DeletePerspectiveResponse({}));
  }

  /**
   * 视角-删除
   * 
   * @param request - DeletePerspectiveRequest
   * @returns DeletePerspectiveResponse
   */
  async deletePerspective(request: DeletePerspectiveRequest): Promise<DeletePerspectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePerspectiveWithOptions(request, runtime);
  }

  /**
   * 删除FAQ相似问
   * 
   * @param request - DeleteSimQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSimQuestionResponse
   */
  async deleteSimQuestionWithOptions(request: DeleteSimQuestionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSimQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.simQuestionId)) {
      body["SimQuestionId"] = request.simQuestionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSimQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSimQuestionResponse>(await this.callApi(params, req, runtime), new DeleteSimQuestionResponse({}));
  }

  /**
   * 删除FAQ相似问
   * 
   * @param request - DeleteSimQuestionRequest
   * @returns DeleteSimQuestionResponse
   */
  async deleteSimQuestion(request: DeleteSimQuestionRequest): Promise<DeleteSimQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSimQuestionWithOptions(request, runtime);
  }

  /**
   * 删除FAQ答案
   * 
   * @param request - DeleteSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSolutionResponse
   */
  async deleteSolutionWithOptions(request: DeleteSolutionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSolutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.solutionId)) {
      body["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSolution",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSolutionResponse>(await this.callApi(params, req, runtime), new DeleteSolutionResponse({}));
  }

  /**
   * 删除FAQ答案
   * 
   * @param request - DeleteSolutionRequest
   * @returns DeleteSolutionResponse
   */
  async deleteSolution(request: DeleteSolutionRequest): Promise<DeleteSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSolutionWithOptions(request, runtime);
  }

  /**
   * 意图-用户话术-删除
   * 
   * @param request - DeleteUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserSayResponse
   */
  async deleteUserSayWithOptions(request: DeleteUserSayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserSayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!Util.isUnset(request.userSayId)) {
      query["UserSayId"] = request.userSayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserSay",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserSayResponse>(await this.callApi(params, req, runtime), new DeleteUserSayResponse({}));
  }

  /**
   * 意图-用户话术-删除
   * 
   * @param request - DeleteUserSayRequest
   * @returns DeleteUserSayResponse
   */
  async deleteUserSay(request: DeleteUserSayRequest): Promise<DeleteUserSayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserSayWithOptions(request, runtime);
  }

  /**
   * 查看单个类目信息
   * 
   * @param request - DescribeCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCategoryResponse
   */
  async describeCategoryWithOptions(request: DescribeCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCategoryResponse>(await this.callApi(params, req, runtime), new DescribeCategoryResponse({}));
  }

  /**
   * 查看单个类目信息
   * 
   * @param request - DescribeCategoryRequest
   * @returns DescribeCategoryResponse
   */
  async describeCategory(request: DescribeCategoryRequest): Promise<DescribeCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCategoryWithOptions(request, runtime);
  }

  /**
   * 实体-详情
   * 
   * @param request - DescribeDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDSEntityResponse
   */
  async describeDSEntityWithOptions(request: DescribeDSEntityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDSEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDSEntityResponse>(await this.callApi(params, req, runtime), new DescribeDSEntityResponse({}));
  }

  /**
   * 实体-详情
   * 
   * @param request - DescribeDSEntityRequest
   * @returns DescribeDSEntityResponse
   */
  async describeDSEntity(request: DescribeDSEntityRequest): Promise<DescribeDSEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDSEntityWithOptions(request, runtime);
  }

  /**
   * 文档详情
   * 
   * @param request - DescribeDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocResponse
   */
  async describeDocWithOptions(request: DescribeDocRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    if (!Util.isUnset(request.showDetail)) {
      query["ShowDetail"] = request.showDetail;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDocResponse>(await this.callApi(params, req, runtime), new DescribeDocResponse({}));
  }

  /**
   * 文档详情
   * 
   * @param request - DescribeDocRequest
   * @returns DescribeDocResponse
   */
  async describeDoc(request: DescribeDocRequest): Promise<DescribeDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDocWithOptions(request, runtime);
  }

  /**
   * 知识详情
   * 
   * @param request - DescribeFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaqResponse
   */
  async describeFaqWithOptions(request: DescribeFaqRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaqResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaqResponse>(await this.callApi(params, req, runtime), new DescribeFaqResponse({}));
  }

  /**
   * 知识详情
   * 
   * @param request - DescribeFaqRequest
   * @returns DescribeFaqResponse
   */
  async describeFaq(request: DescribeFaqRequest): Promise<DescribeFaqResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaqWithOptions(request, runtime);
  }

  /**
   * 机器人-详情
   * 
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  /**
   * 机器人-详情
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * 意图-详情
   * 
   * @param request - DescribeIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIntentResponse
   */
  async describeIntentWithOptions(request: DescribeIntentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIntentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.intentId)) {
      body["IntentId"] = request.intentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIntentResponse>(await this.callApi(params, req, runtime), new DescribeIntentResponse({}));
  }

  /**
   * 意图-详情
   * 
   * @param request - DescribeIntentRequest
   * @returns DescribeIntentResponse
   */
  async describeIntent(request: DescribeIntentRequest): Promise<DescribeIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIntentWithOptions(request, runtime);
  }

  /**
   * 视角-详情
   * 
   * @param request - DescribePerspectiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePerspectiveResponse
   */
  async describePerspectiveWithOptions(request: DescribePerspectiveRequest, runtime: $Util.RuntimeOptions): Promise<DescribePerspectiveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.perspectiveId)) {
      query["PerspectiveId"] = request.perspectiveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePerspective",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePerspectiveResponse>(await this.callApi(params, req, runtime), new DescribePerspectiveResponse({}));
  }

  /**
   * 视角-详情
   * 
   * @param request - DescribePerspectiveRequest
   * @returns DescribePerspectiveResponse
   */
  async describePerspective(request: DescribePerspectiveRequest): Promise<DescribePerspectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePerspectiveWithOptions(request, runtime);
  }

  /**
   * 问答点赞、点踩API
   * 
   * @param request - FeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FeedbackResponse
   */
  async feedbackWithOptions(request: FeedbackRequest, runtime: $Util.RuntimeOptions): Promise<FeedbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!Util.isUnset(request.feedbackContent)) {
      query["FeedbackContent"] = request.feedbackContent;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Feedback",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FeedbackResponse>(await this.callApi(params, req, runtime), new FeedbackResponse({}));
  }

  /**
   * 问答点赞、点踩API
   * 
   * @param request - FeedbackRequest
   * @returns FeedbackResponse
   */
  async feedback(request: FeedbackRequest): Promise<FeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.feedbackWithOptions(request, runtime);
  }

  /**
   * 生成用户免登Token
   * 
   * @param request - GenerateUserAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUserAccessTokenResponse
   */
  async generateUserAccessTokenWithOptions(request: GenerateUserAccessTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUserAccessTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!Util.isUnset(request.foreignId)) {
      query["ForeignId"] = request.foreignId;
    }

    if (!Util.isUnset(request.nick)) {
      query["Nick"] = request.nick;
    }

    if (!Util.isUnset(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUserAccessToken",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateUserAccessTokenResponse>(await this.callApi(params, req, runtime), new GenerateUserAccessTokenResponse({}));
  }

  /**
   * 生成用户免登Token
   * 
   * @param request - GenerateUserAccessTokenRequest
   * @returns GenerateUserAccessTokenResponse
   */
  async generateUserAccessToken(request: GenerateUserAccessTokenRequest): Promise<GenerateUserAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUserAccessTokenWithOptions(request, runtime);
  }

  /**
   * 获取业务空间信息
   * 
   * @param request - GetAgentInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentInfoResponse
   */
  async getAgentInfoWithOptions(request: GetAgentInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentInfo",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentInfoResponse>(await this.callApi(params, req, runtime), new GetAgentInfoResponse({}));
  }

  /**
   * 获取业务空间信息
   * 
   * @param request - GetAgentInfoRequest
   * @returns GetAgentInfoResponse
   */
  async getAgentInfo(request: GetAgentInfoRequest): Promise<GetAgentInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentInfoWithOptions(request, runtime);
  }

  /**
   * 获取异步函数执行结果接口
   * 
   * @param request - GetAsyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncResultResponse
   */
  async getAsyncResultWithOptions(request: GetAsyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncResult",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncResultResponse>(await this.callApi(params, req, runtime), new GetAsyncResultResponse({}));
  }

  /**
   * 获取异步函数执行结果接口
   * 
   * @param request - GetAsyncResultRequest
   * @returns GetAsyncResultResponse
   */
  async getAsyncResult(request: GetAsyncResultRequest): Promise<GetAsyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncResultWithOptions(request, runtime);
  }

  /**
   * 查询机器人接待人次和对话轮次
   * 
   * @param request - GetBotSessionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBotSessionDataResponse
   */
  async getBotSessionDataWithOptions(request: GetBotSessionDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBotSessionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.robotInstanceId)) {
      query["RobotInstanceId"] = request.robotInstanceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBotSessionData",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBotSessionDataResponse>(await this.callApi(params, req, runtime), new GetBotSessionDataResponse({}));
  }

  /**
   * 查询机器人接待人次和对话轮次
   * 
   * @param request - GetBotSessionDataRequest
   * @returns GetBotSessionDataResponse
   */
  async getBotSessionData(request: GetBotSessionDataRequest): Promise<GetBotSessionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBotSessionDataWithOptions(request, runtime);
  }

  /**
   * 查询机器人发布进度
   * 
   * @param request - GetInstancePublishTaskStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstancePublishTaskStateResponse
   */
  async getInstancePublishTaskStateWithOptions(request: GetInstancePublishTaskStateRequest, runtime: $Util.RuntimeOptions): Promise<GetInstancePublishTaskStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

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
      action: "GetInstancePublishTaskState",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstancePublishTaskStateResponse>(await this.callApi(params, req, runtime), new GetInstancePublishTaskStateResponse({}));
  }

  /**
   * 查询机器人发布进度
   * 
   * @param request - GetInstancePublishTaskStateRequest
   * @returns GetInstancePublishTaskStateResponse
   */
  async getInstancePublishTaskState(request: GetInstancePublishTaskStateRequest): Promise<GetInstancePublishTaskStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstancePublishTaskStateWithOptions(request, runtime);
  }

  /**
   * 查询发布进度
   * 
   * @param request - GetPublishTaskStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublishTaskStateResponse
   */
  async getPublishTaskStateWithOptions(request: GetPublishTaskStateRequest, runtime: $Util.RuntimeOptions): Promise<GetPublishTaskStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublishTaskState",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPublishTaskStateResponse>(await this.callApi(params, req, runtime), new GetPublishTaskStateResponse({}));
  }

  /**
   * 查询发布进度
   * 
   * @param request - GetPublishTaskStateRequest
   * @returns GetPublishTaskStateResponse
   */
  async getPublishTaskState(request: GetPublishTaskStateRequest): Promise<GetPublishTaskStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublishTaskStateWithOptions(request, runtime);
  }

  /**
   * 初始化im连接信息
   * 
   * @param request - InitIMConnectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitIMConnectResponse
   */
  async initIMConnectWithOptions(request: InitIMConnectRequest, runtime: $Util.RuntimeOptions): Promise<InitIMConnectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.userAccessToken)) {
      query["UserAccessToken"] = request.userAccessToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitIMConnect",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitIMConnectResponse>(await this.callApi(params, req, runtime), new InitIMConnectResponse({}));
  }

  /**
   * 初始化im连接信息
   * 
   * @param request - InitIMConnectRequest
   * @returns InitIMConnectResponse
   */
  async initIMConnect(request: InitIMConnectRequest): Promise<InitIMConnectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initIMConnectWithOptions(request, runtime);
  }

  /**
   * 机器人-绑定类目
   * 
   * @param request - LinkInstanceCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LinkInstanceCategoryResponse
   */
  async linkInstanceCategoryWithOptions(request: LinkInstanceCategoryRequest, runtime: $Util.RuntimeOptions): Promise<LinkInstanceCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryIds)) {
      body["CategoryIds"] = request.categoryIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LinkInstanceCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LinkInstanceCategoryResponse>(await this.callApi(params, req, runtime), new LinkInstanceCategoryResponse({}));
  }

  /**
   * 机器人-绑定类目
   * 
   * @param request - LinkInstanceCategoryRequest
   * @returns LinkInstanceCategoryResponse
   */
  async linkInstanceCategory(request: LinkInstanceCategoryRequest): Promise<LinkInstanceCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.linkInstanceCategoryWithOptions(request, runtime);
  }

  /**
   * 获取业务空间列表
   * 
   * @param request - ListAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentResponse
   */
  async listAgentWithOptions(request: ListAgentRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!Util.isUnset(request.goodsCodes)) {
      query["GoodsCodes"] = request.goodsCodes;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAgent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAgentResponse>(await this.callApi(params, req, runtime), new ListAgentResponse({}));
  }

  /**
   * 获取业务空间列表
   * 
   * @param request - ListAgentRequest
   * @returns ListAgentResponse
   */
  async listAgent(request: ListAgentRequest): Promise<ListAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentWithOptions(request, runtime);
  }

  /**
   * 类目列表
   * 
   * @param request - ListCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoryResponse
   */
  async listCategoryWithOptions(request: ListCategoryRequest, runtime: $Util.RuntimeOptions): Promise<ListCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.knowledgeType)) {
      body["KnowledgeType"] = request.knowledgeType;
    }

    if (!Util.isUnset(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCategoryResponse>(await this.callApi(params, req, runtime), new ListCategoryResponse({}));
  }

  /**
   * 类目列表
   * 
   * @param request - ListCategoryRequest
   * @returns ListCategoryResponse
   */
  async listCategory(request: ListCategoryRequest): Promise<ListCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCategoryWithOptions(request, runtime);
  }

  /**
   * 查询FAQ关联问列表
   * 
   * @param request - ListConnQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnQuestionResponse
   */
  async listConnQuestionWithOptions(request: ListConnQuestionRequest, runtime: $Util.RuntimeOptions): Promise<ListConnQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListConnQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConnQuestionResponse>(await this.callApi(params, req, runtime), new ListConnQuestionResponse({}));
  }

  /**
   * 查询FAQ关联问列表
   * 
   * @param request - ListConnQuestionRequest
   * @returns ListConnQuestionResponse
   */
  async listConnQuestion(request: ListConnQuestionRequest): Promise<ListConnQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnQuestionWithOptions(request, runtime);
  }

  /**
   * 实体-列表
   * 
   * @param request - ListDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDSEntityResponse
   */
  async listDSEntityWithOptions(request: ListDSEntityRequest, runtime: $Util.RuntimeOptions): Promise<ListDSEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDSEntityResponse>(await this.callApi(params, req, runtime), new ListDSEntityResponse({}));
  }

  /**
   * 实体-列表
   * 
   * @param request - ListDSEntityRequest
   * @returns ListDSEntityResponse
   */
  async listDSEntity(request: ListDSEntityRequest): Promise<ListDSEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDSEntityWithOptions(request, runtime);
  }

  /**
   * 实体成员-列表
   * 
   * @param request - ListDSEntityValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDSEntityValueResponse
   */
  async listDSEntityValueWithOptions(request: ListDSEntityValueRequest, runtime: $Util.RuntimeOptions): Promise<ListDSEntityValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityValueId)) {
      body["EntityValueId"] = request.entityValueId;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDSEntityValue",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDSEntityValueResponse>(await this.callApi(params, req, runtime), new ListDSEntityValueResponse({}));
  }

  /**
   * 实体成员-列表
   * 
   * @param request - ListDSEntityValueRequest
   * @returns ListDSEntityValueResponse
   */
  async listDSEntityValue(request: ListDSEntityValueRequest): Promise<ListDSEntityValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDSEntityValueWithOptions(request, runtime);
  }

  /**
   * 机器人-修改
   * 
   * @param request - ListInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: ListInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.robotType)) {
      query["RobotType"] = request.robotType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstance",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResponse>(await this.callApi(params, req, runtime), new ListInstanceResponse({}));
  }

  /**
   * 机器人-修改
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  /**
   * 意图-列表
   * 
   * @param request - ListIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntentResponse
   */
  async listIntentWithOptions(request: ListIntentRequest, runtime: $Util.RuntimeOptions): Promise<ListIntentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentName)) {
      query["IntentName"] = request.intentName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntentResponse>(await this.callApi(params, req, runtime), new ListIntentResponse({}));
  }

  /**
   * 意图-列表
   * 
   * @param request - ListIntentRequest
   * @returns ListIntentResponse
   */
  async listIntent(request: ListIntentRequest): Promise<ListIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntentWithOptions(request, runtime);
  }

  /**
   * 意图-LGF-列表
   * 
   * @param request - ListLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLgfResponse
   */
  async listLgfWithOptions(request: ListLgfRequest, runtime: $Util.RuntimeOptions): Promise<ListLgfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!Util.isUnset(request.lgfText)) {
      query["LgfText"] = request.lgfText;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLgf",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLgfResponse>(await this.callApi(params, req, runtime), new ListLgfResponse({}));
  }

  /**
   * 意图-LGF-列表
   * 
   * @param request - ListLgfRequest
   * @returns ListLgfResponse
   */
  async listLgf(request: ListLgfRequest): Promise<ListLgfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLgfWithOptions(request, runtime);
  }

  /**
   * 获取业务空间下可集成的SaaS信息列表
   * 
   * @param request - ListSaasInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSaasInfoResponse
   */
  async listSaasInfoWithOptions(request: ListSaasInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListSaasInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.saasGroupCodes)) {
      query["SaasGroupCodes"] = request.saasGroupCodes;
    }

    if (!Util.isUnset(request.saasName)) {
      query["SaasName"] = request.saasName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSaasInfo",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSaasInfoResponse>(await this.callApi(params, req, runtime), new ListSaasInfoResponse({}));
  }

  /**
   * 获取业务空间下可集成的SaaS信息列表
   * 
   * @param request - ListSaasInfoRequest
   * @returns ListSaasInfoResponse
   */
  async listSaasInfo(request: ListSaasInfoRequest): Promise<ListSaasInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSaasInfoWithOptions(request, runtime);
  }

  /**
   * 获取业务空间下可集成的权限组信息
   * 
   * @param request - ListSaasPermissionGroupInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSaasPermissionGroupInfosResponse
   */
  async listSaasPermissionGroupInfosWithOptions(request: ListSaasPermissionGroupInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListSaasPermissionGroupInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSaasPermissionGroupInfos",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSaasPermissionGroupInfosResponse>(await this.callApi(params, req, runtime), new ListSaasPermissionGroupInfosResponse({}));
  }

  /**
   * 获取业务空间下可集成的权限组信息
   * 
   * @param request - ListSaasPermissionGroupInfosRequest
   * @returns ListSaasPermissionGroupInfosResponse
   */
  async listSaasPermissionGroupInfos(request: ListSaasPermissionGroupInfosRequest): Promise<ListSaasPermissionGroupInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSaasPermissionGroupInfosWithOptions(request, runtime);
  }

  /**
   * FAQ相似问列表
   * 
   * @param request - ListSimQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSimQuestionResponse
   */
  async listSimQuestionWithOptions(request: ListSimQuestionRequest, runtime: $Util.RuntimeOptions): Promise<ListSimQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSimQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSimQuestionResponse>(await this.callApi(params, req, runtime), new ListSimQuestionResponse({}));
  }

  /**
   * FAQ相似问列表
   * 
   * @param request - ListSimQuestionRequest
   * @returns ListSimQuestionResponse
   */
  async listSimQuestion(request: ListSimQuestionRequest): Promise<ListSimQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSimQuestionWithOptions(request, runtime);
  }

  /**
   * FAQ答案列表
   * 
   * @param request - ListSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSolutionResponse
   */
  async listSolutionWithOptions(request: ListSolutionRequest, runtime: $Util.RuntimeOptions): Promise<ListSolutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSolution",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSolutionResponse>(await this.callApi(params, req, runtime), new ListSolutionResponse({}));
  }

  /**
   * FAQ答案列表
   * 
   * @param request - ListSolutionRequest
   * @returns ListSolutionResponse
   */
  async listSolution(request: ListSolutionRequest): Promise<ListSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSolutionWithOptions(request, runtime);
  }

  /**
   * Tongyi对话明细查询接口
   * 
   * @param request - ListTongyiChatHistorysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTongyiChatHistorysResponse
   */
  async listTongyiChatHistorysWithOptions(request: ListTongyiChatHistorysRequest, runtime: $Util.RuntimeOptions): Promise<ListTongyiChatHistorysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.robotInstanceId)) {
      query["RobotInstanceId"] = request.robotInstanceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTongyiChatHistorys",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTongyiChatHistorysResponse>(await this.callApi(params, req, runtime), new ListTongyiChatHistorysResponse({}));
  }

  /**
   * Tongyi对话明细查询接口
   * 
   * @param request - ListTongyiChatHistorysRequest
   * @returns ListTongyiChatHistorysResponse
   */
  async listTongyiChatHistorys(request: ListTongyiChatHistorysRequest): Promise<ListTongyiChatHistorysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTongyiChatHistorysWithOptions(request, runtime);
  }

  /**
   * 话术-列表
   * 
   * @param request - ListUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserSayResponse
   */
  async listUserSayWithOptions(request: ListUserSayRequest, runtime: $Util.RuntimeOptions): Promise<ListUserSayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserSay",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserSayResponse>(await this.callApi(params, req, runtime), new ListUserSayResponse({}));
  }

  /**
   * 话术-列表
   * 
   * @param request - ListUserSayRequest
   * @returns ListUserSayResponse
   */
  async listUserSay(request: ListUserSayRequest): Promise<ListUserSayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserSayWithOptions(request, runtime);
  }

  /**
   * 统一NLU接口
   * 
   * @param request - NluRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NluResponse
   */
  async nluWithOptions(request: NluRequest, runtime: $Util.RuntimeOptions): Promise<NluResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
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
      action: "Nlu",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NluResponse>(await this.callApi(params, req, runtime), new NluResponse({}));
  }

  /**
   * 统一NLU接口
   * 
   * @param request - NluRequest
   * @returns NluResponse
   */
  async nlu(request: NluRequest): Promise<NluResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.nluWithOptions(request, runtime);
  }

  /**
   * 视角-列表
   * 
   * @param request - QueryPerspectivesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPerspectivesResponse
   */
  async queryPerspectivesWithOptions(request: QueryPerspectivesRequest, runtime: $Util.RuntimeOptions): Promise<QueryPerspectivesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPerspectives",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPerspectivesResponse>(await this.callApi(params, req, runtime), new QueryPerspectivesResponse({}));
  }

  /**
   * 视角-列表
   * 
   * @param request - QueryPerspectivesRequest
   * @returns QueryPerspectivesResponse
   */
  async queryPerspectives(request: QueryPerspectivesRequest): Promise<QueryPerspectivesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPerspectivesWithOptions(request, runtime);
  }

  /**
   * 文档重试
   * 
   * @param request - RetryDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryDocResponse
   */
  async retryDocWithOptions(request: RetryDocRequest, runtime: $Util.RuntimeOptions): Promise<RetryDocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryDocResponse>(await this.callApi(params, req, runtime), new RetryDocResponse({}));
  }

  /**
   * 文档重试
   * 
   * @param request - RetryDocRequest
   * @returns RetryDocResponse
   */
  async retryDoc(request: RetryDocRequest): Promise<RetryDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryDocWithOptions(request, runtime);
  }

  /**
   * 文档搜索
   * 
   * @param tmpReq - SearchDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDocResponse
   */
  async searchDocWithOptions(tmpReq: SearchDocRequest, runtime: $Util.RuntimeOptions): Promise<SearchDocResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!Util.isUnset(tmpReq.tagIds)) {
      request.tagIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIds, "TagIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.categoryIdsShrink)) {
      query["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!Util.isUnset(request.createTimeBegin)) {
      query["CreateTimeBegin"] = request.createTimeBegin;
    }

    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createUserName)) {
      query["CreateUserName"] = request.createUserName;
    }

    if (!Util.isUnset(request.endTimeBegin)) {
      query["EndTimeBegin"] = request.endTimeBegin;
    }

    if (!Util.isUnset(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.modifyTimeBegin)) {
      query["ModifyTimeBegin"] = request.modifyTimeBegin;
    }

    if (!Util.isUnset(request.modifyTimeEnd)) {
      query["ModifyTimeEnd"] = request.modifyTimeEnd;
    }

    if (!Util.isUnset(request.modifyUserName)) {
      query["ModifyUserName"] = request.modifyUserName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.processStatus)) {
      query["ProcessStatus"] = request.processStatus;
    }

    if (!Util.isUnset(request.searchScope)) {
      query["SearchScope"] = request.searchScope;
    }

    if (!Util.isUnset(request.startTimeBegin)) {
      query["StartTimeBegin"] = request.startTimeBegin;
    }

    if (!Util.isUnset(request.startTimeEnd)) {
      query["StartTimeEnd"] = request.startTimeEnd;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagIdsShrink)) {
      query["TagIds"] = request.tagIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchDocResponse>(await this.callApi(params, req, runtime), new SearchDocResponse({}));
  }

  /**
   * 文档搜索
   * 
   * @param request - SearchDocRequest
   * @returns SearchDocResponse
   */
  async searchDoc(request: SearchDocRequest): Promise<SearchDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchDocWithOptions(request, runtime);
  }

  /**
   * 知识搜索
   * 
   * @param tmpReq - SearchFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFaqResponse
   */
  async searchFaqWithOptions(tmpReq: SearchFaqRequest, runtime: $Util.RuntimeOptions): Promise<SearchFaqResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchFaqShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryIdsShrink)) {
      body["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!Util.isUnset(request.createTimeBegin)) {
      body["CreateTimeBegin"] = request.createTimeBegin;
    }

    if (!Util.isUnset(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createUserName)) {
      body["CreateUserName"] = request.createUserName;
    }

    if (!Util.isUnset(request.endTimeBegin)) {
      body["EndTimeBegin"] = request.endTimeBegin;
    }

    if (!Util.isUnset(request.endTimeEnd)) {
      body["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.modifyTimeBegin)) {
      body["ModifyTimeBegin"] = request.modifyTimeBegin;
    }

    if (!Util.isUnset(request.modifyTimeEnd)) {
      body["ModifyTimeEnd"] = request.modifyTimeEnd;
    }

    if (!Util.isUnset(request.modifyUserName)) {
      body["ModifyUserName"] = request.modifyUserName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchScope)) {
      body["SearchScope"] = request.searchScope;
    }

    if (!Util.isUnset(request.startTimeBegin)) {
      body["StartTimeBegin"] = request.startTimeBegin;
    }

    if (!Util.isUnset(request.startTimeEnd)) {
      body["StartTimeEnd"] = request.startTimeEnd;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchFaqResponse>(await this.callApi(params, req, runtime), new SearchFaqResponse({}));
  }

  /**
   * 知识搜索
   * 
   * @param request - SearchFaqRequest
   * @returns SearchFaqResponse
   */
  async searchFaq(request: SearchFaqRequest): Promise<SearchFaqResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchFaqWithOptions(request, runtime);
  }

  /**
   * 编辑类目
   * 
   * @param request - UpdateCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCategoryResponse
   */
  async updateCategoryWithOptions(request: UpdateCategoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCode)) {
      body["BizCode"] = request.bizCode;
    }

    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCategory",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCategoryResponse>(await this.callApi(params, req, runtime), new UpdateCategoryResponse({}));
  }

  /**
   * 编辑类目
   * 
   * @param request - UpdateCategoryRequest
   * @returns UpdateCategoryResponse
   */
  async updateCategory(request: UpdateCategoryRequest): Promise<UpdateCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  /**
   * 更新FAQ关联问
   * 
   * @param request - UpdateConnQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConnQuestionResponse
   */
  async updateConnQuestionWithOptions(request: UpdateConnQuestionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.connQuestionId)) {
      body["ConnQuestionId"] = request.connQuestionId;
    }

    if (!Util.isUnset(request.outlineId)) {
      body["OutlineId"] = request.outlineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConnQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConnQuestionResponse>(await this.callApi(params, req, runtime), new UpdateConnQuestionResponse({}));
  }

  /**
   * 更新FAQ关联问
   * 
   * @param request - UpdateConnQuestionRequest
   * @returns UpdateConnQuestionResponse
   */
  async updateConnQuestion(request: UpdateConnQuestionRequest): Promise<UpdateConnQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnQuestionWithOptions(request, runtime);
  }

  /**
   * 实体-更新
   * 
   * @param request - UpdateDSEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDSEntityResponse
   */
  async updateDSEntityWithOptions(request: UpdateDSEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDSEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityName)) {
      query["EntityName"] = request.entityName;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDSEntity",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDSEntityResponse>(await this.callApi(params, req, runtime), new UpdateDSEntityResponse({}));
  }

  /**
   * 实体-更新
   * 
   * @param request - UpdateDSEntityRequest
   * @returns UpdateDSEntityResponse
   */
  async updateDSEntity(request: UpdateDSEntityRequest): Promise<UpdateDSEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDSEntityWithOptions(request, runtime);
  }

  /**
   * 实体成员-更新
   * 
   * @param tmpReq - UpdateDSEntityValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDSEntityValueResponse
   */
  async updateDSEntityValueWithOptions(tmpReq: UpdateDSEntityValueRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDSEntityValueResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDSEntityValueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.synonyms)) {
      request.synonymsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.synonyms, "Synonyms", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityValueId)) {
      query["EntityValueId"] = request.entityValueId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.synonymsShrink)) {
      body["Synonyms"] = request.synonymsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDSEntityValue",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDSEntityValueResponse>(await this.callApi(params, req, runtime), new UpdateDSEntityValueResponse({}));
  }

  /**
   * 实体成员-更新
   * 
   * @param request - UpdateDSEntityValueRequest
   * @returns UpdateDSEntityValueResponse
   */
  async updateDSEntityValue(request: UpdateDSEntityValueRequest): Promise<UpdateDSEntityValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDSEntityValueWithOptions(request, runtime);
  }

  /**
   * 文档变更
   * 
   * @param tmpReq - UpdateDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDocResponse
   */
  async updateDocWithOptions(tmpReq: UpdateDocRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDocResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tagIds)) {
      request.tagIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIds, "TagIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.docName)) {
      query["DocName"] = request.docName;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      query["KnowledgeId"] = request.knowledgeId;
    }

    if (!Util.isUnset(request.meta)) {
      query["Meta"] = request.meta;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.tagIdsShrink)) {
      query["TagIds"] = request.tagIdsShrink;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDoc",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDocResponse>(await this.callApi(params, req, runtime), new UpdateDocResponse({}));
  }

  /**
   * 文档变更
   * 
   * @param request - UpdateDocRequest
   * @returns UpdateDocResponse
   */
  async updateDoc(request: UpdateDocRequest): Promise<UpdateDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDocWithOptions(request, runtime);
  }

  /**
   * 更新FAQ
   * 
   * @param request - UpdateFaqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFaqResponse
   */
  async updateFaqWithOptions(request: UpdateFaqRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaqResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFaq",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFaqResponse>(await this.callApi(params, req, runtime), new UpdateFaqResponse({}));
  }

  /**
   * 更新FAQ
   * 
   * @param request - UpdateFaqRequest
   * @returns UpdateFaqResponse
   */
  async updateFaq(request: UpdateFaqRequest): Promise<UpdateFaqResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaqWithOptions(request, runtime);
  }

  /**
   * 机器人-修改
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: UpdateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.introduction)) {
      query["Introduction"] = request.introduction;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2022-04-08",
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

  /**
   * 机器人-修改
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * 意图-更新
   * 
   * @param tmpReq - UpdateIntentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIntentResponse
   */
  async updateIntentWithOptions(tmpReq: UpdateIntentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIntentResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateIntentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.intentDefinition)) {
      request.intentDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intentDefinition, "IntentDefinition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentDefinitionShrink)) {
      query["IntentDefinition"] = request.intentDefinitionShrink;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIntent",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIntentResponse>(await this.callApi(params, req, runtime), new UpdateIntentResponse({}));
  }

  /**
   * 意图-更新
   * 
   * @param request - UpdateIntentRequest
   * @returns UpdateIntentResponse
   */
  async updateIntent(request: UpdateIntentRequest): Promise<UpdateIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIntentWithOptions(request, runtime);
  }

  /**
   * 意图-LGF-更新
   * 
   * @param tmpReq - UpdateLgfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLgfResponse
   */
  async updateLgfWithOptions(tmpReq: UpdateLgfRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLgfResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateLgfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lgfDefinition)) {
      request.lgfDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lgfDefinition, "LgfDefinition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lgfDefinitionShrink)) {
      query["LgfDefinition"] = request.lgfDefinitionShrink;
    }

    if (!Util.isUnset(request.lgfId)) {
      query["LgfId"] = request.lgfId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLgf",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLgfResponse>(await this.callApi(params, req, runtime), new UpdateLgfResponse({}));
  }

  /**
   * 意图-LGF-更新
   * 
   * @param request - UpdateLgfRequest
   * @returns UpdateLgfResponse
   */
  async updateLgf(request: UpdateLgfRequest): Promise<UpdateLgfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLgfWithOptions(request, runtime);
  }

  /**
   * 视角-修改
   * 
   * @param request - UpdatePerspectiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePerspectiveResponse
   */
  async updatePerspectiveWithOptions(request: UpdatePerspectiveRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePerspectiveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.perspectiveId)) {
      query["PerspectiveId"] = request.perspectiveId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePerspective",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePerspectiveResponse>(await this.callApi(params, req, runtime), new UpdatePerspectiveResponse({}));
  }

  /**
   * 视角-修改
   * 
   * @param request - UpdatePerspectiveRequest
   * @returns UpdatePerspectiveResponse
   */
  async updatePerspective(request: UpdatePerspectiveRequest): Promise<UpdatePerspectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePerspectiveWithOptions(request, runtime);
  }

  /**
   * 更新FAQ相似问
   * 
   * @param request - UpdateSimQuestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSimQuestionResponse
   */
  async updateSimQuestionWithOptions(request: UpdateSimQuestionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSimQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.simQuestionId)) {
      body["SimQuestionId"] = request.simQuestionId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSimQuestion",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSimQuestionResponse>(await this.callApi(params, req, runtime), new UpdateSimQuestionResponse({}));
  }

  /**
   * 更新FAQ相似问
   * 
   * @param request - UpdateSimQuestionRequest
   * @returns UpdateSimQuestionResponse
   */
  async updateSimQuestion(request: UpdateSimQuestionRequest): Promise<UpdateSimQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSimQuestionWithOptions(request, runtime);
  }

  /**
   * 更新FAQ答案
   * 
   * @param request - UpdateSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSolutionResponse
   */
  async updateSolutionWithOptions(request: UpdateSolutionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSolutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.perspectiveCodes)) {
      body["PerspectiveCodes"] = request.perspectiveCodes;
    }

    if (!Util.isUnset(request.solutionId)) {
      body["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSolution",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSolutionResponse>(await this.callApi(params, req, runtime), new UpdateSolutionResponse({}));
  }

  /**
   * 更新FAQ答案
   * 
   * @param request - UpdateSolutionRequest
   * @returns UpdateSolutionResponse
   */
  async updateSolution(request: UpdateSolutionRequest): Promise<UpdateSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSolutionWithOptions(request, runtime);
  }

  /**
   * 意图-话术-更新
   * 
   * @param tmpReq - UpdateUserSayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserSayResponse
   */
  async updateUserSayWithOptions(tmpReq: UpdateUserSayRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserSayResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateUserSayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userSayDefinition)) {
      request.userSayDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userSayDefinition, "UserSayDefinition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userSayDefinitionShrink)) {
      query["UserSayDefinition"] = request.userSayDefinitionShrink;
    }

    if (!Util.isUnset(request.userSayId)) {
      query["UserSayId"] = request.userSayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserSay",
      version: "2022-04-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserSayResponse>(await this.callApi(params, req, runtime), new UpdateUserSayResponse({}));
  }

  /**
   * 意图-话术-更新
   * 
   * @param request - UpdateUserSayRequest
   * @returns UpdateUserSayResponse
   */
  async updateUserSay(request: UpdateUserSayRequest): Promise<UpdateUserSayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserSayWithOptions(request, runtime);
  }

}
