// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTrigger extends $dara.Model {
  /**
   * @remarks
   * The IDs of scheduling tasks. This parameter is valid only if you set Type to ByScheduledTaskInstance.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The trigger type of the monitor. Valid values:
   * 
   * *   ByManual: The monitor is manually triggered.
   * *   ByScheduledTaskInstance: The monitor is triggered by associated scheduling tasks.
   * *   ByQualityNode: The monitor is triggered by created data quality monitoring nodes.
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

