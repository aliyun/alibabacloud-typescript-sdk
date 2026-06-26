// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoleAssignmentsRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  principalName?: string;
  principalType?: string;
  roleName?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      roleName: 'RoleName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      principalName: 'string',
      principalType: 'string',
      roleName: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

