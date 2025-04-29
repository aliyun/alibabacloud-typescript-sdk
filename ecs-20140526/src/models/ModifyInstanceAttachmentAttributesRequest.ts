// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions } from "./ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions";


export class ModifyInstanceAttachmentAttributesRequest extends $dara.Model {
  privatePoolOptions?: ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions;
  /**
   * @remarks
   * The ID of the instance for which you want to modify the attributes of the private pool.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the private pool. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions,
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

