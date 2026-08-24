// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogRecordsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter. Set this parameter to filters.
   * 
   * @example
   * filters
   */
  key?: string;
  /**
   * @remarks
   * The error log content to filter.
   * 
   * @example
   * deadlock
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

export class DescribeErrorLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The value is in the format of a UNIX timestamp. Unit: milliseconds.
   * >Notice: The value is of the Long type. Precision loss may occur during serialization/deserialization. The value must not be greater than 9007199254740991.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732069466000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions.
   * 
   * > Filtering is supported only for error logs of ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, PolarDB for MySQL, PolarDB for PostgreSQL, and PolarDB for PostgreSQL (Compatible with Oracle).
   */
  filters?: DescribeErrorLogRecordsRequestFilters[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1u5mas9exx7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-bp16v3824rt73****
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The node role. Valid values:
   * 
   * - db
   * - mongos
   * 
   * > This parameter is supported only for ApsaraDB for MongoDB instances.
   * 
   * @example
   * db
   */
  role?: string;
  /**
   * @remarks
   * The start time of the query. The value is in the format of a UNIX timestamp. Unit: milliseconds.
   * 
   * >Notice: The value is of the Long type. Precision loss may occur during serialization/deserialization. The value must not be greater than 9007199254740991.
   * 
   * This parameter is required.
   * 
   * @example
   * 1731983066000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      role: 'Role',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeErrorLogRecordsRequestFilters },
      instanceId: 'string',
      nodeId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      role: 'string',
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

