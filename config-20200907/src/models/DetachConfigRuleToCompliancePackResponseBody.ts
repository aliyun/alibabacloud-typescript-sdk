// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult } from "./DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult";


export class DetachConfigRuleToCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the operations to remove one or more rules.
   */
  operateRuleResult?: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AC7AED1-172F-42AE-9C12-295BC2ADB12A
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
      operateRuleResult: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult,
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

