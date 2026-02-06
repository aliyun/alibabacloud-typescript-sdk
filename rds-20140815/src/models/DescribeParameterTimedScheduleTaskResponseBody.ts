// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTimedScheduleTaskResponseBodyTaskList extends $dara.Model {
  /**
   * @example
   * rm-2ze2za3is7baay****
   */
  DBInstanceName?: string;
  /**
   * @example
   * {"auto_increment_increment":"1000","back_log":"99"}
   */
  parameters?: string;
  /**
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @example
   * 2022-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @example
   * 27056921
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      parameters: 'Parameters',
      status: 'Status',
      switchTime: 'SwitchTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      parameters: 'string',
      status: 'string',
      switchTime: 'string',
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

export class DescribeParameterTimedScheduleTaskResponseBody extends $dara.Model {
  /**
   * @example
   * A807C95D-410C-5BB5-96C0-C6E09F2C3D36
   */
  requestId?: string;
  taskList?: DescribeParameterTimedScheduleTaskResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeParameterTimedScheduleTaskResponseBodyTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

