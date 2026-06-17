// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * 
   * - **false**: disables auto-renewal.
   * 
   * Default value: **false**.
   * 
   * > This parameter applies only when **PayType** is set to **Prepaid**.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The cluster specification.
   * 
   * @example
   * polar.app.g2.medium
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - MySQL
   * 
   * - PostgreSQL
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required when **PayType** is set to **Prepaid**.
   * 
   * - **Year**: The subscription duration is measured in years.
   * 
   * - **Month**: The subscription duration is measured in months.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp**************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required when **PayType** is set to **Prepaid**.
   * 
   * - If **Period** is set to **Month**, the value must be an integer from `1` to `9`.
   * 
   * - If **Period** is set to **Year**, the value must be an integer from `1` to `3`.
   * 
   * @example
   * 3
   */
  usedTime?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The availability zone ID.
   * 
   * @example
   * cn-beijing-l
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      DBClusterClass: 'DBClusterClass',
      DBType: 'DBType',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      DBClusterClass: 'string',
      DBType: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
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

