// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { DiskInit } from "./DiskInit";
import { InstancePatterns } from "./InstancePatterns";
import { Tag } from "./Tag";
import { KubeletConfig } from "./KubeletConfig";
import { Hugepage } from "./Hugepage";
import { Taint } from "./Taint";


export class DescribeClusterNodePoolsResponseBodyNodepoolsAutoMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto mode.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the elastic IP address (EIP). Valid values: 1 to 100. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * - `PayByBandwidth`: pay-by-bandwidth.
   * - `PayByTraffic`: pay-by-data-transfer.
   * 
   * @example
   * PayByBandwidth
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling. Valid values:
   * 
   * - `true`: enables auto scaling for the node pool. When the capacity planning of the cluster cannot meet the scheduling requirements of application pods, ACK automatically scales node resources based on the configured minimum and maximum number of instances. For clusters of Kubernetes 1.24 and later, node instant elasticity is enabled by default. For clusters earlier than Kubernetes 1.24, node auto scaling is enabled by default. For more information, see [Node auto scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: disables auto scaling. ACK adjusts the number of nodes in the node pool based on the configured expected number of nodes, and always maintains the number of nodes at the expected number.
   * 
   * If this parameter is set to false, other configuration parameters in auto_scaling do not take effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to associate an EIP. Valid values:
   * 
   * - `true`: associates an EIP.
   * - `false`: does not associate an EIP.
   * 
   * @example
   * true
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of scalable instances in the node pool, excluding existing instances.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of scalable instances in the node pool, excluding existing instances.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The auto scaling type, which is categorized by the auto scaling instance type. Valid values:
   * 
   * - `cpu`: regular instance.
   * - `gpu`: GPU-accelerated instance.
   * - `gpushare`: shared GPU instance.
   * - `spot`: spot instance.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsEfloNodeGroup extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-attach for the Lingjun node pool. This parameter does not take effect.
   */
  autoAttachEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Lingjun cluster.
   * 
   * @example
   * i113790071760688002461
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Lingjun group.
   * 
   * @example
   * i128147721760688002463
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the worker RAM role used by the Lingjun node pool.
   * 
   * @example
   * KubernetesWorkerRole-c000a00a00aa000a00a00a00a000a0000-Role
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The network bandwidth of the edge-optimized node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * **[Deprecated]** The instance ID of the Cloud Connect Network (CCN) attached to the edge-optimized node pool.
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * **[Deprecated]** The region of the CCN instance associated with the edge-optimized node pool.
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * **[Deprecated]** The instance ID of the Cloud Enterprise Network (CEN) attached to the edge-optimized node pool.
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * **[Deprecated]** The subscription duration of the edge-optimized node pool. Unit: months.
   * 
   * @example
   * 1
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After installation, you can view the monitoring information of the created ECS instances in the CloudMonitor console. We recommend that you enable this feature. Valid values:
   * 
   * - `true`: installs the CloudMonitor agent on ECS nodes.
   * - `false`: does not install the CloudMonitor agent on ECS nodes.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes. The following two policies are supported when the cluster version is 1.12.6 or later:
   * 
   * - `static`: allows pods with specific resource characteristics on the node to enhance their CPU affinity and exclusivity.
   * - `none`: uses the existing default CPU affinity scheme.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The node labels.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name.
   * 
   * A node name consists of three parts: prefix + node IP address substring + suffix:
   *  
   * - The prefix and suffix can each consist of one or more parts separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or a digit.
   * - The IP address substring length refers to the number of digits intercepted from the end of the node IP address. Valid values: 5 to 12.
   *  
   * For example, if the node IP address is 192.168.0.55, the specified prefix is aliyun.com, the IP address substring length is 5, and the suffix is test, the node name is aliyun.com00055test.
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The pre-custom data of the node pool, which is the script that runs before node initialization. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFD
   */
  preUserData?: string;
  /**
   * @remarks
   * The name of the container runtime. ACK supports the following three container runtimes:
   * 
   * - containerd: recommended. Supported by all cluster versions.
   * - Sandboxed-Container.runv: sandboxed container. Provides higher isolation. Supported by clusters of Kubernetes 1.31 and earlier.
   * - docker: no longer maintained. Supported by clusters of Kubernetes 1.22 and earlier.
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
   * The taint information of the node. Taints and tolerations work together to prevent pods from being scheduled to inappropriate nodes. For more information, see [Taints and Tolerations](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the scaled-out nodes are unschedulable. Valid values:
   * 
   * - `true`: unschedulable.
   * 
   * - `false`: schedulable.
   * 
   * @example
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The custom data of the node pool, which is the script that runs after node initialization. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFD****
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether manual approval is required for node repair.
   * 
   * @example
   * false
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * The ID of the auto-repair policy.
   * 
   * @example
   * r-xxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * The maximum number or percentage of nodes that can be repaired simultaneously when a large number of abnormal nodes exist in the node pool.
   * 
   * @example
   * 1
   */
  maxParallelRepairingNodes?: string;
  /**
   * @remarks
   * The auto-healing circuit breaker condition. When the number or percentage of faulty nodes exceeds this threshold, auto-healing enters the circuit breaker state and stops initiating new auto-healing repair actions.
   * 
   * @example
   * 10%
   */
  maxUnhealthyNodesThreshold?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when auto_repair is set to true. Valid values:
   * - true: Node restarts are allowed.
   * - false: Node restarts are not allowed.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow automatic kubelet upgrades. This parameter takes effect only when auto_upgrade is set to true. Valid values:
   * - true: Automatic kubelet upgrades are allowed.
   * - false: Automatic kubelet upgrades are not allowed.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy extends $dara.Model {
  /**
   * @remarks
   * The packages to be excluded during the vulnerability fix process.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when auto_vul_fix is set to true. Valid values:
   * - true: Node restarts are allowed.
   * - false: Node restarts are not allowed.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels that are allowed for automatic fixes, separated by commas. Valid values:
   * - asap: High.
   * - later: Medium.
   * - nntf: Low.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-upgrade. Valid values:
   * - true: Auto-upgrade is enabled.
   * - false: Auto-upgrade is disabled.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes. Valid values: 1 to 1000. Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of surge nodes. This parameter and surge_percentage are mutually exclusive.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of surge nodes. This parameter and surge are mutually exclusive. The number of surge nodes is calculated by multiplying the surge node percentage by the total number of nodes. For example, if the surge node percentage is set to 50% and the total number of nodes is 6, the number of surge nodes generated is 50% × 6 = 3.
   * 
   * @example
   * 50
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagement extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable ECS fault detection for node self-healing.
   */
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto repair. This parameter takes effect only when enable is set to true. Valid values:
   * 
   * - `true`: enables auto repair.
   * - `false`: disables auto repair.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto repair policy for nodes.
   */
  autoRepairPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to automatically upgrade nodes. This parameter takes effect only when enable is set to true. Valid values:
   * - true: Auto-upgrade is enabled.
   * - false: Auto-upgrade is disabled.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto-upgrade policy.
   */
  autoUpgradePolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to automatically fix CVEs. This parameter takes effect only when enable is set to true. Valid values:
   * - true: Automatic CVE fixes are allowed.
   * - false: Automatic CVE fixes are not allowed.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The auto CVE fix policy.
   */
  autoVulFixPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the node rotation capability. This capability is supported only by smart managed node pools and is enabled by default. It is not supported by regular node pools.
   */
  driftEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool. Valid values:
   * - true: The managed node pool is enabled.
   * - false: The managed node pool is disabled. Other related configurations take effect only when enable is set to true.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The auto-upgrade configuration. This configuration takes effect only when enable is set to true.
   */
  upgradeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig;
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
      autoRepairPolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy,
      driftEnabled: 'boolean',
      enable: 'boolean',
      upgradeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig,
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfigEnvs extends $dara.Model {
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfig extends $dara.Model {
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
  envs?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfigEnvs[];
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
      envs: 'envs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envs: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfigEnvs },
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponents extends $dara.Model {
  /**
   * @remarks
   * The node component configuration.
   */
  config?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfig;
  /**
   * @remarks
   * The version number of the custom configuration for the node component.
   * 
   * @example
   * 1
   */
  configRevision?: string;
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
      configRevision: 'config_revision',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfig,
      configRevision: 'string',
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfigNodeOsConfig extends $dara.Model {
  /**
   * @remarks
   * The Hugepage configuration.
   */
  hugepage?: Hugepage;
  /**
   * @remarks
   * The sysctl kernel parameter settings.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig extends $dara.Model {
  /**
   * @remarks
   * The Kubelet parameter settings.
   */
  kubeletConfiguration?: KubeletConfig;
  /**
   * @remarks
   * The node operating system configuration.
   */
  nodeOsConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfigNodeOsConfig;
  static names(): { [key: string]: string } {
    return {
      kubeletConfiguration: 'kubelet_configuration',
      nodeOsConfig: 'node_os_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfiguration: KubeletConfig,
      nodeOsConfig: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfigNodeOsConfig,
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the node pool was created.
   * 
   * @example
   * 2025-04-15T16:33:29.362888807+08:00
   */
  created?: string;
  /**
   * @remarks
   * Specifies whether the node pool is the default node pool. Typically, a cluster has only one default node pool. Valid values:
   * - true: The node pool is the default node pool.
   * - false: The node pool is not the default node pool.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The node pool name.
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np615c0e0966124216a0412e10afe0****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node pool type. Valid values:
   * - `ess`: standard node pool, which includes managed and auto scaling features.
   * - `edge`: edge node pool.
   * - `lingjun`: Lingjun node pool.
   * 
   * @example
   * ess
   */
  type?: string;
  /**
   * @remarks
   * The time when the node pool was updated.
   * 
   * @example
   * 2025-04-15T16:33:32.823+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      isDefault: 'is_default',
      name: 'name',
      nodepoolId: 'nodepool_id',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      isDefault: 'boolean',
      name: 'string',
      nodepoolId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      type: 'string',
      updated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupCpuOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable nested virtualization. Valid values:
   * - disabled: disables nested virtualization.
   * - enabled: enables nested virtualization.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The private pool ID, which is the ID of the elasticity assurance or capacity reservation.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool capacity matching criteria for instance startup. After an elasticity assurance or capacity reservation takes effect, private pool capacity is generated for you to select when you start instances. Valid values:
   * - Open: open mode. The system automatically matches the capacity of an open private pool. If no matching private pool capacity is available, the system uses public pool resources to start the instance. In this mode, you do not need to specify the PrivatePoolOptions.Id parameter.
   * - Target: specified mode. The system uses the capacity of the specified private pool to start the instance. If the specified private pool capacity is unavailable, the instance fails to start. In this mode, you must specify the private pool ID by setting the PrivatePoolOptions.Id parameter.
   * - None: no private pool mode. The system does not use private pool capacity to start the instance.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of private pool IDs.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool policy used to create instances. Valid values:
   * - PrivatePoolFirst: Private pools are used first.
   * - PrivatePoolOnly: Only private pools are used.
   * - None: No resource pool policy is used.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit extends $dara.Model {
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
   * The market price range for a single instance.
   * 
   * <props="china">Unit: CNY/hour.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for nodes. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
   * - true: enables auto-renewal.
   * - false: disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. Valid values:
   * - If PeriodUnit is set to Week: 1, 2, and 3.
   * - If PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * **[Deprecated]** Use the security_hardening_os parameter instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-spot instances to meet the required number of ECS instances when the multi_az_policy parameter is set to COST_OPTIMIZED and sufficient preemptible instances cannot be created due to price or inventory issues. Valid values:
   * - true: allows the system to automatically create pay-as-you-spot instances.
   * - false: does not allow the system to automatically create pay-as-you-spot instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The CPU-related configuration options.
   */
  cpuOptions?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupCpuOptions;
  /**
   * @remarks
   * The configurations of the data cloud disks for nodes, such as the disk category and size.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set ID.
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
   * The block device initialization configurations.
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
   * The custom image ID. You can call the DescribeKubernetesVersionMetadata operation to query the images supported by the system.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system image type. Valid values:
   * - AliyunLinux: Alinux2 image.
   * - AliyunLinuxSecurity: Alinux2 UEFI image.
   * - AliyunLinux3: Alinux3 image.
   * - AliyunLinux3Arm64: Alinux3 ARM image.
   * - AliyunLinux3Security: Alinux3 UEFI image.
   * - CentOS: CentOS image.
   * - Windows: Windows image.
   * - WindowsCore: Windows Core image.
   * - ContainerOS: container-optimized image.
   * - AliyunLinux3ContainerOptimized: Alinux3 container-optimized image.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of nodes in the node pool. Valid values:
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance property configurations.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of instance types for nodes. You can select multiple instance types as alternatives. When a node is created, the system attempts to purchase instances starting from the first instance type in the list until the creation succeeds. The final instance type purchased may vary depending on inventory availability.
   * 
   * @example
   * ecs.n4.large
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method of the public IP address for the node. Valid values:
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-data-transfer.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth of the node. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must specify this parameter or login_password.
   * If the node pool is a managed node pool, only key_pair is supported.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether to log on to the created ECS instances as a non-root user. Valid values:
   * - true: logs on as a non-root user (ecs-user).
   * - false: logs on as the root user.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The SSH logon password. You must specify this parameter or key_pair. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * For security reasons, the password is encrypted in the query result.
   * 
   * @example
   * ******
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for ECS instances in a multi-zone scaling group. Valid values:
   * - `PRIORITY`: scales ECS instances based on the priorities of the vSwitches that you specify in the VSwitchIds.N parameter. If ECS instances cannot be created in the zone of the highest-priority vSwitch, the system automatically uses the next highest-priority vSwitch to create ECS instances.
   * - `COST_OPTIMIZED`: creates ECS instances based on the unit prices of vCPUs in ascending order. When the scaling configuration settings include multiple instance types with the spot instance billing method, the system preferentially creates spot instances. You can use the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when spot instances cannot be created due to inventory shortages or other reasons.
   *   > The `COST_OPTIMIZED` value takes effect only when the scaling configuration settings include multiple instance types or use spot instances.
   * - `BALANCE`: evenly allocates ECS instances across the zones specified in the scaling group. If the distribution of instances becomes unbalanced across zones due to inventory shortages, you can call the [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html) operation to balance the resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
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
   * The percentage of pay-as-you-go instances among the additional instances that exceed the minimum number of pay-as-you-go instances specified by on_demand_base_capacity. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of the node. This parameter takes effect and is required only when instance_charge_type is set to PrePaid. Valid values:
   * - If period_unit is set to Week: 1, 2, 3, and 4.
   * - If period_unit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the node. This parameter is required when instance_charge_type is set to PrePaid. Valid values:
   * - `Month`: uses month as the billing unit.
   * - `Week`: uses week as the billing unit.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * **[Deprecated]** The operating system distribution. Valid values:
   * - CentOS
   * - AliyunLinux
   * - Windows
   * - WindowsCore
   * 
   * @example
   * AliyunLinux
   */
  platform?: string;
  /**
   * @remarks
   * The private pool options.
   */
  privatePoolOptions?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * **[Deprecated]** Use the ram_role_name parameter instead.
   * 
   * @example
   * KubernetesWorkerRole-021dc54f-929b-437a-8ae0-34c24d3e****
   */
  ramPolicy?: string;
  /**
   * @remarks
   * The name of the RAM role for worker nodes.
   * 
   * @example
   * KubernetesWorkerRole-4a4fa089-80c1-48a5-b3c6-9349311f****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * If ApsaraDB RDS instances are specified, the ECS instances of the cluster nodes are automatically added to the whitelists of the ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool policy used to create instances.
   */
  resourcePoolOptions?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-2ze8n5qw4atggut8****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling group pattern. Valid values:
   * - `release`: Standard pattern. The scaling group scales instances by creating and releasing ECS instances based on the requested resource usage.
   * - `recycle`: Swift pattern. The scaling group scales instances by creating, stopping, and starting ECS instances to improve the scaling speed. When an instance is stopped, you are not charged for compute resources, but you are still charged for storage resources. This does not apply to instances with local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * **[Deprecated]** The ID of the security group to which the node pool belongs. If the node pool is associated with multiple security groups, this parameter returns the first value in `security_group_ids`.
   * 
   * @example
   * sg-2ze1iuk12m2sb4c4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of security group IDs for the node pool.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable Alibaba Cloud OS security hardening. Valid values:
   * - `true`: Enables Alibaba Cloud OS security hardening.
   * - `false`: Does not enable Alibaba Cloud OS security hardening.
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. You can enable MLPS 2.0 security hardening for nodes only when the system image is Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3. Alibaba Cloud provides baseline check standards and scanning programs for classified protection compliance for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 MLPS 2.0 Level 3 images.
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
   * Specifies whether to enable spot instance replenishment. After this feature is enabled, when the scaling group receives a system message indicating that a spot instance will be reclaimed, the scaling group attempts to create a new instance to replace the spot instance to be reclaimed. Valid values:
   * - `true`: Enables spot instance replenishment.
   * - `false`: Does not enable spot instance replenishment.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The market price range configuration for spot instances.
   */
  spotPriceLimit?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The type of spot instance. Valid values:
   * - NoSpot: Pay-as-you-go instance.
   * - SpotWithPriceLimit: Sets the maximum price for spot instances.
   * - SpotAsPriceGo: Uses the system automatic bidding, which follows the actual market price.
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature for the system disk of the node. Valid values:
   * - true: Enables the burst feature. After this feature is enabled, if a volatile workload faces sudden data read and write pressure, the cloud disk temporarily improves its performance based on the actual workload conditions until the workload returns to a stable state.
   * - false: Does not enable the burst feature.
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the system disk. If the system disk cannot be created by using the disk category with the highest priority, the system automatically attempts to use the disk category with the next highest priority.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * - `cloud_efficiency`: Ultra disk.
   * - `cloud_ssd`: Standard SSD.
   * - `cloud_essd`: ESSD.
   * - `cloud_auto`: ESSD AutoPL disk.
   * - `cloud_essd_entry`: ESSD Entry disk.
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
   * - true: Encrypts the system disk.
   * - false: Does not encrypt the system disk.
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
   * The performance level of the system disk. This parameter takes effect only for ESSDs. The performance level is related to the cloud disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html). Valid values:
   * - PL0: Medium concurrent I/O performance and relatively stable read/write latency.
   * - PL1: Medium concurrent I/O performance and relatively stable read/write latency.
   * - PL2: High concurrent I/O performance and stable read/write latency.
   * - PL3: Extremely high concurrent I/O performance and extremely stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for the system disk. This parameter is configured when the disk category is `cloud_auto`.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 20 to 2048.
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
   * The ECS instance labels.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The list of vSwitch IDs.
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
      ramPolicy: 'ram_policy',
      ramRoleName: 'ram_role_name',
      rdsInstances: 'rds_instances',
      resourcePoolOptions: 'resource_pool_options',
      scalingGroupId: 'scaling_group_id',
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
      cpuOptions: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupCpuOptions,
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
      loginAsNonRoot: 'boolean',
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      privatePoolOptions: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupPrivatePoolOptions,
      ramPolicy: 'string',
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      resourcePoolOptions: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupResourcePoolOptions,
      scalingGroupId: 'string',
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityHardeningOs: 'boolean',
      socEnabled: 'boolean',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit },
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
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsStatus extends $dara.Model {
  /**
   * @remarks
   * The number of failed instances.
   * 
   * @example
   * 0
   */
  failedNodes?: number;
  /**
   * @remarks
   * The number of healthy instances.
   * 
   * @example
   * 3
   */
  healthyNodes?: number;
  /**
   * @remarks
   * The number of nodes that are being created.
   * 
   * @example
   * 0
   */
  initialNodes?: number;
  /**
   * @remarks
   * The number of offline nodes.
   * 
   * @example
   * 0
   */
  offlineNodes?: number;
  /**
   * @remarks
   * The number of nodes that are being removed.
   * 
   * @example
   * 0
   */
  removingNodes?: number;
  /**
   * @remarks
   * The number of nodes in the serving state.
   * 
   * @example
   * 3
   */
  servingNodes?: number;
  /**
   * @remarks
   * The state of the node pool. Valid values:
   * - `active`: Active.
   * - `scaling`: Scaling.
   * - `removing`: Removing.
   * - `deleting`: Deleting.
   * - `updating`: Updating.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The number of nodes in the node pool.
   * 
   * @example
   * 3
   */
  totalNodes?: number;
  static names(): { [key: string]: string } {
    return {
      failedNodes: 'failed_nodes',
      healthyNodes: 'healthy_nodes',
      initialNodes: 'initial_nodes',
      offlineNodes: 'offline_nodes',
      removingNodes: 'removing_nodes',
      servingNodes: 'serving_nodes',
      state: 'state',
      totalNodes: 'total_nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNodes: 'number',
      healthyNodes: 'number',
      initialNodes: 'number',
      offlineNodes: 'number',
      removingNodes: 'number',
      servingNodes: 'number',
      state: 'string',
      totalNodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable confidential computing for the cluster. Valid values:
   * - `true`: Enabled.
   * - `false`: Disabled.
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

export class DescribeClusterNodePoolsResponseBodyNodepools extends $dara.Model {
  /**
   * @remarks
   * The auto mode configuration.
   */
  autoMode?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoMode;
  /**
   * @remarks
   * The auto scaling configuration.
   */
  autoScaling?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling;
  /**
   * @remarks
   * The Lingjun node group information.
   */
  efloNodeGroup?: DescribeClusterNodePoolsResponseBodyNodepoolsEfloNodeGroup;
  /**
   * @remarks
   * **[Deprecated]** The network configuration for the edge node pool. This parameter is valid only for node pools whose type is edge.
   */
  interconnectConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only when type is set to edge. Valid values:
   * 
   * - `basic`: Internet. Nodes in cloud node pool interact with cloud nodes over the Internet. Applications in cloud node pool cannot directly access the internal network of the cloud VPC.
   * - `private`: private network. Nodes in cloud node pool connect the cloud and on-premises networks through Express Connect circuits, VPNs, or CEN, which provides higher cloud-edge communication quality and more effective security protection.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The cluster configuration.
   */
  kubernetesConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig;
  /**
   * @remarks
   * The managed node pool configuration. This configuration takes effect only in professional managed clusters.
   */
  management?: DescribeClusterNodePoolsResponseBodyNodepoolsManagement;
  /**
   * @remarks
   * The maximum number of nodes that the node pool can accommodate. The value must be greater than or equal to 0. A value of 0 indicates no additional limit, meaning the node pool is only limited by the maximum number of nodes that the entire cluster can accommodate. For edge node pools, this value is usually greater than 0. For ESS node pools and default edge node pools, this value is 0.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * The list of node components.
   */
  nodeComponents?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponents[];
  /**
   * @remarks
   * The node configuration.
   */
  nodeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig;
  /**
   * @remarks
   * The node pool information.
   */
  nodepoolInfo?: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo;
  /**
   * @remarks
   * The scaling group configurations of the node pool.
   */
  scalingGroup?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup;
  /**
   * @remarks
   * The status of the node pool.
   */
  status?: DescribeClusterNodePoolsResponseBodyNodepoolsStatus;
  /**
   * @remarks
   * The confidential computing configurations.
   */
  teeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoMode: 'auto_mode',
      autoScaling: 'auto_scaling',
      efloNodeGroup: 'eflo_node_group',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      maxNodes: 'max_nodes',
      nodeComponents: 'node_components',
      nodeConfig: 'node_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      status: 'status',
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoMode: DescribeClusterNodePoolsResponseBodyNodepoolsAutoMode,
      autoScaling: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling,
      efloNodeGroup: DescribeClusterNodePoolsResponseBodyNodepoolsEfloNodeGroup,
      interconnectConfig: DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig,
      management: DescribeClusterNodePoolsResponseBodyNodepoolsManagement,
      maxNodes: 'number',
      nodeComponents: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponents },
      nodeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig,
      nodepoolInfo: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup,
      status: DescribeClusterNodePoolsResponseBodyNodepoolsStatus,
      teeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig,
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
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
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

export class DescribeClusterNodePoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node pools.
   */
  nodepools?: DescribeClusterNodePoolsResponseBodyNodepools[];
  static names(): { [key: string]: string } {
    return {
      nodepools: 'nodepools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepools: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodepools },
    };
  }

  validate() {
    if(Array.isArray(this.nodepools)) {
      $dara.Model.validateArray(this.nodepools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

