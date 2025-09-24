// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResellerConsumeAmountRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the consumption amount adjustment. Valid values: increase: The consumption amount increases because new consumption occurs. decrease: The consumption amount decreases because funds are added to the account. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * increase/decrease
   */
  adjustType?: string;
  /**
   * @remarks
   * The amount to be adjusted. Unit: CNY
   * 
   * This parameter is required.
   * 
   * @example
   * 10.00
   */
  amount?: string;
  /**
   * @remarks
   * The type of the business.
   * 
   * This parameter is required.
   * 
   * @example
   * quota_amount_adjust
   */
  businessType?: string;
  /**
   * @remarks
   * The type of the currency.
   * 
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The extended field of a message.
   * 
   * @example
   * {}
   */
  extendMap?: string;
  /**
   * @remarks
   * The ID of the primary key for external business. The ID is used for idempotence verification.
   * 
   * This parameter is required.
   * 
   * @example
   * 1647396865
   */
  outBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  /**
   * @remarks
   * The source of the request. Specify the system name for the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * system
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      adjustType: 'AdjustType',
      amount: 'Amount',
      businessType: 'BusinessType',
      currency: 'Currency',
      extendMap: 'ExtendMap',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustType: 'string',
      amount: 'string',
      businessType: 'string',
      currency: 'string',
      extendMap: 'string',
      outBizId: 'string',
      ownerId: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

