// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";
import { Tag } from "./Tag";


export class DescribeClustersV1ResponseBodyClustersOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * The frequency of auto cluster updates. For more information, see [Update frequency](https://help.aliyun.com/document_detail/2712866.html).
   * 
   * Valid values:
   * 
   * *   patch: the latest patch version.
   * *   stables: the second-latest minor version.
   * *   rapid: the latest minor version.
   * 
   * @example
   * patch
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to enable auto cluster update.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1ResponseBodyClustersOperationPolicy extends $dara.Model {
  /**
   * @remarks
   * The configurations of auto cluster update.
   */
  clusterAutoUpgrade?: DescribeClustersV1ResponseBodyClustersOperationPolicyClusterAutoUpgrade;
  static names(): { [key: string]: string } {
    return {
      clusterAutoUpgrade: 'cluster_auto_upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterAutoUpgrade: DescribeClustersV1ResponseBodyClustersOperationPolicyClusterAutoUpgrade,
    };
  }

  validate() {
    if(this.clusterAutoUpgrade && typeof (this.clusterAutoUpgrade as any).validate === 'function') {
      (this.clusterAutoUpgrade as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1ResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The domain name of the cluster.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c3fb96524f9274b4495df0f12a6b5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The specification of the cluster.
   * 
   * @example
   * ack.standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The pod CIDR block and the configuration of the Flannel network plug-in.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The time at which the instance is created.
   * 
   * @example
   * 2020-08-20T10:51:29+08:00
   */
  created?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster.
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster deletion protection. If you enable this option, the cluster cannot be deleted in the console or by calling API operations. Valid values:
   * 
   * *   `true`: enables deletion protection for the cluster. This way, the cluster cannot be deleted in the ACK console or by calling API operations.
   * *   `false`: disables deletion protection for the cluster. This way, the cluster can be deleted in the ACK console or by calling API operations.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Docker version that is used by the cluster.
   * 
   * @example
   * 19.03.5
   */
  dockerVersion?: string;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance that is used by the Ingresses of the cluster.
   * 
   * The default SLB specification is slb.s1.small, which belongs to the high-performance instance type.
   * 
   * @example
   * lb-2vcrbmlevo6kjpgch****
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * The version of the cluster. For more information about the Kubernetes versions supported by ACK, see [Release notes for Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The IP stack of the cluster. Valid values:
   * 
   * *   ipv4: creates a cluster that supports only the IPv4 protocol stack.
   * *   dual: creates a cluster that supports IPv4/IPv6 dual-stack.
   * 
   * @example
   * ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. This feature is available only for ACK managed clusters and ACK Serverless clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The address of the cluster API server. It includes an internal endpoint and a public endpoint.
   * 
   * @example
   * {\\"api_server_endpoint\\":\\"\\",\\"intranet_api_server_endpoint\\":\\"https://192.168.0.251:6443\\"}
   */
  masterUrl?: string;
  /**
   * @remarks
   * The metadata of the cluster.
   * 
   * @example
   * {\\"Addons\\":[{\\"config\\":***}
   */
  metaData?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The network mode of the cluster. Valid values:
   * 
   * *   `classic`: classic network.
   * *   `vpc`: virtual private cloud (VPC).
   * *   `overlay`: overlay network.
   * *   `calico`: network powered by Calico.
   * 
   * @example
   * vpc
   */
  networkMode?: string;
  /**
   * @remarks
   * The Kubernetes version to which the cluster can be updated.
   * 
   * @example
   * 1.18.8-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * The automatic O\\&M policy of the cluster.
   */
  operationPolicy?: DescribeClustersV1ResponseBodyClustersOperationPolicy;
  /**
   * @remarks
   * Indicates whether Alibaba Cloud DNS PrivateZone is enabled. Valid values:
   * 
   * *   `true`: Alibaba Cloud DNS PrivateZone is enabled.
   * *   `false`: Alibaba Cloud DNS PrivateZone is disabled.
   * 
   * @example
   * false
   */
  privateZone?: boolean;
  /**
   * @remarks
   * The subtype of the cluster.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy mode.
   * 
   * *   `iptables`: a mature and stable mode that uses iptables rules to conduct service discovery and load balancing. The performance of this mode is limited by the size of the cluster. This mode is suitable for clusters that run a small number of Services.
   * *   `ipvs`: provides high performance and uses IP Virtual Server (IPVS). This allows you to configure service discovery and load balancing. This mode is suitable for clusters that are required to run a large number of services. We recommend that you use this mode in scenarios that require high load balancing performance.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group of the cluster.
   * 
   * @example
   * sg-2vcgwsrwgt5mp0yi****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The Service CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The number of nodes in the cluster, including control planes and worker nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   `initial`: The cluster is being created.
   * *   `failed`: The cluster failed to be created.
   * *   `running`: The cluster is running.
   * *   `upgrading`: The cluster is undergoing an upgrade.
   * *   `updating`: Cluster specification changes are being applied.
   * *   `removing`: Nodes are being removed from the node pool.
   * *   `draining`: Node draining is in progress.
   * *   `scaling`: Auto-scaling operation is in progress for the cluster.
   * *   `stopped`: The cluster has stopped running.
   * *   `deleting`: The cluster is being deleted.
   * *   `deleted`: The cluster has been deleted.
   * *   `delete_failed`: The cluster failed to be deleted.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the container_cidr parameter to obtain the pod CIDR block.
   * 
   * @example
   * 172.21.0.0/16
   * 
   * @deprecated
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The label of the cluster.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The time zone
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 2020-09-16T11:09:55+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) that is used by the cluster.
   * 
   * @example
   * vpc-2vcg932hsxsxuqbgl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the cluster.
   * 
   * @example
   * vsw-2vc41xuumx5z2rdma****,vsw-2vc41xuumx5z2rdma****
   * 
   * @deprecated
   */
  vswitchId?: string;
  /**
   * @remarks
   * The vSwitches of the control planes.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * The name of the worker Resource Access Management (RAM) role. The RAM role is assigned to the worker nodes of the cluster to allow the worker nodes to manage ECS instances.
   * 
   * @example
   * KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****
   */
  workerRamRoleName?: string;
  /**
   * @remarks
   * The ID of the zone where the cluster is deployed.
   * 
   * @example
   * cn-beijing-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDomain: 'cluster_domain',
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      containerCidr: 'container_cidr',
      created: 'created',
      currentVersion: 'current_version',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
      initVersion: 'init_version',
      ipStack: 'ip_stack',
      maintenanceWindow: 'maintenance_window',
      masterUrl: 'master_url',
      metaData: 'meta_data',
      name: 'name',
      networkMode: 'network_mode',
      nextVersion: 'next_version',
      operationPolicy: 'operation_policy',
      privateZone: 'private_zone',
      profile: 'profile',
      proxyMode: 'proxy_mode',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      serviceCidr: 'service_cidr',
      size: 'size',
      state: 'state',
      subnetCidr: 'subnet_cidr',
      tags: 'tags',
      timezone: 'timezone',
      updated: 'updated',
      vpcId: 'vpc_id',
      vswitchId: 'vswitch_id',
      vswitchIds: 'vswitch_ids',
      workerRamRoleName: 'worker_ram_role_name',
      zoneId: 'zone_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDomain: 'string',
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      containerCidr: 'string',
      created: 'string',
      currentVersion: 'string',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
      initVersion: 'string',
      ipStack: 'string',
      maintenanceWindow: MaintenanceWindow,
      masterUrl: 'string',
      metaData: 'string',
      name: 'string',
      networkMode: 'string',
      nextVersion: 'string',
      operationPolicy: DescribeClustersV1ResponseBodyClustersOperationPolicy,
      privateZone: 'boolean',
      profile: 'string',
      proxyMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      serviceCidr: 'string',
      size: 'number',
      state: 'string',
      subnetCidr: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      timezone: 'string',
      updated: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerRamRoleName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.maintenanceWindow && typeof (this.maintenanceWindow as any).validate === 'function') {
      (this.maintenanceWindow as any).validate();
    }
    if(this.operationPolicy && typeof (this.operationPolicy as any).validate === 'function') {
      (this.operationPolicy as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1ResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried cluster details.
   */
  clusters?: DescribeClustersV1ResponseBodyClusters[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeClustersV1ResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersV1ResponseBodyClusters },
      pageInfo: DescribeClustersV1ResponseBodyPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

