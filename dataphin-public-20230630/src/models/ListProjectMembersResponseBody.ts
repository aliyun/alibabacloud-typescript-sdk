// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersResponseBodyPageResultProjectMemberList extends $dara.Model {
  /**
   * @example
   * 1702692675000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1721720955000
   */
  gmtModified?: string;
  /**
   * @example
   * 12356
   */
  id?: number;
  /**
   * @example
   * 101111
   */
  lastModifier?: string;
  /**
   * @example
   * test
   */
  lastModifierName?: string;
  roleIdList?: number[];
  /**
   * @example
   * 101111
   */
  userId?: string;
  /**
   * @example
   * 张三
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
  projectMemberList?: ListProjectMembersResponseBodyPageResultProjectMemberList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListProjectMembersResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

