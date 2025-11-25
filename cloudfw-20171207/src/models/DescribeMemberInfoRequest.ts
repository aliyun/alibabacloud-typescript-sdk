// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMemberInfoRequest extends $dara.Model {
  /**
   * @example
   * 150795602499****
   */
  memberUid?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

