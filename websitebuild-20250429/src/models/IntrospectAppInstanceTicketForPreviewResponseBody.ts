// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntrospectAppInstanceTicketForPreviewResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Access token time-to-live (TTL)
   * 
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  accessTokenExpiresAt?: string;
  /**
   * @remarks
   * Access token issue Time
   * 
   * @example
   * 2025-12-18T22:30:00+08:00
   */
  accessTokenIssuedAt?: string;
  /**
   * @remarks
   * Access token value
   * 
   * @example
   * 2108341e17661121129745384e79f9
   */
  accessTokenValue?: string;
  /**
   * @remarks
   * aliyunPk
   * 
   * @example
   * 12343131221311
   */
  aliyunPk?: string;
  /**
   * @remarks
   * Extension property
   * 
   * @example
   * {}
   */
  attributes?: string;
  /**
   * @remarks
   * Authorization code Type
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
   * 123131
   */
  bid?: string;
  /**
   * @remarks
   * Parent Alibaba Cloud PK
   * 
   * @example
   * 12343131221311
   */
  parentPk?: string;
  /**
   * @remarks
   * Time-to-live (TTL) of the refresh token
   * 
   * @example
   * 1768619049924
   */
  refreshTokenExpiresAt?: string;
  /**
   * @remarks
   * Refresh token issue Time
   * 
   * @example
   * 1768619049924
   */
  refreshTokenIssuedAt?: string;
  /**
   * @remarks
   * Refresh token value
   * 
   * @example
   * be9750d595b6cd7c93a80b46
   */
  refreshTokenValue?: string;
  /**
   * @remarks
   * Externally Unique
   * 
   * @example
   * hdm_33be9750d595b6cd7c93a80b46734b22
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

export class IntrospectAppInstanceTicketForPreviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed reason for access denial.
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
   * App Name.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the provided request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Returned object.
   */
  module?: IntrospectAppInstanceTicketForPreviewResponseBodyModule;
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Reserved parameter.
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
      module: IntrospectAppInstanceTicketForPreviewResponseBodyModule,
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

