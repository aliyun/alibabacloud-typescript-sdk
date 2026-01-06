// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersForApplicationRequest extends $dara.Model {
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
   * The number of the page to return
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the accounts. You can query a maximum of 100 accounts at a time.
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationRoleId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

