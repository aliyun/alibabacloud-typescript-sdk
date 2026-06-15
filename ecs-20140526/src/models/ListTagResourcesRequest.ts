// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key to use for an exact match. The tag key must be 1 to 128 characters in length. The value of N ranges from 1 to 20.
   * 
   * Usage notes for the `Tag.N` parameter:
   * 
   * - Method 1: To find ECS resources that have specific tags.
   * 
   *   - If you specify only `Tag.N.Key`, the operation returns all resources that have the specified tag key.
   * 
   *   - If you specify only `Tag.N.Value`, the operation returns an `InvalidParameter.TagValue` error.
   * 
   *   - If you specify multiple tag key-value pairs, the operation returns only the ECS resources that match all specified pairs.
   * 
   * - Method 2: To query resources in a non-default resource group.
   * 
   *   - If you set `Key` to `acs:rm:rgId`, you must set `Value` to the ID of a non-default resource group. If you specify the ID of the default resource group, the operation returns an error.
   * 
   *   - If you set `Key` to `acs:rm:rgId`, you cannot specify other tag key-value pairs. If you use multiple `Tag.N` parameters to query for resources by both resource group and tag, the operation returns an error.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value to use for an exact match. The tag value must be 1 to 128 characters in length. The value of N ranges from 1 to 20.
   * 
   * > When `Key` is `acs:rm:rgId`, you must set this parameter to the ID of a non-default resource group.
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

export class ListTagResourcesRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The tag key to use for a fuzzy match. The tag key must be 1 to 128 characters in length. The value of N ranges from 1 to 5.
   * 
   * Use the `TagFilter.N` parameter to perform a fuzzy match on tags to find matching ECS resources. Each filter consists of one key and one or more values. A fuzzy match may have a 2-second latency and is supported only for queries that return 5,000 or fewer resources after filtering.
   * 
   * - To perform a fuzzy match by tag key (`TagFilter.N.TagKey`), you must leave the tag values (`TagFilter.N.TagValues.N`) empty. For example, to search for ECS resources that have the tag key `environment`, you can set `TagFilter.1.TagKey` to `env*` (prefix match), `*env*` (substring match), or `env` (exact match), but you must leave `TagFilter.1.TagValues` empty.
   * 
   * - To perform a fuzzy match by tag value (`TagFilter.N.TagValues.N`), you must set the tag key (`TagFilter.N.TagKey`) to an exact value. For example, to search for ECS resources with the tag key `env` and the tag value `product`, you must set `TagFilter.1.TagKey` to `env`. You can then set `TagFilter.1.TagValues.1` to `proc*` (prefix match), `*proc*` (substring match), or `proc` (exact match). For the same `TagKey`, you can use only one search pattern. If you specify multiple patterns, the system uses only the first pattern.
   * 
   * - Tag keys are combined by using a logical AND. The operation returns only the ECS resources that match all specified tag keys.
   * 
   * - Tag values for the same tag key are combined by using a logical OR. The operation returns the ECS resources that match any of the specified tag values for that tag key.
   * 
   * > You cannot specify both the `TagFilter.N` and `Tag.N` parameters in the same request.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag values to use for a fuzzy match. The tag value must be 1 to 128 characters in length. The value of N ranges from 1 to 5. For more information, see the description of the `TagFilter.N.TagKey` parameter.
   * 
   * @example
   * TestTagFilter
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token to retrieve the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the resource is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of an ECS resource. The value of N ranges from 1 to 50.
   * 
   * @example
   * i-bp1j6qtvdm8w0z1o****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - instance: ECS instance
   * 
   * - disk: disk
   * 
   * - snapshot: snapshot
   * 
   * - image: image
   * 
   * - securitygroup: security group
   * 
   * - volume: volume
   * 
   * - eni: elastic network interface
   * 
   * - ddh: dedicated host
   * 
   * - ddhcluster: dedicated host cluster
   * 
   * - keypair: SSH key pair
   * 
   * - launchtemplate: launch template
   * 
   * - reservedinstance: reserved instance
   * 
   * - snapshotpolicy: snapshot policy
   * 
   * - elasticityassurance: Elasticity Assurance
   * 
   * - capacityreservation: capacity reservation
   * 
   * - command: Cloud Assistant command
   * 
   * - invocation: The result of a command execution or file delivery in Cloud Assistant
   * 
   * - activation: Cloud Assistant managed instance activation code
   * 
   * - managedinstance: Cloud Assistant managed instance
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tag?: ListTagResourcesRequestTag[];
  /**
   * @remarks
   * A list of tag filters.
   * 
   * > This parameter is in invitation-only preview and is not yet available.
   */
  tagFilter?: ListTagResourcesRequestTagFilter[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      tagFilter: 'TagFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      tagFilter: { 'type': 'array', 'itemType': ListTagResourcesRequestTagFilter },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.tagFilter)) {
      $dara.Model.validateArray(this.tagFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

