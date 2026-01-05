// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteProvisionedProductPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-bp1jvmdk2k****
   */
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

