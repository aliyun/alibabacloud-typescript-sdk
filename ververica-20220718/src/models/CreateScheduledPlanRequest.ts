// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledPlan } from "./ScheduledPlan";


export class CreateScheduledPlanRequest extends $dara.Model {
  /**
   * @remarks
   * This data structure represents the scheduled plan to be created.
   */
  body?: ScheduledPlan;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ScheduledPlan,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

