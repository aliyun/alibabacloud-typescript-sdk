// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupsMappingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Apsara File Storage for HDFS file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The names of the groups to which the user belongs.
   * Limits:
   * - Must start with a letter or an underscore (_).
   * 
   * - Must be 1 to 32 characters in length and cannot be empty.
   * 
   * - Can contain only lowercase letters, digits, and underscores (_).
   * 
   * @example
   * ["group1","group2"]
   */
  groupNamesShrink?: string;
  /**
   * @remarks
   * The region where the file system resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The username.
   * Limits:
   * 
   * - Must start with a letter or an underscore (_).
   * 
   * - Must be 1 to 32 characters in length and cannot be empty.
   * 
   * - Can contain only lowercase letters, digits, and underscores (_).
   * 
   * > Each user can belong to a maximum of 10 groups.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      groupNamesShrink: 'GroupNames',
      inputRegionId: 'InputRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      groupNamesShrink: 'string',
      inputRegionId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

