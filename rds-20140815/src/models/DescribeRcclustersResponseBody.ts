// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCClustersResponseBodyClusters extends $dara.Model {
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test01
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2024-10-30T02:16:04Z
   */
  createTime?: string;
  profile?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * *   **Pending**
   * *   **Running**
   * *   **Starting**
   * *   **Stopping**
   * *   **Stopped**
   * 
   * @example
   * Running
   */
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      profile: 'Profile',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      profile: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

