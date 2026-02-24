// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateCompliancePackReportResponseBodyCompliancePackReport extends $dara.Model {
  accountId?: number;
  compliancePackId?: string;
  reportCreateTimestamp?: number;
  reportStatus?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliancePackId: 'CompliancePackId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliancePackId: 'string',
      reportCreateTimestamp: 'number',
      reportStatus: 'string',
      reportUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackReportResponseBody extends $dara.Model {
  compliancePackReport?: GetAggregateCompliancePackReportResponseBodyCompliancePackReport;
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

