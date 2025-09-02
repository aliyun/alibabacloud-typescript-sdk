// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupAddOrUpdateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the user group.
   * 
   * This parameter is required.
   */
  userGroupsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupsShrink: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

