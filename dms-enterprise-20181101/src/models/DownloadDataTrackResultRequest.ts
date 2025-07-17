// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadDataTrackResultRequestColumnFilter extends $dara.Model {
  /**
   * @remarks
   * The end value of the range used in the filter condition. This parameter takes effect only when Operator is set to BETWEEN.
   * 
   * @example
   * 10
   */
  betweenEnd?: string;
  /**
   * @remarks
   * The start value of the range used in the filter condition. This parameter takes effect only when Operator is set to BETWEEN.
   * 
   * @example
   * 1
   */
  betweenStart?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * account_name
   */
  columnName?: string;
  /**
   * @remarks
   * The IN list used in the filter condition.
   */
  inList?: string[];
  /**
   * @remarks
   * The type of the operator used to configure the filter condition. Valid values:
   * 
   * *   **EQUAL**: retrieves the column whose value is equal to the specified value.
   * *   **NOT_EQUAL**: retrieves the column whose value is not equal to the specified value.
   * *   **IN**: retrieves the column whose value is in the IN list.
   * *   **BETWEEN**: retrieves the column whose value is in the specified range.
   * *   **LESS**: retrieves the column whose value is less than the specified value.
   * *   **MORE**: retrieves the column whose value is greater than the specified value.
   * *   **NOT_IN**: retrieves the column whose value is not in the IN list.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * The value used in the filter condition.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      betweenEnd: 'BetweenEnd',
      betweenStart: 'BetweenStart',
      columnName: 'ColumnName',
      inList: 'InList',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      betweenEnd: 'string',
      betweenStart: 'string',
      columnName: 'string',
      inList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inList)) {
      $dara.Model.validateArray(this.inList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDataTrackResultRequest extends $dara.Model {
  /**
   * @remarks
   * The condition to filter columns.
   */
  columnFilter?: DownloadDataTrackResultRequestColumnFilter;
  /**
   * @remarks
   * The IDs of the events.
   */
  eventIdList?: number[];
  /**
   * @remarks
   * The end time of the time range in which you want to track data operations. The time must be specified in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2023-04-23 10:00:00
   */
  filterEndTime?: string;
  /**
   * @remarks
   * The start time of the time range in which you want to track data operations. The time must be specified in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2023-04-23 00:00:00
   */
  filterStartTime?: string;
  /**
   * @remarks
   * The names of the tables for which you want to track data operations.
   */
  filterTableList?: string[];
  /**
   * @remarks
   * The types of data operations that you want to track.
   */
  filterTypeList?: string[];
  /**
   * @remarks
   * The ID of the ticket. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to obtain the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 406****
   */
  orderId?: number;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * *   **REVERSE**: undoes or rolls back an executed SQL statement, which is equivalent to the UNDO SQL statement.
   * *   **FORWARD**: redoes or re-executes an SQL statement that failed to be executed, which is equivalent to the REDO SQL statement.
   * 
   * This parameter is required.
   * 
   * @example
   * REVERSE
   */
  rollbackSQLType?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnFilter: 'ColumnFilter',
      eventIdList: 'EventIdList',
      filterEndTime: 'FilterEndTime',
      filterStartTime: 'FilterStartTime',
      filterTableList: 'FilterTableList',
      filterTypeList: 'FilterTypeList',
      orderId: 'OrderId',
      rollbackSQLType: 'RollbackSQLType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnFilter: DownloadDataTrackResultRequestColumnFilter,
      eventIdList: { 'type': 'array', 'itemType': 'number' },
      filterEndTime: 'string',
      filterStartTime: 'string',
      filterTableList: { 'type': 'array', 'itemType': 'string' },
      filterTypeList: { 'type': 'array', 'itemType': 'string' },
      orderId: 'number',
      rollbackSQLType: 'string',
      tid: 'number',
    };
  }

  validate() {
    if(this.columnFilter && typeof (this.columnFilter as any).validate === 'function') {
      (this.columnFilter as any).validate();
    }
    if(Array.isArray(this.eventIdList)) {
      $dara.Model.validateArray(this.eventIdList);
    }
    if(Array.isArray(this.filterTableList)) {
      $dara.Model.validateArray(this.filterTableList);
    }
    if(Array.isArray(this.filterTypeList)) {
      $dara.Model.validateArray(this.filterTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

