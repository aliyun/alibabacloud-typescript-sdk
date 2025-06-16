// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance } from "./DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance";


export class DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances extends $dara.Model {
  globalAccelerationInstance?: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance[];
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstance: 'GlobalAccelerationInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstance: { 'type': 'array', 'itemType': DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance },
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

