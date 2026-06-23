// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";


export class ModifyClusterRequestApiServerCustomCertSans extends $dara.Model {
  /**
   * @remarks
   * Overwrite or append SAN configuration. Valid values:
   * - overwrite: Overwrite.
   * - append: Append.
   * 
   * @example
   * append
   */
  action?: string;
  /**
   * @remarks
   * SAN list.
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
   * Whether to enable automatic renewal for control plane node instances. This parameter takes effect only when `charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enable automatic renewal.
   * - `false`: Disable automatic renewal.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Duration for each automatic renewal of control plane node instances.
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
   * Control plane node instance billing method. Valid values:
   * 
   * - `PrePaid`: Subscription.
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
   * Whether to install the Cloud Monitor agent on control plane nodes. Valid values:
   * 
   * - `true`: Install the Cloud Monitor agent.
   * - `false`: Do not install the Cloud Monitor agent.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * Node CPU management policy. When the cluster version is 1.12.6 or later, the following two policies are supported:
   * 
   * - `static`: Allows enhanced CPU affinity and exclusivity for Pods with certain resource characteristics on the node.
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
   * Deployment set ID.
   * 
   * @example
   * ds-bp10b35imuam5amw****
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * Custom image ID. Specified when using a custom image.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20240819.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * Operating system image type. Valid values:
   * 
   * - `AliyunLinux3`: Alinux3 image.
   * - `Custom`: Custom image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * Instance types. For more information, see [Instance Family](https://help.aliyun.com/document_detail/25378.html).
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * Key pair name. Mutually exclusive with `login_password`.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * SSH login password. Mutually exclusive with `key_pair`. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. If you want to use password login, specify this parameter during scale-out.
   * 
   * @example
   * Ack@2000.
   */
  loginPassword?: string;
  /**
   * @remarks
   * Node service port range.
   * Available port range: [30000, 65535].
   * 
   * Default value: 30000-32767.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * Control plane node instance subscription duration. This parameter takes effect and is required only when `charge_type` is set to `PrePaid`.
   * 
   * When `period_unit=Month`, valid values: {1, 2, 3, 6, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Control plane node instance billing period. This parameter takes effect only when `charge_type` is set to `PrePaid`.
   * 
   * `Month`: Billed on a monthly basis. Currently, only monthly billing is supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Container runtime name. Valid values:
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
   * - `true`: Enable Alibaba Cloud OS security hardening.
   * - `false`: Disable Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Number of control plane nodes. To scale out the dedicated cluster control plane, this parameter specifies the target number of control plane nodes and must be greater than the current number of control plane nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * Security hardening for compliance. For more information, see [ACK Security Hardening for Compliance](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * - `true`: Enable security hardening for compliance.
   * - `false`: Disable security hardening for compliance.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Whether to enable burst (performance bursting) for the node system disk. Valid values:
   * - `true`: Enable.
   * - `false`: Disable.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Node system disk type. Valid values:
   * - `cloud_efficiency`: Ultra disk.
   * - `cloud_ssd`: SSD disk.
   * - `cloud_essd`: ESSD disk.
   * - `cloud_auto`: ESSD AutoPL disk.
   * - `cloud_essd_entry`: ESSD Entry disk.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * Node system disk performance level. Only applicable to ESSD disks. The performance level is related to the disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * Provisioned read/write IOPS for the node system disk. Valid values: 0 to min{50,000, 1000*capacity - baseline performance}. Baseline performance = min{1,800 + 50*capacity, 50,000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * Node system disk size. Valid values: [40, 500]. Unit: GiB.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * Automatic snapshot policy ID for the node system disk.
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
   * VPCs where the cluster internal domain name record resolution takes effect.
   */
  bindVpcs?: string[];
  /**
   * @remarks
   * Whether to enable cluster internal domain name access. Valid values:
   * - true: Enable cluster internal domain name access. Node-side components (kubelet, kube-proxy) will access the API Server through the cluster internal domain name.
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
   * Cluster internal domain name configuration. Applicable to ACK managed clusters. The cluster internal domain name is used by node-side system components such as kubelet and kube-proxy to access the API Server. When the cluster internal domain name access is not enabled, node-side system components access via the CLB IP.
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
   * Cluster automatic upgrade frequency. For more information, see [Upgrade Frequency](https://help.aliyun.com/document_detail/2712866.html).
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
   * Whether to enable cluster automatic upgrade.
   * 
   * - true: Enable automatic upgrade.
   * 
   * - false: Disable automatic upgrade.
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
   * Cluster automatic upgrade.
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
   * Whether to enable system event storage.
   * 
   * 
   * - true: Enable system event storage.
   * 
   * - false: Disable system event storage.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * LogProject name for system event storage.
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
   * Access control list for the registered cluster API Server SLB.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * Custom API Server certificate SAN (Subject Alternative Name).
   * Used to add custom IPs or domain names to the SAN field of the cluster API Server server certificate for client access control.
   * 
   * Only managed clusters support this parameter.
   */
  apiServerCustomCertSans?: ModifyClusterRequestApiServerCustomCertSans;
  /**
   * @remarks
   * Whether to associate an EIP with the cluster for public access to API Server. Valid values:
   * 
   * - `true`: Associate an EIP with the cluster.
   * - `false`: Do not associate an EIP with the cluster.
   * 
   * @example
   * true
   */
  apiServerEip?: boolean;
  /**
   * @remarks
   * The ID of the EIP instance associated with the cluster API Server. This parameter takes effect only when `api_server_eip` is set to `true`.
   * 
   * @example
   * eip-wz9fnasl6dsfhmvci****
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * Custom cluster name. The name can contain digits, Chinese characters, English characters, or hyphens (-), must be 1 to 63 characters in length, and cannot start with a hyphen (-).
   * 
   * @example
   * cluster-new-name
   */
  clusterName?: string;
  /**
   * @remarks
   * When `cluster_type` is set to `ManagedKubernetes` and `profile` is configured, specifies the cluster specification. Valid values:
   * 
   * - `ack.pro.small`: Pro Edition
   * - `ack.pro.xlarge`: Pro XL
   * - `ack.pro.2xlarge`: Pro 2XL
   * - `ack.pro.4xlarge`: Pro 4XL (requires contacting customer service to enable allowlisting)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and fixing control plane resources, it ensures that API concurrency and Pod scheduling capabilities are always at a determined high level, suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For cluster management fees for Pro Edition and Provisioned Control Plane editions, see <props="china">[Cluster Management Fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster Management Fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * Dedicated cluster control plane configuration.
   */
  controlPlaneConfig?: ModifyClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * Cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: ModifyClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * Cluster deletion protection, which prevents accidental deletion of the cluster through the console or API. Valid values:
   * 
   * - `true`: Enable cluster deletion protection. The cluster cannot be deleted through the console or API.
   * - `false`: Disable cluster deletion protection. The cluster can be deleted through the console or API.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Enable or disable the RRSA feature (only managed clusters support this parameter). Valid values:
   * 
   * - `true`: Enable.
   * - `false`: Disable.
   * 
   * @example
   * true
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * Rebind the cluster test domain. Valid values:
   * 
   * - `true`: Rebind the cluster test domain.
   * - `false`: Do not rebind the cluster test domain.
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
   * SLB instance ID of the cluster to be modified.
   * 
   * @example
   * lb-wz97kes8tnndkpodw****
   * 
   * @deprecated
   */
  ingressLoadbalancerId?: string;
  /**
   * @remarks
   * Instance deletion protection to prevent accidental deletion and release of nodes through the console or API. Valid values:
   * 
   * - `true`: Nodes cannot be accidentally deleted through the console or API.
   * - `false`: Nodes can be deleted through the console or API.
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
   * Cluster maintenance window. This feature only takes effect for ACK Pro managed clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * Cluster automatic O&M policy.
   */
  operationPolicy?: ModifyClusterRequestOperationPolicy;
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
   * Control plane security group ID.
   * 
   * - If you have configured blocking rules in the security group, ensure that the security group rules allow the protocols and ports required by the cluster. For recommended security group rules, see [Configure and Manage Cluster Security Groups](https://help.aliyun.com/document_detail/353191.html).
   * - For non-ACK dedicated clusters, during the change process, the cluster control plane and installed managed components (such as terway-controlplane) will briefly restart. We recommend performing this operation during off-peak hours. After the control plane security group is changed, the ENIs used by the cluster control plane and installed managed components will be automatically added to the new security group.
   * - For ACK dedicated clusters, after the control plane security group is changed, newly scaled-out Master nodes will automatically use the new control plane security group. Existing control plane nodes are not affected.
   * 
   * @example
   * sg-bp1h6rk3pgct2a08***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * System event storage configuration.
   */
  systemEventsLogging?: ModifyClusterRequestSystemEventsLogging;
  /**
   * @remarks
   * Cluster timezone. See [Supported Timezones](https://help.aliyun.com/document_detail/354879.html).
   * - After changing the timezone, cluster inspection configurations will use the new timezone settings.
   * 
   * - For managed clusters, during the change process, the cluster control plane and installed managed components (such as terway-controlplane) will briefly restart. We recommend performing this operation during off-peak hours. After changing the timezone, newly scaled-out nodes will automatically use the new timezone settings. Existing nodes are not affected. You can use the node pool node reset feature to apply the new settings to existing nodes.
   * 
   * - For dedicated clusters, after changing the timezone, newly scaled-out nodes (including control plane nodes) will automatically use the new timezone settings. Existing nodes (including control plane nodes) are not affected. You can use the node pool node reset feature to apply the new settings to existing nodes. For control plane nodes, you need to scale out first and then scale in to apply the settings to all control plane nodes.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * Cluster control plane vSwitches. For dedicated clusters, this takes effect on newly scaled-out control plane nodes. When modifying control plane vSwitches for managed clusters, note the following:
   * - This parameter performs a full overwrite update. You must specify the complete list of target vSwitches.
   * - During the change, control plane components will briefly restart. Proceed with caution.
   * - Ensure that all security groups of the cluster (including the control plane security group, all node pool security groups, and container network security groups) allow inbound and outbound traffic for the IP ranges of the new vSwitches to prevent nodes and containers from being unable to connect to the API Server.
   * - If the new control plane vSwitches have ACL rules configured, ensure that the ACL rules allow communication with the cluster nodes, container network, and other IP ranges.
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

