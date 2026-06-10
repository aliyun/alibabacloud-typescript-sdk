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
   * This field is deprecated. Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * The valid values are 1 to 100. The unit is Mbps.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * [Deprecated] Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * The billing method for the EIP. Valid values:
   * 
   * - `PayByBandwidth`: Pay by bandwidth.
   * 
   * - `PayByTraffic`: Pay by traffic.
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
   * Enable auto scaling. Valid values:
   * 
   * - `true`: Enable auto scaling. When cluster capacity is insufficient for pod scheduling, ACK automatically scales nodes based on the minimum and maximum instance counts you configure. For clusters running Kubernetes 1.24 or later, instant elasticity is enabled by default. For earlier versions, auto scaling is enabled by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: Disable auto scaling. ACK adjusts the number of nodes in the node pool to match the desired node count you specify.
   * 
   * When set to false, other parameters under `auto_scaling` are ignored.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * [Deprecated] Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * - `true`: Bind an EIP.
   * 
   * - `false`: Do not bind an EIP.
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
   * The maximum number of scalable instances in the node pool, excluding existing instances. This parameter takes effect only when `enable=true`.
   * 
   * Valid values: [min_instances, 2000]. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of scalable instances in the node pool, excluding existing instances. This parameter takes effect only when `enable=true`.
   * 
   * Valid values: [0, max_instances]. Default value: 0.
   * 
   * > - If the minimum instance count is not zero, the system creates the specified number of ECS instances after the scaling group becomes active.
   * >
   * > - To avoid unintended scale-in, set the maximum instance count to at least the current number of nodes in the node pool.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The auto scaling type, defined by instance type. Valid values:
   * 
   * - `cpu`: Standard instance.
   * 
   * - `gpu`: GPU instance.
   * 
   * - `gpushare`: GPU shared instance.
   * 
   * - `spot`: Spot instance.
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
   * Install Cloud Monitor on ECS nodes. After installation, you can view monitoring information for the created ECS instances in the Cloud Monitor console. We recommend enabling this. Valid values:
   * 
   * - `true`: Install Cloud Monitor on ECS nodes.
   * 
   * - `false`: Do not install Cloud Monitor on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The node CPU management policy. The following two policies are supported for clusters of version 1.12.6 and later:
   * 
   * - `static`: Allows pods with certain resource characteristics on the node to have enhanced CPU affinity and exclusivity.
   * 
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
   * Node labels. Add labels to Kubernetes cluster nodes. Label rules:
   * 
   * - Labels are case-sensitive key-value pairs. You can set up to 20 labels.
   * 
   * - Tag keys must be unique and up to 64 characters long. Tag values can be empty and up to 128 characters long. Neither tag keys nor tag values can start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name parameter. A node name consists of three parts: prefix + node IP + suffix.
   * 
   * The prefix and suffix can each consist of one or more parts separated by periods (.). Each part can contain lowercase letters, numbers, and hyphens (-). The node name must start and end with a lowercase letter or a number. The node IP is the complete private IP address of the node.
   * 
   * The parameter is passed as four parts separated by commas. For example, if you pass the string "customized,aliyun,ip,com" (where "customized" and "ip" are fixed strings, "aliyun" is the prefix, and "com" is the suffix), the node name will be: aliyun.192.168.xxx.xxx.com.
   * 
   * @example
   * customized,aliyun,ip,com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The instance pre-customization data. Before a node joins the cluster, it runs the specified pre-customization data script. For more information, see [User-Data script](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  preUserData?: string;
  /**
   * @remarks
   * The container runtime name. ACK supports the following three container runtimes.
   * 
   * - containerd: Recommended. Supports all cluster versions.
   * 
   * - Sandboxed-Container.runv: Sandboxed container. Provides higher isolation. Supports clusters of version 1.31 and earlier.
   * 
   * - docker: No longer maintained. Supports clusters of version 1.22 and earlier.
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
   * The node taint configuration.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Whether scaled-out nodes are unschedulable.
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
   * The instance user data. After a node joins the cluster, it runs the specified user data script. For more information, see [User-Data script](https://help.aliyun.com/document_detail/49121.html).
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
   * Require manual approval for node repair.
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * The automatic node repair policy ID.
   * 
   * @example
   * r-xxxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * Allow node restart. This parameter takes effect only when `auto_repair=true`. Valid values:
   * 
   * - `true`: Allow node restart.
   * 
   * - `false`: Disallow node restart.
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
   * Enable automatic kubelet upgrades. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * 
   * - `true`: Enable automatic kubelet upgrades.
   * 
   * - `false`: Disable automatic kubelet upgrades.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Enable automatic operating system upgrades. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * 
   * - `true`: Enable automatic OS upgrades.
   * 
   * - `false`: Disable automatic OS upgrades.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Enable automatic runtime upgrades. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * 
   * - `true`: Enable automatic runtime upgrades.
   * 
   * - `false`: Disable automatic runtime upgrades.
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
   * Packages to exclude during vulnerability fixes.
   * 
   * Default value: `kernel`.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Allow node restart. This parameter takes effect only when `auto_vul_fix=true`. Valid values:
   * 
   * - `true`: Allow node restart.
   * 
   * - `false`: Disallow node restart.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The severity levels of vulnerabilities that can be fixed automatically, separated by commas. Example: `asap,later`. Supported levels:
   * 
   * - `asap`: High
   * 
   * - `later`: Medium
   * 
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
   * [Deprecated] Use the top-level `auto_upgrade` parameter instead.
   * 
   * Enable automatic upgrades. Valid values:
   * 
   * - true: Enable.
   * 
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
   * The maximum number of unavailable nodes.
   * 
   * Valid values: [1, 1000].
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of additional nodes. Choose either surge or `surge_percentage`.
   * 
   * Nodes become unavailable during upgrades. Create extra nodes to maintain cluster load.
   * 
   * > Do not create more extra nodes than the current number of nodes.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of additional nodes. Choose either surge or surge_percentage. The number of additional nodes equals `surge_percentage` × the number of nodes. For example, if `surge_percentage` is 50% and there are 6 nodes, then 3 additional nodes are created.
   * 
   * The number of additional nodes = The percentage of additional nodes × The number of nodes in the node pool. For example, if the percentage of additional nodes is 50% and the number of nodes in the node pool is 6, the number of additional nodes is 3.
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
   * Enable automatic node repair. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: Enable automatic repair.
   * 
   * - `false`: Disable automatic repair.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The automatic node repair policy.
   */
  autoRepairPolicy?: ModifyClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Enable automatic node upgrades. This parameter takes effect only when `enable=true`. Valid values:
   * 
   * - `true`: Enable automatic upgrades.
   * 
   * - `false`: Disable automatic upgrades.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The automatic upgrade policy.
   */
  autoUpgradePolicy?: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Enable automatic CVE vulnerability fixes. This parameter takes effect only when `enable=true`. Valid values:
   * 
   * - `true`: Enable automatic CVE fixes.
   * 
   * - `false`: Disable automatic CVE fixes.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The automatic CVE fix policy.
   */
  autoVulFixPolicy?: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Enable the managed node pool. Valid values:
   * 
   * - `true`: Enable the managed node pool.
   * 
   * - `false`: Disable the managed node pool. Other related configurations take effect only when `enable=true`.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * [Deprecated] Use the top-level `auto_upgrade` parameter instead.
   * 
   * The automatic upgrade configuration. This parameter takes effect only when `enable=true`.
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
   * The node pool name.
   * 
   * Name rules: Use only numbers, letters, or hyphens (-). The name must be 1 to 63 characters long and cannot start with a hyphen (-).
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID for the node pool. Nodes created from this node pool belong to this resource group.
   * 
   * A resource can belong to only one resource group. Map resource groups to projects, applications, or organizations based on your business needs.
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
   * The private node pool ID. This is required when `match_criteria` is set to `Target`.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private node pool type, which determines the capacity option for instance startup. Elastic assurance services or capacity reservation services generate private pool capacity for instance startup. Valid values:
   * 
   * - `Open`: Open mode. Automatically matches open-type private pool capacity. If no suitable private pool is found, public pool resources are used.
   * 
   * - `Target`: Specified mode. Starts instances using the specified private pool capacity. If the capacity is unavailable, the instance startup fails.
   * 
   * - `None`: No mode. The instance startup does not use private pool capacity.
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
   * The list of private pool IDs, which are the IDs of elastic assurance or capacity reservation services. You can only pass Target mode private pool IDs. The value of N can range from 1 to 20.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool policy for instance creation. Resource pools include private pools generated by elastic assurance or capacity reservation services, and public pools. Valid values: PrivatePoolFirst: Prioritizes private pools. If resouce_pool_options.private_pool_ids is specified, it uses the specified private pools first. If no private pool is specified or the specified capacity is insufficient, it automatically matches open-type private pools. If no suitable private pool is found, it uses the public pool. PrivatePoolOnly: Uses only private pools. You must specify resouce_pool_options.private_pool_ids. If the specified private pool capacity is insufficient, the instance startup fails. None: Does not use a resource pool policy. Default value: None.
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
   * The spot instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum hourly price for the instance.
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
   * Enable automatic renewal for nodes. This parameter takes effect only when `instance_charge_type` is `PrePaid`. Valid values:
   * 
   * - `true`: Enable automatic renewal.
   * 
   * - `false`: Disable automatic renewal.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The duration of each automatic renewal. Valid values:
   * 
   * - When PeriodUnit=Week: 1, 2, 3.
   * 
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
   * When `multi_az_policy` is set to `COST_OPTIMIZED`, this parameter specifies whether to automatically create on-demand instances to meet the required number of ECS instances if enough spot instances cannot be created due to price or inventory issues. Valid values:
   * 
   * - `true`: Allow automatic creation of on-demand instances.
   * 
   * - `false`: Disallow automatic creation of on-demand instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The data disk configuration for nodes. Valid values: [0, 10]. You can attach up to 10 data disks.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set to which the ECS instances created in the node pool belong. This setting applies only to new nodes. The deployment set of existing nodes is not changed.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The desired number of nodes in the node pool.
   * 
   * This is the total number of nodes the node pool should maintain. Configure at least 2 nodes to ensure cluster components run properly. Adjust this number to scale the node pool in or out.
   * 
   * If you do not need to create nodes, set this to 0 and adjust it manually later.
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
   * The custom image ID. Query supported images using `DescribeKubernetesVersionMetadata`. By default, the latest system image is used.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system distribution type. We recommend using this field to specify the node OS. Valid values:
   * 
   * - `AliyunLinux`: Alibaba Cloud Linux 2 image.
   * 
   * - `AliyunLinuxSecurity`: Alibaba Cloud Linux 2 UEFI image.
   * 
   * - `AliyunLinux3`: Alibaba Cloud Linux 3 image.
   * 
   * - `AliyunLinux3Arm64`: Alibaba Cloud Linux 3 ARM image.
   * 
   * - `AliyunLinux3Security`: Alibaba Cloud Linux 3 UEFI image.
   * 
   * - `CentOS`: CentOS image.
   * 
   * - `Windows`: Windows image.
   * 
   * - `WindowsCore`: Windows Core image.
   * 
   * - `ContainerOS`: Container-optimized image.
   * 
   * - `AliyunLinux3ContainerOptimized`: Alibaba Cloud Linux 3 container-optimized image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method for nodes in the node pool. Valid values:
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
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance attribute configuration.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of instance types for the nodes. You can specify multiple instance types as fallback options. When creating a node, the system tries each instance type in order until it succeeds. The final instance type may vary depending on inventory.
   * 
   * Valid values: [1, 10].
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for public IP addresses. Valid values:
   * 
   * - `PayByBandwidth`: Pay by bandwidth.
   * 
   * - `PayByTraffic`: Pay by traffic.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth for the public IP address of a node, measured in megabits per second (Mbps). The value must be an integer from 1 to 100.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The key pair name. Specify either key_pair or `login_password`. For managed node pools, only `key_pair` is supported.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * The SSH login password. Specify either login_password or `key_pair`. Password rules: 8 to 30 characters, including at least three of the following: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for ECS instances in a multi-zone scaling group. Valid values:
   * 
   * - `PRIORITY`: Scales instances based on the virtual switches (VSwitchIds.N) you define. If an ECS instance cannot be created in the zone of a higher-priority virtual switch, the system automatically uses the next-priority virtual switch.
   * 
   * - `COST_OPTIMIZED`: Tries to create instances starting with the lowest vCPU unit price. If multiple instance types are configured with a spot instance billing method, it prioritizes creating spot instances. Use the `CompensateWithOnDemand` parameter to specify whether to automatically create on-demand instances if spot instances cannot be created due to inventory or other reasons.
   * 
   *   > `COST_OPTIMIZED` takes effect only when multiple instance types or spot instances are configured.
   * 
   * - `BALANCE`: Evenly distributes ECS instances across the specified zones in the scaling group. If the distribution becomes unbalanced due to inventory shortages or other reasons, you can use the API `RebalanceInstances` to rebalance the resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of on-demand instances required in the scaling group. Valid values: [0, 1000]. When the number of on-demand instances is below this value, the system prioritizes creating on-demand instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of on-demand instances among the instances that exceed the minimum on-demand instance count (`on_demand_base_capacity`). Valid values: [0, 100].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration for nodes in the node pool. This parameter takes effect only when `instance_charge_type` is `PrePaid`, and is required in that case.
   * 
   * - When `period_unit=Week`, valid values: {1, 2, 3, 4}.
   * 
   * - When `period_unit=Month`, valid values: {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle for nodes in the node pool. This parameter takes effect only when `instance_charge_type` is `PrePaid`, and is required in that case.
   * 
   * - `Month`: Billed monthly.
   * 
   * - `Week`: Billed weekly.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * [Deprecated] Use the `image_type` parameter instead.
   * 
   * The operating system platform. Valid values:
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
   * The private node pool configuration.
   */
  privatePoolOptions?: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The list of RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and policy to use when creating instances. Note: This parameter is effective only when creating pay-as-you-go instances. It cannot be set at the same time as private_pool_options.match_criteria or private_pool_options.id.
   */
  resourcePoolOptions?: ModifyClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling group mode. Valid values:
   * 
   * - `release`: Standard mode. Scales by creating and releasing ECS instances based on resource usage.
   * 
   * - `recycle`: Fast mode. Scales by creating, stopping, and starting instances to improve scaling speed. You are not charged for compute resources when instances are stopped, only for storage fees (except for local disk models).
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
   * The number of available instance types. The scaling group creates spot instances in a balanced manner across the specified number of lowest-cost instance types. Valid values: [1, 10].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Enable spot instance replenishment. When enabled, the scaling group attempts to create a new instance to replace a spot instance that is about to be reclaimed. Valid values:
   * 
   * - `true`: Enable spot instance replenishment.
   * 
   * - `false`: Disable spot instance replenishment.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The price range configuration for spot instances.
   */
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The spot instance type. Valid values:
   * 
   * - `NoSpot`: On-demand instance.
   * 
   * - `SpotWithPriceLimit`: Set a price limit for spot instances.
   * 
   * - `SpotAsPriceGo`: Let the system automatically bid at the current market price.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Enable bursting for the system disk. Valid values:
   * 
   * - true: Enable. During sudden spikes in read/write activity, the disk temporarily boosts performance until workloads return to normal.
   * 
   * - false: Disable.
   * 
   * You can set this parameter only when `system_disk_category` is `cloud_auto`. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The list of system disk types. If the highest-priority disk type is unavailable, the system tries the next priority disk type.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The system disk type for nodes. Valid values:
   * 
   * - `cloud_efficiency`: Ultra disk.
   * 
   * - `cloud_ssd`: Standard SSD.
   * 
   * - `cloud_essd`: Enhanced SSD (ESSD).
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
   * The encryption algorithm for the system disk. Valid value: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Encrypt the system disk. Valid values:
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
   * The KMS key ID for the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the system disk. This setting applies only to ESSD disks. Performance level depends on disk size. For more information, see [Enhanced SSD (ESSD)](https://help.aliyun.com/document_detail/122389.html).
   * 
   * - PL0: Moderate I/O performance with stable read/write latency.
   * 
   * - PL1: Moderate I/O performance with stable read/write latency.
   * 
   * - PL2: High I/O performance with stable read/write latency.
   * 
   * - PL3: Extremely high I/O performance with extremely stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS for the system disk.
   * 
   * Possible values: 0 to min{50,000, 1000 × capacity − baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * You can set this parameter only when `system_disk_category` is `cloud_auto`. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk for nodes. Unit: GiB.
   * 
   * Valid values: [20, 2048].
   * 
   * This value must be greater than or equal to max{20, ImageSize}.
   * 
   * Default value: max{40, image size corresponding to ImageId}.
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
   * Add tags to ECS instances only.
   * 
   * Tag keys must be unique and up to 128 characters long. Neither tag keys nor tag values can start with "aliyun", "acs:", or contain "https\\://" or "http\\://".
   */
  tags?: Tag[];
  /**
   * @remarks
   * The list of virtual switch IDs. Valid values: [1, 8].
   * 
   * > To ensure high availability, select virtual switches from different zones.
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
   * Enable the Kubernetes cluster for confidential computing. Valid values:
   * 
   * - `true`: Enable.
   * 
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
   * The auto scaling configuration.
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
   * Node pool scaling group configuration.
   */
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The configuration of the Kubernetes cluster for confidential computing.
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

