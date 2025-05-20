// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsRequestFilters } from "./DescribeSlowLogRecordsRequestFilters";


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634972640000
   */
  endTime?: number;
  filters?: DescribeSlowLogRecordsRequestFilters[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-8vbk4xz99su8****
   */
  instanceId?: string;
  /**
   * @example
   * pi-d9j9fe7wq7t9i****
   */
  nodeId?: string;
  /**
   * @example
   * QueryTimeSeconds
   */
  orderBy?: string;
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
   * @remarks
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

