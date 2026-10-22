// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginVersionsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The version changelog.
   * 
   * @example
   * x x x
   */
  changelog?: string;
  /**
   * @remarks
   * The commit ID.
   * 
   * @example
   * xxx
   */
  commitSha?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * yinr
   */
  createdBy?: string;
  /**
   * @remarks
   * The current number of files in the project.
   * 
   * @example
   * 4
   */
  fileCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-24T02:29:03.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The file status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The application instance version.
   * 
   * @example
   * V2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      changelog: 'Changelog',
      commitSha: 'CommitSha',
      createdBy: 'CreatedBy',
      fileCount: 'FileCount',
      gmtCreate: 'GmtCreate',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changelog: 'string',
      commitSha: 'string',
      createdBy: 'string',
      fileCount: 'number',
      gmtCreate: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPluginVersionsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * The version changelog.
   * 
   * @example
   * xxx
   */
  changelog?: string;
  /**
   * @remarks
   * The commit ID.
   * 
   * @example
   * xxx
   */
  commitSha?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * adminSubuser(264859988988056208)
   */
  createdBy?: string;
  /**
   * @remarks
   * The current number of files in the project.
   * 
   * @example
   * 4
   */
  fileCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-09-17 20:43:21
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The status. Valid values: unknown, init, testing, and online.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The application instance version.
   * 
   * @example
   * V2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      changelog: 'Changelog',
      commitSha: 'CommitSha',
      createdBy: 'CreatedBy',
      fileCount: 'FileCount',
      gmtCreate: 'GmtCreate',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changelog: 'string',
      commitSha: 'string',
      createdBy: 'string',
      fileCount: 'number',
      gmtCreate: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPluginVersionsResponseBodyModule extends $dara.Model {
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
   * The request results.
   */
  data?: ListAppPluginVersionsResponseBodyModuleData[];
  /**
   * @remarks
   * The decision weight.
   */
  next?: ListAppPluginVersionsResponseBodyModuleNext;
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
   * The number of entries per page.
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
   * In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
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
   * 1
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
      data: { 'type': 'array', 'itemType': ListAppPluginVersionsResponseBodyModuleData },
      next: ListAppPluginVersionsResponseBodyModuleNext,
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

export class ListAppPluginVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason for the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application to query.
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
   * The dynamic message. This parameter is not used and can be ignored.
   * 
   * @example
   * abc
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
   */
  module?: ListAppPluginVersionsResponseBodyModule;
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
      module: ListAppPluginVersionsResponseBodyModule,
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

