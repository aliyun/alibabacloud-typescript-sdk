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
   * Specifies whether to enable auto-renewal for the control plane node instances. This parameter takes effect only when `charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: enables auto-renewal.
   * - `false`: disables auto-renewal.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for the control plane node instances.
   * 
   * Valid values: 1, 2, 3, 6, and 12. Unit: months.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of the control plane node instances. Valid values:
   * 
   * - `PrePaid`: subscription
   * - `PostPaid`: pay-as-you-go
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on the control plane nodes. Valid values:
   * 
   * - `true`: installs the CloudMonitor agent.
   * - `false`: does not install the CloudMonitor agent.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes. The following two policies are supported when the cluster version is 1.12.6 or later:
   * 
   * - `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * - `none`: indicates that the default CPU affinity scheme is used.
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
   * The type of the operating system image. Valid values:
   * 
   * - `AliyunLinux3`: Alibaba Cloud Linux 3 image.
   * - `Custom`: custom image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the key pair. You must specify this parameter or `login_password`.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. You must specify this parameter or `key_pair`. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. If you want to use a password for logon, you must specify this parameter during scale-out.
   * 
   * @example
   * Ack@2000.
   */
  loginPassword?: string;
  /**
   * @remarks
   * The service port range of the node.
   * Valid values: 30000 to 65535.
   * 
   * Default value: 30000-32767.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The subscription duration of the control plane node instances. This parameter is required and takes effect only when `charge_type` is set to `PrePaid`.
   * 
   * When `period_unit` is set to `Month`, valid values are 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the control plane node instances. This parameter takes effect only when `charge_type` is set to `PrePaid`.
   * 
   * `Month`: months. Currently, only months are supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The name of the container runtime. Valid values:
   * 
   * - `containerd`: recommended. Supported by all cluster versions.
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
   * - `true`: enables Alibaba Cloud OS security hardening.
   * - `false`: disables Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * The number of control plane nodes. If you want to scale out the control plane of a dedicated cluster, set this parameter to the target number of control plane nodes, which must be greater than the current number of control plane nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. For more information, see [ACK MLPS 2.0 security hardening instructions](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * - `true`: enables MLPS 2.0 security hardening.
   * - `false`: disables MLPS 2.0 security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the burst mode for the system cloud disk of the node. Valid values:
   * - `true`: yes
   * - `false`: no
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the system cloud disk. Valid values:
   * - `cloud_efficiency`: ultra disk
   * - `cloud_ssd`: standard SSD
   * - `cloud_essd`: ESSD
   * - `cloud_auto`: ESSD AutoPL cloud disk
   * - `cloud_essd_entry`: ESSD Entry cloud disk
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the system cloud disk. This parameter takes effect only for ESSDs. The performance level is related to the disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS of the system cloud disk. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system cloud disk. Valid values: 40 to 500. Unit: GiB.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy applied to the system cloud disk of the node.
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
   * The VPCs where internal DNS resolution takes effect.
   */
  bindVpcs?: string[];
  /**
   * @remarks
   * Specifies whether to enable internal DNS access for the cluster. Valid values:
   * - true: Enables internal DNS access. Node-side components such as kubelet and kube-proxy access the API server by using the internal domain name.
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
   * The ID of the Server Load Balancer (SLB) instance associated with the endpoint.
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
   * The internal DNS configuration for ACK managed clusters. Internal domain names are used by node-side system components such as kubelet and kube-proxy to access the API server. If internal DNS access is not enabled, node-side system components access the API server by using the CLB IP address.
   */
  internalDnsConfig?: ModifyClusterRequestControlPlaneEndpointsConfigInternalDnsConfig;
  /**
   * @remarks
   * The load balancing configuration for cluster access.
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
   * The channel for automatic cluster upgrades. For more information, see [Upgrade channels](https://help.aliyun.com/document_detail/2712866.html).
   * 
   * Valid values:
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
   * Specifies whether to enable automatic cluster upgrades. Valid values:
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
   * The automatic cluster upgrade configuration.
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
   * Specifies whether to enable system event logging. Valid values:
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
   * The name of the LogProject for system event logging.
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
   * The access control list of the SLB instance for the API server of the registered cluster.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The custom Subject Alternative Names (SANs) for the API server certificate. You can add custom IP addresses or domain names to the SAN field of the API server certificate to implement access control for clients.
   * 
   * Only managed clusters support this parameter.
   */
  apiServerCustomCertSans?: ModifyClusterRequestApiServerCustomCertSans;
  /**
   * @remarks
   * Specifies whether an EIP is attached to the cluster for public network access to the API server. Valid values:
   * 
   * - `true`: attaches an EIP to the cluster.
   * - `false`: does not attach an EIP to the cluster.
   * 
   * @example
   * true
   */
  apiServerEip?: boolean;
  /**
   * @remarks
   * The EIP instance ID attached to the API server of the cluster. This parameter takes effect only when `api_server_eip` is set to `true`.
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
   * The custom cluster name. The name must be 1 to 63 characters in length and can contain digits, Chinese characters, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * @example
   * cluster-new-name
   */
  clusterName?: string;
  /**
   * @remarks
   * The specification of the cluster when `cluster_type` is set to `ManagedKubernetes` and `profile` is configured. Valid values:
   * 
   * - `ack.pro.small`: Pro Edition
   * - `ack.pro.xlarge`: Pro XL
   * - `ack.pro.2xlarge`: Pro 2XL
   * - `ack.pro.4xlarge`: Pro 4XL (contact customer service to apply for whitelist access)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are the three tiers provided by the <props="china">[ACK Pro provisioned control plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro provisioned control plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and reserving control plane resources, these tiers ensure that API concurrency and pod scheduling capabilities are always maintained at a consistently high level. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For more information about the cluster management fees for the Pro Edition and provisioned control plane editions, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The control plane configuration for dedicated clusters.
   */
  controlPlaneConfig?: ModifyClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * The cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: ModifyClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster to prevent accidental deletion through the console or API calls. Valid values:
   * 
   * - `true`: Enables deletion protection. The cluster cannot be deleted through the console or API calls.
   * - `false`: Disables deletion protection. The cluster can be deleted through the console or API calls.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the RAM Roles for Service Accounts (RRSA) feature. Only managed clusters support this parameter. Valid values:
   * 
   * - `true`: Enables the feature.
   * - `false`: Disables the feature.
   * 
   * @example
   * true
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * Specifies whether to rebind the test domain name of the cluster to the SLB address of the Ingress. Valid values:
   * 
   * - `true`: Rebinds the test domain name of the cluster.
   * - `false`: Does not rebind the test domain name of the cluster.
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
   * The instance ID of the SLB for the Ingress of the cluster to be modified.
   * 
   * @example
   * lb-wz97kes8tnndkpodw****
   * 
   * @deprecated
   */
  ingressLoadbalancerId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for instances to prevent accidental deletion or release of nodes through the console or API calls. Valid values:
   * 
   * - `true`: Enables deletion protection. Nodes cannot be accidentally deleted or released through the console or API calls.
   * - `false`: Disables deletion protection. Nodes can be accidentally deleted or released through the console or API calls.
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
   * The maintenance window of the cluster. This feature takes effect only in ACK managed clusters of the Pro edition.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The automatic O&M policy for the cluster.
   */
  operationPolicy?: ModifyClusterRequestOperationPolicy;
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
   * The ID of the control plane security group.
   * 
   * - If you have configured blocking rules in the security group, make sure that the security group rules allow the protocols and ports on which the cluster depends. For more information about the recommended security group rules for cluster management, see [Configure and manage cluster security groups](https://help.aliyun.com/document_detail/353191.html).
   * - For ACK clusters other than dedicated clusters, the cluster control plane and installed managed components such as terway-controlplane will be briefly restarted during the procedure. We recommend that you perform this operation during off-peak hours. After the control plane security group is changed, the elastic network interfaces (ENIs) used by the cluster control plane and installed managed components are automatically added to the new security group.
   * - For ACK dedicated clusters, after the control plane security group is changed, newly scaled-out master nodes automatically apply the new control plane security group. Existing control plane nodes are not affected.
   * 
   * @example
   * sg-bp1h6rk3pgct2a08***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The version support policy for the cluster. The value is case-sensitive. Valid values:
   * - Standard: Standard support.
   * - Extended: Extended support. After the standard support period ends, the cluster enters the extended support period and continues to receive CVE patch versions.
   * Only ACK managed clusters of the Pro edition (where cluster_spec is set to ack.pro.* and profile is set to Default) support the Extended value. If you specify Extended for ACK standard clusters, ACS clusters, ACK managed clusters of the edge edition, or ACK dedicated clusters, the request will be rejected.
   * If you do not specify this parameter, the current value of the cluster remains unchanged. After a cluster is upgraded to an extended support patch version, it cannot be changed back to Standard.
   * 
   * @example
   * Extended
   */
  supportPolicy?: string;
  /**
   * @remarks
   * The system event logging configuration.
   */
  systemEventsLogging?: ModifyClusterRequestSystemEventsLogging;
  /**
   * @remarks
   * The time zone of the cluster. For more information, see [Supported time zones](https://help.aliyun.com/document_detail/354879.html).
   * - After the time zone is changed, the cluster inspection configuration adopts the new time zone settings.
   * 
   * - For managed clusters, the cluster control plane and installed managed components such as terway-controlplane will be briefly restarted during the modification. We recommend that you perform this operation during off-peak hours. After the time zone is changed, newly scaled-out nodes automatically apply the new time zone settings. Existing nodes are not affected. You can use the node reset feature in the node pool to apply the new settings to existing nodes.
   * 
   * - For dedicated clusters, after the time zone is changed, newly scaled-out nodes, including control plane nodes, automatically apply the new time zone settings. Existing nodes, including control plane nodes, are not affected. You can use the node reset feature in the node pool to apply the new settings to existing nodes. For control plane nodes, you must scale out and then scale in the nodes to apply the new settings to all control plane nodes.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The vSwitches for the cluster control plane. For dedicated clusters, the change takes effect on newly scaled-out control plane nodes. For managed clusters, note the following when changing the control plane vSwitches:
   * - This parameter overwrites the existing configuration. You must specify the complete list of target vSwitches.
   * - Control plane components will be briefly restarted during the modification. Proceed with caution.
   * - Make sure that the inbound and outbound rules of all security groups in the cluster, including the control plane security group, security groups of all node pools, and security groups used by the container network, allow the CIDR blocks of the new vSwitches. This prevents nodes and containers from failing to connect to the API server.
   * - If ACL rules are configured for the new control plane vSwitches, make sure that the ACL rules allow communication with the CIDR blocks of cluster nodes and the container network.
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
      supportPolicy: 'support_policy',
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
      supportPolicy: 'string',
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

