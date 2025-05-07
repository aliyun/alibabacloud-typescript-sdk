// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceForRebuildRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 256 characters in length. The name can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * > : The name cannot start with http:// or https://.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the network connection to the instance. Valid values:
   * 
   * *   **Internet**
   * *   **Intranet**
   * 
   * @example
   * Internet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**
   * *   **Classic**
   * 
   * Default value: Classic.
   * 
   * >  If the instance uses cloud disks, this parameter is required. Set the value to **VPC**. The **VpcId** and **VSwitchId** parameters must be specified when this parameter is set to **VPC**.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the destination instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * >  If you set the PayType parameter to **Prepaid**, you must also specify this parameter.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. The value of this parameter can be NULL.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address whitelist of the serverless instance. For more information, see [Use a database client or the CLI to connect to an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/43185.html). If the IP address whitelist contains more than one entry, separate the entries with commas (,). Each entry must be unique. You can specify up to 1,000 entries. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as 10.10.XX.XX.
   * *   CIDR blocks, such as 10.10.XX.XX/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.
   * 
   * If this parameter is not specified, the default IP address whitelist is used.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  securityToken?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If you set **Period** to **Year**, the value of **UsedTime** ranges from **1** to **5**.
   * *   If you set **Period** to **Month**, the value of **UsedTime** ranges from **1** to **11**.
   * 
   * > If you set **PayType** to **Prepaid**, you must specify this parameter.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID of the instance. If you set **InstanceNetworkType** to **VPC**, you must specify this parameter.
   * 
   * > : If you specify this parameter, you must also specify **ZoneId**.
   * 
   * @example
   * vpc-uf6f7l4fg90xxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch. The vSwitch must belong to the zone that is specified by **ZoneId**.
   * 
   * > 
   * 
   * *   If you set **InstanceNetworkType** to **VPC**, you must also specify this parameter.
   * 
   * *   If you specify the ZoneSlaveId1 parameter, you must specify the IDs of two vSwitches for this parameter and separate the IDs with a comma (,).
   * 
   * @example
   * vsw-uf6adz52c2pxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the primary instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent zone list.
   * 
   * > If you specify a virtual private cloud (VPC) and a vSwitch, you must specify this parameter to identify the zone for the vSwitch.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary instance.
   * 
   * >  If the instance does not run RDS Basic Edition, you must specify this parameter.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The zone ID of the logger instance.
   * 
   * >  This parameter is available only when the instance runs RDS Enterprise Edition.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetType: 'DBInstanceNetType',
      instanceNetworkType: 'InstanceNetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
      securityToken: 'SecurityToken',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceNetType: 'string',
      instanceNetworkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
      securityToken: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

