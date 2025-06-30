// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZoneInfoResponseBodyBindEdgeDnsClustersEdgeDnsCluster } from "./DescribeZoneInfoResponseBodyBindEdgeDnsClustersEdgeDnsCluster";


export class DescribeZoneInfoResponseBodyBindEdgeDnsClusters extends $dara.Model {
  edgeDnsCluster?: DescribeZoneInfoResponseBodyBindEdgeDnsClustersEdgeDnsCluster[];
  static names(): { [key: string]: string } {
    return {
      edgeDnsCluster: 'EdgeDnsCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeDnsCluster: { 'type': 'array', 'itemType': DescribeZoneInfoResponseBodyBindEdgeDnsClustersEdgeDnsCluster },
    };
  }

  validate() {
    if(Array.isArray(this.edgeDnsCluster)) {
      $dara.Model.validateArray(this.edgeDnsCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

