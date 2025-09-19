// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVirusScanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **VIRUS_VUL_SCHEDULE_SCAN**: a virus scan task.
   * 
   * @example
   * VIRUS_VUL_SCHEDULE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

