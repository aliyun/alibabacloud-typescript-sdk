// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute } from "./DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute";


export class DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributes extends $dara.Model {
  specAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute[];
  static names(): { [key: string]: string } {
    return {
      specAttribute: 'SpecAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.specAttribute)) {
      $dara.Model.validateArray(this.specAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

