// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateEvaluationReportRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID. If this parameter is not specified, the report is generated for the current account by default. A management account (MA) can pass in a member account ID to generate a report for the member account.
   * 
   * @example
   * 103144549568****
   */
  accountId?: number;
  /**
   * @remarks
   * The list of member account IDs for which to generate reports.
   * Note: This parameter is required only when you generate a multi-account report and want to specify the scope of accounts.
   */
  accountIds?: number[];
  evaluationDomain?: string;
  /**
   * @remarks
   * RegionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountIds: 'AccountIds',
      evaluationDomain: 'EvaluationDomain',
      regionId: 'RegionId',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountIds: { 'type': 'array', 'itemType': 'number' },
      evaluationDomain: 'string',
      regionId: 'string',
      reportType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

