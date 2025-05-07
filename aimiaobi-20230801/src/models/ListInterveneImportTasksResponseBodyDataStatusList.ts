// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneImportTasksResponseBodyDataStatusList extends $dara.Model {
  /**
   * @example
   * Success
   */
  msg?: string;
  /**
   * @example
   * 5
   */
  percentage?: number;
  /**
   * @example
   * Success
   */
  status?: number;
  /**
   * @example
   * 4854
   */
  taskId?: string;
  /**
   * @example
   * 12344454
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      percentage: 'Percentage',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      percentage: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

