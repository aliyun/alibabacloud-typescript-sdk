// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Experiment plan ID
   * 
   * This parameter is required.
   * 
   * @example
   * 189
   */
  planId?: number;
  /**
   * @remarks
   * Experiment plan name
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  planTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      planTemplateName: 'PlanTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'number',
      planTemplateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

