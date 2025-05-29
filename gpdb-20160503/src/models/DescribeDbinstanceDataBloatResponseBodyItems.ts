// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDataBloatResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The coefficient of data bloat. It is calculated by using the following formula:
   * 
   * Bloat coefficient = Number of dead rows/Number of active rows.
   * 
   * @example
   * 1.03
   */
  bloatCeoff?: string;
  /**
   * @remarks
   * The bloat size of the table. It indicates the amount of space that can be released.
   * 
   * @example
   * 0.2MB
   */
  bloatSize?: string;
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
   * The expected size of the table.
   * 
   * It indicates the size of the table that has no data bloat.
   * 
   * @example
   * 1MB
   */
  expectTableSize?: string;
  /**
   * @remarks
   * The actual size of the table.
   * 
   * @example
   * 1.2MB
   */
  realTableSize?: string;
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
   * The sequence number.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The storage type of the table. Valid values:
   * 
   * *   **Heap Table**
   * *   **Append-Only Heap Table**
   * *   **Append-Only Columnar Table**
   * 
   * @example
   * Heap Table
   */
  storageType?: string;
  /**
   * @remarks
   * This parameter is not returned.
   * 
   * @example
   * null
   */
  suggestedAction?: string;
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
   * The time when the table was last deleted, inserted, or updated.
   * 
   * @example
   * 2022-08-08T20:00:00Z
   */
  timeLastUpdated?: string;
  /**
   * @remarks
   * The time when the table was last vacuumed. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-08T16:00:00Z
   */
  timeLastVacuumed?: string;
  static names(): { [key: string]: string } {
    return {
      bloatCeoff: 'BloatCeoff',
      bloatSize: 'BloatSize',
      databaseName: 'DatabaseName',
      expectTableSize: 'ExpectTableSize',
      realTableSize: 'RealTableSize',
      schemaName: 'SchemaName',
      sequence: 'Sequence',
      storageType: 'StorageType',
      suggestedAction: 'SuggestedAction',
      tableName: 'TableName',
      timeLastUpdated: 'TimeLastUpdated',
      timeLastVacuumed: 'TimeLastVacuumed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bloatCeoff: 'string',
      bloatSize: 'string',
      databaseName: 'string',
      expectTableSize: 'string',
      realTableSize: 'string',
      schemaName: 'string',
      sequence: 'number',
      storageType: 'string',
      suggestedAction: 'string',
      tableName: 'string',
      timeLastUpdated: 'string',
      timeLastVacuumed: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

