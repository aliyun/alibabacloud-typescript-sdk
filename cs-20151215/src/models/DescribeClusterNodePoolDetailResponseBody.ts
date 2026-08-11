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
   * Specifies whether intelligent managed mode is enabled.
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
   * The peak bandwidth of the EIP.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The billing type of the EIP. Valid values:
   * 
   * @example
   * PayByBandwidth
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling. Valid values:
   * 
   * - `true`: Enables the auto scaling feature for the node pool. When the cluster capacity plan cannot meet application pod scheduling requirements, ACK automatically scales node resources based on the configured minimum and maximum instance counts. Clusters of version 1.24 or later use instant node elasticity by default. Clusters of versions earlier than 1.24 use node auto scaling by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: Disables auto scaling. ACK adjusts the number of nodes in the node pool based on the configured desired number of nodes, and always maintains the node count at the desired number.
   * 
   * When this parameter is set to false, other configuration parameters in `auto_scaling` do not take effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether an EIP is associated. Valid values:
   * 
   * @example
   * true
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of instances that can be scaled in the node pool, excluding your existing instances.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of instances that can be scaled in the node pool, excluding your existing instances.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The auto scaling type, categorized by instance type. Valid values:
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
   * Indicates whether automatic addition to the Lingjun node pool is enabled.
   */
  autoAttachEnabled?: boolean;
  /**
   * @remarks
   * The Lingjun cluster ID.
   * 
   * @example
   * i113790071760688002461
   */
  clusterId?: string;
  /**
   * @remarks
   * The Lingjun group ID.
   * 
   * @example
   * i128147721760688002463
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

export class DescribeClusterNodePoolDetailResponseBodyInterconnectConfig extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * **[Deprecated]**
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
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After installation, you can view monitoring information of the created ECS instances in the CloudMonitor console. We recommend that you enable this feature. Valid values:
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The node CPU management policy. The following two policies are supported when the cluster version is 1.12.6 or later:
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The node tag.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name.
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The node pool pre-user data, which is a script that runs before node initialization. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * dGhpcyBpcyBhIGV4YW1wbGU
   */
  preUserData?: string;
  /**
   * @remarks
   * The container runtime name. ACK supports the following three container runtimes.
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
   * The node taint information. Taints and tolerations work together to prevent pods from being scheduled to inappropriate nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether scaled-out nodes are unschedulable.
   * 
   * @example
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The node pool user data, which is a script that runs after node initialization. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
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
   * The auto-repair policy ID.
   * 
   * @example
   * r-xxxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * The maximum number or percentage of nodes that can be repaired in parallel when a large number of abnormal nodes exist in the node pool.
   * 
   * @example
   * 1
   */
  maxParallelRepairingNodes?: string;
  /**
   * @remarks
   * The self-healing circuit breaker condition. When the number or percentage of faulty nodes exceeds this threshold, self-healing enters a circuit breaker state and stops initiating new repair actions.
   * 
   * @example
   * 10%
   */
  maxUnhealthyNodesThreshold?: string;
  /**
   * @remarks
   * Specifies whether node restart is allowed. This takes effect only when `auto_repair=true`.
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
   * Specifies whether to allow automatic kubelet upgrades. This parameter takes effect only when `auto_upgrade=true`. Valid values:
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
   * The packages that should be excluded during vulnerability fix.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when `auto_vul_fix=true`. Valid values:
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels that are allowed for automatic fixing, separated by commas.
   * 
   * - `asap`: high
   * - `later`: medium
   * - `nntf`: low
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
   * Specifies whether to enable auto upgrade. Valid values:
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes. Valid values: [1,1000\\].
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of extra nodes. You can set this parameter or surge_percentage, but not both.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. You can set this parameter or `surge`, but not both.
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
   * Indicates whether auto repair is enabled. This takes effect only when `enable=true`.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto repair policy for nodes.
   */
  autoRepairPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to automatically upgrade nodes. This parameter takes effect only when `enable=true`.
   * - `true`: Automatic upgrade is enabled.
   * - `false`: Automatic upgrade is not enabled.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto upgrade policy.
   */
  autoUpgradePolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to automatically fix CVEs. This parameter takes effect only when `enable=true`.
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
   * Specifies whether to enable node rotation. Only intelligent managed node pools support this feature, and it is enabled by default. Regular node pools do not support this feature.
   */
  driftEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the managed node pool is enabled. Valid values:
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The auto upgrade configuration. This parameter takes effect only when `enable=true`.
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

