// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The IDs of the auto triggered nodes of which the instances are successfully run. This parameter takes effect only if the Type parameter is set to ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger condition of the task. Valid values:
   * 
   * *   ByScheduledTaskInstance. The value indicates that the task is triggered when the instance of an auto triggered node is successfully run.
   * 
   * @example
   * ByScheduledTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

