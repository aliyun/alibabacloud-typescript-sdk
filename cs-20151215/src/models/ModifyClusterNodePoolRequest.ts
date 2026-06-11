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
   * This parameter is deprecated. Use internet_charge_type and internet_max_bandwidth_out instead.
   * The peak bandwidth of the EIP.
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
   * This parameter is deprecated. Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * The billing method of the EIP. Valid values:
   * 
   * - `PayByBandwidth`: pay-by-bandwidth.
   * 
   * - `PayByTraffic`: pay-by-traffic.
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
   * - `true`: Enables auto scaling for the node pool. If the resources in the cluster do not meet the scheduling requirements of application pods, ACK automatically scales the nodes based on the configured minimum and maximum numbers of instances. For clusters of Kubernetes 1.24 or later, instant elasticity is enabled by default. For clusters of a Kubernetes version earlier than 1.24, node autoscaling is enabled by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: Disables auto scaling. ACK adjusts the number of nodes in the node pool to the value of \\`desired_size\\` and keeps the number of nodes unchanged.
   * 
   * If this parameter is set to false, other parameters in `auto_scaling` do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated. Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * - `true`: associates an EIP.
   * 
   * - `false`: does not associate an EIP.
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
   * The maximum number of instances that can be created in the node pool. This parameter does not include existing instances. This parameter takes effect only when `enable=true`.
   * 
   * Valid values: [min_instances, 2000]. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of instances that can be created in the node pool. This parameter does not include existing instances. This parameter takes effect only when `enable=true`.
   * 
   * Valid values: [0, max_instances]. Default value: 0.
   * 
   * > - If the minimum number of instances is not 0, the specified number of ECS instances are automatically created after the scaling group is created.
   * >
   * > - Set the maximum number of instances to a value that is not smaller than the current number of nodes in the node pool. Otherwise, a scale-in event is triggered after auto scaling is enabled.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The type of auto scaling. This parameter is specified based on the instance type. Valid values:
   * 
   * - `cpu`: regular instance.
   * 
   * - `gpu`: GPU-accelerated instance.
   * 
   * - `gpushare`: shared GPU-accelerated instance.
   * 
   * - `spot`: spot instance.
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

export class ModifyClusterNodePoolRequestKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install Cloud Monitor on the ECS nodes. After Cloud Monitor is installed, you can view the monitoring information of the created ECS instances in the Cloud Monitor console. We recommend that you enable this feature. Valid values:
   * 
   * - `true`: installs Cloud Monitor on ECS nodes.
   * 
   * - `false`: does not install Cloud Monitor on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of the node. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:
   * 
   * - `static`: allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
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
   * The labels that you want to add to the nodes. The following rules apply:
   * 
   * - A label is a case-sensitive key-value pair. You can add up to 20 labels.
   * 
   * - The key must be unique and can be up to 64 characters in length. The value can be empty and can be up to 128 characters in length. The key and the value cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name parameter. A node name consists of three parts: a prefix, the node IP address, and a suffix.
   * 
   * The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or a digit. The node IP address is the complete private IP address of the node.
   * 
   * The parameter consists of four parts that are separated by commas. For example, if you pass the "customized,aliyun,ip,com" string (where "customized" and "ip" are fixed strings, "aliyun" is the prefix, and "com" is the suffix), the node name is aliyun.192.168.xxx.xxx.com.
   * 
   * @example
   * customized,aliyun,ip,com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The pre-customized instance data. Before a node is added to the cluster, the specified pre-customized instance data script is run. For more information, see [User data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  preUserData?: string;
  /**
   * @remarks
   * The name of the container runtime. ACK supports the following three container runtimes.
   * 
   * - containerd: We recommend that you use this runtime. It is supported by all cluster versions.
   * 
   * - Sandboxed-Container.runv: a sandboxed container that provides higher isolation. It is supported by clusters of Kubernetes 1.31 and earlier.
   * 
   * - docker: This runtime is no longer maintained. It is supported by clusters of Kubernetes 1.22 and earlier.
   * 
   * Default value: containerd.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * The version of the container runtime.
   * 
   * @example
   * 1.6.38
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The node taint configurations.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the scaled-out nodes are unschedulable.
   * 
   * - true: The nodes are unschedulable.
   * 
   * - false: The nodes are schedulable.
   * 
   * @example
   * false
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The instance user data. After a node is added to the cluster, the specified user data script is run. For more information, see [User data](https://help.aliyun.com/document_detail/49121.html).
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
   * Specifies whether to allow node restart. This parameter takes effect only when auto_repair is set to `true`. Valid values:
   * 
   * - `true`: allows node restart.
   * 
   * - `false`: disallows node restart.
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      approvalRequired: 'approval_required',
      autoRepairPolicyId: 'auto_repair_policy_id',
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRequired: 'boolean',
      autoRepairPolicyId: 'string',
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
   * Specifies whether to allow auto kubelet upgrade. This parameter takes effect only when auto_upgrade is set to `true`. Valid values:
   * 
   * - `true`: allows auto kubelet upgrade.
   * 
   * - `false`: disallows auto kubelet upgrade.
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether to allow auto operating system upgrade. This parameter takes effect only when auto_upgrade is set to `true`. Valid values:
   * 
   * - `true`: allows auto operating system upgrade.
   * 
   * - `false`: disallows auto operating system upgrade.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether to allow auto runtime upgrade. This parameter takes effect only when auto_upgrade is set to `true`. Valid values:
   * 
   * - `true`: allows auto runtime upgrade.
   * 
   * - `false`: disallows auto runtime upgrade.
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
   * The packages that should be excluded during vulnerability fixing.
   * 
   * Default value: `kernel`.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only when auto_vul_fix is set to `true`. Valid values:
   * 
   * - `true`: allows node restart.
   * 
   * - `false`: disallows node restart.
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels that are allowed to be automatically fixed. The value is a comma-separated list. Example: `asap,later`. Supported vulnerability levels:
   * 
   * - `asap`: high
   * 
   * - `later`: medium
   * 
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
   * This parameter is deprecated. Use the `auto_upgrade` parameter at the upper level instead.
   * 
   * Specifies whether to enable auto upgrade:
   * 
   * - true: enables auto upgrade.
   * 
   * - false: disables auto upgrade.
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
   * Valid values: [1, 1000]
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of extra nodes. You can specify only one of surge and `surge_percentage`.
   * 
   * Nodes may become unavailable during an upgrade. You can create extra nodes to ensure service continuity.
   * 
   * > The number of extra nodes must not exceed the current number of nodes.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. You can specify only one of surge and `surge_percentage`.
   * 
   * Number of extra nodes = Percentage of extra nodes × Number of nodes. For example, if you set the percentage of extra nodes to 50% and the number of existing nodes is 6, three extra nodes are created.
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
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto node repair. This parameter takes effect only when enable is set to `true`.
   * 
   * - `true`: Auto repair is enabled.
   * 
   * - `false`: Auto repair is disabled.
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto node repair policy.
   */
  autoRepairPolicy?: ModifyClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto node upgrade. This parameter takes effect only when enable is set to `true`.
   * 
   * - `true`: enables auto upgrade.
   * 
   * - `false`: disables auto upgrade.
   * 
   * Default value: `true`
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
   * Specifies whether to automatically fix CVE vulnerabilities. This parameter takes effect only when enable is set to `true`.
   * 
   * - `true`: allows automatic CVE fixing.
   * 
   * - `false`: disallows automatic CVE fixing.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The policy for automatically fixing CVE vulnerabilities.
   */
  autoVulFixPolicy?: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool. Valid values:
   * 
   * - `true`: Enables the managed node pool.
   * 
   * - `false`: Disables the managed node pool. Other related configurations are ignored.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated. Use the `auto_upgrade` parameter at the upper level instead.
   * 
   * The auto upgrade configurations. This parameter takes effect only when enable is set to `true`.
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
   * The name of the node pool.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group for the node pool. Instances created in the node pool belong to this resource group.
   * 
   * A resource can belong to only one resource group. You can use resource groups to categorize resources by project, application, or organization.
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
   * The ID of the private node pool. If `match_criteria` is set to `Target`, you must specify the ID of the private pool.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private node pool. This parameter specifies the private pool capacity option for instance startup. After an elastic assurance service or a capacity reservation service takes effect, it generates a private pool of capacity for instance startup. Valid values:
   * 
   * - `Open`: Open mode. The system automatically matches the capacity of private pools in Open mode. If no matching private pool is found, the instance is started using public pool resources.
   * 
   * - `Target`: Specified mode. The instance is started using the capacity of a specified private pool. If the capacity of the specified private pool is unavailable, the instance fails to be started.
   * 
   * - `None`: The instance is started without using the capacity of a private pool.
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
   * A list of private pool IDs. The IDs of elastic assurance services or capacity reservation services. You can specify only the IDs of private pools in Target mode. You can specify 1 to 20 IDs.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool policy that is used when you create an instance. Resource pools include private pools that are generated after elastic assurance services or capacity reservation services take effect, and public pools. You can select a resource pool when you start an instance. Valid values:
   * PrivatePoolFirst: Private pool first. If you select this policy and specify resouce_pool_options.private_pool_ids, the specified private pool is used first. If you do not specify a private pool or the capacity of the specified private pool is insufficient, the system automatically matches a private pool in Open mode. If no matching private pool is found, a public pool is used to create the instance.
   * PrivatePoolOnly: Private pool only. If you select this policy, you must specify resouce_pool_options.private_pool_ids. If the capacity of the specified private pool is insufficient, the instance fails to be started.
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
   * The maximum price of a single instance.
   * 
   * <props="china">
   * 
   * Unit: CNY/hour.
   * 
   * 
   * 
   * <props="intl">
   * 
   * Unit: USD/hour.
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
   * Specifies whether to enable auto-renewal for the nodes. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Auto-renewal is enabled.
   * 
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
   * The auto-renewal period. Valid values:
   * 
   * - If PeriodUnit=Week, valid values are 1, 2, and 3.
   * 
   * - If PeriodUnit=Month, valid values are 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * If `multi_az_policy` is set to `COST_OPTIMIZED`, this parameter specifies whether to allow the system to automatically create pay-as-you-go instances to meet the required number of ECS instances when spot instances cannot be created due to reasons such as price and stock. Valid values:
   * 
   * - `true`: allows the system to automatically create pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * - `false`: does not allow the system to automatically create pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The data disk configurations of the node. You can specify 0 to 10 data disks.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The ID of the deployment set to which the ECS instances in the node pool belong. This parameter is valid only for incremental nodes. The deployment sets of existing nodes are not changed.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * The total number of nodes that the node pool should maintain. We recommend that you configure at least two nodes to ensure that the cluster components run as expected. You can adjust the expected number of nodes to scale in or scale out the node pool.
   * 
   * If you do not need to create nodes, set this parameter to 0. You can manually adjust the number of nodes later.
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
   * The ID of the custom image. You can call `DescribeKubernetesVersionMetadata` to query the images that are supported by the system. By default, the latest image is used.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The distribution of the operating system. We recommend that you use this parameter to specify the operating system of the nodes. Valid values:
   * 
   * - `AliyunLinux`: Alinux2 image.
   * 
   * - `AliyunLinuxSecurity`: Alinux2 image with UEFI.
   * 
   * - `AliyunLinux3`: Alinux3 image.
   * 
   * - `AliyunLinux3Arm64`: Alinux3 image for ARM.
   * 
   * - `AliyunLinux3Security`: Alinux3 image with UEFI.
   * 
   * - `CentOS`: CentOS image.
   * 
   * - `Windows`: Windows image.
   * 
   * - `WindowsCore`: WindowsCore image.
   * 
   * - `ContainerOS`: container-optimized image.
   * 
   * - `AliyunLinux3ContainerOptimized`: container-optimized Alinux3 image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of the nodes in the node pool. Valid values:
   * 
   * - `PrePaid`: subscription
   * 
   * - `PostPaid`: pay-as-you-go
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance attribute configurations.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * A list of node instance types. You can specify multiple instance types as alternatives. When a node is created, the system attempts to purchase the instance types in the order they are specified until one is successfully purchased. The final instance type that is purchased may vary depending on the stock.
   * 
   * You can specify 1 to 10 instance types.
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
   * The maximum outbound bandwidth of the public IP address of the node. Unit: Mbit/s. Valid values: [1, 100].
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must specify key_pair or `login_password`. For managed node pools, you can specify only `key_pair`.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH logon password. You must specify key_pair or `login_password`. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for ECS instances in a multi-zone scaling group. Valid values:
   * 
   * - `PRIORITY`: The system scales ECS instances based on the vSwitch priority. The vSwitch priority is specified by the VSwitchIds.N parameter. If the system fails to create an ECS instance in the zone where the vSwitch with the highest priority resides, it attempts to create the ECS instance in the zone where the vSwitch with the next highest priority resides.
   * 
   * - `COST_OPTIMIZED`: The system creates ECS instances of the instance type that has the lowest vCPU price. When the scaling configuration is set to create multiple instance types and the billing method is set to preemptible, the system preferentially creates preemptible instances. You can also use the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when the system fails to create preemptible instances due to insufficient stock.
   * 
   *   > The `COST_OPTIMIZED` policy is valid only when multiple instance types are specified or preemptible instances are selected in the scaling configuration.
   * 
   * - `BALANCE`: The system evenly distributes ECS instances across the zones that are specified in the scaling group. If the distribution of ECS instances becomes unbalanced due to insufficient stock, you can call the `RebalanceInstances` operation to rebalance the distribution. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html) .
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of on-demand instances that must be contained in the scaling group. Valid values: [0, 1000]. When the number of on-demand instances is less than this value, on-demand instances are preferentially created.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of on-demand instances among the instances that exceed the minimum number of on-demand instances (`on_demand_base_capacity`). Valid values: [0, 100].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of the nodes in the node pool. This parameter is required and takes effect only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - If `period_unit=Week`, valid values of `period` are {1, 2, 3, 4}.
   * 
   * - If `period_unit=Month`, valid values of `period` are {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the nodes in the node pool. This parameter is required and takes effect only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - `Month`: billed by month.
   * 
   * - `Week`: billed by week.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `image_type` parameter instead.
   * 
   * The OS platform. Valid values:
   * 
   * - `AliyunLinux`
   * 
   * - `CentOS`
   * 
   * - `Windows`
   * 
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
   * The private node pool configurations.
   */
  privatePoolOptions?: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * A list of ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool policy that are used when you create an instance. If you specify this parameter, note the following points:
   * This parameter is valid only when you create pay-as-you-go instances.
   * This parameter cannot be specified at the same time as private_pool_options.match_criteria and private_pool_options.id.
   */
  resourcePoolOptions?: ModifyClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling mode of the scaling group. Valid values:
   * 
   * - `release`: standard mode. This mode creates and releases ECS instances to perform scaling.
   * 
   * - `recycle`: fast mode. This mode creates, stops, and starts ECS instances to perform scaling. This improves scaling speed. When an instance is stopped, its computing resources are not billed, but its storage resources are. This does not apply to instance types with local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * A list of security group IDs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The number of available instance types. The scaling group creates spot instances of multiple instance types that are provided at the lowest cost. Valid values: [1, 10].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable the feature of supplementing spot instances. If this feature is enabled, the scaling group attempts to create a new instance to replace a spot instance that is reclaimed. Valid values:
   * 
   * - `true`: enables the feature of supplementing spot instances.
   * 
   * - `false`: disables the feature of supplementing spot instances.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The price range for the spot instance.
   */
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The bidding policy for the spot instance. Valid values:
   * 
   * - `NoSpot`: The instance is not a spot instance.
   * 
   * - `SpotWithPriceLimit`: The instance is a spot instance for which you can specify the maximum hourly price.
   * 
   * - `SpotAsPriceGo`: The system automatically bids for the instance. The bid is based on the market price.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the system disk. Valid values:
   * 
   * - true: enables the performance burst feature. If your business fluctuates and is subject to unexpected data read and write pressure, the cloud disk temporarily improves its performance until your business returns to a stable state.
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
   * The multi-disk type of the system disk. If a disk of a higher priority disk type cannot be used, the system automatically tries the next priority disk type to create the system disk.
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
   * - `cloud_essd`: ESSD.
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
   * The encryption algorithm that is used for the system disk. Valid value: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * - true: encrypts the system disk.
   * 
   * - false: does not encrypt the system disk.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key that is used to encrypt the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the system disk. This parameter is valid only for ESSD disks. The performance level of a disk is related to its size. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * - PL0: The maximum concurrent I/O performance is moderate and the read/write latency is relatively stable.
   * 
   * - PL1: The maximum concurrent I/O performance is moderate and the read/write latency is relatively stable.
   * 
   * - PL2: The maximum concurrent I/O performance is high and the read/write latency is stable.
   * 
   * - PL3: The maximum concurrent I/O performance is very high and the read/write latency is very stable.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The pre-configured read/write IOPS of the system disk.
   * 
   * Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
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
   * Valid values: [20, 2048].
   * 
   * The value of this parameter must be greater than or equal to max{20, ImageSize}.
   * 
   * Default value: max{40, The size of the image that corresponds to the ImageId parameter}.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The snapshot policy for the system disk.
   * 
   * @example
   * sp-0jl6xnmme8v7o935****
   */
  systemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * The tags that you want to add only to ECS instances.
   * 
   * Tag keys cannot be repeated. A tag key can be up to 128 characters in length. Tag keys and tag values cannot start with "aliyun" or "acs:" and cannot contain "https\\://" or "http\\://".
   */
  tags?: Tag[];
  /**
   * @remarks
   * A list of vSwitch IDs. You can specify 1 to 8 vSwitch IDs.
   * 
   * > For high availability, select vSwitches in different zones.
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
   * Specifies whether to enable the confidential computing cluster. Valid values:
   * 
   * - `true`: enables the cluster.
   * 
   * - `false`: disables the cluster.
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
   * The auto scaling configurations.
   */
  autoScaling?: ModifyClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * Specifies whether to run the task in parallel.
   * 
   * @example
   * true
   */
  concurrency?: boolean;
  /**
   * @remarks
   * The Kubernetes-related configurations.
   */
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The configurations of the managed node pool.
   */
  management?: ModifyClusterNodePoolRequestManagement;
  /**
   * @remarks
   * The node pool configurations.
   */
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The configurations of the node pool scaling group.
   */
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The configurations of the Kubernetes cluster for confidential computing.
   */
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
  /**
   * @remarks
   * Synchronously updates node labels and taints.
   * 
   * @example
   * true
   */
  updateNodes?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      concurrency: 'concurrency',
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

