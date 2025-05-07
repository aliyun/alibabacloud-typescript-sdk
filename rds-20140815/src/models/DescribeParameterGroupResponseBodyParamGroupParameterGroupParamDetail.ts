// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail } from "./DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail";


export class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail extends $dara.Model {
  parameterDetail?: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail[];
  static names(): { [key: string]: string } {
    return {
      parameterDetail: 'ParameterDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDetail: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail },
    };
  }

  validate() {
    if(Array.isArray(this.parameterDetail)) {
      $dara.Model.validateArray(this.parameterDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

