// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppDomainRedirectRecordsResponseBodyModuleData extends $dara.Model {
  /**
   * @example
   * f0379419-433d-410e-98d9-bf5c72f47227
   */
  recordId?: string;
  /**
   * @example
   * abc.wanwang.xin
   */
  sourceDomain?: string;
  /**
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
   * @example
   * 936956504373539840
   */
  recordId?: string;
  /**
   * @example
   * abc.wanwang.xin
   */
  sourceDomain?: string;
  /**
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
   * @example
   * 12
   */
  currentPageNum?: number;
  data?: ListAppDomainRedirectRecordsResponseBodyModuleData[];
  next?: ListAppDomainRedirectRecordsResponseBodyModuleNext;
  nextPage?: boolean;
  /**
   * @example
   * 50
   */
  pageSize?: number;
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
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/u6qw3gxzu3b7sbj/u6qw3gxzu3b7sbj.diff.zip?Expires=1740975709&OSSAccessKeyId=LTAI5tKUErVCETM4ev9SELNb&Signature=FP7dDnkrLlOZHmRRORVqbLOtv9c%3D
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListAppDomainRedirectRecordsResponseBodyModule;
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