export class DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfig extends $dara.Model {
  /**
   * @remarks
   * The custom configuration of node components.
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

export class DescribeClusterNodePoolDetailResponseBodyNodeComponents extends $dara.Model {
  /**
   * @remarks
   * The node component configuration.
   */
  config?: DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfig;
  /**
   * @remarks
   * The version number of the custom configuration of node components.
   * 
   * @example
   * 1
   */
  configRevision?: string;
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
   * The hugepage configuration.
   */
  hugepage?: Hugepage;
  static names(): { [key: string]: string } {
    return {
      hugepage: 'hugepage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hugepage: Hugepage,
    };
  }

  validate() {
    if(this.hugepage && typeof (this.hugepage as any).validate === 'function') {
      (this.hugepage as any).validate();
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
   * The Kubelet parameter settings.
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
   * Indicates whether this is the default node pool. Typically, a cluster has only one default node pool. Valid values:
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
   * rg-acfmyvw3wjmb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node pool type. Valid values:
   * - `ess`: regular node pool (includes managed features and automatic elastic scaling).
   * - `edge`: edge node pool.
   * - `lingjun`: Lingjun node pool.
   * 
   * @example
   * ess
   */
  type?: string;
  /**
   * @remarks
   * The time when the node pool was last updated.
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
   * Specifies whether nested virtualization is enabled. Valid values:
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
   * The private node pool type. Specifies the private pool capacity option for instance launch. After an elasticity assurance or capacity reservation takes effect, a private pool capacity is generated for instance launch. Valid values:
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
   * The resource pool strategy used when instances are created. Valid values:
   * - PrivatePoolFirst: private pool first.
   * - PrivatePoolOnly: private pool only.
   * - None: no resource pool strategy is used.
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
   * The maximum price of a single instance.
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
   * 
   * - `true`: Auto-renewal is enabled.
   * - `false`: Auto-renewal is not enabled.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The duration of each auto-renewal cycle. Valid values:
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
   * When `multi_az_policy` is set to `COST_OPTIMIZED`, specifies whether to allow the automatic creation of pay-as-you-go instances to meet the required number of ECS instances when spot instances cannot be created due to cost or inventory reasons. Valid values:
   * 
   * - `true`: Allows the automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * - `false`: Does not allow the automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The CPU-related configuration options.
   */
  cpuOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupCpuOptions;
  /**
   * @remarks
   * The configurations of node data cloud disks, including disk type and size.
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
   * Indicates whether high-density cloud disk mode is enabled. This mode is supported only when the node pool uses instance types. When enabled, the total number of system cloud disks and data cloud disks does not exceed the maximum number of high-density cloud disks supported by the instance type.
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
   * The operating system image type. Valid values:
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
   * - `PrePaid`: subscription.
   * - `PostPaid`: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metadata access configuration for ECS instances.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * The instance attribute configurations.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of node instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for the public IP address of the node.
   * 
   * Valid values:
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth for node public IP addresses, in Mbps (Mega bit per second). Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The key pair name, mutually exclusive with `login_password`. When the node pool is a managed node pool, only `key_pair` is supported.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * Indicates whether the ECS instance uses a non-root user for logon.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The SSH logon password, mutually exclusive with `key_pair`. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * The multi-zone scaling policy for ECS instances in the scaling group. Valid values:
   * 
   * - `PRIORITY`: Scales ECS instances based on the virtual switches (VSwitchIds.N) that you define. When ECS instances cannot be created in the zone of the highest-priority vSwitch, the system automatically uses the next-priority vSwitch to create ECS instances.
   * 
   * - `COST_OPTIMIZED`: Attempts to create ECS instances in ascending order of vCPU unit price. When the scaling configuration specifies multiple instance types with the spot billing method, spot instances are created first. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically attempt to create pay-as-you-go instances when spot instances cannot be created due to insufficient inventory or other reasons.
   * 
   *   >`COST_OPTIMIZED` takes effect only when the scaling configuration specifies multiple instance types or uses spot instances.
   * 
   * - `BALANCE`: Evenly distributes ECS instances across the multiple zones specified in the scaling group. If zones become unbalanced due to insufficient inventory or other reasons, you can call the RebalanceInstances operation to rebalance resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
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
   * The percentage of pay-as-you-go instances among the instances that exceed the minimum number of pay-as-you-go instances (`on_demand_base_capacity`). Valid values: [0,100\\].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of nodes. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
   * 
   * @example
   * 0
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of nodes. This parameter is required when `instance_charge_type` is set to `PrePaid`.
   * 
   * Valid values:
   * - `Month`: billed on a monthly basis.
   * - `Week`: billed on a weekly basis.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The operating system distribution. Valid values:
   * 
   * @example
   * AliyunLinux
   */
  platform?: string;
  /**
   * @remarks
   * The private node pool configuration.
   */
  privatePoolOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * **[Deprecated]** Use ram_role_name instead.
   * 
   * @example
   * KubernetesWorkerRole-021dc54f-929b-437a-8ae0-34c24d3e****
   */
  ramPolicy?: string;
  /**
   * @remarks
   * The Worker RAM role name.
   * 
   * @example
   * KubernetesWorkerRole-4a4fa089-80c1-48a5-b3c6-9349311f****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The list of RDS instances. If RDS instances are specified, the ECS instances in the cluster nodes are automatically added to the RDS access whitelist.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool policy used for instance creation.
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
   * The scaling mode of the scaling group. Valid values:
   * 
   * - `release`: standard mode. Scales by creating and releasing ECS instances based on resource usage.
   * - `recycle`: swift mode. Scales by creating, stopping, and starting ECS instances to improve the speed of subsequent scaling operations. Stopped instances are not charged for compute resources, but storage fees still apply. This does not apply to instance types with local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The security group ID of the node pool. When the node pool is associated with multiple security groups, this is the first value in `security_group_ids`.
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
   * Specifies whether Alibaba Cloud OS security hardening is enabled. Valid values:
   * 
   * - `true`: Alibaba Cloud OS security hardening is enabled.
   * - `false`: Alibaba Cloud OS security hardening is not enabled.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Indicates whether MLPS 2.0 security hardening is enabled. You can enable MLPS 2.0 security hardening for nodes only when the system image is Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3. Alibaba Cloud provides classified protection compliance baseline check standards and scanning programs for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 MLPS 2.0 level 3 images.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of available instance types. The scaling group creates spot instances across multiple lowest-cost instance types in a balanced manner. Valid values: [1,10\\].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable supplementation of spot instances. When enabled, the scaling group attempts to create new instances to replace spot instances that are about to be reclaimed upon receiving a system notification. Valid values:
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The price limit configurations for spot instances.
   */
  spotPriceLimit?: DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The type of spot instance. Valid values:
   * - NoSpot: non-spot instance.
   * - SpotWithPriceLimit: spot instance with a price limit.
   * - SpotAsPriceGo: spot instance priced at the market price at the time of purchase.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Indicates whether burst mode is enabled for the system cloud disks of nodes. Valid values:
   * - true: Enabled. When enabled, the cloud disk temporarily boosts performance to handle unexpected spikes in data read/write pressure during fluctuating workloads, until the workload returns to a steady state.
   * - false: Not enabled.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Multiple cloud disk types for the system cloud disk. When a higher-priority cloud disk type is unavailable, the system automatically attempts the next-priority cloud disk type to create the system cloud disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The type of the system cloud disk. Valid values:
   * - `cloud_efficiency`: ultra cloud disk.
   * - `cloud_ssd`: standard SSD.
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
   * The system cloud disk size of nodes. Unit: GiB.
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
   * sp-bp11g8z59rawcud9****
   */
  systemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * The ECS instance tags.
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
   * The time of the last status transition.
   * 
   * @example
   * 20**-**-30T10:39:00+08:00
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * The detailed message.
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
   * The current conditions of the node pool, representing status information across different dimensions.
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
   * The number of nodes that are serving workloads.
   * 
   * @example
   * 3
   */
  servingNodes?: number;
  /**
   * @remarks
   * The status of the node pool. Valid values:
   * 
   * - `active`: Active.
   * - `scaling`: Scaling in progress.
   * - `removing`: Node removal in progress.
   * - `deleting`: Deletion in progress.
   * - `updating`: Update in progress.
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
   * Specifies whether to enable the confidential computing cluster. Valid values:
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
   * The intelligent managed configuration.
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
   * Specifies whether the Pod network mode uses host network mode.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * **[Deprecated]**
   */
  interconnectConfig?: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only for node pools whose `type` is `edge`. Valid values:
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Specifies whether nodes in the edge node pool have Layer 3 network connectivity with each other.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * The cluster-related configuration.
   */
  kubernetesConfig?: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig;
  /**
   * @remarks
   * The managed node pool configuration.
   */
  management?: DescribeClusterNodePoolDetailResponseBodyManagement;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * The node component list.
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
   * The scaling group configuration of the node pool.
   */
  scalingGroup?: DescribeClusterNodePoolDetailResponseBodyScalingGroup;
  /**
   * @remarks
   * The node pool status.
   */
  status?: DescribeClusterNodePoolDetailResponseBodyStatus;
  /**
   * @remarks
   * The confidential computing cluster configuration.
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

