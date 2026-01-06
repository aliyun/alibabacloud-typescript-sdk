// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeApplicationFromUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 应用角色ID。
   * 
   * @example
   * app_role_mkv7rgt4ds8d8v0qtzev2mxxxx
   */
  applicationRoleId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the accounts. You can revoke the access permissions from a maximum of 100 accounts at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationRoleId: 'ApplicationRoleId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationRoleId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

