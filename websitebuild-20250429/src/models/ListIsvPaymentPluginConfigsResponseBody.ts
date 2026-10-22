// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIsvPaymentPluginConfigsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @remarks
   * The extended information.
   */
  extend?: { [key: string]: string };
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in seconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1740479834
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time. The value is in the ISO 8601 format and the UTC time zone.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-08-28T02:25:41Z
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
   * The plugin configuration.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * The plugin description.
   * 
   * @example
   * a simple test plugin
   */
  pluginDesc?: string;
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * 1bae9ceaceea432d91c7069fab0dfc02
   */
  pluginId?: string;
  /**
   * @remarks
   * The plugin name.
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
   * jugaocai.com
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

export class ListIsvPaymentPluginConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reasons why access is denied.
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
   * The app name.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic code. This parameter is not used and can be ignored.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
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
   * The maximum number of results to return per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response data.
   */
  module?: ListIsvPaymentPluginConfigsResponseBodyModule[];
  /**
   * @remarks
   * The token that is used to start the next query. If no more results are available, this value is empty.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
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
      module: { 'type': 'array', 'itemType': ListIsvPaymentPluginConfigsResponseBodyModule },
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

