// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRulesReportResponseBodyConfigRulesReport extends $dara.Model {
  accountId?: number;
  reportCreateTimestamp?: number;
  reportId?: string;
  reportStatus?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportId: 'ReportId',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      reportCreateTimestamp: 'number',
      reportId: 'string',
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

export class GetConfigRulesReportResponseBody extends $dara.Model {
  configRulesReport?: GetConfigRulesReportResponseBodyConfigRulesReport;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRulesReport: 'ConfigRulesReport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRulesReport: GetConfigRulesReportResponseBodyConfigRulesReport,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRulesReport && typeof (this.configRulesReport as any).validate === 'function') {
      (this.configRulesReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

