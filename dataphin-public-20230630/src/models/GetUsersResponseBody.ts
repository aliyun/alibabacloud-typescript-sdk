// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUsersResponseBodyUserList extends $dara.Model {
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
   * The DingTalk number.
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
   * xx测试
   */
  displayName?: string;
  /**
   * @remarks
   * The display name of the user without status.
   * 
   * @example
   * xx测试
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
   * The creation time.
   * 
   * @example
   * 1717343597000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
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
   * 1233121
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
   * 1388888888
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * xx测试
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the primary account to which the user belongs.
   * 
   * @example
   * 231231
   */
  parentId?: string;
  /**
   * @remarks
   * The real name of the user.
   * 
   * @example
   * xx测试
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
   * ALIYUN
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

export class GetUsersResponseBody extends $dara.Model {
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
  /**
   * @remarks
   * The list of users.
   */
  userList?: GetUsersResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userList: { 'type': 'array', 'itemType': GetUsersResponseBodyUserList },
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

