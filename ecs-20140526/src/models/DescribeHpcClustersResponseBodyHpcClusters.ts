// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHpcClustersResponseBodyHpcClustersHpcCluster } from "./DescribeHpcClustersResponseBodyHpcClustersHpcCluster";


export class DescribeHpcClustersResponseBodyHpcClusters extends $dara.Model {
  hpcCluster?: DescribeHpcClustersResponseBodyHpcClustersHpcCluster[];
  static names(): { [key: string]: string } {
    return {
      hpcCluster: 'HpcCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpcCluster: { 'type': 'array', 'itemType': DescribeHpcClustersResponseBodyHpcClustersHpcCluster },
    };
  }

  validate() {
    if(Array.isArray(this.hpcCluster)) {
      $dara.Model.validateArray(this.hpcCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

