// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cacheSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @example
   * selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The specifications of the instance. Valid values:
   * 
   * *   **selectdb.xlarge**: 4 CPU cores and 32 GB of memory.
   * *   **selectdb.2xlarge**: 8 CPU cores and 64 GB of memory.
   * *   **selectdb.4xlarge**: 16 CPU cores and 128 GB of memory.
   * *   **selectdb.8xlarge**: 32 CPU cores and 256 GB of memory.
   * *   **selectdb.16xlarge**: 64 CPU cores and 512 GB of memory.
   * *   **selectdb.24xlarge**: 96 CPU cores and 768 GB of memory.
   * *   **selectdb.32xlarge**: 128 CPU cores and 1,024 GB of memory.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.xlarge
   */
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * SelectDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 172.16.XX.XX/12,192.168.XX.XX/22
   */
  securityIPList?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If Period is set to Year, valid values of UsedTime are 1, 2, 3, 4, and 5.
   * *   If Period is set to Month, valid values of UsedTime are 1 to 12.
   * 
   * >  This parameter takes effect and is required only if ChargeType is set to Prepaid.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
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

