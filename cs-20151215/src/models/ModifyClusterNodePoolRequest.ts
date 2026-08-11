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
   * **[Deprecated]** Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * The peak bandwidth of the EIP.
   * 
   * Valid values: [1,100]. Unit: Mbit/s.
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
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of instances that can be scaled out in the node pool, excluding your existing instances. This parameter takes effect only when `enable=true`.
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
   * > - If the minimum number of instances is not 0, the scaling group automatically creates the corresponding number of ECS instances after it takes effect.
   * > - Set the maximum number of instances to a value that is not less than the current number of nodes in the node pool. Otherwise, nodes in the node pool are scaled in after the auto scaling feature takes effect.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The auto scaling type, classified by instance type. Valid values:
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
   * Specifies whether to enable automatic addition for the Lingjun node pool. (Not effective)
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
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After installation, you can view monitoring information of the created ECS instances in the CloudMonitor console. We recommend that you enable this feature. Valid values:
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
   * The CPU management policy for nodes. The following two policies are supported for clusters of version 1.12.6 or later:
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The node labels. You can add labels to the nodes in the Kubernetes cluster. Label definition rules:
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name parameter. A node name consists of three parts: prefix + node IP address + suffix.
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
   * The container runtime name. ACK supports the following three container runtimes.
   * 
   * - containerd: Recommended. Supports all cluster versions.
   * - Sandboxed-Container.runv: Sandboxed container runtime that provides higher isolation. Supports clusters of version 1.31 and earlier.
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
   * Specifies whether the nodes added during the scale-out are unschedulable.
   * 
   * @example
   * false
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The instance user data. After a node joins the cluster, the specified user data script is run. For more information, see [User data scripts](https://help.aliyun.com/document_detail/49121.html).
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
   * Specifies whether node repair requires manual approval.
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * The auto repair policy ID.
   * 
   * @example
   * r-xxxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * The maximum number of nodes that can be repaired in parallel. When a large number of abnormal nodes exist in the node pool, this parameter specifies the maximum number or percentage of nodes that can be repaired simultaneously. You can specify a number (such as 5, valid range: 1 to 100000) or a percentage (such as 10%, valid range: 1% to 100%). Default value: 1.
   * 
   * @example
   * 5
   */
  maxParallelRepairingNodes?: string;
  /**
   * @remarks
   * The circuit breaker condition for self-healing. When the number or percentage of faulty nodes exceeds this threshold, self-healing enters a circuit breaker state and stops initiating new repair actions. You can specify a number (such as 10, valid range: 1 to 100000) or a percentage (such as 20%, valid range: 1% to 100%). Default value: 100%.
   * 
   * @example
   * 20%
   */
  maxUnhealthyNodesThreshold?: string;
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only when `auto_repair=true`. Valid values:
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
   * Specifies whether to allow auto upgrade of kubelet. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether to allow auto upgrade of the operating system. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether to allow auto upgrade of the runtime. This parameter takes effect only when `auto_upgrade=true`. Valid values:
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
   * Specifies the packages to exclude during vulnerability fix.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when `auto_vul_fix=true`. Valid values:
   * - `true`: Node restarts are allowed.
   * - `false`: Node restarts are not allowed.
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels that are allowed for auto fix, separated by commas. Example: `asap,later`. Supported vulnerability levels:
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
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of extra nodes. You can specify either this parameter or `surge_percentage`.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. You can specify either this parameter or `surge`.
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
   * - `true`: Automatically repairs nodes.
   * 
   * - `false`: Does not automatically repair nodes.
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
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Use the `auto_upgrade` parameter at the upper level instead.
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
   * The resource group ID of the node pool. Instances scaled out by the node pool belong to this resource group.
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
   * The type of the private node pool. The private pool option for instance launch. After an elasticity assurance or capacity reservation takes effect, a private pool is generated for instances to use during launch. Valid values:
   * - `Open`: open mode. The system automatically matches open private pool capacity. If no matching private pool capacity is available, public pool resources are used to launch the instance.
   * - `Target`: targeted mode. The instance is launched using the specified private pool capacity. If the specified private pool capacity is unavailable, the instance fails to launch.
   * - `None`: none mode. The instance launch does not use private pool capacity.
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
   * The resource pool strategy used when instances are created. Resource pools include private pools generated after elasticity assurance or capacity reservation takes effect, and public pools, which are available for instance startup. Valid values:
   * 
   * - PrivatePoolFirst: private pool preferred. When this strategy is selected, if resouce_pool_options.private_pool_ids is specified, the specified private pools are used first. If no private pool is specified or the specified private pool has insufficient capacity, open-type private pools are automatically matched. If no eligible private pool is available, the public pool is used to create instances.
   * - PrivatePoolOnly: private pool only. When this strategy is selected, you must specify resouce_pool_options.private_pool_ids. If the specified private pool has insufficient capacity, the instance fails to start.
   * - None: no resource pool strategy is used.
   * 
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
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The duration of a single auto-renewal cycle. Valid values:
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to allow the automatic creation of pay-as-you-go instances to meet the required number of ECS instances when spot instances cannot be created due to cost or inventory reasons, if `multi_az_policy` is set to `COST_OPTIMIZED`. Valid values:
   * 
   * - `true`: allows the automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * - `false`: does not allow the automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The data cloud disk configurations for nodes. Valid values: 0 to 10. You can add up to 10 data cloud disks.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set to which the ECS instances created by the node pool belong. This setting takes effect only on new nodes. The deployment set of existing nodes is not changed.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The desired number of nodes in the node pool.
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
   * The custom image ID. You can call `DescribeKubernetesVersionMetadata` to query the images supported by the system. The latest system image is used by default.
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
   * - `ContainerOS`: Container-optimized image.
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
   * The list of node instance types. You can specify multiple instance types as alternatives. During node creation, the system attempts to purchase instances starting from the first specification until the creation succeeds. The final purchased instance type may vary depending on inventory availability.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for public IP addresses. Valid values:
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth for the node public IP address. Unit: Mbps (Mega bit per second). Valid values: [1,100\\].
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The key pair name. Specify either this parameter or `login_password`. When the node pool is a managed node pool, only `key_pair` is supported.
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
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required by the scaling group. Valid values: [0,1000\\]. Pay-as-you-go instances are created with priority when the number of pay-as-you-go instances is less than this value.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the instances that exceed the minimum number of pay-as-you-go instances (`on_demand_base_capacity`) in the scaling group. Valid values: [0,100\\].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of nodes in the node pool. This parameter takes effect only when `instance_charge_type` is set to `PrePaid` and is required in this case.
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
   * The list of RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pools and resource pool policies used when creating instances. After you set this parameter, note the following:
   */
  resourcePoolOptions?: ModifyClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling group mode. Valid values:
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
   * The number of available instance types. The scaling group creates spot instances in a cost-optimized manner across multiple instance types. Valid values: [1,10\\].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable spot instance supplementation. If enabled, when the scaling group receives a system message that a spot instance will be reclaimed, it attempts to create a new instance to replace the spot instance that is about to be reclaimed. Valid values:
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
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable burst (I/O performance burst) for the node system cloud disk. Valid values:
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The multiple cloud disk types for the system cloud disk. If a cloud disk type with a higher priority is unavailable, the system automatically attempts the next priority cloud disk type to create the system cloud disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The type of the system cloud disk for nodes. Valid values:
   * - `cloud_efficiency`: ultra cloud disk.
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
   * The encryption algorithm used by the system cloud disk. Valid values: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system cloud disk. Valid values:
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
   * The performance level of the node system cloud disk. This parameter takes effect only for ESSD cloud disks. The performance level is related to the cloud disk size. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for the node system cloud disk.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the node system cloud disk. Unit: GiB.
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
   * Adds tags only to ECS instances.
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
   * Specifies whether to enable the confidential computing cluster. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Not enabled.
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
   * The Lingjun node pool configuration. (Not effective)
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

