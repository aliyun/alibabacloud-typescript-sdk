// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateConnectionRequestAuthParametersOAuthParametersClientParameters } from "./CreateConnectionRequestAuthParametersOauthParametersClientParameters";
import { CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters } from "./CreateConnectionRequestAuthParametersOauthParametersOauthHttpParameters";


export class CreateConnectionRequestAuthParametersOAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the authorized client. The endpoint can be up to 127 characters in length.
   * 
   * @example
   * http://localhost:8080/oauth/token
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The parameters that are configured for the client.
   */
  clientParameters?: CreateConnectionRequestAuthParametersOAuthParametersClientParameters;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   GET
   * *   POST
   * *   HEAD
   * *   DELETE
   * *   PUT
   * *   PATCH
   * 
   * @example
   * POST
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request parameters of OAuth authentication.
   */
  OAuthHttpParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters;
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
      clientParameters: CreateConnectionRequestAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters,
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

