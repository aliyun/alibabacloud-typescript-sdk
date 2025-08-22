// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The type of the protection policy. Valid values:
   * 
   * *   waf_group: basic web protection
   * *   custom_acl: custom protection
   * *   whitelist: whitelist
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The number of domain names that use the protection policy.
   * 
   * @example
   * 22
   */
  domainCount?: number;
  /**
   * @remarks
   * The time when the protection policy was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-29T17:08:45Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the protection policy.
   * 
   * @example
   * 100001
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the protection policy.
   * 
   * @example
   * policy_test
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the protection policy. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  policyStatus?: string;
  /**
   * @remarks
   * Indicates whether the current policy is the default policy. Valid values:
   * 
   * *   default
   * *   custom
   * 
   * @example
   * default
   */
  policyType?: string;
  /**
   * @remarks
   * The protection rule configurations corresponding to the protection policy. The configurations only support Bot management. For more information, see [BatchCreateDcdnWafRules](~~BatchCreateDcdnWafRules~~).
   * 
   * @example
   * {     "type":"target_type",     "status":"on",     "config":{"target":"app"},     "action":""   }
   */
  ruleConfigs?: string;
  /**
   * @remarks
   * The number of protection rules in the protection policy.
   * 
   * @example
   * 9
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      domainCount: 'DomainCount',
      gmtModified: 'GmtModified',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      policyType: 'PolicyType',
      ruleConfigs: 'RuleConfigs',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      domainCount: 'number',
      gmtModified: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      policyType: 'string',
      ruleConfigs: 'string',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the protection policy.
   */
  policy?: DescribeDcdnWafPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: DescribeDcdnWafPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

