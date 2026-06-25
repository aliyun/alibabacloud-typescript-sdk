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
   * Whether to enable intelligent managed mode.
   * Valid values:
   * - true: enable intelligent managed mode. Can only be enabled when the cluster has intelligent managed mode enabled.
   * - false: disable intelligent managed mode.
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
   * Maximum EIP bandwidth. Unit: Mbps.
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
   * EIP billing method. Valid values:
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
   * Whether to enable auto scaling. Valid values:
   * 
   * - `true`: enables auto scaling for the node pool. When cluster capacity cannot meet Pod scheduling requirements, ACK automatically scales node resources based on the configured minimum and maximum instance counts. Clusters of version 1.24 or later enable instant node scaling by default;
   * clusters of versions earlier than 1.24 enable node auto scaling by default. For more information, see [Node scaling](https://help.aliyun.com/document_detail/2746785.html).
   * 
   * - `false`: disables auto scaling. ACK adjusts the number of nodes in the node pool based on the configured desired node count, always maintaining the node count at the desired number.
   * 
   * When this parameter is set to false, other configuration parameters in `auto_scaling` do not take effect.
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
   * Whether to bind an EIP. Valid values:
   * 
   * - `true`: bind an EIP.
   * 
   * - `false`: do not bind an EIP.
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
   * Maximum number of instances that can be scaled in the node pool, excluding existing instances. Takes effect only when `enable=true`.
   * 
   * Valid values: [min_instances, 2000]. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * Minimum number of instances that can be scaled in the node pool, excluding existing instances. Takes effect only when `enable=true`.
   * 
   * Valid values: [0, max_instances]. Default value: 0.
   * 
   * > - When the minimum number of instances is not 0, the corresponding number of ECS instances will be automatically created after the scaling group takes effect.
   * > - It is recommended that the maximum number of instances is not smaller than the current number of nodes in the node pool. Otherwise, nodes in the node pool will be directly scaled in after auto scaling takes effect.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * Auto scaling instance type. Takes effect only when `enable=true`. Valid values:
   * 
   * - `cpu`: standard instance type.
   * 
   * - `gpu`: GPU instance type.
   * 
   * - `gpushare`: GPU sharing type.
   * 
   * - `spot`: preemptible instance type.
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
   * Lingjun cluster ID to associate when creating a Lingjun node pool.
   * 
   * @example
   * i1169130516633730****
   */
  clusterId?: string;
  /**
   * @remarks
   * Lingjun group ID of the Lingjun cluster to associate when creating a Lingjun node pool.
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
   * [Deprecated]
   * 
   * Network bandwidth of the enhanced edge node pool. Unit: Mbps.
   * 
   * @example
   * null
   */
  bandwidth?: number;
  /**
   * @remarks
   * [Deprecated]
   * 
   * CCN instance ID (CCN ID) bound to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  ccnId?: string;
  /**
   * @remarks
   * [Deprecated]
   * 
   * Region of the CCN instance bound to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * [Deprecated]
   * 
   * CEN instance ID (CEN ID) bound to the enhanced edge node pool.
   * 
   * @example
   * null
   */
  cenId?: string;
  /**
   * @remarks
   * [Deprecated]
   * 
   * Subscription duration of the enhanced edge node pool. Unit: months.
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
   * Whether to install CloudMonitor on ECS nodes. After installation, you can view monitoring information for created ECS instances in the CloudMonitor console. We recommend enabling this. Valid values:
   * 
   * - `true`: install CloudMonitor on ECS nodes.
   * 
   * - `false`: do not install CloudMonitor on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * Node CPU management policy. The following two policies are supported when the cluster version is 1.12.6 or later:
   * 
   * - `static`: allows enhanced CPU affinity and exclusivity for Pods with certain resource characteristics on the node.
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
   * Node labels. Add labels to Kubernetes cluster nodes.
   */
  labels?: Tag[];
  /**
   * @remarks
   * Custom node name. After setting a custom node name, the node name, ECS instance name, and ECS instance hostname are all changed accordingly.
   * > For Windows instances with custom node names enabled, the hostname is fixed to the IP address with "-" replacing "." in the IP address, and does not include the prefix or suffix. 
   * 
   * A node name consists of three parts: prefix, node IP address, and suffix:
   * 
   * - Total length: 2 to 64 characters. The node name must start and end with a lowercase letter or digit.
   * 
   * - The prefix and suffix can contain uppercase and lowercase letters, digits, hyphens (-), and periods (.). They must start with a letter and cannot start or end with a hyphen (-) or period (.). Consecutive hyphens (-) or periods (.) are not allowed.
   * - The prefix is required (ECS restriction) and the suffix is optional.
   * - The node IP is the complete private IP address of the node.
   * 
   * Example: If the node IP address is 192.XX.YY.55, the prefix is aliyun.com, and the suffix is test:
   * 
   * - For Linux nodes, the node name, ECS instance name, and ECS instance hostname are all aliyun.com192.XX.YY.55test.
   * 
   * - For Windows nodes, the ECS instance hostname is 192-XX-YY-55, and the node name and ECS instance name are both aliyun.com192.XX.YY.55test.
   * 
   * @example
   * aliyun.com192.XX.YY.55test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * Instance pre-custom data. Before a node joins the cluster, the specified instance pre-custom data script is run. For more information, see [User-Data scripts](https://help.aliyun.com/document_detail/49121.html).
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
   * - Sandboxed-Container.runv: sandboxed container with higher isolation, supported by clusters of version 1.31 or earlier.
   * - docker: no longer maintained, supported by clusters of version 1.22 or earlier.
   * 
   * Default value: containerd.
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
   * Taint configuration.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Whether scaled-out nodes are unschedulable.
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
   * Instance custom data. After a node joins the cluster, the specified instance custom data script is run. For more information, see [User-Data scripts](https://help.aliyun.com/document_detail/49121.html).
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
   * Whether node repair requires manual approval.
   */
  approvalRequired?: boolean;
  /**
   * @remarks
   * Whether to allow node restart. Takes effect only when `auto_repair=true`. Valid values:
   * 
   * - `true`: allow node restart
   * - `false`: do not allow node restart
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
   * Whether to allow automatic kubelet upgrade. Takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: allow automatic kubelet upgrade.
   * - `false`: do not allow automatic kubelet upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Whether to allow automatic OS upgrade. Takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: allow automatic OS upgrade.
   * - `false`: do not allow automatic OS upgrade.
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
   * Whether to allow automatic runtime upgrade. Takes effect only when `auto_upgrade=true`. Valid values:
   * - `true`: allow automatic runtime upgrade.
   * - `false`: do not allow automatic runtime upgrade.
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
   * Packages to exclude during vulnerability patching.
   * 
   * Default value: `kernel`.
   * 
   * @example
   * kernel
   */
  excludePackages?: string;
  /**
   * @remarks
   * Whether to allow node restart. Takes effect only when `auto_vul_fix=true`. Valid values:
   * - `true`: allow node restart
   * - `false`: do not allow node restart
   * 
   * Default value: `true`
   * 
   * @example
   * false
   */
  restartNode?: boolean;
  /**
   * @remarks
   * Vulnerability levels allowed for automatic fixing, separated by commas, for example: `asap,later`. Supported vulnerability levels:
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
   * [Deprecated] Use the `auto_upgrade` parameter at the parent level instead.
   * 
   * Whether to enable auto upgrade. Valid values:
   * 
   * - `true`: enable auto upgrade.
   * 
   * - `false`: disable auto upgrade.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * Maximum number of unavailable nodes.
   * Valid values: [1,1000\\]
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * Number of extra nodes. Mutually exclusive with `surge_percentage`.
   * 
   * Nodes become unavailable during upgrade. You can create extra nodes to compensate for the cluster workload.
   * 
   * > It is recommended that the number of extra nodes does not exceed the current number of nodes.
   * 
   * @example
   * 0
   */
  surge?: number;
  /**
   * @remarks
   * Percentage of extra nodes. Mutually exclusive with `surge`.
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
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * Whether to automatically repair nodes. Takes effect only when `enable=true`.
   * 
   * - `true`: auto repair
   * 
   * - `false`: no auto repair
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * Auto repair node policy.
   */
  autoRepairPolicy?: CreateClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Whether to automatically upgrade nodes. Takes effect only when `enable=true`.
   * - `true`: enable auto upgrade.
   * - `false`: disable auto upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * Auto node upgrade policy.
   */
  autoUpgradePolicy?: CreateClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Whether to automatically fix CVE vulnerabilities. Takes effect only when `enable=true`.
   * 
   * - `true`: allow automatic CVE fixing.
   * - `false`: do not allow automatic CVE fixing.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * Auto CVE fix policy.
   */
  autoVulFixPolicy?: CreateClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Whether to enable the managed feature for the node pool. Valid values:
   * 
   * - `true`: enable the managed feature.
   * 
   * - `false`: disable the managed feature. Other related configurations take effect only when enable=true.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * [Deprecated] Use the `auto_upgrade` parameter at the parent level instead.
   * 
   * Auto upgrade configuration. Takes effect only when `enable=true`.
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

export class CreateClusterNodePoolRequestNodeComponents extends $dara.Model {
  /**
   * @remarks
   * Node component configuration.
   */
  config?: CreateClusterNodePoolRequestNodeComponentsConfig;
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
   * Kubelet parameter configuration.
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
   * Node pool name.
   * 
   * This parameter is required.
   * 
   * @example
   * nodepool-test
   */
  name?: string;
  /**
   * @remarks
   * Resource group ID of the node pool. Instances created by the node pool will belong to this resource group.
   * 
   * A resource can only belong to one resource group. Based on different business scenarios, you can map resource groups to concepts such as projects, applications, or organizations.
   * 
   * @example
   * rg-acfmyvw3wjmb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Node pool type. Valid values:
   * 
   * - `ess`: standard node pool (includes managed and auto scaling features).
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

export class CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * Private pool ID. When `match_criteria` is set to `Target`, you must further specify the private pool ID.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * Private pool type. Private pool capacity option for instance startup. After an Elasticity Assurance or Capacity Reservation takes effect, private pool capacity is generated for instance startup. Valid values:
   * - `Open`: open mode. Automatically matches open-type private pool capacity. If no eligible private pool capacity is available, public pool resources are used.
   * - `Target`: targeted mode. Uses the specified private pool capacity to launch instances. If the specified capacity is unavailable, instance creation fails.
   * - `None`: do not use mode. Instances will not use private pool capacity.
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
   * List of private pool IDs, i.e., Elasticity Assurance IDs or Capacity Reservation IDs. Only Target mode private pool IDs can be passed. Valid values of N: 1 to 20.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * Resource pool policy used when creating instances. Resource pools include private pools generated after Elasticity Assurance or Capacity Reservation takes effect, and public pools, for instance startup selection. Valid values:
   * PrivatePoolFirst: private pool first. When this policy is selected and resouce_pool_options.private_pool_ids is specified, the specified private pools are used first. If no private pool is specified or the specified private pool capacity is insufficient, open-type private pools are automatically matched. If no eligible private pool is available, public pools are used to create instances.
   * PrivatePoolOnly: private pool only. When this policy is selected, resouce_pool_options.private_pool_ids must be specified. If the specified private pool capacity is insufficient, instance creation fails.
   * None: do not use resource pool policy.
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
   * Preemptible instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Maximum price per instance.
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
   * Tag key.
   * 
   * @example
   * node-k-1
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
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
   * Whether to enable auto-renewal for nodes in the node pool. Takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * - `true`: enable auto-renewal.
   * - `false`: disable auto-renewal.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Duration of each auto-renewal. Valid values:
   * - When PeriodUnit=Week: 1, 2, 3.
   * - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
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
   * When `multi_az_policy` is set to `COST_OPTIMIZED`, whether to allow automatic creation of pay-as-you-go instances to meet the required number of ECS instances when preemptible instances cannot be created due to price or inventory constraints. Valid values:
   * 
   * - `true`: allow automatic creation of pay-as-you-go instances.
   * - `false`: do not allow automatic creation of pay-as-you-go instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * Data disk configuration for nodes in the node pool.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * Deployment set ID. You can use a deployment set to distribute ECS instances created by the node pool across different physical servers to ensure high availability and disaster recovery capabilities. When creating ECS instances in a deployment set, instances are distributed across the specified region based on the pre-configured deployment policy.
   * 
   * 
   * >Notice: After a deployment set is selected, the maximum number of nodes in the node pool is limited. The default upper limit for nodes in a deployment set is 20 × number of zones (the number of zones is determined by vSwitches). Choose carefully and ensure sufficient quota in the deployment set to avoid node creation failures.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * Desired number of nodes in the node pool.
   * 
   * The total number of nodes that the node pool should maintain. We recommend configuring at least 2 nodes to ensure proper running of cluster components. You can scale in or out the node pool by adjusting the desired node count.
   * 
   * If no nodes need to be created, set this to 0 and manually adjust the node count later.
   * 
   * @example
   * 0
   */
  desiredSize?: number;
  /**
   * @remarks
   * Block device initialization configuration.
   */
  diskInit?: DiskInit[];
  /**
   * @remarks
   * Custom image ID. The system-provided image is used by default.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * OS image type. Valid values:
   * 
   * - `AliyunLinux`: Alinux2 image.
   * - `AliyunLinuxSecurity`: Alinux2 image UEFI version.
   * - `AliyunLinux3`: Alinux3 image.
   * - `AliyunLinux3Arm64`: Alinux3 image ARM version.
   * - `AliyunLinux3Security`: Alinux3 image UEFI version.
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
   * Billing method for nodes in the node pool. Valid values:
   *  
   * - `PrePaid`: subscription instance.
   * 
   * - `PostPaid`: pay-as-you-go instance.
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
   * List of node instance types for the node pool. When the node pool scales out, instance types that meet the requirements are selected from the specified list to create instances.
   * 
   * Supported number of instance types: [1,10]
   * 
   * 
   * > To ensure high availability, we recommend that you select multiple instance types.
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * Public IP billing method. Valid values:
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
   * Maximum outbound public bandwidth for nodes. Unit: Mbps (Megabits per second). Valid values: [1,100\\].
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Key pair name for passwordless login. Mutually exclusive with `login_password`.
   * 
   * > If the node pool uses the ContainerOS operating system, only `key_pair` is supported.
   * 
   * @example
   * np-key-name
   */
  keyPair?: string;
  /**
   * @remarks
   * Whether the created ECS instances use a non-root user for login.
   *  
   * - true: log on as a non-root user (ecs-user).
   * 
   * - false: log on as the root user.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * SSH login password. Mutually exclusive with `key_pair`. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * ****
   */
  loginPassword?: string;
  /**
   * @remarks
   * Multi-zone scaling group ECS instance scaling policy. Valid values:
   * 
   * - `PRIORITY`: scales based on the vSwitches (VSwitchIds.N) you defined. When ECS instances cannot be created in the zone of a higher-priority vSwitch, the next-priority vSwitch is automatically used.
   * 
   * - `COST_OPTIMIZED`: attempts to create instances from lowest to highest vCPU unit price. When multiple instance types with preemptible billing are configured, preemptible instances are created first. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically attempt creating pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
   * 
   *   > `COST_OPTIMIZED` takes effect only when multiple instance types or preemptible instances are configured.
   * 
   * - `BALANCE`: evenly distributes ECS instances across the multiple zones specified in the scaling group. If zones become unbalanced due to insufficient inventory, you can use the API [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html) to rebalance resources.
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * Minimum number of pay-as-you-go instances required by the scaling group. Valid values: [0,1000\\]. When the number of pay-as-you-go instances is less than this value, pay-as-you-go instances are created first.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * Percentage of pay-as-you-go instances among the excess instances after the scaling group meets the minimum pay-as-you-go instance requirement (`on_demand_base_capacity`). Valid values: [0,100\\].
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * Subscription duration for nodes in the node pool. Takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
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
   * Billing period unit for nodes in the node pool. Takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
   * 
   * - `Month`: billed on a monthly basis.
   * - `Week`: billed on a weekly basis.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * [Deprecated] Use the `image_type` parameter instead.
   * 
   * OS distribution. Valid values:
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
   * Private pool configuration.
   */
  privatePoolOptions?: CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * Worker RAM role name.
   * 
   * * When left empty, the default Worker RAM role created by the cluster is used.
   * * When specified, the RAM role must be a **normal service role**, and its **trusted service** must be set to **Elastic Compute Service**. For more information, see [Create a normal service role](https://help.aliyun.com/document_detail/116800.html). When the specified RAM role is not the default Worker RAM role created by the cluster, the role name cannot start with `KubernetesMasterRole-` or `KubernetesWorkerRole-`.
   * 
   * >Notice: This parameter is supported only for ACK managed clusters of version 1.22 or later.
   * 
   * @example
   * example-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * RDS instance list.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * Resource pool and resource pool policy used when creating instances. Note the following when you set this parameter:
   * This parameter takes effect only when creating pay-as-you-go instances.
   * This parameter cannot be set together with private_pool_options.match_criteria or private_pool_options.id.
   */
  resourcePoolOptions?: CreateClusterNodePoolRequestScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * Scaling group mode. Valid values:
   * 
   * - `release`: standard mode. Scales by creating and releasing ECS instances based on resource usage.
   * - `recycle`: rapid mode. Scales by creating, stopping, and starting ECS instances, improving the speed of subsequent scaling (compute resources are not charged when stopped, only storage fees are charged, except for local disk instance types).
   * 
   * Default value: `release`.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * Security group ID for the node pool. Mutually exclusive with `security_group_ids`. We recommend using `security_group_ids`.
   * 
   * @example
   * sg-wz9a8g2mt6x5llu0****
   * 
   * @deprecated
   */
  securityGroupId?: string;
  /**
   * @remarks
   * List of security group IDs. Mutually exclusive with `security_group_id`. We recommend using `security_group_ids`. When both `security_group_id` and `security_group_ids` are specified, `security_group_ids` takes priority.
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
   * Whether to enable China classified protection of cybersecurity (China MLPS) hardening. China MLPS hardening can be enabled for nodes only when the system image is set to Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3. Alibaba Cloud provides China MLPS 2.0 Level III baseline check standards and scanning programs for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 images.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Number of available instance types. The scaling group creates preemptible instances in a balanced manner among the lowest-cost instance types. Valid values: [1,10\\].
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Whether to enable supplementing preemptible instances. When enabled, the scaling group attempts to create new instances to replace preemptible instances that are about to be reclaimed. Valid values:
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
   * Market price range configuration for a single preemptible instance type.
   */
  spotPriceLimit?: CreateClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * Preemptible instance type. Valid values:
   * 
   * - `NoSpot`: non-preemptible instance.
   * 
   * - `SpotWithPriceLimit`: set a maximum price for preemptible instances.
   * 
   * - `SpotAsPriceGo`: the system automatically bids at the current market price.
   * 
   * For more information, see [Preemptible instances](https://help.aliyun.com/document_detail/165053.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Whether to enable burst (performance bursting) for the node system disk. Valid values:
   * - true: enable.
   * - false: disable.
   * 
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * Multiple disk types for the system disk. When a higher-priority disk type is unavailable, the next-priority disk type is automatically used to create the system disk.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * Node system disk type. Valid values:
   * - `cloud_efficiency`: ultra disk.
   * - `cloud_ssd`: standard SSD.
   * - `cloud_essd`: ESSD.
   * - `cloud_auto`: ESSD AutoPL disk.
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
   * Encryption algorithm used by the system disk. Valid values: aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Whether to encrypt the system disk. Valid values:
   * 
   * - true: encrypt.
   * 
   * - false: do not encrypt.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * KMS key ID used by the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * Node system disk performance level. Only applicable to ESSD disks. The performance level is related to disk size. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * - PL0: moderate peak concurrent I/O performance with relatively stable read/write latency.
   * - PL1: moderate peak concurrent I/O performance with relatively stable read/write latency.
   * - PL2: high peak concurrent I/O performance with stable read/write latency.
   * - PL3: ultra-high peak concurrent I/O performance with extremely stable read/write latency.
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
   * This parameter is supported only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * Node system disk size. Unit: GiB.
   * 
   * Valid values: [20,2048\\].
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * System disk snapshot policy.
   * 
   * @example
   * sp-0jl6xnmme8v7o935****
   */
  systemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * Tags added only to ECS instances.
   * 
   * Tag keys cannot be duplicated and can be up to 128 characters in length. Tag keys and tag values cannot start with “aliyun” or “acs:”, or contain “https://” or “http://”.
   */
  tags?: CreateClusterNodePoolRequestScalingGroupTags[];
  /**
   * @remarks
   * List of vSwitch IDs. Valid values: [1,8\\].
   * 
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
   * Whether to enable confidential computing for the cluster.
   * 
   * - true: enable confidential computing.
   * 
   * - false: disable confidential computing.
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
   * Node pool intelligent managed configuration.
   */
  autoMode?: CreateClusterNodePoolRequestAutoMode;
  /**
   * @remarks
   * Auto scaling configuration.
   */
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * [Deprecated] Use desired_size instead.
   * 
   * Number of nodes in the node pool.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @remarks
   * Lingjun node pool configuration.
   */
  efloNodeGroup?: CreateClusterNodePoolRequestEfloNodeGroup;
  /**
   * @remarks
   * Whether the Pod network mode uses host network mode.
   * - `true`: host network. Pods directly use the host network stack, sharing the IP address and ports with the host.
   * - `false`: container network. Pods have an independent network stack and do not occupy host network ports.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * [Deprecated]
   * 
   * Edge node pool configuration.
   * 
   * @deprecated
   */
  interconnectConfig?: CreateClusterNodePoolRequestInterconnectConfig;
  /**
   * @remarks
   * Network type of the edge node pool. This parameter takes effect only for node pools of `edge` type. Valid values:
   * 
   * - `basic`: public network. Nodes in the node pool communicate with cloud nodes over the public network. Applications in the node pool cannot directly access the cloud VPC internal network.
   * - `private`: private network. Nodes in the node pool connect cloud and on-premises networks through Express Connect, VPN, or CEN, providing higher cloud-edge communication quality and more effective security.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Whether nodes in the edge node pool have Layer 3 network connectivity.
   * - `true`: connected. All nodes in this node pool have Layer 3 network connectivity.
   * - `false`: not connected. All hosts in this node pool do not have Layer 3 network connectivity.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * Cluster-related configuration.
   */
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * Node pool managed feature configuration.
   */
  management?: CreateClusterNodePoolRequestManagement;
  /**
   * @remarks
   * [Deprecated]
   * 
   * Maximum number of nodes allowed in the edge node pool.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  maxNodes?: number;
  /**
   * @remarks
   * Node component list.
   */
  nodeComponents?: CreateClusterNodePoolRequestNodeComponents[];
  /**
   * @remarks
   * Node configuration.
   */
  nodeConfig?: CreateClusterNodePoolRequestNodeConfig;
  /**
   * @remarks
   * Node pool configuration.
   */
  nodepoolInfo?: CreateClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * Node pool scaling group configuration.
   */
  scalingGroup?: CreateClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * Confidential computing cluster configuration.
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

