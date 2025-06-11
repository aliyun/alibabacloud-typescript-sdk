// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigsSecurityConfigs } from "./DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigsSecurityConfigs";


export class DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigs extends $dara.Model {
  /**
   * @remarks
   * The number of detected tenant security risks.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The list of risks.
   */
  securityConfigs?: DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigsSecurityConfigs[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * xxx
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * xxx
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      riskCount: 'RiskCount',
      securityConfigs: 'SecurityConfigs',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskCount: 'number',
      securityConfigs: { 'type': 'array', 'itemType': DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigsSecurityConfigs },
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityConfigs)) {
      $dara.Model.validateArray(this.securityConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

