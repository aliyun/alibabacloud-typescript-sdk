// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateConnectionRequestAuthParametersApiKeyAuthParameters } from "./CreateConnectionRequestAuthParametersApiKeyAuthParameters";
import { CreateConnectionRequestAuthParametersBasicAuthParameters } from "./CreateConnectionRequestAuthParametersBasicAuthParameters";
import { CreateConnectionRequestAuthParametersOAuthParameters } from "./CreateConnectionRequestAuthParametersOauthParameters";


export class CreateConnectionRequestAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured for API key authentication.
   */
  apiKeyAuthParameters?: CreateConnectionRequestAuthParametersApiKeyAuthParameters;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   BASIC: basic authentication. Basic authentication is a simple authentication scheme built into the HTTP protocol. When you use the HTTP protocol for communications, the authentication method that the HTTP server uses to authenticate user identities on the client is defined in the protocol. The request header is in the Authorization: Basic Base64-encoded string (`Username:Password`) format. If you use this authentication method, you must configure Username and Password.
   * *   API_KEY_AUTH: API key authentication. The request header is in the Token: Token value format. If you use this authentication method, you must configure ApiKeyName and ApiKeyValue.
   * *   OAUTH_AUTH: OAuth authentication. OAuth2.0 is an authentication mechanism. In normal cases, a system that does not use OAuth2.0 can access the resources of the server from the client. To ensure access security, access tokens are used to authenticate users in OAuth 2.0. The client must use an access token to access protected resources. This way, OAuth 2.0 protects resources from being accessed from malicious clients and improves system security. If you use this authentication method, you must configure AuthorizationEndpoint, OAuthHttpParameters, and HttpMethod.
   * 
   * @example
   * BASIC_AUTH
   */
  authorizationType?: string;
  /**
   * @remarks
   * The parameters that are configured for basic authentication.
   */
  basicAuthParameters?: CreateConnectionRequestAuthParametersBasicAuthParameters;
  /**
   * @remarks
   * The parameters that are configured for OAuth authentication.
   */
  OAuthParameters?: CreateConnectionRequestAuthParametersOAuthParameters;
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
      apiKeyAuthParameters: CreateConnectionRequestAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: CreateConnectionRequestAuthParametersBasicAuthParameters,
      OAuthParameters: CreateConnectionRequestAuthParametersOAuthParameters,
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

