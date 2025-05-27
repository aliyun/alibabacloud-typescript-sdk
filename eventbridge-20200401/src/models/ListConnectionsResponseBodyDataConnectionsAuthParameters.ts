// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters";
import { ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters";
import { ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParametersOauthParameters";


export class ListConnectionsResponseBodyDataConnectionsAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The parameters that are returned for API key authentication.
   */
  apiKeyAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters;
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
   * The parameters that are returned for basic authentication.
   */
  basicAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters;
  /**
   * @remarks
   * The parameters that are returned for OAuth authentication.
   */
  OAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters;
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
      apiKeyAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters,
      OAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters,
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

