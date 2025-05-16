// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClustersResponseBodyClustersAdditionalPackages } from "./ListClustersResponseBodyClustersAdditionalPackages";
import { ListClustersResponseBodyClustersAddons } from "./ListClustersResponseBodyClustersAddons";
import { ListClustersResponseBodyClustersClusterCustomConfiguration } from "./ListClustersResponseBodyClustersClusterCustomConfiguration";
import { ListClustersResponseBodyClustersManager } from "./ListClustersResponseBodyClustersManager";
import { ListClustersResponseBodyClustersNodes } from "./ListClustersResponseBodyClustersNodes";
import { ListClustersResponseBodyClustersUsers } from "./ListClustersResponseBodyClustersUsers";


export class ListClustersResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The information about installed software in the cluster.
   */
  additionalPackages?: ListClustersResponseBodyClustersAdditionalPackages[];
  /**
   * @remarks
   * The information about the addons in the cluster.
   */
  addons?: ListClustersResponseBodyClustersAddons[];
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  /**
   * @remarks
   * The logon credential type of the cluster. Valid values:
   * 
   * *   password: requires passwords for logons.
   * *   keypair: requires key pairs for logons.
   */
  clusterCredentials?: string[];
  /**
   * @remarks
   * The post-processing script used by the cluster.
   */
  clusterCustomConfiguration?: ListClustersResponseBodyClustersClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * Demo
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-VMKe******
   */
  clusterId?: string;
  /**
   * @remarks
   * The deployment type of the cluster. Valid values:
   * 
   * *   Integrated: public cloud
   * *   Hybrid: hybrid cloud
   * *   Custom: a custom cluster
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The time when the cluster was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterModifyTime?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * slurm22.05.8-cluster-20240227
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * 
   * *   uninit: The cluster is being installed.
   * *   creating: The cluster is being created.
   * *   initing: The cluster is being initialized.
   * *   running: The cluster is running.
   * *   Releasing: The cluster is being released.
   * *   stopping: The cluster is being stopped.
   * *   stopped: The cluster is stopped.
   * *   exception: The cluster has run into an exception.
   * *   pending: The cluster is waiting to be configured.
   * 
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The vCPU-hour usage of the cluster.
   * 
   * @example
   * 1000
   */
  clusterUsedCoreTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch used by the cluster.
   * 
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) used by the cluster.
   * 
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Elastic High Performance Computing (E-HPC) version.
   * 
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * The configurations of the cluster management node.
   */
  manager?: ListClustersResponseBodyClustersManager;
  /**
   * @remarks
   * The maximum total number of vCPUs used by the compute nodes that can be managed by the cluster.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that can be managed by the cluster.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  /**
   * @remarks
   * The node statistics of the cluster.
   */
  nodes?: ListClustersResponseBodyClustersNodes;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group used by the cluster.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The user attribute information of the cluster.
   */
  users?: ListClustersResponseBodyClustersUsers;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      addons: 'Addons',
      clusterCategory: 'ClusterCategory',
      clusterCreateTime: 'ClusterCreateTime',
      clusterCredentials: 'ClusterCredentials',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterModifyTime: 'ClusterModifyTime',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterUsedCoreTime: 'ClusterUsedCoreTime',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      ehpcVersion: 'EhpcVersion',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      nodes: 'Nodes',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAdditionalPackages },
      addons: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAddons },
      clusterCategory: 'string',
      clusterCreateTime: 'string',
      clusterCredentials: { 'type': 'array', 'itemType': 'string' },
      clusterCustomConfiguration: ListClustersResponseBodyClustersClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterId: 'string',
      clusterMode: 'string',
      clusterModifyTime: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterUsedCoreTime: 'number',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      ehpcVersion: 'string',
      manager: ListClustersResponseBodyClustersManager,
      maxCoreCount: 'number',
      maxCount: 'number',
      nodes: ListClustersResponseBodyClustersNodes,
      resourceGroupId: 'string',
      securityGroupId: 'string',
      users: ListClustersResponseBodyClustersUsers,
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackages)) {
      $dara.Model.validateArray(this.additionalPackages);
    }
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    if(Array.isArray(this.clusterCredentials)) {
      $dara.Model.validateArray(this.clusterCredentials);
    }
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

