// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Limits:
   * 
   * *   The name must be 3 to 64 characters in length.
   * *   The name must start with a letter and can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be different from the name of the default permission group.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The network type of the permission group. Valid value: **Vpc**.
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
   * *   By default, the description of a permission group is the same as the name of the permission group. The description must be 2 to 128 characters in length.
   * *   The name must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain digits, colons (:), underscores (_), and hyphens (-).
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
   * *   standard (default): General-purpose NAS file system.
   * *   extreme: Extreme NAS file system.
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

