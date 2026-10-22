// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved cache size. Unit: GB.
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
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - **selectdb.xlarge**: 4 cores, 32 GB memory.
   * - **selectdb.2xlarge**: 8 cores, 64 GB memory.
   * - **selectdb.4xlarge**: 16 cores, 128 GB memory.
   * - **selectdb.8xlarge**: 32 cores, 256 GB memory.
   * - **selectdb.16xlarge**: 64 cores, 512 GB memory.
   * - **selectdb.24xlarge**: 96 cores, 768 GB memory.
   * - **selectdb.32xlarge**: 128 cores, 1024 GB memory.
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
   * NewInstanceTest
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
   * Specifies whether the upfront subscription cluster uses a yearly or monthly billing cycle. Valid values:
   * 
   * - **Year**: yearly billing cycle.
   * - **Month**: monthly billing cycle.
   * > This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
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
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address whitelist of the instance. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 172.16.XX.XX/12,192.168.XX.XX/22
   */
  securityIPList?: string;
  /**
   * @remarks
   * The subscription duration of the instance. The unit is specified by Period. Year indicates years and Month indicates months. Valid values:
   * - If Period is set to Year, the valid values of UsedTime are 1, 2, 3, 4, and 5 (integers).
   * - If Period is set to Month, the valid values of UsedTime are 1 to 12 (integers).
   * > This parameter takes effect and is required only when ChargeType is set to Prepaid.
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
   * VPC ID。
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

