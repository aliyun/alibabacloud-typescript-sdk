// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppWorkspaceDirectoryResponseBodyModuleDirectoryList extends $dara.Model {
  /**
   * @remarks
   * The child content.
   */
  children?: any[];
  /**
   * @remarks
   * The full path relative to the workspace.
   * 
   * @example
   * PolarDBInnoDBRedoLogWrites
   */
  key?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Evaluable=true
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      key: 'Key',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      key: 'string',
      label: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppWorkspaceDirectoryResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The current time.
   * 
   * @example
   * 2026
   */
  currentTime?: string;
  /**
   * @remarks
   * The directory structure.
   */
  directoryList?: GetAppWorkspaceDirectoryResponseBodyModuleDirectoryList[];
  static names(): { [key: string]: string } {
    return {
      currentTime: 'CurrentTime',
      directoryList: 'DirectoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentTime: 'string',
      directoryList: { 'type': 'array', 'itemType': GetAppWorkspaceDirectoryResponseBodyModuleDirectoryList },
    };
  }

  validate() {
    if(Array.isArray(this.directoryList)) {
      $dara.Model.validateArray(this.directoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppWorkspaceDirectoryResponseBody extends $dara.Model {
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
   * Indicates whether a retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * ish-intelligence-store-platform-admin-web
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
   * The response object.
   */
  module?: GetAppWorkspaceDirectoryResponseBodyModule;
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
      module: GetAppWorkspaceDirectoryResponseBodyModule,
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

