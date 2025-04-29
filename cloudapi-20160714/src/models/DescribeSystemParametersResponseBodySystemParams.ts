// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSystemParametersResponseBodySystemParamsSystemParamItem } from "./DescribeSystemParametersResponseBodySystemParamsSystemParamItem";


export class DescribeSystemParametersResponseBodySystemParams extends $dara.Model {
  systemParamItem?: DescribeSystemParametersResponseBodySystemParamsSystemParamItem[];
  static names(): { [key: string]: string } {
    return {
      systemParamItem: 'SystemParamItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParamItem: { 'type': 'array', 'itemType': DescribeSystemParametersResponseBodySystemParamsSystemParamItem },
    };
  }

  validate() {
    if(Array.isArray(this.systemParamItem)) {
      $dara.Model.validateArray(this.systemParamItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

