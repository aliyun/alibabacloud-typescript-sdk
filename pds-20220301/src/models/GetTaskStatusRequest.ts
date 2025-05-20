// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * i:SimilarImageClustering-b67d53e7-2fe8-460f-9b95-1e93636923eb
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
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

