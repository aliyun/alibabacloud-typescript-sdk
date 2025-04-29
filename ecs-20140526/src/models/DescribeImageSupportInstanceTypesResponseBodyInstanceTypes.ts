// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageSupportInstanceTypesResponseBodyInstanceTypesInstanceType } from "./DescribeImageSupportInstanceTypesResponseBodyInstanceTypesInstanceType";


export class DescribeImageSupportInstanceTypesResponseBodyInstanceTypes extends $dara.Model {
  instanceType?: DescribeImageSupportInstanceTypesResponseBodyInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeImageSupportInstanceTypesResponseBodyInstanceTypesInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

