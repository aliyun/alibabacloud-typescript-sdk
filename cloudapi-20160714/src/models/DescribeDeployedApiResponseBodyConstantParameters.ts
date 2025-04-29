// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApiResponseBodyConstantParametersConstantParameter } from "./DescribeDeployedApiResponseBodyConstantParametersConstantParameter";


export class DescribeDeployedApiResponseBodyConstantParameters extends $dara.Model {
  constantParameter?: DescribeDeployedApiResponseBodyConstantParametersConstantParameter[];
  static names(): { [key: string]: string } {
    return {
      constantParameter: 'ConstantParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyConstantParametersConstantParameter },
    };
  }

  validate() {
    if(Array.isArray(this.constantParameter)) {
      $dara.Model.validateArray(this.constantParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

