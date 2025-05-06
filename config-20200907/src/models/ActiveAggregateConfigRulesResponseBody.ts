// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ActiveAggregateConfigRulesResponseBodyOperateRuleResult } from "./ActiveAggregateConfigRulesResponseBodyOperateRuleResult";


export class ActiveAggregateConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the operations.
   */
  operateRuleResult?: ActiveAggregateConfigRulesResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
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
      operateRuleResult: ActiveAggregateConfigRulesResponseBodyOperateRuleResult,
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

