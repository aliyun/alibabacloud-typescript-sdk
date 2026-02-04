// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppDomainRedirectRecordsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * Redirect record ID
   * 
   * @example
   * f0379419-433d-410e-98d9-bf5c72f47227
   */
  recordId?: string;
  /**
   * @remarks
   * Source domain
   * 
   * @example
   * abc.wanwang.xin
   */
  sourceDomain?: string;
  /**
   * @remarks
   * 目标域名
   * 
   * @example
   * aliyuncs.com
   */
  targetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      sourceDomain: 'SourceDomain',
      targetDomain: 'TargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      sourceDomain: 'string',
      targetDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppDomainRedirectRecordsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * Redirect record ID
   * 
   * @example
   * 936956504373539840
   */
  recordId?: string;
  /**
   * @remarks
   * Source domain
   * 
   * @example
   * abc.wanwang.xin
   */
  sourceDomain?: string;
  /**
   * @remarks
   * Target domain
   * 
   * @example
   * aliyuncs.com
   */
  targetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      sourceDomain: 'SourceDomain',
      targetDomain: 'TargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      sourceDomain: 'string',
      targetDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppDomainRedirectRecordsResponseBodyModule extends $dara.Model {
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
   * Member name.
   */
  data?: ListAppDomainRedirectRecordsResponseBodyModuleData[];
  /**
   * @remarks
   * Next feature ID
   */
  next?: ListAppDomainRedirectRecordsResponseBodyModuleNext;
  /**
   * @remarks
   * Whether there is a next page
   */
  nextPage?: boolean;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Whether there is a previous page.
   */
  prePage?: boolean;
  /**
   * @remarks
   * Apart from pagination limits, the server processes up to the most recent 1000 records. If the result exceeds 1000, **ResultLimit** is **true**, please narrow down the time range and search again; otherwise, **ResultLimit** is **false**.
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * Total number of items.
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
      data: { 'type': 'array', 'itemType': ListAppDomainRedirectRecordsResponseBodyModuleData },
      next: ListAppDomainRedirectRecordsResponseBodyModuleNext,
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

export class ListAppDomainRedirectRecordsResponseBody extends $dara.Model {
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
   * Whether retry is allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * Frontend application name.
   * 
   * @example
   * spring-cloud-b
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
   * Dynamic message, currently unused, please ignore
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Number of results per query.
   * 
   * Range: 10~100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Returned object.
   */
  module?: ListAppDomainRedirectRecordsResponseBodyModule;
  /**
   * @remarks
   * 下一个查询开始的Token。没有下一个查询时为空。
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request
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
   * Exception message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Whether it is processed synchronously
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
      module: ListAppDomainRedirectRecordsResponseBodyModule,
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

