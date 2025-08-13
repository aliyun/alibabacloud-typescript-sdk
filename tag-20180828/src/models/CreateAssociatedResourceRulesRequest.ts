// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAssociatedResourceRulesRequestCreateRulesList extends $dara.Model {
  existingStatus?: string;
  /**
   * @remarks
   * The name of the associated resource tagging rule.
   * 
   * For more information, see the **Rule Name** column in [Resource types that support the Associated Resource Tagging feature](https://help.aliyun.com/document_detail/2586330.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rule:AttachEni-DetachEni-TagInstance:Ecs-Instance:Ecs-Eni
   */
  settingName?: string;
  /**
   * @remarks
   * Specifies whether to enable the associated resource tagging rule. Valid values:
   * 
   * *   Enable (default)
   * *   Disable
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The tag keys to which the associated resource tagging rule applies.
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
   * The associated resource tagging rules that you want to create.
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

