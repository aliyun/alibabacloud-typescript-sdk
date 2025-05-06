// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateComplianceSummaryResponseBodyComplianceSummary } from "./GetAggregateComplianceSummaryResponseBodyComplianceSummary";


export class GetAggregateComplianceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance statistics.
   */
  complianceSummary?: GetAggregateComplianceSummaryResponseBodyComplianceSummary;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 929B8360-BD57-54FF-96DB-AD1D9B476769
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceSummary: 'ComplianceSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummary: GetAggregateComplianceSummaryResponseBodyComplianceSummary,
      requestId: 'string',
    };
  }

  validate() {
    if(this.complianceSummary && typeof (this.complianceSummary as any).validate === 'function') {
      (this.complianceSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

