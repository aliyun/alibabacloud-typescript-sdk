// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClustersResponseBodyClustersCluster } from "./DescribeClustersResponseBodyClustersCluster";


export class DescribeClustersResponseBodyClusters extends $dara.Model {
  cluster?: DescribeClustersResponseBodyClustersCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': DescribeClustersResponseBodyClustersCluster },
    };
  }

  validate() {
    if(Array.isArray(this.cluster)) {
      $dara.Model.validateArray(this.cluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

