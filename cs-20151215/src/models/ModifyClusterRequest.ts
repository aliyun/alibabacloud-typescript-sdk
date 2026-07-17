// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";


export class ModifyClusterRequestApiServerCustomCertSans extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite or append the SAN configuration. Valid values:
   * - overwrite: overwrites the existing configuration.
   * - append: appends to the existing configuration.
   * 
   * @example
   * append
   */
  action?: string;
  /**
   * @remarks
   * The SAN list.
   */
  subjectAlternativeNames?: string[];
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      subjectAlternativeNames: 'subject_alternative_names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subjectAlternativeNames)) {
      $dara.Model.validateArray(this.subjectAlternativeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequestControlPlaneConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for control plane node instances. This parameter takes effect only when `charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enables auto-renewal.
   * - `false`: Disables auto-renewal.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration for each renewal cycle of control plane node instances.
   * 
   * Valid values: {1, 2, 3, 6, 12}. Unit: months.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method for control plane node instances. Valid values:
   * 
   * - `PrePaid`: subscription.
   * - `PostPaid`: pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on control plane nodes. Valid values:
   * 
   * - `true`: Installs the CloudMonitor agent.
   * - `false`: Does not install the CloudMonitor agent.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The node CPU management policy. The following policies are supported for clusters running version 1.12.6 or later:
   * 
   * - `static`: Allows pods with certain resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * - `none`: Uses the existing default CPU affinity scheme.
   * 
   * Default value: `none`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-bp10b35imuam5amw****
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The custom image ID. Specify this parameter when using a custom image.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20240819.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system image type. Valid values:
   * 
   * - `AliyunLinux3`: Alinux3 image.
   * - `Custom`: custom image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The instance types. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The key pair name. Mutually exclusive with `login_password`.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. Mutually exclusive with `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. To use password-based logon, specify this parameter during scale-out.
   * 
   * @example
   * Ack@2000.
   */
  loginPassword?: string;
  /**
   * @remarks
   * The node service port range. Available port range: [30000, 65535].
   * 
   * Default value: 30000-32767.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The subscription duration for control plane node instances. This parameter takes effect and is required only when `charge_type` is set to `PrePaid`.
   * 
   * When `period_unit=Month`, valid values are {1, 2, 3, 6, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle unit for control plane node instances. This parameter takes effect only when `charge_type` is set to `PrePaid`.
   * 
   * `Month`: The billing cycle is measured in months. Currently, only months are supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The container runtime name. Valid values:
   * 
   * - `containerd`: Recommended. Supported by all cluster versions.
   * 
   * Default value: containerd.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Specifies whether to enable Alibaba Cloud OS security hardening. Valid values:
   * 
   * - `true`: Enables Alibaba Cloud OS security hardening.
   * - `false`: Disables Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * The number of control plane nodes. To scale out the control plane of a dedicated cluster, set this parameter to the target number of control plane nodes, which must be greater than the current number.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. For more information, see [ACK MLPS 2.0 security hardening](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * - `true`: Enables MLPS 2.0 security hardening.
   * - `false`: Disables MLPS 2.0 security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable burst (performance burst) for the node system cloud disk. Valid values:
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The node system cloud disk type. Valid values:
   * - `cloud_efficiency`: ultra cloud disk.
   * - `cloud_ssd`: standard SSD.
   * - `cloud_essd`: Enterprise SSD (ESSD).
   * - `cloud_auto`: ESSD AutoPL cloud disk.
   * - `cloud_essd_entry`: ESSD Entry cloud disk.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the node system cloud disk. This parameter takes effect only for ESSD cloud disks. The performance level varies based on the cloud disk size. For more information, see [standard SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for the node system cloud disk. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The node system cloud disk size. Valid values: [40, 500]. Unit: GiB.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the node system cloud disk.
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
      instanceTypes: 'instance_types',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
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
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      keyPair: 'string',
      loginPassword: 'string',
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
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequestControlPlaneEndpointsConfigInternalDnsConfig extends $dara.Model {
  /**
   * @remarks
   * The VPCs where the internal domain name resolution takes effect.
   */
  bindVpcs?: string[];
  /**
   * @remarks
   * Specifies whether to enable internal domain name access for the cluster. Valid values:
   * - true: Enables internal domain name access. Node-side components (kubelet, kube-proxy) access the API Server through the internal domain name.
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

export class ModifyClusterRequestControlPlaneEndpointsConfigLoadBalancersConfig extends $dara.Model {
  /**
   * @remarks
   * The endpoint type.
   * 
   * @example
   * public
   */
  endpointType?: string;
  /**
   * @remarks
   * The SLB instance associated with the endpoint.
   * 
   * @example
   * nlb-xxxx
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'endpoint_type',
      loadBalancerId: 'load_balancer_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyClusterRequestControlPlaneEndpointsConfig extends $dara.Model {
  /**
   * @remarks
   * The internal DNS configuration for the cluster. Applicable to ACK managed clusters. The internal domain name is used by node-side system components such as kubelet and kube-proxy to access the API Server. When internal domain name access is not enabled, node-side system components access the API Server through the CLB IP address.
   */
  internalDnsConfig?: ModifyClusterRequestControlPlaneEndpointsConfigInternalDnsConfig;
  /**
   * @remarks
   * The cluster access load balancing configuration.
   */
  loadBalancersConfig?: ModifyClusterRequestControlPlaneEndpointsConfigLoadBalancersConfig[];
  static names(): { [key: string]: string } {
    return {
      internalDnsConfig: 'internal_dns_config',
      loadBalancersConfig: 'load_balancers_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalDnsConfig: ModifyClusterRequestControlPlaneEndpointsConfigInternalDnsConfig,
      loadBalancersConfig: { 'type': 'array', 'itemType': ModifyClusterRequestControlPlaneEndpointsConfigLoadBalancersConfig },
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

export class ModifyClusterRequestOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * The cluster auto upgrade frequency. For more information, see [Upgrade frequency](https://help.aliyun.com/document_detail/2712866.html).
   * 
   * Valid values:
   * - patch: latest patch version.
   * - stable: second-latest minor version.
   * - rapid: latest minor version.
   * 
   * @example
   * patch
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster auto upgrade.
   * 
   * - true: Enables auto upgrade.
   * 
   * - false: Disables auto upgrade.
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

export class ModifyClusterRequestOperationPolicy extends $dara.Model {
  /**
   * @remarks
   * The cluster auto upgrade configuration.
   */
  clusterAutoUpgrade?: ModifyClusterRequestOperationPolicyClusterAutoUpgrade;
  static names(): { [key: string]: string } {
    return {
      clusterAutoUpgrade: 'cluster_auto_upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterAutoUpgrade: ModifyClusterRequestOperationPolicyClusterAutoUpgrade,
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

export class ModifyClusterRequestSystemEventsLogging extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable system event storage.
   * 
   * 
   * - true: Enables system event storage.
   * 
   * - false: Disables system event storage.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the LogProject used for system event storage.
   * 
   * @example
   * k8s-log-cb95aa626a47740afbf6aa099b65****
   */
  loggingProject?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      loggingProject: 'logging_project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      loggingProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The access control list for the registered cluster API Server SLB.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The custom API Server certificate Subject Alternative Name (SAN). This parameter adds custom IP addresses or domain names to the SAN field of the cluster API Server certificate for client access control.
   * 
   * Only managed clusters support this parameter.
   */
  apiServerCustomCertSans?: ModifyClusterRequestApiServerCustomCertSans;
  /**
   * @remarks
   * Indicates whether an Elastic IP Address (EIP) is attached to the cluster for public network access to the API server. Valid values:
   * 
   * - `true`: An EIP is attached to the cluster.
   * - `false`: No EIP is attached to the cluster.
   * 
   * @example
   * true
   */
  apiServerEip?: boolean;
  /**
   * @remarks
   * The instance ID of the EIP attached to the cluster API Server. This parameter takes effect only when `api_server_eip` is set to `true`.
   * 
   * @example
   * eip-wz9fnasl6dsfhmvci****
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * af31042c-6355-495b-b6e3-exxb9669
   */
  clientToken?: string;
  /**
   * @remarks
   * The custom cluster name. The name can contain digits, Chinese characters, letters, and hyphens (-). It must be 1 to 63 characters in length and cannot start with a hyphen (-).
   * 
   * @example
   * cluster-new-name
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster specification when `cluster_type` is set to `ManagedKubernetes` and `profile` is configured. Valid values:
   * 
   * - `ack.pro.small`: Pro
   * - `ack.pro.xlarge`: Pro XL
   * - `ack.pro.2xlarge`: Pro 2XL
   * - `ack.pro.4xlarge`: Pro 4XL (contact customer service to be added to the whitelist)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and dedicating control plane resources, these tiers ensure that API concurrency and pod scheduling capabilities remain at a consistently high level. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For information about the cluster management fees for Pro and provisioned control plane editions, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The dedicated cluster control plane configuration.
   */
  controlPlaneConfig?: ModifyClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * The cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: ModifyClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster to prevent accidental deletion through the console or API. Valid values:
   * 
   * - `true`: Enables cluster deletion protection. The cluster cannot be deleted through the console or API.
   * - `false`: Disables cluster deletion protection. The cluster can be deleted through the console or API.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable or disable the RAM Roles for Service Accounts (RRSA) feature. Only managed clusters support this parameter. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * Specifies whether to rebind the cluster test domain name. Valid values:
   * 
   * - `true`: Rebinds the cluster test domain name.
   * - `false`: Does not rebind the cluster test domain name.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  ingressDomainRebinding?: boolean;
  /**
   * @remarks
   * The SLB instance ID of the cluster to be modified.
   * 
   * @example
   * lb-wz97kes8tnndkpodw****
   * 
   * @deprecated
   */
  ingressLoadbalancerId?: string;
  /**
   * @remarks
   * Specifies whether to enable instance deletion protection to prevent accidental deletion of nodes through the console or API. Valid values:
   * 
   * - `true`: Nodes cannot be accidentally deleted through the console or API.
   * - `false`: Nodes can be accidentally deleted through the console or API.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  instanceDeletionProtection?: boolean;
  /**
   * @remarks
   * The maintenance window configuration for the cluster. This feature takes effect only for ACK Pro clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The cluster automatic O&M policy.
   */
  operationPolicy?: ModifyClusterRequestOperationPolicy;
  /**
   * @remarks
   * The resource group ID of the cluster.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The control plane security group ID.
   * 
   * - If you have configured blocking rules in the security group, ensure that the security group rules allow the protocols and ports required by the cluster. For information about recommended security group rules, see [Configure and manage cluster security groups](https://help.aliyun.com/document_detail/353191.html).
   * - For non-ACK dedicated clusters, the cluster control plane and installed managed components (such as terway-controlplane) briefly restart during the procedure. Perform this operation during off-peak hours. After the control plane security group is changed, the network interface controllers (NICs) used by the cluster control plane and installed managed components are automatically added to the new security group.
   * - For ACK dedicated clusters, after the control plane security group is changed, newly scaled-out master nodes automatically use the new control plane security group. Existing control plane nodes are not affected.
   * 
   * @example
   * sg-bp1h6rk3pgct2a08***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The system event storage configuration.
   */
  systemEventsLogging?: ModifyClusterRequestSystemEventsLogging;
  /**
   * @remarks
   * The cluster time zone. See [Supported time zones](https://help.aliyun.com/document_detail/354879.html).
   * - After the time zone is changed, the cluster inspection configuration uses the new time zone settings.
   * 
   * - For managed clusters, the cluster control plane and installed managed components (such as terway-controlplane) briefly restart during the change. Perform this operation during off-peak hours. After the time zone is changed, newly scaled-out nodes automatically use the new time zone settings. Existing nodes are not affected. You can use the node pool node reset feature to apply the new settings to existing nodes.
   * 
   * - For dedicated clusters, after the time zone is changed, newly scaled-out nodes (including control plane nodes) automatically use the new time zone settings. Existing nodes (including control plane nodes) are not affected. You can use the node pool node reset feature to apply the new settings to existing nodes. For control plane nodes, scale out and then scale in to apply the new settings to all control plane nodes.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The vSwitches for the cluster control plane. For dedicated clusters, the change applies to newly scaled-out control plane nodes. When changing control plane vSwitches for managed clusters, note the following:
   * - This parameter performs a full overwrite. Specify the complete list of target vSwitches.
   * - Control plane components briefly restart during the change. Proceed with caution.
   * - Ensure that all security groups of the cluster (including the control plane security group, security groups of all node pools, and security groups used by the container network) allow inbound and outbound traffic for the IP CIDR blocks of the new vSwitches to prevent nodes and containers from losing connectivity to the API server.
   * - If the new control plane vSwitches have ACL rules configured, ensure that the ACL rules allow communication with the CIDR blocks of cluster nodes and the container network.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'access_control_list',
      apiServerCustomCertSans: 'api_server_custom_cert_sans',
      apiServerEip: 'api_server_eip',
      apiServerEipId: 'api_server_eip_id',
      clientToken: 'client_token',
      clusterName: 'cluster_name',
      clusterSpec: 'cluster_spec',
      controlPlaneConfig: 'control_plane_config',
      controlPlaneEndpointsConfig: 'control_plane_endpoints_config',
      deletionProtection: 'deletion_protection',
      enableRrsa: 'enable_rrsa',
      ingressDomainRebinding: 'ingress_domain_rebinding',
      ingressLoadbalancerId: 'ingress_loadbalancer_id',
      instanceDeletionProtection: 'instance_deletion_protection',
      maintenanceWindow: 'maintenance_window',
      operationPolicy: 'operation_policy',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      systemEventsLogging: 'system_events_logging',
      timezone: 'timezone',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: { 'type': 'array', 'itemType': 'string' },
      apiServerCustomCertSans: ModifyClusterRequestApiServerCustomCertSans,
      apiServerEip: 'boolean',
      apiServerEipId: 'string',
      clientToken: 'string',
      clusterName: 'string',
      clusterSpec: 'string',
      controlPlaneConfig: ModifyClusterRequestControlPlaneConfig,
      controlPlaneEndpointsConfig: ModifyClusterRequestControlPlaneEndpointsConfig,
      deletionProtection: 'boolean',
      enableRrsa: 'boolean',
      ingressDomainRebinding: 'boolean',
      ingressLoadbalancerId: 'string',
      instanceDeletionProtection: 'boolean',
      maintenanceWindow: MaintenanceWindow,
      operationPolicy: ModifyClusterRequestOperationPolicy,
      resourceGroupId: 'string',
      securityGroupId: 'string',
      systemEventsLogging: ModifyClusterRequestSystemEventsLogging,
      timezone: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.accessControlList)) {
      $dara.Model.validateArray(this.accessControlList);
    }
    if(this.apiServerCustomCertSans && typeof (this.apiServerCustomCertSans as any).validate === 'function') {
      (this.apiServerCustomCertSans as any).validate();
    }
    if(this.controlPlaneConfig && typeof (this.controlPlaneConfig as any).validate === 'function') {
      (this.controlPlaneConfig as any).validate();
    }
    if(this.controlPlaneEndpointsConfig && typeof (this.controlPlaneEndpointsConfig as any).validate === 'function') {
      (this.controlPlaneEndpointsConfig as any).validate();
    }
    if(this.maintenanceWindow && typeof (this.maintenanceWindow as any).validate === 'function') {
      (this.maintenanceWindow as any).validate();
    }
    if(this.operationPolicy && typeof (this.operationPolicy as any).validate === 'function') {
      (this.operationPolicy as any).validate();
    }
    if(this.systemEventsLogging && typeof (this.systemEventsLogging as any).validate === 'function') {
      (this.systemEventsLogging as any).validate();
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

