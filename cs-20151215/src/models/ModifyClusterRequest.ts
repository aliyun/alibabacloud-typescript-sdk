// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";


export class ModifyClusterRequestApiServerCustomCertSans extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite or append the SAN configuration. Valid values:
   * 
   * - overwrite: Overwrites the existing configuration.
   * 
   * - append: Appends to the existing configuration.
   * 
   * @example
   * append
   */
  action?: string;
  /**
   * @remarks
   * The list of SANs.
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
   * 
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
   * The auto-renewal duration for each renewal of control plane node instances.
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
   * - `PrePaid`: Subscription.
   * 
   * - `PostPaid`: Pay-as-you-go.
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
   * 
   * - `false`: Does not install the CloudMonitor agent.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes. Clusters of version 1.12.6 or later support the following policies:
   * 
   * - `static`: Enhances CPU affinity and exclusivity for pods with specific resource characteristics on nodes.
   * 
   * - `none`: Uses the default CPU affinity scheme.
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
   * The custom image ID. Specify this parameter when you use a custom image.
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
   * 
   * - `Custom`: Custom image.
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
   * The key pair name. Specify either this parameter or `login_password`.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. Specify either this parameter or `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. To use password-based logon, specify this parameter during scale-out.
   * 
   * @example
   * Ack@2000.
   */
  loginPassword?: string;
  /**
   * @remarks
   * Valid port range: [30000,65535].
   * 
   * Default value: 30000-32767.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The subscription duration for control plane node instances. This parameter is required and takes effect only when `charge_type` is set to `PrePaid`.
   * 
   * When `period_unit=Month`, valid values are {1, 2, 3, 6, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle for control plane node instances. This parameter takes effect only when `charge_type` is set to `PrePaid`.
   * 
   * `Month`: Billing by month. Only monthly billing is supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The container runtime. Valid values:
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
   * Alibaba Cloud OS security hardening. Valid values:
   * 
   * - `true`: Enables Alibaba Cloud OS security hardening.
   * 
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
   * MLPS 2.0 security hardening. For more information, see [Use MLPS 2.0 security hardening for ACK](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * 
   * - `true`: Enables MLPS 2.0 security hardening.
   * 
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
   * Specifies whether to enable performance burst for node system disks. Valid values:
   * 
   * - `true`: Enables performance burst.
   * 
   * - `false`: Disables performance burst.
   * 
   * You can set this parameter only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The system disk category for nodes. Valid values:
   * 
   * - `cloud_efficiency`: Ultra disk.
   * 
   * - `cloud_ssd`: Standard SSD.
   * 
   * - `cloud_essd`: ESSD.
   * 
   * - `cloud_auto`: ESSD AutoPL.
   * 
   * - `cloud_essd_entry`: ESSD Entry.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of node system disks. This parameter applies only to ESSDs. The performance level depends on the disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for node system disks. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * You can set this parameter only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The system disk size for nodes. Valid values: [40,500]. Unit: GiB.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The automatic snapshot policy ID for node system disks.
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
   * The VPCs where cluster internal domain name resolution takes effect.
   */
  bindVpcs?: string[];
  /**
   * @remarks
   * Specifies whether to enable cluster internal domain name access. Valid values:
   * 
   * - true: Enables cluster internal domain name access. Node-side components (kubelet, kube-proxy) access the API server through the cluster internal domain name.
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

export class ModifyClusterRequestControlPlaneEndpointsConfig extends $dara.Model {
  /**
   * @remarks
   * Internal domain name configuration for the cluster. This feature is available for ACK managed clusters. Cluster internal domain names allow node-side system components such as kubelet and kube-proxy to access the API server. If this feature is disabled, node-side system components access the API server through the CLB IP address.
   */
  internalDnsConfig?: ModifyClusterRequestControlPlaneEndpointsConfigInternalDnsConfig;
  static names(): { [key: string]: string } {
    return {
      internalDnsConfig: 'internal_dns_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalDnsConfig: ModifyClusterRequestControlPlaneEndpointsConfigInternalDnsConfig,
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

export class ModifyClusterRequestOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * The frequency of automatic cluster upgrades. For more information, see [Upgrade frequency](https://help.aliyun.com/document_detail/2712866.html).
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
   * Specifies whether to enable automatic cluster upgrades.
   * 
   * - true: Enables automatic upgrades.
   * 
   * - false: Disables automatic upgrades.
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
   * Automatic cluster upgrade.
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
   * Specifies whether to enable system event logging.
   * 
   * - true: Enables system event logging.
   * 
   * - false: Disables system event logging.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The LogProject name for system event logging.
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
   * The access control list for the API server SLB of registered clusters.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * This parameter adds custom IP addresses or domain names to the SAN field of the API server certificate to control client access.
   * 
   * Only managed clusters support this parameter.
   */
  apiServerCustomCertSans?: ModifyClusterRequestApiServerCustomCertSans;
  /**
   * @remarks
   * Specifies whether to bind an EIP to the cluster for public network access to the API server. Valid values:
   * 
   * - `true`: Binds an EIP to the cluster.
   * 
   * - `false`: Does not bind an EIP to the cluster.
   * 
   * @example
   * true
   */
  apiServerEip?: boolean;
  /**
   * @remarks
   * The EIP instance ID bound to the cluster API server. This parameter takes effect only when `api_server_eip` is set to `true`.
   * 
   * @example
   * eip-wz9fnasl6dsfhmvci****
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * The custom cluster name. The name can contain digits, letters, Chinese characters, and hyphens (-). It must be 1 to 63 characters in length and cannot start with a hyphen (-).
   * 
   * @example
   * cluster-new-name
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster specification when you set `cluster_type` to `ManagedKubernetes` and configure `profile`. Valid values:
   * 
   * - `ack.pro.small`: Pro
   * 
   * - `ack.pro.xlarge`: Pro XL
   * 
   * - `ack.pro.2xlarge`: Pro 2XL
   * 
   * - `ack.pro.4xlarge`: Pro 4XL (requires approval from customer service to enable)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro provisioned control plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro provisioned control plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). These tiers pre-allocate and dedicate control plane resources to ensure consistent high performance for API concurrency and pod scheduling. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For cluster management fees for Pro and provisioned control plane clusters, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * Control plane configuration for dedicated clusters.
   */
  controlPlaneConfig?: ModifyClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * Cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: ModifyClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * Enables or disables cluster deletion protection to prevent accidental cluster deletion from the console or using APIs. Valid values:
   * 
   * - `true`: Enables cluster deletion protection. You cannot delete the cluster from the console or using APIs.
   * 
   * - `false`: Disables cluster deletion protection. You can delete the cluster from the console or using APIs.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Enables or disables the RRSA feature. Only managed clusters support this parameter. Valid values:
   * 
   * - `true`: Enables RRSA.
   * 
   * - `false`: Disables RRSA.
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
   * 
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
   * Enables or disables instance deletion protection to prevent accidental release of nodes from the console or using APIs. Valid values:
   * 
   * - `true`: Prevents accidental node deletion from the console or using APIs.
   * 
   * - `false`: Allows accidental node deletion from the console or using APIs.
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
   * The maintenance window of the cluster. This feature is available only for ACK managed clusters Pro.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * Automatic O\\&M policy for the cluster.
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
   * The security group ID for the control plane.
   * 
   * - If you configure blocking rules in the security group, ensure that the security group rules allow the protocols and ports required by the cluster. For recommended security group rules, see [Configure and manage cluster security groups](https://help.aliyun.com/document_detail/353191.html).
   * 
   * - For non-dedicated ACK clusters, the control plane and installed managed components (such as terway-controlplane) restart briefly during the update. Perform this operation during off-peak hours. After you change the control plane security group, the ENIs used by the control plane and managed components are automatically added to the new security group.
   * 
   * - For ACK dedicated clusters, newly scaled-out master nodes automatically apply the new control plane security group. Existing control plane nodes are unaffected.
   * 
   * @example
   * sg-bp1h6rk3pgct2a08***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * System event logging configuration.
   */
  systemEventsLogging?: ModifyClusterRequestSystemEventsLogging;
  /**
   * @remarks
   * The cluster time zone. For more information, see [Supported time zones](https://help.aliyun.com/document_detail/354879.html).
   * 
   * - After you change the time zone, cluster inspection configurations use the new time zone.
   * 
   * - For managed clusters, the control plane and installed managed components (such as terway-controlplane) restart briefly during the update. Perform this operation during off-peak hours. Newly scaled-out nodes automatically apply the new time zone. Existing nodes are unaffected. You can reset nodes in node pools to apply the new time zone to existing nodes.
   * 
   * - For dedicated clusters, newly scaled-out nodes (including control plane nodes) automatically apply the new time zone. Existing nodes (including control plane nodes) are unaffected. You can reset nodes in node pools to apply the new time zone to existing nodes. For control plane nodes, scale out and then scale in to apply the new time zone to all control plane nodes.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The vSwitches for the cluster control plane. For dedicated clusters, the change applies only to newly scaled-out control plane nodes. When you change the control plane vSwitches for managed clusters, note the following:
   * 
   * - This parameter performs an overwrite update. You must specify the complete target vSwitch list.
   * 
   * - Control plane components restart briefly during the update. Proceed with caution.
   * 
   * - Ensure that all security groups (including those for the control plane, all node pools, and container networking) allow inbound and outbound traffic for the IP CIDR blocks of the new vSwitches. Otherwise, nodes and containers cannot connect to the API server.
   * 
   * - If the new control plane vSwitches have ACL rules configured, ensure that these rules allow communication between the vSwitches and the IP CIDR blocks of cluster nodes and container networks.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'access_control_list',
      apiServerCustomCertSans: 'api_server_custom_cert_sans',
      apiServerEip: 'api_server_eip',
      apiServerEipId: 'api_server_eip_id',
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

