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
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of nodes in the cluster. This parameter takes effect only in Serverless mode.
   * 
   * @example
   * 1
   */
  clusterNodeCount?: number;
  /**
   * @remarks
   * The node type of the cluster. This parameter takes effect only in Serverless mode.
   * 
   * @example
   * base
   */
  clusterNodeType?: string;
  /**
   * @remarks
   * The cluster specifications. Valid values:
   * - **selectdb.xlarge**: 4 cores and 32 GB memory
   * - **selectdb.2xlarge**: 8 cores and 64 GB memory
   * - **selectdb.4xlarge**: 16 cores and 128 GB memory
   * - **selectdb.8xlarge**: 32 cores and 256 GB memory
   * - **selectdb.16xlarge**: 64 cores and 512 GB memory
   * - **selectdb.24xlarge**: 96 cores and 768 GB memory
   * - **selectdb.32xlarge**: 128 cores and 1024 GB memory
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.2xlarge
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The cluster description.
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
   * The database type.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The database version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether the subscription cluster is billed on a yearly or monthly basis. Valid values:
   * 
   * - **Year**: yearly
   * - **Month**: monthly
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
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum value of the auto-scaling range for the instance RCU (RDS Capacity Unit).
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value of the auto-scaling range for the instance RCU (RDS Capacity Unit).
   * 
   * @example
   * 4
   */
  scaleMin?: number;
  /**
   * @remarks
   * Specifies the purchase duration of the subscription cluster. The unit is specified by Period: Year indicates years, and Month indicates months. Valid values:
   * - If Period is set to Year, valid values for UsedTime are 1, 2, 3, and 5.
   * - If Period is set to Month, valid values for UsedTime are 1 to 9.
   * > This parameter takes effect and is required only when ChargeType is set to Prepaid.
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

