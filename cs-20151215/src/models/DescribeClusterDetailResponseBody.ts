// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";
import { Tag } from "./Tag";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";


export class DescribeClusterDetailResponseBodyAutoMode extends $dara.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyControlPlaneConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the nodes.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration for the nodes.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of the control plane node.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Indicates whether to install CloudMonitor for the node.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The CPU management policy of nodes.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-bp10b35imuam5amw****
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20240819.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the OS image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance types of the nodes.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the key pair. You must set key_pair or login_password.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The node port range.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The subscription duration of nodes in the node pool.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The runtime.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Indicates whether to enable Alibaba Cloud Linux Security Hardening.
   * 
   * @example
   * true
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * The number of control plane nodes.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether to enable Multi-Level Protection Scheme (MLPS) security hardening.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether to enable the burst feature for the system disk.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system disk for nodes.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk that you want to use for the node. This parameter takes effect only for ESSDs.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The preset read/write IOPS of the system disk.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The system disk size of the node. The value must be at least 40 GB.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The automatic snapshot policy of the node.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   */
  systemDiskSnapshotPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      chargeType: 'charge_type',
      cloudMonitorFlags: 'cloud_monitor_flags',
      cpuPolicy: 'cpu_policy',
      deploymentsetId: 'deploymentset_id',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceMetadataOptions: 'instance_metadata_options',
      instanceTypes: 'instance_types',
      keyPair: 'key_pair',
      nodePortRange: 'node_port_range',
      period: 'period',
      periodUnit: 'period_unit',
      runtime: 'runtime',
      securityHardeningOs: 'security_hardening_os',
      size: 'size',
      socEnabled: 'soc_enabled',
      systemDiskBurstingEnabled: 'system_disk_bursting_enabled',
      systemDiskCategory: 'system_disk_category',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
      systemDiskProvisionedIops: 'system_disk_provisioned_iops',
      systemDiskSize: 'system_disk_size',
      systemDiskSnapshotPolicyId: 'system_disk_snapshot_policy_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      cloudMonitorFlags: 'boolean',
      cpuPolicy: 'string',
      deploymentsetId: 'string',
      imageId: 'string',
      imageType: 'string',
      instanceMetadataOptions: InstanceMetadataOptions,
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      keyPair: 'string',
      nodePortRange: 'string',
      period: 'number',
      periodUnit: 'string',
      runtime: 'string',
      securityHardeningOs: 'boolean',
      size: 'number',
      socEnabled: 'boolean',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      systemDiskSnapshotPolicyId: 'string',
    };
  }

  validate() {
    if(this.instanceMetadataOptions && typeof (this.instanceMetadataOptions as any).validate === 'function') {
      (this.instanceMetadataOptions as any).validate();
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * The frequency of auto cluster updates. For more information, see [Update frequency](https://help.aliyun.com/document_detail/2712866.html).
   * 
   * Valid values:
   * 
   * *   patch: specifies the latest patch version.
   * *   stable: specifies the second-latest minor version.
   * *   rapid: specifies the latest minor version.
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

export class DescribeClusterDetailResponseBodyOperationPolicy extends $dara.Model {
  /**
   * @remarks
   * The configurations of auto cluster update.
   */
  clusterAutoUpgrade?: DescribeClusterDetailResponseBodyOperationPolicyClusterAutoUpgrade;
  static names(): { [key: string]: string } {
    return {
      clusterAutoUpgrade: 'cluster_auto_upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterAutoUpgrade: DescribeClusterDetailResponseBodyOperationPolicyClusterAutoUpgrade,
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

export class DescribeClusterDetailResponseBodyRrsaConfig extends $dara.Model {
  audience?: string;
  enabled?: boolean;
  issuer?: string;
  jwksUrl?: string;
  maxOidcTokenExpiration?: string;
  oidcArn?: string;
  oidcName?: string;
  openApiConfigurationUrl?: string;
  static names(): { [key: string]: string } {
    return {
      audience: 'audience',
      enabled: 'enabled',
      issuer: 'issuer',
      jwksUrl: 'jwks_url',
      maxOidcTokenExpiration: 'max_oidc_token_expiration',
      oidcArn: 'oidc_arn',
      oidcName: 'oidc_name',
      openApiConfigurationUrl: 'open_api_configuration_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audience: 'string',
      enabled: 'boolean',
      issuer: 'string',
      jwksUrl: 'string',
      maxOidcTokenExpiration: 'string',
      oidcArn: 'string',
      oidcName: 'string',
      openApiConfigurationUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBody extends $dara.Model {
  autoMode?: DescribeClusterDetailResponseBodyAutoMode;
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
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The edition of the cluster
   * 
   * *   `ack.pro.small`: the Pro edition.
   * *   `ack.standard`: the Basic edition.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * *   `Kubernetes`: ACK dedicated cluster.
   * *   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK managed Basic clusters, ACK managed Pro clusters, ACK Serverless Pro clusters, ACK Serverless Basic clusters, ACK Edge Pro clusters, ACK Edge Basic clusters, and ACK Lingjun Pro clusters.
   * *   `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The pod CIDR block. The configuration of the Flannel network plug-in.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The control plane configurations in an ACK dedicated cluster.
   */
  controlPlaneConfig?: DescribeClusterDetailResponseBodyControlPlaneConfig;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2019-11-25T15:50:20+08:00
   */
  created?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster. For more information about the Kubernetes versions supported by ACK, see [Release notes for Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.6-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. If deletion protection is enabled, the cluster cannot be deleted in the Container Service console or by calling API operations. Valid values:
   * 
   * *   `true`: deletion protection is enabled for the cluster. This way, the cluster cannot be deleted in the Container Service console or by calling API operations.
   * *   `false`: deletion protection is disabled for the cluster. This way, the cluster can be deleted in the Container Service console or by calling API operations.
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
   * 
   * @deprecated
   */
  dockerVersion?: string;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance that is created for the Ingress of the cluster.
   * 
   * @example
   * lb-2zehc05z3b8dwiifh****
   * 
   * @deprecated
   */
  externalLoadbalancerId?: string;
  extraSans?: string[];
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
   * The IP stack of the cluster. Valid values:
   * 
   * *   ipv4: The cluster is an IPv4 cluster.
   * *   dual: The cluster is an IPv4/IPv6 dual-stack cluster.
   * 
   * @example
   * ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. This feature is available only in ACK Pro clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The endpoints of the cluster, including an internal endpoint and a public endpoint.
   * 
   * @example
   * {\\"intranet_api_server_endpoint\\":\\"https://192.168.0.251:6443\\"***}
   */
  masterUrl?: string;
  /**
   * @remarks
   * The metadata of the cluster.
   * 
   * @example
   * \\"Addons\\":***
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
   * The network type of the cluster. Example: Virtual Private Cloud (VPC).
   * 
   * @example
   * vpc
   * 
   * @deprecated
   */
  networkMode?: string;
  /**
   * @remarks
   * The Kubernetes version to which the cluster can be upgraded.
   * 
   * @example
   * 1.18.8-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * This parameter is available only for Flannel.
   * 
   * The subnet mask length of the node CIDR block. This parameter indicates the maximum number of IP addresses that can be assigned to nodes.
   * 
   * @example
   * 26
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * The automatic O\\&M policy of the cluster.
   */
  operationPolicy?: DescribeClusterDetailResponseBodyOperationPolicy;
  /**
   * @remarks
   * The Resource Orchestration Service (ROS) parameters of the cluster.
   * 
   * @deprecated
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * Indicates whether Alibaba Cloud DNS PrivateZone (PrivateZone) is enabled for the cluster. Valid values:
   * 
   * *   `true`: PrivateZone is enabled.
   * *   `false`: PrivateZone is dislabled.
   * 
   * Default value: false
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
   * *   `Default`. ACK managed cluster. ACK managed clusters include ACK Basic clusters and ACK Pro clusters.
   * *   `Edge`: ACK Edge cluster. ACK Edge clusters include ACK Edge Basic clusters and ACK Edge Pro clusters.
   * *   `Serverless`: ACK Serverless cluster. ACK Serverless clusters include ACK Serverless Basic clusters and ACK Serverless Pro clusters.
   * *   `Lingjun`: ACK Lingjun Pro cluster.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy mode. Valid values:
   * 
   * *   `iptables`: a mature and stable kube-proxy mode that uses iptables rules to conduct Service discovery and load balancing. The performance of this mode is limited by the size of the cluster. This mode is suitable for clusters that run a small number of Services.
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
  rrsaConfig?: DescribeClusterDetailResponseBodyRrsaConfig;
  /**
   * @remarks
   * The ID of the security group to which the cluster belongs.
   * 
   * @example
   * sg-25yq****
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
   * The number of nodes in the cluster. Master nodes and worker nodes are included.
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
   * *   `updating`: The cluster is being updated.
   * *   `updating_failed`: The cluster failed to be updated.
   * *   `scaling`: The cluster is being scaled.
   * *   `waiting`: The cluster is waiting for connection requests.
   * *   `disconnected`: The cluster is disconnected.
   * *   `stopped`: The cluster is stopped.
   * *   `deleting`: The cluster is being deleted.
   * *   `deleted`: The cluster is deleted.
   * *   `delete_failed`: The cluster failed to be deleted.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The pod CIDR block.
   * 
   * @example
   * 172.20.0.0/16
   * 
   * @deprecated
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The resource labels of the cluster.
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
   * 2020-01-13T23:01:03+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the VPC where the cluster is deployed. This parameter is required when you create a cluster.
   * 
   * @example
   * vpc-2zecuu62b9zw7a7qn****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitche. This field is deprecated. Use vswitch_ids to query the vSwitches on the control plane and vswitch_ids to query the vSwitches on the data plane.
   * 
   * @example
   * vsw-2zete8s4qocqg0mf6****,vsw-2zete8s4qocqg0mf6****
   * 
   * @deprecated
   */
  vswitchId?: string;
  /**
   * @remarks
   * The vSwitch for the control plane of the cluster.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * The name of the worker Resource Access Management (RAM) role. The RAM role is assigned to the worker nodes of the cluster to allow the worker nodes to manage Elastic Compute Service (ECS) instances.
   * 
   * @example
   * KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****
   */
  workerRamRoleName?: string;
  /**
   * @remarks
   * The ID of the zone within the region where the cluster is located.
   * 
   * @example
   * cn-beijing-a
   * 
   * @deprecated
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoMode: 'auto_mode',
      clusterDomain: 'cluster_domain',
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      containerCidr: 'container_cidr',
      controlPlaneConfig: 'control_plane_config',
      created: 'created',
      currentVersion: 'current_version',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
      extraSans: 'extra_sans',
      initVersion: 'init_version',
      ipStack: 'ip_stack',
      maintenanceWindow: 'maintenance_window',
      masterUrl: 'master_url',
      metaData: 'meta_data',
      name: 'name',
      networkMode: 'network_mode',
      nextVersion: 'next_version',
      nodeCidrMask: 'node_cidr_mask',
      operationPolicy: 'operation_policy',
      parameters: 'parameters',
      privateZone: 'private_zone',
      profile: 'profile',
      proxyMode: 'proxy_mode',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      rrsaConfig: 'rrsa_config',
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
      autoMode: DescribeClusterDetailResponseBodyAutoMode,
      clusterDomain: 'string',
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      containerCidr: 'string',
      controlPlaneConfig: DescribeClusterDetailResponseBodyControlPlaneConfig,
      created: 'string',
      currentVersion: 'string',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
      extraSans: { 'type': 'array', 'itemType': 'string' },
      initVersion: 'string',
      ipStack: 'string',
      maintenanceWindow: MaintenanceWindow,
      masterUrl: 'string',
      metaData: 'string',
      name: 'string',
      networkMode: 'string',
      nextVersion: 'string',
      nodeCidrMask: 'string',
      operationPolicy: DescribeClusterDetailResponseBodyOperationPolicy,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      privateZone: 'boolean',
      profile: 'string',
      proxyMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      rrsaConfig: DescribeClusterDetailResponseBodyRrsaConfig,
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
    if(this.autoMode && typeof (this.autoMode as any).validate === 'function') {
      (this.autoMode as any).validate();
    }
    if(this.controlPlaneConfig && typeof (this.controlPlaneConfig as any).validate === 'function') {
      (this.controlPlaneConfig as any).validate();
    }
    if(Array.isArray(this.extraSans)) {
      $dara.Model.validateArray(this.extraSans);
    }
    if(this.maintenanceWindow && typeof (this.maintenanceWindow as any).validate === 'function') {
      (this.maintenanceWindow as any).validate();
    }
    if(this.operationPolicy && typeof (this.operationPolicy as any).validate === 'function') {
      (this.operationPolicy as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.rrsaConfig && typeof (this.rrsaConfig as any).validate === 'function') {
      (this.rrsaConfig as any).validate();
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

