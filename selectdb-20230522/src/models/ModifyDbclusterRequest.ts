// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The size of the reserved cache.
   * 
   * @example
   * 200
   */
  cacheSize?: string;
  clusterNodeCount?: number;
  clusterNodeType?: string;
  /**
   * @remarks
   * The instance class of the cluster. Valid values:
   * 
   * - **selectdb.xlarge**: 4 cores, 32 GB memory.
   * 
   * - **selectdb.2xlarge**: 8 cores, 64 GB memory.
   * 
   * - **selectdb.4xlarge**: 16 cores, 128 GB memory.
   * 
   * - **selectdb.8xlarge**: 32 cores, 256 GB memory.
   * 
   * - **selectdb.16xlarge**: 16 cores, 512 GB memory.
   * 
   * - **selectdb.24xlarge**: 24 cores, 768 GB memory.
   * 
   * - **selectdb.32xlarge**: 32 cores, 1024 GB memory.
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
   * The database type. The value is fixed to selectdb.
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
  scaleMax?: number;
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

