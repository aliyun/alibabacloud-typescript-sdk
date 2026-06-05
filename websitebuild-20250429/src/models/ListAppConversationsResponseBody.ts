// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConversationsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * aliyun_pk
   * 
   * @example
   * ***
   */
  aliyunPk?: string;
  /**
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @example
   * 1
   */
  chatNum?: number;
  /**
   * @example
   * 799EAC1246C855CAC75B77955E43D841
   */
  conversationId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-27T17:51:25.415+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-10-02T02:21:07Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * {\\"MD5\\":\\"296f6c01e7fea2697ffe1cf41082b774\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"12845825\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":true,\\"uefi_preferred\\":false}
   */
  metaData?: string;
  /**
   * @example
   * 255
   */
  sectionId?: string;
  /**
   * @example
   * 1068725896006128
   */
  siteId?: string;
  /**
   * @example
   * Sometimes When We Touch
   */
  title?: string;
  /**
   * @example
   * 123456
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

export class ListAppConversationsResponseBodyModule extends $dara.Model {
  data?: ListAppConversationsResponseBodyModuleData[];
  /**
   * @example
   * 16
   */
  pageNum?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAppConversationsResponseBodyModuleData },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppConversationsResponseBody extends $dara.Model {
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
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListAppConversationsResponseBodyModule;
  /**
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
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
      module: ListAppConversationsResponseBodyModule,
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
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

