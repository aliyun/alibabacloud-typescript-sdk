// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceClusterListResponseBodyInstanceClustersInstanceCluster extends $dara.Model {
  /**
   * @remarks
   * The time when the cluster was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-14T17:46:59+08:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * Test TrafficControl
   */
  description?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * apigateway-cluster-hz-xxxxxxxxxxxx
   */
  instanceClusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test-cluster
   */
  instanceClusterName?: string;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * RUNNING
   */
  instanceClusterStatus?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * normal
   */
  instanceClusterType?: string;
  /**
   * @remarks
   * The time when the cluster was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2024-01-12T10:11:08+08:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceClusterId: 'InstanceClusterId',
      instanceClusterName: 'InstanceClusterName',
      instanceClusterStatus: 'InstanceClusterStatus',
      instanceClusterType: 'InstanceClusterType',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      instanceClusterId: 'string',
      instanceClusterName: 'string',
      instanceClusterStatus: 'string',
      instanceClusterType: 'string',
      modifiedTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

