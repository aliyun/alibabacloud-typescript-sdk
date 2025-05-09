// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of queries that can be performed each day.
   * 
   * @example
   * 1000
   */
  maxExecuteCount?: number;
  /**
   * @remarks
   * The maximum number of rows that can be queried each day.
   * 
   * @example
   * 1000
   */
  maxResultCount?: number;
  /**
   * @remarks
   * The DingTalk ID or mobile number of the user.
   * 
   * @example
   * 188xxxxxxxx
   */
  mobile?: string;
  /**
   * @remarks
   * The roles that the user assumes. For more information about the valid values, see the Request parameters section in the [UpdateUser](https://help.aliyun.com/document_detail/465812.html) topic.
   * 
   * @example
   * ADMIN,DBA
   */
  roleNames?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, log on to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  /**
   * @remarks
   * The Alibaba Cloud unique ID (UID) of the user to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  uid?: number;
  /**
   * @remarks
   * The UID of the String type. If you specify this parameter, the UID of the Long type is replaced.
   * 
   * @example
   * 322824****:dmstest.wu@A201***
   */
  uidString?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * test
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      maxExecuteCount: 'MaxExecuteCount',
      maxResultCount: 'MaxResultCount',
      mobile: 'Mobile',
      roleNames: 'RoleNames',
      tid: 'Tid',
      uid: 'Uid',
      uidString: 'UidString',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxExecuteCount: 'number',
      maxResultCount: 'number',
      mobile: 'string',
      roleNames: 'string',
      tid: 'number',
      uid: 'number',
      uidString: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

