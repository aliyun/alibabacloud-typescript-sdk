// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUserResponseBodyUserTags } from "./CreateUserResponseBodyUserTags";


export class CreateUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created. The value is displayed in UTC.
   * 
   * @example
   * 2021-10-26T03:03:42Z
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
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * Alice@example.com
   */
  email?: string;
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
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  tags?: CreateUserResponseBodyUserTags[];
  /**
   * @remarks
   * The time when the information about the user was modified. The value is displayed in UTC.
   * 
   * @example
   * 2021-10-26T03:03:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * The username of the user.
   * 
   * @example
   * Alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
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
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': CreateUserResponseBodyUserTags },
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

