// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetResellerUserQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The quota of a quota ledger. Unit: CNY.
   * 
   * This parameter is required.
   * 
   * @example
   * 750
   */
  amount?: string;
  /**
   * @remarks
   * You do not need to set the parameter.
   * 
   * @example
   * N/A
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the business.
   * 
   * @example
   * OD2022040818295234777795624764689
   */
  outBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      outBizId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

