// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateComputeQuotaScheduleRequestBodyCondition } from "./UpdateComputeQuotaScheduleRequestBodyCondition";


export class UpdateComputeQuotaScheduleRequestBody extends $dara.Model {
  /**
   * @remarks
   * The value of effective condition.
   */
  condition?: UpdateComputeQuotaScheduleRequestBodyCondition;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * This parameter is required.
   * 
   * @example
   * planA
   */
  plan?: string;
  /**
   * @remarks
   * The type of the quota plan.
   * 
   * >Notice: Currently, only daily is supported.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      plan: 'plan',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: UpdateComputeQuotaScheduleRequestBodyCondition,
      plan: 'string',
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

