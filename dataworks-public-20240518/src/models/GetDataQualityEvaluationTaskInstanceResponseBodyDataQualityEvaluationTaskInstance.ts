// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResults } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResults";
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask";


export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1716344665000
   */
  createTime?: number;
  /**
   * @remarks
   * The end time of the instance.
   * 
   * @example
   * 1716344665000
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the data quality monitoring instance.
   * 
   * @example
   * 7234231689
   */
  id?: number;
  /**
   * @remarks
   * Data quality verification execution parameters in JSON format. The available keys are as follows:
   * - triggerTime: the millisecond timestamp of the trigger time. The baseline time of the $[yyyymmdd] expression in the data range of data quality monitoring. Required.
   * 
   * @example
   * { "triggerTime": 1733284062000 }
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 98330
   */
  projectId?: number;
  results?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResults[];
  /**
   * @remarks
   * The status of the data quality monitoring instance.
   * - Running: Verifying
   * - Error: A rule verification Error occurred.
   * - Passed: all rules are verified
   * - Warned: normal alarm threshold triggered by rules
   * - Critical: Threshold for serious alerts triggered by rules
   * 
   * @example
   * Passed
   */
  status?: string;
  /**
   * @remarks
   * The monitor.
   */
  task?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask;
  /**
   * @remarks
   * The context information when the instance is triggered, in JSON format. The possible keys are as follows:
   * - TriggerClient: the trigger source of the data quality monitoring instance, such as CWF2 (scheduling system), may be added later.
   * - TriggerClientId: associated with a specific business resource in the source system. For example, if TriggerClient is CWF2, the ID of the scheduling task is recorded here.
   * 
   * @example
   * { "triggerClient": "CWF2", "triggerClientId": 70001238945 }
   */
  triggerContext?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      results: 'Results',
      status: 'Status',
      task: 'Task',
      triggerContext: 'TriggerContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      finishTime: 'number',
      id: 'number',
      parameters: 'string',
      projectId: 'number',
      results: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResults },
      status: 'string',
      task: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask,
      triggerContext: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

