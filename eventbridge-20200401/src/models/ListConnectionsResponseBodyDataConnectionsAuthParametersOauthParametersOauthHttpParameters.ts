// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParametersOauthParametersOauthHttpParametersBodyParameters";
import { ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParametersOauthParametersOauthHttpParametersHeaderParameters";
import { ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParametersOauthParametersOauthHttpParametersQueryStringParameters";


export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured for the request.
   */
  bodyParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The parameters that are returned for the request header.
   */
  headerParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The parameters that are returned for the request path.
   */
  queryStringParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
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

