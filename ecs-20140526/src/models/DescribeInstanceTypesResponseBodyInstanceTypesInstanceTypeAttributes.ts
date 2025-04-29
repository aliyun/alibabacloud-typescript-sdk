// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributesAttribute } from "./DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributesAttribute";


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributes extends $dara.Model {
  attribute?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributesAttribute[];
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributesAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.attribute)) {
      $dara.Model.validateArray(this.attribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

