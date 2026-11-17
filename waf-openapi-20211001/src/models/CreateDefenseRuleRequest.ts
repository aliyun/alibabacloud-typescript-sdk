// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF protection scenario to be created.
   * 
   * Valid values when the protection rule type **DefenseType** is set to **template**:
   * 
   * - **waf_group**: basic protection.
   * - **waf_base**: new version of web core protection.
   * 
   * - **antiscan**: scan protection.
   * 
   * - **ip_blacklist**: IP blacklist.
   * 
   * - **custom_acl**: custom rules.
   * 
   * - **whitelist**: whitelist.
   * 
   * - **region_block**: area blocking.
   * 
   * - **custom_response**: custom response of the old version.
   * 
   * - **cc**: HTTP flood protection.
   * 
   * - **tamperproof**: web tamper-proofing.
   * 
   * - **dlp**: data leak prevention.
   * 
   * - **spike_throttle**: peak traffic throttling.
   * 
   * - **bot_manager**: bot management.
   * 
   * 
   * Valid values when the protection rule type **DefenseType** is set to **resource**:
   * 
   * -  **account_identifier**: account extraction.
   * 
   * - **custom_response**: custom response of the new version.
   * 
   * - **waf_codec**: decoding.
   * 
   * - **websdk**: WebSDK integration.
   * 
   * Valid values when the protection rule type **DefenseType** is set to **global**:
   * 
   * -  **regular_custom**: custom regular expressions.
   * 
   * - **address_book**: address book.
   * 
   * - **custom_response**: custom response of the new version.
   * > For globally configured custom responses, you can reference them under protected objects or rules. When custom response rules are referenced at different dimensions, the actual effective priority is: rule level > protected object level > default page.
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
   * Specifies whether to enable the dry run mode. If this parameter is not specified, a normal request is initiated. Valid values:
   * - **true**: initiates a dry run request. The system only checks whether the request meets the execution conditions and does not perform the operations specified in the request. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the error code Defense.Control.DryRunOperation is returned.
   * - **false**: initiates a normal request. The system performs the operations specified in the request after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of your WAF instance.
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
   * The protected object corresponding to the created rule.
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
   * The type of the protected target. This parameter applies to rules where **DefenseType** is set to **resource**. Valid values:
   * 
   * - **single** (default): a single protected object.
   * - **group**: a protection group.
   * 
   * @example
   * single
   */
  resourceType?: string;
  /**
   * @remarks
   * The rule configuration content, which is converted into a string in JSON format constructed by a series of parameters.
   * > The specific parameters involved vary depending on the specified **protection rule type** (**DefenseScene**). For more information, see **Protection rule parameter description**.
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
   * > The number of rules that can be created in a single protection template is limited. For more information, see **Rule quantity limits**. If the limit is reached, you can call the [CreateDefenseTemplate](https://help.aliyun.com/document_detail/461613.html) operation to create a new protection template, or call the [ModifyDefenseRule](https://help.aliyun.com/document_detail/461422.html) operation to modify an existing rule.
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
      resourceType: 'ResourceType',
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
      resourceType: 'string',
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

