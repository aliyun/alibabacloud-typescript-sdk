// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the HaVip to be associated.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-2zeo05qre24nhrqpy****
   */
  haVipId?: string;
  /**
   * @remarks
   * The instance ID of the ECS instance to attach to the HaVip.
   * 
   * This parameter is required.
   * 
   * @example
   * i-faf344422ffsfad****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance to attach to the HaVip. Valid values:
   * 
   * - **EcsInstance**: ECS instance.
   * 
   * - **NetworkInterface**: network interface controller (NIC) instance. If the instance to attach to the HaVip is a network interface controller (NIC), this parameter is required.
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

