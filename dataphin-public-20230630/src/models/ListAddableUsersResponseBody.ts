// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddableUsersResponseBodyPageResultUserList extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * 123@xx.com
   */
  accountName?: string;
  /**
   * @remarks
   * The DingTalk ID.
   * 
   * @example
   * 123@dingding
   */
  dingNumber?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @remarks
   * The display name of the user without the status.
   * 
   * @example
   * xx
   */
  displayNameWithoutStatus?: string;
  /**
   * @remarks
   * Indicates whether the IP whitelist is enabled.
   * 
   * @example
   * true
   */
  enableWhiteIp?: string;
  /**
   * @remarks
   * The Lark chatbot.
   * 
   * @example
   * xx
   */
  feiShuRobot?: string;
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 1717343597000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the user was last modified.
   * 
   * @example
   * 1717343597000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123231
   */
  id?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * xx
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the parent Alibaba Cloud account to which the user belongs.
   * 
   * @example
   * 231313
   */
  parentId?: string;
  /**
   * @remarks
   * The real name of the user.
   * 
   * @example
   * xx
   */
  realName?: string;
  /**
   * @remarks
   * The source ID of the user.
   * 
   * @example
   * 123@xx.com
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the user.
   * 
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @remarks
   * The WeCom chatbot.
   * 
   * @example
   * xx
   */
  weChatRobot?: string;
  /**
   * @remarks
   * The IP whitelist.
   * 
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
   * @remarks
   * The total number of records.
   * 
   * @example
   * 66
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of users.
   */
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
  pageResult?: ListAddableUsersResponseBodyPageResult;
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

