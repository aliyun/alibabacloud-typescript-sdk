// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafRuleResponseBodyRule extends $dara.Model {
  /**
   * @remarks
   * The type of the protection policy. Valid values:
   * 
   * *   waf_group: basic web protection
   * *   custom_acl: custom protection
   * *   whitelist: IP address whitelist
   * 
   * @example
   * custom_acl
   */
  defenseScene?: string;
  /**
   * @remarks
   * The time when the scaling group was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * 200001
   */
  policyId?: number;
  /**
   * @remarks
   * The configurations of the protection rule.
   * 
   * @example
   * {\\"action\\":\\"monitor\\",\\"actionExternal\\":\\"{}\\",\\"ccStatus\\":1,\\"conditions\\":[{\\"key\\":\\"URL\\",\\"opValue\\":\\"eq\\",\\"targetKey\\":\\"request_uri\\",\\"values\\":\\"/example\\"},{\\"key\\":\\"Header\\",\\"opValue\\":\\"eq\\",\\"subKey\\":\\"trt\\",\\"targetKey\\":\\"header.trt\\",\\"values\\":\\"3333\\"}],\\"effect\\":\\"service\\",\\"name\\":\\"aaa333\\",\\"origin\\":\\"custom\\",\\"ratelimit\\":{\\"interval\\":5,\\"status\\":{\\"code\\":404,\\"count\\":2,\\"stat\\":{\\"mode\\":\\"count\\",\\"value\\":2.0}},\\"target\\":\\"remote_addr\\",\\"threshold\\":2,\\"ttl\\":1800}}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The ID of the protection rule.
   * 
   * @example
   * 100001
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the protection rule.
   * 
   * @example
   * rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the protection rule. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      gmtModified: 'GmtModified',
      policyId: 'PolicyId',
      ruleConfig: 'RuleConfig',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      gmtModified: 'string',
      policyId: 'number',
      ruleConfig: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the protection rule.
   */
  rule?: DescribeDcdnWafRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: DescribeDcdnWafRuleResponseBodyRule,
    };
  }

  validate() {
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

