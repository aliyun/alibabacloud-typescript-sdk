// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResidentResourceAllocationStatus } from "./ResidentResourceAllocationStatus";
import { ResidentResourceCapacity } from "./ResidentResourceCapacity";
import { TimedPoolConfig } from "./TimedPoolConfig";


export class ResidentResourcePool extends $dara.Model {
  /**
   * @remarks
   * The real-time allocation status of the resource pool, including the specific allocation details for each function.
   */
  allocationStatus?: ResidentResourceAllocationStatus;
  associatedPoolId?: string;
  /**
   * @remarks
   * The resource property field that represents the creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  createdTime?: string;
  /**
   * @remarks
   * The expiration time of the resource pool.
   */
  expireTime?: string;
  /**
   * @remarks
   * The last modification time, including operations such as scaling, renewal, and renaming.
   */
  lastModifiedTime?: string;
  poolType?: string;
  residentResourcePoolId?: string;
  /**
   * @remarks
   * The resource property field that represents the resource name.
   */
  residentResourcePoolName?: string;
  /**
   * @remarks
   * The overall specifications of the resource pool.
   */
  resourcePoolCapacity?: ResidentResourceCapacity;
  resourcePoolConfig?: ResidentResourceCapacity;
  timedConfig?: TimedPoolConfig;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'allocationStatus',
      associatedPoolId: 'associatedPoolId',
      createdTime: 'createdTime',
      expireTime: 'expireTime',
      lastModifiedTime: 'lastModifiedTime',
      poolType: 'poolType',
      residentResourcePoolId: 'residentResourcePoolId',
      residentResourcePoolName: 'residentResourcePoolName',
      resourcePoolCapacity: 'resourcePoolCapacity',
      resourcePoolConfig: 'resourcePoolConfig',
      timedConfig: 'timedConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: ResidentResourceAllocationStatus,
      associatedPoolId: 'string',
      createdTime: 'string',
      expireTime: 'string',
      lastModifiedTime: 'string',
      poolType: 'string',
      residentResourcePoolId: 'string',
      residentResourcePoolName: 'string',
      resourcePoolCapacity: ResidentResourceCapacity,
      resourcePoolConfig: ResidentResourceCapacity,
      timedConfig: TimedPoolConfig,
    };
  }

  validate() {
    if(this.allocationStatus && typeof (this.allocationStatus as any).validate === 'function') {
      (this.allocationStatus as any).validate();
    }
    if(this.resourcePoolCapacity && typeof (this.resourcePoolCapacity as any).validate === 'function') {
      (this.resourcePoolCapacity as any).validate();
    }
    if(this.resourcePoolConfig && typeof (this.resourcePoolConfig as any).validate === 'function') {
      (this.resourcePoolConfig as any).validate();
    }
    if(this.timedConfig && typeof (this.timedConfig as any).validate === 'function') {
      (this.timedConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

