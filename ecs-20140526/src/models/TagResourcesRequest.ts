// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value cannot be null but can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
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

export class TagResourcesRequest extends $dara.Model {
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
   * The IDs of the resources. Array length: 1 to 50.
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
   * The tags. Array length: 1 to 20. If the array contains multiple tag objects, the tag key `Key` must be unique.
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

