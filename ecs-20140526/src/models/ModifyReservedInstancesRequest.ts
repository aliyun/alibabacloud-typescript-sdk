// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyReservedInstancesRequestConfiguration } from "./ModifyReservedInstancesRequestConfiguration";


export class ModifyReservedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the new reserved instances. You can specify up to 100 new reserved instances.
   */
  configuration?: ModifyReservedInstancesRequestConfiguration[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the reserved instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of reserved instances that you want to modify. You can specify up to 20 reserved instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ReservedInstanceId.1="ecsri-bp1cx3****",ReservedInstanceId.2="ecsri-bp15xx2****"......
   */
  reservedInstanceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': ModifyReservedInstancesRequestConfiguration },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    if(Array.isArray(this.reservedInstanceId)) {
      $dara.Model.validateArray(this.reservedInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

