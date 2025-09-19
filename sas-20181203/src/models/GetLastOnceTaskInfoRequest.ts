// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLastOnceTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the task.
   * 
   * @example
   * console_batch
   */
  source?: string;
  /**
   * @remarks
   * The name of the task. Valid values:
   * 
   * *   **CLIENT_PROBLEM_CHECK**: client diagnosis task
   * *   **CLIENT_DEV_OPS**: O\\&M task of Cloud Assistant
   * *   **ASSETS_COLLECTION**: asset collection task
   * 
   * This parameter is required.
   * 
   * @example
   * ASSETS_COLLECTION
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **CLIENT_PROBLEM_CHECK**: client diagnosis task
   * *   **CLIENT_DEV_OPS**: O\\&M task of Cloud Assistant
   * *   **ASSETS_COLLECTION**: asset collection task
   * 
   * This parameter is required.
   * 
   * @example
   * ASSETS_COLLECTION
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

