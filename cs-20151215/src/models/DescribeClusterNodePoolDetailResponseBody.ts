// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { DiskInit } from "./DiskInit";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";
import { InstancePatterns } from "./InstancePatterns";
import { Tag } from "./Tag";
import { KubeletConfig } from "./KubeletConfig";
import { Hugepage } from "./Hugepage";
import { Taint } from "./Taint";


export class DescribeClusterNodePoolDetailResponseBodyAutoMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether auto mode is enabled.
   * 
   * @example
   * false
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

export class DescribeClusterNodePoolDetailResponseBodyAutoScaling extends $dara.Model {
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
   * - `PayByBandwidth`: pay-by-bandwidth
   * - `PayByTraffic`: pay-by-data-transfer
   * 
   * @example
   * PayByBandwidth
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether auto scaling is enabled. Valid values:
   * 
   * - `true`: enables auto scaling for the node pool. When the capacity planning of the cluster cannot meet the scheduling requirements of application pods, ACK automatically scales the node resources based on the configured minimum and maximum numbers of instances. For clusters of Kubernetes 1.24 and later, node instant elasticity is enabled by default. For clusters earlier than Kubernetes 1.24, node auto scaling is enabled by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: disables auto scaling. ACK adjusts the number of nodes in the node pool based on the configured expected number of nodes and always maintains the number of nodes at the expected value.
   * 
   * If this parameter is set to false, other configuration parameters in `auto_scaling` do not take effect.
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
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The auto scaling type, which is classified by the type of auto scaling instances. Valid values:
   * 
   * - `cpu`: regular instance
   * - `gpu`: GPU-accelerated instance
   * - `gpushare`: shared GPU-accelerated instance
   * - `spot`: spot instance
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

export class DescribeClusterNodePoolDetailResponseBodyEfloNodeGroup extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic addition to the Lingjun node pool.
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

export class DescribeClusterNodePoolDetailResponseBodyInterconnectConfig extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The network bandwidth of the edge-enhanced node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * **[Deprecated]** The instance ID of the Cloud Connect Network (CCN) attached to the edge-enhanced node pool.
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * **[Deprecated]** The region of the CCN instance associated with the edge-enhanced node pool.
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * **[Deprecated]** The instance ID of the Cloud Enterprise Network (CEN) attached to the edge-enhanced node pool.
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * **[Deprecated]** The subscription duration of the edge-enhanced node pool. Unit: months.
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

export class DescribeClusterNodePoolDetailResponseBodyKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After the agent is installed, you can view the monitoring information of the created ECS instances in the CloudMonitor console. Valid values:
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
   * - `static`: allows you to enhance the CPU affinity and exclusivity for pods with specific resource characteristics on the node.
   * - `none`: indicates that the existing default CPU affinity scheme is used.
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
   * - The IP address substring length refers to the number of digits truncated from the end of the node IP address. Valid values: 5 to 12.
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
   * dGhpcyBpcyBhIGV4YW1wbGU
   */
  preUserData?: string;
  /**
   * @remarks
   * The name of the container runtime. ACK supports the following three container runtimes:
   * 
   * - containerd: recommended. Supported by all cluster versions.
   * - Sandboxed-Container.runv: sandboxed container. Provides higher isolation. Supported by clusters of version 1.31 and earlier.
   * - docker: no longer maintained. Supported by clusters of version 1.22 and earlier.
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
   * The node taint information. Taints and tolerations work together to prevent pods from being scheduled onto inappropriate nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether nodes are unschedulable after a scale-out. Valid values:
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
   * The custom data of the node pool, which is the script that runs after node initialization. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFDSyEi
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

export class DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy extends $dara.Model {
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
   * r-xxxxxxxxxx
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
   * The circuit breaker threshold for auto-repair. When the number or percentage of failed nodes exceeds this threshold, the auto-repair process enters the circuit breaker state and stops initiating new repair actions.
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

export class DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy extends $dara.Model {
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

export class DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy extends $dara.Model {
  /**
   * @remarks
   * The packages to be excluded during vulnerability fixes.
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
   * - asap: high
   * - later: medium
   * - nntf: low
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

export class DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig extends $dara.Model {
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
   * The maximum number of unavailable nodes. Valid values: 1 to 1000.
   * 
   * Default value: 1.
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
   * The percentage of surge nodes. This parameter and surge are mutually exclusive.
   * 
   * The number of surge nodes is calculated by multiplying the surge node percentage by the total number of nodes. For example, if the surge node percentage is set to 50% and the total number of nodes is 6, the number of surge nodes generated is 50% × 6 = 3.
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

export class DescribeClusterNodePoolDetailResponseBodyManagement extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable ECS fault detection for node self-healing.
   */
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * The auto repair feature. This feature takes effect only when `enable` is set to `true`. Valid values:
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
   * The auto-repair policy for nodes.
   */
  autoRepairPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy;
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
  autoUpgradePolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy;
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
   * The automatic CVE fix policy.
   */
  autoVulFixPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the node rotation capability. This feature is supported only by intelligent managed node pools and is enabled by default. Common node pools do not support this feature.
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
   * The auto-upgrade configuration. This parameter takes effect only when enable is set to true.
   */
  upgradeConfig?: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig;
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
      autoRepairPolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy,
      driftEnabled: 'boolean',
      enable: 'boolean',
      upgradeConfig: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig,
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

export class DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfigEnvs extends $dara.Model {
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

export class DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfig extends $dara.Model {
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
  envs?: DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfigEnvs[];
  static names(): { [key: string]: string } {
    return {
      customConfig: 'custom_config',
      envs: 'envs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envs: { 'type': 'array', 'itemType': DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfigEnvs },
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

export class DescribeClusterNodePoolDetailResponseBodyNodeComponents extends $dara.Model {
  /**
   * @remarks
   * The configuration of the node component.
   */
  config?: DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfig;
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
      config: DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfig,
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

export class DescribeClusterNodePoolDetailResponseBodyNodeConfigNodeOsConfig extends $dara.Model {
  /**
   * @remarks
   * The huge page configuration.
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

export class DescribeClusterNodePoolDetailResponseBodyNodeConfig extends $dara.Model {
  /**
   * @remarks
   * The kubelet parameter settings.
   */
  kubeletConfiguration?: KubeletConfig;
  /**
   * @remarks
   * The node operating system configuration.
   */
  nodeOsConfig?: DescribeClusterNodePoolDetailResponseBodyNodeConfigNodeOsConfig;
  static names(): { [key: string]: string } {
    return {
      kubeletConfiguration: 'kubelet_configuration',
      nodeOsConfig: 'node_os_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfiguration: KubeletConfig,
      nodeOsConfig: DescribeClusterNodePoolDetailResponseBodyNodeConfigNodeOsConfig,
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

export class DescribeClusterNodePoolDetailResponseBodyNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the node pool was created.
   * 
   * @example
   * 2025-04-10T14:25:37.285530433+08:00
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
   * The name of the node pool.
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
   * rg-acfmyvw3wjmb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node pool type. Valid values:
   * - `ess`: standard node pool (includes managed and automatic scaling features).
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
   * 2025-04-15T15:39:45.41+08:00
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

export class DescribeClusterNodePoolDetailResponseBodyScalingGroupCpuOptions extends $dara.Model {
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

export class DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The private node pool ID.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool capacity matching criteria for instance startup. After an elasticity assurance or capacity reservation takes effect, a private pool is generated for you to select when you start instances. Valid values:
   * - `Open`: open mode. The system automatically matches the capacity of an open private pool. If no matching private pool capacity is available, the system uses public pool resources to start the instance. In this mode, you do not need to specify the PrivatePoolOptions.Id parameter.
   * - `Target`: specified mode. The system uses the capacity of the specified private pool to start the instance. If the specified private pool capacity is unavailable, the instance fails to start. In this mode, you must specify the private pool ID by setting the PrivatePoolOptions.Id parameter.
   * - `None`: no private pool mode. The system does not use private pool capacity to start the instance.
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

export class DescribeClusterNodePoolDetailResponseBodyScalingGroupResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of private pool IDs.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * The resource pool strategy used to create instances. Valid values:
   * PrivatePoolFirst: Private pools are prioritized.
   * PrivatePoolOnly: Only private pools are used.
   * None: No resource pool strategy is used.
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

export class DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit extends $dara.Model {
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
   * The market price of a single instance.
   * 
   * <props="china">Unit: CNY/hour.
   * 
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

export class DescribeClusterNodePoolDetailResponseBodyScalingGroup extends $dara.Model {
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled for nodes. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * - `true`: enables auto-renewal.
   * - `false`: disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration for a single renewal. Valid values:
   * - When PeriodUnit is set to Week: 1, 2, and 3.
   * - When PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
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
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances when `multi_az_policy` is set to `COST_OPTIMIZED` and sufficient spot instances cannot be created due to price or inventory reasons. Valid values:
   * - `true`: automatically creates pay-as-you-go instances to meet the required number of ECS instances.
   * - `false`: does not automatically create pay-as-you-go instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The CPU options.
   */
  cpuOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupCpuOptions;
  /**
   * @remarks
   * The combination of configurations such as the type and size of data cloud disks for nodes.
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
   * The custom image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system image type. We recommend that you use this field to specify the node operating system. Valid values:
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
   * The billing method of nodes in the node pool. Valid values:
   * - `PrePaid`: subscription.
   * - `PostPaid`: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metadata access configurations for ECS instances.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance property configurations.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of instance types for nodes.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for public IP addresses of nodes. Valid values:
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth for public IP addresses of nodes. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The key pair name. You must specify either this parameter or `login_password`. If the node pool is a managed node pool, only `key_pair` is supported.
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
   * The SSH logon password. You must specify either this parameter or `key_pair`. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * For security reasons, the password is encrypted in the query result.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for ECS instances in a multi-zone scaling group. Valid values:
   * - `PRIORITY`: scales ECS instances based on the vSwitches (VSwitchIds.N) that you specify. If ECS instances cannot be created in the zone of the vSwitch with the highest priority, the system automatically uses the vSwitch with the next highest priority to create ECS instances.
   * - `COST_OPTIMIZED`: creates ECS instances based on the unit price of vCPUs in ascending order. If the scaling configuration settings specify multiple instance types and the billing method is set to preemptible, the system preferentially creates spot instances. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when spot instances cannot be created due to insufficient inventory.
   *   > `COST_OPTIMIZED` takes effect only when the scaling configuration settings specify multiple instance types or use spot instances.
   * - `BALANCE`: evenly allocates ECS instances across the zones specified in the scaling group. If the distribution becomes unbalanced due to insufficient inventory, you can call the RebalanceInstances operation to balance the resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required by the scaling group. Valid values: [0,1000\\]. If the number of pay-as-you-go instances is less than this value, the system preferentially creates pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the instances that exceed the minimum number of pay-as-you-go instances (`on_demand_base_capacity`) required by the scaling group. Valid values: [0,100\\].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of nodes. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * - When `period_unit` is set to `Week`: 1, 2, 3, and 4.
   * - When `period_unit` is set to `Month`: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 0
   */
  period?: number;
  /**
   * @remarks
   * The subscription epoch of nodes. This parameter is required when `instance_charge_type` is set to `PrePaid`. Valid values:
   * - `Month`: uses month as the compute unit (CU).
   * - `Week`: uses week as the compute unit (CU).
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The operating system distribution. Valid values:
   * - `CentOS`
   * - `AliyunLinux`
   * - `Windows`
   * - `WindowsCore`
   * 
   * @example
   * AliyunLinux
   */
  platform?: string;
  /**
   * @remarks
   * The private node pool configurations.
   */
  privatePoolOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions;
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
   * If ApsaraDB RDS instances are specified, the ECS instances in the cluster are automatically added to the whitelist of the RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool policy used when creating instances.
   */
  resourcePoolOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling group ID.
   * 
   * @example
   * asg-2zeieod8giqmov7z****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling group pattern. Valid values:
   * 
   * - `release`: standard pattern. Scales by creating and releasing ECS instances based on the requested resource usage.
   * - `recycle`: extreme pattern. Scales by creating, stopping, and starting instances to improve scaling speed. When an instance is stopped, compute resources are not billed, but storage resources are billed, except for instances with local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The security group ID of the node pool. If multiple security groups are bound to the node pool, this is the first value in `security_group_ids`.
   * 
   * @example
   * sg-2ze60ockeekspl3d****
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
   * 
   * - `true`: enables Alibaba Cloud OS security hardening.
   * - `false`: does not enable Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. You can enable this feature for nodes only when the system image is Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3. Alibaba Cloud provides classified protection compliance baseline check standards and scanning programs for the MLPS 2.0 Level 3 images of Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of available instance types. The scaling group evenly creates spot instances across multiple instance types with the lowest cost. Valid values: [1, 10].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable spot instance replenishment. After this feature is enabled, when a system message indicating that a spot instance will be reclaimed is received, the scaling group attempts to create a new instance to replace the spot instance to be reclaimed. Valid values:
   * 
   * - `true`: enables spot instance replenishment.
   * - `false`: disables spot instance replenishment.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The market price range configuration for spot instances.
   */
  spotPriceLimit?: DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The spot instance strategy. Valid values:
   * - NoSpot: non-spot instance.
   * - SpotWithPriceLimit: sets a maximum price for spot instances.
   * - SpotAsPriceGo: uses automatic system bidding, which follows the actual market price.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst mode (performance burst) for the system disk of the node. Valid values:
   * - true: enables the burst mode. After this feature is enabled, when a volatile business faces sudden data read and write pressure, the cloud disk temporarily improves its performance based on the actual business conditions until the business returns to a stable state.
   * - false: disables the burst mode.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the system disk. If a high-priority disk category is unavailable, the system automatically attempts to use the next priority disk category to create the system disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The category of the node system disk. Valid values:
   * - `cloud_efficiency`: ultra disk.
   * - `cloud_ssd`: standard SSD.
   * - `cloud_essd`: ESSD.
   * - `cloud_auto`: ESSD AutoPL cloud disk.
   * - `cloud_essd_entry`: ESSD Entry cloud disk.
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
   * - `true`: encrypts the system disk.
   * - `false`: does not encrypt the system disk.
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
   * The performance level of the node system disk. This parameter takes effect only for ESSD. The performance level is related to the disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * - PL0: provides medium concurrent I/O performance and relatively stable read/write latency.
   * - PL1: provides medium concurrent I/O performance and relatively stable read/write latency.
   * - PL2: provides high concurrent I/O performance and stable read/write latency.
   * - PL3: provides extremely high concurrent I/O performance and highly stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for the node system disk.
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
   * The size of the node system disk. Unit: GiB.
   * 
   * Valid values: [20, 2048].
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
   * sp-bp11g8z59rawcud9****
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
      cpuOptions: DescribeClusterNodePoolDetailResponseBodyScalingGroupCpuOptions,
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
      privatePoolOptions: DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions,
      ramPolicy: 'string',
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      resourcePoolOptions: DescribeClusterNodePoolDetailResponseBodyScalingGroupResourcePoolOptions,
      scalingGroupId: 'string',
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityHardeningOs: 'boolean',
      socEnabled: 'boolean',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit },
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

export class DescribeClusterNodePoolDetailResponseBodyStatusConditions extends $dara.Model {
  /**
   * @remarks
   * The time of the last status transition, in ISO 8601 format with time zone information.
   * 
   * @example
   * 20**-**-30T10:39:00+08:00
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * The detailed information.
   * 
   * @example
   * AutoUpgradeDisabled
   */
  message?: string;
  /**
   * @remarks
   * The reason.
   * 
   * @example
   * UpgradeDisabled
   */
  reason?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ImageUpgradeReady
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lastTransitionTime: 'last_transition_time',
      message: 'message',
      reason: 'reason',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTransitionTime: 'string',
      message: 'string',
      reason: 'string',
      status: 'string',
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

export class DescribeClusterNodePoolDetailResponseBodyStatus extends $dara.Model {
  /**
   * @remarks
   * The current conditions of the node pool, which indicate the status information of the node pool in different dimensions.
   */
  conditions?: DescribeClusterNodePoolDetailResponseBodyStatusConditions[];
  /**
   * @remarks
   * The number of failed nodes.
   * 
   * @example
   * 0
   */
  failedNodes?: number;
  /**
   * @remarks
   * The number of healthy nodes.
   * 
   * @example
   * 3
   */
  healthyNodes?: number;
  /**
   * @remarks
   * The number of nodes being created.
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
   * The number of nodes being removed.
   * 
   * @example
   * 0
   */
  removingNodes?: number;
  /**
   * @remarks
   * The number of serving nodes.
   * 
   * @example
   * 3
   */
  servingNodes?: number;
  /**
   * @remarks
   * The state of the node pool. Valid values:
   * 
   * - `active`: Activated.
   * - `scaling`: Scaling.
   * - `removing`: Removing nodes.
   * - `deleting`: Deleting.
   * - `updating`: Updating.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The total number of nodes in the node pool.
   * 
   * @example
   * 3
   */
  totalNodes?: number;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
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
      conditions: { 'type': 'array', 'itemType': DescribeClusterNodePoolDetailResponseBodyStatusConditions },
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
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyTeeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the TEE cluster. Valid values:
   * 
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

export class DescribeClusterNodePoolDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The auto mode configuration.
   */
  autoMode?: DescribeClusterNodePoolDetailResponseBodyAutoMode;
  /**
   * @remarks
   * The auto scaling configuration of the node pool.
   */
  autoScaling?: DescribeClusterNodePoolDetailResponseBodyAutoScaling;
  /**
   * @remarks
   * The Lingjun node group information.
   */
  efloNodeGroup?: DescribeClusterNodePoolDetailResponseBodyEfloNodeGroup;
  /**
   * @remarks
   * Specifies whether pods in the node pool use the host network mode. Valid values:
   * - `true`: host network. Pods directly use the network stack of the host and share the IP address and ports with the host.
   * - `false`: container network. Pods have independent network stacks and do not occupy host network ports.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * **[Deprecated]** The network configuration related to the edge node pool. This parameter is valid only for node pools whose type is edge.
   */
  interconnectConfig?: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only when `type` is set to `edge`. Valid values:
   * 
   * - `basic`: Internet. Nodes in cloud node pool interact with cloud nodes over the Internet. Applications in cloud node pool cannot directly access the internal network of the cloud VPC.
   * - `private`: private network. Nodes in cloud node pool connect the cloud and on-premises networks through Express Connect circuits, VPNs, or CEN. This provides higher cloud-edge communication quality and more effective security protection.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Specifies whether Layer 3 network connectivity is enabled among nodes in the edge node pool. Valid values:
   * - `true`: enabled. Layer 3 network connectivity is enabled among all nodes in the node pool.
   * - `false`: disabled. Layer 3 network connectivity is disabled among all hosts in the node pool.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * The cluster-related configurations.
   */
  kubernetesConfig?: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig;
  /**
   * @remarks
   * The managed node pool configuration.
   */
  management?: DescribeClusterNodePoolDetailResponseBodyManagement;
  /**
   * @remarks
   * **[Deprecated]** The maximum number of nodes that an edge node pool can accommodate.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * The list of node components.
   */
  nodeComponents?: DescribeClusterNodePoolDetailResponseBodyNodeComponents[];
  /**
   * @remarks
   * The node configuration.
   */
  nodeConfig?: DescribeClusterNodePoolDetailResponseBodyNodeConfig;
  /**
   * @remarks
   * The node pool configuration.
   */
  nodepoolInfo?: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo;
  /**
   * @remarks
   * The scaling group configurations of the node pool.
   */
  scalingGroup?: DescribeClusterNodePoolDetailResponseBodyScalingGroup;
  /**
   * @remarks
   * The status of the node pool.
   */
  status?: DescribeClusterNodePoolDetailResponseBodyStatus;
  /**
   * @remarks
   * The TEE cluster configuration.
   */
  teeConfig?: DescribeClusterNodePoolDetailResponseBodyTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoMode: 'auto_mode',
      autoScaling: 'auto_scaling',
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
      status: 'status',
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoMode: DescribeClusterNodePoolDetailResponseBodyAutoMode,
      autoScaling: DescribeClusterNodePoolDetailResponseBodyAutoScaling,
      efloNodeGroup: DescribeClusterNodePoolDetailResponseBodyEfloNodeGroup,
      hostNetwork: 'boolean',
      interconnectConfig: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig,
      interconnectMode: 'string',
      intranet: 'boolean',
      kubernetesConfig: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig,
      management: DescribeClusterNodePoolDetailResponseBodyManagement,
      maxNodes: 'number',
      nodeComponents: { 'type': 'array', 'itemType': DescribeClusterNodePoolDetailResponseBodyNodeComponents },
      nodeConfig: DescribeClusterNodePoolDetailResponseBodyNodeConfig,
      nodepoolInfo: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolDetailResponseBodyScalingGroup,
      status: DescribeClusterNodePoolDetailResponseBodyStatus,
      teeConfig: DescribeClusterNodePoolDetailResponseBodyTeeConfig,
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

