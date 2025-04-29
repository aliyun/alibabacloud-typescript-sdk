// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceAttribute } from "./DescribeInstancesResponseBodyInstancesInstanceAttribute";


export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  instanceAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'InstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.instanceAttribute)) {
      $dara.Model.validateArray(this.instanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

