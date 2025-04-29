// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddTagsRequestTag } from "./AddTagsRequestTag";


export class AddTagsRequest extends $dara.Model {
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
   * The ID of the resource. When the resources are instances, this parameter can be interpreted as InstanceId.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1gtjxuuvwj17zr****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   instance: ECS instance
   * *   disk: disk
   * *   snapshot: snapshot
   * *   image: image
   * *   securitygroup: security group
   * *   volume: storage volume
   * *   eni: elastic network interface (ENI)
   * *   ddh: dedicated host
   * *   keypair: SSH key pair
   * *   launchtemplate: launch template
   * *   reservedinstance: reserved instance
   * *   snapshotpolicy: automatic snapshot policy
   * 
   * All values must be lowercase.
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
   * 
   * This parameter is required.
   */
  tag?: AddTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': AddTagsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

