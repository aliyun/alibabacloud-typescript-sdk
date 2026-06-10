// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationConsumeRecordsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * Quantity of inspiration value consumed
   * 
   * @example
   * 120
   */
  amount?: number;
  amountStr?: string;
  /**
   * @remarks
   * Consumption time
   * 
   * @example
   * 2026-06-01 12:00:00
   */
  consumeTime?: string;
  consumeType?: string;
  /**
   * @remarks
   * Extension information (in JSON string format)
   * 
   * @example
   * {\\"MD5\\":\\"296f6c01e7fea2697ffe1cf41082b774\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"12845825\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":true,\\"uefi_preferred\\":false}
   */
  metaData?: string;
  /**
   * @remarks
   * Consumption scenario Name (such as AI application development, AI creative image generation, AI Video creation, AI Content creation)
   * 
   * @example
   * 家装
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

export class QueryInspirationConsumeRecordsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * Quantity of inspiration value consumed
   * 
   * @example
   * 2
   */
  amount?: number;
  amountStr?: string;
  /**
   * @remarks
   * Consumption Time
   * 
   * @example
   * 2026-06-01 12:00:00
   */
  consumeTime?: string;
  consumeType?: string;
  /**
   * @remarks
   * Extension information (in JSON string format)
   * 
   * @example
   * {\\"MD5\\":\\"1042e65a2b7cdd3059b6a873ee1a3260\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"12845825\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":true,\\"uefi_preferred\\":false}
   */
  metaData?: string;
  /**
   * @remarks
   * Consumption scenario Name (such as AI application development, AI creative image generation, AI Video creation, AI Content creation)
   * 
   * @example
   * 家装
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * Request Result.
   */
  data?: QueryInspirationConsumeRecordsResponseBodyModuleData[];
  /**
   * @remarks
   * Next feature ID
   */
  next?: QueryInspirationConsumeRecordsResponseBodyModuleNext;
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @remarks
   * Paging size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Whether there is a previous page.
   * 
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @remarks
   * In addition to paging limits, the server-side processes at most the latest 1 000 records for the current query. If the result exceeds 1 000 records, **ResultLimit** is **true**; you should narrow the Time Range and search again. Otherwise, **ResultLimit** is **false**.
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * Total number of pages.
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
   * Detailed reason for access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Is retry allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * Application Name. Query the application with this name.
   * 
   * @example
   * ish-intelligence-store-platform-admin-web
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic message. Not currently used. Please ignore.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Whether the deletion succeeded
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Is processed synchronously
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

