// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleWithAdjustmentResponseBodyPlanResultResourceAllocations extends $dara.Model {
  amount?: number;
  instanceChargeType?: string;
  instanceType?: string;
  spotStrategy?: string;
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
   * The type of the scaling activity.
   * 
   * If `ActivityType` is set to `CapacityChange`, only the expected number of instances is changed during the scaling activity specified by ScalingActivityId and no scale-out is triggered.
   * 
   * This parameter is applicable to only scaling groups that have an expected number of instances.
   * 
   * @example
   * CapacityChange
   */
  activityType?: string;
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

