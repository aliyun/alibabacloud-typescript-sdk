// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationConsumeRecordsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The number of consumed inspiration points.
   * 
   * @example
   * 120
   */
  amount?: number;
  /**
   * @remarks
   * The exact number of consumed inspiration points. The value is a string that supports decimal display.
   * 
   * @example
   * 120
   */
  amountStr?: string;
  /**
   * @remarks
   * The consumption time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-06-01 12:00:00
   */
  consumeTime?: string;
  /**
   * @remarks
   * The consumption type.
   * 
   * @example
   * 1 round of conversation
   */
  consumeType?: string;
  /**
   * @remarks
   * The extended information in JSON string format.
   * 
   * @example
   * {\\"MD5\\":\\"296f6c01e7fea2697ffe1cf41082b774\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"12845825\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":true,\\"uefi_preferred\\":false}
   */
  metaData?: string;
  /**
   * @remarks
   * The unique identifier of the consumption record.
   * 
   * @example
   * RECORD_1
   */
  recordKey?: string;
  /**
   * @remarks
   * The name of the consumption scenario, such as AI application development, AI creative image generation, AI video creation, and AI content creation.
   * 
   * @example
   * Home improvement
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      amountStr: 'AmountStr',
      consumeTime: 'ConsumeTime',
      consumeType: 'ConsumeType',
      metaData: 'MetaData',
      recordKey: 'RecordKey',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      amountStr: 'string',
      consumeTime: 'string',
      consumeType: 'string',
      metaData: 'string',
      recordKey: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInspirationConsumeRecordsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * The number of consumed inspiration points.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The exact number of consumed inspiration points. The value is a string that supports decimal display.
   * 
   * @example
   * 120
   */
  amountStr?: string;
  /**
   * @remarks
   * The consumption time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-06-01 12:00:00
   */
  consumeTime?: string;
  /**
   * @remarks
   * The consumption type.
   * 
   * @example
   * 1 round of conversation
   */
  consumeType?: string;
  /**
   * @remarks
   * The extended information in JSON string format.
   * 
   * @example
   * {\\"MD5\\":\\"1042e65a2b7cdd3059b6a873ee1a3260\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"12845825\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":true,\\"uefi_preferred\\":false}
   */
  metaData?: string;
  /**
   * @remarks
   * The name of the consumption scenario, such as AI application development, AI creative image generation, AI video creation, and AI content creation.
   * 
   * @example
   * Home improvement
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      amountStr: 'AmountStr',
      consumeTime: 'ConsumeTime',
      consumeType: 'ConsumeType',
      metaData: 'MetaData',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      amountStr: 'string',
      consumeTime: 'string',
      consumeType: 'string',
      metaData: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInspirationConsumeRecordsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The request result.
   */
  data?: QueryInspirationConsumeRecordsResponseBodyModuleData[];
  /**
   * @remarks
   * The ID of the next feature.
   */
  next?: QueryInspirationConsumeRecordsResponseBodyModuleNext;
  /**
   * @remarks
   * Indicates whether a next page exists.
   * 
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether a previous page exists.
   * 
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @remarks
   * In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is **true**. Narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      next: 'Next',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      resultLimit: 'ResultLimit',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryInspirationConsumeRecordsResponseBodyModuleData },
      next: QueryInspirationConsumeRecordsResponseBodyModuleNext,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      resultLimit: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.next && typeof (this.next as any).validate === 'function') {
      (this.next as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInspirationConsumeRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed cause of the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application to query.
   * 
   * @example
   * ish-intelligence-store-platform-admin-web
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
   * The dynamic message. This field is not in use and can be ignored.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Indicates whether the deletion is successful.
   */
  module?: QueryInspirationConsumeRecordsResponseBodyModule;
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
   * The exception message.
   * 
   * @example
   * System exception
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Specifies whether the request is processed synchronously.
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
      module: QueryInspirationConsumeRecordsResponseBodyModule,
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

