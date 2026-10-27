// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of the cluster tag.
   * 
   * @example
   * example.tag.key
   */
  key?: string;
  /**
   * @remarks
   * The value of the cluster tag.
   * 
   * @example
   * example-tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c0123456789abcdef0123456789abcdef0
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2026-10-01T08:00:00+08:00
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
   * The data disk category of the node.
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The data disk size of the node.
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster.
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Docker version of the cluster.
   * 
   * @example
   * 20.10.17
   */
  dockerVersion?: string;
  /**
   * @remarks
   * The ID of the external load balancing instance used by the cluster.
   * 
   * @example
   * lb-a1b2c3d4e5f6g7h8i9j0k
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * The initial version of the cluster.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The access address of the cluster API server, including the internal network access address and the public network access address.
   * 
   * @example
   * {"api_server_endpoint":"","intranet_api_server_endpoint":"https://192.0.2.10:6443"}
   */
  masterUrl?: string;
  /**
   * @remarks
   * The metadata of the cluster.
   * 
   * @example
   * {"addons":[{"name":"kube-proxy","version":"v1.32.1"}]}
   */
  metaData?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * example-cluster
   */
  name?: string;
  /**
   * @remarks
   * The network mode of the cluster.
   * 
   * @example
   * vpc
   */
  networkMode?: string;
  /**
   * @remarks
   * Indicates whether Private Zone is enabled for the cluster. Default value: false.
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
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the cluster.
   * 
   * @example
   * rg-a1b2c3d4e5f6g7h
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group ID of the cluster.
   * 
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The current number of nodes in the cluster, including master and worker nodes.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * The state of the cluster.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The subnet CIDR of the cluster.
   * 
   * @example
   * 172.16.0.0/16
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The tags of the cluster.
   */
  tags?: DescribeClustersResponseBodyTags[];
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 2026-10-02T08:00:00+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The VPC ID of the cluster.
   * 
   * @example
   * vpc-a1b2c3d4e5f6g7h8i9j0k
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch CIDR.
   */
  vswitchCidr?: string;
  /**
   * @remarks
   * The ID of the vSwitch where the cluster is deployed.
   * 
   * @example
   * vsw-a1b2c3d4e5f6g7h8i9j0k
   */
  vswitchId?: string;
  /**
   * @remarks
   * The name of the RAM role used by the worker nodes.
   * 
   * @example
   * example-worker-ram-role
   */
  workerRamRoleName?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterType: 'cluster_type',
      created: 'created',
      currentVersion: 'current_version',
      dataDiskCategory: 'data_disk_category',
      dataDiskSize: 'data_disk_size',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
      initVersion: 'init_version',
      masterUrl: 'master_url',
      metaData: 'meta_data',
      name: 'name',
      networkMode: 'network_mode',
      privateZone: 'private_zone',
      profile: 'profile',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      size: 'size',
      state: 'state',
      subnetCidr: 'subnet_cidr',
      tags: 'tags',
      updated: 'updated',
      vpcId: 'vpc_id',
      vswitchCidr: 'vswitch_cidr',
      vswitchId: 'vswitch_id',
      workerRamRoleName: 'worker_ram_role_name',
      zoneId: 'zone_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      created: 'string',
      currentVersion: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'number',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
      initVersion: 'string',
      masterUrl: 'string',
      metaData: 'string',
      name: 'string',
      networkMode: 'string',
      privateZone: 'boolean',
      profile: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      size: 'number',
      state: 'string',
      subnetCidr: 'string',
      tags: { 'type': 'array', 'itemType': DescribeClustersResponseBodyTags },
      updated: 'string',
      vpcId: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
      workerRamRoleName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClustersResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeClustersResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

