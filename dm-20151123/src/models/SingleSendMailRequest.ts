// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleSendMailRequestAttachments extends $dara.Model {
  /**
   * @remarks
   * The filename of the attachment.
   * 
   * @example
   * test.txt
   */
  attachmentName?: string;
  /**
   * @remarks
   * The local file path of the attachment that the SDK will use.
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

export class SingleSendMailRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * The variables and their values for the template.
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

export class SingleSendMailRequest extends $dara.Model {
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
   * `0`: A random account.
   * 
   * `1`: A sender address.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @remarks
   * This feature is available only through the latest SDKs. It is not supported for OpenAPI calls or signature-based authentication. For more information, see [How do I send an email with an attachment by using an SDK?](https://help.aliyun.com/document_detail/2937843.html).
   */
  attachments?: SingleSendMailRequestAttachments[];
  /**
   * @remarks
   * - A comma-separated list of BCC recipients.
   * 
   * - The system sends a copy of the email to each BCC recipient. The BCC information is hidden from all recipients, including those specified in `ToAddress` and `BccAddress`.
   * 
   * - To protect privacy, email tracking features (such as open and click tracking) are disabled for emails sent to BCC recipients. However, billing and sending status are still tracked.
   * 
   * - A maximum of two BCC recipients are allowed per request.
   * 
   * Note: The `SingleSendMail` API operation does not support a CC field. To send carbon copies, use SMTP.
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
   * Specifies whether to enable click tracking. Valid values: `"1"` enables click tracking, and `"0"` disables it (default).
   * 
   * @example
   * 0
   */
  clickTrace?: string;
  /**
   * @remarks
   * Specifies whether to enable domain-level authentication.
   * 
   * - `true`
   * 
   * - `false`
   * 
   * This parameter is used only for domain-level authentication. Ignore it for sender address-level authentication.
   * 
   * 1\\. Create the address `domain-auth-created-by-system@example.com` in the console. The prefix must be fixed, and the suffix must be your domain.
   * 
   * 2\\.
   * 
   * **API scenario**
   * 
   * Set `AccountName` to your domain. Recipients will see the sender as `domain-auth-created-by-system@example.com`.
   * 
   * **SMTP scenario**
   * 
   * a. Call the `ModifyPWByDomain` API operation to set a password for the domain.
   * 
   * b. Authenticate with the domain and the configured password. Pass a custom address, such as `user@example.com`, as the actual sender in the `MAIL FROM` command. Recipients will see `user@example.com` as the sender.
   * 
   * @example
   * true
   */
  domainAuth?: boolean;
  /**
   * @remarks
   * The sender name. It must be 15 characters or shorter.
   * 
   * For example, if you set the sender name to "Xiaohong" and the sender address is `test***@example.net`, the recipient sees the sender as "Xiaohong" \\<test\\*\\*\\*@example.net>.
   * 
   * @example
   * Jane
   */
  fromAlias?: string;
  /**
   * @remarks
   * Custom email header settings.
   * 
   * Both standard and non-standard fields must comply with standard header syntax. You can specify up to 10 headers for an API call. Excess headers are ignored. This limit does not apply to SMTP.
   * 
   * 1\\. Standard fields
   * 
   * `Message-ID`, `List-Unsubscribe`, `List-Unsubscribe-Post`
   * 
   * Standard fields overwrite existing values in the email header.
   * 
   * 2\\. Non-standard fields
   * 
   * Case-insensitive.
   * 
   * a. Fields starting with `X-User-`: These are not pushed to EventBridge or Message Service (MNS). This prefix is required only for API calls, not for SMTP.
   * 
   * b. Fields starting with `X-User-Notify-`: These are pushed to EventBridge and MNS. This is supported for both API and SMTP calls.
   * 
   * When pushed to EventBridge or MNS, the header object will contain these fields.
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
   * Note: You must specify either `HtmlBody` or `TextBody`.
   * 
   * - The size of the body is limited to approximately 80 KB when passed as a URL parameter.
   * 
   * - For recent SDKs (Java 1.4.0+, Python 3 1.4.0+, and PHP 1.4.0+), the request body is limited to approximately 8 MB.
   * 
   * @example
   * body
   */
  htmlBody?: string;
  /**
   * @remarks
   * The ID of the dedicated IP pool. If you have purchased dedicated IPs, you can use this parameter to select which dedicated IP pool to use for sending the email. For more information, see [Dedicated IP](https://help.aliyun.com/document_detail/2932088.html).
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
   * The name displayed for the reply-to address.
   * 
   * @example
   * Jane
   */
  replyAddressAlias?: string;
  /**
   * @remarks
   * Specifies whether to use the default reply-to address configured in the console. This address must be verified. Valid values: true, false.
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
   * The subject of the email, with a maximum length of 256 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Subject
   */
  subject?: string;
  /**
   * @remarks
   * A tag for categorizing email batches, which you can create in the Direct Mail console. Tags allow you to query the sending status of each batch and are required if you enable email tracking. The tag must be 1 to 128 characters long and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  tagName?: string;
  /**
   * @remarks
   * The template information for sending a templated email.
   */
  template?: SingleSendMailRequestTemplate;
  /**
   * @remarks
   * The text body of the email.
   * 
   * Note: You must specify either `HtmlBody` or `TextBody`.
   * 
   * - The size of the body is limited to approximately 80 KB when passed as a URL parameter.
   * 
   * - For recent SDKs (Java 1.4.0+, Python 3 1.4.0+, and PHP 1.4.0+), the request body is limited to approximately 8 MB.
   * 
   * @example
   * body
   */
  textBody?: string;
  /**
   * @remarks
   * The destination email address(es). To specify multiple addresses, separate them with commas (up to 100).
   * 
   * This parameter is required.
   * 
   * @example
   * test1***@example.net
   */
  toAddress?: string;
  /**
   * @remarks
   * The filtering level. For more information, see [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
   * 
   * `disabled`: No filtering.
   * 
   * `default`: Uses the default policy. For batch addresses, filtering is applied at the sender address level.
   * 
   * `mailfrom`: Filters at the sender address level.
   * 
   * `mailfrom_domain`: Filters at the sender domain level.
   * 
   * `edm_id`: Filters at the account level.
   * 
   * @example
   * mailfrom_domain
   */
  unSubscribeFilterLevel?: string;
  /**
   * @remarks
   * `disabled`: Does not generate an unsubscribe link.
   * 
   * `default`: Uses the default policy. For batch sender addresses, an unsubscribe link is generated when sending to specific domains containing keywords such as "gmail", "yahoo",
   * 
   * "google", "aol.com", "hotmail",
   * 
   * "outlook", and "ymail.com". For more information, see [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
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
      attachments: { 'type': 'array', 'itemType': SingleSendMailRequestAttachments },
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
      template: SingleSendMailRequestTemplate,
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

