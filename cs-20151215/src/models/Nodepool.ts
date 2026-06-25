// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { DiskInit } from "./DiskInit";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";
import { KubeletConfig } from "./KubeletConfig";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class NodepoolAutoScaling extends $dara.Model {
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * EIP带宽峰值。单位：Mbps。
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * EIP计费类型，取值：
   * 
   * - `PayByBandwidth`：按固定带宽计费。
   * - `PayByTraffic`：按使用流量计费。
   * 
   * 默认值：PayByBandwidth。
   * 
   * @example
   * PayByBandwidth
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * 是否启用自动伸缩。
   * 
   * - `true`：开启节点池自动伸缩功能。
   * - `false`：不开启自动伸缩，当取值为false时，`auto_scaling`内的其他配置参数将不生效。
   * 
   * 默认值：`false`。
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 是否绑定EIP，取值：
   * 
   * - `true`：绑定EIP。
   * - `false`：不绑定EIP。
   * 
   * 默认值：`false`。
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * 自动伸缩组最大实例数。
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * 自动伸缩组最小实例数。
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  minInstances?: number;
  /**
   * @remarks
   * 自动伸缩类型，按照自动伸缩实例类型划分。取值：
   * 
   * - `cpu`：普通实例型。
   * - `gpu`：GPU实例型。
   * - `gpushare`：GPU共享型。
   * - `spot`：抢占式实例型。
   * 
   * 默认值：`cpu`。
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

export class NodepoolInterconnectConfig extends $dara.Model {
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池的网络带宽，单位：Mbps。
   * 
   * @example
   * 10
   * 
   * @deprecated
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
   * 
   * @deprecated
   */
  ccnId?: string;
  /**
   * @remarks
   * 【该字段已废弃】
   * 
   * 边缘增强型节点池绑定的云连接网实例所属的地域。
   * 
   * @example
   * cn-shanghai
   * 
   * @deprecated
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
   * 
   * @deprecated
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
   * 
   * @deprecated
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

export class NodepoolKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * 是否在ECS节点上安装云监控，安装后可以在云监控控制台查看所创建ECS实例的监控信息，推荐开启。取值：
   * 
   * - `true`：在ECS节点上安装云监控。
   * - `false`：不在ECS节点上安装云监控。
   * 
   * 默认值：`false`。
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：
   * 
   * - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
   * - `none`：表示启用现有的默认CPU亲和性方案。
   * 
   * 默认值：`none`。
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * 节点标签，为Kubernetes集群节点添加标签。
   */
  labels?: Tag[];
  /**
   * @remarks
   * 节点名称由三部分组成：前缀 + 节点 IP + 后缀：
   * 
   * - 前缀和后缀均可由“.”分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和“-”，节点名称首尾必须为小写字母和数字；
   * - 节点 IP为完整的节点私网 IP 地址；
   * 
   * 传参包含四个部分，由逗号分隔，例如：参数传入"customized,aliyun,ip,com"字符串（其中“customized”和"ip"为固定的字符串，aliyun为前缀，com为后缀），则节点的名称为：aliyun.192.168.xxx.xxx.com。
   * 
   * @example
   * customized,aliyun,ip,com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * 容器运行时。取值：
   * - `containerd`：推荐使用，支持所有集群版本。
   * - `Sandboxed-Container.runv`：安全沙箱容器，提供更高的隔离性，支持1.24版本及以下集群。
   * - `docker`：支持1.22版本及以下集群。
   * 
   * 默认值：`containerd`
   * 
   * This parameter is required.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * 容器运行时版本。
   * 
   * This parameter is required.
   * 
   * @example
   * 1.6.20
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * 污点配置。
   */
  taints?: Taint[];
  /**
   * @remarks
   * 节点自定义数据。
   * 
   * @example
   * MXM=
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      nodeNameMode: 'node_name_mode',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      nodeNameMode: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
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

export class NodepoolManagementAutoRepairPolicy extends $dara.Model {
  /**
   * @remarks
   * 是否允许重启节点。
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class NodepoolManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * 是否允许自动升级kubelet。
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

export class NodepoolManagementAutoVulFixPolicy extends $dara.Model {
  /**
   * @remarks
   * 是否允许重启节点。
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * 允许自动修复的漏洞级别，以逗号分隔。
   * 
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class NodepoolManagementUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * 是否启用自动升级，取值：
   * 
   * - `true`：启用自动升级。
   * - `false`：不启用自动升级。
   * 
   * @example
   * false
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * 最大不可用节点数量，取值范围：[1,1000\\]。
   * 
   * 默认值：1。
   * 
   * @example
   * 0
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * 额外节点数量。
   * 
   * @example
   * 0
   */
  surge?: number;
  /**
   * @remarks
   * 额外节点比例，和`surge`二选一。
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

export class NodepoolManagement extends $dara.Model {
  autoFaultDiagnosis?: boolean;
  /**
   * @remarks
   * 自动修复，仅当`enable=true`时生效。
   * 
   * - `true`：自动修复。
   * - `false`：不自动修复。
   * 
   * @example
   * false
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * 自动修复节点策略。
   */
  autoRepairPolicy?: NodepoolManagementAutoRepairPolicy;
  /**
   * @remarks
   * 是否自动升级。
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * 自动升级策略。
   */
  autoUpgradePolicy?: NodepoolManagementAutoUpgradePolicy;
  /**
   * @remarks
   * 是否自动修复CVE。
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * 自动修复CVE策略。
   */
  autoVulFixPolicy?: NodepoolManagementAutoVulFixPolicy;
  /**
   * @remarks
   * 是否开启托管版节点池，取值：
   * 
   * - `true`：开启托管节点池。
   * - `false`：不开启托管节点池，只有当`enable=true`时，其他相关配置才生效。
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * 自动升级配置，仅当`enable=true`时生效。
   * 
   * @deprecated
   */
  upgradeConfig?: NodepoolManagementUpgradeConfig;
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
      autoRepairPolicy: NodepoolManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: NodepoolManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: NodepoolManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: NodepoolManagementUpgradeConfig,
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

export class NodepoolNodeComponentsConfig extends $dara.Model {
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

export class NodepoolNodeComponents extends $dara.Model {
  /**
   * @remarks
   * 节点组件配置。
   */
  config?: NodepoolNodeComponentsConfig;
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
   * 节点组件版本
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
      config: NodepoolNodeComponentsConfig,
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

export class NodepoolNodeConfig extends $dara.Model {
  /**
   * @remarks
   * Kubelet参数配置。
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

export class NodepoolNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * 节点池名称。
   * 
   * This parameter is required.
   * 
   * @example
   * np-test
   */
  name?: string;
  /**
   * @remarks
   * 节点池所在资源ID。
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 节点池类型，取值范围：
   * 
   * - `ess`：节点池。
   * - `edge`：边缘节点池。
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

export class NodepoolScalingGroupPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * 私有节点池ID。
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * 私有节点池类型，实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值：
   * 
   * - `Open`：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。
   * 
   * - `Target`：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。
   * 
   * - `None`：不使用模式。实例启动将不使用私有池容量。
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

export class NodepoolScalingGroupResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * 私有池 ID列表。即弹性保障服务 ID 或容量预定服务 ID。该参数只能传入 Target 模式私有池 ID。N 的取值范围：1~20。
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * 创建实例时使用的资源池策略。资源池包括弹性保障服务或容量预定服务生效后生成的私有池以及公共池，供实例启动时选择。取值范围：
   * PrivatePoolFirst：私有池优先。选择此种策略时， 当指定了 resource_pool_options.private_pool_ids，优先使用指定的私有池。如果未指定私有池或指定的私有池容量不足，将自动匹配开放类型的私有池。如果没有符合条件的私有池，则使用公共池创建实例。
   * PrivatePoolOnly：仅限私有池。选择此种策略时，必须指定 resource_pool_options.private_pool_ids。如果指定的私有池容量不足，则实例会启动失败。
   * None：不使用资源池策略。
   * 默认值：None。
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

export class NodepoolScalingGroupSpotPriceLimit extends $dara.Model {
  /**
   * @remarks
   * 抢占式实例规格。
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * 单台实例上限价格。
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

export class NodepoolScalingGroupTags extends $dara.Model {
  /**
   * @remarks
   * 标签的名称。
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * 标签值。
   * 
   * @example
   * value
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

export class NodepoolScalingGroup extends $dara.Model {
  /**
   * @remarks
   * 节点池是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效，取值：
   * 
   * - `true`：自动续费。
   * - `false`：不自动续费。
   * 
   * 默认值：`true`。
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * 节点池自动续费周期。当`instance_charge_type`取值为`PrePaid`时才生效，且为必选值。
   * 
   * 当`PeriodUnit=Month`时，取值范围：{1, 2, 3, 6, 12}。
   * 
   * 默认值：1。
   * 
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * 当`multi_az_policy`取值为`COST_OPTIMIZED`时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值：
   * 
   * - `true`：允许自动尝试创建按量实例满足ECS实例数量要求。
   * - `false`：不允许自动尝试创建按量实例满足ECS实例数量要求。
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * 节点池节点数据盘配置。
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * 部署集ID。
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * 节点池期望节点数量。
   * 
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @remarks
   * 块设备初始化配置。
   */
  diskInit?: DiskInit[];
  /**
   * @remarks
   * 自定义镜像ID，默认使用系统提供的镜像。
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200904.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * 操作系统镜像类型，和platform参数二选一，取值范围：
   * 
   * - `AliyunLinux`：Alinux2镜像。
   * - `AliyunLinux3`：Alinux3镜像。
   * - `AliyunLinux3Arm64`：Alinux3镜像ARM版。
   * - `AliyunLinuxUEFI`：Alinux2镜像UEFI版。
   * - `CentOS`：CentOS镜像。
   * - `Windows`：Windows镜像。
   * - `WindowsCore`：WindowsCore镜像。
   * - `ContainerOS`：容器优化镜像。
   * 
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * 节点池节点付费类型，取值：
   * 
   * - `PrePaid`：预付费。
   * - `PostPaid`：按量付费。
   * 
   * 默认值：`PostPaid`。
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * ECS 实例的元数据访问配置。
   * 目前仅白名单开放，需提交工单申请。
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * 实例规格。
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * 公网IP收费类型。取值：
   * 
   * - `PayByBandwidth`：按固定带宽计费。
   * - `PayByTraffic`：按使用流量计费。
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：[1,100]
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * 密钥对名称，和`login_password`二选一。
   * 
   * > 如果创建托管节点池，则只支持`key_pair`。
   * 
   * @example
   * np-key
   */
  keyPair?: string;
  /**
   * @remarks
   * 弹出的ECS实例是否使用以非root用户登录。
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * 多可用区伸缩组ECS实例扩缩容策略。取值：
   * 
   * - `PRIORITY`：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。
   * 
   * - `COST_OPTIMIZED`：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。
   * 
   *   >`COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
   * 
   * - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API RebalanceInstances平衡资源。更多信息，请参见[RebalanceInstances](https://help.aliyun.com/document_detail/71516.html)。
   * 
   * 默认值：`PRIORITY`。
   * 
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * 伸缩组所需要按量实例个数的最小值，取值范围：[0,1000]。当按量实例个数少于该值时，将优先创建按量实例。
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * 伸缩组满足最小按量实例数（`on_demand_base_capacity`）要求后，超出的实例中按量实例应占的比例。取值范围：[0,100]。
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * 节点池节点包年包月时长，当`instance_charge_type`取值为`PrePaid`时才生效且为必选值，取值范围：`period_unit`取值为Month时，`period`取值范围：{ 1, 2, 3, 6, 12}。
   * 
   * 默认值：1。
   * 
   * @example
   * 0
   */
  period?: number;
  /**
   * @remarks
   * 节点池节点付费周期，当`instance_charge_type`取值为`PrePaid`时需要指定周期。
   * 
   * `Month`：目前只支持以月为单位。
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * 操作系统发行版。取值：
   * 
   * - `CentOS`
   * - `AliyunLinux`
   * - `Windows`
   * - `WindowsCore`
   * 
   * 默认值：`AliyunLinux`。
   * 
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  platform?: string;
  /**
   * @remarks
   * 私有节点池配置。
   */
  privatePoolOptions?: NodepoolScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * Worker RAM角色名称。
   * >Notice: 仅1.22及以上版本的ACK托管集群支持在创建节点池时配置该参数
   * 
   * @example
   * example-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * RDS实例列表。
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * 创建实例时使用的资源池及资源池策略。当您设置该参数后，需要注意：
   * 该参数只在创建按量付费实例时生效。
   * 该参数不能与private_pool_options.match_criteria、private_pool_options.id同时设置。
   */
  resourcePoolOptions?: NodepoolScalingGroupResourcePoolOptions;
  /**
   * @remarks
   * 伸缩组模式，取值：
   * 
   * - `release`：标准模式，根据申请资源值的使用量，通过创建、释放ECS的方式进行伸缩。
   * - `recycle`：极速模式，通过创建、停机、启动的方式进行伸缩，提高再次伸缩的速度（停机时计算资源不收费，只收取存储费用，本地盘机型除外）。
   * 
   * 默认值：`release`。
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * 节点池安全组ID，与`security_group_ids`二选一，推荐使用`security_group_ids`。
   * 
   * @example
   * sg-2zeihch86ooz9io4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 安全组ID列表，与`security_group_id`二选一，推荐使用`security_group_ids`，当同时指定`security_group_id`和`security_group_ids`将优先使用`security_group_ids`。
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：[1,10]。
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值：
   * 
   * - `true`：开启补齐抢占式实例。
   * - `false`：不开启补齐抢占式实例。
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * 当前单台抢占式实例规格市场价格区间配置。
   */
  spotPriceLimit?: NodepoolScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * 抢占式实例类型，取值：
   * - NoSpot：非抢占式实例。
   * - SpotWithPriceLimit：设置抢占实例价格上限。
   * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
   * 
   * 更多信息，请参见[抢占式实例](https://help.aliyun.com/document_detail/157759.html)。
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * 节点系统盘是否开启Burst（性能突发）。 取值：
   * 
   * - true：是。
   * - false：否。
   * 
   * 当`SystemDiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * 系统盘的多磁盘类型。当无法使用高优先级的磁盘类型时，自动尝试下一优先级的磁盘类型创建系统盘。取值范围：
   * 
   * - cloud：普通云盘。
   * - cloud_efficiency：高效云盘。
   * - cloud_ssd：SSD云盘。
   * - cloud_essd：ESSD云盘。
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * 节点系统盘类型，取值：
   * 
   * - `cloud_efficiency`：高效云盘。
   * - `cloud_ssd`：SSD云盘。
   * - `cloud_essd`：ESSD云盘。
   * - `cloud_auto`：ESSD AutoPL云盘。
   * - `cloud_essd_entry`：ESSD Entry云盘。
   * 
   * 默认值：`cloud_efficiency`。
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * 节点系统盘采用的加密算法。取值范围：aes-256。
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * 是否加密系统盘。取值范围：true：加密。false：不加密。
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * 节点系统盘使用的KMS密钥ID。
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * 节点系统盘磁盘性能，只对ESSD磁盘生效。
   * 
   * - PL0：并发极限I/O性能中等，读写时延较为稳定。
   * - PL1：并发极限I/O性能中等，读写时延较为稳定。
   * - PL2：并发极限I/O性能较高，读写时延稳定。
   * - PL3：并发极限I/O性能极高，读写时延极稳定。
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * 节点系统盘预配置的读写IOPS。可能值：0~min{50,000, 1000\\*容量-基准性能}。 基准性能=min{1,800+50\\*容量, 50000}。
   * 
   * 当`SystemDiskCategory`为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * 节点系统盘大小，单位：GiB。
   * 
   * 取值范围：[40,500]。
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * 仅为ECS实例添加标签。
   * 
   * 标签键不可以重复，最大长度为128个字符；标签键和标签值都不能以“aliyun”、“acs:”开头，或包含“https://”、“http://”。
   */
  tags?: NodepoolScalingGroupTags[];
  /**
   * @remarks
   * 虚拟交换机ID。
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      compensateWithOnDemand: 'compensate_with_on_demand',
      dataDisks: 'data_disks',
      deploymentsetId: 'deploymentset_id',
      desiredSize: 'desired_size',
      diskInit: 'disk_init',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instanceMetadataOptions: 'instance_metadata_options',
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
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      compensateWithOnDemand: 'boolean',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentsetId: 'string',
      desiredSize: 'number',
      diskInit: { 'type': 'array', 'itemType': DiskInit },
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instanceMetadataOptions: InstanceMetadataOptions,
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
      privatePoolOptions: NodepoolScalingGroupPrivatePoolOptions,
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      resourcePoolOptions: NodepoolScalingGroupResourcePoolOptions,
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': NodepoolScalingGroupSpotPriceLimit },
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
      tags: { 'type': 'array', 'itemType': NodepoolScalingGroupTags },
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

export class NodepoolTeeConfig extends $dara.Model {
  /**
   * @remarks
   * 是否为加密计算节点池。
   * 
   * This parameter is required.
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

export class Nodepool extends $dara.Model {
  /**
   * @remarks
   * The auto scaling configuration of the node pool.
   */
  autoScaling?: NodepoolAutoScaling;
  /**
   * @remarks
   * This parameter is deprecated. Use desired_size instead.
   * 
   * The number of nodes in the node pool.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The edge node pool configuration.
   * 
   * @deprecated
   */
  interconnectConfig?: NodepoolInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter is valid only for node pools whose `type` is `edge`. Valid values:
   * 
   * - `basic`: basic.
   * - `private`: dedicated. Supported in version 1.22 and later.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The cluster-related configuration.
   */
  kubernetesConfig?: NodepoolKubernetesConfig;
  /**
   * @remarks
   * The managed node pool configuration.
   */
  management?: NodepoolManagement;
  /**
   * @remarks
   * The maximum number of nodes allowed in the edge node pool. This parameter must be greater than or equal to 0. A value of 0 indicates no additional limit. The node pool is limited only by the maximum number of nodes that the cluster can contain. Edge node pools typically have a value greater than 0. ESS-type node pools and default edge-type node pools have a value of 0.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * The list of node components.
   */
  nodeComponents?: NodepoolNodeComponents[];
  /**
   * @remarks
   * The node configuration.
   */
  nodeConfig?: NodepoolNodeConfig;
  /**
   * @remarks
   * The node pool configuration.
   */
  nodepoolInfo?: NodepoolNodepoolInfo;
  /**
   * @remarks
   * The scaling group configuration of the node pool.
   */
  scalingGroup?: NodepoolScalingGroup;
  /**
   * @remarks
   * The confidential computing configuration of the node pool.
   */
  teeConfig?: NodepoolTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      count: 'count',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
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
      autoScaling: NodepoolAutoScaling,
      count: 'number',
      interconnectConfig: NodepoolInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: NodepoolKubernetesConfig,
      management: NodepoolManagement,
      maxNodes: 'number',
      nodeComponents: { 'type': 'array', 'itemType': NodepoolNodeComponents },
      nodeConfig: NodepoolNodeConfig,
      nodepoolInfo: NodepoolNodepoolInfo,
      scalingGroup: NodepoolScalingGroup,
      teeConfig: NodepoolTeeConfig,
    };
  }

  validate() {
    if(this.autoScaling && typeof (this.autoScaling as any).validate === 'function') {
      (this.autoScaling as any).validate();
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

