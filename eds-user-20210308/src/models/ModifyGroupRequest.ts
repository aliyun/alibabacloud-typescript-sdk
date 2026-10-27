// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The new description of the user group.
   * 
   * @example
   * TestGroup
   */
  description?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * ug-dzjax1ez5qgph****
   */
  groupId?: string;
  /**
   * @remarks
   * The new name of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * Development group
   */
  newGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      description: 'Description',
      groupId: 'GroupId',
      newGroupName: 'NewGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      description: 'string',
      groupId: 'string',
      newGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

