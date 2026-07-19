// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRbacRolesResponseBodyModuleData extends $dara.Model {
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @example
   * 9953352
   */
  id?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  isSystem?: boolean;
  /**
   * @example
   * Aliyun:dnm329@cn-shanghai+dir-8452400651
   */
  label?: string;
  /**
   * @example
   * 文件名
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      isDefault: 'IsDefault',
      isSystem: 'IsSystem',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      isDefault: 'boolean',
      isSystem: 'boolean',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRbacRolesResponseBodyModuleNext extends $dara.Model {
  /**
   * @example
   * 2020-11-27 16:02:28
   */
  createdAt?: string;
  /**
   * @example
   * 1000039405002
   */
  id?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  isSystem?: boolean;
  /**
   * @example
   * label-03\\"&$(curl D93PCxNZ.popscan.xaliyun.com)%3B
   */
  label?: string;
  /**
   * @example
   * docs
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      isDefault: 'IsDefault',
      isSystem: 'IsSystem',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      isDefault: 'boolean',
      isSystem: 'boolean',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRbacRolesResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: ListRbacRolesResponseBodyModuleData[];
  next?: ListRbacRolesResponseBodyModuleNext;
  /**
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @example
   * False
   */
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
      data: { 'type': 'array', 'itemType': ListRbacRolesResponseBodyModuleData },
      next: ListRbacRolesResponseBodyModuleNext,
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

export class ListRbacRolesResponseBody extends $dara.Model {
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
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListRbacRolesResponseBodyModule;
  /**
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @example
   * 系统异常
   */
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
      module: ListRbacRolesResponseBodyModule,
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

