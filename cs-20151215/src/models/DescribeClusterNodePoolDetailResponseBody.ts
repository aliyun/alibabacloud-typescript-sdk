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
   * Whether to enable
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
   * EIP peak bandwidth.
   * 
   * Valid values: [1,100]. Unit: Mbps.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * EIP billing type. Valid values:
   * 
   * - `PayByBandwidth`: billed by fixed bandwidth.
   * - `PayByTraffic`: billed by data transfer.
   * 
   * @example
   * PayByBandwidth
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Whether auto scaling is enabled. Valid values:
   * 
   * - `true`: enables the auto scaling feature for the node pool. When the cluster capacity cannot meet Pod scheduling requirements, ACK automatically scales node resources based on the configured minimum and maximum instance counts. Clusters of version 1.24 and later enable instant node elasticity by default;
   * clusters of versions earlier than 1.24 enable node auto scaling by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: disables auto scaling. ACK adjusts the number of nodes in the node pool to match the configured desired number of nodes.
   * 
   * When the value is false, other configuration parameters in `auto_scaling` do not take effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Whether to bind an EIP. Valid values:
   * 
   * - `true`: bind an EIP.
   * - `false`: do not bind an EIP.
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
   * Auto scaling type, classified by auto scaling instance type. Valid values:
   * 
   * - `cpu`: regular instance type.
   * - `gpu`: GPU instance type.
   * - `gpushare`: GPU-shared type.
   * - `spot`: preemptible instance type.
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
   * [This field is deprecated]
   * 
   * Network bandwidth of the enhanced edge node pool, in Mbps.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The Cloud Connect Network (CCN) instance ID bound to the enhanced edge node pool (CCNID).
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The region of the Cloud Connect Network (CCN) instance bound to the enhanced edge node pool.
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The Cloud Enterprise Network (CEN) instance ID bound to the enhanced edge node pool (CENID).
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * Purchase duration of the enhanced edge node pool, in months.
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
   * Whether to install CloudMonitor on ECS nodes. After installation, you can view the monitoring information of created ECS instances in the CloudMonitor console. We recommend that you enable this feature. Valid values:
   * 
   * - `true`: install CloudMonitor on ECS nodes.
   * - `false`: do not install CloudMonitor on ECS nodes.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * Node CPU management policy. The following two policies are supported when the cluster version is 1.12.6 or later:
   * 
   * - `static`: allows enhanced CPU affinity and exclusivity for Pods with certain resource characteristics on the node.
   * - `none`: enables the existing default CPU affinity scheme.
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
   * Custom node name.
   * 
   * The node name consists of three parts: prefix \\+ node IP address substring \\+ suffix:
   *  
   * - Both the prefix and suffix can consist of one or more parts separated by ".". Each part can contain lowercase letters, digits, and "-". The node name must start and end with a lowercase letter or digit.
   * - The IP address segment length specifies the number of digits taken from the end of the node IP address. Valid values: 5 to 12.
   *  
   * For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP address segment length is 5, and the suffix is test, then the node name is aliyun.com00055test.
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * Node pool pre-custom data, which is a script that runs before node initialization. For more information, see [Generate instance custom data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * dGhpcyBpcyBhIGV4YW1wbGU
   */
  preUserData?: string;
  /**
   * @remarks
   * Container runtime name. ACK supports the following three container runtimes.
   * 
   * - containerd: recommended, supported by all cluster versions.
   * - Sandboxed-Container.runv: sandboxed container, provides higher isolation, supported by clusters of version 1.31 and earlier.
   * - docker: no longer maintained, supported by clusters of version 1.22 and earlier.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * Container runtime version.
   * 
   * @example
   * 1.6.38
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * Node taint information. Taints and tolerations work together to prevent Pods from being scheduled on inappropriate nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Whether nodes are unschedulable after scaling.
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
   * Node pool custom data, which is a script that runs after node initialization. For more information, see [Generate instance custom data](https://help.aliyun.com/document_detail/49121.html).
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
   * Whether manual approval is required for node repair.
   * 
   * @example
   * false
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * Auto repair policy ID
   * 
   * @example
   * r-xxxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * Whether to allow node restart. Takes effect only when `auto_repair=true`.
   * 
   * - `true`: allow node restart.
   * - `false`: do not allow node restart.
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
   * Whether to allow auto upgrade of kubelet. Takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: allow auto upgrade of kubelet.
   * - `false`: do not allow auto upgrade of kubelet.
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
   * Packages that should be excluded during vulnerability fixing.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Whether to allow node restart. Takes effect only when `auto_vul_fix=true`. Valid values:
   * - `true`: allow node restart.
   * - `false`: do not allow node restart.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * Vulnerability levels allowed for automatic fixing, separated by commas.
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
   * Whether to enable auto upgrade. Valid values:
   * 
   * - `true`: enable auto upgrade.
   * - `false`: disable auto upgrade.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * Maximum number of unavailable nodes. Valid values: [1,1000\\].
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * Number of extra nodes. Mutually exclusive with surge_percentage.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. Mutually exclusive with `surge`.
   * 
   * Extra nodes = extra node percentage x number of nodes. For example, if the extra node percentage is set to 50% and there are 6 existing nodes, the number of extra nodes = 50% x 6, which means 3 extra nodes will be generated.
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
   * Auto repair. Takes effect only when `enable=true`.
   * 
   * - `true`: enable auto repair.
   * - `false`: disable auto repair.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * Auto repair node policy.
   */
  autoRepairPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy;
  /**
   * @remarks
   * Whether to automatically upgrade nodes. Takes effect only when `enable=true`.
   * - `true`: enable auto upgrade.
   * - `false`: disable auto upgrade.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * Auto upgrade policy.
   */
  autoUpgradePolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Whether to automatically fix CVEs. Takes effect only when `enable=true`.
   * 
   * - `true`: allow automatic CVE fixing.
   * - `false`: do not allow automatic CVE fixing.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * Auto CVE fix policy.
   */
  autoVulFixPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Whether managed node pool is enabled. Valid values:
   * 
   * - `true`: enable managed node pool.
   * - `false`: disable managed node pool. Other related configurations take effect only when `enable=true`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Auto upgrade configuration. Takes effect only when `enable=true`.
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
   * Node component custom configuration.
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
   * Node component configuration.
   */
  config?: DescribeClusterNodePoolDetailResponseBodyNodeComponentsConfig;
  /**
   * @remarks
   * Node component name.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * Node component version.
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
   * Kubelet parameter configuration.
   */
  kubeletConfiguration?: KubeletConfig;
  /**
   * @remarks
   * Node operating system configuration.
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
   * Whether the node pool is the default node pool. A cluster usually has only one default node pool. Valid values:
   * 
   * - `true`: the default node pool.
   * - `false`: not the default node pool.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Node pool name.
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * Node pool ID.
   * 
   * @example
   * np615c0e0966124216a0412e10afe0****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmyvw3wjmb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Node pool type.
   * - `ess`: standard node pool (includes managed and auto scaling features).
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

export class DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * Private node pool ID.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * Private node pool type, the private pool capacity option for instance launch. After an elasticity assurance or capacity reservation takes effect, a private pool capacity is generated for instance launch. Valid values:
   * 
   * - `Open`: open mode. Automatically matches open-type private pool capacity. If no matching private pool capacity is available, public pool resources are used for launch.
   * 
   * - `Target`: targeted mode. Uses the specified private pool capacity to launch instances. If the specified private pool capacity is unavailable, the instance fails to launch.
   * 
   * - `None`: do not use mode. Instance launch does not use private pool capacity.
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
   * The resource pool policy used when creating instances. Valid values:
   * PrivatePoolFirst: private pool first.
   * PrivatePoolOnly: private pool only.
   * None: do not use resource pool policy.
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
   * Preemptible instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Market price per instance.
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
   * Whether auto-renewal is enabled for nodes. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: enable auto-renewal.
   * - `false`: disable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The duration of each auto-renewal. Valid values:
   * - When PeriodUnit=Week: 1, 2, 3.
   * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * [This field is deprecated] Use the security_hardening_os parameter instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * When `multi_az_policy` is set to `COST_OPTIMIZED`, whether to allow automatic creation of pay-as-you-go instances to meet the required number of ECS instances when preemptible instances cannot be created due to price or inventory reasons. Valid values:
   * 
   * - `true`: allow automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * - `false`: do not allow automatic creation of pay-as-you-go instances to meet the required number of ECS instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The combination of data disk type, size, and other configurations for nodes.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * Deployment set ID.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * Desired number of nodes in the node pool.
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
   * Custom image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * Operating system image type.
   * - `AliyunLinux`: Alinux2 image.
   * - `AliyunLinuxSecurity`: Alinux2 image UEFI edition.
   * - `AliyunLinux3`: Alinux3 image.
   * - `AliyunLinux3Arm64`: Alinux3 image ARM edition.
   * - `AliyunLinux3Security`: Alinux3 image UEFI edition.
   * - `CentOS`: CentOS image.
   * - `Windows`: Windows image.
   * - `WindowsCore`: WindowsCore image.
   * - `ContainerOS`: container-optimized image.
   * - `AliyunLinux3ContainerOptimized`: Alinux3 image container-optimized edition.
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * Node pool node billing type. Valid values:
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
   * Metadata access configuration for ECS instances.
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
   * Node public IP billing type.
   * 
   * - PayByBandwidth: billed by fixed bandwidth.
   * - PayByTraffic: billed by data transfer.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Maximum outbound bandwidth for node public IP, in Mbps (Megabits per second). Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Key pair name. Mutually exclusive with `login_password`. For managed node pools, only `key_pair` is supported.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * Whether the launched ECS instances log in as a non-root user.
   * 
   * - true: log in as a non-root user (ecs-user).
   * 
   * - false: log in as the root user.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * SSH login password. Mutually exclusive with `key_pair`. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * For security purposes, the password is encrypted in query results.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * Multi-zone scaling group ECS instance scaling policy. Valid values:
   * 
   * - `PRIORITY`: scales based on the vSwitches (VSwitchIds.N) that you defined. When ECS instances cannot be created in the zone of a higher-priority vSwitch, the system automatically uses the next-priority vSwitch to create ECS instances.
   * 
   * - `COST_OPTIMIZED`: attempts to create instances in order of vCPU unit price from low to high. When the scaling configuration specifies multiple instance types with preemptible billing, preemptible instances are created first. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically attempt to create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
   * 
   *   >`COST_OPTIMIZED` takes effect only when multiple instance types are specified or preemptible instances are selected in the scaling configuration.
   * 
   * - `BALANCE`: evenly distributes ECS instances across the multiple zones specified by the scaling group. If zones become unbalanced due to insufficient inventory, you can use the RebalanceInstances API to rebalance resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. Valid values: [0,1000\\]. When the number of pay-as-you-go instances is less than this value, pay-as-you-go instances are created first.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * After the scaling group meets the minimum number of pay-as-you-go instances (`on_demand_base_capacity`), the percentage of pay-as-you-go instances among the excess instances. Valid values: [0,100\\].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * Node subscription duration. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - When `period_unit=Week`, valid values of `period`: {1, 2, 3, 4}.
   * - When `period_unit=Month`, valid values of `period`: {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60}.
   * 
   * @example
   * 0
   */
  period?: number;
  /**
   * @remarks
   * Node billing period unit. This parameter must be specified when `instance_charge_type` is set to `PrePaid`.
   * 
   * - `Month`: billed on a monthly basis.
   * - `Week`: billed on a weekly basis.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Operating system distribution. Valid values:
   * 
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
   * Private node pool configuration.
   */
  privatePoolOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * [This field is deprecated] Use ram_role_name instead.
   * 
   * @example
   * KubernetesWorkerRole-021dc54f-929b-437a-8ae0-34c24d3e****
   */
  ramPolicy?: string;
  /**
   * @remarks
   * Worker RAM role name.
   * 
   * @example
   * KubernetesWorkerRole-4a4fa089-80c1-48a5-b3c6-9349311f****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * If an RDS instance list is specified, the cluster node ECS instances are automatically added to the RDS access whitelist.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool policy used when creating instances.
   */
  resourcePoolOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * Scaling group ID.
   * 
   * @example
   * asg-2zeieod8giqmov7z****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * Scaling group mode. Valid values:
   * 
   * - `release`: standard mode. Scales by creating and releasing ECS instances based on resource usage.
   * - `recycle`: swift mode. Scales by creating, stopping, and starting ECS instances, which improves the speed of subsequent scaling operations (compute resources are not charged during stopped state, only storage fees are charged, except for local disk instance types).
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * Node pool security group ID. When the node pool is bindded to multiple security groups, this is the first value in `security_group_ids`.
   * 
   * @example
   * sg-2ze60ockeekspl3d****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of node pool security group IDs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Alibaba Cloud OS security hardening. Valid values:
   * 
   * - `true`: enable Alibaba Cloud OS security hardening.
   * - `false`: disable Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Whether to enable China classified protection hardening. This feature can be enabled for nodes only when the system image is Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3. Alibaba Cloud provides classified protection compliance baseline check standards and scanning programs for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 China Classified Protection 2.0 Level 3 images.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of available instance types specified. The scaling group creates preemptible instances in a balanced manner using the instance types with the lowest cost. Valid values: [1,10\\].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Whether to enable supplementing preemptible instances. When enabled, the scaling group attempts to create new instances to replace preemptible instances that are about to be reclaimed when the system notification is received. Valid values:
   * 
   * - `true`: enable supplementing preemptible instances.
   * - `false`: disable supplementing preemptible instances.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * Preemptible instance market price range configuration.
   */
  spotPriceLimit?: DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * Preemptible instance type. Valid values:
   * - NoSpot: non-preemptible instance.
   * - SpotWithPriceLimit: specifies the maximum price for the preemptible instance.
   * - SpotAsPriceGo: the system automatically bids at the current market price.
   * 
   * For more information, see [Preemptible instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Whether to enable Burst (performance bursting) for the node system disk. Valid values:
   * - true: enable. When enabled, the disk temporarily increases its performance during burst data read/write pressure from fluctuating workloads until the workload returns to a steady state.
   * - false: disable.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Multiple disk types for the system disk. When a higher-priority disk type is unavailable, the system automatically attempts the next-priority disk type for creating the system disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * Node system disk type. Valid values:
   * - `cloud_efficiency`: ultra disk.
   * - `cloud_ssd`: SSD.
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
   * The encryption algorithm used by the system disk. Valid values: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Whether to encrypt the system disk. Valid values:
   * - `true`: encrypt.
   * - `false`: do not encrypt.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID used by the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * Node system disk performance level, effective only for ESSD disks. The performance level is related to the disk size. For more information, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * - PL0: moderate maximum concurrent I/O performance, with relatively stable read/write latency.
   * - PL1: moderate maximum concurrent I/O performance, with relatively stable read/write latency.
   * - PL2: high maximum concurrent I/O performance, with stable read/write latency.
   * - PL3: ultra-high maximum concurrent I/O performance, with extremely stable read/write latency.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * Pre-configured read/write IOPS for the node system disk.
   * 
   * Valid values: 0 to min{50,000, 1000\\*capacity - baseline performance}. Baseline performance = min{1,800+50\\*capacity, 50000}.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * Node system disk size, in GiB.
   * 
   * Valid values: [20,2048\\].
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * System disk snapshot policy
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
   * The list of vSwitch IDs.
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
   * The time of the last status transition.
   * 
   * @example
   * 20**-**-30T10:39:00+08:00
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * AutoUpgradeDisabled
   */
  message?: string;
  /**
   * @remarks
   * Reason.
   * 
   * @example
   * UpgradeDisabled
   */
  reason?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * Type.
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
   * The current conditions of the node pool, indicating status information across different dimensions of the node pool.
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
   * Node pool status. Valid values:
   * 
   * - `active`: active.
   * - `scaling`: scaling.
   * - `removing`: removing nodes.
   * - `deleting`: deleting.
   * - `updating`: updating.
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
   * Whether to enable confidential computing for the cluster. Valid values:
   * 
   * - `true`: enable.
   * - `false`: disable.
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
   * Intelligent managed configuration.
   */
  autoMode?: DescribeClusterNodePoolDetailResponseBodyAutoMode;
  /**
   * @remarks
   * Auto scaling node pool configuration.
   */
  autoScaling?: DescribeClusterNodePoolDetailResponseBodyAutoScaling;
  efloNodeGroup?: DescribeClusterNodePoolDetailResponseBodyEfloNodeGroup;
  /**
   * @remarks
   * Whether the Pod network mode uses host network mode.
   * - `true`: host network. Pods directly use the host\\"s network stack and share the IP address and ports with the host.
   * - `false`: container network. Pods have their own independent network stack and do not occupy host network ports.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * Network-related configuration for the edge node pool. This value is meaningful only for edge-type node pools.
   */
  interconnectConfig?: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig;
  /**
   * @remarks
   * Network type of the edge node pool. This parameter takes effect only for node pools whose `type` is `edge`. Valid values:
   * 
   * - `basic`: public network. Nodes in the node pool interact with cloud nodes through the public network, and applications in the node pool cannot directly access the cloud VPC intranet.
   * - `private`: private network. Nodes in the node pool connect to the cloud through leased lines, VPN, or CEN, providing higher cloud-edge communication quality and more effective security.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Whether nodes are interconnected at the Layer 3 network within the edge node pool.
   * - `true`: interconnected. All nodes within the node pool are interconnected at the Layer 3 network.
   * - `false`: not interconnected. All hosts within the node pool are not interconnected at the Layer 3 network.
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
   * [This field is deprecated]
   * 
   * The maximum number of nodes allowed in the edge node pool.
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
   * Node pool scaling group configuration.
   */
  scalingGroup?: DescribeClusterNodePoolDetailResponseBodyScalingGroup;
  /**
   * @remarks
   * Node pool status.
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

