// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUsersResponseBodyUserListUserRoleIdList } from "./ListUsersResponseBodyUserListUserRoleIdList";
import { ListUsersResponseBodyUserListUserRoleNameList } from "./ListUsersResponseBodyUserListUserRoleNameList";


export class ListUsersResponseBodyUserListUser extends $dara.Model {
  /**
   * @remarks
   * The number of queries that were performed on the current day.
   * 
   * @example
   * 0
   */
  curExecuteCount?: number;
  /**
   * @remarks
   * The number of rows that were queried on the current day.
   * 
   * @example
   * 0
   */
  curResultCount?: number;
  /**
   * @remarks
   * The DingTalk chatbot URL that is used to receive notifications.
   * 
   * > 
   * 
   * *   The system returns this parameter if you have set a DingTalk chatbot URL in the console. To set a DingTalk chatbot URL in the console, move the pointer over the profile picture in the upper-right corner and click the Edit icon next to **Notice**.
   * 
   * *   The system does not return this parameter if you have not set a DingTalk chatbot URL.
   * 
   * @example
   * https://XXX.dingtalk.com/robot/send?access_token=9b7a4a562cbe7fcdea9962afac7b9d7b4504d564948083419750f9cafa78e4ef
   */
  dingRobot?: string;
  /**
   * @remarks
   * The email address that is used to receive notifications.
   * 
   * > 
   * 
   * *   The system returns this parameter if you have set an email address in the console. To set an email address in the console, move the pointer over the profile picture in the upper-right corner and click the Edit icon next to **Notice**.
   * 
   * *   The system does not return this parameter if you have not set an email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The time when the user last logged on to the console.
   * 
   * @example
   * 2021-11-08 13:43:43
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
   * 50000
   */
  maxResultCount?: number;
  /**
   * @remarks
   * The mobile phone number of the user.
   * 
   * > 
   * 
   * *   The system returns this parameter if you have set a mobile phone number in the console. To set a mobile phone number in the console, move the pointer over the profile picture in the upper-right corner and click the Edit icon next to **Notice**.
   * 
   * *   The system does not return this parameter if you have not set a mobile phone number.
   * 
   * @example
   * 1389999****
   */
  mobile?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * test_NickName
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
   * DINGROBOT
   */
  notificationMode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account of the user.
   * 
   * @example
   * 140692647406****
   */
  parentUid?: string;
  /**
   * @remarks
   * The IDs of the roles.
   */
  roleIdList?: ListUsersResponseBodyUserListUserRoleIdList;
  /**
   * @remarks
   * The names of roles.
   */
  roleNameList?: ListUsersResponseBodyUserListUserRoleNameList;
  /**
   * @remarks
   * The signature method that is used to secure connections when a webhook URL is used. Valid values:
   * 
   * *   **NONE**: no signature.
   * *   **HMAC_SHA1**: HMAC_SHA1.
   * 
   * @example
   * HMAC_SHA1
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
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 167382665015****
   */
  uid?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 8****
   */
  userId?: string;
  /**
   * @remarks
   * The webhook URL that is used to receive notifications.
   * 
   * > 
   * 
   * *   If you have set a webhook URL, DMS sends notifications to the specified URL.
   * 
   * *   The system does not return this parameter if you have not set a webhook URL.
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
      parentUid: 'string',
      roleIdList: ListUsersResponseBodyUserListUserRoleIdList,
      roleNameList: ListUsersResponseBodyUserListUserRoleNameList,
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

