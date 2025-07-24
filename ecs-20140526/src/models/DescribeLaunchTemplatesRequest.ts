// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLaunchTemplatesRequestTemplateTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the launch template. Valid values of N: 1 to 20.
   * 
   * If you specify a single tag to query resources, up to 1,000 resources to which the tag is added are returned. If you specify multiple tags to query resources, up to 1,000 resources to which all specified tags are added are returned. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the launch template. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of launch templates.
   * 
   * *   You can query up to 100 launch templates.
   * *   You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7q****
   */
  launchTemplateId?: string[];
  /**
   * @remarks
   * The names of launch templates.
   * 
   * *   You can query up to 100 launch templates.
   * *   You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
   * 
   * @example
   * wd-152630748****
   */
  launchTemplateName?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Page starts from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
  /**
   * @remarks
   * The ID of the resource group to which the launch template belongs. If you specify this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be returned.
   * 
   * >  The default resource group is not supported.
   * 
   * @example
   * rg-acfmxazb4p****
   */
  templateResourceGroupId?: string;
  /**
   * @remarks
   * The tags of the launch template.
   * 
   * >  You can only call API operations to add tags to and query the tags of a launch template. You cannot add tags to or view the tags of a launch template in the ECS console.
   */
  templateTag?: DescribeLaunchTemplatesRequestTemplateTag[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateResourceGroupId: 'TemplateResourceGroupId',
      templateTag: 'TemplateTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateId: { 'type': 'array', 'itemType': 'string' },
      launchTemplateName: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateResourceGroupId: 'string',
      templateTag: { 'type': 'array', 'itemType': DescribeLaunchTemplatesRequestTemplateTag },
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateId)) {
      $dara.Model.validateArray(this.launchTemplateId);
    }
    if(Array.isArray(this.launchTemplateName)) {
      $dara.Model.validateArray(this.launchTemplateName);
    }
    if(Array.isArray(this.templateTag)) {
      $dara.Model.validateArray(this.templateTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

