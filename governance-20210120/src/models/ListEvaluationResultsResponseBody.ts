// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationResultsResponseBodyResultsMetricResultsAccountSummary extends $dara.Model {
  /**
   * @remarks
   * Number of non-compliant accounts.
   * 
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

export class ListEvaluationResultsResponseBodyResultsMetricResultsAvailableRemediation extends $dara.Model {
  /**
   * @remarks
   * Remediation template ID.
   */
  remediationTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationTemplateId: 'RemediationTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationTemplateId: 'string',
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
   * Error code.
   * 
   * @example
   * EcsInsightEnableFailed
   */
  code?: string;
  /**
   * @remarks
   * Error message.
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
   * Number of non-compliant resources.
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
  /**
   * @remarks
   * Evaluation item account assessment summary.
   */
  accountSummary?: ListEvaluationResultsResponseBodyResultsMetricResultsAccountSummary;
  /**
   * @remarks
   * List of available remediations.
   */
  availableRemediation?: ListEvaluationResultsResponseBodyResultsMetricResultsAvailableRemediation[];
  /**
   * @remarks
   * Error information.
   * 
   * > This error information is returned when `Status` is `Failed`.
   */
  errorInfo?: ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo;
  /**
   * @remarks
   * Individual evaluation item end time (UTC).
   * 
   * @example
   * 2023-12-13T03:34:02Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * Evaluation item ID.
   * 
   * @example
   * r7xdcu****
   */
  id?: string;
  /**
   * @remarks
   * Potential score increase.
   * 
   * @example
   * 0.2
   */
  potentialScoreIncrease?: number;
  /**
   * @remarks
   * Evaluation item resource assessment summary.
   */
  resourcesSummary?: ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary;
  /**
   * @remarks
   * Evaluation item resource compliance rate.
   * 
   * @example
   * 0.67
   */
  result?: number;
  /**
   * @remarks
   * Evaluation risk level. Valid values:
   * 
   * - Error: High risk.
   * - Warning: Medium risk.
   * - None: No risk.
   * 
   * @example
   * Error
   */
  risk?: string;
  /**
   * @remarks
   * Individual evaluation item status. Valid values:
   * 
   * - Running: Evaluation in progress.
   * - Finished: Evaluation completed.
   * - Failed: Evaluation failed.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountSummary: 'AccountSummary',
      availableRemediation: 'AvailableRemediation',
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
      availableRemediation: { 'type': 'array', 'itemType': ListEvaluationResultsResponseBodyResultsMetricResultsAvailableRemediation },
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
    if(Array.isArray(this.availableRemediation)) {
      $dara.Model.validateArray(this.availableRemediation);
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
   * Overall evaluation end time (UTC).
   * 
   * @example
   * 2023-12-13T03:35:00Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * Evaluation results.
   */
  metricResults?: ListEvaluationResultsResponseBodyResultsMetricResults[];
  /**
   * @remarks
   * Overall evaluation status. Valid values:
   * 
   * - Running: Evaluation in progress.
   * - Finished: Evaluation completed.
   * - Failed: Evaluation failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Overall score.
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
   * Member account ID.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BD57329E-131A-59F4-8746-E1CD8D7B****
   */
  requestId?: string;
  /**
   * @remarks
   * Evaluation results, including overall evaluation status and sub-item evaluation results.
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

