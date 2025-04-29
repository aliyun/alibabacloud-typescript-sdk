// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily } from "./DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily";


export class DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamilies extends $dara.Model {
  instanceTypeFamily?: DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamily: 'InstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamily: { 'type': 'array', 'itemType': DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeFamily)) {
      $dara.Model.validateArray(this.instanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

