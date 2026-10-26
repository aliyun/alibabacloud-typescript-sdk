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
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the destination instance. The name must be 2 to 256 characters in length. It must start with a Chinese or English letter and can contain digits, Chinese characters, English letters, underscores (_), and hyphens (-).
   * >The name cannot start with http:// or https://.
   * 
   * @example
   * testdb
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network connectivity type of the instance. Valid values:
   * * **Internet**: public network connection.
   * * **Intranet**: internal network connection.
   * 
   * @example
   * Internet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The network type of the destination instance. Valid values:
   * 
   * * **VPC**: VPC.
   * * **Classic**: classic network.
   * 
   * By default, an instance in the classic network is created.
   * >If the instance is a cloud disk instance, you must set this parameter to **VPC**. If you set this parameter to **VPC**, you must also specify the **VpcId** and **VSwitchId** parameters.
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
   * * **Postpaid**: pay-as-you-go.
   * * **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription period of the subscription instance. Valid values:
   * * **Year**: yearly subscription.
   * * **Month**: monthly subscription.
   * 
   * >You must specify this parameter when **PayType** is set to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter can be left empty.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The [IP address whitelist](https://help.aliyun.com/document_detail/43185.html) of the instance. Separate multiple entries with commas (,). Duplicate entries are not allowed. A maximum of 1,000 entries are supported. The following formats are supported:
   * * IP address format, such as 10.10.XX.XX.
   * * CIDR format, such as 10.10.XX.XX/24. In this format, 24 indicates the length of the prefix in the CIDR block, and the length ranges from 1 to 32.
   * 
   * If you do not specify this parameter, the default whitelist of the original instance is used.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  securityToken?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If the **Period** parameter is set to **Year**, the value of the **UsedTime** parameter ranges from **1** to **5**.
   * * If the **Period** parameter is set to **Month**, the value of the **UsedTime** parameter ranges from **1** to **11**.
   * 
   * >You must specify this parameter when **PayType** is set to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID of the destination instance. You must specify this parameter when **InstanceNetworkType** is set to **VPC**.
   * >If you specify this parameter, you must also specify the **ZoneId** parameter.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID. The zone where the vSwitch is located must match the zone ID specified by the **ZoneId** parameter.
   * 
   * > - The **InstanceNetworkType** parameter must be set to **VPC**.
   * > - If you specify the ZoneSlaveId1 (secondary zone ID) parameter, you must specify two vSwitch IDs and separate them with a comma (,).
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the primary node. You can call the DescribeRegions operation to query the zone ID.
   * 
   * >If you specify a VPC and a vSwitch, you must specify this parameter to match the zone of the vSwitch.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  /**
   * @remarks
   * The secondary zone 1.
   * >You must specify this parameter for instances that are not of the Basic Edition.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The secondary zone 2.
   * >You can specify this parameter only for instances of the Enterprise Edition.
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

