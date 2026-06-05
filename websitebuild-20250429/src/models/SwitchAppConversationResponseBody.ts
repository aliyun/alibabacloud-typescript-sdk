// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchAppConversationResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 12343131221311
   */
  aliyunPk?: string;
  /**
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @example
   * 123
   */
  chatNum?: number;
  /**
   * @example
   * 8642d886-0322-43a9-b12f-6629b067978c
   */
  conversationId?: string;
  /**
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @example
   * {\\"appId\\":\\"WS20260504134737000001\\",\\"inputTokens\\":1395,\\"outputTokens\\":38}
   */
  metaData?: string;
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
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      botId: 'BotId',
      chatNum: 'ChatNum',
      conversationId: 'ConversationId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      metaData: 'MetaData',
      sectionId: 'SectionId',
      siteId: 'SiteId',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      botId: 'string',
      chatNum: 'number',
      conversationId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      metaData: 'string',
      sectionId: 'string',
      siteId: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchAppConversationResponseBody extends $dara.Model {
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
   * watermark
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
  module?: SwitchAppConversationResponseBodyModule;
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
      module: SwitchAppConversationResponseBodyModule,
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

