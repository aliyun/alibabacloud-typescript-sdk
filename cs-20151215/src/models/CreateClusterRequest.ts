// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Addon } from "./Addon";
import { MaintenanceWindow } from "./MaintenanceWindow";
import { Nodepool } from "./Nodepool";
import { Runtime } from "./Runtime";
import { Tag } from "./Tag";
import { Taint } from "./Taint";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";


export class CreateClusterRequestAuditLogConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the cluster audit log feature.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The [Simple Log Service project](https://help.aliyun.com/document_detail/48873.html) that contains the [Logstore](https://help.aliyun.com/document_detail/48873.html) for cluster audit logs.
   * 
   * @example
   * k8s-log-c2345xxxxxxxxxxxx
   */
  slsProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      slsProjectName: 'sls_project_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      slsProjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAutoMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable intelligent managed mode.
   * 
   * @example
   * true
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

export class CreateClusterRequestControlPlaneConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for control plane nodes. This parameter is valid only when charge_type is set to `PrePaid`.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration of control plane nodes.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of control plane nodes.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to install CloudMonitor on nodes.
   * 
   * @example
   * false
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes.
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
   * The image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20240819.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system image type.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The instance metadata access configuration for ECS instances.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance types of nodes.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the key pair. Specify either this parameter or login_password.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Specify either this parameter or key_pair.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * **[Deprecated]** The node service port range.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The subscription duration of control plane nodes. This parameter is valid and required only when charge_type is set to `PrePaid`.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration of control plane nodes. This parameter is valid and required only when charge_type is set to `PrePaid`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** The runtime name of control plane nodes. Valid values:
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Specifies whether to enable Alibaba Cloud OS security hardening.
   * 
   * @example
   * false
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
   * Specifies whether to enable MLPS security hardening.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable burst (performance burst) for the system cloud disk of nodes.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the system cloud disk for nodes.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the system cloud disk. This parameter takes effect only for ESSD disks.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the system cloud disk for nodes.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system cloud disk for nodes.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The automatic snapshot policy for nodes.
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
      instanceMetadataOptions: InstanceMetadataOptions,
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

export class CreateClusterRequestControlPlaneEndpointsConfigInternalDnsConfig extends $dara.Model {
  /**
   * @remarks
   * The VPCs in which the internal domain name DNS resolution takes effect.
   */
  bindVpcs?: string[];
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'bind_vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: { 'type': 'array', 'itemType': 'string' },
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

export class CreateClusterRequestControlPlaneEndpointsConfigLoadBalancersConfig extends $dara.Model {
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
   * The NLB instance ID.
   * 
   * @example
   * nlb-0ogk9aaxxxxxxx
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

export class CreateClusterRequestControlPlaneEndpointsConfig extends $dara.Model {
  /**
   * @remarks
   * The internal DNS configuration of the cluster. This applies to ACK managed clusters. The internal domain name is used by node-side system components such as kubelet and kube-proxy to access the API Server. If the internal domain name access is not enabled, node-side system components access the API Server through the CLB IP address.
   */
  internalDnsConfig?: CreateClusterRequestControlPlaneEndpointsConfigInternalDnsConfig;
  /**
   * @remarks
   * The cluster connection configuration. When this field is specified, the endpoint_public_access and load_balancer_id parameters do not take effect.
   */
  loadBalancersConfig?: CreateClusterRequestControlPlaneEndpointsConfigLoadBalancersConfig[];
  static names(): { [key: string]: string } {
    return {
      internalDnsConfig: 'internal_dns_config',
      loadBalancersConfig: 'load_balancers_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalDnsConfig: CreateClusterRequestControlPlaneEndpointsConfigInternalDnsConfig,
      loadBalancersConfig: { 'type': 'array', 'itemType': CreateClusterRequestControlPlaneEndpointsConfigLoadBalancersConfig },
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

export class CreateClusterRequestOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * The cluster auto-upgrade frequency. Valid values:
   * 
   * @example
   * stable
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster auto-upgrade.
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

export class CreateClusterRequestOperationPolicy extends $dara.Model {
  /**
   * @remarks
   * The cluster auto-upgrade configuration.
   */
  clusterAutoUpgrade?: CreateClusterRequestOperationPolicyClusterAutoUpgrade;
  static names(): { [key: string]: string } {
    return {
      clusterAutoUpgrade: 'cluster_auto_upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterAutoUpgrade: CreateClusterRequestOperationPolicyClusterAutoUpgrade,
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

export class CreateClusterRequestRrsaConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the RRSA feature.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateClusterRequestWorkerDataDisks extends $dara.Model {
  /**
   * @remarks
   * The type of the data disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk. Valid values:
   * 
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @remarks
   * The performance level of the data cloud disk for nodes. This parameter takes effect only for [standard SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Valid values: 40 to 32767. Unit: GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      encrypted: 'encrypted',
      performanceLevel: 'performance_level',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      encrypted: 'string',
      performanceLevel: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The access control list for the API Server SLB of the registered cluster.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The list of cluster components. Use `addons` to specify the components to install when creating a cluster.
   */
  addons?: Addon[];
  /**
   * @remarks
   * A ServiceAccount is the access credential for communication between a pod and the cluster API server. The `api-audiences` parameter specifies the valid request `token` identities used by the `apiserver` to authenticate whether a request `token` is valid. You can specify multiple `audience` values separated by commas (,).
   * 
   * @example
   * kubernetes.default.svc
   */
  apiAudiences?: string;
  /**
   * @remarks
   * The cluster audit log configuration.
   */
  auditLogConfig?: CreateClusterRequestAuditLogConfig;
  /**
   * @remarks
   * The [intelligent managed mode](https://help.aliyun.com/document_detail/2938898.html) configuration.
   */
  autoMode?: CreateClusterRequestAutoMode;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * PostPaid
   * 
   * @deprecated
   */
  chargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `security_hardening_os` parameter under `control_plane_config` instead. For node pool configuration, use the `security_hardening_os` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane node configuration, use the `cloud_monitor_flags` parameter under `control_plane_config` instead. For node pool configuration, use the `cms_enabled` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The cluster local domain name.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * If you set `cluster_type` to `ManagedKubernetes` and configure `profile`, you can further specify the cluster specifications. Valid values:
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * - `Kubernetes`: ACK dedicated cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The pod network CIDR block. It must be a valid private CIDR block, which includes the following CIDR blocks and their subnets: 10.0.0.0/8, 172.16-31.0.0/12-16, and 192.168.0.0/16. It cannot overlap with the CIDR blocks used by the VPC or existing Kubernetes clusters in the VPC. It cannot be modified after the cluster is created.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The control plane configuration for ACK dedicated clusters.
   */
  controlPlaneConfig?: CreateClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * The cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: CreateClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * The list of component names that specifies which control plane components to collect logs from.
   */
  controlplaneLogComponents?: string[];
  /**
   * @remarks
   * The Simple Log Service project for control plane component logs. You can use an existing project for log storage or allow the system to automatically create a project. If you choose automatic creation, a Simple Log Service project named `k8s-log-{ClusterID}` is automatically created.
   * 
   * @example
   * k8s-log-xxx
   */
  controlplaneLogProject?: string;
  /**
   * @remarks
   * The number of days for control plane component log retention.
   * 
   * @example
   * 30
   */
  controlplaneLogTtl?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the cpu_policy parameter under `control_plane_config` instead. For node pool configuration, use the cpu_policy parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * @example
   * none
   * 
   * @deprecated
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the `extra_sans` parameter instead.
   * 
   * @example
   * cs.aliyun.com
   * 
   * @deprecated
   */
  customSan?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster to prevent accidental deletion through the console or API. Valid values:
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * **[Deprecated]** When cluster creation fails, rollback is not performed by default. You must manually clean up the failed cluster.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Use the `rrsa_config` parameter instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * The KMS key ID used to encrypt data cloud disks. For more information, see [Key Management Service](https://help.aliyun.com/document_detail/28935.html).
   * 
   * @example
   * 0fe64791-55eb-4fc7-84c5-c6c7cdca****
   */
  encryptionProviderKey?: string;
  /**
   * @remarks
   * Specifies whether to public network access. The API Server is exposed through an EIP to public network access to the cluster.
   * 
   * @example
   * true
   */
  endpointPublicAccess?: boolean;
  /**
   * @remarks
   * The custom API Server certificate SAN (Subject Alternative Name).
   */
  extraSans?: string[];
  /**
   * @remarks
   * **[Deprecated]** Selecting existing nodes during cluster creation is not supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `image_id` parameter under `control_plane_config` instead. For node pool configuration, use the `image_id` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * m-bp16z7xko3vvv8gt****
   * 
   * @deprecated
   */
  imageId?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `image_type` parameter under `control_plane_config` instead. For node pool configuration, use the `image_type` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  imageType?: string;
  /**
   * @remarks
   * **[Deprecated]** Selecting existing nodes during cluster creation is not supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * @deprecated
   */
  instances?: string[];
  /**
   * @remarks
   * The IP stack of the cluster.
   * 
   * @example
   * Valid values:
   */
  ipStack?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic creation of an advanced security group. This parameter takes effect only when `security_group_id` is empty.
   * 
   * @example
   * true
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Selecting existing nodes during cluster creation is not supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the key_pair parameter under `control_plane_config` instead. For node pool configuration, use the key_pair parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * security-key
   * 
   * @deprecated
   */
  keyPair?: string;
  /**
   * @remarks
   * The cluster version, which is consistent with the Kubernetes community baseline version. Use the latest version. If you do not specify this parameter, the latest version is used by default.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The CLB instance ID used for API Server access. When this parameter is specified, automatic creation of the API Server CLB is skipped.
   * 
   * @example
   * lb-wz9t256gqa3vbouk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * **[Deprecated]** CLB is billed on a pay-by-usage basis. This parameter does not take effect.
   * 
   * @example
   * slb.s2.small
   * 
   * @deprecated
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * **[Deprecated]** Enables the log service for the cluster. This parameter takes effect only for ACK Serverless clusters, and the value must be `SLS`.
   * 
   * @example
   * SLS
   * 
   * @deprecated
   */
  loggingType?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the login_password parameter under `control_plane_config` instead. For node pool configuration, use the login_password parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  loginPassword?: string;
  /**
   * @remarks
   * The cluster maintenance window.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the auto_renew parameter under `control_plane_config` instead.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  masterAutoRenew?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the auto_renew_period parameter under `control_plane_config` instead.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  masterAutoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the size parameter under `control_plane_config` instead.
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  masterCount?: number;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the instance_charge_type parameter under `control_plane_config` instead.
   * 
   * @example
   * PrePaid
   * 
   * @deprecated
   */
  masterInstanceChargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the instance_types parameter under `control_plane_config` instead.
   * 
   * @deprecated
   */
  masterInstanceTypes?: string[];
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `unit` parameter under `control_plane_config` instead.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  masterPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the period_unit parameter under `control_plane_config` instead.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  masterPeriodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the system_disk_category parameter under `control_plane_config` instead.
   * 
   * @example
   * cloud_ssd
   * 
   * @deprecated
   */
  masterSystemDiskCategory?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the system_disk_performance_level parameter under `control_plane_config` instead.
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  masterSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the system_disk_size parameter under `control_plane_config` instead.
   * 
   * @example
   * 120
   * 
   * @deprecated
   */
  masterSystemDiskSize?: number;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the system_disk_snapshot_policy_id parameter under `control_plane_config` instead.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  masterSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the `vswitch_ids` parameter instead.
   * 
   * @deprecated
   */
  masterVswitchIds?: string[];
  /**
   * @remarks
   * The custom cluster name. The name must be 1 to 63 characters in length and can contain digits, Chinese characters, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the `snat_entry` parameter instead.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  natGateway?: boolean;
  /**
   * @remarks
   * The number of node IP addresses, determined by specifying the network CIDR block. This parameter takes effect only for Flannel network type clusters.
   * 
   * @example
   * 25
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `node_name_mode` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The node service port. Valid port range: [30000,65535\\].
   * 
   * @example
   * 30000~32767
   * 
   * @deprecated
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The list of node pools.
   */
  nodepools?: Nodepool[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the desired_size parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  numOfNodes?: number;
  /**
   * @remarks
   * The cluster automatic O&M policy.
   */
  operationPolicy?: CreateClusterRequestOperationPolicy;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane node configuration, use the `image_type` parameter under `control_plane_config` instead. For node pool configuration, use the `image_type` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * Linux
   * 
   * @deprecated
   */
  osType?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  period?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `platform` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * CentOS
   * 
   * @deprecated
   */
  platform?: string;
  /**
   * @remarks
   * **[Deprecated]** When you select Terway as the network plugin, you must specify vSwitches for pod IP address allocation. Each pod vSwitch corresponds to a worker node vSwitch, and the pod vSwitch and the worker node vSwitch must be in the same zone.
   * 
   * @deprecated
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * If you set `cluster_type` to `ManagedKubernetes`, which indicates an ACK managed cluster, you can further specify the cluster subtype.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy proxy mode.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `rds_instances` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @deprecated
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The region ID of the cluster. For details, see [Regions supported by container service](https://help.aliyun.com/document_detail/216938.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the cluster, which is used to isolate different resources.
   * 
   * @example
   * rg-acfm3mkrure****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The RRSA feature configuration.
   */
  rrsaConfig?: CreateClusterRequestRrsaConfig;
  /**
   * @remarks
   * The container runtime in the cluster. Supported runtimes include containerd, sandboxed containers, and Docker.
   * 
   * @deprecated
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The security group ID. Specify this parameter when you use an existing security group to create a cluster. This parameter and `is_enterprise_security_group` are mutually exclusive. Cluster nodes are automatically added to this security group.
   * 
   * @example
   * sg-bp1bdue0qc1g7k****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `security_hardening_os` parameter under `control_plane_config` instead. For node pool configuration, use the `security_hardening_os` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * A ServiceAccount is the access credential for communication between a pod and the cluster API server. The `service-account-issuer` is the issuer identity in the `serviceaccount token`, which is the `iss` field in the `token payload`.
   * 
   * @example
   * kubernetes.default.svc
   */
  serviceAccountIssuer?: string;
  /**
   * @remarks
   * The Service network CIDR block. Valid ranges: 10.0.0.0/16-24, 172.16-31.0.0/16-24, and 192.168.0.0/16-24.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * **[Deprecated]** The service discovery types within the cluster, used to specify the service discovery method in `ACK Serverless` clusters.
   * 
   * @deprecated
   */
  serviceDiscoveryTypes?: string[];
  /**
   * @remarks
   * Specifies whether to configure SNAT for the VPC. Valid values:
   * 
   * @example
   * false
   */
  snatEntry?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane node configuration, use the `soc_enabled` parameter under `control_plane_config` instead. For node pool configuration, use the `soc_enabled` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable public SSH logon. This is used to log on to the master nodes of ACK dedicated clusters. This parameter does not take effect for managed clusters.
   * 
   * @example
   * true
   */
  sshFlags?: boolean;
  /**
   * @remarks
   * The node tags. Tag definition rules:
   */
  tags?: Tag[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `taints` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * @deprecated
   */
  taints?: Taint[];
  /**
   * @remarks
   * **[Deprecated]** When cluster creation fails, rollback is not performed by default. You must manually clean up the failed cluster.
   * 
   * @example
   * 60
   * 
   * @deprecated
   */
  timeoutMins?: number;
  /**
   * @remarks
   * The time zone used by the cluster. For more information, see [Supported time zones](https://help.aliyun.com/document_detail/354879.html).
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The custom cluster CA.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  userCa?: string;
  /**
   * @remarks
   * **[Deprecated]** The custom node data.
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFD****
   * 
   * @deprecated
   */
  userData?: string;
  /**
   * @remarks
   * The VPC used by the cluster. You must provide a VPC when you create a cluster.
   * 
   * @example
   * vpc-2zeik9h3ahvv2zz95****
   */
  vpcid?: string;
  /**
   * @remarks
   * The vSwitches for cluster nodes. This field is required when you create a zero-node managed cluster.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the auto_renew parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  workerAutoRenew?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the auto_renew_period parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  workerAutoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the data_disks parameter under `scaling_group` in `nodepool` instead.
   * 
   * @deprecated
   */
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the instance_charge_type parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * PrePaid
   * 
   * @deprecated
   */
  workerInstanceChargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the instance_types parameter under `scaling_group` in `nodepool` instead.
   * 
   * @deprecated
   */
  workerInstanceTypes?: string[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the period parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  workerPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the period_unit parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the system_disk_category parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * cloud_efficiency
   * 
   * @deprecated
   */
  workerSystemDiskCategory?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the system_disk_performance_level parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  workerSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the system_disk_size parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * 120
   * 
   * @deprecated
   */
  workerSystemDiskSize?: number;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the system_disk_snapshot_policy_id parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  workerSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the vswitch_ids parameter under `scaling_group` in `nodepool` instead.
   * 
   * @deprecated
   */
  workerVswitchIds?: string[];
  /**
   * @remarks
   * **[Deprecated]** Use the `zone_ids` parameter instead.
   * 
   * @example
   * cn-beiji****
   * 
   * @deprecated
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone IDs of the cluster region. This parameter is specific to ACK managed clusters.
   */
  zoneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'access_control_list',
      addons: 'addons',
      apiAudiences: 'api_audiences',
      auditLogConfig: 'audit_log_config',
      autoMode: 'auto_mode',
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      chargeType: 'charge_type',
      cisEnabled: 'cis_enabled',
      cloudMonitorFlags: 'cloud_monitor_flags',
      clusterDomain: 'cluster_domain',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      containerCidr: 'container_cidr',
      controlPlaneConfig: 'control_plane_config',
      controlPlaneEndpointsConfig: 'control_plane_endpoints_config',
      controlplaneLogComponents: 'controlplane_log_components',
      controlplaneLogProject: 'controlplane_log_project',
      controlplaneLogTtl: 'controlplane_log_ttl',
      cpuPolicy: 'cpu_policy',
      customSan: 'custom_san',
      deletionProtection: 'deletion_protection',
      disableRollback: 'disable_rollback',
      enableRrsa: 'enable_rrsa',
      encryptionProviderKey: 'encryption_provider_key',
      endpointPublicAccess: 'endpoint_public_access',
      extraSans: 'extra_sans',
      formatDisk: 'format_disk',
      imageId: 'image_id',
      imageType: 'image_type',
      instances: 'instances',
      ipStack: 'ip_stack',
      isEnterpriseSecurityGroup: 'is_enterprise_security_group',
      keepInstanceName: 'keep_instance_name',
      keyPair: 'key_pair',
      kubernetesVersion: 'kubernetes_version',
      loadBalancerId: 'load_balancer_id',
      loadBalancerSpec: 'load_balancer_spec',
      loggingType: 'logging_type',
      loginPassword: 'login_password',
      maintenanceWindow: 'maintenance_window',
      masterAutoRenew: 'master_auto_renew',
      masterAutoRenewPeriod: 'master_auto_renew_period',
      masterCount: 'master_count',
      masterInstanceChargeType: 'master_instance_charge_type',
      masterInstanceTypes: 'master_instance_types',
      masterPeriod: 'master_period',
      masterPeriodUnit: 'master_period_unit',
      masterSystemDiskCategory: 'master_system_disk_category',
      masterSystemDiskPerformanceLevel: 'master_system_disk_performance_level',
      masterSystemDiskSize: 'master_system_disk_size',
      masterSystemDiskSnapshotPolicyId: 'master_system_disk_snapshot_policy_id',
      masterVswitchIds: 'master_vswitch_ids',
      name: 'name',
      natGateway: 'nat_gateway',
      nodeCidrMask: 'node_cidr_mask',
      nodeNameMode: 'node_name_mode',
      nodePortRange: 'node_port_range',
      nodepools: 'nodepools',
      numOfNodes: 'num_of_nodes',
      operationPolicy: 'operation_policy',
      osType: 'os_type',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      podVswitchIds: 'pod_vswitch_ids',
      profile: 'profile',
      proxyMode: 'proxy_mode',
      rdsInstances: 'rds_instances',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      rrsaConfig: 'rrsa_config',
      runtime: 'runtime',
      securityGroupId: 'security_group_id',
      securityHardeningOs: 'security_hardening_os',
      serviceAccountIssuer: 'service_account_issuer',
      serviceCidr: 'service_cidr',
      serviceDiscoveryTypes: 'service_discovery_types',
      snatEntry: 'snat_entry',
      socEnabled: 'soc_enabled',
      sshFlags: 'ssh_flags',
      tags: 'tags',
      taints: 'taints',
      timeoutMins: 'timeout_mins',
      timezone: 'timezone',
      userCa: 'user_ca',
      userData: 'user_data',
      vpcid: 'vpcid',
      vswitchIds: 'vswitch_ids',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerDataDisks: 'worker_data_disks',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerInstanceTypes: 'worker_instance_types',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskPerformanceLevel: 'worker_system_disk_performance_level',
      workerSystemDiskSize: 'worker_system_disk_size',
      workerSystemDiskSnapshotPolicyId: 'worker_system_disk_snapshot_policy_id',
      workerVswitchIds: 'worker_vswitch_ids',
      zoneId: 'zone_id',
      zoneIds: 'zone_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: { 'type': 'array', 'itemType': 'string' },
      addons: { 'type': 'array', 'itemType': Addon },
      apiAudiences: 'string',
      auditLogConfig: CreateClusterRequestAuditLogConfig,
      autoMode: CreateClusterRequestAutoMode,
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      cisEnabled: 'boolean',
      cloudMonitorFlags: 'boolean',
      clusterDomain: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      containerCidr: 'string',
      controlPlaneConfig: CreateClusterRequestControlPlaneConfig,
      controlPlaneEndpointsConfig: CreateClusterRequestControlPlaneEndpointsConfig,
      controlplaneLogComponents: { 'type': 'array', 'itemType': 'string' },
      controlplaneLogProject: 'string',
      controlplaneLogTtl: 'string',
      cpuPolicy: 'string',
      customSan: 'string',
      deletionProtection: 'boolean',
      disableRollback: 'boolean',
      enableRrsa: 'boolean',
      encryptionProviderKey: 'string',
      endpointPublicAccess: 'boolean',
      extraSans: { 'type': 'array', 'itemType': 'string' },
      formatDisk: 'boolean',
      imageId: 'string',
      imageType: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      ipStack: 'string',
      isEnterpriseSecurityGroup: 'boolean',
      keepInstanceName: 'boolean',
      keyPair: 'string',
      kubernetesVersion: 'string',
      loadBalancerId: 'string',
      loadBalancerSpec: 'string',
      loggingType: 'string',
      loginPassword: 'string',
      maintenanceWindow: MaintenanceWindow,
      masterAutoRenew: 'boolean',
      masterAutoRenewPeriod: 'number',
      masterCount: 'number',
      masterInstanceChargeType: 'string',
      masterInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      masterPeriod: 'number',
      masterPeriodUnit: 'string',
      masterSystemDiskCategory: 'string',
      masterSystemDiskPerformanceLevel: 'string',
      masterSystemDiskSize: 'number',
      masterSystemDiskSnapshotPolicyId: 'string',
      masterVswitchIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      natGateway: 'boolean',
      nodeCidrMask: 'string',
      nodeNameMode: 'string',
      nodePortRange: 'string',
      nodepools: { 'type': 'array', 'itemType': Nodepool },
      numOfNodes: 'number',
      operationPolicy: CreateClusterRequestOperationPolicy,
      osType: 'string',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      podVswitchIds: { 'type': 'array', 'itemType': 'string' },
      profile: 'string',
      proxyMode: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      rrsaConfig: CreateClusterRequestRrsaConfig,
      runtime: Runtime,
      securityGroupId: 'string',
      securityHardeningOs: 'boolean',
      serviceAccountIssuer: 'string',
      serviceCidr: 'string',
      serviceDiscoveryTypes: { 'type': 'array', 'itemType': 'string' },
      snatEntry: 'boolean',
      socEnabled: 'boolean',
      sshFlags: 'boolean',
      tags: { 'type': 'array', 'itemType': Tag },
      taints: { 'type': 'array', 'itemType': Taint },
      timeoutMins: 'number',
      timezone: 'string',
      userCa: 'string',
      userData: 'string',
      vpcid: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerDataDisks: { 'type': 'array', 'itemType': CreateClusterRequestWorkerDataDisks },
      workerInstanceChargeType: 'string',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerSystemDiskCategory: 'string',
      workerSystemDiskPerformanceLevel: 'string',
      workerSystemDiskSize: 'number',
      workerSystemDiskSnapshotPolicyId: 'string',
      workerVswitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
      zoneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.accessControlList)) {
      $dara.Model.validateArray(this.accessControlList);
    }
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    if(this.auditLogConfig && typeof (this.auditLogConfig as any).validate === 'function') {
      (this.auditLogConfig as any).validate();
    }
    if(this.autoMode && typeof (this.autoMode as any).validate === 'function') {
      (this.autoMode as any).validate();
    }
    if(this.controlPlaneConfig && typeof (this.controlPlaneConfig as any).validate === 'function') {
      (this.controlPlaneConfig as any).validate();
    }
    if(this.controlPlaneEndpointsConfig && typeof (this.controlPlaneEndpointsConfig as any).validate === 'function') {
      (this.controlPlaneEndpointsConfig as any).validate();
    }
    if(Array.isArray(this.controlplaneLogComponents)) {
      $dara.Model.validateArray(this.controlplaneLogComponents);
    }
    if(Array.isArray(this.extraSans)) {
      $dara.Model.validateArray(this.extraSans);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(this.maintenanceWindow && typeof (this.maintenanceWindow as any).validate === 'function') {
      (this.maintenanceWindow as any).validate();
    }
    if(Array.isArray(this.masterInstanceTypes)) {
      $dara.Model.validateArray(this.masterInstanceTypes);
    }
    if(Array.isArray(this.masterVswitchIds)) {
      $dara.Model.validateArray(this.masterVswitchIds);
    }
    if(Array.isArray(this.nodepools)) {
      $dara.Model.validateArray(this.nodepools);
    }
    if(this.operationPolicy && typeof (this.operationPolicy as any).validate === 'function') {
      (this.operationPolicy as any).validate();
    }
    if(Array.isArray(this.podVswitchIds)) {
      $dara.Model.validateArray(this.podVswitchIds);
    }
    if(Array.isArray(this.rdsInstances)) {
      $dara.Model.validateArray(this.rdsInstances);
    }
    if(this.rrsaConfig && typeof (this.rrsaConfig as any).validate === 'function') {
      (this.rrsaConfig as any).validate();
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(Array.isArray(this.serviceDiscoveryTypes)) {
      $dara.Model.validateArray(this.serviceDiscoveryTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.taints)) {
      $dara.Model.validateArray(this.taints);
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    if(Array.isArray(this.workerDataDisks)) {
      $dara.Model.validateArray(this.workerDataDisks);
    }
    if(Array.isArray(this.workerInstanceTypes)) {
      $dara.Model.validateArray(this.workerInstanceTypes);
    }
    if(Array.isArray(this.workerVswitchIds)) {
      $dara.Model.validateArray(this.workerVswitchIds);
    }
    if(Array.isArray(this.zoneIds)) {
      $dara.Model.validateArray(this.zoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

