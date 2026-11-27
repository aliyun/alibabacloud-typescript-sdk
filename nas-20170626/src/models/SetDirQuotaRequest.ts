// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDirQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a precheck on the request.
   */
  dryRun?: boolean;
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
   *  > - Quotas can only be set for directories that have been created in a NAS file system. The quota path is the absolute path of the directory in the NAS file system, not a local path on a compute node (such as an ECS instance or container).
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
   * - Accounting: accounting quota, which only tracks usage.
   * - Enforcement: enforcement quota. If usage exceeds the limit, operations such as creating files or directories and appending data will fail.
   * 
   * This parameter is required.
   * 
   * @example
   * Accounting
   */
  quotaType?: string;
  /**
   * @remarks
   * The maximum total size of files in the directory.
   * 
   * Unit: GiB
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
   * The Uid or Gid to be restricted.
   * 
   * Required and meaningful only when UserType is Uid or Gid.
   * 
   * Examples:
   * 
   * - To restrict the user with Uid=500, set UserType to Uid and UserId to 500.
   * - To restrict the user group with Gid=100, set UserType to Gid and UserId to 100.
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
   * - Gid: group ID of the user
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
      dryRun: 'DryRun',
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
      dryRun: 'boolean',
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

