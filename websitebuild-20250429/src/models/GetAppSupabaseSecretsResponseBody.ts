// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSupabaseSecretsResponseBodyModuleSecrets extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * curl GCEA6fET.popscan.xaliyun.com
   */
  key?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * LOGO3.png
   */
  name?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - Generic: generic credential.  
   * - Rds: ApsaraDB RDS credential.  
   * - Redis: Redis/Tair credential.
   * - RAMCredentials: RAM credential.  
   * - ECS: ECS credential.
   * - PolarDB: PolarDB credential.
   * 
   * @example
   * Opaque
   */
  secretType?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 58.16.60.28
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
      secretType: 'SecretType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      secretType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSupabaseSecretsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   */
  secrets?: GetAppSupabaseSecretsResponseBodyModuleSecrets[];
  static names(): { [key: string]: string } {
    return {
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secrets: { 'type': 'array', 'itemType': GetAppSupabaseSecretsResponseBodyModuleSecrets },
    };
  }

  validate() {
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSupabaseSecretsResponseBody extends $dara.Model {
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
   * The dynamic error message, which is used to replace the `%s` variable in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
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
   * The response object.
   */
  module?: GetAppSupabaseSecretsResponseBodyModule;
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
   * SYSTEM.EROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * 系统异常
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
      module: GetAppSupabaseSecretsResponseBodyModule,
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

