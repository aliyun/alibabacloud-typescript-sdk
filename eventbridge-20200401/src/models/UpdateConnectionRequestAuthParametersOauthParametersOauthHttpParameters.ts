// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters } from "./UpdateConnectionRequestAuthParametersOauthParametersOauthHttpParametersBodyParameters";
import { UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters } from "./UpdateConnectionRequestAuthParametersOauthParametersOauthHttpParametersHeaderParameters";
import { UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters } from "./UpdateConnectionRequestAuthParametersOauthParametersOauthHttpParametersQueryStringParameters";


export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured for the request.
   */
  bodyParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The parameters that are configured for the request header.
   */
  headerParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The parameters that are configured for the request path.
   */
  queryStringParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
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

