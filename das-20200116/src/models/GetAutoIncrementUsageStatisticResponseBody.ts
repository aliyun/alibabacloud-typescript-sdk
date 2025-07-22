// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList extends $dara.Model {
  /**
   * @remarks
   * The latest auto-increment ID.
   * 
   * @example
   * 2147483647
   */
  autoIncrementCurrentValue?: number;
  /**
   * @remarks
   * The usage ratio of auto-increment IDs.
   * 
   * @example
   * 1
   */
  autoIncrementRatio?: number;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db01
   */
  dbName?: string;
  /**
   * @remarks
   * The maximum auto-increment ID that is supported by the current data type.
   * 
   * @example
   * 2147483647
   */
  maximumValue?: number;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementCurrentValue: 'AutoIncrementCurrentValue',
      autoIncrementRatio: 'AutoIncrementRatio',
      columnName: 'ColumnName',
      dbName: 'DbName',
      maximumValue: 'MaximumValue',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementCurrentValue: 'number',
      autoIncrementRatio: 'number',
      columnName: 'string',
      dbName: 'string',
      maximumValue: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoIncrementUsageStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage details of auto-increment IDs.
   */
  autoIncrementUsageList?: GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList[];
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * the given database name list invalid, none of the database names in the list exist on the instance
   */
  errorInfo?: string;
  /**
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  finish?: boolean;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **RUNNING**: The task is being executed.
   * *   **SUCCESS**: The task succeeds.
   * *   **FAIL**: The task fails.
   * 
   * @example
   * INIT
   */
  taskStatus?: string;
  /**
   * @remarks
   * The time when the request was made. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1697183353000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      autoIncrementUsageList: 'AutoIncrementUsageList',
      errorInfo: 'ErrorInfo',
      finish: 'Finish',
      taskStatus: 'TaskStatus',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementUsageList: { 'type': 'array', 'itemType': GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList },
      errorInfo: 'string',
      finish: 'boolean',
      taskStatus: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoIncrementUsageList)) {
      $dara.Model.validateArray(this.autoIncrementUsageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoIncrementUsageStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAutoIncrementUsageStatisticResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request is successful, **Successful** is returned. Otherwise, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A74B755-98B7-59DB-8724-1321B394****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAutoIncrementUsageStatisticResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

