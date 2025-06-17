// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSendMailRequest extends $dara.Model {
  /**
   * @remarks
   * The sending address configured in the management console.
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
   * - 1: Sending address
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  addressType?: number;
  /**
   * @remarks
   * - 1: Enable data tracking function
   * - 0 (default): Disable data tracking function
   * 
   * @example
   * 0
   */
  clickTrace?: string;
  /**
   * @remarks
   * Currently, the standard fields that can be added to the email header are Message-ID, List-Unsubscribe, and List-Unsubscribe-Post. Standard fields will overwrite the existing values in the email header, while non-standard fields need to start with X-User- and will be appended to the email header. Currently, up to 10 headers can be passed in JSON format, and both standard and non-standard fields must comply with the syntax requirements for headers.
   * 
   * @example
   * {
   *   "Message-ID": "<msg0001@example.com>",
   *   "X-User-UID1": "UID-1-000001",
   *   "X-User-UID2": "UID-2-000001"
   * }
   */
  headers?: string;
  ipPoolId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the recipient list that has been created and uploaded. Note: The recipient list should not be deleted until at least 10 minutes after the task is triggered, otherwise it may cause sending failure.
   * 
   * This parameter is required.
   * 
   * @example
   * test2
   */
  receiversName?: string;
  /**
   * @remarks
   * Reply address
   * 
   * @example
   * test2***@example.net
   */
  replyAddress?: string;
  /**
   * @remarks
   * Alias for the reply address
   * 
   * @example
   * Lucy
   */
  replyAddressAlias?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Email tag name.
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
   * Filter level. Refer to the [Unsubscribe Function Link Generation and Filtering Mechanism](https://help.aliyun.com/document_detail/2689048.html) document.
   * - disabled: No filtering
   * - default: Use the default strategy, bulk addresses use sender address level filtering
   * - mailfrom: Sender address level filtering
   * - mailfrom_domain: Sender domain level filtering
   * - edm_id: Account level filtering
   * 
   * @example
   * mailfrom_domain
   */
  unSubscribeFilterLevel?: string;
  /**
   * @remarks
   * Type of generated unsubscribe link. Refer to the [Unsubscribe Function Link Generation and Filtering Mechanism](https://help.aliyun.com/document_detail/2689048.html) document.
   * - disabled: Not generated
   * - default: Use the default strategy: Generate an unsubscribe link when sending from a bulk email address to specific domains, such as those containing keywords like "gmail", "yahoo",
   * "google", "aol.com", "hotmail",
   * "outlook", "ymail.com", etc.
   * - zh-cn: Generated, for future content preparation
   * - en-us: Generated, for future content preparation
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

