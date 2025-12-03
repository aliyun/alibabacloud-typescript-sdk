// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemEstimateResponseBodyWorkitemTimeEstimateRecordUser extends $dara.Model {
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
   * fdsad12xxx11
   */
  dingTalkId?: string;
  displayName?: string;
  /**
   * @example
   * wangwu
   */
  displayNickName?: string;
  /**
   * @example
   * wangwu
   */
  displayRealName?: string;
  /**
   * @example
   * xxxxxxcc@xxx.com
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
   * 9144ef6b72d8exxxxx9e61a4d0
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

export class CreateWorkitemEstimateResponseBodyWorkitemTimeEstimate extends $dara.Model {
  description?: string;
  /**
   * @example
   * deafe5f33xxxxx6a259d8dafd
   */
  identifier?: string;
  recordUser?: CreateWorkitemEstimateResponseBodyWorkitemTimeEstimateRecordUser;
  /**
   * @example
   * 11
   */
  spentTime?: number;
  /**
   * @example
   * 9144ef6b72d8exxxxx9e61a4d0
   */
  type?: string;
  /**
   * @example
   * 1e9903d8b3f1xxxxxf9286ef5
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      identifier: 'identifier',
      recordUser: 'recordUser',
      spentTime: 'spentTime',
      type: 'type',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      identifier: 'string',
      recordUser: CreateWorkitemEstimateResponseBodyWorkitemTimeEstimateRecordUser,
      spentTime: 'number',
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

export class CreateWorkitemEstimateResponseBody extends $dara.Model {
  workitemTimeEstimate?: CreateWorkitemEstimateResponseBodyWorkitemTimeEstimate;
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      workitemTimeEstimate: 'WorkitemTimeEstimate',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workitemTimeEstimate: CreateWorkitemEstimateResponseBodyWorkitemTimeEstimate,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.workitemTimeEstimate && typeof (this.workitemTimeEstimate as any).validate === 'function') {
      (this.workitemTimeEstimate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

