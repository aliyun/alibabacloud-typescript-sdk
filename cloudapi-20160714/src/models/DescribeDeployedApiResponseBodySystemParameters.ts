// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApiResponseBodySystemParametersSystemParameter } from "./DescribeDeployedApiResponseBodySystemParametersSystemParameter";


export class DescribeDeployedApiResponseBodySystemParameters extends $dara.Model {
  systemParameter?: DescribeDeployedApiResponseBodySystemParametersSystemParameter[];
  static names(): { [key: string]: string } {
    return {
      systemParameter: 'SystemParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParameter: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodySystemParametersSystemParameter },
    };
  }

  validate() {
    if(Array.isArray(this.systemParameter)) {
      $dara.Model.validateArray(this.systemParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

