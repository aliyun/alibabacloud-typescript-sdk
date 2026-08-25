// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the user.
   * 
   * Maximum length: 1024 characters.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * Maximum length: 256 characters.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user. The email address must be unique within the directory.
   * 
   * Maximum length: 128 characters.
   * 
   * @example
   * Alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The first name of the user.
   * 
   * Maximum length: 64 characters.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * Maximum length: 64 characters.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * - Enabled (default): Enabled.
   * - Disabled: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateUserRequestTags[];
  /**
   * @remarks
   * The username. The username must be unique within the directory and cannot be modified.
   * 
   * Format: Can contain digits, letters, and the following special characters: `@_-.`
   * 
   * Maximum length: 64 characters.
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

