// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ani?: string;
  callInfos?: string;
  departmentId?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  extAttrs?: string;
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  model?: number;
  retryInterval?: number;
  retryTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  skillGroup?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
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

