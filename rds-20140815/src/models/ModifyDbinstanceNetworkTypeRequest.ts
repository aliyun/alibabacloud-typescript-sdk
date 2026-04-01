// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which you want to retain the classic network endpoint. Valid values: **1 to 120**. Default value: **7**.
   * 
   * > If you set the **RetainClassic** parameter to **True**, you must also specify this parameter.
   * 
   * @example
   * 7
   */
  classicExpiredDays?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type after the modification. Set the value to **VPC**.
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
   * The internal IP address of the instance. The internal IP address must be within the CIDR block supported by the specified vSwitch. The system automatically assigns a private IP address to an instance based on the values of **VPCId** and **VSwitchId**.
   * 
   * @example
   * 172.10.40.25
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The number of days for which you want to retain the read/write splitting endpoint of the classic network type. Valid values: **1 to 120**. Default value: **7**.
   * 
   * >  This parameter takes effect only when a read/write splitting endpoint of the classic network type exists and the **RetainClassic** parameter is set to **True**.
   * 
   * @example
   * 7
   */
  readWriteSplittingClassicExpiredDays?: number;
  /**
   * @remarks
   * The internal IP address that corresponds to the read/write splitting endpoint of the instance. The internal IP address must be within the CIDR block supported by the specified vSwitch. The system automatically assigns a private IP address to an instance based on the values of **VPCId** and **VSwitchId**.
   * 
   * >  This parameter is valid when a read/write splitting endpoint of the classic network type exists.
   * 
   * @example
   * 192.168.0.22
   */
  readWriteSplittingPrivateIpAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to retain the classic network endpoint. Valid values:
   * 
   * *   **True**: retains the classic network endpoint.
   * *   **False** (default): does not retain the classic network endpoint.
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
   * vpc-uf6f7l4fg90xxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required if the **VPCId** parameter is specified.
   * 
   * @example
   * vsw-uf6adz52c2pxxxxx
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

