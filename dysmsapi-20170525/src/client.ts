// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddShortUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceUrl?: string;
  shortUrlName?: string;
  effectiveDays?: string;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceUrl: 'SourceUrl',
      shortUrlName: 'ShortUrlName',
      effectiveDays: 'EffectiveDays',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceUrl: 'string',
      shortUrlName: 'string',
      effectiveDays: 'string',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddShortUrlResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: AddShortUrlResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddShortUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddShortUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  signSource?: number;
  remark?: string;
  signFileList?: AddSmsSignRequestSignFileList[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      signSource: 'SignSource',
      remark: 'Remark',
      signFileList: 'SignFileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      signSource: 'number',
      remark: 'string',
      signFileList: { 'type': 'array', 'itemType': AddSmsSignRequestSignFileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateType?: number;
  templateName?: string;
  templateContent?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
      templateContent: 'TemplateContent',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateType: 'number',
      templateName: 'string',
      templateContent: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateResponseBody extends $tea.Model {
  templateCode?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShortParamRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumbers?: string;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumbers: 'PhoneNumbers',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumbers: 'string',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShortParamResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateShortParamResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateShortParamResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShortParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateShortParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateShortParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceUrl?: string;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceUrl: 'SourceUrl',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceUrl: 'string',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteShortUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteShortUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateResponseBody extends $tea.Model {
  templateCode?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  signSource?: number;
  remark?: string;
  signFileList?: ModifySmsSignRequestSignFileList[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      signSource: 'SignSource',
      remark: 'Remark',
      signFileList: 'SignFileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      signSource: 'number',
      remark: 'string',
      signFileList: { 'type': 'array', 'itemType': ModifySmsSignRequestSignFileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateType?: number;
  templateName?: string;
  templateCode?: string;
  templateContent?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateType: 'number',
      templateName: 'string',
      templateCode: 'string',
      templateContent: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateResponseBody extends $tea.Model {
  templateCode?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  bizId?: string;
  sendDate?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
      bizId: 'BizId',
      sendDate: 'SendDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
      bizId: 'string',
      sendDate: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBody extends $tea.Model {
  totalCount?: string;
  message?: string;
  requestId?: string;
  code?: string;
  smsSendDetailDTOs?: QuerySendDetailsResponseBodySmsSendDetailDTOs[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      smsSendDetailDTOs: 'SmsSendDetailDTOs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
      smsSendDetailDTOs: { 'type': 'array', 'itemType': QuerySendDetailsResponseBodySmsSendDetailDTOs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySendDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySendDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      shortUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryShortUrlResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: QueryShortUrlResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryShortUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryShortUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  signStatus?: number;
  code?: string;
  createDate?: string;
  reason?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      signStatus: 'SignStatus',
      code: 'Code',
      createDate: 'CreateDate',
      reason: 'Reason',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      signStatus: 'number',
      code: 'string',
      createDate: 'string',
      reason: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateResponseBody extends $tea.Model {
  templateCode?: string;
  requestId?: string;
  message?: string;
  templateContent?: string;
  templateName?: string;
  templateType?: number;
  code?: string;
  createDate?: string;
  reason?: string;
  templateStatus?: number;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      requestId: 'RequestId',
      message: 'Message',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      code: 'Code',
      createDate: 'CreateDate',
      reason: 'Reason',
      templateStatus: 'TemplateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      requestId: 'string',
      message: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateType: 'number',
      code: 'string',
      createDate: 'string',
      reason: 'string',
      templateStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumberJson?: string;
  signNameJson?: string;
  templateCode?: string;
  templateParamJson?: string;
  smsUpExtendCodeJson?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumberJson: 'PhoneNumberJson',
      signNameJson: 'SignNameJson',
      templateCode: 'TemplateCode',
      templateParamJson: 'templateParamJson',
      smsUpExtendCodeJson: 'SmsUpExtendCodeJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumberJson: 'string',
      signNameJson: 'string',
      templateCode: 'string',
      templateParamJson: 'string',
      smsUpExtendCodeJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendBatchSmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendBatchSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumbers?: string;
  signName?: string;
  templateCode?: string;
  templateParam?: string;
  smsUpExtendCode?: string;
  outId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumbers: 'PhoneNumbers',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
      smsUpExtendCode: 'SmsUpExtendCode',
      outId: 'OutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumbers: 'string',
      signName: 'string',
      templateCode: 'string',
      templateParam: 'string',
      smsUpExtendCode: 'string',
      outId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendSmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponseBodyData extends $tea.Model {
  sourceUrl?: string;
  expireDate?: string;
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      sourceUrl: 'SourceUrl',
      expireDate: 'ExpireDate',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUrl: 'string',
      expireDate: 'string',
      shortUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignRequestSignFileList extends $tea.Model {
  fileContents?: string;
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      fileContents: 'FileContents',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContents: 'string',
      fileSuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShortParamResponseBodyData extends $tea.Model {
  phoneNumbers?: string;
  shortParam?: string;
  paramDetail?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumbers: 'PhoneNumbers',
      shortParam: 'ShortParam',
      paramDetail: 'ParamDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumbers: 'string',
      shortParam: 'string',
      paramDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignRequestSignFileList extends $tea.Model {
  fileContents?: string;
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      fileContents: 'FileContents',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContents: 'string',
      fileSuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBodySmsSendDetailDTOs extends $tea.Model {
  errCode?: string;
  templateCode?: string;
  outId?: string;
  receiveDate?: string;
  sendDate?: string;
  phoneNum?: string;
  content?: string;
  sendStatus?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      templateCode: 'TemplateCode',
      outId: 'OutId',
      receiveDate: 'ReceiveDate',
      sendDate: 'SendDate',
      phoneNum: 'PhoneNum',
      content: 'Content',
      sendStatus: 'SendStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      templateCode: 'string',
      outId: 'string',
      receiveDate: 'string',
      sendDate: 'string',
      phoneNum: 'string',
      content: 'string',
      sendStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponseBodyData extends $tea.Model {
  uniqueVisitorCount?: string;
  sourceUrl?: string;
  shortUrlStatus?: string;
  pageViewCount?: string;
  expireDate?: string;
  shortUrlName?: string;
  createDate?: string;
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      uniqueVisitorCount: 'UniqueVisitorCount',
      sourceUrl: 'SourceUrl',
      shortUrlStatus: 'ShortUrlStatus',
      pageViewCount: 'PageViewCount',
      expireDate: 'ExpireDate',
      shortUrlName: 'ShortUrlName',
      createDate: 'CreateDate',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uniqueVisitorCount: 'string',
      sourceUrl: 'string',
      shortUrlStatus: 'string',
      pageViewCount: 'string',
      expireDate: 'string',
      shortUrlName: 'string',
      createDate: 'string',
      shortUrl: 'string',
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
    this._endpointMap = {
      'ap-northeast-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'cn-beijing': "dysmsapi-proxy.cn-beijing.aliyuncs.com",
      'eu-central-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'me-east-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'us-east-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'us-west-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dysmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addShortUrlWithOptions(request: AddShortUrlRequest, runtime: $Util.RuntimeOptions): Promise<AddShortUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddShortUrlResponse>(await this.doRPCRequest("AddShortUrl", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new AddShortUrlResponse({}));
  }

  async addShortUrl(request: AddShortUrlRequest): Promise<AddShortUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addShortUrlWithOptions(request, runtime);
  }

  async addSmsSignWithOptions(request: AddSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<AddSmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSmsSignResponse>(await this.doRPCRequest("AddSmsSign", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new AddSmsSignResponse({}));
  }

  async addSmsSign(request: AddSmsSignRequest): Promise<AddSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSmsSignWithOptions(request, runtime);
  }

  async addSmsTemplateWithOptions(request: AddSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddSmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSmsTemplateResponse>(await this.doRPCRequest("AddSmsTemplate", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new AddSmsTemplateResponse({}));
  }

  async addSmsTemplate(request: AddSmsTemplateRequest): Promise<AddSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSmsTemplateWithOptions(request, runtime);
  }

  async createShortParamWithOptions(request: CreateShortParamRequest, runtime: $Util.RuntimeOptions): Promise<CreateShortParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateShortParamResponse>(await this.doRPCRequest("CreateShortParam", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateShortParamResponse({}));
  }

  async createShortParam(request: CreateShortParamRequest): Promise<CreateShortParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createShortParamWithOptions(request, runtime);
  }

  async deleteShortUrlWithOptions(request: DeleteShortUrlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteShortUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteShortUrlResponse>(await this.doRPCRequest("DeleteShortUrl", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteShortUrlResponse({}));
  }

  async deleteShortUrl(request: DeleteShortUrlRequest): Promise<DeleteShortUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteShortUrlWithOptions(request, runtime);
  }

  async deleteSmsSignWithOptions(request: DeleteSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSmsSignResponse>(await this.doRPCRequest("DeleteSmsSign", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSmsSignResponse({}));
  }

  async deleteSmsSign(request: DeleteSmsSignRequest): Promise<DeleteSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmsSignWithOptions(request, runtime);
  }

  async deleteSmsTemplateWithOptions(request: DeleteSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSmsTemplateResponse>(await this.doRPCRequest("DeleteSmsTemplate", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSmsTemplateResponse({}));
  }

  async deleteSmsTemplate(request: DeleteSmsTemplateRequest): Promise<DeleteSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmsTemplateWithOptions(request, runtime);
  }

  async modifySmsSignWithOptions(request: ModifySmsSignRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySmsSignResponse>(await this.doRPCRequest("ModifySmsSign", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySmsSignResponse({}));
  }

  async modifySmsSign(request: ModifySmsSignRequest): Promise<ModifySmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmsSignWithOptions(request, runtime);
  }

  async modifySmsTemplateWithOptions(request: ModifySmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySmsTemplateResponse>(await this.doRPCRequest("ModifySmsTemplate", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySmsTemplateResponse({}));
  }

  async modifySmsTemplate(request: ModifySmsTemplateRequest): Promise<ModifySmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmsTemplateWithOptions(request, runtime);
  }

  async querySendDetailsWithOptions(request: QuerySendDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySendDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySendDetailsResponse>(await this.doRPCRequest("QuerySendDetails", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySendDetailsResponse({}));
  }

  async querySendDetails(request: QuerySendDetailsRequest): Promise<QuerySendDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySendDetailsWithOptions(request, runtime);
  }

  async queryShortUrlWithOptions(request: QueryShortUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryShortUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryShortUrlResponse>(await this.doRPCRequest("QueryShortUrl", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QueryShortUrlResponse({}));
  }

  async queryShortUrl(request: QueryShortUrlRequest): Promise<QueryShortUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryShortUrlWithOptions(request, runtime);
  }

  async querySmsSignWithOptions(request: QuerySmsSignRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySmsSignResponse>(await this.doRPCRequest("QuerySmsSign", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySmsSignResponse({}));
  }

  async querySmsSign(request: QuerySmsSignRequest): Promise<QuerySmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmsSignWithOptions(request, runtime);
  }

  async querySmsTemplateWithOptions(request: QuerySmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySmsTemplateResponse>(await this.doRPCRequest("QuerySmsTemplate", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySmsTemplateResponse({}));
  }

  async querySmsTemplate(request: QuerySmsTemplateRequest): Promise<QuerySmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmsTemplateWithOptions(request, runtime);
  }

  async sendBatchSmsWithOptions(request: SendBatchSmsRequest, runtime: $Util.RuntimeOptions): Promise<SendBatchSmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendBatchSmsResponse>(await this.doRPCRequest("SendBatchSms", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SendBatchSmsResponse({}));
  }

  async sendBatchSms(request: SendBatchSmsRequest): Promise<SendBatchSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendBatchSmsWithOptions(request, runtime);
  }

  async sendSmsWithOptions(request: SendSmsRequest, runtime: $Util.RuntimeOptions): Promise<SendSmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendSmsResponse>(await this.doRPCRequest("SendSms", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new SendSmsResponse({}));
  }

  async sendSms(request: SendSmsRequest): Promise<SendSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendSmsWithOptions(request, runtime);
  }

}
