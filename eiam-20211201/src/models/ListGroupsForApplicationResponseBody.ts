// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForApplicationResponseBodyGroupsApplicationRoles extends $dara.Model {
  /**
   * @remarks
   * 应用角色标识。
   * 
   * @example
   * app_role_mkv7rgt4ds8d8v0qtzev2mxxxx
   */
  applicationRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationRoleId: 'ApplicationRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * 应用角色列表。
   */
  applicationRoles?: ListGroupsForApplicationResponseBodyGroupsApplicationRoles[];
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationRoles: 'ApplicationRoles',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRoles: { 'type': 'array', 'itemType': ListGroupsForApplicationResponseBodyGroupsApplicationRoles },
      groupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationRoles)) {
      $dara.Model.validateArray(this.applicationRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group IDs.
   */
  groups?: ListGroupsForApplicationResponseBodyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsForApplicationResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
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

