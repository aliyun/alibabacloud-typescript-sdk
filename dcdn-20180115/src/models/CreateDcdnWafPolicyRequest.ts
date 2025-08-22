// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDcdnWafPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the WAF protection policy. Valid values:
   * 
   * *   waf_group: basic web protection
   * *   custom_acl: custom protection
   * *   whitelist: IP address whitelist
   * *   ip_blacklist: IP address blacklist
   * *   region_block: region blacklist
   * *   bot: bot management
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The name of the protection policy. The name can be up to 64 characters in length and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * policy_test
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the protection policy. Valid values:
   * 
   * *   on: The policy is enabled.
   * *   off: The policy is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  policyStatus?: string;
  /**
   * @remarks
   * Specifies whether to set the current policy as the default policy. Valid values:
   * 
   * *   default: sets the current policy as the default policy.
   * *   custom: does not set the current policy as the default policy.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      policyName: 'string',
      policyStatus: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

