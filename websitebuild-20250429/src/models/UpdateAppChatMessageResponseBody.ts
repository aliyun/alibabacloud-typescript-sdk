// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppChatMessageResponseBodyModule extends $dara.Model {
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
   * The chat ID.
   * 
   * @example
   * 53467af9-8c4e-4498-9032-1f26978007f8
   */
  chatId?: string;
  /**
   * @remarks
   * The current conversation status.
   * 
   * @example
   * 123
   */
  chatStatus?: string;
  /**
   * @remarks
   * The ID of the data API operation that is called.
   * 
   * @example
   * {\\"code\\": \\"200\\", \\"success\\": True, \\"content\\": True, \\"requestId\\": \\"4AF53F7B-FEA9-5966-B0F8-BAF9A1EEFE34\\", \\"businessError\\": False, \\"message\\": \\"success\\", \\"httpStatusCode\\": 200}
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
   * 471791769135220858
   */
  messageId?: string;
  /**
   * @remarks
   * The business extension metadata in Map format. The value must be a JSON string.
   * 
   * @example
   * {\\"appId\\":\\"WS20260418211121000001\\",\\"inputTokens\\":273,\\"outputTokens\\":1}
   */
  metaData?: string;
  /**
   * @remarks
   * The probability of not wearing a mask, not wearing work clothes, or not wearing a hat.
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

export class UpdateAppChatMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access is denied.
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
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic code. This parameter is not currently used. Ignore this parameter.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error arguments.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response object.
   */
  module?: UpdateAppChatMessageResponseBodyModule;
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
   * The root error message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is processed synchronously.
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
      module: UpdateAppChatMessageResponseBodyModule,
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

