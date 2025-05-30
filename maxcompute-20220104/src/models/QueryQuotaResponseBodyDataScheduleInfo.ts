// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaResponseBodyDataScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The current quota plan that has taken effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the plan specified by currPlan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the plan specified by nextPlan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan specified by this parameter is triggered and the plan is different from the plan specified by currPlan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan specified by oncePlan is scheduled.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The operator name.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

