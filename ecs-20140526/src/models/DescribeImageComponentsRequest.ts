// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageComponentsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: 1 to 20.
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
   * The type of the image component.
   * 
   * Valid values:
   * 
   * *   Build
   * *   Test
   * 
   * @example
   * null
   */
  componentType?: string;
  /**
   * @remarks
   * The version number of the image component in the \\<major>.\\<minor>.\\<patch> format. You can set \\<major>, \\<minor>, and \\<patch> to non-negative integers, or set one of \\<major>, \\<minor>, and \\<patch> to the wildcard (\\*) and the other two to non-negative integers.
   * 
   * >  This parameter takes effect only if you specify Name.
   * 
   * @example
   * null
   */
  componentVersion?: string;
  /**
   * @remarks
   * The IDs of image components. Valid values of N: 1 to 20.
   * 
   * @example
   * ic-bp67acfmxazb4p****
   */
  imageComponentId?: string[];
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 500.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the image component. You must specify an exact name to search for the image component.
   * 
   * @example
   * testComponent
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the image component. Valid values:
   * 
   * *   SELF: the custom component that you created.
   * *   ALIYUN: the system component provided by Alibaba Cloud.
   * 
   * @example
   * SELF
   */
  owner?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the image component. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
   * 
   * >  Resources in the default resource group are displayed in the response regardless of how this parameter is set.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the operating system supported by the image component.
   * 
   * Valid values:
   * 
   * *   Linux
   * *   Windows
   * 
   * @example
   * null
   */
  systemType?: string;
  /**
   * @remarks
   * The tags of the image component.
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

