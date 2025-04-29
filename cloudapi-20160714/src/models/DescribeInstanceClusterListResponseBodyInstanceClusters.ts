// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceClusterListResponseBodyInstanceClustersInstanceCluster } from "./DescribeInstanceClusterListResponseBodyInstanceClustersInstanceCluster";


export class DescribeInstanceClusterListResponseBodyInstanceClusters extends $dara.Model {
  instanceCluster?: DescribeInstanceClusterListResponseBodyInstanceClustersInstanceCluster[];
  static names(): { [key: string]: string } {
    return {
      instanceCluster: 'InstanceCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCluster: { 'type': 'array', 'itemType': DescribeInstanceClusterListResponseBodyInstanceClustersInstanceCluster },
    };
  }

  validate() {
    if(Array.isArray(this.instanceCluster)) {
      $dara.Model.validateArray(this.instanceCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

