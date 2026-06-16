// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAppInstanceTicketResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The time when the access token expires.
   * 
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  accessTokenExpiresAt?: string;
  /**
   * @remarks
   * The time when the access token was issued.
   * 
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  accessTokenIssuedAt?: string;
  /**
   * @remarks
   * The access token value.
   * 
   * @example
   * 2108341e17661121129745384e79f9
   */
  accessTokenValue?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1907880872137014
   */
  aliyunPk?: string;
  /**
   * @remarks
   * The extended properties.
   * 
   * @example
   * {}
   */
  attributes?: string;
  /**
   * @remarks
   * The authorization code type.
   * 
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
   * @remarks
   * The user ID.
   * 
   * @example
   * 1907880872137014
   */
  parentPk?: string;
  /**
   * @remarks
   * The time when the refresh token expires.
   * 
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  refreshTokenExpiresAt?: string;
  /**
   * @remarks
   * The time when the refresh token was issued.
   * 
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  refreshTokenIssuedAt?: string;
  /**
   * @remarks
   * The refresh token value.
   * 
   * @example
   * 2108341e17661121129745384e79f9
   */
  refreshTokenValue?: string;
  /**
   * @remarks
   * The external unique identifier.
   * 
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
   * mar
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
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
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
   * The application module.
   */
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

