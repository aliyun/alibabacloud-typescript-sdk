// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupResponseBodyGroupsTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListGroupResponseBodyGroups extends $dara.Model {
  /**
   * @example
   * 2022-09-14T07:19:13Z
   */
  createTime?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * g-148e7853433574fffe9fec72ed9b73
   */
  groupId?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * 1
   */
  moduleCnt?: number;
  /**
   * @example
   * 1
   */
  name?: string;
  /**
   * @example
   * p-4267dcfbf1b6d126edcadf0e949
   */
  projectId?: string;
  /**
   * @example
   * 1
   */
  sceneTestingTaskCnt?: number;
  tags?: ListGroupResponseBodyGroupsTags[];
  /**
   * @example
   * 3
   */
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      groupId: 'groupId',
      isDefault: 'isDefault',
      moduleCnt: 'moduleCnt',
      name: 'name',
      projectId: 'projectId',
      sceneTestingTaskCnt: 'sceneTestingTaskCnt',
      tags: 'tags',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      isDefault: 'boolean',
      moduleCnt: 'number',
      name: 'string',
      projectId: 'string',
      sceneTestingTaskCnt: 'number',
      tags: { 'type': 'array', 'itemType': ListGroupResponseBodyGroupsTags },
      taskCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  count?: number;
  groups?: ListGroupResponseBodyGroups[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      groups: 'groups',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groups: { 'type': 'array', 'itemType': ListGroupResponseBodyGroups },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

