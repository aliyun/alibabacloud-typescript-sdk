// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDailyBillRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the bill owner. Valid values:
   * 
   * 1: reseller partner account 
   * 
   * 2: reseller customer account
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  billOwner?: string;
  /**
   * @remarks
   * The bill type. Valid values:
   * 
   * - DailyOrder (deprecated)
   * 
   * - DailyBill (deprecated)
   * 
   * - DailyInstanceBill (deprecated) 
   * - DailyInstanceBillV2
   * 
   * This parameter is required.
   * 
   * @example
   * DailyInstanceBillV2
   */
  billType?: string;
  /**
   * @remarks
   * Billing date. Format YYYY-MM-DD
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-24
   */
  date?: string;
  static names(): { [key: string]: string } {
    return {
      billOwner: 'BillOwner',
      billType: 'BillType',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwner: 'string',
      billType: 'string',
      date: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

