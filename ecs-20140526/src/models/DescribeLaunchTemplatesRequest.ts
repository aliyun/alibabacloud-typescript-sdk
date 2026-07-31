// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLaunchTemplatesRequestTemplateTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the launch template. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count of resources that have all specified tags attached cannot exceed 1000. If the resource count exceeds 1000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the launch template. Valid values of N: 1 to 20.
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
   * The IDs of one or more launch templates.
   * 
   * - You can query up to 100 launch templates at a time.
   * 
   * - You must specify LaunchTemplateId or LaunchTemplateName to determine the template.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7q****
   */
  launchTemplateId?: string[];
  /**
   * @remarks
   * The names of one or more launch templates.
   * 
   * - You can query up to 100 launch templates at a time.
   * 
   * - You must specify LaunchTemplateId or LaunchTemplateName to determine the template.
   * 
   * @example
   * wd-152630748****
   */
  launchTemplateName?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the launch template list. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The ID of the resource group to which the launch template belongs. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * > Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-acfmxazb4p****
   */
  templateResourceGroupId?: string;
  /**
   * @remarks
   * The list of tag key-value pairs of the launch template itself.
   * > Currently, you can create and query tags of launch templates only by calling API operations. You cannot create or view tags in the console.
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

