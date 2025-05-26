// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkLogAnalyzeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark log analysis task. You can call the ListSparkLogAnalyzeTasks operation to query the IDs of all Spark log analysis tasks that are submitted in the current cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

