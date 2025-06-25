// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOtaTaskResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The OTA version.
   * 
   * @example
   * 0.0.1-R-20220708.110604
   */
  otaVersion?: string;
  /**
   * @remarks
   * The task status.
   * 
   * Valid values:
   * 
   * *   FAILED
   * *   RUNNING
   * *   TERMINATED
   * *   PART_FINISHED
   * *   STANDBY
   * *   FINISHED
   * 
   * @example
   * RUNNING
   */
  taskDisplayStatus?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ota-be7jzm29wrrz5****
   */
  taskId?: string;
  /**
   * @remarks
   * The start time of the OTA update task. The time follows the ISO 8601 standard.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-08-04T14:36:00+08:00
   */
  taskStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      otaVersion: 'OtaVersion',
      taskDisplayStatus: 'TaskDisplayStatus',
      taskId: 'TaskId',
      taskStartTime: 'TaskStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaVersion: 'string',
      taskDisplayStatus: 'string',
      taskId: 'string',
      taskStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

