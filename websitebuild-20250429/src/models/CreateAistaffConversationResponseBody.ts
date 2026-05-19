// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIStaffConversationResponseBodyModule extends $dara.Model {
  /**
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @example
   * 53467af9-8c4e-4498-9032-1f26978007f8
   */
  chatId?: string;
  /**
   * @example
   * 8642d886-0322-43a9-b12f-6629b067978c
   */
  conversationId?: string;
  /**
   * @example
   * 11
   */
  sectionId?: string;
  /**
   * @example
   * 865181640657408
   */
  siteId?: string;
  /**
   * @example
   * Feel Like Makin\\" Love
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      chatId: 'ChatId',
      conversationId: 'ConversationId',
      sectionId: 'SectionId',
      siteId: 'SiteId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      chatId: 'string',
      conversationId: 'string',
      sectionId: 'string',
      siteId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIStaffConversationResponseBody extends $dara.Model {
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
   * spring-cloud-b
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
  module?: CreateAIStaffConversationResponseBodyModule;
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
      module: CreateAIStaffConversationResponseBodyModule,
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

