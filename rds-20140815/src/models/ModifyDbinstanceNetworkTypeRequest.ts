// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for the classic network address reservation. Valid values: **1** to **120**. Unit: days. Default value: **7**.
   * >This parameter is required when the **RetainClassic** parameter is set to **True**.
   * 
   * @example
   * 7
   */
  classicExpiredDays?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The target network type. Set the value to **VPC**, which indicates a virtual private cloud (VPC).
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
   * Settings for the internal network IP address of the instance. The IP address must be within the address range of the specified vSwitch. By default, the system automatically allocates an IP address based on the **VPCId** and **VSwitchId** parameters.
   * 
   * @example
   * 172.10.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of days for the classic network address reservation for read/write splitting. Valid values: **1** to **120**. Unit: days. Default value: **7**.
   * >This parameter takes effect only when the instance has a read/write splitting address of the classic network type and the **RetainClassic** parameter is set to **True**.
   * 
   * @example
   * 7
   */
  readWriteSplittingClassicExpiredDays?: number;
  /**
   * @remarks
   * Settings for the internal network IP address of the read/write splitting endpoint for the instance. The IP address must be within the address range of the specified vSwitch. By default, the system automatically allocates an IP address based on the **VPCId** and **VSwitchId** parameters.
   * 
   * >This parameter takes effect only when the instance has a read/write splitting address of the classic network type.
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
   * * **True**: Retains the classic network endpoint.
   * * **False**: Does not retain the classic network endpoint. This is the default value.
   * 
   * @example
   * True
   */
  retainClassic?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required when the **VPCId** parameter is specified.
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

