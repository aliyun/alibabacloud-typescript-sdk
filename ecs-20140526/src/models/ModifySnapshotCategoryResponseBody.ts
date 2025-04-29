// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnapshotCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B48A12CD-1295-4A38-A8F0-0E92C937****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the archive task. You can call the DescribeTasks operation to query the status and progress of the archive task.
   * 
   * @example
   * t-dxh34xds**d
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

