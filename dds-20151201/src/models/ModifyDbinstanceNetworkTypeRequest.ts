// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of the original classic network address when you switch the network type to VPC. Settings. Valid values: **14**, **30**, **60**, and **120**. Unit: days.
   * 
   * > This parameter is required when the **NetworkType** parameter settings is set to **VPC** and the **RetainClassic** parameter settings is set to **True**.
   * 
   * @example
   * 30
   */
  classicExpiredDays?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp11483712c1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The target network type to which you want to switch the instance. Valid values:
   * - **VPC**: switches the network type to VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to retain the original classic network address when you switch the network type to VPC. Settings. Valid values:
   * - **True**: retains the original classic network address.
   * - **False**: does not retain the original classic network address.
   * 
   * > - This parameter is required when the **NetworkType** parameter settings is set to **VPC**.
   * > - If this parameter settings is set to **True**, you must also specify the **ClassicExpiredDays** parameter.
   * 
   * @example
   * False
   */
  retainClassic?: string;
  /**
   * @remarks
   * The vSwitch ID in the VPC.
   * > This parameter is required when the **NetworkType** parameter settings is set to **VPC**.
   * 
   * @example
   * vsw-bp1vj604nj5a9zz74****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * > This parameter is required when the **NetworkType** parameter settings is set to **VPC**.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      DBInstanceId: 'DBInstanceId',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retainClassic: 'RetainClassic',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'number',
      DBInstanceId: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retainClassic: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

