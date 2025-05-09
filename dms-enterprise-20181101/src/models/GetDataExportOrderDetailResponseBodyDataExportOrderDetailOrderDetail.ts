// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The number of rows that were affected by the SQL statement.
   * 
   * @example
   * 1
   */
  actualAffectRows?: number;
  /**
   * @remarks
   * The category of the reason for the data export.
   * 
   * @example
   * text
   */
  classify?: string;
  /**
   * @remarks
   * The name of the database from which data was exported.
   * 
   * @example
   * xxx@xxx:3306
   */
  database?: string;
  /**
   * @remarks
   * The ID of the database from which data was exported.
   * 
   * @example
   * 123
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the environment to which the database belongs.
   * 
   * @example
   * test
   */
  envType?: string;
  /**
   * @remarks
   * The SQL statement that was executed to export data.
   * 
   * @example
   * select 1
   */
  exeSQL?: string;
  /**
   * @remarks
   * Indicates whether the affected rows are skipped.
   * 
   * @example
   * false
   */
  ignoreAffectRows?: boolean;
  /**
   * @remarks
   * The reason why the affected rows are skipped.
   * 
   * @example
   * empty
   */
  ignoreAffectRowsReason?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      classify: 'Classify',
      database: 'Database',
      dbId: 'DbId',
      envType: 'EnvType',
      exeSQL: 'ExeSQL',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      classify: 'string',
      database: 'string',
      dbId: 'number',
      envType: 'string',
      exeSQL: 'string',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      logic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

