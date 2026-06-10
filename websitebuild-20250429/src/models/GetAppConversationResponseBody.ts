// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConversationResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 12343131221311
   */
  aliyunPk?: string;
  /**
   * @remarks
   * bot ID
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * Chat record
   * 
   * @example
   * 123
   */
  chatNum?: number;
  /**
   * @remarks
   * session id
   * 
   * @example
   * 872be9bc-3097-433d-b462-596202455102
   */
  conversationId?: string;
  /**
   * @remarks
   * Creation Time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * None
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Update Time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-10-29T10:34:13Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Extension information (in JSON string format)
   * 
   * @example
   * {\\"appId\\":\\"WS20260507200853000001\\",\\"inputTokens\\":1411,\\"outputTokens\\":51}
   */
  metaData?: string;
  /**
   * @remarks
   * Section ID of the checklist item.
   * 
   * @example
   * 11
   */
  sectionId?: string;
  /**
   * @remarks
   * site ID, which can be obtained by invoking the [ListSites](~~ListSites~~) API.
   * 
   * @example
   * 865181640657408
   */
  siteId?: string;
  /**
   * @remarks
   * Current point, equivalent to news title
   * 
   * @example
   * Feel Like Makin\\" Love
   */
  title?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 用户id
   */
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
   * @remarks
   * access denied details
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
   * dewuApp
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
   * dynamic error message, used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * response Data
   */
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
   * @remarks
   * Error code
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
   * is processed synchronously
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

