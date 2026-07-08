// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssUploadPolicyResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The upload directory path.
   * 
   * @example
   * pano_src/100070-2679478/images/
   */
  dir?: string;
  /**
   * @remarks
   * The OSS bucket host address.
   * 
   * @example
   * *.com
   */
  host?: string;
  /**
   * @remarks
   * The Base64-encoded policy.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The Security Token Service (STS) token. This parameter is null in non-STS scenarios.
   * 
   * @example
   * ***
   */
  securityToken?: string;
  /**
   * @remarks
   * The calculated signature.
   * 
   * @example
   * ****************************
   */
  signature?: string;
  /**
   * @remarks
   * The signature version, such as OSS4-HMAC-SHA256.
   * 
   * @example
   * 2019-04-02
   */
  version?: string;
  /**
   * @remarks
   * x-oss-credential
   * 
   * @example
   * 123123
   */
  xossCredential?: string;
  /**
   * @remarks
   * x-oss-date
   * 
   * @example
   * 20260101
   */
  xossDate?: string;
  static names(): { [key: string]: string } {
    return {
      dir: 'Dir',
      host: 'Host',
      policy: 'Policy',
      securityToken: 'SecurityToken',
      signature: 'Signature',
      version: 'Version',
      xossCredential: 'XossCredential',
      xossDate: 'XossDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dir: 'string',
      host: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
      version: 'string',
      xossCredential: 'string',
      xossDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadPolicyResponseBody extends $dara.Model {
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
   * Indicates whether a retry is allowed. Valid values:
   * - false: No retry is allowed.
   * - true: A retry is allowed.
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
   * The dynamic message.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The task object.
   */
  module?: GetOssUploadPolicyResponseBodyModule;
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
      module: GetOssUploadPolicyResponseBodyModule,
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

