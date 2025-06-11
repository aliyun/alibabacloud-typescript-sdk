// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The new description of the group.
   * 
   * @example
   * This is a group.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new name of the group.
   * 
   * @example
   * NewTestGroup
   */
  newGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      groupId: 'GroupId',
      newDescription: 'NewDescription',
      newGroupName: 'NewGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
      newDescription: 'string',
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

