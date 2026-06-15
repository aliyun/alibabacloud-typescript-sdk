// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > For compatibility, we recommend that you use the Tag.N.Key parameter.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The value can be an empty string and up to 128 characters long. It cannot start with aliyun or acs:, and cannot contain http\\:// or https\\://.
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
   * The ID of the region where the resource is located. Call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to get the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource from which to remove tags. For example, if ResourceType is set to instance, this parameter is the instance ID.
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
   * The resource type. Valid values:
   * 
   * - instance: an ECS instance.
   * 
   * - disk: a disk.
   * 
   * - snapshot: a snapshot.
   * 
   * - image: an image.
   * 
   * - securitygroup: a security group.
   * 
   * - volume: a volume.
   * 
   * - eni: an elastic network interface.
   * 
   * - ddh: a dedicated host.
   * 
   * - keypair: an SSH key pair.
   * 
   * - launchtemplate: a launch template.
   * 
   * - reservedinstance: a reserved instance.
   * 
   * - snapshotpolicy: an automatic snapshot policy.
   * 
   * All values must be in lowercase.
   * 
   * This parameter is required.
   * 
   * @example
   * snapshot
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tags.
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

