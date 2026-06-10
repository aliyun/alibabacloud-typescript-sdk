// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIStaffChatMessagesResponseBodyModuleMessages extends $dara.Model {
  /**
   * @remarks
   * Bot ID.
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * Current conversation round ID
   * 
   * @example
   * 54a0bfa0-41bd-4e96-acd9-fb13c0474452
   */
  chatId?: string;
  /**
   * @remarks
   * Current session status
   * 
   * @example
   * success
   */
  chatStatus?: string;
  /**
   * @remarks
   * ID of the invoked data class API.
   * 
   * @example
   * domain cnamenwww.buyhao8.com www.buyhao8.com.a1.initrr.comn
   */
  content?: string;
  /**
   * @remarks
   * Content type
   * 
   * @example
   * application/octet-stream
   */
  contentType?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * job-675163021891846144
   */
  conversationId?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1723532098
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 1591339051000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Message ID
   * 
   * @example
   * 1dafa033-e72b-44c2-99b7-bc202c5b6198
   */
  messageId?: string;
  /**
   * @remarks
   * Business extension metadata (in Map format, must be a JSON string)
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * Indicates the role of the participant in the conversation. Valid values include:
   * 
   * - user: User
   * 
   * - assistant: Assistant
   * 
   * - system: System
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
   * 324
   */
  sectionId?: string;
  /**
   * @remarks
   * Site ID.
   * 
   * @example
   * 928636774795776
   */
  siteId?: string;
  /**
   * @remarks
   * File type
   * 
   * @example
   * SINGLE
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
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      role: 'string',
      sectionId: 'string',
      siteId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIStaffChatMessagesResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Sender type.  
   * 
   * Enumeration values:  
   * - **ADMIN**: System  
   * - **CUSTOMER**: Visitor  
   * - **AGENT**: Agent
   */
  messages?: ListAIStaffChatMessagesResponseBodyModuleMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ListAIStaffChatMessagesResponseBodyModuleMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIStaffChatMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Permission denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Is retry allowed
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
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic message. Not currently used. Please ignore.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Response data
   */
  module?: ListAIStaffChatMessagesResponseBodyModule;
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
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
      module: 'Module',
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
      module: ListAIStaffChatMessagesResponseBodyModule,
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
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

