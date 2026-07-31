// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelinesRequestTag extends $dara.Model {
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

export class DescribeImagePipelinesRequest extends $dara.Model {
  /**
   * @remarks
   * The image template ID. Valid values of N: 1 to 20.
   * 
   * @example
   * ip-2ze5tsl5bp6nf2b3****
   */
  imagePipelineId?: string[];
  /**
   * @remarks
   * The maximum number of entries per page for paging queries. Valid values: 1 to 500.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * testImagePipeline
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of `NextToken` returned by the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
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
   * The ID of the enterprise resource group. When you use this parameter to filter resources, the resource count cannot exceed 1000.
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
   * The tags.
   */
  tag?: DescribeImagePipelinesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      imagePipelineId: 'ImagePipelineId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipelineId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeImagePipelinesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.imagePipelineId)) {
      $dara.Model.validateArray(this.imagePipelineId);
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

