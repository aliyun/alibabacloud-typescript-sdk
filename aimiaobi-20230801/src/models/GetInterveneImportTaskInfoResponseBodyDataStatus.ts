// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneImportTaskInfoResponseBodyDataStatus extends $dara.Model {
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * 80
   */
  percentage?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 41405255
   */
  taskId?: string;
  /**
   * @example
   * ft-task-20190101m8rnK
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

