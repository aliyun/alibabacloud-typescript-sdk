// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRuleResponseBodyRule extends $dara.Model {
  /**
   * @remarks
   * The configuration of the protection rule, returned as a JSON string. For more information, see the **Protection rule parameters** section in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
   * 
   * @example
   * {\\"status\\":1,\\"policyId\\":1012,\\"action\\":\\"block\\"}
   */
  config?: string;
  /**
   * @remarks
   * The origin of the protection rule. This parameter indicates whether the rule was created by the user or by the system. Valid values:
   * 
   * - **custom**: a custom rule.
   * 
   * - **system**: a system-generated rule.
   * 
   * @example
   * custom
   */
  defenseOrigin?: string;
  /**
   * @remarks
   * The scenario to which the protection rule applies.
   * 
   * If the **DefenseType** parameter is set to **template**, the valid values are:
   * 
   * - **waf_group**: basic protection with regular expression rules.
   * 
   * - **waf_base**: web core protection.
   * 
   * - **waf_base_compliance**: basic protection with protocol compliance rules.
   * 
   * - **waf_base_sema**: basic protection with semantic analysis rules.
   * 
   * - **cc**: HTTP flood protection.
   * 
   * - **antiscan_dirscan**: directory traversal blocking in scan protection.
   * 
   * - **antiscan_highfreq**: high-frequency scan blocking in scan protection.
   * 
   * - **antiscan_scantools**: scanning tool blocking in scan protection.
   * 
   * - **ip_blacklist**: an IP address blacklist.
   * 
   * - **custom_acl**: a custom rule.
   * 
   * - **region_block**: a location blacklist.
   * 
   * - **tamperproof**: webpage tamper protection.
   * 
   * - **dlp**: data leakage prevention.
   * 
   * - **custom_response_block**: a custom response.
   * 
   * - **spike_throttle**: peak traffic throttling.
   * 
   * If the **DefenseType** parameter is set to **resource**, the valid values are:
   * 
   * - **account_identifier**: account identification.
   * 
   * - **custom_response**: a custom response.
   * 
   * - **waf_codec**: data decoding settings.
   * 
   * If the **DefenseType** parameter is set to **global**, the valid values are:
   * 
   * - **regular_custom**: a custom regular expression.
   * 
   * - **address_book**: an IP address book.
   * 
   * - **custom_response**: a custom response.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The type of the protection rule. Valid values:
   * 
   * - **template** (default): a protection rule template.
   * 
   * - **resource**: a rule for a protected object.
   * 
   * - **global**: a global rule.
   * 
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @remarks
   * The time when the protection rule was modified. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665196746000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The protected object to which the protection rule applies.
   * 
   * > This parameter is returned only if the **DefenseType** parameter is set to **resource**.
   * 
   * @example
   * rencs***-waf
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the protection rule.
   * 
   * @example
   * 2732975
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the protection rule.
   * 
   * @example
   * test1
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the protection rule. Valid values:
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * > This parameter is returned only if the **DefenseType** parameter is set to **template**.
   * 
   * @example
   * 9114
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      defenseOrigin: 'DefenseOrigin',
      defenseScene: 'DefenseScene',
      defenseType: 'DefenseType',
      gmtModified: 'GmtModified',
      resource: 'Resource',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      defenseOrigin: 'string',
      defenseScene: 'string',
      defenseType: 'string',
      gmtModified: 'number',
      resource: 'string',
      ruleId: 'number',
      ruleName: 'string',
      status: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the protection rule.
   */
  rule?: DescribeDefenseRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: DescribeDefenseRuleResponseBodyRule,
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

