// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The permission group name.
   * 
   * Limits:
   * 
   * - The name must be 3 to 64 characters in length.
   * - The name must start with a letter and can contain letters, digits, underscores (_), or hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The permission group description.
   * 
   * Limits:
   * 
   * - By default, the description is the same as the permission group name. The description must be 2 to 128 characters in length.
   * - The description must start with a letter and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * vpc-test
   */
  description?: string;
  /**
   * @remarks
   * The file system type.
   * 
   * Valid values:
   * - standard (default): General-purpose NAS
   * - extreme: Extreme NAS
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      description: 'Description',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      description: 'string',
      fileSystemType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

