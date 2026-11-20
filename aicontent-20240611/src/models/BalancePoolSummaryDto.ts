// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BalancePoolSummaryDTO extends $dara.Model {
  /**
   * @remarks
   * The balance allocated to users equals the sum of the sub-wallet balances of all members in the department.
   * 
   * @example
   * 40.00
   */
  allocated?: number;
  /**
   * @remarks
   * The available department balance equals the sub-wallet balance of the department.
   * 
   * @example
   * 60.00
   */
  available?: number;
  /**
   * @remarks
   * The total amount equals the available department balance plus the balance allocated to users.
   * 
   * @example
   * 100.00
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      allocated: 'allocated',
      available: 'available',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocated: 'number',
      available: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

