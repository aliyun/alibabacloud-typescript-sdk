// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceTicketResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The time when the access token expires.
   * 
   * @example
   * 1768619049924
   */
  accessTokenExpiresAt?: string;
  /**
   * @remarks
   * The time when the access token was issued.
   * 
   * @example
   * 1768619049924
   */
  accessTokenIssuedAt?: string;
  /**
   * @remarks
   * The access token value.
   * 
   * @example
   * be9750d595b6cd7c93a80b46
   */
  accessTokenValue?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12343131221311
   */
  aliyunPk?: string;
  /**
   * @remarks
   * The extended properties.
   * 
   * @example
   * {\\"resourceGroupId\\":\\"\\",\\"page\\":1,\\"size\\":10,\\"selected\\":\\"[\\\\\\"kvstore\\\\\\"]\\"}
   */
  attributes?: string;
  /**
   * @remarks
   * The authorization grant type.
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
   * The user ID.
   * 
   * @example
   * 12343131221311
   */
  parentPk?: string;
  /**
   * @remarks
   * The time when the refresh token expires.
   * 
   * @example
   * 1768619049924
   */
  refreshTokenExpiresAt?: string;
  /**
   * @remarks
   * The time when the refresh token was issued.
   * 
   * @example
   * 1768619049924
   */
  refreshTokenIssuedAt?: string;
  /**
   * @remarks
   * The refresh token value.
   * 
   * @example
   * be9750d595b6cd7c93a80b46
   */
  refreshTokenValue?: string;
  /**
   * @remarks
   * The external unique identifier.
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

export class CreateAppInstanceTicketResponseBody extends $dara.Model {
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
   * Indicates whether a retry is allowed.
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
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERRROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
   */
  module?: CreateAppInstanceTicketResponseBodyModule;
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
   * A reserved parameter.
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
      module: CreateAppInstanceTicketResponseBodyModule,
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

