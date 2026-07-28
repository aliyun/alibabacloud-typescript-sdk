// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectResponseBodyProjectsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
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

export class ListProjectResponseBodyProjects extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-05-10T10:08:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * 1234
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-148e7853433574fffe9fec72ed9b72
   */
  projectId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListProjectResponseBodyProjectsTags[];
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 2
   */
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      projectId: 'projectId',
      tags: 'tags',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      projectId: 'string',
      tags: { 'type': 'array', 'itemType': ListProjectResponseBodyProjectsTags },
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

export class ListProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of projects.
   */
  projects?: ListProjectResponseBodyProjects[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 136B3926-DD90-5DB2-96EC-8BAD6407D1C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projects: 'projects',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectResponseBodyProjects },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

