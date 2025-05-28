// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFundAccountPayRelationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12332112
   */
  fundAccountId?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      fundAccountId: 'FundAccountId',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIdsShrink: 'string',
      fundAccountId: 'string',
      nbid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

