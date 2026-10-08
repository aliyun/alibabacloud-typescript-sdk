// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which the classic network address reservation is retained. Valid values: **1 to 120**. Unit: days. Default value: **7**.
   * >This parameter is required if **RetainClassic** is set to **True**.
   * 
   * @example
   * 7
   */
  classicExpiredDays?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The target network type. Set the value to **VPC**.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Settings for the internal network IP address of the instance. The IP address must be within the address range of the specified vSwitch. By default, the system automatically allocates an IP address based on the values of **VPCId** and **VSwitchId**.
   * 
   * @example
   * 172.10.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of days for which the read/write splitting endpoint of the classic network type is retained for address reservation. Valid values: **1 to 120**. Unit: days. Default value: **7**.
   * >This parameter takes effect only when the instance has a classic network type read/write splitting endpoint and **RetainClassic** is set to **True**.
   * 
   * @example
   * 7
   */
  readWriteSplittingClassicExpiredDays?: number;
  /**
   * @remarks
   * Settings for the internal network read/write splitting IP address of the instance. The IP address must be within the address range of the specified vSwitch. By default, the system automatically allocates an IP address based on the values of **VPCId** and **VSwitchId**.
   * 
   * >This parameter takes effect only when the instance has a classic network type read/write splitting endpoint.
   * 
   * @example
   * 192.168.XX.XX
   */
  readWriteSplittingPrivateIpAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to retain the classic network endpoint. Valid values:
   * * **True**: The classic network endpoint is retained.
   * * **False** (default): The classic network endpoint is not retained.
   * 
   * @example
   * True
   */
  retainClassic?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required if **VPCId** is specified.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      DBInstanceId: 'DBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      readWriteSplittingClassicExpiredDays: 'ReadWriteSplittingClassicExpiredDays',
      readWriteSplittingPrivateIpAddress: 'ReadWriteSplittingPrivateIpAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retainClassic: 'RetainClassic',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'string',
      DBInstanceId: 'string',
      instanceNetworkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIpAddress: 'string',
      readWriteSplittingClassicExpiredDays: 'number',
      readWriteSplittingPrivateIpAddress: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retainClassic: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

