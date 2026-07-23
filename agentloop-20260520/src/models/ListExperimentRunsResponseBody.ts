// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExperimentRecord } from "./ExperimentRecord";


export class ListExperimentRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Optional.
   * 
   * @example
   * eyJwYWdlIjoxfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 0
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of experiment run records.
   * 
   * @example
   * [{"recordId": "exp-run-f6d419b0ed3d43a7b585948a55efc07b", "experimentPlanId": "exp-plan-0242d983f5d340fd8479cf2c19eb279e", "recordName": "arms_agent_experiment 2026/07/22 20:02:55", "planName": "arms_agent_experiment", "status": "evaluating", "progress": 100.0, "totalTasks": 40, "completedTasks": 40, "failedTasks": 0, "dataSourceType": "dataset-full", "datasetId": "arms_customer_agent_level1", "modelNames": ["qwen3.7-plus", "qwen3.7-max"], "evaluationTaskId": "eval-task-6bec93bfa03740dd86ce2bf1496e65fb", "executedAt": 1784721775379, "completedAt": 1784721811392}, {"recordId": "a5397261-6e6d-4e45-bf52-feb8686f7524", "experimentPlanId": "exp-plan-e95bff54685a4ae29ff3a834c1008a71", "recordName": "rca_benchmark_eval_experiment 2026/07/22 19:23:59", "planName": "rca_benchmark_eval_experiment", "status": "completed", "progress": 100.0, "totalTasks": 20, "completedTasks": 20, "failedTasks": 0, "dataSourceType": "dataset-full", "datasetId": "rca_benckmark_eval", "modelNames": [], "evaluationTaskId": "eval-task-b1395b3bdf3e4dc994d7dcde7a66da45", "executedAt": 1784719439255, "completedAt": 1784719989371}]
   */
  records?: ExperimentRecord[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      records: 'records',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ExperimentRecord },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

