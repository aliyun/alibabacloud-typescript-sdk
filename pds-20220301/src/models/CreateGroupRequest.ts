// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the group. The description can be up to 1,024 characters in length.
   * 
   * @example
   * test group description
   */
  description?: string;
  /**
   * @remarks
   * The name of the group. The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test group
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether the group is a root group. A root group cannot be added to any other group. In most cases, a root group is the top-level organization in the organizational structure.
   * 
   * @example
   * false
   */
  isRoot?: boolean;
  /**
   * @remarks
   * The ID of the parent group to which the group is added. If this parameter is specified, the system automatically adds the group to the specified parent group after the group is created.
   * 
   * @example
   * 2e43ec8427dd45f19431b7504649a1b3
   */
  parentGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupName: 'group_name',
      isRoot: 'is_root',
      parentGroupId: 'parent_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupName: 'string',
      isRoot: 'boolean',
      parentGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

