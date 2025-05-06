// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult } from "./AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult";


export class AttachAggregateConfigRuleToCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the operations to add one or more rules.
   */
  operateRuleResult?: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE72B7B5-D0EA-15E6-A359-EDECBB9BDFA3
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
      operateRuleResult: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult,
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

