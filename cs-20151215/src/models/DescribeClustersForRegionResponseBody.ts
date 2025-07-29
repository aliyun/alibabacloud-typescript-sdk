// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class DescribeClustersForRegionResponseBodyClusters extends $dara.Model {
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
   * c905d1364c2dd4b6284a3f41790c4****
   */
  clusterId?: string;
  /**
   * @remarks
   * The types of ACK managed clusters:
   * 
   * *   ack.pro.small: ACK Pro cluster
   * *   ack.standard: ACK Basic cluster
   * 
   * @example
   * ack.standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   Kubernetes: ACK dedicated cluster
   * *   ManagedKubernetes: ACK managed clusters. ACK managed clusters include ACK Basic clusters, ACK Pro clusters, ACK Serverless Basic clusters, ACK Serverless Pro clusters, ACK Edge Basic clusters, ACK Edge Pro clusters, and ACK Lingjun Pro clusters.
   * *   ExternalKubernetes: registered cluster
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The CIDR block of pods in the cluster.
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
   * 2020-12-01T20:40:40+08:00
   */
  created?: string;
  /**
   * @remarks
   * The current Kubernetes version of the cluster.
   * 
   * @example
   * 1.16.6-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster deletion protection. If you enable this option, the cluster cannot be deleted in the console or by calling API operations. You can obtain the terminal ID by calling one of the following operations:
   * 
   * *   true: enables deletion protection for the cluster. This way, the cluster cannot be deleted in the ACK console or by calling API operations.
   * *   false: disables deletion protection for the cluster. This way, the cluster can be deleted in the ACK console or by calling API operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The initial Kubernetes version of the cluster.
   * 
   * @example
   * 1.16.6-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The IP protocol stack of the cluster.
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
   * The Kubernetes version to which the cluster can be updated.
   * 
   * @example
   * 1.18.8-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * The subtype of the clusters. Valid values:
   * 
   * *   Default: ACK managed clusters. ACK managed clusters include ACK Basic clusters and ACK Pro clusters.
   * *   Edge: ACK Edge clusters. ACK Edge clusters include ACK Edge Basic clusters and ACK Edge Pro clusters.
   * *   Serverless: ACK Serverless clusters. ACK Serverless clusters include ACK Serverless Basic clusters and ACK Serverless Pro clusters.
   * *   Lingjun: ACK Lingjun Pro clusters.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy mode of the cluster.
   * 
   * Valid value:
   * 
   * *   iptables: iptables.
   * *   ipvs: ipvs.
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
   * The ID of the cluster resource group.
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
   * sg-2zeihch86ooz9io4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The CIDR block of the service network.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The number of nodes in the ACK cluster.
   * 
   * @example
   * 2
   */
  size?: number;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   initial: The cluster is being created.
   * *   failed: The cluster failed to be created.
   * *   running: The cluster is running.
   * *   Upgrading: The cluster is being updated.
   * *   scaling: The cluster is being scaled.
   * *   waiting: The cluster is waiting for connection requests.
   * *   disconnected: The cluster is disconnected.
   * *   inactive: The cluster is inactive.
   * *   unavailable: The cluster is unavailable.
   * *   deleting: The cluster is being deleted.
   * *   deleted: The ACK cluster is deleted.
   * *   delete_failed: The cluster failed to be deleted.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The list of cluster tags.
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
   * The time when the cluster was updated.
   * 
   * @example
   * 2020-12-08T15:37:00+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the cluster belongs.
   * 
   * @example
   * vpc-2zeg8nf1ukc0fcmvq****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of vSwitches on the control plane of the cluster.
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
   * The number of pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The information about the queried clusters.
   */
  clusters?: DescribeClustersForRegionResponseBodyClusters[];
  /**
   * @remarks
   * The pagination details.
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

