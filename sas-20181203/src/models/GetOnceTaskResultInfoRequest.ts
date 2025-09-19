// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnceTaskResultInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * This parameter is required.
   * 
   * @example
   * 9dfa3a7eb9547781632785b49003****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task. Valid values:
   * 
   * *   **CLIENT_PROBLEM_CHECK**: a task of the Security Center agent
   * *   **CLIENT_DEV_OPS**: an O\\&M task of Cloud Assistant
   * *   **ASSET_SECURITY_CHECK**: a task of asset information collection
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
   * *   **CLIENT_PROBLEM_CHECK**: a task of the Security Center agent
   * *   **CLIENT_DEV_OPS**: an O\\&M task of Cloud Assistant
   * *   **ASSET_SECURITY_CHECK**: a task of asset information collection
   * 
   * This parameter is required.
   * 
   * @example
   * ASSETS_COLLECTION
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
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

