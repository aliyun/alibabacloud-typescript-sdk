// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np31da1b38983f4511b490fc62108a****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * T-613b19bbd160ad492800****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolId: 'nodepool_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolId: 'string',
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

