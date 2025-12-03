// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersResponseBodyMembersDivision extends $dara.Model {
  /**
   * @example
   * 1345xxxxxxx947xxxx
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyMembersOrganizationUserInfo extends $dara.Model {
  /**
   * @example
   * 5e7xxxxb3cd3711dd6xxx2c
   */
  organizationIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      organizationIdentifier: 'organizationIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyMembers extends $dara.Model {
  /**
   * @example
   * null
   */
  account?: string;
  /**
   * @example
   * https://xxxxxx.png
   */
  avatar?: string;
  /**
   * @example
   * null
   */
  dingTalkId?: string;
  /**
   * @example
   * 名称
   */
  displayName?: string;
  /**
   * @example
   * mingcheng
   */
  displayNickName?: string;
  /**
   * @example
   * 名称
   */
  displayRealName?: string;
  division?: ListProjectMembersResponseBodyMembersDivision;
  /**
   * @example
   * accountsxxxx@mail.com
   */
  email?: string;
  /**
   * @example
   * null
   */
  gender?: string;
  /**
   * @example
   * 19xxxx31947xxxx
   */
  identifier?: string;
  /**
   * @example
   * 135xxxxxxxxx
   */
  mobile?: string;
  /**
   * @example
   * name
   */
  nameEn?: string;
  /**
   * @example
   * 昵称
   */
  nickName?: string;
  /**
   * @example
   * nicheng
   */
  nickNamePinyin?: string;
  organizationUserInfo?: ListProjectMembersResponseBodyMembersOrganizationUserInfo;
  /**
   * @example
   * xxx
   */
  realName?: string;
  /**
   * @example
   * xxx
   */
  realNamePinyin?: string;
  /**
   * @remarks
   * 角色名称
   */
  roleName?: string;
  /**
   * @example
   * User
   */
  stamp?: string;
  /**
   * @example
   * null
   */
  tbRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      avatar: 'avatar',
      dingTalkId: 'dingTalkId',
      displayName: 'displayName',
      displayNickName: 'displayNickName',
      displayRealName: 'displayRealName',
      division: 'division',
      email: 'email',
      gender: 'gender',
      identifier: 'identifier',
      mobile: 'mobile',
      nameEn: 'nameEn',
      nickName: 'nickName',
      nickNamePinyin: 'nickNamePinyin',
      organizationUserInfo: 'organizationUserInfo',
      realName: 'realName',
      realNamePinyin: 'realNamePinyin',
      roleName: 'roleName',
      stamp: 'stamp',
      tbRoleId: 'tbRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      avatar: 'string',
      dingTalkId: 'string',
      displayName: 'string',
      displayNickName: 'string',
      displayRealName: 'string',
      division: ListProjectMembersResponseBodyMembersDivision,
      email: 'string',
      gender: 'string',
      identifier: 'string',
      mobile: 'string',
      nameEn: 'string',
      nickName: 'string',
      nickNamePinyin: 'string',
      organizationUserInfo: ListProjectMembersResponseBodyMembersOrganizationUserInfo,
      realName: 'string',
      realNamePinyin: 'string',
      roleName: 'string',
      stamp: 'string',
      tbRoleId: 'string',
    };
  }

  validate() {
    if(this.division && typeof (this.division as any).validate === 'function') {
      (this.division as any).validate();
    }
    if(this.organizationUserInfo && typeof (this.organizationUserInfo as any).validate === 'function') {
      (this.organizationUserInfo as any).validate();
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
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  members?: ListProjectMembersResponseBodyMembers[];
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      members: 'members',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      members: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyMembers },
      requestId: 'string',
      success: 'boolean',
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

