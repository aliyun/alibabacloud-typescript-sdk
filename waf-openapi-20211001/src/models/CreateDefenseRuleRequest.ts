// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF protection scenario to create.
   * 
   * When the protection rule type **DefenseType** is set to **template**, valid values:
   * 
   * - **waf_group**: basic protection.
   * - **waf_base**: new version of Web Core Protection.
   * 
   * - **antiscan**: Scan Protection.
   * 
   * - **ip_blacklist**: IP Blacklist.
   * 
   * - **custom_acl**: Custom Rule.
   * 
   * - **whitelist**: Whitelist.
   * 
   * - **region_block**: Location Blacklist.
   * 
   * - **custom_response**: legacy Custom Response.
   * 
   * - **cc**: HTTP Flood Protection.
   * 
   * - **tamperproof**: web tamper proofing.
   * 
   * - **dlp**: Information Leak Prevention.
   * 
   * - **spike_throttle**: peak traffic throttling.
   * 
   * - **bot_manager**: BOT Management.
   * 
   * 
   * When the protection rule type **DefenseType** is set to **resource**, valid values:
   * 
   * - **account_identifier**: Account Extraction.
   * 
   * - **custom_response**: new version of Custom Response.
   * 
   * - **waf_codec**: Decoding.
   * 
   * - **websdk**: WebSDK Integration.
   * 
   * When the protection rule type **DefenseType** is set to **global**, valid values:
   * 
   * - **regular_custom**: Custom Regex.
   * 
   * - **address_book**: Address Book.
   * 
   * - **custom_response**: new version of Custom Response.
   * > For the custom response in global configuration, users can reference it at the protected object or rule level. When custom response rules are referenced at different dimensions, the actual effective logic is: rule level > protected object level > default page.
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
   * Specifies whether to enable the dry run mode. If you do not specify this parameter, a normal request is sent. Valid values:
   * - **true**: A dry run request is sent. The system only checks whether the request meets the execution conditions without performing the specified operation. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the error code Defense.Control.DryRunOperation is returned.
   * - **false**: A normal request is sent. The specified operation is performed after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of your current WAF instance.
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
   * The protected object associated with the rule to be created.
   * > This parameter is required only when **DefenseType** is set to **resource**.
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
   * The rule configuration content, which is a string converted from a JSON-formatted array of parameters.
   * > The specific parameters vary depending on the specified **protection rule type** (**DefenseScene**). For more information, refer to **Protection rule parameter descriptions**.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the protection template for the protection rule to be created.
   * > This parameter is required only when **DefenseType** is set to **template**.
   * > There is an upper limit on the number of rules that can be created within the same protection template. For specific limits, refer to **Rule quantity limits**. When the rule quantity has reached the upper limit, you can call the [CreateDefenseTemplate](https://help.aliyun.com/document_detail/461613.html) operation to create a new protection template. You can also call the [ModifyDefenseRule](https://help.aliyun.com/document_detail/461422.html) operation to modify an existing rule.
   * 
   * @example
   * 1122
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseType: 'DefenseType',
      dryRun: 'DryRun',
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
      dryRun: 'boolean',
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

