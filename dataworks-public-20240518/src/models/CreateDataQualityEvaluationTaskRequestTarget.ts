// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskRequestTarget extends $dara.Model {
  /**
   * @remarks
   * The type of the database to which the table belongs. Valid values:
   * 
   * *   maxcompute
   * *   hologres
   * *   cdh
   * *   analyticdb_for_mysql
   * *   starrocks
   * *   emr
   * *   analyticdb_for_postgresql
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The configuration of the partitioned table.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The ID of the table in Data Map.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.api_test.ods_openapi_log_d
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

