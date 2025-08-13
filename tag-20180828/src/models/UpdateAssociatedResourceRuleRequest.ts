// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssociatedResourceRuleRequest extends $dara.Model {
  existingStatus?: string;
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
  /**
   * @remarks
   * The setting name of the associated resource tag rule.
   * 
   * For specific values, see the **Rule Setting Name** column in [Resources that Support Associated Resource Tag Settings](https://help.aliyun.com/document_detail/2586330.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rule:AssociateEip-UnassociateEip-TagInstance:Ecs-Instance:Vpc-Eip
   */
  settingName?: string;
  /**
   * @remarks
   * Indicates whether to enable the associated resource tag rule. Values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * List of tag keys affected by the associated resource tag rule.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      existingStatus: 'ExistingStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      settingName: 'SettingName',
      status: 'Status',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existingStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
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

