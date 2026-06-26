// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoleAssignmentsResponseBodyAssignments extends $dara.Model {
  createTime?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  roleId?: string;
  roleName?: string;
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
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

