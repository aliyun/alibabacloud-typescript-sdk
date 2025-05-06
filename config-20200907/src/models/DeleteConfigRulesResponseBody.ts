// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteConfigRulesResponseBodyOperateRuleResult } from "./DeleteConfigRulesResponseBodyOperateRuleResult";


export class DeleteConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the delete operations.
   */
  operateRuleResult?: DeleteConfigRulesResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6721BBD3-F2A6-5349-9051-EE0111036D3F
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
      operateRuleResult: DeleteConfigRulesResponseBodyOperateRuleResult,
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

