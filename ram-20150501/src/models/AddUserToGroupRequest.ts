// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
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

