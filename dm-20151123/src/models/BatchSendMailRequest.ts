// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSendMailRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address configured in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * - 0: Random account
   * 
   * - 1: Sender address
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @remarks
   * - 1: Enables the data tracking feature.
   * 
   * - 0 (default): Disables the data tracking feature.
   * 
   * @example
   * 0
   */
  clickTrace?: string;
  /**
   * @remarks
   * Enables domain-level authentication.
   * 
   * - true
   * 
   * - false
   * 
   * Use this parameter only for domain-level authentication. Ignore it for sender address-level authentication.
   * 
   * 1\\. The console creates the address \\`domain-auth-created-by-system\\@example.com\\`. Do not change the prefix before the at sign (@). Replace the domain suffix with your own domain.
   * 
   * 2\\.
   * 
   * **API scenario**
   * 
   * Set \\`AccountName\\` to your domain. Recipients see \\`domain-auth-created-by-system\\@example.com\\` as the sender.
   * 
   * **SMTP scenario**
   * 
   * a. Use the \\`ModifyPWByDomain\\` API to set a password for your domain.
   * 
   * b. Authenticate using your domain and the password. Set the actual sender address (\\`mailfrom\\`) to a custom address, such as \\`user\\@example.com\\`. Recipients see \\`user\\@example.com\\` as the sender.
   * 
   * @example
   * true
   */
  domainAuth?: boolean;
  /**
   * @remarks
   * Message header settings.
   * 
   * All fields, standard or non-standard, must follow standard header syntax. For API calls, the \\`headers\\` field supports up to 10 headers. Any headers beyond this limit are ignored. SMTP does not have a header limit.
   * 
   * 1\\. Standard fields
   * 
   * \\`Message-ID\\`, \\`List-Unsubscribe\\`, \\`List-Unsubscribe-Post\\`
   * 
   * Standard fields overwrite existing values in the message header.
   * 
   * 2\\. Non-standard fields
   * 
   * Case-insensitive
   * 
   * a. Start with \\`X-User-\\`. These fields are not pushed to EventBridge or Message Service. They are required only for API calls. SMTP supports any custom header.
   * 
   * b. Start with \\`X-User-Notify-\\`. These fields are pushed to EventBridge and Message Service. They are supported by both API and SMTP.
   * 
   * When pushed to EventBridge or Message Service, these fields appear under the \\`headers\\` object.
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
   * The ID of the dedicated IP address pool. If you purchased dedicated IP addresses, use this parameter to specify the egress IP address for sending the email.
   * 
   * @example
   * e4xxxxxe-4xx0-4xx3-8xxa-74cxxxxx1cef
   */
  ipPoolId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of a pre-created recipient list to which recipients have been uploaded.
   * 
   * Note:
   * 
   * The number of recipients in the list must not exceed your remaining daily quota. Otherwise, email sending fails.
   * 
   * Do not delete the recipient list for at least 10 minutes after triggering the task. Otherwise, email sending may fail.
   * 
   * This parameter is required.
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
   * The alias for the reply-to address.
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
   * The name of a pre-created and approved template.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  templateName?: string;
  /**
   * @remarks
   * The filtering level. For more information, see [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
   * 
   * - disabled: No filtering.
   * 
   * - default: Uses the default policy. Batch emails are filtered at the sender address level.
   * 
   * - mailfrom: Filters at the sender address level.
   * 
   * - mailfrom_domain: Filters at the email domain level.
   * 
   * - edm_id: Filters at the account level.
   * 
   * @example
   * mailfrom_domain
   */
  unSubscribeFilterLevel?: string;
  /**
   * @remarks
   * The type of unsubscribe link to generate. For more information, see [Unsubscribe link generation and filtering mechanism](https://help.aliyun.com/document_detail/2689048.html).
   * 
   * - disabled: Does not generate a link.
   * 
   * - default: Uses the default policy. An unsubscribe link is generated when batch emails are sent from a sender address to specific domains, such as those containing the keywords "gmail", "yahoo", "google", "aol.com", "hotmail", "outlook", or "ymail.com".
   * 
   * The language of the unsubscribe link matches the recipient\\"s browser language setting.
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
      domainAuth: 'boolean',
      headers: 'string',
      ipPoolId: 'string',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

