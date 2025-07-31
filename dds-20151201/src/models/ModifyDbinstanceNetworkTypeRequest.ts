// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of the original classic network address when you change the network type to VPC. Valid values: **14**, **30**, **60**, and **120**. Unit: days.
   * 
   * > This parameter is required when the **NetworkType** parameter is set to **VPC** and the **RetainClassic** parameter is set to **True**.
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
   * The network type to switch to. Valid value:
   * 
   * *   **VPC**
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
   * Specifies whether to retain the original classic network address when you change the network type to VPC. Valid values:
   * 
   * *   **True**: retains the original classic network address.
   * *   **False**: does not retain the original classic network address.
   * 
   * > 
   * 
   * *   This parameter is required when the **NetworkType** parameter is set to **VPC**.
   * 
   * *   If you set this parameter to **True**, you must also specify the **ClassicExpiredDays** parameter.
   * 
   * @example
   * False
   */
  retainClassic?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * > This parameter is required when the **NetworkType** parameter is set to **VPC**.
   * 
   * @example
   * vsw-bp1vj604nj5a9zz74****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * > This parameter is required when the **NetworkType** parameter is set to **VPC**.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * 可用区ID，您可以通过调用[DescribeRegions](https://help.aliyun.com/document_detail/61933.html)接口查询可用区ID。
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

