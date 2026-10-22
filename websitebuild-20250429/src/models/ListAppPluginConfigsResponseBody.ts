// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginConfigsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Indicates whether the item is displayed.
   * 
   * @example
   * always
   */
  display?: number;
  /**
   * @remarks
   * Specifies whether scheduled delivery of resource snapshots is enabled.
   * 
   * Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * True
   */
  enabled?: number;
  /**
   * @remarks
   * The extension information.
   */
  extend?: { [key: string]: string };
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format in UTC (Z).
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-10-11T06:25:13Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time. The time is in ISO 8601 format in UTC (Z).
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-05-20T01:59:17.000Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 16257
   */
  id?: number;
  /**
   * @remarks
   * The plug-in configuration.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * a simple test plugin
   */
  pluginDesc?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * 1bae9ceaceea432d91c7069fab0dfc02
   */
  pluginId?: string;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * tf_testaccapigatewayplugin29311
   */
  pluginName?: string;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * wkweb.cn
   */
  siteName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      display: 'Display',
      enabled: 'Enabled',
      extend: 'Extend',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      id: 'Id',
      pluginConfig: 'PluginConfig',
      pluginDesc: 'PluginDesc',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      siteName: 'SiteName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      display: 'number',
      enabled: 'number',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      id: 'number',
      pluginConfig: 'string',
      pluginDesc: 'string',
      pluginId: 'string',
      pluginName: 'string',
      siteName: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPluginConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
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
   * The dynamic error message, which is used to replace the `%s` variable in the **ErrMessage** return parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the request parameter **DtsJobId** is invalid.
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
   * The number of entries per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The task object.
   */
  module?: ListAppPluginConfigsResponseBodyModule[];
  /**
   * @remarks
   * The token for the next query. This parameter is empty if no more results exist.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
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
   * Indicates whether the request is synchronously processed.
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
      maxResults: 'MaxResults',
      module: 'Module',
      nextToken: 'NextToken',
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
      maxResults: 'number',
      module: { 'type': 'array', 'itemType': ListAppPluginConfigsResponseBodyModule },
      nextToken: 'string',
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
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

