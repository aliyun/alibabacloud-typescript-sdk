// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogRecordsRequestFilters extends $dara.Model {
  /**
   * @example
   * filters
   */
  key?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 1732069466000
   */
  endTime?: number;
  filters?: DescribeErrorLogRecordsRequestFilters[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-bp1u5mas9exx7****
   */
  instanceId?: string;
  /**
   * @example
   * pi-bp16v3824rt73****
   */
  nodeId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * db
   */
  role?: string;
  /**
   * @remarks
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

