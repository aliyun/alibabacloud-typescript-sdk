// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRdMemberListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of the members.
   * 
   * This parameter is required.
   */
  memberListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      memberListShrink: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

