// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsCopyWorkloadRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 123
   */
  datasourceId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbName
   */
  dbName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aps-******
   */
  workloadId?: string;
  /**
   * @remarks
   * The type of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * SLS_INGESTION_ADB
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasourceId: 'DatasourceId',
      dbName: 'DbName',
      regionId: 'RegionId',
      tableName: 'TableName',
      workloadId: 'WorkloadId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasourceId: 'number',
      dbName: 'string',
      regionId: 'string',
      tableName: 'string',
      workloadId: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

