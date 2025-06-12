// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesForPolicyResponseBodyGroupsGroup extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was attached to the RAM user group.
   * 
   * @example
   * 2015-02-18T17:22:08Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The description of the RAM user group.
   * 
   * @example
   * Test team
   */
  comments?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * QA-Team
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      comments: 'Comments',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      comments: 'string',
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

