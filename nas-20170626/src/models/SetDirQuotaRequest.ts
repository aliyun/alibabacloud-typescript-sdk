// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDirQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of files in the directory.
   * 
   * This includes files, directories, and special files.
   * 
   * 
   * When QuotaType is set to Enforcement, you must specify at least one of SizeLimit and FileCountLimit.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
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
   *  > - You can set a quota only for a directory that has been created in the NAS file system. The directory path for the quota is the absolute path in the NAS file system, not the local path on a compute node (for example, an ECS instance or container).
   *  > - Directories whose path names contain Chinese characters are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The quota type.
   * 
   * Valid values:
   * - Accounting: statistical quota. Only tracks usage.
   * - Enforcement: restrictive quota. When usage exceeds the limit, operations such as creating files or directories and appending data fail.
   * 
   * This parameter is required.
   * 
   * @example
   * Accounting
   */
  quotaType?: string;
  /**
   * @remarks
   * The total capacity limit for files in the directory.
   * 
   * Unit: GiB.
   * 
   * 
   * When QuotaType is set to Enforcement, you must specify at least one of SizeLimit and FileCountLimit.
   * 
   * @example
   * 1024
   */
  sizeLimit?: number;
  /**
   * @remarks
   * The UID or GID to restrict.
   * 
   * This parameter is required and valid only when UserType is set to Uid or Gid.
   * 
   * Examples:
   * 
   * - To restrict the user whose UID is 500, set UserType to Uid and UserId to 500.
   * - To restrict the user group whose GID is 100, set UserType to Gid and UserId to 100.
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
   * - AllUsers: all users
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

