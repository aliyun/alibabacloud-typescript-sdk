// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReservedInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the reserved instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * ri-example
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the reserved instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecsri-uf61hdhue4kcorqsk****
   */
  reservedInstanceId?: string;
  /**
   * @remarks
   * The name of the reserved instance. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * testReservedInstanceName
   */
  reservedInstanceName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      reservedInstanceName: 'ReservedInstanceName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      reservedInstanceId: 'string',
      reservedInstanceName: 'string',
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

