// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTablePartitionDiagnoseResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The information about inappropriate partitions.
   * 
   * @example
   * 202005,202006
   */
  partitionDetail?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 2
   */
  partitionNumber?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The storage percentage of the table. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 66.23
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The total data size of the table. Unit: bytes.
   * 
   * @example
   * 42949672960
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      partitionDetail: 'PartitionDetail',
      partitionNumber: 'PartitionNumber',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionDetail: 'string',
      partitionNumber: 'number',
      schemaName: 'string',
      spaceRatio: 'number',
      tableName: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

