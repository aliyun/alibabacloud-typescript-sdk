// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDataTrackResultResponseBodyTrackResultEventList extends $dara.Model {
  /**
   * @remarks
   * The data records after you perform data operations in the database.
   */
  dataAfter?: string[];
  /**
   * @remarks
   * The data records before you perform data operations in the database.
   */
  dataBefore?: string[];
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @remarks
   * The length of the event content. Unit: bytes.
   * 
   * @example
   * 4324
   */
  eventLength?: number;
  /**
   * @remarks
   * The event time.
   * 
   * @example
   * 2023-04-23 10:25:47
   */
  eventTimestamp?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   **WRITE_ROWS**: indicates an INSERT operation.
   * *   **UPDATE_ROWS**: indicates an UPDATE operation.
   * *   **DELETE_ROWS**: indicates a DELETE operation.
   * *   **EXT_WRITE_ROWS**: indicates an INSERT operation, which is equivalent to WRITE_ROWS.
   * *   **EXT_UPDATE_ROWS**: indicates an UPDATE operation, which is equivalent to UPDATE_ROWS.
   * *   **EXT_DELETE_ROWS**: indicates a DELETE operation, which is equivalent to DELETE_ROWS.
   * 
   * @example
   * UPDATE_ROWS
   */
  eventType?: string;
  /**
   * @remarks
   * The SQL statements used to roll back the data change.
   * 
   * @example
   * -- Timestamp:2023-04-23 10:25:47 #1\\r\\nUPDATE `dc_test`.`tb_chunk_dml` SET `id`=1 , `gmt_create`=\\"2021-09-30T00:00:00\\" , `content`=\\"2023-03-30 14:51:50\\" , `c1`=\\"2023-04-17 13:42:03\\" , `c_id`=1 , `c13425`=\\"b\\\\\\"\\" , `c432532535`= null , `c1432`= null , `c143243253`= null , `c1432535`= null , `c43125325`= null , `c3425325`= null WHERE  (`id`=1)"
   */
  rollSQL?: string;
  static names(): { [key: string]: string } {
    return {
      dataAfter: 'DataAfter',
      dataBefore: 'DataBefore',
      eventId: 'EventId',
      eventLength: 'EventLength',
      eventTimestamp: 'EventTimestamp',
      eventType: 'EventType',
      rollSQL: 'RollSQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAfter: { 'type': 'array', 'itemType': 'string' },
      dataBefore: { 'type': 'array', 'itemType': 'string' },
      eventId: 'number',
      eventLength: 'number',
      eventTimestamp: 'string',
      eventType: 'string',
      rollSQL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataAfter)) {
      $dara.Model.validateArray(this.dataAfter);
    }
    if(Array.isArray(this.dataBefore)) {
      $dara.Model.validateArray(this.dataBefore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDataTrackResultResponseBodyTrackResultTableInfoListColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * basic_platform
   */
  columnName?: string;
  /**
   * @remarks
   * The position of the column.
   * 
   * @example
   * 1
   */
  columnPosition?: number;
  /**
   * @remarks
   * The data type of the column. Examples: BIGINT, INT, and VARCHAR.
   * 
   * @example
   * BIGINT
   */
  columnType?: string;
  /**
   * @remarks
   * Indicates whether the column is a virtual column. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fictive?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnPosition: 'ColumnPosition',
      columnType: 'ColumnType',
      fictive: 'Fictive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnPosition: 'number',
      columnType: 'string',
      fictive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDataTrackResultResponseBodyTrackResultTableInfoList extends $dara.Model {
  /**
   * @remarks
   * The information about columns.
   */
  columns?: SearchDataTrackResultResponseBodyTrackResultTableInfoListColumns[];
  /**
   * @remarks
   * The description of the column.
   * 
   * @example
   * auto-description
   */
  description?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * prod_eb_vas
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * import_table_test1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      description: 'Description',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': SearchDataTrackResultResponseBodyTrackResultTableInfoListColumns },
      description: 'string',
      schemaName: 'string',
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

export class SearchDataTrackResultResponseBodyTrackResult extends $dara.Model {
  /**
   * @remarks
   * The details of the event logs.
   */
  eventList?: SearchDataTrackResultResponseBodyTrackResultEventList[];
  /**
   * @remarks
   * The metadata of tables for which you track data operations.
   */
  tableInfoList?: SearchDataTrackResultResponseBodyTrackResultTableInfoList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 109
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      tableInfoList: 'TableInfoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': SearchDataTrackResultResponseBodyTrackResultEventList },
      tableInfoList: { 'type': 'array', 'itemType': SearchDataTrackResultResponseBodyTrackResultTableInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    if(Array.isArray(this.tableInfoList)) {
      $dara.Model.validateArray(this.tableInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDataTrackResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The parsing result of the data tracking task.
   */
  trackResult?: SearchDataTrackResultResponseBodyTrackResult;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      trackResult: 'TrackResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      trackResult: SearchDataTrackResultResponseBodyTrackResult,
    };
  }

  validate() {
    if(this.trackResult && typeof (this.trackResult as any).validate === 'function') {
      (this.trackResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

