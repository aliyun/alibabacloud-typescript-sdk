// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRbacOrgTreeResponseBodyModuleData extends $dara.Model {
  /**
   * @example
   * 2026-05-08T02:28:26Z
   */
  createdAt?: string;
  /**
   * @example
   * FirstChildDepth
   */
  depth?: number;
  /**
   * @example
   * 9953352
   */
  id?: string;
  /**
   * @example
   * 文件名
   */
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      depth: 'Depth',
      id: 'Id',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      depth: 'number',
      id: 'string',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRbacOrgTreeResponseBodyModuleNext extends $dara.Model {
  /**
   * @example
   * 2025-12-15T02:29:22Z
   */
  createdAt?: string;
  /**
   * @example
   * 2
   */
  depth?: number;
  /**
   * @example
   * 1000039405002
   */
  id?: string;
  /**
   * @example
   * docs
   */
  name?: string;
  /**
   * @example
   * /h6sRMdP&LTdQz/44ImvD/JtjSeUza/wVcp1i/dsxnl0FlL0/bvL/d+0~V6Fi5+R/P8ebktwGxe/l&AqBD_/Y+TstdpTo06U_Q/4i4:EDPGo/7.fIVgd.//AOJtXP5/X
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      depth: 'Depth',
      id: 'Id',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      depth: 'number',
      id: 'string',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRbacOrgTreeResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 12
   */
  currentPageNum?: number;
  data?: ListRbacOrgTreeResponseBodyModuleData[];
  next?: ListRbacOrgTreeResponseBodyModuleNext;
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
      data: { 'type': 'array', 'itemType': ListRbacOrgTreeResponseBodyModuleData },
      next: ListRbacOrgTreeResponseBodyModuleNext,
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

export class ListRbacOrgTreeResponseBody extends $dara.Model {
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
  module?: ListRbacOrgTreeResponseBodyModule;
  /**
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
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
      module: ListRbacOrgTreeResponseBodyModule,
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

