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
   * 是否开启智能托管。
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
   * The peak bandwidth of the EIP.
   * 
   * Valid values: [1,100]. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The billing method for EIPs. Valid values:
   * 
   * - `PayByBandwidth`: pay-by-bandwidth.
   * - `PayByTraffic`: pay-by-traffic.
   * 
   * @example
   * PayByBandwidth
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether auto scaling is enabled. Valid values:
   * 
   * - `true`: Enables the auto scaling feature for the node pool. When the cluster capacity planning cannot meet the scheduling requirements of application Pods, ACK automatically scales nodes based on the configured minimum and maximum instance counts. Clusters of version 1.24 or later use instant elasticity by default. Clusters of versions earlier than 1.24 use auto scaling by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: Disables auto scaling. ACK adjusts the number of nodes in the node pool based on the configured desired node count and maintains the node count at the desired value.
   * 
   * When this parameter is set to false, other configuration parameters in `auto_scaling` do not take effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to associate an EIP. Valid values:
   * 
   * - `true`: Associate an EIP.
   * - `false`: Do not associate an EIP.
   * 
   * @example
   * true
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of instances that can be scaled in the node pool, excluding existing instances.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of instances that can be scaled in the node pool, excluding existing instances.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The auto scaling type, categorized by instance type. Valid values:
   * 
   * - `cpu`: regular instance type.
   * - `gpu`: GPU instance type.
   * - `gpushare`: GPU sharing type.
   * - `spot`: spot instance type.
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
   * 灵骏集群ID。
   * 
   * @example
   * i113790071760688002461
   */
  clusterId?: string;
  /**
   * @remarks
   * 灵骏分组ID。
   * 
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig extends $dara.Model {
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池的网络带宽，单位：Mbps。
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池绑定的云连接网实例ID(CCNID)。
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池绑定的云连接网实例所属的区域。
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池绑定的云企业网实例ID(CENID)。
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池的购买时长，单位：月。
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
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After installation, you can view monitoring information for the created ECS instances in the CloudMonitor console. We recommend that you enable this feature. Valid values:
   * 
   * - `true`: Install the CloudMonitor agent on ECS nodes.
   * - `false`: Do not install the CloudMonitor agent on ECS.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy for nodes. The following two policies are supported for clusters of version 1.12.6 or later:
   * 
   * - `static`: allows Pods with certain resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * - `none`: uses the existing default CPU affinity scheme.
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
   * 自定义节点名称。
   * 
   * 节点名称由三部分组成：前缀 \\+ 节点 IP 地址子串 \\+ 后缀：
   *  
   * - 前缀和后缀均可由“.”分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和“-”，节点名称首尾必须为小写字母和数字。
   * - IP 地址段长度指截取节点 IP 地址末尾的位数，取值范围 5-12。
   *  
   * 例如，节点 IP 地址为：192.168.0.55，指定前缀为 aliyun.com，IP 地址段长度为 5，后缀为 test，则节点名称为aliyun.com00055test。
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * 节点池预自定义数据，即运行于节点初始化之前的脚本。更多详情，请参见[生成实例自定义数据](https://help.aliyun.com/document_detail/49121.html)。
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFD
   */
  preUserData?: string;
  /**
   * @remarks
   * The container runtime name. ACK supports the following three container runtimes:
   * 
   * - containerd: recommended. Supports all cluster versions.
   * - Sandboxed-Container.runv: sandboxed container that provides higher isolation. Supports clusters of version 1.31 or earlier.
   * - docker: no longer maintained. Supports clusters of version 1.22 or earlier.
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
   * The node taint information. Taints and tolerations work together to prevent Pods from being scheduled to inappropriate nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the scaled nodes are unschedulable.
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
   * The custom data for the node pool, which is a script that runs after node initialization. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
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
   * The ID of the auto repair policy.
   * 
   * @example
   * r-xxxxxxxxx
   */
  autoRepairPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when `auto_repair=true`.
   * 
   * - `true`: Allow node restarts.
   * - `false`: Do not allow node restarts.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow automatic kubelet upgrades. This parameter takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: Allow automatic kubelet upgrades.
   * - `false`: Do not allow automatic kubelet upgrades.
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
   * The packages that are excluded during vulnerability fixing.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Specifies whether to allow node restarts. This parameter takes effect only when `auto_vul_fix=true`. Valid values:
   * - `true`: Allow node restarts.
   * - `false`: Do not allow node restarts.
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
   * - `nntf`: low.
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
   * Specifies whether to enable automatic upgrades. Valid values:
   * 
   * - `true`: Enable automatic upgrades.
   * - `false`: Disable automatic upgrades.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes. Valid values: [1,1000\\].
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of extra nodes. You can set this parameter or `surge_percentage`.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of extra nodes. You can set this parameter or `surge`.
   * 
   * Number of extra nodes = Extra node percentage × Number of nodes. For example, if the extra node percentage is set to 50% and there are 6 existing nodes, the number of extra nodes = 50% × 6 = 3.
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
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto repair. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: Enable auto repair.
   * - `false`: Disable auto repair.
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
   * Specifies whether to enable automatic node upgrades. This parameter takes effect only when `enable=true`.
   * - `true`: Enable automatic upgrades.
   * - `false`: Disable automatic upgrades.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The automatic upgrade policy.
   */
  autoUpgradePolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to enable automatic CVE fixing. This parameter takes effect only when `enable=true`.
   * 
   * - `true`: Enable automatic CVE fixing.
   * - `false`: Disable automatic CVE fixing.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The automatic CVE fixing policy.
   */
  autoVulFixPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool. Valid values:
   * 
   * - `true`: Enable the managed node pool.
   * - `false`: Disable the managed node pool. Other related configurations take effect only when `enable=true`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The automatic upgrade configuration. This parameter takes effect only when `enable=true`.
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfig extends $dara.Model {
  /**
   * @remarks
   * 节点组件自定义配置。
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponents extends $dara.Model {
  /**
   * @remarks
   * 节点组件配置。
   */
  config?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfig;
  /**
   * @remarks
   * 节点组件名称。
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * 节点组件版本。
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
      config: DescribeClusterNodePoolsResponseBodyNodepoolsNodeComponentsConfig,
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
   * Indicates whether this is the default node pool. Typically, a cluster has only one default node pool. Valid values:
   * 
   * - `true`: This is the default node pool.
   * - `false`: This is not the default node pool.
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
   * 
   * - `ess`: standard node pool (includes managed and elastic scaling features).
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The private pool ID, which is the elasticity assurance ID or capacity reservation ID.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool type. Specifies the private pool capacity option for instance launch. After an elasticity assurance or capacity reservation takes effect, a private pool is generated for instance launch. Valid values:
   * 
   * - `Open`: open mode. Automatically matches open-type private pool capacity. If no matching private pool capacity is available, public pool resources are used for instance launch.
   * 
   * - `Target`: targeted mode. Uses the specified private pool capacity for instance launch. If the specified private pool capacity is unavailable, the instance fails to launch.
   * 
   * - `None`: none mode. The instance does not use private pool capacity for launch.
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
   * The resource pool policy used for instance creation. Valid values:
   * PrivatePoolFirst: private pool first.
   * PrivatePoolOnly: private pool only.
   * None: no resource pool policy.
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
   * The spot instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The price limit for a single instance.
   * 
   * <props="china">Unit: CNY/hour.
   * 
   * <props="intl">Unit: USD/hour..
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
   * Specifies whether to enable auto-renewal for nodes. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: Enable auto-renewal.
   * - `false`: Disable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The duration of each auto-renewal cycle. Valid values:
   * - When PeriodUnit=Week: 1, 2, 3.
   * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
   * 
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * Use the security_hardening_os parameter instead.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow automatic creation of pay-as-you-go instances to meet the required number of ECS instances when spot instances cannot be created due to price or inventory reasons. This parameter takes effect only when `multi_az_policy` is set to `COST_OPTIMIZED`. Valid values:
   * 
   * - `true`: Allow automatic creation of pay-as-you-go instances.
   * - `false`: Do not allow automatic creation of pay-as-you-go instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The configurations for node data cloud disks, including type and size.
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
   * The custom image ID. You can call `DescribeKubernetesVersionMetadata` to query the images supported by the system.
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
   * - `PostPaid`: pay-as-you-go.
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
   * The list of node instance types. You can select multiple instance types as alternatives. During node creation, the system attempts to purchase instances starting from the first specification until successful. The final purchased instance type may vary depending on inventory availability.
   * 
   * @example
   * ecs.n4.large
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for the public IP address of nodes.
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth for the public IP address of nodes. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The key pair name. You can set this parameter or `login_password`.
   * 
   * For managed node pools, only `key_pair` is supported.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether the scaled ECS instances use a non-root user for logon.
   * 
   * - true: Log on as a non-root user (ecs-user).
   * 
   * - false: Log on as the root user.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The SSH logon password. You can set this parameter or `key_pair`. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * For security purposes, the password is encrypted in query results.
   * 
   * @example
   * ******
   */
  loginPassword?: string;
  /**
   * @remarks
   * The multi-zone scaling policy for ECS instances in the scaling group. Valid values:
   * 
   * - `PRIORITY`: Scales based on the vSwitches (VSwitchIds.N) that you define. When ECS instances cannot be created in the zone of a higher-priority vSwitch, the system automatically uses the next-priority vSwitch to create ECS instances.
   * 
   * - `COST_OPTIMIZED`: Attempts to create instances in order of vCPU unit price from lowest to highest. When the scaling configuration specifies multiple instance types with spot billing, spot instances are created first. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when spot instances cannot be created due to inventory or other reasons.
   * 
   *   >`COST_OPTIMIZED` takes effect only when multiple instance types are configured in the scaling configuration or spot instances are selected.
   * 
   * - `BALANCE`: Allocates ECS instances evenly across the multiple active zones specified in the scaling group. If zones become unbalanced due to insufficient inventory, you can call the `RebalanceInstances` API operation to rebalance resources. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * @example
   * COST_OPTIMIZED
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
   * The percentage of pay-as-you-go instances among the instances that exceed the minimum pay-as-you-go instance count (`on_demand_base_capacity`). Valid values: [0,100\\].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of nodes. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
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
   * The billing cycle of nodes. This parameter must be specified when `instance_charge_type` is set to `PrePaid`.
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
   * [This field is deprecated]
   * 
   * The operating system distribution. Valid values:
   * 
   * - `CentOS`
   * - `AliyunLinux`
   * - `Windows`
   * - `WindowsCore`.
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
   * This field is deprecated. Use ram_role_name instead.
   * 
   * @example
   * KubernetesWorkerRole-021dc54f-929b-437a-8ae0-34c24d3e****
   */
  ramPolicy?: string;
  /**
   * @remarks
   * The worker RAM role name.
   * 
   * @example
   * KubernetesWorkerRole-4a4fa089-80c1-48a5-b3c6-9349311f****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The list of RDS instances. If specified, the ECS instances in the cluster are automatically added to the RDS whitelist.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The resource pool and resource pool policy used for instance creation.
   */
  resourcePoolOptions?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * The scaling group ID.
   * 
   * @example
   * asg-2ze8n5qw4atggut8****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling group mode. Valid values:
   * 
   * - `release`: standard mode. Scales by creating and releasing ECS instances based on resource usage.
   * - `recycle`: rapid mode. Scales by creating, stopping, and starting instances to improve subsequent scaling speed. (Compute resources are not charged during the stopped state. Only storage fees are charged, except for local disk instance types.).
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * [This field is deprecated]
   * 
   * The security group ID of the node pool. When the node pool is associated with multiple security groups, this is the first value in `security_group_ids`.
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
   * 
   * - `true`: Enable Alibaba Cloud OS security hardening.
   * - `false`: Disable Alibaba Cloud OS security hardening.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable MLPS 2.0 security hardening. This feature can be enabled only when the system image is Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3. Alibaba Cloud provides baseline check standards and scanning programs that comply with classified protection compliance for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 MLPS 2.0 Level 3 images.
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
   * Specifies whether to enable supplementation of spot instances. When enabled, the scaling group attempts to create new instances to replace spot instances that are about to be reclaimed. Valid values:
   * 
   * - `true`: Enable supplementation of spot instances.
   * - `false`: Disable supplementation of spot instances.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The price limit configurations for spot instances.
   */
  spotPriceLimit?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The spot instance type. Valid values:
   * - NoSpot: non-spot instance.
   * - SpotWithPriceLimit: spot instance with a price limit.
   * - SpotAsPriceGo: system automatically bids at the current market price.
   * 
   * For more information, see [Spot instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable burst (performance burst) for the system cloud disk. Valid values:
   * - true: Enable burst. When workloads encounter sudden data read/write pressure, the cloud disk temporarily improves performance based on actual conditions until the workload returns to a steady state.
   * - false: Disable burst.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The multi-disk types for system cloud disks. When a higher-priority disk type is unavailable, the system automatically attempts the next-priority disk type to create the system cloud disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The system cloud disk type for nodes. Valid values:
   * - `cloud_efficiency`: ultra cloud disk.
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
   * The encryption algorithm used for the system cloud disk. Valid values: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system cloud disk. Valid values:
   * 
   * - true: Encrypt the system cloud disk.
   * - false: Do not encrypt the system cloud disk.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID used for the system cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the system cloud disk. This parameter takes effect only for ESSD cloud disks. The performance level is related to the disk size. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
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
   * The provisioned read/write IOPS for the system cloud disk. This parameter is configured when the disk type is cloud_auto.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The system cloud disk size for nodes. Unit: GiB.
   * 
   * Valid values: [20,2048\\].
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
      dataDisks: 'data_disks',
      deploymentsetId: 'deploymentset_id',
      desiredSize: 'desired_size',
      diskInit: 'disk_init',
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
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentsetId: 'string',
      desiredSize: 'number',
      diskInit: { 'type': 'array', 'itemType': DiskInit },
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
   * The number of nodes in the serving state.
   * 
   * @example
   * 3
   */
  servingNodes?: number;
  /**
   * @remarks
   * The node pool state. Valid values:
   * 
   * - `active`: The node pool is active.
   * - `scaling`: The node pool is scaling.
   * - `removing`: Nodes are being removed.
   * - `deleting`: The node pool is being deleted.
   * - `updating`: The node pool is being updated.
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
   * 是否开启加密计算集群，取值：
   * 
   * - `true`：开启。
   * - `false`：不开启。
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
   * 智能托管配置。
   */
  autoMode?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoMode;
  /**
   * @remarks
   * The auto scaling configuration.
   */
  autoScaling?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling;
  /**
   * @remarks
   * 灵骏节点组信息。
   */
  efloNodeGroup?: DescribeClusterNodePoolsResponseBodyNodepoolsEfloNodeGroup;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘节点池网络相关的配置。该值只对edge类型的节点池有意义。
   */
  interconnectConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig;
  /**
   * @remarks
   * 边缘节点池的网络类型，该参数仅对`type`为`edge`类型的节点池生效，取值范围：
   * 
   * - `basic`：公网。节点池内的节点通过公网与云端节点进行交互，节点池内应用不能直接访问云端VPC内网。
   * - `private`：专用网络。节点池内的节点通过专线、VPN或CEN等方式实现云上与云下网络打通，拥有更高的云边通信质量，提供更有效的安全保障。
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The cluster-related configuration.
   */
  kubernetesConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig;
  /**
   * @remarks
   * The managed node pool configuration. This configuration takes effect only in professional managed clusters.
   */
  management?: DescribeClusterNodePoolsResponseBodyNodepoolsManagement;
  /**
   * @remarks
   * 边缘节点池允许容纳的最大节点数量. 节点池内可以容纳的最大节点数量，该参数大于等于0。0表示无额外限制（仅受限于集群整体可以容纳的节点数，节点池本身无额外限制）。边缘节点池该参数值往往大于0；ess类型节点池和默认的edge类型节点池该参数值为0
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * 节点组件列表。
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
   * The scaling group configuration of the node pool.
   */
  scalingGroup?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup;
  /**
   * @remarks
   * The node pool status.
   */
  status?: DescribeClusterNodePoolsResponseBodyNodepoolsStatus;
  /**
   * @remarks
   * 加密计算配置。
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
   * The list of node pool instances.
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

