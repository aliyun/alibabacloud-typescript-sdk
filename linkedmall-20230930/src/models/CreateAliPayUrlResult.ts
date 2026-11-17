// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAliPayUrlResult extends $dara.Model {
  /**
   * @remarks
   * The LM account ID.
   * 
   * @example
   * 123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The LM member ID.
   * 
   * @example
   * 223456789
   */
  memberId?: string;
  /**
   * @remarks
   * The Alipay auto-debit signing URL.
   * 
   * @example
   * https://example.com/withhold/sign
   */
  zftWithholdSignUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      memberId: 'memberId',
      zftWithholdSignUrl: 'zftWithholdSignUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      memberId: 'string',
      zftWithholdSignUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

