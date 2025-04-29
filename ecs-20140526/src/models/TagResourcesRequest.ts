// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesRequestTag } from "./TagResourcesRequestTag";


export class TagResourcesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The type of the resource to which the tags are added. Valid values:
   * 
   * *   instance: ECS instance
   * *   disk: disk
   * *   snapshot: snapshot
   * *   image: image
   * *   securitygroup: security group
   * *   volume: storage volume
   * *   eni: ENI
   * *   ddh: dedicated host
   * *   ddhcluster: dedicated host cluster
   * *   keypair: SSH key pair
   * *   launchtemplate: launch template
   * *   reservedinstance
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
   * The tags of the reserved instance. You can specify up to 20 tags. If you specify multiple tags, the tag keys cannot be duplicated.``
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
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

