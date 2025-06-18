// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchedulingRule } from "./SchedulingRule";


export class Rules extends $dara.Model {
  scheduling?: SchedulingRule;
  static names(): { [key: string]: string } {
    return {
      scheduling: 'Scheduling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduling: SchedulingRule,
    };
  }

  validate() {
    if(this.scheduling && typeof (this.scheduling as any).validate === 'function') {
      (this.scheduling as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

