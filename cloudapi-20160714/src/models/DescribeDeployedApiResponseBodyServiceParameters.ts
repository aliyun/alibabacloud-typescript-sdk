// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApiResponseBodyServiceParametersServiceParameter } from "./DescribeDeployedApiResponseBodyServiceParametersServiceParameter";


export class DescribeDeployedApiResponseBodyServiceParameters extends $dara.Model {
  serviceParameter?: DescribeDeployedApiResponseBodyServiceParametersServiceParameter[];
  static names(): { [key: string]: string } {
    return {
      serviceParameter: 'ServiceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyServiceParametersServiceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.serviceParameter)) {
      $dara.Model.validateArray(this.serviceParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

