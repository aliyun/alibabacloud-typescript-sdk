// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailRequest extends $dara.Model {
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
   * The list of department IDs.
   * 
   * @example
   * 123
   */
  departmentIdList?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 0571456****
   */
  dnis?: string;
  /**
   * @remarks
   * The call end reasons.
   * 
   * @example
   * 110
   */
  endReasonList?: string;
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview) by choosing Instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the outbound task.
   * 
   * @example
   * 120001
   */
  outboundTaskId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **1**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of priorities. Valid values: **1** to **100**. A larger value indicates a higher priority.
   * 
   * @example
   * [1,2,3,5]
   */
  priorityList?: string;
  /**
   * @remarks
   * The ID of the agent.
   * 
   * @example
   * 1212
   */
  servicerId?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * John Doe
   */
  servicerName?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * @example
   * 1004849
   */
  sid?: string;
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * 123456
   */
  skillGroup?: string;
  /**
   * @remarks
   * The list of task statuses. Valid values:
   * 
   * - **1**: Not started.
   * - **2**: In progress.
   * - **3**: Paused.
   * - **4**: Expired.
   * - **5**: Completed.
   * - **6**: Deleted.
   * 
   * @example
   * [1,2,3,5]
   */
  statusList?: string;
  /**
   * @remarks
   * The ID of the task detail.
   * 
   * @example
   * 123
   */
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

