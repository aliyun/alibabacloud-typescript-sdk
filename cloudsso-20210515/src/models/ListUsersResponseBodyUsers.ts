// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUsersResponseBodyUsersExternalId } from "./ListUsersResponseBodyUsersExternalId";
import { ListUsersResponseBodyUsersTags } from "./ListUsersResponseBodyUsersTags";


export class ListUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created. The value is displayed in UTC.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * AliceLee
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * AliceLee@example.onmicrosoft.com
   */
  email?: string;
  /**
   * @remarks
   * The identifier information about the user synchronized from an external IdP.
   */
  externalId?: ListUsersResponseBodyUsersExternalId;
  /**
   * @remarks
   * The first name of the user.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   Manual: The user is manually created.
   * *   Synchronized: The user is synchronized from an external IdP.
   * 
   * @example
   * Synchronized
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  tags?: ListUsersResponseBodyUsersTags[];
  /**
   * @remarks
   * The time when the information about the user was modified. The value is displayed in UTC.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00bikzkuzbb58luh****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * AliceLee@example.onmicrosoft.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      externalId: 'ExternalId',
      firstName: 'FirstName',
      lastName: 'LastName',
      provisionType: 'ProvisionType',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      email: 'string',
      externalId: ListUsersResponseBodyUsersExternalId,
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersTags },
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.externalId && typeof (this.externalId as any).validate === 'function') {
      (this.externalId as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

