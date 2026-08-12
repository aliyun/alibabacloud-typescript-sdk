// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF protection scenario to create.
   * 
   * When the protection rule type **DefenseType** is set to **template**, valid values:
   * 
   * - **waf_group**: Basic Web Protection.
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
   * - **region_block**: Location Blacklist.
   * 
   * - **custom_response**: legacy custom response.
   * 
   * - **cc**: HTTP flood mitigation.
   * 
   * - **tamperproof**: web tamper proofing.
   * 
   * - **dlp**: information leak prevention.
   * 
   * - **spike_throttle**: peak traffic throttling.
   * 
   * - **bot_manager**: bot management.
   * 
   * 
   * When the protection rule type **DefenseType** is set to **resource**, valid values:
   * 
   * - **account_identifier**: account extraction.
   * 
   * - **custom_response**: new version of custom response.
   * 
   * - **waf_codec**: decoding.
   * 
   * - **websdk**: WebSDK integration.
   * 
   * When the protection rule type **DefenseType** is set to **global**, valid values:
   * 
   * - **regular_custom**: custom regular expression.
   * 
   * - **address_book**: address book.
   * 
   * - **custom_response**: new version of custom response.
   * >  The custom response in global configurations can be referenced by protected objects or rules. When custom response rules are referenced at different levels, the effective priority is: rule level > protected object level > default page.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The type of the protection rule.
   * 
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protection object associated with the rule to create.
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
   * The rule configuration content, which is a JSON string constructed from a series of parameters.
   * >  The specific parameters vary depending on the **mitigation setting type** (**DefenseScene**) that you specify. For more information, refer to **Protection rule parameter description**.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the protection template for which you want to create a protection rule.
   * > This parameter is required only when **DefenseType** is set to **template**.
   * > There is an upper limit on the number of rules that can be created in a protection template. For more information, see **Rule quantity limits**. If the number of rules has reached the upper limit, you can call the [CreateDefenseTemplate](https://help.aliyun.com/document_detail/461613.html) operation to create a new protection template. You can also call the [ModifyDefenseRule](https://help.aliyun.com/document_detail/461422.html) operation to modify an existing rule.
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

