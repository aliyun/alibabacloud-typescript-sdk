// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The ID of the user group to delete.
   * 
   * @example
   * ug-dzjax1ez5qgph****
   */
  groupId?: string;
  /**
   * @remarks
   * The IDs of the user groups to delete.
   */
  groupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      groupId: 'GroupId',
      groupIds: 'GroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      groupId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

