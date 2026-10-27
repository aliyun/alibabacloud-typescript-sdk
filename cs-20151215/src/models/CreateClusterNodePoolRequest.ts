// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { DiskInit } from "./DiskInit";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";
import { InstancePatterns } from "./InstancePatterns";
import { KubeletConfig } from "./KubeletConfig";
import { Hugepage } from "./Hugepage";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class CreateClusterNodePoolRequestAutoMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto mode. Valid values:
   * - true: enables auto mode. This value is valid only when auto mode is enabled for the cluster.
   * - false: disables auto mode.
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
   * **[Deprecated]** Use internet_charge_type and internet_max_bandwidth_out instead. The peak bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * **[Deprecated]** Use internet_charge_type and internet_max_bandwidth_out instead. The billing method of the EIP. Valid values:
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-data-transfer.
   * Default value: PayByBandwidth.
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
   * - true: enables auto scaling for the node pool. When the capacity planning of the cluster cannot meet the scheduling requirements of application pods, ACK automatically scales the node resources based on the configured minimum and maximum numbers of instances. For clusters running Kubernetes 1.24 or later, instant node elasticity is enabled by default. For clusters running Kubernetes versions earlier than 1.24, node auto scaling is enabled by default. For more information, see [Node auto scaling](https://help.aliyun.com/document_detail/2746785.html).
   * - false: disables auto scaling. ACK adjusts the number of nodes in the node pool based on the configured expected number of nodes and always maintains the number of nodes at the expected value.
   * When this parameter is set to false, other configuration parameters in auto_scaling do not take effect.
   * Default value: false.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Use internet_charge_type and internet_max_bandwidth_out instead. Specifies whether to bind an EIP. Valid values:
   * - true: binds an EIP.
   * - false: does not bind an EIP.
   * Default value: false.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of scalable instances in the node pool, excluding existing instances. This parameter takes effect only when enable is set to true.
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
   * > - If the minimum number of instances is not 0, the automatic creation of the corresponding number of ECS instances is triggered after the scaling group takes effect.
   * > - We recommend that you set the maximum number of instances to a value no less than the current number of nodes in the node pool. Otherwise, the nodes in the node pool are scaled in immediately after the elastic scaling feature takes effect.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The instance type for elastic scaling. This parameter takes effect only when `enable=true`. Valid values:
   * 
   * - `cpu`: regular instance.
   * 
   * - `gpu`: GPU-accelerated instance.
   * 
   * - `gpushare`: shared GPU instance.
   * 
   * - `spot`: spot instance.
   * 
   * Default value: `cpu`.
   * >Notice: This field cannot be modified after the node pool is created.</notice>
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
   * Specifies whether to enable automatic addition to the Lingjun node pool.
   */
  autoAttachEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Lingjun cluster to associate when you create the Lingjun node pool.
   * 
   * @example
   * i1169130516633730****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Lingjun group in the Lingjun cluster to associate when you create the Lingjun node pool.
   * 
   * @example
   * ng-ec3c96ff0aa****
   */
  groupId?: string;
  /**
   * @remarks
   * The worker RAM role used by the Lingjun node pool.
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
   * **[Deprecated]** The network bandwidth of the enhanced edge node pool. Unit: Mbit/s.
   * 
   * @example
   * null
   */
  bandwidth?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * The Cloud Connect Network (CCN) instance ID attached to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  ccnId?: string;
  /**
   * @remarks
   * **[Deprecated]** The region of the CCN instance bound to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * The Cloud Enterprise Network (CEN) instance ID attached to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  cenId?: string;
  /**
   * @remarks
   * **[Deprecated]** The subscription duration of the enhanced edge node pool. Unit: months.
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
   * Specifies whether to install CloudMonitor on Elastic Compute Service (ECS) nodes. After installation, you can view the monitoring information of the created ECS instances in the CloudMonitor console. Enabling this feature is recommended. Valid values:
   * 
   * - `true`: installs CloudMonitor on ECS nodes.
   * 
   * - `false`: does not install CloudMonitor on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes. The following two policies are supported when the cluster version is 1.12.6 or later:
   * 
   * - `static`: allows you to enhance CPU affinity and exclusivity for pods with specific resource characteristics on the node.
   * - `none`: enables the existing default CPU affinity scheme.
   * 
   * Default value: `none`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The labels added to the nodes in the Kubernetes cluster.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name. After you customize the node name, the node name, ECS instance name, and ECS instance hostname are changed at the same time.
   * > For Windows instances with custom node names enabled, the hostname is fixed to the IP address, with hyphens (-) replacing dots (.) in the IP address, and does not include prefixes or suffixes. 
   * 
   * The node name consists of three parts: a prefix, the node IP address, and a suffix:
   * 
   * - The total length is 2 to 64 characters. The node name must start and end with a lowercase letter or a digit.
   * 
   * - The prefix and suffix can contain uppercase and lowercase letters, digits, hyphens (-), and dots (.). They must start with a letter and cannot start or end with a hyphen (-) or a dot (.). Consecutive hyphens (-) or dots (.) are not allowed.
   * - The prefix is required (due to ECS limits), and the suffix is optional.
   * - The node IP address is the complete private IP address of the node.
   * 
   * For example, if the node IP address is 192.XX.YY.55, the specified prefix is aliyun.com, and the suffix is test:
   * 
   * - If the node is a Linux node, the node name, ECS instance name, and ECS instance hostname are all aliyun.com192.XX.YY.55test.
   * 
   * - If the node is a Windows node, the ECS instance hostname is 192-XX-YY-55, and both the node name and ECS instance name are aliyun.com192.XX.YY.55test.
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The pre-custom data of the instance. Before the node joins the cluster, the specified pre-custom data script is run. For more information, see [User data scripts](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * dGhpcyBpcyBhIGV4YW1wbGU
   */
  preUserData?: string;
  /**
   * @remarks
   * The name of the container runtime. Container Service for Kubernetes (ACK) supports the following three container runtimes:
   * 
   * - containerd: recommended. Supported by all cluster versions.
   * - Sandboxed-Container.runv: secure sandboxed containers that provide higher isolation. Supported by clusters of version 1.31 and earlier.
   * - docker: no longer maintained. Supported by clusters of version 1.22 and earlier.
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
   * The taint configurations.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the scaled-out nodes are unschedulable.
   * 
   * - true: unschedulable.
   * 
   * - false: schedulable.
   * 
   * @example
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The instance user data. After a node joins the cluster, the specified instance user data script runs. For more information, see [User data scripts](https://help.aliyun.com/document_detail/49121.html).
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
   * The maximum number of parallel repairs. When a large number of abnormal nodes exist in the node pool, this parameter specifies the maximum number or percentage of nodes that can be repaired at the same time. You can specify a number (such as 5, valid values: 1 to 100000) or a percentage (such as 10%, valid values: 1% to 100%). Default value on the backend: 1.
   * 
   * @example
   * 5
   */
  maxParallelRepairingNodes?: string;
  /**
   * @remarks
   * The circuit breaker condition for auto-healing. When the number or percentage of faulty nodes exceeds this threshold, auto-healing enters the circuit breaker state and stops initiating new auto-healing repair actions. You can specify a number (such as 10, valid values: 1 to 100000) or a percentage (such as 20%, valid values: 1% to 100%). Default circuit breaker condition on the backend: 100%.
   * 
   * @example
   * 20%
   */
  maxUnhealthyNodesThreshold?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when `auto_repair` is set to `true`. Valid values:
   * 
   * - `true`: allows node restarts.
   * - `false`: does not allow node restarts.
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
   * Specifies whether to allow automatic kubelet upgrades. This parameter takes effect only when `auto_upgrade` is set to `true`. Valid values:
   * - `true`: allows automatic kubelet upgrades.
   * - `false`: does not allow automatic kubelet upgrades.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether to allow automatic operating system upgrades. This parameter takes effect only when `auto_upgrade` is set to `true`. Valid values:
   * - `true`: allows automatic operating system upgrades.
   * - `false`: does not allow automatic operating system upgrades.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether to allow automatic runtime upgrades. This parameter takes effect only when `auto_upgrade` is set to `true`. Valid values:
   * - `true`: allows automatic runtime upgrades.
   * - `false`: does not allow automatic runtime upgrades.
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
   * The packages to be excluded during vulnerability repair.
   * 
   * Default value: `kernel`.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when `auto_vul_fix` is set to `true`. Valid values:
   * - `true`: allows node restarts.
   * - `false`: does not allow node restarts.
   * 
   * Default value: `true`.
   * 
   * @example
   * false
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels that are allowed for auto-repair, separated by commas. Example: `asap,later`. Supported vulnerability levels:
   * 
   * - `asap`: high.
   * - `later`: medium.
   * - `nntf`: low.
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
   * **[Deprecated]** Use the upper-level `auto_upgrade` parameter instead.
   * 
   * Specifies whether to enable auto-upgrade. Valid values:
   * 
   * - `true`: enables auto-upgrade.
   * 
   * - `false`: disables auto-upgrade.
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
   * The number of extra nodes. This parameter and `surge_percentage` are mutually exclusive.
   * 
   * Nodes become unavailable during upgrades. You can create extra nodes to compensate for the cluster load.
   * 
   * > Do not create more extra nodes than the current number of nodes.
   * 
   * @example
   * 0
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. This parameter and `surge` are mutually exclusive.
   * 
   * Number of extra nodes = Percentage of extra nodes × Number of nodes. For example, if the percentage of extra nodes is set to 50% and the number of existing nodes is 6, the number of extra nodes generated is 50% × 6 = 3.
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
   * Specifies whether to enable ECS fault detection for node auto-healing.
   */
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically repair nodes. This parameter takes effect only when `enable` is set to `true`.
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
   * The auto-repair policy for nodes.
   */
  autoRepairPolicy?: CreateClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to automatically upgrade nodes. This parameter takes effect only when `enable` is set to `true`.
   * - `true`: enables auto-upgrade.
   * - `false`: disables auto-upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto-upgrade policy for nodes.
   */
  autoUpgradePolicy?: CreateClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to automatically repair Common Vulnerabilities and Exposures (CVE) vulnerabilities. This parameter takes effect only when `enable` is set to `true`.
   * 
   * - `true`: allows automatic CVE repairs.
   * - `false`: does not allow automatic CVE repairs.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The CVE auto-repair policy.
   */
  autoVulFixPolicy?: CreateClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the node rotation capability. This feature is supported only by intelligent managed node pools and is enabled by default. It is not supported by regular node pools.
   */
  driftEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the managed feature for the node pool. Valid values:
   * 
   * - `true`: enables the managed feature.
   * 
   * - `false`: disables the managed feature. Other related configurations take effect only when `enable` is set to `true`.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Use the upper-level `auto_upgrade` parameter instead.
   * 
   * The auto-upgrade configurations. This parameter takes effect only when `enable` is set to `true`.
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

export class CreateClusterNodePoolRequestNodeComponentsConfigEnvs extends $dara.Model {
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

export class CreateClusterNodePoolRequestNodeComponentsConfig extends $dara.Model {
  /**
   * @remarks
   * The custom configuration of the node component.
   * 
   * @example
   * {"cpuManagerPolicy":"static"}
   */
  customConfig?: { [key: string]: any };
  /**
   * @remarks
   * The environment variables of the node component.
   */
  envs?: CreateClusterNodePoolRequestNodeComponentsConfigEnvs[];
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
      envs: 'envs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envs: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestNodeComponentsConfigEnvs },
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

export class CreateClusterNodePoolRequestNodeComponents extends $dara.Model {
  /**
   * @remarks
   * The configuration of the node component.
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

export class CreateClusterNodePoolRequestNodeConfigNodeOsConfig extends $dara.Model {
  /**
   * @remarks
   * The Transparent HugePages configuration.
   */
  hugepage?: Hugepage;
  /**
   * @remarks
   * The sysctl kernel parameter settings. Only some kernel parameters are supported, and the cluster version must be 1.28 or later.
   * 
   * @example
   * {"fs.file-max":"1048576"}
   */
  sysctl?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      hugepage: 'hugepage',
      sysctl: 'sysctl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hugepage: Hugepage,
      sysctl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.hugepage && typeof (this.hugepage as any).validate === 'function') {
      (this.hugepage as any).validate();
    }
    if(this.sysctl) {
      $dara.Model.validateMap(this.sysctl);
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
  /**
   * @remarks
   * The operating system configuration of the node.
   */
  nodeOsConfig?: CreateClusterNodePoolRequestNodeConfigNodeOsConfig;
  static names(): { [key: string]: string } {
    return {
      kubeletConfiguration: 'kubelet_configuration',
      nodeOsConfig: 'node_os_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfiguration: KubeletConfig,
      nodeOsConfig: CreateClusterNodePoolRequestNodeConfigNodeOsConfig,
    };
  }

  validate() {
    if(this.kubeletConfiguration && typeof (this.kubeletConfiguration as any).validate === 'function') {
      (this.kubeletConfiguration as any).validate();
    }
    if(this.nodeOsConfig && typeof (this.nodeOsConfig as any).validate === 'function') {
      (this.nodeOsConfig as any).validate();
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
   * The resource group ID of the node pool. The instances created by the node pool belong to this resource group.
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
   * - `ess`: standard node pool (includes managed and elastic scaling features).
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
   * Specifies whether to enable nested virtualization. Valid values: `disabled`: disables nested virtualization. `enabled`: enables nested virtualization.
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
   * The ID of the private pool, which is the ID of the elasticity assurance or capacity reservation. When `match_criteria` is set to `Target`, you must specify the private pool ID.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool capacity matching mode for instance startup. After an elasticity assurance or capacity reservation takes effect, private pool capacity is generated for you to select when starting instances. Valid values:
   * - `Open`: open mode. The system automatically matches the capacity of open private pools. If no matching private pool capacity is available, public pool resources are used. In this mode, you do not need to specify the PrivatePoolOptions.Id parameter.
   * - `Target`: targeted mode. The system uses the capacity of the specified private pool to start instances. If the specified private pool capacity is unavailable, the instances fail to start. In this mode, you must specify the private pool ID by setting the PrivatePoolOptions.Id parameter.
   * - `None`: no private pool mode. The system does not use private pool capacity to start instances.
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
   * The list of private pool IDs, which are the IDs of elasticity assurances or capacity reservations. You can only specify the IDs of private pools in Target mode. Valid values of N: 1 to 20.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool strategy used to create instances. Resource pools include private pools generated after elasticity assurances or capacity reservations take effect, as well as public pools. Valid values:
   * PrivatePoolFirst: Private pool first. If you select this strategy and specify resouce_pool_options.private_pool_ids, the specified private pools are used first. If no private pool is specified or the specified private pools do not have sufficient capacity, open private pools are automatically matched. If no eligible private pool is available, the public pool is used to create instances.
   * PrivatePoolOnly: Private pool only. If you select this strategy, you must specify resouce_pool_options.private_pool_ids. If the specified private pools do not have sufficient capacity, the instances fail to start.
   * None: No resource pool strategy is used.
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
   * The maximum price per instance. <props="china">Unit: CNY/hour.  <props="intl">Unit: USD/hour.
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
   * The duration of each auto-renewal. Valid values:
   * - When PeriodUnit is set to Week: 1, 2, and 3.
   * - When PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** Use the `security_hardening_os` parameter instead.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances when spot instances cannot be created due to price or inventory issues and `multi_az_policy` is set to `COST_OPTIMIZED`. Valid values:
   * 
   * - `true`: automatically creates pay-as-you-go instances to meet the required number of ECS instances.
   * - `false`: does not automatically create pay-as-you-go instances.
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
   * The ID of the deployment set. You can use a deployment set to distribute ECS instances created by the node pool across different physical servers to ensure high availability and underlying disaster recovery capabilities. When creating ECS instances in a deployment set, the instances are started in a distributed manner in the specified region based on the predefined deployment policy.
   * 
   * 
   * >Notice: After you select a deployment set, the maximum number of nodes in the node pool is limited. By default, a deployment set supports up to 20 × the number of zones nodes. The number of zones is determined by the vSwitches. Proceed with caution and ensure that the quota in the deployment set is sufficient to prevent node scale-out failures.</notice>
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * This is the total number of nodes that the node pool should maintain. We recommend that you configure at least two nodes to ensure the normal operation of cluster components. You can scale out or scale in the node pool by adjusting the expected number of nodes.
   * 
   * If you do not need to create nodes, set this parameter to 0 and manually increase the number of nodes later.
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
   * Specifies whether to enable the high-density cloud disk mode. This mode is supported only when the node pool uses instance types. After this mode is enabled, the total number of system cloud disks and data cloud disks does not exceed the maximum number of high-density cloud disks supported by the instance type.
   * 
   * @example
   * false
   */
  enableHighDensityMode?: boolean;
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
   * The type of the operating system image. We recommend that you use this field to specify the operating system for nodes. Valid values:
   * 
   * - `AliyunLinux`: Alinux2 image.
   * - `AliyunLinuxSecurity`: Alinux2 UEFI image.
   * - `AliyunLinux3`: Alinux3 image.
   * - `AliyunLinux3Arm64`: Alinux3 ARM image.
   * - `AliyunLinux3Security`: Alinux3 UEFI image.
   * - `CentOS`: CentOS image.
   * - `Windows`: Windows image.
   * - `WindowsCore`: Windows Core image.
   * - `ContainerOS`: container-optimized image.
   * - `AliyunLinux3ContainerOptimized`: Alinux3 container-optimized image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method for nodes in the node pool. Valid values:
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
   * The instance metadata access configuration for ECS instances.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance property configuration.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of instance types for nodes in the node pool. When the node pool scales out nodes, it selects instance types that meet the requirements from the specified list to create instances.
   * 
   * Supported number of instance types: 1 to 10.
   * 
   * 
   * > To ensure high availability, we recommend that you select multiple instance types.
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for the public IP address. Valid values:
   * 
   * - `PayByBandwidth`: pay-by-bandwidth.
   * - `PayByTraffic`: pay-by-data-transfer.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth for the public IP address of the node. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair for passwordless logon. This parameter and `login_password` are mutually exclusive.
   * 
   * > If the node pool uses the ContainerOS operating system, only `key_pair` is supported.
   * 
   * @example
   * np-key-name
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether to log on to the created ECS instances as a non-root user. Valid values:
   *  
   * - `true`: logs on as a non-root user (ecs-user).
   * 
   * - `false`: logs on as the root user.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The SSH logon password. You must specify either this parameter or `key_pair`. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * ****
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for ECS instances in a multi-zone scaling group. Valid values:
   * 
   * - `PRIORITY`: Scales instances based on the vSwitches (VSwitchIds.N) that you specify. If ECS instances cannot be created in the zone of the vSwitch with the highest priority, the system automatically uses the vSwitch with the next highest priority to create ECS instances.
   * 
   * - `COST_OPTIMIZED`: Attempts to create instances based on the vCPU unit price from low to high. When the scaling configuration specifies multiple instance types with the spot billing method, the system preferentially creates the corresponding spot instances. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when spot instances cannot be created due to inventory shortages or other reasons.
   * 
   *   > `COST_OPTIMIZED` takes effect only when the scaling configuration specifies multiple instance types or uses spot instances.
   * 
   * - `BALANCE`: Evenly allocates ECS instances across the multiple zones specified in the scaling group. If the instances are unevenly distributed across zones due to inventory shortages, you can call the [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html) API operation to balance the resources.
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required by the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than this value, the system preferentially creates pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the excess instances after the scaling group meets the minimum number of pay-as-you-go instances (`on_demand_base_capacity`). Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration for nodes in the node pool. This parameter is required and takes effect only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - When `period_unit` is set to `Week`, valid values for `period` are 1, 2, 3, and 4.
   * - When `period_unit` is set to `Month`, valid values for `period` are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of nodes in the node pool. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `Month`: Uses month as the time unit.
   * - `Week`: Uses week as the time unit.
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
   * The name of the worker RAM role.
   * 
   * * If this parameter is left empty, the default worker RAM role created for the cluster is used.
   * * If this parameter is specified, the RAM role must be a **normal service role** and its **trusted service** must be set to **ECS**. For more information, see [Create a normal service role](https://help.aliyun.com/document_detail/116800.html). If the specified RAM role is not the default worker RAM role created for the cluster, the role name cannot start with `KubernetesMasterRole-` or `KubernetesWorkerRole-`.
   * 
   * >Notice: This parameter is supported only by ACK managed clusters of version 1.22 and later.</notice>
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
   * The resource pool and resource pool policy used for creating instances. Take note of the following items when you configure this parameter:
   * This parameter takes effect only when you create pay-as-you-go instances.
   * This parameter cannot be configured at the same time as private_pool_options.match_criteria and private_pool_options.id.
   */
  resourcePoolOptions?: CreateClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling group mode. Valid values:
   * - release: Standard mode. Instances are scaled by creating and releasing ECS instances based on the requested resource usage.
   * - recycle: Swift mode. Instances are scaled by creating, stopping, and starting instances to improve the speed of subsequent scaling operations. When an instance is stopped, you are not charged for compute resources, but you are still charged for storage resources, except for instances with local disks.
   * Default value: release.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The security group ID of the node pool. You can specify this parameter or security_group_ids. We recommend that you use security_group_ids.
   * 
   * @example
   * sg-wz9a8g2mt6x5llu0****
   * 
   * @deprecated
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of security group IDs. You can specify this parameter or security_group_id. We recommend that you use security_group_ids. If you specify both security_group_id and security_group_ids, security_group_ids takes precedence.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable Alibaba Cloud OS security hardening. Valid values:
   * - true: enables Alibaba Cloud OS security hardening.
   * - false: does not enable Alibaba Cloud OS security hardening.
   * Default value: false.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. You can enable this feature for nodes only when the system image is Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3. Alibaba Cloud provides classified protection compliance baseline check standards and scanning programs for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 MLPS 2.0 Level 3 images.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of available instance types. The scaling group evenly creates spot instances across multiple instance types with the lowest costs. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable spot instance replenishment. After this feature is enabled, when the scaling group receives a system message that a spot instance is to be reclaimed, the scaling group attempts to create a new instance to replace the spot instance to be reclaimed. Valid values:
   * - true: enables spot instance replenishment.
   * - false: does not enable spot instance replenishment.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The market price range configuration for a single spot instance type.
   */
  spotPriceLimit?: CreateClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The spot instance strategy. Valid values:
   * - NoSpot: pay-as-you-go instance.
   * - SpotWithPriceLimit: sets the maximum price for spot instances.
   * - SpotAsPriceGo: uses the system\\"s automatic bidding, which follows the actual market price.
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/165053.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable performance burst for the system disk of the node. Valid values:
   * - true: yes.
   * - false: no.
   * This parameter is supported only when system_disk_category is set to cloud_auto. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the system disk. If the system disk cannot be created by using a disk category with a higher priority, the system automatically tries the next disk category in the priority list.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The system disk category of the node. Valid values:
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - cloud_auto: ESSD AutoPL cloud disk.
   * - cloud_essd_entry: ESSD Entry cloud disk.
   * Default value: cloud_efficiency.
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
   * 
   * @example
   * false
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
   * The performance level of the system cloud disk for nodes. This parameter takes effect only for ESSDs, not standard SSD. The performance level varies based on the disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html). Valid values:
   * - PL0: Medium concurrent I/O performance and relatively stable read/write latency.
   * - PL1: Medium concurrent I/O performance and relatively stable read/write latency.
   * - PL2: High concurrent I/O performance and stable read/write latency.
   * - PL3: Ultra-high concurrent I/O performance and highly stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for the system disk.
   * Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}. Baseline performance = min{1,800 + 50 × Capacity, 50000}.
   * This parameter is supported only when system_disk_category is set to cloud_auto. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * Valid values: 20 to 2048.
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
   * Adds tags only to ECS instances.
   * Tag keys must be unique and can be up to 128 characters in length. Tag keys and tag values cannot start with "aliyun" or "acs:", or contain "https://" or "http://".
   */
  tags?: CreateClusterNodePoolRequestScalingGroupTags[];
  /**
   * @remarks
   * The list of vSwitch IDs. You can specify 1 to 8 vSwitch IDs.
   * > To ensure high availability, we recommend that you select vSwitches in different zones.
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
      enableHighDensityMode: 'enable_high_density_mode',
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
      enableHighDensityMode: 'boolean',
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
   * Specifies whether to enable the confidential computing cluster. Valid values:
   * 
   * - true: Enables confidential computing.
   * 
   * - false: Does not enable confidential computing.
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
   * The auto mode configuration of the node pool.
   */
  autoMode?: CreateClusterNodePoolRequestAutoMode;
  /**
   * @remarks
   * The elastic scaling configuration.
   */
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * **[Deprecated]** Use desired_size instead. The number of nodes in the node pool.
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
   * Specifies whether pods in the edge node pool use the host network mode. Valid values:
   * - true: host network. Pods directly use the network stack of the host and share the IP address and ports with the host.
   * - false: container network. Pods have independent network stacks and do not occupy the network ports of the host.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * **[Deprecated]** The configuration of the edge node pool.
   * 
   * @deprecated
   */
  interconnectConfig?: CreateClusterNodePoolRequestInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only when type is set to edge. Valid values:
   * - basic: public network. Nodes in cloud node pool interact with cloud nodes over the public network. Applications in cloud node pool cannot directly access the internal network of the cloud VPC.
   * - private: private network. Nodes in cloud node pool connect to the cloud network over Express Connect circuits, VPNs, or CEN. This provides higher cloud-edge communication quality and more effective security protection.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Specifies whether Layer 3 network connectivity is enabled between nodes in the edge node pool. Valid values:
   * - true: enabled. Layer 3 network connectivity is enabled between all nodes in the node pool.
   * - false: disabled. Layer 3 network connectivity is disabled between all hosts in the node pool.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * The cluster configurations.
   */
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The configurations for the managed node pool feature.
   */
  management?: CreateClusterNodePoolRequestManagement;
  /**
   * @remarks
   * **[Deprecated]** The maximum number of nodes allowed in an edge node pool.
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

