// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceReadOnlyResourceCapacityUnit extends $dara.Model {
  /**
   * @remarks
   * The maximum number of capacity units.
   * 
   * @example
   * 4
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
   * 2
   */
  usedCapacityUnit?: string;
  static names(): { [key: string]: string } {
    return {
      maxCapacityUnit: 'MaxCapacityUnit',
      minCapacityUnit: 'MinCapacityUnit',
      usedCapacityUnit: 'UsedCapacityUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacityUnit: 'number',
      minCapacityUnit: 'number',
      usedCapacityUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

