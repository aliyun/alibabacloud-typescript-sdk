// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConversationLockStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether a retry is allowed.
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
   * The dynamic code. This parameter is not in use and can be ignored.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the specified request parameter **DtsJobId** is invalid.
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
   * 
   * @example
   * true
   */
  module?: boolean;
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
      module: 'boolean',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

