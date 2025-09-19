// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCycleTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task configuration.
   * 
   * >  You can call the [CreateCycleTask](~~CreateCycleTask~~) operation to query the IDs of task configurations.
   * 
   * @example
   * f93b6ee24cfd0aad44b897ad5051****
   */
  configId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the task. Valid values:
   * 
   * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
   * *   **IMAGE_SCAN**: image scan task
   * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task
   * 
   * @example
   * IMAGE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
   * *   **IMAGE_SCAN**: image scan task
   * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      taskName: 'string',
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

