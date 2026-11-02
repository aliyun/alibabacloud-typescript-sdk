// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must make sure that the value is unique among different requests. The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcibly disassociate HaVip from the associated ECS instance or elastic network interface controller (NIC). Valid values:
   * 
   * - **True**: forcibly disassociates the instance or elastic network interface controller (NIC).
   * 
   * - **False** (default): does not forcibly disassociate the instance or elastic network interface controller (NIC).
   * 
   * > If this parameter is set to **False**, you cannot disassociate the primary instance attached to the HaVip.
   * 
   * @example
   * True
   */
  force?: string;
  /**
   * @remarks
   * The ID of the HaVip to be disassociated.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-2zeo05qre24nhrqpy****
   */
  haVipId?: string;
  /**
   * @remarks
   * The ID of the ECS instance or the elastic network interface controller (NIC) from which the HaVip is disassociated.
   * 
   * This parameter is required.
   * 
   * @example
   * i-faf344422ffsfad****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance from which you want to disassociate HaVip. Valid values:
   * 
   * - **EcsInstance**: ECS instance.
   * 
   * - **NetworkInterface**: elastic network interface controller (NIC).
   * 
   * > This parameter is required when the instance to be disassociated is an elastic network interface controller (NIC).
   * 
   * @example
   * EcsInstance
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the HaVip.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      force: 'Force',
      haVipId: 'HaVipId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      force: 'string',
      haVipId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

