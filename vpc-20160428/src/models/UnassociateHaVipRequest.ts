// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcefully disassociate the HAVIP from the ECS instance or ENI. Valid values:
   * 
   * *   **True**
   * *   **False** (default)
   * 
   * >  If you set the value to **False**, you cannot disassociate the HAVIP from the primary instance.
   * 
   * @example
   * True
   */
  force?: string;
  /**
   * @remarks
   * The ID of the HAVIP that you want to disassociate.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-2zeo05qre24nhrqpy****
   */
  haVipId?: string;
  /**
   * @remarks
   * The ID of the ECS instance or ENI from which you want to disassociate the HAVIP.
   * 
   * This parameter is required.
   * 
   * @example
   * i-faf344422ffsfad****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance from which you want to disassociate the HAVIP. Valid values:
   * 
   * *   **EcsInstance**: an ECS instance
   * *   **NetworkInterface**: an ENI
   * 
   * >  If you want to disassociate the HAVIP from an ENI, this parameter is required.
   * 
   * @example
   * EcsInstance
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the HAVIP.
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

