// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnFreezeMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  memberId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

