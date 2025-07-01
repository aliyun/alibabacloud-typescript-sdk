// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDirQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of a directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The UID or GID of a user for whom you want to cancel the directory quota.
   * 
   * This parameter is required and valid only if the UserType parameter is set to Uid or Gid.
   * 
   * Examples:
   * 
   * *   If you want to cancel a quota for a user whose UID is 500, set the UserType parameter to Uid and set the UserId parameter to 500.
   * *   If you want to cancel a quota for a group whose GID is 100, set the UserType parameter to Gid and set the UserId parameter to 100.
   * 
   * @example
   * 500
   */
  userId?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * Valid values:
   * 
   * *   Uid: user ID
   * *   Gid: user group ID
   * *   AllUsers: all users
   * 
   * This parameter is required.
   * 
   * @example
   * Uid
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      path: 'Path',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      path: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

