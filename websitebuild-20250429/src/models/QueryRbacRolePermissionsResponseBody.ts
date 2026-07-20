// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRbacRolePermissionsResponseBodyModuleData extends $dara.Model {
  action?: string;
  description?: string;
  id?: string;
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
  action?: string;
  description?: string;
  id?: string;
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
  currentPageNum?: number;
  data?: QueryRbacRolePermissionsResponseBodyModuleData[];
  next?: QueryRbacRolePermissionsResponseBodyModuleNext;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  resultLimit?: boolean;
  totalItemNum?: number;
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
  accessDeniedDetail?: string;
  allowRetry?: boolean;
  appName?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  module?: QueryRbacRolePermissionsResponseBodyModule;
  requestId?: string;
  rootErrorCode?: string;
  rootErrorMsg?: string;
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

