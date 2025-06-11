// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits";


export class DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the zone is the primary zone.
   * 
   * @example
   * true
   */
  isPrimaryTenantZone?: boolean;
  /**
   * @remarks
   * The ID of the replica.
   * 
   * @example
   * cn-hangzhou-h-z0
   */
  logicalZone?: string;
  /**
   * @remarks
   * The type of the read-only replica.
   * 
   * @example
   * ROW_STORE
   */
  readOnlyReplicaType?: string;
  /**
   * @remarks
   * The replica type of the tenant.
   * 
   * @example
   * FULL
   */
  replicaType?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  tenantZoneId?: string;
  /**
   * @remarks
   * The role to access the zone. Valid values: 
   * * ReadWrite: a role that has the read and write privileges. 
   * * ReadOnly: a role that has only the read-only privilege.
   * 
   * @example
   * ReadWrite
   */
  tenantZoneRole?: string;
  /**
   * @remarks
   * The information about the resource units.
   */
  units?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits[];
  static names(): { [key: string]: string } {
    return {
      isPrimaryTenantZone: 'IsPrimaryTenantZone',
      logicalZone: 'LogicalZone',
      readOnlyReplicaType: 'ReadOnlyReplicaType',
      replicaType: 'ReplicaType',
      tenantZoneId: 'TenantZoneId',
      tenantZoneRole: 'TenantZoneRole',
      units: 'Units',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPrimaryTenantZone: 'boolean',
      logicalZone: 'string',
      readOnlyReplicaType: 'string',
      replicaType: 'string',
      tenantZoneId: 'string',
      tenantZoneRole: 'string',
      units: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits },
    };
  }

  validate() {
    if(Array.isArray(this.units)) {
      $dara.Model.validateArray(this.units);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

