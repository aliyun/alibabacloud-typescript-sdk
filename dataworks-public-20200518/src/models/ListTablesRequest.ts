// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the data source. Valid values: ODPS, emr, mysql, holo, analyticdb_for_mysql, oracle, postgresql, sqlserver, clickhouse, and starrocks.
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   * emr
   * mysql
   * holo
   */
  dataSourceType?: string;
  /**
   * @remarks
   * Pagination information, which specifies the starting point of this read.
   * 
   * @example
   * 12222
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries displayed on each page. The default value is 10 and the maximum value is 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

