// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationMembersResponseBodyMembersIdentities extends $dara.Model {
  /**
   * @example
   * 1236666
   */
  externUid?: string;
  /**
   * @example
   * Dingtalk
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      externUid: 'externUid',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUid: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBodyMembers extends $dara.Model {
  /**
   * @example
   * 123456677888
   */
  accountId?: string;
  /**
   * @example
   * 1631845101798
   */
  birthday?: number;
  deptLists?: string[];
  /**
   * @example
   * (敏感字段，暂不返回)
   */
  email?: string;
  /**
   * @example
   * 1631845101798
   */
  hiredDate?: number;
  identities?: ListOrganizationMembersResponseBodyMembersIdentities;
  /**
   * @example
   * 373***
   */
  jobNumber?: string;
  /**
   * @example
   * 1631845101798
   */
  joinTime?: number;
  /**
   * @example
   * 1631845101798
   */
  lastVisitTime?: number;
  /**
   * @example
   * (敏感字段，暂不返回)
   */
  mobile?: string;
  organizationMemberName?: string;
  /**
   * @example
   * 8fc0c9ff039711dd64acd000
   */
  organizationRoleId?: string;
  organizationRoleName?: string;
  /**
   * @example
   * normal
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      birthday: 'birthday',
      deptLists: 'deptLists',
      email: 'email',
      hiredDate: 'hiredDate',
      identities: 'identities',
      jobNumber: 'jobNumber',
      joinTime: 'joinTime',
      lastVisitTime: 'lastVisitTime',
      mobile: 'mobile',
      organizationMemberName: 'organizationMemberName',
      organizationRoleId: 'organizationRoleId',
      organizationRoleName: 'organizationRoleName',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      birthday: 'number',
      deptLists: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      hiredDate: 'number',
      identities: ListOrganizationMembersResponseBodyMembersIdentities,
      jobNumber: 'string',
      joinTime: 'number',
      lastVisitTime: 'number',
      mobile: 'string',
      organizationMemberName: 'string',
      organizationRoleId: 'string',
      organizationRoleName: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deptLists)) {
      $dara.Model.validateArray(this.deptLists);
    }
    if(this.identities && typeof (this.identities as any).validate === 'function') {
      (this.identities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * error info
   */
  errorMessage?: string;
  members?: ListOrganizationMembersResponseBodyMembers[];
  /**
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @example
   * FC93CE1A-8D7A-13A9-8306-7465DE2E5C0F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      members: 'members',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      members: { 'type': 'array', 'itemType': ListOrganizationMembersResponseBodyMembers },
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

