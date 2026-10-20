// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";
import { Tag } from "./Tag";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";


export class DescribeClusterDetailResponseBodyAutoMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the intelligent management mode is enabled.
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
   * Indicates whether auto-renewal is enabled for the nodes.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for the nodes.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method for the control plane nodes.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Indicates whether CloudMonitor is installed on the nodes.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The CPU management policy for the nodes.
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
   * The ID of the image.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20240819
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the operating system image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The metadata access configuration for the ECS instances.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance type of the nodes.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the key pair. You must specify either this parameter or `login_password`.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The service port range for nodes.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The subscription period for the nodes.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period for the nodes.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The name of the container runtime.
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
   * The number of control plane nodes.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether classified protection security hardening is enabled.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether bursting is enabled for the system cloud disks of the nodes.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the system cloud disks for the nodes.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the system cloud disks for the nodes. This parameter takes effect only for ESSDs.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS for the system cloud disks of the nodes.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system cloud disks for the nodes. The minimum value is 40.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy for the nodes.
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
   * The VPC scope where the internal DNS records of the cluster take effect. By default, this includes the VPC where the cluster is deployed.
   */
  bindVpcs?: string[];
  /**
   * @remarks
   * Indicates whether internal DNS access is enabled for the cluster. Valid values: 
   * - true: Internal DNS access is enabled. Node-side components such as kubelet and kube-proxy access the API server by using the internal domain name.
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

export class DescribeClusterDetailResponseBodyControlPlaneEndpointsConfigLoadBalancersConfig extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * nlb-0ogk9aaxxxxxxx.cn-hangzhou.nlb.aliyuncsslb.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The endpoint type.
   * 
   * @example
   * private
   */
  endpointType?: string;
  /**
   * @remarks
   * The SLB instance associated with the endpoint.
   * 
   * @example
   * nlb-0ogk9aaxxxxxxx
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      endpointType: 'endpoint_type',
      loadBalancerId: 'load_balancer_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      endpointType: 'string',
      loadBalancerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyControlPlaneEndpointsConfig extends $dara.Model {
  /**
   * @remarks
   * The internal DNS configuration of the cluster, applicable to ACK managed clusters. The internal domain name is used by node-side system components such as kubelet and kube-proxy to access the API server. If internal domain name access is not enabled, node-side system components access the API server by using the IP address of the Classic Load Balancer (CLB) instance.
   */
  internalDnsConfig?: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfigInternalDnsConfig;
  /**
   * @remarks
   * The load balancing configuration for cluster access.
   */
  loadBalancersConfig?: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfigLoadBalancersConfig[];
  static names(): { [key: string]: string } {
    return {
      internalDnsConfig: 'internal_dns_config',
      loadBalancersConfig: 'load_balancers_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalDnsConfig: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfigInternalDnsConfig,
      loadBalancersConfig: { 'type': 'array', 'itemType': DescribeClusterDetailResponseBodyControlPlaneEndpointsConfigLoadBalancersConfig },
    };
  }

  validate() {
    if(this.internalDnsConfig && typeof (this.internalDnsConfig as any).validate === 'function') {
      (this.internalDnsConfig as any).validate();
    }
    if(Array.isArray(this.loadBalancersConfig)) {
      $dara.Model.validateArray(this.loadBalancersConfig);
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
   * The automatic upgrade channel of the cluster. For more information, see [Upgrade channels](https://help.aliyun.com/document_detail/2712866.html). Valid values:
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
   * Specifies whether automatic cluster upgrade is enabled.
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
   * The automatic upgrade configuration of the cluster.
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
   * The default audience of the OIDC token. If multiple values are included, they are separated by commas (,). These values form an array for the `aud` field in the OIDC token.
   * 
   * @example
   * https://kubernetes.default.svc,https://example.***.com
   */
  audience?: string;
  /**
   * @remarks
   * Specifies whether RRSA is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The issuer of the OIDC token. If multiple values are included, they are separated by commas (,). The first value is used as the `iss` field in the OIDC token and the issuer URL of the OIDC identity provider (IdP).
   * 
   * @example
   * https://oidc-ack-***,https://kubernetes.default.svc
   */
  issuer?: string;
  /**
   * @remarks
   * The URL of the OIDC public key.
   */
  jwksUrl?: string;
  /**
   * @remarks
   * The maximum configurable validity period of the OIDC token.
   * 
   * @example
   * 12h
   */
  maxOidcTokenExpiration?: string;
  /**
   * @remarks
   * The ARN of the OIDC IdP.
   * 
   * @example
   * acs:ram::1138***:oidc-provider/ack-rrsa-***
   */
  oidcArn?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * ack-rrsa-***
   */
  oidcName?: string;
  /**
   * @remarks
   * The URL of the OIDC configuration document.
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
   * The intelligent management mode configuration.
   */
  autoMode?: DescribeClusterDetailResponseBodyAutoMode;
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
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The specification of the cluster when `cluster_type` is set to `ManagedKubernetes` and `profile` is configured. Valid values:
   * 
   * - `ack.standard`: Basic Edition (selected by default if the value is empty).
   * - `ack.pro.small`: Pro Edition.
   * - `ack.pro.xlarge`: Pro XL.
   * - `ack.pro.2xlarge`: Pro 2XL.
   * - `ack.pro.4xlarge`: Pro 4XL (requires contacting customer service to apply for whitelist access).
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are the three tiers provided by the <props="china">[ACK Pro provisioned control plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro provisioned control plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and fixing control plane resources, these tiers ensure that API concurrency and pod scheduling capabilities are always maintained at a consistently high level. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For the cluster management fees of the Pro Edition and provisioned control plane editions, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - `Kubernetes`: ACK dedicated cluster.
   *  
   * - `ManagedKubernetes`: ACK ACK clusters, including ACK ACK clusters (ACK Pro Edition and ACK Basic Edition), ACK Serverless clusters (Pro Edition and Basic Edition), ACK Edge clusters (Pro Edition and Basic Edition), and ACK Lingjun clusters (Pro Edition).
   *  
   * - `ExternalKubernetes`: Registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The Pod CIDR block for the Flannel network configuration.
   * 
   * @example
   * 172.20.xx.xx/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The control plane configuration for dedicated clusters.
   */
  controlPlaneConfig?: DescribeClusterDetailResponseBodyControlPlaneConfig;
  /**
   * @remarks
   * The connection configuration of the cluster.
   */
  controlPlaneEndpointsConfig?: DescribeClusterDetailResponseBodyControlPlaneEndpointsConfig;
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
   * The current version of the cluster. For more information about the Kubernetes versions supported by ACK, see [Overview of Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Specifies whether deletion protection is enabled for the cluster. This prevents the cluster from being accidentally deleted through the console or API calls. Valid values:
   * 
   * - `true`: Deletion protection is enabled. The cluster cannot be deleted through the console or API calls.
   * - `false`: Deletion protection is disabled. The cluster can be deleted through the console or API calls.
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
   * The instance ID of the Ingress load balancer for the cluster.
   * 
   * @example
   * lb-2zehc05z3b8dwiifh****
   * 
   * @deprecated
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * The custom Subject Alternative Names (SANs) for the API server certificate.
   */
  extraSans?: string[];
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
   * The IP stack of the cluster. Valid values:
   * - ipv4: The cluster supports only the IPv4 stack.
   * - dual: The cluster supports both IPv4 and IPv6 stacks.
   * 
   * @example
   * ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * The maintenance window configuration of the cluster. This configuration takes effect only for managed clusters, namely ACK Pro clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The access endpoints of the cluster, including the internal network and public network access endpoints.
   * 
   * @example
   * {\\"intranet_api_server_endpoint\\":\\"https://192.168.xx.xx:6443\\"***}
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
   * The name of the cluster.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The network type of the cluster, such as VPC.
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
   * Applicable only to the Flannel network plugin. 
   * 
   * The size of the subnet mask allocated to nodes, which controls the number of IP addresses that can be allocated to each node.
   * 
   * @example
   * 26
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * The automatic O&M policy of the cluster.
   */
  operationPolicy?: DescribeClusterDetailResponseBodyOperationPolicy;
  /**
   * @remarks
   * The collection of Resource Orchestration Service (ROS) parameters for the cluster.
   * 
   * @deprecated
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether PrivateZone is enabled for the cluster. Valid values:  
   * 
   * - `true`: Enabled.
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
   * The cluster subtype.
   * 
   * - `Default`: ACK managed clusters, including ACK Cluster Pro Edition and ACK Cluster Basic Edition.
   *  
   * - `Edge`: ACK Edge clusters, including ACK Edge Cluster Pro Edition and ACK Edge Cluster Basic Edition.
   *  
   * - `Serverless`: ACK Serverless clusters, including ACK Serverless Cluster Pro Edition and ACK Serverless Cluster Basic Edition.
   *  
   * - `Lingjun`: ACK Lingjun clusters, available only in the Pro Edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy mode. Valid values:
   * 
   * - `iptables`: The mature and stable kube-proxy mode. Service discovery and load balancing for Kubernetes Services are configured by using iptables rules. However, the performance is average and heavily affected by the scale. This mode is suitable for clusters with a small number of Services.
   * - `ipvs`: The high-performance kube-proxy mode. Service discovery and load balancing for Kubernetes Services are configured by using the Linux IPVS module. This mode is suitable for clusters with a large number of Services and scenarios that require high-performance load balancing.
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
   * The RAM Roles for Service Accounts (RRSA) configuration.
   */
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
   * The CIDR block of the Service network.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.xx.xx/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The number of nodes in the cluster, including master nodes and worker nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The cluster status. Valid values:
   * - `initial`: The cluster is being created.
   * - `failed`: Cluster creation failed.
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
   * - `delete_failed`: Cluster deletion failed.
   * - `waiting`: The cluster is waiting for access.
   * - `disconnected`: The cluster is disconnected.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The Pod CIDR block.
   * 
   * @example
   * 172.20.xx.xx/16
   * 
   * @deprecated
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The cluster resource tags.
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
   * 2025-04-10T13:28:09+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the cluster is deployed. This parameter is required when you create a cluster.
   * 
   * @example
   * vpc-2zecuu62b9zw7a7qn****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID. **[Deprecated]** To query the vSwitches for the control plane, use vswitch_ids. To query the vSwitches for the data plane, query the vswitch_ids of the node pool.
   * 
   * @example
   * vsw-2zete8s4qocqg0mf6****,vsw-2zete8s4qocqg0mf6****
   * 
   * @deprecated
   */
  vswitchId?: string;
  /**
   * @remarks
   * The vSwitches for the cluster control plane.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * The name of the RAM role for worker nodes. This role authorizes ECS instances to act as worker nodes in the cluster.
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

