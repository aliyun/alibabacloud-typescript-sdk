// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";
import { Tag } from "./Tag";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";


export class DescribeClusterDetailResponseBodyAutoMode extends $dara.Model {
  /**
   * @remarks
   * Whether to enable intelligent managed mode.
   * 
   * @example
   * false
   */
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
   * Whether auto-renewal is enabled for the node.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Auto-renewal duration of the node.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Billing type of control plane nodes.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Whether to install CloudMonitor on the node.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * Node CPU management policy.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * Deployment set ID.
   * 
   * @example
   * ds-bp10b35imuam5amw****
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * Image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20240819
   */
  imageId?: string;
  /**
   * @remarks
   * OS image type.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * Metadata access configuration for ECS instances.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * Node instance specification types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * Key pair name. You can specify either this parameter or login_password.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * Node service port range.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * Subscription duration of the node.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Unit of the subscription duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Container runtime name.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Whether to enable Alibaba Cloud OS security hardening.
   * 
   * @example
   * true
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Number of control plane nodes.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * Whether to enable classified protection security hardening.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Whether burst (performance burst) is enabled for the node system disk.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Node system disk type.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * Performance level of the node system disk. Only applicable to ESSD disks.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * Provisioned read/write IOPS for the node system disk.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * Node system disk size, minimum 40.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * Node automatic snapshot backup policy.
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

export class DescribeClusterDetailResponseBodyControlPlaneEndpointsConfigInternalDnsConfig extends $dara.Model {
  /**
   * @remarks
   * The VPC scope within which the internal DNS record resolution takes effect. The VPC where the cluster is located is included by default.
   */
  bindVpcs?: string[];
  /**
   * @remarks
   * Whether to enable internal DNS access for the cluster.
   * - true: Enable internal DNS access. Node-side components (kubelet, kube-proxy) will access the API Server through the internal DNS.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'bind_vpcs',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.bindVpcs)) {
      $dara.Model.validateArray(this.bindVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyControlPlaneEndpointsConfig extends $dara.Model {
  /**
   * @remarks
   * Internal DNS configuration for the cluster, applicable to ACK managed clusters. The internal DNS is used by node-side system components such as kubelet and kube-proxy to access the API Server. When internal DNS access is not enabled, node-side system components access the API Server through the CLB IP.
   */
  internalDnsConfig?: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfigInternalDnsConfig;
  static names(): { [key: string]: string } {
    return {
      internalDnsConfig: 'internal_dns_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalDnsConfig: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfigInternalDnsConfig,
    };
  }

