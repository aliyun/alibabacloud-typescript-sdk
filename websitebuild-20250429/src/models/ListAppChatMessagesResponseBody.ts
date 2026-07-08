// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppChatMessagesResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The bot ID.
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * The unique ID of a single message.
   * 
   * @example
   * chat-xrz3etcl2bsygwlx8g
   */
  chatId?: string;
  /**
   * @remarks
   * The current chat status.
   * 
   * @example
   * created
   */
  chatStatus?: string;
  /**
   * @remarks
   * The ID of the data API operation that is called.
   * 
   * @example
   * {\\"code\\": \\"200\\", \\"success\\": True, \\"content\\": True, \\"requestId\\": \\"028993DE-097E-5F4E-AC48-64A2D5ED5F30\\", \\"businessError\\": False, \\"message\\": \\"success\\", \\"httpStatusCode\\": 200}
   */
  content?: string;
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * image/png
   */
  contentType?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * 872be9bc-3097-433d-b462-596202455102
   */
  conversationId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1740479834
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * ee60f5a6-88ca-4074-ad37-515f065bbbd2
   */
  messageId?: string;
  /**
   * @remarks
   * The business extension metadata in Map format. The value must be a JSON string.
   * 
   * @example
   * {\\"appId\\":\\"WS20260506101154000001\\",\\"inputTokens\\":1148,\\"outputTokens\\":60}
   */
  metaData?: string;
  /**
   * @remarks
   * The region sequence number. This parameter is deprecated.
   * 
   * @example
   * 1
   */
  no?: number;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - user: user
   * 
   * - assistant: assistant
   * 
   * - system: system
   * - function: function
   * 
   * - plugin: plug-in
   * 
   * - tool: tool
   * 
   * @example
   * LoC
   */
  role?: string;
  /**
   * @remarks
   * The section ID of the check item.
   * 
   * @example
   * 11
   */
  sectionId?: string;
  /**
   * @remarks
   * The site ID. You can obtain this value by calling the [ListSites](~~ListSites~~) operation.
   * 
   * @example
   * 865181640657408
   */
  siteId?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * IMAGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      chatId: 'ChatId',
      chatStatus: 'ChatStatus',
      content: 'Content',
      contentType: 'ContentType',
      conversationId: 'ConversationId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      messageId: 'MessageId',
      metaData: 'MetaData',
      no: 'No',
      role: 'Role',
      sectionId: 'SectionId',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      chatId: 'string',
      chatStatus: 'string',
      content: 'string',
      contentType: 'string',
      conversationId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      messageId: 'string',
      metaData: 'string',
      no: 'number',
      role: 'string',
      sectionId: 'string',
      siteId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppChatMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied detail.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error arguments.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The number of entries per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response data.
   */
  module?: ListAppChatMessagesResponseBodyModule[];
  /**
   * @remarks
   * The token for the next query. This parameter is empty if no more results exist.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.EROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      maxResults: 'MaxResults',
      module: 'Module',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      maxResults: 'number',
      module: { 'type': 'array', 'itemType': ListAppChatMessagesResponseBodyModule },
      nextToken: 'string',
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

