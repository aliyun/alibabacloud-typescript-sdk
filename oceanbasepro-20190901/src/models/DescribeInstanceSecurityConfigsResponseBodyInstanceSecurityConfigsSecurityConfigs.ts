// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigsSecurityConfigs extends $dara.Model {
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
   * The group of the check.
   * 
   * @example
   * WHITELIST
   */
  configGroup?: string;
  /**
   * @remarks
   * The name of the specific check item.
   * 
   * @example
   * xxx
   */
  configName?: string;
  /**
   * @remarks
   * Specifies whether a risk is detected.
   * 
   * @example
   * true
   */
  risk?: boolean;
  /**
   * @remarks
   * Security recommendations.
   * 
   * @example
   * xxx
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

