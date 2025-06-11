// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantResponseBodyTenantTenantResourceLogDiskSize extends $dara.Model {
  /**
   * @remarks
   * The total size of log disk of the tenant, in GB.
   * 
   * @example
   * 8.0
   */
  totalLogDisk?: number;
  /**
   * @remarks
   * The log disk size of each resource unit of the tenant, in GB.
   * 
   * @example
   * 8.0
   */
  unitLogDisk?: number;
  static names(): { [key: string]: string } {
    return {
      totalLogDisk: 'TotalLogDisk',
      unitLogDisk: 'UnitLogDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalLogDisk: 'number',
      unitLogDisk: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

