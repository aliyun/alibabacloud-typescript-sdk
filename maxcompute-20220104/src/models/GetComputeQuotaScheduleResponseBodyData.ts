// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetComputeQuotaScheduleResponseBodyDataCondition } from "./GetComputeQuotaScheduleResponseBodyDataCondition";


export class GetComputeQuotaScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of effective condition.
   */
  condition?: GetComputeQuotaScheduleResponseBodyDataCondition;
  /**
   * @remarks
   * The ID of the quota plan.
   * 
   * @example
   * 89b54db44d384f26964951ea457f64a5
   */
  id?: string;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  plan?: string;
  /**
   * @remarks
   * The time zone property.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The type of the quota plan.
   * 
   * @example
   * daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      plan: 'plan',
      timezone: 'timezone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: GetComputeQuotaScheduleResponseBodyDataCondition,
      id: 'string',
      plan: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

