// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppWorkspaceDirectoryResponseBodyModuleDirectoryList extends $dara.Model {
  /**
   * @remarks
   * Child content
   */
  children?: any[];
  /**
   * @remarks
   * Full path (relative to workspace)
   * 
   * @example
   * PolarDBInnoDBRedoLogWrites
   */
  key?: string;
  /**
   * @remarks
   * Name
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
   * Current time
   * 
   * @example
   * 2026
   */
  currentTime?: string;
  /**
   * @remarks
   * Directory structure
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
   * Detailed reason for access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Is retry allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App name.
   * 
   * @example
   * ish-intelligence-store-platform-admin-web
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
   * Dynamic message. Not currently used. Ignore it.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Returned object.
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Spare parameter.
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

