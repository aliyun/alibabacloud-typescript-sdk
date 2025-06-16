// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance } from "./DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance";


export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances extends $dara.Model {
  globalAccelerationInstance?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance[];
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstance: 'GlobalAccelerationInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstance: { 'type': 'array', 'itemType': DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance },
    };
  }

  validate() {
    if(Array.isArray(this.globalAccelerationInstance)) {
      $dara.Model.validateArray(this.globalAccelerationInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

