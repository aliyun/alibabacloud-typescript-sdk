// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantResponseBodyTenantReadOnlyResourceDiskSize extends $dara.Model {
  /**
   * @remarks
   * The size of disk space used by the tenant, in GB.
   * 
   * @example
   * 86
   */
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

