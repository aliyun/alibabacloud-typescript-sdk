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
   * Indicates whether smart managed mode is enabled.
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
   * Valid values: [1,100]. Unit: Mbps.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The EIP billing method. Valid values:
   * 
   * - `PayByBandwidth`: Pay-by-bandwidth.
   * 
   * - `PayByTraffic`: Pay-by-traffic.
   * 
   * @example
   * PayByBandwidth
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Indicates whether automatic scaling is enabled. Valid values:
   * 
   * - `true`: Enables automatic scaling for the node pool. When the cluster capacity cannot meet pod scheduling demands, ACK automatically scales node resources based on the configured minimum and maximum instance counts. Clusters running Kubernetes 1.24 or later enable instant elasticity by default. Clusters earlier than 1.24 enable node autoscaling by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: Disables automatic scaling. ACK maintains the node count at the desired number specified in the configuration.
   * 
   * If set to false, other parameters under `auto_scaling` have no effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether an EIP is bound. Valid values:
   * 
   * - `true`: Binds an EIP.
   * 
   * - `false`: Does not bind an EIP.
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
   * The automatic scaling type, categorized by instance type. Valid values:
   * 
   * - `cpu`: Standard instance.
   * 
   * - `gpu`: GPU instance.
   * 
   * - `gpushare`: Shared GPU instance.
   * 
   * - `spot`: Spot instance.
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
   * @example
   * i113790071760688002461
   */
  clusterId?: string;
  /**
   * @example
   * i128147721760688002463
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

export class DescribeClusterNodePoolDetailResponseBodyInterconnectConfig extends $dara.Model {
  /**
   * @remarks
   * [Deprecated]
   * 
   * The network bandwidth for the enhanced edge node pool. Unit: Mbps.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * [Deprecated]
   * 
   * The CCN instance ID bound to the enhanced edge node pool.
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * [Deprecated]
   * 
   * The region of the CCN instance bound to the enhanced edge node pool.
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * [Deprecated]
   * 
   * The CEN instance ID bound to the enhanced edge node pool.
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * [Deprecated]
   * 
   * The subscription duration for the enhanced edge node pool. Unit: months.
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
   * Indicates whether Cloud Monitor is installed on ECS nodes. After installation, you can view monitoring data for created ECS instances in the Cloud Monitor console. We recommend enabling this feature. Valid values:
   * 
   * - `true`: Installs Cloud Monitor on ECS nodes.
   * 
   * - `false`: Does not install Cloud Monitor on ECS nodes.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The node CPU management policy. Clusters running Kubernetes 1.12.6 or later support the following policies:
   * 
   * - `static`: Enhances CPU affinity and exclusivity for pods with specific resource characteristics.
   * 
   * - `none`: Uses the default CPU affinity scheme.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * Node labels.
   */
  labels?: Tag[];
  /**
   * @remarks
   * Custom node naming.
   * 
   * A node name consists of three parts: prefix + IP address substring + suffix:
   * 
   * - Both prefix and suffix can consist of one or more parts separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
   * 
   * - The IP address substring length is the number of trailing digits taken from the node\\"s IP address. Valid values: 5–12.
   * 
   * Example: If the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name is aliyun.com00055test.
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * Pre-custom data for the node pool, which runs before node initialization. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * dGhpcyBpcyBhIGV4YW1wbGU
   */
  preUserData?: string;
  /**
   * @remarks
   * The container runtime. ACK supports the following runtimes:
   * 
   * - containerd: Recommended. Supported in all cluster versions.
   * 
   * - Sandboxed-Container.runv: Sandboxed container runtime with enhanced isolation. Supported in clusters up to version 1.31.
   * 
   * - docker: Deprecated. Supported in clusters up to version 1.22.
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
   * Node taint information. Taints and tolerations work together to prevent pods from being scheduled onto unsuitable nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Indicates whether newly scaled nodes are unschedulable.
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
   * Custom data for the node pool, which runs after node initialization. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
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
   * Indicates whether manual approval is required for node repair.
   * 
   * @example
   * false
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * The automatic repair policy ID.
   * 
   * @example
   * r-xxxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * Indicates whether node restart is allowed. This parameter takes effect only when `auto_repair=true`.
   * 
   * - `true`: Allows node restart.
   * 
   * - `false`: Disallows node restart.
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

export class DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether kubelet auto-upgrade is allowed. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * 
   * - `true`: Allows kubelet auto-upgrade.
   * 
   * - `false`: Disallows kubelet auto-upgrade.
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
   * The packages excluded during vulnerability fixes.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Indicates whether node restart is allowed. This parameter takes effect only when `auto_vul_fix=true`. Valid values:
   * 
   * - `true`: Allows node restart.
   * 
   * - `false`: Disallows node restart.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The vulnerability levels that can be automatically fixed, separated by commas.
   * 
   * - `asap`: High
   * 
   * - `later`: Medium
   * 
   * - `nntf`: Low
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
   * Indicates whether auto-upgrade is enabled. Valid values:
   * 
   * - `true`: Enables auto-upgrade.
   * 
   * - `false`: Disables auto-upgrade.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes. Valid values: [1,1000].
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of extra nodes. Choose either this parameter or surge_percentage.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. Choose either this parameter or `surge`.
   * 
   * Number of extra nodes = surge percentage × number of nodes. For example, if you set the surge percentage to 50% and there are 6 nodes, the number of extra nodes is 50% × 6 = 3.
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
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Automatic repair. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: Enables automatic repair.
   * 
   * - `false`: Disables automatic repair.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * Automatic node repair policy.
   */
  autoRepairPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy;
  /**
   * @remarks
   * Indicates whether node auto-upgrade is enabled. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: Enables auto-upgrade.
   * 
   * - `false`: Disables auto-upgrade.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * Auto-upgrade policy.
   */
  autoUpgradePolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Indicates whether CVEs are automatically fixed. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: Enables automatic CVE fixing.
   * 
   * - `false`: Disables automatic CVE fixing.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * Automatic CVE fix policy.
   */
  autoVulFixPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Indicates whether the managed node pool feature is enabled. Valid values:
   * 
   * - `true`: Enables the managed node pool.
   * 
   * - `false`: Disables the managed node pool. Other related configurations take effect only when `enable=true`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Auto-upgrade configuration. This parameter takes effect only when `enable=true`.
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
   * Custom configuration for the node component.
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

