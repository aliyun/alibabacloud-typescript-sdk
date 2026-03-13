// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchedulingRule } from "./SchedulingRule";


export class Rules extends $dara.Model {
  schedulingRule?: SchedulingRule;
  static names(): { [key: string]: string } {
    return {
      schedulingRule: 'SchedulingRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingRule: SchedulingRule,
    };
  }

  validate() {
    if(this.schedulingRule && typeof (this.schedulingRule as any).validate === 'function') {
      (this.schedulingRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

