// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter parameter.
   * 
   * >  For more information about the filter parameters, see the **Valid values of Key** section of this topic.
   * 
   * @example
   * delimiter
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter parameter.
   * 
   * @example
   * ,
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

export class DescribeSqlLogTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter parameters.
   */
  filters?: DescribeSqlLogTasksRequestFilters[];
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * r-bp1nti25tc7bq5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter is available only for instances that are deployed in the cluster architecture. You can specify this parameter to query the tasks of a specific node. If this parameter is not specified, the tasks of the primary node are returned by default.
   * 
   * @example
   * pi-bp1o58x3ib7e6z496
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeSqlLogTasksRequestFilters },
      instanceId: 'string',
      nodeId: 'string',
      pageNo: 'number',
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

