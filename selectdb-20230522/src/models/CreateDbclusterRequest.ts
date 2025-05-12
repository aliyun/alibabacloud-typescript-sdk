// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cacheSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb.2xlarge
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
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
  resourceOwnerId?: number;
  /**
   * @example
   * 1
   */
  usedTime?: string;
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
   * VPC ID.
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
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'string',
      chargeType: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      period: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      usedTime: 'string',
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

