// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelinesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of a tag. Up to 20 tags are supported.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of a tag. Up to 20 tags are supported.
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
   * The IDs of the image pipelines. You can specify up to 20 IDs.
   * 
   * @example
   * ip-2ze5tsl5bp6nf2b3****
   */
  imagePipelineId?: string[];
  /**
   * @remarks
   * The number of entries to return per page. Valid values: 1 to 500.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the image pipeline.
   * 
   * @example
   * testImagePipeline
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. To retrieve the next page of results, set this parameter to the `NextToken` value from the previous response. Omit this parameter on your first request.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. If you use this parameter for filtering, you can query a maximum of 1,000 resources.
   * 
   * > Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A list of tags.
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

