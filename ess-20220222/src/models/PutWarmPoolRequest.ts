// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutWarmPoolRequestCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * The expected number of instances to be warmed. The system maintains the sum of the current number of instances in the scaling group and the number of instances in the warm pool at this value. Instances that exceed the current number of instances in the scaling group are scaled out into the warm pool in advance. When traffic peaks occur, instances can be quickly added from the warm pool, avoiding the wait time caused by creating instances on demand.
   * 
   * Default value: the maximum number of instances in the scaling group, which is specified by `MaxSize`.
   * > The value of `DesiredGroupPreparedCapacity` must be less than or equal to the maximum number of instances in the scaling group, which is specified by `MaxSize`.
   * 
   * @example
   * 20
   */
  desiredGroupPreparedCapacity?: number;
  /**
   * @remarks
   * The minimum number of instances in the warm pool. The system always keeps at least this number of warmed instances in the warm pool to ensure that instances can be quickly added from the warm pool during scale-out.
   * 
   * Default value: 0.
   * 
   * > The value of `MinCapacity` must be less than or equal to the value of `DesiredGroupPreparedCapacity`.
   * 
   * @example
   * 0
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      desiredGroupPreparedCapacity: 'DesiredGroupPreparedCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredGroupPreparedCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutWarmPoolRequestInstanceReusePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether instances are reclaimed to the warm pool when the scaling group scales in. Valid values:
   * 
   * - true: Instances are reclaimed to the warm pool.
   * - false: Instances are not reclaimed to the warm pool.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  reuseOnScaleIn?: boolean;
  static names(): { [key: string]: string } {
    return {
      reuseOnScaleIn: 'ReuseOnScaleIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reuseOnScaleIn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutWarmPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The capacity options for the warm pool.
   * 
   * @example
   * 0
   */
  capacityOptions?: PutWarmPoolRequestCapacityOptions;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that it is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance reclaim policy.
   */
  instanceReusePolicy?: PutWarmPoolRequestInstanceReusePolicy;
  /**
   * @remarks
   * The state of instances in the warm pool. Valid values:
   * 
   * - Running: The instances are in the running state. This state allows faster scale-out, but you are charged for the full cost of the instances.
   * - Stopped: The instances are in the economical mode. You are charged only for resources such as cloud disks, elastic IP addresses (EIPs), and snapshots of the instances. However, instance startup may fail during scale-out due to insufficient inventory.
   * 
   * Default value: Stopped.
   * 
   * @example
   * Running
   */
  poolState?: string;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1fo0dbtsbmqa9h****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      capacityOptions: 'CapacityOptions',
      clientToken: 'ClientToken',
      instanceReusePolicy: 'InstanceReusePolicy',
      poolState: 'PoolState',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityOptions: PutWarmPoolRequestCapacityOptions,
      clientToken: 'string',
      instanceReusePolicy: PutWarmPoolRequestInstanceReusePolicy,
      poolState: 'string',
      regionId: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(this.capacityOptions && typeof (this.capacityOptions as any).validate === 'function') {
      (this.capacityOptions as any).validate();
    }
    if(this.instanceReusePolicy && typeof (this.instanceReusePolicy as any).validate === 'function') {
      (this.instanceReusePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

