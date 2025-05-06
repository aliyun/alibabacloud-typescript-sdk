// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ActiveConfigRulesResponseBodyOperateRuleResult } from "./ActiveConfigRulesResponseBodyOperateRuleResult";


export class ActiveConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  operateRuleResult?: ActiveConfigRulesResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 61C1A88F-D163-40DF-84A6-F200229F37B2
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
      operateRuleResult: ActiveConfigRulesResponseBodyOperateRuleResult,
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

