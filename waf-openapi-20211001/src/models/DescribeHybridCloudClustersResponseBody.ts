// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridCloudClustersResponseBodyClusterInfos } from "./DescribeHybridCloudClustersResponseBodyClusterInfos";


export class DescribeHybridCloudClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the clusters.
   */
  clusterInfos?: DescribeHybridCloudClustersResponseBodyClusterInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-ER12-WE34-23PO-301469*****E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfos: 'ClusterInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfos: { 'type': 'array', 'itemType': DescribeHybridCloudClustersResponseBodyClusterInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterInfos)) {
      $dara.Model.validateArray(this.clusterInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

