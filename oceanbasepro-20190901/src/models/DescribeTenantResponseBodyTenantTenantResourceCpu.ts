// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantResponseBodyTenantTenantResourceCpu extends $dara.Model {
  /**
   * @remarks
   * The total number of CPU cores of the tenant.
   * 
   * @example
   * 10
   */
  totalCpu?: number;
  /**
   * @remarks
   * The number of CPU cores in each resource unit of the tenant.
   * 
   * @example
   * 8
   */
  unitCpu?: number;
  /**
   * @remarks
   * The number of used CPU cores of the tenant.
   * 
   * @example
   * 8
   */
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      totalCpu: 'TotalCpu',
      unitCpu: 'UnitCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

