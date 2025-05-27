// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters";
import { GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters";
import { GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParametersOauthParameters";


export class GetConnectionResponseBodyDataConnectionsAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The information about API key authentication.
   */
  apiKeyAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters;
  /**
   * @remarks
   * The authentication method. Valid values:
   * 
   * *   BASIC_AUTH: basic authentication.
   * *   API_KEY_AUTH: API key authentication.
   * *   OAUTH_AUTH: OAuth authentication.
   * 
   * @example
   * BASIC_AUTH
   */
  authorizationType?: string;
  /**
   * @remarks
   * The information about basic authentication.
   */
  basicAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters;
  /**
   * @remarks
   * The information about OAuth authentication.
   */
  OAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters;
  static names(): { [key: string]: string } {
    return {
      apiKeyAuthParameters: 'ApiKeyAuthParameters',
      authorizationType: 'AuthorizationType',
      basicAuthParameters: 'BasicAuthParameters',
      OAuthParameters: 'OAuthParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters,
      OAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters,
    };
  }

  validate() {
    if(this.apiKeyAuthParameters && typeof (this.apiKeyAuthParameters as any).validate === 'function') {
      (this.apiKeyAuthParameters as any).validate();
    }
    if(this.basicAuthParameters && typeof (this.basicAuthParameters as any).validate === 'function') {
      (this.basicAuthParameters as any).validate();
    }
    if(this.OAuthParameters && typeof (this.OAuthParameters as any).validate === 'function') {
      (this.OAuthParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

