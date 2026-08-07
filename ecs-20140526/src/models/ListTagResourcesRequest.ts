// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key used to perform an exact search for ECS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * Usage notes of the `Tag.N` parameter:
   * 
   * - Method 1: Used to perform an exact search for ECS resources that have the specified tags bound. Each tag is a key-value pair.
   * 
   *     - If you specify only `Tag.N.Key`, all resources associated with the tag key are returned.
   * 
   *     - If you specify only `Tag.N.Value`, the `InvalidParameter.TagValue` error is returned.
   * 
   *     - If you specify multiple tag key-value pairs at the same time, only ECS resources that match all the specified tag key-value pairs are returned.
   * 
   * - Method 2: Used to query resource information in non-default resource groups. Set `Key` to `acs:rm:rgId` and set the corresponding `Value` to the resource group ID.
   * 
   *     - If `Key` is set to `acs:rm:rgId`, `Value` can only be set to a non-default resource group ID. If the specified resource group ID is the default resource group, an error message is returned.
   * 
   *     - If `Key` is set to `acs:rm:rgId`, you cannot specify other tag key-value pairs. If you use multiple `Tag.N` parameters to query resources by resource group and tags at the same time, an error message is returned.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value used to perform an exact search for ECS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * > If `Key=acs:rm:rgId`, this parameter can only be set to a resource group ID, and the resource group ID cannot be the default resource group.
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
   * The tag key used to perform a fuzzy search for ECS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 5.
   * 
   * `TagFilter.N` is used to perform a fuzzy search for ECS resources that have the specified tags bound. It consists of a key and one or more values. A fuzzy search may have a latency of up to 2 seconds and supports only scenarios where the number of resources after fuzzy filtering is less than or equal to 5,000.
   * 
   * - When you perform a fuzzy search for ECS resources by tag key (`TagFilter.N.TagKey`), the tag value (`TagFilter.N.TagValues.N`) must be empty. For example, to perform a fuzzy search for ECS resources whose tag key is `environment`, you can set `TagFilter.1.TagKey` to `env*` (prefix match), `*env*` (infix match), or `env` (exact match), and `TagFilter.1.TagValues` must be empty.
   * 
   * - When you perform a fuzzy search for ECS resources by tag value (`TagFilter.N.TagValues.N`), the tag key (`TagFilter.N.TagKey`) must be set to an exact value. For example, to perform a fuzzy search for ECS resources whose tag key is `env` and tag value is `product`, `TagFilter.1.TagKey` must be set to the exact value `env`, and `TagFilter.1.TagValues.1` can be set to `proc*` (prefix match), `*proc*` (infix match), or `proc` (exact match). Only one search method can be used for the same `TagKey`. If multiple search methods are specified, the first method takes precedence.
   * 
   * - Tag keys have an AND relationship. Only ECS resources that match all specified tag keys are returned.
   * 
   * - Tag values under the same tag key have an OR relationship. ECS resources that match any of the tag values specified for a tag key are returned.
   * 
   * > The `TagFilter.N` and `Tag.N` parameters cannot be used at the same time. Otherwise, an error message is returned.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value used to perform a fuzzy search for ECS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 5. For the metric description, see the `TagFilter.N.TagKey` parameter description.
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
   * The token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ECS resource ID. Valid values of N: 1 to 50.
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
   * - instance: ECS instance.
   * - disk: cloud disk.
   * - snapshot: snapshot.
   * - image: image.
   * - securitygroup: security group.
   * - volume: storage volume.
   * - eni: Elastic Network Interface (ENI).
   * - ddh: dedicated host.
   * - ddhcluster: dedicated host cluster.
   * - keypair: SSH key pair.
   * - launchtemplate: launch template.
   * - reservedinstance: reserved instance.
   * - snapshotpolicy: automatic snapshot policy.
   * - elasticityassurance: elasticity assurance.
   * - capacityreservation: capacity reservation.
   * - command: Cloud Assistant command.
   * - invocation: Cloud Assistant command execution or file sending result.
   * - activation: Cloud Assistant managed instance activation code.
   * - managedinstance: Cloud Assistant managed instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListTagResourcesRequestTag[];
  /**
   * @remarks
   * The tag filter rules.
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

