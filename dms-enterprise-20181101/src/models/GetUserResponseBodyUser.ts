// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserResponseBodyUserRoleIdList } from "./GetUserResponseBodyUserRoleIdList";
import { GetUserResponseBodyUserRoleNameList } from "./GetUserResponseBodyUserRoleNameList";


export class GetUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The number of queries that are performed on the current day.
   * 
   * @example
   * 3
   */
  curExecuteCount?: number;
  /**
   * @remarks
   * The number of rows that are queried on the current day.
   * 
   * @example
   * 28
   */
  curResultCount?: number;
  /**
   * @remarks
   * The DingTalk chatbot URL that is used to receive notifications.
   * 
   * > 
   * 
   * *   The system returns this parameter if the user has set a DingTalk chatbot URL in the console. To set a DingTalk chatbot URL in the console, move the pointer over the profile picture in the upper-right corner and click the Edit icon next to **Notice**.
   * 
   * *   The system does not return this parameter if the user has not set a DingTalk chatbot URL.
   * 
   * @example
   * https://XXX.dingtalk.com/robot/send?access_token=***
   */
  dingRobot?: string;
  /**
   * @remarks
   * The email address that is used to receive notifications.
   * 
   * > 
   * 
   * *   The system returns this parameter if the user has set an email address in the console. To set an email address in the console, move the pointer over the profile picture in the upper-right corner and click the Edit icon next to **Notice**.
   * 
   * *   The system does not return this parameter if the user has not set an email address.
   * 
   * @example
   * Uesr_email
   */
  email?: string;
  /**
   * @remarks
   * The last point in time when the user logged on to the console.
   * 
   * @example
   * 2021-11-08 11:26:21
   */
  lastLoginTime?: string;
  /**
   * @remarks
   * The maximum number of queries that can be performed on the current day.
   * 
   * @example
   * 2000
   */
  maxExecuteCount?: number;
  /**
   * @remarks
   * The maximum number of rows that can be queried on the current day.
   * 
   * @example
   * 10000
   */
  maxResultCount?: number;
  /**
   * @remarks
   * The mobile number of the user.
   * 
   * > 
   * 
   * *   The system returns this parameter if the user has set a mobile phone number in the console. To set a mobile phone number in the console, move the pointer over the profile picture in the upper-right corner and click the Edit icon next to **Notice**.
   * 
   * *   The system does not return this parameter if the user has not set a mobile phone number.
   * 
   * @example
   * 1389223****
   */
  mobile?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * User_NickName
   */
  nickName?: string;
  /**
   * @remarks
   * The notification method. The system returns one or more values. Valid values:
   * 
   * *   **SMS**: text message
   * *   **EMAIL**: email.
   * *   **DINGDING**: DingTalk.
   * *   **DINGROBOT**: DingTalk chatbot.
   * *   **WEBHOOK**: webhook.
   * 
   * @example
   * EMAIL
   */
  notificationMode?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account of the user.
   * 
   * > An Alibaba Cloud account can contain one or more RAM users.
   * 
   * @example
   * 140692647406****
   */
  parentUid?: number;
  /**
   * @remarks
   * The list of role IDs.
   */
  roleIdList?: GetUserResponseBodyUserRoleIdList;
  /**
   * @remarks
   * The list of role names.
   */
  roleNameList?: GetUserResponseBodyUserRoleNameList;
  /**
   * @remarks
   * The signature method that is used to secure connections when a webhook URL is used. Valid values:
   * 
   * *   **NONE**: no signature.
   * *   **HMAC_SHA1**: HMAC_SHA1.
   * 
   * @example
   * NONE
   */
  signatureMethod?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   **NORMAL**: The user is normal.
   * *   **DISABLE**: The user is disabled.
   * *   **DELETE**: The user is deleted.
   * 
   * @example
   * NORMAL
   */
  state?: string;
  /**
   * @remarks
   * The UID of the user.
   * 
   * @example
   * 22275482072787****
   */
  uid?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 51****
   */
  userId?: string;
  /**
   * @remarks
   * The webhook URL that is used to receive notifications.
   * 
   * > 
   * 
   * *   If the user has set a webhook URL, DMS sends notifications to the specified URL.
   * 
   * *   The system does not return this parameter if the user has not set a webhook URL.
   * 
   * @example
   * http://dms-XXX.aliyun.com:8***
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      curExecuteCount: 'CurExecuteCount',
      curResultCount: 'CurResultCount',
      dingRobot: 'DingRobot',
      email: 'Email',
      lastLoginTime: 'LastLoginTime',
      maxExecuteCount: 'MaxExecuteCount',
      maxResultCount: 'MaxResultCount',
      mobile: 'Mobile',
      nickName: 'NickName',
      notificationMode: 'NotificationMode',
      parentUid: 'ParentUid',
      roleIdList: 'RoleIdList',
      roleNameList: 'RoleNameList',
      signatureMethod: 'SignatureMethod',
      state: 'State',
      uid: 'Uid',
      userId: 'UserId',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curExecuteCount: 'number',
      curResultCount: 'number',
      dingRobot: 'string',
      email: 'string',
      lastLoginTime: 'string',
      maxExecuteCount: 'number',
      maxResultCount: 'number',
      mobile: 'string',
      nickName: 'string',
      notificationMode: 'string',
      parentUid: 'number',
      roleIdList: GetUserResponseBodyUserRoleIdList,
      roleNameList: GetUserResponseBodyUserRoleNameList,
      signatureMethod: 'string',
      state: 'string',
      uid: 'string',
      userId: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.roleIdList && typeof (this.roleIdList as any).validate === 'function') {
      (this.roleIdList as any).validate();
    }
    if(this.roleNameList && typeof (this.roleNameList as any).validate === 'function') {
      (this.roleNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

