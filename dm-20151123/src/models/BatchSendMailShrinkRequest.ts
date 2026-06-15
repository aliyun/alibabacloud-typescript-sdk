// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSendMailShrinkRequest extends $dara.Model {
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
   * - true
   * 
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
   * b. Authenticate with the domain name and the configured password. Set the actual sender (mailfrom) to a custom address such as user@example.com. The recipient sees user@example.com as the sender.
   * 
   * @example
   * true
   */
  domainAuth?: boolean;
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
   * a. Fields prefixed with X-User- (not pushed to EventBridge or Message Service (MNS). This restriction applies to API only. SMTP allows any custom fields.)
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
   * The ID of the dedicated IP address pool. Users who have purchased dedicated IP addresses can use this parameter to specify the outbound IP address for this email sending.
   * 
   * @example
   * e4xxxxxe-4xx0-4xx3-8xxa-74cxxxxx1cef
   */
  ipPoolId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The recipient list. The number of recipients must not exceed 100. Use this parameter or ReceiversName. If both Receivers and ReceiversName are specified, ReceiversName takes precedence.
   * 
   * Example: [{"To":["Jackie@example.com"],"TemplateData":{"UserName":"Jackie"}},{"To":["Tom@example.com"],"TemplateData":{"UserName":"Tom"}}].
   */
  receiversShrink?: string;
  /**
   * @remarks
   * The name of a pre-created recipient list that has recipients uploaded.
   * 
   * > **Note**
   * 
   * > The number of recipients in the list must not exceed the remaining daily quota. Otherwise, the email sending fails.
   * 
   * > Wait at least 10 minutes after triggering the task before deleting the recipient list. Otherwise, the email sending may fail.
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
   * The name of the email tag.
   * 
   * @example
   * test3
   */
  tagName?: string;
  /**
   * @remarks
   * The custom email content. Directly specify the content without creating a template in advance. Use this parameter or TemplateName. If both TemplateContent and TemplateName are specified, TemplateName takes precedence.
   */
  templateContentShrink?: string;
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
   * - disabled: No filtering is applied.
   * - default: Uses the default policy. Batch addresses use sender address-level filtering.
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
   * The type of the generated unsubscribe link. For more information, see [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
   * - disabled: No unsubscribe link is generated.
   * - default: Uses the default policy. An unsubscribe link is generated when a batch-type sender address sends emails to specific domains, such as domains containing keywords "gmail", "yahoo", "google", "aol.com", "hotmail", "outlook", or "ymail.com".
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
      receiversShrink: 'Receivers',
      receiversName: 'ReceiversName',
      replyAddress: 'ReplyAddress',
      replyAddressAlias: 'ReplyAddressAlias',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagName: 'TagName',
      templateContentShrink: 'TemplateContent',
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
      receiversShrink: 'string',
      receiversName: 'string',
      replyAddress: 'string',
      replyAddressAlias: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagName: 'string',
      templateContentShrink: 'string',
      templateName: 'string',
      unSubscribeFilterLevel: 'string',
      unSubscribeLinkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

