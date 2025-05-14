// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserHonorsResponseBodyHonorsGrantHistory extends $dara.Model {
  /**
   * @example
   * 12312312312312312
   */
  grantTime?: number;
  /**
   * @example
   * 363784
   */
  senderUserid?: string;
  static names(): { [key: string]: string } {
    return {
      grantTime: 'grantTime',
      senderUserid: 'senderUserid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantTime: 'number',
      senderUserid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

