// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   Custom
   * *   System
   * *   All
   * 
   * Default value: All.
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 1000. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * *   If the resources belong to a service that is centrally deployed, set the value to the region ID of the resources by referring to [Regions supported by tag-related operations on resources of centrally deployed Alibaba Cloud services](https://help.aliyun.com/document_detail/2579691.html).
   * *   If the resources belong to a service that is not centrally deployed, set the value to the region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of a resource.
   * 
   * Valid values of N: 1 to 50.
   * 
   * ARN format: `arn:acs:${ProductCode}:${Region}:${Account}:${ResourceType}/${ResourceId}` Fields:
   * 
   * *   `ProductCode`: the service code. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * *   `Region`: the region ID of the resource. You can set this field to an asterisk (\\*) to indicate the current region.
   * *   `Account`: the ID of the Alibaba Cloud account to which the resource belongs. You can set this field to an asterisk (\\*) to indicate the current Alibaba Cloud account.
   * *   `ResourceType`: the resource type. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](https://help.aliyun.com/document_detail/2330915.html) operation.
   * *   `ResourceId`: the ID of the resource.
   * 
   * >  You can set `ProductCode` and `ResourceType` in ResourceARN to values defined in Resource Group, ActionTrail, or Resource Center.
   * 
   * @example
   * arn:acs:ecs:cn-hangzhou:123456789****:instance/i-bp15hr53jws84akg****
   */
  resourceARN?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The key-value pairs of tags. You can specify 1 to 10 key-value pairs.
   * 
   * If you specify multiple tags, the system queries the resources to which all these tags are added.
   * 
   * Limits:
   * 
   * *   A tag key must be 1 to 128 characters in length.
   * *   A tag value must be 1 to 128 characters in length.
   * *   Tag keys and tag values are case-sensitive.
   * *   Each tag key on a resource can have only one tag value. If you create a tag that has the same key as an existing tag, the value of the existing tag is overwritten.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceARN)) {
      $dara.Model.validateArray(this.resourceARN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

