// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { DiskInit } from "./DiskInit";
import { InstancePatterns } from "./InstancePatterns";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class ModifyClusterNodePoolRequestAutoScaling extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Use internet_charge_type and internet_max_bandwidth_out instead. The peak bandwidth of the EIP.
   * 
   * Valid values: [1, 100]. Unit: Mbit/s.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * **[Deprecated]** Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * The billing method of the EIP. Valid values:
   * 
   * - `PayByBandwidth`: Pay-by-bandwidth.
   * - `PayByTraffic`: Pay-by-traffic.
   * 
   * Default value: `PayByBandwidth`.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling. Valid values:
   * 
   * - `true`: Enables the auto scaling feature for the node pool. When the capacity planning of the cluster cannot meet the scheduling requirements of application pods, ACK automatically scales node resources based on the configured minimum and maximum instance counts. Clusters of version 1.24 or later use instant node scaling by default. Clusters of versions earlier than 1.24 use auto scaling by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: Disables auto scaling. ACK adjusts the number of nodes in the node pool based on the configured desired node count and maintains the node count at the desired value.
   * 
   * When this parameter is set to false, other configuration parameters in `auto_scaling` do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * - `true`: Associates an EIP.
   * - `false`: Does not associate an EIP.
   * 
   * Default value: `false`.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of scalable instances in the node pool, excluding your existing instances. This parameter takes effect only when `enable=true`.
   * 
   * Valid values: [min_instances, 2000]. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of scalable instances in the node pool, excluding your existing instances. This parameter takes effect only when `enable=true`.
   * 
   * Valid values: [0, max_instances]. Default value: 0.
   * 
   * > - If the minimum number of instances is not 0, the corresponding number of ECS instances are automatically created after the scaling group takes effect.
   * > - Set the maximum number of instances to a value that is not less than the current number of nodes in the node pool. Otherwise, nodes in the node pool are scaled in after the elastic scaling feature takes effect.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The auto scaling type, classified by instance type. Valid values:
   * 
   * - `cpu`: Regular instance type.
   * - `gpu`: GPU instance type.
   * - `gpushare`: GPU sharing type.
   * - `spot`: Spot instance type.
   * 
   * Default value: `cpu`.
   * 
   * @example
   * cpu
   * 
   * @deprecated
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

