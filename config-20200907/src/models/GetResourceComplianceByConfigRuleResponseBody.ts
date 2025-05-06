// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceComplianceByConfigRuleResponseBodyComplianceResult } from "./GetResourceComplianceByConfigRuleResponseBodyComplianceResult";


export class GetResourceComplianceByConfigRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance result.
   */
  complianceResult?: GetResourceComplianceByConfigRuleResponseBodyComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23306AB1-34E0-468F-BD7B-68D8AEAB753d
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
      complianceResult: GetResourceComplianceByConfigRuleResponseBodyComplianceResult,
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

