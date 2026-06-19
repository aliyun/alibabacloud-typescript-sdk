// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageComponentsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20.
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

export class DescribeImageComponentsRequest extends $dara.Model {
  /**
   * @remarks
   * The component type.
   * 
   * Valid values:
   * - Build
   * - Test.
   * 
   * @example
   * Build
   */
  componentType?: string;
  /**
   * @remarks
   * The component version number in the format of major.minor.patch. All values are non-negative integers. You can also use the wildcard character (*) to replace one of the values for fuzzy matching.
   * >This parameter takes effect only when Name is specified.
   * 
   * @example
   * 1.0.*
   */
  componentVersion?: string;
  /**
   * @remarks
   * The ID of the image component to query. Valid values of N: 1 to 20.
   * 
   * @example
   * ic-bp67acfmxazb4p****
   */
  imageComponentId?: string[];
  /**
   * @remarks
   * The maximum number of entries per page for paging. Valid values: 1 to 500.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The image component name. Only exact match is supported.
   * 
   * @example
   * testComponent
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of `NextToken` returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The image component type. Valid values:
   * 
   * - SELF: custom image components that you created.
   * - ALIYUN: system components provided by Alibaba Cloud.
   * 
   * @example
   * SELF
   */
  owner?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  /**
   * @remarks
   * The resource group ID. If you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * >Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The operating system supported by the component.
   * 
   * Valid values:
   * - Linux
   * - Windows.
   * 
   * @example
   * Linux
   */
  systemType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeImageComponentsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      componentVersion: 'ComponentVersion',
      imageComponentId: 'ImageComponentId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      owner: 'Owner',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      systemType: 'SystemType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      componentVersion: 'string',
      imageComponentId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      owner: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      systemType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeImageComponentsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.imageComponentId)) {
      $dara.Model.validateArray(this.imageComponentId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

