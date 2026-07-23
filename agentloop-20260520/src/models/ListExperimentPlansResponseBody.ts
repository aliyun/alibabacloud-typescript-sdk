// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExperimentPlanData } from "./ExperimentPlanData";


export class ListExperimentPlansResponseBody extends $dara.Model {
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
   * The token for the next page.
   * 
   * @example
   * eyJsYXN0SWQiOjEwMX0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of experiment plan summaries.
   * 
   * @example
   * [{"planId": "exp-plan-e95bff54685a4ae29ff3a834c1008a71", "planName": "rca_benchmark_eval_experiment", "experimentType": "offline", "description": "", "status": "pending", "datasetId": "rca_benckmark_eval", "querySql": "", "experimentCount": 5, "createdAt": 1784612365000, "updatedAt": 1784619562000}, {"planId": "exp-plan-0242d983f5d340fd8479cf2c19eb279e", "planName": "arms_agent_experiment", "experimentType": "online", "description": "", "status": "stopped", "datasetId": "arms_customer_agent_level1", "querySql": "", "experimentCount": 4, "createdAt": 1784257858000, "updatedAt": 1784721811000}, {"planId": "b7f0ad3d-3765-446a-a744-ab64ab8bf386", "planName": "arms_customer_agent_plan", "experimentType": "offline", "description": "", "status": "stopped", "datasetId": "arms_customer_agent_level1", "querySql": "where \\"input\\" LIKE \\"%探针%\\"", "experimentCount": 65, "createdAt": 1782310430000, "updatedAt": 1784692254000}]
   */
  plans?: ExperimentPlanData[];
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
   * The total number of records that match the filter criteria.
   * 
   * @example
   * 6
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      plans: 'plans',
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
      plans: { 'type': 'array', 'itemType': ExperimentPlanData },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.plans)) {
      $dara.Model.validateArray(this.plans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

