// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";
import { Tag } from "./Tag";


export class DescribeClustersV1ResponseBodyClustersOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * The auto-upgrade channel for the cluster. For more information, refer to [Upgrade channels](https://help.aliyun.com/document_detail/2712866.html). Valid values:
   * - patch: The latest patch version.
   * - stable: The second latest minor version.
   * - rapid: The latest minor version.
   * 
   * @example
   * patch
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether auto-upgrade is enabled for the cluster.
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
   * The auto-upgrade settings for the cluster.
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
   * The local domain name of the cluster.
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
   * The cluster specifications.
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
   * The Pod network CIDR block for Flannel network configuration.
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
   * Specifies whether deletion protection is enabled for the cluster to prevent accidental deletion through the console or API. Valid values:
   * 
   * - true: Deletion protection is enabled. The cluster cannot be deleted through the console or API.
   * - false: Deletion protection is disabled. The cluster can be deleted through the console or API.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Docker version used by the cluster.
   * 
   * @example
   * 19.03.5
   * 
   * @deprecated
   */
  dockerVersion?: string;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance for the Ingress in the cluster.
   * 
   * Default instance type: guaranteed-performance instance (slb.s1.small).
   * 
   * @example
   * lb-2vcrbmlevo6kjpgch****
   * 
   * @deprecated
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * The initial version of the cluster. For the Kubernetes versions supported by ACK, refer to [Overview of Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The IP protocol stack of the cluster. Valid values:
   * - ipv4: Creates a cluster that supports only the IPv4 protocol stack.
   * - dual: Creates a cluster that supports both IPv4 and IPv6 protocol stacks.
   * 
   * @example
   * ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. This feature takes effect only in ACK managed clusters and ACK Serverless clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The access endpoints of the cluster API server, including the internal network access address and the public network access address.
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
   * The cluster name. Fuzzy match is supported.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The network mode of the cluster. Valid values:
   * 
   * - classic: classic network
   * - vpc: VPC
   * - overlay: overlay network
   * - calico: Calico network
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
   * The automated O&M policy of the cluster.
   */
  operationPolicy?: DescribeClustersV1ResponseBodyClustersOperationPolicy;
  /**
   * @remarks
   * The Private Zone configuration of the cluster. Valid values:
   * 
   * - true: Private Zone is enabled.
   * - false: Private Zone is disabled.
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
   * The kube-proxy mode. Valid values:
   * 
   * - iptables: The mature and stable kube-proxy mode. Service discovery and load balancing for Kubernetes services are configured by using iptables rules. This mode provides average performance and is affected by the cluster scale. It is suitable for clusters with a small number of services.
   * - ipvs: The high-performance kube-proxy mode. Service discovery and load balancing for Kubernetes services are configured by using the Linux IPVS module. This mode is suitable for clusters with a large number of services and scenarios that require high-performance load balancing.
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
   * The CIDR block of the service network.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.xx.xx/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The current number of nodes in the cluster, including the master node and worker nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The running status of the cluster. Valid values:
   * 
   * - initial: The cluster is being created.
   * - failed: The cluster failed to be created.
   * - running: The cluster is running.
   * - updating: The cluster is being updated.
   * - upgrading: The cluster is being upgraded.
   * - removing: Nodes are being removed.
   * - draining: Nodes are being drained.
   * - scaling: The cluster is being scaled.
   * - inactive: The cluster is inactive.
   * - unavailable: The cluster is unavailable.
   * - deleting: The cluster is being deleted.
   * - deleted: The cluster is deleted.
   * - delete_failed: The cluster failed to be deleted.
   * - waiting: The cluster is waiting for the accessed state.
   * - disconnected: The cluster is disconnected.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * **[Deprecated]** Use container_cidr to obtain the Pod network CIDR block.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The resource tags of the cluster.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The time zone.
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
   * The ID of the virtual private cloud (VPC) where the cluster is deployed.
   * 
   * @example
   * vpc-2vcg932hsxsxuqbgl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch used by the cluster.
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
   * The name of the worker RAM role, which authorizes ECS instances to serve as worker nodes in the cluster.
   * 
   * @example
   * KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****
   * 
   * @deprecated
   */
  workerRamRoleName?: string;
  /**
   * @remarks
   * The ID of the zone to which the cluster belongs.
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
   * The total number of results.
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
   * The list of cluster information.
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

