// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIStaffChatMessagesResponseBodyModuleMessages extends $dara.Model {
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
   * The ID of the current conversation turn.
   * 
   * @example
   * 54a0bfa0-41bd-4e96-acd9-fb13c0474452
   */
  chatId?: string;
  /**
   * @remarks
   * The current conversation status.
   * 
   * @example
   * success
   */
  chatStatus?: string;
  /**
   * @remarks
   * The ID of the data API operation that is called.
   * 
   * @example
   * domain cnamenwww.buyhao8.com www.buyhao8.com.a1.initrr.comn
   */
  content?: string;
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * application/octet-stream
   */
  contentType?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * job-675163021891846144
   */
  conversationId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1723532098
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1591339051000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 1dafa033-e72b-44c2-99b7-bc202c5b6198
   */
  messageId?: string;
  /**
   * @remarks
   * The business extension metadata in Map format. The value must be a JSON string.
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - user: User.
   * 
   * - assistant: Assistant.
   * 
   * - system: System.
   * - function: Function.
   * 
   * - plugin: Plugin.
   * 
   * - tool: Tool.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The section ID of the check item.
   * 
   * @example
   * 324
   */
  sectionId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 928636774795776
   */
  siteId?: string;
  /**
   * @remarks
   * The file type.
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
   * The sender type.
   * 
   * Valid values:
   * - **ADMIN**: System.
   * - **CUSTOMER**: Visitor.
   * - **AGENT**: Agent.
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
   * The access denied details.
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
   * or
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
   * The dynamic message. This parameter is not in use. Ignore it.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
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
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The error message.
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

