// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDirQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of the directory in the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The UID or GID to cancel.
   * 
   * This parameter is required and valid only when UserType is set to Uid or Gid.
   * 
   * Examples:
   * 
   * - To cancel the quota for the user whose UID is 500, set UserType to Uid and UserId to 500.
   * - To cancel the quota for the user group whose GID is 100, set UserType to Gid and UserId to 100.
   * 
   * @example
   * 500
   */
  userId?: string;
  /**
   * @remarks
   * The user type.
   * 
   * Valid values:
   * 
   * - Uid: user ID
   * - Gid: user group ID
   * - AllUsers: all users.
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

