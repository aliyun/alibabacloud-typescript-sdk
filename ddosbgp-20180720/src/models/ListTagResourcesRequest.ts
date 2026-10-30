// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key to query.
   * 
   * > **ResourceId** and **Tag Key-Value pairs** cannot be left empty at the same time.
   * 
   * @example
   * testKey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value to query.
   * 
   * > **ResourceId** and **Tag Key-Value pairs** cannot be left empty at the same time.
   * 
   * @example
   * testValue1
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The query token. The value is the **NextToken** parameter value returned from the previous call to this operation. You do not need to specify this parameter when you call this operation for the first time.
   * 
   * @example
   * RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query all region IDs supported by Anti-DDoS Origin.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the default resource group is used.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the Anti-DDoS Origin instances to query.
   * 
   * > **ResourceId** and **Tag Key-Value pairs** cannot be left empty at the same time.
   * 
   * @example
   * ddosbgp-cn-v0h1fmwbc024
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource to query. Set the value to **INSTANCE**, which indicates an instance.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key-value pairs to query.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

