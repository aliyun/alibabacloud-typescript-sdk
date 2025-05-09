// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask } from "./ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask";


export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstances extends $dara.Model {
  /**
   * @remarks
   * The time at which the instance was generated.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The time at which the instance finished running.
   * 
   * @example
   * 1710239005403
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The parameters configured for the instance.
   * 
   * @example
   * {
   *   "bizdate": "20240517",
   *   "triggerTime": "1710239005403"
   * }
   */
  parameters?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Running
   * *   Error
   * *   Passed
   * *   Warned
   * *   Critical
   * 
   * @example
   * Critical
   */
  status?: string;
  /**
   * @remarks
   * The snapshot of the configurations for the task when the task starts.
   */
  task?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask;
  /**
   * @remarks
   * The information about the trigger module of the instance.
   * 
   * @example
   * {
   *   "TriggerClientId": 10001,
   *   "TriggerClient": "CWF2"
   * }
   */
  triggerContext?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      parameters: 'Parameters',
      projectId: 'ProjectId',
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
      status: 'string',
      task: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask,
      triggerContext: 'string',
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

