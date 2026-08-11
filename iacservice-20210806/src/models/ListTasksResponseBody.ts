// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksResponseBodyTasksGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-4267dcfbf1b6d1e0652bfbbe995
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-433aead7560571cf1b2bfbbe92b
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * abc
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupName: 'groupName',
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasksTags extends $dara.Model {
  /**
   * @remarks
   * The task tag key.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The tag key of the template.
   * 
   * @example
   * name
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the task.
   * 
   * @example
   * iac-demo
   */
  tagValue?: string;
  /**
   * @remarks
   * The task tag value.
   * 
   * @example
   * iac-demo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is automatically executed.
   * 
   * @example
   * false
   */
  autoApply?: boolean;
  /**
   * @remarks
   * The time when the task was created, in UTC in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-11T15:09:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID of the current task.
   * 
   * @example
   * job-123asd
   */
  currentJobId?: string;
  /**
   * @remarks
   * The status of the current job.
   * 
   * @example
   * Pending
   */
  currentJobStatus?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Deletion protection is automatically enabled when managed resources exist.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The task group information.
   */
  groupInfo?: ListTasksResponseBodyTasksGroupInfo;
  /**
   * @remarks
   * The latest version number of the template.
   * 
   * @example
   * v3
   */
  latestModuleVersion?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * mod-518855d9a058c331e9c60bc0ce
   */
  moduleId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * mod-name
   */
  moduleName?: string;
  /**
   * @remarks
   * The template version.
   * 
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * TaskName
   */
  name?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Available: The task is in an available state with no job running.
   * - Running: The task is in a running state with a current job in progress.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of task tags.
   */
  tags?: ListTasksResponseBodyTasksTags[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-1525e992f1b621b0ca51647876e
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      createTime: 'createTime',
      currentJobId: 'currentJobId',
      currentJobStatus: 'currentJobStatus',
      deletionProtection: 'deletionProtection',
      groupInfo: 'groupInfo',
      latestModuleVersion: 'latestModuleVersion',
      moduleId: 'moduleId',
      moduleName: 'moduleName',
      moduleVersion: 'moduleVersion',
      name: 'name',
      status: 'status',
      tags: 'tags',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      createTime: 'string',
      currentJobId: 'string',
      currentJobStatus: 'string',
      deletionProtection: 'boolean',
      groupInfo: ListTasksResponseBodyTasksGroupInfo,
      latestModuleVersion: 'string',
      moduleId: 'string',
      moduleName: 'string',
      moduleVersion: 'string',
      name: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTasksResponseBodyTasksTags },
      taskId: 'string',
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results returned per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98610149-488B-5E48-B981-8D4CE1AF77CD
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   */
  tasks?: ListTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      tasks: 'tasks',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

