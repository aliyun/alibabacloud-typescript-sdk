// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleSendMailShrinkRequestAttachments extends $dara.Model {
  /**
   * @remarks
   * This feature is available only in the latest SDK. It is not supported by OpenAPI or signature mechanisms.
   * 
   * @example
   * test.txt
   */
  attachmentName?: string;
  /**
   * @remarks
   * This feature is available only in the latest SDK. It is not supported by OpenAPI or signature mechanisms.
   * 
   * @example
   * C:\\Users\\Downloads\\test.txt
   */
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
   * The sender address configured in the Direct Mail console.
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
   * 0: Random account
   * 
   * 1: Sender address
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @remarks
   * This feature is available only in the latest software development kit (SDK). It is not supported by OpenAPI or signature mechanisms. For more information, see [How do I send an email with attachments using an SDK?]().
   */
  attachments?: SingleSendMailShrinkRequestAttachments[];
  /**
   * @remarks
   * - The list of blind carbon copy (BCC) recipients.
   * 
   * - A copy of the email is sent to each BCC address. The BCC information is not visible to any recipient, including those in the ToAddress and BccAddress fields.
   * 
   * - To protect the privacy of BCC recipients, email tracking is disabled by default for emails sent to BCC addresses. This means that behavioral data, such as open rates and click-through rates, is not recorded for BCC emails. However, billing, sending details, and sending status statistics are the same as for regular emails.
   * 
   * - You can specify up to two BCC recipients for each email.
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
   * 1: Enables data tracking.
   * 
   * 0 (default): Disables data tracking.
   * 
   * @example
   * 0
   */
  clickTrace?: string;
  /**
   * @remarks
   * Enable domain-level authentication.
   * 
   * - true
   * 
   * - false
   * 
   * Use this only for domain-level authentication. Ignore it for sender address-level authentication.
   * 
   * 1\\. Create the \\`domain-auth-created-by-system\\@example.com\\` address in the console. Keep the prefix before the at sign (@) fixed and use your own domain as the suffix.
   * 
   * 2\\.
   * 
   * **API scenario**
   * 
   * Set \\`AccountName\\` to your domain. The recipient sees the sender as \\`domain-auth-created-by-system\\@example.com\\`.
   * 
   * **SMTP scenario**
   * 
   * a. Set the domain password using the \\`ModifyPWByDomain\\` API.
   * 
   * b. Authenticate using the domain and the set password. For the actual sender, pass a custom address, such as \\`user\\@example.com\\`, in the \\`mailfrom\\` field. The recipient sees the sender as \\`user\\@example.com\\`.
   * 
   * @example
   * true
   */
  domainAuth?: boolean;
  /**
   * @remarks
   * The nickname of the sender. The nickname must be fewer than 15 characters.
   * 
   * For example, if you set the nickname to "Xiao Hong" and the sender address is test\\*\\*\\*@example.net, the recipient sees the sender as "Xiao Hong" \\<test\\*\\*\\*@example.net>.
   * 
   * @example
   * 小红
   */
  fromAlias?: string;
  /**
   * @remarks
   * Message header settings
   * 
   * Both standard and non-standard fields must follow the syntax rules for message headers. The API supports a maximum of 10 headers in the headers field. Any headers exceeding this limit are ignored. SMTP, however, does not have this limit.
   * 
   * 1\\. Standard fields
   * 
   * Message-ID, List-Unsubscribe, List-Unsubscribe-Post
   * 
   * Standard fields overwrite existing values in the message header.
   * 
   * 2\\. Non-standard fields
   * 
   * Case-insensitive
   * 
   * a. Fields that start with X-User- (These are not pushed to the EventBridge event bus or Message Service MNS. They are required only for the API, whereas SMTP supports any custom header.)
   * 
   * b. Fields that start with X-User-Notify- (These are pushed to the EventBridge event bus and Message Service MNS, and are supported by both the API and SMTP.)
   * 
   * When pushed to EventBridge or MNS, these fields appear in the header field.
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
   * Note: Specify HtmlBody or TextBody.
   * 
   * - The size of the parameter passed in a URL is limited to approximately 80 KB.
   * 
   * - The new SDK limits the body parameter to approximately 8 MB (Java 1.4.0 and later, Python 3 1.4.0 and later, PHP 1.4.0 and later).
   * 
   * @example
   * body
   */
  htmlBody?: string;
  /**
   * @remarks
   * The ID of the dedicated IP address pool. If you purchased dedicated IP addresses, use this parameter to specify the outbound IP address for the current email. For more information, see [Dedicated IPs]().
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
   * The nickname of the reply-to address.
   * 
   * @example
   * 小红
   */
  replyAddressAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the reply-to address configured in the console. The reply-to address must be verified. Valid values: true and false.
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
   * The subject of the email. The subject cannot exceed 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Subject
   */
  subject?: string;
  /**
   * @remarks
   * The email tag that you create in the Direct Mail console. Use tags to classify email batches and query the sending status of each batch. If email tracking is enabled, you must specify an email tag.
   * The tag can be 1 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  tagName?: string;
  /**
   * @remarks
   * The template information for sending template-based emails.
   */
  templateShrink?: string;
  /**
   * @remarks
   * The text body of the email.
   * 
   * Note: Specify HtmlBody or TextBody.
   * 
   * - The size of the parameter passed in a URL is limited to approximately 80 KB.
   * 
   * - The new SDK limits the body parameter to approximately 8 MB (Java 1.4.0 and later, Python 3 1.4.0 and later, PHP 1.4.0 and later).
   * 
   * @example
   * body
   */
  textBody?: string;
  /**
   * @remarks
   * The destination address. To specify multiple addresses, separate them with commas (,). You can specify a maximum of 100 addresses. Recipient groups are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test1***@example.net
   */
  toAddress?: string;
  /**
   * @remarks
   * The filtering level. For more information, see [Unsubscribe link generation and filtering mechanism]().
   * 
   * disabled: No filtering.
   * 
   * default: The default policy is used. Batch addresses are filtered at the sender address level.
   * 
   * mailfrom: Filters at the sender address level.
   * 
   * mailfrom_domain: Filters at the email domain level.
   * 
   * edm_id: Filters at the account level.
   * 
   * @example
   * mailfrom_domain
   */
  unSubscribeFilterLevel?: string;
  /**
   * @remarks
   * disabled: No link is generated.
   * 
   * default: The default policy is used. An unsubscribe link is generated for batch emails sent to specific domains, such as domains that contain keywords like "gmail", "yahoo",
   * "google", "aol.com", "hotmail",
   * "outlook", or "ymail.com". For more information, see [Unsubscribe link generation and filtering mechanism]().
   * 
   * The display language is automatically detected based on the recipient\\"s browser settings.
   * 
   * "outlook", or "ymail.com". For more information, see [Unsubscribe link generation and filtering mechanism]().
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