  validate() {
    if(this.internalDnsConfig && typeof (this.internalDnsConfig as any).validate === 'function') {
      (this.internalDnsConfig as any).validate();
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
   * Cluster auto-upgrade frequency. For more information, see [Upgrade frequency](https://help.aliyun.com/document_detail/2712866.html).
   * 
   * Valid values:
   * - patch: Latest patch version.
   * - stable: Second latest minor version.
   * - rapid: Latest minor version.
   * 
   * @example
   * patch
   */
  channel?: string;
  /**
   * @remarks
   * Whether cluster auto-upgrade is enabled.
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
   * Cluster auto-upgrade.
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
  /**
   * @remarks
   * The default audience information of the OIDC token. Multiple values are separated by commas (,). The values will be set as an array in the aud field of the OIDC token.
   * 
   * @example
   * https://kubernetes.default.svc,https://example.***.com
   */
  audience?: string;
  /**
   * @remarks
   * Whether RRSA is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The issuer information of the OIDC token. Multiple values are separated by commas (,). The first value will be set as the iss field of the OIDC token and the issuer URL of the OIDC identity provider.
   * 
   * @example
   * https://oidc-ack-***,https://kubernetes.default.svc
   */
  issuer?: string;
  /**
   * @remarks
   * OIDC public key information URL.
   */
  jwksUrl?: string;
  /**
   * @remarks
   * The maximum configurable validity period of an OIDC token.
   * 
   * @example
   * 12h
   */
  maxOidcTokenExpiration?: string;
  /**
   * @remarks
   * OIDC identity provider ARN.
   * 
   * @example
   * acs:ram::1138***:oidc-provider/ack-rrsa-***
   */
  oidcArn?: string;
  /**
   * @remarks
   * OIDC identity provider name.
   * 
   * @example
   * ack-rrsa-***
   */
  oidcName?: string;
  /**
   * @remarks
   * OIDC configuration document URL.
   */
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
  /**
   * @remarks
   * Intelligent managed mode configuration.
   */
  autoMode?: DescribeClusterDetailResponseBodyAutoMode;
  /**
   * @remarks
   * Cluster local domain.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster specifications when `cluster_type` is set to `ManagedKubernetes` and `profile` is configured. Valid values:
   * 
   * - `ack.standard`: Basic edition (selected by default when the value is empty)
   * - `ack.pro.small`: Pro edition
   * - `ack.pro.xlarge`: Pro XL
   * - `ack.pro.2xlarge`: Pro 2XL
   * - `ack.pro.4xlarge`: Pro 4XL (requires contacting customer service for allowlisting)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and pinning control plane resources, they ensure that API concurrency and Pod scheduling capabilities remain at a consistently high level, suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For cluster management fees for Pro edition and Provisioned Control Plane editions, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * Cluster type.
   * 
   * - `Kubernetes`: ACK dedicated cluster.
   *  
   * - `ManagedKubernetes`: ACK managed clusters, including ACK managed clusters (ACK Pro and ACK Basic), ACK Serverless clusters (Pro and Basic), ACK Edge clusters (Pro and Basic), and ACK Lingjun clusters (Pro).
   *  
   * - `ExternalKubernetes`: Registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * Pod network CIDR block, configured for Flannel networking.
   * 
   * @example
   * 172.20.xx.xx/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * Dedicated cluster control plane configuration.
   */
  controlPlaneConfig?: DescribeClusterDetailResponseBodyControlPlaneConfig;
  /**
   * @remarks
   * Cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfig;
  /**
   * @remarks
   * Cluster creation time.
   * 
   * @example
   * 2025-04-07T09:57:26+08:00
   */
  created?: string;
  /**
   * @remarks
   * The current version of the cluster. For Kubernetes versions supported by ACK, see [Kubernetes release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Cluster deletion protection, which prevents accidental deletion of the cluster through the console or API. Valid values:
   * 
   * - `true`: Enable cluster deletion protection. The cluster cannot be deleted through the console or API.
   * - `false`: Disable cluster deletion protection. The cluster can be deleted through the console or API.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Docker version in the cluster.
   * 
   * @example
   * 19.03.5
   * 
   * @deprecated
   */
  dockerVersion?: string;
  /**
   * @remarks
   * Cluster Ingress SLB instance ID.
   * 
   * @example
   * lb-2zehc05z3b8dwiifh****
   * 
   * @deprecated
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * Custom API Server certificate SAN (Subject Alternative Name).
   */
  extraSans?: string[];
  /**
   * @remarks
   * Cluster initial version.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The IP protocol stack of the cluster. Valid values:
   * - ipv4: Creates a cluster that supports only the IPv4 protocol stack.
   * - dual: Creates a cluster that supports the IPv4/IPv6 dual stack.
   * 
   * @example
   * ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * Cluster maintenance window configuration. Only takes effect in managed editions (i.e., ACK Pro clusters).
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The access endpoint of the cluster, including the internal and public access endpoints.
   * 
   * @example
   * {\\"intranet_api_server_endpoint\\":\\"https://192.168.xx.xx:6443\\"***}
   */
  masterUrl?: string;
  /**
   * @remarks
   * Cluster metadata information.
   * 
   * @example
   * \\"Addons\\":***
   */
  metaData?: string;
  /**
   * @remarks
   * Cluster name.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The network type used by the cluster, for example: VPC network.
   * 
   * @example
   * vpc
   * 
   * @deprecated
   */
  networkMode?: string;
  /**
   * @remarks
   * Cluster upgradeable version.
   * 
   * @example
   * 1.xx.x-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * Only applicable to the Flannel network plugin.
   * 
   * The subnet mask size allocated to each node, which controls the number of IP addresses that can be allocated to the node.
   * 
   * @example
   * 26
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * Cluster automatic O&M policy.
   */
  operationPolicy?: DescribeClusterDetailResponseBodyOperationPolicy;
  /**
   * @remarks
   * Cluster ROS parameter collection.
   * 
   * @deprecated
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * Whether PrivateZone is enabled for the cluster.
   * 
   * - `true`: Enabled.
   * - `false`: Not enabled.
   * 
   * Default value: false.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  privateZone?: boolean;
  /**
   * @remarks
   * Cluster subtype.
   * 
   * - `Default`: ACK managed cluster, including ACK Pro and ACK Basic.
   *  
   * - `Edge`: ACK Edge cluster, including ACK Edge Pro and ACK Edge Basic.
   *  
   * - `Serverless`: ACK Serverless cluster, including ACK Serverless Pro and ACK Serverless Basic.
   *  
   * - `Lingjun`: ACK Lingjun cluster, available in Pro edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * kube-proxy proxy mode.
   * 
   * - `iptables`: A mature and stable kube-proxy proxy mode. Service discovery and load balancing for Kubernetes Services are configured using iptables rules. However, the performance is average and significantly affected by scale. This mode is suitable for clusters with a small number of Services.
   * - `ipvs`: A high-performance kube-proxy proxy mode. Service discovery and load balancing for Kubernetes Services are configured using the Linux IPVS module. This mode is suitable for clusters with a large number of Services and scenarios that require high-performance load balancing.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * The region ID where the cluster is located.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Cluster resource group ID.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * RRSA configuration.
   */
  rrsaConfig?: DescribeClusterDetailResponseBodyRrsaConfig;
  /**
   * @remarks
   * Cluster security group ID.
   * 
   * @example
   * sg-25yq****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Service network CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.xx.xx/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The number of nodes in the cluster, including both Master and Worker nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * Cluster running status. Valid values:
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
   * - `deleted`: The cluster has been deleted.
   * - `delete_failed`: The cluster failed to be deleted.
   * - `waiting`: Waiting for connection.
   * - `disconnected`: Disconnected.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * Pod network CIDR block.
   * 
   * @example
   * 172.20.xx.xx/16
   * 
   * @deprecated
   */
  subnetCidr?: string;
  /**
   * @remarks
   * Cluster resource tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * Timezone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * Cluster update time.
   * 
   * @example
   * 2025-04-10T13:28:09+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The VPC ID of the cluster. This is a required parameter when creating a cluster.
   * 
   * @example
   * vpc-2zecuu62b9zw7a7qn****
   */
  vpcId?: string;
  /**
   * @remarks
   * vSwitch ID. This field is deprecated. For control plane vSwitches, use the vswitch_ids field. For data plane vSwitches, query through the vswitch_ids field in node pools.
   * 
   * @example
   * vsw-2zete8s4qocqg0mf6****,vsw-2zete8s4qocqg0mf6****
   * 
   * @deprecated
   */
  vswitchId?: string;
  /**
   * @remarks
   * Cluster control plane vSwitches.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * The name of the Worker RAM role, which authorizes ECS instances as Worker nodes of the cluster.
   * 
   * @example
   * KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****
   */
  workerRamRoleName?: string;
  /**
   * @remarks
   * The availability zone ID within the region where the cluster is located.
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
      controlPlaneEndpointsConfig: 'control_plane_endpoints_config',
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
      controlPlaneEndpointsConfig: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfig,
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
    if(this.controlPlaneEndpointsConfig && typeof (this.controlPlaneEndpointsConfig as any).validate === 'function') {
      (this.controlPlaneEndpointsConfig as any).validate();
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

