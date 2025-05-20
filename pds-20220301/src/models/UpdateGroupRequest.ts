// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the group after modification.
   * 
   * @example
   * test group description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e43ec8427dd45f19431b7504649a1b4
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group after modification.
   * 
   * @example
   * test group
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupId: 'group_id',
      groupName: 'group_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

