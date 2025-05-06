// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeactiveConfigRulesResponseBodyOperateRuleResult } from "./DeactiveConfigRulesResponseBodyOperateRuleResult";


export class DeactiveConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the operations that are performed to disable the specified rules.
   */
  operateRuleResult?: DeactiveConfigRulesResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54FA74D9-45D4-4CA5-9BE1-97F6EA19AF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: DeactiveConfigRulesResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operateRuleResult && typeof (this.operateRuleResult as any).validate === 'function') {
      (this.operateRuleResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

