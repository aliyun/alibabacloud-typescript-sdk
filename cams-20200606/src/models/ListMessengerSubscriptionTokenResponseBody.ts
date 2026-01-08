// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessengerSubscriptionTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 172546854885
   */
  creationTimestamp?: number;
  /**
   * @example
   * 示例值
   */
  customAudienceId?: string;
  /**
   * @example
   * 172546854885
   */
  nextEligibleTime?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  notificationMessagesReoptin?: string;
  /**
   * @example
   * 示例值示例值
   */
  notificationMessagesTimezone?: string;
  /**
   * @example
   * 示例值示例值
   */
  notificationMessagesToken?: string;
  /**
   * @example
   * 239***
   */
  pageId?: string;
  /**
   * @remarks
   * The customer\\"s Page-scoped ID (PSID)
   * 
   * @example
   * 示例值示例值
   */
  recipientId?: string;
  /**
   * @example
   * 172546854885
   */
  tokenExpiryTimestamp?: number;
  /**
   * @remarks
   * The message\\"s title
   * 
   * @example
   * 示例值示例值示例值
   */
  topicTitle?: string;
  /**
   * @example
   * 示例值示例值
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
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListMessengerSubscriptionTokenResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 3399***
   */
  nextPage?: string;
  /**
   * @example
   * ei**
   */
  requestId?: string;
  /**
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

