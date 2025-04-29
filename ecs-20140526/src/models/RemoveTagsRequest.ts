// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveTagsRequestTag } from "./RemoveTagsRequestTag";


export class RemoveTagsRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. For example, if you set ResourceType to instance, you must set this parameter to the ID of the related instance.
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
   * *   instance
   * *   disk
   * *   snapshot
   * *   image
   * *   securitygroup
   * *   volume
   * *   eni
   * *   ddh
   * *   keypair
   * *   launchtemplate
   * *   reservedinstance
   * *   snapshotpolicy
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
   * The tags.
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

