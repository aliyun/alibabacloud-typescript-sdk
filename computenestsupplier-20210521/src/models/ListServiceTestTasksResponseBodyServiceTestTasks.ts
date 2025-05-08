// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTestTasksResponseBodyServiceTestTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-02-26T02:16:35Z
   */
  createTime?: string;
  /**
   * @remarks
   * the status of service task.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * sttt-000h5nd4yrg59ucurzy1
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * dadadad
   */
  taskName?: string;
  /**
   * @remarks
   * The task region id.
   * 
   * @example
   * cn-beijing
   */
  taskRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskRegionId: 'TaskRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      taskRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

