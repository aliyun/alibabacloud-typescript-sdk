// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileRequest extends $dara.Model {
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
   * The ID of the portable account.
   * Limits: The ID must be a 16-character string that contains only digits and lowercase English letters.
   * 
   * @example
   * 378cc7630f26****
   */
  owner?: string;
  /**
   * @remarks
   * Specifies whether to share directory permissions. Valid values:
   * - false (default): Does not share directory permissions.
   * - true: Shares directory permissions.
   * > - This parameter takes effect only when Type is set to Directory and Owner is not empty.
   * > - The directory has inheritable Owner permissions. Subdirectories and files created in this directory inherit read and write permissions for this Owner, even if they are created by other users.
   * 
   * @example
   * false
   */
  ownerAccessInheritable?: boolean;
  /**
   * @remarks
   * The absolute path of the directory or file.
   * - The path must start and end with a forward slash (/).
   * - The path must be 1 to 1,023 characters in length.
   * - The path must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/
   */
  path?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * - File: file
   * - Directory: directory
   * 
   * This parameter is required.
   * 
   * @example
   * File
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      owner: 'Owner',
      ownerAccessInheritable: 'OwnerAccessInheritable',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      owner: 'string',
      ownerAccessInheritable: 'boolean',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

