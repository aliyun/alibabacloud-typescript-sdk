// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyTripTaskExecuteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open
   */
  actionFrom?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agree
   */
  taskAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  taskId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thirdpart12138
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

