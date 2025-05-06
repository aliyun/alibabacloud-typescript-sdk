// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult } from "./DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult";


export class DetachAggregateConfigRuleToCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the operations to remove one or more rules.
   */
  operateRuleResult?: DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB12A
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
      operateRuleResult: DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult,
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

