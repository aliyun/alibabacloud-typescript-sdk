// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialoguesResponseBodyData extends $dara.Model {
  /**
   * @example
   * xx
   */
  bot?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @example
   * xx
   */
  createUser?: string;
  /**
   * @example
   * 2
   */
  dialogueType?: number;
  /**
   * @example
   * xx
   */
  taskId?: string;
  /**
   * @example
   * x
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      bot: 'Bot',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dialogueType: 'DialogueType',
      taskId: 'TaskId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bot: 'string',
      createTime: 'string',
      createUser: 'string',
      dialogueType: 'number',
      taskId: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

