// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetComplianceSummaryResponseBodyComplianceSummary } from "./GetComplianceSummaryResponseBodyComplianceSummary";


export class GetComplianceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The summary of compliance statistics.
   */
  complianceSummary?: GetComplianceSummaryResponseBodyComplianceSummary;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CAEE6F34-DEDC-4BAA-AA8C-946D5D008737
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
      complianceSummary: GetComplianceSummaryResponseBodyComplianceSummary,
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

