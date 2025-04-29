// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageComponentsResponseBodyImageComponentImageComponentSetParametersParameter } from "./DescribeImageComponentsResponseBodyImageComponentImageComponentSetParametersParameter";


export class DescribeImageComponentsResponseBodyImageComponentImageComponentSetParameters extends $dara.Model {
  parameter?: DescribeImageComponentsResponseBodyImageComponentImageComponentSetParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeImageComponentsResponseBodyImageComponentImageComponentSetParametersParameter },
    };
  }

  validate() {
    if(Array.isArray(this.parameter)) {
      $dara.Model.validateArray(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

