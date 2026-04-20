// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchWorkspaceRolesResponseBodyData extends $dara.Model {
  /**
   * @example
   * MANAGER
   */
  roleId?: number;
  /**
   * @example
   * SLBLogDefaultRole
   */
  roleName?: string;
  /**
   * @example
   * INNER
   */
  roleSource?: string;
  /**
   * @example
   * inner
   */
  roleSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      roleName: 'RoleName',
      roleSource: 'RoleSource',
      roleSourceName: 'RoleSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      roleName: 'string',
      roleSource: 'string',
      roleSourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkspaceRolesResponseBody extends $dara.Model {
  data?: SearchWorkspaceRolesResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * NesLoKLEdIZrKhDT7I2gS****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SearchWorkspaceRolesResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

