// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationAccountDetailsResponseBodyModuleData extends $dara.Model {
  /**
   * @example
   * 2026-03-03 12:00:00
   */
  acquisitionTime?: string;
  /**
   * @example
   * 12
   */
  balance?: number;
  /**
   * @example
   * 2025-04-11 10:26:27 +0800
   */
  endDate?: string;
  /**
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @example
   * 123123
   */
  initQuota?: number;
  /**
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @example
   * FREE_TRIAL_GIFT
   */
  sourceTypeName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acquisitionTime: 'AcquisitionTime',
      balance: 'Balance',
      endDate: 'EndDate',
      expired: 'Expired',
      initQuota: 'InitQuota',
      sourceType: 'SourceType',
      sourceTypeName: 'SourceTypeName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acquisitionTime: 'string',
      balance: 'number',
      endDate: 'string',
      expired: 'boolean',
      initQuota: 'number',
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
   * @example
   * 2026-03-03 12:00:00
   */
  acquisitionTime?: string;
  /**
   * @example
   * 12
   */
  balance?: number;
  /**
   * @example
   * 2026-02-25 10:11:25
   */
  endDate?: string;
  /**
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @example
   * 123123
   */
  initQuota?: number;
  /**
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @example
   * FREE_TRIAL_GIFT
   */
  sourceTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      acquisitionTime: 'AcquisitionTime',
      balance: 'Balance',
      endDate: 'EndDate',
      expired: 'Expired',
      initQuota: 'InitQuota',
      sourceType: 'SourceType',
      sourceTypeName: 'SourceTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acquisitionTime: 'string',
      balance: 'number',
      endDate: 'string',
      expired: 'boolean',
      initQuota: 'number',
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
   * @example
   * 12
   */
  currentPageNum?: number;
  data?: QueryInspirationAccountDetailsResponseBodyModuleData[];
  next?: QueryInspirationAccountDetailsResponseBodyModuleNext;
  /**
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * False
   */
  prePage?: boolean;
  resultLimit?: boolean;
  /**
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
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
   * or
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

