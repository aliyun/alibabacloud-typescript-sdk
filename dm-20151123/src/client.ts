// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddIpfilterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 10795
   */
  ipFilterId?: string;
  /**
   * @example
   * 0E9282E8-DC08-5445-8FB0-B9F0CA28B249
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddIpfilterResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ApproveReplyMailAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class ApproveReplyMailAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveReplyMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveReplyMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @example
   * 0
   */
  clickTrace?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test2
   */
  receiversName?: string;
  replyAddress?: string;
  replyAddressAlias?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * test3
   */
  tagName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1
   */
  templateName?: string;
  unSubscribeFilterLevel?: string;
  unSubscribeLinkType?: string;
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
      unSubscribeFilterLevel: 'UnSubscribeFilterLevel',
      unSubscribeLinkType: 'UnSubscribeLinkType',
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
      unSubscribeFilterLevel: 'string',
      unSubscribeLinkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  envId?: string;
  /**
   * @example
   * 12D086F6-8F31-4658-84C1-006DED011A85
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSendMailResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 153345
   */
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
  /**
   * @remarks
   * The status of the domain name. Indicates whether the domain name is verified and available.
   * 
   * *   0: indicates that the domain name is verified and available.
   * *   1: indicates that the domain name fails to be verified and is unavailable.
   * *   2: indicates that the domain name is available, but not filed or configured with a CNAME record.
   * *   3: indicates that the domain name is available but not filed.
   * *   4: indicates that the domain name is available but not configured with a CNAME record.
   * 
   * @example
   * 1
   */
  domainStatus?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0B82E83-A1D9-4FE6-97D2-F4B231F80B02
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainStatus: 'DomainStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainStatus: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CheckReplyToMailAddressRequest extends $tea.Model {
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 126545
   */
  mailAddressId?: number;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      mailAddressId: 'MailAddressId',
      ownerId: 'OwnerId',
      region: 'Region',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      mailAddressId: 'number',
      ownerId: 'number',
      region: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReplyToMailAddressResponseBody extends $tea.Model {
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class CheckReplyToMailAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckReplyToMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckReplyToMailAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
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
  /**
   * @example
   * 158910
   */
  domainId?: string;
  /**
   * @example
   * B49AD828-25D1-488C-90B7-8853C1944486
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   */
  accountName?: string;
  ownerId?: number;
  /**
   * @example
   * reply@aliyun.com
   */
  replyAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * batch
   */
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
  /**
   * @example
   * xxx
   */
  mailAddressId?: string;
  /**
   * @example
   * 95A7D497-F8DD-4834-B81E-C1783236E55F
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vme
   */
  receiversAlias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xme
   */
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
  /**
   * @example
   * xxxx
   */
  receiverId?: string;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateReceiverResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vme
   */
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
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * xxxx
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateUserSuppressionRequest extends $tea.Model {
  address?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserSuppressionResponseBody extends $tea.Model {
  requestId?: string;
  suppressionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suppressionId: 'SuppressionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suppressionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserSuppressionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserSuppressionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserSuppressionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 326***
   */
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
  /**
   * @example
   * E3DFF97B-00CF-5333-8125-3D6819471984
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

export class DeleteDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteInvalidAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * test1***@example.net
   */
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
  /**
   * @example
   * 2D086F6-xxxx-xxxx-xxxx-006DED011A85
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

export class DeleteInvalidAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInvalidAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInvalidAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpfilterByEdmIdRequest extends $tea.Model {
  fromType?: number;
  /**
   * @example
   * 10120
   */
  id?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      id: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpfilterByEdmIdResponseBody extends $tea.Model {
  /**
   * @example
   * E3DFF97B-00CF-5333-8125-3D6819471984
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

export class DeleteIpfilterByEdmIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpfilterByEdmIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpfilterByEdmIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMailAddressRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23457
   */
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
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class DeleteMailAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the recipient list.
   * 
   * This parameter is required.
   * 
   * @example
   * 1453
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class DeleteReceiverResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteReceiverResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123534
   */
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
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class DeleteReceiverDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class DeleteTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTagResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 2000
   */
  dailyQuota?: number;
  dailyRemainFreeQuota?: number;
  /**
   * @example
   * 0
   */
  dayuStatus?: number;
  /**
   * @example
   * 1
   */
  domains?: number;
  /**
   * @example
   * 0
   */
  enableTimes?: number;
  /**
   * @example
   * 0
   */
  mailAddresses?: number;
  /**
   * @example
   * 10
   */
  maxQuotaLevel?: number;
  /**
   * @example
   * 60000
   */
  monthQuota?: number;
  /**
   * @example
   * 2
   */
  quotaLevel?: number;
  /**
   * @example
   * 0
   */
  receivers?: number;
  remainFreeQuota?: number;
  /**
   * @example
   * 82B295BB-7E69-491F-9896-ECEAFF09E1A4
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  smsRecord?: number;
  /**
   * @example
   * 0
   */
  smsSign?: number;
  /**
   * @example
   * 0
   */
  smsTemplates?: number;
  /**
   * @example
   * 0
   */
  tags?: number;
  /**
   * @example
   * 1
   */
  templates?: number;
  /**
   * @example
   * 0
   */
  userStatus?: number;
  static names(): { [key: string]: string } {
    return {
      dailyQuota: 'DailyQuota',
      dailyRemainFreeQuota: 'DailyRemainFreeQuota',
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
      dailyRemainFreeQuota: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescAccountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13464
   */
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
  /**
   * @example
   * 1
   */
  cnameAuthStatus?: string;
  /**
   * @example
   * 0
   */
  cnameConfirmStatus?: string;
  /**
   * @example
   * dmtrace
   */
  cnameRecord?: string;
  /**
   * @example
   * 2019-09-29T12:49Z
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  defaultDomain?: string;
  dkimAuthStatus?: string;
  dkimPublicKey?: string;
  dkimRR?: string;
  dmarcAuthStatus?: number;
  dmarcHostRecord?: string;
  dmarcRecord?: string;
  dnsDmarc?: string;
  /**
   * @example
   * abc-com.xxxx.com
   */
  dnsMx?: string;
  /**
   * @example
   * v=xxxx
   */
  dnsSpf?: string;
  /**
   * @example
   * 121309ohdsa
   */
  dnsTxt?: string;
  /**
   * @example
   * 158910
   */
  domainId?: string;
  /**
   * @example
   * abc.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  domainStatus?: string;
  /**
   * @example
   * 0c40d5f125af4e42892a
   */
  domainType?: string;
  hostRecord?: string;
  /**
   * @example
   * 1
   */
  icpStatus?: string;
  /**
   * @example
   * 1
   */
  mxAuthStatus?: string;
  /**
   * @example
   * mx01.dm.aliyun.com
   */
  mxRecord?: string;
  /**
   * @example
   * 51B74264-46B4-43C8-A9A0-6B8E8BC04F34
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  spfAuthStatus?: string;
  /**
   * @example
   * include:spf1.dm.aliyun.com
   */
  spfRecord?: string;
  spfRecordV2?: string;
  /**
   * @example
   * abc.com
   */
  tlDomainName?: string;
  /**
   * @example
   * tracedm.aliyuncs.com
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 0
   */
  ipProtection?: string;
  /**
   * @example
   * B30E5A62-2E64-577D-A70E-8C6781D6C975
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtection: 'IpProtection',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtection: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIpProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIpProtectionResponseBody,
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
   * 84DD77C7-A091-5139-9530-2D1F7CCE59E0
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  data?: GetIpfilterListResponseBodyData;
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
      data: GetIpfilterListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpfilterListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIpfilterListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIpfilterListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuppressionListLevelRequest extends $tea.Model {
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

export class GetSuppressionListLevelResponseBody extends $tea.Model {
  requestId?: string;
  suppressionListLevel?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suppressionListLevel: 'SuppressionListLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suppressionListLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuppressionListLevelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSuppressionListLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSuppressionListLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListRequest extends $tea.Model {
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  offset?: string;
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  tagName?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
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
      tagName: 'TagName',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
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
      tagName: 'string',
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
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrackListResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetTrackListByMailFromAndTagNameRequest extends $tea.Model {
  /**
   * @example
   * e-service@amegroups.cn
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  offset?: string;
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @example
   * Subscription
   */
  tagName?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
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
      tagName: 'TagName',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
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
      tagName: 'string',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListByMailFromAndTagNameResponseBody extends $tea.Model {
  offsetCreateTime?: string;
  offsetCreateTimeDesc?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
  total?: number;
  trackList?: GetTrackListByMailFromAndTagNameResponseBodyTrackList;
  static names(): { [key: string]: string } {
    return {
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      trackList: 'TrackList',
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
      trackList: GetTrackListByMailFromAndTagNameResponseBodyTrackList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListByMailFromAndTagNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrackListByMailFromAndTagNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrackListByMailFromAndTagNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  data?: GetUserResponseBodyData;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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
      data: GetUserResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSuppressionRequest extends $tea.Model {
  /**
   * @example
   * test@example.net
   */
  address?: string;
  /**
   * @example
   * 1715669077
   */
  endBounceTime?: number;
  /**
   * @example
   * 1715669077
   */
  endCreateTime?: number;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1715668852
   */
  startBounceTime?: number;
  /**
   * @example
   * 1715668852
   */
  startCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      endBounceTime: 'EndBounceTime',
      endCreateTime: 'EndCreateTime',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startBounceTime: 'StartBounceTime',
      startCreateTime: 'StartCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      endBounceTime: 'number',
      endCreateTime: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startBounceTime: 'number',
      startCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSuppressionResponseBody extends $tea.Model {
  data?: ListUserSuppressionResponseBodyData;
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
   * 1A846D66-5EC7-551B-9687-5BF1963DCFC1
   */
  requestId?: string;
  /**
   * @example
   * 2
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
      data: ListUserSuppressionResponseBodyData,
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

export class ListUserSuppressionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserSuppressionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserSuppressionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMailAddressRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1344565
   */
  mailAddressId?: number;
  ownerId?: number;
  /**
   * @example
   * pwd129WDCft9
   */
  password?: string;
  /**
   * @example
   * a***@example.net
   */
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
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class ModifyMailAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMailAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pwd
   */
  password?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      password: 'Password',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      password: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPWByDomainResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  message?: string;
  /**
   * @example
   * 02B2A890-CBD8-4806-9BCA-C93190CE7EF6
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPWByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  tagId?: number;
  /**
   * @remarks
   * The name of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * vme
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class ModifyTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTagResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class QueryDomainByParamRequest extends $tea.Model {
  /**
   * @example
   * abc.com
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 8C90CCD3-627C-4F87-AD8C-2F03146071EB
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDomainByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 2019-09-29
   */
  endTime?: string;
  /**
   * @example
   * info
   */
  keyWord?: string;
  /**
   * @example
   * 100
   */
  length?: number;
  /**
   * @example
   * ***
   */
  nextStart?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 2019-09-29
   */
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
  /**
   * @example
   * 2
   */
  nextStart?: string;
  /**
   * @example
   * 95A7D497-F8DD-4834-B81E-C1783236E55F
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
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
      nextStart: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInvalidAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * batch
   */
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
   * 95A7D497-F8DD-4834-B81E-C1783236E55F
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMailAddressByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * mesh-notification
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 6aec200853#102#1638894326#rdwilbur@verizon.net
   */
  nextStart?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryReceiverByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * b***@example.net
   */
  keyWord?: string;
  /**
   * @example
   * 0
   */
  nextStart?: string;
  ownerId?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1235
   */
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
  /**
   * @example
   * UserName,NickName,Gender,Birthday,Mobile
   */
  dataSchema?: string;
  /**
   * @example
   * 90f0243616#401#b68c2af70b9664b2843f90fd3630b1a3-1650779410#xxx@demo.aliyun.com
   */
  nextStart?: string;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * 361
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 1aTag
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTagByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * mesh-notification-788717
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RemoveUserSuppressionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  suppressionIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      suppressionIds: 'SuppressionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      suppressionIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserSuppressionResponseBody extends $tea.Model {
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

export class RemoveUserSuppressionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserSuppressionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUserSuppressionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{“b”:” birthday”,”e”:”xxx@alibaba-inc.com”,”g”:” gender”,”m”:” mobile “,”n”:” nickname “,”u”:”name “}]
   */
  detail?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34642
   */
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
  /**
   * @example
   * 638
   */
  errorCount?: number;
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * 274
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveReceiverDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SendTestByTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountName?: string;
  /**
   * @example
   * 2000/01/01
   */
  birthday?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  email?: string;
  gender?: string;
  /**
   * @example
   * 1380000****
   */
  mobile?: string;
  nickName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  templateId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      birthday: 'Birthday',
      email: 'Email',
      gender: 'Gender',
      mobile: 'Mobile',
      nickName: 'NickName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      birthday: 'string',
      email: 'string',
      gender: 'string',
      mobile: 'string',
      nickName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTestByTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
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

export class SendTestByTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendTestByTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendTestByTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDRequest extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @example
   * xxx
   */
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
  /**
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SenderStatisticsByTagNameAndBatchIDResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * s***@example.net
   */
  accountName?: string;
  /**
   * @example
   * 2021-04-29 00:00
   */
  endTime?: string;
  /**
   * @example
   * 5
   */
  length?: number;
  /**
   * @example
   * 90f0243616#203#a***@example.net-1658817837#a***@example.net.247475288187
   */
  nextStart?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 2021-04-28 00:00
   */
  startTime?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * EmailQuestionnaireHelioscam
   */
  tagName?: string;
  /**
   * @example
   * b***@example.net
   */
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
  /**
   * @example
   * 90f0243616#203#a***@example.net-1658817689#a***@example.net.247141122178
   */
  nextStart?: string;
  /**
   * @example
   * B5AB8EBB-EE64-4BB2-B085-B92CC5DEDC41
   */
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
      nextStart: 'string',
      requestId: 'string',
      data: SenderStatisticsDetailByParamResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SenderStatisticsDetailByParamResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SetSuppressionListLevelRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  suppressionListLevel?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      suppressionListLevel: 'SuppressionListLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      suppressionListLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSuppressionListLevelResponseBody extends $tea.Model {
  requestId?: string;
  suppressionListLevel?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suppressionListLevel: 'SuppressionListLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suppressionListLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSuppressionListLevelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSuppressionListLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetSuppressionListLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @example
   * 0
   */
  clickTrace?: string;
  fromAlias?: string;
  /**
   * @example
   * body
   */
  htmlBody?: string;
  ownerId?: number;
  /**
   * @example
   * 111@aliyun.com
   */
  replyAddress?: string;
  replyAddressAlias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  replyToAddress?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Subject
   */
  subject?: string;
  /**
   * @example
   * test
   */
  tagName?: string;
  /**
   * @example
   * 12121
   */
  textBody?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1@example.com
   */
  toAddress?: string;
  unSubscribeFilterLevel?: string;
  unSubscribeLinkType?: string;
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
      unSubscribeFilterLevel: 'UnSubscribeFilterLevel',
      unSubscribeLinkType: 'UnSubscribeLinkType',
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
      unSubscribeFilterLevel: 'string',
      unSubscribeLinkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailResponseBody extends $tea.Model {
  /**
   * @example
   * xxxxxx
   */
  envId?: string;
  /**
   * @example
   * 2D086F6-8F31-4658-84C1-006DED011A85
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SingleSendMailResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateIpProtectionRequest extends $tea.Model {
  /**
   * @example
   * 0
   */
  ipProtection?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ipProtection: 'IpProtection',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtection: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpProtectionResponseBody extends $tea.Model {
  /**
   * @example
   * B653A6FC-D1AD-5936-A262-F50994ED2574
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

export class UpdateIpProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIpProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIpProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  user?: UpdateUserRequestUser;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: UpdateUserRequestUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserShrinkRequest extends $tea.Model {
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7BC346F6-1092-5852-B6E2-CCE2E5AAE51F
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

export class UpdateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpfilterListResponseBodyDataIpfilters extends $tea.Model {
  /**
   * @example
   * 1653547140
   */
  createTime?: string;
  /**
   * @example
   * 10083
   */
  id?: string;
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      ipAddress: 'string',
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

export class GetTrackListResponseBodyDataStat extends $tea.Model {
  /**
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  rcptClickCount?: string;
  /**
   * @example
   * 0
   */
  rcptClickRate?: string;
  /**
   * @example
   * 0
   */
  rcptOpenCount?: string;
  /**
   * @example
   * 0
   */
  rcptOpenRate?: string;
  /**
   * @example
   * 0
   */
  rcptUniqueClickCount?: string;
  /**
   * @example
   * 0
   */
  rcptUniqueClickRate?: string;
  /**
   * @example
   * 0
   */
  rcptUniqueOpenCount?: string;
  /**
   * @example
   * 0
   */
  rcptUniqueOpenRate?: string;
  /**
   * @example
   * 0
   */
  totalNumber?: string;
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
      createTime: 'string',
      rcptClickCount: 'string',
      rcptClickRate: 'string',
      rcptOpenCount: 'string',
      rcptOpenRate: 'string',
      rcptUniqueClickCount: 'string',
      rcptUniqueClickRate: 'string',
      rcptUniqueOpenCount: 'string',
      rcptUniqueOpenRate: 'string',
      totalNumber: 'string',
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
  /**
   * @example
   * 2022-01-11T10:11Z
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  rcptClickCount?: string;
  /**
   * @example
   * 0
   */
  rcptClickRate?: string;
  /**
   * @example
   * 0
   */
  rcptOpenCount?: string;
  /**
   * @example
   * 0
   */
  rcptOpenRate?: string;
  /**
   * @example
   * 0
   */
  rcptUniqueClickCount?: string;
  /**
   * @example
   * 0
   */
  rcptUniqueClickRate?: string;
  /**
   * @example
   * 0
   */
  rcptUniqueOpenCount?: string;
  /**
   * @example
   * 0
   */
  rcptUniqueOpenRate?: string;
  /**
   * @example
   * 0
   */
  totalNumber?: string;
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
      createTime: 'string',
      rcptClickCount: 'string',
      rcptClickRate: 'string',
      rcptOpenCount: 'string',
      rcptOpenRate: 'string',
      rcptUniqueClickCount: 'string',
      rcptUniqueClickRate: 'string',
      rcptUniqueOpenCount: 'string',
      rcptUniqueOpenRate: 'string',
      totalNumber: 'string',
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

export class GetUserResponseBodyData extends $tea.Model {
  /**
   * @example
   * true
   */
  enableEventbridge?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableEventbridge: 'EnableEventbridge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventbridge: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSuppressionResponseBodyDataUserSuppressions extends $tea.Model {
  /**
   * @example
   * test@example.net
   */
  address?: string;
  /**
   * @example
   * 1715667435
   */
  createTime?: number;
  /**
   * @example
   * 1715667451
   */
  lastBounceTime?: number;
  /**
   * @example
   * 59511
   */
  suppressionId?: number;
  /**
   * @example
   * - system
   * - user
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      createTime: 'CreateTime',
      lastBounceTime: 'LastBounceTime',
      suppressionId: 'SuppressionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      createTime: 'number',
      lastBounceTime: 'number',
      suppressionId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSuppressionResponseBodyData extends $tea.Model {
  userSuppressions?: ListUserSuppressionResponseBodyDataUserSuppressions[];
  static names(): { [key: string]: string } {
    return {
      userSuppressions: 'UserSuppressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSuppressions: { 'type': 'array', 'itemType': ListUserSuppressionResponseBodyDataUserSuppressions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponseBodyDataDomain extends $tea.Model {
  /**
   * @example
   * 0
   */
  cnameAuthStatus?: string;
  /**
   * @example
   * 0
   */
  confirmStatus?: string;
  /**
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @example
   * 158923
   */
  domainId?: string;
  /**
   * @example
   * vmeixme.com
   */
  domainName?: string;
  /**
   * @example
   * 6bd86901b9fe4618a046
   */
  domainRecord?: string;
  /**
   * @example
   * 0
   */
  domainStatus?: string;
  /**
   * @example
   * 1
   */
  icpStatus?: string;
  /**
   * @example
   * 0
   */
  mxAuthStatus?: string;
  /**
   * @example
   * 0
   */
  spfAuthStatus?: string;
  /**
   * @example
   * 1569734892
   */
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
  /**
   * @example
   * 2021-04-28T17:11Z
   */
  lastUpdateTime?: string;
  /**
   * @example
   * toaddress@test.com
   */
  toAddress?: string;
  /**
   * @example
   * 1619601108
   */
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
  /**
   * @example
   * 0
   */
  accountStatus?: string;
  /**
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @example
   * 10000
   */
  dailyCount?: string;
  /**
   * @example
   * 100
   */
  dailyReqCount?: string;
  /**
   * @example
   * 0
   */
  domainStatus?: string;
  /**
   * @example
   * 12122
   */
  mailAddressId?: string;
  /**
   * @example
   * 300000
   */
  monthCount?: string;
  /**
   * @example
   * 20000
   */
  monthReqCount?: string;
  /**
   * @example
   * 112@aliyun.com
   */
  replyAddress?: string;
  /**
   * @example
   * 0
   */
  replyStatus?: string;
  /**
   * @example
   * batch
   */
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
  /**
   * @example
   * 3
   */
  count?: string;
  /**
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  desc?: string;
  /**
   * @example
   * 0c910a7143044b1e116719eb678907b3
   */
  receiverId?: string;
  /**
   * @example
   * 10***@163.com
   */
  receiversAlias?: string;
  /**
   * @example
   * TKP000442-333
   */
  receiversName?: string;
  /**
   * @example
   * 0
   */
  receiversStatus?: string;
  /**
   * @example
   * 1569734892
   */
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
  /**
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @example
   * {\\"Domains\\": [\\"a.example.net\\", \\"b.example.net\\", \\"c.example.net\\", \\"d.example.net\\"]}
   */
  data?: string;
  /**
   * @example
   * a***@example.net
   */
  email?: string;
  /**
   * @example
   * 1569734892
   */
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
  /**
   * @example
   * 52366
   */
  tagId?: string;
  /**
   * @example
   * hellopal
   */
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
  /**
   * @example
   * TKP000442-333
   */
  receiversName?: string;
  /**
   * @example
   * 1
   */
  requestCount?: string;
  /**
   * @example
   * 202201
   */
  tagName?: string;
  /**
   * @example
   * 1054296
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: string;
  /**
   * @example
   * Short Simple
   */
  templateName?: string;
  /**
   * @example
   * 1569734892
   */
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

export class SaveReceiverDetailResponseBodyDataDetail extends $tea.Model {
  /**
   * @example
   * test@mail.com
   */
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
  /**
   * @example
   * 2021-07-02
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  faildCount?: string;
  /**
   * @example
   * 4
   */
  requestCount?: string;
  /**
   * @example
   * 100.00%
   */
  succeededPercent?: string;
  /**
   * @example
   * 4
   */
  successCount?: string;
  /**
   * @example
   * 0
   */
  unavailableCount?: string;
  /**
   * @example
   * 0%
   */
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
  /**
   * @example
   * s***@example.net
   */
  accountName?: string;
  errorClassification?: string;
  /**
   * @example
   * 2021-04-28T17:11Z
   */
  lastUpdateTime?: string;
  /**
   * @example
   * 250 Send Mail OK
   */
  message?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  subject?: string;
  /**
   * @example
   * b***@example.net
   */
  toAddress?: string;
  /**
   * @example
   * 1619601108
   */
  utcLastUpdateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      errorClassification: 'ErrorClassification',
      lastUpdateTime: 'LastUpdateTime',
      message: 'Message',
      status: 'Status',
      subject: 'Subject',
      toAddress: 'ToAddress',
      utcLastUpdateTime: 'UtcLastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      errorClassification: 'string',
      lastUpdateTime: 'string',
      message: 'string',
      status: 'number',
      subject: 'string',
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

export class UpdateUserRequestUser extends $tea.Model {
  /**
   * @example
   * true
   */
  enableEventbridge?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableEventbridge: 'EnableEventbridge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventbridge: 'boolean',
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

  /**
   * 添加IP防护信息
   * 
   * @param request - AddIpfilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpfilterResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 添加IP防护信息
   * 
   * @param request - AddIpfilterRequest
   * @returns AddIpfilterResponse
   */
  async addIpfilter(request: AddIpfilterRequest): Promise<AddIpfilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpfilterWithOptions(request, runtime);
  }

  /**
   * 验证回信地址
   * 
   * @param request - ApproveReplyMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveReplyMailAddressResponse
   */
  async approveReplyMailAddressWithOptions(request: ApproveReplyMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<ApproveReplyMailAddressResponse> {
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

    if (!Util.isUnset(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApproveReplyMailAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApproveReplyMailAddressResponse>(await this.callApi(params, req, runtime), new ApproveReplyMailAddressResponse({}));
  }

  /**
   * 验证回信地址
   * 
   * @param request - ApproveReplyMailAddressRequest
   * @returns ApproveReplyMailAddressResponse
   */
  async approveReplyMailAddress(request: ApproveReplyMailAddressRequest): Promise<ApproveReplyMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveReplyMailAddressWithOptions(request, runtime);
  }

  /**
   * 批量发送邮件
   * 
   * @param request - BatchSendMailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSendMailResponse
   */
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

    if (!Util.isUnset(request.unSubscribeFilterLevel)) {
      query["UnSubscribeFilterLevel"] = request.unSubscribeFilterLevel;
    }

    if (!Util.isUnset(request.unSubscribeLinkType)) {
      query["UnSubscribeLinkType"] = request.unSubscribeLinkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSendMail",
      version: "2015-11-23",
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

  /**
   * 批量发送邮件
   * 
   * @param request - BatchSendMailRequest
   * @returns BatchSendMailResponse
   */
  async batchSendMail(request: BatchSendMailRequest): Promise<BatchSendMailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSendMailWithOptions(request, runtime);
  }

  /**
   * 校验域名状态
   * 
   * @param request - CheckDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDomainResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 校验域名状态
   * 
   * @param request - CheckDomainRequest
   * @returns CheckDomainResponse
   */
  async checkDomain(request: CheckDomainRequest): Promise<CheckDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  /**
   * 校验回信地址
   * 
   * @param request - CheckReplyToMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckReplyToMailAddressResponse
   */
  async checkReplyToMailAddressWithOptions(request: CheckReplyToMailAddressRequest, runtime: $Util.RuntimeOptions): Promise<CheckReplyToMailAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.mailAddressId)) {
      query["MailAddressId"] = request.mailAddressId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
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
      action: "CheckReplyToMailAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckReplyToMailAddressResponse>(await this.callApi(params, req, runtime), new CheckReplyToMailAddressResponse({}));
  }

  /**
   * 校验回信地址
   * 
   * @param request - CheckReplyToMailAddressRequest
   * @returns CheckReplyToMailAddressResponse
   */
  async checkReplyToMailAddress(request: CheckReplyToMailAddressRequest): Promise<CheckReplyToMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkReplyToMailAddressWithOptions(request, runtime);
  }

  /**
   * 创建域名
   * 
   * @param request - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 创建域名
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMailAddressResponse
   */
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
      version: "2015-11-23",
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

  /**
   * @param request - CreateMailAddressRequest
   * @returns CreateMailAddressResponse
   */
  async createMailAddress(request: CreateMailAddressRequest): Promise<CreateMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMailAddressWithOptions(request, runtime);
  }

  /**
   * 创建收件人列表
   * 
   * @param request - CreateReceiverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReceiverResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 创建收件人列表
   * 
   * @param request - CreateReceiverRequest
   * @returns CreateReceiverResponse
   */
  async createReceiver(request: CreateReceiverRequest): Promise<CreateReceiverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReceiverWithOptions(request, runtime);
  }

  /**
   * 创建标签
   * 
   * @param request - CreateTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 创建标签
   * 
   * @param request - CreateTagRequest
   * @returns CreateTagResponse
   */
  async createTag(request: CreateTagRequest): Promise<CreateTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  /**
   * 创建用户无效地址
   * 
   * @param request - CreateUserSuppressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserSuppressionResponse
   */
  async createUserSuppressionWithOptions(request: CreateUserSuppressionRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserSuppressionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
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
      action: "CreateUserSuppression",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserSuppressionResponse>(await this.callApi(params, req, runtime), new CreateUserSuppressionResponse({}));
  }

  /**
   * 创建用户无效地址
   * 
   * @param request - CreateUserSuppressionRequest
   * @returns CreateUserSuppressionResponse
   */
  async createUserSuppression(request: CreateUserSuppressionRequest): Promise<CreateUserSuppressionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserSuppressionWithOptions(request, runtime);
  }

  /**
   * 删除域名
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 删除域名
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * 从无效地址库删除无效地址
   * 
   * @param request - DeleteInvalidAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInvalidAddressResponse
   */
  async deleteInvalidAddressWithOptions(request: DeleteInvalidAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInvalidAddressResponse> {
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

    if (!Util.isUnset(request.toAddress)) {
      query["ToAddress"] = request.toAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInvalidAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInvalidAddressResponse>(await this.callApi(params, req, runtime), new DeleteInvalidAddressResponse({}));
  }

  /**
   * 从无效地址库删除无效地址
   * 
   * @param request - DeleteInvalidAddressRequest
   * @returns DeleteInvalidAddressResponse
   */
  async deleteInvalidAddress(request: DeleteInvalidAddressRequest): Promise<DeleteInvalidAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInvalidAddressWithOptions(request, runtime);
  }

  /**
   * 删除IP保护信息
   * 
   * @param request - DeleteIpfilterByEdmIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpfilterByEdmIdResponse
   */
  async deleteIpfilterByEdmIdWithOptions(request: DeleteIpfilterByEdmIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpfilterByEdmIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromType)) {
      query["FromType"] = request.fromType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
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
      action: "DeleteIpfilterByEdmId",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIpfilterByEdmIdResponse>(await this.callApi(params, req, runtime), new DeleteIpfilterByEdmIdResponse({}));
  }

  /**
   * 删除IP保护信息
   * 
   * @param request - DeleteIpfilterByEdmIdRequest
   * @returns DeleteIpfilterByEdmIdResponse
   */
  async deleteIpfilterByEdmId(request: DeleteIpfilterByEdmIdRequest): Promise<DeleteIpfilterByEdmIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpfilterByEdmIdWithOptions(request, runtime);
  }

  /**
   * 删除发信地址
   * 
   * @param request - DeleteMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMailAddressResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 删除发信地址
   * 
   * @param request - DeleteMailAddressRequest
   * @returns DeleteMailAddressResponse
   */
  async deleteMailAddress(request: DeleteMailAddressRequest): Promise<DeleteMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMailAddressWithOptions(request, runtime);
  }

  /**
   * 删除收件人列表
   * 
   * @param request - DeleteReceiverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReceiverResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 删除收件人列表
   * 
   * @param request - DeleteReceiverRequest
   * @returns DeleteReceiverResponse
   */
  async deleteReceiver(request: DeleteReceiverRequest): Promise<DeleteReceiverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReceiverWithOptions(request, runtime);
  }

  /**
   * 删除单个收件人
   * 
   * @param request - DeleteReceiverDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReceiverDetailResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 删除单个收件人
   * 
   * @param request - DeleteReceiverDetailRequest
   * @returns DeleteReceiverDetailResponse
   */
  async deleteReceiverDetail(request: DeleteReceiverDetailRequest): Promise<DeleteReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReceiverDetailWithOptions(request, runtime);
  }

  /**
   * 删除标签
   * 
   * @param request - DeleteTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 删除标签
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(request: DeleteTagRequest): Promise<DeleteTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  /**
   * @param request - DescAccountSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescAccountSummaryResponse
   */
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
      version: "2015-11-23",
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

  /**
   * @param request - DescAccountSummaryRequest
   * @returns DescAccountSummaryResponse
   */
  async descAccountSummary(request: DescAccountSummaryRequest): Promise<DescAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descAccountSummaryWithOptions(request, runtime);
  }

  /**
   * 获取域名详情
   * 
   * @param request - DescDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescDomainResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 获取域名详情
   * 
   * @param request - DescDomainRequest
   * @returns DescDomainResponse
   */
  async descDomain(request: DescDomainRequest): Promise<DescDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descDomainWithOptions(request, runtime);
  }

  /**
   * 获取IP保护信息
   * 
   * @param request - GetIpProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpProtectionResponse
   */
  async getIpProtectionWithOptions(request: GetIpProtectionRequest, runtime: $Util.RuntimeOptions): Promise<GetIpProtectionResponse> {
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
      action: "GetIpProtection",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIpProtectionResponse>(await this.callApi(params, req, runtime), new GetIpProtectionResponse({}));
  }

  /**
   * 获取IP保护信息
   * 
   * @param request - GetIpProtectionRequest
   * @returns GetIpProtectionResponse
   */
  async getIpProtection(request: GetIpProtectionRequest): Promise<GetIpProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpProtectionWithOptions(request, runtime);
  }

  /**
   * 获取IP防护信息
   * 
   * @param request - GetIpfilterListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpfilterListResponse
   */
  async getIpfilterListWithOptions(request: GetIpfilterListRequest, runtime: $Util.RuntimeOptions): Promise<GetIpfilterListResponse> {
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
      action: "GetIpfilterList",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIpfilterListResponse>(await this.callApi(params, req, runtime), new GetIpfilterListResponse({}));
  }

  /**
   * 获取IP防护信息
   * 
   * @param request - GetIpfilterListRequest
   * @returns GetIpfilterListResponse
   */
  async getIpfilterList(request: GetIpfilterListRequest): Promise<GetIpfilterListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpfilterListWithOptions(request, runtime);
  }

  /**
   * 获取用户无效地址级别配置
   * 
   * @param request - GetSuppressionListLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuppressionListLevelResponse
   */
  async getSuppressionListLevelWithOptions(request: GetSuppressionListLevelRequest, runtime: $Util.RuntimeOptions): Promise<GetSuppressionListLevelResponse> {
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
      action: "GetSuppressionListLevel",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSuppressionListLevelResponse>(await this.callApi(params, req, runtime), new GetSuppressionListLevelResponse({}));
  }

  /**
   * 获取用户无效地址级别配置
   * 
   * @param request - GetSuppressionListLevelRequest
   * @returns GetSuppressionListLevelResponse
   */
  async getSuppressionListLevel(request: GetSuppressionListLevelRequest): Promise<GetSuppressionListLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuppressionListLevelWithOptions(request, runtime);
  }

  /**
   * 获取跟踪信息
   * 
   * @param request - GetTrackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrackListResponse
   */
  async getTrackListWithOptions(request: GetTrackListRequest, runtime: $Util.RuntimeOptions): Promise<GetTrackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

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

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrackList",
      version: "2015-11-23",
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

  /**
   * 获取跟踪信息
   * 
   * @param request - GetTrackListRequest
   * @returns GetTrackListResponse
   */
  async getTrackList(request: GetTrackListRequest): Promise<GetTrackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrackListWithOptions(request, runtime);
  }

  /**
   * 根据发信地址和Tag名称获取跟踪信息
   * 
   * @param request - GetTrackListByMailFromAndTagNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrackListByMailFromAndTagNameResponse
   */
  async getTrackListByMailFromAndTagNameWithOptions(request: GetTrackListByMailFromAndTagNameRequest, runtime: $Util.RuntimeOptions): Promise<GetTrackListByMailFromAndTagNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

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

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrackListByMailFromAndTagName",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrackListByMailFromAndTagNameResponse>(await this.callApi(params, req, runtime), new GetTrackListByMailFromAndTagNameResponse({}));
  }

  /**
   * 根据发信地址和Tag名称获取跟踪信息
   * 
   * @param request - GetTrackListByMailFromAndTagNameRequest
   * @returns GetTrackListByMailFromAndTagNameResponse
   */
  async getTrackListByMailFromAndTagName(request: GetTrackListByMailFromAndTagNameRequest): Promise<GetTrackListByMailFromAndTagNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrackListByMailFromAndTagNameWithOptions(request, runtime);
  }

  /**
   * 获取账号详情
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
   * 获取账号详情
   * @returns GetUserResponse
   */
  async getUser(): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(runtime);
  }

  /**
   * 列出用户无效地址
   * 
   * @param request - ListUserSuppressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserSuppressionResponse
   */
  async listUserSuppressionWithOptions(request: ListUserSuppressionRequest, runtime: $Util.RuntimeOptions): Promise<ListUserSuppressionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.endBounceTime)) {
      query["EndBounceTime"] = request.endBounceTime;
    }

    if (!Util.isUnset(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
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

    if (!Util.isUnset(request.startBounceTime)) {
      query["StartBounceTime"] = request.startBounceTime;
    }

    if (!Util.isUnset(request.startCreateTime)) {
      query["StartCreateTime"] = request.startCreateTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserSuppression",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserSuppressionResponse>(await this.callApi(params, req, runtime), new ListUserSuppressionResponse({}));
  }

  /**
   * 列出用户无效地址
   * 
   * @param request - ListUserSuppressionRequest
   * @returns ListUserSuppressionResponse
   */
  async listUserSuppression(request: ListUserSuppressionRequest): Promise<ListUserSuppressionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserSuppressionWithOptions(request, runtime);
  }

  /**
   * 修改发信地址
   * 
   * @param request - ModifyMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMailAddressResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 修改发信地址
   * 
   * @param request - ModifyMailAddressRequest
   * @returns ModifyMailAddressResponse
   */
  async modifyMailAddress(request: ModifyMailAddressRequest): Promise<ModifyMailAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMailAddressWithOptions(request, runtime);
  }

  /**
   * 修改域级别密码
   * 
   * @param request - ModifyPWByDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPWByDomainResponse
   */
  async modifyPWByDomainWithOptions(request: ModifyPWByDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPWByDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
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
      action: "ModifyPWByDomain",
      version: "2015-11-23",
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

  /**
   * 修改域级别密码
   * 
   * @param request - ModifyPWByDomainRequest
   * @returns ModifyPWByDomainResponse
   */
  async modifyPWByDomain(request: ModifyPWByDomainRequest): Promise<ModifyPWByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPWByDomainWithOptions(request, runtime);
  }

  /**
   * 修改标签
   * 
   * @param request - ModifyTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTagResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 修改标签
   * 
   * @param request - ModifyTagRequest
   * @returns ModifyTagResponse
   */
  async modifyTag(request: ModifyTagRequest): Promise<ModifyTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTagWithOptions(request, runtime);
  }

  /**
   * 查询域名信息
   * 
   * @param request - QueryDomainByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainByParamResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 查询域名信息
   * 
   * @param request - QueryDomainByParamRequest
   * @returns QueryDomainByParamResponse
   */
  async queryDomainByParam(request: QueryDomainByParamRequest): Promise<QueryDomainByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDomainByParamWithOptions(request, runtime);
  }

  /**
   * NextStart修改为string
   * 
   * @param request - QueryInvalidAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInvalidAddressResponse
   */
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
      version: "2015-11-23",
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

  /**
   * NextStart修改为string
   * 
   * @param request - QueryInvalidAddressRequest
   * @returns QueryInvalidAddressResponse
   */
  async queryInvalidAddress(request: QueryInvalidAddressRequest): Promise<QueryInvalidAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInvalidAddressWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMailAddressByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMailAddressByParamResponse
   */
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
      version: "2015-11-23",
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

  /**
   * @param request - QueryMailAddressByParamRequest
   * @returns QueryMailAddressByParamResponse
   */
  async queryMailAddressByParam(request: QueryMailAddressByParamRequest): Promise<QueryMailAddressByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMailAddressByParamWithOptions(request, runtime);
  }

  /**
   * 查询收信人列表详情
   * 
   * @param request - QueryReceiverByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReceiverByParamResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 查询收信人列表详情
   * 
   * @param request - QueryReceiverByParamRequest
   * @returns QueryReceiverByParamResponse
   */
  async queryReceiverByParam(request: QueryReceiverByParamRequest): Promise<QueryReceiverByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReceiverByParamWithOptions(request, runtime);
  }

  /**
   * 查询收信人列表详情信息
   * 
   * @param request - QueryReceiverDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReceiverDetailResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 查询收信人列表详情信息
   * 
   * @param request - QueryReceiverDetailRequest
   * @returns QueryReceiverDetailResponse
   */
  async queryReceiverDetail(request: QueryReceiverDetailRequest): Promise<QueryReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReceiverDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTagByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagByParamResponse
   */
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
      version: "2015-11-23",
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

  /**
   * @param request - QueryTagByParamRequest
   * @returns QueryTagByParamResponse
   */
  async queryTagByParam(request: QueryTagByParamRequest): Promise<QueryTagByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagByParamWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskByParamResponse
   */
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
      version: "2015-11-23",
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

  /**
   * @param request - QueryTaskByParamRequest
   * @returns QueryTaskByParamResponse
   */
  async queryTaskByParam(request: QueryTaskByParamRequest): Promise<QueryTaskByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskByParamWithOptions(request, runtime);
  }

  /**
   * 删除用户无效地址
   * 
   * @param request - RemoveUserSuppressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserSuppressionResponse
   */
  async removeUserSuppressionWithOptions(request: RemoveUserSuppressionRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserSuppressionResponse> {
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

    if (!Util.isUnset(request.suppressionIds)) {
      query["SuppressionIds"] = request.suppressionIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserSuppression",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUserSuppressionResponse>(await this.callApi(params, req, runtime), new RemoveUserSuppressionResponse({}));
  }

  /**
   * 删除用户无效地址
   * 
   * @param request - RemoveUserSuppressionRequest
   * @returns RemoveUserSuppressionResponse
   */
  async removeUserSuppression(request: RemoveUserSuppressionRequest): Promise<RemoveUserSuppressionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserSuppressionWithOptions(request, runtime);
  }

  /**
   * 建单个收件人
   * 
   * @param request - SaveReceiverDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveReceiverDetailResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 建单个收件人
   * 
   * @param request - SaveReceiverDetailRequest
   * @returns SaveReceiverDetailResponse
   */
  async saveReceiverDetail(request: SaveReceiverDetailRequest): Promise<SaveReceiverDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveReceiverDetailWithOptions(request, runtime);
  }

  /**
   * 发送模板测试邮件
   * 
   * @param request - SendTestByTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTestByTemplateResponse
   */
  async sendTestByTemplateWithOptions(request: SendTestByTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SendTestByTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.birthday)) {
      query["Birthday"] = request.birthday;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.gender)) {
      query["Gender"] = request.gender;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.nickName)) {
      query["NickName"] = request.nickName;
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

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendTestByTemplate",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendTestByTemplateResponse>(await this.callApi(params, req, runtime), new SendTestByTemplateResponse({}));
  }

  /**
   * 发送模板测试邮件
   * 
   * @param request - SendTestByTemplateRequest
   * @returns SendTestByTemplateResponse
   */
  async sendTestByTemplate(request: SendTestByTemplateRequest): Promise<SendTestByTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendTestByTemplateWithOptions(request, runtime);
  }

  /**
   * 获取指定条件下的发送数据
   * 
   * @param request - SenderStatisticsByTagNameAndBatchIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SenderStatisticsByTagNameAndBatchIDResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 获取指定条件下的发送数据
   * 
   * @param request - SenderStatisticsByTagNameAndBatchIDRequest
   * @returns SenderStatisticsByTagNameAndBatchIDResponse
   */
  async senderStatisticsByTagNameAndBatchID(request: SenderStatisticsByTagNameAndBatchIDRequest): Promise<SenderStatisticsByTagNameAndBatchIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.senderStatisticsByTagNameAndBatchIDWithOptions(request, runtime);
  }

  /**
   * 查询投递结果详情
   * 
   * @param request - SenderStatisticsDetailByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SenderStatisticsDetailByParamResponse
   */
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
      version: "2015-11-23",
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

  /**
   * 查询投递结果详情
   * 
   * @param request - SenderStatisticsDetailByParamRequest
   * @returns SenderStatisticsDetailByParamResponse
   */
  async senderStatisticsDetailByParam(request: SenderStatisticsDetailByParamRequest): Promise<SenderStatisticsDetailByParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.senderStatisticsDetailByParamWithOptions(request, runtime);
  }

  /**
   * 设置用户无效地址级别配置
   * 
   * @param request - SetSuppressionListLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSuppressionListLevelResponse
   */
  async setSuppressionListLevelWithOptions(request: SetSuppressionListLevelRequest, runtime: $Util.RuntimeOptions): Promise<SetSuppressionListLevelResponse> {
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

    if (!Util.isUnset(request.suppressionListLevel)) {
      query["SuppressionListLevel"] = request.suppressionListLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetSuppressionListLevel",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSuppressionListLevelResponse>(await this.callApi(params, req, runtime), new SetSuppressionListLevelResponse({}));
  }

  /**
   * 设置用户无效地址级别配置
   * 
   * @param request - SetSuppressionListLevelRequest
   * @returns SetSuppressionListLevelResponse
   */
  async setSuppressionListLevel(request: SetSuppressionListLevelRequest): Promise<SetSuppressionListLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSuppressionListLevelWithOptions(request, runtime);
  }

  /**
   * API发信
   * 
   * @param request - SingleSendMailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleSendMailResponse
   */
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

    if (!Util.isUnset(request.unSubscribeFilterLevel)) {
      query["UnSubscribeFilterLevel"] = request.unSubscribeFilterLevel;
    }

    if (!Util.isUnset(request.unSubscribeLinkType)) {
      query["UnSubscribeLinkType"] = request.unSubscribeLinkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SingleSendMail",
      version: "2015-11-23",
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

  /**
   * API发信
   * 
   * @param request - SingleSendMailRequest
   * @returns SingleSendMailResponse
   */
  async singleSendMail(request: SingleSendMailRequest): Promise<SingleSendMailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleSendMailWithOptions(request, runtime);
  }

  /**
   * 更新IP防护API
   * 
   * @param request - UpdateIpProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpProtectionResponse
   */
  async updateIpProtectionWithOptions(request: UpdateIpProtectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipProtection)) {
      query["IpProtection"] = request.ipProtection;
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
      action: "UpdateIpProtection",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIpProtectionResponse>(await this.callApi(params, req, runtime), new UpdateIpProtectionResponse({}));
  }

  /**
   * 更新IP防护API
   * 
   * @param request - UpdateIpProtectionRequest
   * @returns UpdateIpProtectionResponse
   */
  async updateIpProtection(request: UpdateIpProtectionRequest): Promise<UpdateIpProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpProtectionWithOptions(request, runtime);
  }

  /**
   * 更新帐号信息
   * 
   * @param tmpReq - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(tmpReq: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userShrink)) {
      body["User"] = request.userShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  /**
   * 更新帐号信息
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
