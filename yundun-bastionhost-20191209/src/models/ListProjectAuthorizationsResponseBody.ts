// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectAuthorizationsResponseBodyProjectAuthorizations extends $dara.Model {
  /**
   * @example
   * 1
   */
  authorizationId?: number;
  /**
   * @example
   * comment
   */
  description?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * 1
   */
  scopeType?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      description: 'Description',
      name: 'Name',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      description: 'string',
      name: 'string',
      scopeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAuthorizationsResponseBody extends $dara.Model {
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
  projectAuthorizations?: ListProjectAuthorizationsResponseBodyProjectAuthorizations[];
  /**
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectAuthorizations: 'ProjectAuthorizations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectAuthorizations: { 'type': 'array', 'itemType': ListProjectAuthorizationsResponseBodyProjectAuthorizations },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectAuthorizations)) {
      $dara.Model.validateArray(this.projectAuthorizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

