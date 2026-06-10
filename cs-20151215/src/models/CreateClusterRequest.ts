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
   * Whether to enable cluster audit logging.
   * 
   * - true: Enable.
   * 
   * - false: Disable.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The [SLS Project](https://help.aliyun.com/document_detail/48873.html) containing the [Logstore](https://help.aliyun.com/document_detail/48873.html) for cluster audit logs.
   * 
   * - Default value: `k8s-log-{clusterid}`.
   * 
   * - When audit logging is enabled, a Logstore for audit logs is created in the specified SLS Project.
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
   * Whether to enable Intelligent Managed Mode.
   * 
   * - true: Enable.
   * 
   * - false: Disable.
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
   * Whether to enable auto-renewal for control plane nodes. Valid only when charge_type is `PrePaid`.
   * 
   * - true: Enable auto-renewal.
   * 
   * - false: Disable auto-renewal.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Auto-renewal duration for control plane nodes in months.
   * 
   * Valid values: {1, 2, 3, 6, 12}.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Control plane node billing type.
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
   * Whether to install Cloud Monitor on nodes.
   * 
   * - true: Install the CloudMonitor agent.
   * 
   * - false: Do not install the CloudMonitor agent.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * Node CPU management policy.
   * 
   * - static: Enhances CPU affinity and exclusivity for pods with specific resource characteristics on the node.
   * 
   * - none: Uses the default CPU affinity scheme.
   * 
   * Default value: none.
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
   * aliyun_3_x64_20G_alibase_20240819.vhd
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
   * ECS instance metadata access configuration.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * Node instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * Key pair name. Choose either this parameter or login_password.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * SSH login password. Password rules: 8–30 characters, containing at least three of the following: uppercase letters, lowercase letters, digits, and special characters. Choose either this parameter or key_pair.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * **[Deprecated]** Node service port range.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * Subscription duration for control plane nodes in months. Required and valid only when charge_type is `PrePaid`.
   * 
   * Valid values: {1, 2, 3, 6, 12, 24, 36, 48, 60}.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Billing cycle unit for control plane nodes. Required and valid only when charge_type is `PrePaid`.
   * 
   * Valid value: `Month`. Only monthly billing is supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** Control plane node runtime name. Valid value:
   * 
   * containerd: Containerd runtime, supported for all cluster versions.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Whether to enable Alibaba Cloud OS security hardening.
   * 
   * - true: Enable Alibaba Cloud OS security hardening.
   * 
   * - false: Disable Alibaba Cloud OS security hardening.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Number of control plane nodes.
   * 
   * Valid values: `3` or `5`.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * Whether to enable MLPS 2.0 security hardening.
   * 
   * - true: Enable MLPS 2.0 security hardening.
   * 
   * - false: Disable MLPS 2.0 security hardening.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Whether to enable performance burst for node system disks.
   * 
   * - true: Enable.
   * 
   * - false: Disable.
   * 
   * This parameter is supported only when `system_disk_category` is `cloud_auto`.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Node system disk type.
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
   * Default value: `cloud_ssd`. The default may vary by zone.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * Node system disk performance level. Applies only to ESSD disks.
   * 
   * Disk performance levels depend on disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * Provisioned read/write IOPS for node system disks.
   * 
   * Valid range: 0 to min{50,000, 1000 × capacity - baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * This parameter is supported only when `system_disk_category` is `cloud_auto`.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * Node system disk size in GiB.
   * 
   * Valid range: [40,500].
   * 
   * Default value: `120`.
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
   * VPCs where the internal domain name resolution takes effect.
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

export class CreateClusterRequestControlPlaneEndpointsConfig extends $dara.Model {
  /**
   * @remarks
   * Internal domain name configuration for the cluster, applicable to ACK managed clusters. Internal domain names allow node-side system components such as kubelet and kube-proxy to access the API Server. Without internal domain name access, node-side components access the API Server through the CLB IP address.
   */
  internalDnsConfig?: CreateClusterRequestControlPlaneEndpointsConfigInternalDnsConfig;
  static names(): { [key: string]: string } {
    return {
      internalDnsConfig: 'internal_dns_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalDnsConfig: CreateClusterRequestControlPlaneEndpointsConfigInternalDnsConfig,
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

export class CreateClusterRequestOperationPolicyClusterAutoUpgrade extends $dara.Model {
  /**
   * @remarks
   * Cluster automatic upgrade frequency. Valid values:
   * 
   * - patch: Automatically upgrade to the latest patch version within the current minor version. New Kubernetes versions do not include breaking changes.
   * 
   * - stable: Automatically upgrade to the latest patch version of the second-newest minor version. New Kubernetes versions may include API and feature changes but have undergone extensive stability validation.
   * 
   * - rapid: Automatically upgrade to the latest patch version of the newest minor version to quickly access new Kubernetes community features.
   * 
   * @example
   * stable
   */
  channel?: string;
  /**
   * @remarks
   * Whether to enable cluster automatic upgrade.
   * 
   * - true: Enable.
   * 
   * - false: Disable.
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
   * Cluster automatic upgrade.
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
   * Whether to enable RRSA.
   * 
   * - true: Enable.
   * 
   * - false: Disable.
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
   * Data disk type.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Whether to encrypt the data disk. Valid values:
   * 
   * - `true`: Encrypt the data disk.
   * 
   * - `false`: Do not encrypt the data disk.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @remarks
   * Data disk performance level. Applies only to [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Data disk size in GiB. Valid range: 40–32767.
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
   * **[Deprecated]** Access control list for the registered cluster API Server SLB.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * List of cluster components. Specify components to install during cluster creation using the `addons` parameter.
   * 
   * **Network components**: Required. Choose between Flannel and Terway:
   * 
   * - Flannel network: [{"name":"flannel","config":""}].
   * 
   * - Terway network: [{"name": "terway-eniip","config": ""}].
   * 
   * **Storage components**: Optional. Only `csi` is supported:
   * 
   * `csi`: [{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}].
   * 
   * **Logging components**: Optional. We recommend enabling this. Without SLS, you cannot use cluster audit features.
   * 
   * - Use an existing `SLS Project`: [{"name": "loongcollector","config": "{"IngressDashboardEnabled":"true","sls_project_name":"your_sls_project_name"}"}].
   * 
   * - Create a new `SLS Project`: [{"name": "loongcollector","config": "{"IngressDashboardEnabled":"true"}"}].
   * 
   * **Ingress components**: Optional. ACK dedicated clusters install the `nginx-ingress-controller` by default.
   * 
   * - Install Ingress with public network access: [{"name":"nginx-ingress-controller","config":"{"IngressSlbNetworkType":"internet"}"}].
   * 
   * - Disable default Ingress installation: [{"name": "nginx-ingress-controller","config": "","disabled": true}].
   * 
   * **Event Hub**: Optional. Enabled by default.
   * 
   * Event Hub provides storage, querying, and alerting for Kubernetes events. The associated Logstore is free for 90 days. For more information about the free policy, see [Create and use Kubernetes Event Hub](https://help.aliyun.com/document_detail/150476.html).
   * 
   * Example to enable Event Hub: [{"name":"ack-node-problem-detector","config":"{"sls_project_name":"your_sls_project_name"}"}].
   */
  addons?: Addon[];
  /**
   * @remarks
   * ServiceAccount is the access credential used by pods to communicate with the cluster API Server. The `api-audiences` specifies valid `token` identities for authenticating requests on the `apiserver` side. You can configure multiple `audience` values separated by commas (,).
   * 
   * For more information about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  apiAudiences?: string;
  /**
   * @remarks
   * Cluster audit log configuration.
   */
  auditLogConfig?: CreateClusterRequestAuditLogConfig;
  /**
   * @remarks
   * [Intelligent Managed Mode](https://help.aliyun.com/document_detail/2938898.html) configuration.
   */
  autoMode?: CreateClusterRequestAutoMode;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * Whether to enable auto-renewal. Valid only when `charge_type` is `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto-renewal.
   * 
   * - `false`: Disable auto-renewal.
   * 
   * Default value: `false`.
   * 
   * This parameter changed on October 15, 2024. For more information, see [Announcement on Changes to CreateCluster API Parameters](https://help.aliyun.com/document_detail/2849194.html).
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
   * Auto-renewal period in months. Valid only when prepaid and auto-renewal are enabled. When `PeriodUnit=Month`, valid values are {1, 2, 3, 6, 12}.
   * 
   * Default value: 1.
   * 
   * This parameter changed on October 15, 2024. For more information, see [Announcement on Changes to CreateCluster API Parameters](https://help.aliyun.com/document_detail/2849194.html).
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
   * Billing type for the CLB instance used by the API Server. Default value: PostPaid. Valid values:
   * 
   * - PostPaid: Pay-as-you-go.
   * 
   * - PrePaid: Subscription. New CLB instances no longer support subscription billing, but existing instances are unaffected.
   * 
   * >Notice: 
   * 
   * - This parameter changed on October 15, 2024. For more information, see [Announcement on Changes to CreateCluster API Parameters](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * - Starting December 1, 2024, new CLB instances will no longer support subscription billing and will incur an instance fee.
   * 
   * <props="china">For details, see [[Product Announcement\\] Discontinuation of Subscription Billing for API Server CLB in New Clusters](~~2851191~~) and [Adjustment of Classic Load Balancer Billing Items](https://help.aliyun.com/document_detail/2839797.html).
   * <props="intl">For details, see [Adjustment of Classic Load Balancer Billing Items](https://help.aliyun.com/document_detail/2839797.html).
   * 
   * @example
   * PostPaid
   * 
   * @deprecated
   */
  chargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `security_hardening_os` parameter under `control_plane_config`. For node pool configuration, use the `security_hardening_os` parameter under `scaling_group` in `nodepool`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For control plane node configuration, use the cloud_monitor_flags parameter under `control_plane_config`. For node pool configuration, use the `cms_enabled` parameter under `kubernetes_config` in `nodepool`.
   * 
   * Whether to install the CloudMonitor agent on the cluster. Valid values:
   * 
   * - `true`: Install the CloudMonitor agent.
   * 
   * - `false`: Do not install the CloudMonitor agent.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * Cluster local domain name.
   * 
   * Naming rules: The domain name consists of one or more parts separated by dots (.). Each part can be up to 63 characters long and can contain lowercase letters, digits, and hyphens (-). Each part must start and end with a lowercase letter or digit.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * When you set `cluster_type` to `ManagedKubernetes` and configure `profile`, you can further specify the cluster specification. Valid values:
   * 
   * - `ack.standard`: Basic Edition (default when this parameter is empty)
   * 
   * - `ack.pro.small`: Pro Edition
   * 
   * - `ack.pro.xlarge`: Pro XL
   * 
   * - `ack.pro.2xlarge`: Pro 2XL
   * 
   * - `ack.pro.4xlarge`: Pro 4XL (requires whitelist approval from customer service)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). These tiers pre-allocate and dedicate control plane resources to ensure consistently high API concurrency and pod scheduling performance. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For cluster management fees for Pro Edition and provisioned control plane clusters, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * - `Kubernetes`: ACK dedicated cluster.
   * 
   * - `ManagedKubernetes`: ACK managed clusters, including ACK managed clusters (Pro Edition, Basic Edition), ACK serverless clusters (Pro Edition, Basic Edition), ACK Edge clusters (Pro Edition, Basic Edition), and ACK LINGJUN clusters (Pro Edition).
   * 
   * - `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * Pod network CIDR block. It must be a valid private CIDR block: 10.0.0.0/8, 172.16.0.0/12 to 172.31.0.0/16, or 192.168.0.0/16. It cannot overlap with the VPC or existing Kubernetes cluster CIDR blocks in the VPC. This cannot be modified after cluster creation.
   * 
   * For cluster network planning, see [Network planning for ACK managed clusters](https://help.aliyun.com/document_detail/86500.html).
   * 
   * > This field is required for Flannel clusters.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * Control plane configuration for ACK dedicated clusters.
   */
  controlPlaneConfig?: CreateClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * Cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: CreateClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * List of component names specifying which control plane component logs to collect.
   * 
   * By default, logs are collected for kube-apiserver, kube-controller-manager, kube-scheduler, and cloud-controller-manager.
   */
  controlplaneLogComponents?: string[];
  /**
   * @remarks
   * SLS Project for control plane component logs. You can use an existing Project for log storage or let the system automatically create one. If auto-created, the Project name will be `k8s-log-{ClusterID}`.
   * 
   * @example
   * k8s-log-xxx
   */
  controlplaneLogProject?: string;
  /**
   * @remarks
   * Number of days to retain control plane component logs.
   * 
   * @example
   * 30
   */
  controlplaneLogTtl?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `cpu_policy` parameter under `control_plane_config`. For node pool configuration, use the `cpu_policy` parameter under `kubernetes_config` in `nodepool`.
   * 
   * Node CPU management policy. Supported for cluster versions 1.12.6 and later:
   * 
   * - `static`: Enhances CPU affinity and exclusivity for pods with specific resource characteristics on the node.
   * 
   * - `none`: Uses the default CPU affinity scheme.
   * 
   * Default value: `none`.
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
   * Custom certificate SAN. Separate multiple IP addresses or domain names with commas (,).
   * 
   * @example
   * cs.aliyun.com
   * 
   * @deprecated
   */
  customSan?: string;
  /**
   * @remarks
   * Cluster deletion protection prevents accidental cluster deletion through the console or API. Valid values:
   * 
   * - `true`: Enable deletion protection. You cannot delete the cluster through the console or API.
   * 
   * - `false`: Disable deletion protection. You can delete the cluster through the console or API.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * **[Deprecated]** By default, clusters are not rolled back on creation failure. You must manually clean up failed clusters.
   * 
   * Whether to roll back on cluster creation failure. Valid values:
   * 
   * - `true`: Roll back on failure.
   * 
   * - `false`: Do not roll back on failure.
   * 
   * Default value: `true`.
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
   * Whether to enable RRSA.
   * 
   * - true: Enable.
   * 
   * - false: Disable.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * KMS key ID used to encrypt data disks. For more information, see [Key Management Service](https://help.aliyun.com/document_detail/28935.html).
   * 
   * > This feature is available only for professional managed clusters (ACK Pro clusters).
   * 
   * @example
   * 0fe64791-55eb-4fc7-84c5-c6c7cdca****
   */
  encryptionProviderKey?: string;
  /**
   * @remarks
   * Whether to enable public network access. Expose the API Server through an EIP to allow public network access to the cluster.
   * 
   * - `true`: Enable public network access.
   * 
   * - `false`: Disable public network access. If disabled, you cannot access the cluster API Server from external networks.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  endpointPublicAccess?: boolean;
  /**
   * @remarks
   * Custom API Server certificate SAN (Subject Alternative Name).
   */
  extraSans?: string[];
  /**
   * @remarks
   * **[Deprecated]** Adding existing nodes during cluster creation is not supported. To add existing nodes to a cluster, first create a node pool and then call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) API.
   * 
   * When using existing instances to create a cluster, whether to mount data disks. Valid values:
   * 
   * - `true`: Store containers and images on the data disk. Existing data on the data disk will be lost. Back up your data.
   * 
   * - `false`: Do not store containers and images on the data disk.
   * 
   * Default value: `false`.
   * 
   * Data disk mounting rules:
   * 
   * - If the ECS instance has a mounted data disk and the file system of the last data disk is uninitialized, the system automatically formats it as ext4 to store /var/lib/docker and /var/lib/kubelet.
   * 
   * - If the ECS instance has no mounted data disks, no new data disks are mounted.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `image_id` parameter under `control_plane_config`. For node pool configuration, use the `image_id` parameter under `scaling_group` in `nodepool`.
   * 
   * Custom node image. By default, the system image is used. When you select a custom image, it replaces the default system image. See [Custom images](https://help.aliyun.com/document_detail/146647.html).
   * 
   * @example
   * m-bp16z7xko3vvv8gt****
   * 
   * @deprecated
   */
  imageId?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `image_type` parameter under `control_plane_config`. For node pool configuration, use the `image_type` parameter under `scaling_group` in `nodepool`.
   * 
   * Operating system distribution type. We recommend using this parameter to specify the node operating system. Valid values:
   * 
   * - CentOS
   * 
   * - AliyunLinux
   * 
   * - AliyunLinux Qboot
   * 
   * - AliyunLinuxUEFI
   * 
   * - AliyunLinux3
   * 
   * - Windows
   * 
   * - WindowsCore
   * 
   * - AliyunLinux3Arm64
   * 
   * - ContainerOS
   * 
   * Default value: `CentOS`.
   * 
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  imageType?: string;
  /**
   * @remarks
   * **[Deprecated]** Adding existing nodes during cluster creation is not supported. To add existing nodes to a cluster, first create a node pool and then call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) API.
   * 
   * When using existing nodes to create a cluster, specify the ECS instance list. These instances are added as worker nodes to the cluster.
   * 
   * > This field is required when using existing instances to create a cluster.
   * 
   * @deprecated
   */
  instances?: string[];
  /**
   * @remarks
   * Cluster IP stack.
   * 
   * @example
   * 可选值：
   * ipv4（单栈）
   * dual（双栈），默认值为ipv4。
   */
  ipStack?: string;
  /**
   * @remarks
   * Automatically create an advanced security group. This takes effect when `security_group_id` is empty.
   * 
   * > With basic security groups, the total number of nodes and Terway pods in a cluster cannot exceed 2,000. We recommend using advanced security groups for Terway network clusters.
   * 
   * - `true`: Create and use an advanced security group.
   * 
   * - `false`: Use a basic security group.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Adding existing nodes during cluster creation is not supported. To add existing nodes to a cluster, first create a node pool and then call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) API.
   * 
   * When using existing instances to create a cluster, whether to keep the instance names.
   * 
   * - `true`: Keep.
   * 
   * - `false`: Replace with system-generated names.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `key_pair` parameter under `control_plane_config`. For node pool configuration, use the `key_pair` parameter under `scaling_group` in `nodepool`.
   * 
   * Key pair name. Choose either this parameter or `login_password`.
   * 
   * @example
   * security-key
   * 
   * @deprecated
   */
  keyPair?: string;
  /**
   * @remarks
   * Cluster version, aligned with the Kubernetes community baseline version. We recommend selecting the latest version. If not specified, the latest version is used by default.
   * 
   * You can create clusters using any of the three most recent versions. Use the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) API to query supported cluster versions.
   * 
   * For more information about Kubernetes versions supported by ACK, see [Overview of Kubernetes version releases](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * Specify the CLB instance ID for API Server access. If specified, no new API Server CLB is automatically created.
   * 
   * > Ensure the CLB instance has no dependencies (such as listeners or backend servers). Shared and public CLB instances are not supported.
   * 
   * @example
   * lb-wz9t256gqa3vbouk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * **[Deprecated]** CLB is billed based on usage. This parameter has no effect.
   * 
   * Load Balancer specification. Valid values:
   * 
   * - slb.s1.small
   * 
   * - slb.s2.small
   * 
   * - slb.s2.medium
   * 
   * - slb.s3.small
   * 
   * - slb.s3.medium
   * 
   * - slb.s3.large
   * 
   * Default value: `slb.s2.small`.
   * 
   * @example
   * slb.s2.small
   * 
   * @deprecated
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * **[Deprecated]** Enables SLS for the cluster. Applies only to ACK Serverless clusters and must be set to `SLS`.
   * 
   * @example
   * SLS
   * 
   * @deprecated
   */
  loggingType?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `login_password` parameter under `control_plane_config`. For node pool configuration, use the `login_password` parameter under `scaling_group` in `nodepool`.
   * 
   * SSH login password. Choose either this parameter or `key_pair`. Password rules: 8–30 characters, containing at least three of the following: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  loginPassword?: string;
  /**
   * @remarks
   * Cluster maintenance window.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `auto_renew` parameter under `control_plane_config`.
   * 
   * Whether to enable auto-renewal for master nodes. Valid only when `master_instance_charge_type` is `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto-renewal.
   * 
   * - `false`: Disable auto-renewal.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  masterAutoRenew?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `auto_renew_period` parameter under `control_plane_config`.
   * 
   * Auto-renewal period for master nodes in months. Required and valid only when subscription billing is selected.
   * 
   * Valid values: {1, 2, 3, 6, 12}.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  masterAutoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `size` parameter under `control_plane_config`.
   * 
   * Number of master nodes. Valid values: `3` or `5`.
   * 
   * Default value: `3`.
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  masterCount?: number;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `instance_charge_type` parameter under `control_plane_config`.
   * 
   * Master node billing type. Valid values:
   * 
   * - `PrePaid`: Subscription.
   * 
   * - `PostPaid`: Pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PrePaid
   * 
   * @deprecated
   */
  masterInstanceChargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `instance_types` parameter under `control_plane_config`.
   * 
   * Master node instance types. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @deprecated
   */
  masterInstanceTypes?: string[];
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `unit` parameter under `control_plane_config`.
   * 
   * Subscription duration for master nodes in months. Required and valid only when `master_instance_charge_type` is `PrePaid`.
   * 
   * Valid values: {1, 2, 3, 6, 12, 24, 36, 48, 60}.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  masterPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `period_unit` parameter under `control_plane_config`.
   * 
   * Master node billing cycle. Required when master_instance_charge_type is `PrePaid`.
   * 
   * Valid value: `Month`. Only monthly billing is supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  masterPeriodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `system_disk_category` parameter under `control_plane_config`.
   * 
   * Master node system disk type. Valid values:
   * 
   * - `cloud_efficiency`: Ultra disk.
   * 
   * - `cloud_ssd`: Standard SSD.
   * 
   * - `cloud_essd`: ESSD.
   * 
   * Default value: `cloud_ssd`. The default may vary by zone.
   * 
   * @example
   * cloud_ssd
   * 
   * @deprecated
   */
  masterSystemDiskCategory?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `system_disk_performance_level` parameter under `control_plane_config`.
   * 
   * Performance level for master node system disks. Applies only to ESSD disks. Disk performance levels depend on disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  masterSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `system_disk_size` parameter under `control_plane_config`.
   * 
   * Valid range: [40,500].
   * 
   * Default value: `120`.
   * 
   * @example
   * 120
   * 
   * @deprecated
   */
  masterSystemDiskSize?: number;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `system_disk_snapshot_policy_id` parameter under `control_plane_config`.
   * 
   * Automatic snapshot policy ID for master node system disks.
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
   * List of master node vSwitch IDs. The number of vSwitches must be in the range [1,3]. For high availability, we recommend selecting three vSwitches in different zones.
   * 
   * The number of specified instance types must match `master_count` and correspond one-to-one with elements in `master_vswitch_ids`.
   * 
   * @deprecated
   */
  masterVswitchIds?: string[];
  /**
   * @remarks
   * Custom cluster name. It can contain digits, letters, Chinese characters, or hyphens (-). The name must be 1 to 63 characters long and cannot start with a hyphen (-).
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
   * Number of node IP addresses, determined by the specified CIDR mask. This applies only to Flannel network clusters.
   * 
   * Default value: `26`.
   * 
   * @example
   * 25
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the `node_name_mode` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * Node service port range: [30000,65535].
   * 
   * Default value: `30000-32767`.
   * 
   * @example
   * 30000~32767
   * 
   * @deprecated
   */
  nodePortRange?: string;
  /**
   * @remarks
   * List of node pools.
   */
  nodepools?: Nodepool[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `desired_size` parameter under `scaling_group` in `nodepool`.
   * 
   * Number of worker nodes. Range: [0,100].
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  numOfNodes?: number;
  /**
   * @remarks
   * Cluster automated operations policy.
   */
  operationPolicy?: CreateClusterRequestOperationPolicy;
  /**
   * @remarks
   * **[Deprecated]** For control plane node configuration, use the `image_type` parameter under `control_plane_config`. For node pool configuration, use the `image_type` parameter under `scaling_group` in `nodepool`.
   * 
   * Operating system platform type. Valid values:
   * 
   * - Windows
   * 
   * - Linux
   * 
   * Default value: `Linux`.
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
   * Subscription duration in months. Required and valid only when charge_type is PrePaid.
   * 
   * Valid values: {1, 2, 3, 6, 12, 24, 36, 48, 60}.
   * 
   * Default value: 1.
   * 
   * This parameter changed on October 15, 2024. For more information, see [Announcement on Changes to CreateCluster API Parameters](https://help.aliyun.com/document_detail/2849194.html).
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
   * Billing cycle. Required when the billing type is PrePaid.
   * 
   * Valid value: Month. Only monthly billing is supported.
   * 
   * This parameter changed on October 15, 2024. For more information, see [Announcement on Changes to CreateCluster API Parameters](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `platform` parameter under `scaling_group` in `nodepool`.
   * 
   * Operating system distribution. Valid values:
   * 
   * - CentOS
   * 
   * - AliyunLinux
   * 
   * - QbootAliyunLinux
   * 
   * - Qboot
   * 
   * - Windows
   * 
   * - WindowsCore
   * 
   * Default value: `CentOS`.
   * 
   * @example
   * CentOS
   * 
   * @deprecated
   */
  platform?: string;
  /**
   * @remarks
   * **[Deprecated]** When using the Terway network plugin, specify virtual switches to assign IP addresses to pods. Each pod virtual switch corresponds to a worker node virtual switch, and both must be in the same zone.
   * 
   * > We recommend that the pod virtual switch CIDR mask not exceed /19 and must not exceed /25. Otherwise, the number of assignable pod IP addresses becomes very limited, affecting normal cluster operation.
   * 
   * @deprecated
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * When you set `cluster_type` to `ManagedKubernetes` (ACK managed cluster), you can further specify the cluster subtype.
   * 
   * - `Default`: ACK managed cluster, including ACK clusters (Pro Edition, Basic Edition).
   * 
   * - `Edge`: ACK Edge cluster, including ACK Edge clusters (Pro Edition, Basic Edition).
   * 
   * - `Serverless`: ACK serverless cluster, including ACK serverless clusters (Pro Edition, Basic Edition).
   * 
   * - `Lingjun`: ACK LINGJUN cluster, available only in Pro Edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * kube-proxy proxy mode
   * 
   * - `iptables`: A mature and stable kube-proxy mode. Kubernetes Service discovery and load balancing use iptables rules. Performance is moderate and scales poorly with large numbers of Services. Suitable for clusters with few Services.
   * 
   * - `ipvs`: A high-performance kube-proxy mode. Kubernetes Service discovery and load balancing use the Linux IPVS module. Suitable for clusters with many Services requiring high-performance load balancing.
   * 
   * - `nftables`: A next-generation kube-proxy mode based on Linux nftables for Service discovery and load balancing. It is the modern replacement for iptables. Compared to iptables, nftables offers better network performance, faster rule updates, and superior scalability for large numbers of Services.<br>
   *   Supported only for clusters running Kubernetes version 1.35 or later. The Kubernetes community deprecated IPVS starting in version 1.35. We recommend using nftables for new clusters to ensure long-term community support.<br>
   * 
   * Default value: `ipvs`.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `rds_instances` parameter under `scaling_group` in `nodepool`.
   * 
   * List of RDS instances to add to the whitelist. We recommend adding the pod and node CIDR blocks of your container cluster to the RDS whitelist. Setting RDS instances might fail if they are not in the Running state.
   * 
   * @deprecated
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The region ID where the cluster is deployed. For more information, see [Regions supported by Container Service for Kubernetes](https://help.aliyun.com/document_detail/216938.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID to which the cluster belongs, used to isolate different resources.
   * 
   * @example
   * rg-acfm3mkrure****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * RRSA feature configuration.
   */
  rrsaConfig?: CreateClusterRequestRrsaConfig;
  /**
   * @remarks
   * Container runtime for the cluster. Supports containerd, sandboxed containers, and Docker.
   * 
   * > Kubernetes 1.24 no longer supports Docker as a built-in container runtime.
   * 
   * For more information, see [Comparison of Docker, containerd, and sandboxed container runtimes](https://help.aliyun.com/document_detail/160313.html).
   * 
   * @deprecated
   */
  runtime?: Runtime;
  /**
   * @remarks
   * Specify an existing security group ID when creating a cluster. Choose either this parameter or `is_enterprise_security_group`. Cluster nodes are automatically added to this security group.
   * 
   * @example
   * sg-bp1bdue0qc1g7k****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configuration, use the `security_hardening_os` parameter under `control_plane_config`. For node pool configuration, use the `security_hardening_os` parameter under `scaling_group` in `nodepool`.
   * 
   * Alibaba Cloud OS security hardening. Valid values:
   * 
   * - `true`: Enable Alibaba Cloud OS security hardening.
   * 
   * - `false`: Disable Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * ServiceAccount is the access credential used by pods to communicate with the cluster API Server. The `service-account-issuer` is the issuer identity in the `serviceaccount token`, represented by the `iss` field in the `token payload`.
   * 
   * For more information about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  serviceAccountIssuer?: string;
  /**
   * @remarks
   * Service network CIDR block. Valid ranges: 10.0.0.0/16-24, 172.16.0.0/16-24 to 172.31.0.0/16-24, 192.168.0.0/16-24.
   * It cannot overlap with the VPC CIDR block 10.1.0.0/21 or existing Kubernetes cluster CIDR blocks in the VPC. This cannot be modified after cluster creation.
   * 
   * Default value: 172.19.0.0/20.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * **[Deprecated]** Service discovery type for the cluster, used to specify the service discovery method in `ACK Serverless` clusters.
   * 
   * - `CoreDNS`: Uses the standard Kubernetes service discovery component CoreDNS. Requires deploying a set of containers for DNS resolution. Defaults to two ECI instances with 0.25 vCPU and 512 MiB memory each.
   * 
   * - `PrivateZone`: Uses Alibaba Cloud PrivateZone for service discovery. Requires enabling the PrivateZone service.
   * 
   * Default value: Disabled.
   * 
   * @deprecated
   */
  serviceDiscoveryTypes?: string[];
  /**
   * @remarks
   * Configure SNAT for the VPC. Valid values:
   * 
   * - `true`: Automatically create a NAT Gateway and configure SNAT rules. Set this to `true` if nodes or applications in the cluster need public network access.
   * 
   * - `false`: Do not create a NAT Gateway or SNAT rules. Nodes and applications in the cluster cannot access the public network.
   * 
   * > If you do not enable this during cluster creation but later need public network access, you can [enable it manually](https://help.aliyun.com/document_detail/178480.html).
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  snatEntry?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For control plane node configuration, use the `soc_enabled` parameter under `control_plane_config`. For node pool configuration, use the `soc_enabled` parameter under `scaling_group` in `nodepool`.
   * 
   * MLPS 2.0 security hardening. For more information, see [Using MLPS 2.0 security hardening in ACK](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * 
   * - `true`: Enable MLPS 2.0 security hardening.
   * 
   * - `false`: Disable MLPS 2.0 security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Whether to enable public SSH logon. Used to log on to master nodes of ACK dedicated clusters. This parameter does not take effect for managed clusters.
   * 
   * - `true`: Enable.
   * 
   * - `false`: Disable.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  sshFlags?: boolean;
  /**
   * @remarks
   * Node labels. Label rules:
   * 
   * - Labels consist of case-sensitive key-value pairs. You can add up to 20 tags.
   * 
   * - Tag keys must be unique and up to 64 characters long. Tag values can be empty and up to 128 characters long. Neither tag keys nor tag values can start with "aliyun", "acs:", "https\\://", or "http\\://". For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  tags?: Tag[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `taints` parameter under `kubernetes_config` in `nodepool`.
   * 
   * Node taint information. Taints and tolerations work together to prevent pods from being scheduled onto unsuitable nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   * 
   * @deprecated
   */
  taints?: Taint[];
  /**
   * @remarks
   * **[Deprecated]** By default, clusters are not rolled back on creation failure. You must manually clean up failed clusters.
   * 
   * Cluster creation timeout in minutes.
   * 
   * Default value: `60`.
   * 
   * @example
   * 60
   * 
   * @deprecated
   */
  timeoutMins?: number;
  /**
   * @remarks
   * Time zone used by the cluster. See [Supported time zones](https://help.aliyun.com/document_detail/354879.html).
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * Custom cluster CA.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  userCa?: string;
  /**
   * @remarks
   * **[Deprecated]** Custom node data.
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFD****
   * 
   * @deprecated
   */
  userData?: string;
  /**
   * @remarks
   * The VPC used by the cluster. You must provide this when creating a cluster.
   * 
   * @example
   * vpc-2zeik9h3ahvv2zz95****
   */
  vpcid?: string;
  /**
   * @remarks
   * Virtual switches for cluster nodes. This field is required when creating a zero-node managed cluster.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `auto_renew` parameter under `scaling_group` in `nodepool`.
   * 
   * Whether to enable auto-renewal for worker nodes. Valid only when `worker_instance_charge_type` is `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto-renewal.
   * 
   * - `false`: Disable auto-renewal.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  workerAutoRenew?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `auto_renew_period` parameter under `scaling_group` in `nodepool`.
   * 
   * Auto-renewal period for worker nodes in months. Required and valid only when subscription billing is selected.
   * 
   * Valid values: {1, 2, 3, 6, 12}.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  workerAutoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `data_disks` parameter under `scaling_group` in `nodepool`.
   * 
   * Configuration for worker node data disks, including type and size.
   * 
   * @deprecated
   */
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `instance_charge_type` parameter under `scaling_group` in `nodepool`.
   * 
   * Worker node billing type. Valid values:
   * 
   * - `PrePaid`: Subscription.
   * 
   * - `PostPaid`: Pay-as-you-go.
   * 
   * Default value: Pay-as-you-go.
   * 
   * @example
   * PrePaid
   * 
   * @deprecated
   */
  workerInstanceChargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `instance_types` parameter under `scaling_group` in `nodepool`.
   * 
   * Worker node instance configuration.
   * 
   * @deprecated
   */
  workerInstanceTypes?: string[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `period` parameter under `scaling_group` in `nodepool`.
   * 
   * Subscription duration for worker nodes in months. Required and valid only when `worker_instance_charge_type` is `PrePaid`.
   * 
   * Valid values: {1, 2, 3, 6, 12, 24, 36, 48, 60}.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  workerPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `period_unit` parameter under `scaling_group` in `nodepool`.
   * 
   * Worker node billing cycle. Required when worker_instance_charge_type is `PrePaid`.
   * 
   * Valid value: `Month`. Only monthly billing is supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `system_disk_category` parameter under `scaling_group` in `nodepool`.
   * 
   * Worker node system disk type. For more information, see [Overview of Elastic Block Storage](https://help.aliyun.com/document_detail/63136.html).
   * 
   * Valid values:
   * 
   * - `cloud_efficiency`: Ultra disk.
   * 
   * - `cloud_ssd`: Standard SSD.
   * 
   * Default value: `cloud_ssd`.
   * 
   * @example
   * cloud_efficiency
   * 
   * @deprecated
   */
  workerSystemDiskCategory?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `system_disk_performance_level` parameter under `scaling_group` in `nodepool`.
   * 
   * When the system disk is an ESSD, you can set the performance level (PL). For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * Valid values:
   * 
   * - PL0
   * 
   * - PL1
   * 
   * - PL2
   * 
   * - PL3
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  workerSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `system_disk_size` parameter under `scaling_group` in `nodepool`.
   * 
   * Worker node system disk size in GiB.
   * 
   * Valid range: [40,500].
   * 
   * This value must be greater than or equal to max{40, ImageSize}.
   * 
   * Default value: `120`.
   * 
   * @example
   * 120
   * 
   * @deprecated
   */
  workerSystemDiskSize?: number;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `system_disk_snapshot_policy_id` parameter under `scaling_group` in `nodepool`.
   * 
   * Automatic snapshot policy ID for worker node system disks.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  workerSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the `vswitch_ids` parameter under `scaling_group` in `nodepool`.
   * 
   * List of vSwitches used by cluster nodes. One node corresponds to one value.
   * 
   * When creating a zero-node managed cluster, `worker_vswitch_ids` is optional, but you must provide `vswitch_ids`.
   * 
   * @deprecated
   */
  workerVswitchIds?: string[];
  /**
   * @remarks
   * **[Deprecated]** Use the `zone_ids` parameter instead.
   * 
   * The zone ID in the cluster region. This parameter applies only to ACK managed clusters.
   * 
   * When creating an ACK managed cluster, if you do not specify `vpc_id` and `vswitch_ids`, you must specify `zone_id` to automatically create VPC network resources in this zone. This parameter is ignored if you specify `vpc_id` and `vswitch_ids`.
   * 
   * @example
   * cn-beiji****
   * 
   * @deprecated
   */
  zoneId?: string;
  /**
   * @remarks
   * A list of zone IDs in the cluster region. This parameter applies only to ACK managed clusters.
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

