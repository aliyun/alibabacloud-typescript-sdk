// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoleAssignmentsResponseBodyAssignments extends $dara.Model {
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * user_xxxxxxxxxxxxxxxxxxxx
   */
  principalId?: string;
  /**
   * @example
   * alice
   */
  principalName?: string;
  /**
   * @example
   * User
   */
  principalType?: string;
  /**
   * @example
   * role_xxxxxxxxxxxxxxxxxxxx
   */
  roleId?: string;
  /**
   * @example
   * Analyst
   */
  roleName?: string;
  /**
   * @example
   * up_xxxxxxxxxxxxxxxxxxxx
   */
  userPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userPoolId: 'UserPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      roleId: 'string',
      roleName: 'string',
      userPoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleAssignmentsResponseBody extends $dara.Model {
  assignments?: ListRoleAssignmentsResponseBodyAssignments[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * TGlzdEFzc2lnbm1lbnRzOjoyMA==
   */
  nextToken?: string;
  /**
   * @example
   * AABD6E03-4B3A-5687-88FF-72232670ED0C
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assignments: 'Assignments',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignments: { 'type': 'array', 'itemType': ListRoleAssignmentsResponseBodyAssignments },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assignments)) {
      $dara.Model.validateArray(this.assignments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

