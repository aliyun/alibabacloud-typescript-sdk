// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApiResponseBodyRequestParametersRequestParameter } from "./DescribeDeployedApiResponseBodyRequestParametersRequestParameter";


export class DescribeDeployedApiResponseBodyRequestParameters extends $dara.Model {
  requestParameter?: DescribeDeployedApiResponseBodyRequestParametersRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      requestParameter: 'RequestParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyRequestParametersRequestParameter },
    };
  }

  validate() {
    if(Array.isArray(this.requestParameter)) {
      $dara.Model.validateArray(this.requestParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

