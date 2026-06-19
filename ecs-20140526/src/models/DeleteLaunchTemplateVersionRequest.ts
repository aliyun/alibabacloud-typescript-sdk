// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLaunchTemplateVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The version numbers of the launch template to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  deleteVersion?: number[];
  /**
   * @remarks
   * The ID of the launch template to delete. For more information, see [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html).
   * 
   * @example
   * lt-bp1apo0bbbkuy0rj****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template.
   * 
   * @example
   * testLaunchTemplateName
   */
  launchTemplateName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the launch template. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteVersion: 'DeleteVersion',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteVersion: { 'type': 'array', 'itemType': 'number' },
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deleteVersion)) {
      $dara.Model.validateArray(this.deleteVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

