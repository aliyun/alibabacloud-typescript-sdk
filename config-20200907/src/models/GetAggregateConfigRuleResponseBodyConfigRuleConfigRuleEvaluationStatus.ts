// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the rule was first triggered.
   * 
   * @example
   * 1624932221993
   */
  firstActivatedTimestamp?: number;
  /**
   * @remarks
   * Indicates whether resources were evaluated based on the rule. Valid values:
   * 
   * *   true: Resources were evaluated based on the rule.
   * *   false: Resources were not evaluated based on the rule.
   * 
   * @example
   * true
   */
  firstEvaluationStarted?: boolean;
  /**
   * @remarks
   * The error code returned for the last failed compliance evaluation.
   * 
   * @example
   * TimeOut
   */
  lastErrorCode?: string;
  /**
   * @remarks
   * The error message returned for the last failed compliance evaluation.
   * 
   * @example
   * time out
   */
  lastErrorMessage?: string;
  /**
   * @remarks
   * The timestamp when the last failed compliance evaluation of the rule ended. Unit: milliseconds.
   * 
   * @example
   * 1614687022000
   */
  lastFailedEvaluationTimestamp?: number;
  /**
   * @remarks
   * The timestamp when the last failed compliance evaluation of the rule started. Unit: milliseconds.
   * 
   * @example
   * 1614687022000
   */
  lastFailedInvocationTimestamp?: number;
  /**
   * @remarks
   * The timestamp when the last successful compliance evaluation of the rule ended. Unit: milliseconds.
   * 
   * @example
   * 1624932227486
   */
  lastSuccessfulEvaluationTimestamp?: number;
  /**
   * @remarks
   * The timestamp when the last successful compliance evaluation of the rule started. Unit: milliseconds.
   * 
   * @example
   * 1624932227476
   */
  lastSuccessfulInvocationTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      firstActivatedTimestamp: 'FirstActivatedTimestamp',
      firstEvaluationStarted: 'FirstEvaluationStarted',
      lastErrorCode: 'LastErrorCode',
      lastErrorMessage: 'LastErrorMessage',
      lastFailedEvaluationTimestamp: 'LastFailedEvaluationTimestamp',
      lastFailedInvocationTimestamp: 'LastFailedInvocationTimestamp',
      lastSuccessfulEvaluationTimestamp: 'LastSuccessfulEvaluationTimestamp',
      lastSuccessfulInvocationTimestamp: 'LastSuccessfulInvocationTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstActivatedTimestamp: 'number',
      firstEvaluationStarted: 'boolean',
      lastErrorCode: 'string',
      lastErrorMessage: 'string',
      lastFailedEvaluationTimestamp: 'number',
      lastFailedInvocationTimestamp: 'number',
      lastSuccessfulEvaluationTimestamp: 'number',
      lastSuccessfulInvocationTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

