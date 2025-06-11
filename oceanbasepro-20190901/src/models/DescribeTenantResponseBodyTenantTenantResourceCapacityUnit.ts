// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantResponseBodyTenantTenantResourceCapacityUnit extends $dara.Model {
  /**
   * @remarks
   * The maximum number of capacity units.
   * 
   * @example
   * 16
   */
  maxCapacityUnit?: number;
  /**
   * @remarks
   * The minimum number of capacity units.
   * 
   * @example
   * 1
   */
  minCapacityUnit?: number;
  /**
   * @remarks
   * The number of used capacity units.
   * 
   * @example
   * 5
   */
  usedCapacit?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacityUnit: 'MaxCapacityUnit',
      minCapacityUnit: 'MinCapacityUnit',
      usedCapacit: 'UsedCapacit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacityUnit: 'number',
      minCapacityUnit: 'number',
      usedCapacit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

