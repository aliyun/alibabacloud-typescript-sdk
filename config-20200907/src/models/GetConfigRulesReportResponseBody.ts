// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRulesReportResponseBodyConfigRulesReport extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the rules belong.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The timestamp when the compliance evaluation report was generated. Unit: milliseconds.
   * 
   * @example
   * 1614687022000
   */
  reportCreateTimestamp?: number;
  /**
   * @remarks
   * The ID of the compliance evaluation report.
   * 
   * @example
   * crp-88176457e0d900c9****
   */
  reportId?: string;
  /**
   * @remarks
   * The status of the compliance evaluation report. Valid values:
   * 
   * *   NONE: The compliance evaluation report is not generated.
   * *   CREATING: The compliance evaluation report is being generated.
   * *   COMPLETE: The compliance evaluation report is generated.
   * 
   * @example
   * CREATING
   */
  reportStatus?: string;
  /**
   * @remarks
   * The URL that is used to download the compliance evaluation report.
   */
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
  /**
   * @remarks
   * The information about the compliance evaluation report.
   */
  configRulesReport?: GetConfigRulesReportResponseBodyConfigRulesReport;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
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

