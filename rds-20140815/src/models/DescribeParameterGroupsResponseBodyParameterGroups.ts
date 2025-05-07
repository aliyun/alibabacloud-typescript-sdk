// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup } from "./DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup";


export class DescribeParameterGroupsResponseBodyParameterGroups extends $dara.Model {
  parameterGroup?: DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup[];
  static names(): { [key: string]: string } {
    return {
      parameterGroup: 'ParameterGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup },
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

