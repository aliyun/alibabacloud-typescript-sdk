// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequestGroupInfoList extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g123
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
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

