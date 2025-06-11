// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
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
   * The new description of the user.
   * 
   * @example
   * This is a user.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new display name of the user.
   * 
   * @example
   * AliceLee
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The new email address of the user.
   * 
   * @example
   * AliceLee@example.com
   */
  newEmail?: string;
  /**
   * @remarks
   * The new first name of the user.
   * 
   * @example
   * Alice
   */
  newFirstName?: string;
  /**
   * @remarks
   * The new last name of the user.
   * 
   * @example
   * Lee
   */
  newLastName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newDescription: 'NewDescription',
      newDisplayName: 'NewDisplayName',
      newEmail: 'NewEmail',
      newFirstName: 'NewFirstName',
      newLastName: 'NewLastName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newDescription: 'string',
      newDisplayName: 'string',
      newEmail: 'string',
      newFirstName: 'string',
      newLastName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

