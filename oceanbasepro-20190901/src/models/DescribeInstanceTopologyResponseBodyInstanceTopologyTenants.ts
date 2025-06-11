// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones";


export class DescribeInstanceTopologyResponseBodyInstanceTopologyTenants extends $dara.Model {
  /**
   * @remarks
   * The deployment mode of the primary zone. Valid values: 
   * * RANDOM. 
   * * STATIC.
   * 
   * @example
   * RANDOM
   */
  primaryZoneDeployType?: string;
  /**
   * @remarks
   * The number of CPU cores of the tenant.
   * 
   * @example
   * 2
   */
  tenantCpu?: number;
  /**
   * @remarks
   * The deployment type of the tenant. Valid values: 
   * * multiple: multi-IDC deployment. 
   * * single: single-IDC deployment. 
   * * dual: dual-IDC deployment.
   * 
   * @example
   * multiple
   */
  tenantDeployType?: string;
  /**
   * @remarks
   * The disk space of the tenant, in GB.
   * 
   * @example
   * 2
   */
  tenantDiskSize?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  /**
   * @remarks
   * The memory size of the tenant, in GB.
   * 
   * @example
   * 10
   */
  tenantMemory?: number;
  /**
   * @remarks
   * The mode of the tenant. Valid values: 
   * * Oracle  
   * * MySQL
   * 
   * @example
   * Oracle
   */
  tenantMode?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * pay_online
   */
  tenantName?: string;
  /**
   * @remarks
   * The status of the tenant. Valid values: 
   * * PENDING_CREATE: The tenant is being created. 
   * * RESTORE: The tenant is being restored. 
   * * ONLINE: The tenant is running. 
   * * SPEC_MODIFYING: The specification of the tenant is being modified. 
   * * ALLOCATING_INTERNET_ADDRESS: A public IP address is being allocated to the tenant. 
   * * PENDING_OFFLINE_INTERNET_ADDRESS: The public IP address is being disabled. 
   * * PRIMARY_ZONE_MODIFYING: The tenant is being switched to a new primary zone. 
   * * PARAMETER_MODIFYING: Parameters are being modified. 
   * * WHITE_LIST_MODIFYING: The allowlist is being modified.
   * 
   * @example
   * ONLINE
   */
  tenantStatus?: string;
  /**
   * @remarks
   * The number of CPU cores of a single node in the tenant.
   * 
   * @example
   * 4
   */
  tenantUnitCpu?: number;
  /**
   * @remarks
   * The memory size of a single node in the tenant, in GB.
   * 
   * @example
   * 16
   */
  tenantUnitMemory?: number;
  /**
   * @remarks
   * The number of resource units in the tenant.
   * 
   * @example
   * 1
   */
  tenantUnitNum?: number;
  /**
   * @remarks
   * The information about the zones.
   */
  tenantZones?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones[];
  static names(): { [key: string]: string } {
    return {
      primaryZoneDeployType: 'PrimaryZoneDeployType',
      tenantCpu: 'TenantCpu',
      tenantDeployType: 'TenantDeployType',
      tenantDiskSize: 'TenantDiskSize',
      tenantId: 'TenantId',
      tenantMemory: 'TenantMemory',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      tenantStatus: 'TenantStatus',
      tenantUnitCpu: 'TenantUnitCpu',
      tenantUnitMemory: 'TenantUnitMemory',
      tenantUnitNum: 'TenantUnitNum',
      tenantZones: 'TenantZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryZoneDeployType: 'string',
      tenantCpu: 'number',
      tenantDeployType: 'string',
      tenantDiskSize: 'number',
      tenantId: 'string',
      tenantMemory: 'number',
      tenantMode: 'string',
      tenantName: 'string',
      tenantStatus: 'string',
      tenantUnitCpu: 'number',
      tenantUnitMemory: 'number',
      tenantUnitNum: 'number',
      tenantZones: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones },
    };
  }

  validate() {
    if(Array.isArray(this.tenantZones)) {
      $dara.Model.validateArray(this.tenantZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

