// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddChatappPhoneNumberRequest extends $tea.Model {
  cc?: string;
  custSpaceId?: string;
  ownerId?: number;
  phoneNumber?: string;
  preValidateId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  requestId?: string;
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
  chatBotInstanceId?: string;
  custSpaceId?: string;
  isvCode?: string;
  perspective?: string[];
  recommendNum?: number;
  sessionId?: string;
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
  chatBotInstanceId?: string;
  custSpaceId?: string;
  isvCode?: string;
  perspectiveShrink?: string;
  recommendNum?: number;
  sessionId?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: BeeBotAssociateResponseBodyData;
  message?: string;
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
  chatBotInstanceId?: string;
  custSpaceId?: string;
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
  chatBotInstanceId?: string;
  custSpaceId?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: BeeBotChatResponseBodyData;
  message?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: ChatappBindWabaResponseBodyData;
  message?: string;
  requestId?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
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
  custSpaceId?: string;
  phoneNumber?: string;
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
  code?: string;
  data?: ChatappMigrationVerifiedResponseBodyData;
  message?: string;
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
  custSpaceId?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
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
  custSpaceId?: string;
  ownerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  requestId?: string;
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
  code?: string;
  message?: string;
  phoneNumbers?: ChatappSyncPhoneNumberResponseBodyPhoneNumbers[];
  requestId?: string;
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
  custSpaceId?: string;
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  code?: string;
  message?: string;
  requestId?: string;
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
  countryCode?: string;
  custSpaceId?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: CreateChatappMigrationInitiateResponseBodyData;
  message?: string;
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
  allowCategoryChange?: boolean;
  category?: string;
  components?: CreateChatappTemplateRequestComponents[];
  custSpaceId?: string;
  custWabaId?: string;
  example?: { [key: string]: string };
  isvCode?: string;
  language?: string;
  messageSendTtlSeconds?: number;
  name?: string;
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
  allowCategoryChange?: boolean;
  category?: string;
  componentsShrink?: string;
  custSpaceId?: string;
  custWabaId?: string;
  exampleShrink?: string;
  isvCode?: string;
  language?: string;
  messageSendTtlSeconds?: number;
  name?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: CreateChatappTemplateResponseBodyData;
  message?: string;
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
  categories?: string[];
  custSpaceId?: string;
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
  categoriesShrink?: string;
  custSpaceId?: string;
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
  code?: string;
  data?: CreateFlowResponseBodyData;
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
  custSpaceId?: string;
  generateQrImage?: string;
  phoneNumber?: string;
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
  code?: string;
  data?: CreatePhoneMessageQrdlResponseBodyData;
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
  custSpaceId?: string;
  custWabaId?: string;
  isvCode?: string;
  language?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
  templateName?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
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
  custSpaceId?: string;
  phoneNumber?: string;
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
  custSpaceId?: string;
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
  custSpaceId?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
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
  custSpaceId?: string;
  end?: number;
  granularity?: string;
  isvCode?: string;
  phoneNumber?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: GetChatappPhoneNumberMetricResponseBodyData[];
  message?: string;
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
  custSpaceId?: string;
  custWabaId?: string;
  isvCode?: string;
  language?: string;
  templateCode?: string;
  templateName?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: GetChatappTemplateDetailResponseBodyData;
  message?: string;
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
  custSpaceId?: string;
  end?: number;
  granularity?: string;
  isvCode?: string;
  language?: string;
  start?: number;
  templateCode?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: GetChatappTemplateMetricResponseBodyData[];
  message?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: GetChatappUploadAuthorizationResponseBodyData;
  message?: string;
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
  custSpaceId?: string;
  locale?: string;
  method?: string;
  ownerId?: number;
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
  code?: string;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
  ownerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: GetCommerceSettingResponseBodyData;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
  ownerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: GetConversationalAutomationResponseBodyData;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
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
  code?: string;
  data?: GetFlowResponseBodyData;
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
  custSpaceId?: string;
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
  code?: string;
  data?: GetFlowJSONAssestResponseBodyData;
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
  custSpaceId?: string;
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
  code?: string;
  data?: GetFlowPreviewUrlResponseBodyData;
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
  custSpaceId?: string;
  locale?: string;
  method?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: GetMigrationVerifyCodeResponseBodyData;
  message?: string;
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
  code?: string;
  custSpaceId?: string;
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
  code?: string;
  custSpaceId?: string;
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
  custSpaceId?: string;
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
  code?: string;
  data?: GetPhoneEncryptionPublicKeyResponseBodyData;
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
  custSpaceId?: string;
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
  code?: string;
  data?: GetPhoneNumberVerificationStatusResponseBodyData;
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
  phoneNumber?: string;
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
  code?: string;
  data?: GetPreValidatePhoneIdResponseBodyData;
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
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  model?: { [key: string]: any };
  requestId?: string;
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
  custSpaceId?: string;
  language?: string;
  nodeType?: string;
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: GetWhatsappHealthStatusResponseBodyData;
  message?: string;
  requestId?: string;
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
  permissions?: string;
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
  accessDeniedDetail?: string;
  appId?: string;
  code?: string;
  configId?: string;
  message?: string;
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
  auditStatus?: string;
  code?: string;
  custSpaceId?: string;
  custWabaId?: string;
  isvCode?: string;
  language?: string;
  name?: string;
  page?: ListChatappTemplateRequestPage;
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
  auditStatus?: string;
  code?: string;
  custSpaceId?: string;
  custWabaId?: string;
  isvCode?: string;
  language?: string;
  name?: string;
  pageShrink?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  listTemplate?: ListChatappTemplateResponseBodyListTemplate[];
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
  flowName?: string;
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
  custSpaceId?: string;
  flowName?: string;
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
  code?: string;
  data?: ListFlowResponseBodyData[];
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
  custSpaceId?: string;
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
  code?: string;
  data?: ListPhoneMessageQrdlResponseBodyData[];
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
  after?: string;
  before?: string;
  catalogId?: string;
  custSpaceId?: string;
  fields?: string;
  limit?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  model?: ListProductResponseBodyModel;
  requestId?: string;
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
  after?: string;
  before?: string;
  businessId?: number;
  custSpaceId?: string;
  fields?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  model?: ListProductCatalogResponseBodyModel;
  requestId?: string;
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
  category?: string;
  components?: ModifyChatappTemplateRequestComponents[];
  custSpaceId?: string;
  custWabaId?: string;
  example?: { [key: string]: string };
  isvCode?: string;
  language?: string;
  messageSendTtlSeconds?: number;
  templateCode?: string;
  templateName?: string;
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
  category?: string;
  componentsShrink?: string;
  custSpaceId?: string;
  custWabaId?: string;
  exampleShrink?: string;
  isvCode?: string;
  language?: string;
  messageSendTtlSeconds?: number;
  templateCode?: string;
  templateName?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: ModifyChatappTemplateResponseBodyData;
  message?: string;
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
  categories?: string[];
  custSpaceId?: string;
  flowId?: string;
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
  categoriesShrink?: string;
  custSpaceId?: string;
  flowId?: string;
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
  code?: string;
  data?: ModifyFlowResponseBodyData;
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
  about?: string;
  address?: string;
  custSpaceId?: string;
  description?: string;
  email?: string;
  ownerId?: number;
  phoneNumber?: string;
  profilePictureUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vertical?: string;
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
  about?: string;
  address?: string;
  custSpaceId?: string;
  description?: string;
  email?: string;
  ownerId?: number;
  phoneNumber?: string;
  profilePictureUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vertical?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
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
  custSpaceId?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: QueryChatappBindWabaResponseBodyData;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
  isvCode?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      isvCode: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  phoneNumbers?: QueryChatappPhoneNumbersResponseBodyPhoneNumbers[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      phoneNumbers: 'PhoneNumbers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      phoneNumbers: { 'type': 'array', 'itemType': QueryChatappPhoneNumbersResponseBodyPhoneNumbers },
      requestId: 'string',
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
  custSpaceId?: string;
  ownerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: QueryPhoneBusinessProfileResponseBodyData;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: QueryWabaBusinessInfoResponseBodyData;
  message?: string;
  requestId?: string;
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
  channelType?: string;
  custSpaceId?: string;
  custWabaId?: string;
  fallBackContent?: string;
  fallBackDuration?: number;
  fallBackId?: string;
  fallBackRule?: string;
  from?: string;
  isvCode?: string;
  label?: string;
  language?: string;
  senderList?: SendChatappMassMessageRequestSenderList[];
  tag?: string;
  taskId?: string;
  templateCode?: string;
  templateName?: string;
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
  channelType?: string;
  custSpaceId?: string;
  custWabaId?: string;
  fallBackContent?: string;
  fallBackDuration?: number;
  fallBackId?: string;
  fallBackRule?: string;
  from?: string;
  isvCode?: string;
  label?: string;
  language?: string;
  senderListShrink?: string;
  tag?: string;
  taskId?: string;
  templateCode?: string;
  templateName?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  groupMessageId?: string;
  message?: string;
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
  channelType?: string;
  content?: string;
  contextMessageId?: string;
  custSpaceId?: string;
  custWabaId?: string;
  fallBackContent?: string;
  fallBackDuration?: number;
  fallBackId?: string;
  fallBackRule?: string;
  flowAction?: SendChatappMessageRequestFlowAction;
  from?: string;
  isvCode?: string;
  label?: string;
  language?: string;
  messageType?: string;
  payload?: string[];
  productAction?: SendChatappMessageRequestProductAction;
  tag?: string;
  taskId?: string;
  templateCode?: string;
  templateName?: string;
  templateParams?: { [key: string]: string };
  to?: string;
  trackingData?: string;
  ttl?: number;
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
  channelType?: string;
  content?: string;
  contextMessageId?: string;
  custSpaceId?: string;
  custWabaId?: string;
  fallBackContent?: string;
  fallBackDuration?: number;
  fallBackId?: string;
  fallBackRule?: string;
  flowActionShrink?: string;
  from?: string;
  isvCode?: string;
  label?: string;
  language?: string;
  messageType?: string;
  payloadShrink?: string;
  productActionShrink?: string;
  tag?: string;
  taskId?: string;
  templateCode?: string;
  templateName?: string;
  templateParamsShrink?: string;
  to?: string;
  trackingData?: string;
  ttl?: number;
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
  businessDesc?: string;
  contactMail?: string;
  countryId?: string;
  custName?: string;
  custSpaceId?: string;
  isvTerms?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
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

export class UpdateAccountWebhookRequest extends $tea.Model {
  custSpaceId?: string;
  httpFlag?: string;
  queueFlag?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
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
  cartEnable?: boolean;
  catalogVisible?: boolean;
  custSpaceId?: string;
  ownerId?: number;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  requestId?: string;
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
  commands?: UpdateConversationalAutomationRequestCommands[];
  custSpaceId?: string;
  enableWelcomeMessage?: boolean;
  ownerId?: number;
  phoneNumber?: string;
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
  commandsShrink?: string;
  custSpaceId?: string;
  enableWelcomeMessage?: boolean;
  ownerId?: number;
  phoneNumber?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  requestId?: string;
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
  custSpaceId?: string;
  filePath?: string;
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
  code?: string;
  data?: UpdateFlowJSONAssetResponseBodyData;
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
  custSpaceId?: string;
  encryptionPublicKey?: string;
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
  custSpaceId?: string;
  generateQrImage?: string;
  phoneNumber?: string;
  prefilledMessage?: string;
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
  code?: string;
  data?: UpdatePhoneMessageQrdlResponseBodyData;
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
  custSpaceId?: string;
  httpFlag?: string;
  phoneNumber?: string;
  queueFlag?: string;
  statusCallbackUrl?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
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

export class ChatappBindWabaResponseBodyData extends $tea.Model {
  custSpaceId?: string;
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
  accountReviewStatus?: string;
  currency?: string;
  id?: string;
  messageTemplateNamespace?: string;
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
  id?: string;
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
  codeVerificationStatus?: string;
  messagingLimitTier?: string;
  nameStatus?: string;
  newNameStatus?: string;
  phoneNumber?: string;
  qualityRating?: string;
  status?: string;
  statusCallbackUrl?: string;
  statusQueue?: string;
  upCallbackUrl?: string;
  upQueue?: string;
  verifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      codeVerificationStatus: 'CodeVerificationStatus',
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
  id?: string;
  phoneNumber?: string;
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
  packageName?: string;
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
  autofillText?: string;
  couponCode?: string;
  flowAction?: string;
  flowId?: string;
  isOptOut?: boolean;
  navigateScreen?: string;
  packageName?: string;
  phoneNumber?: string;
  signatureHash?: string;
  supportedApps?: CreateChatappTemplateRequestComponentsButtonsSupportedApps[];
  text?: string;
  type?: string;
  url?: string;
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

export class CreateChatappTemplateRequestComponentsCardsCardComponents extends $tea.Model {
  buttons?: CreateChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  format?: string;
  text?: string;
  type?: string;
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
  addSecretRecommendation?: boolean;
  buttons?: CreateChatappTemplateRequestComponentsButtons[];
  caption?: string;
  cards?: CreateChatappTemplateRequestComponentsCards[];
  codeExpirationMinutes?: number;
  duration?: number;
  fileName?: string;
  fileType?: string;
  format?: string;
  hasExpiration?: boolean;
  text?: string;
  thumbUrl?: string;
  type?: string;
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

export class CreateFlowResponseBodyData extends $tea.Model {
  categories?: string[];
  flowId?: string;
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
  deepLinkUrl?: string;
  generateQrImage?: string;
  phoneNumber?: string;
  prefilledMessage?: string;
  qrImageUrl?: string;
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
  deliveredCount?: number;
  end?: number;
  granularity?: string;
  phoneNumber?: string;
  sentCount?: number;
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
  action?: string;
  intentCode?: string;
  nextLanguageCode?: string;
  nextTemplateCode?: string;
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
  packageName?: string;
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
  autofillText?: string;
  couponCode?: string;
  extendAttrs?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs;
  flowAction?: string;
  flowId?: string;
  isOptOut?: boolean;
  navigateScreen?: string;
  packageName?: string;
  phoneNumber?: string;
  signatureHash?: string;
  supportedApps?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps[];
  text?: string;
  type?: string;
  url?: string;
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

export class GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents extends $tea.Model {
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons[];
  format?: string;
  text?: string;
  type?: string;
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
  addSecretRecommendation?: boolean;
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsButtons[];
  caption?: string;
  cards?: GetChatappTemplateDetailResponseBodyDataComponentsCards[];
  codeExpirationMinutes?: number;
  duration?: number;
  fileName?: string;
  fileType?: string;
  format?: string;
  latitude?: string;
  locationAddress?: string;
  locationName?: string;
  longitude?: string;
  offerExpirationTimeMs?: string;
  text?: string;
  thumbUrl?: string;
  type?: string;
  url?: string;
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
  auditStatus?: string;
  category?: string;
  components?: GetChatappTemplateDetailResponseBodyDataComponents[];
  example?: { [key: string]: string };
  language?: string;
  messageSendTtlSeconds?: number;
  name?: string;
  qualityScore?: string;
  reason?: string;
  templateCode?: string;
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
  buttonContent?: string;
  count?: number;
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
  cliented?: GetChatappTemplateMetricResponseBodyDataCliented[];
  deliveredCount?: number;
  end?: number;
  language?: string;
  readCount?: number;
  sentCount?: number;
  start?: number;
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
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  dir?: string;
  endPoint?: string;
  expire?: number;
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
  cartEnable?: boolean;
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
  commandDescription?: string;
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
  commands?: GetConversationalAutomationResponseBodyDataCommands[];
  enableWelcomeMessage?: boolean;
  phoneNumber?: string;
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
  categories?: string[];
  dataApiVersion?: string;
  flowId?: string;
  flowName?: string;
  JSONVersion?: string;
  previewUrl?: string;
  previewUrlExpires?: number;
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
  filePath?: string;
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
  flowId?: string;
  previewUrl?: string;
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
  id?: string;
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
  encryptionPublicKey?: string;
  encryptionPublicKeyStatus?: string;
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
  codeVerificationStatus?: string;
  id?: string;
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
  phoneNumber?: string;
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
  errorCode?: string;
  errorDescription?: string;
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
  businessId?: string;
  canSendMessage?: string;
  entityType?: string;
  errors?: GetWhatsappHealthStatusResponseBodyDataEntitiesErrors[];
  language?: string;
  phoneNumber?: string;
  templateCode?: string;
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
  canSendMessage?: string;
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
  lastUpdateTime?: number;
  reason?: string;
  templateCode?: string;
  templateName?: string;
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

export class ListFlowResponseBodyData extends $tea.Model {
  categories?: string[];
  flowId?: string;
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
  deepLinkUrl?: string;
  generateQrImage?: string;
  phoneNumber?: string;
  prefilledMessage?: string;
  qrImageUrl?: string;
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
  after?: string;
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
  data?: { [key: string]: any }[];
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
  after?: string;
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
  data?: { [key: string]: any }[];
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
  packageName?: string;
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
  autofillText?: string;
  couponCode?: string;
  flowAction?: string;
  flowId?: string;
  isOptOut?: boolean;
  navigateScreen?: string;
  packageName?: string;
  phoneNumber?: string;
  signatureHash?: string;
  supportedApps?: ModifyChatappTemplateRequestComponentsButtonsSupportedApps[];
  text?: string;
  type?: string;
  url?: string;
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

export class ModifyChatappTemplateRequestComponentsCardsCardComponents extends $tea.Model {
  buttons?: ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  format?: string;
  text?: string;
  type?: string;
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
  addSecretRecommendation?: boolean;
  buttons?: ModifyChatappTemplateRequestComponentsButtons[];
  caption?: string;
  cards?: ModifyChatappTemplateRequestComponentsCards[];
  codeExpirationMinutes?: number;
  duration?: number;
  fileName?: string;
  fileType?: string;
  format?: string;
  hasExpiration?: boolean;
  text?: string;
  thumbUrl?: string;
  type?: string;
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

export class ModifyFlowResponseBodyData extends $tea.Model {
  categories?: string[];
  flowId?: string;
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
  accountReviewStatus?: string;
  authInternationalRateEligibility?: { [key: string]: any };
  currency?: string;
  id?: string;
  messageTemplateNamespace?: string;
  name?: string;
  primaryBusinessLocation?: string;
  static names(): { [key: string]: string } {
    return {
      accountReviewStatus: 'AccountReviewStatus',
      authInternationalRateEligibility: 'AuthInternationalRateEligibility',
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
  codeVerificationStatus?: string;
  messagingLimitTier?: string;
  nameStatus?: string;
  newNameStatus?: string;
  phoneNumber?: string;
  qualityRating?: string;
  status?: string;
  statusCallbackUrl?: string;
  statusQueue?: string;
  upCallbackUrl?: string;
  upQueue?: string;
  verifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      codeVerificationStatus: 'CodeVerificationStatus',
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
  about?: string;
  address?: string;
  description?: string;
  email?: string;
  profilePictureUrl?: string;
  vertical?: string;
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
  businessId?: string;
  businessName?: string;
  verificationStatus?: string;
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
  flowActionData?: { [key: string]: string };
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
  productItems?: SendChatappMassMessageRequestSenderListProductActionSectionsProductItems[];
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
  sections?: SendChatappMassMessageRequestSenderListProductActionSections[];
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
  flowAction?: SendChatappMassMessageRequestSenderListFlowAction;
  payload?: string[];
  productAction?: SendChatappMassMessageRequestSenderListProductAction;
  templateParams?: { [key: string]: string };
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
  flowActionData?: { [key: string]: string };
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
  productItems?: SendChatappMessageRequestProductActionSectionsProductItems[];
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
  sections?: SendChatappMessageRequestProductActionSections[];
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
  commandDescription?: string;
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
  deepLinkUrl?: string;
  generateQrImage?: string;
  phoneNumber?: string;
  prefilledMessage?: string;
  qrImageUrl?: string;
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
   * @summary Adds a phone number for a WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request AddChatappPhoneNumberRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddChatappPhoneNumberResponse
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
    return $tea.cast<AddChatappPhoneNumberResponse>(await this.callApi(params, req, runtime), new AddChatappPhoneNumberResponse({}));
  }

  /**
   * @summary Adds a phone number for a WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request AddChatappPhoneNumberRequest
   * @return AddChatappPhoneNumberResponse
   */
  async addChatappPhoneNumber(request: AddChatappPhoneNumberRequest): Promise<AddChatappPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addChatappPhoneNumberWithOptions(request, runtime);
  }

  /**
   * @summary Associates FAQs in the knowledge base.
   *
   * @description You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param tmpReq BeeBotAssociateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BeeBotAssociateResponse
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
    return $tea.cast<BeeBotAssociateResponse>(await this.callApi(params, req, runtime), new BeeBotAssociateResponse({}));
  }

  /**
   * @summary Associates FAQs in the knowledge base.
   *
   * @description You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request BeeBotAssociateRequest
   * @return BeeBotAssociateResponse
   */
  async beeBotAssociate(request: BeeBotAssociateRequest): Promise<BeeBotAssociateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beeBotAssociateWithOptions(request, runtime);
  }

  /**
   * @summary Conducts sessions with the bot based on its unique identifier (ID).
   *
   * @description You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param tmpReq BeeBotChatRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BeeBotChatResponse
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
    return $tea.cast<BeeBotChatResponse>(await this.callApi(params, req, runtime), new BeeBotChatResponse({}));
  }

  /**
   * @summary Conducts sessions with the bot based on its unique identifier (ID).
   *
   * @description You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request BeeBotChatRequest
   * @return BeeBotChatResponse
   */
  async beeBotChat(request: BeeBotChatRequest): Promise<BeeBotChatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beeBotChatWithOptions(request, runtime);
  }

  /**
   * @summary Binds the WhatsApp Business account with ChatApp.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappBindWabaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChatappBindWabaResponse
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
    return $tea.cast<ChatappBindWabaResponse>(await this.callApi(params, req, runtime), new ChatappBindWabaResponse({}));
  }

  /**
   * @summary Binds the WhatsApp Business account with ChatApp.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappBindWabaRequest
   * @return ChatappBindWabaResponse
   */
  async chatappBindWaba(request: ChatappBindWabaRequest): Promise<ChatappBindWabaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappBindWabaWithOptions(request, runtime);
  }

  /**
   * @summary Queries WhatsApp Business account (WABA) information after embedded signup. You do not need to call this API operation if you use Version 2 of WhatsApp embedded signup.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappEmbedSignUpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChatappEmbedSignUpResponse
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
    return $tea.cast<ChatappEmbedSignUpResponse>(await this.callApi(params, req, runtime), new ChatappEmbedSignUpResponse({}));
  }

  /**
   * @summary Queries WhatsApp Business account (WABA) information after embedded signup. You do not need to call this API operation if you use Version 2 of WhatsApp embedded signup.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappEmbedSignUpRequest
   * @return ChatappEmbedSignUpResponse
   */
  async chatappEmbedSignUp(request: ChatappEmbedSignUpRequest): Promise<ChatappEmbedSignUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappEmbedSignUpWithOptions(request, runtime);
  }

  /**
   * @summary Registers a phone number for migration.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappMigrationRegisterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChatappMigrationRegisterResponse
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
    return $tea.cast<ChatappMigrationRegisterResponse>(await this.callApi(params, req, runtime), new ChatappMigrationRegisterResponse({}));
  }

  /**
   * @summary Registers a phone number for migration.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappMigrationRegisterRequest
   * @return ChatappMigrationRegisterResponse
   */
  async chatappMigrationRegister(request: ChatappMigrationRegisterRequest): Promise<ChatappMigrationRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappMigrationRegisterWithOptions(request, runtime);
  }

  /**
   * @summary Verifies a specified phone number for migration.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappMigrationVerifiedRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChatappMigrationVerifiedResponse
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
    return $tea.cast<ChatappMigrationVerifiedResponse>(await this.callApi(params, req, runtime), new ChatappMigrationVerifiedResponse({}));
  }

  /**
   * @summary Verifies a specified phone number for migration.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappMigrationVerifiedRequest
   * @return ChatappMigrationVerifiedResponse
   */
  async chatappMigrationVerified(request: ChatappMigrationVerifiedRequest): Promise<ChatappMigrationVerifiedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappMigrationVerifiedWithOptions(request, runtime);
  }

  /**
   * @summary Deregisters a phone number from a WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappPhoneNumberDeregisterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChatappPhoneNumberDeregisterResponse
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
    return $tea.cast<ChatappPhoneNumberDeregisterResponse>(await this.callApi(params, req, runtime), new ChatappPhoneNumberDeregisterResponse({}));
  }

  /**
   * @summary Deregisters a phone number from a WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappPhoneNumberDeregisterRequest
   * @return ChatappPhoneNumberDeregisterResponse
   */
  async chatappPhoneNumberDeregister(request: ChatappPhoneNumberDeregisterRequest): Promise<ChatappPhoneNumberDeregisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappPhoneNumberDeregisterWithOptions(request, runtime);
  }

  /**
   * @summary Registers a phone number.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappPhoneNumberRegisterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChatappPhoneNumberRegisterResponse
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
    return $tea.cast<ChatappPhoneNumberRegisterResponse>(await this.callApi(params, req, runtime), new ChatappPhoneNumberRegisterResponse({}));
  }

  /**
   * @summary Registers a phone number.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappPhoneNumberRegisterRequest
   * @return ChatappPhoneNumberRegisterResponse
   */
  async chatappPhoneNumberRegister(request: ChatappPhoneNumberRegisterRequest): Promise<ChatappPhoneNumberRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappPhoneNumberRegisterWithOptions(request, runtime);
  }

  /**
   * @summary Synchronizes phone numbers.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappSyncPhoneNumberRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChatappSyncPhoneNumberResponse
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
    return $tea.cast<ChatappSyncPhoneNumberResponse>(await this.callApi(params, req, runtime), new ChatappSyncPhoneNumberResponse({}));
  }

  /**
   * @summary Synchronizes phone numbers.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappSyncPhoneNumberRequest
   * @return ChatappSyncPhoneNumberResponse
   */
  async chatappSyncPhoneNumber(request: ChatappSyncPhoneNumberRequest): Promise<ChatappSyncPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappSyncPhoneNumberWithOptions(request, runtime);
  }

  /**
   * @summary Associates a phone number with a WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappVerifyAndRegisterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChatappVerifyAndRegisterResponse
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
    return $tea.cast<ChatappVerifyAndRegisterResponse>(await this.callApi(params, req, runtime), new ChatappVerifyAndRegisterResponse({}));
  }

  /**
   * @summary Associates a phone number with a WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ChatappVerifyAndRegisterRequest
   * @return ChatappVerifyAndRegisterResponse
   */
  async chatappVerifyAndRegister(request: ChatappVerifyAndRegisterRequest): Promise<ChatappVerifyAndRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatappVerifyAndRegisterWithOptions(request, runtime);
  }

  /**
   * @summary The ID of the number.
   *
   * @description The status of the phone number.
   *
   * @param request CreateChatappMigrationInitiateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateChatappMigrationInitiateResponse
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
    return $tea.cast<CreateChatappMigrationInitiateResponse>(await this.callApi(params, req, runtime), new CreateChatappMigrationInitiateResponse({}));
  }

  /**
   * @summary The ID of the number.
   *
   * @description The status of the phone number.
   *
   * @param request CreateChatappMigrationInitiateRequest
   * @return CreateChatappMigrationInitiateResponse
   */
  async createChatappMigrationInitiate(request: CreateChatappMigrationInitiateRequest): Promise<CreateChatappMigrationInitiateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChatappMigrationInitiateWithOptions(request, runtime);
  }

  /**
   * @summary The HTTP status code.
   * \\\\*   Example: OK. This parameter indicates that the request is successful.
   * \\\\*   Other values indicate that the request fails. For more information, see \\[Error codes]\\\\(https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   *
   * @description The error message.
   *
   * @param tmpReq CreateChatappTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateChatappTemplateResponse
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
    return $tea.cast<CreateChatappTemplateResponse>(await this.callApi(params, req, runtime), new CreateChatappTemplateResponse({}));
  }

  /**
   * @summary The HTTP status code.
   * \\\\*   Example: OK. This parameter indicates that the request is successful.
   * \\\\*   Other values indicate that the request fails. For more information, see \\[Error codes]\\\\(https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   *
   * @description The error message.
   *
   * @param request CreateChatappTemplateRequest
   * @return CreateChatappTemplateResponse
   */
  async createChatappTemplate(request: CreateChatappTemplateRequest): Promise<CreateChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChatappTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Creates a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param tmpReq CreateFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateFlowResponse
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
    return $tea.cast<CreateFlowResponse>(await this.callApi(params, req, runtime), new CreateFlowResponse({}));
  }

  /**
   * @summary Creates a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateFlowRequest
   * @return CreateFlowResponse
   */
  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  /**
   * @summary 创建消息发送二维码
   *
   * @param request CreatePhoneMessageQrdlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePhoneMessageQrdlResponse
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
    return $tea.cast<CreatePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new CreatePhoneMessageQrdlResponse({}));
  }

  /**
   * @summary 创建消息发送二维码
   *
   * @param request CreatePhoneMessageQrdlRequest
   * @return CreatePhoneMessageQrdlResponse
   */
  async createPhoneMessageQrdl(request: CreatePhoneMessageQrdlRequest): Promise<CreatePhoneMessageQrdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a message template.
   *
   * @description ### QPS limit
   * You can call this operation up to five times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteChatappTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteChatappTemplateResponse
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
    return $tea.cast<DeleteChatappTemplateResponse>(await this.callApi(params, req, runtime), new DeleteChatappTemplateResponse({}));
  }

  /**
   * @summary Deletes a message template.
   *
   * @description ### QPS limit
   * You can call this operation up to five times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteChatappTemplateRequest
   * @return DeleteChatappTemplateResponse
   */
  async deleteChatappTemplate(request: DeleteChatappTemplateRequest): Promise<DeleteChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChatappTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a Flow. Only Flows in the DRAFT state can be deleted.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFlowResponse
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
    return $tea.cast<DeleteFlowResponse>(await this.callApi(params, req, runtime), new DeleteFlowResponse({}));
  }

  /**
   * @summary Deletes a Flow. Only Flows in the DRAFT state can be deleted.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteFlowRequest
   * @return DeleteFlowResponse
   */
  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  /**
   * @summary 删除消息发送二维码
   *
   * @param request DeletePhoneMessageQrdlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePhoneMessageQrdlResponse
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
    return $tea.cast<DeletePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new DeletePhoneMessageQrdlResponse({}));
  }

  /**
   * @summary 删除消息发送二维码
   *
   * @param request DeletePhoneMessageQrdlRequest
   * @return DeletePhoneMessageQrdlResponse
   */
  async deletePhoneMessageQrdl(request: DeletePhoneMessageQrdlRequest): Promise<DeletePhoneMessageQrdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * @summary 弃用Flow
   *
   * @param request DeprecateFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeprecateFlowResponse
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
    return $tea.cast<DeprecateFlowResponse>(await this.callApi(params, req, runtime), new DeprecateFlowResponse({}));
  }

  /**
   * @summary 弃用Flow
   *
   * @param request DeprecateFlowRequest
   * @return DeprecateFlowResponse
   */
  async deprecateFlow(request: DeprecateFlowRequest): Promise<DeprecateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deprecateFlowWithOptions(request, runtime);
  }

  /**
   * @summary Enables the statistics on the metrics that are related to WhatsApp.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request EnableWhatsappROIMetricRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableWhatsappROIMetricResponse
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
    return $tea.cast<EnableWhatsappROIMetricResponse>(await this.callApi(params, req, runtime), new EnableWhatsappROIMetricResponse({}));
  }

  /**
   * @summary Enables the statistics on the metrics that are related to WhatsApp.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request EnableWhatsappROIMetricRequest
   * @return EnableWhatsappROIMetricResponse
   */
  async enableWhatsappROIMetric(request: EnableWhatsappROIMetricRequest): Promise<EnableWhatsappROIMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWhatsappROIMetricWithOptions(request, runtime);
  }

  /**
   * @summary Queries the number of messages that are sent by using a phone number by a specific metric.
   *
   * @description You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappPhoneNumberMetricRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetChatappPhoneNumberMetricResponse
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
    return $tea.cast<GetChatappPhoneNumberMetricResponse>(await this.callApi(params, req, runtime), new GetChatappPhoneNumberMetricResponse({}));
  }

  /**
   * @summary Queries the number of messages that are sent by using a phone number by a specific metric.
   *
   * @description You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappPhoneNumberMetricRequest
   * @return GetChatappPhoneNumberMetricResponse
   */
  async getChatappPhoneNumberMetric(request: GetChatappPhoneNumberMetricRequest): Promise<GetChatappPhoneNumberMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappPhoneNumberMetricWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information of a message template.
   *
   * @description ### QPS limit
   * You can call this API operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappTemplateDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetChatappTemplateDetailResponse
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
    return $tea.cast<GetChatappTemplateDetailResponse>(await this.callApi(params, req, runtime), new GetChatappTemplateDetailResponse({}));
  }

  /**
   * @summary Queries the information of a message template.
   *
   * @description ### QPS limit
   * You can call this API operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappTemplateDetailRequest
   * @return GetChatappTemplateDetailResponse
   */
  async getChatappTemplateDetail(request: GetChatappTemplateDetailRequest): Promise<GetChatappTemplateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappTemplateDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries the metrics about a marketing template.
   *
   * @description You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappTemplateMetricRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetChatappTemplateMetricResponse
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
    return $tea.cast<GetChatappTemplateMetricResponse>(await this.callApi(params, req, runtime), new GetChatappTemplateMetricResponse({}));
  }

  /**
   * @summary Queries the metrics about a marketing template.
   *
   * @description You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappTemplateMetricRequest
   * @return GetChatappTemplateMetricResponse
   */
  async getChatappTemplateMetric(request: GetChatappTemplateMetricRequest): Promise<GetChatappTemplateMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappTemplateMetricWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the authentication information that is used to upload a file.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappUploadAuthorizationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetChatappUploadAuthorizationResponse
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
    return $tea.cast<GetChatappUploadAuthorizationResponse>(await this.callApi(params, req, runtime), new GetChatappUploadAuthorizationResponse({}));
  }

  /**
   * @summary Obtains the authentication information that is used to upload a file.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappUploadAuthorizationRequest
   * @return GetChatappUploadAuthorizationResponse
   */
  async getChatappUploadAuthorization(request: GetChatappUploadAuthorizationRequest): Promise<GetChatappUploadAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappUploadAuthorizationWithOptions(request, runtime);
  }

  /**
   * @summary Obtains a verification code.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappVerifyCodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetChatappVerifyCodeResponse
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
    return $tea.cast<GetChatappVerifyCodeResponse>(await this.callApi(params, req, runtime), new GetChatappVerifyCodeResponse({}));
  }

  /**
   * @summary Obtains a verification code.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetChatappVerifyCodeRequest
   * @return GetChatappVerifyCodeResponse
   */
  async getChatappVerifyCode(request: GetChatappVerifyCodeRequest): Promise<GetChatappVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChatappVerifyCodeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the business settings of a phone number.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetCommerceSettingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCommerceSettingResponse
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
    return $tea.cast<GetCommerceSettingResponse>(await this.callApi(params, req, runtime), new GetCommerceSettingResponse({}));
  }

  /**
   * @summary Queries the business settings of a phone number.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetCommerceSettingRequest
   * @return GetCommerceSettingResponse
   */
  async getCommerceSetting(request: GetCommerceSettingRequest): Promise<GetCommerceSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCommerceSettingWithOptions(request, runtime);
  }

  /**
   * @summary 获取号码欢迎消息设置信息
   *
   * @param request GetConversationalAutomationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConversationalAutomationResponse
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
    return $tea.cast<GetConversationalAutomationResponse>(await this.callApi(params, req, runtime), new GetConversationalAutomationResponse({}));
  }

  /**
   * @summary 获取号码欢迎消息设置信息
   *
   * @param request GetConversationalAutomationRequest
   * @return GetConversationalAutomationResponse
   */
  async getConversationalAutomation(request: GetConversationalAutomationRequest): Promise<GetConversationalAutomationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConversationalAutomationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFlowResponse
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
    return $tea.cast<GetFlowResponse>(await this.callApi(params, req, runtime), new GetFlowResponse({}));
  }

  /**
   * @summary Queries the information about a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetFlowRequest
   * @return GetFlowResponse
   */
  async getFlow(request: GetFlowRequest): Promise<GetFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowWithOptions(request, runtime);
  }

  /**
   * @summary 获取flow的JSON文件
   *
   * @param request GetFlowJSONAssestRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFlowJSONAssestResponse
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
    return $tea.cast<GetFlowJSONAssestResponse>(await this.callApi(params, req, runtime), new GetFlowJSONAssestResponse({}));
  }

  /**
   * @summary 获取flow的JSON文件
   *
   * @param request GetFlowJSONAssestRequest
   * @return GetFlowJSONAssestResponse
   */
  async getFlowJSONAssest(request: GetFlowJSONAssestRequest): Promise<GetFlowJSONAssestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowJSONAssestWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the preview URL of a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetFlowPreviewUrlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFlowPreviewUrlResponse
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
    return $tea.cast<GetFlowPreviewUrlResponse>(await this.callApi(params, req, runtime), new GetFlowPreviewUrlResponse({}));
  }

  /**
   * @summary Obtains the preview URL of a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetFlowPreviewUrlRequest
   * @return GetFlowPreviewUrlResponse
   */
  async getFlowPreviewUrl(request: GetFlowPreviewUrlRequest): Promise<GetFlowPreviewUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowPreviewUrlWithOptions(request, runtime);
  }

  /**
   * @summary The phone number.
   *
   * @description The ID of the phone number.
   *
   * @param request GetMigrationVerifyCodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetMigrationVerifyCodeResponse
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
    return $tea.cast<GetMigrationVerifyCodeResponse>(await this.callApi(params, req, runtime), new GetMigrationVerifyCodeResponse({}));
  }

  /**
   * @summary The phone number.
   *
   * @description The ID of the phone number.
   *
   * @param request GetMigrationVerifyCodeRequest
   * @return GetMigrationVerifyCodeResponse
   */
  async getMigrationVerifyCode(request: GetMigrationVerifyCodeRequest): Promise<GetMigrationVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMigrationVerifyCodeWithOptions(request, runtime);
  }

  /**
   * @summary 根据Code获取权限
   *
   * @param tmpReq GetPermissionByCodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPermissionByCodeResponse
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
    return $tea.cast<GetPermissionByCodeResponse>(await this.callApi(params, req, runtime), new GetPermissionByCodeResponse({}));
  }

  /**
   * @summary 根据Code获取权限
   *
   * @param request GetPermissionByCodeRequest
   * @return GetPermissionByCodeResponse
   */
  async getPermissionByCode(request: GetPermissionByCodeRequest): Promise<GetPermissionByCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermissionByCodeWithOptions(request, runtime);
  }

  /**
   * @summary 获取号码的公钥
   *
   * @param request GetPhoneEncryptionPublicKeyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPhoneEncryptionPublicKeyResponse
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
    return $tea.cast<GetPhoneEncryptionPublicKeyResponse>(await this.callApi(params, req, runtime), new GetPhoneEncryptionPublicKeyResponse({}));
  }

  /**
   * @summary 获取号码的公钥
   *
   * @param request GetPhoneEncryptionPublicKeyRequest
   * @return GetPhoneEncryptionPublicKeyResponse
   */
  async getPhoneEncryptionPublicKey(request: GetPhoneEncryptionPublicKeyRequest): Promise<GetPhoneEncryptionPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneEncryptionPublicKeyWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the verification status of a phone number.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetPhoneNumberVerificationStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPhoneNumberVerificationStatusResponse
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
    return $tea.cast<GetPhoneNumberVerificationStatusResponse>(await this.callApi(params, req, runtime), new GetPhoneNumberVerificationStatusResponse({}));
  }

  /**
   * @summary Obtains the verification status of a phone number.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetPhoneNumberVerificationStatusRequest
   * @return GetPhoneNumberVerificationStatusResponse
   */
  async getPhoneNumberVerificationStatus(request: GetPhoneNumberVerificationStatusRequest): Promise<GetPhoneNumberVerificationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneNumberVerificationStatusWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the ID of a pre-registered phone number used for embedded signup without the need to re-obtain a verification code.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetPreValidatePhoneIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPreValidatePhoneIdResponse
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
    return $tea.cast<GetPreValidatePhoneIdResponse>(await this.callApi(params, req, runtime), new GetPreValidatePhoneIdResponse({}));
  }

  /**
   * @summary Obtains the ID of a pre-registered phone number used for embedded signup without the need to re-obtain a verification code.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetPreValidatePhoneIdRequest
   * @return GetPreValidatePhoneIdResponse
   */
  async getPreValidatePhoneId(request: GetPreValidatePhoneIdRequest): Promise<GetPreValidatePhoneIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPreValidatePhoneIdWithOptions(request, runtime);
  }

  /**
   * @summary Queries the product catalogs that are associated with a WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetWhatsappConnectionCatalogRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWhatsappConnectionCatalogResponse
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
    return $tea.cast<GetWhatsappConnectionCatalogResponse>(await this.callApi(params, req, runtime), new GetWhatsappConnectionCatalogResponse({}));
  }

  /**
   * @summary Queries the product catalogs that are associated with a WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetWhatsappConnectionCatalogRequest
   * @return GetWhatsappConnectionCatalogResponse
   */
  async getWhatsappConnectionCatalog(request: GetWhatsappConnectionCatalogRequest): Promise<GetWhatsappConnectionCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWhatsappConnectionCatalogWithOptions(request, runtime);
  }

  /**
   * @summary 获取whatsapp节点信息发送消息健康度
   *
   * @param request GetWhatsappHealthStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWhatsappHealthStatusResponse
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
    return $tea.cast<GetWhatsappHealthStatusResponse>(await this.callApi(params, req, runtime), new GetWhatsappHealthStatusResponse({}));
  }

  /**
   * @summary 获取whatsapp节点信息发送消息健康度
   *
   * @param request GetWhatsappHealthStatusRequest
   * @return GetWhatsappHealthStatusResponse
   */
  async getWhatsappHealthStatus(request: GetWhatsappHealthStatusRequest): Promise<GetWhatsappHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWhatsappHealthStatusWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the application ID under the ISV account.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request IsvGetAppIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return IsvGetAppIdResponse
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
    return $tea.cast<IsvGetAppIdResponse>(await this.callApi(params, req, runtime), new IsvGetAppIdResponse({}));
  }

  /**
   * @summary Obtains the application ID under the ISV account.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request IsvGetAppIdRequest
   * @return IsvGetAppIdResponse
   */
  async isvGetAppId(request: IsvGetAppIdRequest): Promise<IsvGetAppIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.isvGetAppIdWithOptions(request, runtime);
  }

  /**
   * @summary Queries message templates.
   *
   * @description ### QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param tmpReq ListChatappTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListChatappTemplateResponse
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
    return $tea.cast<ListChatappTemplateResponse>(await this.callApi(params, req, runtime), new ListChatappTemplateResponse({}));
  }

  /**
   * @summary Queries message templates.
   *
   * @description ### QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ListChatappTemplateRequest
   * @return ListChatappTemplateResponse
   */
  async listChatappTemplate(request: ListChatappTemplateRequest): Promise<ListChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChatappTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of Flows.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param tmpReq ListFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFlowResponse
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
    return $tea.cast<ListFlowResponse>(await this.callApi(params, req, runtime), new ListFlowResponse({}));
  }

  /**
   * @summary Queries a list of Flows.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ListFlowRequest
   * @return ListFlowResponse
   */
  async listFlow(request: ListFlowRequest): Promise<ListFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowWithOptions(request, runtime);
  }

  /**
   * @summary 查询消息发送二维码
   *
   * @param request ListPhoneMessageQrdlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPhoneMessageQrdlResponse
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
    return $tea.cast<ListPhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new ListPhoneMessageQrdlResponse({}));
  }

  /**
   * @summary 查询消息发送二维码
   *
   * @param request ListPhoneMessageQrdlRequest
   * @return ListPhoneMessageQrdlResponse
   */
  async listPhoneMessageQrdl(request: ListPhoneMessageQrdlRequest): Promise<ListPhoneMessageQrdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * @summary Queries products in a product catalog.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ListProductRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListProductResponse
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
    return $tea.cast<ListProductResponse>(await this.callApi(params, req, runtime), new ListProductResponse({}));
  }

  /**
   * @summary Queries products in a product catalog.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ListProductRequest
   * @return ListProductResponse
   */
  async listProduct(request: ListProductRequest): Promise<ListProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductWithOptions(request, runtime);
  }

  /**
   * @summary Queries the product catalogs on the Business Manager platform of Meta.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ListProductCatalogRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListProductCatalogResponse
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
    return $tea.cast<ListProductCatalogResponse>(await this.callApi(params, req, runtime), new ListProductCatalogResponse({}));
  }

  /**
   * @summary Queries the product catalogs on the Business Manager platform of Meta.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ListProductCatalogRequest
   * @return ListProductCatalogResponse
   */
  async listProductCatalog(request: ListProductCatalogRequest): Promise<ListProductCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductCatalogWithOptions(request, runtime);
  }

  /**
   * @summary The code of the message template.
   *
   * @description The name of the message template.
   *
   * @param tmpReq ModifyChatappTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyChatappTemplateResponse
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
    return $tea.cast<ModifyChatappTemplateResponse>(await this.callApi(params, req, runtime), new ModifyChatappTemplateResponse({}));
  }

  /**
   * @summary The code of the message template.
   *
   * @description The name of the message template.
   *
   * @param request ModifyChatappTemplateRequest
   * @return ModifyChatappTemplateResponse
   */
  async modifyChatappTemplate(request: ModifyChatappTemplateRequest): Promise<ModifyChatappTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyChatappTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the basic information about a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param tmpReq ModifyFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyFlowResponse
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
    return $tea.cast<ModifyFlowResponse>(await this.callApi(params, req, runtime), new ModifyFlowResponse({}));
  }

  /**
   * @summary Modifies the basic information about a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyFlowRequest
   * @return ModifyFlowResponse
   */
  async modifyFlow(request: ModifyFlowRequest): Promise<ModifyFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowWithOptions(request, runtime);
  }

  /**
   * @summary The ID of the request.
   *
   * @description ModifyPhoneBusinessProfile
   *
   * @param tmpReq ModifyPhoneBusinessProfileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPhoneBusinessProfileResponse
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
    return $tea.cast<ModifyPhoneBusinessProfileResponse>(await this.callApi(params, req, runtime), new ModifyPhoneBusinessProfileResponse({}));
  }

  /**
   * @summary The ID of the request.
   *
   * @description ModifyPhoneBusinessProfile
   *
   * @param request ModifyPhoneBusinessProfileRequest
   * @return ModifyPhoneBusinessProfileResponse
   */
  async modifyPhoneBusinessProfile(request: ModifyPhoneBusinessProfileRequest): Promise<ModifyPhoneBusinessProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPhoneBusinessProfileWithOptions(request, runtime);
  }

  /**
   * @summary Publishes a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request PublishFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PublishFlowResponse
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
    return $tea.cast<PublishFlowResponse>(await this.callApi(params, req, runtime), new PublishFlowResponse({}));
  }

  /**
   * @summary Publishes a Flow.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request PublishFlowRequest
   * @return PublishFlowResponse
   */
  async publishFlow(request: PublishFlowRequest): Promise<PublishFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishFlowWithOptions(request, runtime);
  }

  /**
   * @summary Query the WhatsApp Business account you associate with ChatApp.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request QueryChatappBindWabaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryChatappBindWabaResponse
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
    return $tea.cast<QueryChatappBindWabaResponse>(await this.callApi(params, req, runtime), new QueryChatappBindWabaResponse({}));
  }

  /**
   * @summary Query the WhatsApp Business account you associate with ChatApp.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request QueryChatappBindWabaRequest
   * @return QueryChatappBindWabaResponse
   */
  async queryChatappBindWaba(request: QueryChatappBindWabaRequest): Promise<QueryChatappBindWabaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChatappBindWabaWithOptions(request, runtime);
  }

  /**
   * @summary Queries phone numbers that receive messages and statuses of these numbers under a specified user.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request QueryChatappPhoneNumbersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryChatappPhoneNumbersResponse
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
    return $tea.cast<QueryChatappPhoneNumbersResponse>(await this.callApi(params, req, runtime), new QueryChatappPhoneNumbersResponse({}));
  }

  /**
   * @summary Queries phone numbers that receive messages and statuses of these numbers under a specified user.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request QueryChatappPhoneNumbersRequest
   * @return QueryChatappPhoneNumbersResponse
   */
  async queryChatappPhoneNumbers(request: QueryChatappPhoneNumbersRequest): Promise<QueryChatappPhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChatappPhoneNumbersWithOptions(request, runtime);
  }

  /**
   * @summary Queries the business information of the account to which a specified phone number is bound.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request QueryPhoneBusinessProfileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryPhoneBusinessProfileResponse
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
    return $tea.cast<QueryPhoneBusinessProfileResponse>(await this.callApi(params, req, runtime), new QueryPhoneBusinessProfileResponse({}));
  }

  /**
   * @summary Queries the business information of the account to which a specified phone number is bound.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request QueryPhoneBusinessProfileRequest
   * @return QueryPhoneBusinessProfileResponse
   */
  async queryPhoneBusinessProfile(request: QueryPhoneBusinessProfileRequest): Promise<QueryPhoneBusinessProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPhoneBusinessProfileWithOptions(request, runtime);
  }

  /**
   * @summary Queries the business information about the WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request QueryWabaBusinessInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryWabaBusinessInfoResponse
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
    return $tea.cast<QueryWabaBusinessInfoResponse>(await this.callApi(params, req, runtime), new QueryWabaBusinessInfoResponse({}));
  }

  /**
   * @summary Queries the business information about the WhatsApp Business account (WABA).
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request QueryWabaBusinessInfoRequest
   * @return QueryWabaBusinessInfoResponse
   */
  async queryWabaBusinessInfo(request: QueryWabaBusinessInfoRequest): Promise<QueryWabaBusinessInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWabaBusinessInfoWithOptions(request, runtime);
  }

  /**
   * @summary Sends a message to multiple phone numbers by using ChatAPP at a time.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * You can send messages to up to 1,000 phone numbers in a single request.
   *
   * @param tmpReq SendChatappMassMessageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SendChatappMassMessageResponse
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
    return $tea.cast<SendChatappMassMessageResponse>(await this.callApi(params, req, runtime), new SendChatappMassMessageResponse({}));
  }

  /**
   * @summary Sends a message to multiple phone numbers by using ChatAPP at a time.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * You can send messages to up to 1,000 phone numbers in a single request.
   *
   * @param request SendChatappMassMessageRequest
   * @return SendChatappMassMessageResponse
   */
  async sendChatappMassMessage(request: SendChatappMassMessageRequest): Promise<SendChatappMassMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendChatappMassMessageWithOptions(request, runtime);
  }

  /**
   * @summary Sends messages by using ChatAPP.
   *
   * @description You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param tmpReq SendChatappMessageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SendChatappMessageResponse
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
    return $tea.cast<SendChatappMessageResponse>(await this.callApi(params, req, runtime), new SendChatappMessageResponse({}));
  }

  /**
   * @summary Sends messages by using ChatAPP.
   *
   * @description You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request SendChatappMessageRequest
   * @return SendChatappMessageResponse
   */
  async sendChatappMessage(request: SendChatappMessageRequest): Promise<SendChatappMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendChatappMessageWithOptions(request, runtime);
  }

  /**
   * @summary Submits the agreement information for independent software vendor (ISV) customers.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request SubmitIsvCustomerTermsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitIsvCustomerTermsResponse
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
    return $tea.cast<SubmitIsvCustomerTermsResponse>(await this.callApi(params, req, runtime), new SubmitIsvCustomerTermsResponse({}));
  }

  /**
   * @summary Submits the agreement information for independent software vendor (ISV) customers.
   *
   * @description You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request SubmitIsvCustomerTermsRequest
   * @return SubmitIsvCustomerTermsResponse
   */
  async submitIsvCustomerTerms(request: SubmitIsvCustomerTermsRequest): Promise<SubmitIsvCustomerTermsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitIsvCustomerTermsWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the callback URL of an account.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request UpdateAccountWebhookRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAccountWebhookResponse
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
    return $tea.cast<UpdateAccountWebhookResponse>(await this.callApi(params, req, runtime), new UpdateAccountWebhookResponse({}));
  }

  /**
   * @summary Modifies the callback URL of an account.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request UpdateAccountWebhookRequest
   * @return UpdateAccountWebhookResponse
   */
  async updateAccountWebhook(request: UpdateAccountWebhookRequest): Promise<UpdateAccountWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccountWebhookWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the business settings of a phone number.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request UpdateCommerceSettingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCommerceSettingResponse
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
    return $tea.cast<UpdateCommerceSettingResponse>(await this.callApi(params, req, runtime), new UpdateCommerceSettingResponse({}));
  }

  /**
   * @summary Modifies the business settings of a phone number.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request UpdateCommerceSettingRequest
   * @return UpdateCommerceSettingResponse
   */
  async updateCommerceSetting(request: UpdateCommerceSettingRequest): Promise<UpdateCommerceSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCommerceSettingWithOptions(request, runtime);
  }

  /**
   * @summary 更新号码欢迎消息、命令等属性
   *
   * @param tmpReq UpdateConversationalAutomationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateConversationalAutomationResponse
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
    return $tea.cast<UpdateConversationalAutomationResponse>(await this.callApi(params, req, runtime), new UpdateConversationalAutomationResponse({}));
  }

  /**
   * @summary 更新号码欢迎消息、命令等属性
   *
   * @param request UpdateConversationalAutomationRequest
   * @return UpdateConversationalAutomationResponse
   */
  async updateConversationalAutomation(request: UpdateConversationalAutomationRequest): Promise<UpdateConversationalAutomationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConversationalAutomationWithOptions(request, runtime);
  }

  /**
   * @summary 更新flow的表单内容
   *
   * @param request UpdateFlowJSONAssetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateFlowJSONAssetResponse
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
    return $tea.cast<UpdateFlowJSONAssetResponse>(await this.callApi(params, req, runtime), new UpdateFlowJSONAssetResponse({}));
  }

  /**
   * @summary 更新flow的表单内容
   *
   * @param request UpdateFlowJSONAssetRequest
   * @return UpdateFlowJSONAssetResponse
   */
  async updateFlowJSONAsset(request: UpdateFlowJSONAssetRequest): Promise<UpdateFlowJSONAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlowJSONAssetWithOptions(request, runtime);
  }

  /**
   * @summary 更新号码的公钥
   *
   * @param request UpdatePhoneEncryptionPublicKeyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePhoneEncryptionPublicKeyResponse
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
    return $tea.cast<UpdatePhoneEncryptionPublicKeyResponse>(await this.callApi(params, req, runtime), new UpdatePhoneEncryptionPublicKeyResponse({}));
  }

  /**
   * @summary 更新号码的公钥
   *
   * @param request UpdatePhoneEncryptionPublicKeyRequest
   * @return UpdatePhoneEncryptionPublicKeyResponse
   */
  async updatePhoneEncryptionPublicKey(request: UpdatePhoneEncryptionPublicKeyRequest): Promise<UpdatePhoneEncryptionPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhoneEncryptionPublicKeyWithOptions(request, runtime);
  }

  /**
   * @summary 修改消息发送二维码
   *
   * @param request UpdatePhoneMessageQrdlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePhoneMessageQrdlResponse
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
    return $tea.cast<UpdatePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new UpdatePhoneMessageQrdlResponse({}));
  }

  /**
   * @summary 修改消息发送二维码
   *
   * @param request UpdatePhoneMessageQrdlRequest
   * @return UpdatePhoneMessageQrdlResponse
   */
  async updatePhoneMessageQrdl(request: UpdatePhoneMessageQrdlRequest): Promise<UpdatePhoneMessageQrdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * @summary The HTTP status code returned.
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   *
   * @description The error message returned.
   *
   * @param request UpdatePhoneWebhookRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePhoneWebhookResponse
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
    return $tea.cast<UpdatePhoneWebhookResponse>(await this.callApi(params, req, runtime), new UpdatePhoneWebhookResponse({}));
  }

  /**
   * @summary The HTTP status code returned.
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   *
   * @description The error message returned.
   *
   * @param request UpdatePhoneWebhookRequest
   * @return UpdatePhoneWebhookResponse
   */
  async updatePhoneWebhook(request: UpdatePhoneWebhookRequest): Promise<UpdatePhoneWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhoneWebhookWithOptions(request, runtime);
  }

}
