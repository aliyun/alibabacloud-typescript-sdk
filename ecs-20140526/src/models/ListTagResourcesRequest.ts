// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key used for exact match when querying ECS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * Usage notes for the Tag.N parameter:
   * 
   * - Method 1: Used to exactly query ECS resources bound to specific tags. It consists of a key-value pair.
   * 
   *     - If only Tag.N.Key is specified, all resources associated with the tag key are returned.
   * 
   *     - If only Tag.N.Value is specified, the InvalidParameter.TagValue error is returned.
   * 
   *     - If multiple tag key-value pairs are specified, only ECS resources that meet all the tag key-value pairs are returned.
   * 
   * - Method 2: Used to query resources in non-default resource groups. The Key is fixed as acs:rm:rgId, and the corresponding Value is the resource group ID.
   * 
   *     - If Key is set to acs:rm:rgId, Value can only be a non-default resource group ID. If the specified resource group ID is the default resource group, an error message is returned.
   * 
   *     - If Key is set to acs:rm:rgId, you cannot specify other tag key-value pairs. If you query resources corresponding to both resource groups and tags by using multiple Tag.N parameters at the same time, an error message is returned.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value used for exact match when querying ECS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * > When Key is set to acs:rm:rgId, this parameter can only be set to a resource group ID, and the resource group ID cannot be the default resource group.
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
   * The tag key used for fuzzy match when querying ECS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 5.
   * 
   * TagFilter.N is used to fuzzy query ECS resources bound to specific tags. It consists of a key and one or more values. Fuzzy queries may have a delay of 2 seconds and only support scenarios where the number of resources after fuzzy filtering is less than or equal to 5,000.
   * 
   * - When you fuzzy query ECS resources by tag key (TagFilter.N.TagKey), the tag value (TagFilter.N.TagValues.N) must be empty. For example, to fuzzy search for ECS resources with the tag key environment, you can set TagFilter.1.TagKey to env* (prefix match), *env* (infix match), or env (exact match), and TagFilter.1.TagValues must be empty.
   * 
   * - When you fuzzy query ECS resources by tag value (TagFilter.N.TagValues.N), the tag key (TagFilter.N.TagKey) must be set to an exact value. For example, to fuzzy search for ECS resources with the tag key env and the tag value product, you must set TagFilter.1.TagKey exactly to env, and you can set TagFilter.1.TagValues.1 to proc* (prefix match), *proc* (infix match), or proc (exact match). You can use only one search method under the same TagKey. If multiple different search methods are set, the first method prevails.
   * 
   * - Tag keys have an intersection relationship. Only ECS resources that meet all the specified tag keys are returned.
   * 
   * - Tag values under the same tag key have a union relationship. ECS resources that meet any of the specified tag values for the tag key are returned.
   * 
   * > You cannot use TagFilter.N and Tag.N at the same time. Otherwise, an error message is returned.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value used for fuzzy match when querying ECS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 5. For the specific metric description, see the description of the TagFilter.N.TagKey parameter.
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
   * The token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the ECS resource. Valid values of N: 1 to 50.
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
   * - disk: cloud disk
   * - snapshot: snapshot
   * - image: image
   * - securitygroup: security group
   * - volume: storage volume
   * - eni: Elastic Network Interface (ENI)
   * - ddh: dedicated host
   * - ddhcluster: dedicated host cluster
   * - keypair: SSH key pair
   * - launchtemplate: launch template
   * - reservedinstance: reserved instance
   * - snapshotpolicy: automatic snapshot policy
   * - elasticityassurance: elasticity assurance
   * - capacityreservation: capacity reservation
   * - command: Cloud Assistant command
   * - invocation: Cloud Assistant command execution or file delivery result
   * - activation: Cloud Assistant managed instance activation code
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
   * The list of tags.
   */
  tag?: ListTagResourcesRequestTag[];
  /**
   * @remarks
   * The tag filtering rules.
   * 
   * 
   * > This parameter is in invitational preview and is not publicly available.
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

