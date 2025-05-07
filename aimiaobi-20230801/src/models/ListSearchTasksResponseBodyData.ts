// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-25 11:40:50
   */
  createTime?: string;
  /**
   * @example
   * 24
   */
  dialogueType?: number;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxx
   */
  taskName?: string;
  /**
   * @example
   * 2024-11-25 11:40:50
   */
  updateTime?: string;
  /**
   * @example
   * xxxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dialogueType: 'DialogueType',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dialogueType: 'number',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

