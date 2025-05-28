// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountAvailableAmountRequest extends $dara.Model {
  /**
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

