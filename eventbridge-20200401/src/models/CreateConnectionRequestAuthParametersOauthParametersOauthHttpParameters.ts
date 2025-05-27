// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters } from "./CreateConnectionRequestAuthParametersOauthParametersOauthHttpParametersBodyParameters";
import { CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters } from "./CreateConnectionRequestAuthParametersOauthParametersOauthHttpParametersHeaderParameters";
import { CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters } from "./CreateConnectionRequestAuthParametersOauthParametersOauthHttpParametersQueryStringParameters";


export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured for the request body.
   */
  bodyParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The parameters that are configured for the request header.
   */
  headerParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The parameters that are configured for the request path.
   */
  queryStringParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
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

