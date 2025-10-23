// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleSendMailShrinkRequestAttachments extends $dara.Model {
  attachmentName?: string;
  attachmentUrl?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      attachmentUrl: 'AttachmentUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      attachmentUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  addressType?: number;
  attachments?: SingleSendMailShrinkRequestAttachments[];
  clickTrace?: string;
  fromAlias?: string;
  headers?: string;
  htmlBody?: string;
  ipPoolId?: string;
  ownerId?: number;
  replyAddress?: string;
  replyAddressAlias?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  replyToAddress?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  subject?: string;
  tagName?: string;
  templateShrink?: string;
  textBody?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  toAddress?: string;
  unSubscribeFilterLevel?: string;
  unSubscribeLinkType?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      addressType: 'AddressType',
      attachments: 'Attachments',
      clickTrace: 'ClickTrace',
      fromAlias: 'FromAlias',
      headers: 'Headers',
      htmlBody: 'HtmlBody',
      ipPoolId: 'IpPoolId',
      ownerId: 'OwnerId',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      replyToAddress: 'ReplyToAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subject: 'Subject',
      tagName: 'TagName',
      templateShrink: 'Template',
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
      attachments: { 'type': 'array', 'itemType': SingleSendMailShrinkRequestAttachments },
      clickTrace: 'string',
      fromAlias: 'string',
      headers: 'string',
      htmlBody: 'string',
      ipPoolId: 'string',
      ownerId: 'number',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      replyToAddress: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subject: 'string',
      tagName: 'string',
      templateShrink: 'string',
      textBody: 'string',
      toAddress: 'string',
      unSubscribeFilterLevel: 'string',
      unSubscribeLinkType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

