// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Member } from "./Member";


export class CreateMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The mappings between the ID and permissions of the member.
   */
  body?: Member;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Member,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

