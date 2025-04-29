// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostCluster } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostCluster";


export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClusters extends $dara.Model {
  dedicatedHostCluster?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostCluster[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostCluster: 'DedicatedHostCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostCluster: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostCluster },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostCluster)) {
      $dara.Model.validateArray(this.dedicatedHostCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

