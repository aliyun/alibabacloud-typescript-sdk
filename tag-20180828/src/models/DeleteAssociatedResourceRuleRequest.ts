// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAssociatedResourceRuleRequest extends $dara.Model {
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
   * The name of the associated resource tagging rule.
   * 
   * For more information, see the **Rule Name** column in [Resource types that support the Associated Resource Tagging feature](https://help.aliyun.com/document_detail/2586330.html).
   * 
   * @example
   * rule:AttachEni-DetachEni-TagInstance:Ecs-Instance:Ecs-Eni
   */
  settingName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      settingName: 'SettingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      settingName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

