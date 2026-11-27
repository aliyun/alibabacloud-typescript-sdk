// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the user group that owns the directory. Valid values: 0 to 4294967295.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The ID of the user that owns the directory. Valid values: 0 to 4294967295.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The POSIX permissions applied to the root directory path. The value must be a valid octal number, such as 0755.
   * 
   * This parameter is required.
   * 
   * @example
   * 0755
   */
  permission?: string;
  /**
   * @remarks
   * Specifies whether to create multi-level directories. Valid values:
   * 
   * - true (default): If the multi-level directories do not exist, the system creates them level by level.
   * - false: Only the last-level directory is created. If the parent directory does not exist, an error message is returned.
   * 
   * @example
   * true
   */
  recursion?: boolean;
  /**
   * @remarks
   * The name of the directory.
   * 
   * - Must start with a forward slash (/).
   * - Supports digits, uppercase letters, and lowercase letters.
   * - Can contain underscores (_), hyphens (-), or periods (.).
   * - The path cannot contain symbolic links, such as the current directory (.), the parent directory (..), or other symbolic links.
   * > - If the root directory does not exist, you must configure the automatic creation information. The system automatically creates the specified root directory based on the settings.
   * > - If the root directory already exists, you do not need to configure the automatic creation information. If you configure it, the configurations in the automatic creation information are ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  rootDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      ownerGroupId: 'OwnerGroupId',
      ownerUserId: 'OwnerUserId',
      permission: 'Permission',
      recursion: 'Recursion',
      rootDirectory: 'RootDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      fileSystemId: 'string',
      ownerGroupId: 'number',
      ownerUserId: 'number',
      permission: 'string',
      recursion: 'boolean',
      rootDirectory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

