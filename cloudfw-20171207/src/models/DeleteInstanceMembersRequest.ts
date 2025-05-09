// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The UIDs of the members.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234123412341234
   */
  memberUids?: number[];
  static names(): { [key: string]: string } {
    return {
      memberUids: 'MemberUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.memberUids)) {
      $dara.Model.validateArray(this.memberUids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

