// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { InstanceMetadataOptions } from "./InstanceMetadataOptions";
import { KubeletConfig } from "./KubeletConfig";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class NodepoolAutoScaling extends $dara.Model {
  /**
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @example
   * PayByBandwidth
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  minInstances?: number;
  /**
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
   * @example
   * 10
   * 
   * @deprecated
   */
  bandwidth?: number;
  /**
   * @example
   * ccn-qm5i0i0q9yi*******
   * 
   * @deprecated
   */
  ccnId?: string;
  /**
   * @example
   * cn-shanghai
   * 
   * @deprecated
   */
  ccnRegionId?: string;
  /**
   * @example
   * cen-ey9k9nfhz0f*******
   * 
   * @deprecated
   */
  cenId?: string;
  /**
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
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @example
   * none
   */
  cpuPolicy?: string;
  labels?: Tag[];
  /**
   * @example
   * customized,test.,5,.com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * docker
   */
  runtime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19.03.5
   */
  runtimeVersion?: string;
  taints?: Taint[];
  /**
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
   * @example
   * true
   */
  restartNode?: boolean;
  /**
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
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @example
   * 5
   */
  surge?: number;
  /**
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

export class NodepoolManagement extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRepair?: boolean;
  autoRepairPolicy?: NodepoolManagementAutoRepairPolicy;
  /**
   * @example
   * true
   */
  autoUpgrade?: boolean;
  autoUpgradePolicy?: NodepoolManagementAutoUpgradePolicy;
  /**
   * @example
   * true
   */
  autoVulFix?: boolean;
  autoVulFixPolicy?: NodepoolManagementAutoVulFixPolicy;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @deprecated
   */
  upgradeConfig?: NodepoolManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
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

export class NodepoolNodeComponents extends $dara.Model {
  config?: NodepoolNodeComponentsConfig;
  /**
   * @example
   * kubelet
   */
  name?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * np-test
   */
  name?: string;
  /**
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
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
  id?: string;
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
  privatePoolIds?: string[];
  /**
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
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
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
   * @example
   * key
   */
  key?: string;
  /**
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
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  /**
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200904.vhd
   */
  imageId?: string;
  /**
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  instanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @example
   * np-key
   */
  keyPair?: string;
  loginAsNonRoot?: boolean;
  /**
   * @example
   * Hello1234,,
   */
  loginPassword?: string;
  /**
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @example
   * 0
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  platform?: string;
  privatePoolOptions?: NodepoolScalingGroupPrivatePoolOptions;
  /**
   * @example
   * example-role
   */
  ramRoleName?: string;
  rdsInstances?: string[];
  resourcePoolOptions?: NodepoolScalingGroupResourcePoolOptions;
  /**
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @example
   * sg-2zeihch86ooz9io4****
   */
  securityGroupId?: string;
  securityGroupIds?: string[];
  /**
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: NodepoolScalingGroupSpotPriceLimit[];
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  systemDiskCategories?: string[];
  /**
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  systemDiskEncrypted?: boolean;
  /**
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @example
   * 120
   */
  systemDiskSize?: number;
  tags?: NodepoolScalingGroupTags[];
  /**
   * @remarks
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
  autoScaling?: NodepoolAutoScaling;
  /**
   * @example
   * 1
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @deprecated
   */
  interconnectConfig?: NodepoolInterconnectConfig;
  /**
   * @example
   * basic
   */
  interconnectMode?: string;
  kubernetesConfig?: NodepoolKubernetesConfig;
  management?: NodepoolManagement;
  /**
   * @example
   * 10
   */
  maxNodes?: number;
  nodeComponents?: NodepoolNodeComponents[];
  nodeConfig?: NodepoolNodeConfig;
  nodepoolInfo?: NodepoolNodepoolInfo;
  scalingGroup?: NodepoolScalingGroup;
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

