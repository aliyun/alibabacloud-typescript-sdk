// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountAvailableAmountRequest extends $dara.Model {
  /**
   * @remarks
   * Account ID. If not specified, the account ID owned by the current account (owner) is used by default.
   * 
   * @example
   * 12332112
   */
  fundAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

