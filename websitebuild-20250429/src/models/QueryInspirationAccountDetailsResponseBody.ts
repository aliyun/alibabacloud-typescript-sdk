// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationAccountDetailsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The acquisition time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-03-03 12:00:00
   */
  acquisitionTime?: string;
  /**
   * @remarks
   * The balance, calculated by subtracting the used amount from the initial quota.
   * 
   * @example
   * 12
   */
  balance?: number;
  /**
   * @remarks
   * The exact balance. The value is a string to support the display of decimal places.
   * 
   * @example
   * 12
   */
  balanceStr?: string;
  /**
   * @remarks
   * The expiration time of the validity period. The time is in the YYYY-MM-DD HH:mm:ss Z format, where Z represents the time zone offset.
   * 
   * @example
   * 2025-04-11 10:26:27 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the quota has expired. A quota is expired if the expiration time is earlier than the current time. The frontend displays expired quotas in gray based on this value.
   * 
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @remarks
   * The acquired amount, which is the initial quota.
   * 
   * @example
   * 123123
   */
  initQuota?: number;
  /**
   * @remarks
   * The exact acquired amount. The value is a string to support the display of decimal places.
   * 
   * @example
   * 123123
   */
  initQuotaStr?: string;
  /**
   * @remarks
   * The source type code, such as FREE_TRIAL_GIFT, INSTANCE_GIFT, UPGRADE_GRANT, or PURCHASED.
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * The Chinese name of the source type.
   * 
   * @example
   * FREE_TRIAL_GIFT
   */
  sourceTypeName?: string;
  /**
   * @remarks
   * The status of the inspiration point account.
   * 
   * @example
   * ACTIVE
   */
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
   * The acquisition time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-03-03 12:00:00
   */
  acquisitionTime?: string;
  /**
   * @remarks
   * The balance, calculated by subtracting the used amount from the initial quota.
   * 
   * @example
   * 12
   */
  balance?: number;
  /**
   * @remarks
   * The exact balance. The value is a string to support the display of decimal places.
   * 
   * @example
   * 12
   */
  balanceStr?: string;
  /**
   * @remarks
   * The expiration time of the validity period. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-02-25 10:11:25
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the quota has expired. A quota is expired if the expiration time is earlier than the current time. The frontend displays expired quotas in gray based on this value.
   * 
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @remarks
   * The acquired amount, which is the initial quota.
   * 
   * @example
   * 123123
   */
  initQuota?: number;
  /**
   * @remarks
   * The exact acquired amount. The value is a string to support the display of decimal places.
   * 
   * @example
   * 123123
   */
  initQuotaStr?: string;
  /**
   * @remarks
   * The source type code, such as FREE_TRIAL_GIFT, INSTANCE_GIFT, UPGRADE_GRANT, or PURCHASED.
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * The Chinese name of the source type.
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
   * The request results.
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
   * In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
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
   * Specifies whether to allow retries. Valid values:
   * - false: Retries are not allowed.
   * - true: Retries are allowed.
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
   * The returned error parameters.
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
   * The exception message.
   * 
   * @example
   * System error
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

