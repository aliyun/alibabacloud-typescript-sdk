// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyProjects extends $dara.Model {
  /**
   * @example
   * 0
   */
  appCount?: number;
  /**
   * @example
   * 1
   */
  databaseCount?: number;
  /**
   * @example
   * comment
   */
  description?: string;
  /**
   * @example
   * 21
   */
  hostCount?: number;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  memberIds?: string[];
  /**
   * @example
   * Project_name
   */
  name?: string;
  /**
   * @example
   * 3
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      databaseCount: 'DatabaseCount',
      description: 'Description',
      hostCount: 'HostCount',
      isDefault: 'IsDefault',
      memberIds: 'MemberIds',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      databaseCount: 'number',
      description: 'string',
      hostCount: 'number',
      isDefault: 'boolean',
      memberIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memberIds)) {
      $dara.Model.validateArray(this.memberIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****
   */
  nextToken?: string;
  projects?: ListProjectsResponseBodyProjects[];
  /**
   * @example
   * 81500666-d7f5-4143-8329-0223cc738105
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projects: 'Projects',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
      requestId: 'string',
      totalCount: 'number',
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

