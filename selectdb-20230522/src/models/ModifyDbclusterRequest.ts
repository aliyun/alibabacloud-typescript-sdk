// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved cache size.
   * 
   * @example
   * 200
   */
  cacheSize?: string;
  /**
   * @remarks
   * The number of cluster nodes. This parameter takes effect only in Serverless mode.
   * 
   * @example
   * 1
   */
  clusterNodeCount?: number;
  /**
   * @remarks
   * The cluster node type. This parameter takes effect only in Serverless mode.
   */
  clusterNodeType?: string;
  /**
   * @remarks
   * The cluster specifications. Valid values:
   * - **selectdb.xlarge**: 4 cores and 32 GB.
   * - **selectdb.2xlarge**: 8 cores and 64 GB.
   * - **selectdb.4xlarge**: 16 cores and 128 GB.
   * - **selectdb.8xlarge**: 32 cores and 256 GB.
   * - **selectdb.16xlarge**: 16 cores and 512 GB.
   * - **selectdb.24xlarge**: 24 cores and 768 GB.
   * - **selectdb.32xlarge**: 32 cores and 1024 GB.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.2xlarge
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxb9f2w-be
   */
  DBClusterId?: string;
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
   * The database engine type. Set the value to selectdb.
   * 
   * @example
   * selectdb
   */
  engine?: string;
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
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      clusterNodeCount: 'ClusterNodeCount',
      clusterNodeType: 'ClusterNodeType',
      DBClusterClass: 'DBClusterClass',
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'string',
      clusterNodeCount: 'number',
      clusterNodeType: 'string',
      DBClusterClass: 'string',
      DBClusterId: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      scaleMax: 'number',
      scaleMin: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

