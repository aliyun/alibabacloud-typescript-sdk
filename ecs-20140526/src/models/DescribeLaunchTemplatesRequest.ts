// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLaunchTemplatesRequestTemplateTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the launch template. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the number of resources with the specified tag cannot exceed 1000. If you use multiple tags to filter resources, the number of resources that are bound with all the specified tags cannot exceed 1000. If the number of resources exceeds 1000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query them.
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
   * An array of one or more launch template IDs.
   * 
   * - You can query up to 100 launch templates at a time.
   * 
   * - You must specify LaunchTemplateId or LaunchTemplateName to determine the templates.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7q****
   */
  launchTemplateId?: string[];
  /**
   * @remarks
   * An array of one or more launch template names.
   * 
   * - You can query up to 100 launch templates at a time.
   * 
   * - You must specify LaunchTemplateId or LaunchTemplateName to determine the templates.
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
   * The number of entries per page for a paginated query.
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
   * The ID of the resource group to which the launch template belongs. When you use this parameter to filter resources, the number of resources cannot exceed 1000.
   * 
   * > Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-acfmxazb4p****
   */
  templateResourceGroupId?: string;
  /**
   * @remarks
   * The list of tag key-value pairs of the launch template.
   * > Currently, you can create and query launch template tags only by calling API operations. The console does not support creating or viewing launch template tags.
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

