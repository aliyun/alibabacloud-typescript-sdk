// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { DiskInit } from "./DiskInit";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";
import { InstancePatterns } from "./InstancePatterns";
import { KubeletConfig } from "./KubeletConfig";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class CreateClusterNodePoolRequestAutoMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the intelligent managed mode.
   * Valid values:
   * 
   * - true: Enables the intelligent managed mode. You can enable this mode only when the intelligent managed mode is enabled for the cluster.
   * 
   * - false: Disables the intelligent managed mode.
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

export class CreateClusterNodePoolRequestAutoScaling extends $dara.Model {
  /**
   * @remarks
   * [This parameter is deprecated] Use \\`internet_charge_type\\` and \\`internet_max_bandwidth_out\\` instead.
   * 
   * The peak bandwidth of the EIP. Unit: Mbps.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * [This parameter is deprecated] Use \\`internet_charge_type\\` and \\`internet_max_bandwidth_out\\` instead.
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
   * - `true`: Enables auto scaling for the node pool. If the resources planned for the cluster cannot meet the scheduling requirements of pods, Container Service for Kubernetes (ACK) automatically scales out or scales in nodes based on the configured minimum and maximum numbers of instances. For clusters of Kubernetes 1.24 or later, instant scaling is enabled by default. For clusters of a Kubernetes version earlier than 1.24, node autoscaling is enabled by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: Disables auto scaling. ACK adjusts the number of nodes in the node pool based on the value of \\`desired_size\\` to maintain a specific number of nodes.
   * 
   * If you set this parameter to false, other parameters in \\`auto_scaling\\` do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * [This parameter is deprecated] This parameter is deprecated. Use \\`internet_charge_type\\` and \\`internet_max_bandwidth_out\\` instead.
   * 
   * Specifies whether to associate an EIP with the node. Valid values:
   * 
   * - `true`: associates an EIP with the node.
   * 
   * - `false`: does not associate an EIP with the node.
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
   * The maximum number of instances that can be created in the node pool. This does not include existing instances. This parameter takes effect only if \\`enable\\` is set to \\`true\\`.
   * 
   * The value must be in the range of [\\`min_instances\\`, 2000]. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of instances that can be created in the node pool. This does not include existing instances. This parameter takes effect only if \\`enable\\` is set to \\`true\\`.
   * 
   * The value must be in the range of [0, \\`max_instances\\`]. Default value: 0.
   * 
   * > - If the minimum number of instances is not 0, the specified number of ECS instances are automatically created after the scaling group is created.
   * >
   * > - We recommend that you set the maximum number of instances to a value that is not smaller than the current number of nodes in the node pool. Otherwise, nodes in the node pool are scaled in after auto scaling is enabled.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The type of instances that are automatically scaled. This parameter takes effect only if \\`enable\\` is set to \\`true\\`. Valid values:
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
   * >Notice: You cannot change the value of this parameter after the node pool is created.
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

export class CreateClusterNodePoolRequestEfloNodeGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun cluster that you want to associate with the Lingjun node pool when you create the node pool.
   * 
   * @example
   * i1169130516633730****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Lingjun group in the Lingjun cluster that you want to associate with the Lingjun node pool when you create the node pool.
   * 
   * @example
   * ng-ec3c96ff0aa****
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      groupId: 'group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestInterconnectConfig extends $dara.Model {
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * The network bandwidth of the enhanced edge node pool. Unit: Mbps.
   * 
   * @example
   * null
   */
  bandwidth?: number;
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * The ID of the CCN instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * null
   */
  ccnId?: string;
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * The region of the CCN instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * null
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * The ID of the CEN instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * null
   */
  cenId?: string;
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * The subscription duration of the enhanced edge node pool. Unit: months.
   * 
   * @example
   * null
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

export class CreateClusterNodePoolRequestKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install Cloud Monitor on the ECS nodes. After Cloud Monitor is installed, you can view the monitoring information of the created ECS instances in the Cloud Monitor console. We recommend that you enable this feature. Valid values:
   * 
   * - `true`: Installs Cloud Monitor on the ECS nodes.
   * 
   * - `false`: Does not install Cloud Monitor on the ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of the node. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:
   * 
   * - `static`: Allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * 
   * - `none`: Enables the default CPU affinity scheme.
   * 
   * Default value: `none`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The labels that you want to add to the nodes in the Kubernetes cluster.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name. If you customize the node name, the node name, ECS instance name, and ECS instance hostname are changed.
   * 
   * > For Windows instances for which custom node names are enabled, the hostname is fixed as the IP address. Hyphens (-) are used to replace periods (.) in the IP address. The hostname does not contain a prefix or a suffix.
   * 
   * A node name consists of a prefix, the node IP address, and a suffix.
   * 
   * - The total length must be 2 to 64 characters. The node name must start and end with a lowercase letter or a digit.
   * 
   * - The prefix and suffix can contain uppercase letters, lowercase letters, digits, hyphens (-), and periods (.). They must start with an uppercase or lowercase letter. They cannot start or end with a hyphen (-) or a period (.). You cannot use consecutive hyphens (-)or periods (.). You cannot use consecutive hyphens (-) or periods (.).
   * 
   * - The prefix is required (due to an ECS limit). The suffix is optional.
   * 
   * - The node IP address is the complete private IP address of the node.
   * 
   * For example, if the node IP address is 192.XX.YY.55, the prefix is aliyun.com, and the suffix is test.
   * 
   * - If the node is a Linux node, the node name, ECS instance name, and ECS instance hostname are all aliyun.com192.XX.YY.55test.
   * 
   * - If the node is a Windows node, the ECS instance hostname is 192-XX-YY-55, and the node name and ECS instance name are both aliyun.com192.XX.YY.55test.
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The pre-join instance user data. The specified user data script is run before the node joins the cluster. For more information, see [User-Data scripts](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * dGhpcyBpcyBhIGV4YW1wbGU
   */
  preUserData?: string;
  /**
   * @remarks
   * The name of the container runtime. ACK supports the following three container runtimes.
   * 
   * - containerd: We recommend that you use this runtime. It is supported by all cluster versions.
   * 
   * - Sandboxed-Container.runv: a sandboxed container that provides higher isolation. It is supported by clusters of Kubernetes 1.31 or earlier.
   * 
   * - docker: no longer maintained. It is supported by clusters of Kubernetes 1.22 or earlier.
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
   * The taint configurations.
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
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The instance user data. After the node joins the cluster, the specified user data script is run. For more information, see [User-Data scripts](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * dGhpcyBpcyBhIGV4YW1wbGU=
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

export class CreateClusterNodePoolRequestManagementAutoRepairPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether manual approval is required for node repair.
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only if \\`auto_repair\\` is set to \\`true\\`. Valid values:
   * 
   * - `true`: Allows node restart.
   * 
   * - `false`: Disallows node restart.
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
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRequired: 'boolean',
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

export class CreateClusterNodePoolRequestManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow auto kubelet upgrade. This parameter takes effect only if \\`auto_upgrade\\` is set to \\`true\\`. Valid values:
   * 
   * - `true`: Allows auto kubelet upgrade.
   * 
   * - `false`: Disallows auto kubelet upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether to allow auto OS upgrade. This parameter takes effect only if \\`auto_upgrade\\` is set to \\`true\\`. Valid values:
   * 
   * - `true`: Allows auto OS upgrade.
   * 
   * - `false`: Disallows auto OS upgrade.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether to allow auto runtime upgrade. This parameter takes effect only if \\`auto_upgrade\\` is set to \\`true\\`. Valid values:
   * 
   * - `true`: Allows auto runtime upgrade.
   * 
   * - `false`: Disallows auto runtime upgrade.
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

export class CreateClusterNodePoolRequestManagementAutoVulFixPolicy extends $dara.Model {
  /**
   * @remarks
   * The packages that should be excluded from vulnerability fixing.
   * 
   * Default value: `kernel`.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only if \\`auto_vul_fix\\` is set to \\`true\\`. Valid values:
   * 
   * - `true`: Allows node restart.
   * 
   * - `false`: Disallows node restart.
   * 
   * Default value: `true`
   * 
   * @example
   * false
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels that are allowed to be automatically fixed. Separate multiple levels with commas. Example: `asap,later`. Supported vulnerability levels:
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

export class CreateClusterNodePoolRequestManagementUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * [This parameter is deprecated] Use the \\`auto_upgrade\\` parameter instead.
   * 
   * Specifies whether to enable auto upgrade. Valid values:
   * 
   * - `true`: enables auto upgrade.
   * 
   * - `false`: disables auto upgrade.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes.
   * The value must be in the range of [1, 1000].
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of extra nodes. You can specify only one of \\`surge\\` and \\`surge_percentage\\`.
   * 
   * Nodes become unavailable during an upgrade. You can create extra nodes to compensate for the load on the cluster.
   * 
   * > We recommend that the number of extra nodes does not exceed the current number of nodes.
   * 
   * @example
   * 0
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. You can specify only one of \\`surge\\` and \\`surge_percentage\\`.
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

export class CreateClusterNodePoolRequestManagement extends $dara.Model {
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto node repair. This parameter takes effect only if \\`enable\\` is set to \\`true\\`.
   * 
   * - `true`: Enables auto node repair.
   * 
   * - `false`: Disables auto node repair.
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
  autoRepairPolicy?: CreateClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto node upgrade. This parameter takes effect only if \\`enable\\` is set to \\`true\\`.
   * 
   * - `true`: Enables auto node upgrade.
   * 
   * - `false`: Disables auto node upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto node upgrade policy.
   */
  autoUpgradePolicy?: CreateClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to automatically fix CVE vulnerabilities. This parameter takes effect only if \\`enable\\` is set to \\`true\\`.
   * 
   * - `true`: Automatically fixes CVE vulnerabilities.
   * 
   * - `false`: Does not automatically fix CVE vulnerabilities.
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
  autoVulFixPolicy?: CreateClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * - `true`: Enables the managed node pool feature.
   * 
   * - `false`: Disables the managed node pool feature. If you set this parameter to \\`false\\`, the other parameters of \\`management\\` do not take effect.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * [This parameter is deprecated] Use the \\`auto_upgrade\\` parameter instead.
   * 
   * The auto upgrade configurations. This parameter takes effect only if \\`enable\\` is set to \\`true\\`.
   * 
   * @deprecated
   */
  upgradeConfig?: CreateClusterNodePoolRequestManagementUpgradeConfig;
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
      autoRepairPolicy: CreateClusterNodePoolRequestManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: CreateClusterNodePoolRequestManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: CreateClusterNodePoolRequestManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: CreateClusterNodePoolRequestManagementUpgradeConfig,
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

export class CreateClusterNodePoolRequestNodeComponentsConfig extends $dara.Model {
  /**
   * @remarks
   * The custom configurations of the node component.
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

export class CreateClusterNodePoolRequestNodeComponents extends $dara.Model {
  /**
   * @remarks
   * The configurations of the node component.
   */
  config?: CreateClusterNodePoolRequestNodeComponentsConfig;
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
      config: CreateClusterNodePoolRequestNodeComponentsConfig,
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

export class CreateClusterNodePoolRequestNodeConfig extends $dara.Model {
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

export class CreateClusterNodePoolRequestNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the node pool.
   * 
   * This parameter is required.
   * 
   * @example
   * nodepool-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group. Instances that are created in the node pool belong to this resource group.
   * 
   * A resource can belong to only one resource group. You can map resource groups to concepts such as projects, applications, or organizations based on your business scenarios.
   * 
   * @example
   * rg-acfmyvw3wjmb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the node pool. Valid values:
   * 
   * - `ess`: a regular node pool. This type of node pool provides managed features and auto scaling.
   * 
   * - `edge`: an edge node pool.
   * 
   * - `lingjun`: a Lingjun node pool.
   * 
   * - `hybrid`: a hybrid cloud node pool.
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

export class CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool. You must specify the private pool ID when \\`match_criteria\\` is set to \\`Target\\`.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private pool. This parameter specifies the capacity of the private pool that you want to use to launch instances. An elastic assurance service or a capacity reservation service takes effect after it is generated. You can select a capacity type when you launch an instance. Valid values:
   * 
   * - `Open`: Open mode. The system automatically matches the capacity of open private pools. If no matching private pool is found, the instance is launched using public pool resources.
   * 
   * - `Target`: Target mode. The instance is launched using the capacity of the specified private pool. If the capacity of the private pool is unavailable, the instance fails to be launched.
   * 
   * - `None`: The instance is launched without using the capacity of a private pool.
   * 
   * @example
   * Target
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

export class CreateClusterNodePoolRequestScalingGroupResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * A list of private pool IDs. These are the IDs of elastic assurance services or capacity reservation services. You can only specify the IDs of private pools in Target mode. The number of IDs must be in the range of 1 to 20.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool policy for instance creation. Resource pools include private pools (generated by elastic assurance or capacity reservation services) and public pools. Valid values:
   * PrivatePoolFirst: Prioritizes private pools. If you specify \\`resouce_pool_options.private_pool_ids\\`, the specified private pools are used first. If no private pool is specified or the specified pools have insufficient capacity, the system automatically tries to use open private pools. If no suitable private pool is found, the public pool is used.
   * PrivatePoolOnly: Uses only private pools. You must specify \\`resouce_pool_options.private_pool_ids\\`. If the specified private pools have insufficient capacity, the instance fails to launch.
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

export class CreateClusterNodePoolRequestScalingGroupSpotPriceLimit extends $dara.Model {
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
   * The maximum bid price for a single instance.
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

export class CreateClusterNodePoolRequestScalingGroupTags extends $dara.Model {
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * node-k-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * node-v-1
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

export class CreateClusterNodePoolRequestScalingGroup extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the nodes in the node pool. This parameter takes effect only if \\`instance_charge_type\\` is set to \\`PrePaid\\`. Valid values:
   * 
   * - `true`: enables auto-renewal.
   * 
   * - `false`: disables auto-renewal.
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
   * - If \\`PeriodUnit\\` is set to \\`Week\\`: 1, 2, and 3.
   * 
   * - If \\`PeriodUnit\\` is set to \\`Month\\`: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * [Deprecated] Use the \\`security_hardening_os\\` parameter instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the instance quantity requirement when \\`multi_az_policy\\` is set to \\`COST_OPTIMIZED\\` and spot instances cannot be created due to issues such as price or insufficient inventory. Valid values:
   * 
   * - `true`: Allows the system to automatically create pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * - `false`: Does not allow the system to automatically create pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The data disk configurations of the nodes in the node pool.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The ID of the deployment set. You can use a deployment set to distribute the ECS instances created in the node pool across different physical servers to ensure high availability and underlying disaster recovery. When you create ECS instances in a deployment set, the instances are launched in the specified region based on the deployment strategy that you set.
   * 
   * >Notice: 
   * 
   * After you select a deployment set, the maximum number of nodes in the node pool is limited. By default, a deployment set supports a maximum of 20 × Number of zones (the number of zones is determined by the vSwitches) nodes. Select a deployment set with sufficient quota to prevent node creation failures.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * The total number of nodes that the node pool should maintain. We recommend that you configure at least two nodes to ensure that cluster components run as expected. You can adjust the expected number of nodes to scale out or scale in the node pool.
   * 
   * If you do not need to create nodes, set this parameter to 0. You can manually adjust the number of nodes later.
   * 
   * @example
   * 0
   */
  desiredSize?: number;
  /**
   * @remarks
   * The block device initialization configurations.
   */
  diskInit?: DiskInit[];
  /**
   * @remarks
   * The ID of the custom image. By default, the system-provided image is used.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The OS image type. Valid values:
   * 
   * - `AliyunLinux`: Alinux2 image.
   * 
   * - `AliyunLinuxSecurity`: Alinux2 UEFI image.
   * 
   * - `AliyunLinux3`: Alinux3 image.
   * 
   * - `AliyunLinux3Arm64`: Alinux3 ARM image.
   * 
   * - `AliyunLinux3Security`: Alinux3 UEFI image.
   * 
   * - `CentOS`: CentOS image.
   * 
   * - `Windows`: Windows image.
   * 
   * - `WindowsCore`: WindowsCore image.
   * 
   * - `ContainerOS`: Container-Optimized OS.
   * 
   * - `AliyunLinux3ContainerOptimized`: Alinux3 Container-Optimized OS.
   * 
   * @example
   * AliyunLinux3
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
   * The ECS instance metadata access configurations.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance property configurations.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * A list of instance types for the nodes in the node pool. When the system creates nodes in the node pool, it selects an instance type from the list that meets the requirements.
   * 
   * The number of instance types must be in the range of [1, 10].
   * 
   * > For high availability, we recommend that you select multiple instance types.
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method of the public IP address. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * 
   * - PayByTraffic: pay-by-traffic.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth of the node. Unit: Mbit/s. The value must be in the range of [1, 100].
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair that is used for passwordless logon. You must specify one of \\`key_pair\\` and \\`login_password\\`.
   * 
   * > If you select Container-Optimized OS for the node pool, you can use only \\`key_pair\\`.
   * 
   * @example
   * np-key-name
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether to log on to the created ECS instances as a non-root user.
   * 
   * - true: Logs on as the ecs-user.
   * 
   * - false: Logs on as the root user.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The SSH logon password. You must specify one of \\`key_pair\\` and \\`login_password\\`. The password must be 8 to 30 characters in length, and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * ****
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for the ECS instances in the multi-zone scaling group. Valid values:
   * 
   * - `PRIORITY`: Scales instances based on the vSwitch priority. The system scales instances based on the order of vSwitches that you specify in \\`VSwitchIds.N\\`. If the system fails to create an ECS instance in the zone where the vSwitch with the highest priority resides, it automatically uses the vSwitch with the next highest priority to create the instance.
   * 
   * - `COST_OPTIMIZED`: Creates instances based on the vCPU unit price in ascending order. When multiple instance types are specified and the preemptible instance policy is configured, the system gives priority to creating the lowest-cost instance type. You can also use the \\`CompensateWithOnDemand\\` parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
   * 
   *   > `COST_OPTIMIZED` takes effect only when multiple instance types are specified or the preemptible instance policy is configured.
   * 
   * - `BALANCE`: Evenly distributes ECS instances across the specified zones. If the distribution of ECS instances becomes unbalanced due to insufficient inventory, you can call the API [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html) operation to balance the resource distribution.
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be included in the scaling group. The value must be in the range of [0, 1000]. If the number of pay-as-you-go instances is less than this value, the system gives priority to creating pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that are created after the minimum number of pay-as-you-go instances (\\`on_demand_base_capacity\\`) is met. The value must be in the range of [0, 100].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of the nodes in the node pool. This parameter is required and takes effect only if \\`instance_charge_type\\` is set to \\`PrePaid\\`.
   * 
   * - If \\`period_unit\\` is set to \\`Week\\`, the valid values of \\`period\\` are 1, 2, 3, and 4.
   * 
   * - If \\`period_unit\\` is set to \\`Month\\`, the valid values of \\`period\\` are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the nodes in the node pool. This parameter is required and takes effect only if \\`instance_charge_type\\` is set to \\`PrePaid\\`.
   * 
   * - `Month`: The billing cycle is measured in months.
   * 
   * - `Week`: The billing cycle is measured in weeks.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * [This parameter is deprecated] Use the \\`image_type\\` parameter instead.
   * 
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
   * null
   * 
   * @deprecated
   */
  platform?: string;
  /**
   * @remarks
   * The private pool configurations.
   */
  privatePoolOptions?: CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The name of the worker RAM role.
   * 
   * - If this parameter is left empty, the default worker RAM role of the cluster is used.
   * 
   * - If this parameter is not empty, the specified RAM role must be a **service role**, and its **trusted service** must be **Elastic Compute Service**. For more information, see [Create a service role](https://help.aliyun.com/document_detail/116800.html). If the specified RAM role is not the default worker RAM role of the cluster, the name of the role cannot start with \\`KubernetesMasterRole-\\` or \\`KubernetesWorkerRole-\\`.
   * 
   * >Notice: 
   * 
   * This parameter is supported only by ACK managed clusters of Kubernetes 1.22 or later.
   * 
   * @example
   * example-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * A list of RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and policy used to create instances. Note:
   * This parameter takes effect only when you create pay-as-you-go instances.
   * This parameter cannot be set at the same time as \\`private_pool_options.match_criteria\\` and \\`private_pool_options.id\\`.
   */
  resourcePoolOptions?: CreateClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling mode of the scaling group. Valid values:
   * 
   * - `release`: standard mode. The system creates and releases ECS instances to scale the group.
   * 
   * - `recycle`: accelerated mode. The system creates, stops, and starts ECS instances to scale the group. This improves the scaling speed. When an instance is stopped, its computing resources are not billed, but its storage resources are. This does not apply to instances with local disks.
   * 
   * Default value: `release`.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The ID of the security group for the node pool. You must specify one of \\`security_group_ids\\` and \\`security_group_id\\`. We recommend that you specify \\`security_group_ids\\`.
   * 
   * @example
   * sg-wz9a8g2mt6x5llu0****
   * 
   * @deprecated
   */
  securityGroupId?: string;
  /**
   * @remarks
   * A list of security group IDs. You must specify one of \\`security_group_ids\\` and \\`security_group_id\\`. We recommend that you specify \\`security_group_ids\\`. If you specify both \\`security_group_id\\` and \\`security_group_ids\\`, \\`security_group_ids\\` takes precedence.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Alibaba Cloud OS security hardening. Valid values:
   * 
   * - `true`: Enables Alibaba Cloud OS security hardening.
   * 
   * - `false`: Disables Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. You can enable MLPS 2.0 security hardening for nodes only when you select Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 for the OS image. Alibaba Cloud provides baseline check standards and scanning programs for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 Level 3 of MLPS 2.0 to ensure classified protection compliance.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of instance types that you can specify. The scaling group creates preemptible instances of multiple instance types that are available at the lowest cost. The value must be in the range of [1, 10].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable the instance reclaim mode. After this mode is enabled, when the system receives a message that a spot instance is about to be reclaimed, the scaling group attempts to create a new instance to replace the instance that is about to be reclaimed. Valid values:
   * 
   * - `true`: Enables the instance reclaim mode.
   * 
   * - `false`: Disables the instance reclaim mode.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The configurations of the price range for a single spot instance.
   */
  spotPriceLimit?: CreateClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The bidding policy for the spot instances. Valid values:
   * 
   * - `NoSpot`: The instance is not a spot instance.
   * 
   * - `SpotWithPriceLimit`: Sets the maximum bid price for the spot instance.
   * 
   * - `SpotAsPriceGo`: The system automatically bids based on the current market price.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/165053.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the system disk of the node. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * This parameter can be set only when \\`system_disk_category\\` is set to \\`cloud_auto\\`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The types of system disks. If a disk of a high-priority type is unavailable, the system automatically uses a disk of the next priority type to create the system disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The type of the system disk of the node. Valid values:
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
   * The encryption algorithm that is used to encrypt the system disk. Valid value: aes-256.
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
   * The performance level of the system disk for each node. This parameter applies only to Enhanced SSD (ESSD) disks. The performance level of an ESSD is determined by its size. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * - PL0: A moderate maximum concurrent I/O performance and a relatively stable read/write latency.
   * 
   * - PL1: A moderate maximum concurrent I/O performance and a relatively stable read/write latency.
   * 
   * - PL2: A high maximum concurrent I/O performance and a stable read/write latency.
   * 
   * - PL3: A very high maximum concurrent I/O performance and a very stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the system disk of the node.
   * 
   * Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * This parameter can be set only when \\`system_disk_category\\` is set to \\`cloud_auto\\`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk of the node. Unit: GiB.
   * 
   * The value must be in the range of [20, 2048].
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
   * A tag key cannot be repeated. The tag key can be up to 128 characters in length. The tag key and the tag value cannot start with “aliyun” or “acs:”, and cannot contain “https\\://” or “http\\://”.
   */
  tags?: CreateClusterNodePoolRequestScalingGroupTags[];
  /**
   * @remarks
   * A list of vSwitch IDs. The number of vSwitch IDs must be in the range of [1, 8].
   * 
   * > For high availability, we recommend that you select vSwitches in different zones.
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      cisEnabled: 'cis_enabled',
      compensateWithOnDemand: 'compensate_with_on_demand',
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
      securityHardeningOs: 'security_hardening_os',
      socEnabled: 'soc_enabled',
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
      cisEnabled: 'boolean',
      compensateWithOnDemand: 'boolean',
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
      privatePoolOptions: CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions,
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      resourcePoolOptions: CreateClusterNodePoolRequestScalingGroupResourcePoolOptions,
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityHardeningOs: 'boolean',
      socEnabled: 'boolean',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestScalingGroupSpotPriceLimit },
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
      tags: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestScalingGroupTags },
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

export class CreateClusterNodePoolRequestTeeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the confidential computing cluster.
   * 
   * - true: Enables confidential computing.
   * 
   * - false: Disables confidential computing.
   * 
   * @example
   * true
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

export class CreateClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The intelligent managed node pool configurations.
   */
  autoMode?: CreateClusterNodePoolRequestAutoMode;
  /**
   * @remarks
   * The auto scaling configurations.
   */
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * [This parameter is deprecated] Use desired_size instead.
   * 
   * The number of nodes in the node pool.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @remarks
   * The Lingjun node pool configurations.
   */
  efloNodeGroup?: CreateClusterNodePoolRequestEfloNodeGroup;
  /**
   * @remarks
   * Specifies whether to use the host network for the pod network.
   * 
   * - `true`: host network. Pods directly use the network stack of the host and share the IP address and ports with the host.
   * 
   * - `false`: container network. Pods have an independent network stack and do not occupy host network ports.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * The configurations of the edge node pool.
   * 
   * @deprecated
   */
  interconnectConfig?: CreateClusterNodePoolRequestInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only for node pools of the \\`edge\\` type. Valid values:
   * 
   * - `basic`: public network. Nodes in the node pool interact with cloud nodes over the Internet. Applications in the node pool cannot directly access the VPC in the cloud.
   * 
   * - `private`: private network. Nodes in the node pool connect to the cloud over a leased line, VPN, or CEN to achieve higher communication quality and better security.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Specifies whether nodes in the edge node pool can communicate with each other at Layer 3.
   * 
   * - `true`: All nodes in the node pool can communicate with each other at Layer 3.
   * 
   * - `false`: All hosts in the node pool cannot communicate with each other at Layer 3.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * The cluster-related configurations.
   */
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The configurations of the managed node pool feature.
   */
  management?: CreateClusterNodePoolRequestManagement;
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * The maximum number of nodes that the edge node pool can contain.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  maxNodes?: number;
  /**
   * @remarks
   * A list of node components.
   */
  nodeComponents?: CreateClusterNodePoolRequestNodeComponents[];
  /**
   * @remarks
   * The node configurations.
   */
  nodeConfig?: CreateClusterNodePoolRequestNodeConfig;
  /**
   * @remarks
   * The node pool configurations.
   */
  nodepoolInfo?: CreateClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group for the node pool.
   */
  scalingGroup?: CreateClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The configurations of the confidential computing cluster.
   */
  teeConfig?: CreateClusterNodePoolRequestTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoMode: 'auto_mode',
      autoScaling: 'auto_scaling',
      count: 'count',
      efloNodeGroup: 'eflo_node_group',
      hostNetwork: 'host_network',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      intranet: 'intranet',
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
      autoMode: CreateClusterNodePoolRequestAutoMode,
      autoScaling: CreateClusterNodePoolRequestAutoScaling,
      count: 'number',
      efloNodeGroup: CreateClusterNodePoolRequestEfloNodeGroup,
      hostNetwork: 'boolean',
      interconnectConfig: CreateClusterNodePoolRequestInterconnectConfig,
      interconnectMode: 'string',
      intranet: 'boolean',
      kubernetesConfig: CreateClusterNodePoolRequestKubernetesConfig,
      management: CreateClusterNodePoolRequestManagement,
      maxNodes: 'number',
      nodeComponents: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestNodeComponents },
      nodeConfig: CreateClusterNodePoolRequestNodeConfig,
      nodepoolInfo: CreateClusterNodePoolRequestNodepoolInfo,
      scalingGroup: CreateClusterNodePoolRequestScalingGroup,
      teeConfig: CreateClusterNodePoolRequestTeeConfig,
    };
  }

  validate() {
    if(this.autoMode && typeof (this.autoMode as any).validate === 'function') {
      (this.autoMode as any).validate();
    }
    if(this.autoScaling && typeof (this.autoScaling as any).validate === 'function') {
      (this.autoScaling as any).validate();
    }
    if(this.efloNodeGroup && typeof (this.efloNodeGroup as any).validate === 'function') {
      (this.efloNodeGroup as any).validate();
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

