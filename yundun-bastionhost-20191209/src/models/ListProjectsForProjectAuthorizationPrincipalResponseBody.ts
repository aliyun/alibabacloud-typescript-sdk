// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsForProjectAuthorizationPrincipalResponseBodyProjects extends $dara.Model {
  /**
   * @remarks
   * The description of the project.
   * 
   * @example
   * base
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the project is the default project. Valid values:
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 2
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      isDefault: 'IsDefault',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isDefault: 'boolean',
      name: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsForProjectAuthorizationPrincipalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per page. If a valid MaxResults request parameter is passed, the specified value is returned. Otherwise, the default value is returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next request, used for paging. You can specify this token in the NextToken request parameter for the next paged query. If this field is empty in the response, no more data is available.
   * 
   * @example
   * 4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of projects.
   */
  projects?: ListProjectsForProjectAuthorizationPrincipalResponseBodyProjects[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried projects.
   * 
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
      projects: { 'type': 'array', 'itemType': ListProjectsForProjectAuthorizationPrincipalResponseBodyProjects },
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

