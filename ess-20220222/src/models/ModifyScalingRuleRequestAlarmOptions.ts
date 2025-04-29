// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingRuleRequestAlarmOptions extends $dara.Model {
  period?: number;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

