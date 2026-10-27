// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class DescribeClustersForRegionResponseBodyClusters extends $dara.Model {
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
   * c905d1364c2dd4b6284a3f41790c4****
   */
  clusterId?: string;
  /**
   * @remarks
   * The specification of the cluster. Valid values:
   * 
   * - `ack.standard`: Basic Edition.
   * - `ack.pro.small`: Pro Edition.
   * - `ack.pro.xlarge`: Pro XL.
   * - `ack.pro.2xlarge`: Pro 2XL.
   * - `ack.pro.4xlarge`: Pro 4XL. To use this specification, submit a ticket to contact customer service and apply for whitelist access.
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are the three tiers provided by the <props="china">[ACK Pro provisioned control plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro provisioned control plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and reserving control plane resources, these tiers ensure that API concurrency and pod scheduling capabilities remain consistently at a high level. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For more information about the cluster management fees for the Pro Edition and provisioned control plane editions, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * - Kubernetes: ACK dedicated cluster.
   * - ManagedKubernetes: ACK managed clusters, including ACK managed clusters (ACK Pro and ACK Basic), ACK Serverless clusters (Pro and Basic), ACK Edge clusters (Pro and Basic), and ACK Lingjun clusters (Pro).
   * - ExternalKubernetes: registered cluster.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The CIDR block for pods in the cluster.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-12-01T20:40:40+08:00
   */
  created?: string;
  /**
   * @remarks
   * The current version of the cluster.
   * 
   * @example
   * 1.16.6-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster to prevent accidental deletion through the console or API. Valid values:
   * - true: Deletion protection is enabled. The cluster cannot be deleted through the console or API.
   * - false: Deletion protection is disabled. The cluster can be deleted through the console or API.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The initial version of the cluster.
   * 
   * @example
   * 1.16.6-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The IP stack of the cluster.
   * 
   * @example
   * ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test-cluster
   */
  name?: string;
  /**
   * @remarks
   * The version to which the cluster can be upgraded.
   * 
   * @example
   * 1.18.8-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * The subtype of the cluster. Valid values:
   * - Default: ACK managed clusters, including ACK Pro and ACK Basic.
   * - Edge: ACK Edge clusters, including ACK Edge Pro and ACK Edge Basic.
   * - Serverless: ACK Serverless clusters, including ACK Serverless Pro and ACK Serverless Basic.
   * - LingJun: ACK Lingjun clusters, which provide the Pro edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The proxy mode of kube-proxy in the cluster.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing-a
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
   * sg-2zeihch86ooz9io4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The CIDR block for services.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The number of nodes in the cluster.
   * 
   * @example
   * 2
   */
  size?: number;
  /**
   * @remarks
   * The running status of the cluster. Valid values:
   * 
   * - `initial`: The cluster is being created.
   * - `failed`: The cluster failed to be created.
   * - `running`: The cluster is running.
   * - `updating`: The cluster is being updated.
   * - `upgrading`: The cluster is being upgraded.
   * - `removing`: Nodes are being removed.
   * - `draining`: Nodes are being drained.
   * - `scaling`: The cluster is being scaled.
   * - `inactive`: The cluster is inactive.
   * - `unavailable`: The cluster is unavailable.
   * - `deleting`: The cluster is being deleted.
   * - `deleted`: The cluster is deleted.
   * - `delete_failed`: The cluster failed to be deleted.
   * - `waiting`: The cluster is waiting to be accessed.
   * - `disconnected`: The cluster is disconnected.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The list of tags for the cluster.
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
   * 2020-12-08T15:37:00+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the VPC where the cluster is deployed.
   * 
   * @example
   * vpc-2zeg8nf1ukc0fcmvq****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of vSwitches for the cluster control plane.
   */
  vswitchIds?: string[];
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
      initVersion: 'init_version',
      ipStack: 'ip_stack',
      name: 'name',
      nextVersion: 'next_version',
      profile: 'profile',
      proxyMode: 'proxy_mode',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      serviceCidr: 'service_cidr',
      size: 'size',
      state: 'state',
      tags: 'tags',
      timezone: 'timezone',
      updated: 'updated',
      vpcId: 'vpc_id',
      vswitchIds: 'vswitch_ids',
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
      initVersion: 'string',
      ipStack: 'string',
      name: 'string',
      nextVersion: 'string',
      profile: 'string',
      proxyMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      serviceCidr: 'string',
      size: 'number',
      state: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      timezone: 'string',
      updated: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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

export class DescribeClustersForRegionResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 10
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

export class DescribeClustersForRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cluster details.
   */
  clusters?: DescribeClustersForRegionResponseBodyClusters[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeClustersForRegionResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersForRegionResponseBodyClusters },
      pageInfo: DescribeClustersForRegionResponseBodyPageInfo,
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

