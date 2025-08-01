// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserUsageDataExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

