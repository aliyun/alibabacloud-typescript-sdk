// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleWithAdjustmentResponseBodyPlanResultResourceAllocations extends $dara.Model {
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **Prepaid**: subscription.
   * * **Postpaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.u1-c1m8.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The preemption policy for the instance. Valid values:
   * 
   * - NoSpot: regular pay-as-you-go instance.
   * - SpotWithPriceLimit: spot instance with a maximum price limit.
   * - SpotAsPriceGo: spot instance whose price is automatically set by the system based on the current market price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      instanceChargeType: 'string',
      instanceType: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentResponseBodyPlanResult extends $dara.Model {
  /**
   * @remarks
   * The resource allocation information in the elastic planning results.
   */
  resourceAllocations?: ScaleWithAdjustmentResponseBodyPlanResultResourceAllocations[];
  static names(): { [key: string]: string } {
    return {
      resourceAllocations: 'ResourceAllocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceAllocations: { 'type': 'array', 'itemType': ScaleWithAdjustmentResponseBodyPlanResultResourceAllocations },
    };
  }

  validate() {
    if(Array.isArray(this.resourceAllocations)) {
      $dara.Model.validateArray(this.resourceAllocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the scaling activity. If `ActivityType` is `CapacityChange`, the scaling activity corresponding to the returned `ScalingActivityId` only modifies the expected number of instances in the scaling group and does not immediately execute scale-out or scale-in. Applicable scope: scaling groups with the expected number of instances configured.
   * 
   * @example
   * CapacityChange
   */
  activityType?: string;
  /**
   * @remarks
   * The elastic planning results returned when ExecutionMode is set to PlanOnly.
   */
  planResult?: ScaleWithAdjustmentResponseBodyPlanResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scaling activity.
   * 
   * @example
   * asa-bp175o6f6ego3r2j****
   */
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      planResult: 'PlanResult',
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      planResult: ScaleWithAdjustmentResponseBodyPlanResult,
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  validate() {
    if(this.planResult && typeof (this.planResult as any).validate === 'function') {
      (this.planResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

