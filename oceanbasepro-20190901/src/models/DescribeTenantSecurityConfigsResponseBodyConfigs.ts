// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigs } from "./DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigs";


export class DescribeTenantSecurityConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the check.
   * 
   * @example
   * xxx
   */
  checkId?: string;
  /**
   * @remarks
   * The time when the check was performed.
   * 
   * @example
   * 2023-08-07 15:30:00
   */
  checkTime?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The check result.
   */
  tenantSecurityConfigs?: DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigs[];
  /**
   * @remarks
   * The total number of security check items.
   * 
   * @example
   * 4
   */
  totalCheckCount?: number;
  /**
   * @remarks
   * The total number of detected security risks.
   * 
   * @example
   * 0
   */
  totalRiskCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkTime: 'CheckTime',
      instanceId: 'InstanceId',
      tenantSecurityConfigs: 'TenantSecurityConfigs',
      totalCheckCount: 'TotalCheckCount',
      totalRiskCount: 'TotalRiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkTime: 'string',
      instanceId: 'string',
      tenantSecurityConfigs: { 'type': 'array', 'itemType': DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigs },
      totalCheckCount: 'number',
      totalRiskCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tenantSecurityConfigs)) {
      $dara.Model.validateArray(this.tenantSecurityConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

