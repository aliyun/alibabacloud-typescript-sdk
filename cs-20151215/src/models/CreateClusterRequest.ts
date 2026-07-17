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
   * - true: Enable.
   * 
   * - false: Do not enable.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The [SLS Project](https://help.aliyun.com/document_detail/48873.html) that contains the cluster audit log [Logstore](https://help.aliyun.com/document_detail/48873.html).
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
   * Specifies whether to enable intelligent managed mode.
   * 
   * - true: Enable.
   * 
   * - false: Do not enable.
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
   * Specifies whether to enable auto-renewal for control plane nodes. Takes effect when the billing method is `PrePaid`.
   * - true: Enable auto-renewal.
   * - false: Do not enable auto-renewal.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period of control plane nodes.
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
   * The billing method of control plane nodes.
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
   * The node CPU management policy.
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
   * The node instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The key pair name. Mutually exclusive with login_password.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. Must be 8 to 30 characters in length and contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters. Mutually exclusive with key_pair.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * **This field is deprecated.** The node service port range.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The subscription duration of control plane nodes. Valid and required when the billing method is `PrePaid`.
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
   * The subscription period unit of control plane nodes. Valid and required when the billing method is `PrePaid`.
   * 
   * Valid value: `Month`. Currently, only monthly periods are supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * **This field is deprecated.** The container runtime for control plane nodes. Valid values:
   * 
   * containerd: The Containerd runtime, which supports all cluster versions.
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
   * - false: Does not enable Alibaba Cloud OS security hardening.
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
   * Specifies whether to enable MLPS 2.0 security hardening.
   * 
   * - true: Enables MLPS 2.0 security hardening.
   * 
   * - false: Does not enable MLPS 2.0 security hardening.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable burst (performance burst) for the node system cloud disk.
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The node system disk type.
   * 
   * - `cloud_efficiency`: Ultra disk.
   * - `cloud_ssd`: Standard SSD.
   * - `cloud_essd`: ESSD.
   * - `cloud_auto`: ESSD AutoPL.
   * - `cloud_essd
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
   * The provisioned read/write IOPS for the node system cloud disk.
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
   * Valid values: [40,500\\]. Unit: GiB.
   * 
   * Default value: `120`.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The automatic snapshot backup policy for nodes.
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
   * The VPCs where the internal domain name record resolution takes effect.
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
   * The internal DNS configuration for the cluster. Applicable to ACK managed clusters. The internal domain name is used by node-side system components such as kubelet and kube-proxy to access the API Server. When internal domain name access is not enabled, node-side system components access the API Server through the CLB IP address.
   */
  internalDnsConfig?: CreateClusterRequestControlPlaneEndpointsConfigInternalDnsConfig;
  /**
   * @remarks
   * The cluster endpoint configuration. When this field is specified, the endpoint_public_access and load_balancer_id parameters do not take effect. ACK only supports automatic creation of NLB instances. To specify a CLB/NLB, use load_balancers_config to specify the instance ID.
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
   * - patch: Automatically upgrades to the available patch version of the current minor version. The new Kubernetes version does not contain breaking changes.
   * - stable: Automatically upgrades to the latest patch version of the second-latest minor version. The new Kubernetes version may involve API and feature changes, but its stability has been widely validated.
   * - rapid: Automatically upgrades to the latest patch version of the latest minor version to gain access to new Kubernetes community features faster.
   * 
   * @example
   * stable
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster auto-upgrade.
   * 
   * - true: Enable.
   * 
   * - false: Do not enable.
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
   * Specifies whether to enable RRSA.
   * 
   * - true: Enable.
   * 
   * - false: Do not enable.
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
   * Specifies whether to encrypt the data cloud disk. Valid values:
   * 
   * - `true`: Encrypts the data cloud disk.
   * - `false`: Does not encrypt the data cloud disk.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @remarks
   * The performance level of the node data cloud disk. This parameter takes effect only for [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
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
   * 【**该字段已废弃**】注册集群 API Server SLB 访问控制列表。
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The list of cluster components. Specify the components to install when creating a cluster using `addons`.
   * 
   * **Network component**: Required. Choose between Flannel and Terway network types:
   * 
   * - Flannel network: [{"name":"flannel","config":""}\\].
   * - Terway network: [{"name": "terway-eniip","config": ""}\\].
   * 
   * **Storage component**: Optional. Only the `csi` type is supported:
   * 
   * `csi`: [{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}\\].
   * 
   * **Log component**: Optional. We recommend that you enable this component. If the log service is not enabled, the cluster audit feature is unavailable.
   * 
   * - Use an existing `SLS Project`: [{"name": "loongcollector","config": "{\\"IngressDashboardEnabled\\":\\"true\\",\\"sls_project_name\\":\\"your_sls_project_name\\"}"}\\].
   * - Create a new `SLS Project`: [{"name": "loongcollector","config": "{\\"IngressDashboardEnabled\\":\\"true\\"}"}\\].
   * 
   * **Ingress component**: Optional. ACK dedicated clusters install the Ingress component `nginx-ingress-controller` by default.
   * 
   * - Install Ingress with public network access: [{"name":"nginx-ingress-controller","config":"{\\"IngressSlbNetworkType\\":\\"internet\\"}"}\\].
   * - Disable default Ingress installation: [{"name": "nginx-ingress-controller","config": "","disabled": true}\\].
   * 
   * **Event Center**: Optional. Enabled by default.
   * 
   * The Event Center provides storage, query, and alerting capabilities for Kubernetes events. The Logstore associated with the Kubernetes Event Center is free for 90 days. For more information about the free policy, see [Create and use the Kubernetes event center](https://help.aliyun.com/document_detail/150476.html).
   * 
   * Example of enabling the Event Center: [{"name":"ack-node-problem-detector","config":"{\\"sls_project_name\\":\\"your_sls_project_name\\"}"}\\].
   */
  addons?: Addon[];
  /**
   * @remarks
   * A ServiceAccount is the access credential for communication between a Pod and the cluster API Server. The `api-audiences` is the valid request `token` identity, used by the `apiserver` to authenticate whether a request `token` is valid. Multiple `audiences` are supported, separated by commas (,).
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
   * 【**该字段已废弃**】
   * 
   * 是否开启自动续费，当`charge_type`取值为`PrePaid`时才生效。取值：
   * 
   * - `true`：自动续费。
   * - `false`：不自动续费。
   * 
   * 默认值：`false`。
   * 
   * 该字段于2024年10月15日存在变更，更多信息，请参见[关于集群创建接口CreateCluster参数行为变更的公告](https://help.aliyun.com/document_detail/2849194.html)。
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * 【**该字段已废弃**】
   * 
   * 自动续费周期，当选择预付费和自动续费时才生效。当`PeriodUnit=Month`时，取值范围：{1, 2, 3, 6, 12}。
   * 
   * 默认值：1。
   * 
   * 该字段于2024年10月15日存在变更，更多信息，请参见[关于集群创建接口CreateCluster参数行为变更的公告](https://help.aliyun.com/document_detail/2849194.html)。
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * 【**该字段已废弃**】
   * 
   * API Server所使用的CLB实例的付费类型，默认值为PostPaid。取值：
   * - PostPaid：按量付费。
   * - PrePaid：包年包月，新建CLB付费类型已不支持，存量不影响。
   * 
   * >Notice: 
   * 
   * - 该字段于2024年10月15日存在变更，更多信息，请参见[关于集群创建接口CreateCluster参数行为变更的公告](https://help.aliyun.com/document_detail/2849194.html)。
   * - 自2024年12月01日起，新创建的CLB实例不再支持包年包月付费类型，同时将新增收取实例费。
   * </notice>
   * <props="china">详细信息请参见[【产品公告】关于取消新增集群API Server负载均衡CLB包年包月付费的公告](https://help.aliyun.com/document_detail/2851191.html)、[传统型负载均衡CLB计费项调整公告](https://help.aliyun.com/document_detail/2839797.html)。
   * <props="intl">详细信息请参见[传统型负载均衡CLB计费项调整公告](https://help.aliyun.com/document_detail/2839797.html)。
   * 
   * @example
   * PostPaid
   * 
   * @deprecated
   */
  chargeType?: string;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `security_hardening_os` parameter under `control_plane_config` instead. For node pool configurations, use the `security_hardening_os` parameter under `scaling_group` in `nodepool` instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * **This field is deprecated.** For control plane node configurations, use the `cloud_monitor_flags` parameter under `control_plane_config` instead. For node pool configurations, use the `cms_enabled` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * Specifies whether to install the CloudMonitor agent on the cluster. Valid values:
   * 
   * - `true`: Installs the CloudMonitor agent.
   * - `false`: Does not install the CloudMonitor agent.
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
   * The cluster local domain.
   * 
   * Naming rules: The domain consists of one or more parts separated by periods (.). Each part can be up to 63 characters in length and can contain lowercase letters, digits, and hyphens (-). Each part must start and end with a lowercase letter or digit.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * After you set `cluster_type` to `ManagedKubernetes` and configure `profile`, you can further specify the cluster specification. Valid values:
   * 
   * - `ack.standard`: Basic (selected by default when the value is empty)
   * - `ack.pro.small`: Pro
   * - `ack.pro.xlarge`: Pro XL
   * - `ack.pro.2xlarge`: Pro 2XL
   * - `ack.pro.4xlarge`: Pro 4XL (requires contacting customer service to enable the whitelist)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and fixing control plane resources, they ensure that API concurrency and Pod scheduling capabilities remain at a deterministic high level, suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For information about the management fees for Pro and Provisioned Control Plane clusters, see <props="china">[Cluster management fee](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fee](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * - `Kubernetes`: ACK dedicated cluster.
   * - `ManagedKubernetes`: ACK managed cluster types, including ACK managed clusters (Pro and Basic), ACK Serverless clusters (Pro and Basic), ACK Edge clusters (Pro and Basic), and ACK Lingjun clusters (Pro).
   * - `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The Pod network CIDR block. It must be a valid private CIDR block, specifically the following CIDR blocks and their subnets: 10.0.0.0/8, 172.16-31.0.0/12-16, 192.168.0.0/16. It cannot overlap with the VPC CIDR block or CIDR blocks used by existing Kubernetes clusters in the VPC. It cannot be modified after creation.
   * 
   * For information about cluster network planning, see [ACK managed cluster network planning](https://help.aliyun.com/document_detail/86500.html).
   * 
   * > This field is required for Flannel clusters.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The ACK dedicated cluster control plane configuration.
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
   * The Simple Log Service project for control plane component logs. You can use an existing project for log storage or have the system automatically create a project. If you choose automatic creation, a Simple Log Service project named `k8s-log-{ClusterID}` is created.
   * 
   * @example
   * k8s-log-xxx
   */
  controlplaneLogProject?: string;
  /**
   * @remarks
   * The number of days for log retention of control plane component logs.
   * 
   * @example
   * 30
   */
  controlplaneLogTtl?: string;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `cpu_policy` parameter under `control_plane_config` instead. For node pool configurations, use the `cpu_policy` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * The node CPU management policy. The following policies are supported for cluster versions 1.12.6 and later:
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
   * **This field is deprecated.** Use the `extra_sans` parameter instead.
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
   * Specifies whether to enable cluster deletion protection, which prevents the cluster from being accidentally deleted through the console or API. Valid values:
   * 
   * - `true`: Enable cluster deletion protection. The cluster cannot be deleted through the console or API.
   * - `false`: Do not enable cluster deletion protection. The cluster can be deleted through the console or API.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * 【**该字段已废弃**】集群创建失败时默认不会进行回滚，您需要自行清理创建失败的集群。
   * 
   * 集群创建失败是否回滚。取值：
   * 
   * - `true`：当集群创建失败时，进行回滚操作。
   * - `false`：当集群创建失败时，不进行回滚操作。
   * 
   * 
   * 默认值：`true`。
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * 【**该字段已废弃**】请使用参数`rrsa_config`代替。
   * 
   * 是否启用RRSA功能。
   * 
   * - true：开启。
   * 
   * - false：不开启。
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * The KMS key ID used to encrypt data disks. For more information, see [Key Management Service](https://help.aliyun.com/document_detail/28935.html).
   * 
   * > This feature only takes effect in ACK Pro managed clusters.
   * 
   * @example
   * 0fe64791-55eb-4fc7-84c5-c6c7cdca****
   */
  encryptionProviderKey?: string;
  /**
   * @remarks
   * Specifies whether to public network access. Exposes the API Server through an EIP to public network access to the cluster.
   * 
   * - `true`: Public network access.
   * - `false`: Do not public network access. If not enabled, the cluster API Server cannot be accessed from the Internet.
   * 
   * Default value: `false`.
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
   * 【**该字段已废弃**】创建集群时不支持选择已有节点，如需添加已有节点到集群，请先创建节点池，并调用[AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html)接口操作。
   * 
   * 使用已有实例创建集群时，是否对实例进行数据盘挂载，取值：
   * 
   * - `true`：将容器和镜像存储在数据盘，数据盘内原有数据将丢失，请注意备份数据。
   * 
   * - `false`：不将容器和镜像存储在数据盘。
   * 
   * 默认值：`false`。
   * 
   * 数据盘挂载规则：
   * 
   * - 如果ECS已挂载数据盘，且最后一块数据盘的文件系统未初始化，系统会自动将该数据盘格式化为ext4，用来存放内容/var/lib/docker、/var/lib/kubelet。
   * - 如果ECS未挂载数据盘，则不会挂载新的数据盘。
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `image_id` parameter under `control_plane_config` instead. For node pool configurations, use the `image_id` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The custom node image. The system image is used by default. When a custom image is selected, it replaces the default system image. For more information, see [Custom images](https://help.aliyun.com/document_detail/146647.html).
   * 
   * @example
   * m-bp16z7xko3vvv8gt****
   * 
   * @deprecated
   */
  imageId?: string;
  /**
   * @remarks
   * 【**该字段已废弃**】集群控制面配置请使用`control_plane_config`下的`image_type`参数代替；节点池配置请使用`nodepool`中`scaling_group`下的`image_type`参数代替。
   * 
   * 操作系统发行版类型，推荐使用该字段指定节点操作系统。取值：
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
   * 默认值：`CentOS`。
   * 
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  imageType?: string;
  /**
   * @remarks
   * 【**该字段已废弃**】创建集群时不支持选择已有节点，如需添加已有节点到集群，请先创建节点池，并调用[AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html)接口操作。
   * 
   * 
   * 使用已有节点创建集群时，需要指定ECS实例列表，该实例会作为Worker节点加入集群。
   * 
   * > 使用已有实例创建集群时，该字段必填。
   * 
   * @deprecated
   */
  instances?: string[];
  /**
   * @remarks
   * The IP protocol stack of the cluster.
   * 
   * @example
   * 可选值：
   * ipv4（单栈）
   * dual（双栈），默认值为ipv4。
   */
  ipStack?: string;
  /**
   * @remarks
   * Specifies whether to use automatic creation of an advanced security group. Takes effect when `security_group_id` is empty.
   * 
   * > When using a basic security group, the total number of nodes and Terway Pods in the cluster cannot exceed 2000. Therefore, when creating a Terway network type cluster, we recommend using an advanced security group.
   * 
   * - `true`: Create and use an advanced security group.
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
   * 【**该字段已废弃**】创建集群时不支持选择已有节点，如需添加已有节点到集群，请先创建节点池，并调用[AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html)接口操作。
   * 
   * 使用已有实例创建集群时，是否保留实例名称。
   * 
   * - `true`：保留。
   * - `false`：不保留，会用系统规则进行替换。
   * 
   * 默认值：`true`。
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `key_pair` parameter under `control_plane_config` instead. For node pool configurations, use the `key_pair` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The key pair name. Mutually exclusive with `login_password`.
   * 
   * @example
   * security-key
   * 
   * @deprecated
   */
  keyPair?: string;
  /**
   * @remarks
   * The cluster version, which is consistent with the Kubernetes community baseline version. We recommend that you select the latest version. If you do not specify this parameter, the latest version is used by default.
   * 
   * You can create clusters of the latest three versions. Call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation to query supported cluster versions.
   * 
   * For more information about Kubernetes versions supported by ACK, see [Kubernetes version release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The CLB instance ID for API Server access. When this parameter is specified, automatic creation of the API Server CLB is not performed.
   * > Ensure that the CLB instance has no other dependencies (such as listeners or backend servers). Shared and Internet-facing CLB instances are not supported.
   * 
   * @example
   * lb-wz9t256gqa3vbouk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * 【**该参数已废弃**】CLB按使用量计费，该参数不生效。
   * 
   * 负载均衡规格，取值：
   * - slb.s1.small
   * - slb.s2.small
   * - slb.s2.medium
   * - slb.s3.small
   * - slb.s3.medium
   * - slb.s3.large
   * 
   * 默认值：`slb.s2.small`。
   * 
   * @example
   * slb.s2.small
   * 
   * @deprecated
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * 【**该字段已废弃**】集群开启日志服务，只针对ACK Serverless集群生效，且取值必须是`SLS`。
   * 
   * @example
   * SLS
   * 
   * @deprecated
   */
  loggingType?: string;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `login_password` parameter under `control_plane_config` instead. For node pool configurations, use the `login_password` parameter under `scaling_group` in `nodepool` instead.
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
   * The cluster maintenance window.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `auto_renew` parameter under `control_plane_config` instead.
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
   * **This field is deprecated.** For control plane configurations, use the `auto_renew_period` parameter under `control_plane_config` instead.
   * 
   * The auto-renewal period for master nodes. This parameter takes effect and is required when the subscription billing method is selected.
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
   * **This field is deprecated.** For control plane configurations, use the `size` parameter under `control_plane_config` instead.
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
   * **This field is deprecated.** For control plane configurations, use the `instance_charge_type` parameter under `control_plane_config` instead.
   * 
   * The billing method for master nodes. Valid values:
   * 
   * - `PrePaid`: subscription.
   * - `PostPaid`: pay-as-you-go.
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
   * **This field is deprecated.** For control plane configurations, use the `instance_types` parameter under `control_plane_config` instead.
   * 
   * The instance types for master nodes. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @deprecated
   */
  masterInstanceTypes?: string[];
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `unit` parameter under `control_plane_config` instead.
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
   * **This field is deprecated.** For control plane configurations, use the `period_unit` parameter under `control_plane_config` instead.
   * 
   * The billing period unit for master nodes. This parameter is required when the billing method is `PrePaid`.
   * 
   * Valid values: `Month`. Only monthly billing is supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  masterPeriodUnit?: string;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `system_disk_category` parameter under `control_plane_config` instead.
   * 
   * The system cloud disk type for master nodes. Valid values:
   * 
   * - `cloud_efficiency`: ultra cloud disk.
   * - `cloud_ssd`: standard SSD.
   * - `cloud_essd`: ESSD.
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
   * **This field is deprecated.** For control plane configurations, use the `system_disk_performance_level` parameter under `control_plane_config` instead.
   * 
   * The performance level of the system cloud disk for cluster master nodes. This parameter takes effect only for ESSD cloud disks. The performance level varies based on the cloud disk size. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  masterSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `system_disk_size` parameter under `control_plane_config` instead.
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
   * **This field is deprecated.** For control plane configurations, use the `system_disk_snapshot_policy_id` parameter under `control_plane_config` instead.
   * 
   * The automatic snapshot policy ID for the master node system cloud disk.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  masterSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * **This field is deprecated.** Use the `vswitch_ids` parameter instead.
   * 
   * The list of vSwitch IDs for master nodes. The number of vSwitches ranges from [1,3\\]. To ensure high availability, select three vSwitches distributed across different zones.
   * 
   * The number of specified instance types must match the value of `master_count` and correspond one-to-one with the elements in `master_vswitch_ids`.
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
   * 【**该字段已废弃**】请使用参数`snat_entry`代替。
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  natGateway?: boolean;
  /**
   * @remarks
   * The number of IP addresses per node, determined by specifying the network CIDR mask. Only takes effect for Flannel network type clusters.
   * 
   * Default value: `26`.
   * 
   * @example
   * 25
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `node_name_mode` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The node service port range. Valid values: [30000,65535\\].
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
   * **This field is deprecated.** For node pool configurations, use the `desired_size` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The number of worker nodes. Valid values: [0, 100\\].
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
   * **This field is deprecated.** For control plane node configurations, use the `image_type` parameter under `control_plane_config` instead. For node pool configurations, use the `image_type` parameter under `scaling_group` in `nodepool` instead.
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
   * 【**该字段已废弃**】
   * 
   * 购买时长。包年包月时长，当charge_type取值为PrePaid时才生效，且为必选值。
   * 
   * 取值范围：{1, 2, 3, 6, 12, 24, 36, 48, 60}。
   * 
   * 默认值：1。
   * 
   * 该字段于2024年10月15日存在变更，更多信息，请参见[关于集群创建接口CreateCluster参数行为变更的公告](https://help.aliyun.com/document_detail/2849194.html)。
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  period?: number;
  /**
   * @remarks
   * 【**该字段已废弃**】
   * 
   * 付费周期，当付费类型为PrePaid的时候，需要指定周期。
   * 
   * 取值：Month，当前仅支持以月为周期。
   * 
   * 该字段于2024年10月15日存在变更，更多信息，请参见[关于集群创建接口CreateCluster参数行为变更的公告](https://help.aliyun.com/document_detail/2849194.html)。
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  periodUnit?: string;
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `platform` parameter under `scaling_group` in `nodepool` instead.
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
   * **This field is deprecated.** When you select Terway as the network plugin, you must assign vSwitches for Pod IP allocation. Each Pod vSwitch corresponds to a worker node vSwitch, and the Pod vSwitch and the worker node vSwitch must be in the same zone.
   * > The CIDR block mask of the Pod vSwitch should not exceed 19 and must not exceed 25. Otherwise, the number of Pod IP addresses available in the cluster network is very limited, which affects normal cluster usage.
   * 
   * @deprecated
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * When you set `cluster_type` to `ManagedKubernetes` (ACK managed cluster types), you can further specify the cluster subtype.
   * - `Default`: ACK managed cluster, including ACK clusters (Pro and Basic).
   * - `Edge`: ACK Edge cluster, including ACK Edge clusters (Pro and Basic).
   * - `Serverless`: ACK Serverless cluster, including ACK Serverless clusters (Pro and Basic).
   * - `Lingjun`: ACK Lingjun cluster, available in Pro.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy mode.
   * 
   * - `iptables`: A mature and stable kube-proxy mode. Service discovery and load balancing for Kubernetes Services are configured using iptables rules. However, performance is average and significantly affected by scale. Suitable for clusters with a small number of Services.
   * - `ipvs`: A high-performance kube-proxy mode. Service discovery and load balancing for Kubernetes Services are configured using the Linux IPVS module. Suitable for clusters with a large number of Services that require high-performance load balancing.
   * - `nftables`: A next-generation kube-proxy mode that implements Service discovery and load balancing based on Linux nftables, serving as a modern replacement for iptables. Compared to iptables, nftables offers better network performance, more efficient rule updates, and improved behavior in large-scale Service scenarios.  
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
   * **This field is deprecated.** For node pool configurations, use the `rds_instances` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The list of RDS instances. Select the RDS instances that you want to add to the whitelist. Go to the RDS console to add the container pod CIDR block and node CIDR block. Configuring RDS instances may fail if the instances are not in the running state.
   * 
   * @deprecated
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The region ID of the cluster. For more information, see [Regions supported by Container Service](https://help.aliyun.com/document_detail/216938.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the cluster, used to isolate different resources.
   * 
   * @example
   * rg-acfm3mkrure****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The RRSA configuration.
   */
  rrsaConfig?: CreateClusterRequestRrsaConfig;
  /**
   * @remarks
   * The container runtime of the cluster. Supported runtimes include containerd, sandboxed containers, and Docker.
   * > Kubernetes 1.24 no longer supports Docker as a built-in container runtime.
   * 
   * For more information, see [Comparison among Docker, containerd, and sandboxed container runtimes](https://help.aliyun.com/document_detail/160313.html).
   * 
   * @deprecated
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The security group ID. Specify this parameter when creating a cluster with an existing security group. Mutually exclusive with `is_enterprise_security_group`. Cluster nodes are automatically added to this security group.
   * 
   * @example
   * sg-bp1bdue0qc1g7k****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * **This field is deprecated.** For control plane configurations, use the `security_hardening_os` parameter under `control_plane_config` instead. For node pool configurations, use the `security_hardening_os` parameter under `scaling_group` in `nodepool` instead.
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
   * A ServiceAccount is the access credential for communication between a Pod and the cluster API Server. The `service-account-issuer` is the issuer identity in the `serviceaccount token`, which is the `iss` field in the `token payload`.
   * 
   * For more information about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  serviceAccountIssuer?: string;
  /**
   * @remarks
   * The Service network CIDR block. Valid ranges: 10.0.0.0/16-24, 172.16-31.0.0/16-24, 192.168.0.0/16-24. It cannot overlap with the VPC CIDR block 10.1.0.0/21 or CIDR blocks used by existing Kubernetes clusters in the VPC. It cannot be modified after creation.
   * 
   * Default value: 172.19.0.0/20.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * 【**该字段已废弃**】集群内服务发现类型，用于在`ACK Serverless`集群中指定服务发现方式。
   * 
   * - `CoreDNS`：使用Kubernetes原生标准服务发现组件CoreDNS，需要在集群部署一组容器用于DNS解析。默认采用两个0.25 Core 512 MiB规格的ECI实例。
   * - `PrivateZone`：使用阿里云PrivateZone产品提供服务发现能力，需要开启PrivateZone服务。
   * 
   * 默认值：不开启。
   * 
   * @deprecated
   */
  serviceDiscoveryTypes?: string[];
  /**
   * @remarks
   * Settings for configuring SNAT for the VPC. Valid values:
   * 
   * - `true`: Use automatic creation of a NAT gateway and configure SNAT rules. Set this to `true` if nodes and applications in the cluster need to access the Internet.
   * - `false`: Do not create a NAT gateway or SNAT rules. Nodes and applications in the cluster cannot access the Internet.
   * 
   * > If this is not enabled during cluster creation and Internet access is needed later, you can [manually enable it](https://help.aliyun.com/document_detail/178480.html).
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  snatEntry?: boolean;
  /**
   * @remarks
   * **This field is deprecated.** For control plane node configurations, use the `soc_enabled` parameter under `control_plane_config` instead. For node pool configurations, use the `soc_enabled` parameter under `scaling_group` in `nodepool` instead.
   * 
   * MLPS 2.0 security hardening. For more information, see [ACK MLPS 2.0 security hardening usage instructions](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * - `true`: Enables MLPS 2.0 security hardening.
   * - `false`: Does not enable MLPS 2.0 security hardening.
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
   * Specifies whether to enable public SSH logon. Used to log on to the master nodes of ACK dedicated clusters. This parameter does not take effect for managed clusters.
   * - `true`: Enable.
   * - `false`: Do not enable.
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
   * - Tags are composed of case-sensitive key-value pairs. You can set up to 20 tags.
   * - Tag keys cannot be duplicated and can be up to 64 characters in length. Tag values can be empty and can be up to 128 characters in length. Tag keys and tag values cannot start with "aliyun", "acs:", "https://", or "http://". For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  tags?: Tag[];
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `taints` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * The node taint information. Taints and tolerations work together to prevent pods from being scheduled to inappropriate nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   * 
   * @deprecated
   */
  taints?: Taint[];
  /**
   * @remarks
   * 【**该字段已废弃**】集群创建失败时默认不会进行回滚，您需要自行清理创建失败的集群。
   * 
   * 集群创建超时时间，单位分钟。
   * 
   * 默认值：`60`。
   * 
   * @example
   * 60
   * 
   * @deprecated
   */
  timeoutMins?: number;
  /**
   * @remarks
   * The time zone used by the cluster. See [Supported time zones](https://help.aliyun.com/document_detail/354879.html).
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
   * **This field is deprecated.** The custom node data.
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
   * The vSwitches for cluster nodes. This field is required when creating a zero-node managed cluster.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * 【**该字段已废弃**】节点池配置请使用`nodepool`中`scaling_group`下的`auto_renew`参数代替。
   * 
   * Worker节点是否开启自动续费，当`worker_instance_charge_type`取值为`PrePaid`时才生效，取值：
   * 
   * - `true`：自动续费。
   * - `false`：不自动续费。
   * 
   * 默认值：`true`。
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  workerAutoRenew?: boolean;
  /**
   * @remarks
   * 【**该字段已废弃**】节点池配置请使用`nodepool`中`scaling_group`下的`auto_renew_period`参数代替。
   * 
   * 
   * Worker节点自动续费周期，当选择包年包月付费类型时才生效，且为必选值。
   * 
   * 取值范围：{1, 2, 3, 6, 12}。
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  workerAutoRenewPeriod?: number;
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `data_disks` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The data cloud disk type, size, and other configurations for worker nodes.
   * 
   * @deprecated
   */
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `instance_charge_type` parameter under `scaling_group` in `nodepool` instead.
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
   * **This field is deprecated.** For node pool configurations, use the `instance_types` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The instance configuration for worker nodes.
   * 
   * @deprecated
   */
  workerInstanceTypes?: string[];
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `period` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The subscription duration for worker nodes. This parameter takes effect and is required only when `worker_
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  workerPeriod?: number;
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `period_unit` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The billing period unit for worker nodes. This parameter is required when the billing method is `PrePaid`.
   * 
   * Valid values: `Month`. Only monthly billing is supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `system_disk_category` parameter under `scaling_group` in `nodepool` instead.
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
   * **This field is deprecated.** For node pool configurations, use the `system_disk_performance_level` parameter under `scaling_group` in `nodepool` instead.
   * 
   * When the system cloud disk is an ESSD, you can set the performance level (PL) of the ESSD. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
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
   * **This field is deprecated.** For node pool configurations, use the `system_disk_size` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The system cloud disk size for worker nodes. Unit: GiB.
   * 
   * Valid values: [40,500\\].
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
   * **This field is deprecated.** For node pool configurations, use the `system_disk_snapshot_policy_id` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The automatic snapshot policy ID for the worker node system cloud disk.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  workerSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * **This field is deprecated.** For node pool configurations, use the `vswitch_ids` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The list of vSwitches used by cluster nodes. Each node corresponds to one value.
   * 
   * When creating a zero-node managed cluster, the `worker_vswitch_ids` field is not required, but you must provide `vswitch_ids`.
   * 
   * @deprecated
   */
  workerVswitchIds?: string[];
  /**
   * @remarks
   * 【**该字段已废弃**】请使用`zone_ids`参数代替。
   * 
   * 集群所属地域的可用区ID。此参数为ACK托管类的集群特有参数。
   * 
   * 当创建ACK托管类的集群时，如果未指定`vpc_id`和`vswitch_ids`，必须为集群指定`zone_id`，用于自动在该可用区创建VPC网络资源；指定`vpc_id`和`vswitch_ids`时，该参数无效。
   * 
   * @example
   * cn-beiji****
   * 
   * @deprecated
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone IDs of the region where the cluster resides. This parameter is specific to ACK managed cluster types.
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

