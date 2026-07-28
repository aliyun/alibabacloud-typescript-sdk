// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved cache size, in GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cacheSize?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. The token must be unique among different requests. The token can be up to 64 ASCII characters in length and cannot contain non-ASCII characters.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The connection string of the instance.
   * 
   * @example
   * selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **selectdb.xlarge**: 4 cores, 32 GB.
   * 
   * - **selectdb.2xlarge**: 8 cores, 64 GB.
   * 
   * - **selectdb.4xlarge**: 16 cores, 128 GB.
   * 
   * - **selectdb.8xlarge**: 32 cores, 256 GB.
   * 
   * - **selectdb.16xlarge**: 64 cores, 512 GB.
   * 
   * - **selectdb.24xlarge**: 96 cores, 768 GB.
   * 
   * - **selectdb.32xlarge**: 128 cores, 1024 GB.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.xlarge
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * New instance test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * SelectDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - **Year**
   * 
   * - **Month**
   * 
   * > This parameter is required and takes effect only when **ChargeType** is set to **Prepaid**.
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address whitelist for the instance. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 172.16.XX.XX/12,192.168.XX.XX/22
   */
  securityIPList?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If Period is set to Year, valid values are 1, 2, 3, 4, and 5.
   * 
   * - If Period is set to Month, valid values are integers from 1 to 12.
   * 
   * > This parameter is required and takes effect only when ChargeType is set to Prepaid.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      connectionString: 'ConnectionString',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'number',
      chargeType: 'string',
      clientToken: 'string',
      connectionString: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      engine: 'string',
      engineVersion: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
      usedTime: 'number',
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

