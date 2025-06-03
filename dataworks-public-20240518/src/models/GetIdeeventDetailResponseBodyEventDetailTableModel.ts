// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetailTableModelColumns } from "./GetIdeeventDetailResponseBodyEventDetailTableModelColumns";


export class GetIDEEventDetailResponseBodyEventDetailTableModel extends $dara.Model {
  /**
   * @remarks
   * The columns in the table.
   */
  columns?: GetIDEEventDetailResponseBodyEventDetailTableModelColumns[];
  /**
   * @remarks
   * The remarks of the table.
   * 
   * @example
   * A new table
   */
  comment?: string;
  /**
   * @remarks
   * The name of the data source to which the table belongs.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The environment in which the table is used. Valid values:
   * 
   * *   DEV
   * *   PROD
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The lifecycle of the table. Unit: day.
   * 
   * @example
   * 7
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The path of the table.
   * 
   * @example
   * hdfs://path/to/object
   */
  location?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tb_hello
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      comment: 'Comment',
      dataSourceName: 'DataSourceName',
      env: 'Env',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailTableModelColumns },
      comment: 'string',
      dataSourceName: 'string',
      env: 'string',
      lifeCycle: 'number',
      location: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

