// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssociatedResourceRuleRequest extends $dara.Model {
  existingStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The name of the Associated Resource Tag Rule setting.
   * 
   * For valid values, see the **Setting Name** column in [Resources that support the Associated Resource Tag Rule feature](https://help.aliyun.com/document_detail/2586330.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rule:AssociateEip-UnassociateEip-TagInstance:Ecs-Instance:Vpc-Eip
   */
  settingName?: string;
  /**
   * @remarks
   * The status of the Associated Resource Tag Rule. Valid values:
   * 
   * - Enable: The rule is enabled.
   * 
   * - Disable: The rule is disabled.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * A list of tag keys for the Associated Resource Tag Rule.
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

