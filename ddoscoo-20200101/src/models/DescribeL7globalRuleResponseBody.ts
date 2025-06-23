// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeL7GlobalRuleResponseBodyGlobalRules } from "./DescribeL7globalRuleResponseBodyGlobalRules";


export class DescribeL7GlobalRuleResponseBody extends $dara.Model {
  globalRules?: DescribeL7GlobalRuleResponseBodyGlobalRules[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalRules: 'GlobalRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalRules: { 'type': 'array', 'itemType': DescribeL7GlobalRuleResponseBodyGlobalRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.globalRules)) {
      $dara.Model.validateArray(this.globalRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

