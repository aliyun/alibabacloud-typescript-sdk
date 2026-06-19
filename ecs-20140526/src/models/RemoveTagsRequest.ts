// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. Valid values of N: 1 to 20. The tag key cannot be an empty string once specified. The tag key can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. Valid values of N: 1 to 20. The tag value can be an empty string once specified. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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

export class RemoveTagsRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The region to which the resource belongs. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource from which you want to unbind tags. For example, when the resource type (ResourceType) is instance, the resource ID is the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-946ntx4****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * - instance: ECS instance.
   * - disk: disk.
   * - snapshot: snapshot.
   * - image: image.
   * - securitygroup: security group.
   * - volume: storage volume.
   * - eni: elastic network interface (ENI).
   * - ddh: dedicated host.
   * - keypair: SSH key pair.
   * - launchtemplate: launch template.
   * - reservedinstance: reserved instance.
   * - snapshotpolicy: automatic snapshot policy.
   * 
   * All valid values are in lowercase.
   * 
   * This parameter is required.
   * 
   * @example
   * snapshot
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: RemoveTagsRequestTag[];
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
      tag: { 'type': 'array', 'itemType': RemoveTagsRequestTag },
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

