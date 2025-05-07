// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCClustersResponseBodyClusters } from "./DescribeRcclustersResponseBodyClusters";


export class DescribeRCClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the clusters.
   */
  clusters?: DescribeRCClustersResponseBodyClusters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2875D608-A228-53D7-B8C9-35F13EDCF36D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeRCClustersResponseBodyClusters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

