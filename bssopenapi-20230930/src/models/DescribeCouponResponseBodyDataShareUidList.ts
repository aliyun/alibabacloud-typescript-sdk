// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponResponseBodyDataShareUidList extends $dara.Model {
  /**
   * @example
   * 1902671110151254
   */
  uid?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

