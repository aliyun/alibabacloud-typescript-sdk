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
   * Specifies whether to enable intelligent managed mode.
   * Valid values:
   * - true: Enables intelligent managed mode. This can be enabled only when the cluster has intelligent managed mode enabled.
   * - false: Disables intelligent managed mode.
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
   * [Deprecated] Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * The peak bandwidth of the EIP. Unit: Mbit/s.
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
   * The billing method of the EIP. Valid values:
   * - `PayByBandwidth`: pay-by-bandwidth.
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
   * Specifies whether to enable automatic scaling. Valid values:
   * 
   * - `true`: enables the automatic scaling feature for the node pool. When the cluster capacity planning cannot meet application Pod scheduling requirements, ACK automatically scales node resources based on the configured minimum and maximum instance counts. Clusters of version 1.24 and later enable instant node elasticity by default. Clusters of versions earlier than 1.24 enable node auto scaling by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: disables automatic scaling. ACK adjusts the number of nodes in the node pool based on the configured desired node count and maintains the node count at the desired value.
   * 
   * When the value is false, other configuration parameters in `auto_scaling` do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * [Deprecated] This field is deprecated. Use internet_charge_type and internet_max_bandwidth_out instead.
   * 
   * Specifies whether to associate an EIP. Valid values:
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
   * > - If the minimum instance count is not 0, the corresponding number of ECS instances are automatically created after the scaling group takes effect.
   * > - Set the maximum instance count to a value no less than the current number of nodes in the node pool. Otherwise, nodes in the node pool will be scaled in after the elastic scaling feature takes effect.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The automatic scaling instance type. This parameter takes effect only when `enable=true`. Valid values:
   * 
   * - `cpu`: regular instance type.
   * 
   * - `gpu`: GPU instance type.
   * 
   * - `gpushare`: GPU shared type.
   * 
   * - `spot`: spot instance type.
   * 
   * Default value: `cpu`.
   * >Notice: This field cannot be modified after the node pool is created.
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
   * Specifies whether to enable automatic node addition for the Lingjun node pool.
   */
  autoAttachEnabled?: boolean;
  /**
   * @remarks
   * The Lingjun cluster ID to associate when creating a Lingjun node pool.
   * 
   * @example
   * i1169130516633730****
   */
  clusterId?: string;
  /**
   * @remarks
   * The Lingjun group ID of the Lingjun cluster to associate when creating a Lingjun node pool.
   * 
   * @example
   * ng-ec3c96ff0aa****
   */
  groupId?: string;
  /**
   * @remarks
   * The Worker RAM role used by the Lingjun node pool.
   */
  workerRamRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      autoAttachEnabled: 'auto_attach_enabled',
      clusterId: 'cluster_id',
      groupId: 'group_id',
      workerRamRoleName: 'worker_ram_role_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAttachEnabled: 'boolean',
      clusterId: 'string',
      groupId: 'string',
      workerRamRoleName: 'string',
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
   * [This field is deprecated]
   * 
   * The network bandwidth of the enhanced edge node pool. Unit: Mbps.
   * 
   * @example
   * null
   */
  bandwidth?: number;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The Cloud Connect Network (CCN) instance ID bound to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  ccnId?: string;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The region of the Cloud Connect Network instance bound to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The Cloud Enterprise Network (CEN) instance ID bound to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  cenId?: string;
  /**
   * @remarks
   * [This field is deprecated]
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
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After installation, you can view monitoring information for the created ECS instances in the CloudMonitor console. We recommend that you enable this feature. Valid values:
   * 
   * - `true`: Installs the CloudMonitor agent on ECS nodes.
   * 
   * - `false`: Does not install the CloudMonitor agent on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The node CPU management policy. The following two policies are supported for clusters of version 1.12.6 or later:
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
   * The node labels. Adds labels to Kubernetes cluster nodes.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name. After you customize the node name, the node name, ECS instance name, and ECS instance hostname are all changed.
   * > For Windows instances with custom node names enabled, the hostname is fixed to the IP address with hyphens (-) replacing the dots (.) in the IP address, and does not include the prefix or suffix. 
   * 
   * The node name consists of a prefix, the node IP address, and a suffix:
   * 
   * - The total length is 2 to 64 characters. The node name must start and end with a lowercase letter or digit.
   * 
   * - The prefix and suffix can contain uppercase and lowercase letters, digits, hyphens (-), and periods (.). They must start with an uppercase or lowercase letter and cannot start or end with a hyphen (-) or period (.). Consecutive hyphens (-) or periods (.) are not allowed.
   * - The prefix is required (ECS restriction). The suffix is optional.
   * - The node IP is the full private IP address of the node.
   * 
   * For example, if the node IP address is 192.XX.YY.55, the prefix is aliyun.com, and the suffix is test:
   * 
   * - For a Linux node, the node name, ECS instance name, and ECS instance hostname are all aliyun.com192.XX.YY.55test.
   * 
   * - For a Windows node, the ECS instance hostname is 192-XX-YY-55, and the node name and ECS instance name are both aliyun.com192.XX.YY.55test.
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The instance pre-user data. Before the node joins the cluster, the specified instance pre-user data script is run. For more information, see [User-Data scripts](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * dGhpcyBpcyBhIGV4YW1wbGU
   */
  preUserData?: string;
  /**
   * @remarks
   * The container runtime name. ACK supports the following three container runtimes:
   * 
   * - containerd: Recommended. Supports all cluster versions.
   * - Sandboxed-Container.runv: Sandboxed container that provides higher isolation. Supports cluster versions 1.31 and earlier.
   * - docker: No longer maintained. Supports cluster versions 1.22 and earlier.
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
   * The taint configuration.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether scaled-out nodes are unschedulable.
   * 
   * - true: Unschedulable.
   * 
   * - false: Schedulable.
   * 
   * @example
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The instance user data. After the node joins the cluster, the specified instance user data script is run. For more information, see [User-Data scripts](https://help.aliyun.com/document_detail/49121.html).
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
   * Specifies whether node repair requires manual approval.
   */
  approvalRequired?: boolean;
  /**
   * @example
   * 5
   */
  maxParallelRepairingNodes?: string;
  /**
   * @example
   * 20%
   */
  maxUnhealthyNodesThreshold?: string;
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only when `auto_repair=true`. Valid values:
   * 
   * - `true`: allows node restart.
   * - `false`: does not allow node restart.
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
      maxParallelRepairingNodes: 'max_parallel_repairing_nodes',
      maxUnhealthyNodesThreshold: 'max_unhealthy_nodes_threshold',
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRequired: 'boolean',
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

export class CreateClusterNodePoolRequestManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow automatic kubelet upgrade. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: allows automatic kubelet upgrade.
   * - `false`: does not allow automatic kubelet upgrade.
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
   * - `true`: allows automatic OS upgrade.
   * - `false`: does not allow automatic OS upgrade.
   * 
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
   * - `true`: allows automatic runtime upgrade.
   * - `false`: does not allow automatic runtime upgrade.
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
   * The packages to exclude during vulnerability fixing.
   * 
   * Default value: `kernel`.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only when `auto_vul_fix=true`. Valid values:
   * - `true`: allows node restart.
   * - `false`: does not allow node restart.
   * 
   * Default value: `true`.
   * 
   * @example
   * false
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels allowed for automatic fixing, separated by commas. Example: `asap,later`. Supported vulnerability levels:
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

export class CreateClusterNodePoolRequestManagementUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * [Deprecated] Use the `auto_upgrade` parameter at the upper level instead.
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
   * Valid values: [1,1000\\].
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
   * Nodes become unavailable during upgrades. You can create extra nodes to compensate for the cluster workload.
   * 
   * > The number of extra nodes should not exceed the current number of nodes.
   * 
   * @example
   * 0
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. Specify either this parameter or `surge`.
   * 
   * Number of extra nodes = percentage of extra nodes × number of nodes. For example, if the percentage is set to 50% and there are 6 existing nodes, the number of extra nodes = 50% × 6 = 3.
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
  /**
   * @remarks
   * Specifies whether to enable ECS fault detection for node self-healing.
   */
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically repair nodes. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: automatically repairs nodes.
   * 
   * - `false`: does not automatically repair nodes.
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
  autoRepairPolicy?: CreateClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to automatically upgrade nodes. This parameter takes effect only when `enable=true`.
   * - `true`: enables auto upgrade.
   * - `false`: disables auto upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto upgrade node policy.
   */
  autoUpgradePolicy?: CreateClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to automatically fix CVE vulnerabilities. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: allows automatic CVE fixing.
   * - `false`: does not allow automatic CVE fixing.
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
  autoVulFixPolicy?: CreateClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable node rotation. Only intelligent managed node pools support this feature, and it is enabled by default. Standard node pools do not support this feature.
   */
  driftEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the managed feature for the node pool. Valid values:
   * 
   * - `true`: enables the managed feature.
   * 
   * - `false`: disables the managed feature. Other related configurations take effect only when enable=true.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * [Deprecated] Use the `auto_upgrade` parameter at the upper level instead.
   * 
   * The auto upgrade configuration. This parameter takes effect only when `enable=true`.
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
      driftEnabled: 'drift_enabled',
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
      driftEnabled: 'boolean',
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
   * The custom node component configuration.
   * 
   * @example
   * {"cpuManagerPolicy":"static"}
   */
  customConfig?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
   * The node component configuration.
   */
  config?: CreateClusterNodePoolRequestNodeComponentsConfig;
  /**
   * @remarks
   * The node component name.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * The node component version.
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
   * The node pool name.
   * 
   * This parameter is required.
   * 
   * @example
   * nodepool-test
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID of the node pool. Instances created by the node pool belong to this resource group.
   * 
   * A resource can belong to only one resource group. You can map resource groups to concepts such as projects, applications, or organizations based on your business scenarios.
   * 
   * @example
   * rg-acfmyvw3wjmb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node pool type. Valid values:
   * 
   * - `ess`: standard node pool (includes managed features and automatic scaling).
   * - `edge`: edge node pool.
   * - `lingjun`: Lingjun node pool.
   * - `hybrid`: hybrid cloud node pool.
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

export class CreateClusterNodePoolRequestScalingGroupCpuOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable nested virtualization. Valid values: disabled: Disables nested virtualization. enabled: Enables nested virtualization.
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

export class CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions extends $dara.Model {
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
   * The private node pool type. Specifies the private pool capacity option for instance startup. After an elasticity assurance or capacity reservation takes effect, a private pool is generated for instance startup. Valid values:
   * - `Open`: Open mode. Automatically matches open-type private pool capacity. If no matching private pool capacity is available, public pool resources are used.
   * - `Target`: Targeted mode. Uses the specified private pool capacity to start instances. If the specified private pool capacity is unavailable, instance startup fails.
   * - `None`: No private pool. Instances do not use private pool capacity.
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
   * The list of private pool IDs, which are elasticity assurance IDs or capacity reservation IDs. Only Target mode private pool IDs can be specified. Valid values of N: 1 to 20.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool strategy used when creating instances. Resource pools include private pools generated after an elasticity assurance or capacity reservation takes effect, and public pools, for instance startup. Valid values:
   * PrivatePoolFirst: Private pool first. When resouce_pool_options.private_pool_ids is specified, the specified private pools are used first. If no private pool is specified or the specified private pool capacity is insufficient, open-type private pools are automatically matched. If no matching private pool is available, public pool resources are used.
   * PrivatePoolOnly: Private pool only. resouce_pool_options.private_pool_ids must be specified. If the specified private pool capacity is insufficient, instance startup fails.
   * None: No resource pool strategy.
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
   * The spot instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price per instance.
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

export class CreateClusterNodePoolRequestScalingGroupTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
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
   * Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: enables auto-renewal.
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
   * The duration of each auto-renewal cycle. Valid values:
   * - PeriodUnit=Week: 1, 2, 3.
   * - PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * [Deprecated] Use the security_hardening_os parameter instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * When `multi_az_policy` is set to `COST_OPTIMIZED`, specifies whether to allow automatic creation of pay-as-you-go instances to meet ECS instance quantity requirements when spot instances cannot be created due to price, inventory, or other reasons. Valid values:
   * 
   * - `true`: Allows automatic creation of pay-as-you-go instances to meet ECS instance quantity requirements.
   * - `false`: Does not allow automatic creation of pay-as-you-go instances to meet ECS instance quantity requirements.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The CPU-related configuration options.
   */
  cpuOptions?: CreateClusterNodePoolRequestScalingGroupCpuOptions;
  /**
   * @remarks
   * The data cloud disk configuration for nodes in the node pool.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set ID. You can use a deployment set to distribute ECS instances scaled out by the node pool across different physical servers, ensuring high availability and underlying disaster recovery. When creating ECS instances within a deployment set, the system distributes and starts ECS instances in the specified region based on the preconfigured deployment strategy.
   * 
   * 
   * >Notice: After you select a deployment set, the maximum number of nodes in the node pool is limited. By default, a deployment set supports up to 20 × number of zones (the number of zones is determined by the vSwitches). Select carefully and ensure that the deployment set has sufficient quota to avoid node scale-out failures.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The desired number of nodes in the node pool.
   * 
   * The total number of nodes.
   * 
   * @example
   * 0
   */
  desiredSize?: number;
  /**
   * @remarks
   * The block device initialization configuration.
   */
  diskInit?: DiskInit[];
  /**
   * @remarks
   * The custom image ID. The system-provided image is used by default.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system image type. Valid values:
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
   * The ECS instance metadata access configuration.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance attribute configuration.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of instance types for the node pool. When the node pool scales out, it selects eligible instance types from this list to create instances.
   * 
   * The number of supported instance types ranges from 1 to 10.
   * 
   * 
   * > To ensure high availability, select multiple instance types.
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for public IP addresses. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth for nodes. Unit: Mbit/s. Valid values: [1,100\\].
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair for password-free logon. Specify either this parameter or `login_password`.
   * 
   * >If the node pool uses the ContainerOS operating system, only `key_pair` is supported.
   * 
   * @example
   * np-key-name
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether ECS instances use a non-root user for logon.
   *  
   * - true: logs on as a non-root user (ecs-user).
   * 
   * - false: logs on as the root user.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The SSH logon password. Specify either this parameter or `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * ****
   */
  loginPassword?: string;
  /**
   * @remarks
   * The multi-zone scaling policy for ECS instances in the scaling group. Valid values:
   * 
   * - `PRIORITY`: Scales instances based on the vSwitches (VSwitchIds.N) that you define. When ECS instances cannot be created in the zone of the vSwitch with the highest priority, the system automatically uses the vSwitch with the next highest priority to create ECS instances.
   * 
   * - `COST_OPTIMIZED`: Attempts to create instances in ascending order of vCPU unit price. When the scaling configuration sets multiple instance types with the spot billable methods, spot instances are created first. You can use the `CompensateWithOnDemand` parameter to specify whether the system is allowed to automatically attempt to create pay-as-you-go instances when spot instances cannot be created due to insufficient inventory or other reasons.
   * 
   *   >`COST_OPTIMIZED` takes effect only when the scaling configuration sets multiple instance types or uses spot instances.
   * 
   * - `BALANCE`: Evenly allocates ECS instances across the active zones specified in the scaling group. If zones become unbalanced due to insufficient inventory or other reasons, you can call the [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html) API operation to rebalance resources.
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * COST_OPTIMIZED
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
   * - When `period_unit=Week`, valid values of `period`: {1, 2, 3, 4}.
   * - When `period_unit=Month`, valid values of `period`: {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing period unit of nodes in the node pool. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - `Month`: uses month as the billing unit.
   * - `Week`: uses week as the billing unit.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * [This field is deprecated] Use the `image_type` parameter instead.
   * 
   * The operating system distribution. Valid values:
   * - `CentOS`
   * - `AliyunLinux`
   * - `Windows`
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
   * The private node pool configuration.
   */
  privatePoolOptions?: CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The Worker RAM role name.
   * 
   * * If left empty, the default Worker RAM role created by the cluster is used.
   * * If specified, the RAM role must be a **normal service role** with its **trusted service** configured as **Elastic Compute Service**. For more information, see [Create a normal service role](https://help.aliyun.com/document_detail/116800.html). When the specified RAM role is not the default Worker RAM role created by the cluster, the role name cannot start with `KubernetesMasterRole-` or `KubernetesWorkerRole-`.
   * 
   * >Notice: Only ACK managed clusters of version 1.22 or later support this parameter.
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
   * The resource pool and resource pool strategy used when creating instances. Note the following when you set this parameter:
   * This parameter takes effect only when creating pay-as-you-go instances.
   * This parameter cannot be set together with private_pool_options.match_criteria or private_pool_options.id.
   */
  resourcePoolOptions?: CreateClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling group mode. Valid values:
   * 
   * - `release`: Standard mode. Scales by creating and releasing ECS instances based on resource usage.
   * - `recycle`: Swift mode. Scales by creating, stopping, and starting instances, which improves the speed of subsequent scaling operations. Stopped instances are not charged for compute resources but are charged for storage, except for instances with local disks.
   * 
   * Default value: `release`.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The security group ID of the node pool. Use either this parameter or `security_group_ids`. We recommend that you use `security_group_ids`.
   * 
   * @example
   * sg-wz9a8g2mt6x5llu0****
   * 
   * @deprecated
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of security group IDs. Specify either this parameter or `security_group_id`. We recommend using `security_group_ids`. When both `security_group_id` and `security_group_ids` are specified, `security_group_ids` takes precedence.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable Alibaba Cloud OS security hardening. Valid values:
   * 
   * - `true`: enables Alibaba Cloud OS security hardening.
   * - `false`: disables Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. This feature is available only when the system image is Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3. Alibaba Cloud provides classified protection compliance baseline check standards and scanning programs for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 MLPS 2.0 Level 3 images.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of available instance types. The scaling group creates spot instances across the lowest-cost instance types in a balanced manner. Valid values: [1,10\\].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable supplementing spot instances. When enabled, the scaling group attempts to create new instances to replace spot instances that are about to be reclaimed. Valid values:
   * 
   * - `true`: Enables supplementing spot instances.
   * - `false`: Disables supplementing spot instances.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The price limit configuration for the current spot instance type.
   */
  spotPriceLimit?: CreateClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The bidding policy for spot instances. Valid values:
   * 
   * - `NoSpot`: non-spot instance.
   * 
   * - `SpotWithPriceLimit`: sets a maximum price for spot instances.
   * 
   * - `SpotAsPriceGo`: the system automatically bids at the current market price.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/165053.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable burst (performance burst) for the node system cloud disk. Valid values:
   * - true: enables burst.
   * - false: disables burst.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Multiple system cloud disk types. When a higher-priority disk type is unavailable, the system automatically tries the next-priority disk type to create the system cloud disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The system cloud disk type of nodes. Valid values:
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
   * The encryption algorithm for the system cloud disk. Valid values: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system cloud disk. Valid values:
   * 
   * - true: encrypts the system cloud disk.
   * 
   * - false: does not encrypt the system cloud disk.
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
   * The performance level of the node system cloud disk. This parameter takes effect only for ESSD cloud disks. The performance level is related to the disk size. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
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
   * The provisioned read/write IOPS for the node system cloud disk.
   * 
   * Valid values: 0~min{50,000, 1000\\*capacity-baseline performance}. Baseline performance=min{1,800+50\\*capacity, 50000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The system cloud disk size of nodes. Unit: GiB.
   * 
   * Valid values: [20,2048\\].
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The system cloud disk snapshot policy.
   * 
   * @example
   * sp-0jl6xnmme8v7o935****
   */
  systemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * Tags added only to ECS instances.
   * 
   * Tag keys cannot be duplicated and have a maximum length of 128 characters. Tag keys and values cannot start with "aliyun" or "acs:", or contain "https://" or "http://".
   */
  tags?: CreateClusterNodePoolRequestScalingGroupTags[];
  /**
   * @remarks
   * The list of vSwitch IDs. Valid values: [1,8\\].
   * 
   * > To ensure high availability, select vSwitches in different zones.
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
      cpuOptions: CreateClusterNodePoolRequestScalingGroupCpuOptions,
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

export class CreateClusterNodePoolRequestTeeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable confidential computing for the cluster.
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
   * The intelligent managed configuration for the node pool.
   */
  autoMode?: CreateClusterNodePoolRequestAutoMode;
  /**
   * @remarks
   * The automatic scaling configuration.
   */
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * [This field is deprecated] Use desired_size instead.
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
   * The Lingjun node pool configuration.
   */
  efloNodeGroup?: CreateClusterNodePoolRequestEfloNodeGroup;
  /**
   * @remarks
   * Specifies whether the pod network mode uses host network mode.
   * - `true`: Host network. Pods directly use the host network stack and share the IP address and ports with the host.
   * - `false`: Container network. Pods have independent network stacks and do not occupy host network ports.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The edge node pool configuration.
   * 
   * @deprecated
   */
  interconnectConfig?: CreateClusterNodePoolRequestInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only for node pools with `type` set to `edge`. Valid values:
   * 
   * - `basic`: Public network. Nodes in cloud node pool interact with cloud nodes over the Internet. Applications in cloud node pool cannot directly access the cloud VPC internal network.
   * - `private`: Private network. Nodes in cloud node pool connect to the cloud through Express Connect, VPN, or CEN, providing higher cloud-edge communication quality and more effective security.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Specifies whether nodes in the edge node pool have Layer 3 network connectivity with each other.
   * - `true`: Connected. All nodes in the node pool have Layer 3 network connectivity with each other.
   * - `false`: Not connected. All nodes in the node pool do not have Layer 3 network connectivity with each other.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * The cluster-related configuration.
   */
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The managed node pool configuration.
   */
  management?: CreateClusterNodePoolRequestManagement;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The maximum number of nodes allowed in the edge node pool.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  maxNodes?: number;
  /**
   * @remarks
   * The list of node components.
   */
  nodeComponents?: CreateClusterNodePoolRequestNodeComponents[];
  /**
   * @remarks
   * The node configuration.
   */
  nodeConfig?: CreateClusterNodePoolRequestNodeConfig;
  /**
   * @remarks
   * The node pool configuration.
   */
  nodepoolInfo?: CreateClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The scaling group configuration of the node pool.
   */
  scalingGroup?: CreateClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The confidential computing cluster configuration.
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

