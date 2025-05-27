// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConnectionRequestAuthParametersOAuthParametersClientParameters } from "./UpdateConnectionRequestAuthParametersOauthParametersClientParameters";
import { UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters } from "./UpdateConnectionRequestAuthParametersOauthParametersOauthHttpParameters";


export class UpdateConnectionRequestAuthParametersOAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to obtain the OAuth token. The endpoint can be up to 127 characters in length.
   * 
   * @example
   * http://localhost:8080/oauth/token
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The parameters that are configured for the client.
   */
  clientParameters?: UpdateConnectionRequestAuthParametersOAuthParametersClientParameters;
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
  OAuthHttpParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters;
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
      clientParameters: UpdateConnectionRequestAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters,
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

