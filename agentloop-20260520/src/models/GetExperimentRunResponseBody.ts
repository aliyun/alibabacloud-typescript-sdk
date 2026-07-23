// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExperimentRecord } from "./ExperimentRecord";


export class GetExperimentRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The experiment run record details. Fields with null values are not returned.
   * 
   * @example
   * {"recordId": "exp-run-f6d419b0ed3d43a7b585948a55efc07b", "experimentPlanId": "exp-plan-0242d983f5d340fd8479cf2c19eb279e", "recordName": "arms_agent_experiment 2026/07/22 20:02:55", "planName": "arms_agent_experiment", "status": "evaluating", "totalTasks": 40, "completedTasks": 40, "failedTasks": 0, "progress": 100.0, "executedAt": 1784721775379, "completedAt": 1784721811392, "dataSourceType": "dataset-full", "datasetId": "arms_customer_agent_level1", "modelNames": ["qwen3.7-plus", "qwen3.7-max"], "evaluationTaskId": "eval-task-6bec93bfa03740dd86ce2bf1496e65fb"}
   */
  record?: ExperimentRecord;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      record: 'record',
      regionId: 'regionId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: ExperimentRecord,
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.record && typeof (this.record as any).validate === 'function') {
      (this.record as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

