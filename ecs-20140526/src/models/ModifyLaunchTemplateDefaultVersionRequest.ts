// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLaunchTemplateDefaultVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The default version number of the instance launch template.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  defaultVersionNumber?: number;
  /**
   * @remarks
   * The ID of the launch template. You must specify the LaunchTemplateId or LaunchTemplateName parameter to determine an instance launch template.
   * 
   * @example
   * lt-s-bp177juajht6****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the instance launch template. You must specify the LaunchTemplateId or LaunchTemplateName parameter to determine an instance launch template.
   * 
   * @example
   * testLaunchTemplateName
   */
  launchTemplateName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the launch template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      defaultVersionNumber: 'DefaultVersionNumber',
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
      defaultVersionNumber: 'number',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

