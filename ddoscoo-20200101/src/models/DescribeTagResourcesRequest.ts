// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagResourcesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that you want to query.
   * 
   * > 
   * 
   * *   You must specify at least one of the **ResourceIds.N** and **Tags.N.Key** parameters.
   * 
   * *   You can call the [DescribeTagKeys](https://help.aliyun.com/document_detail/159785.html) operation to query all tag keys.
   * 
   * @example
   * testkey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to query.
   * 
   * @example
   * testvalue
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

export class DescribeTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The query token. Set the value to the value of **NextToken** that is returned in the last call.
   * 
   * > You do not need to configure this parameter if you call this operation for the first time.
   * 
   * @example
   * RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the instance. Set the value to **cn-hangzhou**, which indicates an Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management.
   * 
   * If you do not configure this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the Anti-DDoS Proxy (Chinese Mainland) instances that you want to query.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the resource to which the tag belongs. Set the value to **INSTANCE**, which indicates an Anti-DDoS Pro instance.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * An array consisting of tags that you want to query. Each tag consists of a tag **key** and a tag **value**.
   */
  tags?: DescribeTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagResourcesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

