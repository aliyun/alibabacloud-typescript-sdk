// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFundAccountTransferRequest extends $dara.Model {
  /**
   * @remarks
   * The transfer amount.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  amount?: string;
  /**
   * @remarks
   * The currency.
   * 
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The asset type. Currently, only cash is supported. Valid values:
   * - cash: cash.
   * 
   * This parameter is required.
   * 
   * @example
   * cash
   */
  financeType?: string;
  /**
   * @remarks
   * The ID of the source account (payer account ID).
   * 
   * This parameter is required.
   * 
   * @example
   * 123212323
   */
  fromFundAccountId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 转账的备注
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the destination account (payee account ID).
   * 
   * This parameter is required.
   * 
   * @example
   * 11112231
   */
  toFundAccountId?: number;
  /**
   * @remarks
   * The transfer type. Valid values:
   * - grant: transfer.
   * - recycle: revocation.
   * 
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

