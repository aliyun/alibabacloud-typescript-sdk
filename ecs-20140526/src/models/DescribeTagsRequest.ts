// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagsRequestTag } from "./DescribeTagsRequestTag";


export class DescribeTagsRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter will be deprecated in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * null
   */
  category?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Page starts from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource to which the tags are added. If the resource is an instance, the value of this parameter is the ID of the instance.
   * 
   * @example
   * s-946ntx4wr****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource to which the tags are added. Valid values:
   * 
   * *   instance: Elastic Compute Service (ECS) instance.
   * *   disk: disk.
   * *   snapshot: snapshot.
   * *   image: image.
   * *   securitygroup: security group.
   * *   volume: storage volume.
   * *   eni: elastic network interface (ENI).
   * *   ddh: dedicated host.
   * *   keypair: SSH key pair.
   * *   launchtemplate: launch template.
   * *   reservedinstance: reserved instance.
   * *   snapshotpolicy: automatic snapshot policy.
   * 
   * All values must be in lowercase letters.
   * 
   * @example
   * snapshot
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
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

