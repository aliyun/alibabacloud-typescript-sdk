// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SingleSendMailAdvanceRequestAttachments extends $dara.Model {
  /**
   * @remarks
   * Supported only when using the new SDK. Not supported through OpenAPI or signature mechanism methods.
   * 
   * @example
   * test.txt
   */
  attachmentName?: string;
  /**
   * @remarks
   * Supported only when using the new SDK. Not supported through OpenAPI or signature mechanism methods.
   * 
   * @example
   * C:\\Users\\Downloads\\test.txt
   */
  attachmentUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      attachmentUrlObject: 'AttachmentUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      attachmentUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailAdvanceRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * The template variables and values.
   */
  templateData?: { [key: string]: string };
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * xxx
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateData: 'TemplateData',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateId: 'string',
    };
  }

  validate() {
    if(this.templateData) {
      $dara.Model.validateMap(this.templateData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleSendMailAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address configured in the management console.
   * 
   * This parameter is required.
   * 
   * @example
   * test***@example.net
   */
  accountName?: string;
  /**
   * @remarks
   * The address type. Valid values:
   * 
   * - 0: random account
   * - 1: sender address
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @remarks
   * Supported only when using the new SDK. Not supported through OpenAPI or signature mechanism methods. For more information, refer to [How do I send emails with attachments through the SDK?](https://help.aliyun.com/document_detail/2937843.html).
   */
  attachments?: SingleSendMailAdvanceRequestAttachments[];
  /**
   * @remarks
   * - Specifies the BCC (blind carbon copy) recipient list for the email.
   * - The system sends a copy identical to the main email content to each BCC address. The BCC information is not visible to any recipients (including ToAddress and BccAddress).
   * - To protect the privacy of BCC recipients, email tracking features are disabled by default for BCC emails. This means the system does not record behavioral data such as open rates or click-through rates for BCC emails. However, billing for sending volume, sending details, and sending status statistics remain consistent with regular emails.
   * - A maximum of 2 BCC recipients can be specified per send.
   * 
   * Note: The SingleSendMail operation does not support the Cc (carbon copy) field. Use SMTP if you need this feature.
   * 
   * @example
   * 1@example.com,2@example.com
   * 
   * **if can be null:**
   * true
   */
  bccAddress?: string;
  /**
   * @remarks
   * Specifies whether to enable data tracking. Valid values:
   * 
   * - 1: Enable data tracking.
   * - 0 (default): Disable data tracking.
   * 
   * @example
   * 0
   */
  clickTrace?: string;
  /**
   * @remarks
   * Specifies whether to enable domain-level authentication. Valid values:
   * 
   * - true
   * - false
   * 
   * Use this parameter only for domain-level authentication. Ignore it for sender address-level authentication.
   * 
   * 1. Create the address domain-auth-created-by-system@example.com in the console. Keep the prefix before @ unchanged and use your own domain name as the suffix.
   * 
   * 2.
   * 
   * **API scenario**
   * 
   * Set AccountName to a custom sender address for the domain. The recipient sees the custom sender address as the sender.
   * 
   * **SMTP scenario**
   * 
   * a. Set the domain password through the ModifyPWByDomain operation.
   * 
   * b. Authenticate using the domain name and the configured password. Pass a custom address such as user@example.com as the actual sender (mailfrom). The recipient sees user@example.com as the sender.
   * 
   * @example
   * true
   */
  domainAuth?: boolean;
  /**
   * @remarks
   * The sender nickname. The value cannot exceed 15 characters in length.
   * 
   * For example, if the sender nickname is set to "Jane" and the sender address is test***@example.net, the recipient sees the sender address as "Jane" test***@example.net.
   * 
   * @example
   * Jane
   */
  fromAlias?: string;
  /**
   * @remarks
   * The email header settings.
   * 
   * Both standard and non-standard fields must comply with the syntax requirements for headers defined in the standard. A maximum of 10 headers can be passed through the headers field when sending emails via API. Headers exceeding this limit are ignored. SMTP has no such limit.
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
   * a. Fields prefixed with X-User- (not pushed to EventBridge or Message Service MNS. This is an API-only requirement. SMTP allows any custom fields.)
   * 
   * b. Fields prefixed with X-User-Notify- (pushed to EventBridge and Message Service MNS. Both API and SMTP are supported.)
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
   * The HTML body of the email.
   * 
   * Note: HtmlBody and TextBody are used for different types of email content. You must specify one of them.
   * 
   * - The size limit for URL-based parameter passing is approximately 80 KB.
   * - The size limit for Body-based parameter passing with the new SDK is approximately 8 MB (Java 1.4.0 or later, Python3 1.4.0 or later, PHP 1.4.0 or later).
   * 
   * @example
   * body
   */
  htmlBody?: string;
  /**
   * @remarks
   * The ID of the dedicated IP address pool. Users who have purchased dedicated IP addresses can use this parameter to specify the outbound IP address for this email. For more information, refer to [Dedicated IP](https://help.aliyun.com/document_detail/2932088.html).
   * 
   * @example
   * e4xxxxxe-4xx0-4xx3-8xxa-74cxxxxx1cef
   */
  ipPoolId?: string;
  ownerId?: number;
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
   * The reply-to address nickname.
   * 
   * @example
   * Jane
   */
  replyAddressAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the reply-to address configured in the management console (the address must be verified). Valid values: true or false.
   * 
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
   * The email subject. The value cannot exceed 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Subject
   */
  subject?: string;
  /**
   * @remarks
   * The tag created in the DirectMail console. Tags are used to categorize email batches. You can query the sending status of each batch by tag. If the email tracking feature is enabled, you must use an email tag when sending emails.
   * The value must be 1 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  tagName?: string;
  /**
   * @remarks
   * The template information for template-based sending.
   * 
   * When sending with a template, the HtmlBody and TextBody values are ignored.
   */
  template?: SingleSendMailAdvanceRequestTemplate;
  /**
   * @remarks
   * The text body of the email.
   * 
   * Note: HtmlBody and TextBody are used for different types of email content. You must specify one of them.
   * 
   * - The size limit for URL-based parameter passing is approximately 80 KB.
   * - The size limit for Body-based parameter passing with the new SDK is approximately 8 MB (Java 1.4.0 or later, Python3 1.4.0 or later, PHP 1.4.0 or later).
   * 
   * @example
   * body
   */
  textBody?: string;
  /**
   * @remarks
   * The destination address. You can specify multiple email addresses separated by commas. A maximum of 100 addresses are supported (mailing lists are supported).
   * 
   * This parameter is required.
   * 
   * @example
   * test1***@example.net
   */
  toAddress?: string;
  /**
   * @remarks
   * The filtering level. For more information, refer to [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
   * 
   * Valid values:
   * 
   * - disabled: No filtering is applied.
   * - default: The default policy is used. Batch addresses use sender address-level filtering.
   * - mailfrom: Sender address-level filtering.
   * - mailfrom_domain: Sender domain-level filtering.
   * - edm_id: Account-level filtering.
   * 
   * @example
   * mailfrom_domain
   */
  unSubscribeFilterLevel?: string;
  /**
   * @remarks
   * The type of unsubscribe link. Valid values:
   * 
   * - disabled: No unsubscribe link is generated.
   * - default: The default policy is used. An unsubscribe link is generated when emails are sent from batch-type sender addresses to specific domains, such as those containing keywords "gmail", "yahoo", "google", "aol.com", "hotmail", "outlook", or "ymail.com". For more information, refer to [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
   * 
   * The display language is automatically detected based on the recipient\\"s browser settings.
   * 
   * @example
   * default
   */
  unSubscribeLinkType?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      addressType: 'AddressType',
      attachments: 'Attachments',
      bccAddress: 'BccAddress',
      clickTrace: 'ClickTrace',
      domainAuth: 'DomainAuth',
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
      template: 'Template',
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
      attachments: { 'type': 'array', 'itemType': SingleSendMailAdvanceRequestAttachments },
      bccAddress: 'string',
      clickTrace: 'string',
      domainAuth: 'boolean',
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
      template: SingleSendMailAdvanceRequestTemplate,
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
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

