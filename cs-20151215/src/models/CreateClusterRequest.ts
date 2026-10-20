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
   * Specifies whether to enable the cluster audit log feature. Valid values:
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
   * The [SLS Project](https://help.aliyun.com/document_detail/48873.html) that contains the [Logstore](https://help.aliyun.com/document_detail/48873.html) for cluster audit logs.
   * 
   * - Default value: `k8s-log-{clusterid}`.
   * 
   * - After the cluster audit log feature is enabled, a Logstore for cluster audit logs is created in the specified SLS Project.
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
   * Specifies whether to enable intelligent managed mode. Valid values:
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
   * Specifies whether to enable auto-renewal for control plane nodes. This parameter takes effect only when the billing method is set to `PrePaid`. Valid values:
   * - true: Enables auto-renewal.
   * - false: Disables auto-renewal.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for control plane nodes.
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
   * The billing method for control plane nodes.
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
   * Specifies whether to install CloudMonitor on nodes.
   * 
   * - true: Installs the CloudMonitor agent.
   * 
   * - false: Does not install the CloudMonitor agent.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes.
   * 
   * - static: Allows pods with certain resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * 
   * - none: Uses the existing default CPU affinity scheme.
   * 
   * Default value: none.
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
   * The instance types for nodes.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the key pair. You must set this parameter or login_password.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. You must set this parameter or key_pair.
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
   * The subscription duration for control plane nodes. This parameter is required and takes effect only when the billing method is set to `PrePaid`.
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
   * The unit of the subscription duration for control plane nodes. This parameter is required and takes effect only when the billing method is set to `PrePaid`.
   * 
   * Valid value: `Month`. Currently, only month-based billing cycles are supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** The runtime name for control plane nodes. Valid values:
   * 
   * containerd: The Containerd runtime, which is supported by all cluster versions.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Specifies whether to enable Alibaba Cloud OS security hardening.
   * 
   * - true: Enables Alibaba Cloud OS security hardening.
   * 
   * - false: Disables Alibaba Cloud OS security hardening.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * The number of control plane nodes.
   * 
   * Valid values: `3` or `5`.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * Specifies whether to enable MLPS security hardening.
   * 
   * - true: Enables MLPS 2.0 security hardening.
   * 
   * - false: Disables MLPS 2.0 security hardening.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable burst performance for node system cloud disks.
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the node system cloud disk.
   * 
   * - `cloud_efficiency`: ultra cloud disk.
   * - `cloud_ssd`: standard SSD.
   * - `cloud_essd`: ESSD.
   * - `cloud_auto`: ESSD AutoPL cloud disk.
   * - `cloud_essd_entry`: ESSD Entry cloud disk.
   * 
   * Default value: `cloud_ssd`. The default value may vary by zone.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the node system cloud disk. This parameter takes effect only for ESSD cloud disks.
   * 
   * The performance level varies based on the cloud disk size. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for node system cloud disks.
   * 
   * Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the node system cloud disk.
   * 
   * Valid values: [40, 500]. Unit: GiB.
   * 
   * Default value: `120`.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The automatic snapshot policy for node system cloud disks.
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
   * The VPCs where the internal DNS records of the cluster take effect.
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
   * The internal DNS configuration for the cluster. This parameter applies to ACK managed clusters. The internal domain name is used by node-side system components such as kubelet and kube-proxy to access the API Server. If the internal domain name access is not enabled, node-side system components access the API Server through the CLB IP address.
   */
  internalDnsConfig?: CreateClusterRequestControlPlaneEndpointsConfigInternalDnsConfig;
  /**
   * @remarks
   * The cluster endpoint configuration. When this parameter is specified, the endpoint_public_access and load_balancer_id parameters do not take effect. ACK supports only automatic creation of NLB instances. To specify a CLB or NLB instance, use load_balancers_config to specify the corresponding instance ID.
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
   * The cluster auto upgrade frequency. Valid values:
   * - patch: Automatically upgrades to the latest available patch version within the current minor version. The new Kubernetes version does not contain breaking changes.
   * - stable: Automatically upgrades to the latest patch version of the second-latest minor version. The new Kubernetes version may involve API and feature changes, but its stability has been extensively validated.
   * - rapid: Automatically upgrades to the latest patch version of the latest minor version, allowing faster access to new features from the Kubernetes community.
   * 
   * @example
   * stable
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster auto upgrade.
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
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
   * The cluster auto upgrade configuration.
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
   * - true: Enabled.
   * 
   * - false: Not enabled.
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
   * The data cloud disk type.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data cloud disks. Valid values:
   * 
   * - `true`: Encrypts data cloud disks.
   * - `false`: Does not encrypt data cloud disks.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @remarks
   * The performance level (PL) of node data cloud disks. This parameter takes effect only for [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The data cloud disk size. Valid values: 40 to 32767. Unit: GiB.
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
   * **[Deprecated]** The access control list (ACL) of the SLB instance for the API server of a registered cluster.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The list of cluster components. When you create a cluster, use `addons` to specify the components that you want to install.
   * 
   * **Network component**: Required. Two network types are available: Flannel and Terway. Select one when you create a cluster:
   * 
   * - Flannel: [{"name":"flannel","config":""}\\].
   * - Terway: [{"name": "terway-eniip","config": ""}\\].
   * 
   * **Storage component**: Optional. Only the `csi` type is supported:
   * 
   * `csi`: [{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}\\].
   * 
   * **Log component**: Optional. We recommend that you enable this component. If you do not enable the log service, you cannot use the cluster auditing feature.
   * 
   * - Use an existing `SLS Project`: [{"name": "loongcollector","config": "{\\"IngressDashboardEnabled\\":\\"true\\",\\"sls_project_name\\":\\"your_sls_project_name\\"}"}\\].
   * - Create a new `SLS Project`: [{"name": "loongcollector","config": "{\\"IngressDashboardEnabled\\":\\"true\\"}"}\\].
   * 
   * **Ingress component**: Optional. By default, the Ingress component `nginx-ingress-controller` is installed for ACK dedicated clusters.
   * 
   * - Install Ingress and enable Internet access: [{"name":"nginx-ingress-controller","config":"{\\"IngressSlbNetworkType\\":\\"internet\\"}"}\\].
   * - Disable default Ingress installation: [{"name": "nginx-ingress-controller","config": "","disabled": true}\\].
   * 
   * **Event Center**: Optional. Enabled by default.
   * 
   * Event Center provides the capabilities to store, query, and alert on Kubernetes events. The Logstore associated with Kubernetes Event Center is free of charge for 90 days. For more information about the free policy, see [Create and use Kubernetes Event Center](https://help.aliyun.com/document_detail/150476.html).
   * 
   * Example of enabling Event Center: [{"name":"ack-node-problem-detector","config":"{\\"sls_project_name\\":\\"your_sls_project_name\\"}"}\\].
   */
  addons?: Addon[];
  /**
   * @remarks
   * A ServiceAccount is the access credential used by a pod to communicate with the cluster API server. The `api-audiences` parameter specifies the valid request `token` identities used by the `apiserver` to authenticate whether request `tokens` are legitimate. You can configure multiple `audiences` separated by commas (,).
   * 
   * For more information about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
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
   * Specifies whether to enable auto-renewal. This parameter takes effect only when `charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto-renewal.
   * - `false`: Disable auto-renewal.
   * 
   * Default value: `false`.
   * 
   * This parameter was changed on October 15, 2024. For more information, see [Notice on behavior changes of the CreateCluster parameter](https://help.aliyun.com/document_detail/2849194.html).
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
   * The auto-renewal epoch. This parameter takes effect only when the billing method is subscription and auto-renewal is enabled. When `PeriodUnit=Month`, valid values: {1, 2, 3, 6, 12}.
   * 
   * Default value: 1.
   * 
   * This parameter was changed on October 15, 2024. For more information, see [Notice on behavior changes of the CreateCluster parameter](https://help.aliyun.com/document_detail/2849194.html).
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
   * The billing method of the CLB instance used by the API server. Default value: PostPaid. Valid values:
   * - PostPaid: pay-as-you-go.
   * - PrePaid: subscription. The subscription billing method is no longer supported for newly created CLB instances. Existing instances are not affected.
   * 
   * >Notice: 
   * 
   * - This parameter was changed on October 15, 2024. For more information, see [Notice on behavior changes of the CreateCluster parameter](https://help.aliyun.com/document_detail/2849194.html).
   * - Starting from December 01, 2024, newly created CLB instances no longer support the subscription billing method, and an instance fee will be charged.
   * </notice>
   * <props="china">For more information, see [Service notices: Notice on canceling subscription billing for CLB load balancing instances of cluster API servers](https://help.aliyun.com/document_detail/2851191.html) and [Notice on billing item changes for Classic Load Balancer (CLB)](https://help.aliyun.com/document_detail/2839797.html).
   * <props="intl">For more information, see [Notice on billing item changes for Classic Load Balancer (CLB)](https://help.aliyun.com/document_detail/2839797.html).
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
   * The client token.
   * 
   * @example
   * 0a287651-1277-4c0d-80d2-623a4*****
   */
  clientToken?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane node configuration, use the `cloud_monitor_flags` parameter under `control_plane_config` instead. For node pool configuration, use the `cms_enabled` parameter under `kubernetes_config` in nodepool instead.
   * 
   * Specifies whether to install the CloudMonitor agent on the cluster. Valid values:
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
   * The cluster local domain name.
   * 
   * Naming rules: A domain name consists of one or more parts separated by periods (.). Each part can be up to 63 characters long and can contain lowercase letters, digits, and hyphens (-). Each part must start and end with a lowercase letter or digit.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * After you set `cluster_type` to `ManagedKubernetes` and configure `profile`, you can further specify the cluster specification. Valid values:
   * 
   * - `ack.standard`: Basic Edition (selected by default if the value is empty)
   * - `ack.pro.small`: Pro Edition
   * - `ack.pro.xlarge`: Pro XL
   * - `ack.pro.2xlarge`: Pro 2XL
   * - `ack.pro.4xlarge`: Pro 4XL (requires contacting customer service to enable the whitelist)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and dedicating control plane resources, these tiers ensure that API concurrency and pod scheduling capabilities remain at a deterministic high level. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For information about the cluster management fees for Pro Edition and Provisioned Control Plane editions, see <props="china">[Cluster management fee](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fee](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * - `Kubernetes`: ACK dedicated cluster.
   * - `ManagedKubernetes`: ACK managed cluster types, including ACK managed clusters (Pro and Basic editions), ACK Serverless clusters (Pro and Basic editions), ACK Edge clusters (Pro and Basic editions), and ACK Lingjun clusters (Pro Edition).
   * - `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The pod network CIDR block. It must be a valid private CIDR block, specifically the following CIDR blocks and their subnets: 10.0.0.0/8, 172.16-31.0.0/12-16, and 192.168.0.0/16. It cannot overlap with the CIDR blocks used by the VPC or existing Kubernetes clusters in the VPC. This value cannot be modified after the cluster is created.
   * 
   * For more information about cluster network planning, see [ACK managed cluster network planning](https://help.aliyun.com/document_detail/86500.html).
   * 
   * > This parameter is required for Flannel clusters.
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
   * The cluster endpoint configuration.
   */
  controlPlaneEndpointsConfig?: CreateClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * The list of component names that specifies which control plane components to collect logs from.
   * 
   * By default, logs are collected from kube-apiserver, kube-controller-manager, kube-scheduler, and cloud-controller-manager.
   */
  controlplaneLogComponents?: string[];
  /**
   * @remarks
   * The Simple Log Service project for control plane component logs. You can use an existing project for log storage or allow the system to automatically create a project. If you choose automatic creation, a Simple Log Service project named `k8s-log-{ClusterID}` is created.
   * 
   * @example
   * k8s-log-xxx
   */
  controlplaneLogProject?: string;
  /**
   * @remarks
   * The log retention period for control plane component logs, in days.
   * 
   * @example
   * 30
   */
  controlplaneLogTtl?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the `cpu_policy` parameter under `control_plane_config` for cluster control plane configuration, or use the `cpu_policy` parameter under `kubernetes_config` in `nodepool` for node pool configuration.
   * 
   * The CPU management policy for nodes. The following policies are supported for clusters of version 1.12.6 or later:
   * 
   * - `static`: Allows pods with certain resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * - `none`: Uses the existing default CPU affinity scheme.
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
   * The custom certificate Subject Alternative Name (SAN). Separate multiple IP addresses or domain names with commas (,).
   * 
   * @example
   * cs.aliyun.com
   * 
   * @deprecated
   */
  customSan?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster deletion protection, which prevents the cluster from being accidentally deleted in the console or by calling API operations. Valid values:
   * 
   * - `true`: Enables cluster deletion protection. The cluster cannot be deleted in the console or by calling API operations.
   * - `false`: Disables cluster deletion protection. The cluster can be deleted in the console or by calling API operations.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * **[Deprecated]** When cluster creation fails, no rollback is performed by default. You must manually clean up the failed cluster.
   * 
   * Specifies whether to roll back the cluster if creation fails. Valid values:
   * 
   * - `true`: Rolls back the cluster when creation fails.
   * - `false`: Does not roll back the cluster when creation fails.
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
   * **[Deprecated]** Use the `rrsa_config` parameter instead.
   * 
   * Specifies whether to enable the RRSA feature.
   * 
   * - true: Enables the feature.
   * 
   * - false: Does not enable the feature.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used to encrypt cloud disks. For more information, see [Key Management Service](https://help.aliyun.com/document_detail/28935.html).
   * 
   * > This feature takes effect only in ACK Pro clusters.
   * 
   * @example
   * 0fe64791-55eb-4fc7-84c5-c6c7cdca****
   */
  encryptionProviderKey?: string;
  /**
   * @remarks
   * Specifies whether to enable public network access. An Elastic IP Address (EIP) is used to expose the API Server for public network access to the cluster.
   * 
   * - `true`: Enables public network access.
   * - `false`: Disables public network access. If you select this option, the cluster API Server cannot be accessed over the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  endpointPublicAccess?: boolean;
  /**
   * @remarks
   * The custom Subject Alternative Name (SAN) for the API Server certificate.
   */
  extraSans?: string[];
  /**
   * @remarks
   * **[Deprecated]** Selecting existing nodes during cluster creation is not supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * Specifies whether to mount data disks to existing instances when creating a cluster with existing instances. Valid values:
   * 
   * - `true`: Stores containers and images on data disks. Existing data on the data disks will be lost. Back up your data in advance.
   * 
   * - `false`: Does not store containers and images on data disks.
   * 
   * Default value: `false`.
   * 
   * Data disk mounting rules:
   * 
   * - If the ECS instance has data disks attached and the file system of the last data disk is not initialized, the system automatically formats the data disk as ext4 to store /var/lib/docker and /var/lib/kubelet.
   * - If the ECS instance has no data disks attached, no new data disks are mounted.
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
   * The custom image for nodes. The system image is used by default. When a custom image is selected, it replaces the default system image. For more information, see [Custom images](https://help.aliyun.com/document_detail/146647.html).
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
   * The operating system distribution type. We recommend that you use this field to specify the node operating system. Valid values:
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
   * **[Deprecated]** Selecting existing nodes during cluster creation is not supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * 
   * The list of ECS instances to use when creating a cluster with existing nodes. These instances are added to the cluster as worker nodes.
   * 
   * > This field is required when you create a cluster with existing instances.
   * 
   * @deprecated
   */
  instances?: string[];
  /**
   * @remarks
   * The IP protocol stack of the cluster.
   * 
   * @example
   * Valid values:
   * ipv4 (single stack)
   * dual (dual stack). Default value: ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic creation of an advanced security group. This parameter takes effect when `security_group_id` is empty.
   * 
   * > When a basic security group is used, the total number of nodes and Terway pods in the cluster cannot exceed 2,000. Therefore, when creating a Terway network type cluster, use an advanced security group.
   * 
   * - `true`: Creates and uses an advanced security group.
   * - `false`: Uses a basic security group.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Selecting existing nodes during cluster creation is not supported. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * Specifies whether to retain instance names when creating a cluster with existing instances.
   * 
   * - `true`: Retains the instance names.
   * - `false`: Does not retain the instance names. The names are replaced based on system rules.
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
   * **[Deprecated]** For cluster control plane configuration, use the `key_pair` parameter under `control_plane_config` instead. For node pool configuration, use the `key_pair` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The name of the key pair. Mutually exclusive with `login_password`.
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
   * You can create clusters of the three most recent versions. Call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation to query supported cluster versions.
   * 
   * For more information about Kubernetes versions supported by ACK, see [Kubernetes version release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The Classic Load Balancer (CLB) instance ID used for API Server access. If this parameter is specified, automatic creation of an API Server CLB instance is skipped.
   * > Ensure that the CLB instance has no other dependencies such as listeners or backend servers. Shared and Internet-facing CLB instances are not supported.
   * 
   * @example
   * lb-wz9t256gqa3vbouk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * **[Deprecated]** CLB uses pay-by-usage billing. This parameter does not take effect.
   * 
   * The load balancing specification. Valid values:
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
   * **[Deprecated]** For cluster control plane configuration, use the `login_password` parameter under `control_plane_config` instead. For node pool configuration, use the `login_password` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The SSH logon password. Mutually exclusive with `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  loginPassword?: string;
  /**
   * @remarks
   * The cluster O&M window.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `auto_renew` parameter under `control_plane_config` instead.
   * 
   * Specifies whether to enable auto-renewal for master nodes. This parameter takes effect only when `master_instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enables auto-renewal.
   * - `false`: Disables auto-renewal.
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
   * **[Deprecated]** For cluster control plane configuration, use the `auto_renew_period` parameter under `control_plane_config` instead.
   * 
   * The auto-renewal epoch for master nodes. This parameter takes effect and is required only when the subscription billing method is selected.
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
   * **[Deprecated]** For cluster control plane configuration, use the `size` parameter under `control_plane_config` instead.
   * 
   * The number of master nodes. Valid values: `3` or `5`.
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
   * **[Deprecated]** For cluster control plane configuration, use the `instance_charge_type` parameter under `control_plane_config` instead.
   * 
   * The billing method for master nodes. Valid values:
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
   * **[Deprecated]** For cluster control plane configuration, use the `instance_types` parameter under `control_plane_config` instead.
   * 
   * The instance types for master nodes. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @deprecated
   */
  masterInstanceTypes?: string[];
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `unit` parameter under `control_plane_config` instead.
   * 
   * The subscription duration for master nodes. This parameter takes effect and is required only when `master_instance_charge_type` is set to `PrePaid`.
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
   * **[Deprecated]** For cluster control plane configuration, use the `period_unit` parameter under `control_plane_config` instead.
   * 
   * The subscription period unit for master nodes. This parameter is required when the billing method is `PrePaid`.
   * 
   * Valid values: `Month`. Currently, only monthly billing is supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  masterPeriodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `system_disk_category` parameter under `control_plane_config` instead.
   * 
   * The system cloud disk type for master nodes. Valid values:
   * 
   * - `cloud_efficiency`: Ultra cloud disk.
   * - `cloud_ssd`: Standard SSD.
   * - `cloud_essd`: Enterprise SSD (ESSD).
   * 
   * Default value: `cloud_ssd`. The default value may vary by zone.
   * 
   * @example
   * cloud_ssd
   * 
   * @deprecated
   */
  masterSystemDiskCategory?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `system_disk_performance_level` parameter under `control_plane_config` instead.
   * 
   * The performance level of the system cloud disk for master nodes. This parameter takes effect only for ESSD cloud disks. The performance level is related to the disk size. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  masterSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the `system_disk_size` parameter under `control_plane_config` instead.
   * 
   * The system cloud disk size for master nodes. Valid values: [40,500\\]. Unit: GiB.
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
   * **[Deprecated]** For cluster control plane configuration, use the `system_disk_snapshot_policy_id` parameter under `control_plane_config` instead.
   * 
   * The ID of the automatic snapshot policy for master node system cloud disks.
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
   * The list of vSwitch IDs for master nodes. The number of vSwitches must be in the range of [1,3\\]. To ensure high availability, select three vSwitches distributed across different zones.
   * 
   * The number of specified instance types must match the value of `master_count` and correspond one-to-one with the elements in `master_vswitch_ids`.
   * 
   * @deprecated
   */
  masterVswitchIds?: string[];
  /**
   * @remarks
   * The custom cluster name. The name can contain digits, Chinese characters, letters, and hyphens (-). The name must be 1 to 63 characters in length and cannot start with a hyphen (-).
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
   * The number of IP addresses per node, determined by specifying the network CIDR block. This parameter takes effect only for Flannel network type clusters.
   * 
   * Default value: `26`.
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
   * The node service port range. Valid port range: [30000,65535\\].
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
   * The list of node pools.
   */
  nodepools?: Nodepool[];
  /**
   * @remarks
   * **[Deprecated]** Use the desired_size parameter under scaling_group in nodepool instead.
   * 
   * The number of worker nodes. Valid values: 0 to 100.
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
   * **[Deprecated]** For cluster control plane node configuration, use the image_type parameter under control_plane_config instead. For node pool configuration, use the image_type parameter under scaling_group in nodepool instead.
   * 
   * The operating system platform type. Valid values:
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
   * **[Deprecated]**
   * 
   * The subscription duration. This parameter takes effect and is required only when charge_type is set to PrePaid.
   * 
   * Valid values: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * This parameter was changed on October 15, 2024. For more information, see [Notice on behavior changes of the CreateCluster API parameters](https://help.aliyun.com/document_detail/2849194.html).
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
   * The billing cycle. This parameter is required when the billing method is set to PrePaid.
   * 
   * Valid values: Month. Currently, only monthly billing cycles are supported.
   * 
   * This parameter was changed on October 15, 2024. For more information, see [Notice on behavior changes of the CreateCluster API parameters](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the platform parameter under scaling_group in nodepool instead.
   * 
   * The operating system distribution. Valid values:
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
   * **[Deprecated]** When the Terway network plugin is selected, specify vSwitches for Pod IP address allocation. Each Pod vSwitch corresponds to a worker node vSwitch, and the zones of the Pod vSwitch and the worker node vSwitch must be the same.
   * > The CIDR block mask of the Pod vSwitch should not exceed 19 and must not exceed 25. Otherwise, the number of Pod IP addresses available in the cluster network is very limited, which affects normal cluster usage.
   * 
   * @deprecated
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * When `cluster_type` is set to `ManagedKubernetes` (ACK managed clusters), you can further specify the cluster subtype.
   * - `Default`: ACK managed cluster, including ACK clusters (Pro and Basic editions).
   * - `Edge`: ACK Edge cluster, including ACK Edge clusters (Pro and Basic editions).
   * - `Serverless`: ACK Serverless cluster, including ACK Serverless clusters (Pro and Basic editions).
   * - `Lingjun`: ACK Lingjun cluster, available in Pro edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy mode.
   * 
   * - `iptables`: A mature and stable kube-proxy mode. Service discovery and load balancing for Kubernetes Services are configured by using iptables rules. Performance is moderate and affected by cluster scale. This mode is suitable for clusters with a small number of Services.
   * - `ipvs`: A high-performance kube-proxy mode. Service discovery and load balancing for Kubernetes Services are configured by using the Linux IPVS module. This mode is suitable for clusters with a large number of Services that require high load balancing performance.
   * - `nftables`: A next-generation kube-proxy mode that implements Service discovery and load balancing based on Linux nftables. It is a modern replacement for iptables. Compared with iptables, nftables delivers better network performance, more efficient rule updates, and improved performance in large-scale Service scenarios.  
   * Only supported for clusters running version 1.35 or later. The Kubernetes community deprecated IPVS starting from version 1.35. For new clusters, use nftables for longer-term community support.
   * 
   * Default value: `ipvs`.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the rds_instances parameter under scaling_group in nodepool instead.
   * 
   * The list of ApsaraDB RDS instances to which you want to add the cluster nodes to the whitelist. Add the container Pod CIDR block and node CIDR block to the RDS whitelist directly. Setting RDS instances may fail if the instances are not in a running state.
   * 
   * @deprecated
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The ID of the region where the cluster is deployed. For details, see [Regions supported by container service](https://help.aliyun.com/document_detail/216938.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs. Use this parameter to isolate different resources.
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
   * The container runtime used by the cluster. Supported runtimes include containerd, sandboxed containers, and Docker.
   * > Kubernetes 1.24 no longer supports Docker as a built-in container runtime.
   * 
   * For more information, see [Comparison of Docker, containerd, and sandboxed container runtimes](https://help.aliyun.com/document_detail/160313.html).
   * 
   * @deprecated
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The ID of an existing security group. This parameter is mutually exclusive with `is_enterprise_security_group`. Cluster nodes are automatically added to this security group.
   * 
   * @example
   * sg-bp1bdue0qc1g7k****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configuration, use the security_hardening_os parameter under control_plane_config instead. For node pool configuration, use the security_hardening_os parameter under scaling_group in nodepool instead.
   * 
   * Alibaba Cloud OS security hardening. Valid values:
   * 
   * - `true`: Enables Alibaba Cloud OS security hardening.
   * - `false`: Does not enable Alibaba Cloud OS security hardening.
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
   * A ServiceAccount is the access credential used for communication between a Pod and the cluster API Server. The `service-account-issuer` is the issuer identity in the `serviceaccount token`, which is the `iss` field in the `token payload`.
   * 
   * For more information about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  serviceAccountIssuer?: string;
  /**
   * @remarks
   * The CIDR block for the Service network. Valid ranges: 10.0.0.0/16-24, 172.16-31.0.0/16-24, and 192.168.0.0/16-24. The CIDR block cannot overlap with the VPC CIDR block 10.1.0.0/21 or CIDR blocks used by existing Kubernetes clusters in the VPC. This value cannot be modified after the cluster is created.
   * 
   * Default value: 172.19.0.0/20.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * **[Deprecated]** The service discovery type within the cluster, used to specify the service discovery method in `ACK Serverless` clusters.
   * 
   * - `CoreDNS`: Uses the Kubernetes-native standard service discovery component CoreDNS. A set of containers must be deployed in the cluster for DNS resolution. By default, two ECI instances with 0.25 Core and 512 MiB specifications are used.
   * - `PrivateZone`: Uses Alibaba Cloud PrivateZone to provide service discovery capabilities. The PrivateZone service must be activated.
   * 
   * Default value: not enabled.
   * 
   * @deprecated
   */
  serviceDiscoveryTypes?: string[];
  /**
   * @remarks
   * Specifies whether to configure SNAT for the VPC. Valid values:
   * 
   * - `true`: Automatic creation of a NAT gateway and automatic configuration of SNAT rules. Settings this to `true` if nodes and applications in the cluster need to access the Internet.
   * - `false`: Does not create a NAT gateway or SNAT rules. Nodes and applications in the cluster cannot access the Internet.
   * 
   * > If this is not enabled during cluster creation and Internet access is required later, you can [manually enable it](https://help.aliyun.com/document_detail/178480.html).
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  snatEntry?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane node configurations, use the `soc_enabled` parameter under `control_plane_config` instead. For node pool configurations, use the `soc_enabled` parameter under `scaling_group` in `nodepool` instead.
   * 
   * MLPS 2.0 security hardening. For more information, see [China Chinese China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable public network SSH logon. This parameter is used to log on to the master nodes of ACK dedicated clusters. This parameter does not take effect for managed clusters.
   * - `true`: Enabled.
   * - `false`: Not enabled.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  sshFlags?: boolean;
  /**
   * @remarks
   * The node tags. Tag definition rules:
   * 
   * - Tags are case-sensitive key-value pairs. You can settings up to 20 tags.
   * - Tag keys cannot be duplicated and can be up to 64 characters in length. Tag values can be empty and can be up to 128 characters in length. Tag keys and tag values cannot start with "aliyun", "acs:", "https://", or "http://". For details, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  tags?: Tag[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the taints parameter under kubernetes_config in nodepool instead.
   * 
   * The node taint information. Taints and tolerations work together to prevent Pods from being allocated to inappropriate nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   * 
   * @deprecated
   */
  taints?: Taint[];
  /**
   * @remarks
   * **[Deprecated]** When cluster creation fails, the system does not perform a rollback by default. You must manually clean up the failed cluster.
   * 
   * The cluster creation timeout period, in minutes.
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
   * The VPC used by the cluster. You must provide a VPC when creating a cluster.
   * 
   * @example
   * vpc-2zeik9h3ahvv2zz95****
   */
  vpcid?: string;
  /**
   * @remarks
   * The vSwitches where the cluster nodes reside. This parameter is required when creating a zero-node managed cluster.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configuration, use the auto_renew parameter under scaling_group in nodepool instead.
   * 
   * Specifies whether to enable auto-renewal for worker nodes. This parameter takes effect only when `worker_instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enables auto-renewal.
   * - `false`: Does not enable auto-renewal.
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
   * **[Deprecated]** For node pool configuration, use the auto_renew_period parameter under scaling_group in nodepool instead.
   * 
   * The Unified Auto Renewal Cycle for worker nodes. This parameter takes effect and is required only when the subscription billing method is selected.
   * 
   * Valid values: 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  workerAutoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** Use the data_disks parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The combination of data cloud disk type, size, and other configurations for worker nodes.
   * 
   * @deprecated
   */
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  /**
   * @remarks
   * **[Deprecated]** Use the instance_charge_type parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The billing method for worker nodes. Valid values:
   * 
   * - `PrePaid`: subscription.
   * - `PostPaid`: pay-as-you-go.
   * 
   * Default value: pay-as-you-go.
   * 
   * @example
   * PrePaid
   * 
   * @deprecated
   */
  workerInstanceChargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the instance_types parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The instance configurations for worker nodes.
   * 
   * @deprecated
   */
  workerInstanceTypes?: string[];
  /**
   * @remarks
   * **[Deprecated]** Use the period parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The subscription duration for worker nodes. This parameter takes effect and is required only when `worker_instance_charge_type` is set to `PrePaid`.
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
   * **[Deprecated]** Use the period_unit parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The billing period unit for worker nodes. This parameter is required when the billing method is `PrePaid`.
   * 
   * Valid values: `Month`. Currently, only monthly billing is supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the system_disk_category parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The system cloud disk type for worker nodes. For more information, see [Block storage overview](https://help.aliyun.com/document_detail/63136.html).
   * 
   * Valid values:
   * 
   * - `cloud_efficiency`: ultra cloud disk.
   * - `cloud_ssd`: standard SSD.
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
   * **[Deprecated]** Use the system_disk_performance_level parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The performance level (PL) of the system cloud disk when the system cloud disk is an ESSD. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
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
   * **[Deprecated]** Use the system_disk_size parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The system cloud disk size for worker nodes. Unit: GiB.
   * 
   * Valid values: [40,500\\].
   * 
   * The value of this parameter must be greater than or equal to max{40, ImageSize}.
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
   * **[Deprecated]** Use the system_disk_snapshot_policy_id parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The ID of the automatic snapshot policy used by the system cloud disks of worker nodes.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  workerSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the vswitch_ids parameter under scaling_group in nodepool instead for node pool configurations.
   * 
   * The list of vSwitches used by cluster nodes. Each node corresponds to one value.
   * 
   * When you create a managed cluster with zero nodes, the `worker_vswitch_ids` field is not required, but you must provide `vswitch_ids`.
   * 
   * @deprecated
   */
  workerVswitchIds?: string[];
  /**
   * @remarks
   * **[Deprecated]** Use the `zone_ids` parameter instead.
   * 
   * The active zone ID of the region to which the cluster belongs. This parameter is specific to ACK managed clusters.
   * 
   * When you create an ACK managed cluster without specifying `vpc_id` and `vswitch_ids`, you must specify `zone_id` for the cluster to automatically create a VPC and related network resources in the specified zone. This parameter is ignored when `vpc_id` and `vswitch_ids` are specified.
   * 
   * @example
   * cn-beiji****
   * 
   * @deprecated
   */
  zoneId?: string;
  /**
   * @remarks
   * The IDs of multiple zones in the region to which the cluster belongs. This parameter is specific to ACK managed clusters.
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
      clientToken: 'client_token',
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
      clientToken: 'string',
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

