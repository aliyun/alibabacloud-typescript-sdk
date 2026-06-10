// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { DiskInit } from "./DiskInit";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";
import { KubeletConfig } from "./KubeletConfig";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class NodepoolAutoScaling extends $dara.Model {
  /**
   * @remarks
   * [This parameter is deprecated.]
   * 
   * The peak bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * [This parameter is deprecated.]
   * 
   * The billing method for the EIP. Valid values:
   * 
   * - `PayByBandwidth`: Pay-by-bandwidth.
   * 
   * - `PayByTraffic`: Pay-by-traffic.
   * 
   * Default value: PayByBandwidth.
   * 
   * @example
   * PayByBandwidth
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Whether to enable auto scaling.
   * 
   * - `true`: enables auto scaling for the node pool.
   * 
   * - `false`: Disables auto scaling. If you set this parameter to `false`, other parameters in the `auto_scaling` object do not take effect.
   * 
   * Default value: `false`.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * [This parameter is deprecated.]
   * 
   * Whether to associate an EIP with each node in the pool. Valid values:
   * 
   * - `true`: associates an EIP.
   * 
   * - `false`: does not associate an EIP.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of instances in the auto scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of instances in the auto scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  minInstances?: number;
  /**
   * @remarks
   * The type of instances to which auto scaling applies. This determines the scaling behavior. Valid values:
   * 
   * - `cpu`: Regular instances.
   * 
   * - `gpu`: GPU-accelerated instances.
   * 
   * - `gpushare`: Shared GPU-accelerated instances.
   * 
   * - `spot`: Spot instances.
   * 
   * Default value: `cpu`.
   * 
   * @example
   * cpu
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'eip_bandwidth',
      eipInternetChargeType: 'eip_internet_charge_type',
      enable: 'enable',
      isBondEip: 'is_bond_eip',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipInternetChargeType: 'string',
      enable: 'boolean',
      isBondEip: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolInterconnectConfig extends $dara.Model {
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池的网络带宽，单位：Mbps。
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  bandwidth?: number;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池绑定的云连接网实例 ID(CCNID)。
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   * 
   * @deprecated
   */
  ccnId?: string;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池绑定的云连接网实例所属的地域。
   * 
   * @example
   * cn-shanghai
   * 
   * @deprecated
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * [This parameter is deprecated.]
   * 
   * The ID of the Cloud Enterprise Network (C
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   * 
   * @deprecated
   */
  cenId?: string;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池的购买时长，单位：月。
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  improvedPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      ccnId: 'ccn_id',
      ccnRegionId: 'ccn_region_id',
      cenId: 'cen_id',
      improvedPeriod: 'improved_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ccnId: 'string',
      ccnRegionId: 'string',
      cenId: 'string',
      improvedPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to install CloudMonitor on the nodes. After installation, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you enable this feature. Valid values:
   * 
   * - `true`: installs CloudMonitor on nodes.
   * 
   * - `false`: does not install CloudMonitor on nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of the nodes. This parameter is available only for clusters of Kubernetes 1.12.6 and later. The following policies are supported:
   * 
   * - `static`: allows pods with specific resource characteristics to be granted with enhanced CPU affinity and exclusivity on the node.
   * 
   * - `none`: indicates that the default CPU affinity is used.
   * 
   * Default value: `none`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The labels to add to the nodes in the node pool.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The naming convention of the node. A node name consists of a prefix, an IP address, and a suffix.
   * 
   * - The prefix and suffix can consist of one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). A node name must start and end with a lowercase letter or a digit.
   * 
   * - The node IP address is the complete private IP address of the node.
   * 
   * This parameter consists of four comma-separated parts. For example, if you set the parameter to `customized,aliyun,ip,com`, where `customized` and `ip` are fixed strings, `aliyun` is the prefix, and `com` is the suffix, the node name is in the format of `aliyun.192.168.xxx.xxx.com`.
   * 
   * @example
   * customized,aliyun,ip,com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The container runtime. Valid values:
   * 
   * - `containerd`: Recommended. This runtime is supported in all cluster versions.
   * 
   * - `Sandboxed-Container.runv`: a sandboxed container that provides higher isolation. This runtime is supported in clusters of Kubernetes 1.24 and earlier.
   * 
   * - `docker`: This runtime is supported in clusters of Kubernetes 1.22 and earlier.
   * 
   * Default value: `containerd`
   * 
   * This parameter is required.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * The version of the container runtime.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.6.20
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The taints.
   */
  taints?: Taint[];
  /**
   * @remarks
   * The user data of the node.
   * 
   * @example
   * MXM=
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      nodeNameMode: 'node_name_mode',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      nodeNameMode: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.taints)) {
      $dara.Model.validateArray(this.taints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagementAutoRepairPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the node to be restarted.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the kubelet to be automatically upgraded.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeKubelet: 'auto_upgrade_kubelet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeKubelet: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagementAutoVulFixPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the node to be restarted.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The CVE vulnerability levels to automatically fix. You can specify multiple levels separated by commas.
   * 
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
      vulLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagementUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto upgrade. Valid values:
   * 
   * - `true`
   * 
   * - `false`
   * 
   * @example
   * false
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes. Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 0
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of extra nodes.
   * 
   * @example
   * 0
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. You must specify this parameter or `surge`.
   * 
   * @example
   * 0
   */
  surgePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      maxUnavailable: 'max_unavailable',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      maxUnavailable: 'number',
      surge: 'number',
      surgePercentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagement extends $dara.Model {
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto repair. This parameter takes effect only if `enable` is set to `true`.
   * 
   * - `true`
   * 
   * - `false`
   * 
   * @example
   * false
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto repair policy for nodes.
   */
  autoRepairPolicy?: NodepoolManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto upgrade.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto upgrade policy.
   */
  autoUpgradePolicy?: NodepoolManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to automatically fix CVEs.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The policy for automatically fixing CVEs.
   */
  autoVulFixPolicy?: NodepoolManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * - `true`
   * 
   * - `false`: If you set this parameter to false, the other parameters in the `management` object are ignored.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The auto upgrade configurations. This parameter takes effect only when `enable` is set to `true`.
   * 
   * @deprecated
   */
  upgradeConfig?: NodepoolManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoFaultDiagnosis: 'auto_fault_diagnosis',
      autoRepair: 'auto_repair',
      autoRepairPolicy: 'auto_repair_policy',
      autoUpgrade: 'auto_upgrade',
      autoUpgradePolicy: 'auto_upgrade_policy',
      autoVulFix: 'auto_vul_fix',
      autoVulFixPolicy: 'auto_vul_fix_policy',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoFaultDiagnosis: 'boolean',
      autoRepair: 'boolean',
      autoRepairPolicy: NodepoolManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: NodepoolManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: NodepoolManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: NodepoolManagementUpgradeConfig,
    };
  }

  validate() {
    if(this.autoRepairPolicy && typeof (this.autoRepairPolicy as any).validate === 'function') {
      (this.autoRepairPolicy as any).validate();
    }
    if(this.autoUpgradePolicy && typeof (this.autoUpgradePolicy as any).validate === 'function') {
      (this.autoUpgradePolicy as any).validate();
    }
    if(this.autoVulFixPolicy && typeof (this.autoVulFixPolicy as any).validate === 'function') {
      (this.autoVulFixPolicy as any).validate();
    }
    if(this.upgradeConfig && typeof (this.upgradeConfig as any).validate === 'function') {
      (this.upgradeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolNodeComponentsConfig extends $dara.Model {
  /**
   * @remarks
   * 节点组件自定义配置。
   */
  customConfig?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.customConfig) {
      $dara.Model.validateMap(this.customConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolNodeComponents extends $dara.Model {
  /**
   * @remarks
   * 节点组件配置。
   */
  config?: NodepoolNodeComponentsConfig;
  /**
   * @remarks
   * 节点组件名称。
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * 节点组件版本
   * 
   * @example
   * 1.33.3-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: NodepoolNodeComponentsConfig,
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolNodeConfig extends $dara.Model {
  /**
   * @remarks
   * Kubelet 参数配置。
   */
  kubeletConfiguration?: KubeletConfig;
  static names(): { [key: string]: string } {
    return {
      kubeletConfiguration: 'kubelet_configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfiguration: KubeletConfig,
    };
  }

  validate() {
    if(this.kubeletConfiguration && typeof (this.kubeletConfiguration as any).validate === 'function') {
      (this.kubeletConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the node pool.
   * 
   * This parameter is required.
   * 
   * @example
   * np-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the node pool belongs.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the node pool. Valid values:
   * 
   * - `ess`: a regular node pool.
   * 
   * - `edge`: an edge node pool.
   * 
   * @example
   * ess
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      resourceGroupId: 'resource_group_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private node pool.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private pool that is used to start instances. An elasticity assurance or a capacity reservation service generates a private pool after the service takes effect. You can select a private pool to start instances. Valid values:
   * 
   * - `Open`: open mode. The system automatically matches an open private pool. If no matching private pool is found, the resources in the public pool are used.
   * 
   * - `Target`: targeted mode. The instance is started from the specified private pool. If the private pool is unavailable, the instance fails to be started.
   * 
   * - `None`: no mode. The instance is not started from a private pool.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      matchCriteria: 'match_criteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroupResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of private pool IDs. The IDs are the IDs of elasticity assurances or capacity reservations. This parameter accepts only IDs of private pools in targeted mode. You can specify up to 20 IDs.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool policy that is used to create instances. Resource pools include private pools generated by an elasticity assurance or a capacity reservation service and public pools. You can select a resource pool to start an instance. Valid values:
   * PrivatePoolFirst: The system prioritizes the use of private pools. If you specify `resource_pool_options.private_pool_ids`, the specified private pools are used first. If no private pool is specified or the capacity of the specified private pool is insufficient, the system automatically matches an open private pool. If no matching private pool is found, the resources in the public pool are used.
   * PrivatePoolOnly: The instance can be created only from a private pool. You must specify `resource_pool_options.private_pool_ids`. If the capacity of the specified private pool is insufficient, the instance fails to be created.
   * None: No resource pool policy is used.
   * Default value: None.
   * 
   * @example
   * PrivatePoolFirst
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolIds: 'private_pool_ids',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolIds: { 'type': 'array', 'itemType': 'string' },
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privatePoolIds)) {
      $dara.Model.validateArray(this.privatePoolIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroupSpotPriceLimit extends $dara.Model {
  /**
   * @remarks
   * The spot instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price of a single instance.
   * 
   * @example
   * 0.39
   */
  priceLimit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instance_type',
      priceLimit: 'price_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroupTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroup extends $dara.Model {
  /**
   * @remarks
   * Whether to enable auto-renewal for the nodes in the node pool. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: enables auto-renewal.
   * 
   * - `false`: disables auto-renewal.
   * 
   * Default value: `true`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for the nodes. This parameter is required and takes effect only if `instance_charge_type` is set to `PrePaid`.
   * 
   * If `PeriodUnit` is set to `Month`, the valid values are 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances when `multi_az_policy` is set to `COST_OPTIMIZED` and preemptible instances cannot be created due to price or inventory constraints. Valid values:
   * 
   * - `true`
   * 
   * - `false`
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The configurations of the data disks that are attached to the nodes in the node pool.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @remarks
   * The configurations of block devices.
   */
  diskInit?: DiskInit[];
  /**
   * @remarks
   * The ID of the custom image. If you do not set this parameter, the default system image is used.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200904.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the OS image. You must specify this parameter or `platform`. Valid values:
   * 
   * - `AliyunLinux`: Alinux 2 image.
   * 
   * - `AliyunLinux3`: Alinux 3 image.
   * 
   * - `AliyunLinux3Arm64`: Alinux 3 image for ARM.
   * 
   * - `AliyunLinuxUEFI`: Alinux 2 UEFI image.
   * 
   * - `CentOS`: CentOS image.
   * 
   * - `Windows`: Windows image.
   * 
   * - `WindowsCore`: Windows Core image.
   * 
   * - `ContainerOS`: Container-optimized image.
   * 
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of the nodes in the node pool. Valid values:
   * 
   * - `PrePaid`: subscription.
   * 
   * - `PostPaid`: pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The configurations of metadata access for the ECS instances.
   * This feature is available only to allowlisted users. To use this feature, submit a ticket.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance types.
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method of the public IP address. Valid values:
   * 
   * - `PayByBandwidth`: pay-by-bandwidth.
   * 
   * - `PayByTraffic`: pay-by-traffic.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth of a node. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must specify this parameter or `login_password`.
   * 
   * > If you create a managed node pool, you can specify only `key_pair`.
   * 
   * @example
   * np-key
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether to use a non-root user to log on to the ECS instances that are created.
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The password for SSH access. You must specify this parameter or `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for the ECS instances in a scaling group that spans multiple zones. Valid values:
   * 
   * - `PRIORITY`: The system scales instances based on the priority of the vSwitches specified in `vswitch_ids`. The system preferentially scales instances in the zone where the vSwitch with the highest priority resides. If the scaling fails, the system scales instances in the zone where the vSwitch with the next highest priority resides.
   * 
   * - `COST_OPTIMIZED`: The system scales instances based on the vCPU price from lowest to highest. The system preferentially scales instances that have the lowest vCPU price. If the scaling configuration includes multiple instance types and some of them are preemptible instance types, the system preferentially scales the preemptible instances. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to reasons such as stock-outs.
   * 
   *   > The `COST_OPTIMIZED` policy takes effect only when multiple instance types are specified or preemptible instances are selected in the scaling configuration.
   * 
   * - `BALANCE`: The system evenly distributes ECS instances across the specified zones. If the distribution of instances becomes unbalanced due to stock-outs, you can call the [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html) operation to rebalance the resources.
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be provisioned in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than this value, the system preferentially creates pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the instances that exceed the minimum number specified by `on_demand_base_capacity`. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of the nodes in the node pool. This parameter is required and takes effect only when `instance_charge_type` is set to `PrePaid`. If `period_unit` is set to `Month`, the valid values for `period` are 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 0
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the subscription nodes in the node pool. This parameter is required when `instance_charge_type` is set to `PrePaid`.
   * 
   * `Month`: The billing cycle is measured in months.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The OS distribution. Valid values:
   * 
   * - `CentOS`
   * 
   * - `AliyunLinux`
   * 
   * - `Windows`
   * 
   * - `WindowsCore`
   * 
   * Default value: `AliyunLinux`.
   * 
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  platform?: string;
  /**
   * @remarks
   * The configurations of the private node pool.
   */
  privatePoolOptions?: NodepoolScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The name of the worker RAM role.
   * >Notice: This parameter can be configured only when you create a node pool in an ACK managed cluster of Kubernetes 1.22 or later.
   * 
   * @example
   * example-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * A list of ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool policy that are used to create instances. Note the following when you set this parameter:
   * This parameter takes effect only when you create pay-as-you-go instances.
   * You cannot specify this parameter together with `private_pool_options.match_criteria` or `private_pool_options.id`.
   */
  resourcePoolOptions?: NodepoolScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling mode of the scaling group. Valid values:
   * 
   * - `release`: the standard mode. In this mode, resources are scaled by creating and releasing ECS instances based on the resource usage.
   * 
   * - `recycle`: the rapid mode. In this mode, resources are scaled by creating, stopping, and starting ECS instances. This speeds up the scaling of resources. When an instance is stopped, you are not charged for its computing resources but are charged for its storage resources. This does not apply to instances that have local disks.
   * 
   * Default value: `release`.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The ID of the security group to which you want to add the nodes. You must specify this parameter or `security_group_ids`. We recommend that you specify `security_group_ids`.
   * 
   * @example
   * sg-2zeihch86ooz9io4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * A list of security group IDs. You must specify this parameter or `security_group_id`. We recommend that you specify `security_group_ids`. If you specify both `security_group_id` and `security_group_ids`, `security_group_ids` takes precedence.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The number of instance types. The scaling group creates preemptible instances of multiple instance types that have the lowest cost in a balanced manner. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable replenishment for preemptible instances. If this feature is enabled, the scaling group attempts to create a new instance to replace a preemptible instance that is about to be reclaimed. Valid values:
   * 
   * - `true`
   * 
   * - `false`
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The price limits for specific spot instance types.
   */
  spotPriceLimit?: NodepoolScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instances. Valid values:
   * 
   * - NoSpot: normal pay-as-you-go instances.
   * 
   * - SpotWithPriceLimit: spot instances with a user-defined maximum hourly price.
   * 
   * - SpotAsPriceGo: spot instances for which the system automatically bids based on the current market price.
   * 
   * For more information, see [Preemptible instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the system disk. Valid values:
   * 
   * - true: enables the performance burst feature.
   * 
   * - false: disables the performance burst feature.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * A prioritized list of system disk types. The system attempts to create a system disk of a disk type with a higher priority. If the disk type is unavailable, the system uses the next disk type to create the system disk. Valid values:
   * 
   * - cloud: basic disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The type of the system disk. Valid values:
   * 
   * - `cloud_efficiency`: ultra disk.
   * 
   * - `cloud_ssd`: standard SSD.
   * 
   * - `cloud_essd`: enhanced SSD (ESSD).
   * 
   * - `cloud_auto`: ESSD AutoPL disk.
   * 
   * - `cloud_essd_entry`: ESSD Entry disk.
   * 
   * Default value: `cloud_efficiency`.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The encryption algorithm that is used for the system disk. Set the value to aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values: true and false.
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used to encrypt the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD that is used as the system disk. This parameter takes effect only for ESSDs.
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * 
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * 
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * 
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the system disk. The valid values are 0 to min{50000, 1000 × Capacity - Base IOPS}. The default Base IOPS is min{1800 + 50 × Capacity, 50000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * Valid values: 40 to 500.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags to add to the ECS instances in the node pool.
   * 
   * A tag key must be unique and can be up to 128 characters in length. A tag key and a tag value cannot start with `aliyun` or `acs:` and cannot contain `https://` or `http://`.
   */
  tags?: NodepoolScalingGroupTags[];
  /**
   * @remarks
   * The IDs of the vSwitches to which the nodes can be added.
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      compensateWithOnDemand: 'compensate_with_on_demand',
      dataDisks: 'data_disks',
      deploymentsetId: 'deploymentset_id',
      desiredSize: 'desired_size',
      diskInit: 'disk_init',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instanceMetadataOptions: 'instance_metadata_options',
      instanceTypes: 'instance_types',
      internetChargeType: 'internet_charge_type',
      internetMaxBandwidthOut: 'internet_max_bandwidth_out',
      keyPair: 'key_pair',
      loginAsNonRoot: 'login_as_non_root',
      loginPassword: 'login_password',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      privatePoolOptions: 'private_pool_options',
      ramRoleName: 'ram_role_name',
      rdsInstances: 'rds_instances',
      resourcePoolOptions: 'resource_pool_options',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      securityGroupIds: 'security_group_ids',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskBurstingEnabled: 'system_disk_bursting_enabled',
      systemDiskCategories: 'system_disk_categories',
      systemDiskCategory: 'system_disk_category',
      systemDiskEncryptAlgorithm: 'system_disk_encrypt_algorithm',
      systemDiskEncrypted: 'system_disk_encrypted',
      systemDiskKmsKeyId: 'system_disk_kms_key_id',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
      systemDiskProvisionedIops: 'system_disk_provisioned_iops',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      compensateWithOnDemand: 'boolean',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentsetId: 'string',
      desiredSize: 'number',
      diskInit: { 'type': 'array', 'itemType': DiskInit },
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instanceMetadataOptions: InstanceMetadataOptions,
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPair: 'string',
      loginAsNonRoot: 'boolean',
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      privatePoolOptions: NodepoolScalingGroupPrivatePoolOptions,
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      resourcePoolOptions: NodepoolScalingGroupResourcePoolOptions,
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': NodepoolScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      systemDiskCategory: 'string',
      systemDiskEncryptAlgorithm: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKmsKeyId: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': NodepoolScalingGroupTags },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.diskInit)) {
      $dara.Model.validateArray(this.diskInit);
    }
    if(this.instanceMetadataOptions && typeof (this.instanceMetadataOptions as any).validate === 'function') {
      (this.instanceMetadataOptions as any).validate();
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(Array.isArray(this.rdsInstances)) {
      $dara.Model.validateArray(this.rdsInstances);
    }
    if(this.resourcePoolOptions && typeof (this.resourcePoolOptions as any).validate === 'function') {
      (this.resourcePoolOptions as any).validate();
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.spotPriceLimit)) {
      $dara.Model.validateArray(this.spotPriceLimit);
    }
    if(Array.isArray(this.systemDiskCategories)) {
      $dara.Model.validateArray(this.systemDiskCategories);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

export class NodepoolTeeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to create a confidential computing node pool.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  teeEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      teeEnable: 'tee_enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teeEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Nodepool extends $dara.Model {
  /**
   * @remarks
   * The auto scaling configurations for the node pool.
   */
  autoScaling?: NodepoolAutoScaling;
  /**
   * @remarks
   * [This parameter is deprecated. Use desired_size instead.]
   * 
   * The number of nodes in the node pool.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @remarks
   * [This parameter is deprecated.]
   * 
   * The configurations of the edge node pool.
   * 
   * @deprecated
   */
  interconnectConfig?: NodepoolInterconnectConfig;
  /**
   * @remarks
   * The network mode of the edge node pool. This parameter is valid only for edge node pools. Valid values:
   * 
   * - `basic`: basic mode.
   * 
   * - `private`: dedicated mode. This mode is supported in clusters of Kubernetes 1.22 and later.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The Kubernetes configurations for the nodes.
   */
  kubernetesConfig?: NodepoolKubernetesConfig;
  /**
   * @remarks
   * The configurations of the managed node pool.
   */
  management?: NodepoolManagement;
  /**
   * @remarks
   * 边缘节点池允许容纳的最大节点数量，该参数大于等于 0。0 表示无额外限制（仅受限于集群整体可以容纳的节点数，节点池本身无额外限制）。边缘节点池该参数值往往大于 0；ess 类型节点池和默认的 edge 类型节点池该参数值为 0。
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * 节点组件列表。
   */
  nodeComponents?: NodepoolNodeComponents[];
  /**
   * @remarks
   * 节点配置。
   */
  nodeConfig?: NodepoolNodeConfig;
  /**
   * @remarks
   * The configurations of the node pool.
   */
  nodepoolInfo?: NodepoolNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group.
   */
  scalingGroup?: NodepoolScalingGroup;
  /**
   * @remarks
   * The configurations of the confidential computing node pool.
   */
  teeConfig?: NodepoolTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      count: 'count',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      maxNodes: 'max_nodes',
      nodeComponents: 'node_components',
      nodeConfig: 'node_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: NodepoolAutoScaling,
      count: 'number',
      interconnectConfig: NodepoolInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: NodepoolKubernetesConfig,
      management: NodepoolManagement,
      maxNodes: 'number',
      nodeComponents: { 'type': 'array', 'itemType': NodepoolNodeComponents },
      nodeConfig: NodepoolNodeConfig,
      nodepoolInfo: NodepoolNodepoolInfo,
      scalingGroup: NodepoolScalingGroup,
      teeConfig: NodepoolTeeConfig,
    };
  }

  validate() {
    if(this.autoScaling && typeof (this.autoScaling as any).validate === 'function') {
      (this.autoScaling as any).validate();
    }
    if(this.interconnectConfig && typeof (this.interconnectConfig as any).validate === 'function') {
      (this.interconnectConfig as any).validate();
    }
    if(this.kubernetesConfig && typeof (this.kubernetesConfig as any).validate === 'function') {
      (this.kubernetesConfig as any).validate();
    }
    if(this.management && typeof (this.management as any).validate === 'function') {
      (this.management as any).validate();
    }
    if(Array.isArray(this.nodeComponents)) {
      $dara.Model.validateArray(this.nodeComponents);
    }
    if(this.nodeConfig && typeof (this.nodeConfig as any).validate === 'function') {
      (this.nodeConfig as any).validate();
    }
    if(this.nodepoolInfo && typeof (this.nodepoolInfo as any).validate === 'function') {
      (this.nodepoolInfo as any).validate();
    }
    if(this.scalingGroup && typeof (this.scalingGroup as any).validate === 'function') {
      (this.scalingGroup as any).validate();
    }
    if(this.teeConfig && typeof (this.teeConfig as any).validate === 'function') {
      (this.teeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

