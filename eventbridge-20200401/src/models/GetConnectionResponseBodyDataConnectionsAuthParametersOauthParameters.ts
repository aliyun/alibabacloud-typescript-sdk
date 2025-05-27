// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParametersOauthParametersClientParameters";
import { GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParametersOauthParametersOauthHttpParameters";


export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to obtain the OAuth token.
   * 
   * @example
   * http://localhost:8080/oauth/token
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The information about the client.
   */
  clientParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   GET
   * *   POST
   * *   HEAD
   * 
   * @example
   * POST
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request parameters of OAuth authentication.
   */
  OAuthHttpParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      clientParameters: 'ClientParameters',
      httpMethod: 'HttpMethod',
      OAuthHttpParameters: 'OAuthHttpParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters,
    };
  }

  validate() {
    if(this.clientParameters && typeof (this.clientParameters as any).validate === 'function') {
      (this.clientParameters as any).validate();
    }
    if(this.OAuthHttpParameters && typeof (this.OAuthHttpParameters as any).validate === 'function') {
      (this.OAuthHttpParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

