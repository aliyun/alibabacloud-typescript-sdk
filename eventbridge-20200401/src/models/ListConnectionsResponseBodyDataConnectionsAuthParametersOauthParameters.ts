// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParametersOauthParametersClientParameters";
import { ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParametersOauthParametersOauthHttpParameters";


export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters extends $dara.Model {
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
   * The parameters that are returned for the client.
   */
  clientParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters;
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
  OAuthHttpParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters;
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
      clientParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters,
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

