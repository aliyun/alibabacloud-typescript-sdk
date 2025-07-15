// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. The value of **RequestId** in each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the HaVip.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-2zeo05qre24nhrqpy****
   */
  haVipId?: string;
  /**
   * @remarks
   * The ID of the ECS instance to be associated with the HaVip.
   * 
   * This parameter is required.
   * 
   * @example
   * i-faf344422ffsfad****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance to be associated with the HaVip. Valid values:
   * 
   * *   **EcsInstance**: an ECS instance
   * *   **NetworkInterface**: an ENI. If you want to associate the HaVip with an ENI, this parameter is required.
   * 
   * @example
   * EcsInstance
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the HaVip belongs.
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

