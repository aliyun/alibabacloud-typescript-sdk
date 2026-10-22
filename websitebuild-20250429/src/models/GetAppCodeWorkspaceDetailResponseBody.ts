// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppCodeWorkspaceDetailResponseBodyModuleSnapshots extends $dara.Model {
  /**
   * @remarks
   * The SDK change log.
   * 
   * @example
   * - Add Params.
   */
  changeLog?: string;
  /**
   * @remarks
   * The creation time in UTC. The time is in the ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-06-10T09:40:36.562Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The logical value.
   * 
   * @example
   * 111
   */
  logicalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      changeLog: 'ChangeLog',
      gmtCreateTime: 'GmtCreateTime',
      logicalNumber: 'LogicalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLog: 'string',
      gmtCreateTime: 'string',
      logicalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppCodeWorkspaceDetailResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * 11111
   * 
   * @example
   * 111
   */
  activeLogicalNumber?: number;
  /**
   * @remarks
   * The code commit hash.
   * 
   * @example
   * 890243d5977e74d80eebd4734f7b05f626f84cb1
   */
  commitHash?: string;
  /**
   * @remarks
   * true
   * 
   * @example
   * 1
   */
  isDirty?: boolean;
  /**
   * @remarks
   * 1111
   * 
   * @example
   * 111
   */
  maxLogicalNumber?: number;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * @example
   * 865181640657408
   */
  siteId?: string;
  /**
   * @remarks
   * The operation description.
   */
  snapshots?: GetAppCodeWorkspaceDetailResponseBodyModuleSnapshots[];
  static names(): { [key: string]: string } {
    return {
      activeLogicalNumber: 'ActiveLogicalNumber',
      commitHash: 'CommitHash',
      isDirty: 'IsDirty',
      maxLogicalNumber: 'MaxLogicalNumber',
      siteId: 'SiteId',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeLogicalNumber: 'number',
      commitHash: 'string',
      isDirty: 'boolean',
      maxLogicalNumber: 'number',
      siteId: 'string',
      snapshots: { 'type': 'array', 'itemType': GetAppCodeWorkspaceDetailResponseBodyModuleSnapshots },
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppCodeWorkspaceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reasons for the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Specifies whether retries are allowed. Valid values:
   * - false: Retries are not allowed.
   * - true: Retries are allowed.
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
   * The dynamic error message, which is used to replace the `%s` in the error message of the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * abc
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The application module.
   */
  module?: GetAppCodeWorkspaceDetailResponseBodyModule;
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
   * System exception
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
      module: GetAppCodeWorkspaceDetailResponseBodyModule,
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

