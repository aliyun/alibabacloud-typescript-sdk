// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity } from "./DescribeRcdeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity";


export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities extends $dara.Model {
  capacity?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: { 'type': 'array', 'itemType': DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity },
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

