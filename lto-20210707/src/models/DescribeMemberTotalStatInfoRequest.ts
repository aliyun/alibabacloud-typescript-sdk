// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMemberTotalStatInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
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

