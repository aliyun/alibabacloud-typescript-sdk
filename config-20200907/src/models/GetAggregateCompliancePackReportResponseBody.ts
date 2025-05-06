// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateCompliancePackReportResponseBodyCompliancePackReport } from "./GetAggregateCompliancePackReportResponseBodyCompliancePackReport";


export class GetAggregateCompliancePackReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation report that is generated based on a compliance package.
   */
  compliancePackReport?: GetAggregateCompliancePackReportResponseBodyCompliancePackReport;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D234DAC-1ABD-42E8-9475-BE317857E29B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackReport: 'CompliancePackReport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackReport: GetAggregateCompliancePackReportResponseBodyCompliancePackReport,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compliancePackReport && typeof (this.compliancePackReport as any).validate === 'function') {
      (this.compliancePackReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

