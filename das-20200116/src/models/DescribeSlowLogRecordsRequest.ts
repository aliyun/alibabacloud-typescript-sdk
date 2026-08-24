// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter.
   * 
   * > For more information, refer to the supplementary description.
   * 
   * @example
   * None
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter parameter.
   * 
   * @example
   * None
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort results in ascending order. Default value: **true**.
   * 
   * - **true**: ascending order.
   * - **false**: descending order.
   * 
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1634972640000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of filter conditions.
   */
  filters?: DescribeSlowLogRecordsRequestFilters[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-8vbk4xz99su8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-d9j9fe7wq7t9i****
   */
  nodeId?: string;
  /**
   * @remarks
   * - **MySQL** 
   *   - QueryTimeSeconds: query duration in seconds.
   *   - LockTimeSeconds: lock time in seconds.
   *   - RowsSent: rows sent.
   *   - RowsExamined: rows examined.
   * - **Redis**
   *   - QueryTime: query duration.
   *   - Timestamp: execution end time.
   * - **MongoDB**
   *   - QueryTime: query duration.
   *   - Timestamp: execution end time.
   *   - KeysExamined: keys examined.
   *   - DocExamined: documents examined.
   *   - ReturnNum: rows returned.
   * 
   * <notice>RDS PostgreSQL, PolarDB for PostgreSQL, and SQL Server do not support sorting.</notice>
   * 
   * @example
   * QueryTimeSeconds
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeSlowLogRecordsRequestFilters },
      instanceId: 'string',
      nodeId: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

