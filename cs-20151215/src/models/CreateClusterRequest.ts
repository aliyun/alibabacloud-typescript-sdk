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
   * Whether to enable the cluster audit log feature.
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
   * The [SLS Project](https://help.aliyun.com/document_detail/48873.html) where the cluster audit log [Logstore](https://help.aliyun.com/document_detail/48873.html) is located.
   * 
   * - Default value: `k8s-log-{clusterid}`.
   * 
   * - After enabling the cluster audit log feature, a corresponding Logstore will be created under the specified SLS Project.
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
   * Whether to enable intelligent managed mode.
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
   * Whether to enable auto-renewal for control plane nodes. Valid when the billing type is `PrePaid`.
   * - true: Enable auto-renewal.
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
   * Auto-renewal duration for control plane nodes.
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
   * Control plane node billing type.
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
   * Whether to install CloudMonitor on nodes.
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
   * - static: Allows enhancing CPU affinity and exclusivity for Pods with certain resource characteristics on the node.
   * 
   * - none: Enables the existing default CPU affinity scheme.
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
   * OS image type.
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
   * Key pair name. Mutually exclusive with login_password.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * SSH login password. The password must be 8 to 30 characters in length and contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters. Mutually exclusive with key_pair.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * [**This field is deprecated**] Node service port range.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * Subscription duration for control plane nodes. Valid and required when the billing type is `PrePaid`.
   * 
   * Valid values: {1, 2, 3, 6, 12, 24, 36, 48, 60}. Unit: months.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Subscription period unit for control plane nodes. Valid and required when the billing type is `PrePaid`.
   * 
   * Valid value: `Month`. Currently, only month-based periods are supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * [**This field is deprecated**] Control plane node runtime name. Valid value:
   * 
   * containerd: Containerd runtime, supported by all cluster versions.
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
   * Whether to enable classified protection security hardening.
   * 
   * - true: Enable classified protection hardening.
   * 
   * - false: Disable classified protection hardening.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Whether to enable burst (performance burst) for the node system disk.
   * 
   * - true: Enable.
   * 
   * - false: Disable.
   * 
   * This parameter is only supported when `system_disk_category` is set to `cloud_auto`.
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
   * - `cloud_ssd`: SSD disk.
   * - `cloud_essd`: ESSD disk.
   * - `cloud_auto`: ESSD AutoPL disk.
   * - `cloud_essd_entry`: ESSD Entry disk.
   * 
   * Default value: `cloud_ssd`. The default value may vary across availability zones.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * Node system disk performance level. Only takes effect for ESSD disks.
   * 
   * The performance level is related to the disk size. For more information, see [ESSD disk](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * Pre-provisioned read/write IOPS for the node system disk.
   * 
   * Valid values: 0 to min{50,000, 1000*capacity - baseline performance}. Baseline performance = min{1,800 + 50*capacity, 50000}.
   * 
   * This parameter is only supported when `system_disk_category` is set to `cloud_auto`.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * Node system disk size.
   * 
   * Valid values: [40, 500\\]. Unit: GiB.
   * 
   * Default value: `120`.
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
   * VPCs where the internal DNS record resolution takes effect.
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
   * Internal DNS configuration for the cluster, applicable to ACK managed clusters. The internal DNS is used by node-side system components such as kubelet and kube-proxy to access the API Server. When internal DNS access is not enabled, node-side system components will access via CLB IP.
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
   * - patch: Automatically upgrade to an available patch version of the current minor version. The new Kubernetes version will not contain breaking changes.
   * - stable: Automatically upgrade to the latest patch version of the second-newest minor version. The new Kubernetes version may involve API and feature changes, but its stability has been widely verified.
   * - rapid: Automatically upgrade to the latest patch version of the latest minor version to get new features from the Kubernetes community faster.
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
   * Whether to enable the RRSA feature.
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
   * Node data disk performance level. Only takes effect for [ESSD disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Data disk size. Valid values: 40 to 32767. Unit: GiB.
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
   * [**This field is deprecated**] Registered cluster API Server SLB access control list.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * List of cluster components. Specify the components to install when creating a cluster through `addons`.
   * 
   * **Network component**: Required. Choose between Flannel and Terway network types when creating a cluster:
   * 
   * - Flannel network: [{"name":"flannel","config":""}].
   * - Terway network: [{"name": "terway-eniip","config": ""}] .
   * 
   * **Storage component**: Optional. Only the `csi` type is supported:
   * 
   * `csi`: [{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}].
   * 
   * **Log component**: Optional. Recommended to enable. If Log Service is not enabled, the cluster audit feature will be unavailable.
   * 
   * - Use an existing `SLS Project`: [{"name": "loongcollector","config": "{\\"IngressDashboardEnabled\\":\\"true\\",\\"sls_project_name\\":\\"your_sls_project_name\\"}"}] .
   * - Create a new `SLS Project`: [{"name": "loongcollector","config": "{\\"IngressDashboardEnabled\\":\\"true\\"}"}] .
   * 
   * **Ingress component**: Optional. ACK dedicated clusters install the Ingress component `nginx-ingress-controller` by default.
   * 
   * - Install Ingress with public network access: [{"name":"nginx-ingress-controller","config":"{\\"IngressSlbNetworkType\\":\\"internet\\"}"}] .
   * - Disable default Ingress installation: [{"name": "nginx-ingress-controller","config": "","disabled": true}] .
   * 
   * **Event center**: Optional. Enabled by default.
   * 
   * The event center provides capabilities for storing, querying, and alerting on Kubernetes events. The Logstore associated with the Kubernetes event center is free for 90 days. For more information about the free policy, see [Create and use the Kubernetes event center](https://help.aliyun.com/document_detail/150476.html).
   * 
   * Example of enabling the event center: [{"name":"ack-node-problem-detector","config":"{\\"sls_project_name\\":\\"your_sls_project_name\\"}"}].
   */
  addons?: Addon[];
  /**
   * @remarks
   * ServiceAccount is the access credential for communication between Pods and the cluster API Server. `api-audiences` defines the valid request `token` identities used by the `apiserver` to verify whether the request `token` is legitimate. Multiple `audience` values can be configured, separated by commas (,).
   * 
   * For more details about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
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
   * [Intelligent managed mode](https://help.aliyun.com/document_detail/2938898.html) configuration.
   */
  autoMode?: CreateClusterRequestAutoMode;
  /**
   * @remarks
   * [**This field is deprecated**]
   * 
   * Whether to enable auto-renewal. Only takes effect when `charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto-renewal.
   * - `false`: Disable auto-renewal.
   * 
   * Default value: `false`.
   * 
   * This field was changed on October 15, 2024. For more information, see [Announcement on CreateCluster API parameter behavior changes](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * [**This field is deprecated**]
   * 
   * Auto-renewal period. Only takes effect when subscription and auto-renewal are selected. When `PeriodUnit=Month`, valid values: {1, 2, 3, 6, 12}.
   * 
   * Default value: 1.
   * 
   * This field was changed on October 15, 2024. For more information, see [Announcement on CreateCluster API parameter behavior changes](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * [**This field is deprecated**]
   * 
   * Billing type of the CLB instance used by the API Server. Default value: PostPaid. Valid values:
   * - PostPaid: Pay-as-you-go.
   * - PrePaid: Subscription. This billing type is no longer supported for newly created CLB instances. Existing instances are not affected.
   * 
   * >Notice: 
   * 
   * - This field was changed on October 15, 2024. For more information, see [Announcement on CreateCluster API parameter behavior changes](https://help.aliyun.com/document_detail/2849194.html).
   * - Starting from December 1, 2024, newly created CLB instances no longer support the subscription billing type, and instance fees will be charged.
   * </notice>
   * <props="china">For details, see [Product announcement on canceling subscription billing for cluster API Server CLB](https://help.aliyun.com/document_detail/2851191.html) and [CLB billing adjustment announcement](https://help.aliyun.com/document_detail/2839797.html).
   * <props="intl">For details, see [CLB billing adjustment announcement](https://help.aliyun.com/document_detail/2839797.html).
   * 
   * @example
   * PostPaid
   * 
   * @deprecated
   */
  chargeType?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `security_hardening_os` parameter under `control_plane_config` instead. For node pool configuration, use the `security_hardening_os` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane node configuration, use the `cloud_monitor_flags` parameter under `control_plane_config` instead. For node pool configuration, use the `cms_enabled` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * Whether to install the CloudMonitor agent in the cluster. Valid values:
   * 
   * - `true`: Install the CloudMonitor agent.
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
   * Naming rules: The domain name consists of one or more parts separated by periods (.). Each part can be up to 63 characters long and can contain lowercase letters, digits, and hyphens (-). Each part must start and end with a lowercase letter or digit.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * After selecting `cluster_type` as `ManagedKubernetes` and configuring `profile`, you can further specify the cluster specification. Valid values:
   * 
   * - `ack.standard`: Basic edition (selected by default when the value is empty)
   * - `ack.pro.small`: Pro edition
   * - `ack.pro.xlarge`: Pro XL
   * - `ack.pro.2xlarge`: Pro 2XL
   * - `ack.pro.4xlarge`: Pro 4XL (requires contacting customer service to enable allowlisting)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). They pre-allocate and fix control plane resources to ensure that API concurrency and Pod scheduling capabilities always remain at a determined high level, suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For the cluster management fees of Pro edition and provisioned control plane editions, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * - `Kubernetes`: ACK dedicated cluster.
   * - `ManagedKubernetes`: ACK managed cluster types, including ACK managed cluster (Pro and Basic editions), ACK Serverless cluster (Pro and Basic editions), ACK Edge cluster (Pro and Basic editions), and ACK Lingjun cluster (Pro edition).
   * - `ExternalKubernetes`: Registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * Pod network CIDR block. Must be a valid private CIDR block, specifically the following CIDR blocks and their subnets: 10.0.0.0/8, 172.16-31.0.0/12-16, 192.168.0.0/16. Cannot overlap with the VPC or CIDR blocks used by existing Kubernetes clusters in the VPC. Cannot be modified after creation.
   * 
   * For cluster network planning, see [ACK managed cluster network planning](https://help.aliyun.com/document_detail/86500.html).
   * 
   * > This field is required for Flannel clusters.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * ACK dedicated cluster control plane configuration.
   */
  controlPlaneConfig?: CreateClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * Cluster connection configuration.
   */
  controlPlaneEndpointsConfig?: CreateClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * List of component names, specifying which control plane components\\" logs to collect.
   * 
   * By default, logs are collected from kube-apiserver, kube-controller-manager, kube-scheduler, and cloud-controller-manager.
   */
  controlplaneLogComponents?: string[];
  /**
   * @remarks
   * Log Service project for control plane component logs. You can use an existing project for log storage or let the system automatically create a project. If you choose to auto-create a Log Service project, a project named `k8s-log-{ClusterID}` will be automatically created.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `cpu_policy` parameter under `control_plane_config` instead. For node pool configuration, use the `cpu_policy` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * Node CPU management policy. The following two policies are supported when the cluster version is 1.12.6 or later:
   * 
   * - `static`: Allows enhancing CPU affinity and exclusivity for Pods with certain resource characteristics on the node.
   * - `none`: Enables the existing default CPU affinity scheme.
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
   * [**This field is deprecated**] Use the `extra_sans` parameter instead.
   * 
   * Custom certificate SAN. Multiple IPs or domain names are separated by commas (,).
   * 
   * @example
   * cs.aliyun.com
   * 
   * @deprecated
   */
  customSan?: string;
  /**
   * @remarks
   * Cluster deletion protection, which prevents accidental cluster deletion through the console or API. Valid values:
   * 
   * - `true`: Enable cluster deletion protection. The cluster cannot be deleted through the console or API.
   * - `false`: Disable cluster deletion protection. The cluster can be deleted through the console or API.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * [**This field is deprecated**] By default, no rollback is performed when cluster creation fails. You need to clean up the failed cluster yourself.
   * 
   * Whether to roll back when cluster creation fails. Valid values:
   * 
   * - `true`: Roll back when cluster creation fails.
   * - `false`: Do not roll back when cluster creation fails.
   * 
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
   * [**This field is deprecated**] Use the `rrsa_config` parameter instead.
   * 
   * Whether to enable the RRSA feature.
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
   * KMS key ID. This key is used to encrypt data disks. For more details, see [Key Management Service](https://help.aliyun.com/document_detail/28935.html).
   * 
   * > This feature only takes effect in professional managed clusters (ACK Pro clusters).
   * 
   * @example
   * 0fe64791-55eb-4fc7-84c5-c6c7cdca****
   */
  encryptionProviderKey?: string;
  /**
   * @remarks
   * Whether to enable public access. Expose the API Server through an EIP to enable public access to the cluster.
   * 
   * - `true`: Enable public access.
   * - `false`: Disable public access. When disabled, the cluster API Server cannot be accessed from the Internet.
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
   * [**This field is deprecated**] Selecting existing nodes when creating a cluster is no longer supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) API.
   * 
   * Whether to mount data disks on instances when creating a cluster with existing instances. Valid values:
   * 
   * - `true`: Store containers and images on the data disk. Existing data on the data disk will be lost. Please back up your data.
   * 
   * - `false`: Do not store containers and images on the data disk.
   * 
   * Default value: `false`.
   * 
   * Data disk mounting rules:
   * 
   * - If the ECS instance already has data disks mounted and the file system of the last data disk is not initialized, the system will automatically format the data disk as ext4 to store /var/lib/docker and /var/lib/kubelet.
   * - If the ECS instance has no data disks mounted, no new data disk will be mounted.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `image_id` parameter under `control_plane_config` instead. For node pool configuration, use the `image_id` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Custom node image. The system image is used by default. When a custom image is selected, it replaces the default system image. See [Custom images](https://help.aliyun.com/document_detail/146647.html).
   * 
   * @example
   * m-bp16z7xko3vvv8gt****
   * 
   * @deprecated
   */
  imageId?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `image_type` parameter under `control_plane_config` instead. For node pool configuration, use the `image_type` parameter under `scaling_group` in `nodepool` instead.
   * 
   * OS distribution type. It is recommended to use this field to specify the node OS. Valid values:
   * 
   * - CentOS
   * - AliyunLinux
   * - AliyunLinux Qboot
   * - AliyunLinuxUEFI
   * - AliyunLinux3
   * - Windows
   * - WindowsCore
   * - AliyunLinux3Arm64
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
   * [**This field is deprecated**] Selecting existing nodes when creating a cluster is no longer supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) API.
   * 
   * 
   * When creating a cluster with existing nodes, you need to specify a list of ECS instances. These instances will join the cluster as Worker nodes.
   * 
   * > This field is required when creating a cluster with existing instances.
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
   * Automatically create an enterprise security group. Takes effect when `security_group_id` is empty.
   * 
   * > When using a basic security group, the total number of nodes and Terway Pods in the cluster cannot exceed 2000. Therefore, when creating a Terway network type cluster, it is recommended to use an enterprise security group.
   * 
   * - `true`: Create and use an enterprise security group.
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
   * [**This field is deprecated**] Selecting existing nodes when creating a cluster is no longer supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) API.
   * 
   * Whether to retain instance names when creating a cluster with existing instances.
   * 
   * - `true`: Retain.
   * - `false`: Do not retain. Names will be replaced using system rules.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `key_pair` parameter under `control_plane_config` instead. For node pool configuration, use the `key_pair` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Key pair name. Mutually exclusive with `login_password`.
   * 
   * @example
   * security-key
   * 
   * @deprecated
   */
  keyPair?: string;
  /**
   * @remarks
   * Cluster version, consistent with the Kubernetes community baseline version. We recommend selecting the latest version. If not specified, the latest version is used by default.
   * 
   * You can create clusters of the three most recent versions. You can query supported cluster versions through the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) API.
   * 
   * For Kubernetes versions supported by ACK, see [Kubernetes version release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * Specify the CLB instance ID for API Server access. When this parameter is specified, an API Server CLB will not be automatically created.
   * > Ensure that the CLB instance has no other dependencies (such as listeners or backend servers). Shared and public-network CLB instances are not supported.
   * 
   * @example
   * lb-wz9t256gqa3vbouk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * [**This parameter is deprecated**] CLB is billed by usage. This parameter does not take effect.
   * 
   * Load balancer specification. Valid values:
   * - slb.s1.small
   * - slb.s2.small
   * - slb.s2.medium
   * - slb.s3.small
   * - slb.s3.medium
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
   * [**This field is deprecated**] Enable Log Service for the cluster. Only takes effect for ACK Serverless clusters, and the value must be `SLS`.
   * 
   * @example
   * SLS
   * 
   * @deprecated
   */
  loggingType?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `login_password` parameter under `control_plane_config` instead. For node pool configuration, use the `login_password` parameter under `scaling_group` in `nodepool` instead.
   * 
   * SSH login password. Mutually exclusive with `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `auto_renew` parameter under `control_plane_config` instead.
   * 
   * Whether to enable auto-renewal for Master nodes. Only takes effect when `master_instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto-renewal.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `auto_renew_period` parameter under `control_plane_config` instead.
   * 
   * Master node auto-renewal period. Only takes effect when subscription billing type is selected, and is a required value.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `size` parameter under `control_plane_config` instead.
   * 
   * Number of Master nodes. Valid values: `3` or `5`.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `instance_charge_type` parameter under `control_plane_config` instead.
   * 
   * Master node billing type. Valid values:
   * 
   * - `PrePaid`: Subscription.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `instance_types` parameter under `control_plane_config` instead.
   * 
   * Master node instance types. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @deprecated
   */
  masterInstanceTypes?: string[];
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `unit` parameter under `control_plane_config` instead.
   * 
   * Master node subscription duration. Valid and required when `master_instance_charge_type` is set to `PrePaid`.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `period_unit` parameter under `control_plane_config` instead.
   * 
   * Master node billing period. Must be specified when the billing type is `PrePaid`.
   * 
   * Valid value: `Month`. Currently, only month-based periods are supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  masterPeriodUnit?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `system_disk_category` parameter under `control_plane_config` instead.
   * 
   * Master node system disk type. Valid values:
   * 
   * - `cloud_efficiency`: Ultra disk.
   * - `cloud_ssd`: SSD disk.
   * - `cloud_essd`: ESSD disk.
   * 
   * Default value: `cloud_ssd`. The default value may vary across availability zones.
   * 
   * @example
   * cloud_ssd
   * 
   * @deprecated
   */
  masterSystemDiskCategory?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `system_disk_performance_level` parameter under `control_plane_config` instead.
   * 
   * Cluster Master node system disk performance level. Only takes effect for ESSD disks. The performance level is related to the disk size. For more information, see [ESSD disk](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  masterSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `system_disk_size` parameter under `control_plane_config` instead.
   * 
   * Master node system disk size. Valid values: [40, 500\\]. Unit: GiB.
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
   * [**This field is deprecated**] For cluster control plane configuration, use the `system_disk_snapshot_policy_id` parameter under `control_plane_config` instead.
   * 
   * Automatic snapshot policy ID for the Master node system disk.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  masterSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * [**This field is deprecated**] Use the `vswitch_ids` parameter instead.
   * 
   * List of Master node vSwitch IDs. The number of vSwitches ranges from [1, 3\\]. To ensure high availability of the cluster, it is recommended to select 3 vSwitches distributed in different availability zones.
   * 
   * The number of specified instance types must be consistent with `master_count` and correspond one-to-one with the elements in `master_vswitch_ids`.
   * 
   * @deprecated
   */
  masterVswitchIds?: string[];
  /**
   * @remarks
   * Custom cluster name. Consists of digits, Chinese characters, English characters, or hyphens (-), with a length of 1 to 63 characters, and cannot start with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * [**This field is deprecated**] Use the `snat_entry` parameter instead.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  natGateway?: boolean;
  /**
   * @remarks
   * Number of node IPs, determined by specifying the network CIDR. Only takes effect for Flannel network type clusters.
   * 
   * Default value: `26`.
   * 
   * @example
   * 25
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `node_name_mode` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * Node service ports. Valid port range: [30000, 65535\\].
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
   * Node pool list.
   */
  nodepools?: Nodepool[];
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `desired_size` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Number of Worker nodes. Range: [0, 100\\].
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  numOfNodes?: number;
  /**
   * @remarks
   * Cluster automatic O&M policy.
   */
  operationPolicy?: CreateClusterRequestOperationPolicy;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane node configuration, use the `image_type` parameter under `control_plane_config` instead. For node pool configuration, use the `image_type` parameter under `scaling_group` in `nodepool` instead.
   * 
   * OS platform type. Valid values:
   * - Windows
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
   * [**This field is deprecated**]
   * 
   * Purchase duration. Subscription duration. Valid and required when charge_type is set to PrePaid.
   * 
   * Valid values: {1, 2, 3, 6, 12, 24, 36, 48, 60}.
   * 
   * Default value: 1.
   * 
   * This field was changed on October 15, 2024. For more information, see [Announcement on CreateCluster API parameter behavior changes](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  period?: number;
  /**
   * @remarks
   * [**This field is deprecated**]
   * 
   * Billing period. Must be specified when the billing type is PrePaid.
   * 
   * Valid value: Month. Currently, only month-based periods are supported.
   * 
   * This field was changed on October 15, 2024. For more information, see [Announcement on CreateCluster API parameter behavior changes](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  periodUnit?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `platform` parameter under `scaling_group` in `nodepool` instead.
   * 
   * OS distribution. Valid values:
   * 
   * - CentOS
   * - AliyunLinux
   * - QbootAliyunLinux
   * - Qboot
   * - Windows
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
   * [**This field is deprecated**] When using the Terway network plugin, you need to specify vSwitches for Pod IP allocation. Each Pod vSwitch corresponds to a Worker node vSwitch, and the availability zones of Pod vSwitches and Worker node vSwitches must be consistent.
   * > The CIDR mask of Pod vSwitches should not exceed 19 and must not exceed 25; otherwise, the available Pod IP addresses in the cluster network will be very limited, affecting normal cluster usage.
   * 
   * @deprecated
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * When `cluster_type` is set to `ManagedKubernetes`, you can further specify the cluster subtype.
   * - `Default`: ACK managed cluster, including ACK cluster (Pro and Basic editions).
   * - `Edge`: ACK Edge cluster, including ACK Edge cluster (Pro and Basic editions).
   * - `Serverless`: ACK Serverless cluster, including ACK Serverless cluster (Pro and Basic editions).
   * - `Lingjun`: ACK Lingjun cluster, available in Pro edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * kube-proxy mode
   * 
   * - `iptables`: A mature and stable kube-proxy mode. Kubernetes Service discovery and load balancing are configured using iptables rules. Performance is average and significantly affected by scale, suitable for clusters with a small number of Services.
   * - `ipvs`: A high-performance kube-proxy mode. Kubernetes Service discovery and load balancing are configured using the Linux IPVS module, suitable for clusters with a large number of Services that require high-performance load balancing.
   * - `nftables`: Next-generation kube-proxy mode based on Linux nftables for Service discovery and load balancing. It is a modern replacement for iptables. Compared to iptables, nftables performs better in network performance, rule update efficiency, and large-scale Service scenarios.  
   * Only supported for clusters of version 1.35 and above. The Kubernetes community deprecated IPVS starting from version 1.35. It is recommended to use nftables for new clusters for longer-term community support.
   * 
   * Default value: `ipvs`.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `rds_instances` parameter under `scaling_group` in `nodepool` instead.
   * 
   * List of RDS instances. Select the RDS instances you want to add to the whitelist. It is recommended to add the container Pod CIDR block and Node CIDR block in RDS. Setting RDS instances may fail to pop up due to non-running instance status.
   * 
   * @deprecated
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The region ID where the cluster is located. For details, see [Regions supported by Container Service](https://help.aliyun.com/document_detail/216938.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID to which the cluster belongs, used for isolating different resources.
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
   * Container runtime in the cluster. Supports containerd, sandboxed containers, and Docker.
   * > Kubernetes 1.24 no longer supports Docker as a built-in container runtime.
   * 
   * For more information, see [Comparison of Docker, containerd, and sandboxed container runtimes](https://help.aliyun.com/document_detail/160313.html).
   * 
   * @deprecated
   */
  runtime?: Runtime;
  /**
   * @remarks
   * Specify the security group ID when creating a cluster with an existing security group. Mutually exclusive with `is_enterprise_security_group`. Cluster nodes are automatically added to this security group.
   * 
   * @example
   * sg-bp1bdue0qc1g7k****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane configuration, use the `security_hardening_os` parameter under `control_plane_config` instead. For node pool configuration, use the `security_hardening_os` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Alibaba Cloud OS security hardening. Valid values:
   * 
   * - `true`: Enable Alibaba Cloud OS security hardening.
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
   * ServiceAccount is the access credential for communication between Pods and the cluster API Server. `service-account-issuer` is the issuer identity in the `serviceaccount token`, i.e., the `iss` field in the `token payload`.
   * 
   * For more details about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  serviceAccountIssuer?: string;
  /**
   * @remarks
   * Service network CIDR block. Valid ranges: 10.0.0.0/16-24, 172.16-31.0.0/16-24, 192.168.0.0/16-24. Cannot overlap with VPC CIDR block 10.1.0.0/21 or CIDR blocks used by existing Kubernetes clusters in the VPC. Cannot be modified after creation.
   * 
   * Default value: 172.19.0.0/20.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * [**This field is deprecated**] Service discovery type within the cluster, used to specify the service discovery method in `ACK Serverless` clusters.
   * 
   * - `CoreDNS`: Uses the Kubernetes native standard service discovery component CoreDNS. A set of containers needs to be deployed in the cluster for DNS resolution. By default, two ECI instances with 0.25 Core 512 MiB specifications are used.
   * - `PrivateZone`: Uses the Alibaba Cloud PrivateZone product for service discovery capabilities. The PrivateZone service needs to be enabled.
   * 
   * Default value: Not enabled.
   * 
   * @deprecated
   */
  serviceDiscoveryTypes?: string[];
  /**
   * @remarks
   * Configure SNAT for the VPC. Valid values:
   * 
   * - `true`: Automatically create a NAT gateway and configure SNAT rules. Set to `true` if nodes and applications in the cluster need to access the Internet.
   * - `false`: Do not create a NAT gateway or SNAT rules. Nodes and applications in the cluster will not be able to access the Internet.
   * 
   * > If not enabled during cluster creation and the business later requires Internet access, you can [manually enable it](https://help.aliyun.com/document_detail/178480.html).
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  snatEntry?: boolean;
  /**
   * @remarks
   * [**This field is deprecated**] For cluster control plane node configuration, use the `soc_enabled` parameter under `control_plane_config` instead. For node pool configuration, use the `soc_enabled` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Classified protection hardening. For more information, see [ACK classified protection hardening user guide](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * - `true`: Enable classified protection hardening.
   * - `false`: Disable classified protection hardening.
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
   * Whether to enable public SSH login. Used for logging in to Master nodes of ACK dedicated clusters. This parameter does not take effect in managed clusters.
   * - `true`: Enable.
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
   * Node tags. Tag definition rules:
   * 
   * - Tags consist of case-sensitive key-value pairs. You can set up to 20 tags.
   * - Tag keys cannot be duplicated, with a maximum length of 64 characters; tag values can be empty, with a maximum length of 128 characters. Neither tag keys nor tag values can start with “aliyun”, “acs:”, “https://”, or “http://”. For details, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  tags?: Tag[];
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `taints` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * Node taint information. Taints and tolerations work together to prevent Pods from being scheduled on inappropriate nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   * 
   * @deprecated
   */
  taints?: Taint[];
  /**
   * @remarks
   * [**This field is deprecated**] By default, no rollback is performed when cluster creation fails. You need to clean up the failed cluster yourself.
   * 
   * Cluster creation timeout. Unit: minutes.
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
   * The timezone used by the cluster. See [Supported timezones](https://help.aliyun.com/document_detail/354879.html).
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
   * [**This field is deprecated**] Custom node data.
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFD****
   * 
   * @deprecated
   */
  userData?: string;
  /**
   * @remarks
   * The VPC used by the cluster. Must be provided when creating a cluster.
   * 
   * @example
   * vpc-2zeik9h3ahvv2zz95****
   */
  vpcid?: string;
  /**
   * @remarks
   * vSwitches for cluster nodes. This field is required when creating a zero-node managed cluster.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `auto_renew` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Whether to enable auto-renewal for Worker nodes. Only takes effect when `worker_instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto-renewal.
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
   * [**This field is deprecated**] For node pool configuration, use the `auto_renew_period` parameter under `scaling_group` in `nodepool` instead.
   * 
   * 
   * Worker node auto-renewal period. Only takes effect when subscription billing type is selected, and is a required value.
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
   * [**This field is deprecated**] For node pool configuration, use the `data_disks` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Combination of Worker node data disk type, size, and other configurations.
   * 
   * @deprecated
   */
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `instance_charge_type` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Worker node billing type. Valid values:
   * 
   * - `PrePaid`: Subscription.
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
   * [**This field is deprecated**] For node pool configuration, use the `instance_types` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Worker node instance configuration.
   * 
   * @deprecated
   */
  workerInstanceTypes?: string[];
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `period` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Worker node subscription duration. Valid and required when `worker_instance_charge_type` is set to `PrePaid`.
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
   * [**This field is deprecated**] For node pool configuration, use the `period_unit` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Worker node billing period. Must be specified when the billing type is `PrePaid`.
   * 
   * Valid value: `Month`. Currently, only month-based periods are supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `system_disk_category` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Worker node system disk type. For more information, see [Block storage overview](https://help.aliyun.com/document_detail/63136.html).
   * 
   * Valid values:
   * 
   * - `cloud_efficiency`: Ultra disk.
   * - `cloud_ssd`: SSD disk.
   * 
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
   * [**This field is deprecated**] For node pool configuration, use the `system_disk_performance_level` parameter under `scaling_group` in `nodepool` instead.
   * 
   * When the system disk is an ESSD disk, you can set the Performance Level (PL) of the ESSD disk. For more information, see [ESSD disk](https://help.aliyun.com/document_detail/122389.html).
   * 
   * Valid values:
   * 
   * - PL0
   * - PL1
   * - PL2
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
   * [**This field is deprecated**] For node pool configuration, use the `system_disk_size` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Worker node system disk size. Unit: GiB.
   * 
   * Valid values: [40, 500\\].
   * 
   * The value must be greater than or equal to max{40, ImageSize}.
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
   * [**This field is deprecated**] For node pool configuration, use the `system_disk_snapshot_policy_id` parameter under `scaling_group` in `nodepool` instead.
   * 
   * Automatic snapshot policy ID for the Worker node system disk.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  workerSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * [**This field is deprecated**] For node pool configuration, use the `vswitch_ids` parameter under `scaling_group` in `nodepool` instead.
   * 
   * List of vSwitches used by cluster nodes. One node corresponds to one value.
   * 
   * When creating a zero-node managed cluster, the `worker_vswitch_ids` field is not required, but `vswitch_ids` must be provided.
   * 
   * @deprecated
   */
  workerVswitchIds?: string[];
  /**
   * @remarks
   * [**This field is deprecated**] Use the `zone_ids` parameter instead.
   * 
   * Availability zone ID of the region where the cluster is located. This parameter is specific to ACK managed cluster types.
   * 
   * When creating an ACK managed cluster, if `vpc_id` and `vswitch_ids` are not specified, `zone_id` must be specified for the cluster to automatically create VPC network resources in this availability zone. This parameter is ignored when `vpc_id` and `vswitch_ids` are specified.
   * 
   * @example
   * cn-beiji****
   * 
   * @deprecated
   */
  zoneId?: string;
  /**
   * @remarks
   * Multiple availability zone IDs of the region where the cluster is located. This parameter is specific to ACK managed cluster types.
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

