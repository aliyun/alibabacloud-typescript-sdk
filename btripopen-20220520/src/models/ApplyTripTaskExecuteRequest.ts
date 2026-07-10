// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyTripTaskExecuteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionFrom?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskAction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      actionFrom: 'action_from',
      comment: 'comment',
      taskAction: 'task_action',
      taskId: 'task_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionFrom: 'string',
      comment: 'string',
      taskAction: 'string',
      taskId: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

