// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateEvaluationReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account ID for which the report is generated.
   * 
   * @example
   * 103144549568****
   */
  accountId?: number;
  /**
   * @remarks
   * The governance maturity evaluation score.
   * 
   * @example
   * 0.7684
   */
  evaluationScore?: number;
  /**
   * @remarks
   * The evaluation time.
   * 
   * @example
   * 2026-01-12T07:25:33Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * Indicates whether the report generation is complete.
   * 
   * > - true: The report generation is complete.
   * > - false: The report generation is not complete.
   * 
   * @example
   * true
   */
  finished?: string;
  /**
   * @remarks
   * The report type. Valid values:
   * - EvaluationAccountHtmlReport: single-account HTML report.
   * - EvaluationAccountExcelReport: single-account Excel report.
   * - EvaluationMultiAccountExcelReport: multi-account Excel report.
   * 
   * @example
   * EvaluationAccountExcelReport
   */
  reportType?: string;
  /**
   * @remarks
   * The download URL of the report.
   * 
   * @example
   * https://governance-prod-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/reports-html/*****
   */
  reportUrl?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7DCF863F-CBBB-57C4-8AF2-5D4EE35D1EB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      evaluationScore: 'EvaluationScore',
      evaluationTime: 'EvaluationTime',
      finished: 'Finished',
      reportType: 'ReportType',
      reportUrl: 'ReportUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      evaluationScore: 'number',
      evaluationTime: 'string',
      finished: 'string',
      reportType: 'string',
      reportUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

