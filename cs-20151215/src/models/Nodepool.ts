// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { DiskInit } from "./DiskInit";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";
import { InstancePatterns } from "./InstancePatterns";
import { KubeletConfig } from "./KubeletConfig";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class NodepoolAutoScaling extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The peak bandwidth of the elastic IP address (EIP). Unit: Mbit/s.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * **[Deprecated]** The billing method of the EIP. Valid values:
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-data-transfer.
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
   * Specifies whether to enable auto scaling. Valid values:
   * - true: enables auto scaling for the node pool.
   * - false: disables auto scaling. If this parameter is set to false, other configuration parameters in auto_scaling do not take effect.
   * Default value: false.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to associate an EIP. Valid values:
   * - true: associates an EIP.
   * - false: does not associate an EIP.
   * Default value: false.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of instances in the auto-scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of instances in the auto-scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  minInstances?: number;
  /**
   * @remarks
   * The auto-scaling type, which is classified by the instance type used for auto scaling. Valid values:
   * - cpu: regular instance.
   * - gpu: GPU-accelerated instance.
   * - gpushare: shared GPU instance.
   * - spot: spot instance.
   * Default value: cpu.
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
   * **[Deprecated]** The network bandwidth of the edge-optimized node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  bandwidth?: number;
  /**
   * @remarks
   * **[Deprecated]** The instance ID of the Cloud Connect Network (CCN) attached to the edge-optimized node pool.
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   * 
   * @deprecated
   */
  ccnId?: string;
  /**
   * @remarks
   * **[Deprecated]** The region of the CCN instance associated with the edge-optimized node pool.
   * 
   * @example
   * cn-shanghai
   * 
   * @deprecated
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * **[Deprecated]** The instance ID of the Cloud Enterprise Network (CEN) attached to the edge-optimized node pool.
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   * 
   * @deprecated
   */
  cenId?: string;
  /**
   * @remarks
   * **[Deprecated]** The subscription duration of the edge-optimized node pool. Unit: months.
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
   * Specifies whether to install CloudMonitor on ECS nodes. After installation, you can view the monitoring information of the created ECS instances in the CloudMonitor console. Enabling this feature is recommended. Valid values:
   * - true: installs CloudMonitor on ECS nodes.
   * - false: does not install CloudMonitor on ECS nodes.
   * Default value: false.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes. The following two policies are supported when the cluster version is 1.12.6 or later:
   * - static: allows you to enhance CPU affinity and exclusivity for pods with specific resource characteristics on the node.
   * - none: uses the default CPU affinity scheme.
   * Default value: none.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The node labels, which are added to the nodes in the Kubernetes cluster.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The node name consists of three parts: prefix + node IP address + suffix.
   * - The prefix and suffix can each consist of one or more parts separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or a digit.
   * - The node IP address is the complete private IP address of the node.
   * The parameter value contains four parts separated by commas. For example, if the parameter is set to the "customized,aliyun,ip,com" string (where "customized" and "ip" are fixed strings, "aliyun" is the prefix, and "com" is the suffix), the node name is aliyun.192.168.xxx.xxx.com.
   * 
   * @example
   * customized,aliyun,ip,com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The container runtime. Valid values:
   * - containerd: recommended. Supported by all cluster versions.
   * - Sandboxed-Container.runv: sandboxed container. Provides higher isolation. Supported by clusters of Kubernetes 1.24 and earlier.
   * - docker: supported by clusters of Kubernetes 1.22 and earlier.
   * Default value: containerd.
   * 
   * This parameter is required.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * The container runtime version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.6.20
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The taint configuration.
   */
  taints?: Taint[];
  /**
   * @remarks
   * The custom data of the node.
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
   * The maximum number of parallel repairs. When a large number of abnormal nodes exist in the node pool, this parameter specifies the maximum number or percentage of nodes that can be repaired at the same time. You can specify a number (such as 5, valid values: 1 to 100000) or a percentage (such as 10%, valid values: 1% to 100%). Default value: 1.
   * 
   * @example
   * 5
   */
  maxParallelRepairingNodes?: string;
  /**
   * @remarks
   * The circuit breaker threshold for self-healing. When the number or percentage of faulty nodes exceeds this threshold, self-healing enters the circuit breaker state and stops initiating new self-healing actions. You can specify a number (such as 10, valid values: 1 to 100000) or a percentage (such as 20%, valid values: 1% to 100%). Default value: 100%.
   * 
   * @example
   * 20%
   */
  maxUnhealthyNodesThreshold?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxParallelRepairingNodes: 'max_parallel_repairing_nodes',
      maxUnhealthyNodesThreshold: 'max_unhealthy_nodes_threshold',
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxParallelRepairingNodes: 'string',
      maxUnhealthyNodesThreshold: 'string',
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
   * Specifies whether to allow automatic kubelet upgrades.
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
   * Specifies whether to allow node restarts.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels that are allowed for automatic repair, separated by commas.
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
   * - true: Enables auto upgrade.
   * - false: Disables auto upgrade.
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
   * The number of surge nodes.
   * 
   * @example
   * 0
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of surge nodes. This parameter and surge are mutually exclusive.
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
  /**
   * @remarks
   * Specifies whether to enable ECS fault detection for node self-healing.
   */
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-repair. This parameter takes effect only when enable is set to true. Valid values:
   * - true: enables auto-repair.
   * - false: disables auto-repair.
   * 
   * @example
   * false
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto-repair policy for nodes.
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
   * Specifies whether to automatically repair Common Vulnerabilities and Exposures (CVE).
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The policy for automatic CVE repair.
   */
  autoVulFixPolicy?: NodepoolManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the node drift capability. This feature is only supported by smart managed node pools and is enabled by default. Regular node pools do not support this feature.
   */
  driftEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool. Valid values:
   * - true: Enables the managed node pool.
   * - false: Does not enable the managed node pool. Other related configurations take effect only when enable is set to true.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The auto upgrade configuration. This configuration takes effect only when enable is set to true.
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
      driftEnabled: 'drift_enabled',
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
      driftEnabled: 'boolean',
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

