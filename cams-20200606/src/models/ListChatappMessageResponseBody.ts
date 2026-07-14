// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatappMessageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business phone number.
   * 
   * @example
   * 86183********
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The name of the message receiving status.
   * 
   * @example
   * Success
   */
  clientAcceptStatusName?: string;
  /**
   * @remarks
   * The message read status.
   * 
   * @example
   * success
   */
  clientReadStatus?: string;
  /**
   * @remarks
   * The message read status name.
   * 
   * @example
   * Success
   */
  clientReadStatusName?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * 805a66**************************
   */
  conversationId?: string;
  /**
   * @remarks
   * The inbound or outbound message type.
   * 
   * @example
   * DOWN
   */
  eventAction?: string;
  /**
   * @remarks
   * The name of the inbound or outbound message type. Valid values:
   * 
   * - DOWN: outbound message.
   * 
   * - UP: inbound message.
   * 
   * @example
   * DOWN
   */
  eventActionName?: string;
  /**
   * @remarks
   * The fallback content.
   * 
   * @example
   * None
   */
  failBackContent?: string;
  /**
   * @remarks
   * Indicates whether the message falls back to SMS. Valid values:
   * 
   * - Y: Yes.
   * 
   * - N: No.
   * 
   * @example
   * Y
   */
  failBackFlag?: string;
  /**
   * @remarks
   * The reason for the sending failure.
   * 
   * @example
   * timeout
   */
  failReason?: string;
  /**
   * @remarks
   * The template language. For more languages, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  languageCode?: string;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 202509*******************
   */
  messageId?: string;
  /**
   * @remarks
   * The message source.
   * 
   * @example
   * api
   */
  messageSource?: string;
  /**
   * @remarks
   * The message status.
   * 
   * @example
   * success
   */
  messageStatus?: string;
  /**
   * @remarks
   * The message status name.
   * 
   * @example
   * Success
   */
  messageStatusName?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * INTERACTIVE
   */
  messageType?: string;
  /**
   * @remarks
   * The message type name.
   * 
   * @example
   * interactive
   */
  messageTypeName?: string;
  /**
   * @remarks
   * The month of the message.
   * 
   * @example
   * 202507
   */
  month?: string;
  /**
   * @remarks
   * The sending time.
   * 
   * @example
   * 2025-07-11T01:16:49.761+00:00
   */
  sendTime?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 1103***************
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * picture_template
   */
  templateName?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * message
   */
  type?: string;
  /**
   * @remarks
   * The unique message ID.
   * 
   * @example
   * 20250911******************************
   */
  uniqueMessageId?: string;
  /**
   * @remarks
   * The user phone number.
   * 
   * @example
   * 86177********
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
  /**
   * @remarks
   * The access denied details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * - OK: The request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of returned data objects.
   */
  data?: ListChatappMessageResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 608F9CCA-B5EB-3D72-8047-B25D6D75BDEC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
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

