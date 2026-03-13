// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateEvaluationReportResponseBody extends $dara.Model {
  /**
   * @example
   * 103144549568****
   */
  accountId?: number;
  /**
   * @example
   * 0.7684
   */
  evaluationScore?: number;
  /**
   * @example
   * 2026-01-12T07:25:33Z
   */
  evaluationTime?: string;
  /**
   * @example
   * true
   */
  finished?: string;
  /**
   * @example
   * EvaluationAccountExcelReport
   */
  reportType?: string;
  /**
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

