// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGadInstancesResponseBodyInstancesInstances } from "./DescribeGadInstancesResponseBodyInstancesInstances";


export class DescribeGadInstancesResponseBodyInstances extends $dara.Model {
  instances?: DescribeGadInstancesResponseBodyInstancesInstances[];
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyInstancesInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

