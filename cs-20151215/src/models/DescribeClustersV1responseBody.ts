// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";
import { Tag } from "./Tag";


export class DescribeClustersV1ResponseBodyClustersOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * The upgrade channel. For more information, see [Upgrade channels](https://help.aliyun.com/document_detail/2712866.html).
   * 
   * Valid values:
   * 
   * - `patch`: Upgrades the cluster to the latest available patch version.
   * 
   * - `stable`: Upgrades the cluster to the latest stable minor version. This version is typically the second latest minor version.
   * 
   * - `rapid`: Upgrades the cluster to the latest available minor version.
   * 
   * @example
   * patch
   */
  channel?: string;
  /**
   * @remarks
   * Indicates whether auto-upgrade is enabled for the cluster.
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
   * The cluster auto-upgrade policy.
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
   * The edition of the cluster.
   * 
   * @example
   * ack.standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The CIDR block of pods. This parameter is applicable to Flannel networks.
   * 
   * @example
   * 172.20.xx.xx/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2025-04-07T09:57:26+08:00
   */
  created?: string;
  /**
   * @remarks
   * The current version of the cluster.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. If deletion protection is enabled, you cannot delete the cluster in the console or by calling an API operation. Valid values:
   * 
   * - `true`: Deletion protection is enabled.
   * 
   * - `false`: Deletion protection is disabled.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Docker version of the cluster.
   * 
   * @example
   * 19.03.5
   * 
   * @deprecated
   */
  dockerVersion?: string;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance that is used for the Ingress.
   * 
   * Default instance specification: slb.s1.small (performance-guaranteed).
   * 
   * @example
   * lb-2vcrbmlevo6kjpgch****
   * 
   * @deprecated
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * The initial version of the cluster. For information about the Kubernetes versions supported by ACK, see [Kubernetes release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The IP stack of the cluster. Valid values:
   * 
   * - `ipv4`: an IPv4-only cluster.
   * 
   * - `dual`: a dual-stack cluster that supports both IPv4 and IPv6.
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
   * The endpoints of the API server. The endpoints include an internal endpoint and a public endpoint.
   * 
   * @example
   * {\\"api_server_endpoint\\":\\"\\",\\"intranet_api_server_endpoint\\":\\"https://192.168.xx.xx:6443\\"}
   */
  masterUrl?: string;
  /**
   * @remarks
   * The metadata of the cluster.
   * 
   * @example
   * {\\"Addons\\":[{\\"config\\":***}}
   */
  metaData?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The network mode of the cluster. Valid values:
   * 
   * - `classic`: classic network
   * 
   * - `vpc`: VPC
   * 
   * - `overlay`: overlay network
   * 
   * - `calico`: Calico network
   * 
   * @example
   * vpc
   * 
   * @deprecated
   */
  networkMode?: string;
  /**
   * @remarks
   * The version to which the cluster can be upgraded.
   * 
   * @example
   * 1.xx.x-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * The auto O\\&M policy of the cluster.
   */
  operationPolicy?: DescribeClustersV1ResponseBodyClustersOperationPolicy;
  /**
   * @remarks
   * Indicates whether PrivateZone is enabled. Valid values:
   * 
   * - `true`: PrivateZone is enabled.
   * 
   * - `false`: PrivateZone is disabled.
   * 
   * @example
   * false
   * 
   * @deprecated
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
   * The kube-proxy proxy mode.
   * 
   * - `iptables`: a stable and mature proxy mode. The service discovery and load balancing of Kubernetes Services are implemented by using iptables rules. This mode offers moderate performance and is suitable for clusters that have a small number of Services.
   * 
   * - `ipvs`: a high-performance proxy mode. The service discovery and load balancing of Kubernetes Services are implemented by using the Linux IP Virtual Server (IPVS) module. This mode is suitable for clusters that have a large number of Services and require high-performance load balancing.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * The ID of the region where the cluster is deployed.
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
   * The ID of the security group to which the cluster belongs.
   * 
   * @example
   * sg-2vcgwsrwgt5mp0yi****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The CIDR block of Services.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.xx.xx/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The total number of nodes in the cluster. This includes master nodes and worker nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * - `initial`: The cluster is being created.
   * 
   * - `failed`: The cluster failed to be created.
   * 
   * - `running`: The cluster is running.
   * 
   * - `updating`: The cluster is being updated.
   * 
   * - `upgrading`: The cluster is being upgraded.
   * 
   * - `removing`: Nodes are being removed from the cluster.
   * 
   * - `draining`: Nodes in the cluster are being drained.
   * 
   * - `scaling`: The cluster is being scaled.
   * 
   * - `inactive`: The cluster is inactive.
   * 
   * - `unavailable`: The cluster is unavailable.
   * 
   * - `deleting`: The cluster is being deleted.
   * 
   * - `deleted`: The cluster has been deleted.
   * 
   * - `delete_failed`: The cluster failed to be deleted.
   * 
   * - `waiting`: The cluster is awaiting connection.
   * 
   * - `disconnected`: The cluster is disconnected.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `container_cidr` parameter to obtain the pod CIDR block.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The tags of the cluster.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The time zone of the cluster.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The time when the cluster was last updated.
   * 
   * @example
   * 2025-04-07T09:57:26+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the VPC in which the cluster is deployed.
   * 
   * @example
   * vpc-2vcg932hsxsxuqbgl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the cluster belongs.
   * 
   * @example
   * vsw-2vc41xuumx5z2rdma****,vsw-2vc41xuumx5z2rdma****
   * 
   * @deprecated
   */
  vswitchId?: string;
  /**
   * @remarks
   * The vSwitches of the cluster control plane.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * The name of the worker RAM role. This role is used to authorize Elastic Compute Service (ECS) instances to be used as worker nodes.
   * 
   * @example
   * KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****
   * 
   * @deprecated
   */
  workerRamRoleName?: string;
  /**
   * @remarks
   * The ID of the zone in which the cluster is deployed.
   * 
   * @example
   * cn-beijing-b
   * 
   * @deprecated
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
   * The total number of entries that were returned.
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
   * A list of clusters.
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

