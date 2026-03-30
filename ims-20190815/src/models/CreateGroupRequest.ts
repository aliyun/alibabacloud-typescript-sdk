// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * The description can be up to 128 characters in length.
   * 
   * @example
   * Dev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The display name of the RAM user group.
   * 
   * The name can be up to 24 characters in length.
   * 
   * @example
   * Dev-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the RAM user group. You must specify this parameter.
   * 
   * The name can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      displayName: 'DisplayName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      displayName: 'string',
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

