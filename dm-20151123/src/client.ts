// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddIpfilterRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ipAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpfilterResponseBody extends $tea.Model {
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

export class AddIpfilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddIpfilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddIpfilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveMailTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveMailTemplateResponseBody extends $tea.Model {
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

export class ApproveMailTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApproveMailTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApproveMailTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveReplyMailAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveReplyMailAddressResponseBody extends $tea.Model {
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

export class ApproveReplyMailAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApproveReplyMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApproveReplyMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveSmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveSmsTemplateResponseBody extends $tea.Model {
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

export class ApproveSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApproveSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApproveSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveTemplateResponseBody extends $tea.Model {
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

export class ApproveTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApproveTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApproveTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateName?: string;
  accountName?: string;
  receiversName?: string;
  addressType?: number;
  tagName?: string;
  replyAddress?: string;
  replyAddressAlias?: string;
  clickTrace?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateName: 'TemplateName',
      accountName: 'AccountName',
      receiversName: 'ReceiversName',
      addressType: 'AddressType',
      tagName: 'TagName',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      clickTrace: 'ClickTrace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateName: 'string',
      accountName: 'string',
      receiversName: 'string',
      addressType: 'number',
      tagName: 'string',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      clickTrace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailResponseBody extends $tea.Model {
  requestId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSendMailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSendMailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  domainId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      domainId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBody extends $tea.Model {
  requestId?: string;
  domainStatus?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainStatus: 'DomainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInvalidAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      toAddress: 'ToAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      toAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInvalidAddressResponseBody extends $tea.Model {
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

export class CheckInvalidAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckInvalidAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckInvalidAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReplyToMailAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  lang?: string;
  region?: string;
  mailAddressId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      region: 'Region',
      mailAddressId: 'MailAddressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      region: 'string',
      mailAddressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReplyToMailAddressResponseBody extends $tea.Model {
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

export class CheckReplyToMailAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckReplyToMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckReplyToMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDayuRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  accountType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      accountType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDayuResponseBody extends $tea.Model {
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

export class CreateDayuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDayuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDayuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      domainName: 'string',
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
  body: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  accountName?: string;
  replyAddress?: string;
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      accountName: 'AccountName',
      replyAddress: 'ReplyAddress',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      accountName: 'string',
      replyAddress: 'string',
      sendtype: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailAddressResponseBody extends $tea.Model {
  requestId?: string;
  mailAddressId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mailAddressId: 'MailAddressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mailAddressId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMailAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReceiverRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  receiversName?: string;
  receiversAlias?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      receiversName: 'ReceiversName',
      receiversAlias: 'ReceiversAlias',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      receiversName: 'string',
      receiversAlias: 'string',
      desc: 'string',
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
  body: CreateReceiverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateReceiverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  remark?: string;
  signType?: number;
  fileNames?: string;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      remark: 'Remark',
      signType: 'SignType',
      fileNames: 'FileNames',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      remark: 'string',
      signType: 'number',
      fileNames: 'string',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignResponseBody extends $tea.Model {
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

export class CreateSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSignResponseBody,
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
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  body: CreateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateType?: number;
  templateName?: string;
  templateSubject?: string;
  templateNickName?: string;
  templateText?: string;
  smsType?: number;
  smsContent?: string;
  remark?: string;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
      templateSubject: 'TemplateSubject',
      templateNickName: 'TemplateNickName',
      templateText: 'TemplateText',
      smsType: 'SmsType',
      smsContent: 'SmsContent',
      remark: 'Remark',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateType: 'number',
      templateName: 'string',
      templateSubject: 'string',
      templateNickName: 'string',
      templateText: 'string',
      smsType: 'number',
      smsContent: 'string',
      remark: 'string',
      fromType: 'number',
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
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  domainId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      domainId: 'number',
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
  body: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInvalidAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      toAddress: 'ToAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      toAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInvalidAddressResponseBody extends $tea.Model {
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

export class DeleteInvalidAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInvalidAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInvalidAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpfilterByEdmIdRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  fromType?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      fromType: 'FromType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      fromType: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpfilterByEdmIdResponseBody extends $tea.Model {
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

export class DeleteIpfilterByEdmIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpfilterByEdmIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpfilterByEdmIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMailAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  mailAddressId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      mailAddressId: 'MailAddressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      mailAddressId: 'number',
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
  body: DeleteMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReceiverRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  receiverId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      receiverId: 'ReceiverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      receiverId: 'string',
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
  body: DeleteReceiverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteReceiverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReceiverDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  receiverId?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      receiverId: 'ReceiverId',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      receiverId: 'string',
      email: 'string',
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
  body: DeleteReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteReceiverDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSignRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signId?: number;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signId: 'SignId',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signId: 'number',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSignResponseBody extends $tea.Model {
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

export class DeleteSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSignResponseBody,
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
  body: DeleteTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      fromType: 'number',
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
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  dayuStatus?: number;
  smsRecord?: number;
  monthQuota?: number;
  requestId?: string;
  receivers?: number;
  smsTemplates?: number;
  templates?: number;
  dailyQuota?: number;
  userStatus?: number;
  domains?: number;
  quotaLevel?: number;
  smsSign?: number;
  maxQuotaLevel?: number;
  enableTimes?: number;
  tags?: number;
  mailAddresses?: number;
  static names(): { [key: string]: string } {
    return {
      dayuStatus: 'DayuStatus',
      smsRecord: 'SmsRecord',
      monthQuota: 'MonthQuota',
      requestId: 'RequestId',
      receivers: 'Receivers',
      smsTemplates: 'SmsTemplates',
      templates: 'Templates',
      dailyQuota: 'DailyQuota',
      userStatus: 'UserStatus',
      domains: 'Domains',
      quotaLevel: 'QuotaLevel',
      smsSign: 'SmsSign',
      maxQuotaLevel: 'MaxQuotaLevel',
      enableTimes: 'EnableTimes',
      tags: 'Tags',
      mailAddresses: 'MailAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayuStatus: 'number',
      smsRecord: 'number',
      monthQuota: 'number',
      requestId: 'string',
      receivers: 'number',
      smsTemplates: 'number',
      templates: 'number',
      dailyQuota: 'number',
      userStatus: 'number',
      domains: 'number',
      quotaLevel: 'number',
      smsSign: 'number',
      maxQuotaLevel: 'number',
      enableTimes: 'number',
      tags: 'number',
      mailAddresses: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescAccountSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescAccountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescAccountSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescAccountSummary2Request extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescAccountSummary2ResponseBody extends $tea.Model {
  requestId?: string;
  mnsForceMigrating?: number;
  mnsBag?: number;
  mnsMigrating?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mnsForceMigrating: 'MnsForceMigrating',
      mnsBag: 'MnsBag',
      mnsMigrating: 'MnsMigrating',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mnsForceMigrating: 'number',
      mnsBag: 'number',
      mnsMigrating: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescAccountSummary2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescAccountSummary2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescAccountSummary2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescDomainRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  domainId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      domainId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescDomainResponseBody extends $tea.Model {
  spfRecord?: string;
  spfAuthStatus?: string;
  cnameAuthStatus?: string;
  requestId?: string;
  domainName?: string;
  dnsMx?: string;
  createTime?: string;
  cnameRecord?: string;
  dnsTxt?: string;
  cnameConfirmStatus?: string;
  icpStatus?: string;
  defaultDomain?: string;
  dnsSpf?: string;
  mxRecord?: string;
  domainId?: string;
  domainType?: string;
  mxAuthStatus?: string;
  tlDomainName?: string;
  tracefRecord?: string;
  domainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      spfRecord: 'SpfRecord',
      spfAuthStatus: 'SpfAuthStatus',
      cnameAuthStatus: 'CnameAuthStatus',
      requestId: 'RequestId',
      domainName: 'DomainName',
      dnsMx: 'DnsMx',
      createTime: 'CreateTime',
      cnameRecord: 'CnameRecord',
      dnsTxt: 'DnsTxt',
      cnameConfirmStatus: 'CnameConfirmStatus',
      icpStatus: 'IcpStatus',
      defaultDomain: 'DefaultDomain',
      dnsSpf: 'DnsSpf',
      mxRecord: 'MxRecord',
      domainId: 'DomainId',
      domainType: 'DomainType',
      mxAuthStatus: 'MxAuthStatus',
      tlDomainName: 'TlDomainName',
      tracefRecord: 'TracefRecord',
      domainStatus: 'DomainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spfRecord: 'string',
      spfAuthStatus: 'string',
      cnameAuthStatus: 'string',
      requestId: 'string',
      domainName: 'string',
      dnsMx: 'string',
      createTime: 'string',
      cnameRecord: 'string',
      dnsTxt: 'string',
      cnameConfirmStatus: 'string',
      icpStatus: 'string',
      defaultDomain: 'string',
      dnsSpf: 'string',
      mxRecord: 'string',
      domainId: 'string',
      domainType: 'string',
      mxAuthStatus: 'string',
      tlDomainName: 'string',
      tracefRecord: 'string',
      domainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescTemplateResponseBody extends $tea.Model {
  smsType?: string;
  requestId?: string;
  createTime?: string;
  templateText?: string;
  smsContent?: string;
  templateName?: string;
  templateNickName?: string;
  templateType?: string;
  templateSubject?: string;
  remark?: string;
  templateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      smsType: 'SmsType',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      templateText: 'TemplateText',
      smsContent: 'SmsContent',
      templateName: 'TemplateName',
      templateNickName: 'TemplateNickName',
      templateType: 'TemplateType',
      templateSubject: 'TemplateSubject',
      remark: 'Remark',
      templateStatus: 'TemplateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsType: 'string',
      requestId: 'string',
      createTime: 'string',
      templateText: 'string',
      smsContent: 'string',
      templateName: 'string',
      templateNickName: 'string',
      templateType: 'string',
      templateSubject: 'string',
      remark: 'string',
      templateStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAccountRequest extends $tea.Model {
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

export class EnableAccountResponseBody extends $tea.Model {
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

export class EnableAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  total?: string;
  offset?: string;
  pageSize?: string;
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      total: 'Total',
      offset: 'Offset',
      pageSize: 'PageSize',
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      total: 'string',
      offset: 'string',
      pageSize: 'string',
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  data?: GetAccountListResponseBodyData;
  total?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      total: 'Total',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      data: GetAccountListResponseBodyData,
      total: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpfilterListRequest extends $tea.Model {
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

export class GetIpfilterListResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  data?: GetIpfilterListResponseBodyData;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      data: GetIpfilterListResponseBodyData,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpfilterListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIpfilterListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIpfilterListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpProtectionRequest extends $tea.Model {
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

export class GetIpProtectionResponseBody extends $tea.Model {
  requestId?: string;
  ipProtection?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipProtection: 'IpProtection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipProtection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIpProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIpProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailAddressMsgCallBackUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  mailFrom?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      mailFrom: 'MailFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      mailFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailAddressMsgCallBackUrlResponseBody extends $tea.Model {
  notifyUrlStatus?: number;
  requestId?: string;
  notifyUrl?: number;
  static names(): { [key: string]: string } {
    return {
      notifyUrlStatus: 'NotifyUrlStatus',
      requestId: 'RequestId',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyUrlStatus: 'number',
      requestId: 'string',
      notifyUrl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailAddressMsgCallBackUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMailAddressMsgCallBackUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMailAddressMsgCallBackUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  total?: string;
  offset?: string;
  pageSize?: string;
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      total: 'Total',
      offset: 'Offset',
      pageSize: 'PageSize',
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      total: 'string',
      offset: 'string',
      pageSize: 'string',
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionListResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  data?: GetRegionListResponseBodyData;
  total?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      total: 'Total',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      data: GetRegionListResponseBodyData,
      total: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRegionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRegionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSenderAddressListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  total?: string;
  offset?: string;
  pageSize?: string;
  pageNo?: string;
  keyword?: string;
  notifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      total: 'Total',
      offset: 'Offset',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      keyword: 'Keyword',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      total: 'string',
      offset: 'string',
      pageSize: 'string',
      pageNo: 'string',
      keyword: 'string',
      notifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSenderAddressListResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  data?: GetSenderAddressListResponseBodyData;
  total?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      total: 'Total',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      data: GetSenderAddressListResponseBodyData,
      total: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSenderAddressListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSenderAddressListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSenderAddressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  endTime?: string;
  total?: string;
  offset?: string;
  pageSize?: string;
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      total: 'Total',
      offset: 'Offset',
      pageSize: 'PageSize',
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      endTime: 'string',
      total: 'string',
      offset: 'string',
      pageSize: 'string',
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListResponseBody extends $tea.Model {
  offsetCreateTime?: string;
  requestId?: string;
  pageSize?: number;
  data?: GetTrackListResponseBodyData;
  total?: number;
  pageNo?: number;
  offsetCreateTimeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      offsetCreateTime: 'OffsetCreateTime',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      data: 'data',
      total: 'Total',
      pageNo: 'PageNo',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetCreateTime: 'string',
      requestId: 'string',
      pageSize: 'number',
      data: GetTrackListResponseBodyData,
      total: 'number',
      pageNo: 'number',
      offsetCreateTimeDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTrackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTrackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListByMailFromAndTagNameRequest extends $tea.Model {
  total?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  endTime?: string;
  offset?: string;
  pageSize?: string;
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  pageNumber?: string;
  accountName?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      offset: 'Offset',
      pageSize: 'PageSize',
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      pageNumber: 'PageNumber',
      accountName: 'AccountName',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      endTime: 'string',
      offset: 'string',
      pageSize: 'string',
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      pageNumber: 'string',
      accountName: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListByMailFromAndTagNameResponseBody extends $tea.Model {
  offsetCreateTime?: string;
  requestId?: string;
  pageSize?: number;
  total?: number;
  trackList?: GetTrackListByMailFromAndTagNameResponseBodyTrackList;
  pageNo?: number;
  offsetCreateTimeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      offsetCreateTime: 'OffsetCreateTime',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      total: 'Total',
      trackList: 'TrackList',
      pageNo: 'PageNo',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetCreateTime: 'string',
      requestId: 'string',
      pageSize: 'number',
      total: 'number',
      trackList: GetTrackListByMailFromAndTagNameResponseBodyTrackList,
      pageNo: 'number',
      offsetCreateTimeDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListByMailFromAndTagNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTrackListByMailFromAndTagNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTrackListByMailFromAndTagNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateMarketRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  version?: string;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      version: 'Version',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      version: 'string',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateMarketResponseBody extends $tea.Model {
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

export class MigrateMarketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateMarketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateMarketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountNotificationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  region?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      region: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountNotificationResponseBody extends $tea.Model {
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

export class ModifyAccountNotificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccountNotificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccountNotificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMailAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  mailAddressId?: number;
  replyAddress?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      mailAddressId: 'MailAddressId',
      replyAddress: 'ReplyAddress',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      mailAddressId: 'number',
      replyAddress: 'string',
      password: 'string',
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
  body: ModifyMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPWByDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPWByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPWByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySenderAddressNotificationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  senderAddressId?: string;
  senderAddress?: string;
  region?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      senderAddressId: 'SenderAddressId',
      senderAddress: 'SenderAddress',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      senderAddressId: 'string',
      senderAddress: 'string',
      region: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySenderAddressNotificationResponseBody extends $tea.Model {
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

export class ModifySenderAddressNotificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySenderAddressNotificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySenderAddressNotificationResponseBody,
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
  tagId?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  body: ModifyTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  templateName?: string;
  templateSubject?: string;
  templateNickName?: string;
  templateText?: string;
  smsType?: number;
  smsContent?: string;
  remark?: string;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateSubject: 'TemplateSubject',
      templateNickName: 'TemplateNickName',
      templateText: 'TemplateText',
      smsType: 'SmsType',
      smsContent: 'SmsContent',
      remark: 'Remark',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      templateName: 'string',
      templateSubject: 'string',
      templateNickName: 'string',
      templateText: 'string',
      smsType: 'number',
      smsContent: 'string',
      remark: 'string',
      fromType: 'number',
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
  body: ModifyTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNo?: number;
  pageSize?: number;
  keyWord?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      keyWord: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  data?: QueryDomainByParamResponseBodyData;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      data: QueryDomainByParamResponseBodyData,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDomainByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDomainByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  endTime?: string;
  keyWord?: string;
  length?: number;
  nextStart?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      keyWord: 'KeyWord',
      length: 'Length',
      nextStart: 'NextStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      endTime: 'string',
      keyWord: 'string',
      length: 'number',
      nextStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  data?: QueryInvalidAddressResponseBodyData;
  nextStart?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      data: 'data',
      nextStart: 'NextStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      data: QueryInvalidAddressResponseBodyData,
      nextStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryInvalidAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryInvalidAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNo?: number;
  pageSize?: number;
  keyWord?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      keyWord: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  data?: QueryReceiverByParamResponseBodyData;
  nextStart?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      nextStart: 'NextStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      data: QueryReceiverByParamResponseBodyData,
      nextStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryReceiverByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryReceiverByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  receiverId?: string;
  pageSize?: number;
  keyWord?: string;
  nextStart?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      receiverId: 'ReceiverId',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
      nextStart: 'NextStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      receiverId: 'string',
      pageSize: 'number',
      keyWord: 'string',
      nextStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailResponseBody extends $tea.Model {
  dataSchema?: string;
  totalCount?: number;
  requestId?: string;
  data?: QueryReceiverDetailResponseBodyData;
  nextStart?: string;
  static names(): { [key: string]: string } {
    return {
      dataSchema: 'DataSchema',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      data: 'data',
      nextStart: 'NextStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSchema: 'string',
      totalCount: 'number',
      requestId: 'string',
      data: QueryReceiverDetailResponseBodyData,
      nextStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryReceiverDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignByParamRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNo?: number;
  pageSize?: number;
  keyWord?: string;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      keyWord: 'string',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignByParamResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  data?: QuerySignByParamResponseBodyData;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      data: 'data',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      data: QuerySignByParamResponseBodyData,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySignByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySignByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsStatisticsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  endTime?: string;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      endTime: 'string',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsStatisticsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  data?: QuerySmsStatisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      data: QuerySmsStatisticsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySmsStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySmsStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNo?: number;
  pageSize?: number;
  keyWord?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      keyWord: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  data?: QueryTagByParamResponseBodyData;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      data: QueryTagByParamResponseBodyData,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTagByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTagByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNo?: number;
  pageSize?: number;
  keyWord?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      keyWord: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  data?: QueryTaskByParamResponseBodyData;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      data: QueryTaskByParamResponseBodyData,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTaskByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTaskByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageNo?: number;
  pageSize?: number;
  keyWord?: string;
  status?: number;
  fromType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
      status: 'Status',
      fromType: 'FromType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      keyWord: 'string',
      status: 'number',
      fromType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  data?: QueryTemplateByParamResponseBodyData;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      data: 'data',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      data: QueryTemplateByParamResponseBodyData,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTemplateByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTemplateByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  receiverId?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      receiverId: 'ReceiverId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      receiverId: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: SaveReceiverDetailResponseBodyData;
  errorCount?: number;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorCount: 'ErrorCount',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SaveReceiverDetailResponseBodyData,
      errorCount: 'number',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveReceiverDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  accountName?: string;
  startTime?: string;
  endTime?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      accountName: 'AccountName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      accountName: 'string',
      startTime: 'string',
      endTime: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  data?: SenderStatisticsByTagNameAndBatchIDResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      data: SenderStatisticsByTagNameAndBatchIDResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SenderStatisticsByTagNameAndBatchIDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SenderStatisticsByTagNameAndBatchIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  accountName?: string;
  toAddress?: string;
  status?: number;
  startTime?: string;
  endTime?: string;
  tagName?: string;
  length?: number;
  nextStart?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      accountName: 'AccountName',
      toAddress: 'ToAddress',
      status: 'Status',
      startTime: 'StartTime',
      endTime: 'EndTime',
      tagName: 'TagName',
      length: 'Length',
      nextStart: 'NextStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      accountName: 'string',
      toAddress: 'string',
      status: 'number',
      startTime: 'string',
      endTime: 'string',
      tagName: 'string',
      length: 'number',
      nextStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamResponseBody extends $tea.Model {
  requestId?: string;
  data?: SenderStatisticsDetailByParamResponseBodyData;
  nextStart?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      nextStart: 'NextStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SenderStatisticsDetailByParamResponseBodyData,
      nextStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SenderStatisticsDetailByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SenderStatisticsDetailByParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTestByTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  accountName?: string;
  userName?: string;
  nickName?: string;
  birthday?: string;
  gender?: string;
  mobile?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      accountName: 'AccountName',
      userName: 'UserName',
      nickName: 'NickName',
      birthday: 'Birthday',
      gender: 'Gender',
      mobile: 'Mobile',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      accountName: 'string',
      userName: 'string',
      nickName: 'string',
      birthday: 'string',
      gender: 'string',
      mobile: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTestByTemplateResponseBody extends $tea.Model {
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

export class SendTestByTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendTestByTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendTestByTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  accountName?: string;
  addressType?: number;
  tagName?: string;
  replyToAddress?: boolean;
  toAddress?: string;
  subject?: string;
  htmlBody?: string;
  textBody?: string;
  fromAlias?: string;
  replyAddress?: string;
  replyAddressAlias?: string;
  clickTrace?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      accountName: 'AccountName',
      addressType: 'AddressType',
      tagName: 'TagName',
      replyToAddress: 'ReplyToAddress',
      toAddress: 'ToAddress',
      subject: 'Subject',
      htmlBody: 'HtmlBody',
      textBody: 'TextBody',
      fromAlias: 'FromAlias',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      clickTrace: 'ClickTrace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      accountName: 'string',
      addressType: 'number',
      tagName: 'string',
      replyToAddress: 'boolean',
      toAddress: 'string',
      subject: 'string',
      htmlBody: 'string',
      textBody: 'string',
      fromAlias: 'string',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      clickTrace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailResponseBody extends $tea.Model {
  requestId?: string;
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SingleSendMailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SingleSendMailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendSmsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  templateCode?: string;
  recNum?: string;
  paramString?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      recNum: 'RecNum',
      paramString: 'ParamString',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      templateCode: 'string',
      recNum: 'string',
      paramString: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendSmsResponseBody extends $tea.Model {
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

export class SingleSendSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SingleSendSmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SingleSendSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainTrackNameRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  domainId?: number;
  cnameTrackRecord?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      domainId: 'DomainId',
      cnameTrackRecord: 'CnameTrackRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      domainId: 'number',
      cnameTrackRecord: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainTrackNameResponseBody extends $tea.Model {
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

export class UpdateDomainTrackNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDomainTrackNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDomainTrackNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpProtectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ipProtection?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ipProtection: 'IpProtection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ipProtection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpProtectionResponseBody extends $tea.Model {
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

export class UpdateIpProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIpProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIpProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMailAddressMsgCallBackUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  mailFrom?: string;
  notifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      mailFrom: 'MailFrom',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      mailFrom: 'string',
      notifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMailAddressMsgCallBackUrlResponseBody extends $tea.Model {
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

export class UpdateMailAddressMsgCallBackUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMailAddressMsgCallBackUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMailAddressMsgCallBackUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountListResponseBodyDataAccountNotificationInfo extends $tea.Model {
  status?: string;
  updateTime?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      region: 'string',
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

export class GetIpfilterListResponseBodyDataIpfilters extends $tea.Model {
  ipAddress?: string;
  createTime?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      createTime: 'CreateTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      createTime: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpfilterListResponseBodyData extends $tea.Model {
  ipfilters?: GetIpfilterListResponseBodyDataIpfilters[];
  static names(): { [key: string]: string } {
    return {
      ipfilters: 'ipfilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipfilters: { 'type': 'array', 'itemType': GetIpfilterListResponseBodyDataIpfilters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionListResponseBodyDataRegionList extends $tea.Model {
  regionDesc?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      regionDesc: 'RegionDesc',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionDesc: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionListResponseBodyData extends $tea.Model {
  regionList?: GetRegionListResponseBodyDataRegionList[];
  static names(): { [key: string]: string } {
    return {
      regionList: 'regionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionList: { 'type': 'array', 'itemType': GetRegionListResponseBodyDataRegionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSenderAddressListResponseBodyDataSenderAddressNotificationInfo extends $tea.Model {
  status?: string;
  updateTime?: string;
  senderAddress?: string;
  region?: string;
  senderAddressId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      senderAddress: 'SenderAddress',
      region: 'Region',
      senderAddressId: 'SenderAddressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      senderAddress: 'string',
      region: 'string',
      senderAddressId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSenderAddressListResponseBodyData extends $tea.Model {
  senderAddressNotificationInfo?: GetSenderAddressListResponseBodyDataSenderAddressNotificationInfo[];
  static names(): { [key: string]: string } {
    return {
      senderAddressNotificationInfo: 'senderAddressNotificationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      senderAddressNotificationInfo: { 'type': 'array', 'itemType': GetSenderAddressListResponseBodyDataSenderAddressNotificationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListResponseBodyDataStat extends $tea.Model {
  rcptClickRate?: string;
  rcptUniqueOpenCount?: string;
  rcptClickCount?: string;
  rcptUniqueClickCount?: string;
  createTime?: string;
  rcptUniqueOpenRate?: string;
  rcptUniqueClickRate?: string;
  totalNumber?: string;
  rcptOpenRate?: string;
  rcptOpenCount?: string;
  static names(): { [key: string]: string } {
    return {
      rcptClickRate: 'RcptClickRate',
      rcptUniqueOpenCount: 'RcptUniqueOpenCount',
      rcptClickCount: 'RcptClickCount',
      rcptUniqueClickCount: 'RcptUniqueClickCount',
      createTime: 'CreateTime',
      rcptUniqueOpenRate: 'RcptUniqueOpenRate',
      rcptUniqueClickRate: 'RcptUniqueClickRate',
      totalNumber: 'TotalNumber',
      rcptOpenRate: 'RcptOpenRate',
      rcptOpenCount: 'RcptOpenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rcptClickRate: 'string',
      rcptUniqueOpenCount: 'string',
      rcptClickCount: 'string',
      rcptUniqueClickCount: 'string',
      createTime: 'string',
      rcptUniqueOpenRate: 'string',
      rcptUniqueClickRate: 'string',
      totalNumber: 'string',
      rcptOpenRate: 'string',
      rcptOpenCount: 'string',
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

export class GetTrackListByMailFromAndTagNameResponseBodyTrackListStat extends $tea.Model {
  rcptClickRate?: string;
  rcptUniqueOpenCount?: string;
  rcptClickCount?: string;
  rcptUniqueClickCount?: string;
  createTime?: string;
  rcptUniqueOpenRate?: string;
  rcptUniqueClickRate?: string;
  totalNumber?: string;
  rcptOpenRate?: string;
  rcptOpenCount?: string;
  static names(): { [key: string]: string } {
    return {
      rcptClickRate: 'RcptClickRate',
      rcptUniqueOpenCount: 'RcptUniqueOpenCount',
      rcptClickCount: 'RcptClickCount',
      rcptUniqueClickCount: 'RcptUniqueClickCount',
      createTime: 'CreateTime',
      rcptUniqueOpenRate: 'RcptUniqueOpenRate',
      rcptUniqueClickRate: 'RcptUniqueClickRate',
      totalNumber: 'TotalNumber',
      rcptOpenRate: 'RcptOpenRate',
      rcptOpenCount: 'RcptOpenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rcptClickRate: 'string',
      rcptUniqueOpenCount: 'string',
      rcptClickCount: 'string',
      rcptUniqueClickCount: 'string',
      createTime: 'string',
      rcptUniqueOpenRate: 'string',
      rcptUniqueClickRate: 'string',
      totalNumber: 'string',
      rcptOpenRate: 'string',
      rcptOpenCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListByMailFromAndTagNameResponseBodyTrackList extends $tea.Model {
  stat?: GetTrackListByMailFromAndTagNameResponseBodyTrackListStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'Stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': GetTrackListByMailFromAndTagNameResponseBodyTrackListStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponseBodyDataDomain extends $tea.Model {
  domainRecord?: string;
  spfAuthStatus?: string;
  mxAuthStatus?: string;
  createTime?: string;
  cnameAuthStatus?: string;
  confirmStatus?: string;
  icpStatus?: string;
  utcCreateTime?: number;
  domainStatus?: string;
  domainName?: string;
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domainRecord: 'DomainRecord',
      spfAuthStatus: 'SpfAuthStatus',
      mxAuthStatus: 'MxAuthStatus',
      createTime: 'CreateTime',
      cnameAuthStatus: 'CnameAuthStatus',
      confirmStatus: 'ConfirmStatus',
      icpStatus: 'IcpStatus',
      utcCreateTime: 'UtcCreateTime',
      domainStatus: 'DomainStatus',
      domainName: 'DomainName',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRecord: 'string',
      spfAuthStatus: 'string',
      mxAuthStatus: 'string',
      createTime: 'string',
      cnameAuthStatus: 'string',
      confirmStatus: 'string',
      icpStatus: 'string',
      utcCreateTime: 'number',
      domainStatus: 'string',
      domainName: 'string',
      domainId: 'string',
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

export class QueryReceiverByParamResponseBodyDataReceiver extends $tea.Model {
  receiversAlias?: string;
  receiversName?: string;
  createTime?: string;
  receiverId?: string;
  utcCreateTime?: number;
  receiversStatus?: string;
  count?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      receiversAlias: 'ReceiversAlias',
      receiversName: 'ReceiversName',
      createTime: 'CreateTime',
      receiverId: 'ReceiverId',
      utcCreateTime: 'UtcCreateTime',
      receiversStatus: 'ReceiversStatus',
      count: 'Count',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiversAlias: 'string',
      receiversName: 'string',
      createTime: 'string',
      receiverId: 'string',
      utcCreateTime: 'number',
      receiversStatus: 'string',
      count: 'string',
      desc: 'string',
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
  data?: string;
  email?: string;
  createTime?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      email: 'Email',
      createTime: 'CreateTime',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      email: 'string',
      createTime: 'string',
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

export class QuerySignByParamResponseBodyDataSign extends $tea.Model {
  remark?: string;
  auditState?: string;
  gmtCreate?: string;
  signId?: number;
  signName?: string;
  orderId?: string;
  rejectInfo?: string;
  signType?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      auditState: 'AuditState',
      gmtCreate: 'GmtCreate',
      signId: 'SignId',
      signName: 'SignName',
      orderId: 'OrderId',
      rejectInfo: 'RejectInfo',
      signType: 'SignType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      auditState: 'string',
      gmtCreate: 'string',
      signId: 'number',
      signName: 'string',
      orderId: 'string',
      rejectInfo: 'string',
      signType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignByParamResponseBodyData extends $tea.Model {
  sign?: QuerySignByParamResponseBodyDataSign[];
  static names(): { [key: string]: string } {
    return {
      sign: 'sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sign: { 'type': 'array', 'itemType': QuerySignByParamResponseBodyDataSign },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsStatisticsResponseBodyDataStat extends $tea.Model {
  createTime?: string;
  faildCount?: string;
  successCount?: string;
  requestCount?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      faildCount: 'faildCount',
      successCount: 'successCount',
      requestCount: 'requestCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      faildCount: 'string',
      successCount: 'string',
      requestCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsStatisticsResponseBodyData extends $tea.Model {
  stat?: QuerySmsStatisticsResponseBodyDataStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': QuerySmsStatisticsResponseBodyDataStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagByParamResponseBodyDataTag extends $tea.Model {
  tagName?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagId: 'string',
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
  receiversName?: string;
  tagName?: string;
  taskStatus?: string;
  createTime?: string;
  requestCount?: string;
  addressType?: string;
  utcCreateTime?: number;
  templateName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      receiversName: 'ReceiversName',
      tagName: 'TagName',
      taskStatus: 'TaskStatus',
      createTime: 'CreateTime',
      requestCount: 'RequestCount',
      addressType: 'AddressType',
      utcCreateTime: 'UtcCreateTime',
      templateName: 'TemplateName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiversName: 'string',
      tagName: 'string',
      taskStatus: 'string',
      createTime: 'string',
      requestCount: 'string',
      addressType: 'string',
      utcCreateTime: 'number',
      templateName: 'string',
      taskId: 'string',
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
  templateComment?: string;
  utcCreatetime?: number;
  smsrejectinfo?: number;
  smsTemplateCode?: number;
  createTime?: string;
  templateStatus?: string;
  templateType?: number;
  templateName?: string;
  smsStatus?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateComment: 'TemplateComment',
      utcCreatetime: 'UtcCreatetime',
      smsrejectinfo: 'Smsrejectinfo',
      smsTemplateCode: 'SmsTemplateCode',
      createTime: 'CreateTime',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
      smsStatus: 'SmsStatus',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateComment: 'string',
      utcCreatetime: 'number',
      smsrejectinfo: 'number',
      smsTemplateCode: 'number',
      createTime: 'string',
      templateStatus: 'string',
      templateType: 'number',
      templateName: 'string',
      smsStatus: 'number',
      templateId: 'string',
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
  unavailablePercent?: string;
  createTime?: string;
  succeededPercent?: string;
  faildCount?: string;
  unavailableCount?: string;
  successCount?: string;
  requestCount?: string;
  static names(): { [key: string]: string } {
    return {
      unavailablePercent: 'unavailablePercent',
      createTime: 'CreateTime',
      succeededPercent: 'succeededPercent',
      faildCount: 'faildCount',
      unavailableCount: 'unavailableCount',
      successCount: 'successCount',
      requestCount: 'requestCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unavailablePercent: 'string',
      createTime: 'string',
      succeededPercent: 'string',
      faildCount: 'string',
      unavailableCount: 'string',
      successCount: 'string',
      requestCount: 'string',
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
  status?: number;
  lastUpdateTime?: string;
  message?: string;
  toAddress?: string;
  utcLastUpdateTime?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastUpdateTime: 'LastUpdateTime',
      message: 'Message',
      toAddress: 'ToAddress',
      utcLastUpdateTime: 'UtcLastUpdateTime',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      lastUpdateTime: 'string',
      message: 'string',
      toAddress: 'string',
      utcLastUpdateTime: 'string',
      accountName: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddIpfilterResponse>(await this.doRPCRequest("AddIpfilter", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new AddIpfilterResponse({}));
  }

  async addIpfilter(request: AddIpfilterRequest): Promise<AddIpfilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpfilterWithOptions(request, runtime);
  }

  async approveMailTemplateWithOptions(request: ApproveMailTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ApproveMailTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApproveMailTemplateResponse>(await this.doRPCRequest("ApproveMailTemplate", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ApproveMailTemplateResponse({}));
  }

  async approveMailTemplate(request: ApproveMailTemplateRequest): Promise<ApproveMailTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveMailTemplateWithOptions(request, runtime);
  }

  async approveReplyMailAddressWithOptions(request: ApproveReplyMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<ApproveReplyMailAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApproveReplyMailAddressResponse>(await this.doRPCRequest("ApproveReplyMailAddress", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ApproveReplyMailAddressResponse({}));
  }

  async approveReplyMailAddress(request: ApproveReplyMailAddressRequest): Promise<ApproveReplyMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveReplyMailAddressWithOptions(request, runtime);
  }

  async approveSmsTemplateWithOptions(request: ApproveSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ApproveSmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApproveSmsTemplateResponse>(await this.doRPCRequest("ApproveSmsTemplate", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ApproveSmsTemplateResponse({}));
  }

  async approveSmsTemplate(request: ApproveSmsTemplateRequest): Promise<ApproveSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveSmsTemplateWithOptions(request, runtime);
  }

  async approveTemplateWithOptions(request: ApproveTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ApproveTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApproveTemplateResponse>(await this.doRPCRequest("ApproveTemplate", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ApproveTemplateResponse({}));
  }

  async approveTemplate(request: ApproveTemplateRequest): Promise<ApproveTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveTemplateWithOptions(request, runtime);
  }

  async batchSendMailWithOptions(request: BatchSendMailRequest, runtime: $Util.RuntimeOptions): Promise<BatchSendMailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSendMailResponse>(await this.doRPCRequest("BatchSendMail", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSendMailResponse({}));
  }

  async batchSendMail(request: BatchSendMailRequest): Promise<BatchSendMailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSendMailWithOptions(request, runtime);
  }

  async checkDomainWithOptions(request: CheckDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDomainResponse>(await this.doRPCRequest("CheckDomain", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDomainResponse({}));
  }

  async checkDomain(request: CheckDomainRequest): Promise<CheckDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  async checkInvalidAddressWithOptions(request: CheckInvalidAddressRequest, runtime: $Util.RuntimeOptions): Promise<CheckInvalidAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckInvalidAddressResponse>(await this.doRPCRequest("CheckInvalidAddress", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckInvalidAddressResponse({}));
  }

  async checkInvalidAddress(request: CheckInvalidAddressRequest): Promise<CheckInvalidAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkInvalidAddressWithOptions(request, runtime);
  }

  async checkReplyToMailAddressWithOptions(request: CheckReplyToMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<CheckReplyToMailAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckReplyToMailAddressResponse>(await this.doRPCRequest("CheckReplyToMailAddress", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckReplyToMailAddressResponse({}));
  }

  async checkReplyToMailAddress(request: CheckReplyToMailAddressRequest): Promise<CheckReplyToMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkReplyToMailAddressWithOptions(request, runtime);
  }

  async createDayuWithOptions(request: CreateDayuRequest, runtime: $Util.RuntimeOptions): Promise<CreateDayuResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDayuResponse>(await this.doRPCRequest("CreateDayu", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDayuResponse({}));
  }

  async createDayu(request: CreateDayuRequest): Promise<CreateDayuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDayuWithOptions(request, runtime);
  }

  async createDomainWithOptions(request: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDomainResponse>(await this.doRPCRequest("CreateDomain", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDomainResponse({}));
  }

  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  async createMailAddressWithOptions(request: CreateMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateMailAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMailAddressResponse>(await this.doRPCRequest("CreateMailAddress", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMailAddressResponse({}));
  }

  async createMailAddress(request: CreateMailAddressRequest): Promise<CreateMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMailAddressWithOptions(request, runtime);
  }

  async createReceiverWithOptions(request: CreateReceiverRequest, runtime: $Util.RuntimeOptions): Promise<CreateReceiverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateReceiverResponse>(await this.doRPCRequest("CreateReceiver", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateReceiverResponse({}));
  }

  async createReceiver(request: CreateReceiverRequest): Promise<CreateReceiverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReceiverWithOptions(request, runtime);
  }

  async createSignWithOptions(request: CreateSignRequest, runtime: $Util.RuntimeOptions): Promise<CreateSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSignResponse>(await this.doRPCRequest("CreateSign", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSignResponse({}));
  }

  async createSign(request: CreateSignRequest): Promise<CreateSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSignWithOptions(request, runtime);
  }

  async createTagWithOptions(request: CreateTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTagResponse>(await this.doRPCRequest("CreateTag", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTagResponse({}));
  }

  async createTag(request: CreateTagRequest): Promise<CreateTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTemplateResponse>(await this.doRPCRequest("CreateTemplate", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainResponse>(await this.doRPCRequest("DeleteDomain", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deleteInvalidAddressWithOptions(request: DeleteInvalidAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInvalidAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInvalidAddressResponse>(await this.doRPCRequest("DeleteInvalidAddress", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInvalidAddressResponse({}));
  }

  async deleteInvalidAddress(request: DeleteInvalidAddressRequest): Promise<DeleteInvalidAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInvalidAddressWithOptions(request, runtime);
  }

  async deleteIpfilterByEdmIdWithOptions(request: DeleteIpfilterByEdmIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpfilterByEdmIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpfilterByEdmIdResponse>(await this.doRPCRequest("DeleteIpfilterByEdmId", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpfilterByEdmIdResponse({}));
  }

  async deleteIpfilterByEdmId(request: DeleteIpfilterByEdmIdRequest): Promise<DeleteIpfilterByEdmIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpfilterByEdmIdWithOptions(request, runtime);
  }

  async deleteMailAddressWithOptions(request: DeleteMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMailAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMailAddressResponse>(await this.doRPCRequest("DeleteMailAddress", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMailAddressResponse({}));
  }

  async deleteMailAddress(request: DeleteMailAddressRequest): Promise<DeleteMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMailAddressWithOptions(request, runtime);
  }

  async deleteReceiverWithOptions(request: DeleteReceiverRequest, runtime: $Util.RuntimeOptions): Promise<DeleteReceiverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteReceiverResponse>(await this.doRPCRequest("DeleteReceiver", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteReceiverResponse({}));
  }

  async deleteReceiver(request: DeleteReceiverRequest): Promise<DeleteReceiverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReceiverWithOptions(request, runtime);
  }

  async deleteReceiverDetailWithOptions(request: DeleteReceiverDetailRequest, runtime: $Util.RuntimeOptions): Promise<DeleteReceiverDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteReceiverDetailResponse>(await this.doRPCRequest("DeleteReceiverDetail", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteReceiverDetailResponse({}));
  }

  async deleteReceiverDetail(request: DeleteReceiverDetailRequest): Promise<DeleteReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReceiverDetailWithOptions(request, runtime);
  }

  async deleteSignWithOptions(request: DeleteSignRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSignResponse>(await this.doRPCRequest("DeleteSign", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSignResponse({}));
  }

  async deleteSign(request: DeleteSignRequest): Promise<DeleteSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSignWithOptions(request, runtime);
  }

  async deleteTagWithOptions(request: DeleteTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTagResponse>(await this.doRPCRequest("DeleteTag", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTagResponse({}));
  }

  async deleteTag(request: DeleteTagRequest): Promise<DeleteTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTemplateResponse>(await this.doRPCRequest("DeleteTemplate", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async descAccountSummaryWithOptions(request: DescAccountSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescAccountSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescAccountSummaryResponse>(await this.doRPCRequest("DescAccountSummary", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescAccountSummaryResponse({}));
  }

  async descAccountSummary(request: DescAccountSummaryRequest): Promise<DescAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descAccountSummaryWithOptions(request, runtime);
  }

  async descAccountSummary2WithOptions(request: DescAccountSummary2Request, runtime: $Util.RuntimeOptions): Promise<DescAccountSummary2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescAccountSummary2Response>(await this.doRPCRequest("DescAccountSummary2", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescAccountSummary2Response({}));
  }

  async descAccountSummary2(request: DescAccountSummary2Request): Promise<DescAccountSummary2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descAccountSummary2WithOptions(request, runtime);
  }

  async descDomainWithOptions(request: DescDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescDomainResponse>(await this.doRPCRequest("DescDomain", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescDomainResponse({}));
  }

  async descDomain(request: DescDomainRequest): Promise<DescDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descDomainWithOptions(request, runtime);
  }

  async descTemplateWithOptions(request: DescTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescTemplateResponse>(await this.doRPCRequest("DescTemplate", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescTemplateResponse({}));
  }

  async descTemplate(request: DescTemplateRequest): Promise<DescTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descTemplateWithOptions(request, runtime);
  }

  async enableAccountWithOptions(request: EnableAccountRequest, runtime: $Util.RuntimeOptions): Promise<EnableAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableAccountResponse>(await this.doRPCRequest("EnableAccount", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new EnableAccountResponse({}));
  }

  async enableAccount(request: EnableAccountRequest): Promise<EnableAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAccountWithOptions(request, runtime);
  }

  async getAccountListWithOptions(request: GetAccountListRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAccountListResponse>(await this.doRPCRequest("GetAccountList", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccountListResponse({}));
  }

  async getAccountList(request: GetAccountListRequest): Promise<GetAccountListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountListWithOptions(request, runtime);
  }

  async getIpfilterListWithOptions(request: GetIpfilterListRequest, runtime: $Util.RuntimeOptions): Promise<GetIpfilterListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetIpfilterListResponse>(await this.doRPCRequest("GetIpfilterList", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetIpfilterListResponse({}));
  }

  async getIpfilterList(request: GetIpfilterListRequest): Promise<GetIpfilterListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpfilterListWithOptions(request, runtime);
  }

  async getIpProtectionWithOptions(request: GetIpProtectionRequest, runtime: $Util.RuntimeOptions): Promise<GetIpProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetIpProtectionResponse>(await this.doRPCRequest("GetIpProtection", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetIpProtectionResponse({}));
  }

  async getIpProtection(request: GetIpProtectionRequest): Promise<GetIpProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpProtectionWithOptions(request, runtime);
  }

  async getMailAddressMsgCallBackUrlWithOptions(request: GetMailAddressMsgCallBackUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetMailAddressMsgCallBackUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMailAddressMsgCallBackUrlResponse>(await this.doRPCRequest("GetMailAddressMsgCallBackUrl", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetMailAddressMsgCallBackUrlResponse({}));
  }

  async getMailAddressMsgCallBackUrl(request: GetMailAddressMsgCallBackUrlRequest): Promise<GetMailAddressMsgCallBackUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMailAddressMsgCallBackUrlWithOptions(request, runtime);
  }

  async getRegionListWithOptions(request: GetRegionListRequest, runtime: $Util.RuntimeOptions): Promise<GetRegionListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRegionListResponse>(await this.doRPCRequest("GetRegionList", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetRegionListResponse({}));
  }

  async getRegionList(request: GetRegionListRequest): Promise<GetRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegionListWithOptions(request, runtime);
  }

  async getSenderAddressListWithOptions(request: GetSenderAddressListRequest, runtime: $Util.RuntimeOptions): Promise<GetSenderAddressListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSenderAddressListResponse>(await this.doRPCRequest("GetSenderAddressList", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetSenderAddressListResponse({}));
  }

  async getSenderAddressList(request: GetSenderAddressListRequest): Promise<GetSenderAddressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSenderAddressListWithOptions(request, runtime);
  }

  async getTrackListWithOptions(request: GetTrackListRequest, runtime: $Util.RuntimeOptions): Promise<GetTrackListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTrackListResponse>(await this.doRPCRequest("GetTrackList", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetTrackListResponse({}));
  }

  async getTrackList(request: GetTrackListRequest): Promise<GetTrackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrackListWithOptions(request, runtime);
  }

  async getTrackListByMailFromAndTagNameWithOptions(request: GetTrackListByMailFromAndTagNameRequest, runtime: $Util.RuntimeOptions): Promise<GetTrackListByMailFromAndTagNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTrackListByMailFromAndTagNameResponse>(await this.doRPCRequest("GetTrackListByMailFromAndTagName", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetTrackListByMailFromAndTagNameResponse({}));
  }

  async getTrackListByMailFromAndTagName(request: GetTrackListByMailFromAndTagNameRequest): Promise<GetTrackListByMailFromAndTagNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrackListByMailFromAndTagNameWithOptions(request, runtime);
  }

  async migrateMarketWithOptions(request: MigrateMarketRequest, runtime: $Util.RuntimeOptions): Promise<MigrateMarketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MigrateMarketResponse>(await this.doRPCRequest("MigrateMarket", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new MigrateMarketResponse({}));
  }

  async migrateMarket(request: MigrateMarketRequest): Promise<MigrateMarketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateMarketWithOptions(request, runtime);
  }

  async modifyAccountNotificationWithOptions(request: ModifyAccountNotificationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountNotificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountNotificationResponse>(await this.doRPCRequest("ModifyAccountNotification", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountNotificationResponse({}));
  }

  async modifyAccountNotification(request: ModifyAccountNotificationRequest): Promise<ModifyAccountNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountNotificationWithOptions(request, runtime);
  }

  async modifyMailAddressWithOptions(request: ModifyMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMailAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMailAddressResponse>(await this.doRPCRequest("ModifyMailAddress", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMailAddressResponse({}));
  }

  async modifyMailAddress(request: ModifyMailAddressRequest): Promise<ModifyMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMailAddressWithOptions(request, runtime);
  }

  async modifyPWByDomainWithOptions(request: ModifyPWByDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPWByDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPWByDomainResponse>(await this.doRPCRequest("ModifyPWByDomain", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPWByDomainResponse({}));
  }

  async modifyPWByDomain(request: ModifyPWByDomainRequest): Promise<ModifyPWByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPWByDomainWithOptions(request, runtime);
  }

  async modifySenderAddressNotificationWithOptions(request: ModifySenderAddressNotificationRequest, runtime: $Util.RuntimeOptions): Promise<ModifySenderAddressNotificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySenderAddressNotificationResponse>(await this.doRPCRequest("ModifySenderAddressNotification", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySenderAddressNotificationResponse({}));
  }

  async modifySenderAddressNotification(request: ModifySenderAddressNotificationRequest): Promise<ModifySenderAddressNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySenderAddressNotificationWithOptions(request, runtime);
  }

  async modifyTagWithOptions(request: ModifyTagRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTagResponse>(await this.doRPCRequest("ModifyTag", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTagResponse({}));
  }

  async modifyTag(request: ModifyTagRequest): Promise<ModifyTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTagWithOptions(request, runtime);
  }

  async modifyTemplateWithOptions(request: ModifyTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTemplateResponse>(await this.doRPCRequest("ModifyTemplate", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTemplateResponse({}));
  }

  async modifyTemplate(request: ModifyTemplateRequest): Promise<ModifyTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateWithOptions(request, runtime);
  }

  async queryDomainByParamWithOptions(request: QueryDomainByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryDomainByParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDomainByParamResponse>(await this.doRPCRequest("QueryDomainByParam", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDomainByParamResponse({}));
  }

  async queryDomainByParam(request: QueryDomainByParamRequest): Promise<QueryDomainByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByParamWithOptions(request, runtime);
  }

  async queryInvalidAddressWithOptions(request: QueryInvalidAddressRequest, runtime: $Util.RuntimeOptions): Promise<QueryInvalidAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryInvalidAddressResponse>(await this.doRPCRequest("QueryInvalidAddress", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QueryInvalidAddressResponse({}));
  }

  async queryInvalidAddress(request: QueryInvalidAddressRequest): Promise<QueryInvalidAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInvalidAddressWithOptions(request, runtime);
  }

  async queryReceiverByParamWithOptions(request: QueryReceiverByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryReceiverByParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryReceiverByParamResponse>(await this.doRPCRequest("QueryReceiverByParam", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QueryReceiverByParamResponse({}));
  }

  async queryReceiverByParam(request: QueryReceiverByParamRequest): Promise<QueryReceiverByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReceiverByParamWithOptions(request, runtime);
  }

  async queryReceiverDetailWithOptions(request: QueryReceiverDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryReceiverDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryReceiverDetailResponse>(await this.doRPCRequest("QueryReceiverDetail", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QueryReceiverDetailResponse({}));
  }

  async queryReceiverDetail(request: QueryReceiverDetailRequest): Promise<QueryReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReceiverDetailWithOptions(request, runtime);
  }

  async querySignByParamWithOptions(request: QuerySignByParamRequest, runtime: $Util.RuntimeOptions): Promise<QuerySignByParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySignByParamResponse>(await this.doRPCRequest("QuerySignByParam", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySignByParamResponse({}));
  }

  async querySignByParam(request: QuerySignByParamRequest): Promise<QuerySignByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySignByParamWithOptions(request, runtime);
  }

  async querySmsStatisticsWithOptions(request: QuerySmsStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmsStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySmsStatisticsResponse>(await this.doRPCRequest("QuerySmsStatistics", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySmsStatisticsResponse({}));
  }

  async querySmsStatistics(request: QuerySmsStatisticsRequest): Promise<QuerySmsStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmsStatisticsWithOptions(request, runtime);
  }

  async queryTagByParamWithOptions(request: QueryTagByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagByParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTagByParamResponse>(await this.doRPCRequest("QueryTagByParam", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTagByParamResponse({}));
  }

  async queryTagByParam(request: QueryTagByParamRequest): Promise<QueryTagByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagByParamWithOptions(request, runtime);
  }

  async queryTaskByParamWithOptions(request: QueryTaskByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskByParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTaskByParamResponse>(await this.doRPCRequest("QueryTaskByParam", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTaskByParamResponse({}));
  }

  async queryTaskByParam(request: QueryTaskByParamRequest): Promise<QueryTaskByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskByParamWithOptions(request, runtime);
  }

  async queryTemplateByParamWithOptions(request: QueryTemplateByParamRequest, runtime: $Util.RuntimeOptions): Promise<QueryTemplateByParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTemplateByParamResponse>(await this.doRPCRequest("QueryTemplateByParam", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTemplateByParamResponse({}));
  }

  async queryTemplateByParam(request: QueryTemplateByParamRequest): Promise<QueryTemplateByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTemplateByParamWithOptions(request, runtime);
  }

  async saveReceiverDetailWithOptions(request: SaveReceiverDetailRequest, runtime: $Util.RuntimeOptions): Promise<SaveReceiverDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveReceiverDetailResponse>(await this.doRPCRequest("SaveReceiverDetail", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new SaveReceiverDetailResponse({}));
  }

  async saveReceiverDetail(request: SaveReceiverDetailRequest): Promise<SaveReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveReceiverDetailWithOptions(request, runtime);
  }

  async senderStatisticsByTagNameAndBatchIDWithOptions(request: SenderStatisticsByTagNameAndBatchIDRequest, runtime: $Util.RuntimeOptions): Promise<SenderStatisticsByTagNameAndBatchIDResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SenderStatisticsByTagNameAndBatchIDResponse>(await this.doRPCRequest("SenderStatisticsByTagNameAndBatchID", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new SenderStatisticsByTagNameAndBatchIDResponse({}));
  }

  async senderStatisticsByTagNameAndBatchID(request: SenderStatisticsByTagNameAndBatchIDRequest): Promise<SenderStatisticsByTagNameAndBatchIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.senderStatisticsByTagNameAndBatchIDWithOptions(request, runtime);
  }

  async senderStatisticsDetailByParamWithOptions(request: SenderStatisticsDetailByParamRequest, runtime: $Util.RuntimeOptions): Promise<SenderStatisticsDetailByParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SenderStatisticsDetailByParamResponse>(await this.doRPCRequest("SenderStatisticsDetailByParam", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new SenderStatisticsDetailByParamResponse({}));
  }

  async senderStatisticsDetailByParam(request: SenderStatisticsDetailByParamRequest): Promise<SenderStatisticsDetailByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.senderStatisticsDetailByParamWithOptions(request, runtime);
  }

  async sendTestByTemplateWithOptions(request: SendTestByTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SendTestByTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendTestByTemplateResponse>(await this.doRPCRequest("SendTestByTemplate", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new SendTestByTemplateResponse({}));
  }

  async sendTestByTemplate(request: SendTestByTemplateRequest): Promise<SendTestByTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendTestByTemplateWithOptions(request, runtime);
  }

  async singleSendMailWithOptions(request: SingleSendMailRequest, runtime: $Util.RuntimeOptions): Promise<SingleSendMailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SingleSendMailResponse>(await this.doRPCRequest("SingleSendMail", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new SingleSendMailResponse({}));
  }

  async singleSendMail(request: SingleSendMailRequest): Promise<SingleSendMailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleSendMailWithOptions(request, runtime);
  }

  async singleSendSmsWithOptions(request: SingleSendSmsRequest, runtime: $Util.RuntimeOptions): Promise<SingleSendSmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SingleSendSmsResponse>(await this.doRPCRequest("SingleSendSms", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new SingleSendSmsResponse({}));
  }

  async singleSendSms(request: SingleSendSmsRequest): Promise<SingleSendSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleSendSmsWithOptions(request, runtime);
  }

  async updateDomainTrackNameWithOptions(request: UpdateDomainTrackNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainTrackNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDomainTrackNameResponse>(await this.doRPCRequest("UpdateDomainTrackName", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDomainTrackNameResponse({}));
  }

  async updateDomainTrackName(request: UpdateDomainTrackNameRequest): Promise<UpdateDomainTrackNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainTrackNameWithOptions(request, runtime);
  }

  async updateIpProtectionWithOptions(request: UpdateIpProtectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIpProtectionResponse>(await this.doRPCRequest("UpdateIpProtection", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIpProtectionResponse({}));
  }

  async updateIpProtection(request: UpdateIpProtectionRequest): Promise<UpdateIpProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpProtectionWithOptions(request, runtime);
  }

  async updateMailAddressMsgCallBackUrlWithOptions(request: UpdateMailAddressMsgCallBackUrlRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMailAddressMsgCallBackUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMailAddressMsgCallBackUrlResponse>(await this.doRPCRequest("UpdateMailAddressMsgCallBackUrl", "2015-11-23", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMailAddressMsgCallBackUrlResponse({}));
  }

  async updateMailAddressMsgCallBackUrl(request: UpdateMailAddressMsgCallBackUrlRequest): Promise<UpdateMailAddressMsgCallBackUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMailAddressMsgCallBackUrlWithOptions(request, runtime);
  }

}
