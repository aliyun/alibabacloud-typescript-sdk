// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppPluginResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The ID of the bound API Gateway plug-in.
   * 
   * @example
   * 1bae9ceaceea432d91c7069fab0dfc02
   */
  pluginId?: string;
  /**
   * @remarks
   * trial,draft,live,refunded,expired,released
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppPluginResponseBody extends $dara.Model {
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
   * Specifies whether a retry is allowed.
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
  module?: CreateAppPluginResponseBodyModule;
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
      module: CreateAppPluginResponseBodyModule,
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

