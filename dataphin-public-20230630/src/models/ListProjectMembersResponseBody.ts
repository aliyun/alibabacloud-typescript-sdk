// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersResponseBodyPageResultProjectMemberList extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1702692675000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modified timestamp.
   * 
   * @example
   * 1721720955000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 12356
   */
  id?: number;
  /**
   * @remarks
   * The ID of the user who last modified the record.
   * 
   * @example
   * 101111
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the user who last modified the record.
   * 
   * @example
   * 测试用户
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The roles.
   */
  roleIdList?: number[];
  /**
   * @remarks
   * The user ID of the member.
   * 
   * @example
   * 101111
   */
  userId?: string;
  /**
   * @remarks
   * The username of the member.
   * 
   * @example
   * 测试用户
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      roleIdList: 'RoleIdList',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of project members.
   */
  projectMemberList?: ListProjectMembersResponseBodyPageResultProjectMemberList[];
  /**
   * @remarks
   * The total number of project members.
   * 
   * @example
   * 101
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projectMemberList: 'ProjectMemberList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectMemberList: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyPageResultProjectMemberList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectMemberList)) {
      $dara.Model.validateArray(this.projectMemberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paging query result.
   */
  pageResult?: ListProjectMembersResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListProjectMembersResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

