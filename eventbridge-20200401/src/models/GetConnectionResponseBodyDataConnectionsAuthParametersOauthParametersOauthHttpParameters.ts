// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParametersOauthParametersOauthHttpParametersBodyParameters";
import { GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParametersOauthParametersOauthHttpParametersHeaderParameters";
import { GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParametersOauthParametersOauthHttpParametersQueryStringParameters";


export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters extends $dara.Model {
  /**
   * @remarks
   * The information about the request body.
   */
  bodyParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The information about the request header.
   */
  headerParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The information about the request path.
   */
  queryStringParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
    };
  }

  validate() {
    if(Array.isArray(this.bodyParameters)) {
      $dara.Model.validateArray(this.bodyParameters);
    }
    if(Array.isArray(this.headerParameters)) {
      $dara.Model.validateArray(this.headerParameters);
    }
    if(Array.isArray(this.queryStringParameters)) {
      $dara.Model.validateArray(this.queryStringParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

