// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackgeInfoRequest extends $dara.Model {
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

