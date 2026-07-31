// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The private pool ID, which is the elasticity assurance ID or capacity reservation ID.
   * 
   * - This parameter is required when PrivatePoolOptions.MatchCriteria is set to `Target`.
   * - Leave this parameter empty when PrivatePoolOptions.MatchCriteria is set to `Open` or `None`.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The private pool matching mode of the instance. Valid values:
   * 
   * - Open: open mode. The system automatically matches the instance with an open private pool. If no matching private pool capacity is available, public pool resources are used to launch the instance.
   * - Target: targeted mode. The instance is launched by using the capacity of the specified private pool. If the specified private pool capacity is unavailable, the instance fails to be launched. If you set this parameter to Target, you must also specify the PrivatePoolOptions.Id parameter to specify the private pool ID.
   * - None: none. The instance is launched normally without using a private pool.
   * 
   * This parameter is required.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttachmentAttributesRequest extends $dara.Model {
  privatePoolOptions?: ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions;
  /**
   * @remarks
   * The instance ID of the instance for which you want to modify the private pool matching property.
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
   * The region ID of the private pool. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

