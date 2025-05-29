// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDataSkewResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbtest
   */
  databaseName?: string;
  /**
   * @remarks
   * The distribution key of the table.
   * 
   * @example
   * ItemId
   */
  distributeKey?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * adbpguser
   */
  owner?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * schema1
   */
  schemaName?: string;
  /**
   * @remarks
   * The sequence number of the data skew case. All data skew cases are sorted by severity in descending order.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tab1
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 100000
   */
  tableSize?: string;
  /**
   * @remarks
   * The skew ratio of the table. Valid values: 0 to 100. Unit: %. A greater value indicates that the table is more severely skewed. A smaller value indicates less impact on query performance. A value of 0 indicates no data skew.
   * 
   * @example
   * 10.23
   */
  tableSkew?: string;
  /**
   * @remarks
   * The time when the table was last deleted, inserted, or updated.
   * 
   * @example
   * 2020-09-08T20:00:00Z
   */
  timeLastUpdated?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      distributeKey: 'DistributeKey',
      owner: 'Owner',
      schemaName: 'SchemaName',
      sequence: 'Sequence',
      tableName: 'TableName',
      tableSize: 'TableSize',
      tableSkew: 'TableSkew',
      timeLastUpdated: 'TimeLastUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      distributeKey: 'string',
      owner: 'string',
      schemaName: 'string',
      sequence: 'number',
      tableName: 'string',
      tableSize: 'string',
      tableSkew: 'string',
      timeLastUpdated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

