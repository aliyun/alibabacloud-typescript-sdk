// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFundAccountTransferRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  amount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cash
   */
  financeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123212323
   */
  fromFundAccountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 转账的备注
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11112231
   */
  toFundAccountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * grant
   */
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      financeType: 'FinanceType',
      fromFundAccountId: 'FromFundAccountId',
      remark: 'Remark',
      toFundAccountId: 'ToFundAccountId',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      financeType: 'string',
      fromFundAccountId: 'number',
      remark: 'string',
      toFundAccountId: 'number',
      transferType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

