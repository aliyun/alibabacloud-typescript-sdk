// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantResponseBodyTenantReadOnlyResourceCapacityUnit } from "./DescribeTenantResponseBodyTenantReadOnlyResourceCapacityUnit";
import { DescribeTenantResponseBodyTenantReadOnlyResourceCpu } from "./DescribeTenantResponseBodyTenantReadOnlyResourceCpu";
import { DescribeTenantResponseBodyTenantReadOnlyResourceDiskSize } from "./DescribeTenantResponseBodyTenantReadOnlyResourceDiskSize";
import { DescribeTenantResponseBodyTenantReadOnlyResourceLogDiskSize } from "./DescribeTenantResponseBodyTenantReadOnlyResourceLogDiskSize";
import { DescribeTenantResponseBodyTenantReadOnlyResourceMemory } from "./DescribeTenantResponseBodyTenantReadOnlyResourceMemory";


export class DescribeTenantResponseBodyTenantReadOnlyResource extends $dara.Model {
  /**
   * @remarks
   * The information about capacity units.
   */
  capacityUnit?: DescribeTenantResponseBodyTenantReadOnlyResourceCapacityUnit;
  /**
   * @remarks
   * The number of CPU cores of each replica node in the cluster.
   */
  cpu?: DescribeTenantResponseBodyTenantReadOnlyResourceCpu;
  /**
   * @remarks
   * The size of the data disk.
   */
  diskSize?: DescribeTenantResponseBodyTenantReadOnlyResourceDiskSize;
  /**
   * @remarks
   * The information about the log disk resources of the tenant.
   */
  logDiskSize?: DescribeTenantResponseBodyTenantReadOnlyResourceLogDiskSize;
  /**
   * @remarks
   * The information about the memory resources of the cluster.
   */
  memory?: DescribeTenantResponseBodyTenantReadOnlyResourceMemory;
  /**
   * @remarks
   * The number of resource units in the tenant.
   * 
   * @example
   * 2
   */
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      logDiskSize: 'LogDiskSize',
      memory: 'Memory',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: DescribeTenantResponseBodyTenantReadOnlyResourceCapacityUnit,
      cpu: DescribeTenantResponseBodyTenantReadOnlyResourceCpu,
      diskSize: DescribeTenantResponseBodyTenantReadOnlyResourceDiskSize,
      logDiskSize: DescribeTenantResponseBodyTenantReadOnlyResourceLogDiskSize,
      memory: DescribeTenantResponseBodyTenantReadOnlyResourceMemory,
      unitNum: 'number',
    };
  }

  validate() {
    if(this.capacityUnit && typeof (this.capacityUnit as any).validate === 'function') {
      (this.capacityUnit as any).validate();
    }
    if(this.cpu && typeof (this.cpu as any).validate === 'function') {
      (this.cpu as any).validate();
    }
    if(this.diskSize && typeof (this.diskSize as any).validate === 'function') {
      (this.diskSize as any).validate();
    }
    if(this.logDiskSize && typeof (this.logDiskSize as any).validate === 'function') {
      (this.logDiskSize as any).validate();
    }
    if(this.memory && typeof (this.memory as any).validate === 'function') {
      (this.memory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

