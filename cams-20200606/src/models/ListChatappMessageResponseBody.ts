// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatappMessageResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  businessNumber?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  channelType?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  clientAcceptStatusName?: string;
  /**
   * @example
   * 示例值示例值
   */
  clientReadStatus?: string;
  /**
   * @example
   * 示例值示例值
   */
  clientReadStatusName?: string;
  /**
   * @example
   * 示例值示例值
   */
  conversationId?: string;
  /**
   * @example
   * 示例值示例值
   */
  eventAction?: string;
  /**
   * @example
   * 示例值
   */
  eventActionName?: string;
  /**
   * @example
   * 示例值
   */
  failBackContent?: string;
  /**
   * @example
   * Y
   */
  failBackFlag?: string;
  /**
   * @example
   * 示例值示例值
   */
  failReason?: string;
  /**
   * @example
   * 示例值示例值
   */
  languageCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值
   */
  messageId?: string;
  /**
   * @example
   * 示例值示例值
   */
  messageSource?: string;
  /**
   * @example
   * 示例值示例值
   */
  messageStatus?: string;
  /**
   * @example
   * 示例值
   */
  messageStatusName?: string;
  /**
   * @example
   * 示例值示例值
   */
  messageType?: string;
  /**
   * @example
   * 示例值示例值
   */
  messageTypeName?: string;
  /**
   * @example
   * 示例值示例值
   */
  month?: string;
  /**
   * @example
   * 示例值示例值
   */
  sendTime?: string;
  /**
   * @example
   * 示例值示例值
   */
  templateCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  templateName?: string;
  /**
   * @example
   * 示例值示例值
   */
  type?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  uniqueMessageId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      clientAcceptStatusName: 'ClientAcceptStatusName',
      clientReadStatus: 'ClientReadStatus',
      clientReadStatusName: 'ClientReadStatusName',
      conversationId: 'ConversationId',
      eventAction: 'EventAction',
      eventActionName: 'EventActionName',
      failBackContent: 'FailBackContent',
      failBackFlag: 'FailBackFlag',
      failReason: 'FailReason',
      languageCode: 'LanguageCode',
      message: 'Message',
      messageId: 'MessageId',
      messageSource: 'MessageSource',
      messageStatus: 'MessageStatus',
      messageStatusName: 'MessageStatusName',
      messageType: 'MessageType',
      messageTypeName: 'MessageTypeName',
      month: 'Month',
      sendTime: 'SendTime',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      type: 'Type',
      uniqueMessageId: 'UniqueMessageId',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      channelType: 'string',
      clientAcceptStatusName: 'string',
      clientReadStatus: 'string',
      clientReadStatusName: 'string',
      conversationId: 'string',
      eventAction: 'string',
      eventActionName: 'string',
      failBackContent: 'string',
      failBackFlag: 'string',
      failReason: 'string',
      languageCode: 'string',
      message: 'string',
      messageId: 'string',
      messageSource: 'string',
      messageStatus: 'string',
      messageStatusName: 'string',
      messageType: 'string',
      messageTypeName: 'string',
      month: 'string',
      sendTime: 'string',
      templateCode: 'string',
      templateName: 'string',
      type: 'string',
      uniqueMessageId: 'string',
      userNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatappMessageResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  code?: string;
  data?: ListChatappMessageResponseBodyData[];
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListChatappMessageResponseBodyData },
      message: 'string',
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

