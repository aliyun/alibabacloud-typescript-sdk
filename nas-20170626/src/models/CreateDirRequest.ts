// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirRequest extends $dara.Model {
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
   * The ID of the owner group for the directory. Valid values: 0 to 4294967295.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The owner ID for the directory. Valid values: 0 to 4294967295.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The Portable Operating System Interface (POSIX) permissions applied to the root directory. The value is a valid octal number, such as 0755.
   * 
   * This parameter is required.
   * 
   * @example
   * 0755
   */
  permission?: string;
  /**
   * @remarks
   * Specifies whether to create a multi-level directory. Valid values:
   * 
   * *   true (default): If no multi-level directory exists, directories are created level by level.
   * *   false: Only the last level of directory is created. An error message is returned because the parent directory does not exist.
   * 
   * @example
   * true
   */
  recursion?: boolean;
  /**
   * @remarks
   * The directory name.
   * 
   * *   The directory must start with a forward slash (/).
   * *   The directory can contain digits and letters.
   * *   The directory can contain underscores (_), hyphens (-), and periods (.).
   * *   The directory cannot contain symbolic links, such as the current directory (.), the upper-level directory (..), and other symbolic links.
   * 
   * > *   If the root directory does not exist, configure the information for directory creation. The system then automatically creates the specified root directory based on your settings.
   * > *  If the root directory exists, you do not need to configure the information for directory creation. The configurations for directory creation are ignored even if you configure the information.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  rootDirectory?: string;
  static names(): { [key: string]: string } {
    return {
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

