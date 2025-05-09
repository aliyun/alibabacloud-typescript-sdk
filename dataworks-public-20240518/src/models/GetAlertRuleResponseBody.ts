// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAlertRuleResponseBodyAlertRule } from "./GetAlertRuleResponseBodyAlertRule";


export class GetAlertRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the rule.
   */
  alertRule?: GetAlertRuleResponseBodyAlertRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertRule: 'AlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRule: GetAlertRuleResponseBodyAlertRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertRule && typeof (this.alertRule as any).validate === 'function') {
      (this.alertRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

