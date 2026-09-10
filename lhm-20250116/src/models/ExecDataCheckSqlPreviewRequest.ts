// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDataCheckSqlPreviewRequest extends $dara.Model {
  /**
   * @remarks
   * The columns to check.
   * 
   * @example
   * id,name
   */
  checkColumn?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 230
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The ID of the check engine. Used in Spark scenarios.
   * 
   * @example
   * 230
   */
  engineId?: string;
  /**
   * @remarks
   * The name of the table to check, in the format `schema.table`.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db.test_table
   */
  fullTableName?: string;
  /**
   * @remarks
   * The partition condition.
   * 
   * @example
   * date_part=20240719
   */
  partitionCondition?: string;
  /**
   * @remarks
   * The ID of the check task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @remarks
   * The WHERE condition.
   * 
   * @example
   * id > 100
   */
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      checkColumn: 'checkColumn',
      dataSourceId: 'dataSourceId',
      engineId: 'engineId',
      fullTableName: 'fullTableName',
      partitionCondition: 'partitionCondition',
      taskId: 'taskId',
      whereClause: 'whereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkColumn: 'string',
      dataSourceId: 'string',
      engineId: 'string',
      fullTableName: 'string',
      partitionCondition: 'string',
      taskId: 'number',
      whereClause: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

