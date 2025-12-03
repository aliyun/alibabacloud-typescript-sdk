// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemRecordResponseBodyWorkitemTimeRecordUser extends $dara.Model {
  /**
   * @example
   * 1316458xxxxx41068
   */
  account?: string;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112m7150e256dbba0d6456bafbb65c81f90d/w/200/h/200
   */
  avatar?: string;
  /**
   * @example
   * xx12322
   */
  dingTalkId?: string;
  displayName?: string;
  displayNickName?: string;
  displayRealName?: string;
  /**
   * @example
   * xxx@xxx.com
   */
  email?: string;
  gender?: string;
  /**
   * @example
   * deafe5f33xxxxx6a259d8dafd
   */
  identifier?: string;
  /**
   * @example
   * true/false
   */
  isDisabled?: boolean;
  mobile?: string;
  /**
   * @example
   * wangwu
   */
  nameEn?: string;
  nickName?: string;
  /**
   * @example
   * wangwu
   */
  nickNamePinyin?: string;
  realName?: string;
  /**
   * @example
   * wangwu
   */
  realNamePinyin?: string;
  stamp?: string;
  /**
   * @example
   * 1e9903d8b3f1xxxxxf9286ef5
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
      email: 'email',
      gender: 'gender',
      identifier: 'identifier',
      isDisabled: 'isDisabled',
      mobile: 'mobile',
      nameEn: 'nameEn',
      nickName: 'nickName',
      nickNamePinyin: 'nickNamePinyin',
      realName: 'realName',
      realNamePinyin: 'realNamePinyin',
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
      email: 'string',
      gender: 'string',
      identifier: 'string',
      isDisabled: 'boolean',
      mobile: 'string',
      nameEn: 'string',
      nickName: 'string',
      nickNamePinyin: 'string',
      realName: 'string',
      realNamePinyin: 'string',
      stamp: 'string',
      tbRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkitemRecordResponseBodyWorkitemTime extends $dara.Model {
  /**
   * @example
   * 12
   */
  actualTime?: number;
  description?: string;
  /**
   * @example
   * 1667205617089
   */
  gmtEnd?: number;
  /**
   * @example
   * 1667205617061
   */
  gmtStart?: number;
  /**
   * @example
   * deafe5f33xxxxx6a259d8dafd
   */
  identifier?: string;
  recordUser?: CreateWorkitemRecordResponseBodyWorkitemTimeRecordUser;
  /**
   * @example
   * deafe5f33xxxxx6a259d8dafd
   */
  type?: string;
  /**
   * @example
   * 9144ef6b72d8exxxxx9e61a4d0
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'actualTime',
      description: 'description',
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      identifier: 'identifier',
      recordUser: 'recordUser',
      type: 'type',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      description: 'string',
      gmtEnd: 'number',
      gmtStart: 'number',
      identifier: 'string',
      recordUser: CreateWorkitemRecordResponseBodyWorkitemTimeRecordUser,
      type: 'string',
      workitemIdentifier: 'string',
    };
  }

  validate() {
    if(this.recordUser && typeof (this.recordUser as any).validate === 'function') {
      (this.recordUser as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkitemRecordResponseBody extends $dara.Model {
  workitemTime?: CreateWorkitemRecordResponseBodyWorkitemTime;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
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
      workitemTime: 'WorkitemTime',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workitemTime: CreateWorkitemRecordResponseBodyWorkitemTime,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.workitemTime && typeof (this.workitemTime as any).validate === 'function') {
      (this.workitemTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

