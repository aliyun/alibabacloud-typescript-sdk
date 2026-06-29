// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Limits:
   * 
   * - The name must be 3 to 64 characters in length.
   * - The name must start with a letter and can contain letters, digits, underscores (_), or hyphens (-).
   * - The name of the new permission group cannot be the same as the name of the default permission group.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME (default VPC permission group).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The type of the permission group. Set the value to **Vpc**, which indicates VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * Vpc
   */
  accessGroupType?: string;
  /**
   * @remarks
   * The description of the permission group.
   * 
   * Limits:
   * 
   * - The description defaults to the permission group name and must be 2 to 128 characters in length.
   * - The description must start with a letter and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * vpctestaccessgroup
   */
  description?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * - standard (default): General-purpose NAS.
   * - extreme: Extreme NAS.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessGroupType: 'AccessGroupType',
      description: 'Description',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessGroupType: 'string',
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

