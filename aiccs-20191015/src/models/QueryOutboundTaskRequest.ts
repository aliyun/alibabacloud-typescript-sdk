// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 130****0000
   */
  ani?: string;
  /**
   * @remarks
   * The current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 123
   */
  departmentId?: string;
  /**
   * @remarks
   * The end date of task execution. The maximum time span between the start time and the end time is 7 days.
   * 
   * @example
   * 2020-08-09
   */
  endDate?: string;
  /**
   * @remarks
   * The end time of task execution.
   * 
   * @example
   * 23:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The skill group name.
   * 
   * @example
   * Test skill group
   */
  groupName?: string;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain it from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * 123456
   */
  skillGroup?: number;
  /**
   * @remarks
   * The start date of task execution. The maximum time span between the start time and the end time is 7 days.
   * 
   * @example
   * 2020-08-08
   */
  startDate?: string;
  /**
   * @remarks
   * The start time of task execution.
   * 
   * @example
   * 09:09:09
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **1**: not started
   * - **2**: running
   * - **3**: paused
   * - **4**: expired
   * - **5**: completed
   * - **6**: deleted
   * 
   * @example
   * 5
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 120001
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Test task
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **1**: PREVIEW (preview)
   * - **2**: FORECAST (forecast)
   * - **3**: ROBOT (robot)
   * 
   * @example
   * 2
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      endDate: 'EndDate',
      endTime: 'EndTime',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      currentPage: 'number',
      departmentId: 'string',
      endDate: 'string',
      endTime: 'string',
      groupName: 'string',
      instanceId: 'string',
      pageSize: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

