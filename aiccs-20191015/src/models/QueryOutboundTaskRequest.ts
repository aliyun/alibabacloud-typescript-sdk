// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOutboundTaskRequest extends $dara.Model {
  ani?: string;
  currentPage?: number;
  departmentId?: string;
  endDate?: string;
  endTime?: string;
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  pageSize?: number;
  skillGroup?: number;
  startDate?: string;
  startTime?: string;
  status?: string;
  taskId?: number;
  taskName?: string;
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

