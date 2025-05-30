// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

