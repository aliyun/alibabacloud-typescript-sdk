// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Plan ID
   * 
   * This parameter is required.
   * 
   * @example
   * 189
   */
  planId?: number;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

