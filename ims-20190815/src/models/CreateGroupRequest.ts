// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The comments.
   * 
   * The maximum length is 128 characters.
   * 
   * @example
   * Development team
   */
  comments?: string;
  /**
   * @remarks
   * The display name of the user group.
   * 
   * The maximum length is 24 characters.
   * 
   * @example
   * Dev-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the user group. This parameter is required.
   * 
   * The maximum length is 64 characters. It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
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

