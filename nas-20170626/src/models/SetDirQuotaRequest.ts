// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDirQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The number of files that a user can create in the directory.
   * 
   * This number includes the number of files, subdirectories, and special files.
   * 
   * If you set the QuotaType parameter to Enforcement, you must specify at least one of the SizeLimit and FileCountLimit parameters.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
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
   * The absolute path of the directory in the file system.
   * 
   * > *   You can set quotas only for the directories that have been created in a NAS file system. The path of the directory that you specify for a quota is the absolute path of the directory in the NAS file system, but not the local path of the compute node, such as an Elastic Compute Service (ECS) instance or a container.
   * > *   Directories whose names contain Chinese characters are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * Valid values:
   * 
   * *   Accounting: a statistical quota. If you set this parameter to Accounting, NAS calculates only the storage usage of the directory.
   * *   Enforcement: a restricted quota. If you set this parameter to Enforcement and the storage usage exceeds the quota, you can no longer create files or subdirectories for the directory, or write data to the directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Accounting
   */
  quotaType?: string;
  /**
   * @remarks
   * The size of files that a user can create in the directory.
   * 
   * Unit: GiB.
   * 
   * If you set the QuotaType parameter to Enforcement, you must specify at least one of the SizeLimit and FileCountLimit parameters.
   * 
   * @example
   * 1024
   */
  sizeLimit?: number;
  /**
   * @remarks
   * The UID or GID of the user for whom you want to set a directory quota.
   * 
   * This parameter is required and valid only if the UserType parameter is set to Uid or Gid.
   * 
   * Examples:
   * 
   * *   If you want to set a directory quota for a user whose UID is 500, set the UserType parameter to Uid and set the UserId parameter to 500.
   * *   If you want to set a directory quota for a user group whose GID is 100, set the UserType parameter to Gid and set the UserId parameter to 100.
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
      fileCountLimit: 'FileCountLimit',
      fileSystemId: 'FileSystemId',
      path: 'Path',
      quotaType: 'QuotaType',
      sizeLimit: 'SizeLimit',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      fileSystemId: 'string',
      path: 'string',
      quotaType: 'string',
      sizeLimit: 'number',
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

