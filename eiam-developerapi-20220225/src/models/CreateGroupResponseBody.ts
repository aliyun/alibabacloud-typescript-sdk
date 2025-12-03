// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_wovwffm62xifdziem7an7xxxxx
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

