// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigsSecurityConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Check whether the scope of the cluster allowlist is too big
   */
  configDescription?: string;
  /**
   * @remarks
   * The group of the risk.
   * 
   * @example
   * WHITELIST
   */
  configGroup?: string;
  /**
   * @remarks
   * The name of the risk.
   * 
   * @example
   * WHITELIST_RANGE_LARGE
   */
  configName?: string;
  /**
   * @remarks
   * Indicates whether the risk causes security issues.
   * 
   * @example
   * true
   */
  risk?: boolean;
  /**
   * @remarks
   * The description of the risk.
   * 
   * @example
   * The scope of the allowlist is too big.
   */
  riskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      configDescription: 'ConfigDescription',
      configGroup: 'ConfigGroup',
      configName: 'ConfigName',
      risk: 'Risk',
      riskDescription: 'RiskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDescription: 'string',
      configGroup: 'string',
      configName: 'string',
      risk: 'boolean',
      riskDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

