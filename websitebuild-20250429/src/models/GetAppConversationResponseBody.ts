// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConversationResponseBodyModule extends $dara.Model {
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
   * 872be9bc-3097-433d-b462-596202455102
   */
  conversationId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * None
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-10-29T10:34:13Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * {\\"appId\\":\\"WS20260507200853000001\\",\\"inputTokens\\":1411,\\"outputTokens\\":51}
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
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      botId: 'BotId',
      chatNum: 'ChatNum',
      conversationId: 'ConversationId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
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
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
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

export class GetAppConversationResponseBody extends $dara.Model {
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
   * dewuApp
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
  module?: GetAppConversationResponseBodyModule;
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
      module: GetAppConversationResponseBodyModule,
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

