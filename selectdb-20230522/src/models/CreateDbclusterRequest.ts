// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved cache size.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cacheSize?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  clusterNodeCount?: number;
  clusterNodeType?: string;
  /**
   * @remarks
   * The instance type of the cluster. Valid values:
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
   * selectdb.2xlarge
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The billing cycle of the subscription cluster. Valid values:
   * 
   * - **Year**: The cluster is billed on a yearly basis.
   * 
   * - **Month**: The cluster is billed on a monthly basis.
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
  resourceOwnerId?: number;
  scaleMax?: number;
  scaleMin?: number;
  /**
   * @remarks
   * The subscription duration of the subscription cluster. Valid values:
   * 
   * - If Period is set to Year, valid values for UsedTime are 1, 2, 3, and 5.
   * 
   * - If Period is set to Month, the value of UsedTime can be an integer from 1 to 9.
   * 
   * > This parameter is required and takes effect only when ChargeType is set to Prepaid.
   * 
   * @example
   * 1
   */
  usedTime?: string;
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
      clusterNodeCount: 'ClusterNodeCount',
      clusterNodeType: 'ClusterNodeType',
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
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
      clusterNodeCount: 'number',
      clusterNodeType: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      period: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      scaleMax: 'number',
      scaleMin: 'number',
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