export class DescribeClusterNodePoolDetailResponseBodyNodeComponents extends $dara.Model {
  /**
   * @remarks
   * Node component configuration.
   */
  config?: DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfig;
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
      config: DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfig,
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
   * Hugepage configuration.
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
   * Kubelet parameter settings.
   */
  kubeletConfiguration?: KubeletConfig;
  /**
   * @remarks
   * Node OS configuration.
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
   * Indicates whether this is the default node pool. A cluster usually has only one default node pool. Valid values:
   * 
   * - `true`: Default node pool.
   * 
   * - `false`: Non-default node pool.
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
   * The node pool type.
   * 
   * - `ess`: Standard node pool (supports managed features and automatic scaling).
   * 
   * - `edge`: Edge node pool.
   * 
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
   * The private node pool type, which determines how instance capacity is selected from private pools. Elastic provisioning or capacity reservation services generate private pool capacity after they take effect. Valid values:
   * 
   * - `Open`: Open mode. Automatically matches open-type private pool capacity. If no matching private pool capacity is available, uses public pool resources.
   * 
   * - `Target`: Target mode. Uses the specified private pool capacity. If the capacity is unavailable, instance creation fails.
   * 
   * - `None`: None mode. Does not use private pool capacity.
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
   * The resource pool strategy used when creating instances. Valid values:
   * PrivatePoolFirst: Private pool first.
   * PrivatePoolOnly: Private pool only.
   * None: Do not use resource pool strategy.
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
   * The spot instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The market price per instance.
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

export class DescribeClusterNodePoolDetailResponseBodyScalingGroup extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for nodes. This parameter is valid only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enables auto-renewal.
   * 
   * - `false`: Disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration per cycle. Valid values:
   * 
   * - If PeriodUnit=Week: 1, 2, 3.
   * 
   * - If PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
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
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * When `multi_az_policy` is set to `COST_OPTIMIZED`, indicates whether to automatically try creating pay-as-you-go instances if spot instances cannot be created due to price or inventory issues. Valid values:
   * 
   * - `true`: Allows automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * - `false`: Disallows automatic creation of pay-as-you-go instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * Configuration for node data disks, including type and size.
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
   * Block device initialization configuration.
   */
  diskInit?: DiskInit[];
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
   * The OS image type.
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
   * - `ContainerOS`: Container-optimized image.
   * 
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
   * - `PrePaid`: Subscription.
   * 
   * - `PostPaid`: Pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * ECS instance metadata access configuration.
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * Instance attribute configuration.
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of node instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for public network bandwidth of node public IP addresses.
   * 
   * - PayByBandwidth: Pay-by-bandwidth.
   * 
   * - PayByTraffic: Pay-by-traffic.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth for node public IP addresses. Unit: Mbps. Valid values: 1–100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The key pair name. Choose either this parameter or `login_password`. For managed node pools, only `key_pair` is supported.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * Indicates whether ECS instances use a non-root user for logon.
   * 
   * - true: Log on as the non-root user (ecs-user).
   * 
   * - false: Log on as the root user.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The SSH logon password. Choose either this parameter or `key_pair`. The password must be 8–30 characters long and include at least three of the following: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * For security reasons, the returned password is encrypted.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * The scaling policy for multi-zone scaling groups. Valid values:
   * 
   * - `PRIORITY`: Scales based on the order of virtual switches (VSwitchIds.N) you define. If ECS instances cannot be created in the zone of a higher-priority virtual switch, the system uses the next-priority virtual switch.
   * 
   * - `COST_OPTIMIZED`: Tries to create instances starting with the lowest vCPU unit price. If multiple instance types or spot billing are configured, it prioritizes spot instances. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically try pay-as-you-go instances if spot instances cannot be created due to inventory or other issues.
   * 
   *   > `COST_OPTIMIZED` takes effect only when multiple instance types or spot instances are configured.
   * 
   * - `BALANCE`: Distributes ECS instances evenly across all specified zones. If inventory shortages cause imbalance, you can call the RebalanceInstances API to rebalance resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. Valid values: [0,1000]. If the number of pay-as-you-go instances falls below this value, the system prioritizes creating pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among instances exceeding the minimum pay-as-you-go count (`on_demand_base_capacity`). Valid values: [0,100].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration for nodes. This parameter is required and valid only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - If `period_unit=Week`, valid values for `period` are {1, 2, 3, 4}.
   * 
   * - If `period_unit=Month`, valid values for `period` are {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 0
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle for nodes. Specify this parameter when `instance_charge_type` is set to `PrePaid`.
   * 
   * - `Month`: Billed monthly.
   * 
   * - `Week`: Billed weekly.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
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
   * @example
   * AliyunLinux
   */
  platform?: string;
  /**
   * @remarks
   * Private node pool configuration.
   */
  privatePoolOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * [Deprecated] Use ram_role_name instead.
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
   * If RDS instances are specified, the ECS nodes of the cluster are automatically added to the RDS whitelist.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and strategy used when creating instances.
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
   * The scaling group mode. Valid values:
   * 
   * - `release`: Standard mode. Scales by creating or releasing ECS instances based on resource usage.
   * 
   * - `recycle`: Fast mode. Scales by creating, stopping, or starting instances to speed up future scaling (stopped instances incur no compute charges, only storage fees, except for local-disk instances).
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The security group ID for the node pool. If multiple security groups are bound, this value is the first ID in `security_group_ids`.
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
   * Indicates whether MLPS 2.0 security hardening is enabled. You can enable this feature only when using Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 images. Alibaba Cloud provides baseline check standards and scanning tools for MLPS 2.0 Level 3 compliance for these images.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of available instance types. The scaling group creates spot instances evenly across the lowest-cost instance types. Valid values: [1,10].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Indicates whether to replenish spot instances. When enabled, if the system notifies that a spot instance will be reclaimed, the scaling group attempts to create a new instance to replace it. Valid values:
   * 
   * - `true`: Enables replenishment.
   * 
   * - `false`: Disables replenishment.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * Spot instance price range configuration.
   */
  spotPriceLimit?: DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The spot instance type. Valid values:
   * 
   * - NoSpot: On-demand instance.
   * 
   * - SpotWithPriceLimit: Sets a maximum price for spot instances.
   * 
   * - SpotAsPriceGo: Uses the current market price.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Indicates whether burst performance is enabled for the system disk. Valid values:
   * 
   * - true: Enabled. When facing sudden read/write pressure from variable workloads, the disk temporarily boosts performance until the workload stabilizes.
   * 
   * - false: Disabled.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Multiple system disk types. If the higher-priority disk type is unavailable, the system tries the next priority disk type to create the system disk.
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
   * - `cloud_essd`: ESSD.
   * 
   * - `cloud_auto`: ESSD AutoPL.
   * 
   * - `cloud_essd_entry`: ESSD Entry.
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
   * Indicates whether the system disk is encrypted. Valid values:
   * 
   * - `true`: Encrypted.
   * 
   * - `false`: Not encrypted.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID used for the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The system disk performance level. This parameter applies only to ESSD disks. The performance level depends on the disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * - PL0: Moderate I/O performance with stable read/write latency.
   * 
   * - PL1: Moderate I/O performance with stable read/write latency.
   * 
   * - PL2: High I/O performance with stable read/write latency.
   * 
   * - PL3: Extremely high I/O performance with very stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS for the system disk.
   * 
   * Valid values: 0 to min{50,000, 1000 × capacity − baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The system disk size for nodes. Unit: GiB.
   * 
   * Valid values: [20,2048].
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The system disk snapshot policy.
   * 
   * @example
   * sp-bp11g8z59rawcud9****
   */
  systemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * ECS instance tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The list of virtual switch IDs.
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
   * The last time the condition changed.
   * 
   * @example
   * 20**-**-30T10:39:00+08:00
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * Detailed information.
   * 
   * @example
   * AutoUpgradeDisabled
   */
  message?: string;
  /**
   * @remarks
   * The reason for the condition.
   * 
   * @example
   * UpgradeDisabled
   */
  reason?: string;
  /**
   * @remarks
   * The condition status.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The condition type.
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
   * The current conditions of the node pool, representing its status across different dimensions.
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
   * The number of working nodes.
   * 
   * @example
   * 3
   */
  servingNodes?: number;
  /**
   * @remarks
   * The node pool state. Valid values:
   * 
   * - `active`: Active.
   * 
   * - `scaling`: Scaling.
   * 
   * - `removing`: Removing nodes.
   * 
   * - `deleting`: Deleting.
   * 
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
   * Indicates whether confidential computing is enabled. Valid values:
   * 
   * - `true`: Enabled.
   * 
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
   * Smart managed configuration.
   */
  autoMode?: DescribeClusterNodePoolDetailResponseBodyAutoMode;
  /**
   * @remarks
   * Automatic scaling configuration for the node pool.
   */
  autoScaling?: DescribeClusterNodePoolDetailResponseBodyAutoScaling;
  efloNodeGroup?: DescribeClusterNodePoolDetailResponseBodyEfloNodeGroup;
  /**
   * @remarks
   * Indicates whether pods use the host network mode.
   * 
   * - `true`: Host network. Pods share the host\\"s network stack, IP address, and ports.
   * 
   * - `false`: Container network. Pods have independent network stacks and do not occupy host network ports.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * [Deprecated]
   * 
   * Network configuration for edge node pools. This parameter applies only to edge-type node pools.
   */
  interconnectConfig?: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig;
  /**
   * @remarks
   * The network type for edge node pools. This parameter applies only to node pools where `type` is `edge`. Valid values:
   * 
   * - `basic`: Public network. Nodes in the node pool interact with cloud nodes over the public network and cannot directly access the VPC intranet.
   * 
   * - `private`: Private network. Nodes in the node pool connect to the cloud through leased lines, VPNs, or CEN, providing higher-quality cloud-edge communication and better security.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Indicates whether Layer 3 networking is enabled between nodes in the edge node pool.
   * 
   * - `true`: Enabled. All nodes in the node pool can communicate over Layer 3.
   * 
   * - `false`: Disabled. Layer 3 communication is disabled between nodes in the node pool.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * Cluster-related configuration.
   */
  kubernetesConfig?: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig;
  /**
   * @remarks
   * Managed node pool configuration.
   */
  management?: DescribeClusterNodePoolDetailResponseBodyManagement;
  /**
   * @remarks
   * [Deprecated]
   * 
   * The maximum number of nodes allowed in the edge node pool.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * List of node components.
   */
  nodeComponents?: DescribeClusterNodePoolDetailResponseBodyNodeComponents[];
  /**
   * @remarks
   * Node configuration.
   */
  nodeConfig?: DescribeClusterNodePoolDetailResponseBodyNodeConfig;
  /**
   * @remarks
   * Node pool configuration.
   */
  nodepoolInfo?: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo;
  /**
   * @remarks
   * Scaling group configuration for the node pool.
   */
  scalingGroup?: DescribeClusterNodePoolDetailResponseBodyScalingGroup;
  /**
   * @remarks
   * The status of the node pool.
   */
  status?: DescribeClusterNodePoolDetailResponseBodyStatus;
  /**
   * @remarks
   * Confidential computing cluster configuration.
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

