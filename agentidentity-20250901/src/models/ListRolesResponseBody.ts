// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyRoles extends $dara.Model {
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  createTime?: string;
  description?: string;
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
   * Manual
   */
  type?: string;
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      roleId: 'RoleId',
      roleName: 'RoleName',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      roleId: 'string',
      roleName: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * TGlzdFJvbGVzOjoyMA==
   */
  nextToken?: string;
  /**
   * @example
   * AABD6E03-4B3A-5687-88FF-72232670ED0C
   */
  requestId?: string;
  roles?: ListRolesResponseBodyRoles[];
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      roles: 'Roles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      roles: { 'type': 'array', 'itemType': ListRolesResponseBodyRoles },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

