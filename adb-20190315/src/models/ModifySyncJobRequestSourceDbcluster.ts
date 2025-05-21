// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySyncJobRequestSourceDBCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the source instance or cluster. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2zepqn129i9s3l2z3,rm-2zea4dj583129ksp6
   */
  clusterIds?: string;
  /**
   * @remarks
   * The ID of the synchronization job.
   * 
   * @example
   * dts-xxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * Valid values:
   * 
   * *   Create
   * *   Modify
   * 
   * This parameter is required.
   * 
   * @example
   * Create
   */
  operateType?: string;
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
   * The source database type.
   * 
   * Valid values:
   * 
   * *   rds: ApsaraDB RDS.
   * *   sls: Simple Log Service.
   * *   polardb: PolarDB.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      jobId: 'JobId',
      operateType: 'OperateType',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      jobId: 'string',
      operateType: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

