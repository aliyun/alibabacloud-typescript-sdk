// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The protection scenario for the rule.
   * 
   * When **DefenseType** is **template**, valid values are:
   * 
   * - **waf_group**: basic protection.
   * 
   * - **waf_base**: new version of Web core protection.
   * 
   * - **antiscan**: scan protection.
   * 
   * - **ip_blacklist**: IP blacklist.
   * 
   * - **custom_acl**: custom rules.
   * 
   * - **whitelist**: whitelist.
   * 
   * - **region_block**: location blacklist.
   * 
   * - **custom_response**: legacy custom response.
   * 
   * - **cc**: HTTP flood protection.
   * 
   * - **tamperproof**: webpage tamper protection.
   * 
   * - **dlp**: data leak prevention.
   * 
   * - **spike_throttle**: peak traffic throttling.
   * 
   * When **DefenseType** is **resource**, valid values are:
   * 
   * - **account_identifier**: account extraction.
   * 
   * - **custom_response**: new version of custom response.
   * 
   * - **waf_codec**: decoding.
   * 
   * When **DefenseType** is **global**, valid values are:
   * 
   * - **regular_custom**: custom regex.
   * 
   * - **address_book**: address book.
   * 
   * - **custom_response**: new version of custom response.
   * 
   * > For globally configured custom responses, users can reference them under protected objects or rules. When referenced at different levels, the effective logic follows this order: rule level > protected object level > default page.
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
   * - **template** (default): template-based protection rules.
   * 
   * - **resource**: rules applied at the protected object level.
   * 
   * - **global**: global-level rules.
   * 
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object associated with the rule.
   * 
   * > Provide this parameter only when **DefenseType** is **resource**.
   * 
   * @example
   * sec****-waf
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The rule configuration content, specified as a JSON string.
   * 
   * > The specific parameters vary based on the specified **DefenseType** (**DefenseScene**). For details, see **Protection Rule Parameter Descriptions**.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the protection template to which the rule belongs.
   * 
   * > Provide this parameter only when **DefenseType** is **template**.
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

