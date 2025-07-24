// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingGroupConfigInstanceTypeList extends $dara.Model {
  /**
   * @remarks
   * Ecs类型。
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * 抢占价格上限,可空。
   * 
   * @example
   * 0.79
   */
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigMultiAvailablePolicyPolicyParam extends $dara.Model {
  /**
   * @remarks
   * 按需实例最小个数。
   * 
   * @example
   * 1
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * 按需实例百分比。
   * 
   * @example
   * 10
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * 抢占实例类型池规模。
   * 
   * @example
   * 10
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * 是否使用按量补偿。
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  static names(): { [key: string]: string } {
    return {
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigMultiAvailablePolicy extends $dara.Model {
  /**
   * @remarks
   * 资源可用性策略(成本优化参数)。
   */
  policyParam?: ScalingGroupConfigMultiAvailablePolicyPolicyParam;
  /**
   * @remarks
   * 策略类型。
   * 
   * @example
   * PRIORITY
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      policyParam: 'PolicyParam',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyParam: ScalingGroupConfigMultiAvailablePolicyPolicyParam,
      policyType: 'string',
    };
  }

  validate() {
    if(this.policyParam && typeof (this.policyParam as any).validate === 'function') {
      (this.policyParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigNodeOfflinePolicy extends $dara.Model {
  /**
   * @remarks
   * 下线模式,是否为优雅下线。
   * 
   * @example
   * DEFAULT
   */
  mode?: string;
  /**
   * @remarks
   * 下线超时时间,单位毫秒。
   * 
   * @example
   * 1000
   */
  timeoutMs?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      timeoutMs: 'TimeoutMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      timeoutMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * 私有池id。
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * 实例启动的私有池容量选项。。
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
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

export class ScalingGroupConfig extends $dara.Model {
  /**
   * @remarks
   * 数据盘类型。
   * 
   * @example
   * cloud_essd
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * 数据盘个数。
   * 
   * @example
   * 4
   */
  dataDiskCount?: number;
  /**
   * @remarks
   * 数据盘大小,单位GB。
   * 
   * @example
   * 40
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * 默认冷却时间。
   * 
   * @example
   * 0
   */
  defaultCoolDownTime?: number;
  /**
   * @remarks
   * 抢占实例列表。
   */
  instanceTypeList?: ScalingGroupConfigInstanceTypeList[];
  /**
   * @remarks
   * 资源可用性策略(成本优化参数)。
   */
  multiAvailablePolicy?: ScalingGroupConfigMultiAvailablePolicy;
  /**
   * @remarks
   * 节点下线策略。
   */
  nodeOfflinePolicy?: ScalingGroupConfigNodeOfflinePolicy;
  /**
   * @remarks
   * 私有池选项	。
   */
  privatePoolOptions?: ScalingGroupConfigPrivatePoolOptions;
  /**
   * @remarks
   * 伸缩组节点最大个数。
   * 
   * @example
   * 10
   */
  scalingMaxSize?: number;
  /**
   * @remarks
   * 伸缩组节点最小个数。
   * 
   * @example
   * 1
   */
  scalingMinSize?: number;
  /**
   * @remarks
   * 抢占式Spot实例策略。
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * 系统盘类型。
   * 
   * @example
   * cloud_essd
   */
  sysDiskCategory?: string;
  /**
   * @remarks
   * 系统盘大小,单位GB。
   * 
   * @example
   * 80
   */
  sysDiskSize?: number;
  /**
   * @remarks
   * 伸缩活动触发模式。
   * 
   * @example
   * ByLoad
   */
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskCount: 'DataDiskCount',
      dataDiskSize: 'DataDiskSize',
      defaultCoolDownTime: 'DefaultCoolDownTime',
      instanceTypeList: 'InstanceTypeList',
      multiAvailablePolicy: 'MultiAvailablePolicy',
      nodeOfflinePolicy: 'NodeOfflinePolicy',
      privatePoolOptions: 'PrivatePoolOptions',
      scalingMaxSize: 'ScalingMaxSize',
      scalingMinSize: 'ScalingMinSize',
      spotStrategy: 'SpotStrategy',
      sysDiskCategory: 'SysDiskCategory',
      sysDiskSize: 'SysDiskSize',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskCount: 'number',
      dataDiskSize: 'number',
      defaultCoolDownTime: 'number',
      instanceTypeList: { 'type': 'array', 'itemType': ScalingGroupConfigInstanceTypeList },
      multiAvailablePolicy: ScalingGroupConfigMultiAvailablePolicy,
      nodeOfflinePolicy: ScalingGroupConfigNodeOfflinePolicy,
      privatePoolOptions: ScalingGroupConfigPrivatePoolOptions,
      scalingMaxSize: 'number',
      scalingMinSize: 'number',
      spotStrategy: 'string',
      sysDiskCategory: 'string',
      sysDiskSize: 'number',
      triggerMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeList)) {
      $dara.Model.validateArray(this.instanceTypeList);
    }
    if(this.multiAvailablePolicy && typeof (this.multiAvailablePolicy as any).validate === 'function') {
      (this.multiAvailablePolicy as any).validate();
    }
    if(this.nodeOfflinePolicy && typeof (this.nodeOfflinePolicy as any).validate === 'function') {
      (this.nodeOfflinePolicy as any).validate();
    }
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

