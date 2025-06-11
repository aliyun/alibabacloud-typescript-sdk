// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantResponseBodyTenantReadOnlyResourceMemory extends $dara.Model {
  /**
   * @remarks
   * The total memory size of the tenant, in GB.
   * 
   * @example
   * 64
   */
  totalMemory?: number;
  /**
   * @remarks
   * The memory size of each resource unit of the tenant, in GB.
   * 
   * @example
   * 32
   */
  unitMemory?: number;
  /**
   * @remarks
   * The size of memory used by the tenant, in GB.
   * 
   * @example
   * 30
   */
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalMemory: 'TotalMemory',
      unitMemory: 'UnitMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalMemory: 'number',
      unitMemory: 'number',
      usedMemory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

