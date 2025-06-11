// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantResponseBodyTenantTenantZonesTenantZoneReplicas } from "./DescribeTenantResponseBodyTenantTenantZonesTenantZoneReplicas";


export class DescribeTenantResponseBodyTenantTenantZones extends $dara.Model {
  /**
   * @remarks
   * The region where the zone of the tenant resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
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
   * The zone replicas of the tenant.
   */
  tenantZoneReplicas?: DescribeTenantResponseBodyTenantTenantZonesTenantZoneReplicas[];
  /**
   * @remarks
   * The role of the zone of the tenant.
   * 
   * @example
   * ReadWrite
   */
  tenantZoneRole?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      tenantZoneId: 'TenantZoneId',
      tenantZoneReplicas: 'TenantZoneReplicas',
      tenantZoneRole: 'TenantZoneRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantZoneId: 'string',
      tenantZoneReplicas: { 'type': 'array', 'itemType': DescribeTenantResponseBodyTenantTenantZonesTenantZoneReplicas },
      tenantZoneRole: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tenantZoneReplicas)) {
      $dara.Model.validateArray(this.tenantZoneReplicas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

