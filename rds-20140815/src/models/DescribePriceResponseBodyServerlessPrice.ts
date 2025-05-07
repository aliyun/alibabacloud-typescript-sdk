// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyServerlessPrice extends $dara.Model {
  /**
   * @remarks
   * The discount amount of the maximum number of RCUs.
   * 
   * @example
   * 1**.*
   */
  RCUDiscountMaxAmount?: number;
  /**
   * @remarks
   * The discount amount of the minimum number of RCUs.
   * 
   * @example
   * 1*.*
   */
  RCUDiscountMinAmount?: number;
  /**
   * @remarks
   * The price of the maximum number of RCUs.
   * 
   * @example
   * 2**.*
   */
  RCUOriginalMaxAmount?: number;
  /**
   * @remarks
   * The price of the minimum number of RCUs.
   * 
   * @example
   * 3*.*
   */
  RCUOriginalMinAmount?: number;
  /**
   * @remarks
   * The original price of the disk capacity.
   * 
   * @example
   * 1*
   */
  storageOriginalAmount?: number;
  /**
   * @remarks
   * The maximum total price before the discount.
   * 
   * @example
   * 2**.*
   */
  totalOriginalMaxAmount?: number;
  /**
   * @remarks
   * The minimum total price before the discount.
   * 
   * @example
   * 2*.*
   */
  totalOriginalMinAmount?: number;
  /**
   * @remarks
   * The transaction price of the maximum number of RCUs.
   * 
   * @example
   * 1**.*
   */
  tradeMaxRCUAmount?: number;
  /**
   * @remarks
   * The transaction price of the minimum number of RCUs.
   * 
   * @example
   * 2*.*
   */
  tradeMinRCUAmount?: number;
  /**
   * @remarks
   * The discounted price of the disk capacity.
   * 
   * @example
   * 2.*
   */
  storageDiscountAmount?: number;
  static names(): { [key: string]: string } {
    return {
      RCUDiscountMaxAmount: 'RCUDiscountMaxAmount',
      RCUDiscountMinAmount: 'RCUDiscountMinAmount',
      RCUOriginalMaxAmount: 'RCUOriginalMaxAmount',
      RCUOriginalMinAmount: 'RCUOriginalMinAmount',
      storageOriginalAmount: 'StorageOriginalAmount',
      totalOriginalMaxAmount: 'TotalOriginalMaxAmount',
      totalOriginalMinAmount: 'TotalOriginalMinAmount',
      tradeMaxRCUAmount: 'TradeMaxRCUAmount',
      tradeMinRCUAmount: 'TradeMinRCUAmount',
      storageDiscountAmount: 'storageDiscountAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RCUDiscountMaxAmount: 'number',
      RCUDiscountMinAmount: 'number',
      RCUOriginalMaxAmount: 'number',
      RCUOriginalMinAmount: 'number',
      storageOriginalAmount: 'number',
      totalOriginalMaxAmount: 'number',
      totalOriginalMinAmount: 'number',
      tradeMaxRCUAmount: 'number',
      tradeMinRCUAmount: 'number',
      storageDiscountAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

