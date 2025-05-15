// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationResultsResponseBodyResultsMetricResultsAccountSummary } from "./ListEvaluationResultsResponseBodyResultsMetricResultsAccountSummary";
import { ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo } from "./ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo";
import { ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary } from "./ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary";


export class ListEvaluationResultsResponseBodyResultsMetricResults extends $dara.Model {
  accountSummary?: ListEvaluationResultsResponseBodyResultsMetricResultsAccountSummary;
  /**
   * @remarks
   * The error information.
   * 
   * >  This parameter is returned only if the value of `Status` is `Failed`.
   */
  errorInfo?: ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo;
  /**
   * @remarks
   * The end time of the check item. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-13T03:34:02Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * r7xdcu****
   */
  id?: string;
  /**
   * @remarks
   * The checked resources.
   */
  resourcesSummary?: ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary;
  /**
   * @remarks
   * The rate of the non-compliant resources.
   * 
   * @example
   * 0.67
   */
  result?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   Error: high risk
   * *   Warning: medium risk
   * *   None: no risk
   * 
   * @example
   * Error
   */
  risk?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   Running: The check is in progress.
   * *   Finished: The check is complete.
   * *   failed: The check fails.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountSummary: 'AccountSummary',
      errorInfo: 'ErrorInfo',
      evaluationTime: 'EvaluationTime',
      id: 'Id',
      resourcesSummary: 'ResourcesSummary',
      result: 'Result',
      risk: 'Risk',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSummary: ListEvaluationResultsResponseBodyResultsMetricResultsAccountSummary,
      errorInfo: ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo,
      evaluationTime: 'string',
      id: 'string',
      resourcesSummary: ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary,
      result: 'number',
      risk: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.accountSummary && typeof (this.accountSummary as any).validate === 'function') {
      (this.accountSummary as any).validate();
    }
    if(this.errorInfo && typeof (this.errorInfo as any).validate === 'function') {
      (this.errorInfo as any).validate();
    }
    if(this.resourcesSummary && typeof (this.resourcesSummary as any).validate === 'function') {
      (this.resourcesSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

