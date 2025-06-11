// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceReadOnlyResourceCpu extends $dara.Model {
  /**
   * @remarks
   * The number of original CPU cores in the cluster.
   * 
   * @example
   * 14
   */
  originalTotalCpu?: number;
  /**
   * @remarks
   * The total number of CPU cores of the cluster.
   * 
   * @example
   * 14
   */
  totalCpu?: number;
  /**
   * @remarks
   * The number of CPU cores of each replica node in the cluster.
   * 
   * @example
   * 10
   */
  unitCpu?: number;
  /**
   * @remarks
   * The number of CPU cores used by the cluster.
   * 
   * @example
   * 10
   */
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalCpu: 'OriginalTotalCpu',
      totalCpu: 'TotalCpu',
      unitCpu: 'UnitCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalCpu: 'number',
      totalCpu: 'number',
      unitCpu: 'number',
      usedCpu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

