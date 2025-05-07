// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of RDS Capacity Units (RCUs).
   * 
   * @example
   * 8
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of RCUs.
   * 
   * @example
   * 0.5
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

