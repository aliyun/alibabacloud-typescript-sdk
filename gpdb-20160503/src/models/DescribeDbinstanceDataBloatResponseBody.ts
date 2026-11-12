// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDataBloatResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The data bloat coefficient. The bloat coefficient is calculated by using the following formula:
   * 
   * Number of dead rows counted by the system / Number of live rows counted by the system.
   * 
   * @example
   * 1.03
   */
  bloatCeoff?: string;
  /**
   * @remarks
   * The size of the bloated data, which indicates the amount of space that can be reclaimed.
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
   * The expected table size.
   * 
   * The expected table size is the estimated size of the table when no data bloat occurs.
   * 
   * @example
   * 1MB
   */
  expectTableSize?: string;
  /**
   * @remarks
   * The actual table size.
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
   * - **Heap Table**: heap table
   * - **Append-Only Heap Table**: append-only heap table
   * - **Append-Only Columnar Table**: column-oriented table
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
   * The time when the table was last updated by a DELETE, INSERT, or UPDATE operation.
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

export class DescribeDBInstanceDataBloatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data bloat details.
   */
  items?: DescribeDBInstanceDataBloatResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tables. The total number of pages is calculated by dividing this value by the page size.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceDataBloatResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

