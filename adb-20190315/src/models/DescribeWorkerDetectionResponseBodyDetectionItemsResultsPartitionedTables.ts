// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsPartitionedTables extends $dara.Model {
  /**
   * @remarks
   * The SQL statement that is used to create the table.
   * 
   * @example
   * create table user(id varchar)
   */
  DDL?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 4
   */
  partitionCount?: string;
  /**
   * @remarks
   * The ID of the improper partition.
   * 
   * @example
   * [2025,2026]
   */
  partitionIds?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * kp_ods
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * lake_count
   */
  tableName?: string;
  /**
   * @remarks
   * 1234
   * 
   * @example
   * [2024,2025]
   */
  totalDataSize?: number;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      partitionCount: 'PartitionCount',
      partitionIds: 'PartitionIds',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      totalDataSize: 'TotalDataSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'string',
      partitionCount: 'string',
      partitionIds: 'string',
      schemaName: 'string',
      tableName: 'string',
      totalDataSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

