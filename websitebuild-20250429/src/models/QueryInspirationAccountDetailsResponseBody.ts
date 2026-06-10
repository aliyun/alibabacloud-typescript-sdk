// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationAccountDetailsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * Acquisition Time
   * 
   * @example
   * 2026-03-03 12:00:00
   */
  acquisitionTime?: string;
  /**
   * @remarks
   * Balance (initQuota - used)
   * 
   * @example
   * 12
   */
  balance?: number;
  balanceStr?: string;
  /**
   * @remarks
   * Validity Period expiration time
   * 
   * @example
   * 2025-04-11 10:26:27 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether it has expired (endDate < current time). The frontend uses this to gray out the display.
   * 
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @remarks
   * Quantity obtained (initial quota)
   * 
   * @example
   * 123123
   */
  initQuota?: number;
  initQuotaStr?: string;
  /**
   * @remarks
   * Source type code (such as FREE_TRIAL_GIFT, INSTANCE_GIFT, UPGRADE_GRANT, PURCHASED)
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * Source Type Display Name
   * 
   * @example
   * FREE_TRIAL_GIFT
   */
  sourceTypeName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acquisitionTime: 'AcquisitionTime',
      balance: 'Balance',
      balanceStr: 'BalanceStr',
      endDate: 'EndDate',
      expired: 'Expired',
      initQuota: 'InitQuota',
      initQuotaStr: 'InitQuotaStr',
      sourceType: 'SourceType',
      sourceTypeName: 'SourceTypeName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acquisitionTime: 'string',
      balance: 'number',
      balanceStr: 'string',
      endDate: 'string',
      expired: 'boolean',
      initQuota: 'number',
      initQuotaStr: 'string',
      sourceType: 'string',
      sourceTypeName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInspirationAccountDetailsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * Acquisition time
   * 
   * @example
   * 2026-03-03 12:00:00
   */
  acquisitionTime?: string;
  /**
   * @remarks
   * Balance (initQuota - used)
   * 
   * @example
   * 12
   */
  balance?: number;
  balanceStr?: string;
  /**
   * @remarks
   * Expiration time of the validity period
   * 
   * @example
   * 2026-02-25 10:11:25
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether it has expired (endDate < current time). The frontend uses this to gray out the display.
   * 
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @remarks
   * Quantity obtained (initial quota)
   * 
   * @example
   * 123123
   */
  initQuota?: number;
  initQuotaStr?: string;
  /**
   * @remarks
   * Source type code (such as FREE_TRIAL_GIFT, INSTANCE_GIFT, UPGRADE_GRANT, PURCHASED)
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * Display Name of the source type
   * 
   * @example
   * FREE_TRIAL_GIFT
   */
  sourceTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      acquisitionTime: 'AcquisitionTime',
      balance: 'Balance',
      balanceStr: 'BalanceStr',
      endDate: 'EndDate',
      expired: 'Expired',
      initQuota: 'InitQuota',
      initQuotaStr: 'InitQuotaStr',
      sourceType: 'SourceType',
      sourceTypeName: 'SourceTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acquisitionTime: 'string',
      balance: 'number',
      balanceStr: 'string',
      endDate: 'string',
      expired: 'boolean',
      initQuota: 'number',
      initQuotaStr: 'string',
      sourceType: 'string',
      sourceTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInspirationAccountDetailsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 12
   */
  currentPageNum?: number;
  /**
   * @remarks
   * Request result.
   */
  data?: QueryInspirationAccountDetailsResponseBodyModuleData[];
  /**
   * @remarks
   * Decision weight
   */
  next?: QueryInspirationAccountDetailsResponseBodyModuleNext;
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
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether a previous page exists
   * 
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @remarks
   * In addition to paging limits, the server-side processes at most the latest 1,000 records for the current query. If the result exceeds 1,000 records, **ResultLimit** is **true**. You can narrow the Time Range and search again. Otherwise, **ResultLimit** is **false**.
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
      data: { 'type': 'array', 'itemType': QueryInspirationAccountDetailsResponseBodyModuleData },
      next: QueryInspirationAccountDetailsResponseBodyModuleNext,
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

export class QueryInspirationAccountDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed. Valid values:
   * - false: Retry is not allowed.
   * - true: Retry is allowed.
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
   * or
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
   * Dynamic message.
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
   * Response data
   */
  module?: QueryInspirationAccountDetailsResponseBodyModule;
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
   * Indicates whether processing is synchronous
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
      module: QueryInspirationAccountDetailsResponseBodyModule,
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

