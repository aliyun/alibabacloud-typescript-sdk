// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget extends $dara.Model {
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
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * Data quality monitoring partition range settings.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The ID of the table in Data Map.
   * 
   * @example
   * odps.meta_open_api_test_sz.test_partition_tbl
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitoring object.
   * 
   * - Table: Table.
   * 
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
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

