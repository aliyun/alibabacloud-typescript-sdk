// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAssociatedResourceRulesRequestCreateRulesList extends $dara.Model {
  existingStatus?: string;
  /**
   * @remarks
   * The setting name of the associated resource tag rule.
   * 
   * For valid values, see the **Setting name** column in [Resources that support associated resource tagging](https://help.aliyun.com/document_detail/2586330.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rule:AttachEni-DetachEni-TagInstance:Ecs-Instance:Ecs-Eni
   */
  settingName?: string;
  /**
   * @remarks
   * Specifies whether to enable the associated resource tag rule. Valid values:
   * 
   * - Enable (default): The rule is enabled.
   * 
   * - Disable: The rule is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The tag keys to which the rule applies.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      existingStatus: 'ExistingStatus',
      settingName: 'SettingName',
      status: 'Status',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existingStatus: 'string',
      settingName: 'string',
      status: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssociatedResourceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * A list of associated resource tag rules.
   */
  createRulesList?: CreateAssociatedResourceRulesRequestCreateRulesList[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      createRulesList: 'CreateRulesList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createRulesList: { 'type': 'array', 'itemType': CreateAssociatedResourceRulesRequestCreateRulesList },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.createRulesList)) {
      $dara.Model.validateArray(this.createRulesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

