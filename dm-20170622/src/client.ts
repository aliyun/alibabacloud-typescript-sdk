// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddIpfilterRequest extends $tea.Model {
  ipAddress?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpfilterResponseBody extends $tea.Model {
  ipFilterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipFilterId: 'IpFilterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipFilterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpfilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddIpfilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddIpfilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailRequest extends $tea.Model {
  accountName?: string;
  addressType?: number;
  clickTrace?: string;
  ownerId?: number;
  receiversName?: string;
  replyAddress?: string;
  replyAddressAlias?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagName?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      addressType: 'AddressType',
      clickTrace: 'ClickTrace',
      ownerId: 'OwnerId',
      receiversName: 'ReceiversName',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagName: 'TagName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      addressType: 'number',
      clickTrace: 'string',
      ownerId: 'number',
      receiversName: 'string',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailResponseBody extends $tea.Model {
  envId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchSendMailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchSendMailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainRequest extends $tea.Model {
  domainId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBody extends $tea.Model {
  domainStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainStatus: 'DomainStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainDnsRequest extends $tea.Model {
  domainId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainDnsResponseBody extends $tea.Model {
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDomainDnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDomainDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  domainId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailAddressRequest extends $tea.Model {
  accountName?: string;
  ownerId?: number;
  replyAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      ownerId: 'OwnerId',
      replyAddress: 'ReplyAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      ownerId: 'number',
      replyAddress: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendtype: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailAddressResponseBody extends $tea.Model {
  mailAddressId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mailAddressId: 'MailAddressId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddressId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReceiverRequest extends $tea.Model {
  desc?: string;
  ownerId?: number;
  receiversAlias?: string;
  receiversName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      ownerId: 'OwnerId',
      receiversAlias: 'ReceiversAlias',
      receiversName: 'ReceiversName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      ownerId: 'number',
      receiversAlias: 'string',
      receiversName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReceiverResponseBody extends $tea.Model {
  receiverId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      receiverId: 'ReceiverId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReceiverResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateReceiverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateReceiverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagDescription?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagDescription: 'TagDescription',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagDescription: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBody extends $tea.Model {
  requestId?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  fromType?: number;
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smsContent?: string;
  smsType?: number;
  templateName?: string;
  templateNickName?: string;
  templateSubject?: string;
  templateText?: string;
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsContent: 'SmsContent',
      smsType: 'SmsType',
      templateName: 'TemplateName',
      templateNickName: 'TemplateNickName',
      templateSubject: 'TemplateSubject',
      templateText: 'TemplateText',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smsContent: 'string',
      smsType: 'number',
      templateName: 'string',
      templateNickName: 'string',
      templateSubject: 'string',
      templateText: 'string',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  domainId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
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

export class DeleteDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMailAddressRequest extends $tea.Model {
  mailAddressId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mailAddressId: 'MailAddressId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddressId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMailAddressResponseBody extends $tea.Model {
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

export class DeleteMailAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReceiverRequest extends $tea.Model {
  ownerId?: number;
  receiverId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      receiverId: 'ReceiverId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      receiverId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReceiverResponseBody extends $tea.Model {
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

export class DeleteReceiverResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteReceiverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteReceiverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReceiverDetailRequest extends $tea.Model {
  email?: string;
  ownerId?: number;
  receiverId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      ownerId: 'OwnerId',
      receiverId: 'ReceiverId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      ownerId: 'number',
      receiverId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReceiverDetailResponseBody extends $tea.Model {
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

export class DeleteReceiverDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteReceiverDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResponseBody extends $tea.Model {
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

export class DeleteTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  fromType?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
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

export class DeleteTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescAccountSummaryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescAccountSummaryResponseBody extends $tea.Model {
  dailyQuota?: number;
  dayuStatus?: number;
  domains?: number;
  enableTimes?: number;
  mailAddresses?: number;
  maxQuotaLevel?: number;
  monthQuota?: number;
  quotaLevel?: number;
  receivers?: number;
  remainFreeQuota?: number;
  requestId?: string;
  smsRecord?: number;
  smsSign?: number;
  smsTemplates?: number;
  tags?: number;
  templates?: number;
  userStatus?: number;
  static names(): { [key: string]: string } {
    return {
      dailyQuota: 'DailyQuota',
      dayuStatus: 'DayuStatus',
      domains: 'Domains',
      enableTimes: 'EnableTimes',
      mailAddresses: 'MailAddresses',
      maxQuotaLevel: 'MaxQuotaLevel',
      monthQuota: 'MonthQuota',
      quotaLevel: 'QuotaLevel',
      receivers: 'Receivers',
      remainFreeQuota: 'RemainFreeQuota',
      requestId: 'RequestId',
      smsRecord: 'SmsRecord',
      smsSign: 'SmsSign',
      smsTemplates: 'SmsTemplates',
      tags: 'Tags',
      templates: 'Templates',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyQuota: 'number',
      dayuStatus: 'number',
      domains: 'number',
      enableTimes: 'number',
      mailAddresses: 'number',
      maxQuotaLevel: 'number',
      monthQuota: 'number',
      quotaLevel: 'number',
      receivers: 'number',
      remainFreeQuota: 'number',
      requestId: 'string',
      smsRecord: 'number',
      smsSign: 'number',
      smsTemplates: 'number',
      tags: 'number',
      templates: 'number',
      userStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescAccountSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescAccountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescAccountSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescDomainRequest extends $tea.Model {
  domainId?: number;
  ownerId?: number;
  requireRealTimeDnsRecords?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      ownerId: 'OwnerId',
      requireRealTimeDnsRecords: 'RequireRealTimeDnsRecords',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'number',
      ownerId: 'number',
      requireRealTimeDnsRecords: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescDomainResponseBody extends $tea.Model {
  cnameAuthStatus?: string;
  cnameConfirmStatus?: string;
  cnameRecord?: string;
  createTime?: string;
  defaultDomain?: string;
  dkimAuthStatus?: string;
  dkimPublicKey?: string;
  dkimRR?: string;
  dmarcAuthStatus?: number;
  dmarcHostRecord?: string;
  dmarcRecord?: string;
  dnsDmarc?: string;
  dnsMx?: string;
  dnsSpf?: string;
  dnsTxt?: string;
  domainId?: string;
  domainName?: string;
  domainStatus?: string;
  domainType?: string;
  hostRecord?: string;
  icpStatus?: string;
  mxAuthStatus?: string;
  mxRecord?: string;
  requestId?: string;
  spfAuthStatus?: string;
  spfRecord?: string;
  spfRecordV2?: string;
  tlDomainName?: string;
  tracefRecord?: string;
  static names(): { [key: string]: string } {
    return {
      cnameAuthStatus: 'CnameAuthStatus',
      cnameConfirmStatus: 'CnameConfirmStatus',
      cnameRecord: 'CnameRecord',
      createTime: 'CreateTime',
      defaultDomain: 'DefaultDomain',
      dkimAuthStatus: 'DkimAuthStatus',
      dkimPublicKey: 'DkimPublicKey',
      dkimRR: 'DkimRR',
      dmarcAuthStatus: 'DmarcAuthStatus',
      dmarcHostRecord: 'DmarcHostRecord',
      dmarcRecord: 'DmarcRecord',
      dnsDmarc: 'DnsDmarc',
      dnsMx: 'DnsMx',
      dnsSpf: 'DnsSpf',
      dnsTxt: 'DnsTxt',
      domainId: 'DomainId',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      hostRecord: 'HostRecord',
      icpStatus: 'IcpStatus',
      mxAuthStatus: 'MxAuthStatus',
      mxRecord: 'MxRecord',
      requestId: 'RequestId',
      spfAuthStatus: 'SpfAuthStatus',
      spfRecord: 'SpfRecord',
      spfRecordV2: 'SpfRecordV2',
      tlDomainName: 'TlDomainName',
      tracefRecord: 'TracefRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameAuthStatus: 'string',
      cnameConfirmStatus: 'string',
      cnameRecord: 'string',
      createTime: 'string',
      defaultDomain: 'string',
      dkimAuthStatus: 'string',
      dkimPublicKey: 'string',
      dkimRR: 'string',
      dmarcAuthStatus: 'number',
      dmarcHostRecord: 'string',
      dmarcRecord: 'string',
      dnsDmarc: 'string',
      dnsMx: 'string',
      dnsSpf: 'string',
      dnsTxt: 'string',
      domainId: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      hostRecord: 'string',
      icpStatus: 'string',
      mxAuthStatus: 'string',
      mxRecord: 'string',
      requestId: 'string',
      spfAuthStatus: 'string',
      spfRecord: 'string',
      spfRecordV2: 'string',
      tlDomainName: 'string',
      tracefRecord: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescTemplateRequest extends $tea.Model {
  fromType?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescTemplateResponseBody extends $tea.Model {
  createTime?: string;
  remark?: string;
  requestId?: string;
  smsContent?: string;
  smsType?: string;
  templateName?: string;
  templateNickName?: string;
  templateStatus?: string;
  templateSubject?: string;
  templateText?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      remark: 'Remark',
      requestId: 'RequestId',
      smsContent: 'SmsContent',
      smsType: 'SmsType',
      templateName: 'TemplateName',
      templateNickName: 'TemplateNickName',
      templateStatus: 'TemplateStatus',
      templateSubject: 'TemplateSubject',
      templateText: 'TemplateText',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      remark: 'string',
      requestId: 'string',
      smsContent: 'string',
      smsType: 'string',
      templateName: 'string',
      templateNickName: 'string',
      templateStatus: 'string',
      templateSubject: 'string',
      templateText: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListRequest extends $tea.Model {
  offset?: string;
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  ownerId?: number;
  pageNumber?: string;
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'string',
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  data?: GetAccountListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      data: GetAccountListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailAddressMsgCallBackUrlRequest extends $tea.Model {
  mailFrom?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mailFrom: 'MailFrom',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailFrom: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailAddressMsgCallBackUrlResponseBody extends $tea.Model {
  notifyUrl?: number;
  notifyUrlStatus?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notifyUrl: 'NotifyUrl',
      notifyUrlStatus: 'NotifyUrlStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyUrl: 'number',
      notifyUrlStatus: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailAddressMsgCallBackUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMailAddressMsgCallBackUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMailAddressMsgCallBackUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListRequest extends $tea.Model {
  endTime?: string;
  offset?: string;
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  ownerId?: number;
  pageNumber?: string;
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      offset: 'Offset',
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      offset: 'string',
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListResponseBody extends $tea.Model {
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  data?: GetTrackListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      data: GetTrackListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMailAddressRequest extends $tea.Model {
  mailAddressId?: number;
  ownerId?: number;
  password?: string;
  replyAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mailAddressId: 'MailAddressId',
      ownerId: 'OwnerId',
      password: 'Password',
      replyAddress: 'ReplyAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddressId: 'number',
      ownerId: 'number',
      password: 'string',
      replyAddress: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMailAddressResponseBody extends $tea.Model {
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

export class ModifyMailAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPWByDomainRequest extends $tea.Model {
  domainName?: string;
  password?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      password: 'Password',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      password: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPWByDomainResponseBody extends $tea.Model {
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

export class ModifyPWByDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPWByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPWByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagDescription?: string;
  tagId?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagDescription: 'string',
      tagId: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagResponseBody extends $tea.Model {
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

export class ModifyTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateRequest extends $tea.Model {
  fromType?: number;
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smsContent?: string;
  smsType?: number;
  templateId?: number;
  templateName?: string;
  templateNickName?: string;
  templateSubject?: string;
  templateText?: string;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsContent: 'SmsContent',
      smsType: 'SmsType',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateNickName: 'TemplateNickName',
      templateSubject: 'TemplateSubject',
      templateText: 'TemplateText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smsContent: 'string',
      smsType: 'number',
      templateId: 'number',
      templateName: 'string',
      templateNickName: 'string',
      templateSubject: 'string',
      templateText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResponseBody extends $tea.Model {
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

export class ModifyTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamRequest extends $tea.Model {
  keyWord?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  data?: QueryDomainByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryDomainByParamResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDomainByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDomainByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressRequest extends $tea.Model {
  endTime?: string;
  keyWord?: string;
  length?: number;
  nextStart?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      keyWord: 'KeyWord',
      length: 'Length',
      nextStart: 'NextStart',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      keyWord: 'string',
      length: 'number',
      nextStart: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressResponseBody extends $tea.Model {
  nextStart?: number;
  requestId?: string;
  totalCount?: number;
  data?: QueryInvalidAddressResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryInvalidAddressResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryInvalidAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryInvalidAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMailAddressByParamRequest extends $tea.Model {
  keyWord?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendtype: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMailAddressByParamResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  data?: QueryMailAddressByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryMailAddressByParamResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMailAddressByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMailAddressByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMailAddressByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamRequest extends $tea.Model {
  keyWord?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamResponseBody extends $tea.Model {
  nextStart?: string;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  data?: QueryReceiverByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryReceiverByParamResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryReceiverByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryReceiverByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailRequest extends $tea.Model {
  keyWord?: string;
  nextStart?: string;
  ownerId?: number;
  pageSize?: number;
  receiverId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      nextStart: 'NextStart',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      receiverId: 'ReceiverId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      nextStart: 'string',
      ownerId: 'number',
      pageSize: 'number',
      receiverId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailResponseBody extends $tea.Model {
  dataSchema?: string;
  nextStart?: string;
  requestId?: string;
  totalCount?: number;
  data?: QueryReceiverDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      dataSchema: 'DataSchema',
      nextStart: 'NextStart',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSchema: 'string',
      nextStart: 'string',
      requestId: 'string',
      totalCount: 'number',
      data: QueryReceiverDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryReceiverDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamRequest extends $tea.Model {
  keyWord?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  data?: QueryTagByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryTagByParamResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTagByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTagByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamRequest extends $tea.Model {
  keyWord?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  data?: QueryTaskByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryTaskByParamResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTaskByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTaskByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamRequest extends $tea.Model {
  fromType?: number;
  keyWord?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      keyWord: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  data?: QueryTemplateByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryTemplateByParamResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTemplateByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTemplateByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailRequest extends $tea.Model {
  detail?: string;
  ownerId?: number;
  receiverId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      ownerId: 'OwnerId',
      receiverId: 'ReceiverId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      ownerId: 'number',
      receiverId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailResponseBody extends $tea.Model {
  data?: SaveReceiverDetailResponseBodyData;
  errorCount?: number;
  requestId?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCount: 'ErrorCount',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SaveReceiverDetailResponseBodyData,
      errorCount: 'number',
      requestId: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveReceiverDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDRequest extends $tea.Model {
  accountName?: string;
  endTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      endTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  data?: SenderStatisticsByTagNameAndBatchIDResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      data: SenderStatisticsByTagNameAndBatchIDResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SenderStatisticsByTagNameAndBatchIDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SenderStatisticsByTagNameAndBatchIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamRequest extends $tea.Model {
  accountName?: string;
  endTime?: string;
  length?: number;
  nextStart?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  status?: number;
  tagName?: string;
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      endTime: 'EndTime',
      length: 'Length',
      nextStart: 'NextStart',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
      tagName: 'TagName',
      toAddress: 'ToAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      endTime: 'string',
      length: 'number',
      nextStart: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      status: 'number',
      tagName: 'string',
      toAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamResponseBody extends $tea.Model {
  nextStart?: number;
  requestId?: string;
  data?: SenderStatisticsDetailByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'number',
      requestId: 'string',
      data: SenderStatisticsDetailByParamResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SenderStatisticsDetailByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SenderStatisticsDetailByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailRequest extends $tea.Model {
  accountName?: string;
  addressType?: number;
  clickTrace?: string;
  fromAlias?: string;
  htmlBody?: string;
  ownerId?: number;
  replyAddress?: string;
  replyAddressAlias?: string;
  replyToAddress?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subject?: string;
  tagName?: string;
  textBody?: string;
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      addressType: 'AddressType',
      clickTrace: 'ClickTrace',
      fromAlias: 'FromAlias',
      htmlBody: 'HtmlBody',
      ownerId: 'OwnerId',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      replyToAddress: 'ReplyToAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subject: 'Subject',
      tagName: 'TagName',
      textBody: 'TextBody',
      toAddress: 'ToAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      addressType: 'number',
      clickTrace: 'string',
      fromAlias: 'string',
      htmlBody: 'string',
      ownerId: 'number',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      replyToAddress: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subject: 'string',
      tagName: 'string',
      textBody: 'string',
      toAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailResponseBody extends $tea.Model {
  envId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SingleSendMailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SingleSendMailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailV2Request extends $tea.Model {
  accountName?: string;
  addressType?: number;
  clickTrace?: string;
  fromAlias?: string;
  htmlBody?: string;
  htmlBodyPlaceHolders?: SingleSendMailV2RequestHtmlBodyPlaceHolders[];
  ownerId?: number;
  replyAddress?: string;
  replyAddressAlias?: string;
  replyToAddress?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subject?: string;
  tagName?: string;
  textBody?: string;
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      addressType: 'AddressType',
      clickTrace: 'ClickTrace',
      fromAlias: 'FromAlias',
      htmlBody: 'HtmlBody',
      htmlBodyPlaceHolders: 'HtmlBodyPlaceHolders',
      ownerId: 'OwnerId',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      replyToAddress: 'ReplyToAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subject: 'Subject',
      tagName: 'TagName',
      textBody: 'TextBody',
      toAddress: 'ToAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      addressType: 'number',
      clickTrace: 'string',
      fromAlias: 'string',
      htmlBody: 'string',
      htmlBodyPlaceHolders: { 'type': 'array', 'itemType': SingleSendMailV2RequestHtmlBodyPlaceHolders },
      ownerId: 'number',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      replyToAddress: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subject: 'string',
      tagName: 'string',
      textBody: 'string',
      toAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailV2ShrinkRequest extends $tea.Model {
  accountName?: string;
  addressType?: number;
  clickTrace?: string;
  fromAlias?: string;
  htmlBody?: string;
  htmlBodyPlaceHoldersShrink?: string;
  ownerId?: number;
  replyAddress?: string;
  replyAddressAlias?: string;
  replyToAddress?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subject?: string;
  tagName?: string;
  textBody?: string;
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      addressType: 'AddressType',
      clickTrace: 'ClickTrace',
      fromAlias: 'FromAlias',
      htmlBody: 'HtmlBody',
      htmlBodyPlaceHoldersShrink: 'HtmlBodyPlaceHolders',
      ownerId: 'OwnerId',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      replyToAddress: 'ReplyToAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subject: 'Subject',
      tagName: 'TagName',
      textBody: 'TextBody',
      toAddress: 'ToAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      addressType: 'number',
      clickTrace: 'string',
      fromAlias: 'string',
      htmlBody: 'string',
      htmlBodyPlaceHoldersShrink: 'string',
      ownerId: 'number',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      replyToAddress: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subject: 'string',
      tagName: 'string',
      textBody: 'string',
      toAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailV2ResponseBody extends $tea.Model {
  envId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SingleSendMailV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SingleSendMailV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListResponseBodyDataAccountNotificationInfo extends $tea.Model {
  region?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListResponseBodyData extends $tea.Model {
  accountNotificationInfo?: GetAccountListResponseBodyDataAccountNotificationInfo[];
  static names(): { [key: string]: string } {
    return {
      accountNotificationInfo: 'accountNotificationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNotificationInfo: { 'type': 'array', 'itemType': GetAccountListResponseBodyDataAccountNotificationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListResponseBodyDataStat extends $tea.Model {
  createTime?: number;
  rcptClickCount?: number;
  rcptClickRate?: string;
  rcptOpenCount?: number;
  rcptOpenRate?: string;
  rcptUniqueClickCount?: number;
  rcptUniqueClickRate?: string;
  rcptUniqueOpenCount?: number;
  rcptUniqueOpenRate?: string;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      rcptClickCount: 'RcptClickCount',
      rcptClickRate: 'RcptClickRate',
      rcptOpenCount: 'RcptOpenCount',
      rcptOpenRate: 'RcptOpenRate',
      rcptUniqueClickCount: 'RcptUniqueClickCount',
      rcptUniqueClickRate: 'RcptUniqueClickRate',
      rcptUniqueOpenCount: 'RcptUniqueOpenCount',
      rcptUniqueOpenRate: 'RcptUniqueOpenRate',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      rcptClickCount: 'number',
      rcptClickRate: 'string',
      rcptOpenCount: 'number',
      rcptOpenRate: 'string',
      rcptUniqueClickCount: 'number',
      rcptUniqueClickRate: 'string',
      rcptUniqueOpenCount: 'number',
      rcptUniqueOpenRate: 'string',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListResponseBodyData extends $tea.Model {
  stat?: GetTrackListResponseBodyDataStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': GetTrackListResponseBodyDataStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponseBodyDataDomain extends $tea.Model {
  cnameAuthStatus?: string;
  confirmStatus?: string;
  createTime?: string;
  domainId?: string;
  domainName?: string;
  domainRecord?: string;
  domainStatus?: string;
  icpStatus?: string;
  mxAuthStatus?: string;
  spfAuthStatus?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cnameAuthStatus: 'CnameAuthStatus',
      confirmStatus: 'ConfirmStatus',
      createTime: 'CreateTime',
      domainId: 'DomainId',
      domainName: 'DomainName',
      domainRecord: 'DomainRecord',
      domainStatus: 'DomainStatus',
      icpStatus: 'IcpStatus',
      mxAuthStatus: 'MxAuthStatus',
      spfAuthStatus: 'SpfAuthStatus',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameAuthStatus: 'string',
      confirmStatus: 'string',
      createTime: 'string',
      domainId: 'string',
      domainName: 'string',
      domainRecord: 'string',
      domainStatus: 'string',
      icpStatus: 'string',
      mxAuthStatus: 'string',
      spfAuthStatus: 'string',
      utcCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponseBodyData extends $tea.Model {
  domain?: QueryDomainByParamResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': QueryDomainByParamResponseBodyDataDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressResponseBodyDataMailDetail extends $tea.Model {
  lastUpdateTime?: string;
  toAddress?: string;
  utcLastUpdateTime?: number;
  static names(): { [key: string]: string } {
    return {
      lastUpdateTime: 'LastUpdateTime',
      toAddress: 'ToAddress',
      utcLastUpdateTime: 'UtcLastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUpdateTime: 'string',
      toAddress: 'string',
      utcLastUpdateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressResponseBodyData extends $tea.Model {
  mailDetail?: QueryInvalidAddressResponseBodyDataMailDetail[];
  static names(): { [key: string]: string } {
    return {
      mailDetail: 'mailDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailDetail: { 'type': 'array', 'itemType': QueryInvalidAddressResponseBodyDataMailDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMailAddressByParamResponseBodyDataMailAddress extends $tea.Model {
  accountName?: string;
  accountStatus?: string;
  createTime?: string;
  dailyCount?: string;
  dailyReqCount?: string;
  domainStatus?: string;
  mailAddressId?: string;
  monthCount?: string;
  monthReqCount?: string;
  replyAddress?: string;
  replyStatus?: string;
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      createTime: 'CreateTime',
      dailyCount: 'DailyCount',
      dailyReqCount: 'DailyReqCount',
      domainStatus: 'DomainStatus',
      mailAddressId: 'MailAddressId',
      monthCount: 'MonthCount',
      monthReqCount: 'MonthReqCount',
      replyAddress: 'ReplyAddress',
      replyStatus: 'ReplyStatus',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountStatus: 'string',
      createTime: 'string',
      dailyCount: 'string',
      dailyReqCount: 'string',
      domainStatus: 'string',
      mailAddressId: 'string',
      monthCount: 'string',
      monthReqCount: 'string',
      replyAddress: 'string',
      replyStatus: 'string',
      sendtype: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMailAddressByParamResponseBodyData extends $tea.Model {
  mailAddress?: QueryMailAddressByParamResponseBodyDataMailAddress[];
  static names(): { [key: string]: string } {
    return {
      mailAddress: 'mailAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddress: { 'type': 'array', 'itemType': QueryMailAddressByParamResponseBodyDataMailAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamResponseBodyDataReceiver extends $tea.Model {
  count?: string;
  createTime?: string;
  desc?: string;
  receiverId?: string;
  receiversAlias?: string;
  receiversName?: string;
  receiversStatus?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      createTime: 'CreateTime',
      desc: 'Desc',
      receiverId: 'ReceiverId',
      receiversAlias: 'ReceiversAlias',
      receiversName: 'ReceiversName',
      receiversStatus: 'ReceiversStatus',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      createTime: 'string',
      desc: 'string',
      receiverId: 'string',
      receiversAlias: 'string',
      receiversName: 'string',
      receiversStatus: 'string',
      utcCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamResponseBodyData extends $tea.Model {
  receiver?: QueryReceiverByParamResponseBodyDataReceiver[];
  static names(): { [key: string]: string } {
    return {
      receiver: 'receiver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiver: { 'type': 'array', 'itemType': QueryReceiverByParamResponseBodyDataReceiver },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailResponseBodyDataDetail extends $tea.Model {
  createTime?: string;
  data?: string;
  email?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      data: 'Data',
      email: 'Email',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      data: 'string',
      email: 'string',
      utcCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailResponseBodyData extends $tea.Model {
  detail?: QueryReceiverDetailResponseBodyDataDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': QueryReceiverDetailResponseBodyDataDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamResponseBodyDataTag extends $tea.Model {
  tagDescription?: string;
  tagId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamResponseBodyData extends $tea.Model {
  tag?: QueryTagByParamResponseBodyDataTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryTagByParamResponseBodyDataTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamResponseBodyDataTask extends $tea.Model {
  addressType?: string;
  createTime?: string;
  receiversName?: string;
  requestCount?: string;
  tagName?: string;
  taskId?: string;
  taskStatus?: string;
  templateName?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      createTime: 'CreateTime',
      receiversName: 'ReceiversName',
      requestCount: 'RequestCount',
      tagName: 'TagName',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      templateName: 'TemplateName',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      createTime: 'string',
      receiversName: 'string',
      requestCount: 'string',
      tagName: 'string',
      taskId: 'string',
      taskStatus: 'string',
      templateName: 'string',
      utcCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamResponseBodyData extends $tea.Model {
  task?: QueryTaskByParamResponseBodyDataTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': QueryTaskByParamResponseBodyDataTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamResponseBodyDataTemplate extends $tea.Model {
  createTime?: string;
  smsStatus?: number;
  smsTemplateCode?: number;
  smsrejectinfo?: number;
  templateComment?: string;
  templateId?: string;
  templateName?: string;
  templateStatus?: string;
  templateType?: number;
  utcCreatetime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      smsStatus: 'SmsStatus',
      smsTemplateCode: 'SmsTemplateCode',
      smsrejectinfo: 'Smsrejectinfo',
      templateComment: 'TemplateComment',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
      utcCreatetime: 'UtcCreatetime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      smsStatus: 'number',
      smsTemplateCode: 'number',
      smsrejectinfo: 'number',
      templateComment: 'string',
      templateId: 'string',
      templateName: 'string',
      templateStatus: 'string',
      templateType: 'number',
      utcCreatetime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamResponseBodyData extends $tea.Model {
  template?: QueryTemplateByParamResponseBodyDataTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QueryTemplateByParamResponseBodyDataTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailResponseBodyDataDetail extends $tea.Model {
  email?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailResponseBodyData extends $tea.Model {
  detail?: SaveReceiverDetailResponseBodyDataDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': SaveReceiverDetailResponseBodyDataDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat extends $tea.Model {
  createTime?: string;
  faildCount?: string;
  requestCount?: string;
  succeededPercent?: string;
  successCount?: string;
  unavailableCount?: string;
  unavailablePercent?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      faildCount: 'faildCount',
      requestCount: 'requestCount',
      succeededPercent: 'succeededPercent',
      successCount: 'successCount',
      unavailableCount: 'unavailableCount',
      unavailablePercent: 'unavailablePercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      faildCount: 'string',
      requestCount: 'string',
      succeededPercent: 'string',
      successCount: 'string',
      unavailableCount: 'string',
      unavailablePercent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDResponseBodyData extends $tea.Model {
  stat?: SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamResponseBodyDataMailDetail extends $tea.Model {
  accountName?: string;
  lastUpdateTime?: string;
  message?: string;
  status?: number;
  toAddress?: string;
  utcLastUpdateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      lastUpdateTime: 'LastUpdateTime',
      message: 'Message',
      status: 'Status',
      toAddress: 'ToAddress',
      utcLastUpdateTime: 'UtcLastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      lastUpdateTime: 'string',
      message: 'string',
      status: 'number',
      toAddress: 'string',
      utcLastUpdateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamResponseBodyData extends $tea.Model {
  mailDetail?: SenderStatisticsDetailByParamResponseBodyDataMailDetail[];
  static names(): { [key: string]: string } {
    return {
      mailDetail: 'mailDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailDetail: { 'type': 'array', 'itemType': SenderStatisticsDetailByParamResponseBodyDataMailDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailV2RequestHtmlBodyPlaceHolders extends $tea.Model {
  placeHolders?: { [key: string]: string };
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      placeHolders: 'PlaceHolders',
      toAddress: 'ToAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      placeHolders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      toAddress: 'string',
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
    this._endpoint = this.getEndpoint("dm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addIpfilterWithOptions(request: AddIpfilterRequest, runtime: $Util.RuntimeOptions): Promise<AddIpfilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipAddress)) {
      query["IpAddress"] = request.ipAddress;
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
      action: "AddIpfilter",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddIpfilterResponse>(await this.callApi(params, req, runtime), new AddIpfilterResponse({}));
  }

  async addIpfilter(request: AddIpfilterRequest): Promise<AddIpfilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpfilterWithOptions(request, runtime);
  }

  async batchSendMailWithOptions(request: BatchSendMailRequest, runtime: $Util.RuntimeOptions): Promise<BatchSendMailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.clickTrace)) {
      query["ClickTrace"] = request.clickTrace;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.receiversName)) {
      query["ReceiversName"] = request.receiversName;
    }

    if (!Util.isUnset(request.replyAddress)) {
      query["ReplyAddress"] = request.replyAddress;
    }

    if (!Util.isUnset(request.replyAddressAlias)) {
      query["ReplyAddressAlias"] = request.replyAddressAlias;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSendMail",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSendMailResponse>(await this.callApi(params, req, runtime), new BatchSendMailResponse({}));
  }

  async batchSendMail(request: BatchSendMailRequest): Promise<BatchSendMailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSendMailWithOptions(request, runtime);
  }

  async checkDomainWithOptions(request: CheckDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
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
      action: "CheckDomain",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDomainResponse>(await this.callApi(params, req, runtime), new CheckDomainResponse({}));
  }

  async checkDomain(request: CheckDomainRequest): Promise<CheckDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  async checkDomainDnsWithOptions(request: CheckDomainDnsRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainDnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDomainDns",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDomainDnsResponse>(await this.callApi(params, req, runtime), new CheckDomainDnsResponse({}));
  }

  async checkDomainDns(request: CheckDomainDnsRequest): Promise<CheckDomainDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainDnsWithOptions(request, runtime);
  }

  async createDomainWithOptions(request: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
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
      action: "CreateDomain",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  async createMailAddressWithOptions(request: CreateMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateMailAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.replyAddress)) {
      query["ReplyAddress"] = request.replyAddress;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendtype)) {
      query["Sendtype"] = request.sendtype;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMailAddress",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMailAddressResponse>(await this.callApi(params, req, runtime), new CreateMailAddressResponse({}));
  }

  async createMailAddress(request: CreateMailAddressRequest): Promise<CreateMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMailAddressWithOptions(request, runtime);
  }

  async createReceiverWithOptions(request: CreateReceiverRequest, runtime: $Util.RuntimeOptions): Promise<CreateReceiverResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.receiversAlias)) {
      query["ReceiversAlias"] = request.receiversAlias;
    }

    if (!Util.isUnset(request.receiversName)) {
      query["ReceiversName"] = request.receiversName;
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
      action: "CreateReceiver",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateReceiverResponse>(await this.callApi(params, req, runtime), new CreateReceiverResponse({}));
  }

  async createReceiver(request: CreateReceiverRequest): Promise<CreateReceiverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReceiverWithOptions(request, runtime);
  }

  async createTagWithOptions(request: CreateTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagResponse> {
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

    if (!Util.isUnset(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTag",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTagResponse>(await this.callApi(params, req, runtime), new CreateTagResponse({}));
  }

  async createTag(request: CreateTagRequest): Promise<CreateTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromType)) {
      query["FromType"] = request.fromType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smsContent)) {
      query["SmsContent"] = request.smsContent;
    }

    if (!Util.isUnset(request.smsType)) {
      query["SmsType"] = request.smsType;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateNickName)) {
      query["TemplateNickName"] = request.templateNickName;
    }

    if (!Util.isUnset(request.templateSubject)) {
      query["TemplateSubject"] = request.templateSubject;
    }

    if (!Util.isUnset(request.templateText)) {
      query["TemplateText"] = request.templateText;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
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
      action: "DeleteDomain",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deleteMailAddressWithOptions(request: DeleteMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMailAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mailAddressId)) {
      query["MailAddressId"] = request.mailAddressId;
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
      action: "DeleteMailAddress",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMailAddressResponse>(await this.callApi(params, req, runtime), new DeleteMailAddressResponse({}));
  }

  async deleteMailAddress(request: DeleteMailAddressRequest): Promise<DeleteMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMailAddressWithOptions(request, runtime);
  }

  async deleteReceiverWithOptions(request: DeleteReceiverRequest, runtime: $Util.RuntimeOptions): Promise<DeleteReceiverResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
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
      action: "DeleteReceiver",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteReceiverResponse>(await this.callApi(params, req, runtime), new DeleteReceiverResponse({}));
  }

  async deleteReceiver(request: DeleteReceiverRequest): Promise<DeleteReceiverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReceiverWithOptions(request, runtime);
  }

  async deleteReceiverDetailWithOptions(request: DeleteReceiverDetailRequest, runtime: $Util.RuntimeOptions): Promise<DeleteReceiverDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
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
      action: "DeleteReceiverDetail",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteReceiverDetailResponse>(await this.callApi(params, req, runtime), new DeleteReceiverDetailResponse({}));
  }

  async deleteReceiverDetail(request: DeleteReceiverDetailRequest): Promise<DeleteReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReceiverDetailWithOptions(request, runtime);
  }

  async deleteTagWithOptions(request: DeleteTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagResponse> {
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

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTag",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagResponse>(await this.callApi(params, req, runtime), new DeleteTagResponse({}));
  }

  async deleteTag(request: DeleteTagRequest): Promise<DeleteTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromType)) {
      query["FromType"] = request.fromType;
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async descAccountSummaryWithOptions(request: DescAccountSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescAccountSummaryResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescAccountSummary",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescAccountSummaryResponse>(await this.callApi(params, req, runtime), new DescAccountSummaryResponse({}));
  }

  async descAccountSummary(request: DescAccountSummaryRequest): Promise<DescAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descAccountSummaryWithOptions(request, runtime);
  }

  async descDomainWithOptions(request: DescDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.requireRealTimeDnsRecords)) {
      query["RequireRealTimeDnsRecords"] = request.requireRealTimeDnsRecords;
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
      action: "DescDomain",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescDomainResponse>(await this.callApi(params, req, runtime), new DescDomainResponse({}));
  }

  async descDomain(request: DescDomainRequest): Promise<DescDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descDomainWithOptions(request, runtime);
  }

  async descTemplateWithOptions(request: DescTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromType)) {
      query["FromType"] = request.fromType;
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescTemplate",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescTemplateResponse>(await this.callApi(params, req, runtime), new DescTemplateResponse({}));
  }

  async descTemplate(request: DescTemplateRequest): Promise<DescTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descTemplateWithOptions(request, runtime);
  }

  async getAccountListWithOptions(request: GetAccountListRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.offsetCreateTime)) {
      query["OffsetCreateTime"] = request.offsetCreateTime;
    }

    if (!Util.isUnset(request.offsetCreateTimeDesc)) {
      query["OffsetCreateTimeDesc"] = request.offsetCreateTimeDesc;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
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

    if (!Util.isUnset(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountList",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountListResponse>(await this.callApi(params, req, runtime), new GetAccountListResponse({}));
  }

  async getAccountList(request: GetAccountListRequest): Promise<GetAccountListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountListWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request GetMailAddressMsgCallBackUrlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMailAddressMsgCallBackUrlResponse
   */
  // Deprecated
  async getMailAddressMsgCallBackUrlWithOptions(request: GetMailAddressMsgCallBackUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMailAddressMsgCallBackUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mailFrom)) {
      query["MailFrom"] = request.mailFrom;
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
      action: "GetMailAddressMsgCallBackUrl",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMailAddressMsgCallBackUrlResponse>(await this.callApi(params, req, runtime), new GetMailAddressMsgCallBackUrlResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request GetMailAddressMsgCallBackUrlRequest
    * @return GetMailAddressMsgCallBackUrlResponse
   */
  // Deprecated
  async getMailAddressMsgCallBackUrl(request: GetMailAddressMsgCallBackUrlRequest): Promise<GetMailAddressMsgCallBackUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMailAddressMsgCallBackUrlWithOptions(request, runtime);
  }

  async getTrackListWithOptions(request: GetTrackListRequest, runtime: $Util.RuntimeOptions): Promise<GetTrackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.offsetCreateTime)) {
      query["OffsetCreateTime"] = request.offsetCreateTime;
    }

    if (!Util.isUnset(request.offsetCreateTimeDesc)) {
      query["OffsetCreateTimeDesc"] = request.offsetCreateTimeDesc;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrackList",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrackListResponse>(await this.callApi(params, req, runtime), new GetTrackListResponse({}));
  }

  async getTrackList(request: GetTrackListRequest): Promise<GetTrackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrackListWithOptions(request, runtime);
  }

  async modifyMailAddressWithOptions(request: ModifyMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMailAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mailAddressId)) {
      query["MailAddressId"] = request.mailAddressId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.replyAddress)) {
      query["ReplyAddress"] = request.replyAddress;
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
      action: "ModifyMailAddress",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMailAddressResponse>(await this.callApi(params, req, runtime), new ModifyMailAddressResponse({}));
  }

  async modifyMailAddress(request: ModifyMailAddressRequest): Promise<ModifyMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMailAddressWithOptions(request, runtime);
  }

  async modifyPWByDomainWithOptions(request: ModifyPWByDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPWByDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPWByDomain",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPWByDomainResponse>(await this.callApi(params, req, runtime), new ModifyPWByDomainResponse({}));
  }

  async modifyPWByDomain(request: ModifyPWByDomainRequest): Promise<ModifyPWByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPWByDomainWithOptions(request, runtime);
  }

  async modifyTagWithOptions(request: ModifyTagRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTagResponse> {
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

    if (!Util.isUnset(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTag",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTagResponse>(await this.callApi(params, req, runtime), new ModifyTagResponse({}));
  }

  async modifyTag(request: ModifyTagRequest): Promise<ModifyTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTagWithOptions(request, runtime);
  }

  async modifyTemplateWithOptions(request: ModifyTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromType)) {
      query["FromType"] = request.fromType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smsContent)) {
      query["SmsContent"] = request.smsContent;
    }

    if (!Util.isUnset(request.smsType)) {
      query["SmsType"] = request.smsType;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateNickName)) {
      query["TemplateNickName"] = request.templateNickName;
    }

    if (!Util.isUnset(request.templateSubject)) {
      query["TemplateSubject"] = request.templateSubject;
    }

    if (!Util.isUnset(request.templateText)) {
      query["TemplateText"] = request.templateText;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTemplate",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTemplateResponse>(await this.callApi(params, req, runtime), new ModifyTemplateResponse({}));
  }

  async modifyTemplate(request: ModifyTemplateRequest): Promise<ModifyTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateWithOptions(request, runtime);
  }

  async queryDomainByParamWithOptions(request: QueryDomainByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainByParamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDomainByParam",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDomainByParamResponse>(await this.callApi(params, req, runtime), new QueryDomainByParamResponse({}));
  }

  async queryDomainByParam(request: QueryDomainByParamRequest): Promise<QueryDomainByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByParamWithOptions(request, runtime);
  }

  async queryInvalidAddressWithOptions(request: QueryInvalidAddressRequest, runtime: $Util.RuntimeOptions): Promise<QueryInvalidAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.nextStart)) {
      query["NextStart"] = request.nextStart;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInvalidAddress",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInvalidAddressResponse>(await this.callApi(params, req, runtime), new QueryInvalidAddressResponse({}));
  }

  async queryInvalidAddress(request: QueryInvalidAddressRequest): Promise<QueryInvalidAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInvalidAddressWithOptions(request, runtime);
  }

  async queryMailAddressByParamWithOptions(request: QueryMailAddressByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryMailAddressByParamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    if (!Util.isUnset(request.sendtype)) {
      query["Sendtype"] = request.sendtype;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMailAddressByParam",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMailAddressByParamResponse>(await this.callApi(params, req, runtime), new QueryMailAddressByParamResponse({}));
  }

  async queryMailAddressByParam(request: QueryMailAddressByParamRequest): Promise<QueryMailAddressByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMailAddressByParamWithOptions(request, runtime);
  }

  async queryReceiverByParamWithOptions(request: QueryReceiverByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryReceiverByParamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryReceiverByParam",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryReceiverByParamResponse>(await this.callApi(params, req, runtime), new QueryReceiverByParamResponse({}));
  }

  async queryReceiverByParam(request: QueryReceiverByParamRequest): Promise<QueryReceiverByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReceiverByParamWithOptions(request, runtime);
  }

  async queryReceiverDetailWithOptions(request: QueryReceiverDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryReceiverDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.nextStart)) {
      query["NextStart"] = request.nextStart;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
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
      action: "QueryReceiverDetail",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryReceiverDetailResponse>(await this.callApi(params, req, runtime), new QueryReceiverDetailResponse({}));
  }

  async queryReceiverDetail(request: QueryReceiverDetailRequest): Promise<QueryReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReceiverDetailWithOptions(request, runtime);
  }

  async queryTagByParamWithOptions(request: QueryTagByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagByParamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTagByParam",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTagByParamResponse>(await this.callApi(params, req, runtime), new QueryTagByParamResponse({}));
  }

  async queryTagByParam(request: QueryTagByParamRequest): Promise<QueryTagByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagByParamWithOptions(request, runtime);
  }

  async queryTaskByParamWithOptions(request: QueryTaskByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskByParamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTaskByParam",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTaskByParamResponse>(await this.callApi(params, req, runtime), new QueryTaskByParamResponse({}));
  }

  async queryTaskByParam(request: QueryTaskByParamRequest): Promise<QueryTaskByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskByParamWithOptions(request, runtime);
  }

  async queryTemplateByParamWithOptions(request: QueryTemplateByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryTemplateByParamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromType)) {
      query["FromType"] = request.fromType;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTemplateByParam",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTemplateByParamResponse>(await this.callApi(params, req, runtime), new QueryTemplateByParamResponse({}));
  }

  async queryTemplateByParam(request: QueryTemplateByParamRequest): Promise<QueryTemplateByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTemplateByParamWithOptions(request, runtime);
  }

  async saveReceiverDetailWithOptions(request: SaveReceiverDetailRequest, runtime: $Util.RuntimeOptions): Promise<SaveReceiverDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
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
      action: "SaveReceiverDetail",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveReceiverDetailResponse>(await this.callApi(params, req, runtime), new SaveReceiverDetailResponse({}));
  }

  async saveReceiverDetail(request: SaveReceiverDetailRequest): Promise<SaveReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveReceiverDetailWithOptions(request, runtime);
  }

  async senderStatisticsByTagNameAndBatchIDWithOptions(request: SenderStatisticsByTagNameAndBatchIDRequest, runtime: $Util.RuntimeOptions): Promise<SenderStatisticsByTagNameAndBatchIDResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SenderStatisticsByTagNameAndBatchID",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SenderStatisticsByTagNameAndBatchIDResponse>(await this.callApi(params, req, runtime), new SenderStatisticsByTagNameAndBatchIDResponse({}));
  }

  async senderStatisticsByTagNameAndBatchID(request: SenderStatisticsByTagNameAndBatchIDRequest): Promise<SenderStatisticsByTagNameAndBatchIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.senderStatisticsByTagNameAndBatchIDWithOptions(request, runtime);
  }

  async senderStatisticsDetailByParamWithOptions(request: SenderStatisticsDetailByParamRequest, runtime: $Util.RuntimeOptions): Promise<SenderStatisticsDetailByParamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.nextStart)) {
      query["NextStart"] = request.nextStart;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.toAddress)) {
      query["ToAddress"] = request.toAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SenderStatisticsDetailByParam",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SenderStatisticsDetailByParamResponse>(await this.callApi(params, req, runtime), new SenderStatisticsDetailByParamResponse({}));
  }

  async senderStatisticsDetailByParam(request: SenderStatisticsDetailByParamRequest): Promise<SenderStatisticsDetailByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.senderStatisticsDetailByParamWithOptions(request, runtime);
  }

  async singleSendMailWithOptions(request: SingleSendMailRequest, runtime: $Util.RuntimeOptions): Promise<SingleSendMailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.clickTrace)) {
      query["ClickTrace"] = request.clickTrace;
    }

    if (!Util.isUnset(request.fromAlias)) {
      query["FromAlias"] = request.fromAlias;
    }

    if (!Util.isUnset(request.htmlBody)) {
      query["HtmlBody"] = request.htmlBody;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.replyAddress)) {
      query["ReplyAddress"] = request.replyAddress;
    }

    if (!Util.isUnset(request.replyAddressAlias)) {
      query["ReplyAddressAlias"] = request.replyAddressAlias;
    }

    if (!Util.isUnset(request.replyToAddress)) {
      query["ReplyToAddress"] = request.replyToAddress;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.textBody)) {
      query["TextBody"] = request.textBody;
    }

    if (!Util.isUnset(request.toAddress)) {
      query["ToAddress"] = request.toAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SingleSendMail",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SingleSendMailResponse>(await this.callApi(params, req, runtime), new SingleSendMailResponse({}));
  }

  async singleSendMail(request: SingleSendMailRequest): Promise<SingleSendMailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleSendMailWithOptions(request, runtime);
  }

  async singleSendMailV2WithOptions(tmpReq: SingleSendMailV2Request, runtime: $Util.RuntimeOptions): Promise<SingleSendMailV2Response> {
    Util.validateModel(tmpReq);
    let request = new SingleSendMailV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.htmlBodyPlaceHolders)) {
      request.htmlBodyPlaceHoldersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.htmlBodyPlaceHolders, "HtmlBodyPlaceHolders", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.clickTrace)) {
      query["ClickTrace"] = request.clickTrace;
    }

    if (!Util.isUnset(request.fromAlias)) {
      query["FromAlias"] = request.fromAlias;
    }

    if (!Util.isUnset(request.htmlBody)) {
      query["HtmlBody"] = request.htmlBody;
    }

    if (!Util.isUnset(request.htmlBodyPlaceHoldersShrink)) {
      query["HtmlBodyPlaceHolders"] = request.htmlBodyPlaceHoldersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.replyAddress)) {
      query["ReplyAddress"] = request.replyAddress;
    }

    if (!Util.isUnset(request.replyAddressAlias)) {
      query["ReplyAddressAlias"] = request.replyAddressAlias;
    }

    if (!Util.isUnset(request.replyToAddress)) {
      query["ReplyToAddress"] = request.replyToAddress;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.textBody)) {
      query["TextBody"] = request.textBody;
    }

    if (!Util.isUnset(request.toAddress)) {
      query["ToAddress"] = request.toAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SingleSendMailV2",
      version: "2017-06-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SingleSendMailV2Response>(await this.callApi(params, req, runtime), new SingleSendMailV2Response({}));
  }

  async singleSendMailV2(request: SingleSendMailV2Request): Promise<SingleSendMailV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleSendMailV2WithOptions(request, runtime);
  }

}
