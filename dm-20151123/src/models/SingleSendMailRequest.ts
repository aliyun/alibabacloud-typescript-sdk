// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleSendMailRequest extends $dara.Model {
  /**
   * @remarks
   * The sending address configured in the management console.
   * 
   * This parameter is required.
   * 
   * @example
   * test***@example.net
   */
  accountName?: string;
  /**
   * @remarks
   * Address type. Values:
   * 
   * 0: Random account
   * 
   * 1: Sending address
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @remarks
   * 1: Enable data tracking function
   * 
   * 0 (default): Disable data tracking function.
   * 
   * @example
   * 0
   */
  clickTrace?: string;
  /**
   * @remarks
   * Sender nickname, with a maximum length of 15 characters.
   * 
   * For example, if the sender\\"s nickname is set to "Xiaohong" and the sending address is test***@example.net, the recipient will see the sending address as "Xiaohong" <test***@example.net>.
   * 
   * @example
   * Xiaohong
   */
  fromAlias?: string;
  /**
   * @remarks
   * Standard fields that can currently be added to the email header include Message-ID, List-Unsubscribe, and List-Unsubscribe-Post. Standard fields will overwrite existing values in the email header, while non-standard fields need to start with X-User- and will be appended to the email header.
   * Currently, up to 10 headers can be passed in JSON format, and both standard and non-standard fields must comply with the syntax requirements for headers.
   * 
   * @example
   * {
   *   "Message-ID": "<msg0001@example.com>",
   *   "X-User-UID1": "UID-1-000001",
   *   "X-User-UID2": "UID-2-000001"
   * }
   */
  headers?: string;
  /**
   * @remarks
   * Email HTML body, limited to 80K by the SDK. Note: HtmlBody and TextBody are for different types of email content, and one of them must be provided.
   * 
   * @example
   * body
   */
  htmlBody?: string;
  ownerId?: number;
  /**
   * @remarks
   * Reply-to address
   * 
   * @example
   * test2***@example.net
   */
  replyAddress?: string;
  /**
   * @remarks
   * Reply-to address nickname
   * 
   * @example
   * Xiaohong
   */
  replyAddressAlias?: string;
  /**
   * @remarks
   * Whether to enable the reply-to address configured in the management console (the status must be verified). The value range is the string `true` or `false` (not a boolean value).
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
   * Email subject, with a maximum length of 100 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Subject
   */
  subject?: string;
  /**
   * @remarks
   * A tag created in the email push console, used to categorize batches of emails sent. You can use tags to query the sending status of each batch. Additionally, if the email tracking feature is enabled, you must use an email tag when sending emails.
   * 
   * @example
   * test
   */
  tagName?: string;
  /**
   * @remarks
   * Email text body, limited to 80K by the SDK. Note: HtmlBody and TextBody are for different types of email content, and one of them must be provided.
   * 
   * @example
   * body
   */
  textBody?: string;
  /**
   * @remarks
   * Recipient addresses. Multiple email addresses can be separated by commas, with a maximum of 100 addresses (supports mailing lists).
   * 
   * This parameter is required.
   * 
   * @example
   * test1***@example.net
   */
  toAddress?: string;
  /**
   * @remarks
   * Filtering level. Refer to the [Unsubscribe Function Link Generation and Filtering Mechanism](https://help.aliyun.com/document_detail/2689048.html) document.
   * 
   * disabled: No filtering
   * 
   * default: Use the default strategy, bulk addresses use the sending address level filtering
   * 
   * mailfrom: Sending address level filtering
   * 
   * mailfrom_domain: Sending domain level filtering
   * 
   * edm_id: Account level filtering
   * 
   * @example
   * mailfrom_domain
   */
  unSubscribeFilterLevel?: string;
  /**
   * @remarks
   * Type of the generated unsubscribe link. Refer to the [Unsubscribe Function Link Generation and Filtering Mechanism](https://help.aliyun.com/document_detail/2689048.html) document.
   * 
   * disabled: Do not generate
   * 
   * default: Use the default strategy: Generate unsubscribe links for bulk-type sending addresses when sending to specific domains, such as those containing keywords like "gmail", "yahoo",
   * 
   * "google", "aol.com", "hotmail",
   * 
   * "outlook", "ymail.com", etc.
   * 
   * zh-cn: Generate, for future content preparation
   * 
   * en-us: Generate, for future content preparation
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
      fromAlias: 'FromAlias',
      headers: 'Headers',
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
      headers: 'string',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

