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

