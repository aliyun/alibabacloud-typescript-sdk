// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingGroupConfigInstanceTypeList } from "./ScalingGroupConfigInstanceTypeList";
import { ScalingGroupConfigMultiAvailablePolicy } from "./ScalingGroupConfigMultiAvailablePolicy";
import { ScalingGroupConfigNodeOfflinePolicy } from "./ScalingGroupConfigNodeOfflinePolicy";
import { ScalingGroupConfigPrivatePoolOptions } from "./ScalingGroupConfigPrivatePoolOptions";


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

