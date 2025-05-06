// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterParametersResponseBodyParametersParameters } from "./DescribeDbclusterParametersResponseBodyParametersParameters";


export class DescribeDBClusterParametersResponseBodyParameters extends $dara.Model {
  parameters?: DescribeDBClusterParametersResponseBodyParametersParameters[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeDBClusterParametersResponseBodyParametersParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

