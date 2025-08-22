// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksResponseBodyTasksGroupInfo extends $dara.Model {
  /**
   * @example
   * g-4267dcfbf1b6d1e0652bfbbe995
   */
  groupId?: string;
  /**
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @example
   * p-433aead7560571cf1b2bfbbe92b
   */
  projectId?: string;
  /**
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
  key?: string;
  tagKey?: string;
  tagValue?: string;
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
  autoApply?: boolean;
  /**
   * @example
   * 2022-07-11T15:09:53Z
   */
  createTime?: string;
  /**
   * @example
   * job-123asd
   */
  currentJobId?: string;
  /**
   * @example
   * Pending
   */
  currentJobStatus?: string;
  deletionProtection?: boolean;
  groupInfo?: ListTasksResponseBodyTasksGroupInfo;
  latestModuleVersion?: string;
  /**
   * @example
   * mod-518855d9a058c331e9c60bc0ce
   */
  moduleId?: string;
  moduleName?: string;
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: ListTasksResponseBodyTasksTags[];
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 98610149-488B-5E48-B981-8D4CE1AF77CD
   */
  requestId?: string;
  tasks?: ListTasksResponseBodyTasks[];
  /**
   * @example
   * 5
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

