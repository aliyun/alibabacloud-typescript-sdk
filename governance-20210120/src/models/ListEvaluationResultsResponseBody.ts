// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationResultsResponseBodyResultsMetricResultsAccountSummary extends $dara.Model {
  /**
   * @example
   * 1
   */
  nonCompliant?: number;
  static names(): { [key: string]: string } {
    return {
      nonCompliant: 'NonCompliant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonCompliant: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * EcsInsightEnableFailed
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unable to enable ECS Insight due to a server error.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary extends $dara.Model {
  /**
   * @remarks
   * The number of non-compliant resources.
   * 
   * @example
   * 2
   */
  nonCompliant?: number;
  static names(): { [key: string]: string } {
    return {
      nonCompliant: 'NonCompliant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonCompliant: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * @example
   * 0.2
   */
  potentialScoreIncrease?: number;
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
      potentialScoreIncrease: 'PotentialScoreIncrease',
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
      potentialScoreIncrease: 'number',
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

export class ListEvaluationResultsResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The end time of the overall check. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-13T03:35:00Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * The check result.
   */
  metricResults?: ListEvaluationResultsResponseBodyResultsMetricResults[];
  /**
   * @remarks
   * The status of the overall check. Valid values:
   * 
   * *   Running: The check is in progress.
   * *   Finished: The check is complete.
   * *   failed: The check fails.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The overall score.
   * 
   * @example
   * 0.6453
   */
  totalScore?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationTime: 'EvaluationTime',
      metricResults: 'MetricResults',
      status: 'Status',
      totalScore: 'TotalScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationTime: 'string',
      metricResults: { 'type': 'array', 'itemType': ListEvaluationResultsResponseBodyResultsMetricResults },
      status: 'string',
      totalScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metricResults)) {
      $dara.Model.validateArray(this.metricResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD57329E-131A-59F4-8746-E1CD8D7B****
   */
  requestId?: string;
  /**
   * @remarks
   * The check results, including the status of the overall check and the results of check items.
   */
  results?: ListEvaluationResultsResponseBodyResults;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      requestId: 'string',
      results: ListEvaluationResultsResponseBodyResults,
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

