// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec } from "./DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec";


export class DescribeInstanceSpecResponseBodyInstanceSpecs extends $dara.Model {
  instanceSpec?: DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec },
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpec)) {
      $dara.Model.validateArray(this.instanceSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

