// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintenanceWindow } from "./MaintenanceWindow";


export class ModifyClusterRequestApiServerCustomCertSans extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite or add SANs. Valid values:
   * 
   * *   overwrite: overwrites SANs.
   * *   append: adds SANs.
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
   * Specifies whether to enable auto-renewal for control plane nodes. This parameter takes effect only when `charge_type` is set to `PrePaid`. Valid values:
   * 
   * *   `true`: enables auto-renewal.
   * *   `false`: disables auto-renewal.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period of control plane nodes. Valid values: 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of control plane nodes. Valid values:
   * 
   * *   `PrePaid`: subscription.
   * *   `PostPaid`: pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent. Valid values:
   * 
   * *   `true`: installs the CloudMonitor agent.
   * *   `false`: does not install the CloudMonitor agent.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The CPU management policy of nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
   * *   `none`: specifies that the default CPU affinity is used.
   * 
   * Default value: `none`.
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
   * The custom image ID. You must configure this parameter if you use a custom image.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20240819.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the OS image. Valid values:
   * 
   * *   `AliyunLinux3`: Alibaba Cloud Linux 3.
   * *   `Custom`: the custom image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The type of instance. For more information, see [Overview of ECS instance families](https://help.aliyun.com/document_detail/25378.html).
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the key pair. You must configure either this parameter or the `login_password` parameter.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The password for SSH logon. You must configure either this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. To log on with a password, you must specify this parameter during the scale-out.
   * 
   * @example
   * Ack@2000.
   */
  loginPassword?: string;
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
   * The subscription duration of the instance. This parameter takes effect and is required only when `charge_type` is set to `PrePaid`.
   * 
   * If `PeriodUnit=Month` is specified, the valid values are 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of control plane nodes. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`.
   * 
   * Set the value to `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The type of the container runtime. Valid values:
   * 
   * *   `containerd`: supports all Kubernetes versions. We recommend that you set the parameter to this value.
   * 
   * Default value: containerd.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Specifies whether to enable Alibaba Cloud Linux Security Hardening. Valid values:
   * 
   * *   `true`: enables Alibaba Cloud Linux Security Hardening.
   * *   `false`: disables Alibaba Cloud Linux Security Hardening.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * The number of control plane nodes. If you want to scale out the control plane in an ACK dedicated cluster, set this parameter to the desired number of nodes. This parameter must be greater than the current number of nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * Specifies whether to enable Multi-Level Protection Scheme (MLPS) security hardening. For more information, see [ACK security hardening based on MLPS](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * 
   * *   `true`: enables MLPS security hardening.
   * *   `false`: disables MLPS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the burst feature for the system disk. Valid values:
   * 
   * *   `true`: enables the burst feature.
   * *   `false`: disables the burst feature.
   * 
   * This parameter is effective only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system disk for nodes. Valid values:
   * 
   * *   `cloud`: basic disk.
   * *   `cloud_efficiency`: ultra disk.
   * *   `cloud_ssd`: standard SSD.
   * *   `cloud_essd`: Enterprise ESSD (ESSD).
   * *   `cloud_auto`: ESSD AutoPL disk.
   * *   `cloud_essd_entry`: ESSD Entry disk.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk that you want to use for the node. This parameter is effective only for ESSDs. This parameter is related to the disk size. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The preset read/write input/output operations per second (IOPS) of the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * This parameter is effective only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The type of the system disk. Valid values: [40,500]. Unit: GiB.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the node system disk.
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

export class ModifyClusterRequestOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * The frequency of auto cluster update. For more information, see [Update frequency](https://help.aliyun.com/document_detail/2712866.html).
   * 
   * Valid values:
   * 
   * *   patch: the latest patch version.
   * *   stables: the second-latest minor version.
   * *   rapid: the latest minor version.
   * 
   * @example
   * patch
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic update.
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
   * The configurations of automatic update.
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
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the Simple Log Service project that stores system events.
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
   * The network access control list (ACL) of the SLB instance associated with the API server if the cluster is a registered cluster.
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The custom subject alternative names (SANs) for the API server certificate to accept requests from specified IP addresses or domain names. This parameter is available only for ACK managed clusters.
   */
  apiServerCustomCertSans?: ModifyClusterRequestApiServerCustomCertSans;
  /**
   * @remarks
   * Specifies whether to associate an elastic IP address (EIP) with the cluster. This EIP is used to enable access to the API server over the Internet. Valid values:
   * 
   * *   `true`: associates an EIP with the cluster.
   * *   `false`: does not associate an EIP with the cluster.
   * 
   * @example
   * true
   */
  apiServerEip?: boolean;
  /**
   * @remarks
   * The ID of the EIP that you want to associate with the API server of the cluster. This parameter takes effect when `api_server_eip` is set to `true`.
   * 
   * @example
   * eip-wz9fnasl6dsfhmvci****
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * The cluster name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). The cluster name cannot start with a hyphen (-).
   * 
   * @example
   * cluster-new-name
   */
  clusterName?: string;
  /**
   * @remarks
   * The control plane configurations of an ACK dedicated cluster.
   */
  controlPlaneConfig?: ModifyClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * Specifies whether to enable cluster deletion protection. If you enable this option, the cluster cannot be deleted in the console or by calling API operations. Valid values:
   * 
   * *   `true`: enables cluster deletion protection.
   * *   `false`: disables cluster deletion protection.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the RAM Roles for Service Accounts (RRSA) feature. This parameter is available only for ACK managed clusters. Valid values:
   * 
   * *   `true`: enables the RRSA feature.
   * *   `false`: disables the RRSA feature.
   * 
   * @example
   * true
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * Specifies whether to remap the test domain name of the cluster. Valid values:
   * 
   * *   `true`: remaps the test domain name of the cluster.
   * *   `false`: does not remap the test domain name of the cluster.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  ingressDomainRebinding?: boolean;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance of the cluster to be modified.
   * 
   * @example
   * lb-wz97kes8tnndkpodw****
   */
  ingressLoadbalancerId?: string;
  /**
   * @remarks
   * Specifies whether to enable instance deletion protection. If you enable this option, the instance cannot be deleted in the console or by calling API operations. Valid values:
   * 
   * *   `true`: enables instance deletion protection.
   * *   `false`: disables instance deletion protection.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  instanceDeletionProtection?: boolean;
  /**
   * @remarks
   * The cluster maintenance window. This feature takes effect only for ACK Pro clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The automatic O\\&M policy of the cluster.
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
   * The ID of the security group for the control plane. 
   * 
   * - If block rules are configured in the security group, ensure the security group rules allow traffic for protocols and ports required by the cluster. For recommended security group rules, see [Configure and manage security groups for an ACK cluster](https://www.alibabacloud.com/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters?spm=a2c63.p38356.help-menu-85222.d_2_0_4_3.43e35d09s8oSlR).
   * 
   * - For non-ACK dedicated clusters: 
   *   - During security group updates, the cluster control plane and managed components (e.g., terway-controlplane) will restart briefly. Perform this operation during off-peak hours.
   *   - After updating the control plane security group, the Elastic Network Interfaces (ENIs) used by the control plane and managed components will automatically join the new security group.
   * 
   * - For ACK dedicated clusters:
   *    - After updating the control plane security group, newly scaled-out master nodes will automatically apply the new security group. Existing control plane nodes remain unaffected.
   * 
   * @example
   * sg-bp1h6rk3pgct2a08***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The storage configurations of system events.
   */
  systemEventsLogging?: ModifyClusterRequestSystemEventsLogging;
  /**
   * @remarks
   * The time zone configuration for the cluster.
   * 
   * - After modifying the time zone, cluster inspection configurations will adopt the new time zone.
   * 
   * - For ACK managed clusters:
   *    - During time zone updates, the cluster control plane and managed components (e.g., terway-controlplane) will restart briefly. Perform this operation during off-peak hours.
   *    - After updating the time zone:
   *       - Newly scaled-out nodes will automatically apply the new time zone.
   *       - Existing nodes remain unaffected. Reset the node to apply changes to existing nodes.
   * 
   * - For ACK dedicated clusters:
   *    - After updating the time zone:
   *       - Newly scaled-out nodes (including control plane nodes) automatically apply the new time zone.
   *       - Existing nodes (including control plane nodes) remain unaffected. Reset the node to apply changes to existing nodes.
   *       - For control plane nodes, perform a scale-out followed by a scale-in to apply the new time zone to all control plane nodes.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The vSwitches of the control plane. This parameter can be used to change the vSwitches of the control plane in an ACK managed cluster. Take note of the following items:
   * 
   * *   This parameter overwrites the existing configuration. You must specify all vSwitches of the control plane.
   * *   The control plane components restarts during the change process. Exercise caution when you perform this operation.
   * *   Ensure that all security groups of the cluster, including the security groups of the control plane, all node pools, and container network, are allowed to access the CIDR blocks of the new vSwitches. This ensures that the nodes and containers can connect to the API server.
   * *   If the new vSwitches of the control plane are configured with an ACL, ensure that the ACL allows communication between the new vSwitches and CIDR blocks such as those of the cluster nodes and the container network.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'access_control_list',
      apiServerCustomCertSans: 'api_server_custom_cert_sans',
      apiServerEip: 'api_server_eip',
      apiServerEipId: 'api_server_eip_id',
      clusterName: 'cluster_name',
      controlPlaneConfig: 'control_plane_config',
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
      controlPlaneConfig: ModifyClusterRequestControlPlaneConfig,
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

