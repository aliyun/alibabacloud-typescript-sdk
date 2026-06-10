// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";
import { Tag } from "./Tag";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";


export class DescribeClusterDetailResponseBodyAutoMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether smart managed mode is enabled.
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
   * Indicates whether auto-renewal is enabled for nodes.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Auto-renewal duration for nodes.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Billing method for control plane nodes.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Indicates whether Cloud Monitor is installed on nodes.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * CPU management policy for nodes.
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
   * Operating system image type.
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
   * Instance types for control plane nodes.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * Key pair name. Specify either this parameter or login_password.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * Port range for node services.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * Subscription duration for nodes.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Time unit for node subscription.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Runtime name.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Indicates whether Alibaba Cloud OS security hardening is enabled.
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
   * Indicates whether security hardening for compliance is enabled.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether burst performance is enabled for node system disks.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * System disk category for nodes.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * Disk performance level for node system disks. Applies only to ESSD disks.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * Provisioned IOPS for node system disks.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * System disk size for nodes, in GB. Minimum value: 40.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * Automatic snapshot backup policy for node system disks.
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
   * VPCs where the internal domain name resolution takes effect. By default, this includes the VPC where the cluster resides.
   */
  bindVpcs?: string[];
  /**
   * @remarks
   * Indicates whether internal domain name access is enabled.
   * 
   * - true: Internal domain name access is enabled. Node-side components (kubelet, kube-proxy) access the API server through the internal domain name.
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
   * Internal domain name configuration for the cluster, applicable to ACK managed clusters. The internal domain name allows node-side system components such as kubelet and kube-proxy to access the API server. If internal domain name access is disabled, these components access the API server through the CLB IP address.
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
   * Frequency of automatic cluster upgrades. For more information, see [Upgrade frequency](https://help.aliyun.com/document_detail/2712866.html).
   * 
   * Valid values:
   * 
   * - patch: Latest patch version.
   * 
   * - stable: Second latest minor version.
   * 
   * - rapid: Latest minor version.
   * 
   * @example
   * patch
   */
  channel?: string;
  /**
   * @remarks
   * Indicates whether automatic cluster upgrade is enabled.
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
   * Automatic cluster upgrade settings.
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
   * Default audience for the OIDC token. Multiple values are separated by commas (,). These values appear as an array in the aud field of the OIDC token.
   * 
   * @example
   * https://kubernetes.default.svc,https://example.***.com
   */
  audience?: string;
  /**
   * @remarks
   * Indicates whether RRSA is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Issuer of the OIDC token. Multiple values are separated by commas (,). The first value appears in the iss field of the OIDC token and serves as the issuer URL for the OIDC identity provider.
   * 
   * @example
   * https://oidc-ack-***,https://kubernetes.default.svc
   */
  issuer?: string;
  /**
   * @remarks
   * URL of the OIDC public key information.
   */
  jwksUrl?: string;
  /**
   * @remarks
   * Maximum validity period configurable for the OIDC token.
   * 
   * @example
   * 12h
   */
  maxOidcTokenExpiration?: string;
  /**
   * @remarks
   * ARN of the OIDC identity provider.
   * 
   * @example
   * acs:ram::1138***:oidc-provider/ack-rrsa-***
   */
  oidcArn?: string;
  /**
   * @remarks
   * Name of the OIDC identity provider.
   * 
   * @example
   * ack-rrsa-***
   */
  oidcName?: string;
  /**
   * @remarks
   * URL of the OIDC configuration document.
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
   * Smart managed mode configuration.
   */
  autoMode?: DescribeClusterDetailResponseBodyAutoMode;
  /**
   * @remarks
   * Local domain name of the cluster.
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
   * Cluster specification when `cluster_type` is set to `ManagedKubernetes` and `profile` is configured. Valid values:
   * 
   * - `ack.standard`: Basic Edition (default if left empty)
   * 
   * - `ack.pro.small`: Pro Edition
   * 
   * - `ack.pro.xlarge`: Pro XL
   * 
   * - `ack.pro.2xlarge`: Pro 2XL
   * 
   * - `ack.pro.4xlarge`: Pro 4XL (requires whitelist approval from customer service)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers offered by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). These tiers pre-allocate and dedicate control plane resources to ensure consistent high performance for API concurrency and pod scheduling, making them suitable for AI training and inference, large-scale clusters, and mission-critical workloads.
   * 
   * For cluster management fees of Pro Edition and provisioned control plane clusters, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
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
   * - `ManagedKubernetes`: ACK managed clusters, including ACK Pro Edition and Basic Edition clusters, ACK Serverless clusters (Pro and Basic), ACK Edge clusters (Pro and Basic), and ACK LINGJUN clusters (Pro).
   * 
   * - `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * CIDR block for pod networks, used with Flannel.
   * 
   * @example
   * 172.20.xx.xx/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * Control plane configuration for dedicated clusters.
   */
  controlPlaneConfig?: DescribeClusterDetailResponseBodyControlPlaneConfig;
  /**
   * @remarks
   * Cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfig;
  /**
   * @remarks
   * Time when the cluster was created.
   * 
   * @example
   * 2025-04-07T09:57:26+08:00
   */
  created?: string;
  /**
   * @remarks
   * Current Kubernetes version of the cluster. For supported Kubernetes versions in ACK, see [Overview of Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Deletion protection for the cluster prevents accidental deletion through the console or API. Valid values:
   * 
   * - `true`: Deletion protection is enabled. You cannot delete the cluster through the console or API.
   * 
   * - `false`: Deletion protection is disabled. You can delete the cluster through the console or API.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Docker version used in the cluster.
   * 
   * @example
   * 19.03.5
   * 
   * @deprecated
   */
  dockerVersion?: string;
  /**
   * @remarks
   * ID of the Server Load Balancer instance used for the cluster Ingress.
   * 
   * @example
   * lb-2zehc05z3b8dwiifh****
   * 
   * @deprecated
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * Custom Subject Alternative Names (SANs) for the API server certificate.
   */
  extraSans?: string[];
  /**
   * @remarks
   * Initial Kubernetes version of the cluster.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * IP protocol stack of the cluster. Valid values:
   * 
   * - ipv4: Creates a cluster that supports IPv4 only.
   * 
   * - dual: Creates a cluster that supports both IPv4 and IPv6.
   * 
   * @example
   * ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * Maintenance window configuration for the cluster. This setting applies only to managed clusters (ACK Pro clusters).
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * Cluster endpoint, including internal and public endpoints.
   * 
   * @example
   * {\\"intranet_api_server_endpoint\\":\\"https://192.168.xx.xx:6443\\"***}
   */
  masterUrl?: string;
  /**
   * @remarks
   * Metadata of the cluster.
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
   * Network type used by the cluster, such as VPC.
   * 
   * @example
   * vpc
   * 
   * @deprecated
   */
  networkMode?: string;
  /**
   * @remarks
   * Next available Kubernetes version for upgrade.
   * 
   * @example
   * 1.xx.x-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * Applies only to Flannel network plugin.
   * 
   * Subnet mask size allocated to each node, which controls the number of IP addresses assignable to the node.
   * 
   * @example
   * 26
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * Automatic O\\&M policy for the cluster.
   */
  operationPolicy?: DescribeClusterDetailResponseBodyOperationPolicy;
  /**
   * @remarks
   * Collection of ROS parameters for the cluster.
   * 
   * @deprecated
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * Indicates whether PrivateZone is enabled for the cluster.
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
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
   * - `Default`: ACK managed cluster, including ACK Pro Edition and Basic Edition.
   * 
   * - `Edge`: ACK Edge cluster, including ACK Edge Pro Edition and Basic Edition.
   * 
   * - `Serverless`: ACK Serverless cluster, including ACK Serverless Pro Edition and Basic Edition.
   * 
   * - `Lingjun`: ACK LINGJUN cluster, available in Pro Edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * kube-proxy proxy mode.
   * 
   * - `iptables`: A mature and stable kube-proxy mode that uses iptables rules for Kubernetes service discovery and load balancing. Performance is moderate and degrades at scale. Suitable for clusters with a small number of services.
   * 
   * - `ipvs`: A high-performance kube-proxy mode that uses the Linux IPVS module for Kubernetes service discovery and load balancing. Suitable for clusters with many services and high load balancing demands.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * Region ID where the cluster is deployed.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID of the cluster.
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
   * Security group ID of the cluster.
   * 
   * @example
   * sg-25yq****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * CIDR block for service networks.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.xx.xx/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * Total number of nodes in the cluster, including master and worker nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * Cluster status. Valid values:
   * 
   * - `initial`: The cluster is being created.
   * 
   * - `failed`: Cluster creation failed.
   * 
   * - `running`: The cluster is running.
   * 
   * - `updating`: The cluster is being updated.
   * 
   * - `upgrading`: The cluster is being upgraded.
   * 
   * - `removing`: Nodes are being removed.
   * 
   * - `draining`: Nodes are being drained.
   * 
   * - `scaling`: The cluster is scaling.
   * 
   * - `inactive`: The cluster is inactive.
   * 
   * - `unavailable`: The cluster is unavailable.
   * 
   * - `deleting`: The cluster is being deleted.
   * 
   * - `deleted`: The cluster has been deleted.
   * 
   * - `delete_failed`: Cluster deletion failed.
   * 
   * - `waiting`: Waiting for access.
   * 
   * - `disconnected`: Disconnected.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * CIDR block for pod networks.
   * 
   * @example
   * 172.20.xx.xx/16
   * 
   * @deprecated
   */
  subnetCidr?: string;
  /**
   * @remarks
   * Tags associated with the cluster.
   */
  tags?: Tag[];
  /**
   * @remarks
   * Time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * Last time the cluster was updated.
   * 
   * @example
   * 2025-04-10T13:28:09+08:00
   */
  updated?: string;
  /**
   * @remarks
   * VPC ID of the cluster. This parameter is required when creating a cluster.
   * 
   * @example
   * vpc-2zecuu62b9zw7a7qn****
   */
  vpcId?: string;
  /**
   * @remarks
   * vSwitch ID. This field is deprecated. Use vswitch_ids to query control plane vSwitches and node pool vswitch_ids to query data plane vSwitches.
   * 
   * @example
   * vsw-2zete8s4qocqg0mf6****,vsw-2zete8s4qocqg0mf6****
   * 
   * @deprecated
   */
  vswitchId?: string;
  /**
   * @remarks
   * vSwitches for the cluster control plane.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * Name of the RAM role assigned to ECS instances acting as worker nodes in the cluster.
   * 
   * @example
   * KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****
   */
  workerRamRoleName?: string;
  /**
   * @remarks
   * Zone ID within the region where the cluster is deployed.
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

