// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BindAppDomainResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAppDomainResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * or
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/vs1w2yd3p8264pz/vs1w2yd3p8264pz.diff.zip?Expires=1739592470&OSSAccessKeyId=LTAI5tKUErVCETM4ev9SELNb&Signature=3DRuMtCeTinVYxo7XAOEIOEmZGE%3D
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  module?: BindAppDomainResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @example
   * SYSTEM.EROR
   */
  rootErrorCode?: string;
  rootErrorMsg?: string;
  /**
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
      module: BindAppDomainResponseBodyModule,
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

