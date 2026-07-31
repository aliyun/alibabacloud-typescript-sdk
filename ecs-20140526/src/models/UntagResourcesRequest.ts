// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to unbind all tags from the resources. This parameter takes effect only when TagKey.N is not specified in the request. Valid values:
   * - true
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resources. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
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
   * - invocation: Cloud Assistant command execution result.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys of the resources. You can specify up to 20 tag keys.
   * 
   * @example
   * TestKey
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

