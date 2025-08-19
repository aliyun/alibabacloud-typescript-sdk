// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResidentResourceAllocationStatus } from "./ResidentResourceAllocationStatus";
import { ResidentResourceCapacity } from "./ResidentResourceCapacity";


export class ResidentResourcePool extends $dara.Model {
  /**
   * @remarks
   * 资源池实时分配情况，包含每个函数的具体分配情况
   */
  allocationStatus?: ResidentResourceAllocationStatus;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  createdTime?: string;
  /**
   * @remarks
   * 资源池过期时间
   */
  expireTime?: string;
  /**
   * @remarks
   * 上次修改时间，包含扩容、续费、更名等操作
   */
  lastModifiedTime?: string;
  residentResourcePoolId?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   */
  residentResourcePoolName?: string;
  /**
   * @remarks
   * 资源池总体规格
   */
  resourcePoolCapacity?: ResidentResourceCapacity;
  resourcePoolConfig?: ResidentResourceCapacity;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'allocationStatus',
      createdTime: 'createdTime',
      expireTime: 'expireTime',
      lastModifiedTime: 'lastModifiedTime',
      residentResourcePoolId: 'residentResourcePoolId',
      residentResourcePoolName: 'residentResourcePoolName',
      resourcePoolCapacity: 'resourcePoolCapacity',
      resourcePoolConfig: 'resourcePoolConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: ResidentResourceAllocationStatus,
      createdTime: 'string',
      expireTime: 'string',
      lastModifiedTime: 'string',
      residentResourcePoolId: 'string',
      residentResourcePoolName: 'string',
      resourcePoolCapacity: ResidentResourceCapacity,
      resourcePoolConfig: ResidentResourceCapacity,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

