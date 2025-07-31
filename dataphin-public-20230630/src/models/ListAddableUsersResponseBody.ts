// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddableUsersResponseBodyPageResultUserList extends $dara.Model {
  /**
   * @example
   * 123@xx.com
   */
  accountName?: string;
  /**
   * @example
   * 123@dingding
   */
  dingNumber?: string;
  /**
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @example
   * xx
   */
  displayNameWithoutStatus?: string;
  /**
   * @example
   * true
   */
  enableWhiteIp?: string;
  /**
   * @example
   * xx
   */
  feiShuRobot?: string;
  /**
   * @example
   * 1717343597000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1717343597000
   */
  gmtModified?: number;
  /**
   * @example
   * 123231
   */
  id?: string;
  /**
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  /**
   * @example
   * xx
   */
  nickName?: string;
  /**
   * @example
   * 231313
   */
  parentId?: string;
  /**
   * @example
   * xx
   */
  realName?: string;
  /**
   * @example
   * 123@xx.com
   */
  sourceId?: string;
  /**
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @example
   * xx
   */
  weChatRobot?: string;
  /**
   * @example
   * *
   */
  whiteIp?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dingNumber: 'DingNumber',
      displayName: 'DisplayName',
      displayNameWithoutStatus: 'DisplayNameWithoutStatus',
      enableWhiteIp: 'EnableWhiteIp',
      feiShuRobot: 'FeiShuRobot',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      name: 'Name',
      nickName: 'NickName',
      parentId: 'ParentId',
      realName: 'RealName',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      weChatRobot: 'WeChatRobot',
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dingNumber: 'string',
      displayName: 'string',
      displayNameWithoutStatus: 'string',
      enableWhiteIp: 'string',
      feiShuRobot: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      mail: 'string',
      mobilePhone: 'string',
      name: 'string',
      nickName: 'string',
      parentId: 'string',
      realName: 'string',
      sourceId: 'string',
      sourceType: 'string',
      weChatRobot: 'string',
      whiteIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersResponseBodyPageResult extends $dara.Model {
  /**
   * @example
   * 66
   */
  totalCount?: number;
  userList?: ListAddableUsersResponseBodyPageResultUserList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': ListAddableUsersResponseBodyPageResultUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersResponseBody extends $dara.Model {
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
  pageResult?: ListAddableUsersResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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
      pageResult: ListAddableUsersResponseBodyPageResult,
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

