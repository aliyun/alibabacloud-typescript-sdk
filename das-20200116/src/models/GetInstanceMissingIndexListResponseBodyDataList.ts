// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceMissingIndexListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The average cost savings.
   * 
   * @example
   * 4.67
   */
  avgTotalUserCost?: number;
  /**
   * @remarks
   * The performance improvement, in percentage.
   * 
   * @example
   * 98.3
   */
  avgUserImpact?: number;
  /**
   * @remarks
   * The statement used to create the missing indexes.
   * 
   * @example
   * CREATE INDEX [IX_CLOUDDBA_school_dbo_stu@col1_@col2] ON [school].[dbo].[stu]([col1],[col2],[col3]) INCLUDE ([col4],[col5]) WITH (FILLFACTOR = 90, ONLINE = OFF);
   */
  createIndex?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * school
   */
  databaseName?: string;
  /**
   * @remarks
   * The index columns included in the equal operation.
   * 
   * @example
   * col1,col2,col3
   */
  equalityColumns?: string;
  /**
   * @remarks
   * The columns on which indexes are missing.
   * 
   * @example
   * col3,col4
   */
  includedColumns?: string;
  /**
   * @remarks
   * The number of indexes.
   * 
   * @example
   * 1
   */
  indexCount?: number;
  /**
   * @remarks
   * The index columns included in the not equal operation.
   * 
   * @example
   * 2392
   */
  inequalityColumns?: string;
  /**
   * @remarks
   * The last seek time of a user.
   * 
   * @example
   * 1702023327000
   */
  lastUserSeek?: number;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * stu
   */
  objectName?: string;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 5025
   */
  reservedPages?: number;
  /**
   * @remarks
   * The table size.
   * 
   * @example
   * 39.26
   */
  reservedSize?: number;
  /**
   * @remarks
   * The number of table rows.
   * 
   * @example
   * 226945
   */
  rowCount?: number;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * dbo
   */
  schemaName?: string;
  /**
   * @remarks
   * The number of scans.
   * 
   * @example
   * 0
   */
  systemScans?: number;
  /**
   * @remarks
   * The number of seeks.
   * 
   * @example
   * 0
   */
  systemSeeks?: number;
  /**
   * @remarks
   * The number of compilations.
   * 
   * @example
   * 2392
   */
  uniqueCompiles?: number;
  /**
   * @remarks
   * The number of scans performed by users.
   * 
   * @example
   * 0
   */
  userScans?: number;
  /**
   * @remarks
   * The number of seeks performed by users.
   * 
   * @example
   * 1081
   */
  userSeeks?: number;
  static names(): { [key: string]: string } {
    return {
      avgTotalUserCost: 'AvgTotalUserCost',
      avgUserImpact: 'AvgUserImpact',
      createIndex: 'CreateIndex',
      databaseName: 'DatabaseName',
      equalityColumns: 'EqualityColumns',
      includedColumns: 'IncludedColumns',
      indexCount: 'IndexCount',
      inequalityColumns: 'InequalityColumns',
      lastUserSeek: 'LastUserSeek',
      objectName: 'ObjectName',
      reservedPages: 'ReservedPages',
      reservedSize: 'ReservedSize',
      rowCount: 'RowCount',
      schemaName: 'SchemaName',
      systemScans: 'SystemScans',
      systemSeeks: 'SystemSeeks',
      uniqueCompiles: 'UniqueCompiles',
      userScans: 'UserScans',
      userSeeks: 'UserSeeks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTotalUserCost: 'number',
      avgUserImpact: 'number',
      createIndex: 'string',
      databaseName: 'string',
      equalityColumns: 'string',
      includedColumns: 'string',
      indexCount: 'number',
      inequalityColumns: 'string',
      lastUserSeek: 'number',
      objectName: 'string',
      reservedPages: 'number',
      reservedSize: 'number',
      rowCount: 'number',
      schemaName: 'string',
      systemScans: 'number',
      systemSeeks: 'number',
      uniqueCompiles: 'number',
      userScans: 'number',
      userSeeks: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

