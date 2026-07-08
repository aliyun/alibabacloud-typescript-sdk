// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The scenario to which the protection rule is applied.
   * 
   * If **DefenseType** is set to **template**, valid values are:
   * 
   * - **waf_group**: basic protection.
   * 
   * - **waf_base**: web core protection.
   * 
   * - **antiscan**: scan protection.
   * 
   * - **ip_blacklist**: IP address blacklist.
   * 
   * - **custom_acl**: custom rule.
   * 
   * - **whitelist**: whitelist.
   * 
   * - **region_block**: geo-blocking.
   * 
   * - **custom_response**: custom response.
   * 
   * - **cc**: HTTP flood protection.
   * 
   * - **tamperproof**: webpage tamper-proofing.
   * 
   * - **dlp**: data leakage prevention.
   * 
   * - **spike_throttle**: rate limiting for bursts of traffic.
   * 
   * - **bot_manager**: bot management.
   * 
   * If **DefenseType** is set to **resource**, valid values are:
   * 
   * - **account_identifier**: account identification.
   * 
   * - **custom_response**: custom response.
   * 
   * - **waf_codec**: decoding.
   * 
   * If **DefenseType** is set to **global**, valid values are:
   * 
   * - **regular_custom**: custom regular expression.
   * 
   * - **address_book**: address book.
   * 
   * - **custom_response**: custom response.
   * 
   * > You can apply a global custom response to a protected object or a rule. If you configure custom response rules at different levels, the rule with the finest-grained scope takes precedence. The priority is as follows: rule > protected object > default page.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The type of the protection rule. Valid values:
   * 
   * - **template** (default): a template-based protection rule.
   * 
   * - **resource**: a rule for a specific protected object.
   * 
   * - **global**: a global protection rule.
   * 
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to get the ID of your WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object to which the rule applies.
   * 
   * > This parameter is required only when **DefenseType** is set to **resource**.
   * 
   * @example
   * sec****-waf
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The details of the protection rule. This value is a JSON string.
   * 
   * > The parameters in the JSON string vary based on the value of **DefenseScene**. For more information, see **Protection rule parameters**.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * > This parameter is required only when **DefenseType** is set to **template**.
   * 
   * @example
   * 1122
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      rules: 'Rules',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseType: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      rules: 'string',
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

