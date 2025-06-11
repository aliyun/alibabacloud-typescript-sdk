// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUserRequestTags } from "./CreateUserRequestTags";


export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the user.
   * 
   * The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * The display name can be up to 256 characters in length.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user. The email address must be unique within the directory.
   * 
   * The email address can be up to 128 characters in length.
   * 
   * @example
   * Alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The first name of the user.
   * 
   * The first name can be up to 64 characters in length.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * The last name can be up to 64 characters in length.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled (default)
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  tags?: CreateUserRequestTags[];
  /**
   * @remarks
   * The username of the user. The username must be unique within the directory. and cannot be changed.
   * 
   * The username can contain digits, letters, and the following special characters: `@_-.`
   * 
   * The username can be up to 64 characters in length.
   * 
   * @example
   * Alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      directoryId: 'DirectoryId',
      displayName: 'DisplayName',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      status: 'Status',
      tags: 'Tags',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      displayName: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': CreateUserRequestTags },
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

