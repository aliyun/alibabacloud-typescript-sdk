// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUsersResponseBodyUserList extends $dara.Model {
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
  displayName?: string;
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
   * 1233121
   */
  id?: string;
  /**
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @example
   * 1388888888
   */
  mobilePhone?: string;
  name?: string;
  nickName?: string;
  /**
   * @example
   * 231231
   */
  parentId?: string;
  realName?: string;
  /**
   * @example
   * 123@xx.com
   */
  sourceId?: string;
  /**
   * @example
   * ALIYUN
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

export class GetUsersResponseBody extends $dara.Model {
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

