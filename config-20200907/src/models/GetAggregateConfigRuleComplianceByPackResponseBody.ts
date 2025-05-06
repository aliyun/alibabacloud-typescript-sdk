// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult } from "./GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult";


export class GetAggregateConfigRuleComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation results that are returned by rules in the compliance package.
   */
  configRuleComplianceResult?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C6B0C0A8-3245-48F1-AEAB-BC1A446E99D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleComplianceResult: 'ConfigRuleComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleComplianceResult: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRuleComplianceResult && typeof (this.configRuleComplianceResult as any).validate === 'function') {
      (this.configRuleComplianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

