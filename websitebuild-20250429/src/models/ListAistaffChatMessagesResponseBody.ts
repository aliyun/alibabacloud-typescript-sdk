// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIStaffChatMessagesResponseBodyModuleMessages extends $dara.Model {
  /**
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @example
   * 54a0bfa0-41bd-4e96-acd9-fb13c0474452
   */
  chatId?: string;
  /**
   * @example
   * success
   */
  chatStatus?: string;
  /**
   * @example
   * domain cnamenwww.buyhao8.com www.buyhao8.com.a1.initrr.comn
   */
  content?: string;
  /**
   * @example
   * application/octet-stream
   */
  contentType?: string;
  /**
   * @example
   * job-675163021891846144
   */
  conversationId?: string;
  /**
   * @example
   * 1723532098
   */
  gmtCreate?: string;
  /**
   * @example
   * 1591339051000
   */
  gmtModified?: string;
  /**
   * @example
   * 1dafa033-e72b-44c2-99b7-bc202c5b6198
   */
  messageId?: string;
  metaData?: { [key: string]: any };
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * 324
   */
  sectionId?: string;
  /**
   * @example
   * 928636774795776
   */
  siteId?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * or
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  errorArgs?: any[];
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
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  rootErrorMsg?: string;
  /**
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

