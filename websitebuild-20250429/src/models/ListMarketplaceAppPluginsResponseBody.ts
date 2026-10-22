// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMarketplaceAppPluginsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The category of the system cloud disk. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - cloud: basic disk.
   * 
   * @example
   * basic
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
   * The extended information.
   * 
   * @example
   * {}
   */
  extend?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1756951455000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
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
   * The plug-in description.
   * 
   * @example
   * @lALPM2X6xumibpPNAgDNAgA
   */
  icon?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * chat-ai
   */
  pluginId?: string;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * trafficControl
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
   * - **PUBLIC**: public.
   * - **PRIVATE**: private.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      extend: 'Extend',
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
      extend: 'string',
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

export class ListMarketplaceAppPluginsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * The category of data cloud disk N. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * 
   * @example
   * {\\"Status\\": 0, \\"Name\\": u\\"\\u81ea\\u52a8\\u521b\\u5efacom.alibaba.cloudrobot.apitest.resource.AbstractResource1773800213419\\", \\"BizCode\\": \\"\\", \\"CategoryId\\": 30000941833, \\"ParentCategoryId\\": 30000941832}
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
   * The update time.
   * 
   * @example
   * 2026-03-18T10:03:56+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * -1
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
   * tf_testaccapigatewayplugin68046
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
   * Indicates whether the bucket to which the uploaded file belongs is publicly accessible. Valid values: **public** and **private**. A value of public indicates that the file is uploaded to a public bucket. A value of private indicates that the file is uploaded to a private bucket and requires authorization for access.
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

export class ListMarketplaceAppPluginsResponseBodyModule extends $dara.Model {
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
  data?: ListMarketplaceAppPluginsResponseBodyModuleData[];
  /**
   * @remarks
   * The next feature ID.
   */
  next?: ListMarketplaceAppPluginsResponseBodyModuleNext;
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
      data: { 'type': 'array', 'itemType': ListMarketplaceAppPluginsResponseBodyModuleData },
      next: ListMarketplaceAppPluginsResponseBodyModuleNext,
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

export class ListMarketplaceAppPluginsResponseBody extends $dara.Model {
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
   * The name of the application.
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
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
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
   * The response data.
   */
  module?: ListMarketplaceAppPluginsResponseBodyModule;
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
      module: ListMarketplaceAppPluginsResponseBodyModule,
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

