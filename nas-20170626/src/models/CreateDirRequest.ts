// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The user group ID of the directory owner. Valid values: 0 to 4294967295.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The user ID of the directory owner. Valid values: 0 to 4294967295.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The POSIX permissions to apply to the root directory path. The value is a valid octal number, such as 0755.
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
   * - true (default): If the multi-level directory does not exist, the system creates the directories level by level.
   * - false: Only the last-level directory is created. If the parent directory does not exist, an error message is returned.
   * 
   * @example
   * true
   */
  recursion?: boolean;
  /**
   * @remarks
   * The directory name.
   * 
   * - The name must start with a forward slash (/).
   * - The name can contain digits and uppercase and lowercase letters.
   * - The name can contain underscores (_), hyphens (-), or periods (.).
   * - The path cannot contain symbolic links, such as the current directory (.), the parent directory (..), or other symbolic links.
   * >  - If the root directory does not exist, configure the automatic creation information. The system automatically creates the specified root directory based on the settings.
   *  > - If the root directory already exists, you do not need to configure the automatic creation information. If you configure the information, the automatic creation settings are ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
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

