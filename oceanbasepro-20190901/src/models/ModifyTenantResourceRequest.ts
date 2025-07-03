// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the CPU resources of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @example
   * 10000
   */
  iops?: string;
  /**
   * @remarks
   * The size of the log disk allocated to the tenant, in GB.
   * 
   * @example
   * 128
   */
  logDisk?: number;
  /**
   * @remarks
   * The memory size of the tenant, in GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  memory?: number;
  /**
   * @remarks
   * Specifies to create a read-only zone. Separate the names of multiple zones with commas (,).
   * 
   * @example
   * cn-shanghai-g-ro,cn-shanghai-h-ro
   * 
   * @deprecated
   */
  readOnlyZoneList?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      instanceId: 'InstanceId',
      iops: 'Iops',
      logDisk: 'LogDisk',
      memory: 'Memory',
      readOnlyZoneList: 'ReadOnlyZoneList',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      instanceId: 'string',
      iops: 'string',
      logDisk: 'number',
      memory: 'number',
      readOnlyZoneList: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

