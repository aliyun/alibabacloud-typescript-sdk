// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationAccountDetailsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The time when the inspiration points were acquired.
   * 
   * @example
   * 2026-03-03 12:00:00
   */
  acquisitionTime?: string;
  /**
   * @remarks
   * The remaining balance (InitQuota minus used).
   * 
   * @example
   * 12
   */
  balance?: number;
  balanceStr?: string;
  /**
   * @remarks
   * The expiration time of the quota.
   * 
   * @example
   * 2025-04-11 10:26:27 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the quota has expired (EndDate is earlier than the current time). The frontend grays out expired entries based on this value.
   * 
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @remarks
   * The acquired quantity (initial quota).
   * 
   * @example
   * 123123
   */
  initQuota?: number;
  initQuotaStr?: string;
  /**
   * @remarks
   * The source type code. Valid values: FREE_TRIAL_GIFT, INSTANCE_GIFT, UPGRADE_GRANT, and PURCHASED.
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * The display name of the source type.
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
   * The time when the inspiration points were acquired.
   * 
   * @example
   * 2026-03-03 12:00:00
   */
  acquisitionTime?: string;
  /**
   * @remarks
   * The remaining balance (InitQuota minus used).
   * 
   * @example
   * 12
   */
  balance?: number;
  balanceStr?: string;
  /**
   * @remarks
   * The expiration time of the quota.
   * 
   * @example
   * 2026-02-25 10:11:25
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the quota has expired (EndDate is earlier than the current time). The frontend grays out expired entries based on this value.
   * 
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @remarks
   * The acquired quantity (initial quota).
   * 
   * @example
   * 123123
   */
  initQuota?: number;
  initQuotaStr?: string;
  /**
   * @remarks
   * The source type code. Valid values: FREE_TRIAL_GIFT, INSTANCE_GIFT, UPGRADE_GRANT, and PURCHASED.
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * The display name of the source type.
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
   * The current page number.
   * 
   * @example
   * 12
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The query results.
   */
  data?: QueryInspirationAccountDetailsResponseBodyModuleData[];
  /**
   * @remarks
   * The decision weight.
   */
  next?: QueryInspirationAccountDetailsResponseBodyModuleNext;
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
   * The page size.
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
   * Apart from pagination limits, the server processes up to 1000 recent records for the current query. If the results exceed 1000 records, **ResultLimit** is **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
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
   * The details of the permission verification failure.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether a retry is allowed. Valid values:
   * - false: A retry is not allowed.
   * - true: A retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name. The application with this name is queried.
   * 
   * @example
   * or
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
   * The dynamic message.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
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
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The error message.
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