export class NodepoolNodeComponentsConfigEnvs extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * LOG_LEVEL
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * info
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class NodepoolNodeComponentsConfig extends $dara.Model {
  /**
   * @remarks
   * The custom node component configuration.
   * 
   * @example
   * {"cpuManagerPolicy":"static"}
   */
  customConfig?: { [key: string]: any };
  /**
   * @remarks
   * The environment variables for the node component.
   */
  envs?: NodepoolNodeComponentsConfigEnvs[];
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
      envs: 'envs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envs: { 'type': 'array', 'itemType': NodepoolNodeComponentsConfigEnvs },
    };
  }

  validate() {
    if(this.customConfig) {
      $dara.Model.validateMap(this.customConfig);
    }
    if(Array.isArray(this.envs)) {
      $dara.Model.validateArray(this.envs);
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
   * The node component configuration.
   */
  config?: NodepoolNodeComponentsConfig;
  /**
   * @remarks
   * The name of the node component.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * The version of the node component.
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
   * The Kubelet parameter settings.
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
   * - ess: Node pool.
   * - edge: Edge node pool.
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

export class NodepoolScalingGroupCpuOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable nested virtualization. Valid values:
   * - disabled: Disables nested virtualization.
   * - enabled: Enables nested virtualization.
   * 
   * @example
   * enabled
   */
  nestedVirtualization?: string;
  static names(): { [key: string]: string } {
    return {
      nestedVirtualization: 'nested_virtualization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nestedVirtualization: 'string',
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
   * The ID of the private pool.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private pool, which specifies the capacity options of the private pool for instance startup. After an elasticity assurance or capacity reservation takes effect, a private pool is generated for you to select when you start instances. Valid values:
   * 
   * - `Open`: open mode. The system automatically matches an open private pool. If no matching open private pool is found, the system uses resources from the public pool.
   * 
   * - `Target`: targeted mode. The system uses the specified private pool to start instances. If the specified private pool is unavailable, the instances fail to start.
   * 
   * - `None`: no private pool. The system does not use private pools to start instances.
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
   * The list of private pool IDs, which are the IDs of elasticity assurances or capacity reservations. You can only specify the IDs of private pools in Target mode. Valid values of N: 1 to 20.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool policy used to create instances. Resource pools include private pools generated after elasticity assurances or capacity reservations take effect, as well as the public pool. You can select a resource pool when you start instances. Valid values:
   * PrivatePoolFirst: private pools take precedence. If you select this policy and specify resource_pool_options.private_pool_ids, the specified private pools are preferentially used. If no private pool is specified or the specified private pools have insufficient capacity, the system automatically matches an open private pool. If no matching private pool is found, the system uses the public pool to create instances.
   * PrivatePoolOnly: only private pools are used. If you select this policy, you must specify resource_pool_options.private_pool_ids. If the specified private pools have insufficient capacity, the instances fail to start.
   * None: no resource pool policy is used.
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
   * The instance type of the spot instance.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price for a single instance.
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
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * Specifies whether to enable auto-renewal for the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
   * - true: Enables auto-renewal.
   * - false: Disables auto-renewal.
   * 
   * Default value: true.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal epoch for the node pool. This parameter is required and takes effect only when `instance_charge_type` is set to `PrePaid`.
   * 
   * If `PeriodUnit` is set to `Month`, valid values are 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances when multi_az_policy is set to COST_OPTIMIZED and sufficient spot instances cannot be created due to price or inventory constraints. Valid values:
   * - true: Allows automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * - false: Does not allow automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The CPU configuration options.
   */
  cpuOptions?: NodepoolScalingGroupCpuOptions;
  /**
   * @remarks
   * The data cloud disk configuration for the nodes in the node pool.
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
   * The block device initialization configuration.
   */
  diskInit?: DiskInit[];
  /**
   * @remarks
   * The ID of the custom image. By default, the system-provided image is used.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200904.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the operating system image. This parameter and platform are mutually exclusive. Valid values:
   * - AliyunLinux: Alinux2 image.
   * - AliyunLinux3: Alinux3 image.
   * - AliyunLinux3Arm64: Alinux3 ARM image.
   * - AliyunLinuxUEFI: Alinux2 UEFI image.
   * - CentOS: CentOS image.
   * - Windows: Windows image.
   * - WindowsCore: Windows Core image.
   * - ContainerOS: Container-optimized image.
   * 
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of the nodes in the node pool. Valid values:
   * - PrePaid: Subscription.
   * - PostPaid: Pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metadata access configuration for the ECS instance. This parameter is currently available only to whitelisted users. To use this parameter, submit a ticket.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance properties.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The instance types.
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for public IP addresses. Valid values:
   * 
   * - `PayByBandwidth`: pay-by-bandwidth.
   * - `PayByTraffic`: pay-by-traffic.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth for a public IP address of a node. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must specify this parameter or `login_password`.
   * 
   * > If you create a managed node pool, only `key_pair` is supported.
   * 
   * @example
   * np-key
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether to log on to the created ECS instances as a non-root user.
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The SSH logon password. You must specify this parameter or `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for ECS instances in a multi-zone scaling group. Valid values:
   * 
   * - `PRIORITY`: scales ECS instances based on the priorities of vSwitches that you specify in VSwitchIds.N. If an ECS instance cannot be created in the zone of the highest-priority vSwitch, the system automatically uses the next highest-priority vSwitch to create the ECS instance.
   * 
   * - `COST_OPTIMIZED`: creates ECS instances based on the unit prices of vCPUs in ascending order. If the scaling configuration settings specify multiple instance types and the billing method for spot instances, the system preferentially creates the corresponding spot instances. You can use the `CompensateWithOnDemand` parameter to specify whether the system automatically creates pay-as-you-go instances when spot instances cannot be created due to insufficient resources.
   * 
   *   > `COST_OPTIMIZED` takes effect only when the scaling configuration settings specify multiple instance types or spot instances are selected.
   * 
   * - `BALANCE`: evenly distributes ECS instances across the zones specified in the scaling group. If the instances are unevenly distributed across zones due to insufficient resources, you can call the RebalanceInstances operation to balance the resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than this value, the system preferentially creates pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that exceed the minimum number of pay-as-you-go instances specified by `on_demand_base_capacity`. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of nodes in the node pool. This parameter is required and takes effect only when `instance_charge_type` is set to `PrePaid`. When `period_unit` is set to Month, valid values of `period` are 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 0
   */
  period?: number;
  /**
   * @remarks
   * The subscription period of nodes in the node pool. You must specify this parameter when `instance_charge_type` is set to `PrePaid`.
   * 
   * `Month`: only months are supported.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The operating system distribution. Valid values:
   * 
   * - `CentOS`
   * - `AliyunLinux`
   * - `Windows`
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
   * The private pool options.
   */
  privatePoolOptions?: NodepoolScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The name of the RAM role for worker nodes.
   * >Notice: Only ACK managed clusters of version 1.22 and later support configuring this parameter when you create a node pool.</notice>
   * 
   * @example
   * example-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The list of ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool policy used to create instances. Take note of the following items when you configure this parameter:
   * This parameter takes effect only when you create pay-as-you-go instances.
   * This parameter cannot be configured together with private_pool_options.match_criteria or private_pool_options.id.
   */
  resourcePoolOptions?: NodepoolScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling group mode. Valid values:
   * 
   * - `release`: standard pattern. The scaling group scales instances by creating and releasing ECS instances based on the usage of the requested resources.
   * - `recycle`: swift pattern. The scaling group scales instances by creating, stopping, and starting ECS instances to accelerate subsequent scaling operations. When an instance is stopped, you are not charged for compute resources, but you are still charged for storage resources, except for instances with local disks.
   * 
   * Default value: `release`.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The ID of the security group to which the node pool belongs. You must specify this parameter or `security_group_ids`. We recommend that you specify `security_group_ids`.
   * 
   * @example
   * sg-2zeihch86ooz9io4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of security group IDs. You must specify this parameter or `security_group_id`. We recommend that you specify `security_group_ids`. If you specify both `security_group_id` and `security_group_ids`, `security_group_ids` takes precedence.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The number of active instance types. The scaling group evenly creates spot instances based on the most cost-effective instance types. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable spot instance replenishment. After this feature is enabled, when the scaling group receives a system message indicating that a spot instance will be reclaimed, the scaling group attempts to create a new instance to replace the spot instance to be reclaimed. Valid values:
   * 
   * - `true`: enables spot instance replenishment.
   * - `false`: disables spot instance replenishment.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The maximum price configuration for a single spot instance of a specific instance type in the current marketplace.
   */
  spotPriceLimit?: NodepoolScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The type of spot instance. Valid values:
   * - NoSpot: non-spot instance.
   * - SpotWithPriceLimit: spot instance with a maximum price.
   * - SpotAsPriceGo: spot instance whose price is automatically set by the system based on the current market price.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable bursting for the system disk of the node. Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * This parameter is supported only when `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the system disk. If the system disk cannot be created by using the disk category with the highest priority, the system automatically tries the next disk category. Valid values:
   * 
   * - cloud: basic cloud disk.
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * - `cloud_efficiency`: ultra disk.
   * - `cloud_ssd`: standard SSD.
   * - `cloud_essd`: ESSD.
   * - `cloud_auto`: ESSD AutoPL cloud disk.
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
   * The encryption algorithm used for the system disk. Valid value: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * - true: encrypts the system disk.
   * - false: does not encrypt the system disk.
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used for the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the system disk. This parameter takes effect only for ESSDs. Valid values:
   * 
   * - PL0: delivers medium maximum concurrent I/O performance and relatively stable read/write latency.
   * - PL1: delivers medium maximum concurrent I/O performance and relatively stable read/write latency.
   * - PL2: delivers high maximum concurrent I/O performance and stable read/write latency.
   * - PL3: delivers ultra-high maximum concurrent I/O performance and extremely stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS for the system cloud disk of the node. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}. Baseline performance = min{1,800 + 50 × Capacity, 50,000}. This parameter is supported only when `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system cloud disk for the node. Unit: GiB. Valid values: 40 to 500.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags to add to ECS instances only. Tag keys must be unique and can be up to 128 characters in length. Neither tag keys nor tag values can start with "aliyun" or "acs:", or contain "https://" or "http://".
   */
  tags?: NodepoolScalingGroupTags[];
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      compensateWithOnDemand: 'compensate_with_on_demand',
      cpuOptions: 'cpu_options',
      dataDisks: 'data_disks',
      deploymentsetId: 'deploymentset_id',
      desiredSize: 'desired_size',
      diskInit: 'disk_init',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instanceMetadataOptions: 'instance_metadata_options',
      instancePatterns: 'instance_patterns',
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
      cpuOptions: NodepoolScalingGroupCpuOptions,
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentsetId: 'string',
      desiredSize: 'number',
      diskInit: { 'type': 'array', 'itemType': DiskInit },
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instanceMetadataOptions: InstanceMetadataOptions,
      instancePatterns: { 'type': 'array', 'itemType': InstancePatterns },
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
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.diskInit)) {
      $dara.Model.validateArray(this.diskInit);
    }
    if(this.instanceMetadataOptions && typeof (this.instanceMetadataOptions as any).validate === 'function') {
      (this.instanceMetadataOptions as any).validate();
    }
    if(Array.isArray(this.instancePatterns)) {
      $dara.Model.validateArray(this.instancePatterns);
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
   * Specifies whether the node pool is a confidential computing node pool.
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
   * The auto-scaling node pool configuration.
   */
  autoScaling?: NodepoolAutoScaling;
  /**
   * @remarks
   * **[Deprecated]** Use desired_size instead. The number of nodes in the node pool.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @remarks
   * **[Deprecated]** The configuration of the edge node pool.
   * 
   * @deprecated
   */
  interconnectConfig?: NodepoolInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter is valid only when type is set to edge. Valid values:
   * - basic: basic.
   * - private: dedicated. Supported in Kubernetes 1.22 and later.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The cluster-related configuration.
   */
  kubernetesConfig?: NodepoolKubernetesConfig;
  /**
   * @remarks
   * The managed node pool configuration.
   */
  management?: NodepoolManagement;
  /**
   * @remarks
   * The maximum number of nodes that the edge node pool can accommodate. The value must be greater than or equal to 0. A value of 0 indicates no extra limit, meaning the node pool is only limited by the maximum number of nodes that the entire cluster can accommodate. This value is usually greater than 0 for edge node pools. For ess node pools and default edge node pools, this value is 0.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * The list of node components.
   */
  nodeComponents?: NodepoolNodeComponents[];
  /**
   * @remarks
   * The node configuration.
   */
  nodeConfig?: NodepoolNodeConfig;
  /**
   * @remarks
   * The node pool configuration.
   */
  nodepoolInfo?: NodepoolNodepoolInfo;
  /**
   * @remarks
   * The scaling group configuration of the node pool.
   */
  scalingGroup?: NodepoolScalingGroup;
  /**
   * @remarks
   * The configuration of the confidential computing node pool.
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

