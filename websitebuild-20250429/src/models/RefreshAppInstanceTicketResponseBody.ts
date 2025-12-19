// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAppInstanceTicketResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  accessTokenExpiresAt?: string;
  /**
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  accessTokenIssuedAt?: string;
  /**
   * @example
   * 2108341e17661121129745384e79f9
   */
  accessTokenValue?: string;
  /**
   * @example
   * 1907880872137014
   */
  aliyunPk?: string;
  /**
   * @example
   * {}
   */
  attributes?: string;
  /**
   * @example
   * authorization_code
   */
  authorizationGrantType?: string;
  /**
   * @remarks
   * bid
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @example
   * 1907880872137014
   */
  parentPk?: string;
  /**
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  refreshTokenExpiresAt?: string;
  /**
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  refreshTokenIssuedAt?: string;
  /**
   * @example
   * 2108341e17661121129745384e79f9
   */
  refreshTokenValue?: string;
  /**
   * @example
   * 357504C7F21FCAE502756332ECE8B533
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenExpiresAt: 'AccessTokenExpiresAt',
      accessTokenIssuedAt: 'AccessTokenIssuedAt',
      accessTokenValue: 'AccessTokenValue',
      aliyunPk: 'AliyunPk',
      attributes: 'Attributes',
      authorizationGrantType: 'AuthorizationGrantType',
      bid: 'Bid',
      parentPk: 'ParentPk',
      refreshTokenExpiresAt: 'RefreshTokenExpiresAt',
      refreshTokenIssuedAt: 'RefreshTokenIssuedAt',
      refreshTokenValue: 'RefreshTokenValue',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenExpiresAt: 'string',
      accessTokenIssuedAt: 'string',
      accessTokenValue: 'string',
      aliyunPk: 'string',
      attributes: 'string',
      authorizationGrantType: 'string',
      bid: 'string',
      parentPk: 'string',
      refreshTokenExpiresAt: 'string',
      refreshTokenIssuedAt: 'string',
      refreshTokenValue: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAppInstanceTicketResponseBody extends $dara.Model {
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
   * mar
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/uoa11auyf2565k6/uoa11auyf2565k6.sql.zip?Expires=1730520371&OSSAccessKeyId=LTAI5tKUErVCETM4ev9SELNb&Signature=WIutxAQYbbwxX0aeKmdObduLnDg%3D
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  module?: RefreshAppInstanceTicketResponseBodyModule;
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
   * SYSTEM.ERROR
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
      module: RefreshAppInstanceTicketResponseBodyModule,
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

