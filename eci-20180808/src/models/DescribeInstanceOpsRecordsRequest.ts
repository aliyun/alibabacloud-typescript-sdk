// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceOpsRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic container instance.
   * 
   * This parameter is required.
   * 
   * @example
   * eci-bp1dvysdafbh00t7****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The type of the O\\&M task. Valid values:
   * 
   * *   coredump
   * *   tcpdump
   * 
   * This parameter is required.
   * 
   * @example
   * coredump
   */
  opsType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
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
      containerGroupId: 'ContainerGroupId',
      opsType: 'OpsType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      opsType: 'string',
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

