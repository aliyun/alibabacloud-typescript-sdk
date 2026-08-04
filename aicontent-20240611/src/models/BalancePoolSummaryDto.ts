// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BalancePoolSummaryDTO extends $dara.Model {
  /**
   * @example
   * 40.00
   */
  allocated?: number;
  /**
   * @example
   * 60.00
   */
  available?: number;
  /**
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

