// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckChatappContactsRequest extends $tea.Model {
  channelType?: string;
  contacts?: string[];
  custWabaId?: string;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      contacts: 'Contacts',
      custWabaId: 'CustWabaId',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      contacts: { 'type': 'array', 'itemType': 'string' },
      custWabaId: 'string',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckChatappContactsShrinkRequest extends $tea.Model {
  channelType?: string;
  contactsShrink?: string;
  custWabaId?: string;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      contactsShrink: 'Contacts',
      custWabaId: 'CustWabaId',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      contactsShrink: 'string',
      custWabaId: 'string',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckChatappContactsResponseBody extends $tea.Model {
  code?: string;
  data?: CheckChatappContactsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': CheckChatappContactsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckChatappContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckChatappContactsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckChatappContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckContactsRequest extends $tea.Model {
  channelType?: string;
  contacts?: string;
  from?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      contacts: 'Contacts',
      from: 'From',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      contacts: 'string',
      from: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckContactsResponseBody extends $tea.Model {
  contacts?: CheckContactsResponseBodyContacts[];
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': CheckContactsResponseBodyContacts },
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckContactsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckContactsResponseBody,
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
  language?: string;
  name?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      components: 'Components',
      custWabaId: 'CustWabaId',
      example: 'Example',
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
  language?: string;
  name?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      componentsShrink: 'Components',
      custWabaId: 'CustWabaId',
      exampleShrink: 'Example',
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
  body: CreateChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateChatappTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChatappTemplateRequest extends $tea.Model {
  custWabaId?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      custWabaId: 'CustWabaId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custWabaId: 'string',
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
  body: DeleteChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChatappTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailRequest extends $tea.Model {
  custWabaId?: string;
  language?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      custWabaId: 'CustWabaId',
      language: 'Language',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custWabaId: 'string',
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
  body: GetChatappTemplateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  language?: string;
  name?: string;
  page?: ListChatappTemplateRequestPage;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      custWabaId: 'CustWabaId',
      language: 'Language',
      name: 'Name',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      custWabaId: 'string',
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
  language?: string;
  name?: string;
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      custWabaId: 'CustWabaId',
      language: 'Language',
      name: 'Name',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      custWabaId: 'string',
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
  body: ListChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChatappTemplateResponseBody,
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
  from?: string;
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
      from: 'From',
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
      from: 'string',
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
  from?: string;
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
      from: 'From',
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
      from: 'string',
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
  body: SendChatappMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendChatappMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  caption?: string;
  channelType?: string;
  fileName?: string;
  from?: string;
  link?: string;
  messageType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateBodyParams?: string;
  templateButtonParams?: string;
  templateCode?: string;
  templateHeaderParams?: string;
  text?: string;
  to?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      channelType: 'ChannelType',
      fileName: 'FileName',
      from: 'From',
      link: 'Link',
      messageType: 'MessageType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateBodyParams: 'TemplateBodyParams',
      templateButtonParams: 'TemplateButtonParams',
      templateCode: 'TemplateCode',
      templateHeaderParams: 'TemplateHeaderParams',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      channelType: 'string',
      fileName: 'string',
      from: 'string',
      link: 'string',
      messageType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateBodyParams: 'string',
      templateButtonParams: 'string',
      templateCode: 'string',
      templateHeaderParams: 'string',
      text: 'string',
      to: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  module?: SendMessageResponseBodyModule;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: SendMessageResponseBodyModule,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckChatappContactsResponseBodyData extends $tea.Model {
  phoneNumber?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckContactsResponseBodyContacts extends $tea.Model {
  phoneNumber?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      status: 'string',
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
  text?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      caption: 'Caption',
      fileName: 'FileName',
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

export class SendMessageResponseBodyModule extends $tea.Model {
  fromId?: string;
  messageId?: string;
  toId?: string;
  static names(): { [key: string]: string } {
    return {
      fromId: 'FromId',
      messageId: 'MessageId',
      toId: 'ToId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromId: 'string',
      messageId: 'string',
      toId: 'string',
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

  async checkChatappContactsWithOptions(tmpReq: CheckChatappContactsRequest, runtime: $Util.RuntimeOptions): Promise<CheckChatappContactsResponse> {
    Util.validateModel(tmpReq);
    let request = new CheckChatappContactsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.contacts)) {
      request.contactsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contacts, "Contacts", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.contactsShrink)) {
      body["Contacts"] = request.contactsShrink;
    }

    if (!Util.isUnset(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckChatappContacts",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckChatappContactsResponse>(await this.callApi(params, req, runtime), new CheckChatappContactsResponse({}));
  }

  async checkChatappContacts(request: CheckChatappContactsRequest): Promise<CheckChatappContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkChatappContactsWithOptions(request, runtime);
  }

  async checkContactsWithOptions(request: CheckContactsRequest, runtime: $Util.RuntimeOptions): Promise<CheckContactsResponse> {
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.contacts)) {
      body["Contacts"] = request.contacts;
    }

    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckContacts",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckContactsResponse>(await this.callApi(params, req, runtime), new CheckContactsResponse({}));
  }

  async checkContacts(request: CheckContactsRequest): Promise<CheckContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkContactsWithOptions(request, runtime);
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

    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
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

  async sendMessageWithOptions(request: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.caption)) {
      body["Caption"] = request.caption;
    }

    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    if (!Util.isUnset(request.link)) {
      body["Link"] = request.link;
    }

    if (!Util.isUnset(request.messageType)) {
      body["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.templateBodyParams)) {
      body["TemplateBodyParams"] = request.templateBodyParams;
    }

    if (!Util.isUnset(request.templateButtonParams)) {
      body["TemplateButtonParams"] = request.templateButtonParams;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateHeaderParams)) {
      body["TemplateHeaderParams"] = request.templateHeaderParams;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
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
      action: "SendMessage",
      version: "2020-06-06",
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

}
