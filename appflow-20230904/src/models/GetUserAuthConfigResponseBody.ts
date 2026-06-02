// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAuthConfigResponseBodyUserAuthConfig extends $dara.Model {
  /**
   * @example
   * {\\"apiKey":\\"xxxxxxxxxx\\"}
   */
  authConfig?: string;
  /**
   * @example
   * uac-111111111
   */
  authConfigId?: string;
  /**
   * @example
   * dingtlak_name
   */
  authConfigName?: string;
  /**
   * @example
   * ApiKey
   */
  authType?: string;
  /**
   * @example
   * connector-172176821387
   */
  connectorId?: string;
  /**
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
   * Id of the request
   * 
   * @example
   * 458CB9FE-8C71-58A8-AD49-97EF28D58FAB
   */
  requestId?: string;
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

