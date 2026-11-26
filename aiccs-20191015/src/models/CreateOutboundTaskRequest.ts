// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The calling number.
   * 
   * This parameter is required.
   * 
   * @example
   * 130****1111
   */
  ani?: string;
  /**
   * @remarks
   * The call information.
   * 
   * @example
   * [{"dnis":"1","memberId":1133,"memberName":"Test member","priority":10}]
   */
  callInfos?: string;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 123456
   */
  departmentId?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Test task description
   */
  description?: string;
  /**
   * @remarks
   * The end date of the task execution. The maximum time span between the start time and the end time is 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-08-09
   */
  endDate?: string;
  /**
   * @remarks
   * The end time of the task execution.
   * 
   * This parameter is required.
   * 
   * @example
   * 23:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The extended attributes.
   * 
   * @example
   * {"remark":"Outbound call test"}
   */
  extAttrs?: string;
  /**
   * @remarks
   * The name of the skill group.
   * 
   * @example
   * Test skill group
   */
  groupName?: string;
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * 1
   */
  model?: number;
  /**
   * @remarks
   * The retry interval for unanswered calls. Unit: minutes.
   * 
   * > The default value is empty. If the number of retries is greater than 0, this parameter is required. The minimum time granularity is minutes, and the maximum value can be set to 48 hours.
   * 
   * @example
   * 10
   */
  retryInterval?: number;
  /**
   * @remarks
   * The number of retries for unanswered calls. Default value: **0**. Maximum value: **3**.
   * 
   * @example
   * 1
   */
  retryTime?: number;
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  skillGroup?: number;
  /**
   * @remarks
   * The start date of the task execution. The maximum time span between the start time and the end time is 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-08-08
   */
  startDate?: string;
  /**
   * @remarks
   * The start time of the task execution.
   * 
   * This parameter is required.
   * 
   * @example
   * 09:09:09
   */
  startTime?: string;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test task
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **1**: PREVIEW (preview)
   * - **2**: FORECAST (forecast)
   * - **3**: ROBOT (robot)
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      callInfos: 'CallInfos',
      departmentId: 'DepartmentId',
      description: 'Description',
      endDate: 'EndDate',
      endTime: 'EndTime',
      extAttrs: 'ExtAttrs',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      model: 'Model',
      retryInterval: 'RetryInterval',
      retryTime: 'RetryTime',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      callInfos: 'string',
      departmentId: 'number',
      description: 'string',
      endDate: 'string',
      endTime: 'string',
      extAttrs: 'string',
      groupName: 'string',
      instanceId: 'string',
      model: 'number',
      retryInterval: 'number',
      retryTime: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
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

