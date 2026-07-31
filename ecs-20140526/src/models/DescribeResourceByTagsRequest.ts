// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceByTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length.
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

export class DescribeResourceByTagsRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number of the results. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
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
   * - keypair: SSH key pair.
   * - launchtemplate: launch template.
   * 
   * All valid values are in lowercase.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeResourceByTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeResourceByTagsRequestTag },
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

