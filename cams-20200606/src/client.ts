// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddChatappPhoneNumberRequest extends $tea.Model {
  /**
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  cc?: string;
  /**
   * @remarks
   * Adds a phone number for a WhatsApp Business account (WABA).
   * 
   * This parameter is required.
   * 
   * @example
   * 93928389****
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * AddChatappPhoneNumber
   * 
   * This parameter is required.
   * 
   * @example
   * 1380000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * cams:ChatappPhoneNumberRegister
   * 
   * @example
   * 1020****
   * 
   * @deprecated
   */
  preValidateId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Private
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  verifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      preValidateId: 'PreValidateId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      verifiedName: 'VerifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      preValidateId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      verifiedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddChatappPhoneNumberResponseBody extends $tea.Model {
  /**
   * @remarks
   * com.alicom.access.oxs.client.channel.aliyun.flow.AyFlowExecuteService
   * 
   * @example
   * http://pop_access_slb_sgvpc/#vpc
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * com.alicom.access.oxs.client.channel.aliyun.flow.dto.AyCommonApiRequest
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * formData
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * 13800000000
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class AddChatappPhoneNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddChatappPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddChatappPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotAssociateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of a bot instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  chatBotInstanceId?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the user is authorized by ISV.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The list of codes for answers from different perspectives.
   */
  perspective?: string[];
  /**
   * @remarks
   * The number of recommended questions. The value ranges from 1 to 10.
   * 
   * @example
   * 3
   */
  recommendNum?: number;
  /**
   * @remarks
   * The ID of the session, which is used to identify the session and store context information in the session.
   * 
   * @example
   * 2334324234
   */
  sessionId?: string;
  /**
   * @remarks
   * The input of the visitor.
   * 
   * @example
   * hello
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      custSpaceId: 'CustSpaceId',
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
      custSpaceId: 'string',
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
  /**
   * @remarks
   * The ID of a bot instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  chatBotInstanceId?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the user is authorized by ISV.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The list of codes for answers from different perspectives.
   */
  perspectiveShrink?: string;
  /**
   * @remarks
   * The number of recommended questions. The value ranges from 1 to 10.
   * 
   * @example
   * 3
   */
  recommendNum?: number;
  /**
   * @remarks
   * The ID of the session, which is used to identify the session and store context information in the session.
   * 
   * @example
   * 2334324234
   */
  sessionId?: string;
  /**
   * @remarks
   * The input of the visitor.
   * 
   * @example
   * hello
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      custSpaceId: 'CustSpaceId',
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
      custSpaceId: 'string',
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
  /**
   * @remarks
   * The access denied for detailed information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * If OK is returned, the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: BeeBotAssociateResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BeeBotAssociateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * Indicates whether the answer is in plain text or rich text.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  chatBotInstanceId?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The source of the answer.
   * 
   * @example
   * intent
   */
  intentName?: string;
  /**
   * @remarks
   * The source of the answer.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The hit statement.
   * 
   * @example
   * 1
   */
  knowledgeId?: string;
  /**
   * @remarks
   * Beijing
   */
  perspective?: string[];
  /**
   * @remarks
   * The information about the slot.
   * 
   * @example
   * 861500000000
   */
  senderId?: string;
  /**
   * @remarks
   * Beijing
   * 
   * @example
   * nick
   */
  senderNick?: string;
  /**
   * @remarks
   * The title of the related knowledge.
   * 
   * @example
   * en
   */
  sessionId?: string;
  /**
   * @remarks
   * The title of the hit question.
   * 
   * This parameter is required.
   * 
   * @example
   * 659216218162179
   */
  utterance?: string;
  /**
   * @remarks
   * The node name. When AnswerSource is set to BotFramework, a value is returned for this parameter.
   * 
   * @example
   * {\\"skills\\":\\"chat_search\\",\\"accessToken\\":\\"73f4d5c8e8c334d9b538890bca68ac9a\\",\\"senderStaffId\\":\\"1697204021326\\",\\"senderCorpId\\":\\"dingee291fb2828058b9\\"}
   */
  vendorParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      custSpaceId: 'CustSpaceId',
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
      custSpaceId: 'string',
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
  /**
   * @remarks
   * Indicates whether the answer is in plain text or rich text.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  chatBotInstanceId?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The source of the answer.
   * 
   * @example
   * intent
   */
  intentName?: string;
  /**
   * @remarks
   * The source of the answer.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The hit statement.
   * 
   * @example
   * 1
   */
  knowledgeId?: string;
  /**
   * @remarks
   * Beijing
   */
  perspectiveShrink?: string;
  /**
   * @remarks
   * The information about the slot.
   * 
   * @example
   * 861500000000
   */
  senderId?: string;
  /**
   * @remarks
   * Beijing
   * 
   * @example
   * nick
   */
  senderNick?: string;
  /**
   * @remarks
   * The title of the related knowledge.
   * 
   * @example
   * en
   */
  sessionId?: string;
  /**
   * @remarks
   * The title of the hit question.
   * 
   * This parameter is required.
   * 
   * @example
   * 659216218162179
   */
  utterance?: string;
  /**
   * @remarks
   * The node name. When AnswerSource is set to BotFramework, a value is returned for this parameter.
   * 
   * @example
   * {\\"skills\\":\\"chat_search\\",\\"accessToken\\":\\"73f4d5c8e8c334d9b538890bca68ac9a\\",\\"senderStaffId\\":\\"1697204021326\\",\\"senderCorpId\\":\\"dingee291fb2828058b9\\"}
   */
  vendorParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      custSpaceId: 'CustSpaceId',
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
      custSpaceId: 'string',
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
  /**
   * @remarks
   * Access denied for detailed information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The content of the text message.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of the recommended knowledge. When AnswerType is set to Recommend, the list of the recommended knowledge is returned by the bot for this parameter.
   */
  data?: BeeBotChatResponseBodyData;
  /**
   * @remarks
   * Indicates whether the answer is in plain text or rich text.
   * 
   * @example
   * none
   */
  message?: string;
  /**
   * @remarks
   * The passthrough parameter.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BeeBotChatResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ChatappBindWabaRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33993***
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappBindWabaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ChatappBindWabaResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ChatappBindWabaResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappBindWabaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatappBindWabaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatappBindWabaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappEmbedSignUpRequest extends $tea.Model {
  /**
   * @remarks
   * The InputToken returned after the embedded signup flow is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * wlelkelwidilwloe-ewlwols0lwsllsld
   */
  inputToken?: string;
  static names(): { [key: string]: string } {
    return {
      inputToken: 'InputToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappEmbedSignUpResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of the WhatsApp Business accounts.
   */
  wabas?: ChatappEmbedSignUpResponseBodyWabas[];
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      wabas: 'Wabas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      wabas: { 'type': 'array', 'itemType': ChatappEmbedSignUpResponseBodyWabas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappEmbedSignUpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatappEmbedSignUpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatappEmbedSignUpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappMigrationRegisterRequest extends $tea.Model {
  /**
   * @remarks
   * None
   * 
   * This parameter is required.
   * 
   * @example
   * 29348393884****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800****
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappMigrationRegisterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappMigrationRegisterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatappMigrationRegisterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatappMigrationRegisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappMigrationVerifiedRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user under the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 828798
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappMigrationVerifiedResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ChatappMigrationVerifiedResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ChatappMigrationVerifiedResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappMigrationVerifiedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatappMigrationVerifiedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatappMigrationVerifiedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappPhoneNumberDeregisterRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 939283893939
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number that you want to deregister.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800000000
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappPhoneNumberDeregisterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappPhoneNumberDeregisterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatappPhoneNumberDeregisterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatappPhoneNumberDeregisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappPhoneNumberRegisterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 939283893939
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8613800000000
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
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

export class ChatappPhoneNumberRegisterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class ChatappPhoneNumberRegisterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatappPhoneNumberRegisterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatappPhoneNumberRegisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappSyncPhoneNumberRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user under the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappSyncPhoneNumberResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None.
   */
  message?: string;
  /**
   * @remarks
   * Details of the phone numbers.
   */
  phoneNumbers?: ChatappSyncPhoneNumberResponseBodyPhoneNumbers[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      phoneNumbers: 'PhoneNumbers',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      phoneNumbers: { 'type': 'array', 'itemType': ChatappSyncPhoneNumberResponseBodyPhoneNumbers },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappSyncPhoneNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatappSyncPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatappSyncPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappVerifyAndRegisterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 29389299388383
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 86138000000
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123466
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappVerifyAndRegisterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class ChatappVerifyAndRegisterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChatappVerifyAndRegisterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChatappVerifyAndRegisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappMigrationInitiateRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the country or region.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  countryCode?: string;
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The mobile number without the country code or region code.
   * 
   * This parameter is required.
   * 
   * @example
   * 13900001234
   */
  mobileNumber?: string;
  static names(): { [key: string]: string } {
    return {
      countryCode: 'CountryCode',
      custSpaceId: 'CustSpaceId',
      mobileNumber: 'MobileNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryCode: 'string',
      custSpaceId: 'string',
      mobileNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappMigrationInitiateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the request denial..
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   A value of OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: CreateChatappMigrationInitiateResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CreateChatappMigrationInitiateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappMigrationInitiateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateChatappMigrationInitiateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateChatappMigrationInitiateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow Facebook to automatically change the directory of the template. If you set this parameter to true, the review success rate of the template is improved. This parameter is valid only when TemplateType is set to WHATSAPP.
   * 
   * @example
   * true
   */
  allowCategoryChange?: boolean;
  /**
   * @remarks
   * The category of the template if TemplateType is set to WHATSAPP. Valid values:
   * 
   * *   **UTILITY**: the transaction template
   * *   **MARKETING**: the marketing template
   * *   **AUTHENTICATION**: the authentication template
   * 
   * The category of the template if TemplateType is set to VIBER. Valid values:
   * 
   * *   **text**: the template that contains only text
   * *   **image**: the template that contains only images
   * *   **text_image_button**: the template that contains text, images, and buttons
   * *   **text_button**: the template that contains text and buttons
   * *   **document**: the template that contains only documents
   * *   **video**: the template that contains only videos
   * *   **text_video**: the template that contains text and videos
   * *   **text_video_button**: the template that contains text, videos, and buttons
   * *   **text_image**: the template that contains text and images
   * 
   * This parameter is required.
   * 
   * @example
   * The code of the message template.
   */
  category?: string;
  /**
   * @remarks
   * The components of the message template.
   * 
   * >  If Category is set to AUTHENTICATION, the Type sub-parameter of the Components parameter cannot be set to HEADER. If the Type sub-parameter is set to BODY or FOOTER, the Text sub-parameter of the Components parameter must be empty.
   * 
   * This parameter is required.
   */
  components?: CreateChatappTemplateRequestComponents[];
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * > CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The examples of variables that are used when you create the message template.
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Validity period of authentication template message sending in WhatsApp
   * 
   * > This attribute requires providing waba in advance to Alibaba operators to open the whitelist, otherwise it will result in template submission failure
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The name of the message template.
   * 
   * This parameter is required.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  /**
   * @remarks
   * The type of the message template.
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE: the Line message template. This type of message template will be released later.
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCategoryChange: 'AllowCategoryChange',
      category: 'Category',
      components: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      example: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      name: 'Name',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCategoryChange: 'boolean',
      category: 'string',
      components: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponents },
      custSpaceId: 'string',
      custWabaId: 'string',
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      name: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow Facebook to automatically change the directory of the template. If you set this parameter to true, the review success rate of the template is improved. This parameter is valid only when TemplateType is set to WHATSAPP.
   * 
   * @example
   * true
   */
  allowCategoryChange?: boolean;
  /**
   * @remarks
   * The category of the template if TemplateType is set to WHATSAPP. Valid values:
   * 
   * *   **UTILITY**: the transaction template
   * *   **MARKETING**: the marketing template
   * *   **AUTHENTICATION**: the authentication template
   * 
   * The category of the template if TemplateType is set to VIBER. Valid values:
   * 
   * *   **text**: the template that contains only text
   * *   **image**: the template that contains only images
   * *   **text_image_button**: the template that contains text, images, and buttons
   * *   **text_button**: the template that contains text and buttons
   * *   **document**: the template that contains only documents
   * *   **video**: the template that contains only videos
   * *   **text_video**: the template that contains text and videos
   * *   **text_video_button**: the template that contains text, videos, and buttons
   * *   **text_image**: the template that contains text and images
   * 
   * This parameter is required.
   * 
   * @example
   * The code of the message template.
   */
  category?: string;
  /**
   * @remarks
   * The components of the message template.
   * 
   * >  If Category is set to AUTHENTICATION, the Type sub-parameter of the Components parameter cannot be set to HEADER. If the Type sub-parameter is set to BODY or FOOTER, the Text sub-parameter of the Components parameter must be empty.
   * 
   * This parameter is required.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * > CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The examples of variables that are used when you create the message template.
   */
  exampleShrink?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Validity period of authentication template message sending in WhatsApp
   * 
   * > This attribute requires providing waba in advance to Alibaba operators to open the whitelist, otherwise it will result in template submission failure
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The name of the message template.
   * 
   * This parameter is required.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  /**
   * @remarks
   * The type of the message template.
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE: the Line message template. This type of message template will be released later.
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCategoryChange: 'AllowCategoryChange',
      category: 'Category',
      componentsShrink: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      exampleShrink: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      name: 'Name',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCategoryChange: 'boolean',
      category: 'string',
      componentsShrink: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      exampleShrink: 'string',
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      name: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * {"templateCode": "****4b5c79c9432497a075bdfca36bf5"，"templateName": "hello_whatsapp"}
   */
  data?: CreateChatappTemplateResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The categories of the Flow.
   * 
   * This parameter is required.
   */
  categories?: string[];
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 93994848
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The name of the Flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      custSpaceId: 'CustSpaceId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      custSpaceId: 'string',
      flowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The categories of the Flow.
   * 
   * This parameter is required.
   */
  categoriesShrink?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 93994848
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The name of the Flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'Categories',
      custSpaceId: 'CustSpaceId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      custSpaceId: 'string',
      flowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateFlowResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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
      data: CreateFlowResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhoneMessageQrdlRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 838833
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Produce QR code image format.
   * 
   * This parameter is required.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  /**
   * @remarks
   * The phone number. Add the country code before the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Message content.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      generateQrImage: 'GenerateQrImage',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      generateQrImage: 'string',
      phoneNumber: 'string',
      prefilledMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhoneMessageQrdlResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreatePhoneMessageQrdlResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * none
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
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
      data: CreatePhoneMessageQrdlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhoneMessageQrdlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePhoneMessageQrdlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePhoneMessageQrdlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChatappTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   */
  custWabaId?: string;
  /**
   * @remarks
   * The ISV verification code. This parameter is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * zh_CN
   */
  language?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The template type. This parameter is required if you delete a template in a language.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChatappTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class DeleteChatappTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 393983883
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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

export class DeleteFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhoneMessageQrdlRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 883873773
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number. Add the country code before the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * QR code encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * 29338838
   */
  qrdlCode?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
      qrdlCode: 'QrdlCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
      qrdlCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhoneMessageQrdlResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
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

export class DeletePhoneMessageQrdlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePhoneMessageQrdlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePhoneMessageQrdlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeprecateFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 38877483
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeprecateFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * The result returns OK as normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
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

export class DeprecateFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeprecateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeprecateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWhatsappROIMetricRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The verification code used to verify whether the RAM user is authorized by the independent software vendor (ISV) account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      isvCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWhatsappROIMetricResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * NONE
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The value OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWhatsappROIMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableWhatsappROIMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableWhatsappROIMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappPhoneNumberMetricRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693407714687
   */
  end?: number;
  /**
   * @remarks
   * The granularity of the metric.
   * 
   * Valid values:
   * 
   * *   DAILY
   * *   HALF_HOUR
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The business phone number.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693107714687
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      end: 'End',
      granularity: 'Granularity',
      isvCode: 'IsvCode',
      phoneNumber: 'PhoneNumber',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      end: 'number',
      granularity: 'string',
      isvCode: 'string',
      phoneNumber: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappPhoneNumberMetricResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * NONE
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The value OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetChatappPhoneNumberMetricResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1612C226-E271-4CFE-9F18-4066D******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetChatappPhoneNumberMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappPhoneNumberMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChatappPhoneNumberMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChatappPhoneNumberMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code. This parameter is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en_US
   */
  language?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * ****4b5c79c9432497a075bdfca36bf5
   */
  templateCode?: string;
  /**
   * @remarks
   * Name of a template.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message template. Valid values:
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE (developing)
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access denied details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   Example: OK. This value indicates that the request is successful.
   * *   Other codes indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * { 		"category": "ACCOUNT_UPDATE", 		"name": "account_notice", 		"language": "en_US", 		"templateCode": "744c4b5c79c9432497a075bdfca3****", 		"auditStatus": "APPROVED", 		"components": "[{\\"type\\":\\"BODY\\",\\"text\\":\\"body_text$(textVariable)\\"},{\\"type\\":\\"HEADER\\",\\"formate\\":\\"IMAGE\\",\\"url\\":\\"$(linkVariable)\\"},{\\"type\\":\\"FOOTER\\",\\"text\\":\\"footer-text\\"},{\\"type\\":\\"BUTTONS\\",\\"buttons\\":[{\\"type\\":\\"PHONE_NUMBER\\",\\"text\\":\\"phone-button-text\\",\\"phone_number\\":\\"+861388888****\\"},{\\"type\\":\\"URL\\",\\"text\\":\\"url-button-text\\",\\"url\\":\\"https://www.website.com/\\"}]}]", 		"example": "{\\"textVariable\\": \\"text\\", \\"linkVariable\\": \\"link\\"}" 	}
   */
  data?: GetChatappTemplateDetailResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChatappTemplateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetChatappTemplateMetricRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693407714687
   */
  end?: number;
  /**
   * @remarks
   * The granularity of the metric.
   * 
   * Valid values:
   * 
   * *   DAILY
   * *   HALF_HOUR
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693107714687
   */
  start?: number;
  /**
   * @remarks
   * The template code.
   * 
   * This parameter is required.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca36bf5
   */
  templateCode?: string;
  /**
   * @remarks
   * The template type. If you do not specify this parameter, the default value WHATSAPP is used.
   * 
   * Valid values:
   * 
   * *   VIBER
   * *   WHATSAPP
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      end: 'End',
      granularity: 'Granularity',
      isvCode: 'IsvCode',
      language: 'Language',
      start: 'Start',
      templateCode: 'TemplateCode',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      end: 'number',
      granularity: 'string',
      isvCode: 'string',
      language: 'string',
      start: 'number',
      templateCode: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateMetricResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The value OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetChatappTemplateMetricResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetChatappTemplateMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChatappTemplateMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChatappTemplateMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappUploadAuthorizationRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappUploadAuthorizationResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access denied for detailed information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetChatappUploadAuthorizationResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetChatappUploadAuthorizationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappUploadAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChatappUploadAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChatappUploadAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappVerifyCodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-kei****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh_CN
   */
  locale?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sms
   */
  method?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8613800000000
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      locale: 'Locale',
      method: 'Method',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      locale: 'string',
      method: 'string',
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

export class GetChatappVerifyCodeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1612C226-E271-4CFE-9F18-4066D550F91B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class GetChatappVerifyCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChatappVerifyCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChatappVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommerceSettingRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1380000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
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

export class GetCommerceSettingResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access denied for detailed information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetCommerceSettingResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetCommerceSettingResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommerceSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCommerceSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCommerceSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationalAutomationRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account or the instance ID of the customer of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-3ie***
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the enterprise.
   * 
   * This parameter is required.
   * 
   * @example
   * 86130000***
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
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

export class GetConversationalAutomationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetConversationalAutomationResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetConversationalAutomationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationalAutomationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConversationalAutomationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConversationalAutomationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 99384883
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFlowResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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
      data: GetFlowResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowJSONAssestRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 83883873
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowJSONAssestResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFlowJSONAssestResponseBodyData;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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
      data: GetFlowJSONAssestResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowJSONAssestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFlowJSONAssestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFlowJSONAssestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowPreviewUrlRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 939399383
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowPreviewUrlResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFlowPreviewUrlResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
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
      data: GetFlowPreviewUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowPreviewUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFlowPreviewUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFlowPreviewUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationVerifyCodeRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user under the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The language.
   * 
   * This parameter is required.
   * 
   * @example
   * zh_CN
   */
  locale?: string;
  /**
   * @remarks
   * The method to obtain the verification code. Valid values: SMS and VOICE.
   * 
   * This parameter is required.
   * 
   * @example
   * sms
   */
  method?: string;
  /**
   * @remarks
   * Phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      locale: 'Locale',
      method: 'Method',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      locale: 'string',
      method: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationVerifyCodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetMigrationVerifyCodeResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetMigrationVerifyCodeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationVerifyCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMigrationVerifyCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMigrationVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionByCodeRequest extends $tea.Model {
  /**
   * @remarks
   * Authorize code information.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  code?: string;
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 393847477
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The permissions.
   */
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      permissions: 'Permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      custSpaceId: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionByCodeShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Authorize code information.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  code?: string;
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 393847477
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The permissions.
   */
  permissionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      permissionsShrink: 'Permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      custSpaceId: 'string',
      permissionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionByCodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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

export class GetPermissionByCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPermissionByCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPermissionByCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneEncryptionPublicKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user under the independent software vendor (ISV) account.
   * 
   * @example
   * 393838848
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneEncryptionPublicKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPhoneEncryptionPublicKeyResponseBodyData;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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
      data: GetPhoneEncryptionPublicKeyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneEncryptionPublicKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhoneEncryptionPublicKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPhoneEncryptionPublicKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberVerificationStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user under the ISV account.
   * 
   * This parameter is required.
   * 
   * @example
   * 229393838****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613900001234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberVerificationStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetPhoneNumberVerificationStatusResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2D
   */
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
      data: GetPhoneNumberVerificationStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberVerificationStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhoneNumberVerificationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPhoneNumberVerificationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreValidatePhoneIdRequest extends $tea.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The verification code provided when you purchased the pre-registered phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 208393
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreValidatePhoneIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [Error codes](https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPreValidatePhoneIdResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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
      data: GetPreValidatePhoneIdResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreValidatePhoneIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPreValidatePhoneIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPreValidatePhoneIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappConnectionCatalogRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * C2020939922929292
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The WABA ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 292939399393
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappConnectionCatalogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {"id":"200292992"}
   */
  model?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappConnectionCatalogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWhatsappConnectionCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWhatsappConnectionCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account or the instance ID of the customer of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 2993****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The node type.
   * 
   * Valid values:
   * 
   * *   template: message template
   * *   phone: phone number
   * *   waba: WhatsApp Business Account (WABA)
   * 
   * This parameter is required.
   * 
   * @example
   * waba
   */
  nodeType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the enterprise.
   * 
   * @example
   * 86138***
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 399299***
   */
  templateCode?: string;
  /**
   * @remarks
   * WabaId
   * 
   * @example
   * 299399****
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      language: 'Language',
      nodeType: 'NodeType',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      language: 'string',
      nodeType: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
      wabaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetWhatsappHealthStatusResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DAC72B08-3327-33EF-BEDC-8EC3E83A6575
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetWhatsappHealthStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWhatsappHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWhatsappHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvGetAppIdRequest extends $tea.Model {
  /**
   * @remarks
   * The permission.
   * 
   * Valid values:
   * 
   * *   whatsapp_business_messaging: sending permission on WhatsApp messages
   * *   ads_management: management permission on advertisements
   * *   catalog_management: management permission on catalogs
   * 
   * @example
   * catalog_management
   */
  permissions?: string;
  /**
   * @remarks
   * The type of the app. Valid value: WHATSAPP.
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvGetAppIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 23hr3v
   */
  appId?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the configuration item.
   * 
   * @example
   * 28972951817****
   */
  configId?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      appId: 'AppId',
      code: 'Code',
      configId: 'ConfigId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      appId: 'string',
      code: 'string',
      configId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvGetAppIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IsvGetAppIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IsvGetAppIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The review status of the message template. Valid values:
   * 
   * *   **pass**: The message template is approved.
   * *   **fail**: The message template is rejected.
   * *   **auditing**: The message template is being reviewed.
   * *   **unaudit**: The review is suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * Template encoding.
   * 
   * @example
   * 838888822*****
   */
  code?: string;
  /**
   * @remarks
   * The space ID of the user under the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  /**
   * @remarks
   * The pagination settings.
   * 
   * @example
   * "page": "{\\"index\\": 1,\\"size\\": 20}
   */
  page?: ListChatappTemplateRequestPage;
  /**
   * @remarks
   * The type of the message template.
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE: the Line message template. This type of message template will be released later.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      name: 'Name',
      page: 'Page',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      code: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      name: 'string',
      page: ListChatappTemplateRequestPage,
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The review status of the message template. Valid values:
   * 
   * *   **pass**: The message template is approved.
   * *   **fail**: The message template is rejected.
   * *   **auditing**: The message template is being reviewed.
   * *   **unaudit**: The review is suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * Template encoding.
   * 
   * @example
   * 838888822*****
   */
  code?: string;
  /**
   * @remarks
   * The space ID of the user under the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  /**
   * @remarks
   * The pagination settings.
   * 
   * @example
   * "page": "{\\"index\\": 1,\\"size\\": 20}
   */
  pageShrink?: string;
  /**
   * @remarks
   * The type of the message template.
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE: the Line message template. This type of message template will be released later.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      name: 'Name',
      pageShrink: 'Page',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      code: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      name: 'string',
      pageShrink: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of the templates.
   */
  listTemplate?: ListChatappTemplateResponseBodyListTemplate[];
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      listTemplate: 'ListTemplate',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      listTemplate: { 'type': 'array', 'itemType': ListChatappTemplateResponseBodyListTemplate },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 99948484
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The name of the Flow that you want to query. If FlowName is left empty, the information about all Flows is queried.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  /**
   * @remarks
   * The returned pages.
   */
  page?: ListFlowRequestPage;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowName: 'FlowName',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowName: 'string',
      page: ListFlowRequestPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 99948484
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The name of the Flow that you want to query. If FlowName is left empty, the information about all Flows is queried.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  /**
   * @remarks
   * The returned pages.
   */
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowName: 'FlowName',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowName: 'string',
      pageShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListFlowResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1612C226-E271-4CFE-9F18-4066D550F91B
   */
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
      data: { 'type': 'array', 'itemType': ListFlowResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneMessageQrdlRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 9383883
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number. Add the country code before the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneMessageQrdlResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListPhoneMessageQrdlResponseBodyData[];
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
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
      data: { 'type': 'array', 'itemType': ListPhoneMessageQrdlResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneMessageQrdlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPhoneMessageQrdlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPhoneMessageQrdlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductRequest extends $tea.Model {
  /**
   * @remarks
   * The cursor that points to the end of the page of the returned data.
   * 
   * @example
   * kdkii48jfjjei3
   */
  after?: string;
  /**
   * @remarks
   * The cursor that points to the beginning of the page of the returned data.
   * 
   * @example
   * wiidkd939kek93
   */
  before?: string;
  /**
   * @remarks
   * The catalog ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 29398389292
   */
  catalogId?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * C29398388383
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The fields. Separate multiple fields with commas (,).
   * 
   *  see [product fields](https://help.aliyun.com/document_detail/2579419.html)
   * 
   * @example
   * id,name
   */
  fields?: string;
  /**
   * @remarks
   * The number of products to be queried. Valid values: 1 to 1000.
   * 
   * @example
   * 73
   */
  limit?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the WhatsApp Business account (WABA).
   * 
   * This parameter is required.
   * 
   * @example
   * 38487474747
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      before: 'Before',
      catalogId: 'CatalogId',
      custSpaceId: 'CustSpaceId',
      fields: 'Fields',
      limit: 'Limit',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      before: 'string',
      catalogId: 'string',
      custSpaceId: 'string',
      fields: 'string',
      limit: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: ListProductResponseBodyModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: ListProductResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductCatalogRequest extends $tea.Model {
  /**
   * @remarks
   * The cursor that points to the end of the page of the returned data.
   * 
   * @example
   * kdkii48jfjjei3
   */
  after?: string;
  /**
   * @remarks
   * The cursor that points to the beginning of the page of the returned data.
   * 
   * @example
   * wiidkd939kek93
   */
  before?: string;
  /**
   * @remarks
   * The Business Manager ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 28
   */
  businessId?: number;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The fields. Separate multiple fields with commas (,).
   * see  [catalog fields](https://help.aliyun.com/document_detail/2579419.html)
   * 
   * @example
   * id,name
   */
  fields?: string;
  /**
   * @remarks
   * The number of catalogs to be queried. Valid values: 1 to 1000.
   * 
   * @example
   * 73
   */
  limit?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      before: 'Before',
      businessId: 'BusinessId',
      custSpaceId: 'CustSpaceId',
      fields: 'Fields',
      limit: 'Limit',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      before: 'string',
      businessId: 'number',
      custSpaceId: 'string',
      fields: 'string',
      limit: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductCatalogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: ListProductCatalogResponseBodyModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: ListProductCatalogResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductCatalogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The category of the Viber message template. Valid values:
   * 
   * *   **text**: the template that contains only text
   * *   **image**: the template that contains only images
   * *   **text_image_button**: the template that contains text, images, and buttons
   * *   **text_button**: the template that contains text and buttons
   * *   **document**: the template that contains only documents
   * *   **video**: the template that contains only videos
   * *   **text_video**: the template that contains text and videos
   * *   **text_video_button**: the template that contains text, videos, and buttons
   * *   **text_image**: the template that contains text and images
   * 
   * > This parameter applies only to Viber message templates.
   * 
   * @example
   * text
   */
  category?: string;
  /**
   * @remarks
   * The components of the message template.
   * 
   * >  If Category is set to AUTHENTICATION, the Type sub-parameter of the Components parameter cannot be set to HEADER. If the Type sub-parameter is set to BODY or FOOTER, you do not need to set the Text sub-parameter of the Components parameter because the value is automatically generated.
   * 
   * This parameter is required.
   */
  components?: ModifyChatappTemplateRequestComponents[];
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * > CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 659216218162179
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The examples of variables that are used when you create the message template.
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Validity period of authentication template message sending in WhatsApp
   * 
   * >This attribute requires providing waba in advance to Alibaba operators to open the whitelist, otherwise it will result in template submission failure
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The message template code.
   * 
   * @example
   * 8472929283883
   */
  templateCode?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message template.
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE: the Line message template. This type of message template will be released later.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      components: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      example: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      components: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponents },
      custSpaceId: 'string',
      custWabaId: 'string',
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The category of the Viber message template. Valid values:
   * 
   * *   **text**: the template that contains only text
   * *   **image**: the template that contains only images
   * *   **text_image_button**: the template that contains text, images, and buttons
   * *   **text_button**: the template that contains text and buttons
   * *   **document**: the template that contains only documents
   * *   **video**: the template that contains only videos
   * *   **text_video**: the template that contains text and videos
   * *   **text_video_button**: the template that contains text, videos, and buttons
   * *   **text_image**: the template that contains text and images
   * 
   * > This parameter applies only to Viber message templates.
   * 
   * @example
   * text
   */
  category?: string;
  /**
   * @remarks
   * The components of the message template.
   * 
   * >  If Category is set to AUTHENTICATION, the Type sub-parameter of the Components parameter cannot be set to HEADER. If the Type sub-parameter is set to BODY or FOOTER, you do not need to set the Text sub-parameter of the Components parameter because the value is automatically generated.
   * 
   * This parameter is required.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * > CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 659216218162179
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The examples of variables that are used when you create the message template.
   */
  exampleShrink?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Validity period of authentication template message sending in WhatsApp
   * 
   * >This attribute requires providing waba in advance to Alibaba operators to open the whitelist, otherwise it will result in template submission failure
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The message template code.
   * 
   * @example
   * 8472929283883
   */
  templateCode?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message template.
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE: the Line message template. This type of message template will be released later.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      componentsShrink: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      exampleShrink: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      componentsShrink: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      exampleShrink: 'string',
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyChatappTemplateResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * NONE
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyChatappTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the categories of the Flow.
   * 
   * This parameter is required.
   */
  categories?: string[];
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 9493884
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 2938838
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the Flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      custSpaceId: 'string',
      flowId: 'string',
      flowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the categories of the Flow.
   * 
   * This parameter is required.
   */
  categoriesShrink?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 9493884
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 2938838
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the Flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'Categories',
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      custSpaceId: 'string',
      flowId: 'string',
      flowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ModifyFlowResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1612C226-E271-4CFE-9F18-4066D******
   */
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
      data: ModifyFlowResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneBusinessProfileRequest extends $tea.Model {
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * business profile
   */
  about?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * The phone number.
   */
  address?: string;
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The description of the phone number.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * aa@aliyun.com
   */
  email?: string;
  ownerId?: number;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * @example
   * http://a.img
   */
  profilePictureUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The industry.
   * 
   * >  Valid values: OTHER, AUTO, BEAUTY, APPAREL, EDU, ENTERTAIN, EVENT_PLAN, FINANCE, GROCERY, GOVT, HOTEL, HEALTH, NONPROFIT, PROF_SERVICES, RETAIL, TRAVEL, and RESTAURANT.
   * 
   * @example
   * OTHER
   */
  vertical?: string;
  /**
   * @remarks
   * The URLs of the websites.
   */
  websites?: string[];
  static names(): { [key: string]: string } {
    return {
      about: 'About',
      address: 'Address',
      custSpaceId: 'CustSpaceId',
      description: 'Description',
      email: 'Email',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      profilePictureUrl: 'ProfilePictureUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vertical: 'Vertical',
      websites: 'Websites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      about: 'string',
      address: 'string',
      custSpaceId: 'string',
      description: 'string',
      email: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      profilePictureUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vertical: 'string',
      websites: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneBusinessProfileShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * business profile
   */
  about?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * The phone number.
   */
  address?: string;
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The description of the phone number.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * aa@aliyun.com
   */
  email?: string;
  ownerId?: number;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * @example
   * http://a.img
   */
  profilePictureUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The industry.
   * 
   * >  Valid values: OTHER, AUTO, BEAUTY, APPAREL, EDU, ENTERTAIN, EVENT_PLAN, FINANCE, GROCERY, GOVT, HOTEL, HEALTH, NONPROFIT, PROF_SERVICES, RETAIL, TRAVEL, and RESTAURANT.
   * 
   * @example
   * OTHER
   */
  vertical?: string;
  /**
   * @remarks
   * The URLs of the websites.
   */
  websitesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      about: 'About',
      address: 'Address',
      custSpaceId: 'CustSpaceId',
      description: 'Description',
      email: 'Email',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      profilePictureUrl: 'ProfilePictureUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vertical: 'Vertical',
      websitesShrink: 'Websites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      about: 'string',
      address: 'string',
      custSpaceId: 'string',
      description: 'string',
      email: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      profilePictureUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vertical: 'string',
      websitesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneBusinessProfileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The URL of the website.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The websites.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class ModifyPhoneBusinessProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPhoneBusinessProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPhoneBusinessProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * If OK is returned, the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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

export class PublishFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappBindWabaRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user under the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * aksik93kdkkxmwol93939
   */
  isvCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      isvCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappBindWabaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryChatappBindWabaResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryChatappBindWabaResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappBindWabaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryChatappBindWabaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryChatappBindWabaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * aksik93kdkkxmwol93939
   */
  isvCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The state of the phone number.
   * 
   * @example
   * VERIFIED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      isvCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The phone numbers.
   */
  phoneNumbers?: QueryChatappPhoneNumbersResponseBodyPhoneNumbers[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      phoneNumbers: 'PhoneNumbers',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      phoneNumbers: { 'type': 'array', 'itemType': QueryChatappPhoneNumbersResponseBodyPhoneNumbers },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryChatappPhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryChatappPhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneBusinessProfileRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 2934839388494***
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
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

export class QueryPhoneBusinessProfileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryPhoneBusinessProfileResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryPhoneBusinessProfileResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneBusinessProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPhoneBusinessProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPhoneBusinessProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWabaBusinessInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the WhatsApp Business Account (WABA).
   * 
   * This parameter is required.
   * 
   * @example
   * 293848822333
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWabaBusinessInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The business information about the WABA.
   */
  data?: QueryWabaBusinessInfoResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryWabaBusinessInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWabaBusinessInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWabaBusinessInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWabaBusinessInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the channel. Valid values:
   * 
   * *   **whatsapp**
   * *   **viber**
   * *   **line** (under development)
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
   */
  channelType?: string;
  /**
   * @remarks
   * The space ID of the user.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The content of the fallback message.
   * 
   * @example
   * Fallback message
   */
  fallBackContent?: string;
  /**
   * @remarks
   * Specifies the period of time after which the fallback message is sent if the message receipt that indicates the message is delivered to clients is not received. If this parameter is left empty, the fallback message is sent only when the message fails to be sent or the message receipt that indicates the message is not delivered to clients is received. Unit: seconds. Valid values: 60 to 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The ID of the fallback policy.
   * 
   * @example
   * S00001
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. Valid values:
   * 
   * *   **undelivered**: A fallback is triggered if the message is not delivered to clients. When the message is being sent, the template parameters are verified. If the parameters fail to pass the verification, the message fails to be sent. Whether the template and phone number are prohibited is not verified. By default, this value is used when FallBackRule is left empty.
   * *   **sentFailed**: A fallback is triggered even if the template parameters including variables fail to pass the verification. If the channelType, type, messageType, to, and from parameters fail to pass the verification, a fallback is not triggered.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The mobile phone number of the message sender.
   * 
   * This parameter is required.
   * 
   * @example
   * 861387777****
   */
  from?: string;
  /**
   * @remarks
   * The ISV verification code. This parameter is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The type of the Viber message. Valid values:
   * 
   * *   **promotion**
   * *   **transaction**
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The mobile phone numbers of the message receivers.
   * 
   * This parameter is required.
   */
  senderList?: SendChatappMassMessageRequestSenderList[];
  /**
   * @remarks
   * The tag information when the ChannelType parameter is set to viber.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 100000001
   */
  taskId?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca36bf5
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The timeout period for sending messages when the ChannelType parameter is set to viber. Valid values: 30 to 1209600. Unit: seconds.
   * 
   * @example
   * 50
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackDuration: 'FallBackDuration',
      fallBackId: 'FallBackId',
      fallBackRule: 'FallBackRule',
      from: 'From',
      isvCode: 'IsvCode',
      label: 'Label',
      language: 'Language',
      senderList: 'SenderList',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackDuration: 'number',
      fallBackId: 'string',
      fallBackRule: 'string',
      from: 'string',
      isvCode: 'string',
      label: 'string',
      language: 'string',
      senderList: { 'type': 'array', 'itemType': SendChatappMassMessageRequestSenderList },
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the channel. Valid values:
   * 
   * *   **whatsapp**
   * *   **viber**
   * *   **line** (under development)
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
   */
  channelType?: string;
  /**
   * @remarks
   * The space ID of the user.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The content of the fallback message.
   * 
   * @example
   * Fallback message
   */
  fallBackContent?: string;
  /**
   * @remarks
   * Specifies the period of time after which the fallback message is sent if the message receipt that indicates the message is delivered to clients is not received. If this parameter is left empty, the fallback message is sent only when the message fails to be sent or the message receipt that indicates the message is not delivered to clients is received. Unit: seconds. Valid values: 60 to 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The ID of the fallback policy.
   * 
   * @example
   * S00001
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. Valid values:
   * 
   * *   **undelivered**: A fallback is triggered if the message is not delivered to clients. When the message is being sent, the template parameters are verified. If the parameters fail to pass the verification, the message fails to be sent. Whether the template and phone number are prohibited is not verified. By default, this value is used when FallBackRule is left empty.
   * *   **sentFailed**: A fallback is triggered even if the template parameters including variables fail to pass the verification. If the channelType, type, messageType, to, and from parameters fail to pass the verification, a fallback is not triggered.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The mobile phone number of the message sender.
   * 
   * This parameter is required.
   * 
   * @example
   * 861387777****
   */
  from?: string;
  /**
   * @remarks
   * The ISV verification code. This parameter is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The type of the Viber message. Valid values:
   * 
   * *   **promotion**
   * *   **transaction**
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The mobile phone numbers of the message receivers.
   * 
   * This parameter is required.
   */
  senderListShrink?: string;
  /**
   * @remarks
   * The tag information when the ChannelType parameter is set to viber.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 100000001
   */
  taskId?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca36bf5
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The timeout period for sending messages when the ChannelType parameter is set to viber. Valid values: 30 to 1209600. Unit: seconds.
   * 
   * @example
   * 50
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackDuration: 'FallBackDuration',
      fallBackId: 'FallBackId',
      fallBackRule: 'FallBackRule',
      from: 'From',
      isvCode: 'IsvCode',
      label: 'Label',
      language: 'Language',
      senderListShrink: 'SenderList',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackDuration: 'number',
      fallBackId: 'string',
      fallBackRule: 'string',
      from: 'string',
      isvCode: 'string',
      label: 'string',
      language: 'string',
      senderListShrink: 'string',
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the message group.
   * 
   * @example
   * 890000010002****
   */
  groupMessageId?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      groupMessageId: 'GroupMessageId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendChatappMassMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * *   **whatsapp**
   * *   **viber**
   * *   **line** (under development)
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
   */
  channelType?: string;
  /**
   * @remarks
   * The message content.
   * 
   * **Notes on WhatsApp messages:**
   * 
   * *   If you set **messageType** to **text**, you must specify **text** and must not specify **Caption**.
   * *   If you set **messageType** to **image**, you must specify **Link**.
   * *   If you set **messageType** to **video**, you must specify **Link**.
   * *   If you set **messageType** to **audio**, **Link** is required and **Caption** is invalid.
   * *   If you set **messageType** to **document**, **Link** and **FileName** are required and **Caption** is invalid.
   * *   If you set **messageType** to **interactive**, you must specify **type** and **action**.
   * *   If you set **messageType** to **contacts**, you must specify **name**.
   * *   If you set **messageType** to **location**, you must specify **longitude** and **latitude**.
   * *   If you set **messageType** to **sticker**, you must specify **Link**, and **Caption** and **FileName** are invalid.
   * *   If you set **messageType** to **reaction**, you must specify **messageId** and **emoji**.
   * 
   * **Notes on Viber messages:**
   * 
   * *   If you set **messageType** to **text**, you must specify **text**.
   * *   If you set **messageType** to **image**, you must specify **link**.
   * *   If you set **messageType** to **video**, you must specify **link**, **thumbnail**, **fileSize**, and **duration**.
   * *   If you set **messageType** to **document**, you must specify **link**, **fileName**, and **fileType**.
   * *   If you set **messageType** to **text_button**, you must specify **text**, **caption**, and **action**.
   * *   If you set **messageType** to **text_image_button**, you must specify **text**, **link**, **caption**, and **action**.
   * *   If you set **messageType** to **text_video**, you must specify **text**, **link**, **thumbnail**, **fileSize**, and **duration**.
   * *   If you set **messageType** to **text_video_button**, you must specify **text**, **link**, **thumbnail**, **fileSize**, **duration**, and **caption**. In addition, you must not specify **action**.
   * 
   * @example
   * {\\"text\\": \\"hello whatsapp\\", \\"link\\": \\"\\", \\"caption\\": \\"\\", \\"fileName\\": \\"\\" }
   */
  content?: string;
  /**
   * @remarks
   * The ID of the reply message.
   * 
   * @example
   * 61851ccb2f1365b16aee****
   */
  contextMessageId?: string;
  /**
   * @remarks
   * The space ID of the user.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The content of the fallback message.
   * 
   * @example
   * This is a fallback message.
   */
  fallBackContent?: string;
  /**
   * @remarks
   * Specifies the period of time after which the fallback message is sent if the message receipt that indicates the message is delivered to clients is not received. If this parameter is left empty, the fallback message is sent only when the **message fails to be sent** or **the message receipt that indicates the message is not delivered to clients** is received. Unit: seconds. Valid values: 60 to 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The ID of the fallback policy. You can create a fallback policy and view the information in the Chat App Message Service console.
   * 
   * @example
   * S_000001
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. Valid values:
   * 
   * *   **undelivered**: A fallback is triggered if the message is not delivered to clients. When the message is being sent, the template parameters are verified. If the parameters fail to pass the verification, the message fails to be sent. Whether the template and phone number are prohibited is not verified. By default, this value is used when FallBackRule is left empty.
   * *   **sentFailed**: A fallback is triggered even if the template parameters including variables fail to pass the verification. If the channelType, type, messageType, to, and from parameters fail to pass the verification, a fallback is not triggered.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The Flow action.
   */
  flowAction?: SendChatappMessageRequestFlowAction;
  /**
   * @remarks
   * The mobile phone number of the message sender.
   * 
   * >  You can specify a mobile phone number that is registered for a WhatsApp account and is approved in the Chat App Message Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1360000****
   */
  from?: string;
  /**
   * @remarks
   * The ISV verification code. This parameter is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The type of the Viber message. This parameter is required if ChannelType is set to viber. Valid values:
   * 
   * *   **promotion**
   * *   **transaction**
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language that is used in the message template. This parameter is required only if you set the Type parameter to **template**. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The specific type of the message. This parameter is required only if you set the Type parameter to **message**.
   * 
   * **Valid values of MessageType when you set the ChannelType parameter to whatsapp:**
   * 
   * *   **text**: a text message.
   * *   **image**: an image message.
   * *   **video**: a video message.
   * *   **audio**: an audio message.
   * *   **document**: a document message.
   * *   **interactive**: an interactive message.
   * *   **contacts**: a contact message.
   * *   **location**: a location message.
   * *   **sticker**: a sticker message.
   * *   **reaction**: a reaction message.
   * 
   * **Valid values of MessageType when you set the ChannelType parameter to viber:**
   * 
   * *   **text**: a text message.
   * *   **image**: an image message.
   * *   **video**: a video message.
   * *   **document**: a document message.
   * *   **text_button**: a message that contains the text and button media objects.
   * *   **text_image_button**: a message that contains multiple media objects, including the text, image, and button.
   * *   **text_video**: a message that contains the text and video media objects.
   * *   **text_video_button**: a message that contains multiple media objects, including text, video, and button.
   * *   **text_image**: a message that contains the text and image media objects.
   * 
   * > For more information, see [Parameters of a message template](https://help.aliyun.com/document_detail/454530.html).
   * 
   * @example
   * text
   */
  messageType?: string;
  /**
   * @remarks
   * The payload of the button.
   * 
   * @example
   * payloadtext1,payloadtext2,payloadtext3
   */
  payload?: string[];
  /**
   * @remarks
   * The information about the products included in the WhatsApp catalog message or multi-product message (MPM).
   */
  productAction?: SendChatappMessageRequestProductAction;
  /**
   * @remarks
   * The tag information of the Viber message.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 100000001
   */
  taskId?: string;
  /**
   * @remarks
   * The code of the message template. This parameter is required only if you set the Type parameter to **template**.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The variables of the message template.
   */
  templateParams?: { [key: string]: string };
  /**
   * @remarks
   * The mobile phone number of the message receiver.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  to?: string;
  /**
   * @remarks
   * The tracking data of the Viber message.
   * 
   * @example
   * tracking_id:123456
   */
  trackingData?: string;
  /**
   * @remarks
   * The timeout period for sending the Viber message. Valid values: 30 to 1209600. Unit: seconds.
   * 
   * @example
   * 50
   */
  ttl?: number;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * *   **template**: the template message. A template message is sent based on a template that is created and approved in the Chat App Message Service console. You can send template messages based on your business requirements.
   * *   **message**: the custom message. You can send a custom WhatsApp message to a user only within 24 hours after you receive the last message from the user. This limit does not apply to custom Viber messages.
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      content: 'Content',
      contextMessageId: 'ContextMessageId',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackDuration: 'FallBackDuration',
      fallBackId: 'FallBackId',
      fallBackRule: 'FallBackRule',
      flowAction: 'FlowAction',
      from: 'From',
      isvCode: 'IsvCode',
      label: 'Label',
      language: 'Language',
      messageType: 'MessageType',
      payload: 'Payload',
      productAction: 'ProductAction',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateParams: 'TemplateParams',
      to: 'To',
      trackingData: 'TrackingData',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      content: 'string',
      contextMessageId: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackDuration: 'number',
      fallBackId: 'string',
      fallBackRule: 'string',
      flowAction: SendChatappMessageRequestFlowAction,
      from: 'string',
      isvCode: 'string',
      label: 'string',
      language: 'string',
      messageType: 'string',
      payload: { 'type': 'array', 'itemType': 'string' },
      productAction: SendChatappMessageRequestProductAction,
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      to: 'string',
      trackingData: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * *   **whatsapp**
   * *   **viber**
   * *   **line** (under development)
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
   */
  channelType?: string;
  /**
   * @remarks
   * The message content.
   * 
   * **Notes on WhatsApp messages:**
   * 
   * *   If you set **messageType** to **text**, you must specify **text** and must not specify **Caption**.
   * *   If you set **messageType** to **image**, you must specify **Link**.
   * *   If you set **messageType** to **video**, you must specify **Link**.
   * *   If you set **messageType** to **audio**, **Link** is required and **Caption** is invalid.
   * *   If you set **messageType** to **document**, **Link** and **FileName** are required and **Caption** is invalid.
   * *   If you set **messageType** to **interactive**, you must specify **type** and **action**.
   * *   If you set **messageType** to **contacts**, you must specify **name**.
   * *   If you set **messageType** to **location**, you must specify **longitude** and **latitude**.
   * *   If you set **messageType** to **sticker**, you must specify **Link**, and **Caption** and **FileName** are invalid.
   * *   If you set **messageType** to **reaction**, you must specify **messageId** and **emoji**.
   * 
   * **Notes on Viber messages:**
   * 
   * *   If you set **messageType** to **text**, you must specify **text**.
   * *   If you set **messageType** to **image**, you must specify **link**.
   * *   If you set **messageType** to **video**, you must specify **link**, **thumbnail**, **fileSize**, and **duration**.
   * *   If you set **messageType** to **document**, you must specify **link**, **fileName**, and **fileType**.
   * *   If you set **messageType** to **text_button**, you must specify **text**, **caption**, and **action**.
   * *   If you set **messageType** to **text_image_button**, you must specify **text**, **link**, **caption**, and **action**.
   * *   If you set **messageType** to **text_video**, you must specify **text**, **link**, **thumbnail**, **fileSize**, and **duration**.
   * *   If you set **messageType** to **text_video_button**, you must specify **text**, **link**, **thumbnail**, **fileSize**, **duration**, and **caption**. In addition, you must not specify **action**.
   * 
   * @example
   * {\\"text\\": \\"hello whatsapp\\", \\"link\\": \\"\\", \\"caption\\": \\"\\", \\"fileName\\": \\"\\" }
   */
  content?: string;
  /**
   * @remarks
   * The ID of the reply message.
   * 
   * @example
   * 61851ccb2f1365b16aee****
   */
  contextMessageId?: string;
  /**
   * @remarks
   * The space ID of the user.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The content of the fallback message.
   * 
   * @example
   * This is a fallback message.
   */
  fallBackContent?: string;
  /**
   * @remarks
   * Specifies the period of time after which the fallback message is sent if the message receipt that indicates the message is delivered to clients is not received. If this parameter is left empty, the fallback message is sent only when the **message fails to be sent** or **the message receipt that indicates the message is not delivered to clients** is received. Unit: seconds. Valid values: 60 to 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The ID of the fallback policy. You can create a fallback policy and view the information in the Chat App Message Service console.
   * 
   * @example
   * S_000001
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. Valid values:
   * 
   * *   **undelivered**: A fallback is triggered if the message is not delivered to clients. When the message is being sent, the template parameters are verified. If the parameters fail to pass the verification, the message fails to be sent. Whether the template and phone number are prohibited is not verified. By default, this value is used when FallBackRule is left empty.
   * *   **sentFailed**: A fallback is triggered even if the template parameters including variables fail to pass the verification. If the channelType, type, messageType, to, and from parameters fail to pass the verification, a fallback is not triggered.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The Flow action.
   */
  flowActionShrink?: string;
  /**
   * @remarks
   * The mobile phone number of the message sender.
   * 
   * >  You can specify a mobile phone number that is registered for a WhatsApp account and is approved in the Chat App Message Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1360000****
   */
  from?: string;
  /**
   * @remarks
   * The ISV verification code. This parameter is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The type of the Viber message. This parameter is required if ChannelType is set to viber. Valid values:
   * 
   * *   **promotion**
   * *   **transaction**
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language that is used in the message template. This parameter is required only if you set the Type parameter to **template**. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The specific type of the message. This parameter is required only if you set the Type parameter to **message**.
   * 
   * **Valid values of MessageType when you set the ChannelType parameter to whatsapp:**
   * 
   * *   **text**: a text message.
   * *   **image**: an image message.
   * *   **video**: a video message.
   * *   **audio**: an audio message.
   * *   **document**: a document message.
   * *   **interactive**: an interactive message.
   * *   **contacts**: a contact message.
   * *   **location**: a location message.
   * *   **sticker**: a sticker message.
   * *   **reaction**: a reaction message.
   * 
   * **Valid values of MessageType when you set the ChannelType parameter to viber:**
   * 
   * *   **text**: a text message.
   * *   **image**: an image message.
   * *   **video**: a video message.
   * *   **document**: a document message.
   * *   **text_button**: a message that contains the text and button media objects.
   * *   **text_image_button**: a message that contains multiple media objects, including the text, image, and button.
   * *   **text_video**: a message that contains the text and video media objects.
   * *   **text_video_button**: a message that contains multiple media objects, including text, video, and button.
   * *   **text_image**: a message that contains the text and image media objects.
   * 
   * > For more information, see [Parameters of a message template](https://help.aliyun.com/document_detail/454530.html).
   * 
   * @example
   * text
   */
  messageType?: string;
  /**
   * @remarks
   * The payload of the button.
   * 
   * @example
   * payloadtext1,payloadtext2,payloadtext3
   */
  payloadShrink?: string;
  /**
   * @remarks
   * The information about the products included in the WhatsApp catalog message or multi-product message (MPM).
   */
  productActionShrink?: string;
  /**
   * @remarks
   * The tag information of the Viber message.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 100000001
   */
  taskId?: string;
  /**
   * @remarks
   * The code of the message template. This parameter is required only if you set the Type parameter to **template**.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The variables of the message template.
   */
  templateParamsShrink?: string;
  /**
   * @remarks
   * The mobile phone number of the message receiver.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  to?: string;
  /**
   * @remarks
   * The tracking data of the Viber message.
   * 
   * @example
   * tracking_id:123456
   */
  trackingData?: string;
  /**
   * @remarks
   * The timeout period for sending the Viber message. Valid values: 30 to 1209600. Unit: seconds.
   * 
   * @example
   * 50
   */
  ttl?: number;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * *   **template**: the template message. A template message is sent based on a template that is created and approved in the Chat App Message Service console. You can send template messages based on your business requirements.
   * *   **message**: the custom message. You can send a custom WhatsApp message to a user only within 24 hours after you receive the last message from the user. This limit does not apply to custom Viber messages.
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      content: 'Content',
      contextMessageId: 'ContextMessageId',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackDuration: 'FallBackDuration',
      fallBackId: 'FallBackId',
      fallBackRule: 'FallBackRule',
      flowActionShrink: 'FlowAction',
      from: 'From',
      isvCode: 'IsvCode',
      label: 'Label',
      language: 'Language',
      messageType: 'MessageType',
      payloadShrink: 'Payload',
      productActionShrink: 'ProductAction',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateParamsShrink: 'TemplateParams',
      to: 'To',
      trackingData: 'TrackingData',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      content: 'string',
      contextMessageId: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackDuration: 'number',
      fallBackId: 'string',
      fallBackRule: 'string',
      flowActionShrink: 'string',
      from: 'string',
      isvCode: 'string',
      label: 'string',
      language: 'string',
      messageType: 'string',
      payloadShrink: 'string',
      productActionShrink: 'string',
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateParamsShrink: 'string',
      to: 'string',
      trackingData: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the message that was sent.
   * 
   * @example
   * 61851ccb2f1365b16aee****
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendChatappMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SubmitIsvCustomerTermsRequest extends $tea.Model {
  /**
   * @remarks
   * The business scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * Marketing products
   */
  businessDesc?: string;
  /**
   * @remarks
   * The enterprise mail.
   * 
   * This parameter is required.
   * 
   * @example
   * partner@aliyun.com
   */
  contactMail?: string;
  /**
   * @remarks
   * The country code.
   * 
   * >  For more information about country codes, see [Country codes](https://help.aliyun.com/document_detail/608210.html).
   * 
   * This parameter is required.
   * 
   * @example
   * CN
   */
  countryId?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  custName?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV or Client agreement.
   * 
   * This parameter is required.
   * 
   * @example
   * isvTerms.pdf
   */
  isvTerms?: string;
  /**
   * @remarks
   * The enterprise address.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  officeAddress?: string;
  static names(): { [key: string]: string } {
    return {
      businessDesc: 'BusinessDesc',
      contactMail: 'ContactMail',
      countryId: 'CountryId',
      custName: 'CustName',
      custSpaceId: 'CustSpaceId',
      isvTerms: 'IsvTerms',
      officeAddress: 'OfficeAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDesc: 'string',
      contactMail: 'string',
      countryId: 'string',
      custName: 'string',
      custSpaceId: 'string',
      isvTerms: 'string',
      officeAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIsvCustomerTermsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * /
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIsvCustomerTermsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitIsvCustomerTermsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitIsvCustomerTermsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerChatFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The declared occurrence time of the event, usually the time when the request was constructed, in milliseconds timestamp.
   * 
   * @example
   * 1731502129000
   */
  claimTimeMillis?: number;
  /**
   * @remarks
   * Input parameters in Key-Value format. The Key must match the input strategy configured at the start node of your flow.
   * 
   * @example
   * {"my_biz_data_0": "hi", "my_biz_data_1": "1024"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The time when the event should be discarded, i.e., the expiration time. If this field is specified, the message will be discarded if it exceeds this time, in milliseconds timestamp.
   * 
   * @example
   * 1731502729000
   */
  discardTimeMillis?: number;
  /**
   * @remarks
   * Flow code.
   * 
   * This parameter is required.
   * 
   * @example
   * f4912c16943b4dfba44bd6fedacf8c70
   */
  flowCode?: string;
  /**
   * @remarks
   * External system transaction number, used to associate with external business system transactions. You can retrieve this parameter within the flow after triggering.
   * 
   * @example
   * 8d4acf7e-e360-eb83-6d74-fcf9c4538fda
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Unique event ID used for idempotent triggers. Do not include any business semantics; you can retrieve this parameter within the flow after triggering.
   * 
   * @example
   * c68622e6-5f0d-c8a4-af41-e949c2a7580e
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      claimTimeMillis: 'ClaimTimeMillis',
      data: 'Data',
      discardTimeMillis: 'DiscardTimeMillis',
      flowCode: 'FlowCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimTimeMillis: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      discardTimeMillis: 'number',
      flowCode: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerChatFlowShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The declared occurrence time of the event, usually the time when the request was constructed, in milliseconds timestamp.
   * 
   * @example
   * 1731502129000
   */
  claimTimeMillis?: number;
  /**
   * @remarks
   * Input parameters in Key-Value format. The Key must match the input strategy configured at the start node of your flow.
   * 
   * @example
   * {"my_biz_data_0": "hi", "my_biz_data_1": "1024"}
   */
  dataShrink?: string;
  /**
   * @remarks
   * The time when the event should be discarded, i.e., the expiration time. If this field is specified, the message will be discarded if it exceeds this time, in milliseconds timestamp.
   * 
   * @example
   * 1731502729000
   */
  discardTimeMillis?: number;
  /**
   * @remarks
   * Flow code.
   * 
   * This parameter is required.
   * 
   * @example
   * f4912c16943b4dfba44bd6fedacf8c70
   */
  flowCode?: string;
  /**
   * @remarks
   * External system transaction number, used to associate with external business system transactions. You can retrieve this parameter within the flow after triggering.
   * 
   * @example
   * 8d4acf7e-e360-eb83-6d74-fcf9c4538fda
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Unique event ID used for idempotent triggers. Do not include any business semantics; you can retrieve this parameter within the flow after triggering.
   * 
   * @example
   * c68622e6-5f0d-c8a4-af41-e949c2a7580e
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      claimTimeMillis: 'ClaimTimeMillis',
      dataShrink: 'Data',
      discardTimeMillis: 'DiscardTimeMillis',
      flowCode: 'FlowCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimTimeMillis: 'number',
      dataShrink: 'string',
      discardTimeMillis: 'number',
      flowCode: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerChatFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details of access denial
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 无
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   * 
   * @example
   * {}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * Error description message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 无
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class TriggerChatFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerChatFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerChatFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountWebhookRequest extends $tea.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Specifies whether to use HTTP callbacks to receive message receipts. Valid values:
   * 
   * *   Y: indicates that HTTP callbacks are used to receive receipts.
   * *   N: indicates that HTTP callbacks are not used to receive receipts.
   * 
   * @example
   * Y
   */
  httpFlag?: string;
  /**
   * @remarks
   * Specifies whether to use Message Service (MNS) queues to receive receipts. Valid values:
   * 
   * *   Y: indicates that MNS queues are used to receive receipts.
   * *   N: indicates that MNS queues are not used to receive receipts.
   * 
   * @example
   * N
   */
  queueFlag?: string;
  /**
   * @remarks
   * The callback URL to which status reports are sent by using HTTP callbacks.
   * 
   * @example
   * http://www.aliyun.com
   */
  statusCallbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      httpFlag: 'HttpFlag',
      queueFlag: 'QueueFlag',
      statusCallbackUrl: 'StatusCallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      httpFlag: 'string',
      queueFlag: 'string',
      statusCallbackUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountWebhookResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountWebhookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAccountWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAccountWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommerceSettingRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to display the shopping cart button. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  cartEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to display the catalog button. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  catalogVisible?: boolean;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1380000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cartEnable: 'CartEnable',
      catalogVisible: 'CatalogVisible',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cartEnable: 'boolean',
      catalogVisible: 'boolean',
      custSpaceId: 'string',
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

export class UpdateCommerceSettingResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class UpdateCommerceSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCommerceSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCommerceSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConversationalAutomationRequest extends $tea.Model {
  /**
   * @remarks
   * The commands.
   */
  commands?: UpdateConversationalAutomationRequestCommands[];
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account or the instance ID of the customer of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 2993****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the welcoming message.
   * 
   * @example
   * true
   */
  enableWelcomeMessage?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the enterprise.
   * 
   * This parameter is required.
   * 
   * @example
   * 86130000***
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The opening remarks.
   */
  prompts?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      custSpaceId: 'CustSpaceId',
      enableWelcomeMessage: 'EnableWelcomeMessage',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      prompts: 'Prompts',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': UpdateConversationalAutomationRequestCommands },
      custSpaceId: 'string',
      enableWelcomeMessage: 'boolean',
      ownerId: 'number',
      phoneNumber: 'string',
      prompts: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConversationalAutomationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The commands.
   */
  commandsShrink?: string;
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account or the instance ID of the customer of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 2993****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the welcoming message.
   * 
   * @example
   * true
   */
  enableWelcomeMessage?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the enterprise.
   * 
   * This parameter is required.
   * 
   * @example
   * 86130000***
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The opening remarks.
   */
  promptsShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      commandsShrink: 'Commands',
      custSpaceId: 'CustSpaceId',
      enableWelcomeMessage: 'EnableWelcomeMessage',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      promptsShrink: 'Prompts',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandsShrink: 'string',
      custSpaceId: 'string',
      enableWelcomeMessage: 'boolean',
      ownerId: 'number',
      phoneNumber: 'string',
      promptsShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConversationalAutomationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

export class UpdateConversationalAutomationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConversationalAutomationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConversationalAutomationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowJSONAssetRequest extends $tea.Model {
  /**
   * @remarks
   * SpaceId/instance ID of ISV sub customer.
   * 
   * @example
   * 9399393
   */
  custSpaceId?: string;
  /**
   * @remarks
   * JSON file generated according to Facebook flow rules.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun/json.json
   */
  filePath?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      filePath: 'FilePath',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      filePath: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowJSONAssetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The result returns OK as normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateFlowJSONAssetResponseBodyData;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
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
      data: UpdateFlowJSONAssetResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowJSONAssetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFlowJSONAssetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFlowJSONAssetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneEncryptionPublicKeyRequest extends $tea.Model {
  /**
   * @remarks
   * SpaceId/instanceId of ISV sub clients.
   * 
   * @example
   * 399382882
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Encrypt the public key.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN PUBLIC KEY-----
   * AAA
   * BBB
   * CCC
   * DDD
   * EEE
   * FFF
   * GGG
   * -----END PUBLIC KEY-----
   */
  encryptionPublicKey?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 86138000
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      encryptionPublicKey: 'EncryptionPublicKey',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      encryptionPublicKey: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneEncryptionPublicKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The result returns OK as normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
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

export class UpdatePhoneEncryptionPublicKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePhoneEncryptionPublicKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePhoneEncryptionPublicKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneMessageQrdlRequest extends $tea.Model {
  /**
   * @remarks
   * SpaceId/instance ID of ISV sub customer.
   * 
   * @example
   * 9383884
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Produce QR code image format.
   * 
   * This parameter is required.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  /**
   * @remarks
   * Number, enter the country/region code+number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Message content.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  /**
   * @remarks
   * QR code encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * 29338838
   */
  qrdlCode?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      generateQrImage: 'GenerateQrImage',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
      qrdlCode: 'QrdlCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      generateQrImage: 'string',
      phoneNumber: 'string',
      prefilledMessage: 'string',
      qrdlCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneMessageQrdlResponseBody extends $tea.Model {
  /**
   * @remarks
   * The result returns OK as normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdatePhoneMessageQrdlResponseBodyData;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1612C226-E271-4CFE-9F18-4066D******
   */
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
      data: UpdatePhoneMessageQrdlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneMessageQrdlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePhoneMessageQrdlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePhoneMessageQrdlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneWebhookRequest extends $tea.Model {
  /**
   * @remarks
   * SpaceId for ISV sub clients.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Whether to use HTTP to receive receipts. Value:
   * *   Y: Yes.
   * *   N: No.
   * 
   * @example
   * Y
   */
  httpFlag?: string;
  /**
   * @remarks
   * phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Whether to use queue method to receive receipts. Value:
   * *   Y: Yes.
   * *   N: No.
   * 
   * @example
   * N
   */
  queueFlag?: string;
  /**
   * @remarks
   * HTTP status report interface callback address.
   * 
   * @example
   * http://www.aliyun.com
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * HTTP upstream message interface callback address.
   * 
   * @example
   * http://aliyun.com
   */
  upCallbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      httpFlag: 'HttpFlag',
      phoneNumber: 'PhoneNumber',
      queueFlag: 'QueueFlag',
      statusCallbackUrl: 'StatusCallbackUrl',
      upCallbackUrl: 'UpCallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      httpFlag: 'string',
      phoneNumber: 'string',
      queueFlag: 'string',
      statusCallbackUrl: 'string',
      upCallbackUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneWebhookResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access denied for detailed information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Prompt message, there is a value when an exception is returned.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneWebhookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePhoneWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePhoneWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeeBotAssociateResponseBodyDataAssociate extends $tea.Model {
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  meta?: string;
  /**
   * @remarks
   * The title of the related question.
   * 
   * @example
   * Policy on Withdrawal of Housing Provident Fund
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

export class BeeBotAssociateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The list of associated recommendations.
   */
  associate?: BeeBotAssociateResponseBodyDataAssociate[];
  /**
   * @remarks
   * The ID of the response message.
   * 
   * @example
   * 1eb47d7a1706429081e90c83c62c2f00
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * @example
   * 93f11165a2a24289a6f869760e8cb3f3
   */
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
  /**
   * @remarks
   * The ID of knowledge associated with knowledge.
   * 
   * @example
   * 735899
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The title of related knowledge.
   * 
   * @example
   * Withdrawal of housing provident fund.
   */
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
  /**
   * @remarks
   * Distinguish answer types.
   * 
   * @example
   * KnowledgeBase
   */
  answerSource?: string;
  /**
   * @remarks
   * Knowledge category.
   * 
   * @example
   * provident fund.
   */
  category?: string;
  /**
   * @remarks
   * Hit the content of the problem.
   * 
   * @example
   * Provident fund withdrawal, please search for provident fund withdrawal on the homepage and submit the form for handling the matter.
   */
  content?: string;
  /**
   * @remarks
   * Indication of plain/rich text answers.
   * 
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * Hit statement.
   * 
   * @example
   * provident fund
   */
  hitStatement?: string;
  /**
   * @remarks
   * The ID of the hit problem in the knowledge base.
   * 
   * @example
   * 735898
   */
  id?: string;
  /**
   * @remarks
   * Related knowledge list.
   */
  relatedKnowledges?: BeeBotChatResponseBodyDataMessagesKnowledgeRelatedKnowledges[];
  /**
   * @remarks
   * Introduction to hit problems.
   * 
   * @example
   * Withdrawal of housing provident fund
   */
  summary?: string;
  /**
   * @remarks
   * Hit the title of the problem.
   * 
   * @example
   * Withdrawal of housing provident fund.
   */
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
  /**
   * @remarks
   * Clarify the identification of the source.
   * 
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @remarks
   * Clarify the knowledge ID.
   * 
   * @example
   * 4548
   */
  knowledgeId?: string;
  /**
   * @remarks
   * Clarify the content, which may be the entities of graph Q&A, the knowledge titles of knowledge Q&A, or the column values of table Q&A.
   * 
   * @example
   * Test plain text.
   */
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
  /**
   * @remarks
   * Whether it hits.
   * 
   * @example
   * false
   */
  hit?: boolean;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * Check weather intentions. city
   */
  name?: string;
  /**
   * @remarks
   * Original value.
   * 
   * @example
   * Beijing
   */
  origin?: string;
  /**
   * @remarks
   * Specific values.
   * 
   * @example
   * Beijing
   */
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
  /**
   * @remarks
   * Distinguish answer types.
   * 
   * @example
   * BotFramework
   */
  answerSource?: string;
  /**
   * @remarks
   * The content of the text message.
   * 
   * @example
   * May I ask where you want to check the weather?
   */
  content?: string;
  /**
   * @remarks
   * Indication of plain/rich text answers.
   * 
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the name of the dialogue unit.
   * 
   * @example
   * Example: Checking Weather
   */
  dialogName?: string;
  /**
   * @remarks
   * This field returns transparent parameters.
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns a transparent parameter.
   */
  externalFlags?: { [key: string]: any };
  /**
   * @remarks
   * Hit statement.
   * 
   * @example
   * Check the weather.
   */
  hitStatement?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the intent name.
   * 
   * @example
   * Check weather intention.
   */
  intentName?: string;
  /**
   * @remarks
   * Metadata.
   * 
   * @example
   * [[{\\"columnName\\":\\"name\\",\\"stringValue\\":\\"wangshanshan\\"}]]
   */
  metaData?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the node ID.
   * 
   * @example
   * 1410-c7a72a78.__city
   */
  nodeId?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the node name.
   * 
   * @example
   * Example: Checking Weather Check the weather and fill in the slots__ city
   */
  nodeName?: string;
  /**
   * @remarks
   * Slot information list.
   */
  slots?: BeeBotChatResponseBodyDataMessagesTextSlots[];
  /**
   * @remarks
   * Custom Chat Topic Title.
   * 
   * @example
   * greet.
   */
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
  /**
   * @remarks
   * When AnswerType is Recommended, this field indicates the source of the recommended answer.
   * 
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @remarks
   * The type of this message.
   * 
   * @example
   * Text
   */
  answerType?: string;
  /**
   * @remarks
   * When AnswerType is Knowledge, this field contains the Knowledge object returned by the robot.
   */
  knowledge?: BeeBotChatResponseBodyDataMessagesKnowledge;
  /**
   * @remarks
   * When AnswerType is Recommended, this field contains a list of Recommendations returned by the robot.
   */
  recommends?: BeeBotChatResponseBodyDataMessagesRecommends[];
  /**
   * @remarks
   * When AnswerType is Text, this field contains the Text object returned by the robot.
   */
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
  /**
   * @remarks
   * The ID of the recommended knowledge.
   * 
   * @example
   * ab6be8af-cee4-40c3-9919-2ac7461d7d98
   */
  messageId?: string;
  /**
   * @remarks
   * The source of the recommended answer. When AnswerType is set to Recommend, a value is returned for this parameter.
   */
  messages?: BeeBotChatResponseBodyDataMessages[];
  /**
   * @remarks
   * The source of the recommended answer.
   * 
   * @example
   * 1234
   */
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

export class ChatappBindWabaResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * C02029392939939
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ID of the WhatsApp Business Account (WABA).
   * 
   * @example
   * 2939828282
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      wabaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappEmbedSignUpResponseBodyWabas extends $tea.Model {
  /**
   * @remarks
   * The review state of the WABA.
   * 
   * @example
   * VERIFIED
   */
  accountReviewStatus?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the WABA.
   * 
   * @example
   * 2939933992*****
   */
  id?: string;
  /**
   * @remarks
   * The namespace of the message template.
   * 
   * @example
   * alals-lsslls-slslsos-slsl
   */
  messageTemplateNamespace?: string;
  /**
   * @remarks
   * The name of the WABA.
   * 
   * @example
   * Alibaba
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountReviewStatus: 'AccountReviewStatus',
      currency: 'Currency',
      id: 'Id',
      messageTemplateNamespace: 'MessageTemplateNamespace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountReviewStatus: 'string',
      currency: 'string',
      id: 'string',
      messageTemplateNamespace: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappMigrationVerifiedResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the phone number.
   * 
   * @example
   * 82828893332
   */
  id?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatappSyncPhoneNumberResponseBodyPhoneNumbers extends $tea.Model {
  /**
   * @remarks
   * The verification status.
   * 
   * @example
   * VERIFIED
   */
  codeVerificationStatus?: string;
  /**
   * @example
   * N
   */
  isOfficial?: string;
  /**
   * @remarks
   * The number of phone numbers to which messages can be sent in a day.
   * 
   * @example
   * TIER_10
   */
  messagingLimitTier?: string;
  /**
   * @remarks
   * The review status of the business display name.
   * 
   * @example
   * Approval
   */
  nameStatus?: string;
  /**
   * @remarks
   * The review status of the new business display name.
   * 
   * @example
   * Approval
   */
  newNameStatus?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The quality rating of the phone number. Valid values: GREEN, YELLOW, and RED.
   * 
   * @example
   * GREEN
   */
  qualityRating?: string;
  /**
   * @remarks
   * The status of the phone number.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The callback URL to which status reports are sent by using HTTP callbacks.
   * 
   * @example
   * https://www.alibaba.com/status
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * The status report queue.
   * 
   * @example
   * alicom-09399200-queue
   */
  statusQueue?: string;
  /**
   * @remarks
   * The callback URL to which MO messages are sent by using HTTP callbacks.
   * 
   * @example
   * https://www.alibaba.com/inbound
   */
  upCallbackUrl?: string;
  /**
   * @remarks
   * The mobile originated (MO) message queue.
   * 
   * @example
   * alicom-09399200-queue
   */
  upQueue?: string;
  /**
   * @remarks
   * The display name of the business to which the phone number belongs.
   * 
   * @example
   * Alibaba
   */
  verifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      codeVerificationStatus: 'CodeVerificationStatus',
      isOfficial: 'IsOfficial',
      messagingLimitTier: 'MessagingLimitTier',
      nameStatus: 'NameStatus',
      newNameStatus: 'NewNameStatus',
      phoneNumber: 'PhoneNumber',
      qualityRating: 'QualityRating',
      status: 'Status',
      statusCallbackUrl: 'StatusCallbackUrl',
      statusQueue: 'StatusQueue',
      upCallbackUrl: 'UpCallbackUrl',
      upQueue: 'UpQueue',
      verifiedName: 'VerifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVerificationStatus: 'string',
      isOfficial: 'string',
      messagingLimitTier: 'string',
      nameStatus: 'string',
      newNameStatus: 'string',
      phoneNumber: 'string',
      qualityRating: 'string',
      status: 'string',
      statusCallbackUrl: 'string',
      statusQueue: 'string',
      upCallbackUrl: 'string',
      upQueue: 'string',
      verifiedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappMigrationInitiateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the mobile number.
   * 
   * @example
   * 82828893332
   */
  id?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 8613900001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The state of the mobile number. Only MIGRATING may be returned, which indicates that the mobile number is being migrated.
   * 
   * @example
   * MIGRATING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phoneNumber: 'PhoneNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      phoneNumber: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateRequestComponentsButtonsSupportedApps extends $tea.Model {
  /**
   * @remarks
   * The name of the Android application package. This parameter is required if you create an Android application.
   * 
   * @example
   * com.kuaidian.waimaistaff
   */
  packageName?: string;
  /**
   * @remarks
   * WhatsApp template is required when Category is Authoritative and Button Type is ONE_TAP/ZERO-TAP, indicating the signature hash value of the WhatsApp application.
   * 
   * @example
   * ieid83kdiek
   */
  signatureHash?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      signatureHash: 'SignatureHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      signatureHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateRequestComponentsButtons extends $tea.Model {
  /**
   * @remarks
   * The text of the one-tap autofill button. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The coupon code. It can contain only letters and digits. You can set this parameter to a variable such as $(couponCode). Specify the value of couponCode when you send a message.
   * 
   * @example
   * 120293
   */
  couponCode?: string;
  /**
   * @remarks
   * The Flow action.
   * 
   * Valid values:
   * 
   * *   DATA_EXCHANGE
   * *   NAVIGATE
   * 
   * @example
   * NAVIGATE
   */
  flowAction?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 479884093605183
   */
  flowId?: string;
  /**
   * @remarks
   * The unsubscribe button. This parameter is valid if Category is set to MARKETING and the Type sub-parameter of the Buttons parameter is set to QUICK_REPLY for a WhatsApp message template. Marketing messages will not be sent to customers if you configure message sending in the Chat App Message Service console and the customers click this button.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The first screen in the Flow. This parameter is required if FlowAction is set to NAVIGATE.
   * 
   * @example
   * DETAILS
   */
  navigateScreen?: string;
  /**
   * @remarks
   * The app package name that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * com.demo
   * 
   * @deprecated
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number. This parameter is valid only when the Type sub-parameter of the Buttons parameter is set to **PHONE_NUMBER**.
   * 
   * @example
   * +861368897****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The app signing key hash that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * wi299382
   * 
   * @deprecated
   */
  signatureHash?: string;
  /**
   * @remarks
   * List of supported apps.
   */
  supportedApps?: CreateChatappTemplateRequestComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The display name of the button.
   * 
   * @example
   * Call Me
   */
  text?: string;
  /**
   * @remarks
   * The type of the button. Valid values:
   * 
   * *   **PHONE_NUMBER**: phone call button
   * *   **URL**: URL button
   * *   **QUICK_REPLY**: quick reply button
   * *   **COPY_CODE**: copy code button
   * *   **ONE_TAP**: one-tap autofill button if Category is set to AUTHENTICATION
   * 
   * > 
   * 
   * *   If Category is set to AUTHENTICATION for a WhatsApp message template, you can add only one button to the WhatsApp message template and you must set the Type sub-parameter of the Buttons parameter to COPY_CODE or ONE_TAP. If Type is set to COPY_CODE, the Text sub-parameter of the Buttons parameter is required. If Type is set to ONE_TAP, the Text, SignatureHash, PackageName, and AutofillText sub-parameters of the Buttons parameter are required. The value of Text is displayed if the desired app is not installed on the device. The value of Text indicates that you must manually copy the verification code.
   * 
   * *   You can add only one button to a Viber message template, and you must set the Type sub-parameter of the Buttons parameter to URL.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to be accessed when you click the URL button.
   * 
   * @example
   * https://example.com
   */
  url?: string;
  /**
   * @remarks
   * The type of the URL. Valid values:
   * 
   * *   **static**
   * *   **dynamic**
   * 
   * @example
   * static
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      autofillText: 'AutofillText',
      couponCode: 'CouponCode',
      flowAction: 'FlowAction',
      flowId: 'FlowId',
      isOptOut: 'IsOptOut',
      navigateScreen: 'NavigateScreen',
      packageName: 'PackageName',
      phoneNumber: 'PhoneNumber',
      signatureHash: 'SignatureHash',
      supportedApps: 'SupportedApps',
      text: 'Text',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autofillText: 'string',
      couponCode: 'string',
      flowAction: 'string',
      flowId: 'string',
      isOptOut: 'boolean',
      navigateScreen: 'string',
      packageName: 'string',
      phoneNumber: 'string',
      signatureHash: 'string',
      supportedApps: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsButtonsSupportedApps },
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

export class CreateChatappTemplateRequestComponentsCardsCardComponentsButtons extends $tea.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +8613800
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The text of the button.
   * 
   * @example
   * Call me
   */
  text?: string;
  /**
   * @remarks
   * The type of the button. Valid values:
   * 
   * *   **PHONE_NUMBER**: phone call button
   * *   **URL**: URL button
   * *   **QUICK_REPLY**: quick reply button
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to which you are redirected when you click the URL button.
   * 
   * @example
   * https://alibaba.com/xx
   */
  url?: string;
  /**
   * @remarks
   * The type of the URL. Valid values:
   * 
   * *   **static**
   * *   **dynamic**
   * 
   * @example
   * static
   */
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

export class CreateChatappTemplateRequestComponentsCardsCardComponents extends $tea.Model {
  /**
   * @remarks
   * The buttons. Specify this parameter only if you set the Type sub-parameter of the CardComponents parameter to BUTTONS. A carousel card can contain up to two buttons.
   */
  buttons?: CreateChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The type of the media resource. This parameter is valid if the Type sub-parameter of the CardComponents parameter is set to HEADER. Valid values:
   * 
   * *   **IMAGE**
   * *   **VIDEO**
   * 
   * @example
   * IMAGE
   */
  format?: string;
  /**
   * @remarks
   * The body content of the carousel card.
   * 
   * @example
   * Who is the very powerful team
   */
  text?: string;
  /**
   * @remarks
   * The type of the component. Valid values:
   * 
   * *   **BODY**
   * *   **HEADER**
   * *   **BUTTONS**
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media resource.
   * 
   * @example
   * https://alibaba.com/img.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      format: 'Format',
      text: 'Text',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttons: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsCardsCardComponentsButtons },
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

export class CreateChatappTemplateRequestComponentsCards extends $tea.Model {
  /**
   * @remarks
   * The components of the carousel card.
   * 
   * This parameter is required.
   */
  cardComponents?: CreateChatappTemplateRequestComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsCardsCardComponents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateRequestComponents extends $tea.Model {
  /**
   * @remarks
   * The note indicating that customers cannot share verification codes with others. The note is displayed in the message body. This parameter is valid if Category is set to AUTHENTICATION and the Type sub-parameter of the Components parameter is set to BODY for a WhatsApp message template.
   * 
   * @example
   * true
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The buttons. Specify this parameter only if you set the Type sub-parameter of the Components parameter to **BUTTONS**.
   * 
   * >  ####
   * 
   * *   A marketing or utility WhatsApp message template can contain up to 10 buttons.
   * 
   * *   A WhatsApp message template can contain only one phone call button.
   * 
   * *   A WhatsApp message template can contain up to two URL buttons.
   * 
   * *   In a WhatsApp message template, a quick reply button cannot be used together with a phone call button or a URL button.
   */
  buttons?: CreateChatappTemplateRequestComponentsButtons[];
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * This is a video
   */
  caption?: string;
  /**
   * @remarks
   * The carousel cards of the carousel template.
   */
  cards?: CreateChatappTemplateRequestComponentsCards[];
  /**
   * @remarks
   * The validity period of the verification code in the WhatsApp authentication template. Unit: minutes. This parameter is valid only when Category is set to AUTHENTICATION and the Type sub-parameter of the Components parameter is set to FOOTER. The validity period of the verification code is displayed in the footer.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The length of the video in the Viber message template. Unit: seconds. Valid values: 0 to 600.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * video name
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the document attached in the Viber message template.
   * 
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @remarks
   * The type of the media resource. Valid values:
   * 
   * *   **TEXT**
   * *   **IMAGE**
   * *   **DOCUMENT**
   * *   **VIDEO**
   * 
   * @example
   * TEXT
   */
  format?: string;
  /**
   * @remarks
   * Specifies whether the coupon code has an expiration time. Specify this parameter if the Type sub-parameter of the Components parameter is set to LIMITED_TIME_OFFER.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
  /**
   * @remarks
   * The text of the message that you want to send.
   * 
   * >  If Category is set to AUTHENTICATION, the Text sub-parameter of the Components parameter must be empty.
   * 
   * @example
   * hello whatsapp
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail URL of the video in the Viber message template.
   * 
   * @example
   * https://cdn.multiplymall.mobiapp.cloud/yunmall/B-LM-LMALL202207130001/20220730/d712a057-a6af-4513-bbe6-7ee57ea60983.png?x-oss-process=image/resize,w_100
   */
  thumbUrl?: string;
  /**
   * @remarks
   * The type of the component. Valid values:
   * 
   * *   **BODY**
   * *   **HEADER**
   * *   **FOOTER**
   * *   **BUTTONS**
   * *   **CAROUSEL**
   * *   **LIMITED_TIME_OFFER**
   * 
   * > 
   * 
   * *   In a WhatsApp message template, a **Body** component cannot exceed 1,024 characters in length. A **HEADER** or **FOOTER** component cannot exceed 60 characters in length.
   * 
   * *   **FOOTER**, **CAROUSEL**, and **LIMITED_TIME_OFFER** components are not supported in Viber message templates.
   * 
   * *   In Viber message templates, media resources such as images, videos, and documents are placed in the **HEADER** component. If a Viber message contains text and an image, the image is placed below the text in the message received on a device.
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media resource.
   * 
   * >  We recommend that you use 800 × 800 images in Viber message templates.
   * 
   * @example
   * https://image.developer.aliyundoc.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      addSecretRecommendation: 'AddSecretRecommendation',
      buttons: 'Buttons',
      caption: 'Caption',
      cards: 'Cards',
      codeExpirationMinutes: 'CodeExpirationMinutes',
      duration: 'Duration',
      fileName: 'FileName',
      fileType: 'FileType',
      format: 'Format',
      hasExpiration: 'HasExpiration',
      text: 'Text',
      thumbUrl: 'ThumbUrl',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSecretRecommendation: 'boolean',
      buttons: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsButtons },
      caption: 'string',
      cards: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsCards },
      codeExpirationMinutes: 'number',
      duration: 'number',
      fileName: 'string',
      fileType: 'string',
      format: 'string',
      hasExpiration: 'boolean',
      text: 'string',
      thumbUrl: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatappTemplateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * SMS_232907****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
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

export class CreateFlowResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The categories of the Flow.
   */
  categories?: string[];
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 333993838***
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the Flow.
   * 
   * @example
   * test1
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      flowId: 'string',
      flowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhoneMessageQrdlResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The URL of the deep link.
   * 
   * @example
   * https://wa.qrdl/
   */
  deepLinkUrl?: string;
  /**
   * @remarks
   * The format of the generated image.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  /**
   * @remarks
   * The URL of the QR code.
   * 
   * @example
   * http://img.png
   */
  qrImageUrl?: string;
  /**
   * @remarks
   * The mode of the quick-response (QR) code.
   * 
   * @example
   * D9II3***
   */
  qrdlCode?: string;
  static names(): { [key: string]: string } {
    return {
      deepLinkUrl: 'DeepLinkUrl',
      generateQrImage: 'GenerateQrImage',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
      qrImageUrl: 'QrImageUrl',
      qrdlCode: 'QrdlCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deepLinkUrl: 'string',
      generateQrImage: 'string',
      phoneNumber: 'string',
      prefilledMessage: 'string',
      qrImageUrl: 'string',
      qrdlCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappPhoneNumberMetricResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of delivered messages.
   * 
   * @example
   * 5
   */
  deliveredCount?: number;
  /**
   * @remarks
   * The end of the time range that you queried.
   * 
   * @example
   * 1667196043904
   */
  end?: number;
  /**
   * @remarks
   * The granularity of the metric.
   * 
   * Valid values:
   * 
   * *   DAILY
   * *   HALF_HOUR
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The business phone number.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 10
   */
  sentCount?: number;
  /**
   * @remarks
   * The beginning of the time range that you queried.
   * 
   * @example
   * 1669619491000
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      deliveredCount: 'DeliveredCount',
      end: 'End',
      granularity: 'Granularity',
      phoneNumber: 'PhoneNumber',
      sentCount: 'SentCount',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveredCount: 'number',
      end: 'number',
      granularity: 'string',
      phoneNumber: 'string',
      sentCount: 'number',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs extends $tea.Model {
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * nextCard
   */
  action?: string;
  /**
   * @remarks
   * The intent code.
   * 
   * @example
   * test
   */
  intentCode?: string;
  /**
   * @remarks
   * The language of the next template.
   * 
   * @example
   * en
   */
  nextLanguageCode?: string;
  /**
   * @remarks
   * The code of the next template.
   * 
   * @example
   * 20939920093993
   */
  nextTemplateCode?: string;
  /**
   * @remarks
   * The name of the next template.
   * 
   * @example
   * abc
   */
  nextTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      intentCode: 'IntentCode',
      nextLanguageCode: 'NextLanguageCode',
      nextTemplateCode: 'NextTemplateCode',
      nextTemplateName: 'NextTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      intentCode: 'string',
      nextLanguageCode: 'string',
      nextTemplateCode: 'string',
      nextTemplateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps extends $tea.Model {
  /**
   * @remarks
   * The app package name.
   * 
   * @example
   * com.test
   */
  packageName?: string;
  /**
   * @remarks
   * The app signing key hash.
   * 
   * @example
   * 29kdkeik939
   */
  signatureHash?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      signatureHash: 'SignatureHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      signatureHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyDataComponentsButtons extends $tea.Model {
  /**
   * @remarks
   * The text of the one-tap autofill button. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP in a WhatsApp message template.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 202039ksjs
   */
  couponCode?: string;
  /**
   * @remarks
   * The extended fields.
   */
  extendAttrs?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs;
  /**
   * @remarks
   * The Flow action. Valid values: NAVIGATE and DATA_EXCHANGE.
   * 
   * @example
   * NAVIGATE
   */
  flowAction?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 3838292983
   */
  flowId?: string;
  /**
   * @remarks
   * The unsubscribe button. This parameter is valid if Category is set to MARKETING and the Type sub-parameter of the Buttons parameter is set to QUICK_REPLY for a WhatsApp message template. Marketing messages will not be sent to customers if you configure message sending in the Chat App Message Service console and the customers click this button.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The first screen in the Flow. This parameter is returned if FlowAction is set to NAVIGATE.
   * 
   * @example
   * DETAILS
   */
  navigateScreen?: string;
  /**
   * @remarks
   * The app package name that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP in a WhatsApp message template.
   * 
   * @example
   * com.aliyun
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number. This parameter is valid only if the Type sub-parameter of the Buttons parameter is set to **PHONE_NUMBER**.
   * 
   * @example
   * 861398745****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The app signing key hash that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP in a WhatsApp message template.
   * 
   * @example
   * 2993839
   */
  signatureHash?: string;
  /**
   * @remarks
   * The apps that support one-tap authentication and zero-tap authentication.
   */
  supportedApps?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The display name of the button.
   * 
   * @example
   * Call
   */
  text?: string;
  /**
   * @remarks
   * The button type. Valid values:
   * 
   * *   **PHONE_NUMBER**: phone call button
   * *   **URL**: URL button
   * *   **QUICK_REPLY**: quick reply button
   * *   **COPY_CODE**: copy code button
   * *   **ONE_TAP**: one-tap autofill button if Category is set to AUTHENTICATION
   * 
   * > 
   * 
   * *   If Category is set to AUTHENTICATION for a WhatsApp message template, you can add only one button to the WhatsApp message template and you must set the Type sub-parameter of the Buttons parameter to COPY_CODE or ONE_TAP. If Type is set to COPY_CODE, the Text sub-parameter of the Buttons parameter is required. If Type is set to ONE_TAP, the Text, SignatureHash, PackageName, and AutofillText sub-parameters of the Buttons parameter are required. The value of Text is displayed if the desired app is not installed on the device. The value of Text indicates that you must manually copy the verification code.
   * 
   * *   You can add only one button to a Viber message template, and you must set the Type sub-parameter of the Buttons parameter to URL.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to which you are redirected when you click the URL button.
   * 
   * @example
   * https://example.com
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values:
   * 
   * *   **static**
   * *   **dynamic**
   * 
   * @example
   * static
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      autofillText: 'AutofillText',
      couponCode: 'CouponCode',
      extendAttrs: 'ExtendAttrs',
      flowAction: 'FlowAction',
      flowId: 'FlowId',
      isOptOut: 'IsOptOut',
      navigateScreen: 'NavigateScreen',
      packageName: 'PackageName',
      phoneNumber: 'PhoneNumber',
      signatureHash: 'SignatureHash',
      supportedApps: 'SupportedApps',
      text: 'Text',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autofillText: 'string',
      couponCode: 'string',
      extendAttrs: GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs,
      flowAction: 'string',
      flowId: 'string',
      isOptOut: 'boolean',
      navigateScreen: 'string',
      packageName: 'string',
      phoneNumber: 'string',
      signatureHash: 'string',
      supportedApps: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps },
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

export class GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons extends $tea.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +86138000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The button text.
   * 
   * @example
   * Button text
   */
  text?: string;
  /**
   * @remarks
   * The type of the button in the carousel template. Valid values: URL, PHONE_NUMBER, and QUICK_REQLY.
   * 
   * @example
   * URL
   */
  type?: string;
  /**
   * @remarks
   * The URL to which you are redirected when you click the URL button.
   * 
   * @example
   * https://aliyun.com
   */
  url?: string;
  /**
   * @remarks
   * The type of the URL. Valid values: static and dynamic.
   * 
   * @example
   * static
   */
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

export class GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents extends $tea.Model {
  /**
   * @remarks
   * The buttons of the carousel card.
   */
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The type of the header in the carousel template. The header can only be an image or a video. The headers of all carousel cards must be the same. The type of the media resources that are included in the message. Valid values: IMGAGE and VIDEO.
   * 
   * @example
   * HEADER
   */
  format?: string;
  /**
   * @remarks
   * The text of the carousel card.
   * 
   * @example
   * Body
   */
  text?: string;
  /**
   * @remarks
   * The component type.
   * 
   * @example
   * HEADER
   */
  type?: string;
  /**
   * @remarks
   * The URL.
   * 
   * @example
   * https://aliyun.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      format: 'Format',
      text: 'Text',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttons: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons },
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

export class GetChatappTemplateDetailResponseBodyDataComponentsCards extends $tea.Model {
  /**
   * @remarks
   * The components of the carousel card.
   */
  cardComponents?: GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyDataComponents extends $tea.Model {
  /**
   * @remarks
   * The note indicating that customers cannot share verification codes with others. The note is displayed in the message body. This parameter is valid if Category is set to AUTHENTICATION and the Type sub-parameter of the Components parameter is set to BODY for a WhatsApp message template.
   * 
   * @example
   * false
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The buttons. This parameter is returned only if the Type sub-parameter of the Components parameter is set to **BUTTONS**.
   * 
   * >  ####
   * 
   * *   A marketing or utility WhatsApp message template can contain up to 10 buttons.
   * 
   * *   A WhatsApp message template can contain only one phone call button.
   * 
   * *   A WhatsApp message template can contain up to two URL buttons.
   * 
   * *   In a WhatsApp message template, a quick reply button cannot be used together with a phone call button or a URL button.
   */
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsButtons[];
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * The new file has been uploaded.
   */
  caption?: string;
  /**
   * @remarks
   * The carousel cards.
   */
  cards?: GetChatappTemplateDetailResponseBodyDataComponentsCards[];
  /**
   * @remarks
   * The validity period of the verification code in the WhatsApp authentication template. Unit: minutes. This parameter is valid only when Category is set to AUTHENTICATION and the Type sub-parameter of the Components parameter is set to FOOTER for a WhatsApp message template. The validity period of the verification code is displayed in the footer.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The length of the video in the Viber message template. Unit: seconds. Valid values: 0 to 600.
   * 
   * @example
   * 50
   */
  duration?: number;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * Express file
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the document attached in the Viber message template.
   * 
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @remarks
   * The format.
   * 
   * @example
   * TEXT
   */
  format?: string;
  /**
   * @remarks
   * The latitude of the location.
   * 
   * @example
   * 28.001
   */
  latitude?: string;
  /**
   * @remarks
   * The address of the location.
   * 
   * @example
   * Hangzhou
   */
  locationAddress?: string;
  /**
   * @remarks
   * The name of the location.
   * 
   * @example
   * Hangzhou
   */
  locationName?: string;
  /**
   * @remarks
   * The longitude of the location.
   * 
   * @example
   * 120.002
   */
  longitude?: string;
  /**
   * @remarks
   * The variable when the coupon code expires in the limited-time offer template.
   * 
   * @example
   * $(offerExpirationTimeMs)
   */
  offerExpirationTimeMs?: string;
  /**
   * @remarks
   * The text of the message that you want to send.
   * 
   * @example
   * Hello
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail URL of the video in the Viber message template.
   * 
   * @example
   * https://img.png
   */
  thumbUrl?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * *   **BODY**
   * *   **HEADER**
   * *   **FOOTER**
   * *   **BUTTONS**
   * *   **CAROUSEL**
   * *   **LIMITED_TIME_OFFER**
   * 
   * > 
   * 
   * *   In a WhatsApp message template, a **Body** component cannot exceed 1,024 characters in length. A **HEADER** or **FOOTER** component cannot exceed 60 characters in length.
   * 
   * *   **FOOTER**, **CAROUSEL**, and **LIMITED_TIME_OFFER** components are not supported in Viber message templates.
   * 
   * *   In Viber message templates, media resources such as images, videos, and documents are placed in the **HEADER** component. If a Viber message contains text and an image, the image is placed below the text in the message received on a device.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media resource.
   * 
   * @example
   * https://image.developer.aliyundoc.com
   */
  url?: string;
  /**
   * @remarks
   * Indicates whether the coupon code has an expiration time in the limited-time offer template.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
  static names(): { [key: string]: string } {
    return {
      addSecretRecommendation: 'AddSecretRecommendation',
      buttons: 'Buttons',
      caption: 'Caption',
      cards: 'Cards',
      codeExpirationMinutes: 'CodeExpirationMinutes',
      duration: 'Duration',
      fileName: 'FileName',
      fileType: 'FileType',
      format: 'Format',
      latitude: 'Latitude',
      locationAddress: 'LocationAddress',
      locationName: 'LocationName',
      longitude: 'Longitude',
      offerExpirationTimeMs: 'OfferExpirationTimeMs',
      text: 'Text',
      thumbUrl: 'ThumbUrl',
      type: 'Type',
      url: 'Url',
      hasExpiration: 'hasExpiration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSecretRecommendation: 'boolean',
      buttons: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsButtons },
      caption: 'string',
      cards: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsCards },
      codeExpirationMinutes: 'number',
      duration: 'number',
      fileName: 'string',
      fileType: 'string',
      format: 'string',
      latitude: 'string',
      locationAddress: 'string',
      locationName: 'string',
      longitude: 'string',
      offerExpirationTimeMs: 'string',
      text: 'string',
      thumbUrl: 'string',
      type: 'string',
      url: 'string',
      hasExpiration: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The review status of the message template. Valid values:
   * 
   * *   **pass**: The message template is approved.
   * *   **fail**: The message template is rejected.
   * *   **auditing**: The message template is being reviewed.
   * *   **unaudit**: The review is suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * The category of the template when the returned value of TemplateType is WHATSAPP. Valid values:
   * 
   * *   **UTILITY**: a transactional template
   * *   **MARKETING**: a marketing template
   * *   **AUTHENTICATION**: an identity authentication template
   * 
   * The category of the template when the returned value of the TemplateType parameter is VIBER. Valid values:
   * 
   * *   **text**: a template that contains only text
   * *   **image**: a template that contains only images
   * *   **text_image_button**: a template that contains text, images, and buttons
   * *   **text_button**: a template that contains text and buttons
   * *   **document**: a template that contains only files
   * *   **video**: a template that contains only videos
   * *   **text_video**: a template that contains text and videos
   * *   **text_video_button**: a template that contains text, videos, and buttons
   * *   **text_image**: a template that contains text and images
   * 
   * > If Category is set to text_video_button, users cannot open a web page by clicking the button. Users can open only the video in the message. In this case, you do not need to specify the Url parameter for the URL button in the template.
   * 
   * @example
   * TRANSACTIONAL
   */
  category?: string;
  /**
   * @remarks
   * The components of the message template.
   */
  components?: GetChatappTemplateDetailResponseBodyDataComponents[];
  /**
   * @remarks
   * The examples of variables.
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en_US
   */
  language?: string;
  /**
   * @remarks
   * The validity period of the WhatsApp authentication message.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  /**
   * @remarks
   * The quality of the template.
   * 
   * @example
   * GREEN
   */
  qualityScore?: string;
  /**
   * @remarks
   * The reason why the template was rejected.
   * 
   * @example
   * None
   */
  reason?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The type of the message template. Valid values:
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE (developing)
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      category: 'Category',
      components: 'Components',
      example: 'Example',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      name: 'Name',
      qualityScore: 'QualityScore',
      reason: 'Reason',
      templateCode: 'TemplateCode',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      category: 'string',
      components: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponents },
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      messageSendTtlSeconds: 'number',
      name: 'string',
      qualityScore: 'string',
      reason: 'string',
      templateCode: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateMetricResponseBodyDataCliented extends $tea.Model {
  /**
   * @remarks
   * The text on the button.
   * 
   * @example
   * Open url
   */
  buttonContent?: string;
  /**
   * @remarks
   * The number of clicks.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The button type.
   * 
   * Valid values:
   * 
   * *   phone_number_button
   * *   url_button
   * *   quick_relpy_button
   * 
   * @example
   * quick_reply_button
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buttonContent: 'ButtonContent',
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttonContent: 'string',
      count: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateMetricResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The statistics on button clicks.
   */
  cliented?: GetChatappTemplateMetricResponseBodyDataCliented[];
  /**
   * @remarks
   * The number of delivered messages.
   * 
   * @example
   * 6
   */
  deliveredCount?: number;
  /**
   * @remarks
   * The end of the time range you queried.
   * 
   * @example
   * 1668138331485
   */
  end?: number;
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The number of read messages.
   * 
   * @example
   * 3
   */
  readCount?: number;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 10
   */
  sentCount?: number;
  /**
   * @remarks
   * The beginning of the time range you queried.
   * 
   * @example
   * 1673919240001
   */
  start?: number;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 83837774838*****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      cliented: 'Cliented',
      deliveredCount: 'DeliveredCount',
      end: 'End',
      language: 'Language',
      readCount: 'ReadCount',
      sentCount: 'SentCount',
      start: 'Start',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cliented: { 'type': 'array', 'itemType': GetChatappTemplateMetricResponseBodyDataCliented },
      deliveredCount: 'number',
      end: 'number',
      language: 'string',
      readCount: 'number',
      sentCount: 'number',
      start: 'number',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappUploadAuthorizationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to authorize a user to upload a file to Object Storage Service (OSS).
   * 
   * @example
   * 2skeuurfj****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret that is used to authorize a user to upload a file to OSS.
   * 
   * @example
   * skdkdukeuuuu****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The name of the bucket to which a file is uploaded in OSS.
   * 
   * @example
   * oss
   */
  bucketName?: string;
  /**
   * @remarks
   * The directory to which the file is uploaded in Object Storage Service (OSS).
   * 
   * @example
   * 1000102939
   */
  dir?: string;
  /**
   * @remarks
   * The address of the OSS server to which a file is uploaded.
   * 
   * @example
   * https://oss.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * dkdieiii**
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      dir: 'Dir',
      endPoint: 'EndPoint',
      expire: 'Expire',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      dir: 'string',
      endPoint: 'string',
      expire: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommerceSettingResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the shopping cart button is displayed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  cartEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the catalog button is displayed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  catalogVisible?: boolean;
  static names(): { [key: string]: string } {
    return {
      cartEnable: 'CartEnable',
      catalogVisible: 'CatalogVisible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cartEnable: 'boolean',
      catalogVisible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationalAutomationResponseBodyDataCommands extends $tea.Model {
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * description
   */
  commandDescription?: string;
  /**
   * @remarks
   * The name of the command.
   * 
   * @example
   * common1
   */
  commandName?: string;
  static names(): { [key: string]: string } {
    return {
      commandDescription: 'CommandDescription',
      commandName: 'CommandName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandDescription: 'string',
      commandName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationalAutomationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The commands.
   */
  commands?: GetConversationalAutomationResponseBodyDataCommands[];
  /**
   * @remarks
   * Indicates whether the welcoming message is enabled.
   * 
   * @example
   * true
   */
  enableWelcomeMessage?: boolean;
  /**
   * @remarks
   * The phone number of the enterprise.
   * 
   * @example
   * 86138****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The opening remarks.
   */
  prompts?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      enableWelcomeMessage: 'EnableWelcomeMessage',
      phoneNumber: 'PhoneNumber',
      prompts: 'Prompts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': GetConversationalAutomationResponseBodyDataCommands },
      enableWelcomeMessage: 'boolean',
      phoneNumber: 'string',
      prompts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The categories of the Flow.
   */
  categories?: string[];
  /**
   * @remarks
   * The version number of the API.
   * 
   * @example
   * 3.0
   */
  dataApiVersion?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * flow_id_arms
   */
  flowId?: string;
  /**
   * @remarks
   * The Flow name.
   * 
   * @example
   * dnjn
   */
  flowName?: string;
  /**
   * @remarks
   * The JSON version.
   * 
   * @example
   * 2.1
   */
  JSONVersion?: string;
  /**
   * @remarks
   * The temporary preview URL.
   * 
   * @example
   * https://pre-url
   */
  previewUrl?: string;
  /**
   * @remarks
   * The time when the preview URL expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1700617436633
   */
  previewUrlExpires?: number;
  /**
   * @remarks
   * The state of the Flow.
   * 
   * Valid values:
   * 
   * *   PUBLISHED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DRAFT
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DEPRECATED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      dataApiVersion: 'DataApiVersion',
      flowId: 'FlowId',
      flowName: 'FlowName',
      JSONVersion: 'JSONVersion',
      previewUrl: 'PreviewUrl',
      previewUrlExpires: 'PreviewUrlExpires',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      dataApiVersion: 'string',
      flowId: 'string',
      flowName: 'string',
      JSONVersion: 'string',
      previewUrl: 'string',
      previewUrlExpires: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowJSONAssestResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * https://url.com/json.json
   */
  filePath?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * flow_id_arms
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowPreviewUrlResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 6dd31e1b7cc940fc99e293d9952b5b79
   */
  flowId?: string;
  /**
   * @remarks
   * The temporary preview URL.
   * 
   * @example
   * https://url
   */
  previewUrl?: string;
  /**
   * @remarks
   * The time when the preview URL expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1700617436633
   */
  previewUrlExpires?: number;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      previewUrl: 'PreviewUrl',
      previewUrlExpires: 'PreviewUrlExpires',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      previewUrl: 'string',
      previewUrlExpires: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationVerifyCodeResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the number.
   * 
   * @example
   * 82828893332
   */
  id?: string;
  /**
   * @remarks
   * Phone number.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneEncryptionPublicKeyResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The public key.
   * 
   * @example
   * -----BEGIN PUBLIC KEY-----
   * AAA
   * BBB
   * CCC
   * DDD
   * EEE
   * FFF
   * GGG
   * -----END PUBLIC KEY-----
   */
  encryptionPublicKey?: string;
  /**
   * @remarks
   * The validity state of the public key. Valid values:
   * 
   * *   MISMATCH: The public key is invalid.
   * *   VALID: The public key is valid.
   * 
   * @example
   * VALID
   */
  encryptionPublicKeyStatus?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 86138000**
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionPublicKey: 'EncryptionPublicKey',
      encryptionPublicKeyStatus: 'EncryptionPublicKeyStatus',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionPublicKey: 'string',
      encryptionPublicKeyStatus: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberVerificationStatusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The verification status.
   * 
   * @example
   * VERIFIED
   */
  codeVerificationStatus?: string;
  /**
   * @remarks
   * The ID of the number.
   * 
   * @example
   * 2224342624
   */
  id?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613900001234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      codeVerificationStatus: 'CodeVerificationStatus',
      id: 'Id',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVerificationStatus: 'string',
      id: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreValidatePhoneIdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 929833
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The ID of the phone number.
   * 
   * @example
   * 8613800000000
   */
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      phoneNumberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusResponseBodyDataEntitiesErrors extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 141006
   */
  errorCode?: string;
  /**
   * @remarks
   * The description of the error.
   * 
   * @example
   * There is an error with the payment method.
   */
  errorDescription?: string;
  /**
   * @remarks
   * The possible solution to the error.
   * 
   * @example
   * There was an error with your payment method. Please add a new payment method to the account.
   */
  possibleSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDescription: 'ErrorDescription',
      possibleSolution: 'PossibleSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDescription: 'string',
      possibleSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusResponseBodyDataEntities extends $tea.Model {
  /**
   * @remarks
   * The Business Manager ID.
   * 
   * @example
   * 3992****
   */
  businessId?: string;
  /**
   * @remarks
   * Indicates whether the messages can be sent.
   * 
   * @example
   * AVAILABLE
   */
  canSendMessage?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * PHONE_NUMBER
   */
  entityType?: string;
  /**
   * @remarks
   * The reasons why the messages failed to be sent.
   */
  errors?: GetWhatsappHealthStatusResponseBodyDataEntitiesErrors[];
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The phone number to which the messages are sent.
   * 
   * @example
   * 86138****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The template code. This parameter is returned when the NodeType parameter is set to **template**.
   * 
   * @example
   * 939928****
   */
  templateCode?: string;
  /**
   * @remarks
   * The WABA ID. You can view the WABA ID in the Chat App Message Service console after you create the WABA.
   * 
   * @example
   * 39939***
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      canSendMessage: 'CanSendMessage',
      entityType: 'EntityType',
      errors: 'Errors',
      language: 'Language',
      phoneNumber: 'PhoneNumber',
      templateCode: 'TemplateCode',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      canSendMessage: 'string',
      entityType: 'string',
      errors: { 'type': 'array', 'itemType': GetWhatsappHealthStatusResponseBodyDataEntitiesErrors },
      language: 'string',
      phoneNumber: 'string',
      templateCode: 'string',
      wabaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the messages can be sent.
   * 
   * @example
   * AVAILABLE
   */
  canSendMessage?: string;
  /**
   * @remarks
   * The queried entities.
   */
  entities?: GetWhatsappHealthStatusResponseBodyDataEntities[];
  static names(): { [key: string]: string } {
    return {
      canSendMessage: 'CanSendMessage',
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSendMessage: 'string',
      entities: { 'type': 'array', 'itemType': GetWhatsappHealthStatusResponseBodyDataEntities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappTemplateRequestPage extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The review state of the message template. Valid values:
   * 
   * *   **pass**: The message template is approved.
   * *   **fail**: The message template is rejected.
   * *   **auditing**: The message template is being reviewed.
   * *   **unaudit**: The review is suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * The category of the WhatsApp template. Valid values:
   * 
   * *   **UTILITY**: utility template
   * *   **MARKETING**: marketing template
   * *   **AUTHENTICATION**: authentication template
   * 
   * The category of the Viber template. Valid values:
   * 
   * *   **text**: template that contains only text
   * *   **image**: template that contains only an image
   * *   **text_image_button**: template that contains text, an image, and a button
   * *   **text_button**: template that contains text and a button
   * *   **document**: template that contains only a document
   * *   **video**: template that contains only a video
   * *   **text_video**: template that contains text and a video
   * *   **text_video_button**: template that contains text, a video, and a button
   * *   **text_image**: template that contains text and an image
   * 
   * @example
   * TRANSACTIONAL
   */
  category?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The time when the template was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1711006633000
   */
  lastUpdateTime?: number;
  /**
   * @remarks
   * The reason for the review failure.
   * 
   * @example
   * None
   */
  reason?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template. Valid values: WHATSAPP and VIBER.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      category: 'Category',
      language: 'Language',
      lastUpdateTime: 'LastUpdateTime',
      reason: 'Reason',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      category: 'string',
      language: 'string',
      lastUpdateTime: 'number',
      reason: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRequestPage extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
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

export class ListFlowResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The categories of the Flows.
   */
  categories?: string[];
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 3939393***
   */
  flowId?: string;
  /**
   * @remarks
   * The Flow name.
   * 
   * @example
   * flow-02020
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      flowId: 'string',
      flowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneMessageQrdlResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The URL of the deep link.
   * 
   * @example
   * https://wa.msg/
   */
  deepLinkUrl?: string;
  /**
   * @remarks
   * The format of the generated image.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  /**
   * @remarks
   * The URL of the QR code.
   * 
   * @example
   * https://img.png
   */
  qrImageUrl?: string;
  /**
   * @remarks
   * The mode of the quick-response (QR) code.
   * 
   * @example
   * IUIED999
   */
  qrdlCode?: string;
  static names(): { [key: string]: string } {
    return {
      deepLinkUrl: 'DeepLinkUrl',
      generateQrImage: 'GenerateQrImage',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
      qrImageUrl: 'QrImageUrl',
      qrdlCode: 'QrdlCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deepLinkUrl: 'string',
      generateQrImage: 'string',
      phoneNumber: 'string',
      prefilledMessage: 'string',
      qrImageUrl: 'string',
      qrdlCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductResponseBodyModelPagingCursors extends $tea.Model {
  /**
   * @remarks
   * The cursor that points to the end of the page of the returned data.
   * 
   * @example
   * sjsuueu83838
   */
  after?: string;
  /**
   * @remarks
   * The cursor that points to the beginning of the page of the returned data.
   * 
   * @example
   * sjjsjdjjdjd83883
   */
  before?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      before: 'Before',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      before: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductResponseBodyModelPaging extends $tea.Model {
  /**
   * @remarks
   * The cursors for pagination.
   */
  cursors?: ListProductResponseBodyModelPagingCursors;
  static names(): { [key: string]: string } {
    return {
      cursors: 'Cursors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursors: ListProductResponseBodyModelPagingCursors,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: { [key: string]: any }[];
  /**
   * @remarks
   * The pagination details.
   */
  paging?: ListProductResponseBodyModelPaging;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      paging: 'Paging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      paging: ListProductResponseBodyModelPaging,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductCatalogResponseBodyModelPagingCursors extends $tea.Model {
  /**
   * @remarks
   * The cursor that points to the end of the page of the returned data.
   * 
   * @example
   * sjsuueu83838
   */
  after?: string;
  /**
   * @remarks
   * The cursor that points to the beginning of the page of the returned data.
   * 
   * @example
   * sjjsjdjjdjd83883
   */
  before?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      before: 'Before',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      before: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductCatalogResponseBodyModelPaging extends $tea.Model {
  /**
   * @remarks
   * The cursors for pagination.
   */
  cursors?: ListProductCatalogResponseBodyModelPagingCursors;
  static names(): { [key: string]: string } {
    return {
      cursors: 'Cursors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursors: ListProductCatalogResponseBodyModelPagingCursors,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductCatalogResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: { [key: string]: any }[];
  /**
   * @remarks
   * The pagination details.
   */
  paging?: ListProductCatalogResponseBodyModelPaging;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      paging: 'Paging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      paging: ListProductCatalogResponseBodyModelPaging,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponentsButtonsSupportedApps extends $tea.Model {
  /**
   * @remarks
   * The Whatsapp template is required when the Category is\\" Authorisation \\"and the Button Type is\\" ONE_TAP/ZERO-TAP\\", indicating the signature hash value of the Whatsapp call application.
   * 
   * @example
   * com.example.myapplication
   */
  packageName?: string;
  /**
   * @remarks
   * The Whatsapp template is required when the Category is\\" Authorisation \\"and the Button Type is\\" ONE_TAP/ZERO-TAP\\", indicating the signature hash value of the Whatsapp call application.
   * 
   * @example
   * fk39kd93ks9
   */
  signatureHash?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      signatureHash: 'SignatureHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      signatureHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponentsButtons extends $tea.Model {
  /**
   * @remarks
   * The text of the one-tap autofill button. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The coupon code. It can contain only letters and digits. You can set this parameter to a variable such as $(couponCode). Specify the value of couponCode when you send a message.
   * 
   * @example
   * 120293
   */
  couponCode?: string;
  /**
   * @remarks
   * The Flow action.
   * 
   * Valid values:
   * 
   * *   DATA_EXCHANGE
   * *   NAVIGATE
   * 
   * @example
   * NAVIGATE
   */
  flowAction?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 664597077870605
   */
  flowId?: string;
  /**
   * @remarks
   * The unsubscribe button. This parameter is valid if Category is set to MARKETING and the Type sub-parameter of the Buttons parameter is set to QUICK_REPLY for a WhatsApp message template. Marketing messages will not be sent to customers if you configure message sending in the Chat App Message Service console and the customers click this button.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The first screen in the Flow. This parameter is required if FlowAction is set to NAVIGATE.
   * 
   * @example
   * DETAILS
   */
  navigateScreen?: string;
  /**
   * @remarks
   * The app package name that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * com.demo
   * 
   * @deprecated
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +8613888887889
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The app signing key hash that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * 29dkeke
   * 
   * @deprecated
   */
  signatureHash?: string;
  /**
   * @remarks
   * List of supported apps.
   */
  supportedApps?: ModifyChatappTemplateRequestComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The text of the button.
   * 
   * @example
   * phone-button-text
   */
  text?: string;
  /**
   * @remarks
   * The button type. Valid values:
   * 
   * *   **PHONE_NUMBER**: phone call button
   * *   **URL**: URL button
   * *   **QUICK_REPLY**: quick reply button
   * *   **COPY_CODE**: copy code button
   * *   **ONE_TAP**: one-tap autofill button if Category is set to AUTHENTICATION
   * 
   * > 
   * 
   * *   If Category is set to AUTHENTICATION for a WhatsApp message template, you can add only one button to the WhatsApp message template and you must set the Type sub-parameter of the Buttons parameter to COPY_CODE or ONE_TAP. If Type is set to COPY_CODE, the Text sub-parameter of the Buttons parameter is required. If Type is set to ONE_TAP, the Text, SignatureHash, PackageName, and AutofillText sub-parameters of the Buttons parameter are required. The value of Text is displayed if the desired app is not installed on the device. The value of Text indicates that you must manually copy the verification code.
   * 
   * *   You can add only one button to a Viber message template, and you must set the Type sub-parameter of the Buttons parameter to URL.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to which you are redirected when you click the URL button.
   * 
   * @example
   * https://www.website.com/
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values:
   * 
   * *   **static**
   * *   **dynamic**
   * 
   * @example
   * dynamic
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      autofillText: 'AutofillText',
      couponCode: 'CouponCode',
      flowAction: 'FlowAction',
      flowId: 'FlowId',
      isOptOut: 'IsOptOut',
      navigateScreen: 'NavigateScreen',
      packageName: 'PackageName',
      phoneNumber: 'PhoneNumber',
      signatureHash: 'SignatureHash',
      supportedApps: 'SupportedApps',
      text: 'Text',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autofillText: 'string',
      couponCode: 'string',
      flowAction: 'string',
      flowId: 'string',
      isOptOut: 'boolean',
      navigateScreen: 'string',
      packageName: 'string',
      phoneNumber: 'string',
      signatureHash: 'string',
      supportedApps: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsButtonsSupportedApps },
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

export class ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons extends $tea.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +8613800
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The text of the button.
   * 
   * @example
   * Call me
   */
  text?: string;
  /**
   * @remarks
   * The button type. Valid values:
   * 
   * *   **PHONE_NUMBER**: phone call button
   * *   **URL**: URL button
   * *   **QUICK_REPLY**: quick reply button
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to which you are redirected when you click the URL button.
   * 
   * @example
   * https://alibaba.com/xx
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values:
   * 
   * *   **static**
   * *   **dynamic**
   * 
   * @example
   * static
   */
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

export class ModifyChatappTemplateRequestComponentsCardsCardComponents extends $tea.Model {
  /**
   * @remarks
   * The buttons. Specify this parameter only if you set the Type sub-parameter of the CardComponents parameter to BUTTONS. A carousel card can contain up to two buttons.
   */
  buttons?: ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The type of the media resource. This parameter is valid if the Type sub-parameter of the CardComponents parameter is set to HEADER. Valid values:
   * 
   * *   **IMAGE**
   * *   **VIDEO**
   * 
   * @example
   * IMAGE
   */
  format?: string;
  /**
   * @remarks
   * The body content of the carousel card.
   * 
   * @example
   * Who is the very powerful team
   */
  text?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * *   **BODY**
   * *   **HEADER**
   * *   **BUTTONS**
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media resource.
   * 
   * @example
   * https://alibaba.com/img.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      format: 'Format',
      text: 'Text',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttons: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons },
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

export class ModifyChatappTemplateRequestComponentsCards extends $tea.Model {
  /**
   * @remarks
   * The components of the carousel card.
   * 
   * This parameter is required.
   */
  cardComponents?: ModifyChatappTemplateRequestComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsCardsCardComponents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponents extends $tea.Model {
  /**
   * @remarks
   * The note indicating that customers cannot share verification codes with others. The note is displayed in the message body. This parameter is valid if Category is set to AUTHENTICATION and the Type sub-parameter of the Components parameter is set to BODY for a WhatsApp message template.
   * 
   * @example
   * false
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The buttons. Specify this parameter only if you set the Type sub-parameter of the Components parameter to **BUTTONS**.
   * 
   * >  ####
   * 
   * *   A marketing or utility WhatsApp message template can contain up to 10 buttons.
   * 
   * *   A WhatsApp message template can contain only one phone call button.
   * 
   * *   A WhatsApp message template can contain up to two URL buttons.
   * 
   * *   In a WhatsApp message template, a quick reply button cannot be used together with a phone call button or a URL button.
   */
  buttons?: ModifyChatappTemplateRequestComponentsButtons[];
  /**
   * @remarks
   * The description of the media resource.
   * 
   * >  If the Type sub-parameter of the Components parameter is set to **HEADER** and the Format parameter is set to **IMAGE, DOCUMENT, or VIDEO**, you can specify this parameter.
   * 
   * @example
   * This is a video
   */
  caption?: string;
  /**
   * @remarks
   * The carousel cards of the carousel template.
   */
  cards?: ModifyChatappTemplateRequestComponentsCards[];
  /**
   * @remarks
   * The validity period of the verification code in the WhatsApp authentication template. Unit: minutes. This parameter is valid only when Category is set to AUTHENTICATION and the Type sub-parameter of the Components parameter is set to FOOTER. The validity period of the verification code is displayed in the footer.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The length of the video in the Viber message template. Unit: seconds. Valid values: 0 to 600.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The name of the document.
   * 
   * >  If the Type sub-parameter of the Components parameter is set to **HEADER** and the Format parameter is set to **DOCUMENT**, you can specify this parameter.
   * 
   * @example
   * video name
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the document attached in the Viber message template.
   * 
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @remarks
   * The type of the media resource. Valid values:
   * 
   * *   **TEXT**
   * *   **IMAGE**
   * *   **DOCUMENT**
   * *   **VIDEO**
   * 
   * @example
   * TEXT
   */
  format?: string;
  /**
   * @remarks
   * Specifies whether the coupon code has an expiration time. Specify this parameter if the Type sub-parameter of the Components parameter is set to LIMITED_TIME_OFFER.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
  /**
   * @remarks
   * The text of the message that you want to send.
   * 
   * >  If Category is set to AUTHENTICATION, do not specify the Text sub-parameter of the Components parameter.
   * 
   * @example
   * hello chatapp
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail URL of the video in the Viber message template.
   * 
   * @example
   * https://cdn.multiplymall.mobiapp.cloud/cloudcode/yc-165407506207478-165511576113195/20220905/ec5b9737-1507-4208-bb27-8da3958da961.jpg?x-oss-process=image/resize,w_100
   */
  thumbUrl?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * *   **BODY**
   * *   **HEADER**
   * *   **FOOTER**
   * *   **BUTTONS**
   * *   **CAROUSEL**
   * *   **LIMITED_TIME_OFFER**
   * 
   * > 
   * 
   * *   In a WhatsApp message template, a **Body** component cannot exceed 1,024 characters in length. A **HEADER** or **FOOTER** component cannot exceed 60 characters in length.
   * 
   * *   **FOOTER**, **CAROUSEL**, and **LIMITED_TIME_OFFER** components are not supported in Viber message templates.
   * 
   * *   In Viber message templates, media resources such as images, videos, and documents are placed in the **HEADER** component. If a Viber message contains text and an image, the image is placed below the text in the message received on a device.
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media resource.
   * 
   * @example
   * https://img.tukuppt.com/png_preview/00/10/24/1GygxVK3F4.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      addSecretRecommendation: 'AddSecretRecommendation',
      buttons: 'Buttons',
      caption: 'Caption',
      cards: 'Cards',
      codeExpirationMinutes: 'CodeExpirationMinutes',
      duration: 'Duration',
      fileName: 'FileName',
      fileType: 'FileType',
      format: 'Format',
      hasExpiration: 'HasExpiration',
      text: 'Text',
      thumbUrl: 'ThumbUrl',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSecretRecommendation: 'boolean',
      buttons: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsButtons },
      caption: 'string',
      cards: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsCards },
      codeExpirationMinutes: 'number',
      duration: 'number',
      fileName: 'string',
      fileType: 'string',
      format: 'string',
      hasExpiration: 'boolean',
      text: 'string',
      thumbUrl: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * 8472929283883
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
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

export class ModifyFlowResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The categories of the Flow.
   */
  categories?: string[];
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 3939399****
   */
  flowId?: string;
  /**
   * @remarks
   * The Flow name.
   * 
   * @example
   * flow-00203
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      flowId: 'string',
      flowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappBindWabaResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The review state of the WhatsApp Business account (WABA).
   * 
   * >  Valid values:
   * 
   * *   PENDING: The WABA is to be reviewed.
   * 
   * *   APPROVED: The WABA was approved.
   * 
   * *   REJECTED: The WABA was rejected.
   * 
   * *   DISABLED: The WABA was forbidden.
   * 
   * @example
   * APPROVED
   */
  accountReviewStatus?: string;
  /**
   * @remarks
   * WABA related information.
   */
  authInternationalRateEligibility?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the business platform.
   * 
   * @example
   * 19293988***
   */
  businessId?: string;
  /**
   * @remarks
   * The name of the business platform.
   * 
   * @example
   * Alibaba
   */
  businessName?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the WhatsApp Business account.
   * 
   * @example
   * 20393988393993***
   */
  id?: string;
  /**
   * @remarks
   * The namespace of the message template.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  messageTemplateNamespace?: string;
  /**
   * @remarks
   * The name of the WhatsApp Business account.
   * 
   * @example
   * Alibaba
   */
  name?: string;
  /**
   * @remarks
   * The start time when the authentication-international rate applies.
   * 
   * @example
   * "start_time":1721952000
   */
  primaryBusinessLocation?: string;
  static names(): { [key: string]: string } {
    return {
      accountReviewStatus: 'AccountReviewStatus',
      authInternationalRateEligibility: 'AuthInternationalRateEligibility',
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      currency: 'Currency',
      id: 'Id',
      messageTemplateNamespace: 'MessageTemplateNamespace',
      name: 'Name',
      primaryBusinessLocation: 'PrimaryBusinessLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountReviewStatus: 'string',
      authInternationalRateEligibility: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      businessId: 'string',
      businessName: 'string',
      currency: 'string',
      id: 'string',
      messageTemplateNamespace: 'string',
      name: 'string',
      primaryBusinessLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBodyPhoneNumbers extends $tea.Model {
  /**
   * @remarks
   * The verification status of the phone number.
   * 
   * @example
   * VERIFIED
   */
  codeVerificationStatus?: string;
  /**
   * @example
   * N
   */
  isOfficial?: string;
  /**
   * @remarks
   * The number of phone numbers to which messages can be sent in a day.
   * 
   * Valid values:
   * 
   * *   TIER_100K: 100,000
   * *   TIER_UNLIMITED: unlimited
   * *   TIER_250: 250
   * *   TIER_1K: 1,000
   * *   TIER_50: 50
   * *   TIER_10K: 10,000
   * 
   * @example
   * TIER_10
   */
  messagingLimitTier?: string;
  /**
   * @remarks
   * The status of the business name.
   * 
   * @example
   * Approval
   */
  nameStatus?: string;
  /**
   * @remarks
   * The review status of the new business name.
   * 
   * @example
   * Approval
   */
  newNameStatus?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The quality rating of the phone number.
   * 
   * Valid values:
   * 
   * *   RED
   * *   YELLOW
   * *   UNKNOWN
   * *   GREEN
   * 
   * @example
   * GREEN
   */
  qualityRating?: string;
  /**
   * @remarks
   * The state of the phone number.
   * 
   * Valid values:
   * 
   * *   MIGRATED
   * *   FLAGGED
   * *   DISCONNECTED
   * *   UNVERIFIED
   * *   BANNED
   * *   RATE_LIMITED
   * *   PENDING
   * *   CONNECTED
   * *   UNKNOWN
   * *   DELETED
   * *   RESTRICTED
   * 
   * @example
   * CONNECTED
   */
  status?: string;
  /**
   * @remarks
   * The callback URL to which status reports are sent by using HTTP callbacks.
   * 
   * @example
   * https://ali.com/status
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * The status report queue.
   * 
   * @example
   * Alicom-Queue-****-ChatAppStatus
   */
  statusQueue?: string;
  /**
   * @remarks
   * The callback URL to which MO messages are sent by using HTTP callbacks.
   * 
   * @example
   * https://ali.com/inbound
   */
  upCallbackUrl?: string;
  /**
   * @remarks
   * The mobile originated (MO) message notification queue.
   * 
   * @example
   * Alicom-Queue-****-ChatAppInbound
   */
  upQueue?: string;
  /**
   * @remarks
   * The name of the company with which the phone number is associated.
   * 
   * @example
   * Alibaba
   */
  verifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      codeVerificationStatus: 'CodeVerificationStatus',
      isOfficial: 'IsOfficial',
      messagingLimitTier: 'MessagingLimitTier',
      nameStatus: 'NameStatus',
      newNameStatus: 'NewNameStatus',
      phoneNumber: 'PhoneNumber',
      qualityRating: 'QualityRating',
      status: 'Status',
      statusCallbackUrl: 'StatusCallbackUrl',
      statusQueue: 'StatusQueue',
      upCallbackUrl: 'UpCallbackUrl',
      upQueue: 'UpQueue',
      verifiedName: 'VerifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVerificationStatus: 'string',
      isOfficial: 'string',
      messagingLimitTier: 'string',
      nameStatus: 'string',
      newNameStatus: 'string',
      phoneNumber: 'string',
      qualityRating: 'string',
      status: 'string',
      statusCallbackUrl: 'string',
      statusQueue: 'string',
      upCallbackUrl: 'string',
      upQueue: 'string',
      verifiedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneBusinessProfileResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Regarding.
   * 
   * @example
   * business profile
   */
  about?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * Changsha
   */
  address?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * aa@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * The profile picture.
   * 
   * @example
   * https://....img
   */
  profilePictureUrl?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * Retail
   */
  vertical?: string;
  /**
   * @remarks
   * The website.
   */
  websites?: string[];
  static names(): { [key: string]: string } {
    return {
      about: 'About',
      address: 'Address',
      description: 'Description',
      email: 'Email',
      profilePictureUrl: 'ProfilePictureUrl',
      vertical: 'Vertical',
      websites: 'Websites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      about: 'string',
      address: 'string',
      description: 'string',
      email: 'string',
      profilePictureUrl: 'string',
      vertical: 'string',
      websites: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWabaBusinessInfoResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The Business Manager ID.
   * 
   * @example
   * 192882828733
   */
  businessId?: string;
  /**
   * @remarks
   * The Business Manager name.
   * 
   * @example
   * Alibaba
   */
  businessName?: string;
  /**
   * @remarks
   * The verification status.
   * 
   * @example
   * verified
   */
  verificationStatus?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * Retail
   * 
   * @deprecated
   */
  vertical?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      verificationStatus: 'VerificationStatus',
      vertical: 'Vertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      businessName: 'string',
      verificationStatus: 'string',
      vertical: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageRequestSenderListFlowAction extends $tea.Model {
  /**
   * @remarks
   * The default parameter of the Flow.
   */
  flowActionData?: { [key: string]: string };
  /**
   * @remarks
   * The information about the Flow token.
   * 
   * @example
   * kde****
   */
  flowToken?: string;
  static names(): { [key: string]: string } {
    return {
      flowActionData: 'FlowActionData',
      flowToken: 'FlowToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowActionData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      flowToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageRequestSenderListProductActionSectionsProductItems extends $tea.Model {
  /**
   * @remarks
   * The retailer ID of the product.
   * 
   * @example
   * ksi399d8
   */
  productRetailerId?: string;
  static names(): { [key: string]: string } {
    return {
      productRetailerId: 'ProductRetailerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productRetailerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageRequestSenderListProductActionSections extends $tea.Model {
  /**
   * @remarks
   * The products.
   */
  productItems?: SendChatappMassMessageRequestSenderListProductActionSectionsProductItems[];
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * abcd
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      productItems: 'ProductItems',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productItems: { 'type': 'array', 'itemType': SendChatappMassMessageRequestSenderListProductActionSectionsProductItems },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageRequestSenderListProductAction extends $tea.Model {
  /**
   * @remarks
   * The products. Up to 30 products and 10 categories can be added.
   */
  sections?: SendChatappMassMessageRequestSenderListProductActionSections[];
  /**
   * @remarks
   * The retailer ID of the product.
   * 
   * @example
   * skkks999393
   */
  thumbnailProductRetailerId?: string;
  static names(): { [key: string]: string } {
    return {
      sections: 'Sections',
      thumbnailProductRetailerId: 'ThumbnailProductRetailerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sections: { 'type': 'array', 'itemType': SendChatappMassMessageRequestSenderListProductActionSections },
      thumbnailProductRetailerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMassMessageRequestSenderList extends $tea.Model {
  /**
   * @remarks
   * The Flow action.
   */
  flowAction?: SendChatappMassMessageRequestSenderListFlowAction;
  /**
   * @remarks
   * The payload of the button.
   */
  payload?: string[];
  /**
   * @remarks
   * The information about the product.
   */
  productAction?: SendChatappMassMessageRequestSenderListProductAction;
  /**
   * @remarks
   * The parameters of the template.
   */
  templateParams?: { [key: string]: string };
  /**
   * @remarks
   * The mobile phone number of the message receiver.
   * 
   * This parameter is required.
   * 
   * @example
   * 861388988****
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      flowAction: 'FlowAction',
      payload: 'Payload',
      productAction: 'ProductAction',
      templateParams: 'TemplateParams',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowAction: SendChatappMassMessageRequestSenderListFlowAction,
      payload: { 'type': 'array', 'itemType': 'string' },
      productAction: SendChatappMassMessageRequestSenderListProductAction,
      templateParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequestFlowAction extends $tea.Model {
  /**
   * @remarks
   * The default parameter of the Flow.
   */
  flowActionData?: { [key: string]: string };
  /**
   * @remarks
   * The Flow token.
   * 
   * @example
   * 1122***
   */
  flowToken?: string;
  static names(): { [key: string]: string } {
    return {
      flowActionData: 'FlowActionData',
      flowToken: 'FlowToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowActionData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      flowToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequestProductActionSectionsProductItems extends $tea.Model {
  /**
   * @remarks
   * The retailer ID of the product.
   * 
   * @example
   * 9I39E9E
   */
  productRetailerId?: string;
  static names(): { [key: string]: string } {
    return {
      productRetailerId: 'ProductRetailerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productRetailerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequestProductActionSections extends $tea.Model {
  /**
   * @remarks
   * The products.
   */
  productItems?: SendChatappMessageRequestProductActionSectionsProductItems[];
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * Test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      productItems: 'ProductItems',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productItems: { 'type': 'array', 'itemType': SendChatappMessageRequestProductActionSectionsProductItems },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequestProductAction extends $tea.Model {
  /**
   * @remarks
   * The products. Up to 30 products and 10 categories can be added.
   */
  sections?: SendChatappMessageRequestProductActionSections[];
  /**
   * @remarks
   * The retailer ID of the product.
   * 
   * @example
   * S238SK
   */
  thumbnailProductRetailerId?: string;
  static names(): { [key: string]: string } {
    return {
      sections: 'Sections',
      thumbnailProductRetailerId: 'ThumbnailProductRetailerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sections: { 'type': 'array', 'itemType': SendChatappMessageRequestProductActionSections },
      thumbnailProductRetailerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConversationalAutomationRequestCommands extends $tea.Model {
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * Command 1.
   */
  commandDescription?: string;
  /**
   * @remarks
   * The command name.
   * 
   * @example
   * test
   */
  commandName?: string;
  static names(): { [key: string]: string } {
    return {
      commandDescription: 'CommandDescription',
      commandName: 'CommandName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandDescription: 'string',
      commandName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowJSONAssetResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 84848847****
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhoneMessageQrdlResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Deep link address.
   * 
   * @example
   * https://wa.msg/
   */
  deepLinkUrl?: string;
  /**
   * @remarks
   * Generate image types.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  /**
   * @remarks
   * Number.
   * 
   * @example
   * 8613800
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Message content.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  /**
   * @remarks
   * QR code address.
   * 
   * @example
   * https://img.png
   */
  qrImageUrl?: string;
  /**
   * @remarks
   * QR code encoding.
   * 
   * @example
   * DEDEE998
   */
  qrdlCode?: string;
  static names(): { [key: string]: string } {
    return {
      deepLinkUrl: 'DeepLinkUrl',
      generateQrImage: 'GenerateQrImage',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
      qrImageUrl: 'QrImageUrl',
      qrdlCode: 'QrdlCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deepLinkUrl: 'string',
      generateQrImage: 'string',
      phoneNumber: 'string',
      prefilledMessage: 'string',
      qrImageUrl: 'string',
      qrdlCode: 'string',
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

  /**
   * Adds a phone number for a WhatsApp Business account (WABA).
   * 
   * @param request - AddChatappPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddChatappPhoneNumberResponse
   */
  async addChatappPhoneNumberWithOptions(request: AddChatappPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<AddChatappPhoneNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cc)) {
      query["Cc"] = request.cc;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.preValidateId)) {
      query["PreValidateId"] = request.preValidateId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.verifiedName)) {
      query["VerifiedName"] = request.verifiedName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddChatappPhoneNumber",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AddChatappPhoneNumberResponse>(await this.callApi(params, req, runtime), new AddChatappPhoneNumberResponse({}));
    } else {
      return $tea.cast<AddChatappPhoneNumberResponse>(await this.execute(params, req, runtime), new AddChatappPhoneNumberResponse({}));
    }

  }

  /**
   * Adds a phone number for a WhatsApp Business account (WABA).
   * 
   * @param request - AddChatappPhoneNumberRequest
   * @returns AddChatappPhoneNumberResponse
   */
  async addChatappPhoneNumber(request: AddChatappPhoneNumberRequest): Promise<AddChatappPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addChatappPhoneNumberWithOptions(request, runtime);
  }

  /**
   * Associates FAQs in the knowledge base.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - BeeBotAssociateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeeBotAssociateResponse
   */
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

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<BeeBotAssociateResponse>(await this.callApi(params, req, runtime), new BeeBotAssociateResponse({}));
    } else {
      return $tea.cast<BeeBotAssociateResponse>(await this.execute(params, req, runtime), new BeeBotAssociateResponse({}));
    }

  }

  /**
   * Associates FAQs in the knowledge base.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BeeBotAssociateRequest
   * @returns BeeBotAssociateResponse
   */
  async beeBotAssociate(request: BeeBotAssociateRequest): Promise<BeeBotAssociateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beeBotAssociateWithOptions(request, runtime);
  }

  /**
   * Conducts sessions with the bot based on its unique identifier (ID).
   * 
   * @remarks
   * The ID of the session.
   * 
   * @param tmpReq - BeeBotChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeeBotChatResponse
   */
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

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<BeeBotChatResponse>(await this.callApi(params, req, runtime), new BeeBotChatResponse({}));
    } else {
      return $tea.cast<BeeBotChatResponse>(await this.execute(params, req, runtime), new BeeBotChatResponse({}));
    }

  }

  /**
   * Conducts sessions with the bot based on its unique identifier (ID).
   * 
   * @remarks
   * The ID of the session.
   * 
   * @param request - BeeBotChatRequest
   * @returns BeeBotChatResponse
   */
  async beeBotChat(request: BeeBotChatRequest): Promise<BeeBotChatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beeBotChatWithOptions(request, runtime);
  }

  /**
   * Binds the WhatsApp Business account with ChatApp.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappBindWabaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappBindWabaResponse
   */
  async chatappBindWabaWithOptions(request: ChatappBindWabaRequest, runtime: $Util.RuntimeOptions): Promise<ChatappBindWabaResponse> {
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

    if (!Util.isUnset(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChatappBindWaba",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ChatappBindWabaResponse>(await this.callApi(params, req, runtime), new ChatappBindWabaResponse({}));
    } else {
      return $tea.cast<ChatappBindWabaResponse>(await this.execute(params, req, runtime), new ChatappBindWabaResponse({}));
    }

  }

  /**
   * Binds the WhatsApp Business account with ChatApp.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappBindWabaRequest
   * @returns ChatappBindWabaResponse
   */
  async chatappBindWaba(request: ChatappBindWabaRequest): Promise<ChatappBindWabaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappBindWabaWithOptions(request, runtime);
  }

  /**
   * Queries WhatsApp Business account (WABA) information after embedded signup. You do not need to call this API operation if you use Version 2 of WhatsApp embedded signup.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappEmbedSignUpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappEmbedSignUpResponse
   */
  async chatappEmbedSignUpWithOptions(request: ChatappEmbedSignUpRequest, runtime: $Util.RuntimeOptions): Promise<ChatappEmbedSignUpResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inputToken)) {
      body["InputToken"] = request.inputToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChatappEmbedSignUp",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ChatappEmbedSignUpResponse>(await this.callApi(params, req, runtime), new ChatappEmbedSignUpResponse({}));
    } else {
      return $tea.cast<ChatappEmbedSignUpResponse>(await this.execute(params, req, runtime), new ChatappEmbedSignUpResponse({}));
    }

  }

  /**
   * Queries WhatsApp Business account (WABA) information after embedded signup. You do not need to call this API operation if you use Version 2 of WhatsApp embedded signup.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappEmbedSignUpRequest
   * @returns ChatappEmbedSignUpResponse
   */
  async chatappEmbedSignUp(request: ChatappEmbedSignUpRequest): Promise<ChatappEmbedSignUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappEmbedSignUpWithOptions(request, runtime);
  }

  /**
   * Registers a phone number for migration.
   * 
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @param request - ChatappMigrationRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappMigrationRegisterResponse
   */
  async chatappMigrationRegisterWithOptions(request: ChatappMigrationRegisterRequest, runtime: $Util.RuntimeOptions): Promise<ChatappMigrationRegisterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChatappMigrationRegister",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ChatappMigrationRegisterResponse>(await this.callApi(params, req, runtime), new ChatappMigrationRegisterResponse({}));
    } else {
      return $tea.cast<ChatappMigrationRegisterResponse>(await this.execute(params, req, runtime), new ChatappMigrationRegisterResponse({}));
    }

  }

  /**
   * Registers a phone number for migration.
   * 
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @param request - ChatappMigrationRegisterRequest
   * @returns ChatappMigrationRegisterResponse
   */
  async chatappMigrationRegister(request: ChatappMigrationRegisterRequest): Promise<ChatappMigrationRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappMigrationRegisterWithOptions(request, runtime);
  }

  /**
   * Verifies a specified phone number for migration.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappMigrationVerifiedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappMigrationVerifiedResponse
   */
  async chatappMigrationVerifiedWithOptions(request: ChatappMigrationVerifiedRequest, runtime: $Util.RuntimeOptions): Promise<ChatappMigrationVerifiedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChatappMigrationVerified",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ChatappMigrationVerifiedResponse>(await this.callApi(params, req, runtime), new ChatappMigrationVerifiedResponse({}));
    } else {
      return $tea.cast<ChatappMigrationVerifiedResponse>(await this.execute(params, req, runtime), new ChatappMigrationVerifiedResponse({}));
    }

  }

  /**
   * Verifies a specified phone number for migration.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappMigrationVerifiedRequest
   * @returns ChatappMigrationVerifiedResponse
   */
  async chatappMigrationVerified(request: ChatappMigrationVerifiedRequest): Promise<ChatappMigrationVerifiedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappMigrationVerifiedWithOptions(request, runtime);
  }

  /**
   * Deregisters a phone number from a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappPhoneNumberDeregisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappPhoneNumberDeregisterResponse
   */
  async chatappPhoneNumberDeregisterWithOptions(request: ChatappPhoneNumberDeregisterRequest, runtime: $Util.RuntimeOptions): Promise<ChatappPhoneNumberDeregisterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChatappPhoneNumberDeregister",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ChatappPhoneNumberDeregisterResponse>(await this.callApi(params, req, runtime), new ChatappPhoneNumberDeregisterResponse({}));
    } else {
      return $tea.cast<ChatappPhoneNumberDeregisterResponse>(await this.execute(params, req, runtime), new ChatappPhoneNumberDeregisterResponse({}));
    }

  }

  /**
   * Deregisters a phone number from a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappPhoneNumberDeregisterRequest
   * @returns ChatappPhoneNumberDeregisterResponse
   */
  async chatappPhoneNumberDeregister(request: ChatappPhoneNumberDeregisterRequest): Promise<ChatappPhoneNumberDeregisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappPhoneNumberDeregisterWithOptions(request, runtime);
  }

  /**
   * Registers a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappPhoneNumberRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappPhoneNumberRegisterResponse
   */
  async chatappPhoneNumberRegisterWithOptions(request: ChatappPhoneNumberRegisterRequest, runtime: $Util.RuntimeOptions): Promise<ChatappPhoneNumberRegisterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "ChatappPhoneNumberRegister",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ChatappPhoneNumberRegisterResponse>(await this.callApi(params, req, runtime), new ChatappPhoneNumberRegisterResponse({}));
    } else {
      return $tea.cast<ChatappPhoneNumberRegisterResponse>(await this.execute(params, req, runtime), new ChatappPhoneNumberRegisterResponse({}));
    }

  }

  /**
   * Registers a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappPhoneNumberRegisterRequest
   * @returns ChatappPhoneNumberRegisterResponse
   */
  async chatappPhoneNumberRegister(request: ChatappPhoneNumberRegisterRequest): Promise<ChatappPhoneNumberRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappPhoneNumberRegisterWithOptions(request, runtime);
  }

  /**
   * Synchronizes phone numbers.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappSyncPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappSyncPhoneNumberResponse
   */
  async chatappSyncPhoneNumberWithOptions(request: ChatappSyncPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<ChatappSyncPhoneNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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
      action: "ChatappSyncPhoneNumber",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ChatappSyncPhoneNumberResponse>(await this.callApi(params, req, runtime), new ChatappSyncPhoneNumberResponse({}));
    } else {
      return $tea.cast<ChatappSyncPhoneNumberResponse>(await this.execute(params, req, runtime), new ChatappSyncPhoneNumberResponse({}));
    }

  }

  /**
   * Synchronizes phone numbers.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappSyncPhoneNumberRequest
   * @returns ChatappSyncPhoneNumberResponse
   */
  async chatappSyncPhoneNumber(request: ChatappSyncPhoneNumberRequest): Promise<ChatappSyncPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappSyncPhoneNumberWithOptions(request, runtime);
  }

  /**
   * Associates a phone number with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappVerifyAndRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappVerifyAndRegisterResponse
   */
  async chatappVerifyAndRegisterWithOptions(request: ChatappVerifyAndRegisterRequest, runtime: $Util.RuntimeOptions): Promise<ChatappVerifyAndRegisterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChatappVerifyAndRegister",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ChatappVerifyAndRegisterResponse>(await this.callApi(params, req, runtime), new ChatappVerifyAndRegisterResponse({}));
    } else {
      return $tea.cast<ChatappVerifyAndRegisterResponse>(await this.execute(params, req, runtime), new ChatappVerifyAndRegisterResponse({}));
    }

  }

  /**
   * Associates a phone number with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappVerifyAndRegisterRequest
   * @returns ChatappVerifyAndRegisterResponse
   */
  async chatappVerifyAndRegister(request: ChatappVerifyAndRegisterRequest): Promise<ChatappVerifyAndRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappVerifyAndRegisterWithOptions(request, runtime);
  }

  /**
   * The ID of the number.
   * 
   * @remarks
   * The status of the phone number.
   * 
   * @param request - CreateChatappMigrationInitiateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatappMigrationInitiateResponse
   */
  async createChatappMigrationInitiateWithOptions(request: CreateChatappMigrationInitiateRequest, runtime: $Util.RuntimeOptions): Promise<CreateChatappMigrationInitiateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.mobileNumber)) {
      query["MobileNumber"] = request.mobileNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateChatappMigrationInitiate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateChatappMigrationInitiateResponse>(await this.callApi(params, req, runtime), new CreateChatappMigrationInitiateResponse({}));
    } else {
      return $tea.cast<CreateChatappMigrationInitiateResponse>(await this.execute(params, req, runtime), new CreateChatappMigrationInitiateResponse({}));
    }

  }

  /**
   * The ID of the number.
   * 
   * @remarks
   * The status of the phone number.
   * 
   * @param request - CreateChatappMigrationInitiateRequest
   * @returns CreateChatappMigrationInitiateResponse
   */
  async createChatappMigrationInitiate(request: CreateChatappMigrationInitiateRequest): Promise<CreateChatappMigrationInitiateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChatappMigrationInitiateWithOptions(request, runtime);
  }

  /**
   * The HTTP status code.
   * \\\\\\\\*   Example: OK. This parameter indicates that the request is successful.
   * \\\\\\\\*   Other values indicate that the request fails. For more information, see \\\\\\[Error codes]\\\\\\(https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - CreateChatappTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatappTemplateResponse
   */
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
    if (!Util.isUnset(request.allowCategoryChange)) {
      body["AllowCategoryChange"] = request.allowCategoryChange;
    }

    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
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

    if (!Util.isUnset(request.messageSendTtlSeconds)) {
      body["MessageSendTtlSeconds"] = request.messageSendTtlSeconds;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateChatappTemplateResponse>(await this.callApi(params, req, runtime), new CreateChatappTemplateResponse({}));
    } else {
      return $tea.cast<CreateChatappTemplateResponse>(await this.execute(params, req, runtime), new CreateChatappTemplateResponse({}));
    }

  }

  /**
   * The HTTP status code.
   * \\\\\\\\*   Example: OK. This parameter indicates that the request is successful.
   * \\\\\\\\*   Other values indicate that the request fails. For more information, see \\\\\\[Error codes]\\\\\\(https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateChatappTemplateRequest
   * @returns CreateChatappTemplateResponse
   */
  async createChatappTemplate(request: CreateChatappTemplateRequest): Promise<CreateChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - CreateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowResponse
   */
  async createFlowWithOptions(tmpReq: CreateFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoriesShrink)) {
      body["Categories"] = request.categoriesShrink;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateFlowResponse>(await this.callApi(params, req, runtime), new CreateFlowResponse({}));
    } else {
      return $tea.cast<CreateFlowResponse>(await this.execute(params, req, runtime), new CreateFlowResponse({}));
    }

  }

  /**
   * Creates a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateFlowRequest
   * @returns CreateFlowResponse
   */
  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  /**
   * Creates a quick-response (QR) code that contains a message.
   * 
   * @param request - CreatePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePhoneMessageQrdlResponse
   */
  async createPhoneMessageQrdlWithOptions(request: CreatePhoneMessageQrdlRequest, runtime: $Util.RuntimeOptions): Promise<CreatePhoneMessageQrdlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.generateQrImage)) {
      body["GenerateQrImage"] = request.generateQrImage;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.prefilledMessage)) {
      body["PrefilledMessage"] = request.prefilledMessage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePhoneMessageQrdl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreatePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new CreatePhoneMessageQrdlResponse({}));
    } else {
      return $tea.cast<CreatePhoneMessageQrdlResponse>(await this.execute(params, req, runtime), new CreatePhoneMessageQrdlResponse({}));
    }

  }

  /**
   * Creates a quick-response (QR) code that contains a message.
   * 
   * @param request - CreatePhoneMessageQrdlRequest
   * @returns CreatePhoneMessageQrdlResponse
   */
  async createPhoneMessageQrdl(request: CreatePhoneMessageQrdlRequest): Promise<CreatePhoneMessageQrdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to five times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteChatappTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChatappTemplateResponse
   */
  async deleteChatappTemplateWithOptions(request: DeleteChatappTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChatappTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteChatappTemplateResponse>(await this.callApi(params, req, runtime), new DeleteChatappTemplateResponse({}));
    } else {
      return $tea.cast<DeleteChatappTemplateResponse>(await this.execute(params, req, runtime), new DeleteChatappTemplateResponse({}));
    }

  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to five times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteChatappTemplateRequest
   * @returns DeleteChatappTemplateResponse
   */
  async deleteChatappTemplate(request: DeleteChatappTemplateRequest): Promise<DeleteChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a Flow. Only Flows in the DRAFT state can be deleted.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowResponse
   */
  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteFlowResponse>(await this.callApi(params, req, runtime), new DeleteFlowResponse({}));
    } else {
      return $tea.cast<DeleteFlowResponse>(await this.execute(params, req, runtime), new DeleteFlowResponse({}));
    }

  }

  /**
   * Deletes a Flow. Only Flows in the DRAFT state can be deleted.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteFlowRequest
   * @returns DeleteFlowResponse
   */
  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  /**
   * Deletes a quick-response (QR) code that contains a message.
   * 
   * @param request - DeletePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePhoneMessageQrdlResponse
   */
  async deletePhoneMessageQrdlWithOptions(request: DeletePhoneMessageQrdlRequest, runtime: $Util.RuntimeOptions): Promise<DeletePhoneMessageQrdlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.qrdlCode)) {
      body["QrdlCode"] = request.qrdlCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePhoneMessageQrdl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeletePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new DeletePhoneMessageQrdlResponse({}));
    } else {
      return $tea.cast<DeletePhoneMessageQrdlResponse>(await this.execute(params, req, runtime), new DeletePhoneMessageQrdlResponse({}));
    }

  }

  /**
   * Deletes a quick-response (QR) code that contains a message.
   * 
   * @param request - DeletePhoneMessageQrdlRequest
   * @returns DeletePhoneMessageQrdlResponse
   */
  async deletePhoneMessageQrdl(request: DeletePhoneMessageQrdlRequest): Promise<DeletePhoneMessageQrdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * Deprecates a Flow.
   * 
   * @param request - DeprecateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeprecateFlowResponse
   */
  async deprecateFlowWithOptions(request: DeprecateFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeprecateFlowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeprecateFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeprecateFlowResponse>(await this.callApi(params, req, runtime), new DeprecateFlowResponse({}));
    } else {
      return $tea.cast<DeprecateFlowResponse>(await this.execute(params, req, runtime), new DeprecateFlowResponse({}));
    }

  }

  /**
   * Deprecates a Flow.
   * 
   * @param request - DeprecateFlowRequest
   * @returns DeprecateFlowResponse
   */
  async deprecateFlow(request: DeprecateFlowRequest): Promise<DeprecateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deprecateFlowWithOptions(request, runtime);
  }

  /**
   * Enables the statistics on the metrics that are related to WhatsApp.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - EnableWhatsappROIMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableWhatsappROIMetricResponse
   */
  async enableWhatsappROIMetricWithOptions(request: EnableWhatsappROIMetricRequest, runtime: $Util.RuntimeOptions): Promise<EnableWhatsappROIMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableWhatsappROIMetric",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<EnableWhatsappROIMetricResponse>(await this.callApi(params, req, runtime), new EnableWhatsappROIMetricResponse({}));
    } else {
      return $tea.cast<EnableWhatsappROIMetricResponse>(await this.execute(params, req, runtime), new EnableWhatsappROIMetricResponse({}));
    }

  }

  /**
   * Enables the statistics on the metrics that are related to WhatsApp.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - EnableWhatsappROIMetricRequest
   * @returns EnableWhatsappROIMetricResponse
   */
  async enableWhatsappROIMetric(request: EnableWhatsappROIMetricRequest): Promise<EnableWhatsappROIMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWhatsappROIMetricWithOptions(request, runtime);
  }

  /**
   * Queries the number of messages that are sent by using a phone number by a specific metric.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappPhoneNumberMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappPhoneNumberMetricResponse
   */
  async getChatappPhoneNumberMetricWithOptions(request: GetChatappPhoneNumberMetricRequest, runtime: $Util.RuntimeOptions): Promise<GetChatappPhoneNumberMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChatappPhoneNumberMetric",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetChatappPhoneNumberMetricResponse>(await this.callApi(params, req, runtime), new GetChatappPhoneNumberMetricResponse({}));
    } else {
      return $tea.cast<GetChatappPhoneNumberMetricResponse>(await this.execute(params, req, runtime), new GetChatappPhoneNumberMetricResponse({}));
    }

  }

  /**
   * Queries the number of messages that are sent by using a phone number by a specific metric.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappPhoneNumberMetricRequest
   * @returns GetChatappPhoneNumberMetricResponse
   */
  async getChatappPhoneNumberMetric(request: GetChatappPhoneNumberMetricRequest): Promise<GetChatappPhoneNumberMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappPhoneNumberMetricWithOptions(request, runtime);
  }

  /**
   * Queries the information of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this API operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappTemplateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappTemplateDetailResponse
   */
  async getChatappTemplateDetailWithOptions(request: GetChatappTemplateDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetChatappTemplateDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetChatappTemplateDetailResponse>(await this.callApi(params, req, runtime), new GetChatappTemplateDetailResponse({}));
    } else {
      return $tea.cast<GetChatappTemplateDetailResponse>(await this.execute(params, req, runtime), new GetChatappTemplateDetailResponse({}));
    }

  }

  /**
   * Queries the information of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this API operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappTemplateDetailRequest
   * @returns GetChatappTemplateDetailResponse
   */
  async getChatappTemplateDetail(request: GetChatappTemplateDetailRequest): Promise<GetChatappTemplateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappTemplateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the metrics about a marketing template.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappTemplateMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappTemplateMetricResponse
   */
  async getChatappTemplateMetricWithOptions(request: GetChatappTemplateMetricRequest, runtime: $Util.RuntimeOptions): Promise<GetChatappTemplateMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChatappTemplateMetric",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetChatappTemplateMetricResponse>(await this.callApi(params, req, runtime), new GetChatappTemplateMetricResponse({}));
    } else {
      return $tea.cast<GetChatappTemplateMetricResponse>(await this.execute(params, req, runtime), new GetChatappTemplateMetricResponse({}));
    }

  }

  /**
   * Queries the metrics about a marketing template.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappTemplateMetricRequest
   * @returns GetChatappTemplateMetricResponse
   */
  async getChatappTemplateMetric(request: GetChatappTemplateMetricRequest): Promise<GetChatappTemplateMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappTemplateMetricWithOptions(request, runtime);
  }

  /**
   * Obtains the authentication information that is used to upload a file.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappUploadAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappUploadAuthorizationResponse
   */
  async getChatappUploadAuthorizationWithOptions(request: GetChatappUploadAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<GetChatappUploadAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChatappUploadAuthorization",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetChatappUploadAuthorizationResponse>(await this.callApi(params, req, runtime), new GetChatappUploadAuthorizationResponse({}));
    } else {
      return $tea.cast<GetChatappUploadAuthorizationResponse>(await this.execute(params, req, runtime), new GetChatappUploadAuthorizationResponse({}));
    }

  }

  /**
   * Obtains the authentication information that is used to upload a file.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappUploadAuthorizationRequest
   * @returns GetChatappUploadAuthorizationResponse
   */
  async getChatappUploadAuthorization(request: GetChatappUploadAuthorizationRequest): Promise<GetChatappUploadAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappUploadAuthorizationWithOptions(request, runtime);
  }

  /**
   * Obtains a verification code.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappVerifyCodeResponse
   */
  async getChatappVerifyCodeWithOptions(request: GetChatappVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetChatappVerifyCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!Util.isUnset(request.method)) {
      query["Method"] = request.method;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "GetChatappVerifyCode",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetChatappVerifyCodeResponse>(await this.callApi(params, req, runtime), new GetChatappVerifyCodeResponse({}));
    } else {
      return $tea.cast<GetChatappVerifyCodeResponse>(await this.execute(params, req, runtime), new GetChatappVerifyCodeResponse({}));
    }

  }

  /**
   * Obtains a verification code.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappVerifyCodeRequest
   * @returns GetChatappVerifyCodeResponse
   */
  async getChatappVerifyCode(request: GetChatappVerifyCodeRequest): Promise<GetChatappVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Queries the business settings of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCommerceSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommerceSettingResponse
   */
  async getCommerceSettingWithOptions(request: GetCommerceSettingRequest, runtime: $Util.RuntimeOptions): Promise<GetCommerceSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "GetCommerceSetting",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetCommerceSettingResponse>(await this.callApi(params, req, runtime), new GetCommerceSettingResponse({}));
    } else {
      return $tea.cast<GetCommerceSettingResponse>(await this.execute(params, req, runtime), new GetCommerceSettingResponse({}));
    }

  }

  /**
   * Queries the business settings of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCommerceSettingRequest
   * @returns GetCommerceSettingResponse
   */
  async getCommerceSetting(request: GetCommerceSettingRequest): Promise<GetCommerceSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCommerceSettingWithOptions(request, runtime);
  }

  /**
   * Configures welcoming messages, opening remarks, and commands.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetConversationalAutomationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConversationalAutomationResponse
   */
  async getConversationalAutomationWithOptions(request: GetConversationalAutomationRequest, runtime: $Util.RuntimeOptions): Promise<GetConversationalAutomationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "GetConversationalAutomation",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetConversationalAutomationResponse>(await this.callApi(params, req, runtime), new GetConversationalAutomationResponse({}));
    } else {
      return $tea.cast<GetConversationalAutomationResponse>(await this.execute(params, req, runtime), new GetConversationalAutomationResponse({}));
    }

  }

  /**
   * Configures welcoming messages, opening remarks, and commands.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetConversationalAutomationRequest
   * @returns GetConversationalAutomationResponse
   */
  async getConversationalAutomation(request: GetConversationalAutomationRequest): Promise<GetConversationalAutomationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConversationalAutomationWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowResponse
   */
  async getFlowWithOptions(request: GetFlowRequest, runtime: $Util.RuntimeOptions): Promise<GetFlowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetFlowResponse>(await this.callApi(params, req, runtime), new GetFlowResponse({}));
    } else {
      return $tea.cast<GetFlowResponse>(await this.execute(params, req, runtime), new GetFlowResponse({}));
    }

  }

  /**
   * Queries the information about a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetFlowRequest
   * @returns GetFlowResponse
   */
  async getFlow(request: GetFlowRequest): Promise<GetFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowWithOptions(request, runtime);
  }

  /**
   * Queries the JSON content of a Flow.
   * 
   * @param request - GetFlowJSONAssestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowJSONAssestResponse
   */
  async getFlowJSONAssestWithOptions(request: GetFlowJSONAssestRequest, runtime: $Util.RuntimeOptions): Promise<GetFlowJSONAssestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFlowJSONAssest",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetFlowJSONAssestResponse>(await this.callApi(params, req, runtime), new GetFlowJSONAssestResponse({}));
    } else {
      return $tea.cast<GetFlowJSONAssestResponse>(await this.execute(params, req, runtime), new GetFlowJSONAssestResponse({}));
    }

  }

  /**
   * Queries the JSON content of a Flow.
   * 
   * @param request - GetFlowJSONAssestRequest
   * @returns GetFlowJSONAssestResponse
   */
  async getFlowJSONAssest(request: GetFlowJSONAssestRequest): Promise<GetFlowJSONAssestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowJSONAssestWithOptions(request, runtime);
  }

  /**
   * Obtains the preview URL of a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetFlowPreviewUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowPreviewUrlResponse
   */
  async getFlowPreviewUrlWithOptions(request: GetFlowPreviewUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetFlowPreviewUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFlowPreviewUrl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetFlowPreviewUrlResponse>(await this.callApi(params, req, runtime), new GetFlowPreviewUrlResponse({}));
    } else {
      return $tea.cast<GetFlowPreviewUrlResponse>(await this.execute(params, req, runtime), new GetFlowPreviewUrlResponse({}));
    }

  }

  /**
   * Obtains the preview URL of a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetFlowPreviewUrlRequest
   * @returns GetFlowPreviewUrlResponse
   */
  async getFlowPreviewUrl(request: GetFlowPreviewUrlRequest): Promise<GetFlowPreviewUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowPreviewUrlWithOptions(request, runtime);
  }

  /**
   * Obtain the verification code for the migration number.
   * 
   * @remarks
   * The single user QPS limit for this interface is 10 times per second. Exceeding the limit may result in restricted API calls, which may affect your business. Please make reasonable calls.
   * 
   * @param request - GetMigrationVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMigrationVerifyCodeResponse
   */
  async getMigrationVerifyCodeWithOptions(request: GetMigrationVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetMigrationVerifyCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!Util.isUnset(request.method)) {
      query["Method"] = request.method;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMigrationVerifyCode",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetMigrationVerifyCodeResponse>(await this.callApi(params, req, runtime), new GetMigrationVerifyCodeResponse({}));
    } else {
      return $tea.cast<GetMigrationVerifyCodeResponse>(await this.execute(params, req, runtime), new GetMigrationVerifyCodeResponse({}));
    }

  }

  /**
   * Obtain the verification code for the migration number.
   * 
   * @remarks
   * The single user QPS limit for this interface is 10 times per second. Exceeding the limit may result in restricted API calls, which may affect your business. Please make reasonable calls.
   * 
   * @param request - GetMigrationVerifyCodeRequest
   * @returns GetMigrationVerifyCodeResponse
   */
  async getMigrationVerifyCode(request: GetMigrationVerifyCodeRequest): Promise<GetMigrationVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMigrationVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Obtains permissions based on the authorization code obtained from embedded signup.
   * 
   * @param tmpReq - GetPermissionByCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermissionByCodeResponse
   */
  async getPermissionByCodeWithOptions(tmpReq: GetPermissionByCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetPermissionByCodeResponse> {
    Util.validateModel(tmpReq);
    let request = new GetPermissionByCodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.permissionsShrink)) {
      body["Permissions"] = request.permissionsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPermissionByCode",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetPermissionByCodeResponse>(await this.callApi(params, req, runtime), new GetPermissionByCodeResponse({}));
    } else {
      return $tea.cast<GetPermissionByCodeResponse>(await this.execute(params, req, runtime), new GetPermissionByCodeResponse({}));
    }

  }

  /**
   * Obtains permissions based on the authorization code obtained from embedded signup.
   * 
   * @param request - GetPermissionByCodeRequest
   * @returns GetPermissionByCodeResponse
   */
  async getPermissionByCode(request: GetPermissionByCodeRequest): Promise<GetPermissionByCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermissionByCodeWithOptions(request, runtime);
  }

  /**
   * Queries the encryption public key of a phone number.
   * 
   * @param request - GetPhoneEncryptionPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneEncryptionPublicKeyResponse
   */
  async getPhoneEncryptionPublicKeyWithOptions(request: GetPhoneEncryptionPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetPhoneEncryptionPublicKeyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPhoneEncryptionPublicKey",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetPhoneEncryptionPublicKeyResponse>(await this.callApi(params, req, runtime), new GetPhoneEncryptionPublicKeyResponse({}));
    } else {
      return $tea.cast<GetPhoneEncryptionPublicKeyResponse>(await this.execute(params, req, runtime), new GetPhoneEncryptionPublicKeyResponse({}));
    }

  }

  /**
   * Queries the encryption public key of a phone number.
   * 
   * @param request - GetPhoneEncryptionPublicKeyRequest
   * @returns GetPhoneEncryptionPublicKeyResponse
   */
  async getPhoneEncryptionPublicKey(request: GetPhoneEncryptionPublicKeyRequest): Promise<GetPhoneEncryptionPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneEncryptionPublicKeyWithOptions(request, runtime);
  }

  /**
   * Obtains the verification status of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPhoneNumberVerificationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneNumberVerificationStatusResponse
   */
  async getPhoneNumberVerificationStatusWithOptions(request: GetPhoneNumberVerificationStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPhoneNumberVerificationStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPhoneNumberVerificationStatus",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetPhoneNumberVerificationStatusResponse>(await this.callApi(params, req, runtime), new GetPhoneNumberVerificationStatusResponse({}));
    } else {
      return $tea.cast<GetPhoneNumberVerificationStatusResponse>(await this.execute(params, req, runtime), new GetPhoneNumberVerificationStatusResponse({}));
    }

  }

  /**
   * Obtains the verification status of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPhoneNumberVerificationStatusRequest
   * @returns GetPhoneNumberVerificationStatusResponse
   */
  async getPhoneNumberVerificationStatus(request: GetPhoneNumberVerificationStatusRequest): Promise<GetPhoneNumberVerificationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneNumberVerificationStatusWithOptions(request, runtime);
  }

  /**
   * Obtains the ID of a pre-registered phone number used for embedded signup without the need to re-obtain a verification code.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPreValidatePhoneIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPreValidatePhoneIdResponse
   */
  async getPreValidatePhoneIdWithOptions(request: GetPreValidatePhoneIdRequest, runtime: $Util.RuntimeOptions): Promise<GetPreValidatePhoneIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.verifyCode)) {
      body["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPreValidatePhoneId",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetPreValidatePhoneIdResponse>(await this.callApi(params, req, runtime), new GetPreValidatePhoneIdResponse({}));
    } else {
      return $tea.cast<GetPreValidatePhoneIdResponse>(await this.execute(params, req, runtime), new GetPreValidatePhoneIdResponse({}));
    }

  }

  /**
   * Obtains the ID of a pre-registered phone number used for embedded signup without the need to re-obtain a verification code.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPreValidatePhoneIdRequest
   * @returns GetPreValidatePhoneIdResponse
   */
  async getPreValidatePhoneId(request: GetPreValidatePhoneIdRequest): Promise<GetPreValidatePhoneIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPreValidatePhoneIdWithOptions(request, runtime);
  }

  /**
   * Queries the product catalogs that are associated with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetWhatsappConnectionCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWhatsappConnectionCatalogResponse
   */
  async getWhatsappConnectionCatalogWithOptions(request: GetWhatsappConnectionCatalogRequest, runtime: $Util.RuntimeOptions): Promise<GetWhatsappConnectionCatalogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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

    if (!Util.isUnset(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWhatsappConnectionCatalog",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetWhatsappConnectionCatalogResponse>(await this.callApi(params, req, runtime), new GetWhatsappConnectionCatalogResponse({}));
    } else {
      return $tea.cast<GetWhatsappConnectionCatalogResponse>(await this.execute(params, req, runtime), new GetWhatsappConnectionCatalogResponse({}));
    }

  }

  /**
   * Queries the product catalogs that are associated with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetWhatsappConnectionCatalogRequest
   * @returns GetWhatsappConnectionCatalogResponse
   */
  async getWhatsappConnectionCatalog(request: GetWhatsappConnectionCatalogRequest): Promise<GetWhatsappConnectionCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWhatsappConnectionCatalogWithOptions(request, runtime);
  }

  /**
   * Queries the messaging health status of different types of nodes.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetWhatsappHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWhatsappHealthStatusResponse
   */
  async getWhatsappHealthStatusWithOptions(request: GetWhatsappHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetWhatsappHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWhatsappHealthStatus",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetWhatsappHealthStatusResponse>(await this.callApi(params, req, runtime), new GetWhatsappHealthStatusResponse({}));
    } else {
      return $tea.cast<GetWhatsappHealthStatusResponse>(await this.execute(params, req, runtime), new GetWhatsappHealthStatusResponse({}));
    }

  }

  /**
   * Queries the messaging health status of different types of nodes.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetWhatsappHealthStatusRequest
   * @returns GetWhatsappHealthStatusResponse
   */
  async getWhatsappHealthStatus(request: GetWhatsappHealthStatusRequest): Promise<GetWhatsappHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWhatsappHealthStatusWithOptions(request, runtime);
  }

  /**
   * Obtains the application ID under the ISV account.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - IsvGetAppIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsvGetAppIdResponse
   */
  async isvGetAppIdWithOptions(request: IsvGetAppIdRequest, runtime: $Util.RuntimeOptions): Promise<IsvGetAppIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.permissions)) {
      body["Permissions"] = request.permissions;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "IsvGetAppId",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<IsvGetAppIdResponse>(await this.callApi(params, req, runtime), new IsvGetAppIdResponse({}));
    } else {
      return $tea.cast<IsvGetAppIdResponse>(await this.execute(params, req, runtime), new IsvGetAppIdResponse({}));
    }

  }

  /**
   * Obtains the application ID under the ISV account.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - IsvGetAppIdRequest
   * @returns IsvGetAppIdResponse
   */
  async isvGetAppId(request: IsvGetAppIdRequest): Promise<IsvGetAppIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.isvGetAppIdWithOptions(request, runtime);
  }

  /**
   * Queries message templates.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - ListChatappTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatappTemplateResponse
   */
  async listChatappTemplateWithOptions(tmpReq: ListChatappTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListChatappTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new ListChatappTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query = { };
    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListChatappTemplateResponse>(await this.callApi(params, req, runtime), new ListChatappTemplateResponse({}));
    } else {
      return $tea.cast<ListChatappTemplateResponse>(await this.execute(params, req, runtime), new ListChatappTemplateResponse({}));
    }

  }

  /**
   * Queries message templates.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListChatappTemplateRequest
   * @returns ListChatappTemplateResponse
   */
  async listChatappTemplate(request: ListChatappTemplateRequest): Promise<ListChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Queries a list of Flows.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - ListFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowResponse
   */
  async listFlowWithOptions(tmpReq: ListFlowRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowResponse> {
    Util.validateModel(tmpReq);
    let request = new ListFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListFlowResponse>(await this.callApi(params, req, runtime), new ListFlowResponse({}));
    } else {
      return $tea.cast<ListFlowResponse>(await this.execute(params, req, runtime), new ListFlowResponse({}));
    }

  }

  /**
   * Queries a list of Flows.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListFlowRequest
   * @returns ListFlowResponse
   */
  async listFlow(request: ListFlowRequest): Promise<ListFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowWithOptions(request, runtime);
  }

  /**
   * Queries the information about a list of quick-response (QR) codes that contain messages.
   * 
   * @param request - ListPhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPhoneMessageQrdlResponse
   */
  async listPhoneMessageQrdlWithOptions(request: ListPhoneMessageQrdlRequest, runtime: $Util.RuntimeOptions): Promise<ListPhoneMessageQrdlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPhoneMessageQrdl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListPhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new ListPhoneMessageQrdlResponse({}));
    } else {
      return $tea.cast<ListPhoneMessageQrdlResponse>(await this.execute(params, req, runtime), new ListPhoneMessageQrdlResponse({}));
    }

  }

  /**
   * Queries the information about a list of quick-response (QR) codes that contain messages.
   * 
   * @param request - ListPhoneMessageQrdlRequest
   * @returns ListPhoneMessageQrdlResponse
   */
  async listPhoneMessageQrdl(request: ListPhoneMessageQrdlRequest): Promise<ListPhoneMessageQrdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * Queries products in a product catalog.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductResponse
   */
  async listProductWithOptions(request: ListProductRequest, runtime: $Util.RuntimeOptions): Promise<ListProductResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.after)) {
      query["After"] = request.after;
    }

    if (!Util.isUnset(request.before)) {
      query["Before"] = request.before;
    }

    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!Util.isUnset(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProduct",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListProductResponse>(await this.callApi(params, req, runtime), new ListProductResponse({}));
    } else {
      return $tea.cast<ListProductResponse>(await this.execute(params, req, runtime), new ListProductResponse({}));
    }

  }

  /**
   * Queries products in a product catalog.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListProductRequest
   * @returns ListProductResponse
   */
  async listProduct(request: ListProductRequest): Promise<ListProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductWithOptions(request, runtime);
  }

  /**
   * Queries the product catalogs on the Business Manager platform of Meta.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListProductCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductCatalogResponse
   */
  async listProductCatalogWithOptions(request: ListProductCatalogRequest, runtime: $Util.RuntimeOptions): Promise<ListProductCatalogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.after)) {
      query["After"] = request.after;
    }

    if (!Util.isUnset(request.before)) {
      query["Before"] = request.before;
    }

    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
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
      action: "ListProductCatalog",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListProductCatalogResponse>(await this.callApi(params, req, runtime), new ListProductCatalogResponse({}));
    } else {
      return $tea.cast<ListProductCatalogResponse>(await this.execute(params, req, runtime), new ListProductCatalogResponse({}));
    }

  }

  /**
   * Queries the product catalogs on the Business Manager platform of Meta.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListProductCatalogRequest
   * @returns ListProductCatalogResponse
   */
  async listProductCatalog(request: ListProductCatalogRequest): Promise<ListProductCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductCatalogWithOptions(request, runtime);
  }

  /**
   * The code of the message template.
   * 
   * @remarks
   * The name of the message template.
   * 
   * @param tmpReq - ModifyChatappTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyChatappTemplateResponse
   */
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
    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
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

    if (!Util.isUnset(request.messageSendTtlSeconds)) {
      body["MessageSendTtlSeconds"] = request.messageSendTtlSeconds;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateType)) {
      body["TemplateType"] = request.templateType;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ModifyChatappTemplateResponse>(await this.callApi(params, req, runtime), new ModifyChatappTemplateResponse({}));
    } else {
      return $tea.cast<ModifyChatappTemplateResponse>(await this.execute(params, req, runtime), new ModifyChatappTemplateResponse({}));
    }

  }

  /**
   * The code of the message template.
   * 
   * @remarks
   * The name of the message template.
   * 
   * @param request - ModifyChatappTemplateRequest
   * @returns ModifyChatappTemplateResponse
   */
  async modifyChatappTemplate(request: ModifyChatappTemplateRequest): Promise<ModifyChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information about a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - ModifyFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFlowResponse
   */
  async modifyFlowWithOptions(tmpReq: ModifyFlowRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoriesShrink)) {
      body["Categories"] = request.categoriesShrink;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ModifyFlowResponse>(await this.callApi(params, req, runtime), new ModifyFlowResponse({}));
    } else {
      return $tea.cast<ModifyFlowResponse>(await this.execute(params, req, runtime), new ModifyFlowResponse({}));
    }

  }

  /**
   * Modifies the basic information about a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyFlowRequest
   * @returns ModifyFlowResponse
   */
  async modifyFlow(request: ModifyFlowRequest): Promise<ModifyFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * ModifyPhoneBusinessProfile
   * 
   * @param tmpReq - ModifyPhoneBusinessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPhoneBusinessProfileResponse
   */
  async modifyPhoneBusinessProfileWithOptions(tmpReq: ModifyPhoneBusinessProfileRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPhoneBusinessProfileResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyPhoneBusinessProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.websites)) {
      request.websitesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.websites, "Websites", "json");
    }

    let query = { };
    if (!Util.isUnset(request.about)) {
      query["About"] = request.about;
    }

    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.profilePictureUrl)) {
      query["ProfilePictureUrl"] = request.profilePictureUrl;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vertical)) {
      query["Vertical"] = request.vertical;
    }

    if (!Util.isUnset(request.websitesShrink)) {
      query["Websites"] = request.websitesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPhoneBusinessProfile",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ModifyPhoneBusinessProfileResponse>(await this.callApi(params, req, runtime), new ModifyPhoneBusinessProfileResponse({}));
    } else {
      return $tea.cast<ModifyPhoneBusinessProfileResponse>(await this.execute(params, req, runtime), new ModifyPhoneBusinessProfileResponse({}));
    }

  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * ModifyPhoneBusinessProfile
   * 
   * @param request - ModifyPhoneBusinessProfileRequest
   * @returns ModifyPhoneBusinessProfileResponse
   */
  async modifyPhoneBusinessProfile(request: ModifyPhoneBusinessProfileRequest): Promise<ModifyPhoneBusinessProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPhoneBusinessProfileWithOptions(request, runtime);
  }

  /**
   * Publishes a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PublishFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFlowResponse
   */
  async publishFlowWithOptions(request: PublishFlowRequest, runtime: $Util.RuntimeOptions): Promise<PublishFlowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<PublishFlowResponse>(await this.callApi(params, req, runtime), new PublishFlowResponse({}));
    } else {
      return $tea.cast<PublishFlowResponse>(await this.execute(params, req, runtime), new PublishFlowResponse({}));
    }

  }

  /**
   * Publishes a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PublishFlowRequest
   * @returns PublishFlowResponse
   */
  async publishFlow(request: PublishFlowRequest): Promise<PublishFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishFlowWithOptions(request, runtime);
  }

  /**
   * Query the WhatsApp Business account you associate with ChatApp.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryChatappBindWabaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChatappBindWabaResponse
   */
  async queryChatappBindWabaWithOptions(request: QueryChatappBindWabaRequest, runtime: $Util.RuntimeOptions): Promise<QueryChatappBindWabaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
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
      action: "QueryChatappBindWaba",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<QueryChatappBindWabaResponse>(await this.callApi(params, req, runtime), new QueryChatappBindWabaResponse({}));
    } else {
      return $tea.cast<QueryChatappBindWabaResponse>(await this.execute(params, req, runtime), new QueryChatappBindWabaResponse({}));
    }

  }

  /**
   * Query the WhatsApp Business account you associate with ChatApp.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryChatappBindWabaRequest
   * @returns QueryChatappBindWabaResponse
   */
  async queryChatappBindWaba(request: QueryChatappBindWabaRequest): Promise<QueryChatappBindWabaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChatappBindWabaWithOptions(request, runtime);
  }

  /**
   * Queries phone numbers that receive messages and statuses of these numbers under a specified user.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryChatappPhoneNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChatappPhoneNumbersResponse
   */
  async queryChatappPhoneNumbersWithOptions(request: QueryChatappPhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<QueryChatappPhoneNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryChatappPhoneNumbers",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<QueryChatappPhoneNumbersResponse>(await this.callApi(params, req, runtime), new QueryChatappPhoneNumbersResponse({}));
    } else {
      return $tea.cast<QueryChatappPhoneNumbersResponse>(await this.execute(params, req, runtime), new QueryChatappPhoneNumbersResponse({}));
    }

  }

  /**
   * Queries phone numbers that receive messages and statuses of these numbers under a specified user.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryChatappPhoneNumbersRequest
   * @returns QueryChatappPhoneNumbersResponse
   */
  async queryChatappPhoneNumbers(request: QueryChatappPhoneNumbersRequest): Promise<QueryChatappPhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChatappPhoneNumbersWithOptions(request, runtime);
  }

  /**
   * Queries the business information of the account to which a specified phone number is bound.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryPhoneBusinessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneBusinessProfileResponse
   */
  async queryPhoneBusinessProfileWithOptions(request: QueryPhoneBusinessProfileRequest, runtime: $Util.RuntimeOptions): Promise<QueryPhoneBusinessProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "QueryPhoneBusinessProfile",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<QueryPhoneBusinessProfileResponse>(await this.callApi(params, req, runtime), new QueryPhoneBusinessProfileResponse({}));
    } else {
      return $tea.cast<QueryPhoneBusinessProfileResponse>(await this.execute(params, req, runtime), new QueryPhoneBusinessProfileResponse({}));
    }

  }

  /**
   * Queries the business information of the account to which a specified phone number is bound.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryPhoneBusinessProfileRequest
   * @returns QueryPhoneBusinessProfileResponse
   */
  async queryPhoneBusinessProfile(request: QueryPhoneBusinessProfileRequest): Promise<QueryPhoneBusinessProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPhoneBusinessProfileWithOptions(request, runtime);
  }

  /**
   * Queries the business information about the WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryWabaBusinessInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWabaBusinessInfoResponse
   */
  async queryWabaBusinessInfoWithOptions(request: QueryWabaBusinessInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryWabaBusinessInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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

    if (!Util.isUnset(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryWabaBusinessInfo",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<QueryWabaBusinessInfoResponse>(await this.callApi(params, req, runtime), new QueryWabaBusinessInfoResponse({}));
    } else {
      return $tea.cast<QueryWabaBusinessInfoResponse>(await this.execute(params, req, runtime), new QueryWabaBusinessInfoResponse({}));
    }

  }

  /**
   * Queries the business information about the WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryWabaBusinessInfoRequest
   * @returns QueryWabaBusinessInfoResponse
   */
  async queryWabaBusinessInfo(request: QueryWabaBusinessInfoRequest): Promise<QueryWabaBusinessInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWabaBusinessInfoWithOptions(request, runtime);
  }

  /**
   * Sends a message to multiple phone numbers by using ChatAPP at a time.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * You can send messages to up to 1,000 phone numbers in a single request.
   * 
   * @param tmpReq - SendChatappMassMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendChatappMassMessageResponse
   */
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

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.fallBackContent)) {
      body["FallBackContent"] = request.fallBackContent;
    }

    if (!Util.isUnset(request.fallBackDuration)) {
      body["FallBackDuration"] = request.fallBackDuration;
    }

    if (!Util.isUnset(request.fallBackId)) {
      body["FallBackId"] = request.fallBackId;
    }

    if (!Util.isUnset(request.fallBackRule)) {
      body["FallBackRule"] = request.fallBackRule;
    }

    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    if (!Util.isUnset(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.senderListShrink)) {
      body["SenderList"] = request.senderListShrink;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.ttl)) {
      body["Ttl"] = request.ttl;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<SendChatappMassMessageResponse>(await this.callApi(params, req, runtime), new SendChatappMassMessageResponse({}));
    } else {
      return $tea.cast<SendChatappMassMessageResponse>(await this.execute(params, req, runtime), new SendChatappMassMessageResponse({}));
    }

  }

  /**
   * Sends a message to multiple phone numbers by using ChatAPP at a time.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * You can send messages to up to 1,000 phone numbers in a single request.
   * 
   * @param request - SendChatappMassMessageRequest
   * @returns SendChatappMassMessageResponse
   */
  async sendChatappMassMessage(request: SendChatappMassMessageRequest): Promise<SendChatappMassMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendChatappMassMessageWithOptions(request, runtime);
  }

  /**
   * Sends messages by using ChatAPP.
   * 
   * @remarks
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - SendChatappMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendChatappMessageResponse
   */
  async sendChatappMessageWithOptions(tmpReq: SendChatappMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendChatappMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new SendChatappMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.flowAction)) {
      request.flowActionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flowAction, "FlowAction", "json");
    }

    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.productAction)) {
      request.productActionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productAction, "ProductAction", "json");
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

    if (!Util.isUnset(request.contextMessageId)) {
      body["ContextMessageId"] = request.contextMessageId;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!Util.isUnset(request.fallBackContent)) {
      body["FallBackContent"] = request.fallBackContent;
    }

    if (!Util.isUnset(request.fallBackDuration)) {
      body["FallBackDuration"] = request.fallBackDuration;
    }

    if (!Util.isUnset(request.fallBackId)) {
      body["FallBackId"] = request.fallBackId;
    }

    if (!Util.isUnset(request.fallBackRule)) {
      body["FallBackRule"] = request.fallBackRule;
    }

    if (!Util.isUnset(request.flowActionShrink)) {
      body["FlowAction"] = request.flowActionShrink;
    }

    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    if (!Util.isUnset(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.messageType)) {
      body["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.productActionShrink)) {
      body["ProductAction"] = request.productActionShrink;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateParamsShrink)) {
      body["TemplateParams"] = request.templateParamsShrink;
    }

    if (!Util.isUnset(request.to)) {
      body["To"] = request.to;
    }

    if (!Util.isUnset(request.trackingData)) {
      body["TrackingData"] = request.trackingData;
    }

    if (!Util.isUnset(request.ttl)) {
      body["Ttl"] = request.ttl;
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
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<SendChatappMessageResponse>(await this.callApi(params, req, runtime), new SendChatappMessageResponse({}));
    } else {
      return $tea.cast<SendChatappMessageResponse>(await this.execute(params, req, runtime), new SendChatappMessageResponse({}));
    }

  }

  /**
   * Sends messages by using ChatAPP.
   * 
   * @remarks
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendChatappMessageRequest
   * @returns SendChatappMessageResponse
   */
  async sendChatappMessage(request: SendChatappMessageRequest): Promise<SendChatappMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendChatappMessageWithOptions(request, runtime);
  }

  /**
   * Submits the agreement information for independent software vendor (ISV) customers.
   * 
   * @remarks
   *   You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * *   After you call the [GetChatappUploadAuthorization](~~GetChatappUploadAuthorization~~) operation to obtain the authentication information for uploading the file to Object Storage Service (OSS), you can use the authentication information to upload the file to the OSS server. To upload the file, you can call the SDK provided by OSS. When you upload the file, set the value of the key to the value of `Dir + "/" + file name`, such as C200293990209/isvTerms.pdf. The value of Dir is obtained from the [GetChatappUploadAuthorization](~~GetChatappUploadAuthorization~~) operation. The value of IsvTerms is obtained from the PutObject operation.
   * 
   * @param request - SubmitIsvCustomerTermsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIsvCustomerTermsResponse
   */
  async submitIsvCustomerTermsWithOptions(request: SubmitIsvCustomerTermsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitIsvCustomerTermsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessDesc)) {
      query["BusinessDesc"] = request.businessDesc;
    }

    if (!Util.isUnset(request.contactMail)) {
      query["ContactMail"] = request.contactMail;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.custName)) {
      query["CustName"] = request.custName;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.isvTerms)) {
      query["IsvTerms"] = request.isvTerms;
    }

    if (!Util.isUnset(request.officeAddress)) {
      query["OfficeAddress"] = request.officeAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitIsvCustomerTerms",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<SubmitIsvCustomerTermsResponse>(await this.callApi(params, req, runtime), new SubmitIsvCustomerTermsResponse({}));
    } else {
      return $tea.cast<SubmitIsvCustomerTermsResponse>(await this.execute(params, req, runtime), new SubmitIsvCustomerTermsResponse({}));
    }

  }

  /**
   * Submits the agreement information for independent software vendor (ISV) customers.
   * 
   * @remarks
   *   You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * *   After you call the [GetChatappUploadAuthorization](~~GetChatappUploadAuthorization~~) operation to obtain the authentication information for uploading the file to Object Storage Service (OSS), you can use the authentication information to upload the file to the OSS server. To upload the file, you can call the SDK provided by OSS. When you upload the file, set the value of the key to the value of `Dir + "/" + file name`, such as C200293990209/isvTerms.pdf. The value of Dir is obtained from the [GetChatappUploadAuthorization](~~GetChatappUploadAuthorization~~) operation. The value of IsvTerms is obtained from the PutObject operation.
   * 
   * @param request - SubmitIsvCustomerTermsRequest
   * @returns SubmitIsvCustomerTermsResponse
   */
  async submitIsvCustomerTerms(request: SubmitIsvCustomerTermsRequest): Promise<SubmitIsvCustomerTermsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitIsvCustomerTermsWithOptions(request, runtime);
  }

  /**
   * Trigger an Online ChatFlow
   * 
   * @remarks
   * After triggering an online flow, if your flow contains components that incur costs for cloud products, such as message sending or function calls, please ensure you fully understand the billing methods and prices of the related products before using this interface.
   * 
   * @param tmpReq - TriggerChatFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerChatFlowResponse
   */
  async triggerChatFlowWithOptions(tmpReq: TriggerChatFlowRequest, runtime: $Util.RuntimeOptions): Promise<TriggerChatFlowResponse> {
    Util.validateModel(tmpReq);
    let request = new TriggerChatFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.data)) {
      request.dataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.data, "Data", "json");
    }

    let query = { };
    if (!Util.isUnset(request.claimTimeMillis)) {
      query["ClaimTimeMillis"] = request.claimTimeMillis;
    }

    if (!Util.isUnset(request.dataShrink)) {
      query["Data"] = request.dataShrink;
    }

    if (!Util.isUnset(request.discardTimeMillis)) {
      query["DiscardTimeMillis"] = request.discardTimeMillis;
    }

    if (!Util.isUnset(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
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

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerChatFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<TriggerChatFlowResponse>(await this.callApi(params, req, runtime), new TriggerChatFlowResponse({}));
    } else {
      return $tea.cast<TriggerChatFlowResponse>(await this.execute(params, req, runtime), new TriggerChatFlowResponse({}));
    }

  }

  /**
   * Trigger an Online ChatFlow
   * 
   * @remarks
   * After triggering an online flow, if your flow contains components that incur costs for cloud products, such as message sending or function calls, please ensure you fully understand the billing methods and prices of the related products before using this interface.
   * 
   * @param request - TriggerChatFlowRequest
   * @returns TriggerChatFlowResponse
   */
  async triggerChatFlow(request: TriggerChatFlowRequest): Promise<TriggerChatFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerChatFlowWithOptions(request, runtime);
  }

  /**
   * Modifies the callback URL of an account.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateAccountWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountWebhookResponse
   */
  async updateAccountWebhookWithOptions(request: UpdateAccountWebhookRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccountWebhookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.httpFlag)) {
      query["HttpFlag"] = request.httpFlag;
    }

    if (!Util.isUnset(request.queueFlag)) {
      query["QueueFlag"] = request.queueFlag;
    }

    if (!Util.isUnset(request.statusCallbackUrl)) {
      query["StatusCallbackUrl"] = request.statusCallbackUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccountWebhook",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateAccountWebhookResponse>(await this.callApi(params, req, runtime), new UpdateAccountWebhookResponse({}));
    } else {
      return $tea.cast<UpdateAccountWebhookResponse>(await this.execute(params, req, runtime), new UpdateAccountWebhookResponse({}));
    }

  }

  /**
   * Modifies the callback URL of an account.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateAccountWebhookRequest
   * @returns UpdateAccountWebhookResponse
   */
  async updateAccountWebhook(request: UpdateAccountWebhookRequest): Promise<UpdateAccountWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccountWebhookWithOptions(request, runtime);
  }

  /**
   * Modifies the business settings of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateCommerceSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCommerceSettingResponse
   */
  async updateCommerceSettingWithOptions(request: UpdateCommerceSettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCommerceSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cartEnable)) {
      query["CartEnable"] = request.cartEnable;
    }

    if (!Util.isUnset(request.catalogVisible)) {
      query["CatalogVisible"] = request.catalogVisible;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "UpdateCommerceSetting",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateCommerceSettingResponse>(await this.callApi(params, req, runtime), new UpdateCommerceSettingResponse({}));
    } else {
      return $tea.cast<UpdateCommerceSettingResponse>(await this.execute(params, req, runtime), new UpdateCommerceSettingResponse({}));
    }

  }

  /**
   * Modifies the business settings of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateCommerceSettingRequest
   * @returns UpdateCommerceSettingResponse
   */
  async updateCommerceSetting(request: UpdateCommerceSettingRequest): Promise<UpdateCommerceSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCommerceSettingWithOptions(request, runtime);
  }

  /**
   * Modifies welcoming messages, opening remarks, and commands for a phone number.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - UpdateConversationalAutomationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConversationalAutomationResponse
   */
  async updateConversationalAutomationWithOptions(tmpReq: UpdateConversationalAutomationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConversationalAutomationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateConversationalAutomationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.commands)) {
      request.commandsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commands, "Commands", "json");
    }

    if (!Util.isUnset(tmpReq.prompts)) {
      request.promptsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.prompts, "Prompts", "json");
    }

    let query = { };
    if (!Util.isUnset(request.commandsShrink)) {
      query["Commands"] = request.commandsShrink;
    }

    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.enableWelcomeMessage)) {
      query["EnableWelcomeMessage"] = request.enableWelcomeMessage;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.promptsShrink)) {
      query["Prompts"] = request.promptsShrink;
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
      action: "UpdateConversationalAutomation",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateConversationalAutomationResponse>(await this.callApi(params, req, runtime), new UpdateConversationalAutomationResponse({}));
    } else {
      return $tea.cast<UpdateConversationalAutomationResponse>(await this.execute(params, req, runtime), new UpdateConversationalAutomationResponse({}));
    }

  }

  /**
   * Modifies welcoming messages, opening remarks, and commands for a phone number.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateConversationalAutomationRequest
   * @returns UpdateConversationalAutomationResponse
   */
  async updateConversationalAutomation(request: UpdateConversationalAutomationRequest): Promise<UpdateConversationalAutomationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConversationalAutomationWithOptions(request, runtime);
  }

  /**
   * Updates a Flow by using JSON content.
   * 
   * @param request - UpdateFlowJSONAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowJSONAssetResponse
   */
  async updateFlowJSONAssetWithOptions(request: UpdateFlowJSONAssetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlowJSONAssetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFlowJSONAsset",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateFlowJSONAssetResponse>(await this.callApi(params, req, runtime), new UpdateFlowJSONAssetResponse({}));
    } else {
      return $tea.cast<UpdateFlowJSONAssetResponse>(await this.execute(params, req, runtime), new UpdateFlowJSONAssetResponse({}));
    }

  }

  /**
   * Updates a Flow by using JSON content.
   * 
   * @param request - UpdateFlowJSONAssetRequest
   * @returns UpdateFlowJSONAssetResponse
   */
  async updateFlowJSONAsset(request: UpdateFlowJSONAssetRequest): Promise<UpdateFlowJSONAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlowJSONAssetWithOptions(request, runtime);
  }

  /**
   * Updates the encryption public key of a phone number.
   * 
   * @param request - UpdatePhoneEncryptionPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePhoneEncryptionPublicKeyResponse
   */
  async updatePhoneEncryptionPublicKeyWithOptions(request: UpdatePhoneEncryptionPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePhoneEncryptionPublicKeyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.encryptionPublicKey)) {
      body["EncryptionPublicKey"] = request.encryptionPublicKey;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePhoneEncryptionPublicKey",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdatePhoneEncryptionPublicKeyResponse>(await this.callApi(params, req, runtime), new UpdatePhoneEncryptionPublicKeyResponse({}));
    } else {
      return $tea.cast<UpdatePhoneEncryptionPublicKeyResponse>(await this.execute(params, req, runtime), new UpdatePhoneEncryptionPublicKeyResponse({}));
    }

  }

  /**
   * Updates the encryption public key of a phone number.
   * 
   * @param request - UpdatePhoneEncryptionPublicKeyRequest
   * @returns UpdatePhoneEncryptionPublicKeyResponse
   */
  async updatePhoneEncryptionPublicKey(request: UpdatePhoneEncryptionPublicKeyRequest): Promise<UpdatePhoneEncryptionPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhoneEncryptionPublicKeyWithOptions(request, runtime);
  }

  /**
   * Modifies a quick-response (QR) code that contains a message.
   * 
   * @param request - UpdatePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePhoneMessageQrdlResponse
   */
  async updatePhoneMessageQrdlWithOptions(request: UpdatePhoneMessageQrdlRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePhoneMessageQrdlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.generateQrImage)) {
      body["GenerateQrImage"] = request.generateQrImage;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.prefilledMessage)) {
      body["PrefilledMessage"] = request.prefilledMessage;
    }

    if (!Util.isUnset(request.qrdlCode)) {
      body["QrdlCode"] = request.qrdlCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePhoneMessageQrdl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdatePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new UpdatePhoneMessageQrdlResponse({}));
    } else {
      return $tea.cast<UpdatePhoneMessageQrdlResponse>(await this.execute(params, req, runtime), new UpdatePhoneMessageQrdlResponse({}));
    }

  }

  /**
   * Modifies a quick-response (QR) code that contains a message.
   * 
   * @param request - UpdatePhoneMessageQrdlRequest
   * @returns UpdatePhoneMessageQrdlResponse
   */
  async updatePhoneMessageQrdl(request: UpdatePhoneMessageQrdlRequest): Promise<UpdatePhoneMessageQrdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * The HTTP status code returned.
   * \\*   A value of OK indicates that the call is successful.
   * \\*   Other values indicate that the call fails. For more information, see [Error codes]\\(~~196974~~).
   * 
   * @remarks
   * The error message returned.
   * 
   * @param request - UpdatePhoneWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePhoneWebhookResponse
   */
  async updatePhoneWebhookWithOptions(request: UpdatePhoneWebhookRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePhoneWebhookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!Util.isUnset(request.httpFlag)) {
      query["HttpFlag"] = request.httpFlag;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.queueFlag)) {
      query["QueueFlag"] = request.queueFlag;
    }

    if (!Util.isUnset(request.statusCallbackUrl)) {
      query["StatusCallbackUrl"] = request.statusCallbackUrl;
    }

    if (!Util.isUnset(request.upCallbackUrl)) {
      query["UpCallbackUrl"] = request.upCallbackUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePhoneWebhook",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdatePhoneWebhookResponse>(await this.callApi(params, req, runtime), new UpdatePhoneWebhookResponse({}));
    } else {
      return $tea.cast<UpdatePhoneWebhookResponse>(await this.execute(params, req, runtime), new UpdatePhoneWebhookResponse({}));
    }

  }

  /**
   * The HTTP status code returned.
   * \\*   A value of OK indicates that the call is successful.
   * \\*   Other values indicate that the call fails. For more information, see [Error codes]\\(~~196974~~).
   * 
   * @remarks
   * The error message returned.
   * 
   * @param request - UpdatePhoneWebhookRequest
   * @returns UpdatePhoneWebhookResponse
   */
  async updatePhoneWebhook(request: UpdatePhoneWebhookRequest): Promise<UpdatePhoneWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhoneWebhookWithOptions(request, runtime);
  }

}
