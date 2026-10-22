// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRbacRoleResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created, in ISO 8601 format (such as 2024-01-01T00:00:00+Z).
   * 
   * @example
   * 2026-02-06T10:20:09Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 16257
   */
  id?: string;
  /**
   * @remarks
   * The default status. Valid values:
   * - 0: not default.
   * - 1: default.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the approval template is system-defined. Valid values:
   * - 1: Yes.
   * - 0: No.
   */
  isSystem?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * oss://anchashiscan.oss-cn-hangzhou.aliyuncs.com/prodpopscansDZBFBGr
   */
  label?: string;
  /**
   * @remarks
   * The file name.
   * 
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

export class QueryRbacRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed. Valid values:
   * - false: Retry is not allowed.
   * - true: Retry is allowed.
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
   * The dynamic message.
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
   * The response data.
   */
  module?: QueryRbacRoleResponseBodyModule;
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
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * The reserved parameter.
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
      module: QueryRbacRoleResponseBodyModule,
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

