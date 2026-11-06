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
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The [SLS Project](https://help.aliyun.com/document_detail/48873.html) where the [Logstore](https://help.aliyun.com/document_detail/48873.html) for cluster audit logs is located.
   * 
   * - Default value: `k8s-log-{clusterid}`.
   * 
   * - After you enable the cluster audit log feature, a Logstore for cluster audit logs is created in the specified SLS Project.
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
   * Specifies whether to enable the intelligent managed mode. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
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
   * Specifies whether to enable auto-renewal for control plane nodes. This parameter takes effect only when the billing method is set to PrePaid. Valid values:
   * - true: enables auto-renewal.
   * - false: disables auto-renewal.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for control plane nodes. Valid values: 1, 2, 3, 6, and 12. Unit: months.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method for control plane nodes. Valid values:
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on the nodes. Valid values:
   * - true: installs the CloudMonitor agent.
   * - false: does not install the CloudMonitor agent.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes. Valid values:
   * - static: allows you to enhance CPU affinity and exclusivity for pods with specific resource characteristics on the node.
   * - none: uses the default CPU affinity policy.
   * 
   * Default value: none.
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
   * The ID of the image.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20240819.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the operating system image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The instance metadata access configuration for ECS instances. This parameter is available only to users in the whitelist. To use this parameter, submit a ticket.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance types of the nodes.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the key pair. You must specify this parameter or the login_password parameter.
   * 
   * @example
   * ack
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. You must specify this parameter or the key_pair parameter.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * **[Deprecated]** The service port range of the node.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The subscription period for control plane nodes. This parameter is required and takes effect only when the billing method is set to PrePaid. Valid values: 1, 2, 3, 6, 12, 24, 36, 48, and 60. Unit: months.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period for control plane nodes. This parameter is required and takes effect only when the billing method is set to PrePaid. Valid value: Month. Currently, only months are supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** The name of the runtime for control plane nodes. Valid value:
   * 
   * containerd: the containerd runtime, which supports all cluster versions.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Specifies whether to enable security hardening for Alibaba Cloud OS. Valid values:
   * - true: enables security hardening for Alibaba Cloud OS.
   * - false: disables security hardening for Alibaba Cloud OS.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * The number of control plane nodes. Valid values: 3 and 5.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. Valid values:
   * - true: enables MLPS 2.0 security hardening.
   * - false: disables MLPS 2.0 security hardening.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the system cloud disk of the node. Valid values:
   * - true: enables the feature.
   * - false: disables the feature.
   * 
   * This parameter is supported only when system_disk_category is set to cloud_auto.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the system cloud disk for the node. Valid values:
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - cloud_auto: ESSD AutoPL cloud disk.
   * - cloud_essd_entry: ESSD Entry cloud disk.
   * 
   * Default value: cloud_ssd. The default value may vary by zone.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the system cloud disk for the node. This parameter takes effect only for ESSDs. The performance level varies based on the disk size. For more information, see [ESSD (standard SSD)](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS for the system cloud disk of the node. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50,000}. 
   * 
   * This parameter is supported only when system_disk_category is set to cloud_auto.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system cloud disk for the node. Valid values: 40 to 500. Unit: GiB.
   * 
   * Default value: 120.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy for the node.
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
   * The type of the endpoint.
   * 
   * @example
   * private
   */
  endpointType?: string;
  /**
   * @remarks
   * The ID of the NLB instance.
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
   * The internal DNS configuration of the cluster, which applies to ACK managed clusters. The internal domain name is used by node-side system components such as kubelet and kube-proxy to access the API server. If internal domain name access is not enabled, node-side system components access the API server by using the IP address of the CLB instance.
   */
  internalDnsConfig?: CreateClusterRequestControlPlaneEndpointsConfigInternalDnsConfig;
  /**
   * @remarks
   * The connection configuration of the cluster. If you specify this parameter, the endpoint_public_access and load_balancer_id parameters do not take effect. ACK supports only automatic creation of NLB instances. To specify a CLB or NLB instance, use load_balancers_config to specify the corresponding instance ID.
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
   * The automatic cluster upgrade channel. Valid values:
   * - patch: Automatically upgrades to the patch version when a patch version is available for the current minor version. The new Kubernetes version does not include breaking changes.
   * - stable: Automatically upgrades to the latest patch version of the second most recent minor version. The new Kubernetes version may include API and feature changes, but its stability has been widely verified.
   * - rapid: Automatically upgrades to the latest patch version of the latest minor version to obtain new features from the Kubernetes community faster.
   * 
   * @example
   * stable
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic cluster upgrade. Valid values:
   * - true: Enabled.
   * - false: Disabled.
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
   * The automatic cluster upgrade configuration.
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
   * Specifies whether to enable the RRSA feature. Valid values:
   * - true: Enabled.
   * - false: Disabled.
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
   * The type of the data cloud disk.
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
   * The performance level of the data cloud disk. This parameter takes effect only for [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Valid values: 40 to 32767. Unit: GiB.
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
   * **[Deprecated]** The access control list (ACL) for the Server Load Balancer (SLB) instance of the API server in a registered cluster.
   * 
   * @deprecated
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The list of cluster components. You can use `addons` to specify the cluster components that you want to install when you create a cluster.
   * 
   * **Network components**: Required. Includes two options for the network type: Flannel and Terway. You must select one of them when you create a cluster:
   * 
   * - Flannel: [{"name":"flannel","config":""}\\].
   * - Terway: [{"name": "terway-eniip","config": ""}\\].
   * 
   * **Storage components**: Optional. Only `csi` is supported:
   * 
   * `csi`: [{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}\\].
   * 
   * **Log components**: Optional. We recommend that you enable this component. If you do not enable Log Service, you cannot use the cluster audit feature.
   * 
   * - Use an existing `SLS Project`: [{"name": "loongcollector","config": "{\\"IngressDashboardEnabled\\":\\"true\\",\\"sls_project_name\\":\\"your_sls_project_name\\"}"}\\].
   * - Create a new `SLS Project`: [{"name": "loongcollector","config": "{\\"IngressDashboardEnabled\\":\\"true\\"}"}\\].
   * 
   * **Ingress components**: Optional. By default, the `nginx-ingress-controller` Ingress component is installed in ACK dedicated clusters.
   * 
   * - Install the Ingress component and enable Internet access: [{"name":"nginx-ingress-controller","config":"{\\"IngressSlbNetworkType\\":\\"internet\\"}"}\\].
   * - Disable the default installation of the Ingress component: [{"name": "nginx-ingress-controller","config": "","disabled": true}\\].
   * 
   * **Event center**: Optional. Enabled by default.
   * 
   * The event center provides capabilities such as storage, query, and alerting for Kubernetes events. The Logstore associated with the Kubernetes event center is free of charge for 90 days. For more information about the free quota policy, see [Create and use a Kubernetes event center](https://help.aliyun.com/document_detail/150476.html).
   * 
   * Example of enabling the event center: [{"name":"ack-node-problem-detector","config":"{\\"sls_project_name\\":\\"your_sls_project_name\\"}"}\\].
   */
  addons?: Addon[];
  /**
   * @remarks
   * A ServiceAccount is the access credential for communication between pods and the cluster API server. `api-audiences` specifies the valid identities for request `tokens` and is used by the `apiserver` to authenticate whether a request `token` is valid. You can configure multiple `audiences` and separate them with commas (,).
   * 
   * For more information about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  apiAudiences?: string;
  /**
   * @remarks
   * The cluster audit log configurations.
   */
  auditLogConfig?: CreateClusterRequestAuditLogConfig;
  /**
   * @remarks
   * The [intelligent managed mode](https://help.aliyun.com/document_detail/2938898.html) configurations.
   */
  autoMode?: CreateClusterRequestAutoMode;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to enable auto-renewal. This parameter takes effect only when `charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enables auto-renewal.
   * - `false`: Disables auto-renewal.
   * 
   * Default value: `false`.
   * 
   * This parameter was changed on October 15, 2024. For more information, see [Announcement on parameter behavior changes of the CreateCluster operation for cluster creation](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * **[Deprecated]** The auto-renewal cycle. This parameter takes effect only when you select subscription and auto-renewal. When `PeriodUnit` is set to `Month`, valid values are 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * This parameter was changed on October 15, 2024. For more information, see [Announcement on parameter behavior changes of the CreateCluster operation for cluster creation](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** The billing method of the Classic Load Balancer (CLB) instance used by the API server. Default value: PostPaid. Valid values:
   * - PostPaid: Pay-as-you-go.
   * - PrePaid: Subscription. This billing method is no longer supported for new CLB instances, but existing instances are not affected.
   * 
   * >Notice: 
   * 
   * - This parameter was changed on October 15, 2024. For more information, see [Announcement on parameter behavior changes of the CreateCluster operation for cluster creation](https://help.aliyun.com/document_detail/2849194.html).
   * - Starting December 1, 2024, newly created CLB instances no longer support the subscription billing method, and an instance fee is charged.
   * </notice>
   * <props="china">For more information, see [Service notices: Deprecation of the subscription billing method for the CLB instance of the API server in newly created clusters](https://help.aliyun.com/document_detail/2851191.html) and [Announcement on billing item adjustments for Classic Load Balancer (CLB)](https://help.aliyun.com/document_detail/2839797.html).
   * <props="intl">For more information, see [Announcement on billing item adjustments for Classic Load Balancer (CLB)](https://help.aliyun.com/document_detail/2839797.html).
   * 
   * @example
   * PostPaid
   * 
   * @deprecated
   */
  chargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** To configure the cluster control plane, use the `security_hardening_os` parameter under `control_plane_config` instead. To configure node pools, use the `security_hardening_os` parameter under `scaling_group` in `nodepool` instead.
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
   * **[Deprecated]** To configure control plane nodes of a cluster, use the `cloud_monitor_flags` parameter under `control_plane_config` instead. To configure node pools, use the `cms_enabled` parameter under `kubernetes_config` in `nodepool` instead.
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
   * The local domain name of the cluster.
   * 
   * Naming rules: The domain name consists of one or more parts separated by periods (.). Each part can be up to 63 characters in length and can contain lowercase letters, digits, and hyphens (-). It must start and end with a lowercase letter or a digit.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * After you set `cluster_type` to `ManagedKubernetes` and configure `profile`, you can further specify the cluster edition. Valid values:
   * 
   * - `ack.standard`: Basic Edition. This is the default value if this parameter is left empty.
   * - `ack.pro.small`: Pro Edition.
   * - `ack.pro.xlarge`: Pro XL.
   * - `ack.pro.2xlarge`: Pro 2XL.
   * - `ack.pro.4xlarge`: Pro 4XL. You must contact customer service to apply for whitelist access.
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by <props="china">[ACK Pro Provisioned Control Plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro Provisioned Control Plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and reserving control plane resources, these editions ensure that API concurrency and pod scheduling capabilities are always maintained at a consistently high level. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For more information about the cluster management fees for Pro Edition and provisioned control plane editions, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * Valid values:
   * - `Kubernetes`: ACK dedicated cluster.
   * - `ManagedKubernetes`: ACK managed cluster, including ACK managed clusters (Pro Edition and Basic Edition), ACK Serverless clusters (Pro Edition and Basic Edition), ACK Edge clusters (Pro Edition and Basic Edition), and ACK Lingjun clusters (Pro Edition).
   * - `ExternalKubernetes`: Registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The CIDR block for pods. It must be a valid private CIDR block, specifically one of the following CIDR blocks or their subnets: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. It cannot overlap with the CIDR block of the VPC or the CIDR blocks used by existing Kubernetes clusters in the VPC. It cannot be modified after the cluster is created.
   * 
   * For more information about cluster network planning, see [Network planning for ACK managed clusters](https://help.aliyun.com/document_detail/86500.html).
   * 
   * > This parameter is required for Flannel clusters.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The control plane configuration for an ACK dedicated cluster.
   */
  controlPlaneConfig?: CreateClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * The connection configuration of the cluster. If you specify this parameter, the endpoint_public_access and load_balancer_id parameters do not take effect. To specify a CLB or NLB instance, use load_balancers_config to specify the corresponding instance ID.
   */
  controlPlaneEndpointsConfig?: CreateClusterRequestControlPlaneEndpointsConfig;
  /**
   * @remarks
   * The list of component names. This parameter specifies the control plane components whose logs are collected. By default, logs of kube-apiserver, kube-controller-manager, kube-scheduler, and cloud-controller-manager are collected.
   */
  controlplaneLogComponents?: string[];
  /**
   * @remarks
   * The Log Service project for control plane component logs. You can use an existing project for log storage, or use the automatic creation feature to create a project. If you choose automatic creation, a Log Service project named k8s-log-{ClusterID} is created.
   * 
   * @example
   * k8s-log-xxx
   */
  controlplaneLogProject?: string;
  /**
   * @remarks
   * The log retention period for control plane components. Unit: days.
   * 
   * @example
   * 30
   */
  controlplaneLogTtl?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the cpu_policy parameter under control_plane_config for cluster control plane configuration, and use the cpu_policy parameter under kubernetes_config in nodepool for node pool configuration.
   * 
   * The CPU management policy for nodes. This parameter supports the following policies when the cluster version is 1.12.6 or later:
   * - static: allows you to enhance CPU affinity and exclusivity for pods with specific resource characteristics on the node.
   * - none: uses the default CPU affinity policy.
   * 
   * Default value: none.
   * 
   * @example
   * none
   * 
   * @deprecated
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the extra_sans parameter instead.
   * 
   * The SANs of the custom certificate. Separate multiple IP addresses or domain names with commas (,).
   * 
   * @example
   * cs.aliyun.com
   * 
   * @deprecated
   */
  customSan?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster to prevent accidental deletion through the console or API calls. Valid values:
   * 
   * - `true`: Enables cluster deletion protection. The cluster cannot be deleted through the console or API.
   * - `false`: Disables cluster deletion protection. The cluster can be deleted through the console or API.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * **[Deprecated]** By default, no rollback is performed when cluster creation fails. You must manually clean up the failed cluster.
   * 
   * Specifies whether to perform a rollback when cluster creation fails. Valid values:
   * 
   * - `true`: Performs a rollback when cluster creation fails.
   * - `false`: Does not perform a rollback when cluster creation fails.
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
   * Specifies whether to enable RRSA. Valid values:
   * 
   * - true: Enables RRSA.
   * - false: Disables RRSA.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used to encrypt data cloud disks. For more information, see [Key Management Service](https://help.aliyun.com/document_detail/28935.html).
   * 
   * > This feature takes effect only in ACK Pro clusters.
   * 
   * @example
   * 0fe64791-55eb-4fc7-84c5-c6c7cdca****
   */
  encryptionProviderKey?: string;
  /**
   * @remarks
   * Specifies whether to enable public network access. An elastic IP address (EIP) is used to expose the API Server for public network access to the cluster. Valid values:
   * 
   * - `true`: Enables public network access.
   * - `false`: Disables public network access. If you select this value, the cluster API Server cannot be accessed over the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  endpointPublicAccess?: boolean;
  /**
   * @remarks
   * The custom Subject Alternative Name (SAN) of the API Server certificate.
   */
  extraSans?: string[];
  /**
   * @remarks
   * **[Deprecated]** You cannot select existing nodes when creating a cluster. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * Specifies whether to mount data cloud disks to existing instances when creating a cluster. Valid values:
   * 
   * - `true`: Stores containers and images on data cloud disks. Existing data on the data cloud disks will be lost. Back up your data first.
   * - `false`: Does not store containers and images on data cloud disks.
   * 
   * Default value: `false`.
   * 
   * Data cloud disk mounting rules:
   * 
   * - If the ECS instance has data cloud disks attached and the file system of the last data cloud disk is not initialized, the system automatically formats the data cloud disk to ext4 to store /var/lib/docker and /var/lib/kubelet.
   * - If the ECS instance does not have data cloud disks attached, no new data cloud disk will be attached.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configurations, use the `image_id` parameter under `control_plane_config` instead. For node pool configurations, use the `image_id` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The custom image for nodes. By default, the system image is used. If you select a custom image, it replaces the default system image. For more information, see [Custom images](https://help.aliyun.com/document_detail/146647.html).
   * 
   * @example
   * m-bp16z7xko3vvv8gt****
   * 
   * @deprecated
   */
  imageId?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configurations, use the `image_type` parameter under `control_plane_config` instead. For node pool configurations, use the `image_type` parameter under `scaling_group` in `nodepool` instead.
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
   * **[Deprecated]** You cannot select existing nodes when creating a cluster. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * The list of existing ECS instances to be added as worker nodes when creating a cluster with existing nodes.
   * 
   * > This field is required when you create a cluster with existing instances.
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
   * ipv4 (single-stack)
   * dual (dual-stack). Default value: ipv4
   */
  ipStack?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic creation of an advanced security group. This parameter takes effect when `security_group_id` is empty.
   * 
   * > If you use a basic security group, the total number of nodes and Terway pods in the cluster cannot exceed 2,000. Therefore, we recommend that you use an advanced security group when creating a cluster of the Terway network type.
   * 
   * Valid values:
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
   * **[Deprecated]** You cannot select existing nodes when creating a cluster. To add existing nodes to a cluster, create a node pool first and call the [AttachInstancesToNodePool](https://help.aliyun.com/document_detail/2667920.html) operation.
   * 
   * Specifies whether to retain the instance names when creating a cluster with existing instances. Valid values:
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
   * **[Deprecated]** For cluster control plane configurations, use the `key_pair` parameter under `control_plane_config` instead. For node pool configurations, use the `key_pair` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The name of the key pair. You must specify either this parameter or `login_password`.
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
   * You can create clusters of the latest three versions. You can call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation to query the supported cluster versions.
   * 
   * For more information about the Kubernetes versions supported by ACK, see [Kubernetes version release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The instance ID of the Classic Load Balancer (CLB) used for API server access. If you specify this parameter, automatic creation of a CLB instance for the API server is disabled.
   * > Make sure that the CLB instance has no other dependencies, such as listeners or backend servers. Shared-resource and Internet-facing CLB instances are not supported.
   * 
   * @example
   * lb-wz9t256gqa3vbouk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * **[Deprecated]** For CLB instances, billing is based on usage. This parameter does not take effect.
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
   * **[Deprecated]** This parameter enables Simple Log Service for the cluster. It takes effect only for ACK Serverless clusters and must be set to `SLS`.
   * 
   * @example
   * SLS
   * 
   * @deprecated
   */
  loggingType?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configurations, use the `login_password` parameter under `control_plane_config` instead. For node pool configurations, use the `login_password` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The SSH logon password. You must specify either this parameter or `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  loginPassword?: string;
  /**
   * @remarks
   * The maintenance window of the cluster.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configurations, use the `auto_renew` parameter under `control_plane_config` instead.
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
   * **[Deprecated]** For cluster control plane configurations, use the `auto_renew_period` parameter under `control_plane_config` instead.
   * 
   * The auto-renewal epoch for master nodes. This parameter takes effect and is required only when the subscription billing method is selected.
   * 
   * Valid values: 1, 2, 3, 6, and 12.
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
   * **[Deprecated]** For cluster control plane configurations, use the `size` parameter under `control_plane_config` instead.
   * 
   * The number of master nodes. Valid values: `3` and `5`.
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
   * **[Deprecated]** For cluster control plane configurations, use the `instance_charge_type` parameter under `control_plane_config` instead.
   * 
   * The billing method of master nodes. Valid values:
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
   * **[Deprecated]** For cluster control plane configurations, use the `instance_types` parameter under `control_plane_config` instead.
   * 
   * The instance types of master nodes. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @deprecated
   */
  masterInstanceTypes?: string[];
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configurations, use the `unit` parameter under `control_plane_config` instead.
   * 
   * The subscription period of master nodes. This parameter takes effect and is required only when `master_instance_charge_type` is set to `PrePaid`.
   * 
   * Valid values: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
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
   * **[Deprecated]** For cluster control plane configurations, use the `period_unit` parameter under `control_plane_config` instead.
   * 
   * The subscription period unit of master nodes. This parameter is required when the billing method is `PrePaid`.
   * 
   * Valid value: `Month`. Currently, only month is supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  masterPeriodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configurations, use the `system_disk_category` parameter under `control_plane_config` instead.
   * 
   * The system cloud disk category of master nodes. Valid values:
   * 
   * - `cloud_efficiency`: ultra disk.
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
   * **[Deprecated]** For cluster control plane configurations, use the `system_disk_performance_level` parameter under `control_plane_config` instead.
   * 
   * The performance level of the system cloud disk for master nodes. This parameter takes effect only for ESSDs. The performance level is related to the disk size. For more information, see [ESSD standard SSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  masterSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * **[Deprecated]** For cluster control plane configurations, use the `system_disk_size` parameter under `control_plane_config` instead.
   * 
   * The system cloud disk size of master nodes. Valid values: 40 to 500. Unit: GiB.
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
   * **[Deprecated]** For cluster control plane configurations, use the `system_disk_snapshot_policy_id` parameter under `control_plane_config` instead.
   * 
   * The ID of the automatic snapshot policy applied to the system cloud disk of master nodes.
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
   * The list of vSwitch IDs for master nodes. You can specify 1 to 3 vSwitches. To ensure high availability of the cluster, we recommend that you select three vSwitches in different zones.
   * 
   * The number of specified vSwitches must be consistent with the value of `master_count` and correspond to the elements in `master_vswitch_ids` one by one.
   * 
   * @deprecated
   */
  masterVswitchIds?: string[];
  /**
   * @remarks
   * The custom name of the cluster. The name must be 1 to 63 characters in length and can contain digits, Chinese characters, English letters, and hyphens (-). It cannot start with a hyphen (-).
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
   * The maximum number of IP addresses that can be assigned to nodes. This parameter determines the number of IP addresses by specifying the CIDR block of the network. It takes effect only for clusters of the Flannel network type.
   * 
   * Default value: `26`.
   * 
   * @example
   * 25
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `node_name_mode` parameter under `kubernetes_config` in `nodepool` instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The node service port. Valid port range: 30000 to 65535.
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
   * **[Deprecated]** For node pool configurations, use the `desired_size` parameter under `scaling_group` in `nodepool` instead. The number of worker nodes. Valid values: 0 to 100.
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  numOfNodes?: number;
  /**
   * @remarks
   * The automatic O&M policy for the cluster.
   */
  operationPolicy?: CreateClusterRequestOperationPolicy;
  /**
   * @remarks
   * **[Deprecated]** For control plane node configurations, use the `image_type` parameter under `control_plane_config` instead. For node pool configurations, use the `image_type` parameter under `scaling_group` in `nodepool` instead. The operating system platform type. Valid values:
   * - Windows
   * - Linux
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
   * **[Deprecated]** The subscription duration. This parameter takes effect and is required only when `charge_type` is set to `PrePaid`. Valid values: 1, 2, 3, 6, 12, 24, 36, 48, and 60. Default value: 1. This field was changed on October 15, 2024. For more information, see [Announcement on parameter behavior changes of the CreateCluster API operation](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  period?: number;
  /**
   * @remarks
   * **[Deprecated]** The billing cycle. This parameter is required when the billing method is `PrePaid`. Valid value: `Month`. Currently, only monthly billing is supported. This field was changed on October 15, 2024. For more information, see [Announcement on parameter behavior changes of the CreateCluster API operation](https://help.aliyun.com/document_detail/2849194.html).
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `platform` parameter under `scaling_group` in `nodepool` instead. The operating system distribution. Valid values:
   * - CentOS
   * - AliyunLinux
   * - QbootAliyunLinux
   * - Qboot
   * - Windows
   * - WindowsCore
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
   * **[Deprecated]** When the Terway network plug-in is selected, you must specify the vSwitches used to assign IP addresses to pods. Each pod vSwitch corresponds to a worker node vSwitch, and they must be in the same zone.
   * > We recommend that the subnet mask length of the pod vSwitch does not exceed 19, and the maximum subnet mask length does not exceed 25. Otherwise, the number of pod IP addresses that can be allocated in the cluster network is very limited, which affects the normal use of the cluster.
   * 
   * @deprecated
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * The cluster subtype when `cluster_type` is set to `ManagedKubernetes`, which indicates an ACK managed cluster. Valid values:
   * - `Default`: ACK managed clusters, including ACK Pro and ACK ACK clusters.
   * - `Edge`: ACK Edge clusters, including ACK Edge Pro and ACK Edge ACK clusters.
   * - `Serverless`: ACK Serverless clusters, including ACK Serverless Pro and ACK Serverless ACK clusters.
   * - `Lingjun`: ACK Lingjun clusters, which provide the Pro edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy mode. Valid values:
   * - `iptables`: A mature and stable kube-proxy mode. Service discovery and load balancing for Kubernetes Services are configured by using iptables rules. However, the performance is average and greatly affected by the scale. This mode is suitable for clusters with a small number of Services.
   * - `ipvs`: A high-performance kube-proxy mode. Service discovery and load balancing for Kubernetes Services are configured by using the Linux IPVS module. This mode is suitable for clusters with a large number of Services and scenarios that require high-performance load balancing.
   * - `nftables`: A next-generation kube-proxy mode. Service discovery and load balancing are implemented based on Linux nftables, which is a modern alternative to iptables. Compared with iptables, nftables provides better network performance, rule update efficiency, and performance in large-scale Service scenarios.
   * This mode is supported only in clusters of Kubernetes 1.35 and later. The Kubernetes community deprecated IPVS in version 1.35. We recommend that you use nftables for new clusters to obtain long-term community support.
   * Default value: `ipvs`.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `rds_instances` parameter under `scaling_group` in `nodepool` instead. The list of ApsaraDB RDS instances to which you want to add the cluster to the whitelist. We recommend that you add the pod CIDR block and node CIDR block to the RDS whitelist. If you specify RDS instances here, nodes may fail to be created because the instances are not in the running state.
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
   * The ID of the resource group to which the cluster belongs. This parameter is used to isolate different resources.
   * 
   * @example
   * rg-acfm3mkrure****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The configuration of the RAM Roles for Service Accounts (RRSA) feature.
   */
  rrsaConfig?: CreateClusterRequestRrsaConfig;
  /**
   * @remarks
   * The container runtime used in the cluster. Valid values: containerd, sandboxed container, and Docker.
   * > Kubernetes 1.24 and later no longer support Docker as a built-in container runtime.
   * For more information, see [Comparison among Docker, containerd, and sandboxed container runtimes](https://help.aliyun.com/document_detail/160313.html).
   * 
   * @deprecated
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The ID of the security group. Required when you create a cluster by using an existing security group. This parameter and is_enterprise_security_group are mutually exclusive. Cluster nodes are automatically added to this security group.
   * 
   * @example
   * sg-bp1bdue0qc1g7k****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * **[Deprecated]** For control plane configurations, use the `security_hardening_os` parameter under `control_plane_config` instead. For node pool configurations, use the `security_hardening_os` parameter under `scaling_group` in `nodepool` instead. Specifies whether to enable Alibaba Cloud OS security hardening. Valid values:
   * - `true`: Enabled.
   * - `false`: Disabled.
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
   * A ServiceAccount is an access credential for communication between pods and the cluster API server. The `service-account-issuer` is the issuer identity in the `serviceaccount token`, which is the `iss` field in the `token payload`. For more information about `ServiceAccount`, see [Deploy service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  serviceAccountIssuer?: string;
  /**
   * @remarks
   * The CIDR block of the Service network. Valid values: 10.0.0.0/16 to 10.0.0.0/24, 172.16.0.0/16 to 172.31.0.0/24, and 192.168.0.0/16 to 192.168.0.0/24. The CIDR block cannot overlap with the VPC CIDR block 10.1.0.0/21 or the CIDR blocks used by existing Kubernetes clusters in the VPC. The CIDR block cannot be modified after the cluster is created. Default value: 172.19.0.0/20.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * **[Deprecated]** The service discovery type used in the cluster. This parameter is used to specify the service discovery method in an `ACK Serverless` cluster. Valid values:
   * - `CoreDNS`: Uses the standard Kubernetes service discovery component CoreDNS. You must deploy a group of containers in the cluster for DNS resolution. By default, two ECI instances with 0.25 vCPUs and 512 MiB of memory are used.
   * - `PrivateZone`: Uses Alibaba Cloud PrivateZone to provide service discovery capabilities. You must activate the PrivateZone service.
   * Default value: None (disabled).
   * 
   * @deprecated
   */
  serviceDiscoveryTypes?: string[];
  /**
   * @remarks
   * Specifies whether to configure SNAT for the VPC. Valid values:
   * - `true`: Enables automatic creation of a NAT gateway and configures SNAT rules. Settings: `true` is required if nodes and applications in the cluster need to access the Internet.
   * - `false`: Does not create a NAT gateway or configure SNAT rules. Nodes and applications in the cluster cannot access the Internet.
   * > If you do not enable this feature when you create the cluster, you can [manually enable it](https://help.aliyun.com/document_detail/178480.html) later if your business needs to access the Internet.
   * Default value: `false`.
   * 
   * @example
   * false
   */
  snatEntry?: boolean;
  /**
   * @remarks
   * **[Deprecated]** For control plane node configurations, use the `soc_enabled` parameter under `control_plane_config` instead. For node pool configurations, use the `soc_enabled` parameter under `scaling_group` in `nodepool` instead. Specifies whether to enable mlps 2.0 security hardening. For more information, see [ACK mlps 2.0 security hardening instructions](https://help.aliyun.com/document_detail/196148.html). Valid values:
   * - `true`: Enabled.
   * - `false`: Disabled.
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
   * Specifies whether to enable public SSH access. This parameter is used to log on to the master nodes of an ACK dedicated cluster. This parameter does not take effect in managed clusters. Valid values:
   * - `true`: Enabled.
   * - `false`: Disabled.
   * Default value: `false`.
   * 
   * @example
   * true
   */
  sshFlags?: boolean;
  /**
   * @remarks
   * The support policy for the cluster version. The value is case-sensitive. Valid values:
   * - Standard: Standard support.
   * - Extended: Extended support. After the standard support period ends, the cluster enters the extended support period and continues to receive CVE patch versions.
   * Only ACK Pro managed clusters (where `cluster_spec` is set to `ack.pro.*` and `profile` is set to `Default`) support the `Extended` value. Specifying `Extended` for ACK Basic, ACS, ACK Edge managed, and ACK dedicated clusters will be rejected. Patch versions in the extended support period are also applicable only to ACK Pro managed clusters. Specifying such versions for other cluster types will be rejected. If this parameter is not specified, the default value is determined by the server configuration.
   * 
   * @example
   * Extended
   */
  supportPolicy?: string;
  /**
   * @remarks
   * The node tags. Tag definition rules:
   * - A tag is a case-sensitive key-value pair. You can configure up to 20 tags.
   * - Tag keys must be unique and can be up to 64 characters in length. Tag values can be empty and can be up to 128 characters in length. Tag keys and values cannot start with "aliyun", "acs:", "https://", or "http://". For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  tags?: Tag[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `taints` parameter under `kubernetes_config` in `nodepool` instead. The taints of the nodes. Taints and tolerations work together to prevent pods from being scheduled to inappropriate nodes. For more information, see [Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/).
   * [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/)
   * 
   * @deprecated
   */
  taints?: Taint[];
  /**
   * @remarks
   * **[Deprecated]** By default, no rollback is performed when cluster creation fails. You must manually clean up the failed cluster. The timeout period for cluster creation, in minutes. Default value: `60`.
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
   * The custom cluster CA certificate.
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
   * The ID of the VPC used by the cluster. This parameter is required when you create the cluster.
   * 
   * @example
   * vpc-2zeik9h3ahvv2zz95****
   */
  vpcid?: string;
  /**
   * @remarks
   * The vSwitches where the cluster nodes are deployed. This parameter is required when you create a managed cluster with zero nodes.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `auto_renew` parameter under `scaling_group` in `nodepool` instead. Specifies whether to enable auto-renewal for worker nodes. This parameter takes effect only when `worker_instance_charge_type` is set to `PrePaid`. Valid values:
   * - `true`: Enabled.
   * - `false`: Disabled.
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
   * **[Deprecated]** For node pool configurations, use the `auto_renew_period` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The auto-renewal epoch for worker nodes. This parameter takes effect and is required only when the subscription billing method is selected.
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
   * **[Deprecated]** For node pool configurations, use the `data_disks` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The combination of configurations such as the type and size of the data cloud disks for worker nodes.
   * 
   * @deprecated
   */
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `instance_charge_type` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The billing method for worker nodes. Valid values:
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
  workerInstanceChargeType?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `instance_types` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The instance configurations for worker nodes.
   * 
   * @deprecated
   */
  workerInstanceTypes?: string[];
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `period` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The subscription duration for worker nodes. This parameter takes effect and is required only when `worker_instance_charge_type` is set to `PrePaid`.
   * 
   * Valid values: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
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
   * **[Deprecated]** For node pool configurations, use the `period_unit` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The subscription period unit for worker nodes. This parameter is required when the billing method is set to `PrePaid`.
   * 
   * Valid value: `Month`. Currently, only month is supported.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `system_disk_category` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The type of the system cloud disk for worker nodes. For more information, see [Block Storage overview](https://help.aliyun.com/document_detail/63136.html).
   * 
   * Valid values:
   * 
   * - `cloud_efficiency`: Ultra cloud disk.
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
   * **[Deprecated]** For node pool configurations, use the `system_disk_performance_level` parameter under `scaling_group` in `nodepool` instead.
   * 
   * When the system cloud disk is an ESSD, you can configure the performance level (PL). For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
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
   * **[Deprecated]** For node pool configurations, use the `system_disk_size` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The size of the system cloud disk for worker nodes. Unit: GiB.
   * 
   * Valid values: 40 to 500.
   * 
   * The value of this parameter must be greater than or equal to the maximum of 40 and the image size.
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
   * **[Deprecated]** For node pool configurations, use the `system_disk_snapshot_policy_id` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The ID of the automatic snapshot policy applied to the system cloud disk of worker nodes.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  workerSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * **[Deprecated]** For node pool configurations, use the `vswitch_ids` parameter under `scaling_group` in `nodepool` instead.
   * 
   * The list of vSwitches used by cluster nodes. Each node corresponds to one vSwitch.
   * 
   * When you create a managed cluster with zero nodes, the `worker_vswitch_ids` parameter is not required, but you must specify `vswitch_ids`.
   * 
   * @deprecated
   */
  workerVswitchIds?: string[];
  /**
   * @remarks
   * **[Deprecated]** Use the `zone_ids` parameter instead.
   * 
   * The zone ID of the region where the cluster resides. This parameter is specific to managed ACK clusters.
   * 
   * When you create a managed ACK cluster, if `vpc_id` and `vswitch_ids` are not specified, you must specify `zone_id` for the cluster to automatically create a VPC and network resources in this zone. If `vpc_id` and `vswitch_ids` are specified, this parameter does not take effect.
   * 
   * @example
   * cn-beiji****
   * 
   * @deprecated
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone IDs of the region where the cluster resides. This parameter is specific to managed ACK clusters.
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
      supportPolicy: 'support_policy',
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
      supportPolicy: 'string',
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

