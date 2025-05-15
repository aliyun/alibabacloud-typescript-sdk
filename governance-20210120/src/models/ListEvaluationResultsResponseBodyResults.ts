// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationResultsResponseBodyResultsMetricResults } from "./ListEvaluationResultsResponseBodyResultsMetricResults";


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
   * The check results.
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

