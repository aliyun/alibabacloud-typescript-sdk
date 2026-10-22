// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRbacRolePermissionsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **DeleteIntegration**.
   * 
   * @example
   * js
   */
  action?: string;
  /**
   * @remarks
   * The scenario description.
   * 
   * @example
   * lshm-mysql-coypt
   */
  description?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 9953352
   */
  id?: string;
  /**
   * @remarks
   * The alert rule name.
   * 
   * @example
   * lb-uf6wxzsjwavr2kyq92slf-80-clb4
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      description: 'Description',
      id: 'Id',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      description: 'string',
      id: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRbacRolePermissionsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **GetCreateCustomerInfomation**.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The scenario description.
   * 
   * @example
   * lx_supabase_test_02
   */
  description?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 1000039405002
   */
  id?: string;
  /**
   * @remarks
   * The statistical method for the Warn level.
   * 
   * The value of `Statistics` varies by cloud service. For more information, see [Cloud service monitoring items](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * mwaf-apisec0629.wafqax.top-waf
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      description: 'Description',
      id: 'Id',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      description: 'string',
      id: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRbacRolePermissionsResponseBodyModule extends $dara.Model {
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
   * The request result.
   */
  data?: QueryRbacRolePermissionsResponseBodyModuleData[];
  /**
   * @remarks
   * The next feature ID.
   */
  next?: QueryRbacRolePermissionsResponseBodyModuleNext;
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
   * The server processes up to 1,000 recent records beyond the pagination limit for the current query. If the results exceed 1,000 records, **ResultLimit** is **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
   * 
   * @example
   * False
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
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
      data: { 'type': 'array', 'itemType': QueryRbacRolePermissionsResponseBodyModuleData },
      next: QueryRbacRolePermissionsResponseBodyModuleNext,
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

export class QueryRbacRolePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
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
   * The application name. The application with this name is queried.
   * 
   * @example
   * spring-cloud-b
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
   * The dynamic message. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Indicates whether the operation is successful.
   */
  module?: QueryRbacRolePermissionsResponseBodyModule;
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
   * Indicates whether the request is synchronously processed.
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
      module: QueryRbacRolePermissionsResponseBodyModule,
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

