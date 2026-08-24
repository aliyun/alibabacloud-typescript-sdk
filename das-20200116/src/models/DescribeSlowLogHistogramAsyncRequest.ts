// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogHistogramAsyncRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter.
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

export class DescribeSlowLogHistogramAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Specify a UNIX timestamp in milliseconds.
   * > The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1662518540764
   */
  endTime?: number;
  /**
   * @remarks
   * The list of query filter conditions.
   */
  filters?: DescribeSlowLogHistogramAsyncRequestFilters[];
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * > For PolarDB for MySQL instances, specify the node ID.
   * 
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The start time of the query. Specify a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
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
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeSlowLogHistogramAsyncRequestFilters },
      instanceId: 'string',
      nodeId: 'string',
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

