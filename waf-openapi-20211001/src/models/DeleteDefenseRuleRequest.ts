// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDefenseRuleRequest extends $dara.Model {
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
   * Specifies whether to enable the dry run mode. If you do not specify this parameter, a normal request is initiated. Valid values:
   * - **true**: initiates a dry run request. The system only checks whether the request meets the execution conditions and does not perform the operations specified in the request. If the dry run fails, the system returns the corresponding error code. If the dry run succeeds, the system returns the Defense.Control.DryRunOperation error code.
   * - **false**: initiates a normal request. If the check succeeds, the system performs the operations specified in the request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
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
   * The protected object to which the rules to be deleted apply.
   * > This parameter is required only when **DefenseType** is set to **resource**.
   * 
   * @example
   * rencs***-waf
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
   * The type of the protection target. This parameter applies to rules whose **DefenseType** is **resource**. Valid values:
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
   * The IDs of the protection rules to be deleted. Separate multiple rule IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 2223455,23354,465565
   */
  ruleIds?: string;
  /**
   * @remarks
   * The ID of the protection template to be deleted.
   * > This parameter is required only when **DefenseType** is set to **template**.
   * 
   * @example
   * 2221
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      ruleIds: 'RuleIds',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      ruleIds: 'string',
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

