// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterTimedScheduleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Instance Name.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The scheduled switchover time to be set, in the format yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2022-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 440437220
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      switchTime: 'SwitchTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      switchTime: 'string',
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

