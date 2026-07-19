// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRbacRoleHierarchyResponseBodyModuleData extends $dara.Model {
  /**
   * @example
   * fc94cc51-310f-4485-adb2-ed8c706aff3b
   */
  childRoleId?: string;
  /**
   * @example
   * 71e07711-9a17-49f4-9f83-387a60ee5b64
   */
  parentRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      childRoleId: 'ChildRoleId',
      parentRoleId: 'ParentRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childRoleId: 'string',
      parentRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRbacRoleHierarchyResponseBodyModuleNext extends $dara.Model {
  /**
   * @example
   * fc94cc51-310f-4485-adb2-ed8c706aff3b
   */
  childRoleId?: string;
  /**
   * @example
   * 71e07711-9a17-49f4-9f83-387a60ee5b64
   */
  parentRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      childRoleId: 'ChildRoleId',
      parentRoleId: 'ParentRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childRoleId: 'string',
      parentRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRbacRoleHierarchyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: ListRbacRoleHierarchyResponseBodyModuleData[];
  next?: ListRbacRoleHierarchyResponseBodyModuleNext;
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
      data: { 'type': 'array', 'itemType': ListRbacRoleHierarchyResponseBodyModuleData },
      next: ListRbacRoleHierarchyResponseBodyModuleNext,
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

export class ListRbacRoleHierarchyResponseBody extends $dara.Model {
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
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListRbacRoleHierarchyResponseBodyModule;
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
      module: ListRbacRoleHierarchyResponseBodyModule,
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

