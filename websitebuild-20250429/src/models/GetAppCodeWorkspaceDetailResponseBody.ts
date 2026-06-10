// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppCodeWorkspaceDetailResponseBodyModuleSnapshots extends $dara.Model {
  /**
   * @remarks
   * SDK change log
   * 
   * @example
   * - Add Params.
   */
  changeLog?: string;
  /**
   * @remarks
   * Creation UTC time in ISO8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-06-10T09:40:36.562Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Logical value
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
   * Site ID, which can be obtained by invoking the [ListSites](~~ListSites~~) API.
   * 
   * @example
   * 865181640657408
   */
  siteId?: string;
  /**
   * @remarks
   * API Guide information.
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
   * Detailed reason for access denial.
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
   * App name.
   * 
   * @example
   * spring-cloud-b
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
   * Dynamic error message, used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the provided request parameter **DtsJobId** is invalid.
   * 
   * @example
   * abc
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Faulty parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Application module
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
   * Reserved parameter.
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

