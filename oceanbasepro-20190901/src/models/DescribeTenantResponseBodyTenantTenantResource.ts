// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantResponseBodyTenantTenantResourceCapacityUnit } from "./DescribeTenantResponseBodyTenantTenantResourceCapacityUnit";
import { DescribeTenantResponseBodyTenantTenantResourceCpu } from "./DescribeTenantResponseBodyTenantTenantResourceCpu";
import { DescribeTenantResponseBodyTenantTenantResourceDiskSize } from "./DescribeTenantResponseBodyTenantTenantResourceDiskSize";
import { DescribeTenantResponseBodyTenantTenantResourceLogDiskSize } from "./DescribeTenantResponseBodyTenantTenantResourceLogDiskSize";
import { DescribeTenantResponseBodyTenantTenantResourceMemory } from "./DescribeTenantResponseBodyTenantTenantResourceMemory";


export class DescribeTenantResponseBodyTenantTenantResource extends $dara.Model {
  /**
   * @remarks
   * The information about capacity units.
   */
  capacityUnit?: DescribeTenantResponseBodyTenantTenantResourceCapacityUnit;
  /**
   * @remarks
   * The information about the CPU resources of the tenant.
   */
  cpu?: DescribeTenantResponseBodyTenantTenantResourceCpu;
  /**
   * @remarks
   * The information about the disk resources of the tenant.
   */
  diskSize?: DescribeTenantResponseBodyTenantTenantResourceDiskSize;
  /**
   * @remarks
   * The information about the log disk resources of the tenant.
   */
  logDiskSize?: DescribeTenantResponseBodyTenantTenantResourceLogDiskSize;
  /**
   * @remarks
   * The information about the memory resources of the tenant.
   */
  memory?: DescribeTenantResponseBodyTenantTenantResourceMemory;
  /**
   * @remarks
   * The number of resource units for the tenant.
   * 
   * @example
   * 1
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
      capacityUnit: DescribeTenantResponseBodyTenantTenantResourceCapacityUnit,
      cpu: DescribeTenantResponseBodyTenantTenantResourceCpu,
      diskSize: DescribeTenantResponseBodyTenantTenantResourceDiskSize,
      logDiskSize: DescribeTenantResponseBodyTenantTenantResourceLogDiskSize,
      memory: DescribeTenantResponseBodyTenantTenantResourceMemory,
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

