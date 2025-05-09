// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget extends $dara.Model {
  /**
   * @remarks
   * The type of the database to which the table belongs.
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The partition range monitored.
   * 
   * @example
   * pt=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The unique ID of the table in the data map.
   * 
   * @example
   * odps.api_trace.ods_d_api_log
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitoring object.
   * - Table: Table
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

