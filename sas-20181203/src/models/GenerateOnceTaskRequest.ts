// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information.
   * 
   * This parameter is required.
   * 
   * @example
   * {"mode":1,"problemType":"offline","uuids":"inet-795dcad1-360f-49d2-b01e-b7da7f1c****"}
   */
  param?: string;
  /**
   * @remarks
   * The source of the scan task.
   * 
   * @example
   * Manual
   */
  source?: string;
  /**
   * @remarks
   * The name of the scan task. Valid values:
   * 
   * *   **CLIENT_PROBLEM_CHECK**: a client diagnosis task
   * *   **CLIENT_DEV_OPS**: an O\\&M task of Cloud Assistant
   * *   **ASSET_SECURITY_CHECK**: a task of asset information collection
   * 
   * This parameter is required.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the scan task. Valid values:
   * 
   * *   **CLIENT_PROBLEM_CHECK**: a client diagnosis task
   * *   **CLIENT_DEV_OPS**: an O\\&M task of Cloud Assistant
   * *   **ASSET_SECURITY_CHECK**: a task of asset information collection
   * 
   * This parameter is required.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
      source: 'Source',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
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

