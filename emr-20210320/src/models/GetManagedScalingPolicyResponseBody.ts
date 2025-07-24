// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedScalingPolicyResponseBodyScalingPolicyConstraints extends $dara.Model {
  /**
   * @remarks
   * 最大值
   * 
   * @example
   * 20
   */
  maxCapacity?: number;
  /**
   * @remarks
   * 最大按量数量
   * 
   * @example
   * 10
   */
  maxOnDemandCapacity?: number;
  /**
   * @remarks
   * 最小值
   * 
   * @example
   * 0
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      maxOnDemandCapacity: 'MaxOnDemandCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      maxOnDemandCapacity: 'number',
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

export class GetManagedScalingPolicyResponseBodyScalingPolicy extends $dara.Model {
  /**
   * @remarks
   * 集群ID。
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * 最大最小值约束
   */
  constraints?: GetManagedScalingPolicyResponseBodyScalingPolicyConstraints;
  /**
   * @remarks
   * 伸缩策略ID。
   * 
   * @example
   * asp-asduwe23znl***
   */
  scalingPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
      scalingPolicyId: 'ScalingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraints: GetManagedScalingPolicyResponseBodyScalingPolicyConstraints,
      scalingPolicyId: 'string',
    };
  }

  validate() {
    if(this.constraints && typeof (this.constraints as any).validate === 'function') {
      (this.constraints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedScalingPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  scalingPolicy?: GetManagedScalingPolicyResponseBodyScalingPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingPolicy: 'ScalingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingPolicy: GetManagedScalingPolicyResponseBodyScalingPolicy,
    };
  }

  validate() {
    if(this.scalingPolicy && typeof (this.scalingPolicy as any).validate === 'function') {
      (this.scalingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

