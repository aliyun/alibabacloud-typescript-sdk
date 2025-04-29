// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter } from "./DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter";


export class DescribeDeployedApiResponseBodyCustomSystemParameters extends $dara.Model {
  customSystemParameter?: DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      customSystemParameter: 'CustomSystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSystemParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter },
    };
  }

  validate() {
    if(Array.isArray(this.customSystemParameter)) {
      $dara.Model.validateArray(this.customSystemParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

