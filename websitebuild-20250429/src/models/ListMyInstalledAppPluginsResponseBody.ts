// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyInstalledAppPluginsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The Ray cluster type. Valid values:
   * 
   * - BASIC: basic type, non-high-availability.
   * 
   * - HIGH_AVAILABILITY: high-availability type.
   * 
   * @example
   * high_performance
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
   * 1763605196000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-10-11 16:05:43
   */
  gmtModified?: string;
  /**
   * @remarks
   * The popularity count.
   * 
   * @example
   * 1
   */
  hotCount?: number;
  /**
   * @remarks
   * The plug-in icon.
   * 
   * @example
   * @lALPM2AwTOg9IUHNAUDNAUA
   */
  icon?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * alipay-isv
   */
  pluginId?: string;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * wx*
   */
  pluginName?: string;
  /**
   * @remarks
   * The file status.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The API version number.
   * 
   * @example
   * 2025-04-29
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
   * PUBLIC
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

export class ListMyInstalledAppPluginsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * {\\"Depth\\": 2, \\"ParentCategoryId\\": 5260, \\"Name\\": \\"2\\", \\"CategoryId\\": 5280, \\"CreateTime\\": \\"2025-08-26 10:20:37\\"}
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
   * The plug-in icon.
   * 
   * @example
   * @lADPD0-jULc8yJ3NC9DNC9A
   */
  icon?: string;
  /**
   * @remarks
   * The bound API Gateway plug-in ID.
   * 
   * @example
   * alipay-isv
   */
  pluginId?: string;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * errorMapping
   */
  pluginName?: string;
  /**
   * @remarks
   * Valid values: unknown, init, testing, online.
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
   * Filters by visibility level. Multiple values can be specified.
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

export class ListMyInstalledAppPluginsResponseBodyModule extends $dara.Model {
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
  data?: ListMyInstalledAppPluginsResponseBodyModuleData[];
  /**
   * @remarks
   * The decision weight.
   */
  next?: ListMyInstalledAppPluginsResponseBodyModuleNext;
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
   * Apart from pagination limits, the server processes a maximum of 1000 recent records for the current query. If the results exceed 1000 entries, **ResultLimit** is **true**. Narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
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
   * 0
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
      data: { 'type': 'array', 'itemType': ListMyInstalledAppPluginsResponseBodyModuleData },
      next: ListMyInstalledAppPluginsResponseBodyModuleNext,
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

export class ListMyInstalledAppPluginsResponseBody extends $dara.Model {
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
   * Indicates whether retry is allowed.
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
   * dewuApp
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
   * The dynamic error message, which is used to replace the `%s` in the **ErrMessage** return parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
   */
  module?: ListMyInstalledAppPluginsResponseBodyModule;
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
   * System exception.
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is processed synchronously.
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
      module: ListMyInstalledAppPluginsResponseBodyModule,
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

