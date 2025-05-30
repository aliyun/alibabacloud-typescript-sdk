// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQuotaScheduleResponseBodyDataCondition } from "./GetQuotaScheduleResponseBodyDataCondition";


export class GetQuotaScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The condition value.
   */
  condition?: GetQuotaScheduleResponseBodyDataCondition;
  /**
   * @remarks
   * The ID of the quota plan.
   * 
   * @example
   * 63
   */
  id?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operator?: string;
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
   * The time zone.
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
   * once
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      operator: 'operator',
      plan: 'plan',
      timezone: 'timezone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: GetQuotaScheduleResponseBodyDataCondition,
      id: 'string',
      operator: 'string',
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

