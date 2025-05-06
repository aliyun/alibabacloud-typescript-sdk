// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResult } from "./GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResult";


export class GetAggregateResourceComplianceByConfigRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance result.
   */
  complianceResult?: GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23306AB1-34E0-468F-BD7B-68D8AEAB754C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.complianceResult && typeof (this.complianceResult as any).validate === 'function') {
      (this.complianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

