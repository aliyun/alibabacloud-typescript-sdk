// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCompliancePackReportResponseBodyCompliancePackReport } from "./GetCompliancePackReportResponseBodyCompliancePackReport";


export class GetCompliancePackReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance evaluation report.
   */
  compliancePackReport?: GetCompliancePackReportResponseBodyCompliancePackReport;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
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
      compliancePackReport: GetCompliancePackReportResponseBodyCompliancePackReport,
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

