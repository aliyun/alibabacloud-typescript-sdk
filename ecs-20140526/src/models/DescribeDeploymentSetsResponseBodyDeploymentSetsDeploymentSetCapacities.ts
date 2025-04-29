// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity } from "./DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity";


export class DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities extends $dara.Model {
  capacity?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: { 'type': 'array', 'itemType': DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity },
    };
  }

  validate() {
    if(Array.isArray(this.capacity)) {
      $dara.Model.validateArray(this.capacity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

