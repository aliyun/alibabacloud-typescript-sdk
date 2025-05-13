// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMemberResponseBodyMembers } from "./CreateMemberResponseBodyMembers";


export class CreateMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned members.
   */
  members?: CreateMemberResponseBodyMembers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA869D1B-035A-43B2-ACC1-C56681BD9FAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': CreateMemberResponseBodyMembers },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

