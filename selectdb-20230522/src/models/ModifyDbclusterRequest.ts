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
   * 
   * @example
   * base
   */
  clusterNodeType?: string;
  /**
   * @remarks
   * The cluster specifications. Valid values:
   * - **selectdb.g.xlarge**: 4 vCPUs and 16 GB of memory.
   * - **selectdb.g.2xlarge**: 8 vCPUs and 32 GB of memory.
   * - **selectdb.g.4xlarge**: 16 vCPUs and 64 GB of memory.
   * - **selectdb.g.8xlarge**: 32 vCPUs and 128 GB of memory.
   * - **selectdb.g.16xlarge**: 64 vCPUs and 256 GB of memory.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.g.2xlarge
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
   * The maximum value of the auto-scaling range for instance RCUs (RDS Capacity Units).
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value of the auto-scaling range for instance RCUs (RDS Capacity Units).
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

