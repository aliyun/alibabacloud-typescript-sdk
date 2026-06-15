// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * > We recommend that you use the `Tag.N.Key` parameter to ensure compatibility.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length and can be an empty string. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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

export class DescribeTagsRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is deprecated. We recommend that you use other parameters to ensure compatibility.
   * 
   * @example
   * null
   */
  category?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the tag list.
   * 
   * Starts from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to obtain the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. For example, if the `ResourceType` is `instance`, this parameter specifies the instance ID.
   * 
   * @example
   * s-946ntx4wr****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - `instance`: an ECS instance.
   * 
   * - `disk`: a disk.
   * 
   * - `snapshot`: a snapshot.
   * 
   * - `image`: an image.
   * 
   * - `securitygroup`: a security group.
   * 
   * - `volume`: a volume.
   * 
   * - `eni`: an elastic network interface.
   * 
   * - `ddh`: a dedicated host.
   * 
   * - `keypair`: an SSH key pair.
   * 
   * - `launchtemplate`: a launch template.
   * 
   * - `reservedinstance`: a reserved instance.
   * 
   * - `snapshotpolicy`: a snapshot policy.
   * 
   * All values must be in lowercase.
   * 
   * @example
   * snapshot
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tag?: DescribeTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      category: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTagsRequestTag },
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

