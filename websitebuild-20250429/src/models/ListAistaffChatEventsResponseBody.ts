// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIStaffChatEventsResponseBodyModuleEvents extends $dara.Model {
  /**
   * @example
   * {\\"Recorded\\": False}
   */
  data?: string;
  /**
   * @example
   * 10426
   */
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIStaffChatEventsResponseBodyModule extends $dara.Model {
  /**
   * @example
   * chat-xrz3etcl2bsygwlx8g
   */
  chatId?: string;
  /**
   * @example
   * 872be9bc-3097-433d-b462-596202455102
   */
  conversationId?: string;
  events?: ListAIStaffChatEventsResponseBodyModuleEvents[];
  /**
   * @example
   * event-21dd6124760a4a259ae33bbd878f6e20
   */
  lastEventId?: number;
  static names(): { [key: string]: string } {
    return {
      chatId: 'ChatId',
      conversationId: 'ConversationId',
      events: 'Events',
      lastEventId: 'LastEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      conversationId: 'string',
      events: { 'type': 'array', 'itemType': ListAIStaffChatEventsResponseBodyModuleEvents },
      lastEventId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIStaffChatEventsResponseBody extends $dara.Model {
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
  module?: ListAIStaffChatEventsResponseBodyModule;
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
      module: ListAIStaffChatEventsResponseBodyModule,
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

