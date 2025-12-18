// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRulesReportResponseBodyConfigRulesReport extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account to which the rules belong.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The timestamp when the compliance evaluation report was generated. Unit: milliseconds.
   * 
   * @example
   * 1624332329593
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
   * *   COMPLETE: The compliance evaluation report was generated.
   * 
   * @example
   * CREATING
   */
  reportStatus?: string;
  /**
   * @remarks
   * The URL used to download the compliance evaluation report.
   */
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportId: 'ReportId',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
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

export class GetAggregateConfigRulesReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation report.
   */
  configRulesReport?: GetAggregateConfigRulesReportResponseBodyConfigRulesReport;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0BCC7B2-D0E4-49B0-95D2-6689CFB08D31
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
      configRulesReport: GetAggregateConfigRulesReportResponseBodyConfigRulesReport,
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

