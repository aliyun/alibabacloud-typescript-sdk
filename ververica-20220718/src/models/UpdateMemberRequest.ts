// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Member } from "./Member";


export class UpdateMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The permission information about the member.
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

