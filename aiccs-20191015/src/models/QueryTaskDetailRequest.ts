// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailRequest extends $dara.Model {
  ani?: string;
  currentPage?: number;
  departmentIdList?: string;
  dnis?: string;
  endReasonList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  outboundTaskId?: string;
  pageSize?: number;
  priorityList?: string;
  servicerId?: string;
  servicerName?: string;
  sid?: string;
  skillGroup?: string;
  statusList?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      currentPage: 'CurrentPage',
      departmentIdList: 'DepartmentIdList',
      dnis: 'Dnis',
      endReasonList: 'EndReasonList',
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      sid: 'Sid',
      skillGroup: 'SkillGroup',
      statusList: 'StatusList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      currentPage: 'number',
      departmentIdList: 'string',
      dnis: 'string',
      endReasonList: 'string',
      instanceId: 'string',
      outboundTaskId: 'string',
      pageSize: 'number',
      priorityList: 'string',
      servicerId: 'string',
      servicerName: 'string',
      sid: 'string',
      skillGroup: 'string',
      statusList: 'string',
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

