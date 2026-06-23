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
   * [This field is deprecated] Please use internet_charge_type and internet_max_bandwidth_out instead.
   * EIP peak bandwidth.
   * 
   * Valid values: [1,100]. Unit: Mbps.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * [This field is deprecated] Please use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * EIP billing type. Valid values:
   * 
   * - `PayByBandwidth`: Pay by fixed bandwidth.
   * - `PayByTraffic`: Pay by traffic usage.
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
   * Whether to enable auto scaling. Valid values:
   * 
   * - `true`: Enable node pool auto scaling. When the cluster\\"s capacity planning cannot meet application Pod scheduling requirements, ACK automatically scales node resources based on the configured minimum and maximum instance counts. Clusters with version 1.24 and above enable instant node elasticity by default;
   * clusters with versions below 1.24 enable node auto scaling by default. For more information, see [Node Scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: Disable auto scaling. ACK adjusts the number of nodes in the node pool according to the configured desired node count, always maintaining the node count at the desired number.
   * 
   * When the value is false, other configuration parameters in `auto_scaling` will not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * [This field is deprecated] This field is deprecated. Please use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * - `true`: Bindpublic EIP.
   * - `false`: Do not bind EIP.
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
   * The maximum number of scalable instances in the node pool, excluding your existing instances. Only takes effect when `enable=true`.
   * 
   * Valid values: [min_instances, 2000]. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of scalable instances in the node pool, excluding your existing instances. Only takes effect when `enable=true`.
   * 
   * Valid values: [0, max_instances]. Default value: 0.
   * 
   * > - When the minimum number of instances is not 0, the corresponding number of ECS instances will be automatically created after the scaling group takes effect.
   * > - It is recommended that the configured maximum number of instances is not less than the current number of nodes in the node pool. Otherwise, the elastic scaling function will directly cause the node pool to scale in after taking effect.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * Auto scaling type, classified by auto scaling instance type. Valid values:
   * 
   * - `cpu`: Regular instance type.
   * - `gpu`: GPU instance type.
   * - `gpushare`: GPU sharing type.
   * - `spot`: Preemptible instance type.
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
   * Whether to install CloudMonitor on ECS nodes. After installation, you can view monitoring information of the created ECS instances in the CloudMonitor console. Recommended to enable. Valid values:
   * 
   * - `true`: Install CloudMonitor on ECS nodes.
   * - `false`: Do not install CloudMonitor on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * Node CPU management policy. Supported when the cluster version is 1.12.6 or above:
   * 
   * - `static`: Allows enhancing CPU affinity and exclusivity for Pods with certain resource characteristics on the node.
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
   * Node labels. Add labels to Kubernetes cluster nodes. Label definition rules:
   * 
   * - Labels are case-sensitive key-value pairs. You can set up to 20 labels.
   * - Label keys cannot be duplicated and can be up to 64 characters. Label values can be empty and up to 128 characters. Label keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  labels?: Tag[];
  /**
   * @remarks
   * Custom node name parameter. The node name consists of three parts: prefix + node IP + suffix.
   * 
   * Both the prefix and suffix can consist of one or more parts separated by ".". Each part can use lowercase letters, digits, and "-". The node name must start and end with a lowercase letter or digit. The node IP is the complete private IP address of the node.
   * 
   * The parameter includes four parts separated by commas. For example, passing "customized,aliyun,ip,com" (where "customized" and "ip" are fixed strings, aliyun is the prefix, and com is the suffix), the node name will be: aliyun.192.168.xxx.xxx.com.
   * 
   * @example
   * customized,aliyun,ip,com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * Instance pre-custom data. Before the node joins the cluster, the specified instance pre-custom data script will be run. See [User-Data scripts](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  preUserData?: string;
  /**
   * @remarks
   * Container runtime name. ACK supports the following three container runtimes:
   * 
   * - containerd: Recommended. Supports all cluster versions.
   * - Sandboxed-Container.runv: Sandboxed container, providing higher isolation. Supports clusters with version 1.31 and below.
   * - docker: Maintenance discontinued. Supports clusters with version 1.22 and below.
   * 
   * Default value: containerd.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Container runtime version.
   * 
   * @example
   * 1.6.38
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * Node taint configuration.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Whether the node is unschedulable after scaling out.
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
   * Instance custom data. After the node joins the cluster, the specified instance custom data script will be run. See [User-Data scripts](https://help.aliyun.com/document_detail/49121.html).
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
   * Whether node repair requires manual approval.
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * Auto repair policy ID.
   * 
   * @example
   * r-xxxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * Whether to allow restarting nodes. Only takes effect when `auto_repair=true`. Valid values:
   * 
   * - `true`: Allow restarting nodes.
   * - `false`: Do not allow restarting nodes.
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
   * Whether to allow auto upgrading kubelet. Only takes effect when `auto_upgrade=true`. Valid values:
   * - `true`: Allow auto upgrading kubelet.
   * - `false`: Do not allow auto upgrading kubelet.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Whether to allow auto upgrading the operating system. Only takes effect when `auto_upgrade=true`. Valid values:
   * - `true`: Allow auto upgrading the operating system.
   * - `false`: Do not allow auto upgrading the operating system.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Whether to allow auto upgrading the runtime. Only takes effect when `auto_upgrade=true`. Valid values:
   * - `true`: Allow auto upgrading the runtime.
   * - `false`: Do not allow auto upgrading the runtime.
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
   * Specifies the packages to be excluded during vulnerability fix.
   * 
   * Default value: `kernel`.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Whether to allow restarting nodes. Only takes effect when `auto_vul_fix=true`. Valid values:
   * - `true`: Allow restarting nodes.
   * - `false`: Do not allow restarting nodes.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * Vulnerability levels allowed for automatic fixing, separated by commas. For example: `asap,later`. Supported vulnerability levels:
   * 
   * - `asap`: High
   * - `later`: Medium
   * - `nntf`: Low
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
   * [This field is deprecated] Please use the `auto_upgrade` parameter at the parent level instead.
   * 
   * Whether to enable auto upgrade:
   * 
   * - true: Enable.
   * - false: Disable.
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
   * Maximum number of unavailable nodes.
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
   * Number of extra nodes. Mutually exclusive with `surge_percentage`.
   * 
   * During upgrade, nodes will be unavailable. You can create extra nodes to compensate for the cluster workload.
   * 
   * > It is recommended that the number of extra nodes does not exceed the current number of nodes.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * Percentage of extra nodes. Mutually exclusive with `surge`.
   * 
   * Number of extra nodes = percentage of extra nodes × number of nodes. For example, if the percentage of extra nodes is set to 50% and there are 6 existing nodes, the number of extra nodes = 50% × 6, which produces 3 extra nodes.
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
   * Whether to automatically repair nodes. Only takes effect when `enable=true`.
   * 
   * - `true`: Auto repair.
   * 
   * - `false`: Do not auto repair.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * Auto repair node policy.
   */
  autoRepairPolicy?: ModifyClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Whether to automatically upgrade nodes. Only takes effect when `enable=true`.
   * - `true`: Enable auto upgrade.
   * - `false`: Disable auto upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * Auto upgrade policy.
   */
  autoUpgradePolicy?: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Whether to automatically fix CVE vulnerabilities. Only takes effect when `enable=true`.
   * 
   * - `true`: Allow automatic CVE fixing.
   * - `false`: Do not allow automatic CVE fixing.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * Auto CVE fix policy.
   */
  autoVulFixPolicy?: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Whether to enable managed node pool. Valid values:
   * 
   * - `true`: Enable managed node pool.
   * - `false`: Disable managed node pool. Other related configurations only take effect when `enable=true`.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * [This field is deprecated] Please use the `auto_upgrade` parameter at the parent level instead.
   * 
   * Auto upgrade configuration. Only takes effect when `enable=true`.
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
   * Node pool name.
   * 
   * Naming rules: The name can contain digits, Chinese characters, English letters, or hyphens (-), must be 1 to 63 characters in length, and cannot start with a hyphen (-).
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID of the node pool. Instances created by the node pool will belong to this resource group.
   * 
   * A resource can only belong to one resource group. Depending on different business scenarios, you can map a resource group to concepts such as projects, applications, or organizations.
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
   * Private node pool ID. When `match_criteria` is `Target`, you need to further specify the private pool ID.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * Private node pool type. Private pool capacity option for instance launch. After an Elasticity Assurance or Capacity Reservation takes effect, a private pool capacity is generated for instance launch selection. Valid values:
   * - `Open`: Open mode. Automatically matches open-type private pool capacity. If no matching private pool capacity is available, public pool resources are used for launch.
   * - `Target`: Targeted mode. Uses specified private pool capacity to launch instances. If the private pool capacity is unavailable, instance launch fails.
   * - `None`: Do not use mode. Instance launch will not use private pool capacity.
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
   * List of private pool IDs, i.e., Elasticity Assurance IDs or Capacity Reservation IDs. Only Target mode private pool IDs can be passed. Valid values for N: 1~20.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * Resource pool policy used when creating instances. Resource pools include private pools generated after Elasticity Assurance or Capacity Reservation takes effect, as well as public pools, for instance launch selection. Valid values:
   * PrivatePoolFirst: Private pool first. When specified private_pool_ids are set, the specified private pools are used preferentially. If no private pool is specified or the specified private pool capacity is insufficient, open-type private pools are automatically matched. If no matching private pool is available, public pool resources are used to create instances.
   * PrivatePoolOnly: Private pool only. private_pool_ids must be specified. If the specified private pool capacity is insufficient, instance launch fails.
   * None: Do not use resource pool policy.
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
   * Preemptible instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Maximum price per instance.
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
   * Whether to enable auto renewal for nodes. Only takes effect when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto renewal.
   * - `false`: Disable auto renewal.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Duration of each auto renewal. Valid values:
   * - When PeriodUnit=Week: 1, 2, 3.
   * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * When `multi_az_policy` is set to `COST_OPTIMIZED`, whether to allow automatically creating pay-as-you-go instances to meet ECS instance count requirements when sufficient preemptible instances cannot be created due to price, inventory, or other reasons. Valid values:
   * 
   * - `true`: Allow automatically creating pay-as-you-go instances to meet ECS instance count requirements.
   * - `false`: Do not allow automatically creating pay-as-you-go instances to meet ECS instance count requirements.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * Node data disk configuration. Valid values: [0,10\\]. You can add up to 10 data disks.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set that the ECS instances created by the node pool belong to. Only takes effect for incremental nodes; the deployment set of existing nodes will not be changed.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * Desired number of nodes in the node pool.
   * 
   * The total number of nodes that the node pool should maintain. It is recommended to configure at least 2 nodes to ensure cluster components run normally. You can scale the node pool in or out by adjusting the desired node count.
   * 
   * If you do not need to create nodes, you can set this to 0 and manually adjust it later to add nodes.
   * 
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @remarks
   * Block device initialization configuration.
   */
  diskInit?: DiskInit[];
  /**
   * @remarks
   * Custom image ID. You can query system-supported images through `DescribeKubernetesVersionMetadata`. The latest system image is used by default.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * Operating system distribution type. It is recommended to use this field to specify the node operating system. Valid values:
   * 
   * - `AliyunLinux`: Alinux2 image.
   * - `AliyunLinuxSecurity`: Alinux2 image UEFI version.
   * - `AliyunLinux3`: Alinux3 image.
   * - `AliyunLinux3Arm64`: Alinux3 image ARM version.
   * - `AliyunLinux3Security`: Alinux3 image UEFI version.
   * - `CentOS`: CentOS image.
   * - `Windows`: Windows image.
   * - `WindowsCore`: WindowsCore image.
   * - `ContainerOS`: Container-optimized image.
   * - `AliyunLinux3ContainerOptimized`: Alinux3 image container-optimized version.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * Billing type for node pool nodes. Valid values:
   * 
   * - `PrePaid`: Subscription.
   * - `PostPaid`: Pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * Instance attribute configuration.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * List of node instance types. You can select multiple instance types as alternatives. When creating each node, the system attempts to purchase starting from the first type until successful. The final purchased instance type may vary depending on inventory.
   * 
   * Supported number of instance types: [1,10].
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * Public IP billing type. Valid values:
   * 
   * - `PayByBandwidth`: Pay by fixed bandwidth.
   * - `PayByTraffic`: Pay by traffic usage.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Maximum outbound bandwidth for node public IP, in Mbps (Mega bit per second). Valid values: [1,100\\].
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Key pair name. Mutually exclusive with `login_password`. When the node pool is a managed node pool, only `key_pair` is supported.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * SSH login password. Mutually exclusive with `key_pair`. Password must be 8 to 30 characters and contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * Multi-AZ scaling group ECS instance scaling policy. Valid values:
   * 
   * - `PRIORITY`: Scale based on the vSwitches (VSwitchIds.N) you defined. When ECS instances cannot be created in the availability zone of the higher-priority vSwitch, the next priority vSwitch is automatically used to create ECS instances.
   * 
   * - `COST_OPTIMIZED`: Create instances by trying from the lowest vCPU unit price. When the scaling configuration has set preemptible billing with multiple instance types, preemptible instances are created preferentially. You can further use the `CompensateWithOnDemand` parameter to specify whether to automatically try creating pay-as-you-go instances when preemptible instances cannot be created due to inventory or other reasons.
   * 
   *   > `COST_OPTIMIZED` only takes effect when the scaling configuration has set multiple instance types or selected preemptible instances.
   * 
   * - `BALANCE`: Evenly distribute ECS instances across multiple availability zones specified by the scaling group. If the zones become unbalanced due to insufficient inventory or other reasons, you can use the API `RebalanceInstances` to rebalance resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * Minimum number of pay-as-you-go instances required by the scaling group. Valid values: [0,1000\\]. Pay-as-you-go instances are created preferentially when the number of pay-as-you-go instances is less than this value.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * After the scaling group meets the minimum pay-as-you-go instance requirement (`on_demand_base_capacity`), the proportion of pay-as-you-go instances among the excess instances. Valid values: [0,100\\].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * Subscription duration for node pool nodes. Only takes effect when `instance_charge_type` is set to `PrePaid`, and is required.
   * 
   * - When `period_unit=Week`, valid values for `period`: {1, 2, 3, 4}.
   * - When `period_unit=Month`, valid values for `period`: {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Billing cycle for node pool nodes. Only takes effect when `instance_charge_type` is set to `PrePaid`, and is required.
   * 
   * - `Month`: Billed by month.
   * - `Week`: Billed by week.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * [This field is deprecated] Please use the `image_type` parameter instead.
   * 
   * Operating system platform. Valid values:
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
   * Private node pool configuration.
   */
  privatePoolOptions?: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * RDS instance list.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * Resource pool and resource pool policy used when creating instances. Note the following when setting this parameter:
   * This parameter only takes effect when creating pay-as-you-go instances.
   * This parameter cannot be set together with private_pool_options.match_criteria or private_pool_options.id.
   */
  resourcePoolOptions?: ModifyClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * Scaling group mode. Valid values:
   * 
   * - `release`: Standard mode. Scale by creating and releasing ECS instances based on resource usage.
   * - `recycle`: Swift mode. Scale by creating, stopping, and starting instances to improve subsequent scaling speed (compute resources are not charged during shutdown, only storage fees apply, except for local disk instance types).
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * List of security group IDs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Number of available instance types. The scaling group creates preemptible instances evenly across the lowest-cost instance types. Valid values: [1,10\\].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Whether to enable supplementing preemptible instances. When enabled, the scaling group attempts to create new instances to replace preemptible instances that are about to be reclaimed upon receiving a system notification. Valid values:
   * 
   * - `true`: Enable supplementing preemptible instances.
   * - `false`: Disable supplementing preemptible instances.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * Preemptible instance market price range configuration.
   */
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * Preemptible instance type. Valid values:
   * 
   * - `NoSpot`: Non-preemptible instance.
   * - `SpotWithPriceLimit`: Set a maximum price for the preemptible instance.
   * - `SpotAsPriceGo`: System automatically bids, following the current market price.
   * 
   * For more information, see [Preemptible instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Whether to enable burst (performance burst) for the node system disk. Valid values:
   * - true: Enable. When enabled, cloud disks can temporarily boost performance based on actual business conditions when facing sudden data read/write pressure from volatile workloads, until the business returns to a steady state.
   * - false: Disable.
   * 
   * Only supported when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Multiple disk types for the system disk. When the higher-priority disk type is unavailable, the system automatically tries the next priority disk type to create the system disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * Node system disk type. Valid values:
   * - `cloud_efficiency`: Ultra disk.
   * - `cloud_ssd`: SSD disk.
   * - `cloud_essd`: ESSD disk.
   * - `cloud_auto`: ESSD AutoPL disk.
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
   * Encryption algorithm used for the system disk. Valid values: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Whether to encrypt the system disk. Valid values:
   * 
   * - true: Encrypt.
   * 
   * - false: Do not encrypt.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * KMS key ID used for the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * Node system disk performance level. Only takes effect for ESSD disks. The performance level is related to the disk size. For more information, see [ESSD disks](https://help.aliyun.com/document_detail/122389.html).
   * - PL0: Medium concurrent extreme I/O performance, relatively stable read/write latency.
   * - PL1: Medium concurrent extreme I/O performance, relatively stable read/write latency.
   * - PL2: High concurrent extreme I/O performance, stable read/write latency.
   * - PL3: Extremely high concurrent extreme I/O performance, extremely stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * Provisioned read/write IOPS for the node system disk.
   * 
   * Valid values: 0~min{50,000, 1000\\*capacity-baseline performance}. Baseline performance=min{1,800+50\\*capacity, 50000}.
   * 
   * Only supported when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * Node system disk size, in GiB.
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
   * System disk snapshot policy.
   * 
   * @example
   * sp-0jl6xnmme8v7o935****
   */
  systemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * Tags added only to ECS instances.
   * 
   * Tag keys cannot be duplicated and can be up to 128 characters. Tag keys and tag values cannot start with "aliyun" or "acs:", or contain "https://" or "http://".
   */
  tags?: Tag[];
  /**
   * @remarks
   * List of vSwitch IDs. Valid values: [1,8\\].
   * 
   * > To ensure high availability, it is recommended to select vSwitches in different availability zones.
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
   * Whether to enable confidential computing cluster. Valid values:
   * 
   * - `true`: Enable.
   * - `false`: Disable.
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
   * Auto scaling configuration.
   */
  autoScaling?: ModifyClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * Whether to run concurrently.
   * 
   * @example
   * true
   */
  concurrency?: boolean;
  /**
   * @remarks
   * Cluster-related configuration.
   */
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * Managed node pool configuration.
   */
  management?: ModifyClusterNodePoolRequestManagement;
  /**
   * @remarks
   * Node pool configuration.
   */
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * Node pool scaling group configuration.
   */
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * Confidential computing cluster configuration.
   */
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
  /**
   * @remarks
   * Synchronously update node labels and taints.
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

