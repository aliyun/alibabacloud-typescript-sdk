// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity";


export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities extends $dara.Model {
  localStorageCapacity?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity[];
  static names(): { [key: string]: string } {
    return {
      localStorageCapacity: 'LocalStorageCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localStorageCapacity: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity },
    };
  }

  validate() {
    if(Array.isArray(this.localStorageCapacity)) {
      $dara.Model.validateArray(this.localStorageCapacity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

