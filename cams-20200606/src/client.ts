// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BeeBotAssociateRequest extends $tea.Model {
  chatBotInstanceId?: string;
  isvCode?: string;
  perspective?: string[];
  recommendNum?: number;
  sessionId?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      isvCode: 'IsvCode',
      perspective: 'Perspective',
      recommendNum: 'RecommendNum',
      sessionId: 'SessionId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatBotInstanceId: 'string',
      isvCode: 'string',
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

export class BeeBotAssociateShrinkRequest extends $tea.Model {
  chatBotInstanceId?: string;
  isvCode?: string;
  perspectiveShrink?: string;
  recommendNum?: number;
  sessionId?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      isvCode: 'IsvCode',
      perspectiveShrink: 'Perspective',
      recommendNum: 'RecommendNum',
      sessionId: 'SessionId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatBotInstanceId: 'string',
      isvCode: 'string',
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

export class BeeBotAssociateResponseBody extends $tea.Model {
  code?: string;
  data?: BeeBotAssociateResponseBodyData;
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
      data: BeeBotAssociateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotAssociateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BeeBotAssociateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BeeBotAssociateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatRequest extends $tea.Model {
  chatBotInstanceId?: string;
  intentName?: string;
  isvCode?: string;
  knowledgeId?: string;
  perspective?: string[];
  senderId?: string;
  senderNick?: string;
  sessionId?: string;
  utterance?: string;
  vendorParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      intentName: 'IntentName',
      isvCode: 'IsvCode',
      knowledgeId: 'KnowledgeId',
      perspective: 'Perspective',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatBotInstanceId: 'string',
      intentName: 'string',
      isvCode: 'string',
      knowledgeId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatShrinkRequest extends $tea.Model {
  chatBotInstanceId?: string;
  intentName?: string;
  isvCode?: string;
  knowledgeId?: string;
  perspectiveShrink?: string;
  senderId?: string;
  senderNick?: string;
  sessionId?: string;
  utterance?: string;
  vendorParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      intentName: 'IntentName',
      isvCode: 'IsvCode',
      knowledgeId: 'KnowledgeId',
      perspectiveShrink: 'Perspective',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParamShrink: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatBotInstanceId: 'string',
      intentName: 'string',
      isvCode: 'string',
      knowledgeId: 'string',
      perspectiveShrink: 'string',
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatResponseBody extends $tea.Model {
  code?: string;
  data?: BeeBotChatResponseBodyData;
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
      data: BeeBotChatResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BeeBotChatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BeeBotChatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateRequest extends $tea.Model {
  category?: string;
  components?: CreateChatappTemplateRequestComponents[];
  custWabaId?: string;
  example?: { [key: string]: string };
  isvCode?: string;
  language?: string;
  name?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      components: 'Components',
      custWabaId: 'CustWabaId',
      example: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      name: 'Name',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      components: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponents },
      custWabaId: 'string',
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvCode: 'string',
      language: 'string',
      name: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateShrinkRequest extends $tea.Model {
  category?: string;
  componentsShrink?: string;
  custWabaId?: string;
  exampleShrink?: string;
  isvCode?: string;
  language?: string;
  name?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      componentsShrink: 'Components',
      custWabaId: 'CustWabaId',
      exampleShrink: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      name: 'Name',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      componentsShrink: 'string',
      custWabaId: 'string',
      exampleShrink: 'string',
      isvCode: 'string',
      language: 'string',
      name: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateResponseBody extends $tea.Model {
  code?: string;
  data?: CreateChatappTemplateResponseBodyData;
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
      data: CreateChatappTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateChatappTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChatappTemplateRequest extends $tea.Model {
  custWabaId?: string;
  isvCode?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custWabaId: 'string',
      isvCode: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChatappTemplateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChatappTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteChatappTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailRequest extends $tea.Model {
  custWabaId?: string;
  isvCode?: string;
  language?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetChatappTemplateDetailResponseBodyData;
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
      data: GetChatappTemplateDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetChatappTemplateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChatappTemplateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateRequest extends $tea.Model {
  auditStatus?: string;
  custWabaId?: string;
  isvCode?: string;
  language?: string;
  name?: string;
  page?: ListChatappTemplateRequestPage;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      name: 'Name',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      name: 'string',
      page: ListChatappTemplateRequestPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateShrinkRequest extends $tea.Model {
  auditStatus?: string;
  custWabaId?: string;
  isvCode?: string;
  language?: string;
  name?: string;
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      name: 'Name',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      name: 'string',
      pageShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateResponseBody extends $tea.Model {
  code?: string;
  listTemplate?: ListChatappTemplateResponseBodyListTemplate[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      listTemplate: 'ListTemplate',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      listTemplate: { 'type': 'array', 'itemType': ListChatappTemplateResponseBodyListTemplate },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChatappTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequest extends $tea.Model {
  components?: ModifyChatappTemplateRequestComponents[];
  custWabaId?: string;
  example?: { [key: string]: string };
  isvCode?: string;
  language?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      custWabaId: 'CustWabaId',
      example: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponents },
      custWabaId: 'string',
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvCode: 'string',
      language: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateShrinkRequest extends $tea.Model {
  componentsShrink?: string;
  custWabaId?: string;
  exampleShrink?: string;
  isvCode?: string;
  language?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      componentsShrink: 'Components',
      custWabaId: 'CustWabaId',
      exampleShrink: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsShrink: 'string',
      custWabaId: 'string',
      exampleShrink: 'string',
      isvCode: 'string',
      language: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateResponseBody extends $tea.Model {
  code?: string;
  data?: ModifyChatappTemplateResponseBodyData;
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
      data: ModifyChatappTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyChatappTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageRequest extends $tea.Model {
  channelType?: string;
  custWabaId?: string;
  fallBackContent?: string;
  fallBackId?: string;
  from?: string;
  isvCode?: string;
  language?: string;
  senderList?: SendChatappMassMessageRequestSenderList[];
  taskId?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackId: 'FallBackId',
      from: 'From',
      isvCode: 'IsvCode',
      language: 'Language',
      senderList: 'SenderList',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackId: 'string',
      from: 'string',
      isvCode: 'string',
      language: 'string',
      senderList: { 'type': 'array', 'itemType': SendChatappMassMessageRequestSenderList },
      taskId: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageShrinkRequest extends $tea.Model {
  channelType?: string;
  custWabaId?: string;
  fallBackContent?: string;
  fallBackId?: string;
  from?: string;
  isvCode?: string;
  language?: string;
  senderListShrink?: string;
  taskId?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackId: 'FallBackId',
      from: 'From',
      isvCode: 'IsvCode',
      language: 'Language',
      senderListShrink: 'SenderList',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackId: 'string',
      from: 'string',
      isvCode: 'string',
      language: 'string',
      senderListShrink: 'string',
      taskId: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageResponseBody extends $tea.Model {
  code?: string;
  groupMessageId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupMessageId: 'GroupMessageId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupMessageId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendChatappMassMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendChatappMassMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequest extends $tea.Model {
  channelType?: string;
  content?: string;
  custWabaId?: string;
  fallBackContent?: string;
  fallBackId?: string;
  from?: string;
  isvCode?: string;
  language?: string;
  messageType?: string;
  payload?: string[];
  templateCode?: string;
  templateParams?: { [key: string]: string };
  to?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      content: 'Content',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackId: 'FallBackId',
      from: 'From',
      isvCode: 'IsvCode',
      language: 'Language',
      messageType: 'MessageType',
      payload: 'Payload',
      templateCode: 'TemplateCode',
      templateParams: 'TemplateParams',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      content: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackId: 'string',
      from: 'string',
      isvCode: 'string',
      language: 'string',
      messageType: 'string',
      payload: { 'type': 'array', 'itemType': 'string' },
      templateCode: 'string',
      templateParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      to: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageShrinkRequest extends $tea.Model {
  channelType?: string;
  content?: string;
  custWabaId?: string;
  fallBackContent?: string;
  fallBackId?: string;
  from?: string;
  isvCode?: string;
  language?: string;
  messageType?: string;
  payloadShrink?: string;
  templateCode?: string;
  templateParamsShrink?: string;
  to?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      content: 'Content',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackId: 'FallBackId',
      from: 'From',
      isvCode: 'IsvCode',
      language: 'Language',
      messageType: 'MessageType',
      payloadShrink: 'Payload',
      templateCode: 'TemplateCode',
      templateParamsShrink: 'TemplateParams',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      content: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackId: 'string',
      from: 'string',
      isvCode: 'string',
      language: 'string',
      messageType: 'string',
      payloadShrink: 'string',
      templateCode: 'string',
      templateParamsShrink: 'string',
      to: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  messageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendChatappMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendChatappMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotAssociateResponseBodyDataAssociate extends $tea.Model {
  meta?: string;
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

export class BeeBotAssociateResponseBodyData extends $tea.Model {
  associate?: BeeBotAssociateResponseBodyDataAssociate[];
  messageId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      associate: 'Associate',
      messageId: 'MessageId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associate: { 'type': 'array', 'itemType': BeeBotAssociateResponseBodyDataAssociate },
      messageId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges extends $tea.Model {
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

export class BeeBotChatResponseBodyDataMessagesKnowledge extends $tea.Model {
  answerSource?: string;
  category?: string;
  content?: string;
  contentType?: string;
  hitStatement?: string;
  id?: string;
  relatedKnowledges?: BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges[];
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
      relatedKnowledges: { 'type': 'array', 'itemType': BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges },
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatResponseBodyDataMessagesRecommends extends $tea.Model {
  answerSource?: string;
  knowledgeId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      knowledgeId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatResponseBodyDataMessagesTextSlots extends $tea.Model {
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

export class BeeBotChatResponseBodyDataMessagesText extends $tea.Model {
  answerSource?: string;
  content?: string;
  contentType?: string;
  dialogName?: string;
  ext?: { [key: string]: any };
  externalFlags?: { [key: string]: any };
  hitStatement?: string;
  intentName?: string;
  metaData?: string;
  nodeId?: string;
  nodeName?: string;
  slots?: BeeBotChatResponseBodyDataMessagesTextSlots[];
  userDefinedChatTitle?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
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
      slots: 'Slots',
      userDefinedChatTitle: 'UserDefinedChatTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
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
      slots: { 'type': 'array', 'itemType': BeeBotChatResponseBodyDataMessagesTextSlots },
      userDefinedChatTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatResponseBodyDataMessages extends $tea.Model {
  answerSource?: string;
  answerType?: string;
  knowledge?: BeeBotChatResponseBodyDataMessagesKnowledge;
  recommends?: BeeBotChatResponseBodyDataMessagesRecommends[];
  text?: BeeBotChatResponseBodyDataMessagesText;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      answerType: 'AnswerType',
      knowledge: 'Knowledge',
      recommends: 'Recommends',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      answerType: 'string',
      knowledge: BeeBotChatResponseBodyDataMessagesKnowledge,
      recommends: { 'type': 'array', 'itemType': BeeBotChatResponseBodyDataMessagesRecommends },
      text: BeeBotChatResponseBodyDataMessagesText,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotChatResponseBodyData extends $tea.Model {
  messageId?: string;
  messages?: BeeBotChatResponseBodyDataMessages[];
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      messages: 'Messages',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      messages: { 'type': 'array', 'itemType': BeeBotChatResponseBodyDataMessages },
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateRequestComponentsButtons extends $tea.Model {
  phoneNumber?: string;
  text?: string;
  type?: string;
  url?: string;
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      text: 'Text',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateRequestComponents extends $tea.Model {
  buttons?: CreateChatappTemplateRequestComponentsButtons[];
  caption?: string;
  fileName?: string;
  format?: string;
  text?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      caption: 'Caption',
      fileName: 'FileName',
      format: 'Format',
      text: 'Text',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttons: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsButtons },
      caption: 'string',
      fileName: 'string',
      format: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateResponseBodyData extends $tea.Model {
  templateCode?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyDataComponentsButtons extends $tea.Model {
  phoneNumber?: string;
  text?: string;
  type?: string;
  url?: string;
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      text: 'Text',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyDataComponents extends $tea.Model {
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsButtons[];
  caption?: string;
  fileName?: string;
  format?: string;
  text?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      caption: 'Caption',
      fileName: 'FileName',
      format: 'Format',
      text: 'Text',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttons: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsButtons },
      caption: 'string',
      fileName: 'string',
      format: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyData extends $tea.Model {
  auditStatus?: string;
  category?: string;
  components?: GetChatappTemplateDetailResponseBodyDataComponents[];
  example?: { [key: string]: string };
  language?: string;
  name?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      category: 'Category',
      components: 'Components',
      example: 'Example',
      language: 'Language',
      name: 'Name',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      category: 'string',
      components: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponents },
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      name: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateRequestPage extends $tea.Model {
  index?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateResponseBodyListTemplate extends $tea.Model {
  auditStatus?: string;
  category?: string;
  language?: string;
  templateCode?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      category: 'Category',
      language: 'Language',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      category: 'string',
      language: 'string',
      templateCode: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponentsButtons extends $tea.Model {
  phoneNumber?: string;
  text?: string;
  type?: string;
  url?: string;
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      text: 'Text',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponents extends $tea.Model {
  buttons?: ModifyChatappTemplateRequestComponentsButtons[];
  caption?: string;
  fileName?: string;
  format?: string;
  text?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      caption: 'Caption',
      fileName: 'FileName',
      format: 'Format',
      text: 'Text',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttons: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsButtons },
      caption: 'string',
      fileName: 'string',
      format: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateResponseBodyData extends $tea.Model {
  templateCode?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageRequestSenderList extends $tea.Model {
  payload?: string[];
  templateParams?: { [key: string]: string };
  to?: string;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      templateParams: 'TemplateParams',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: { 'type': 'array', 'itemType': 'string' },
      templateParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      to: 'string',
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
    this._endpoint = this.getEndpoint("cams", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async beeBotAssociateWithOptions(tmpReq: BeeBotAssociateRequest, runtime: $Util.RuntimeOptions): Promise<BeeBotAssociateResponse> {
    Util.validateModel(tmpReq);
    let request = new BeeBotAssociateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.perspective)) {
      request.perspectiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspective, "Perspective", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chatBotInstanceId)) {
      body["ChatBotInstanceId"] = request.chatBotInstanceId;
    }

    if (!Util.isUnset(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.perspectiveShrink)) {
      body["Perspective"] = request.perspectiveShrink;
    }

    if (!Util.isUnset(request.recommendNum)) {
      body["RecommendNum"] = request.recommendNum;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.utterance)) {
      body["Utterance"] = request.utterance;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BeeBotAssociate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BeeBotAssociateResponse>(await this.callApi(params, req, runtime), new BeeBotAssociateResponse({}));
  }

  async beeBotAssociate(request: BeeBotAssociateRequest): Promise<BeeBotAssociateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beeBotAssociateWithOptions(request, runtime);
  }

  async beeBotChatWithOptions(tmpReq: BeeBotChatRequest, runtime: $Util.RuntimeOptions): Promise<BeeBotChatResponse> {
    Util.validateModel(tmpReq);
    let request = new BeeBotChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.perspective)) {
      request.perspectiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspective, "Perspective", "json");
    }

    if (!Util.isUnset(tmpReq.vendorParam)) {
      request.vendorParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vendorParam, "VendorParam", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chatBotInstanceId)) {
      body["ChatBotInstanceId"] = request.chatBotInstanceId;
    }

    if (!Util.isUnset(request.intentName)) {
      body["IntentName"] = request.intentName;
    }

    if (!Util.isUnset(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    if (!Util.isUnset(request.perspectiveShrink)) {
      body["Perspective"] = request.perspectiveShrink;
    }

    if (!Util.isUnset(request.senderId)) {
      body["SenderId"] = request.senderId;
    }

    if (!Util.isUnset(request.senderNick)) {
      body["SenderNick"] = request.senderNick;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.utterance)) {
      body["Utterance"] = request.utterance;
    }

    if (!Util.isUnset(request.vendorParamShrink)) {
      body["VendorParam"] = request.vendorParamShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BeeBotChat",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BeeBotChatResponse>(await this.callApi(params, req, runtime), new BeeBotChatResponse({}));
  }

  async beeBotChat(request: BeeBotChatRequest): Promise<BeeBotChatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beeBotChatWithOptions(request, runtime);
  }

  async createChatappTemplateWithOptions(tmpReq: CreateChatappTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateChatappTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateChatappTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!Util.isUnset(tmpReq.example)) {
      request.exampleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.example, "Example", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!Util.isUnset(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.exampleShrink)) {
      body["Example"] = request.exampleShrink;
    }

    if (!Util.isUnset(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateChatappTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateChatappTemplateResponse>(await this.callApi(params, req, runtime), new CreateChatappTemplateResponse({}));
  }

  async createChatappTemplate(request: CreateChatappTemplateRequest): Promise<CreateChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChatappTemplateWithOptions(request, runtime);
  }

  async deleteChatappTemplateWithOptions(request: DeleteChatappTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChatappTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custWabaId)) {
      query["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteChatappTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteChatappTemplateResponse>(await this.callApi(params, req, runtime), new DeleteChatappTemplateResponse({}));
  }

  async deleteChatappTemplate(request: DeleteChatappTemplateRequest): Promise<DeleteChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChatappTemplateWithOptions(request, runtime);
  }

  async getChatappTemplateDetailWithOptions(request: GetChatappTemplateDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetChatappTemplateDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custWabaId)) {
      query["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChatappTemplateDetail",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetChatappTemplateDetailResponse>(await this.callApi(params, req, runtime), new GetChatappTemplateDetailResponse({}));
  }

  async getChatappTemplateDetail(request: GetChatappTemplateDetailRequest): Promise<GetChatappTemplateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappTemplateDetailWithOptions(request, runtime);
  }

  async listChatappTemplateWithOptions(tmpReq: ListChatappTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListChatappTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new ListChatappTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.page))) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.page), "Page", "json");
    }

    let query = { };
    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.custWabaId)) {
      query["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChatappTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChatappTemplateResponse>(await this.callApi(params, req, runtime), new ListChatappTemplateResponse({}));
  }

  async listChatappTemplate(request: ListChatappTemplateRequest): Promise<ListChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChatappTemplateWithOptions(request, runtime);
  }

  async modifyChatappTemplateWithOptions(tmpReq: ModifyChatappTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyChatappTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyChatappTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!Util.isUnset(tmpReq.example)) {
      request.exampleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.example, "Example", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!Util.isUnset(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.exampleShrink)) {
      body["Example"] = request.exampleShrink;
    }

    if (!Util.isUnset(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyChatappTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyChatappTemplateResponse>(await this.callApi(params, req, runtime), new ModifyChatappTemplateResponse({}));
  }

  async modifyChatappTemplate(request: ModifyChatappTemplateRequest): Promise<ModifyChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyChatappTemplateWithOptions(request, runtime);
  }

  async sendChatappMassMessageWithOptions(tmpReq: SendChatappMassMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendChatappMassMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new SendChatappMassMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.senderList)) {
      request.senderListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.senderList, "SenderList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.fallBackContent)) {
      body["FallBackContent"] = request.fallBackContent;
    }

    if (!Util.isUnset(request.fallBackId)) {
      body["FallBackId"] = request.fallBackId;
    }

    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    if (!Util.isUnset(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.senderListShrink)) {
      body["SenderList"] = request.senderListShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendChatappMassMessage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendChatappMassMessageResponse>(await this.callApi(params, req, runtime), new SendChatappMassMessageResponse({}));
  }

  async sendChatappMassMessage(request: SendChatappMassMessageRequest): Promise<SendChatappMassMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendChatappMassMessageWithOptions(request, runtime);
  }

  async sendChatappMessageWithOptions(tmpReq: SendChatappMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendChatappMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new SendChatappMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.templateParams)) {
      request.templateParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateParams, "TemplateParams", "json");
    }

    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.fallBackContent)) {
      body["FallBackContent"] = request.fallBackContent;
    }

    if (!Util.isUnset(request.fallBackId)) {
      body["FallBackId"] = request.fallBackId;
    }

    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    if (!Util.isUnset(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.messageType)) {
      body["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateParamsShrink)) {
      body["TemplateParams"] = request.templateParamsShrink;
    }

    if (!Util.isUnset(request.to)) {
      body["To"] = request.to;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendChatappMessage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendChatappMessageResponse>(await this.callApi(params, req, runtime), new SendChatappMessageResponse({}));
  }

  async sendChatappMessage(request: SendChatappMessageRequest): Promise<SendChatappMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendChatappMessageWithOptions(request, runtime);
  }

}
