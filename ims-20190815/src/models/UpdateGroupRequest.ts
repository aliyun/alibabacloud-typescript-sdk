// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The new comments.
   * 
   * Maximum length: 128 characters.
   * 
   * @example
   * Test team
   */
  newComments?: string;
  /**
   * @remarks
   * The new display name of the user group.
   * 
   * Maximum length: 24 characters.
   * 
   * @example
   * Test-Team
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The new name of the user group.
   * 
   * Maximum length: 64 characters. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Test-Team
   */
  newGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      newComments: 'NewComments',
      newDisplayName: 'NewDisplayName',
      newGroupName: 'NewGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      newComments: 'string',
      newDisplayName: 'string',
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

