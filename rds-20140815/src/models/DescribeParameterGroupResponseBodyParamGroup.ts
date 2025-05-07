// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupResponseBodyParamGroupParameterGroup } from "./DescribeParameterGroupResponseBodyParamGroupParameterGroup";


export class DescribeParameterGroupResponseBodyParamGroup extends $dara.Model {
  parameterGroup?: DescribeParameterGroupResponseBodyParamGroupParameterGroup[];
  static names(): { [key: string]: string } {
    return {
      parameterGroup: 'ParameterGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParamGroupParameterGroup },
    };
  }

  validate() {
    if(Array.isArray(this.parameterGroup)) {
      $dara.Model.validateArray(this.parameterGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

