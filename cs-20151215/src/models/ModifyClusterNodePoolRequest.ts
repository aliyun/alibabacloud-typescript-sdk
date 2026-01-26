// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { InstancePatterns } from "./InstancePatterns";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class ModifyClusterNodePoolRequestAutoScaling extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead. The maximum bandwidth of the EIP.
   * 
   * Valid values: 1 to 100. Unit: Mbit/s.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead.
   * 
   * The metering method of the EIP. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth.
   * *   `PayByTraffic`: pay-by-data-transfer.
   * 
   * Default value: `PayByBandwidth`.
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
   * 
   * *   `true`: enables auto scaling for the node pool. When the capacity planning of the cluster cannot meet the requirements of pod scheduling, ACK automatically scales out nodes based on the configured minimum and maximum number of instances. By default, node instant scaling is enabled for clusters that run Kubernetes 1.24. By default, node auto scaling is enabled for clusters that run Kubernetes versions earlier than 1.24. For more information, see [Auto scaling of nodes](https://help.aliyun.com/document_detail/2746785.html).
   * *   `false`: disables auto scaling. Container Service for Kubernetes (ACK) adjusts the number of nodes in the node pool based on the value of the Expected Nodes parameter. The number of nodes is always the same as the value of the Expected Nodes parameter.
   * 
   * If you set this parameter to false, other parameters in the `auto_scaling` section do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead.
   * 
   * *   `true`: associates an elastic IP address (EIP) with the node pool.
   * *   `false`: does not associate an EIP with the node pool.
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
   * The maximum number of nodes that can be created in the node pool. Existing instances are excluded. This parameter takes effect only when `enable=true` is specified.
   * 
   * The value must be at least the value of min_instances and cannot exceed 2000. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of nodes that must be kept in the node pool. Existing instances are excluded. This parameter takes effect only when `enable=true` is specified.
   * 
   * The value must be at least 0 and cannot exceed the value of max_instances. Default value: 0.
   * 
   * > 
   * 
   * *   When the minimum number of instances is greater than 0 and a scaling group is set up, ECS instances are automatically created based on the minimum number.
   * 
   * *   We recommend that the value of max_instances is equal to or larger than the current number of nodes in the node pool. If the value of max_instances is less than the current number of nodes in the node pool, the node pool will be scaled in after you enable auto scaling for the node pool.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The instance type that is used for auto scaling. Valid values:
   * 
   * *   `cpu`: regular instance.
   * *   `gpu`: GPU-accelerated instance.
   * *   `gpushare`: shared GPU-accelerated instance.
   * *   `spot`: preemptible instance.
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
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
   * 
   * *   `true`: installs the CloudMonitor agent on ECS nodes.
   * *   `false`: does not install the CloudMonitor agent on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * *   `none`: specifies that the default CPU affinity is used.
   * 
   * Default value: `none`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The labels that are added to the nodes in the cluster. You must add the label based on the following rules:
   * 
   * *   A label is a case-sensitive key-value pair. You can add up to 20 labels.
   * *   The key must be unique and cannot exceed 64 characters in length. The value can be empty and cannot exceed 128 characters in length. Keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  labels?: Tag[];
  nodeNameMode?: string;
  /**
   * @remarks
   * Predefined custom data. Nodes automatically run predefined scripts before they are added to the cluster. For more information, see [User-Data script](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  preUserData?: string;
  /**
   * @remarks
   * The name of the container runtime. The following types of runtime are supported by ACK:
   * 
   * *   containerd: containerd is the recommended runtime and supports all Kubernetes versions.
   * *   Sandboxed-Container.runv: The Sandbox-Container runtime provides improved isolation and supports Kubernetes 1.31 and earlier.
   * *   docker: discontinued. The Docker runtime supports Kubernetes 1.22 and earlier.
   * 
   * Default value: containerd.
   * 
   * @example
   * docker
   */
  runtime?: string;
  /**
   * @remarks
   * The version of the container runtime.
   * 
   * @example
   * 19.03.5
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The configurations of node taints.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the nodes are unschedulable after a scale-out activity is performed.
   * 
   * *   true: The nodes are unschedulable after a scale-out activity is performed.
   * *   false: The nodes are schedulable after a scale-out activity is performed.
   * 
   * @example
   * false
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The user data of the instance. Nodes automatically run user-data scripts after they are added to the cluster. For more information, see [User-Data script](https://help.aliyun.com/document_detail/49121.html).
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
  approvalRequired?: boolean;
  /**
   * @example
   * r-xxxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically restart nodes after repairing the nodes. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
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
   * Specifies whether ACK is allowed to automatically upgrade the kubelet. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically upgrade the operating system. This parameter takes effect only when you specify `auto_upgrade=true`. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically upgrade the runtime. This parameter takes effect only when you specify `auto_upgrade=true`. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * Default value: `false`.
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
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically restart nodes after repairing the nodes. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The severity levels of CVEs that can be automatically patched. Separate multiple levels with commas (,). Example: `asap,later`. Valid values:
   * 
   * *   `asap`: high.
   * *   `later`: medium.
   * *   `nntf`: low.
   * 
   * If `auto_vul_fix=true` is specified, the default value is `asap`.
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
   * This parameter is deprecated. Use the preceding `auto_upgrade` parameter instead.
   * 
   * Specifies whether to enable auto upgrade. Valid values:
   * 
   * *   true: enables auto upgrade.
   * *   false: disables auto upgrade.
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
   * The maximum number of nodes that can be in the Unavailable state.
   * 
   * Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of additional nodes that are temporarily added to the node pool during an auto upgrade. Specify this parameter or `surge_percentage`.
   * 
   * A node is unavailable during an upgrade. Additional nodes are used to temporarily host the workloads of nodes that are being upgraded.
   * 
   * >  We recommend that you specify a value that does not exceed the current number of nodes in the node pool.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of additional nodes in the node pool. Specify this parameter or the `surge` parameter is specified.
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
  /**
   * @remarks
   * Specifies whether to enable auto node repair. This parameter takes effect only if `enable` is set to true. Valid values:
   * 
   * *   `true`: enables auto repair.
   * *   `false`: disables auto repair.
   * 
   * Default value: `true`.
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
   * Specifies whether to enable auto upgrade. Valid values:
   * 
   * *   `true`: enables auto upgrade.
   * *   `false`: disables auto upgrade.
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
   * Specifies whether ACK is allowed to automatically patch CVE vulnerabilities. Valid values:
   * 
   * *   `true`: enables auto CVE patching.
   * *   `true`: disables auto CVE patching.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The auto CVE patching policy.
   */
  autoVulFixPolicy?: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * *   `true`: enables the managed node pool feature.
   * *   `false`: disables the managed node pool feature. Other parameters in this section take effect only when `enable=true` is specified.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated. Use the preceding `auto_upgrade` parameter instead.
   * 
   * The configurations of auto upgrade. The configurations take effect only when `enable` is set to true.
   * 
   * @deprecated
   */
  upgradeConfig?: ModifyClusterNodePoolRequestManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
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
   * The ID of the resource group to which the node pool belongs. Instances that are added to the node pool belong to this resource group.
   * 
   * Each resource can belong only to one resource group. You can regard a resource group as a project, an application, or an organization based on your business scenarios.
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
   * The private node pool ID. This parameter is available only when `match_criteria` is set to `Target`.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of private node pool. This parameter specifies the type of private pool that you want to use to create instances. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. The system selects a private pool to start instances. Valid values:
   * 
   * *   `Open`: open private pool. The system selects an open private pool to start instances. If no matching open private pools are available, the resources in the public pool are used.
   * *   `Target`: uses a specified private pool. The system uses the resources of the specified private pool to start instances. If the specified private pool is unavailable, instances cannot be started.
   * *   `None`: no private pool is used. The resources of private pools are not used to launch the instances.
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
  privatePoolIds?: string[];
  /**
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
   * The instance type of preemptible instances.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The price cap of a preemptible instance.
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
   * Specifies whether to enable auto-renewal for the nodes in the node pool. This parameter takes effect only when you set `instance_charge_type` to `PrePaid`. Valid values:
   * 
   * *   `true`: enables auto-renewal.
   * *   `false`: disables auto-renewal.
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
   * *   Valid values when PeriodUnit is set to Week: 1, 2, and 3.
   * *   Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the price or insufficient inventory. This parameter takes effect when you set `multi_az_policy` to `COST_OPTIMIZED`. Valid values:
   * 
   * *   `true`: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
   * *   `false`: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The configurations of the data disks that are mounted to nodes in the node pool. Valid values: 0 to 10. You can mount at most 10 data disks to the nodes in the node pool.
   */
  dataDisks?: DataDisk[];
  /**
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * The expected number of nodes in the node pool. We recommend that you configure at least two nodes to ensure that cluster components run as expected. You can modify the Expected Nodes parameter to adjust the number of nodes in the node pool.
   * 
   * If you do not want to create nodes in the node pool, set this parameter to 0. You can manually modify this parameter to add nodes later.
   * 
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @remarks
   * The custom image ID. You can call the `DescribeKubernetesVersionMetadata` operation to query the images supported by ACK. By default, the latest image is used.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200904.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of operating system distribution that you want to use. We recommend that you use this parameter to specify the node operating system. Valid values:
   * 
   * *   `AliyunLinux`: Alibaba Cloud Linux 2.
   * *   `AliyunLinuxSecurity`: Alibaba Cloud Linux 2 (UEFI).
   * *   `AliyunLinux3`: Alibaba Cloud Linux 3.
   * *   `AliyunLinux3Arm64`: Alibaba Cloud Linux 3 for ARM.
   * *   `AliyunLinux3Security`: Alibaba Cloud Linux 3 (UEFI).
   * *   `CentOS`: CentOS.
   * *   `Windows`: Windows.
   * *   `WindowsCore`: Windows Core.
   * *   `ContainerOS`: ContainerOS.
   * *   `AliyunLinux3ContainerOptimized`: Alibaba Cloud Linux 3 Container-optimized.
   * 
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of nodes in the node pool. Valid values:
   * 
   * *   `PrePaid`: subscription.
   * *   `PostPaid`: pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * .The instance attributes.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The instance types. You can specify multiple instance types. A node is assigned the instance type from the first instance type of the list until the node is created. The instance type that is used to create the node varies based on the actual instance stock.
   * 
   * You can specify 1 to 10 instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The metering method of the public IP address. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth.
   * *   `PayByTraffic`: pay-by-data-transfer.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth of the public IP address of the node. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must specify this parameter or `login_password`. You must specify the `key_pair` parameter if the node pool is a managed node pool.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * The password for SSH logon. You must specify this parameter or `key_pair`. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The ECS instance scaling policy for the multi-zone scaling group. Valid values:
   * 
   * *   `PRIORITY`: ECS instances are scaled based on the value of VSwitchIds.N. If an ECS instance cannot be created in the zone where the vSwitch that has the highest priority resides, the system creates the ECS instance in the zone where the vSwitch that has the next highest priority resides.
   * 
   * *   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created if preemptible instance types are specified in the scaling configurations. You can set the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
   * 
   *     **
   * 
   *     **Note** `COST_OPTIMIZED` takes effect only when multiple instance types are specified or at least one preemptible instance type is specified.
   * 
   * *   `BALANCE`: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances become imbalanced among multiple zones due to insufficient inventory, you can call the `RebalanceInstances` operation of Auto Scaling to balance the instance distribution among zones. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, the system preferably creates pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by `on_demand_base_capacity`. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of nodes in the node pool. This parameter takes effect and is required if you set `instance_charge_type` to `PrePaid`.
   * 
   * *   If `period_unit` is set to Week, the valid values of `period` are 1, 2, 3, and 4.
   * *   If `period_unit` is set to Month, the valid values of `period` are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of nodes in the node pool. This parameter takes effect and is required if you set `instance_charge_type` to `PrePaid`. Valid values:
   * 
   * *   `Month`: The subscription duration is measured in months.
   * *   `Week`: The subscription duration is measured in weeks.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is obsolete. Use the `image_type` parameter instead.
   * 
   * The OS platform. Valid values:
   * 
   * *   `AliyunLinux`
   * *   `CentOS`
   * *   `Windows`
   * *   `WindowsCore`
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
  privatePoolOptions?: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The IDs of ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  resourcePoolOptions?: ModifyClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling mode of the scaling group. Valid values:
   * 
   * *   `release`: the standard mode. ECS instances are created and released based on resource usage.
   * *   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances that are attached with local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  securityGroupIds?: string[];
  /**
   * @remarks
   * The number of instance types that are available for creating preemptible instances. Auto Scaling creates preemptible instances of multiple instance types that are available at the lowest cost. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable the supplementation of preemptible instances. If you set this parameter to true, when the scaling group receives a system message indicating that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace the instance. Valid values:
   * 
   * *   `true`: supplements preemptible instances.
   * *   `false`: does not supplement preemptible instances.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The bid configurations of preemptible instances.
   */
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The bidding policy of preemptible instances. Valid values:
   * 
   * *   `NoSpot`: non-preemptible instance.
   * *   `SpotWithPriceLimit`: specifies the highest bid.
   * *   `SpotAsPriceGo`: automatically submits bids based on the up-to-date market price.
   * 
   * For more information, see [Create a preemptible elastic container instance](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature for the system disk. Valid values:
   * 
   * *   true: enables the burst feature.
   * *   false: disables the burst feature.
   * 
   * This parameter is effective only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the system disk. The system attempts to create system disks of a disk category with a lower priority if the disk category with a higher priority is unavailable.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   `cloud_efficiency`: ultra disk.
   * *   `cloud_ssd`: standard SSD.
   * *   `cloud_essd`: Enterprise ESSD (ESSD).
   * *   `cloud_auto`: ESSD AutoPL disk.
   * *   `cloud_essd_entry`: ESSD Entry disk.
   * 
   * Default value: `cloud_efficiency`.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The encryption algorithm that is used to encrypt the system disk. Set the value to aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * *   true: encrypts the system disk.
   * *   false: does not encrypt the system disk.
   * 
   * @example
   * false
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
   * The performance level (PL) of the system disk. This parameter takes effect only for an ESSD. You can specify a higher PL if you increase the size of the data disk. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * *   PL0: moderate maximum concurrent I/O performance and low I/O latency.
   * *   PL1: moderate maximum concurrent I/O performance and low I/O latency.
   * *   PL2: high maximum concurrent I/O performance and low I/O latency.
   * *   PL3: ultra-high maximum concurrent I/O performance and ultra-low I/O latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The preset IOPS of the system disk.
   * 
   * Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * This parameter is effective only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB
   * 
   * Valid values: 20 to 2048.
   * 
   * The value of this parameter must be at least 20 and greater than or equal to the size of the image.
   * 
   * Default value: the greater value between 40 and the image size.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  systemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * The tags that you want to add only to ECS instances.
   * 
   * The tag key must be unique and cannot exceed 128 characters in length. The tag key and value cannot start with aliyun or acs: or contain https:// or http://.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The vSwitch IDs. You can specify one to eight vSwitch IDs.
   * 
   * >  To ensure high availability, we recommend that you select vSwitches that reside in different zones.
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
   * *   `true`: enables confidential computing for the cluster.
   * *   `false`: disables confidential computing for the cluster.
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
   * The configurations about auto scaling.
   */
  autoScaling?: ModifyClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * Specifies whether concurrency is supported.
   * 
   * @example
   * true
   */
  concurrency?: boolean;
  /**
   * @remarks
   * The configurations of the cluster.
   */
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The configurations of the managed node pool feature.
   */
  management?: ModifyClusterNodePoolRequestManagement;
  /**
   * @remarks
   * The configurations of the node pool.
   */
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group that is used by the node pool.
   */
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The configurations of confidential computing for the cluster.
   */
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
  /**
   * @remarks
   * Specifies whether to update node information, such as labels and taints.
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

