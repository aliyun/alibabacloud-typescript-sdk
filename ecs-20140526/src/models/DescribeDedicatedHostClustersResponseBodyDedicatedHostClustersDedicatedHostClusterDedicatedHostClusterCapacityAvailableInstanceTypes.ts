// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypesAvailableInstanceType } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypesAvailableInstanceType";


export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypes extends $dara.Model {
  availableInstanceType?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypesAvailableInstanceType[];
  static names(): { [key: string]: string } {
    return {
      availableInstanceType: 'AvailableInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceType: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypesAvailableInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.availableInstanceType)) {
      $dara.Model.validateArray(this.availableInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

