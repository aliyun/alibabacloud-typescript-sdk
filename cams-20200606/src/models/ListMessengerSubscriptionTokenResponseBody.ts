// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessengerSubscriptionTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time of the token.
   * 
   * @example
   * 172546854885
   */
  creationTimestamp?: number;
  /**
   * @remarks
   * The custom audience ID.
   * 
   * @example
   * Example
   */
  customAudienceId?: string;
  /**
   * @remarks
   * The time when the application can send the next marketing message to the recipient.
   * 
   * @example
   * 172546854885
   */
  nextEligibleTime?: number;
  /**
   * @remarks
   * The resubscription status.
   * 
   * @example
   * Example
   */
  notificationMessagesReoptin?: string;
  /**
   * @remarks
   * The time zone of the customer.
   * 
   * @example
   * Example
   */
  notificationMessagesTimezone?: string;
  /**
   * @remarks
   * The page-scoped ID of the customer.
   * 
   * @example
   * Example
   */
  notificationMessagesToken?: string;
  /**
   * @remarks
   * The page ID of Messenger.
   * 
   * @example
   * 239***
   */
  pageId?: string;
  /**
   * @remarks
   * The customer\\"s Page-scoped ID (PSID)
   * 
   * @example
   * Example
   */
  recipientId?: string;
  /**
   * @remarks
   * The expiration time of the token.
   * 
   * @example
   * 172546854885
   */
  tokenExpiryTimestamp?: number;
  /**
   * @remarks
   * The message\\"s title
   * 
   * @example
   * Example
   */
  topicTitle?: string;
  /**
   * @remarks
   * The token status.
   * 
   * @example
   * Example
   */
  userTokenStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTimestamp: 'CreationTimestamp',
      customAudienceId: 'CustomAudienceId',
      nextEligibleTime: 'NextEligibleTime',
      notificationMessagesReoptin: 'NotificationMessagesReoptin',
      notificationMessagesTimezone: 'NotificationMessagesTimezone',
      notificationMessagesToken: 'NotificationMessagesToken',
      pageId: 'PageId',
      recipientId: 'RecipientId',
      tokenExpiryTimestamp: 'TokenExpiryTimestamp',
      topicTitle: 'TopicTitle',
      userTokenStatus: 'UserTokenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTimestamp: 'number',
      customAudienceId: 'string',
      nextEligibleTime: 'number',
      notificationMessagesReoptin: 'string',
      notificationMessagesTimezone: 'string',
      notificationMessagesToken: 'string',
      pageId: 'string',
      recipientId: 'string',
      tokenExpiryTimestamp: 'number',
      topicTitle: 'string',
      userTokenStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessengerSubscriptionTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data object.
   */
  data?: ListMessengerSubscriptionTokenResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The next page token. Pass this value to query the next page.
   * 
   * @example
   * 3399***
   */
  nextPage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ei**
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * - true: The operation is successful.
   * 
   * - false: The operation fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextPage: 'NextPage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListMessengerSubscriptionTokenResponseBodyData },
      message: 'string',
      nextPage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

