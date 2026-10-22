// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyAppPluginsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The disk specifications.
   * 
   * @example
   * NormalMultimaster
   */
  category?: string;
  /**
   * @remarks
   * The scenario description.
   * 
   * @example
   * lshm-mysql-coypt
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-26T10:12:18.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1556529068000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The popularity.
   * 
   * @example
   * 1
   */
  hotCount?: number;
  /**
   * @remarks
   * The plugin description.
   * 
   * @example
   * -1
   */
  icon?: string;
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * alipay-isv
   */
  pluginId?: string;
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * transformer
   */
  pluginName?: string;
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
   * The API version number.
   * 
   * @example
   * V2.0
   */
  version?: string;
  /**
   * @remarks
   * The visibility. Valid values:
   * 
   * - **PUBLIC**: Public.
   * - **PRIVATE**: Private.
   * 
   * @example
   * visible
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hotCount: 'HotCount',
      icon: 'Icon',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      status: 'Status',
      version: 'Version',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hotCount: 'number',
      icon: 'string',
      pluginId: 'string',
      pluginName: 'string',
      status: 'string',
      version: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAppPluginsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * The controlType converted based on the associated public category.
   * 
   * @example
   * CRAC
   */
  category?: string;
  /**
   * @remarks
   * The scenario description.
   * 
   * @example
   * lx_supabase_test_02
   */
  description?: string;
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
   * The modification time.
   * 
   * @example
   * 2026-03-18T10:03:56+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The plugin description.
   * 
   * @example
   * @lADPDetfgMsFFUvNAkjNAkg
   */
  icon?: string;
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * alipay-isv
   */
  pluginId?: string;
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * trafficControl
   */
  pluginName?: string;
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
   * The API version number.
   * 
   * @example
   * V2.0
   */
  version?: string;
  /**
   * @remarks
   * The visibility. Valid values:
   * 
   * - **PUBLIC**: Public.
   * - **PRIVATE**: Private.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icon: 'Icon',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      status: 'Status',
      version: 'Version',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      icon: 'string',
      pluginId: 'string',
      pluginName: 'string',
      status: 'string',
      version: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAppPluginsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The request results.
   */
  data?: ListMyAppPluginsResponseBodyModuleData[];
  /**
   * @remarks
   * The decision weight.
   */
  next?: ListMyAppPluginsResponseBodyModuleNext;
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
   * The page size.
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
   * The result limit. In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
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
      data: { 'type': 'array', 'itemType': ListMyAppPluginsResponseBodyModuleData },
      next: ListMyAppPluginsResponseBodyModuleNext,
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

export class ListMyAppPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access is denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Specifies whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name. The name must start with a letter and can contain digits, letters, underscores (_), and hyphens (-). It can be up to 36 characters in length.
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
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The task object.
   */
  module?: ListMyAppPluginsResponseBodyModule;
  /**
   * @remarks
   * The request ID.
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
      module: ListMyAppPluginsResponseBodyModule,
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

