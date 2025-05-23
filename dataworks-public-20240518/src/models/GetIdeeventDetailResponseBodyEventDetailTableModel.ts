// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetailTableModelColumns } from "./GetIdeeventDetailResponseBodyEventDetailTableModelColumns";


export class GetIDEEventDetailResponseBodyEventDetailTableModel extends $dara.Model {
  columns?: GetIDEEventDetailResponseBodyEventDetailTableModelColumns[];
  /**
   * @example
   * A new table
   */
  comment?: string;
  /**
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 7
   */
  lifeCycle?: number;
  /**
   * @example
   * hdfs://path/to/object
   */
  location?: string;
  /**
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

