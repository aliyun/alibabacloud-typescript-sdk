// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetInfoResponseBodyResultCubeTableList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data source table is valid. Valid values:
   * 
   * *   true: data source table
   * *   false: custom table
   * 
   * @example
   * odps_40
   */
  caption?: string;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * false
   */
  customsql?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dfefd7f4-fc6e-42c9-b4******
   */
  datasourceId?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * maxcompute
   */
  dsType?: string;
  /**
   * @remarks
   * The unique ID of the table.
   * 
   * @example
   * true
   */
  factTable?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a custom SQL table. Valid values:
   * 
   * *   true: custom SQL table
   * *   false: non-custom SQL table
   * 
   * @example
   * select * from ****
   */
  sql?: string;
  /**
   * @remarks
   * The list of tables used by the dataset.
   * 
   * @example
   * viewdasb8494aab2612473cb74992159fe****
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * *   odps
   * *   oracle
   * *   ... and other data source types supported by Quick BI
   * 
   * @example
   * 7a62530b36
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      customsql: 'Customsql',
      datasourceId: 'DatasourceId',
      dsType: 'DsType',
      factTable: 'FactTable',
      sql: 'Sql',
      tableName: 'TableName',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      customsql: 'boolean',
      datasourceId: 'string',
      dsType: 'string',
      factTable: 'boolean',
      sql: 'string',
      tableName: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