export class ModifyClusterNodePoolRequestEfloNodeGroup extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic addition of the Lingjun AI Computing Service node pool. (Not effective)
   */
  autoAttachEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      autoAttachEnabled: 'auto_attach_enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAttachEnabled: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After installation, you can view monitoring information about the created ECS instances in the CloudMonitor console. We recommend that you enable this feature. Valid values:
   * 
   * - `true`: Installs the CloudMonitor agent on ECS nodes.
   * - `false`: Does not install the CloudMonitor agent on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes. The following two policies are supported for clusters of version 1.12.6 and later:
   * 
   * - `static`: Allows pods with certain resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * - `none`: Enables the existing default CPU affinity scheme.
   * 
   * Default value: `none`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The node labels. You can add labels to the nodes in the Kubernetes cluster. Label definition rules:
   * 
   * - Labels are case-sensitive key-value pairs. You can set up to 20 labels.
   * - Label keys must be unique and can be up to 64 characters in length. Label values can be empty and can be up to 128 characters in length. Label keys and label values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name parameter. A node name consists of three parts: prefix + node IP + suffix.
   * 
   * Both the prefix and suffix can consist of one or more parts separated by ".". Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit. The node IP is the complete private IP address of the node.
   * 
   * The parameter contains four parts separated by commas. For example, if you pass in the string "customized,aliyun,ip,com" (where "customized" and "ip" are fixed strings, "aliyun" is the prefix, and "com" is the suffix), the node name is: aliyun.192.168.xxx.xxx.com.
   * 
   * @example
   * customized,aliyun,ip,com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The pre-user data of the instance. Before a node joins the cluster, the specified pre-user data script is run. For more information, see [User data scripts](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  preUserData?: string;
  /**
   * @remarks
   * The container runtime name. ACK supports the following three container runtimes:
   * 
   * - containerd: Recommended. Supported by all cluster versions.
   * - Sandboxed-Container.runv: Sandboxed container that provides higher isolation. Supported by clusters of version 1.31 and earlier.
   * - docker: No longer maintained. Supported by clusters of version 1.22 and earlier.
   * 
   * Default value: containerd.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * The container runtime version.
   * 
   * @example
   * 1.6.38
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The taint configuration for nodes.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the nodes added after the scale-out are unschedulable.
   * 
   * - true: Unschedulable.
   * 
   * - false: Schedulable.
   * 
   * @example
   * false
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The instance user data. After a node joins the cluster, the specified instance user data script is run. For more information, see [User data scripts](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      nodeNameMode: 'node_name_mode',
      preUserData: 'pre_user_data',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      unschedulable: 'unschedulable',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      nodeNameMode: 'string',
      preUserData: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
      unschedulable: 'boolean',
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

export class ModifyClusterNodePoolRequestManagementAutoRepairPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether manual approval is required for node repair.
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * The ID of the auto repair policy.
   * 
   * @example
   * r-xxxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * The maximum number of parallel repairs. When a large number of unhealthy nodes exist in the node pool, this specifies the maximum number or percentage of nodes that can be repaired simultaneously. You can specify a quantity (such as 5, valid range: 1 to 100000) or a percentage (such as 10%, valid range: 1% to 100%). Default value on the backend: 1.
   * 
   * @example
   * 5
   */
  maxParallelRepairingNodes?: string;
  /**
   * @remarks
   * The self-healing circuit breaker condition. When the number or percentage of faulty nodes exceeds this threshold, self-healing enters a circuit breaker state and stops initiating new repair actions. You can specify a quantity (such as 10, valid range: 1 to 100000) or a percentage (such as 20%, valid range: 1% to 100%). Default circuit breaker condition on the backend: 100%.
   * 
   * @example
   * 20%
   */
  maxUnhealthyNodesThreshold?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when `auto_repair=true`. Valid values:
   * 
   * - `true`: Allows node restarts.
   * - `false`: Does not allow node restarts.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      approvalRequired: 'approval_required',
      autoRepairPolicyId: 'auto_repair_policy_id',
      maxParallelRepairingNodes: 'max_parallel_repairing_nodes',
      maxUnhealthyNodesThreshold: 'max_unhealthy_nodes_threshold',
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRequired: 'boolean',
      autoRepairPolicyId: 'string',
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

export class ModifyClusterNodePoolRequestManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow automatic kubelet upgrade. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: Allows automatic kubelet upgrade.
   * - `false`: Does not allow automatic kubelet upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether to allow automatic operating system upgrade. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: Allows automatic operating system upgrade.
   * - `false`: Does not allow automatic operating system upgrade.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether to allow automatic runtime upgrade. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: Allows automatic runtime upgrade.
   * - `false`: Does not allow automatic runtime upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * false
   */
  autoUpgradeRuntime?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeKubelet: 'auto_upgrade_kubelet',
      autoUpgradeOs: 'auto_upgrade_os',
      autoUpgradeRuntime: 'auto_upgrade_runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeKubelet: 'boolean',
      autoUpgradeOs: 'boolean',
      autoUpgradeRuntime: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestManagementAutoVulFixPolicy extends $dara.Model {
  /**
   * @remarks
   * The packages to exclude during vulnerability fix.
   * 
   * Default value: `kernel`.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when `auto_vul_fix=true`. Valid values:
   * - `true`: Allows node restarts.
   * - `false`: Does not allow node restarts.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels allowed for automatic fix, separated by commas. Example: `asap,later`. Supported vulnerability levels:
   * 
   * - `asap`: high
   * - `later`: medium
   * - `nntf`: low
   * 
   * Default value: `asap`.
   * 
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      excludePackages: 'exclude_packages',
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePackages: 'string',
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

export class ModifyClusterNodePoolRequestManagementUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Use the `auto_upgrade` parameter at the upper level instead.
   * 
   * Specifies whether to enable automatic upgrade:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes.
   * 
   * Valid values: [1,1000\\]
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of extra nodes. Specify either this parameter or `surge_percentage`.
   * 
   * Nodes become unavailable during an upgrade. You can create extra nodes to compensate for the cluster load.
   * 
   * > The number of extra nodes should not exceed the current number of nodes.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. Specify either this parameter or `surge`.
   * 
   * Number of extra nodes = percentage of extra nodes × number of nodes. For example, if the percentage of extra nodes is set to 50% and 6 nodes exist, the number of extra nodes = 50% × 6 = 3.
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

export class ModifyClusterNodePoolRequestManagement extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable ECS fault detection for node self-healing.
   */
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically repair nodes. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: Enables automatic repair.
   * 
   * - `false`: Disables automatic repair.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto repair node policy.
   */
  autoRepairPolicy?: ModifyClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to automatically upgrade nodes. This parameter takes effect only when `enable=true`.
   * - `true`: Enables automatic upgrade.
   * - `false`: Disables automatic upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto upgrade policy.
   */
  autoUpgradePolicy?: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to automatically fix CVE vulnerabilities. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: Allows automatic CVE fixes.
   * - `false`: Does not allow automatic CVE fixes.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The auto CVE fix policy.
   */
  autoVulFixPolicy?: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable node rotation. Only intelligent managed node pools support this feature, and it is enabled by default. Common node pools do not support this feature.
   */
  driftEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool. Valid values:
   * 
   * - `true`: Enables the managed node pool.
   * - `false`: Disables the managed node pool. Other related configurations take effect only when `enable=true`.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Use the `auto_upgrade` parameter at the upper level instead.
   * 
   * The auto upgrade configuration. This parameter takes effect only when `enable=true`.
   * 
   * @deprecated
   */
  upgradeConfig?: ModifyClusterNodePoolRequestManagementUpgradeConfig;
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
      autoRepairPolicy: ModifyClusterNodePoolRequestManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy,
      driftEnabled: 'boolean',
      enable: 'boolean',
      upgradeConfig: ModifyClusterNodePoolRequestManagementUpgradeConfig,
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

export class ModifyClusterNodePoolRequestNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The node pool name.
   * 
   * Naming rules: The name must be 1 to 63 characters in length and can contain digits, Chinese characters, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID of the node pool. Instances scaled out from the node pool belong to this resource group.
   * 
   * A resource can belong to only one resource group. You can map resource groups to concepts such as projects, applications, or organizations based on different business scenarios.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      resourceGroupId: 'resource_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The private node pool ID. When `match_criteria` is set to `Target`, you must specify the private pool ID.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private node pool type, which specifies the private pool capacity option for launching instances. After an elasticity assurance or capacity reservation takes effect, a private pool is generated for instance launches. Valid values:
   * - `Open`: Open mode. The system automatically matches open private pool capacity. If no matching private pool capacity is available, public pool resources are used.
   * - `Target`: Targeted mode. The instance is launched using the specified private pool capacity. If the specified private pool capacity is unavailable, the instance fails to launch.
   * - `None`: No private pool. The instance launch does not use private pool capacity.
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

export class ModifyClusterNodePoolRequestScalingGroupResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of private pool IDs, which are elasticity assurance IDs or capacity reservation IDs. Only Target mode private pool IDs can be specified. Valid values of N: 1 to 20.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool strategy used when creating instances. Resource pools include private pools generated after an elasticity assurance or capacity reservation takes effect, as well as public pools, for instance launches. Valid values:
   * PrivatePoolFirst: private pool first. When this strategy is selected, if resouce_pool_options.private_pool_ids is specified, the specified private pools are used first. If no private pool is specified or the specified private pool capacity is insufficient, open private pools are automatically matched. If no matching private pool is available, public pool resources are used to create instances.
   * PrivatePoolOnly: private pool only. When this strategy is selected, you must specify resouce_pool_options.private_pool_ids. If the specified private pool capacity is insufficient, the instance fails to launch.
   * None: no resource pool strategy is used.
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

export class ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit extends $dara.Model {
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
   * The price limit per instance.
   * 
   * <props="china">Unit: CNY/hour.
   * 
   * 
   * 
   * <props="intl">Unit: USD/hour.
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

export class ModifyClusterNodePoolRequestScalingGroup extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for nodes. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Auto-renewal is enabled.
   * - `false`: Auto-renewal is disabled.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for a single renewal. Valid values:
   * - When PeriodUnit=Week: 1, 2, and 3.
   * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * When `multi_az_policy` is set to `COST_OPTIMIZED`, specifies whether to allow the system to automatically create pay-as-you-go instances to meet the required number of ECS instances if spot instances cannot be created due to cost or inventory reasons. Valid values:
   * 
   * - `true`: Allows the system to automatically create pay-as-you-go instances to meet the required number of ECS instances.
   * - `false`: Does not allow the system to automatically create pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The data cloud disk configurations for nodes. Valid values: 0 to 10. You can attach up to 10 data cloud disks.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set to which the ECS instances created by the node pool belong. This setting takes effect only for new nodes. The deployment set of existing nodes is not changed.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The desired number of nodes in the node pool.
   * 
   * The total number of nodes that the node pool should maintain. Configure at least 2 nodes to ensure that cluster components run properly. You can scale the node pool in or out by adjusting the desired number of nodes.
   * 
   * If you do not need to create nodes, set this parameter to 0 and manually adjust the value later to add nodes.
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
   * Specifies whether to enable high-density cloud disk mode. This is supported only when the node pool uses instance types. When enabled, the total number of system cloud disks and data cloud disks does not exceed the high-density cloud disk count supported by the instance type.
   * 
   * @example
   * false
   */
  enableHighDensityMode?: boolean;
  /**
   * @remarks
   * The custom image ID. You can call `DescribeKubernetesVersionMetadata` to query the images supported by the system. By default, the latest system image is used.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system distribution type. We recommend that you use this field to specify the node operating system. Valid values:
   * 
   * - `AliyunLinux`: Alinux2 image.
   * - `AliyunLinuxSecurity`: Alinux2 UEFI image.
   * - `AliyunLinux3`: Alinux3 image.
   * - `AliyunLinux3Arm64`: Alinux3 ARM image.
   * - `AliyunLinux3Security`: Alinux3 UEFI image.
   * - `CentOS`: CentOS image.
   * - `Windows`: Windows image.
   * - `WindowsCore`: WindowsCore image.
   * - `ContainerOS`: container-optimized image.
   * - `AliyunLinux3ContainerOptimized`: Alinux3 container-optimized image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of nodes in the node pool. Valid values:
   * 
   * - `PrePaid`: subscription.
   * - `PostPaid`: pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance attribute configuration.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of node instance types. You can select multiple instance types as alternatives. When each node is created, the system attempts to purchase instances starting from the first instance type until the creation succeeds. The actual instance type purchased may vary depending on inventory availability.
   * 
   * Number of supported instance types: [1,10].
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for public IP addresses. Valid values:
   * 
   * - `PayByBandwidth`: billed by fixed bandwidth.
   * - `PayByTraffic`: billed by traffic usage.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth for nodes, in Mbps (Mega bit per second). Valid values: [1,100\\].
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The key pair name. Specify either this parameter or `login_password`. If the node pool is a managed node pool, only `key_pair` is supported.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. Specify either this parameter or `key_pair`. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The multi-zone scaling policy for ECS instances in the scaling group. Valid values:
   * 
   * - `PRIORITY`: scales in or out based on the vSwitches (VSwitchIds.N) that you define. When ECS instances cannot be created in the zone of the vSwitch with the highest priority, the system automatically uses the vSwitch with the next highest priority to create ECS instances.
   * 
   * - `COST_OPTIMIZED`: attempts to create instances in ascending order of vCPU unit price. When the scaling configuration sets multiple instance types with the spot billable methods, spot instances are created first. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically attempt to create pay-as-you-go instances when spot instances cannot be created due to insufficient inventory.
   * 
   *   > `COST_OPTIMIZED` takes effect only when the scaling configuration sets multiple instance types or uses spot instances.
   * 
   * - `BALANCE`: evenly allocates ECS instances across the multiple active zones specified in the scaling group. If the zones become unbalanced due to insufficient inventory, you can call the `RebalanceInstances` API operation to rebalance resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. Valid values: [0,1000\\]. Pay-as-you-go instances are created first when the number of pay-as-you-go instances is less than this value.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the excess instances after the minimum number of pay-as-you-go instances (`on_demand_base_capacity`) is met. Valid values: [0,100\\].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of nodes in the node pool. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - When `period_unit=Week`, valid values of `period`: 1, 2, 3, and 4.
   * - When `period_unit=Month`, valid values of `period`: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of nodes in the node pool. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - `Month`: the billing cycle is measured in months.
   * - `Week`: the billing cycle is measured in weeks.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the `image_type` parameter instead.
   * 
   * The operating system platform. Valid values:
   * 
   * - `AliyunLinux`
   * - `CentOS`
   * - `Windows`
   * - `WindowsCore`
   * 
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  platform?: string;
  /**
   * @remarks
   * The private node pool configuration.
   */
  privatePoolOptions?: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The list of ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool strategy used when creating instances. After you set this parameter, note the following:
   * This parameter takes effect only when creating pay-as-you-go instances.
   * This parameter cannot be set together with private_pool_options.match_criteria or private_pool_options.id.
   */
  resourcePoolOptions?: ModifyClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling group mode. Valid values:
   * 
   * - `release`: standard mode. Scales in or out by creating or releasing ECS instances based on resource usage.
   * - `recycle`: swift mode. Scales in or out by creating, stopping, or starting ECS instances, which improves the speed of subsequent scaling operations. Stopped instances are not charged for compute resources, but storage fees still apply, except for instances with local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The list of security group IDs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The number of available instance types. The scaling group creates spot instances of multiple types at the lowest cost. Valid values: [1,10\\].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable spot instance supplementation. If enabled, when a system message is received indicating that a spot instance will be reclaimed, the scaling group attempts to create a new instance to replace the spot instance that is to be reclaimed. Valid values:
   * 
   * - `true`: Enables spot instance supplementation.
   * - `false`: Disables spot instance supplementation.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The price limit configurations for spot instances.
   */
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The type of spot instance. Valid values:
   * 
   * - `NoSpot`: non-spot instance.
   * - `SpotWithPriceLimit`: spot instance with a price limit.
   * - `SpotAsPriceGo`: spot instance priced at the market price at the time of purchase.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable burst (performance bursting) for the node system cloud disk. Valid values:
   * - true: Enabled. After burst is enabled, the cloud disk temporarily improves its performance to handle sudden data read/write pressure from fluctuating workloads until the workload returns to a steady state.
   * - false: Disabled.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The multiple cloud disk types for the system cloud disk. If the cloud disk type with a higher priority cannot be used, the system automatically attempts the next priority cloud disk type to create the system cloud disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The type of the node system cloud disk. Valid values:
   * - `cloud_efficiency`: ultra cloud disk.
   * - `cloud_ssd`: standard SSD.
   * - `cloud_essd`: ESSD.
   * - `cloud_auto`: ESSD AutoPL cloud disk.
   * - `cloud_essd_entry`: ESSD Entry cloud disk.
   * 
   * Default value: `cloud_efficiency`.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The encryption algorithm used by the system cloud disk. Valid value: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system cloud disk. Valid values:
   * 
   * - true: Encrypted.
   * 
   * - false: Not encrypted.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID used by the system cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the node system cloud disk. This parameter takes effect only for ESSD cloud disks. The performance level varies based on the cloud disk size. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * - PL0: moderate maximum concurrent I/O performance with relatively stable read/write latency.
   * - PL1: moderate maximum concurrent I/O performance with relatively stable read/write latency.
   * - PL2: high maximum concurrent I/O performance with stable read/write latency.
   * - PL3: ultra-high maximum concurrent I/O performance with extremely stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the node system cloud disk.
   * 
   * Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the node system cloud disk, in GiB.
   * 
   * Valid values: [20,2048\\].
   * 
   * The value of this parameter must be greater than or equal to max{20, ImageSize}.
   * 
   * Default value: max{40, image size corresponding to the ImageId parameter}.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The snapshot policy for the system cloud disk.
   * 
   * @example
   * sp-0jl6xnmme8v7o935****
   */
  systemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * The tags that are added only to ECS instances.
   * 
   * Tag keys cannot be duplicated and can be up to 128 characters in length. Tag keys and tag values cannot start with "aliyun" or "acs:", or contain "https://" or "http://".
   */
  tags?: Tag[];
  /**
   * @remarks
   * The list of vSwitch IDs. Valid values: 1 to 8.
   * 
   * > To ensure high availability, select vSwitches in different zones.
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
      enableHighDensityMode: 'enable_high_density_mode',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instancePatterns: 'instance_patterns',
      instanceTypes: 'instance_types',
      internetChargeType: 'internet_charge_type',
      internetMaxBandwidthOut: 'internet_max_bandwidth_out',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      privatePoolOptions: 'private_pool_options',
      rdsInstances: 'rds_instances',
      resourcePoolOptions: 'resource_pool_options',
      scalingPolicy: 'scaling_policy',
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
      systemDiskSnapshotPolicyId: 'system_disk_snapshot_policy_id',
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
      enableHighDensityMode: 'boolean',
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instancePatterns: { 'type': 'array', 'itemType': InstancePatterns },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPair: 'string',
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      privatePoolOptions: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions,
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      resourcePoolOptions: ModifyClusterNodePoolRequestScalingGroupResourcePoolOptions,
      scalingPolicy: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit },
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
      systemDiskSnapshotPolicyId: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
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

export class ModifyClusterNodePoolRequestTeeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable confidential computing for the cluster. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * Default value: `false`.
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

export class ModifyClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The auto scaling configuration.
   */
  autoScaling?: ModifyClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * Specifies whether to enable concurrency.
   * 
   * @example
   * true
   */
  concurrency?: boolean;
  /**
   * @remarks
   * The Lingjun AI Computing Service node pool configuration. (Not effective)
   */
  efloNodeGroup?: ModifyClusterNodePoolRequestEfloNodeGroup;
  /**
   * @remarks
   * The cluster-related configuration.
   */
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The managed node pool configuration.
   */
  management?: ModifyClusterNodePoolRequestManagement;
  /**
   * @remarks
   * The node pool configuration.
   */
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The scaling group configuration of the node pool.
   */
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The confidential computing cluster configuration.
   */
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
  /**
   * @remarks
   * Specifies whether to synchronously update node labels and taints.
   * 
   * @example
   * true
   */
  updateNodes?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      concurrency: 'concurrency',
      efloNodeGroup: 'eflo_node_group',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      teeConfig: 'tee_config',
      updateNodes: 'update_nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: ModifyClusterNodePoolRequestAutoScaling,
      concurrency: 'boolean',
      efloNodeGroup: ModifyClusterNodePoolRequestEfloNodeGroup,
      kubernetesConfig: ModifyClusterNodePoolRequestKubernetesConfig,
      management: ModifyClusterNodePoolRequestManagement,
      nodepoolInfo: ModifyClusterNodePoolRequestNodepoolInfo,
      scalingGroup: ModifyClusterNodePoolRequestScalingGroup,
      teeConfig: ModifyClusterNodePoolRequestTeeConfig,
      updateNodes: 'boolean',
    };
  }

  validate() {
    if(this.autoScaling && typeof (this.autoScaling as any).validate === 'function') {
      (this.autoScaling as any).validate();
    }
    if(this.efloNodeGroup && typeof (this.efloNodeGroup as any).validate === 'function') {
      (this.efloNodeGroup as any).validate();
    }
    if(this.kubernetesConfig && typeof (this.kubernetesConfig as any).validate === 'function') {
      (this.kubernetesConfig as any).validate();
    }
    if(this.management && typeof (this.management as any).validate === 'function') {
      (this.management as any).validate();
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

