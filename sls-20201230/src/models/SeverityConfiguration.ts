// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionConfiguration } from "./ConditionConfiguration";


export class SeverityConfiguration extends $dara.Model {
  evalCondition?: ConditionConfiguration;
  /**
   * @example
   * 8
   */
  severity?: number;
  static names(): { [key: string]: string } {
    return {
      evalCondition: 'evalCondition',
      severity: 'severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evalCondition: ConditionConfiguration,
      severity: 'number',
    };
  }

  validate() {
    if(this.evalCondition && typeof (this.evalCondition as any).validate === 'function') {
      (this.evalCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

