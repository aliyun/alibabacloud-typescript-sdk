// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConversationMessagesResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Bot ID
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * Chat ID.
   * 
   * @example
   * chat-xrz3etcl2bsygwlx8g
   */
  chatId?: string;
  /**
   * @remarks
   * Current chat status.
   * 
   * @example
   * created
   */
  chatStatus?: string;
  /**
   * @remarks
   * The ID of the data class API invoked.
   * 
   * @example
   * {\\"DeviceName\\": u\\"\\u667a\\u80fd\\u63d2\\u5ea716A\\", \\"BlidMac\\": \\"18bc5a53351c\\", \\"DeviceModel\\": \\"ABSP21-16M\\", \\"DeviceCategory\\": u\\"\\u63d2\\u5ea7\\", \\"DeviceManufacturer\\": \\"\\", \\"DeviceType\\": 140}
   */
  content?: string;
  /**
   * @remarks
   * Content type
   * 
   * @example
   * image/png
   */
  contentType?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 872be9bc-3097-433d-b462-596202455102
   */
  conversationId?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Message ID.
   * 
   * @example
   * 5f9e88ce-f223-4447-a23e-cb574df6c97a
   */
  messageId?: string;
  /**
   * @remarks
   * Business extension metadata (in Map format, must be a JSON string).
   * 
   * @example
   * {\\"appId\\":\\"WS20260507200853000001\\",\\"inputTokens\\":1411,\\"outputTokens\\":51}
   */
  metaData?: string;
  /**
   * @remarks
   * Region ordinal number. This parameter is deprecated.
   * 
   * @example
   * 1
   */
  no?: number;
  /**
   * @remarks
   * Role of the conversation participant. Valid values include:
   * 
   * - user: User
   * 
   * - assistant: Assistant
   * 
   * - system: System
   * 
   * - function: Function
   * 
   * - plugin: Plugin
   * 
   * - tool: Tool
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * Section ID of the inspection item.
   * 
   * @example
   * 11
   */
  sectionId?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by invoking the [ListSites](~~ListSites~~) API.
   * 
   * @example
   * 865181640657408
   */
  siteId?: string;
  /**
   * @remarks
   * File type
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
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
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
      gmtCreate: 'string',
      gmtModified: 'string',
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

export class ListAppConversationMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * permission denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * is retry allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App Name.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * dynamic error message used to replace the `%s` placeholder in the **ErrMessage** response parameter.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * faulty parameter(s).
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Number of results per query.  
   * 
   * Value range: 10–100. Default Value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Response Data
   */
  module?: ListAppConversationMessagesResponseBodyModule[];
  /**
   * @remarks
   * Token for the start of the next query. It is empty if there is no next query.
   * 
   * @example
   * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
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
   * error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Reserved parameter.
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
      module: { 'type': 'array', 'itemType': ListAppConversationMessagesResponseBodyModule },
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

