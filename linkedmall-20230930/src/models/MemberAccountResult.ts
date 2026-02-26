// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MemberAccountResult extends $dara.Model {
  /**
   * @example
   * "yue***@newburn.cn"
   */
  accountNo?: string[];
  /**
   * @example
   * 123
   */
  shopId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'accountNo',
      shopId: 'shopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: { 'type': 'array', 'itemType': 'string' },
      shopId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountNo)) {
      $dara.Model.validateArray(this.accountNo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

