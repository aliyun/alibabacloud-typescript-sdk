// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchSendMailRequestReceivers extends $dara.Model {
  /**
   * @remarks
   * The email template parameters. This parameter is of the JSON map type.
   */
  templateData?: { [key: string]: string };
  /**
   * @remarks
   * The recipient list. This parameter is of the array type.
   */
  to?: string[];
  static names(): { [key: string]: string } {
    return {
      templateData: 'TemplateData',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      to: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.templateData) {
      $dara.Model.validateMap(this.templateData);
    }
    if(Array.isArray(this.to)) {
      $dara.Model.validateArray(this.to);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailRequestTemplateContent extends $dara.Model {
  /**
   * @remarks
   * The display name of the sender.
   * 
   * @example
   * Jackie
   */
  alias?: string;
  /**
   * @remarks
   * The HTML body of the email.
   * 
   * Note: HtmlBody and TextBody are used for different types of email content. You must specify one of them.
   * 
   * The new SDK uses Body for parameter passing with a size limit of approximately 8 MB (Java 1.4.0 and later, Python3 1.4.0 and later, PHP 1.4.0 and later).
   * 
   * @example
   * <h1>全场九折，仅限今日</h1>
   */
  htmlBody?: string;
  /**
   * @remarks
   * The subject of the email.
   * 
   * @example
   * 黑色星期五，专属折扣来袭
   */
  subject?: string;
  /**
   * @remarks
   * The plain text body of the email.
   * 
   * Note: HtmlBody and TextBody are used for different types of email content. You must specify one of them.
   * 
   * The new SDK uses Body for parameter passing with a size limit of approximately 8 MB (Java 1.4.0 and later, Python3 1.4.0 and later, PHP 1.4.0 and later).
   * 
   * @example
   * 全场九折，仅限今日
   */
  textBody?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      htmlBody: 'HtmlBody',
      subject: 'Subject',
      textBody: 'TextBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      htmlBody: 'string',
      subject: 'string',
      textBody: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMailRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address configured in the management console.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * Valid values:
   * - 0: random account
   * - 1: sender address.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @remarks
   * Valid values:
   * - 1: Enables data tracking.
   * - 0 (default): Disables data tracking.
   * 
   * @example
   * 0
   */
  clickTrace?: string;
  /**
   * @remarks
   * Specifies whether to enable domain-level authentication.
   * 
   * Valid values:
   * - true
   * - false
   * 
   * Use this parameter only for domain-level authentication. Ignore it for sender address-level authentication.
   * 
   * 1. Create the address domain-auth-created-by-system@example.com in the console. Keep the prefix before @ unchanged and replace the suffix with your own domain name.
   * 
   * 2.
   * 
   * **API scenario**
   * 
   * Set AccountName to the domain name. The recipient sees domain-auth-created-by-system@example.com as the sender.
   * 
   * **SMTP scenario**
   * 
   * a. Call the ModifyPWByDomain operation to set the domain password.
   * 
   * b. Authenticate with the domain name and the configured password. Pass a custom address such as user@example.com as the actual sender (mailfrom). The recipient sees user@example.com as the sender.
   * 
   * @example
   * true
   */
  domainAuth?: boolean;
  /**
   * @remarks
   * The email header settings.
   * 
   * Both standard and non-standard fields must comply with the syntax requirements for headers defined in the standard. A maximum of 10 headers can be passed through the headers field when sending emails via API. Headers that exceed this limit are ignored. SMTP has no such limit.
   * 
   * 1. Standard fields
   * 
   * Message-ID, List-Unsubscribe, List-Unsubscribe-Post
   * 
   * Standard fields overwrite the original values in the email header.
   * 
   * 2. Non-standard fields
   * 
   * Case-insensitive.
   * 
   * a. Fields prefixed with X-User- (not pushed to EventBridge or Message Service (MNS). This restriction applies only to API. SMTP allows any custom fields.)
   * 
   * b. Fields prefixed with X-User-Notify- (pushed to EventBridge and Message Service (MNS). Both API and SMTP are supported.)
   * 
   * When pushed to EventBridge or MNS, these fields are included under the header field.
   * 
   * @example
   * {
   *       "Message-ID": "<d52ce63e-a0d5-4f95-b6a9-e1256a44f5fb@example.net>",
   *       "X-User-UID1": "UID-1-000001",
   *       "X-User-UID2": "UID-2-000001",
   *       "X-User-Notify-UID1": "UID-3-000001",
   *       "X-User-Notify-UID2": "UID-4-000001"
   * 	  
   * }
   */
  headers?: string;
  /**
   * @remarks
   * The ID of the dedicated IP address pool. Users who have purchased dedicated IP addresses can use this parameter to specify the outbound IP address for this email sending task.
   * 
   * @example
   * e4xxxxxe-4xx0-4xx3-8xxa-74cxxxxx1cef
   */
  ipPoolId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The recipient list. The number of recipients cannot exceed 100. Specify this parameter or ReceiversName. If both Receivers and ReceiversName are specified, ReceiversName takes precedence.
   * 
   * Example: [{"To":["Jackie@example.com"],"TemplateData":{"UserName":"Jackie"}},{"To":["Tom@example.com"],"TemplateData":{"UserName":"Tom"}}].
   */
  receivers?: BatchSendMailRequestReceivers[];
  /**
   * @remarks
   * The name of a pre-created recipient list that has recipients uploaded.
   * 
   * Note:
   * 
   * The number of recipients in the list must not exceed the remaining daily quota. Otherwise, the email sending fails.
   * 
   * Do not delete the recipient list until at least 10 minutes after the task is triggered. Otherwise, the email sending may fail.
   * 
   * @example
   * test2
   */
  receiversName?: string;
  /**
   * @remarks
   * The reply-to address.
   * 
   * @example
   * test2***@example.net
   */
  replyAddress?: string;
  /**
   * @remarks
   * The alias of the reply-to address.
   * 
   * @example
   * 小红
   */
  replyAddressAlias?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag name of the email.
   * 
   * @example
   * test3
   */
  tagName?: string;
  /**
   * @remarks
   * The custom email content. You can directly specify the content without creating a template in advance. Specify this parameter or TemplateName. If both TemplateContent and TemplateName are specified, TemplateName takes precedence.
   */
  templateContent?: BatchSendMailRequestTemplateContent;
  /**
   * @remarks
   * The name of a pre-created and approved template.
   * 
   * @example
   * test1
   */
  templateName?: string;
  /**
   * @remarks
   * The filtering level. For more information, see [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
   * Valid values:
   * - disabled: No filtering is applied.
   * - default: The default policy is used. Batch addresses are filtered at the sender address level.
   * - mailfrom: Filtering at the sender address level.
   * - mailfrom_domain: Filtering at the sender domain level.
   * - edm_id: Filtering at the account level.
   * 
   * @example
   * mailfrom_domain
   */
  unSubscribeFilterLevel?: string;
  /**
   * @remarks
   * The type of the generated unsubscribe link. For more information, see [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
   * Valid values:
   * - disabled: No unsubscribe link is generated.
   * - default: The default policy is used. An unsubscribe link is generated when emails are sent from a batch-type sender address to specific domains that contain keywords such as "gmail", "yahoo", "google", "aol.com", "hotmail", "outlook", or "ymail.com".
   * 
   * The display language is automatically determined based on the recipient\\"s browser settings.
   * 
   * @example
   * default
   */
  unSubscribeLinkType?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      addressType: 'AddressType',
      clickTrace: 'ClickTrace',
      domainAuth: 'DomainAuth',
      headers: 'Headers',
      ipPoolId: 'IpPoolId',
      ownerId: 'OwnerId',
      receivers: 'Receivers',
      receiversName: 'ReceiversName',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagName: 'TagName',
      templateContent: 'TemplateContent',
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
      domainAuth: 'boolean',
      headers: 'string',
      ipPoolId: 'string',
      ownerId: 'number',
      receivers: { 'type': 'array', 'itemType': BatchSendMailRequestReceivers },
      receiversName: 'string',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagName: 'string',
      templateContent: BatchSendMailRequestTemplateContent,
      templateName: 'string',
      unSubscribeFilterLevel: 'string',
      unSubscribeLinkType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    if(this.templateContent && typeof (this.templateContent as any).validate === 'function') {
      (this.templateContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

