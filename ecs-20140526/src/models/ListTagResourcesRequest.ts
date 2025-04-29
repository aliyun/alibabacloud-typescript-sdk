// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesRequestTag } from "./ListTagResourcesRequestTag";
import { ListTagResourcesRequestTagFilter } from "./ListTagResourcesRequestTagFilter";


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
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
   * The resource IDs. Valid values of N: 1 to 50.
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
   * *   instance: ECS instance
   * *   disk: disk
   * *   snapshot: snapshot
   * *   image: image
   * *   securitygroup: security group
   * *   volume: storage volume
   * *   eni: elastic network interface (ENI)
   * *   ddh: dedicated host
   * *   ddhcluster: dedicated host cluster
   * *   keypair: SSH key pair
   * *   launchtemplate: launch template
   * *   reservedinstance: reserved instance
   * *   snapshotpolicy: automatic snapshot policy
   * *   elasticityassurance: elasticity assurance
   * *   capacityreservation: capacity reservation
   * *   command: Cloud Assistant command
   * *   invocation: Cloud Assistant command execution result or file delivery result
   * *   activation: activation code for a Cloud Assistant managed instance
   * *   managedinstance: Cloud Assistant managed instance
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
   * The regular expressions used to filter tags.
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

