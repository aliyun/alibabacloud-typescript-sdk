// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAuthConfigResponseBodyUserAuthConfig extends $dara.Model {
  /**
   * @remarks
   * The auth config, specified as a JSON string.
   * 
   * @example
   * {\\"apiKey":\\"xxxxxxxxxx\\"}
   */
  authConfig?: string;
  /**
   * @remarks
   * The credential ID.
   * 
   * @example
   * uac-111111111
   */
  authConfigId?: string;
  /**
   * @remarks
   * The credential name.
   * 
   * @example
   * dingtlak_name
   */
  authConfigName?: string;
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * ApiKey
   */
  authType?: string;
  /**
   * @remarks
   * The connector ID.
   * 
   * @example
   * connector-172176821387
   */
  connectorId?: string;
  /**
   * @remarks
   * The connector version.
   * 
   * @example
   * 1
   */
  connectorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'AuthConfig',
      authConfigId: 'AuthConfigId',
      authConfigName: 'AuthConfigName',
      authType: 'AuthType',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      authConfigId: 'string',
      authConfigName: 'string',
      authType: 'string',
      connectorId: 'string',
      connectorVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAuthConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 458CB9FE-8C71-58A8-AD49-97EF28D58FAB
   */
  requestId?: string;
  /**
   * @remarks
   * Contains the credential details.
   */
  userAuthConfig?: GetUserAuthConfigResponseBodyUserAuthConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userAuthConfig: 'UserAuthConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userAuthConfig: GetUserAuthConfigResponseBodyUserAuthConfig,
    };
  }

  validate() {
    if(this.userAuthConfig && typeof (this.userAuthConfig as any).validate === 'function') {
      (this.userAuthConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

