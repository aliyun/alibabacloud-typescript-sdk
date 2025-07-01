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
   * The ID of the portable account. The ID must be a 16-digit string. The string can contain digits and lowercase letters.
   * 
   * @example
   * 378cc7630f26****
   */
  owner?: string;
  /**
   * @remarks
   * Specifies whether to share the directory. Valid values:
   * 
   * *   false (default): does not share the directory.
   * *   true: shares the directory.
   * 
   * > *   This parameter takes effect only if the Type parameter is set to Directory and the Owner parameter is not empty.
   * > *   The permissions on a directory can be inherited by the owner. The owner has read and write permissions on the subdirectories and subfiles created in the directory, even if they are created by others.
   * 
   * @example
   * false
   */
  ownerAccessInheritable?: boolean;
  /**
   * @remarks
   * The absolute path of the directory or file. The path must start and end with a forward slash (/) and must be 2 to 1024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/
   */
  path?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   File
   * *   Directory
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

