// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessengerSubscriptionTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the security token was created.
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
   * The re-subscription status.
   * 
   * @example
   * Example
   */
  notificationMessagesReoptin?: string;
  /**
   * @remarks
   * The customer\\"s time zone.
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
   * The page ID for Messenger.
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
   * The expiration time of the security token.
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
   * The status of the security token.
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
   * Details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - A return value of OK indicates that the request was successful.
   * 
   * - For a list of other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
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
   * The identifier for the next page. Pass this value to query the next page.
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
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: successful.
   * 
   * - false: failed.
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

