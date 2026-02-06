// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteParameterTimedScheduleTaskRequest extends $dara.Model {
  /**
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceName?: string;
  /**
   * @example
   * 41698
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

